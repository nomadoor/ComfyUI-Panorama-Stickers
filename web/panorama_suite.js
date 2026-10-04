import * as Ul from "../../scripts/app.js";
import { app as cr } from "../../scripts/app.js";
import { api as Zt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ud(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Dt = {}, fa = [], ni = () => {
}, Q0 = () => !1, Uc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yc = (e) => e.startsWith("onUpdate:"), Vn = Object.assign, Yd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, KS = Object.prototype.hasOwnProperty, kt = (e, t) => KS.call(e, t), et = Array.isArray, da = (e) => Zs(e) === "[object Map]", ey = (e) => Zs(e) === "[object Set]", ng = (e) => Zs(e) === "[object Date]", ot = (e) => typeof e == "function", sn = (e) => typeof e == "string", oi = (e) => typeof e == "symbol", Ot = (e) => e !== null && typeof e == "object", ty = (e) => (Ot(e) || ot(e)) && ot(e.then) && ot(e.catch), ny = Object.prototype.toString, Zs = (e) => ny.call(e), WS = (e) => Zs(e).slice(8, -1), ry = (e) => Zs(e) === "[object Object]", Xd = (e) => sn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ms = /* @__PURE__ */ Ud(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, BS = /-\w/g, Wn = Xc(
  (e) => e.replace(BS, (t) => t.slice(1).toUpperCase())
), US = /\B([A-Z])/g, To = Xc(
  (e) => e.replace(US, "-$1").toLowerCase()
), qc = Xc((e) => e.charAt(0).toUpperCase() + e.slice(1)), of = Xc(
  (e) => e ? `on${qc(e)}` : ""
), ei = (e, t) => !Object.is(e, t), Yl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, iy = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, qd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let rg;
const Jc = () => rg || (rg = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (et(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = sn(r) ? JS(r) : Et(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (sn(e) || Ot(e))
    return e;
}
const YS = /;(?![^(]*\))/g, XS = /:([^]+)/, qS = /\/\*[^]*?\*\//g;
function JS(e) {
  const t = {};
  return e.replace(qS, "").split(YS).forEach((n) => {
    if (n) {
      const r = n.split(XS);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function pt(e) {
  let t = "";
  if (sn(e))
    t = e;
  else if (et(e))
    for (let n = 0; n < e.length; n++) {
      const r = pt(e[n]);
      r && (t += r + " ");
    }
  else if (Ot(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ZS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", QS = /* @__PURE__ */ Ud(ZS);
function oy(e) {
  return !!e || e === "";
}
function ex(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Jd(e[r], t[r]);
  return n;
}
function Jd(e, t) {
  if (e === t) return !0;
  let n = ng(e), r = ng(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = oi(e), r = oi(t), n || r)
    return e === t;
  if (n = et(e), r = et(t), n || r)
    return n && r ? ex(e, t) : !1;
  if (n = Ot(e), r = Ot(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Jd(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ay = (e) => !!(e && e.__v_isRef === !0), rt = (e) => sn(e) ? e : e == null ? "" : et(e) || Ot(e) && (e.toString === ny || !ot(e.toString)) ? ay(e) ? rt(e.value) : JSON.stringify(e, sy, 2) : String(e), sy = (e, t) => ay(t) ? sy(e, t.value) : da(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[af(r, a) + " =>"] = o, n),
    {}
  )
} : ey(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => af(n))
} : oi(t) ? af(t) : Ot(t) && !et(t) && !ry(t) ? String(t) : t, af = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    oi(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qn;
class tx {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Qn, !t && Qn && (this.index = (Qn.scopes || (Qn.scopes = [])).push(
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
      const n = Qn;
      try {
        return Qn = this, t();
      } finally {
        Qn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Qn, Qn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Qn = this.prevScope, this.prevScope = void 0);
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
function nx() {
  return Qn;
}
let Vt;
const sf = /* @__PURE__ */ new WeakSet();
class ly {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qn && Qn.active && Qn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sf.has(this) && (sf.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || uy(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ig(this), fy(this);
    const t = Vt, n = Rr;
    Vt = this, Rr = !0;
    try {
      return this.fn();
    } finally {
      dy(this), Vt = t, Rr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ep(t);
      this.deps = this.depsTail = void 0, ig(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sf.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ed(this) && this.run();
  }
  get dirty() {
    return ed(this);
  }
}
let cy = 0, Ns, Ps;
function uy(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ps, Ps = e;
    return;
  }
  e.next = Ns, Ns = e;
}
function Zd() {
  cy++;
}
function Qd() {
  if (--cy > 0)
    return;
  if (Ps) {
    let t = Ps;
    for (Ps = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ns; ) {
    let t = Ns;
    for (Ns = void 0; t; ) {
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
function fy(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dy(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ep(r), rx(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function ed(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (py(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function py(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ls) || (e.globalVersion = Ls, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ed(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Vt, r = Rr;
  Vt = e, Rr = !0;
  try {
    fy(e);
    const o = e.fn(e._value);
    (t.version === 0 || ei(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Vt = n, Rr = r, dy(e), e.flags &= -3;
  }
}
function ep(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      ep(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rx(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rr = !0;
const hy = [];
function ki() {
  hy.push(Rr), Rr = !1;
}
function Mi() {
  const e = hy.pop();
  Rr = e === void 0 ? !0 : e;
}
function ig(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Vt;
    Vt = void 0;
    try {
      t();
    } finally {
      Vt = n;
    }
  }
}
let Ls = 0;
class ix {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Vt || !Rr || Vt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Vt)
      n = this.activeLink = new ix(Vt, this), Vt.deps ? (n.prevDep = Vt.depsTail, Vt.depsTail.nextDep = n, Vt.depsTail = n) : Vt.deps = Vt.depsTail = n, my(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Vt.depsTail, n.nextDep = void 0, Vt.depsTail.nextDep = n, Vt.depsTail = n, Vt.deps === n && (Vt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ls++, this.notify(t);
  }
  notify(t) {
    Zd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qd();
    }
  }
}
function my(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        my(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const td = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ Symbol(
  ""
), nd = /* @__PURE__ */ Symbol(
  ""
), Rs = /* @__PURE__ */ Symbol(
  ""
);
function Fn(e, t, n) {
  if (Rr && Vt) {
    let r = td.get(e);
    r || td.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new tp()), o.map = r, o.key = n), o.track();
  }
}
function vi(e, t, n, r, o, a) {
  const c = td.get(e);
  if (!c) {
    Ls++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Zd(), t === "clear")
    c.forEach(u);
  else {
    const d = et(e), b = d && Xd(n);
    if (d && n === "length") {
      const g = Number(r);
      c.forEach((v, S) => {
        (S === "length" || S === Rs || !oi(S) && S >= g) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Rs)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(ko)), da(e) && u(c.get(nd)));
          break;
        case "delete":
          d || (u(c.get(ko)), da(e) && u(c.get(nd)));
          break;
        case "set":
          da(e) && u(c.get(ko));
          break;
      }
  }
  Qd();
}
function Zo(e) {
  const t = /* @__PURE__ */ xt(e);
  return t === e ? t : (Fn(t, "iterate", Rs), /* @__PURE__ */ wr(e) ? t : t.map(Vr));
}
function Zc(e) {
  return Fn(e = /* @__PURE__ */ xt(e), "iterate", Rs), e;
}
function Zr(e, t) {
  return /* @__PURE__ */ Ni(e) ? xa(/* @__PURE__ */ Mo(e) ? Vr(t) : t) : Vr(t);
}
const ox = {
  __proto__: null,
  [Symbol.iterator]() {
    return lf(this, Symbol.iterator, (e) => Zr(this, e));
  },
  concat(...e) {
    return Zo(this).concat(
      ...e.map((t) => et(t) ? Zo(t) : t)
    );
  },
  entries() {
    return lf(this, "entries", (e) => (e[1] = Zr(this, e[1]), e));
  },
  every(e, t) {
    return di(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return di(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Zr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return di(
      this,
      "find",
      e,
      t,
      (n) => Zr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return di(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return di(
      this,
      "findLast",
      e,
      t,
      (n) => Zr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return di(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return di(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cf(this, "includes", e);
  },
  indexOf(...e) {
    return cf(this, "indexOf", e);
  },
  join(e) {
    return Zo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cf(this, "lastIndexOf", e);
  },
  map(e, t) {
    return di(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ss(this, "pop");
  },
  push(...e) {
    return ss(this, "push", e);
  },
  reduce(e, ...t) {
    return og(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return og(this, "reduceRight", e, t);
  },
  shift() {
    return ss(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return di(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ss(this, "splice", e);
  },
  toReversed() {
    return Zo(this).toReversed();
  },
  toSorted(e) {
    return Zo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ss(this, "unshift", e);
  },
  values() {
    return lf(this, "values", (e) => Zr(this, e));
  }
};
function lf(e, t, n) {
  const r = Zc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ wr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const ax = Array.prototype;
function di(e, t, n, r, o, a) {
  const c = Zc(e), u = c !== e && !/* @__PURE__ */ wr(e), d = c[t];
  if (d !== ax[t]) {
    const v = d.apply(e, a);
    return u ? Vr(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, S) {
    return n.call(this, Zr(e, v), S, e);
  } : n.length > 2 && (b = function(v, S) {
    return n.call(this, v, S, e);
  }));
  const g = d.call(c, b, r);
  return u && o ? o(g) : g;
}
function og(e, t, n, r) {
  const o = Zc(e), a = o !== e && !/* @__PURE__ */ wr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, g, v) {
    return u && (u = !1, b = Zr(e, b)), n.call(this, b, Zr(e, g), v, e);
  }) : n.length > 3 && (c = function(b, g, v) {
    return n.call(this, b, g, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Zr(e, d) : d;
}
function cf(e, t, n) {
  const r = /* @__PURE__ */ xt(e);
  Fn(r, "iterate", Rs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ip(n[0]) ? (n[0] = /* @__PURE__ */ xt(n[0]), r[t](...n)) : o;
}
function ss(e, t, n = []) {
  ki(), Zd();
  const r = (/* @__PURE__ */ xt(e))[t].apply(e, n);
  return Qd(), Mi(), r;
}
const sx = /* @__PURE__ */ Ud("__proto__,__v_isRef,__isVue"), gy = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(oi)
);
function lx(e) {
  oi(e) || (e = String(e));
  const t = /* @__PURE__ */ xt(this);
  return Fn(t, "has", e), t.hasOwnProperty(e);
}
class yy {
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
      return r === (o ? a ? bx : wy : a ? _y : vy).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = et(t);
    if (!o) {
      let d;
      if (c && (d = ox[n]))
        return d;
      if (n === "hasOwnProperty")
        return lx;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Rn(t) ? t : r
    );
    if ((oi(n) ? gy.has(n) : sx(n)) || (o || Fn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ Rn(u)) {
      const d = c && Xd(n) ? u : u.value;
      return o && Ot(d) ? /* @__PURE__ */ id(d) : d;
    }
    return Ot(u) ? o ? /* @__PURE__ */ id(u) : /* @__PURE__ */ Aa(u) : u;
  }
}
class by extends yy {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = et(t) && Xd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Ni(a);
      if (!/* @__PURE__ */ wr(r) && !/* @__PURE__ */ Ni(r) && (a = /* @__PURE__ */ xt(a), r = /* @__PURE__ */ xt(r)), !c && /* @__PURE__ */ Rn(a) && !/* @__PURE__ */ Rn(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : kt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Rn(t) ? t : o
    );
    return t === /* @__PURE__ */ xt(o) && (u ? ei(r, a) && vi(t, "set", n, r) : vi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = kt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && vi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!oi(n) || !gy.has(n)) && Fn(t, "has", n), r;
  }
  ownKeys(t) {
    return Fn(
      t,
      "iterate",
      et(t) ? "length" : ko
    ), Reflect.ownKeys(t);
  }
}
class cx extends yy {
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
const ux = /* @__PURE__ */ new by(), fx = /* @__PURE__ */ new cx(), dx = /* @__PURE__ */ new by(!0);
const rd = (e) => e, Cl = (e) => Reflect.getPrototypeOf(e);
function px(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ xt(o), c = da(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), g = n ? rd : t ? xa : Vr;
    return !t && Fn(
      a,
      "iterate",
      d ? nd : ko
    ), Vn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: S } = b.next();
          return S ? { value: v, done: S } : {
            value: u ? [g(v[0]), g(v[1])] : g(v),
            done: S
          };
        }
      }
    );
  };
}
function Il(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hx(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ xt(a), u = /* @__PURE__ */ xt(o);
      e || (ei(o, u) && Fn(c, "get", o), Fn(c, "get", u));
      const { has: d } = Cl(c), b = t ? rd : e ? xa : Vr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Fn(/* @__PURE__ */ xt(o), "iterate", ko), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ xt(a), u = /* @__PURE__ */ xt(o);
      return e || (ei(o, u) && Fn(c, "has", o), Fn(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ xt(u), b = t ? rd : e ? xa : Vr;
      return !e && Fn(d, "iterate", ko), u.forEach((g, v) => o.call(a, b(g), b(v), c));
    }
  };
  return Vn(
    n,
    e ? {
      add: Il("add"),
      set: Il("set"),
      delete: Il("delete"),
      clear: Il("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ xt(this), c = Cl(a), u = /* @__PURE__ */ xt(o), d = !t && !/* @__PURE__ */ wr(o) && !/* @__PURE__ */ Ni(o) ? u : o;
        return c.has.call(a, d) || ei(o, d) && c.has.call(a, o) || ei(u, d) && c.has.call(a, u) || (a.add(d), vi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ wr(a) && !/* @__PURE__ */ Ni(a) && (a = /* @__PURE__ */ xt(a));
        const c = /* @__PURE__ */ xt(this), { has: u, get: d } = Cl(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ xt(o), b = u.call(c, o));
        const g = d.call(c, o);
        return c.set(o, a), b ? ei(a, g) && vi(c, "set", o, a) : vi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ xt(this), { has: c, get: u } = Cl(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ xt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && vi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ xt(this), a = o.size !== 0, c = o.clear();
        return a && vi(
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
    n[o] = px(o, e, t);
  }), n;
}
function np(e, t) {
  const n = hx(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    kt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const mx = {
  get: /* @__PURE__ */ np(!1, !1)
}, gx = {
  get: /* @__PURE__ */ np(!1, !0)
}, yx = {
  get: /* @__PURE__ */ np(!0, !1)
};
const vy = /* @__PURE__ */ new WeakMap(), _y = /* @__PURE__ */ new WeakMap(), wy = /* @__PURE__ */ new WeakMap(), bx = /* @__PURE__ */ new WeakMap();
function vx(e) {
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
function _x(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vx(WS(e));
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  return /* @__PURE__ */ Ni(e) ? e : rp(
    e,
    !1,
    ux,
    mx,
    vy
  );
}
// @__NO_SIDE_EFFECTS__
function wx(e) {
  return rp(
    e,
    !1,
    dx,
    gx,
    _y
  );
}
// @__NO_SIDE_EFFECTS__
function id(e) {
  return rp(
    e,
    !0,
    fx,
    yx,
    wy
  );
}
function rp(e, t, n, r, o) {
  if (!Ot(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = _x(e);
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
function Mo(e) {
  return /* @__PURE__ */ Ni(e) ? /* @__PURE__ */ Mo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ip(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ xt(t) : e;
}
function Sx(e) {
  return !kt(e, "__v_skip") && Object.isExtensible(e) && iy(e, "__v_skip", !0), e;
}
const Vr = (e) => Ot(e) ? /* @__PURE__ */ Aa(e) : e, xa = (e) => Ot(e) ? /* @__PURE__ */ id(e) : e;
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return Sy(e, !1);
}
// @__NO_SIDE_EFFECTS__
function mc(e) {
  return Sy(e, !0);
}
function Sy(e, t) {
  return /* @__PURE__ */ Rn(e) ? e : new xx(e, t);
}
class xx {
  constructor(t, n) {
    this.dep = new tp(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ xt(t), this._value = n ? t : Vr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ wr(t) || /* @__PURE__ */ Ni(t);
    t = r ? t : /* @__PURE__ */ xt(t), ei(t, n) && (this._rawValue = t, this._value = r ? t : Vr(t), this.dep.trigger());
  }
}
function Ze(e) {
  return /* @__PURE__ */ Rn(e) ? e.value : e;
}
const kx = {
  get: (e, t, n) => t === "__v_raw" ? e : Ze(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ Rn(o) && !/* @__PURE__ */ Rn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function xy(e) {
  return /* @__PURE__ */ Mo(e) ? e : new Proxy(e, kx);
}
class Mx {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tp(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ls - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Vt !== this)
      return uy(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return py(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Nx(e, t, n = !1) {
  let r, o;
  return ot(e) ? r = e : (r = e.get, o = e.set), new Mx(r, o, n);
}
const El = {}, gc = /* @__PURE__ */ new WeakMap();
let bo;
function Px(e, t = !1, n = bo) {
  if (n) {
    let r = gc.get(n);
    r || gc.set(n, r = []), r.push(e);
  }
}
function Ax(e, t, n = Dt) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ wr(V) || o === !1 || o === 0 ? _i(V, 1) : _i(V);
  let g, v, S, M, k = !1, N = !1;
  if (/* @__PURE__ */ Rn(e) ? (v = () => e.value, k = /* @__PURE__ */ wr(e)) : /* @__PURE__ */ Mo(e) ? (v = () => b(e), k = !0) : et(e) ? (N = !0, k = e.some((V) => /* @__PURE__ */ Mo(V) || /* @__PURE__ */ wr(V)), v = () => e.map((V) => {
    if (/* @__PURE__ */ Rn(V))
      return V.value;
    if (/* @__PURE__ */ Mo(V))
      return b(V);
    if (ot(V))
      return d ? d(V, 2) : V();
  })) : ot(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (S) {
      ki();
      try {
        S();
      } finally {
        Mi();
      }
    }
    const V = bo;
    bo = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      bo = V;
    }
  } : v = ni, t && o) {
    const V = v, w = o === !0 ? 1 / 0 : o;
    v = () => _i(V(), w);
  }
  const A = nx(), O = () => {
    g.stop(), A && A.active && Yd(A.effects, g);
  };
  if (a && t) {
    const V = t;
    t = (...w) => {
      V(...w), O();
    };
  }
  let $ = N ? new Array(e.length).fill(El) : El;
  const R = (V) => {
    if (!(!(g.flags & 1) || !g.dirty && !V))
      if (t) {
        const w = g.run();
        if (o || k || (N ? w.some((z, W) => ei(z, $[W])) : ei(w, $))) {
          S && S();
          const z = bo;
          bo = g;
          try {
            const W = [
              w,
              // pass undefined as the old value when it's changed for the first time
              $ === El ? void 0 : N && $[0] === El ? [] : $,
              M
            ];
            $ = w, d ? d(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            bo = z;
          }
        }
      } else
        g.run();
  };
  return u && u(R), g = new ly(v), g.scheduler = c ? () => c(R, !1) : R, M = (V) => Px(V, !1, g), S = g.onStop = () => {
    const V = gc.get(g);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const w of V) w();
      gc.delete(g);
    }
  }, t ? r ? R(!0) : $ = g.run() : c ? c(R.bind(null, !0), !0) : g.run(), O.pause = g.pause.bind(g), O.resume = g.resume.bind(g), O.stop = O, O;
}
function _i(e, t = 1 / 0, n) {
  if (t <= 0 || !Ot(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Rn(e))
    _i(e.value, t, n);
  else if (et(e))
    for (let r = 0; r < e.length; r++)
      _i(e[r], t, n);
  else if (ey(e) || da(e))
    e.forEach((r) => {
      _i(r, t, n);
    });
  else if (ry(e)) {
    for (const r in e)
      _i(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && _i(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Qc(o, t, n);
  }
}
function ai(e, t, n, r) {
  if (ot(e)) {
    const o = Qs(e, t, n, r);
    return o && ty(o) && o.catch((a) => {
      Qc(a, t, n);
    }), o;
  }
  if (et(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(ai(e[a], t, n, r));
    return o;
  }
}
function Qc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Dt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const g = u.ec;
      if (g) {
        for (let v = 0; v < g.length; v++)
          if (g[v](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ki(), Qs(a, null, 10, [
        e,
        d,
        b
      ]), Mi();
      return;
    }
  }
  Cx(e, n, o, r, c);
}
function Cx(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Gn = [];
let Jr = -1;
const pa = [];
let Gi = null, ia = 0;
const ky = /* @__PURE__ */ Promise.resolve();
let yc = null;
function eu(e) {
  const t = yc || ky;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ix(e) {
  let t = Jr + 1, n = Gn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Gn[r], a = Vs(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function op(e) {
  if (!(e.flags & 1)) {
    const t = Vs(e), n = Gn[Gn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vs(n) ? Gn.push(e) : Gn.splice(Ix(t), 0, e), e.flags |= 1, My();
  }
}
function My() {
  yc || (yc = ky.then(Py));
}
function Ex(e) {
  et(e) ? pa.push(...e) : Gi && e.id === -1 ? Gi.splice(ia + 1, 0, e) : e.flags & 1 || (pa.push(e), e.flags |= 1), My();
}
function ag(e, t, n = Jr + 1) {
  for (; n < Gn.length; n++) {
    const r = Gn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Gn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ny(e) {
  if (pa.length) {
    const t = [...new Set(pa)].sort(
      (n, r) => Vs(n) - Vs(r)
    );
    if (pa.length = 0, Gi) {
      Gi.push(...t);
      return;
    }
    for (Gi = t, ia = 0; ia < Gi.length; ia++) {
      const n = Gi[ia];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Gi = null, ia = 0;
  }
}
const Vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Py(e) {
  try {
    for (Jr = 0; Jr < Gn.length; Jr++) {
      const t = Gn[Jr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Jr < Gn.length; Jr++) {
      const t = Gn[Jr];
      t && (t.flags &= -2);
    }
    Jr = -1, Gn.length = 0, Ny(), yc = null, (Gn.length || pa.length) && Py();
  }
}
let ur = null, Ay = null;
function bc(e) {
  const t = ur;
  return ur = e, Ay = e && e.type.__scopeId || null, t;
}
function Cy(e, t = ur, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && bg(-1);
    const a = bc(t);
    let c;
    try {
      c = e(...o);
    } finally {
      bc(a), r._d && bg(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xi(e, t) {
  if (ur === null)
    return e;
  const n = ou(ur), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Dt] = t[o];
    a && (ot(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && _i(c), r.push({
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
function uo(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (ki(), ai(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Mi());
  }
}
function Ox(e, t) {
  if (Dn) {
    let n = Dn.provides;
    const r = Dn.parent && Dn.parent.provides;
    r === n && (n = Dn.provides = Object.create(r)), n[e] = t;
  }
}
function Xl(e, t, n = !1) {
  const r = Ik();
  if (r || ha) {
    let o = ha ? ha._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ot(t) ? t.call(r && r.proxy) : t;
  }
}
const Tx = /* @__PURE__ */ Symbol.for("v-scx"), Fx = () => Xl(Tx);
function No(e, t, n) {
  return Iy(e, t, n);
}
function Iy(e, t, n = Dt) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = Vn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (zs) {
    if (a === "sync") {
      const M = Fx();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = ni, M.resume = ni, M.pause = ni, M;
    }
  }
  const g = Dn;
  u.call = (M, k, N) => ai(M, g, k, N);
  let v = !1;
  a === "post" ? u.scheduler = (M) => {
    Zn(M, g && g.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (M, k) => {
    k ? M() : op(M);
  }), u.augmentJob = (M) => {
    t && (M.flags |= 4), v && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const S = Ax(e, t, u);
  return zs && (b ? b.push(S) : d && S()), S;
}
function Dx(e, t, n) {
  const r = this.proxy, o = sn(e) ? e.includes(".") ? Ey(r, e) : () => r[e] : e.bind(r, r);
  let a;
  ot(t) ? a = t : (a = t.handler, n = t);
  const c = tl(this), u = Iy(o, a.bind(r), n);
  return c(), u;
}
function Ey(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Lx = /* @__PURE__ */ Symbol("_vte"), Rx = (e) => e.__isTeleport, Vx = /* @__PURE__ */ Symbol("_leaveCb");
function ap(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ap(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Oy(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function sg(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const vc = /* @__PURE__ */ new WeakMap();
function As(e, t, n, r, o = !1) {
  if (et(e)) {
    e.forEach(
      (N, A) => As(
        N,
        t && (et(t) ? t[A] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Cs(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && As(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? ou(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, g = u.refs === Dt ? u.refs = {} : u.refs, v = u.setupState, S = /* @__PURE__ */ xt(v), M = v === Dt ? Q0 : (N) => sg(g, N) ? !1 : kt(S, N), k = (N, A) => !(A && sg(g, A));
  if (b != null && b !== d) {
    if (lg(t), sn(b))
      g[b] = null, M(b) && (v[b] = null);
    else if (/* @__PURE__ */ Rn(b)) {
      const N = t;
      k(b, N.k) && (b.value = null), N.k && (g[N.k] = null);
    }
  }
  if (ot(d))
    Qs(d, u, 12, [c, g]);
  else {
    const N = sn(d), A = /* @__PURE__ */ Rn(d);
    if (N || A) {
      const O = () => {
        if (e.f) {
          const $ = N ? M(d) ? v[d] : g[d] : k() || !e.k ? d.value : g[e.k];
          if (o)
            et($) && Yd($, a);
          else if (et($))
            $.includes(a) || $.push(a);
          else if (N)
            g[d] = [a], M(d) && (v[d] = g[d]);
          else {
            const R = [a];
            k(d, e.k) && (d.value = R), e.k && (g[e.k] = R);
          }
        } else N ? (g[d] = c, M(d) && (v[d] = c)) : A && (k(d, e.k) && (d.value = c), e.k && (g[e.k] = c));
      };
      if (c) {
        const $ = () => {
          O(), vc.delete(e);
        };
        $.id = -1, vc.set(e, $), Zn($, n);
      } else
        lg(e), O();
    }
  }
}
function lg(e) {
  const t = vc.get(e);
  t && (t.flags |= 8, vc.delete(e));
}
Jc().requestIdleCallback;
Jc().cancelIdleCallback;
const Cs = (e) => !!e.type.__asyncLoader, Ty = (e) => e.type.__isKeepAlive;
function $x(e, t) {
  Fy(e, "a", t);
}
function zx(e, t) {
  Fy(e, "da", t);
}
function Fy(e, t, n = Dn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (tu(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ty(o.parent.vnode) && jx(r, t, n, o), o = o.parent;
  }
}
function jx(e, t, n, r) {
  const o = tu(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Dy(() => {
    Yd(r[t], o);
  }, n);
}
function tu(e, t, n = Dn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ki();
      const u = tl(n), d = ai(t, n, e, c);
      return u(), Mi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Pi = (e) => (t, n = Dn) => {
  (!zs || e === "sp") && tu(e, (...r) => t(...r), n);
}, Hx = Pi("bm"), nu = Pi("m"), Gx = Pi(
  "bu"
), Kx = Pi("u"), el = Pi(
  "bum"
), Dy = Pi("um"), Wx = Pi(
  "sp"
), Bx = Pi("rtg"), Ux = Pi("rtc");
function Yx(e, t = Dn) {
  tu("ec", e, t);
}
const Xx = "components", Ly = /* @__PURE__ */ Symbol.for("v-ndc");
function qx(e) {
  return sn(e) ? Jx(Xx, e, !1) || e : e || Ly;
}
function Jx(e, t, n = !0, r = !1) {
  const o = ur || Dn;
  if (o) {
    const a = o.type;
    {
      const u = Dk(
        a,
        !1
      );
      if (u && (u === t || u === Wn(t) || u === qc(Wn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      cg(o[e] || a[e], t) || // global registration
      cg(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function cg(e, t) {
  return e && (e[t] || e[Wn(t)] || e[qc(Wn(t))]);
}
function At(e, t, n, r) {
  let o;
  const a = n, c = et(e);
  if (c || sn(e)) {
    const u = c && /* @__PURE__ */ Mo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ wr(e), b = /* @__PURE__ */ Ni(e), e = Zc(e)), o = new Array(e.length);
    for (let g = 0, v = e.length; g < v; g++)
      o[g] = t(
        d ? b ? xa(Vr(e[g])) : Vr(e[g]) : e[g],
        g,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Ot(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const g = u[d];
        o[d] = t(e[g], g, d, a);
      }
    }
  else
    o = [];
  return o;
}
const od = (e) => e ? rb(e) ? ou(e) : od(e.parent) : null, Is = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Vn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => od(e.parent),
    $root: (e) => od(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vy(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      op(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = eu.bind(e.proxy)),
    $watch: (e) => Dx.bind(e)
  })
), uf = (e, t) => e !== Dt && !e.__isScriptSetup && kt(e, t), Zx = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const S = c[t];
      if (S !== void 0)
        switch (S) {
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
        if (uf(r, t))
          return c[t] = 1, r[t];
        if (o !== Dt && kt(o, t))
          return c[t] = 2, o[t];
        if (kt(a, t))
          return c[t] = 3, a[t];
        if (n !== Dt && kt(n, t))
          return c[t] = 4, n[t];
        ad && (c[t] = 0);
      }
    }
    const b = Is[t];
    let g, v;
    if (b)
      return t === "$attrs" && Fn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== Dt && kt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, kt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return uf(o, t) ? (o[t] = n, !0) : r !== Dt && kt(r, t) ? (r[t] = n, !0) : kt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Dt && u[0] !== "$" && kt(e, u) || uf(t, u) || kt(a, u) || kt(r, u) || kt(Is, u) || kt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : kt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ug(e) {
  return et(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ad = !0;
function Qx(e) {
  const t = Vy(e), n = e.proxy, r = e.ctx;
  ad = !1, t.beforeCreate && fg(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: v,
    mounted: S,
    beforeUpdate: M,
    updated: k,
    activated: N,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: $,
    destroyed: R,
    unmounted: V,
    render: w,
    renderTracked: z,
    renderTriggered: W,
    errorCaptured: se,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: Y,
    // assets
    components: J,
    directives: te,
    filters: ge
  } = t;
  if (b && ek(b, r, null), c)
    for (const B in c) {
      const D = c[B];
      ot(D) && (r[B] = D.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    Ot(B) && (e.data = /* @__PURE__ */ Aa(B));
  }
  if (ad = !0, a)
    for (const B in a) {
      const D = a[B], I = ot(D) ? D.bind(n, n) : ot(D.get) ? D.get.bind(n, n) : ni, Z = !ot(D) && ot(D.set) ? D.set.bind(n) : ni, ce = ft({
        get: I,
        set: Z
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => ce.value,
        set: (Oe) => ce.value = Oe
      });
    }
  if (u)
    for (const B in u)
      Ry(u[B], r, n, B);
  if (d) {
    const B = ot(d) ? d.call(n) : d;
    Reflect.ownKeys(B).forEach((D) => {
      Ox(D, B[D]);
    });
  }
  g && fg(g, e, "c");
  function re(B, D) {
    et(D) ? D.forEach((I) => B(I.bind(n))) : D && B(D.bind(n));
  }
  if (re(Hx, v), re(nu, S), re(Gx, M), re(Kx, k), re($x, N), re(zx, A), re(Yx, se), re(Ux, z), re(Bx, W), re(el, $), re(Dy, V), re(Wx, _e), et(T))
    if (T.length) {
      const B = e.exposed || (e.exposed = {});
      T.forEach((D) => {
        Object.defineProperty(B, D, {
          get: () => n[D],
          set: (I) => n[D] = I,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === ni && (e.render = w), Y != null && (e.inheritAttrs = Y), J && (e.components = J), te && (e.directives = te), _e && Oy(e);
}
function ek(e, t, n = ni) {
  et(e) && (e = sd(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Ot(o) ? "default" in o ? a = Xl(
      o.from || r,
      o.default,
      !0
    ) : a = Xl(o.from || r) : a = Xl(o), /* @__PURE__ */ Rn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function fg(e, t, n) {
  ai(
    et(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ry(e, t, n, r) {
  let o = r.includes(".") ? Ey(n, r) : () => n[r];
  if (sn(e)) {
    const a = t[e];
    ot(a) && No(o, a);
  } else if (ot(e))
    No(o, e.bind(n));
  else if (Ot(e))
    if (et(e))
      e.forEach((a) => Ry(a, t, n, r));
    else {
      const a = ot(e.handler) ? e.handler.bind(n) : t[e.handler];
      ot(a) && No(o, a, e);
    }
}
function Vy(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => _c(d, b, c, !0)
  ), _c(d, t, c)), Ot(t) && a.set(t, d), d;
}
function _c(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && _c(e, a, n, !0), o && o.forEach(
    (c) => _c(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = tk[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const tk = {
  data: dg,
  props: pg,
  emits: pg,
  // objects
  methods: gs,
  computed: gs,
  // lifecycle
  beforeCreate: Hn,
  created: Hn,
  beforeMount: Hn,
  mounted: Hn,
  beforeUpdate: Hn,
  updated: Hn,
  beforeDestroy: Hn,
  beforeUnmount: Hn,
  destroyed: Hn,
  unmounted: Hn,
  activated: Hn,
  deactivated: Hn,
  errorCaptured: Hn,
  serverPrefetch: Hn,
  // assets
  components: gs,
  directives: gs,
  // watch
  watch: rk,
  // provide / inject
  provide: dg,
  inject: nk
};
function dg(e, t) {
  return t ? e ? function() {
    return Vn(
      ot(e) ? e.call(this, this) : e,
      ot(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nk(e, t) {
  return gs(sd(e), sd(t));
}
function sd(e) {
  if (et(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Hn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gs(e, t) {
  return e ? Vn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pg(e, t) {
  return e ? et(e) && et(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Vn(
    /* @__PURE__ */ Object.create(null),
    ug(e),
    ug(t ?? {})
  ) : t;
}
function rk(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Vn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Hn(e[r], t[r]);
  return n;
}
function $y() {
  return {
    app: null,
    config: {
      isNativeTag: Q0,
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
let ik = 0;
function ok(e, t) {
  return function(r, o = null) {
    ot(r) || (r = Vn({}, r)), o != null && !Ot(o) && (o = null);
    const a = $y(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: ik++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Rk,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...v) {
        return c.has(g) || (g && ot(g.install) ? (c.add(g), g.install(b, ...v)) : ot(g) && (c.add(g), g(b, ...v))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, v) {
        return v ? (a.components[g] = v, b) : a.components[g];
      },
      directive(g, v) {
        return v ? (a.directives[g] = v, b) : a.directives[g];
      },
      mount(g, v, S) {
        if (!d) {
          const M = b._ceVNode || Le(r, o);
          return M.appContext = a, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, g, S), d = !0, b._container = g, g.__vue_app__ = b, ou(M.component);
        }
      },
      onUnmount(g) {
        u.push(g);
      },
      unmount() {
        d && (ai(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, v) {
        return a.provides[g] = v, b;
      },
      runWithContext(g) {
        const v = ha;
        ha = b;
        try {
          return g();
        } finally {
          ha = v;
        }
      }
    };
    return b;
  };
}
let ha = null;
const ak = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Wn(t)}Modifiers`] || e[`${To(t)}Modifiers`];
function sk(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Dt;
  let o = n;
  const a = t.startsWith("update:"), c = a && ak(r, t.slice(7));
  c && (c.trim && (o = n.map((g) => sn(g) ? g.trim() : g)), c.number && (o = n.map(qd)));
  let u, d = r[u = of(t)] || // also try camelCase event handler (#2249)
  r[u = of(Wn(t))];
  !d && a && (d = r[u = of(To(t))]), d && ai(
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
    e.emitted[u] = !0, ai(
      b,
      e,
      6,
      o
    );
  }
}
const lk = /* @__PURE__ */ new WeakMap();
function zy(e, t, n = !1) {
  const r = n ? lk : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!ot(e)) {
    const d = (b) => {
      const g = zy(b, t, !0);
      g && (u = !0, Vn(c, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Ot(e) && r.set(e, null), null) : (et(a) ? a.forEach((d) => c[d] = null) : Vn(c, a), Ot(e) && r.set(e, c), c);
}
function ru(e, t) {
  return !e || !Uc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), kt(e, t[0].toLowerCase() + t.slice(1)) || kt(e, To(t)) || kt(e, t));
}
function hg(e) {
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
    renderCache: g,
    props: v,
    data: S,
    setupState: M,
    ctx: k,
    inheritAttrs: N
  } = e, A = bc(e);
  let O, $;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, w = V;
      O = Qr(
        b.call(
          w,
          V,
          g,
          v,
          M,
          S,
          k
        )
      ), $ = u;
    } else {
      const V = t;
      O = Qr(
        V.length > 1 ? V(
          v,
          { attrs: u, slots: c, emit: d }
        ) : V(
          v,
          null
        )
      ), $ = t.props ? u : ck(u);
    }
  } catch (V) {
    Es.length = 0, Qc(V, e, 1), O = Le(Bi);
  }
  let R = O;
  if ($ && N !== !1) {
    const V = Object.keys($), { shapeFlag: w } = R;
    V.length && w & 7 && (a && V.some(Yc) && ($ = uk(
      $,
      a
    )), R = ka(R, $, !1, !0));
  }
  return n.dirs && (R = ka(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && ap(R, n.transition), O = R, bc(A), O;
}
const ck = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Uc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, uk = (e, t) => {
  const n = {};
  for (const r in e)
    (!Yc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function fk(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? mg(r, c, b) : !!c;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        const S = g[v];
        if (jy(c, r, S) && !ru(b, S))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? mg(r, c, b) : !0 : !!c;
  return !1;
}
function mg(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (jy(t, e, a) && !ru(n, a))
      return !0;
  }
  return !1;
}
function jy(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Ot(r) && Ot(o) ? !Jd(r, o) : r !== o;
}
function dk({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Hy = {}, Gy = () => Object.create(Hy), Ky = (e) => Object.getPrototypeOf(e) === Hy;
function pk(e, t, n, r = !1) {
  const o = {}, a = Gy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wy(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ wx(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function hk(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ xt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const g = e.vnode.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        let S = g[v];
        if (ru(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (d)
          if (kt(a, S))
            M !== a[S] && (a[S] = M, b = !0);
          else {
            const k = Wn(S);
            o[k] = ld(
              d,
              u,
              k,
              M,
              e,
              !1
            );
          }
        else
          M !== a[S] && (a[S] = M, b = !0);
      }
    }
  } else {
    Wy(e, t, o, a) && (b = !0);
    let g;
    for (const v in u)
      (!t || // for camelCase
      !kt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = To(v)) === v || !kt(t, g))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[v] = ld(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !kt(t, v)) && (delete a[v], b = !0);
  }
  b && vi(e.attrs, "set", "");
}
function Wy(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Ms(d))
        continue;
      const b = t[d];
      let g;
      o && kt(o, g = Wn(d)) ? !a || !a.includes(g) ? n[g] = b : (u || (u = {}))[g] = b : ru(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ xt(n), b = u || Dt;
    for (let g = 0; g < a.length; g++) {
      const v = a[g];
      n[v] = ld(
        o,
        d,
        v,
        b[v],
        e,
        !kt(b, v)
      );
    }
  }
  return c;
}
function ld(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = kt(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && ot(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = tl(o);
          r = b[n] = d.call(
            null,
            t
          ), g();
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
    ] && (r === "" || r === To(n)) && (r = !0));
  }
  return r;
}
const mk = /* @__PURE__ */ new WeakMap();
function By(e, t, n = !1) {
  const r = n ? mk : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!ot(e)) {
    const g = (v) => {
      d = !0;
      const [S, M] = By(v, t, !0);
      Vn(c, S), M && u.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return Ot(e) && r.set(e, fa), fa;
  if (et(a))
    for (let g = 0; g < a.length; g++) {
      const v = Wn(a[g]);
      gg(v) && (c[v] = Dt);
    }
  else if (a)
    for (const g in a) {
      const v = Wn(g);
      if (gg(v)) {
        const S = a[g], M = c[v] = et(S) || ot(S) ? { type: S } : Vn({}, S), k = M.type;
        let N = !1, A = !0;
        if (et(k))
          for (let O = 0; O < k.length; ++O) {
            const $ = k[O], R = ot($) && $.name;
            if (R === "Boolean") {
              N = !0;
              break;
            } else R === "String" && (A = !1);
          }
        else
          N = ot(k) && k.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = N, M[
          1
          /* shouldCastTrue */
        ] = A, (N || kt(M, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Ot(e) && r.set(e, b), b;
}
function gg(e) {
  return e[0] !== "$" && !Ms(e);
}
const sp = (e) => e === "_" || e === "_ctx" || e === "$stable", lp = (e) => et(e) ? e.map(Qr) : [Qr(e)], gk = (e, t, n) => {
  if (t._n)
    return t;
  const r = Cy((...o) => lp(t(...o)), n);
  return r._c = !1, r;
}, Uy = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (sp(o)) continue;
    const a = e[o];
    if (ot(a))
      t[o] = gk(o, a, r);
    else if (a != null) {
      const c = lp(a);
      t[o] = () => c;
    }
  }
}, Yy = (e, t) => {
  const n = lp(t);
  e.slots.default = () => n;
}, Xy = (e, t, n) => {
  for (const r in t)
    (n || !sp(r)) && (e[r] = t[r]);
}, yk = (e, t, n) => {
  const r = e.slots = Gy();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Xy(r, t, n), n && iy(r, "_", o, !0)) : Uy(t, r);
  } else t && Yy(e, t);
}, bk = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Dt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Xy(o, t, n) : (a = !t.$stable, Uy(t, o)), c = t;
  } else t && (Yy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !sp(u) && c[u] == null && delete o[u];
}, Zn = xk;
function vk(e) {
  return _k(e);
}
function _k(e, t) {
  const n = Jc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: v,
    nextSibling: S,
    setScopeId: M = ni,
    insertStaticContent: k
  } = e, N = (F, H, q, pe = null, ye = null, we = null, Te = void 0, Ne = null, Ce = !!H.dynamicChildren) => {
    if (F === H)
      return;
    F && !ls(F, H) && (pe = _t(F), Oe(F, ye, we, !0), F = null), H.patchFlag === -2 && (Ce = !1, H.dynamicChildren = null);
    const { type: be, ref: Re, shapeFlag: Me } = H;
    switch (be) {
      case iu:
        A(F, H, q, pe);
        break;
      case Bi:
        O(F, H, q, pe);
        break;
      case df:
        F == null && $(H, q, pe, Te);
        break;
      case Xe:
        J(
          F,
          H,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
        break;
      default:
        Me & 1 ? w(
          F,
          H,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce
        ) : Me & 6 ? te(
          F,
          H,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce
        ) : (Me & 64 || Me & 128) && be.process(
          F,
          H,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce,
          Ae
        );
    }
    Re != null && ye ? As(Re, F && F.ref, we, H || F, !H) : Re == null && F && F.ref != null && As(F.ref, null, we, F, !0);
  }, A = (F, H, q, pe) => {
    if (F == null)
      r(
        H.el = u(H.children),
        q,
        pe
      );
    else {
      const ye = H.el = F.el;
      H.children !== F.children && b(ye, H.children);
    }
  }, O = (F, H, q, pe) => {
    F == null ? r(
      H.el = d(H.children || ""),
      q,
      pe
    ) : H.el = F.el;
  }, $ = (F, H, q, pe) => {
    [F.el, F.anchor] = k(
      F.children,
      H,
      q,
      pe,
      F.el,
      F.anchor
    );
  }, R = ({ el: F, anchor: H }, q, pe) => {
    let ye;
    for (; F && F !== H; )
      ye = S(F), r(F, q, pe), F = ye;
    r(H, q, pe);
  }, V = ({ el: F, anchor: H }) => {
    let q;
    for (; F && F !== H; )
      q = S(F), o(F), F = q;
    o(H);
  }, w = (F, H, q, pe, ye, we, Te, Ne, Ce) => {
    if (H.type === "svg" ? Te = "svg" : H.type === "math" && (Te = "mathml"), F == null)
      z(
        H,
        q,
        pe,
        ye,
        we,
        Te,
        Ne,
        Ce
      );
    else {
      const be = F.el && F.el._isVueCE ? F.el : null;
      try {
        be && be._beginPatch(), _e(
          F,
          H,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
      } finally {
        be && be._endPatch();
      }
    }
  }, z = (F, H, q, pe, ye, we, Te, Ne) => {
    let Ce, be;
    const { props: Re, shapeFlag: Me, transition: Ve, dirs: We } = F;
    if (Ce = F.el = c(
      F.type,
      we,
      Re && Re.is,
      Re
    ), Me & 8 ? g(Ce, F.children) : Me & 16 && se(
      F.children,
      Ce,
      null,
      pe,
      ye,
      ff(F, we),
      Te,
      Ne
    ), We && uo(F, null, pe, "created"), W(Ce, F, F.scopeId, Te, pe), Re) {
      for (const gt in Re)
        gt !== "value" && !Ms(gt) && a(Ce, gt, null, Re[gt], we, pe);
      "value" in Re && a(Ce, "value", null, Re.value, we), (be = Re.onVnodeBeforeMount) && Ur(be, pe, F);
    }
    We && uo(F, null, pe, "beforeMount");
    const at = wk(ye, Ve);
    at && Ve.beforeEnter(Ce), r(Ce, H, q), ((be = Re && Re.onVnodeMounted) || at || We) && Zn(() => {
      try {
        be && Ur(be, pe, F), at && Ve.enter(Ce), We && uo(F, null, pe, "mounted");
      } finally {
      }
    }, ye);
  }, W = (F, H, q, pe, ye) => {
    if (q && M(F, q), pe)
      for (let we = 0; we < pe.length; we++)
        M(F, pe[we]);
    if (ye) {
      let we = ye.subTree;
      if (H === we || Qy(we.type) && (we.ssContent === H || we.ssFallback === H)) {
        const Te = ye.vnode;
        W(
          F,
          Te,
          Te.scopeId,
          Te.slotScopeIds,
          ye.parent
        );
      }
    }
  }, se = (F, H, q, pe, ye, we, Te, Ne, Ce = 0) => {
    for (let be = Ce; be < F.length; be++) {
      const Re = F[be] = Ne ? yi(F[be]) : Qr(F[be]);
      N(
        null,
        Re,
        H,
        q,
        pe,
        ye,
        we,
        Te,
        Ne
      );
    }
  }, _e = (F, H, q, pe, ye, we, Te) => {
    const Ne = H.el = F.el;
    let { patchFlag: Ce, dynamicChildren: be, dirs: Re } = H;
    Ce |= F.patchFlag & 16;
    const Me = F.props || Dt, Ve = H.props || Dt;
    let We;
    if (q && fo(q, !1), (We = Ve.onVnodeBeforeUpdate) && Ur(We, q, H, F), Re && uo(H, F, q, "beforeUpdate"), q && fo(q, !0), (Me.innerHTML && Ve.innerHTML == null || Me.textContent && Ve.textContent == null) && g(Ne, ""), be ? T(
      F.dynamicChildren,
      be,
      Ne,
      q,
      pe,
      ff(H, ye),
      we
    ) : Te || D(
      F,
      H,
      Ne,
      null,
      q,
      pe,
      ff(H, ye),
      we,
      !1
    ), Ce > 0) {
      if (Ce & 16)
        Y(Ne, Me, Ve, q, ye);
      else if (Ce & 2 && Me.class !== Ve.class && a(Ne, "class", null, Ve.class, ye), Ce & 4 && a(Ne, "style", Me.style, Ve.style, ye), Ce & 8) {
        const at = H.dynamicProps;
        for (let gt = 0; gt < at.length; gt++) {
          const dt = at[gt], St = Me[dt], yt = Ve[dt];
          (yt !== St || dt === "value") && a(Ne, dt, St, yt, ye, q);
        }
      }
      Ce & 1 && F.children !== H.children && g(Ne, H.children);
    } else !Te && be == null && Y(Ne, Me, Ve, q, ye);
    ((We = Ve.onVnodeUpdated) || Re) && Zn(() => {
      We && Ur(We, q, H, F), Re && uo(H, F, q, "updated");
    }, pe);
  }, T = (F, H, q, pe, ye, we, Te) => {
    for (let Ne = 0; Ne < H.length; Ne++) {
      const Ce = F[Ne], be = H[Ne], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ce.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ls(Ce, be) || // - In the case of a component, it could contain anything.
        Ce.shapeFlag & 198) ? v(Ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      N(
        Ce,
        be,
        Re,
        null,
        pe,
        ye,
        we,
        Te,
        !0
      );
    }
  }, Y = (F, H, q, pe, ye) => {
    if (H !== q) {
      if (H !== Dt)
        for (const we in H)
          !Ms(we) && !(we in q) && a(
            F,
            we,
            H[we],
            null,
            ye,
            pe
          );
      for (const we in q) {
        if (Ms(we)) continue;
        const Te = q[we], Ne = H[we];
        Te !== Ne && we !== "value" && a(F, we, Ne, Te, ye, pe);
      }
      "value" in q && a(F, "value", H.value, q.value, ye);
    }
  }, J = (F, H, q, pe, ye, we, Te, Ne, Ce) => {
    const be = H.el = F ? F.el : u(""), Re = H.anchor = F ? F.anchor : u("");
    let { patchFlag: Me, dynamicChildren: Ve, slotScopeIds: We } = H;
    We && (Ne = Ne ? Ne.concat(We) : We), F == null ? (r(be, q, pe), r(Re, q, pe), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      q,
      Re,
      ye,
      we,
      Te,
      Ne,
      Ce
    )) : Me > 0 && Me & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren && F.dynamicChildren.length === Ve.length ? (T(
      F.dynamicChildren,
      Ve,
      q,
      ye,
      we,
      Te,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || ye && H === ye.subTree) && qy(
      F,
      H,
      !0
      /* shallow */
    )) : D(
      F,
      H,
      q,
      Re,
      ye,
      we,
      Te,
      Ne,
      Ce
    );
  }, te = (F, H, q, pe, ye, we, Te, Ne, Ce) => {
    H.slotScopeIds = Ne, F == null ? H.shapeFlag & 512 ? ye.ctx.activate(
      H,
      q,
      pe,
      Te,
      Ce
    ) : ge(
      H,
      q,
      pe,
      ye,
      we,
      Te,
      Ce
    ) : he(F, H, Ce);
  }, ge = (F, H, q, pe, ye, we, Te) => {
    const Ne = F.component = Ck(
      F,
      pe,
      ye
    );
    if (Ty(F) && (Ne.ctx.renderer = Ae), Ek(Ne, !1, Te), Ne.asyncDep) {
      if (ye && ye.registerDep(Ne, re, Te), !F.el) {
        const Ce = Ne.subTree = Le(Bi);
        O(null, Ce, H, q), F.placeholder = Ce.el;
      }
    } else
      re(
        Ne,
        F,
        H,
        q,
        ye,
        we,
        Te
      );
  }, he = (F, H, q) => {
    const pe = H.component = F.component;
    if (fk(F, H, q))
      if (pe.asyncDep && !pe.asyncResolved) {
        B(pe, H, q);
        return;
      } else
        pe.next = H, pe.update();
    else
      H.el = F.el, pe.vnode = H;
  }, re = (F, H, q, pe, ye, we, Te) => {
    const Ne = () => {
      if (F.isMounted) {
        let { next: Me, bu: Ve, u: We, parent: at, vnode: gt } = F;
        {
          const $n = Jy(F);
          if ($n) {
            Me && (Me.el = gt.el, B(F, Me, Te)), $n.asyncDep.then(() => {
              Zn(() => {
                F.isUnmounted || be();
              }, ye);
            });
            return;
          }
        }
        let dt = Me, St;
        fo(F, !1), Me ? (Me.el = gt.el, B(F, Me, Te)) : Me = gt, Ve && Yl(Ve), (St = Me.props && Me.props.onVnodeBeforeUpdate) && Ur(St, at, Me, gt), fo(F, !0);
        const yt = hg(F), _n = F.subTree;
        F.subTree = yt, N(
          _n,
          yt,
          // parent may have changed if it's in a teleport
          v(_n.el),
          // anchor may have changed if it's in a fragment
          _t(_n),
          F,
          ye,
          we
        ), Me.el = yt.el, dt === null && dk(F, yt.el), We && Zn(We, ye), (St = Me.props && Me.props.onVnodeUpdated) && Zn(
          () => Ur(St, at, Me, gt),
          ye
        );
      } else {
        let Me;
        const { el: Ve, props: We } = H, { bm: at, m: gt, parent: dt, root: St, type: yt } = F, _n = Cs(H);
        fo(F, !1), at && Yl(at), !_n && (Me = We && We.onVnodeBeforeMount) && Ur(Me, dt, H), fo(F, !0);
        {
          St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(
            yt,
            F.parent ? F.parent.type : void 0
          );
          const $n = F.subTree = hg(F);
          N(
            null,
            $n,
            q,
            pe,
            F,
            ye,
            we
          ), H.el = $n.el;
        }
        if (gt && Zn(gt, ye), !_n && (Me = We && We.onVnodeMounted)) {
          const $n = H;
          Zn(
            () => Ur(Me, dt, $n),
            ye
          );
        }
        (H.shapeFlag & 256 || dt && Cs(dt.vnode) && dt.vnode.shapeFlag & 256) && F.a && Zn(F.a, ye), F.isMounted = !0, H = q = pe = null;
      }
    };
    F.scope.on();
    const Ce = F.effect = new ly(Ne);
    F.scope.off();
    const be = F.update = Ce.run.bind(Ce), Re = F.job = Ce.runIfDirty.bind(Ce);
    Re.i = F, Re.id = F.uid, Ce.scheduler = () => op(Re), fo(F, !0), be();
  }, B = (F, H, q) => {
    H.component = F;
    const pe = F.vnode.props;
    F.vnode = H, F.next = null, hk(F, H.props, pe, q), bk(F, H.children, q), ki(), ag(F), Mi();
  }, D = (F, H, q, pe, ye, we, Te, Ne, Ce = !1) => {
    const be = F && F.children, Re = F ? F.shapeFlag : 0, Me = H.children, { patchFlag: Ve, shapeFlag: We } = H;
    if (Ve > 0) {
      if (Ve & 128) {
        Z(
          be,
          Me,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
        return;
      } else if (Ve & 256) {
        I(
          be,
          Me,
          q,
          pe,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
        return;
      }
    }
    We & 8 ? (Re & 16 && j(be, ye, we), Me !== be && g(q, Me)) : Re & 16 ? We & 16 ? Z(
      be,
      Me,
      q,
      pe,
      ye,
      we,
      Te,
      Ne,
      Ce
    ) : j(be, ye, we, !0) : (Re & 8 && g(q, ""), We & 16 && se(
      Me,
      q,
      pe,
      ye,
      we,
      Te,
      Ne,
      Ce
    ));
  }, I = (F, H, q, pe, ye, we, Te, Ne, Ce) => {
    F = F || fa, H = H || fa;
    const be = F.length, Re = H.length, Me = Math.min(be, Re);
    let Ve;
    for (Ve = 0; Ve < Me; Ve++) {
      const We = H[Ve] = Ce ? yi(H[Ve]) : Qr(H[Ve]);
      N(
        F[Ve],
        We,
        q,
        null,
        ye,
        we,
        Te,
        Ne,
        Ce
      );
    }
    be > Re ? j(
      F,
      ye,
      we,
      !0,
      !1,
      Me
    ) : se(
      H,
      q,
      pe,
      ye,
      we,
      Te,
      Ne,
      Ce,
      Me
    );
  }, Z = (F, H, q, pe, ye, we, Te, Ne, Ce) => {
    let be = 0;
    const Re = H.length;
    let Me = F.length - 1, Ve = Re - 1;
    for (; be <= Me && be <= Ve; ) {
      const We = F[be], at = H[be] = Ce ? yi(H[be]) : Qr(H[be]);
      if (ls(We, at))
        N(
          We,
          at,
          q,
          null,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
      else
        break;
      be++;
    }
    for (; be <= Me && be <= Ve; ) {
      const We = F[Me], at = H[Ve] = Ce ? yi(H[Ve]) : Qr(H[Ve]);
      if (ls(We, at))
        N(
          We,
          at,
          q,
          null,
          ye,
          we,
          Te,
          Ne,
          Ce
        );
      else
        break;
      Me--, Ve--;
    }
    if (be > Me) {
      if (be <= Ve) {
        const We = Ve + 1, at = We < Re ? H[We].el : pe;
        for (; be <= Ve; )
          N(
            null,
            H[be] = Ce ? yi(H[be]) : Qr(H[be]),
            q,
            at,
            ye,
            we,
            Te,
            Ne,
            Ce
          ), be++;
      }
    } else if (be > Ve)
      for (; be <= Me; )
        Oe(F[be], ye, we, !0), be++;
    else {
      const We = be, at = be, gt = /* @__PURE__ */ new Map();
      for (be = at; be <= Ve; be++) {
        const Ge = H[be] = Ce ? yi(H[be]) : Qr(H[be]);
        Ge.key != null && gt.set(Ge.key, be);
      }
      let dt, St = 0;
      const yt = Ve - at + 1;
      let _n = !1, $n = 0;
      const si = new Array(yt);
      for (be = 0; be < yt; be++) si[be] = 0;
      for (be = We; be <= Me; be++) {
        const Ge = F[be];
        if (St >= yt) {
          Oe(Ge, ye, we, !0);
          continue;
        }
        let tn;
        if (Ge.key != null)
          tn = gt.get(Ge.key);
        else
          for (dt = at; dt <= Ve; dt++)
            if (si[dt - at] === 0 && ls(Ge, H[dt])) {
              tn = dt;
              break;
            }
        tn === void 0 ? Oe(Ge, ye, we, !0) : (si[tn - at] = be + 1, tn >= $n ? $n = tn : _n = !0, N(
          Ge,
          H[tn],
          q,
          null,
          ye,
          we,
          Te,
          Ne,
          Ce
        ), St++);
      }
      const h = _n ? Sk(si) : fa;
      for (dt = h.length - 1, be = yt - 1; be >= 0; be--) {
        const Ge = at + be, tn = H[Ge], nn = H[Ge + 1], Ai = Ge + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          nn.el || Zy(nn)
        ) : pe;
        si[be] === 0 ? N(
          null,
          tn,
          q,
          Ai,
          ye,
          we,
          Te,
          Ne,
          Ce
        ) : _n && (dt < 0 || be !== h[dt] ? ce(tn, q, Ai, 2) : dt--);
      }
    }
  }, ce = (F, H, q, pe, ye = null) => {
    const { el: we, type: Te, transition: Ne, children: Ce, shapeFlag: be } = F;
    if (be & 6) {
      ce(F.component.subTree, H, q, pe);
      return;
    }
    if (be & 128) {
      F.suspense.move(H, q, pe);
      return;
    }
    if (be & 64) {
      Te.move(F, H, q, Ae);
      return;
    }
    if (Te === Xe) {
      r(we, H, q);
      for (let Me = 0; Me < Ce.length; Me++)
        ce(Ce[Me], H, q, pe);
      r(F.anchor, H, q);
      return;
    }
    if (Te === df) {
      R(F, H, q);
      return;
    }
    if (pe !== 2 && be & 1 && Ne)
      if (pe === 0)
        Ne.beforeEnter(we), r(we, H, q), Zn(() => Ne.enter(we), ye);
      else {
        const { leave: Me, delayLeave: Ve, afterLeave: We } = Ne, at = () => {
          F.ctx.isUnmounted ? o(we) : r(we, H, q);
        }, gt = () => {
          we._isLeaving && we[Vx](
            !0
            /* cancelled */
          ), Me(we, () => {
            at(), We && We();
          });
        };
        Ve ? Ve(we, at, gt) : gt();
      }
    else
      r(we, H, q);
  }, Oe = (F, H, q, pe = !1, ye = !1) => {
    const {
      type: we,
      props: Te,
      ref: Ne,
      children: Ce,
      dynamicChildren: be,
      shapeFlag: Re,
      patchFlag: Me,
      dirs: Ve,
      cacheIndex: We,
      memo: at
    } = F;
    if (Me === -2 && (ye = !1), Ne != null && (ki(), As(Ne, null, q, F, !0), Mi()), We != null && (H.renderCache[We] = void 0), Re & 256) {
      H.ctx.deactivate(F);
      return;
    }
    const gt = Re & 1 && Ve, dt = !Cs(F);
    let St;
    if (dt && (St = Te && Te.onVnodeBeforeUnmount) && Ur(St, H, F), Re & 6)
      vt(F.component, q, pe);
    else {
      if (Re & 128) {
        F.suspense.unmount(q, pe);
        return;
      }
      gt && uo(F, null, H, "beforeUnmount"), Re & 64 ? F.type.remove(
        F,
        H,
        q,
        Ae,
        pe
      ) : be && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !be.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (we !== Xe || Me > 0 && Me & 64) ? j(
        be,
        H,
        q,
        !1,
        !0
      ) : (we === Xe && Me & 384 || !ye && Re & 16) && j(Ce, H, q), pe && Ye(F);
    }
    const yt = at != null && We == null;
    (dt && (St = Te && Te.onVnodeUnmounted) || gt || yt) && Zn(() => {
      St && Ur(St, H, F), gt && uo(F, null, H, "unmounted"), yt && (F.el = null);
    }, q);
  }, Ye = (F) => {
    const { type: H, el: q, anchor: pe, transition: ye } = F;
    if (H === Xe) {
      qe(q, pe);
      return;
    }
    if (H === df) {
      V(F);
      return;
    }
    const we = () => {
      o(q), ye && !ye.persisted && ye.afterLeave && ye.afterLeave();
    };
    if (F.shapeFlag & 1 && ye && !ye.persisted) {
      const { leave: Te, delayLeave: Ne } = ye, Ce = () => Te(q, we);
      Ne ? Ne(F.el, we, Ce) : Ce();
    } else
      we();
  }, qe = (F, H) => {
    let q;
    for (; F !== H; )
      q = S(F), o(F), F = q;
    o(H);
  }, vt = (F, H, q) => {
    const { bum: pe, scope: ye, job: we, subTree: Te, um: Ne, m: Ce, a: be } = F;
    yg(Ce), yg(be), pe && Yl(pe), ye.stop(), we && (we.flags |= 8, Oe(Te, F, H, q)), Ne && Zn(Ne, H), Zn(() => {
      F.isUnmounted = !0;
    }, H);
  }, j = (F, H, q, pe = !1, ye = !1, we = 0) => {
    for (let Te = we; Te < F.length; Te++)
      Oe(F[Te], H, q, pe, ye);
  }, _t = (F) => {
    if (F.shapeFlag & 6)
      return _t(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const H = S(F.anchor || F.el), q = H && H[Lx];
    return q ? S(q) : H;
  };
  let Ie = !1;
  const wt = (F, H, q) => {
    let pe;
    F == null ? H._vnode && (Oe(H._vnode, null, null, !0), pe = H._vnode.component) : N(
      H._vnode || null,
      F,
      H,
      null,
      null,
      null,
      q
    ), H._vnode = F, Ie || (Ie = !0, ag(pe), Ny(), Ie = !1);
  }, Ae = {
    p: N,
    um: Oe,
    m: ce,
    r: Ye,
    mt: ge,
    mc: se,
    pc: D,
    pbc: T,
    n: _t,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: ok(wt)
  };
}
function ff({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fo({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wk(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qy(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (et(r) && et(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = yi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && qy(c, u)), u.type === iu && (u.patchFlag === -1 && (u = o[a] = yi(u)), u.el = c.el), u.type === Bi && !u.el && (u.el = c.el);
    }
}
function Sk(e) {
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
function Jy(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jy(t);
}
function yg(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zy(t.subTree) : null;
}
const Qy = (e) => e.__isSuspense;
function xk(e, t) {
  t && t.pendingBranch ? et(e) ? t.effects.push(...e) : t.effects.push(e) : Ex(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), iu = /* @__PURE__ */ Symbol.for("v-txt"), Bi = /* @__PURE__ */ Symbol.for("v-cmt"), df = /* @__PURE__ */ Symbol.for("v-stc"), Es = [];
let fr = null;
function ae(e = !1) {
  Es.push(fr = e ? null : []);
}
function kk() {
  Es.pop(), fr = Es[Es.length - 1] || null;
}
let $s = 1;
function bg(e, t = !1) {
  $s += e, e < 0 && fr && t && (fr.hasOnce = !0);
}
function eb(e) {
  return e.dynamicChildren = $s > 0 ? fr || fa : null, kk(), $s > 0 && fr && fr.push(e), e;
}
function fe(e, t, n, r, o, a) {
  return eb(
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
function xr(e, t, n, r, o) {
  return eb(
    Le(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function tb(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ls(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nb = ({ key: e }) => e ?? null, ql = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? sn(e) || /* @__PURE__ */ Rn(e) || ot(e) ? { i: ur, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, o = null, a = e === Xe ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nb(t),
    ref: t && ql(t),
    scopeId: Ay,
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
    ctx: ur
  };
  return u ? (cp(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= sn(n) ? 8 : 16), $s > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  fr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && fr.push(d), d;
}
const Le = Mk;
function Mk(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Ly) && (e = Bi), tb(e)) {
    const u = ka(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cp(u, n), $s > 0 && !a && fr && (u.shapeFlag & 6 ? fr[fr.indexOf(e)] = u : fr.push(u)), u.patchFlag = -2, u;
  }
  if (Lk(e) && (e = e.__vccOpts), t) {
    t = Nk(t);
    let { class: u, style: d } = t;
    u && !sn(u) && (t.class = pt(u)), Ot(d) && (/* @__PURE__ */ ip(d) && !et(d) && (d = Vn({}, d)), t.style = Et(d));
  }
  const c = sn(e) ? 1 : Qy(e) ? 128 : Rx(e) ? 64 : Ot(e) ? 4 : ot(e) ? 2 : 0;
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
function Nk(e) {
  return e ? /* @__PURE__ */ ip(e) || Ky(e) ? Vn({}, e) : e : null;
}
function ka(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? bi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && nb(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? et(a) ? a.concat(ql(t)) : [a, ql(t)] : ql(t)
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
    patchFlag: t && e.type !== Xe ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && ka(e.ssContent),
    ssFallback: e.ssFallback && ka(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && ap(
    g,
    d.clone(g)
  ), g;
}
function ys(e = " ", t = 0) {
  return Le(iu, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (ae(), xr(Bi, null, e)) : Le(Bi, null, e);
}
function Qr(e) {
  return e == null || typeof e == "boolean" ? Le(Bi) : et(e) ? Le(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tb(e) ? yi(e) : Le(iu, null, String(e));
}
function yi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ka(e);
}
function cp(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (et(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), cp(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ky(t) ? t._ctx = ur : o === 3 && ur && (ur.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ot(t) ? (t = { default: t, _ctx: ur }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ys(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = pt([t.class, r.class]));
      else if (o === "style")
        t.style = Et([t.style, r.style]);
      else if (Uc(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(et(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ur(e, t, n, r = null) {
  ai(e, t, 7, [
    n,
    r
  ]);
}
const Pk = $y();
let Ak = 0;
function Ck(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Pk, a = {
    uid: Ak++,
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
    scope: new tx(
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
    propsOptions: By(r, o),
    emitsOptions: zy(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Dt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Dt,
    data: Dt,
    props: Dt,
    attrs: Dt,
    slots: Dt,
    refs: Dt,
    setupState: Dt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = sk.bind(null, a), e.ce && e.ce(a), a;
}
let Dn = null;
const Ik = () => Dn || ur;
let wc, cd;
{
  const e = Jc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  wc = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Dn = n
  ), cd = t(
    "__VUE_SSR_SETTERS__",
    (n) => zs = n
  );
}
const tl = (e) => {
  const t = Dn;
  return wc(e), e.scope.on(), () => {
    e.scope.off(), wc(t);
  };
}, vg = () => {
  Dn && Dn.scope.off(), wc(null);
};
function rb(e) {
  return e.vnode.shapeFlag & 4;
}
let zs = !1;
function Ek(e, t = !1, n = !1) {
  t && cd(t);
  const { props: r, children: o } = e.vnode, a = rb(e);
  pk(e, r, a, t), yk(e, o, n || t);
  const c = a ? Ok(e, t) : void 0;
  return t && cd(!1), c;
}
function Ok(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zx);
  const { setup: r } = n;
  if (r) {
    ki();
    const o = e.setupContext = r.length > 1 ? Fk(e) : null, a = tl(e), c = Qs(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = ty(c);
    if (Mi(), a(), (u || e.sp) && !Cs(e) && Oy(e), u) {
      if (c.then(vg, vg), t)
        return c.then((d) => {
          _g(e, d);
        }).catch((d) => {
          Qc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      _g(e, c);
  } else
    ib(e);
}
function _g(e, t, n) {
  ot(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ot(t) && (e.setupState = xy(t)), ib(e);
}
function ib(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ni);
  {
    const o = tl(e);
    ki();
    try {
      Qx(e);
    } finally {
      Mi(), o();
    }
  }
}
const Tk = {
  get(e, t) {
    return Fn(e, "get", ""), e[t];
  }
};
function Fk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Tk),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ou(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xy(Sx(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Is)
        return Is[n](e);
    },
    has(t, n) {
      return n in t || n in Is;
    }
  })) : e.proxy;
}
function Dk(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lk(e) {
  return ot(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ Nx(e, t, zs), Rk = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ud;
const wg = typeof window < "u" && window.trustedTypes;
if (wg)
  try {
    ud = /* @__PURE__ */ wg.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ob = ud ? (e) => ud.createHTML(e) : (e) => e, Vk = "http://www.w3.org/2000/svg", $k = "http://www.w3.org/1998/Math/MathML", mi = typeof document < "u" ? document : null, Sg = mi && /* @__PURE__ */ mi.createElement("template"), zk = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? mi.createElementNS(Vk, e) : t === "mathml" ? mi.createElementNS($k, e) : n ? mi.createElement(e, { is: n }) : mi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => mi.createTextNode(e),
  createComment: (e) => mi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mi.querySelector(e),
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
      Sg.innerHTML = ob(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Sg.content;
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
}, jk = /* @__PURE__ */ Symbol("_vtc");
function Hk(e, t, n) {
  const r = e[jk];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Sc = /* @__PURE__ */ Symbol("_vod"), ab = /* @__PURE__ */ Symbol("_vsh"), Oo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Sc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : cs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), cs(e, !0), r.enter(e)) : r.leave(e, () => {
      cs(e, !1);
    }) : cs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    cs(e, t);
  }
};
function cs(e, t) {
  e.style.display = t ? e[Sc] : "none", e[ab] = !t;
}
const Gk = /* @__PURE__ */ Symbol(""), Kk = /(?:^|;)\s*display\s*:/;
function Wk(e, t, n) {
  const r = e.style, o = sn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (sn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Jl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Jl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Jl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[Gk];
      c && (n += ";" + c), r.cssText = n, a = Kk.test(n);
    }
  } else t && e.removeAttribute("style");
  Sc in e && (e[Sc] = a ? r.display : "", e[ab] && (r.display = "none"));
}
const xg = /\s*!important$/;
function Jl(e, t, n) {
  if (et(n))
    n.forEach((r) => Jl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Bk(e, t);
    xg.test(n) ? e.setProperty(
      To(r),
      n.replace(xg, ""),
      "important"
    ) : e[r] = n;
  }
}
const kg = ["Webkit", "Moz", "ms"], pf = {};
function Bk(e, t) {
  const n = pf[t];
  if (n)
    return n;
  let r = Wn(t);
  if (r !== "filter" && r in e)
    return pf[t] = r;
  r = qc(r);
  for (let o = 0; o < kg.length; o++) {
    const a = kg[o] + r;
    if (a in e)
      return pf[t] = a;
  }
  return t;
}
const Mg = "http://www.w3.org/1999/xlink";
function Ng(e, t, n, r, o, a = QS(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mg, t.slice(6, t.length)) : e.setAttributeNS(Mg, t, n) : n == null || a && !oy(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : oi(n) ? String(n) : n
  );
}
function Pg(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ob(n) : n);
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
    u === "boolean" ? n = oy(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function oa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Uk(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ag = /* @__PURE__ */ Symbol("_vei");
function Yk(e, t, n, r, o = null) {
  const a = e[Ag] || (e[Ag] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = Xk(t);
    if (r) {
      const b = a[t] = Zk(
        r,
        o
      );
      oa(e, u, b, d);
    } else c && (Uk(e, u, c, d), a[t] = void 0);
  }
}
const Cg = /(?:Once|Passive|Capture)$/;
function Xk(e) {
  let t;
  if (Cg.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Cg); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : To(e.slice(2)), t];
}
let hf = 0;
const qk = /* @__PURE__ */ Promise.resolve(), Jk = () => hf || (qk.then(() => hf = 0), hf = Date.now());
function Zk(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ai(
      Qk(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Jk(), n;
}
function Qk(e, t) {
  if (et(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Ig = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eM = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? Hk(e, r, c) : t === "style" ? Wk(e, n, r) : Uc(t) ? Yc(t) || Yk(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tM(e, t, r, c)) ? (Pg(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ng(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nM(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !sn(r))) ? Pg(e, Wn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ng(e, t, r, c));
};
function tM(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ig(t) && ot(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ig(t) && sn(n) ? !1 : t in e;
}
function nM(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Wn(t);
  return Array.isArray(n) ? n.some((o) => Wn(o) === r) : Object.keys(n).some((o) => Wn(o) === r);
}
const Eg = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return et(t) ? (n) => Yl(t, n) : t;
};
function rM(e) {
  e.target.composing = !0;
}
function Og(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mf = /* @__PURE__ */ Symbol("_assign");
function Tg(e, t, n) {
  return t && (e = e.trim()), n && (e = qd(e)), e;
}
const Fg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[mf] = Eg(o);
    const a = r || o.props && o.props.type === "number";
    oa(e, t ? "change" : "input", (c) => {
      c.target.composing || e[mf](Tg(e.value, n, a));
    }), (n || a) && oa(e, "change", () => {
      e.value = Tg(e.value, n, a);
    }), t || (oa(e, "compositionstart", rM), oa(e, "compositionend", Og), oa(e, "change", Og));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[mf] = Eg(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? qd(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, iM = ["ctrl", "shift", "alt", "meta"], oM = {
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
  exact: (e, t) => iM.some((n) => e[`${n}Key`] && !t.includes(n))
}, $t = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = oM[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, aM = /* @__PURE__ */ Vn({ patchProp: eM }, zk);
let Dg;
function sM() {
  return Dg || (Dg = vk(aM));
}
const up = ((...e) => {
  const t = sM().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = cM(r);
    if (!o) return;
    const a = t._component;
    !ot(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, lM(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function lM(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cM(e) {
  return sn(e) ? document.querySelector(e) : e;
}
const uM = "PanoramaSuite.Debug.Diagnostics", fM = "PanoramaSuite.Debug.ExportDiagnostics", gf = "pano_suite.diagnostics.v1", Lg = "pano_suite.diagnostics.previous.v1", dM = 300, pM = 2e5, hM = 100, mM = 20, gM = 1e3, yM = 2, Ol = 1024 * 1024;
function ji(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function bM() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function vM() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: bM,
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
      var r;
      const t = globalThis.PerformanceObserver;
      if (!((r = t == null ? void 0 : t.supportedEntryTypes) != null && r.includes("longtask"))) return null;
      const n = new t((o) => e(o.getEntries()));
      return n.observe({ type: "longtask" }), () => n.disconnect();
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
function _M(e = {}) {
  const t = { ...vM(), ...e };
  let n = !1, r = !1, o = null, a = null, c = 0, u = null, d = 0, b = 0;
  const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), S = { created: 0, released: 0, collected: 0 }, M = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((Ae) => {
    g.delete(Ae), S.collected += 1;
  }) : null, N = t.FinalizationRegistry ? new t.FinalizationRegistry((Ae) => {
    v.delete(Ae), M.collected += 1;
  }) : null, A = /* @__PURE__ */ new Set(), O = { created: 0, lost: 0, restored: 0, disposed: 0 }, $ = [], R = /* @__PURE__ */ new Map();
  let V = { count: 0, maxMs: 0 }, w = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 };
  const W = [];
  function se(Ae, De, F = void 0) {
    $.push(F === void 0 ? { t: t.clock(), type: Ae, label: De } : { t: t.clock(), type: Ae, label: De, detail: F }), $.length > hM && $.shift();
  }
  function _e(Ae, De, F, H, q) {
    if (!n || !H || !t.WeakRef) return H;
    const pe = { ref: new t.WeakRef(H), label: q };
    return Ae.add(pe), De == null || De.register(H, pe), F.created += 1, H;
  }
  function T(Ae, De = "") {
    return _e(g, k, S, Ae, De);
  }
  function Y(Ae, De = "") {
    return _e(v, N, M, Ae, De);
  }
  function J({ label: Ae = "", width: De, height: F, offscreen: H = !1 } = {}) {
    const q = globalThis.OffscreenCanvas;
    let pe;
    return H && typeof q < "u" ? pe = new q(De, F) : (pe = t.document().createElement("canvas"), De !== void 0 && F !== void 0 && (pe.width = De, pe.height = F)), T(pe, Ae);
  }
  function te(Ae) {
    Ae.width = 0, Ae.height = 0, n && (S.released += 1);
  }
  function ge(Ae = t.document(), De = "") {
    var F;
    return Y(((F = Ae == null ? void 0 : Ae.createElement) == null ? void 0 : F.call(Ae, "video")) || null, De);
  }
  function he(Ae, De) {
    if (!n || !Ae) return () => {
    };
    const F = { label: De, lost: !1, disposed: !1 };
    A.add(F), O.created += 1, se("webgl-created", De);
    const H = () => {
      F.disposed || (F.lost = !0, O.lost += 1, se("webglcontextlost", De));
    }, q = () => {
      F.disposed || (F.lost = !1, O.restored += 1, se("webglcontextrestored", De));
    };
    return Ae.addEventListener("webglcontextlost", H), Ae.addEventListener("webglcontextrestored", q), () => {
      F.disposed || (F.disposed = !0, A.delete(F), O.disposed += 1, se("webgl-disposed", De));
    };
  }
  function re(Ae, De) {
    return R.set(Ae, De), () => {
      R.get(Ae) === De && R.delete(Ae);
    };
  }
  function B() {
    return n ? t.now() : -1;
  }
  function D(Ae) {
    if (Ae < 0 || !n) return;
    const De = t.now() - Ae;
    V.count += 1, V.maxMs = Math.max(V.maxMs, De);
  }
  function I(Ae, De) {
    if (De < 0 || !n) return;
    const F = t.now() - De, H = w.get(Ae) ?? { count: 0, maxMs: 0 };
    H.count += 1, H.maxMs = Math.max(H.maxMs, F), w.set(Ae, H);
  }
  function Z() {
    let Ae = 0, De = 0, F = 0, H = [0, 0];
    const q = {};
    for (const pe of g) {
      const ye = pe.ref.deref();
      if (!ye) continue;
      Ae += 1;
      const we = ye.width * ye.height;
      we > 0 && (De += 1), F += we, we > H[0] * H[1] && (H = [ye.width, ye.height]);
      const Te = q[pe.label] ?? (q[pe.label] = [0, 0]);
      Te[0] += 1, Te[1] += we;
    }
    return { ...S, alive: Ae, sized: De, pixels: F, mb: ji(F * 4 / Ol, 1), largest: H, byLabel: q };
  }
  function ce() {
    const Ae = [];
    let De = 0, F = 0;
    for (const H of v) {
      const q = H.ref.deref();
      if (!q) continue;
      De += 1;
      const pe = !q.paused && !q.ended;
      pe && (F += 1), Ae.length < mM && Ae.push({
        label: H.label,
        playing: pe,
        src: !!(q.currentSrc || q.src),
        size: [q.videoWidth || 0, q.videoHeight || 0],
        ready: q.readyState ?? 0,
        connected: !!q.isConnected
      });
    }
    return { ...M, alive: De, playing: F, list: Ae };
  }
  function Oe() {
    const Ae = t.now(), De = t.memory(), F = {
      t: t.clock(),
      heap: De ? { used: ji(De.usedJSHeapSize / Ol, 1), total: ji(De.totalJSHeapSize / Ol, 1), limit: ji(De.jsHeapSizeLimit / Ol, 1) } : null,
      canvas: Z(),
      webgl: { ...O, alive: [...A].filter((H) => !H.lost).length },
      video: ce(),
      frame: { count: V.count, maxMs: ji(V.maxMs), longTasks: z.count, longTaskMaxMs: ji(z.maxMs) },
      renders: Object.fromEntries([...w].map(([H, q]) => [H, { count: q.count, maxMs: ji(q.maxMs) }])),
      sources: Object.fromEntries([...R].map(([H, q]) => [H, q()])),
      costMs: ji(b, 3)
    };
    return V = { count: 0, maxMs: 0 }, w = /* @__PURE__ */ new Map(), z = { count: 0, maxMs: 0 }, W.push({ record: F, text: JSON.stringify(F) }), W.length > dM && W.shift(), d += 1, d % yM === 0 && qe(), b = t.now() - Ae, F;
  }
  function Ye(Ae = pM) {
    const De = JSON.stringify({ ...a, events: $ }).slice(0, -1);
    let F = Ae - De.length - 14, H = W.length;
    for (; H > 0 && F - W[H - 1].text.length - 1 >= 0; )
      H -= 1, F -= W[H].text.length + 1;
    return `${De},"records":[${W.slice(H).map((q) => q.text).join(",")}]}`;
  }
  function qe() {
    if (!a) return;
    const Ae = t.storage();
    if (Ae) {
      a.savedAt = t.clock();
      try {
        Ae.setItem(gf, Ye());
      } catch {
      }
    }
  }
  function vt() {
    a.closed = !0, a.closedAt = t.clock(), a.closedBy = "unload", qe();
  }
  function j() {
    var q;
    if (r) return o;
    r = !0;
    const Ae = t.storage();
    if (!Ae) return null;
    let De = null;
    try {
      if (De = Ae.getItem(gf), De === null) {
        const pe = Ae.getItem(Lg);
        return o = pe === null ? null : JSON.parse(pe), o;
      }
      Ae.setItem(Lg, De), Ae.removeItem(gf), o = JSON.parse(De);
    } catch {
      return o;
    }
    const F = Array.isArray(o == null ? void 0 : o.records) ? o.records : [], H = F.slice(-5);
    return o != null && o.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${o.closedBy || "unload"}); ${F.length} records kept. Its last records:`,
      JSON.stringify(H)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((o == null ? void 0 : o.startedAt) || 0).toISOString()}, last saved ${new Date((o == null ? void 0 : o.savedAt) || ((q = F.at(-1)) == null ? void 0 : q.t) || 0).toISOString()}; ${F.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(H)
    ), o;
  }
  function _t(Ae) {
    const De = Ae === !0;
    if (j(), De !== n) {
      if (n = De, n) {
        a = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, d = 0, W.length = 0, u = t.observeLongTasks((F) => {
          for (const H of F)
            z.count += 1, z.maxMs = Math.max(z.maxMs, H.duration);
        }), t.addUnload(vt), c = t.setInterval(Oe, gM), qe();
        return;
      }
      t.clearInterval(c), c = 0, u == null || u(), u = null, t.removeUnload(vt), a.closed = !0, a.closedAt = t.clock(), a.closedBy = "disabled", qe();
    }
  }
  function Ie() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: a ? { ...a, events: [...$], records: W.map((Ae) => Ae.record) } : null,
      previous: o
    };
  }
  function wt() {
    const Ae = t.document(), De = new Blob([JSON.stringify(Ie(), null, 1)], { type: "application/json" }), F = URL.createObjectURL(De), H = Ae.createElement("a");
    H.href = F, H.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, H.click(), setTimeout(() => URL.revokeObjectURL(F), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: J,
    releaseCanvas: te,
    trackCanvas: T,
    createVideo: ge,
    trackVideo: Y,
    watchContext: he,
    addSource: re,
    frameStart: B,
    frameEnd: D,
    renderEnd: I,
    sample: Oe,
    serialize: Ye,
    recoverPrevious: j,
    setEnabled: _t,
    exportData: Ie,
    download: wt
  };
}
const nr = _M(), Tn = nr.createCanvas, fd = nr.releaseCanvas, yf = nr.trackCanvas, au = nr.createVideo, Rg = nr.trackVideo, wM = nr.addSource, SM = nr.frameStart, xM = nr.frameEnd;
function sb(e, t) {
  const n = nr.watchContext(e.canvas, t), r = nr.addSource(`three.${t}`, () => e.stats()), o = (a) => (c) => {
    const u = nr.frameStart(), d = a(c);
    return nr.renderEnd(t, u), d;
  };
  return {
    ...e,
    render: o(e.render),
    renderUnwrap: o(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(a) {
      e.dispose(a), !(a != null && a.lost) && (r(), n());
    }
  };
}
const kM = {
  id: uM,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => nr.setEnabled(e === !0)
}, Vg = {
  id: fM,
  label: "Export Panorama Suite diagnostics",
  function: () => nr.download()
};
function aa(e, t) {
  const n = Tn({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function MM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function $g(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let S = 0; S < r; S += 1)
      a[(v * r + S) * 4 + 3] <= t || (S < c && (c = S), v < u && (u = v), S > d && (d = S), v > b && (b = v));
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
function fp(e, t) {
  return Tn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Ki(e, t, n) {
  if (!e) return aa(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Jt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function On(e) {
  e.displayDirty = !0, e.revision += 1;
}
let bf = null, vf = null, zg = null, jg = null, qt = null, us = null;
function NM() {
  if (vf) return vf;
  const e = 6, t = 17, n = Tn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), vf = n, n;
}
function _f(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  bf = Ki(bf, n, r);
  const o = bf;
  Jt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", jg !== o.ctx && (zg = o.ctx.createPattern(NM(), "repeat"), jg = o.ctx), o.ctx.fillStyle = zg, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function PM(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function AM(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function CM(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function IM(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ht = /* @__PURE__ */ new Map(), dp = 128;
function EM(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ht.has(d)) {
    const $ = Ht.get(d);
    return Ht.delete(d), Ht.set(d, $), $;
  }
  Ht.size >= dp && Ht.delete(Ht.keys().next().value);
  const b = c * 2 + 2, g = c + 1, v = fp(b, b), S = v.getContext("2d"), M = u * c, k = c + 1, N = `rgba(${n},${r},${o},${a})`, A = `rgba(${n},${r},${o},0)`, O = S.createRadialGradient(g, g, M, g, g, k);
  return O.addColorStop(0, N), O.addColorStop(1, A), S.fillStyle = O, S.fillRect(0, 0, b, b), Ht.set(d, v), v;
}
function OM(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: g } = r, v = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), N = Math.max(0, Math.min(1, c ?? 0)), A = `chisel:${v}:${S}:${n.toFixed(2)}:${u}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${k.toFixed(2)}:${N.toFixed(2)}`;
  if (Ht.has(A)) {
    const se = Ht.get(A);
    return Ht.delete(A), Ht.set(A, se), se;
  }
  Ht.size >= dp && Ht.delete(Ht.keys().next().value);
  const O = fp(v, S), $ = O.getContext("2d"), R = $.createImageData(v, S), V = R.data, w = Math.max(0, e - t), z = Math.max(0, Math.min(1, n)), W = 1 + M;
  for (let se = 0; se < S; se++)
    for (let _e = 0; _e < v; _e++) {
      const T = _e + 0.5 - e, Y = se + 0.5 - t, J = Math.max(Math.abs(T) - w, 0), ge = Math.hypot(J, Y) / t;
      if (ge >= 1) continue;
      const he = ge <= z ? 1 : Math.max(0, (1 - ge) / Math.max(1e-4, 1 - z)), re = 1 - ge, B = 1 + M * (1 - re) * (1 - re), D = 1 - k * re * re, I = B * D / W;
      let Z = 1;
      if (N > 0) {
        const Ye = Math.floor((Y + t) / 1.5), qe = Math.floor((T + e) / 8), vt = Po(ma(Ye * 41 + 500, qe * 19 + 300));
        Z = 1 - N * 0.42 * vt;
      }
      const ce = Math.round(255 * Math.min(1, g * he * I * Z));
      if (ce <= 0) continue;
      const Oe = (se * v + _e) * 4;
      V[Oe] = u, V[Oe + 1] = d, V[Oe + 2] = b, V[Oe + 3] = ce;
    }
  return $.putImageData(R, 0, 0), Ht.set(A, O), O;
}
function ma(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Po(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function TM(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(u) - b, 0), v = Math.hypot(g, d) / r;
  if (v >= 1) return 0;
  const S = Po(ma(e * 17 + 3, t * 13 + 7)), M = v + a * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const k = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), N = FM(e, t, u, d, n, r), A = a * 0.55;
  if (N < A) return 0;
  const $ = 0.45 + 0.55 * ((N - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, c * k * $));
}
function FM(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = Po(ma(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), v = Po(ma(b * 23 + 800, g * 29 + 500)), S = Po(ma(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + S * 0.15;
}
function DM(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), S = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (Ht.has(S)) {
    const $ = Ht.get(S);
    return Ht.delete(S), Ht.set(S, $), $;
  }
  Ht.size >= dp && Ht.delete(Ht.keys().next().value);
  const M = fp(b, g), k = M.getContext("2d"), N = k.createImageData(b, g), A = N.data, O = Math.max(0, Math.min(1, n));
  for (let $ = 0; $ < g; $++)
    for (let R = 0; R < b; R++) {
      const V = TM(R, $, e, t, O, v, d);
      if (V <= 0) continue;
      const w = ($ * b + R) * 4;
      A[w] = a, A[w + 1] = c, A[w + 2] = u, A[w + 3] = V;
    }
  return k.putImageData(N, 0, 0), Ht.set(S, M), M;
}
function lb(e, t, n) {
  var N, A;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = CM(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = LM(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((N = t == null ? void 0 : t.angle) == null ? void 0 : N.value) ?? 0), b = IM(t, o), g = String(((A = t == null ? void 0 : t.targetSpace) == null ? void 0 : A.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const O = o * u, $ = o, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), w = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = OM(O, $, a, c, R, V, w);
  } else if (r === "crayon") {
    const O = o * u, $ = o, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = DM(O, $, a, c, R);
  } else
    k = EM(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: M, latitudeCorrection: v };
}
function LM(e) {
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
function RM(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Hg(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function pp(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, v = b * e.radiusPx * o, S = ma(t, n);
    for (let M = 0; M < g; M++) {
      const k = Po(S + M * 2) * Math.PI * 2, N = Math.sqrt(Po(S + M * 2 + 1)) * v, A = t + Math.cos(k) * N, O = n + Math.sin(k) * N, $ = Math.max(0.5, e.radiusPx * o * 0.48), R = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, w = $ * e.aspect * V;
      Hg(e, A, O, $, w);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  Hg(e, t, n, a, d);
}
function Gg(e, t, n) {
  const r = AM(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = lb(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * o;
    const k = Number(r[S].v || 0) * a;
    S > 0 && Math.abs(M - u[S - 1].x) > o * 0.5 && (M += M < u[S - 1].x ? o : -o), u.push({ x: M, y: k });
  }
  if (pp(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], g = u[0], v = 0;
  for (let S = 1; S < u.length; S++) {
    const M = u[S], k = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    S === 1 ? v = js(c, g.x, g.y, k.x, k.y, v) : v = xc(c, d, g, k, M, v), d = b, b = M, g = k;
  }
  u.length === 2 ? js(c, g.x, g.y, b.x, b.y, v) : xc(c, d, g, b, b, v), e.restore();
}
function Zl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = RM(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = PM(r[S]);
    let k = Number(M.x || 0) * o;
    S > 0 && Math.abs(k - u[S - 1].x) > o * 0.5 && (k += k < u[S - 1].x ? o : -o), u.push({ x: k, y: Number(M.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function g(S) {
    e.beginPath(), e.moveTo(u[0].x + S, u[0].y);
    for (let M = 1; M < u.length; M++) e.lineTo(u[M].x + S, u[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function Tl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Zl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Gg(e, t, n) : (us = Ki(us, n.width, n.height), Jt(us), Gg(us.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(us.canvas, 0, 0), e.restore());
}
function po(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function js(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    pp(e, t + c * g, n + u * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function xc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, v = u, S = v + d, M = S + b, k = S - v, N = 16;
  let A = a, O = n.x, $ = n.y;
  for (let R = 1; R <= N; R++) {
    const V = v + k * R / N, w = ((v - V) * t.x + (V - g) * n.x) / (v - g), z = ((v - V) * t.y + (V - g) * n.y) / (v - g), W = ((S - V) * n.x + (V - v) * r.x) / (S - v), se = ((S - V) * n.y + (V - v) * r.y) / (S - v), _e = ((M - V) * r.x + (V - S) * o.x) / (M - S), T = ((M - V) * r.y + (V - S) * o.y) / (M - S), Y = ((S - V) * w + (V - g) * W) / (S - g), J = ((S - V) * z + (V - g) * se) / (S - g), te = ((M - V) * W + (V - v) * _e) / (M - v), ge = ((M - V) * se + (V - v) * T) / (M - v), he = ((S - V) * Y + (V - v) * te) / (S - v), re = ((S - V) * J + (V - v) * ge) / (S - v);
    A = js(e, O, $, he, re, A), O = he, $ = re;
  }
  return A;
}
function VM(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const M = lb(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), N = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", pp(M, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: N,
      distSinceStamp: 0,
      isEraser: A,
      layerKind: O,
      pointCount: 1
    }, On(e);
    return;
  }
  const g = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
  o.globalCompositeOperation = "source-over";
  const S = {
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
  d.pointCount === 1 ? d.distSinceStamp = js(S, d.lastMidX, d.lastMidY, g, v, d.distSinceStamp) : d.distSinceStamp = xc(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = g, d.lastMidY = v, d.pointCount++, On(e);
}
function dd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = aa(t, n), c = {
    descriptor: r,
    committedMask: aa(t, n),
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
    committedPaint: aa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, d = aa(t, n);
  let b = null, g = "", v = null;
  const S = /* @__PURE__ */ new Map();
  let M = null;
  function k(te) {
    return {
      actionGroupId: te,
      descriptor: r,
      committedPaint: aa(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function N(te) {
    let ge = o.get(te);
    return ge || (ge = k(te), o.set(te, ge)), ge;
  }
  function A(te) {
    return g === "mask" ? c : b ? N(b) : u;
  }
  function O(te) {
    var I;
    const ge = !v || v.length !== te.length || te.some((Z, ce) => Z !== v[ce]), he = g === "paint" && ((I = b ? o.get(b) : u) == null ? void 0 : I.activeStroke) || null;
    let re = c.displayDirty || u.displayDirty || ge;
    for (const Z of te) {
      const ce = o.get(Z);
      if (ce != null && ce.displayDirty) {
        re = !0;
        break;
      }
    }
    if (he && (re = !0), !re) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const Z of te) {
      const ce = o.get(Z);
      ce && (ce.displayDirty = !1);
    }
    v = [...te];
    const B = d.ctx;
    Jt(d);
    const D = !!(he != null && he.isEraser);
    for (const Z of te) {
      const ce = o.get(Z);
      if (!ce) continue;
      const Ye = b === ce.actionGroupId && g === "paint" ? ce.activeStroke : null;
      if (D)
        qt = Ki(qt, t, n), Jt(qt), qt.ctx.drawImage(ce.committedPaint.canvas, 0, 0), po(qt.ctx, a.canvas), B.drawImage(qt.canvas, 0, 0);
      else if (B.drawImage(ce.committedPaint.canvas, 0, 0), Ye) {
        const qe = ce.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ye.strokeOpacity ?? 1));
        B.save(), B.globalAlpha = qe, B.drawImage(a.canvas, 0, 0), B.restore();
      }
    }
  }
  function $(te) {
    var he, re, B, D, I;
    for (const Z of o.values())
      Jt(Z.committedPaint), Jt(Z.currentStroke), Z.activeStroke = null, On(Z);
    Jt(c.committedMask), Jt(c.currentStroke), c.activeStroke = null, c.painted = !1, S.clear(), On(c), On(u), v = null;
    const ge = [
      ...Array.isArray((re = (he = te == null ? void 0 : te.painting) == null ? void 0 : he.paint) == null ? void 0 : re.strokes) ? te.painting.paint.strokes : [],
      ...Array.isArray((D = (B = te == null ? void 0 : te.painting) == null ? void 0 : B.mask) == null ? void 0 : D.strokes) ? te.painting.mask.strokes : []
    ];
    for (const Z of ge) {
      if (((I = Z == null ? void 0 : Z.targetSpace) == null ? void 0 : I.kind) !== "ERP_GLOBAL") continue;
      const ce = String((Z == null ? void 0 : Z.layerKind) || "paint"), Ye = String((Z == null ? void 0 : Z.toolKind) || "pen") === "eraser";
      if (ce === "mask") {
        const qe = c.descriptor;
        Ye ? (qt = Ki(qt, qe.width, qe.height), Jt(qt), Tl(qt.ctx, Z, qe), po(c.committedMask.ctx, qt.canvas)) : (Tl(c.committedMask.ctx, Z, qe), c.painted = !0);
        continue;
      }
      if (Ye) {
        qt = Ki(qt, r.width, r.height), Jt(qt), Tl(qt.ctx, Z, r);
        for (const qe of o.values())
          po(qe.committedPaint.ctx, qt.canvas), On(qe);
      } else {
        const qe = String((Z == null ? void 0 : Z.actionGroupId) || "__default__"), vt = N(qe), j = vt.descriptor;
        Tl(vt.committedPaint.ctx, Z, j), On(vt);
      }
    }
    O([...o.keys()]);
  }
  function R(te, ge) {
    g = String((te == null ? void 0 : te.layerKind) || "");
    const he = String((te == null ? void 0 : te.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Jt(c.currentStroke), c.activeStroke = null, On(c);
    else {
      const re = he ? u : N(String((te == null ? void 0 : te.actionGroupId) || "__default__"));
      b = he ? "" : String((te == null ? void 0 : te.actionGroupId) || "__default__"), Jt(re.currentStroke), re.activeStroke = null, On(re);
    }
  }
  function V(te, ge) {
    var ce;
    const he = String((te == null ? void 0 : te.layerKind) || "paint"), re = String((te == null ? void 0 : te.toolKind) || "") === "eraser", B = he === "mask" ? c : re ? u : N(String((te == null ? void 0 : te.actionGroupId) || b || "__default__")), D = B.activeStroke, I = B.descriptor;
    if (D && D.pointCount > 1) {
      const Oe = B.currentStroke.ctx;
      Oe.globalCompositeOperation = "source-over";
      const Ye = {
        ctx: Oe,
        stampTex: D.stampTex,
        radiusPx: D.radiusPx,
        spacingPx: D.spacingPx,
        desc: I,
        aspect: D.aspect,
        angle: D.angle,
        stampKind: D.stampKind,
        scatter: D.scatter,
        latitudeCorrection: D.latitudeCorrection
      };
      D.pointCount === 2 ? js(Ye, D.lastMidX, D.lastMidY, D.prev.x, D.prev.y, D.distSinceStamp) : xc(Ye, D.pprev, { x: D.lastMidX, y: D.lastMidY }, D.prev, D.prev, D.distSinceStamp);
    }
    B.lassoPreviewActive && (Jt(B.currentStroke), Zl(B.currentStroke.ctx, te, I), B.lassoPreviewActive = !1);
    const Z = he === "mask" ? c.committedMask : B.committedPaint;
    if (re && he === "paint")
      for (const Oe of o.values())
        po(Oe.committedPaint.ctx, B.currentStroke.canvas), On(Oe);
    else if (re)
      po(Z.ctx, B.currentStroke.canvas);
    else {
      he === "mask" && (c.painted = !0);
      const Oe = Math.max(0, Math.min(1, (D == null ? void 0 : D.strokeOpacity) ?? 1));
      Z.ctx.save(), Z.ctx.globalAlpha = Oe, Z.ctx.drawImage(B.currentStroke.canvas, 0, 0), Z.ctx.restore();
    }
    MM() && (String((te == null ? void 0 : te.toolKind) || ""), String((I == null ? void 0 : I.kind) || ""), Number((I == null ? void 0 : I.width) || 0), Number((I == null ? void 0 : I.height) || 0), String(((ce = te == null ? void 0 : te.targetSpace) == null ? void 0 : ce.viewMode) || ""), Number((te == null ? void 0 : te.aspect) ?? 1), $g(B.currentStroke.canvas), $g(Z.canvas), void 0), Jt(B.currentStroke), B.activeStroke = null, On(B), S.clear(), b = null, g = "", O([...o.keys()]);
  }
  function w(te) {
    if (g === "mask")
      Jt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, On(c);
    else if (g === "paint" && !b)
      Jt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, On(u);
    else if (b) {
      const ge = o.get(b);
      ge && (Jt(ge.currentStroke), ge.activeStroke = null, ge.lassoPreviewActive = !1, On(ge));
    }
    S.clear(), b = null, g = "", O([...o.keys()]);
  }
  function z(te, ge) {
    var re;
    if (g = String((te == null ? void 0 : te.layerKind) || ""), String(((re = te == null ? void 0 : te.geometry) == null ? void 0 : re.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Jt(c.currentStroke), Zl(c.currentStroke.ctx, te, c.descriptor), c.lassoPreviewActive = !0, On(c);
      else {
        const B = String((te == null ? void 0 : te.toolKind) || "") === "eraser", D = B ? u : N(String((te == null ? void 0 : te.actionGroupId) || b || "__default__"));
        b = B ? "" : String((te == null ? void 0 : te.actionGroupId) || b || "__default__"), Jt(D.currentStroke), Zl(D.currentStroke.ctx, te, D.descriptor), D.lassoPreviewActive = !0, On(D);
      }
      O([...o.keys()]);
    }
  }
  function W(te) {
    return O(te ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function se(te) {
    return o.get(String(te)) ?? null;
  }
  function _e() {
    return [...o.keys()];
  }
  function T(te) {
    var Oe;
    const ge = o.get(String(te));
    if (!ge) return null;
    const he = g === "paint" && b === ge.actionGroupId, re = g === "paint" && ((Oe = b ? o.get(b) : u) == null ? void 0 : Oe.activeStroke) || null, B = !!(re != null && re.isEraser), D = he ? ge.activeStroke : null;
    if (!B && !D) return ge.committedPaint.canvas;
    const I = `${ge.revision}:${u.revision}:${B}`, Z = S.get(ge.actionGroupId);
    if ((Z == null ? void 0 : Z.key) === I) return Z.surface.canvas;
    const ce = Ki((Z == null ? void 0 : Z.surface) ?? null, t, n);
    return Jt(ce), ce.ctx.drawImage(ge.committedPaint.canvas, 0, 0), B ? po(ce.ctx, a.canvas) : (ce.ctx.save(), ce.ctx.globalAlpha = ge.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, D.strokeOpacity ?? 1)), ce.ctx.drawImage(a.canvas, 0, 0), ce.ctx.restore()), S.set(ge.actionGroupId, { key: I, surface: ce }), ce.canvas;
  }
  function Y() {
    const te = g === "mask" ? c.activeStroke : null;
    return !c.painted && (!te || te.isEraser) ? null : `${c.revision}:${!!te}`;
  }
  function J() {
    const te = Y();
    if (te === null)
      return M = null, null;
    if ((M == null ? void 0 : M.key) === te) return M.surface.canvas;
    const ge = Ki((M == null ? void 0 : M.surface) ?? null, t, n);
    Jt(ge);
    const he = g === "mask" ? c.activeStroke : null;
    return he != null && he.isEraser ? (qt = Ki(qt, t, n), Jt(qt), qt.ctx.drawImage(c.committedMask.canvas, 0, 0), po(qt.ctx, a.canvas), _f(ge.ctx, qt.canvas)) : (_f(ge.ctx, c.committedMask.canvas), he && _f(ge.ctx, a.canvas)), M = { key: te, surface: ge }, ge.canvas;
  }
  return {
    rebuildCommitted: $,
    beginStroke: R,
    appendStrokePoint: VM,
    updateActiveStroke: z,
    commitActiveStroke: V,
    cancelActiveStroke: w,
    getErpTarget: W,
    ensureTarget: A,
    getGroupTarget: se,
    getGroupDisplayCanvas: T,
    getMaskDisplayCanvas: J,
    getMaskDisplayRevision: Y,
    getAllGroupIds: _e
  };
}
function ne(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function hp(e, t) {
  let n = jt(t) - jt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const pd = 3;
function fs(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function kc(e, t = 0) {
  const n = fs(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = fs(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = fs(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = fs(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(fs(t) || 0);
}
function cb(e) {
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
const Kg = Math.PI / 180, Wg = 0.12, $M = pd, zM = 35, jM = 140, bs = 100, HM = 20, Bg = 0.8;
function GM(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = ne(Number(e || bs), 1, 179) * Kg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Kg;
}
function mp(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: bs })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b($, R = null) {
    u && u($, R);
  }
  function g($, R, V = null, w = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number($ || 0), d.drag.lastY = Number(R || 0), d.drag.lastTs = Number(w || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function v($, R, V = "pano", w = performance.now()) {
    if (!d.drag.active) return !1;
    const z = Number(w || performance.now()), W = Number($), se = Number(R), _e = W - d.drag.lastX, T = se - d.drag.lastY;
    d.drag.lastX = W, d.drag.lastY = se, d.drag.lastTs = z;
    const Y = r() || { x: 1, y: 1 }, J = Number(Y.x || 1), te = Number(Y.y || 1), ge = { ...t() };
    let he = 0, re = 0;
    if (V === "unwrap") {
      const D = o() || { w: 1, h: 1 }, I = Math.max(1, Number(D.w || 1)), Z = Math.max(1, Number(D.h || 1)), ce = _e / I, Oe = T / Z;
      he = -ce * 360 * J, re = Oe * 180 * te;
    } else {
      const D = a() || { w: 0, h: 0 }, I = Math.max(1, Number(D.w || 0)), Z = Math.max(1, Number(D.h || 0));
      if (I > 1 && Z > 1) {
        const ce = ne(Number(ge.fov || bs), 1, 179), Oe = ne(GM(ce, I, Z), 0.1, 179);
        he = -(_e / I) * ce * J, re = T / Z * Oe * te;
      } else
        he = -_e * Wg * J, re = T * Wg * te;
    }
    ge.yaw = jt(Number(ge.yaw || 0) + he), ge.pitch = ne(Number(ge.pitch || 0) + re, -89.9, 89.9), n(ge), d.velHistory.push({ ts: z, yaw: ge.yaw, pitch: ge.pitch });
    let B = 0;
    for (; B < d.velHistory.length - 1 && d.velHistory[B].ts < z - 100; ) B++;
    return B > 0 && d.velHistory.splice(0, B), d.inertia.active = !1, d.inertia.lastTs = z, c(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: he, dPitch: re }), !0;
  }
  function S($ = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const R = Number($ || performance.now());
    d.drag.lastTs = R;
    const V = d.velHistory.filter((z) => R - z.ts <= 80);
    if (V.length >= 2) {
      const z = V[0], W = V.at(-1), se = Math.max(1e-3, (W.ts - z.ts) / 1e3);
      let _e = W.yaw - z.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / se, d.inertia.vy = (W.pitch - z.pitch) / se;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const w = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = w > HM, d.inertia.lastTs = R, b("drag", { phase: "end", speed: w, inertiaActive: d.inertia.active }), !0;
  }
  function M($ = performance.now()) {
    if (!d.inertia.active) return !1;
    const R = Number($ || performance.now()), V = Math.max(1e-3, (R - (d.inertia.lastTs || R)) / 1e3);
    d.inertia.lastTs = R;
    const w = { ...t() };
    w.yaw = jt(Number(w.yaw || 0) + d.inertia.vx * V), w.pitch = ne(Number(w.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const z = Math.exp(-5.5 * V);
    return d.inertia.vx *= z, d.inertia.vy *= z, Math.abs(d.inertia.vx) < Bg && Math.abs(d.inertia.vy) < Bg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(w), c(), d.inertia.active;
  }
  function k() {
    const $ = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], $;
  }
  function N($) {
    const R = Math.sign(Number($ || 0));
    if (!R) return !1;
    const V = { ...t() }, w = Number(V.fov || bs);
    return V.fov = ne(w + R * $M, zM, jM), n(V), c(), b("wheel", { deltaSign: R, fovBefore: w, fovAfter: V.fov }), !0;
  }
  function A($, R = 0) {
    return N(kc($, R));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: bs }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: v,
    endDrag: S,
    stepInertia: M,
    stopMotion: k,
    applyWheel: N,
    applyWheelEvent: A,
    resetView: O
  };
}
const Mt = Math.PI / 180, hn = 180 / Math.PI;
function Sr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Mc(e, t) {
  return Sr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Nc(e, t) {
  return Sr(e.x * t, e.y * t, e.z * t);
}
function wf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function gp(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Sr(e.x / t, e.y / t, e.z / t);
}
function tr(e, t) {
  const n = e * Mt, r = t * Mt, o = Math.cos(r);
  return Sr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Ca(e, t, n = 0) {
  const r = Number(e || 0) * Mt, o = Number(t || 0) * Mt, a = n * Mt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), v = Math.sin(a);
  return {
    right: Sr(
      c * g - u * b * v,
      d * v,
      -u * g - c * b * v
    ),
    up: Sr(
      -c * v - u * b * g,
      d * g,
      u * v - c * b * g
    ),
    fwd: Sr(u * d, b, c * d)
  };
}
function Pc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function KM() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function WM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = It(r.z_index ?? r.zIndex, t.length);
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
function BM(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function UM(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = It(e.t, 0), r = It(e.widthScale, null), o = It(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = It(e.u, null), c = It(e.v, null);
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
    const a = It(e.u, null), c = It(e.v, null);
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
function Fl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = UM(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function YM(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Fl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Fl(e.points, t, 1);
  if (!a) return null;
  const c = Fl(e.rawPoints, t, 1), u = Fl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function XM(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = BM(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = YM(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = It(e.size, null), c = It(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = It(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, It(S.r, 0))),
      g: Math.max(0, Math.min(1, It(S.g, 0))),
      b: Math.max(0, Math.min(1, It(S.b, 0))),
      a: Math.max(0, Math.min(1, It(S.a, 1)))
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
    hardness: It(e.hardness, null),
    flow: It(e.flow, null),
    spacing: It(e.spacing, null),
    createdAt: Math.trunc(It(e.createdAt, 0)),
    color: v,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Ug(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = XM(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function qM(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), n = It(e.v0, null), r = It(e.u1, null), o = It(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function JM(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function ZM(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = qM(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: JM(e.transform)
  } : null;
}
function QM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = ZM(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ga(e) {
  const t = KM();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: WM(e.groups),
    paint: Ug(e.paint, "paint"),
    mask: Ug(e.mask, "mask"),
    raster_objects: QM(e.raster_objects)
  };
}
const kr = 1, Mr = 179, hd = 85;
function su(e) {
  const t = ((nt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function ub(e, t) {
  let n = nt(e, 0) - nt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function fb(e, t, { shiftKey: n = !1 } = {}) {
  let r = nt(e, 0) + nt(t, 0) * hn;
  return n && (r = Math.round(r / 15) * 15), su(r);
}
function nt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Xi(e = {}) {
  const t = ne(nt(e.hFOV_deg || 90, 90), kr, Mr), n = ne(nt(e.vFOV_deg || 60, 60), kr, Mr), r = Math.tan(t * Mt * 0.5), o = Math.tan(n * Mt * 0.5);
  return {
    yawDeg: nt(e.yaw_deg, 0),
    pitchDeg: nt(e.pitch_deg, 0),
    rollDeg: nt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function Ao(e, t) {
  const n = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Xi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function yp(e, t) {
  const n = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, nt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function bp(e, t) {
  const n = Math.max(1e-12, nt(t, 1)), r = Math.max(1e-6, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = ne(2 * Math.atan(r / (2 * n)) * hn, kr, Mr), c = ne(2 * Math.atan(o / (2 * n)) * hn, kr, Mr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function eN(e, t, n) {
  const r = nt(e == null ? void 0 : e.x, 0), o = nt(e == null ? void 0 : e.y, 0), a = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Xi(t), d = Math.max(1e-12, nt(n, 1)), b = 2 * d * u.tanHalfX, g = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function vp(e, t, n = hd) {
  const r = Math.max(1e-12, nt(t, 1)), o = ne(nt(n, hd), 1, 89.999), a = r * Math.tan(o * Mt), c = Math.max(1, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function db(e, t, n) {
  const r = Math.max(1e-12, nt(t, 1));
  return {
    x: (nt(n == null ? void 0 : n.x, 0) - nt(e == null ? void 0 : e.x, 0)) / r,
    y: -(nt(n == null ? void 0 : n.y, 0) - nt(e == null ? void 0 : e.y, 0)) / r
  };
}
function tN(e, t) {
  const n = ne(nt(e, 90), kr, Mr), r = Math.max(1e-6, nt(t, 1));
  return ne(
    2 * Math.atan(Math.tan(n * Mt * 0.5) / r) * hn,
    kr,
    Mr
  );
}
function Ql(e, t) {
  const n = ne(nt(e, 60), kr, Mr), r = Math.max(1e-6, nt(t, 1));
  return ne(
    2 * Math.atan(Math.tan(n * Mt * 0.5) * r) * hn,
    kr,
    Mr
  );
}
function Yg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function nN(e, t) {
  const n = Yg(e, 1), r = Yg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, g) => g ? u(g, b % g) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Co(e) {
  const t = ne(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Mt, n = ne(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Mt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function wo(e) {
  const t = Co(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || nN(t, 1);
}
function _p(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = wo(t), t;
}
function pb({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? ne(c, kr, Mr) : ne(Math.min(42, nt(o, 100) * 0.42), 8, 96);
  return _p({
    id: String(e),
    label: "Frame 1",
    yaw_deg: nt(t, 0),
    pitch_deg: ne(nt(n, 0), -89.9, 89.9),
    roll_deg: su(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function gi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : wo(e);
}
function hb(e, t) {
  const n = Xi(e), r = nt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * hn, a = 2 * Math.atan(n.tanHalfY * r) * hn;
  return o < kr || o > Mr || a < kr || a > Mr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function mb(e, t, n = pd) {
  const r = Math.sign(nt(t, 0)), o = Math.abs(nt(n, pd));
  if (!r || !(o > 0)) return null;
  const a = Xi(e), c = a.hFovDeg + r * o;
  if (c < kr || c > Mr) return null;
  const u = Math.tan(c * Mt * 0.5);
  return hb(e, u / a.tanHalfX);
}
function gb(e, t) {
  const n = Xi(e), r = Ca(n.yawDeg, n.pitchDeg, n.rollDeg), o = nt(t == null ? void 0 : t.x, 0), a = nt(t == null ? void 0 : t.y, 0);
  return gp(Mc(Mc(r.fwd, Nc(r.right, o)), Nc(r.up, a)));
}
function rN(e) {
  return Sr(e.x, e.y, -e.z);
}
function ec(e) {
  return Sr(e.x, e.y, -e.z);
}
function ir(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Ca(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function yb(e) {
  const t = ec(Sr(e[0][0], e[1][0], e[2][0])), n = ec(Sr(e[0][1], e[1][1], e[2][1])), r = ec(Sr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * hn, pitchDeg: a * hn, rollDeg: d * hn };
}
function Hs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Fo(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, g = t + a + b;
  if (g > 0) {
    const S = 0.5 / Math.sqrt(g + 1);
    return { x: (d - c) * S, y: (r - u) * S, z: (o - n) * S, w: 0.25 / S };
  }
  if (t > a && t > b) {
    const S = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * S, y: (n + o) / S, z: (r + u) / S, w: (d - c) / S };
  }
  if (a > b) {
    const S = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / S, y: 0.25 * S, z: (c + d) / S, w: (r - u) / S };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function Dl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const xo = 1e-6, md = 1e-6, iN = 1e-9;
function Gs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function oN(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Gs(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Gs(0, r, a, 1, 0.5 * (c + u));
}
function Ma(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Na(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((S) => -S / o), u = r.map((S) => S / a);
  if (c.reduce((S, M, k) => S + M * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((S, M) => (S * a + u[M] * o) / (o + a)), b = (S) => Math.sqrt(S.reduce((M, k) => M + k * k, 0)), g = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= g ? d : d.map((S) => S * g / v);
}
function bb(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((g, v) => a[v] - g);
  let d = u;
  Ma(e, r) && (d = Na(t, r, n[r - 1].map((g, v) => g - o[v]), u).map((g) => g * c));
  let b = u;
  return Ma(e, r + 1) && (b = Na(t, r + 1, u.map((g) => -g), n[r + 2].map((g, v) => g - a[v])).map((g) => g * c)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function vb(e, t, n, r, o) {
  const [[a], [c]] = bb(e, t, n.map((u) => [u]), r);
  return Gs(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function aN(e, t, n, r) {
  var b, g;
  const o = e.map((v) => v.value);
  let [a, c] = bb(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Gs(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function Ac([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function sN(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Sf(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function lN([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function gd(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ua(e, t) {
  return lN(Ac([-e[0], -e[1], -e[2], e[3]], t));
}
function xf(e, t, n) {
  return Ac(e, gd(ua(e, t).map((r) => n * r)));
}
function kf(e, t) {
  const n = sN(e, t);
  if (Math.abs(n) > md) return n < 0;
  const [r, o, a] = ua(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > md) return c < 0;
  return !1;
}
function Ll(e) {
  const { x: t, y: n, z: r, w: o } = Fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function yd(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function cN(e, t, n, r) {
  const o = Ll(e[n].value);
  let a = Ll(e[n + 1].value);
  kf(o, a) && (a = Sf(a));
  const c = t[n + 1] - t[n], u = ua(o, a);
  let d = u;
  if (Ma(e, n)) {
    let w = Ll(e[n - 1].value);
    kf(w, o) && (w = Sf(w)), d = Na(t, n, ua(o, w), u).map((z) => z * c);
  }
  let b = u;
  if (Ma(e, n + 1)) {
    let w = Ll(e[n + 2].value);
    kf(a, w) && (w = Sf(w)), b = Na(t, n + 1, ua(a, o), ua(a, w)).map((z) => z * c);
  }
  const g = Ac(o, gd(d.map((w, z) => 0.5 * (w - u[z])))), v = Ac(a, gd(u.map((w, z) => 0.5 * (w - b[z])))), [S, M, k, N] = xf(xf(o, a, r), xf(g, v, r), 2 * r * (1 - r)), { yawDeg: A, pitchDeg: O, rollDeg: $ } = yb(Hs({ x: S, y: M, z: k, w: N })), R = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: yd(A, R.yaw_deg, V.yaw_deg, r),
    pitch_deg: O,
    roll_deg: yd($, R.roll_deg, V.roll_deg, r)
  };
}
function Ks(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Cc(e) {
  return Math.sqrt(Ks(e, e));
}
function Ic(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function _b(e, t) {
  const n = Ks(e, t), r = t.map((c, u) => c - n * e[u]), o = Cc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function sa(e, t) {
  const n = Cc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Rl(e, t, n) {
  return sa(e, _b(e, t).map((r) => n * r));
}
function Mf(e, t) {
  const n = Ic(e[t].value), r = Ic(e[t + 1].value), o = Ks(n, r), a = o < 0 && Cc(r.map((d, b) => d - o * n[b])) <= md;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = _b(n, r);
  const u = Cc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function uN(e, t, n, r) {
  const o = Ic(e[n].value), a = Ic(e[n + 1].value), [c, u, d] = Mf(e, n);
  let b = c, g = u;
  const v = t[n + 1] - t[n];
  Ma(e, n) && (b = Na(t, n, Mf(e, n - 1)[1].map((R) => -R), b).map((R) => R * v)), Ma(e, n + 1) && (g = Na(t, n + 1, g.map((R) => -R), Mf(e, n + 1)[0]).map((R) => R * v));
  let S, M, k;
  if (d) {
    const R = Math.PI, V = Gs(0, Ks(b, c) / R / 3, R - Ks(g, u) / R / 3, R, r);
    [S, M, k] = sa(o, c.map((w) => V * w / R));
  } else {
    const R = Rl(sa(o, b.map((z) => z / 3)), sa(a, g.map((z) => -z / 3)), r), V = Rl(sa(o, b.map((z) => r * z / 3)), R, r), w = Rl(R, sa(a, g.map((z) => -(1 - r) * z / 3)), r);
    [S, M, k] = Rl(V, w, r);
  }
  const N = Math.hypot(S, k), A = e[n].value.yaw_deg, O = e[n + 1].value.yaw_deg;
  return { yaw_deg: N <= iN ? A + (O - A) * r : yd(Math.atan2(S, k) * 180 / Math.PI, A, O, r), pitch_deg: Math.atan2(M, N) * 180 / Math.PI };
}
function fN(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = vb(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function dN(e, t, n, r) {
  return vb(e, t, e.map((o) => o.value), n, r);
}
const pN = { position: aN, rotation: cN, direction: uN, size: fN };
function Wt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Dl(e[t].value);
  if (n <= r[0].frame + xo) return Dl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - xo) return Dl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + xo; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= xo || c.easing === "hold") return Dl(c.value);
  const u = r.map((b) => b.frame), d = oN(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (pN[t] ?? dN)(r, u, a, d);
}
function bd(e) {
  return Math.min(179, Math.max(0.1, e));
}
function hN(e) {
  return Math.min(1, Math.max(0, e));
}
function wb(e) {
  return Math.max(1e-6, e);
}
function Sb(e, t) {
  return t - (e.start - e.in);
}
function ya(e, t) {
  return t >= e.start - xo && (e.duration === null || t < e.start + e.duration - xo);
}
function wp(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: bd(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Ec(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Sb(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : wp(r, n),
    scene: {
      active: o.visible && ya(o.clip, n),
      clip_frame: a,
      position: Wt(o, "position", a),
      ...Wt(o, "rotation", a),
      scale: wb(Wt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => Io(c, n))
  };
}
function mN(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: wb(Wt(e, "scale", t))
    };
  const n = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: bd(n.hFOV_deg),
    vFOV_deg: bd(n.vFOV_deg)
  };
}
function Io(e, t) {
  const n = Sb(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ya(e.clip, t),
    clip_frame: n,
    ...mN(e, n),
    opacity: hN(Wt(e, "opacity", n))
  };
}
const gN = 2, yN = ["sky", "world"], vd = ["perspective", "erp"], bN = ["input", "output", "temp"], xb = [0.42, 0, 0.58, 1], kb = 1, Sp = 1e3, _d = 1e7, xp = _d;
function yn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function en(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function kp(e, t) {
  const n = en(e, t);
  return n !== null && n > 0 ? n : t;
}
function rr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function lu(e) {
  const t = en(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function tc(e) {
  const t = lu(e);
  return t === null ? null : rr(t, -_d, _d);
}
function Ia(e) {
  const t = kp(e, null);
  return t === null ? null : rr(t, kb, Sp);
}
function Mb(e) {
  const t = lu(e);
  return t !== null && t >= 1 ? Math.min(t, xp) : null;
}
function Ws(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Nb(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => en(n, null));
  return t.includes(null) ? null : t;
}
function Pb(e) {
  return Nb(e) || [0, 0, 0];
}
function Ab(e) {
  const t = yn(e) ? e : {};
  return {
    yaw_deg: en(t.yaw_deg, 0),
    pitch_deg: rr(en(t.pitch_deg, 0), -90, 90),
    roll_deg: en(t.roll_deg, 0)
  };
}
function vN(e) {
  return rr(en(e, 90), 0.1, 179);
}
function _N(e) {
  return kp(e, 1);
}
function wN(e) {
  const t = yn(e) ? e : {};
  return {
    yaw_deg: en(t.yaw_deg, 0),
    pitch_deg: rr(en(t.pitch_deg, 0), -90, 90)
  };
}
function SN(e) {
  return en(e, 0);
}
function xN(e) {
  const t = yn(e) ? e : {};
  return {
    hFOV_deg: rr(en(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: rr(en(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Cb(e) {
  return rr(en(e, 1), 0, 1);
}
const Mp = [["position", Pb], ["rotation", Ab], ["fov", vN]], cu = [["position", Pb], ["rotation", Ab], ["scale", _N]], Np = [["direction", wN], ["roll", SN], ["size", xN], ["opacity", Cb]], Pp = [...cu, ["opacity", Cb]];
function kN(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => en(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...xb];
}
function MN(e) {
  if (!yn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Nb(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function NN(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!yn(o)) continue;
    const a = tc(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: kN(o.easing) }, u = n ? MN(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Ap(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = yn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: NN(a.keyframes, o, r === "position") };
  }
  return n;
}
function Ib(e) {
  const t = yn(e) ? e : {}, n = tc(t.start), r = tc(t.in), o = tc(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function PN(e) {
  const t = yn(e) ? e : {}, n = rr(en(t.x0, 0), 0, 1), r = rr(en(t.y0, 0), 0, 1), o = rr(en(t.x1, 1), 0, 1), a = rr(en(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function AN(e) {
  if (!yn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: bN.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function CN(e) {
  const t = AN(e.source);
  if (!t) return null;
  const n = yN.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Ib(e.clip),
    visible: Ws(e.visible, !0),
    locked: Ws(e.locked, !1),
    crop: PN(e.crop),
    ...Ap(e, r ? Pp : Np)
  };
  return r || (o.z_index = lu(e.z_index) ?? 0), o;
}
function IN(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = yn(a) ? CN(a) : null;
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
function Eb(e) {
  if (!yn(e)) return null;
  const t = vd.includes(e.projection) ? e.projection : vd[0];
  return { aspect: kp(e.aspect, 1), projection: t, visible: Ws(e.visible, !0), ...Ap(e, Mp) };
}
function Cp() {
  return Eb({});
}
function Oc(e) {
  const t = yn(e.timeline) ? e.timeline : {}, n = yn(e.scene) ? e.scene : {};
  return {
    version: gN,
    timeline: {
      fps: Ia(t.fps) ?? 24,
      length: Mb(t.length)
    },
    camera: Eb(e.camera),
    scene: { clip: Ib(n.clip), visible: Ws(n.visible, !0), ...Ap(n, cu) },
    stickers: IN(e.stickers),
    painting: ga(e.painting),
    painting_layer: yn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Ws(e.painting_visible, !0)
  };
}
function EN(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!yn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function ON(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!yn(t)) return null;
  const n = rr(en(t.hFOV_deg, 90), 1, 179), r = rr(en(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function TN(e) {
  const t = yn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(yn) : [];
  return n.sort((r, o) => en(r.z_index, 0) - en(o.z_index, 0)), Oc({
    camera: ON(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: EN(r, t),
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
function ri(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Oc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!yn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? TN(t) : Oc(t);
}
const Nf = {
  state: { painting_visible: !0 },
  camera: { projection: vd[0], visible: !0 },
  scene: { visible: !0 }
};
function Pf(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function wd(e) {
  return JSON.stringify({
    ...Pf(e, Nf.state),
    camera: e.camera && Pf(e.camera, Nf.camera),
    scene: Pf(e.scene, Nf.scene)
  });
}
function Af(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Xg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Bs(e, t) {
  const n = Ia(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, o = (u) => lu(u * r), { length: a } = e.timeline, c = Xg(e.scene.clip, o);
  return Oc({
    timeline: { fps: n, length: a === null ? null : Math.max(1, o(a)) },
    camera: e.camera === null ? null : { ...e.camera, ...Af(e.camera, Mp, o, 0, 0) },
    scene: { clip: c.clip, visible: e.scene.visible, ...Af(e.scene, cu, o, c.anchor, c.newAnchor) },
    stickers: e.stickers.map((u) => {
      const { clip: d, anchor: b, newAnchor: g } = Xg(u.clip, o), v = u.placement === "world" ? Pp : Np;
      return { ...u, clip: d, ...Af(u, v, o, b, g) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Cf(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Ob(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Tb(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= xo);
}
function Fb(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Ob(e.keyframes[r - 1].easing) : [...xb];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Ln(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Cf(o.value, r);
    return;
  }
  const a = Tb(o, n);
  a ? a.value = Cf(a.value, r) : Fb(o, n, Cf(Wt(e, t, n), r));
}
function Ea(e) {
  return e.placement === "world" ? Pp.map(([t]) => t) : e.placement === "sky" ? Np.map(([t]) => t) : (e.clip ? cu : Mp).map(([t]) => t);
}
function FN(e, t) {
  for (const n of Ea(e))
    Tb(e[n], t) || Fb(e[n], t, Wt(e, n, t));
}
function DN(e) {
  const t = Ea(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function If(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function LN(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function RN(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Wt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function VN(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const u = e[c], d = u.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    u.keyframes = [
      ...u.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, v) => g.frame - v.frame);
  }
  return r;
}
function Db(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function $N(e, t, n) {
  const r = Db(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function zN(e, t, n, r) {
  for (const o of Db(e, t, n)) o.easing = Ob(r);
}
function jN(e, t) {
  e.start = Math.max(0, e.start + t);
}
function HN(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function GN(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function KN(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Tc(e) {
  return Ea(e).map((t) => e[t]);
}
function WN(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? Tc(e.camera).some((r) => r.keyframes.length > 0) : Lb(e, { camera: n });
}
function Fc(e) {
  return Tc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !KN(e.clip);
}
function Lb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Fc);
}
const BN = 1e5;
function Rb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of Tc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of Tc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return Number.isFinite(a) ? a : BN;
}
function UN(e) {
  return e > 0 ? Ia(Math.min(e, Sp)) : null;
}
function YN(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Mb(Math.max(1, Math.min(e, xp)));
}
const Ef = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], XN = 2e3;
function qN(e, t, n = 56) {
  const r = Ef.find((a) => a * t >= n) || Ef[Ef.length - 1], o = [];
  for (let a = 0; a < e && o.length < XN; a += r) o.push(a);
  return o;
}
function JN(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Vl = { text: null, parsed: null };
function er(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Dc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function ZN({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: er(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ga(null),
    painting_layer: null,
    ui_settings: Dc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Vb(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function QN(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function e2(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function t2(e) {
  return Array.isArray(e) ? e.map((t) => _p(t)) : [];
}
function n2(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function $b(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = ZN(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Vl.text === o ? a = Vl.parsed : (a = JSON.parse(o), Vl = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: QN(a.assets),
      stickers: e2(a.stickers),
      shots: t2(a.shots),
      painting: ga(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Dc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = Dc({ ...u.ui_settings, ...c })), u.output_preset = Vb(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = er(n.coverage), delete u.editor_history, u;
  } catch {
    return Vl = { text: o, parsed: null }, r;
  }
}
function r2(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function i2(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function o2(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function zb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, scene: u = null, camera: d = !1 } = t, b = Ia(t.fps);
  let g;
  try {
    g = ri(e);
  } catch {
    g = ri(null);
  }
  b && b !== g.timeline.fps && (g = Bs(g, b));
  const v = d && g.camera === null;
  if (v && (g = { ...g, camera: Cp() }), u) {
    let S = ri(u);
    b && b !== S.timeline.fps && (S = Bs(S, b)), g = { ...S, camera: g.camera, cutout_state: g };
  }
  return {
    ...g,
    ...v ? { default_camera: !0 } : {},
    coverage: er(o),
    bg_color: r,
    output_preset: Vb(n),
    ui_settings: Dc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function a2(e, t) {
  e.cutout_state && (e.cutout_state = Bs(e.cutout_state, t));
  const n = Bs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Ea(a)) a[u].keyframes = c[u].keyframes;
    }
}
function Ip(e, t) {
  const n = Io(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const s2 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function qg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function l2(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[s2[n]].keyframes.length));
}
function jb(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = qg(n, ["yaw_deg", "pitch_deg"]), a = qg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Ln(e, "direction", r, o), n.rot_deg !== void 0 && Ln(e, "roll", r, n.rot_deg), Object.keys(a).length && Ln(e, "size", r, a);
}
const uu = ["position_x", "position_y", "position_z"], nc = "camera";
function Jg(e, t) {
  const n = wp(e, t);
  return _p({
    id: nc,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: tN(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function c2(e) {
  return ri({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: jt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function u2(e) {
  return e - 360 * Math.round(e / 360);
}
function f2(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + u2(n[a] - r[a]));
  Object.keys(o).length && Ln(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && Ln(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Mt * 0.5) / Math.tan(n.vFOV_deg * Mt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && Ln(e, "position", t, [...n.position]);
}
function d2(e, t) {
  const n = Wt(e, "position", t), r = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(uu.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function p2(e, t, n, r) {
  const o = uu.indexOf(n);
  if (o >= 0) {
    const a = Wt(e, "position", t);
    a[o] = r, Ln(e, "position", t, a);
  } else n === "hFOV_deg" ? Ln(e, "fov", t, r) : Ln(e, "rotation", t, { [n]: r });
}
function h2(e, t, n) {
  Ln(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function m2(e, t) {
  const n = Io(e, t);
  return {
    ...Object.fromEntries(uu.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function g2(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = uu.indexOf(n);
  if (a >= 0) {
    const c = Wt(e, "position", o);
    c[a] = r, Ln(e, "position", o, c);
  } else n === "scale" ? Ln(e, "scale", o, r) : n === "opacity" ? Ln(e, "opacity", o, r / 100) : Ln(e, "rotation", o, { [n]: r });
}
function y2(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && Ln(e, o, r, n[o]);
}
function b2(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function v2(e, t, n) {
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
function rc(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Hb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ep(e, t, n, r) {
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
function _2(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = jt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Sd(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Gb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Kb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Wb(e) {
  e.default_camera && JSON.stringify(ri({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Cp()) && delete e.default_camera;
}
function Bb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = ri(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(Cp()) && (n.camera = null), wd(n);
}
function Ub(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = ri(n);
    if (wd(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && wd(Bs(o, a)) === t;
  } catch {
    return !1;
  }
}
const Of = 0.15, w2 = 0.01, S2 = 1e-3, x2 = 0.05, k2 = 4, Zg = 250, M2 = 16, Fr = 1, N2 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function dr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function ii(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function fu(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Oa(e, t, n = 0) {
  const r = ir(e, t, n), o = ii(r, 2);
  return { right: ii(r, 0), up: ii(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function P2(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function xd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function A2(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : xd(e, "3dof", n);
}
function C2(e) {
  return Oa(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function I2(e) {
  return dr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function qi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Os(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Op(e, t) {
  return Os(qi(t, e.position), Oa(e.yaw_deg, e.pitch_deg).forward);
}
function Tp(e) {
  return Math.max(e, 1e-6) * x2;
}
function Tf(e, t, n = null, r = Fr) {
  if (t) return t;
  const o = Tp(r);
  if (n && Op(e, n) > 0) {
    const a = qi(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : dr(e.position, a, o / c);
  }
  return dr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Qg(e, t = Fr) {
  return Math.max(e.distance, Tp(t));
}
function e0(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > k2 ? !1 : t.time - e.time < Zg || e.cost > M2 && t.time - e.wheelTime < Zg;
}
function Fp(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return { tanX: r, tanY: r * n / t };
}
function t0(e, t, n, r, o = I2(e)) {
  const a = e.roll_deg ?? 0, [c, u] = E2(t, n, a), d = jt(e.yaw_deg + c / r * 360), b = ne(e.pitch_deg - u / r * 360, -89.9, 89.9), g = ir(e.yaw_deg, e.pitch_deg, a), v = ir(d, b, a), S = qi(e.position, o), M = [0, 1, 2].map((N) => Os(ii(g, N), S)), k = { ...e, yaw_deg: d, pitch_deg: b, position: dr(o, fu(v, M)) };
  return { ...k, distance: Op(k, o) };
}
function E2(e, t, n) {
  const r = Math.cos(n * Mt), o = Math.sin(n * Mt);
  return [e * r + t * o, t * r - e * o];
}
function n0(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = C2(e), d = 2 * a * Fp(e, r, o).tanY / o;
  return { ...e, position: dr(dr(e.position, c, -t * d), u, n * d), distance: a };
}
function r0(e, t, n, r = Fr) {
  const o = qi(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * w2, d = n > 0 ? Math.min(Math.max(a * Of, u), a - c * S2) : -Math.max(a * Of / (1 - Of), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: dr(e.position, o, d / a) };
  return { ...b, distance: Math.max(Op(b, t), Tp(r)) };
}
function i0(e, t, n, r) {
  const { tanX: o, tanY: a } = Fp(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Oa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: dr(t.center, d, -u), distance: u };
}
function Ff(e, t, n, r = null) {
  return Yb({
    quaternion: Fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Fp(e, t, n).tanY) * hn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Yb(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Fr }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function Us(e, t, n, r) {
  const { right: o, up: a, forward: c } = Xb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Mt), g = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], S = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / g), y: r * 0.5 * (1 - S / d / b), z: d };
}
function Xb(e) {
  const t = Hs(e.quaternion), n = ii(t, 2);
  return { right: ii(t, 0), up: ii(t, 1), forward: n.map((r) => -r) };
}
function o0(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function O2({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function qb(e, t) {
  if (!e || !t.active) return null;
  const n = D2(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: kd(t),
    itemQuaternion: e.kind === "splat" ? N2 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function T2(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = qb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function F2(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function D2(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function kd(e) {
  return {
    position: [...e.position],
    quaternion: Fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Md(e, t) {
  return dr(e.position, fu(ir(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Nd(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Pd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function Ad(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function L2(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...Pd(t).map((a) => Md(e.scene, a)));
  for (const a of n) o.push(...Dp(a));
  for (const { box: a, value: c } of r) o.push(...Pd(a).map((u) => Md(c, u)));
  return o;
}
function R2(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: ir(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function Dp(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => dr(e.position, fu(e.rotation, [r, o, 0])));
}
function V2(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? Ad(Dp(o)) : a != null && a.box ? Ad(Pd(Nd(a.kind, a.box)).map((c) => Md(r, c))) : { center: [...r.position], radius: r.scale };
}
const $2 = 2, z2 = 0.5, j2 = 30;
function Jb(e, t) {
  const n = qi(t, e), r = Math.atan2(n[0], -n[2]) * hn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * hn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function H2(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * z2 : $2, a = t ? [...t] : dr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...qi(a, e.position)), u = c > 0 ? Jb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(j2 * 0.5 * Mt);
  return { position: a, rotation: u, scale: d };
}
function a0(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function G2(e) {
  return [0, 1, 2].map((t) => ii(e, t));
}
function s0(e, t, n, r) {
  if (e === "translate") return { position: dr(t.position, qi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Y2(n.scale, r.scale) / n.scale };
  const o = a0(Hs(r.quaternion), G2(Hs(n.quaternion))), a = a0(o, ir(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = yb(a);
  return Math.abs(u) <= K2 ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: W2(a, t.yaw_deg) } };
}
const K2 = 89.9;
function W2(e, t) {
  const n = ii(e, 0), r = ii(e, 1), o = Math.cos(t * Mt), a = Math.sin(t * Mt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * hn + 0;
}
const B2 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function U2(e, t, n, r, o) {
  if (!Us(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = Xb(e), d = qi(t, e.position), b = Os(d, a), g = Os(d, c), v = Os(d, u), S = Math.tan(e.fovY_deg * 0.5 * Mt), M = S * e.aspect, k = Math.hypot(b, g, v) * B2[n] * Math.min(1.9 * S, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const N = (V) => {
    const w = k * Math.sqrt(V * V + v * v - k * k);
    return [(V * v - w) / (v * v - k * k), (V * v + w) / (v * v - k * k)];
  }, [A, O] = N(b), [$, R] = N(g);
  return {
    minX: r * 0.5 * (1 + A / M),
    maxX: r * 0.5 * (1 + O / M),
    minY: o * 0.5 * (1 - R / S),
    maxY: o * 0.5 * (1 - $ / S)
  };
}
function Y2(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function X2(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function l0(e, t) {
  const n = ir(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Mt) * t, o = r / e.aspect, a = (b, g, v) => dr(e.position, fu(n, [b, g, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, g) => u.push([b, c[(g + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function q2(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = Us(e, c, r, o), b = Us(e, u, r, o);
    if (!d || !b) return !1;
    const g = b.x - d.x, v = b.y - d.y, S = ne(((n.x - d.x) * g + (n.y - d.y) * v) / Math.max(g * g + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + g * S - n.x, d.y + v * S - n.y) <= a;
  });
}
function J2(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function Z2(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Wt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Wt(r, "position", d);
  });
}
function Q2(e, t, n, r, o) {
  const a = Math.max(0, e) * n, c = Math.max(0, t) * n, u = Math.min(1, r * n / Math.max(a, 1), o * n / Math.max(c, 1));
  return {
    width: Math.max(1, Math.round(a * u)),
    height: Math.max(1, Math.round(c * u))
  };
}
const Zb = 0.28;
function Qb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return {
    quaternion: Fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * hn,
    aspect: r
  };
}
function Ts(e) {
  const t = Xi(e);
  return {
    quaternion: Fo(ir(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function c0(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = vp(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * hn,
      vFOV_deg: 2 * Math.atan(a / r) * hn
    }
  };
}
function e1(e, t, n) {
  const [[r, o, a], [c, u, d], [b, g, v]] = Hs(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * Mt), M = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, N = 1e-4) {
      const A = rN(k), O = r * A.x + c * A.y + b * A.z, $ = o * A.x + u * A.y + g * A.z, R = -(a * A.x + d * A.y + v * A.z), V = Math.max(R, N);
      return {
        x: t * 0.5 * (1 + O / V / M),
        y: n * 0.5 * (1 - $ / V / S),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, N) {
      const A = (k / t * 2 - 1) * M, O = (1 - N / n * 2) * S;
      return gp(ec({
        x: r * A + o * O - a,
        y: c * A + u * O - d,
        z: b * A + g * O - v
      }));
    }
  };
}
function eP(e, t, { media: n, zIndex: r, paintLayers: o, evaluated: a = Ec(e, t) }) {
  const c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const g = u.source.kind === "port" && !u.visible;
    if (!b.active && !g) return;
    const v = n(u);
    if (!v) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * Mt), M = Math.tan(b.vFOV_deg * 0.5 * Mt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: g ? Zb : b.opacity,
      zIndex: r(u),
      quaternion: Fo(ir(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * S,
        x1: (2 * k.x1 - 1) * S,
        y0: (1 - 2 * k.y1) * M,
        y1: (1 - 2 * k.y0) * M
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function t1(e, t, n, { media: r, paintLayers: o, evaluated: a }) {
  const c = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !c.has(u.id) && c.set(u.id, u);
  return eP(e, t, {
    media: (u) => {
      const d = c.get(u.id);
      return d ? r(d) : null;
    },
    zIndex: (u) => {
      var d;
      return Number(((d = c.get(u.id)) == null ? void 0 : d.z_index) || 0);
    },
    paintLayers: o,
    evaluated: a
  });
}
function tP(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function nP(e, t, n, { media: r, evaluated: o = Ec(e, t) }) {
  const a = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !a.has(u.id) && a.set(u.id, u);
  const c = [];
  return e.stickers.forEach((u, d) => {
    const b = o.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const g = a.get(u.id), v = g ? r(g) : null;
    if (!v) return;
    const { width: S, height: M } = tP(v.media), k = R2(b, u.crop, S, M);
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
function rP({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((c) => c.$) }) {
  let c = null, u = null, d = !1, b = 0;
  const g = () => {
    u = sb(c.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, v = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(k) {
      return u && !v.lost ? u.render(k) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(k) {
      return u && !v.lost ? u.renderUnwrap(k) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(k, N) {
      return u && !v.lost ? u.resize(k, N) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(k, N) {
      u && !v.lost && u.clear(k, N);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(k) {
      return u ? u.sceneBox(k) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(k, N, A, O, $) {
      return u && !v.lost ? u.pick(k, N, A, O, $) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(k, N, A, O, $) {
      return u && !v.lost ? u.pickSurface(k, N, A, O, $) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(k, N, A, O, $) {
      return u && !v.lost ? u.pickSticker(k, N, A, O, $) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(k, N, A, O, $, R) {
      return u && !v.lost ? u.gizmoPointer(k, N, A, O, $, R) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return b + (u ? u.contentRevision() : 0);
    },
    dispose() {
      d = !0, e.removeEventListener("webglcontextlost", S), e.removeEventListener("webglcontextrestored", M), u == null || u.dispose(), u = null;
    }
  };
  function S(k) {
    k.preventDefault(), !(d || v.lost) && (v.lost = !0, v.ready = !1, u == null || u.dispose({ lost: !0 }));
  }
  function M() {
    d || !v.lost || queueMicrotask(() => {
      d || !v.lost || (u && (b += u.contentRevision() + 1), u == null || u.dispose(), u = null, v.lost = !1, c && (g(), v.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", S), e.addEventListener("webglcontextrestored", M), a().then((k) => {
    d || (c = k, !v.lost && (g(), v.ready = !0, t()));
  }).catch((k) => {
    console.error("[PanoramaStickers] three.js view is unavailable", k), v.failed = !0, n();
  }), v;
}
const n1 = "3D view unavailable. Check the browser console.";
function Lc(e, t, n) {
  return Qb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function iP(e) {
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
      render(g) {
        return b ? null : (a(), t ? t.render({ ...g, owner: d }) : null);
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
const r1 = iP(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => sb(e.createThreeView({ createCanvas: () => Tn({ label: "three.node" }) }), "node"))
), Ji = ["erp_image", "bg_erp", "bg_media"], ic = ["source"], Lp = ["sticker_image", "sticker"], i1 = ["scene"], oP = {
  background: [...Ji, ...ic],
  "external-sticker": [...Lp, ...ic],
  scene: [...i1, ...ic]
};
function o1(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Cd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = o1(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function aP(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function a1(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function sP(e, t) {
  const { graph: n, entry: r } = a1(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = o1(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const s1 = [...Ji, ...Lp, ...i1, ...ic], lP = 256, la = /* @__PURE__ */ new Map(), Df = /* @__PURE__ */ new WeakMap();
let l1 = () => null;
function c1(e) {
  return Df.has(e) || Df.set(e, JSON.stringify(e)), Df.get(e);
}
function cP(e) {
  l1 = e;
}
function Rc(e, t) {
  const n = c1(e);
  la.delete(n), la.set(n, t), la.size > lP && la.delete(la.keys().next().value);
}
function Pn(e, t) {
  var a;
  const n = e ? l1(e) : null;
  if (!n) return !0;
  const r = Cd(e);
  let o = la.get(c1(n));
  if (o)
    Rc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => s1.includes(c == null ? void 0 : c.name)))) return !0;
    Rc(n, r), o = r;
  }
  return oP[t].every((c) => o[c] === r[c]);
}
const Vc = /* @__PURE__ */ new WeakSet();
async function Id(e, t) {
  if (Vc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Vc.add(e), n.ok && r !== void 0 ? r : null;
}
function u1(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = a1(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => s1.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: sP(n, t) };
}
const oc = /* @__PURE__ */ new Map();
function uP(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && oc.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Id(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = u1(o, a);
        c && Rc(c.output, c.inputs);
      }
    });
}
const fP = 5;
function dP(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${fP}`, r = Id(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Id(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, g, v, S;
      const d = String(c.id);
      for (const { id: M } of await r) {
        if (!u()) return null;
        const k = await a(M);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((S = (v = (g = k.workflow) == null ? void 0 : g.prompt) == null ? void 0 : v[d]) == null ? void 0 : S.class_type) !== c.comfyClass ? null : u1(k, d);
      }
      return null;
    }
  };
}
function pP(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Qo = null;
async function hP(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Vc.has(n) || (u = oc.get(o)) != null && u.has(r) || pP(t)) return null;
  (Qo == null ? void 0 : Qo.workflowId) !== o && (Qo = { workflowId: o, history: dP(n, o) }, queueMicrotask(() => {
    Qo = null;
  }));
  const c = await Qo.history.lastNodeOutput(e, a);
  return a() ? c ? (Rc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (Vc.has(n) || oc.set(o, (oc.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function u0(e, t, n, r = Ji) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const f0 = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ac(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return f0.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return f0.test(String((e == null ? void 0 : e.filename) || ""));
}
const Lf = /* @__PURE__ */ new WeakMap();
function mP(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ed(e) {
  return mP(e) ? (Lf.has(e) || Lf.set(e, Math.random().toString(36).slice(2, 10)), Lf.get(e)) : "run";
}
function f1(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function gP(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function Rp(e, t = [], n = null) {
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
function yP({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = au(e, "looping-preview");
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, b = () => {
    a || o();
  }, g = () => o(), v = () => {
    o(), d();
  }, S = () => o();
  let M = !1;
  const k = () => {
    M = !0, o();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("loadeddata", b, { once: !0 }), u || r.addEventListener("timeupdate", g), r.addEventListener("play", v), r.addEventListener("pause", S), r.addEventListener("error", k), r.src = t, r.load();
  const N = () => {
    a || M || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, A = () => {
    !a && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var $, R;
      a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("loadeddata", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", v), r.removeEventListener("pause", S), r.removeEventListener("error", k), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (R = r.load) == null || R.call(r));
    },
    failed: () => M,
    play: N,
    pause: A,
    toggle() {
      r.paused ? N() : A();
    },
    get playing() {
      return !a && !r.paused && !r.ended;
    }
  };
}
function ho(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function bP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function d0(e, t, n = null) {
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
  return !r && n != null && (r = bP(e == null ? void 0 : e.graph, n)), r;
}
function vP(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function _P(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function wP(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function d1({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (w) => {
    if (!w) return "";
    if (typeof w == "string") return String(w || "").trim();
    if (Array.isArray(w)) {
      if (w.length === 0) return "";
      if (w.length === 1) return o(w[0]);
      const z = String(w[0] || "").trim();
      if (z)
        return ho(t, {
          filename: z,
          subfolder: String(w[1] || "").trim(),
          type: String(w[2] || "output").trim() || "output"
        });
      for (const W of w) {
        const se = o(W);
        if (se) return se;
      }
      return "";
    }
    return typeof (w == null ? void 0 : w.src) == "string" && w.src ? w.src : typeof (w == null ? void 0 : w.url) == "string" && w.url ? w.url : ho(t, w);
  }, a = (w) => {
    if (!w || typeof w != "object") return "";
    const z = String(w.type || "").trim().toLowerCase();
    if (z === "dataurl") return String(w.value || "");
    if (z !== "comfy_image") return "";
    const W = String(w.filename || "").trim();
    return W ? ho(t, {
      filename: W,
      subfolder: String(w.subfolder || ""),
      type: String(w.storage || "input")
    }) : "";
  }, c = (w) => {
    const z = e == null ? void 0 : e.nodeOutputs;
    if (!z || w == null) return null;
    const W = String(w);
    return z instanceof Map ? z.get(w) || z.get(W) || z.get(Number(W)) || null : z[w] || z[W] || null;
  }, u = (w, z) => {
    var se;
    const W = c(w == null ? void 0 : w.id);
    return Array.isArray((se = W == null ? void 0 : W.ui) == null ? void 0 : se[z]) ? W.ui[z] : Array.isArray(W == null ? void 0 : W[z]) ? W[z] : [];
  }, d = (w, z) => {
    const W = c(w == null ? void 0 : w.id);
    return W != null && W.ui && Object.prototype.hasOwnProperty.call(W.ui, z) ? W.ui[z] : W && Object.prototype.hasOwnProperty.call(W, z) ? W[z] : null;
  }, b = (w, z) => {
    const W = d(w, "pano_sticker_input_state_hash"), se = Array.isArray(W) ? W[0] : W;
    return String(se ?? "").trim() || wP(z);
  }, g = (w) => {
    const z = [], W = /* @__PURE__ */ new Set();
    for (const se of w || []) {
      const _e = o(se);
      !_e || W.has(_e) || (W.add(_e), z.push(_e));
    }
    return z;
  }, v = (w, z) => {
    var _e;
    const W = [];
    Array.isArray(w == null ? void 0 : w.images) && w.images.length && W.push(w.images), Array.isArray((_e = w == null ? void 0 : w.ui) == null ? void 0 : _e.images) && w.ui.images.length && W.push(w.ui.images);
    const se = [];
    for (const T of W)
      z >= 0 && z < T.length && se.push(T[z]), se.push(...T);
    return se;
  }, S = (w, z) => {
    var I;
    const W = String(z || "").trim();
    if (!W) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(w == null ? void 0 : w.inputs) ? w.inputs : []).findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === W);
    if (_e < 0) return { src: "", sourceType: "", inputName: W };
    const T = w.graph ? w.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: W };
    const Y = T.origin_id, J = d0(w, _e, Y);
    if (!J) return { src: "", sourceType: "", inputName: W };
    const te = Number(T.origin_slot ?? 0);
    let ge = [];
    try {
      ge = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      ge = [];
    }
    if (Array.isArray(ge) && ge.length) {
      const Z = [];
      te >= 0 && te < ge.length && Z.push(ge[te]), Z.push(...ge);
      const ce = g(Z.filter((Oe) => !ac(Oe)));
      if (ce.length)
        return { src: ce[0], srcCandidates: ce, sourceType: "appNodeImageUrls", inputName: W };
    }
    const he = c((J == null ? void 0 : J.id) ?? Y), re = g(v(he, te).filter((Z) => !ac(Z))).map((Z) => `${Z}&pano_src=${Ed(he)}`);
    if (re.length)
      return { src: re[0], srcCandidates: re, sourceType: "nodeOutputs", inputName: W };
    const B = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (B.length) {
      const Z = [];
      te >= 0 && te < B.length && Z.push(B[te]), Z.push(...B);
      const ce = g(Z);
      if (ce.length)
        return { src: ce[0], srcCandidates: ce, sourceType: "nodeImgs", inputName: W };
    }
    const D = (I = J == null ? void 0 : J.widgets) == null ? void 0 : I.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (D) {
      let Z = o(D.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Z = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`), Z) return { src: Z, sourceType: "widget", inputName: W };
    }
    return { src: "", sourceType: "", inputName: W };
  }, M = (w, z = []) => {
    var se;
    const W = Array.isArray(w == null ? void 0 : w.inputs) ? w.inputs : [];
    for (const _e of z) {
      const T = W.findIndex((ge) => String((ge == null ? void 0 : ge.name) || "") === _e), Y = T >= 0 && w.graph ? w.getInputLink(T) : null;
      if ((Y == null ? void 0 : Y.origin_id) == null) continue;
      const J = c(((se = d0(w, T, Y.origin_id)) == null ? void 0 : se.id) ?? Y.origin_id), te = (Array.isArray(J == null ? void 0 : J.images) ? J.images : []).find(ac);
      return te ? `${ho(t, te)}&pano_src=${Ed(J)}` : "";
    }
    return "";
  }, k = (w, z = []) => {
    const W = Array.isArray(z) ? z : [z];
    for (const se of W) {
      const _e = S(w, se);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, N = (w) => {
    const z = String(w || "").trim();
    if (!z) return [];
    if (vP(z)) return [z];
    const { filename: W, subfolder: se } = _P(z);
    return W ? g([
      ho(t, { filename: W, subfolder: se, type: "temp" }),
      ho(t, { filename: W, subfolder: se, type: "output" }),
      ho(t, { filename: W, subfolder: se, type: "input" }),
      z
    ]) : [z];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (w) => {
      var z, W;
      try {
        (W = (z = w == null ? void 0 : w.__panoLinkedInputImageCache) == null ? void 0 : z.forEach) == null || W.call(z, (se, _e, T) => {
          var Y;
          se != null && se.img && ((Y = r == null ? void 0 : r.isImageLoadFailed) != null && Y.call(r, se.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (w, z) => {
      var W;
      (W = w == null ? void 0 : w.delete) == null || W.call(w, `__ui__${String(z || "")}`);
    },
    linkedValue: (w, z) => {
      var Y, J, te, ge;
      const W = String(z || ""), se = Array.isArray(w == null ? void 0 : w.inputs) ? w.inputs.findIndex((he) => String((he == null ? void 0 : he.name) || "") === W) : -1, _e = se >= 0 && w.graph ? w.getInputLink(se) : null;
      if (_e) {
        const he = c(_e.origin_id), re = [
          he == null ? void 0 : he.output,
          he == null ? void 0 : he.result,
          (Y = he == null ? void 0 : he.data) == null ? void 0 : Y.output,
          (J = he == null ? void 0 : he.data) == null ? void 0 : J.result,
          (te = he == null ? void 0 : he.ui) == null ? void 0 : te.output,
          (ge = he == null ? void 0 : he.ui) == null ? void 0 : ge.result
        ];
        for (const B of re) {
          if (!Array.isArray(B)) continue;
          const D = B[Number(_e.origin_slot || 0)];
          if (typeof D == "string" && D.trim()) return D;
        }
      }
      const T = Array.isArray(w == null ? void 0 : w.widgets) ? w.widgets.find((he) => String((he == null ? void 0 : he.name) || "") === W) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (w, z = [], W = null, se = "") => {
      var Ye;
      const _e = Array.isArray(z) ? z : [z], T = k(w, _e), J = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((qe) => String(qe || "").trim()).filter(Boolean);
      if (!J.length) return null;
      const te = g(J.flatMap((qe) => N(qe)));
      if (!te.length) return null;
      w.__panoLinkedInputImageCache || (w.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ge = String(se || _e.join("|") || "image_exact"), he = J.join(`
`), re = w.__panoLinkedInputImageCache.get(ge);
      if (re && re.srcRaw === he && re.img) return re.img;
      const B = n || globalThis.Image;
      if (typeof B != "function") return null;
      const D = new B();
      (Ye = r == null ? void 0 : r.markImageLoading) == null || Ye.call(r, D, he);
      const I = { srcRaw: he, resolvedSrc: "", img: D };
      w.__panoLinkedInputImageCache.set(ge, I);
      let Z = -1;
      const ce = (qe) => {
        var vt, j, _t;
        qe === "ready" ? (vt = r == null ? void 0 : r.markImageReady) == null || vt.call(r, D, he) : (j = r == null ? void 0 : r.markImageFailed) == null || j.call(r, D, he), W == null || W(D), (_t = w.setDirtyCanvas) == null || _t.call(w, !0, !0);
      }, Oe = () => {
        if (Z += 1, Z >= te.length) {
          ce("failed");
          return;
        }
        I.resolvedSrc = te[Z], D.src = I.resolvedSrc;
      };
      return D.onload = () => ce("ready"), D.onerror = () => {
        if (Z + 1 < te.length) {
          Oe();
          return;
        }
        ce("failed");
      }, Oe(), D;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (w, z, W, se = null) => {
      var he, re, B;
      const _e = u(w, z)[0] || null, T = o(_e);
      if (!T) return null;
      const Y = `__ui__${z}`, J = (he = W == null ? void 0 : W.get) == null ? void 0 : he.call(W, Y);
      if (J && J.__panoSrc === T) return J;
      const te = n || globalThis.Image;
      if (typeof te != "function") return null;
      const ge = new te();
      return ge.__panoSrc = T, (re = r == null ? void 0 : r.markImageLoading) == null || re.call(r, ge, T), ge.onload = () => {
        var D;
        (D = r == null ? void 0 : r.markImageReady) == null || D.call(r, ge, T), se == null || se(ge);
      }, ge.onerror = () => {
        var D;
        (D = r == null ? void 0 : r.markImageFailed) == null || D.call(r, ge, T), se == null || se(ge);
      }, ge.src = T, (B = W == null ? void 0 : W.set) == null || B.call(W, Y, ge), ge;
    },
    uiList: u,
    uiValue: d
  };
}
const SP = 1e-3;
function p1(e, t, n, r) {
  if (!ya(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(SP / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function h1(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function xP(e, t) {
  return Math.floor(e * t.fps);
}
function m1(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const p0 = 4;
function g1({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((S, M) => S !== n[M])) && (n = c, r.clear(), o = null), u === null) return null;
      const g = xP(u, d);
      for (let S = g; S < Math.min(n.length, g + p0 + 1); S += 1) a(S);
      for (const S of r.keys())
        (S < g || S > g + p0) && S !== o && r.delete(S);
      const v = r.get(g);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function y1({
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
  const b = () => c || e(), g = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), u = !1, g(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      c || this.beginGesture();
      const S = t(c, v);
      return S.changed ? (c = S.state, u = !0, r(c), g(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && u;
    },
    commitGesture() {
      if (d || !c) return !1;
      const v = u;
      return v && o(c), c = null, u = !1, r(null), g(), v;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, u = !1, r(null), g(), !0);
    },
    apply(v) {
      if (d) return !1;
      c && this.commitGesture();
      const S = t(e(), v);
      return S.changed ? (o(S.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const sc = "sticker_image_1", b1 = "external_image", Pa = 0;
function ba(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Rf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ui(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Od(e, t = Pa) {
  return (e == null ? void 0 : e.version) !== 2 ? Ui(e) : Ui(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Io(n, t).active,
    external: n.source.kind === "port",
    ...Ip(n, t)
  }));
}
function Vp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ui(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function v1(e) {
  return String((e == null ? void 0 : e.id) || "") === sc || String((e == null ? void 0 : e.source_kind) || "") === b1;
}
function $p(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : v1(t);
}
const _1 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function w1(e) {
  return !v1(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(_1.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function S1(e) {
  const t = w1(e);
  return t ? _1.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function x1(e, t = {}) {
  var V, w, z;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === sc);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === sc;
    return {
      state: {
        ...e,
        stickers: n.filter((se, _e) => _e !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, v = Math.max(1, d), S = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, N = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!g) return { state: e, changed: !1 };
    const W = ba(N, v, S), se = Number(((w = c == null ? void 0 : c.initial_pose) == null ? void 0 : w.hFOV_deg) ?? N), _e = ba(se, v, S), T = Number(((z = c == null ? void 0 : c.initial_pose) == null ? void 0 : z.vFOV_deg) ?? _e);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((Y, J) => J === r ? {
          ...Y,
          vFOV_deg: W,
          initial_pose: Y.initial_pose && typeof Y.initial_pose == "object" ? { ...Y.initial_pose, vFOV_deg: _e } : Y.initial_pose
        } : Y)
      },
      changed: !0
    };
  }
  const A = n.reduce((W, se) => Math.max(W, Number((se == null ? void 0 : se.z_index) || 0)), -1), O = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: N,
    vFOV_deg: g ? ba(N, v, S) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || N),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, $ = {
    ...c || {},
    id: sc,
    source_kind: b1,
    source_link_id: o,
    source_state_hash: a,
    ...O,
    initial_pose: { ...O },
    visible: !0,
    z_index: A + 1
  }, R = r >= 0 ? n.map((W, se) => se === r ? $ : W) : [...n, $];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function h0(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const kP = ["IMAGE", "VIDEO"];
function m0(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => kP.includes(n)) ? "2d" : null;
}
function MP(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((g) => (g == null ? void 0 : g.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? m0(r.type) ?? m0((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function k1(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: h0(e, "sticker"),
    awaitingPose: !t && (h0(e, "sticker_state") || MP(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function g0(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return ri({ version: 2, stickers: [n] }).stickers[0];
}
function M1(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var N;
  const c = e.stickers.findIndex((A) => $p(e, A)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const A = ((N = e.active) == null ? void 0 : N.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((O, $) => $ !== c),
        active: A ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const A = { ...g0(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((O, $) => $ === c ? A : O) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const A = [u.size.value, ...u.size.keyframes.map((R) => R.value)], O = A.map((R) => ba(R.hFOV_deg, o, a));
    if (A.every((R, V) => Math.abs(R.vFOV_deg - O[V]) <= 1e-6)) return { state: e, changed: !1 };
    const $ = {
      value: { ...u.size.value, vFOV_deg: O[0] },
      keyframes: u.size.keyframes.map((R, V) => ({ ...R, value: { ...R.value, vFOV_deg: O[V + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, V) => V === c ? { ...R, size: $ } : R) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((A) => A.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, g0(`sticker_${g}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), S = (A) => d ? ba(A, o, a) : A, M = Ep(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: S(v)
  }, Ui(e).reduce((A, O) => Math.max(A, O.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return M.direction.keyframes = k.direction ?? [], M.roll.keyframes = k.roll ?? [], M.size.keyframes = (k.size ?? []).map((A) => ({ ...A, value: { ...A.value, vFOV_deg: S(A.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, M] }, changed: !0 };
}
function zp(e) {
  const t = Ui(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function N1(e) {
  const t = Vp(e), n = $p(e, t), r = Ui(e).some((u) => u && u.visible !== !1), o = zp(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: S1(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function NP(e) {
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
function y0(e, t) {
  const n = Vp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = NP(e), o = String(n.id || ""), a = zp(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function PP(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function AP(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return x1(e, t.value);
  if (t.type === "sync-port") return M1(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === a))
      return { state: e, changed: !1 };
    const d = zp(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ba(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ep(a, rc(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const v = { id: a, asset_id: c, ...g, z_index: d + 1 };
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
    return !o || !Ui(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Vp(e);
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
    const o = w1(n);
    return !o || !S1(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return y0(e, "front");
  if (t.type === "send-back") return y0(e, "back");
  if (t.type === "delete-selected") {
    if ($p(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Ui({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = PP(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? Ip(n, Pa) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = l2(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return jb(b, Pa, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function CP(e = {}) {
  return y1({
    ...e,
    reduce: AP,
    projectModel: N1
  });
}
const Td = 2;
function vo(e, t) {
  return Math.floor(e * t + 0.5);
}
function IP(e, t) {
  return Math.floor(e * t + 1e-3);
}
function P1({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, g = !1, v = { name: "idle" }, S = [];
  const M = () => b && !g, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function N() {
    for (const I of S) I();
    S = [];
  }
  function A(I, Z = {}) {
    return N(), v = { name: I, ...Z }, u(), v;
  }
  function O(I, Z, ce) {
    const Oe = () => {
      v === I && ce();
    };
    e.addEventListener(Z, Oe), S.push(() => e.removeEventListener(Z, Oe));
  }
  function $(I, Z) {
    let ce = t.requestFrame(function Oe(Ye) {
      v === I && (Z(Ye), v === I && (ce = t.requestFrame(Oe)));
    });
    S.push(() => t.cancelFrame(ce));
  }
  function R(I) {
    d = I, a(d);
  }
  function V() {
    return A(g ? "error" : "idle");
  }
  function w() {
    g = !0, V();
  }
  function z() {
    const { seekable: I } = e, Z = I != null && I.length ? I.end(I.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Z) ? Z : 1 / 0));
  }
  function W(I) {
    if (!M()) return I === "play" ? J() : V();
    if (e.readyState < Td) {
      const Z = A("loading", { then: I });
      return O(Z, "loadeddata", () => W(Z.then)), O(Z, "error", w), Z;
    }
    return I === "play" && d / n() >= Number(e.duration) ? J() : se(I, !1);
  }
  function se(I, Z) {
    const ce = z();
    if (!e.ended && vo(Number(e.currentTime), n()) === vo(ce, n())) return _e(I);
    const Oe = A("seeking", { then: I, frame: d, retried: Z });
    return O(Oe, "seeked", () => {
      const Ye = vo(Number(e.currentTime), n()) === vo(z(), n()), qe = d === Oe.frame;
      Ye || qe && Oe.retried ? _e(Oe.then) : se(Oe.then, qe);
    }), O(Oe, "error", w), e.currentTime = ce, Oe;
  }
  function _e(I) {
    return I === "play" ? T() : (c(), V());
  }
  function T() {
    const I = A("playingVideo", { shown: !1 });
    if (O(I, "pause", () => e.ended ? Y() : he()), O(I, "ended", Y), O(I, "error", w), o() && vo(Number(e.duration), n()) >= r()) {
      const ce = e.loop;
      e.loop = !0, S.push(() => {
        e.loop = ce;
      });
    }
    const Z = (ce, Oe) => {
      Oe && !I.shown && (I.shown = !0, u()), te(vo(ce, n()));
    };
    if (k()) {
      let ce = e.requestVideoFrameCallback(function Oe(Ye, qe) {
        v === I && (Z(Number(qe.mediaTime), !0), v === I && (ce = e.requestVideoFrameCallback(Oe)));
      });
      S.push(() => {
        var Oe;
        return (Oe = e.cancelVideoFrameCallback) == null ? void 0 : Oe.call(e, ce);
      });
    } else
      $(I, () => Z(Number(e.currentTime), e.readyState >= Td));
    return Promise.resolve(e.play()).catch(() => {
      v === I && he();
    }), I;
  }
  function Y() {
    c(), J();
  }
  function J() {
    const I = A("playingClock", { startTs: t.now(), startFrame: d });
    return $(I, (Z) => te(I.startFrame + Math.floor((Z - I.startTs) / 1e3 * n()))), I;
  }
  function te(I) {
    if (I < r()) {
      R(I);
      return;
    }
    if (!o()) {
      ge(r() - 1);
      return;
    }
    v.name === "playingVideo" && (N(), e.pause()), R(0), W("play");
  }
  function ge(I) {
    v.name === "playingVideo" ? (N(), e.pause(), R(Math.max(0, I)), c()) : R(Math.max(0, I)), W("still");
  }
  function he() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      N(), e.pause();
      const I = IP(Number(e.currentTime), n());
      R(Math.min(I, r() - 1)), c(), d === I ? V() : W("still");
    } else v.name === "playingClock" && ge(Math.min(d, r() - 1));
  }
  function re() {
    if (!D()) {
      if (d >= r() - 1 && R(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      W("play");
    }
  }
  function B(I) {
    const Z = Math.max(0, Math.round(I));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", R(Z), u();
      return;
    }
    v.name === "playingVideo" && (N(), e.pause()), R(Z), W("still");
  }
  function D() {
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
      return D();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: re,
    stop: he,
    seek: B,
    toggle() {
      D() ? he() : re();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(I) {
      N(), b = !!I, g = !1, W("still");
    },
    dispose() {
      N(), b = !1, v = { name: "idle" };
    }
  };
}
function A1({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(N) {
    u = N, t();
  }
  function g(N) {
    c = N, e.currentTime = N;
  }
  function v() {
    const N = d;
    S(), d !== N && n();
  }
  function S() {
    if (!r || o || e.readyState < Td) return;
    const { time: N, playing: A, fps: O } = a;
    if (N === null) {
      e.pause(), d = !1;
      return;
    }
    if (A) {
      if (c !== null) return;
      const $ = Number(e.duration), R = Number.isFinite($) ? Math.min(N, $) : N, V = Math.abs(Number(e.currentTime) - R) > 1.5 / O;
      if (e.ended && !V) return;
      V && g(R), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === N) && (Number(e.currentTime) === N ? b(N) : g(N));
  }
  const M = {
    loadeddata: v,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: v,
    seeked: () => {
      const N = c;
      c = null, !a.playing && N === a.time ? b(N) : v();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [N, A] of Object.entries(M)) e.addEventListener(N, A);
  function k(N) {
    r = N, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: N = "", time: A = null, playing: O = !1, fps: $ }) {
      N !== r && (k(N), n()), a = { time: A, playing: O, fps: $ }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(N, A) {
      return !r || o ? A : a.time === null ? null : a.playing && d ? e : u === null ? A : N;
    },
    dispose() {
      for (const [N, A] of Object.entries(M)) e.removeEventListener(N, A);
      k("");
    }
  };
}
function Fd(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function EP({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let g = "", v = "", S = 0;
  const M = /* @__PURE__ */ new Set();
  let k = null, N = null;
  const A = () => o().timeline.fps, O = (Y) => Y.stickers.find((J) => J.source.kind === "port"), $ = () => {
    const Y = o(), J = O(Y);
    return Rb(Y, {
      minimum: Math.round(A() * 5),
      frames: Math.max(
        g ? Math.round(S * A()) : 0,
        k && J ? h1(J.clip, A(), k.meta) : 0
      ),
      camera: b
    });
  }, R = P1({
    video: e,
    clock: r,
    fps: A,
    span: $,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), V = () => {
    v === g && Number.isFinite(e.duration) && (S = e.duration);
  }, w = () => {
    v && (M.add(v), d());
  }, z = A1({ video: t, onCapture: u, onChange: d }), W = g1({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", V), e.addEventListener("error", w);
  function se(Y) {
    Y !== v && (v = Y, e.pause(), Y ? e.src = Y : e.removeAttribute("src"), e.load(), R.setSource(!!Y));
  }
  function _e() {
    R.playing && R.stop();
  }
  function T(Y) {
    const J = O(Y);
    N = k && J ? p1(J.clip, R.frame, Y.timeline.fps, k.meta) : null, z.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: N,
      playing: R.advancing,
      fps: Y.timeline.fps
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
    pause: _e,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(Y, J) {
      return k != null && k.frames ? W.picture(k.frames, N, k.meta, J) : z.picture(Y, J);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: Y, sources: J, state: te, sticker: ge = null }) {
      if (k = Y ? ge : null, !Y)
        return _e(), se(""), T(te), !1;
      for (const I of M)
        J.includes(I) || M.delete(I);
      const he = J.find((I) => I && !M.has(I)) || "", re = he !== g;
      re && (g = he, S = 0), se(g);
      const B = Lb(te, { camera: b }) || !!g && R.state !== "error" || !!k;
      return B || _e(), (re || !B || !R.playing && R.frame >= $()) && R.frame !== Pa && R.seek(Pa), T(te), B;
    },
    dispose() {
      R.dispose(), z.dispose(), e.removeEventListener("loadedmetadata", V), e.removeEventListener("error", w), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const $c = Math.PI / 180, ti = 180 / Math.PI, OP = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), TP = 260;
function b0(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function C1(e, t) {
  return t ? C1(t, e % t) : e;
}
function FP(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = C1(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function Ys(e, t) {
  const n = b0(e), r = b0(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: FP(n, r) };
}
function Eo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function I1(e) {
  const t = Eo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? gi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function jp(e, t, n = OP) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (A, O, $) => {
    const R = A + O, V = Math.max(0, $ - 1), w = R > V && R > 0 ? V / R : 1;
    return [A * w, O * w];
  }, [g, v] = b(d, c, r), [S, M] = b(a, u, o), k = {
    x: g,
    y: S,
    w: Math.max(1, r - g - v),
    h: Math.max(1, o - S - M)
  }, N = yp(k, t);
  return {
    x: k.x + (k.w - N.width) * 0.5,
    y: k.y + (k.h - N.height) * 0.5,
    w: N.width,
    h: N.height,
    safeRect: k
  };
}
function DP(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = jp({ width: n, height: r }, 1), a = ne(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * $c * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = gb(d, db(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), g = LP(b, Ca(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = bp({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function E1(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * ti),
    pitch: ne(Math.asin(ne(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * ti, -89.9, 89.9)
  };
}
function LP(e, t) {
  const n = E1(e), r = Ca(n.yaw, n.pitch, 0), o = wf(t, e), a = {
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
    roll: su(Math.atan2(
      wf(u, r.up),
      wf(u, r.right)
    ) * ti)
  };
}
function O1(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = jp({ width: n, height: r }, Co(e)), a = Ao(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = gb(e, db(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = E1(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: ne(2 * Math.atan(n / (2 * a)) * ti, 1, 179)
  };
}
function RP(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = Ao(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: g } = vp(d, u), v = {
    x: a - b,
    y: c - g,
    w: b * 2,
    h: g * 2
  }, S = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, M = r / o, k = Math.tan(hd * $c), N = M >= 1 ? k : k * M, A = M >= 1 ? k / M : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * ti,
      vFOV_deg: 2 * Math.atan(g / u) * ti
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(N) * ti,
        vFOV_deg: 2 * Math.atan(A) * ti
      }
    }
  };
}
function ea(e, t) {
  const n = Eo(e);
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
function VP(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = Ao(n, e);
    return bp(yp(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Ql(a, t) };
}
function v0(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Ys(t, n);
  if (!a) return e;
  const c = Co(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Ys(a.height, a.width));
  const u = VP(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function T1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Eo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = pb({
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
    const r = Eo(e);
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
    return ea(e, (r) => v0(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return ea(e, (r) => {
      const a = String(gi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Ys(a[1], a[2]) : Ys(Co(r), 1);
      return c ? v0(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? ea(e, (o) => {
      const a = su(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ea(e, (r) => {
    const o = hb(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? ea(e, (r) => {
    const o = mb(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? ea(e, (r) => {
    const o = L1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function F1({
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
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && g < Math.min(d.w, d.h) * c) return null;
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
function D1(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + ub(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: fb(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function L1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * $c, d = Math.cos(u), b = Math.sin(u), g = a / n, v = -c / n, S = g * d - v * b, M = g * b + v * d, k = Number(e.pitch_deg || 0) * $c, N = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(S) / N * ti),
    pitch_deg: ne(Number(e.pitch_deg || 0) - Math.atan(M) * ti, -90, 90)
  };
}
function $P({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return y1({
    readState: e,
    reduce: T1,
    projectModel: I1,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Pe = Object.freeze({
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
}), zP = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, jP = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: zP(t[2])
})), HP = {
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
}, _0 = Object.fromEntries(
  Object.entries(HP).map(([e, t]) => [e, {
    name: t.name,
    elements: jP(t.body)
  }])
), Gt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(_0, r) ? _0[r] : null;
    });
    return (r, o) => n.value ? (ae(), fe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: pt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ae(!0), fe(Xe, null, At(n.value.elements, (a, c) => (ae(), fe(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ae(), fe("path", bi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ae(), fe("circle", bi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ae(), fe("rect", bi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ae(), fe("line", bi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ae(), fe("polyline", bi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ae(), fe("polygon", bi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, pn = {
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
    const t = e, n = ft(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ae(), xr(qx(e.tag), bi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Cy(() => [
        Le(Gt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, GP = ["aria-expanded", "disabled"], KP = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, WP = ["data-aspect", "disabled", "onClick"], BP = { class: "pano-cutout-aspect-custom" }, UP = ["disabled"], YP = ["disabled"], XP = ["data-custom-width", "data-custom-height", "disabled"], R1 = {
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
    ]), a = /* @__PURE__ */ Qt("1"), c = /* @__PURE__ */ Qt("1"), u = /* @__PURE__ */ Qt(null), d = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ft(() => {
      const N = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], A = String(n.model.aspectLabel || "");
      return N.length ? N.map((O) => {
        const $ = typeof O == "string" ? O : String((O == null ? void 0 : O.value) || ""), R = typeof O == "string" ? O : String((O == null ? void 0 : O.label) || $);
        return {
          ...typeof O == "object" && O ? O : {},
          value: $,
          label: R,
          active: A ? $ === A : (O == null ? void 0 : O.active) === !0
        };
      }) : o.map((O) => ({
        ...O,
        active: O.value === A
      }));
    }), g = ft(() => {
      var A;
      const N = String(n.model.aspectLabel || "").trim();
      return N || String(((A = b.value.find((O) => O.active === !0)) == null ? void 0 : A.label) || "Aspect");
    });
    No(g, (N) => {
      const A = String(N || "").match(/^([0-9.]+):([0-9.]+)$/);
      A && (a.value = A[1], c.value = A[2]);
    }, { immediate: !0 });
    function v(N) {
      r("action", N);
    }
    function S(N) {
      var A;
      n.model.aspectOpen === !0 && ((A = u.value) != null && A.contains(N.target) || v({ type: "close-aspect" }));
    }
    nu(() => {
      document.addEventListener("pointerdown", S, !0);
    }), el(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(N) {
      const [A, O] = String(N.value || "").split(":");
      v({
        type: "set-aspect",
        width: A,
        height: O,
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
    return (N, A) => (ae(), fe("div", {
      ref_key: "rootElement",
      ref: u,
      class: pt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ae(), xr(pn, {
        key: 0,
        icon: e.model.aspectIcon || Ze(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: A[0] || (A[0] = (O) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ae(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: A[1] || (A[1] = (O) => v({ type: "toggle-aspect" }))
      }, [
        Le(Gt, {
          icon: e.model.aspectIcon || Ze(Pe).aspect
        }, null, 8, ["icon"]),
        X("span", null, rt(g.value), 1),
        Le(Gt, {
          icon: Ze(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, GP)),
      xi(X("div", KP, [
        (ae(!0), fe(Xe, null, At(b.value, (O) => (ae(), fe("button", {
          key: O.value,
          class: pt(["pano-btn pano-frame-aspect-choice", { active: O.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": O.value,
          disabled: d.value,
          onClick: ($) => M(O)
        }, rt(O.label), 11, WP))), 128)),
        X("div", BP, [
          xi(X("input", {
            "onUpdate:modelValue": A[2] || (A[2] = (O) => a.value = O),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, UP), [
            [Fg, a.value]
          ]),
          A[4] || (A[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          xi(X("input", {
            "onUpdate:modelValue": A[3] || (A[3] = (O) => c.value = O),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, YP), [
            [Fg, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, XP)
        ])
      ], 512), [
        [Oo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, qP = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, JP = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Qt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ae(), fe("div", {
      class: pt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = $t(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = $t(() => {
      }, ["stop"]))
    }, [
      Le(pn, {
        icon: Ze(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = $t((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", qP, [
        o[3] || (o[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Xe, null, At(Ze(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, rt(a[0]), 1),
          X("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, ZP = {
  class: "pano-view-unavailable",
  role: "status"
}, Hp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ae(), fe("div", ZP, rt(Ze(n1)), 1));
  }
}, QP = { class: "pano-cutout-node-surface" }, eA = ["title", "disabled"], tA = { class: "value" }, nA = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, rA = {
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
    return (r, o) => (ae(), fe("div", QP, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = $t(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = $t(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Le(Gt, {
            icon: Ze(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        Le(pn, {
          icon: e.model.hasShot ? Ze(Pe).delete : Ze(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(R1, {
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
          onDblclick: o[2] || (o[2] = $t((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Le(Gt, {
            icon: Ze(Pe).roll
          }, null, 8, ["icon"]),
          X("span", tA, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, eA),
        Le(pn, {
          icon: Ze(Pe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Le(JP)
      ], 32),
      e.model.hasShot === !1 ? (ae(), fe("div", nA, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (ae(), xr(Hp, { key: 1 })) : ht("", !0)
    ]));
  }
}, V1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Qt(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (a = v, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(v) {
      var N, A;
      const { active: S, intent: M } = u();
      if (!S) return;
      const k = ((A = (N = v.target) == null ? void 0 : N.files) == null ? void 0 : A[0]) || null;
      if (k) {
        r("file-selected", { intent: M, file: k });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function g() {
      const { active: v, intent: S } = u();
      v && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (v, S) => (ae(), fe("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: g
    }, null, 544));
  }
}, iA = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, oA = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Qt(!1), n = Object.freeze([
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
      class: pt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = $t(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = $t(() => {
      }, ["stop"]))
    }, [
      Le(pn, {
        icon: Ze(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = $t((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", iA, [
        o[3] || (o[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Xe, null, At(Ze(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, rt(a[0]), 1),
          X("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, aA = { class: "pano-stickers-node-surface" }, sA = ["disabled"], lA = ["aria-label", "data-tip"], cA = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, uA = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, fA = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Qt(null);
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
    return (c, u) => (ae(), fe("div", aA, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = $t(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = $t(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          Le(Gt, {
            icon: Ze(Pe).fullscreen
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
          Le(Gt, {
            icon: Ze(Pe).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, sA),
        Le(pn, {
          icon: e.model.locked ? Ze(Pe).lock_closed : Ze(Pe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Le(pn, {
          icon: Ze(Pe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Le(pn, {
          icon: Ze(Pe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Le(pn, {
          icon: e.model.isExternalSelection ? Ze(Pe).back_initial : Ze(Pe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(oA)
      ], 32),
      e.model.playable === !0 ? (ae(), fe("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = $t(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = $t(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Le(Gt, {
          icon: e.model.playing ? Ze(Pe).pause : Ze(Pe).play
        }, null, 8, ["icon"])
      ], 40, lA)) : ht("", !0),
      e.model.hasStickers === !1 ? (ae(), fe("div", cA, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (ae(), fe("div", uA, "Drop image to add")) : ht("", !0),
      Le(V1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ae(), xr(Hp, { key: 3 })) : ht("", !0)
    ]));
  }
}, w0 = 24;
function dA(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Fs(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function $1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Dd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Fs(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Fs(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : $1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function pA(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => Fs(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => Fs(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Fs(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : $1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function Gp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function z1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ds(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: ne(n.x, -r, t.width + r),
    y: ne(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function hA(e) {
  const t = Ca(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(ne(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Mt * 0.5),
    tanY: Math.tan(ne(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Mt * 0.5)
  };
}
function mo(e, t, n) {
  return gp(Mc(
    Mc(e.centerDir, Nc(e.right, t)),
    Nc(e.up, n)
  ));
}
function Kp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = hA(e), r = ds(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    mo(n, -n.tanX, n.tanY),
    mo(n, n.tanX, n.tanY),
    mo(n, n.tanX, -n.tanY),
    mo(n, -n.tanX, -n.tanY)
  ].map((S) => ds(S, t)), a = Array.from({ length: 4 }, (S, M) => {
    const k = [];
    for (let N = 0; N <= 28; N += 1) {
      const A = N / 28;
      let O, $;
      M === 0 ? (O = -n.tanX + 2 * n.tanX * A, $ = n.tanY) : M === 1 ? (O = n.tanX, $ = n.tanY - 2 * n.tanY * A) : M === 2 ? (O = n.tanX - 2 * n.tanX * A, $ = -n.tanY) : (O = -n.tanX, $ = -n.tanY + 2 * n.tanY * A);
      const R = ds(mo(n, O, $), t);
      R && k.push({ x: R.x, y: R.y });
    }
    return k;
  }), c = ds(mo(n, 0, n.tanY), t), u = ds(
    mo(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, g = u.y - c.y, v = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * w0,
      y: c.y + g / v * w0
    },
    visible: !0
  };
}
function S0(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Kp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = Dd(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = Dd(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function mA(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(r.x, r.z) * hn),
    pitch_deg: Math.asin(ne(r.y, -1, 1)) * hn
  };
}
function gA(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: ne(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: ne(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function yA(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * hn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let $l = null;
function Wp() {
  return $l || ($l = new Promise((e) => {
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
  }), $l);
}
function vr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function bA(e, t = 1024) {
  const n = Math.max(1, Math.round(vr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(vr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function vA(e, t, n) {
  const r = vr(t), o = vr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = vr(a.u0), u = vr(a.v0), d = vr(a.u1), b = vr(a.v1);
  if (d <= c || b <= u) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + vr(g.du)) * r,
    centerY: ((u + b) * 0.5 + vr(g.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: vr(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, vr(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function _A(e, t, n) {
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
function wA() {
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
      const g = [...u.listeners];
      u.listeners.clear(), g.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = vA(a, c, u);
    if (!b.startsWith("data:") || !g) return null;
    const v = _A(a, c, u), S = String((a == null ? void 0 : a.id) || "").trim() || v, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === v) return { source: M.source, revision: v };
    const k = r(b, d), N = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || N < 1 || A < 1) return null;
    const O = Tn({ label: "raster-object" });
    O.width = Math.max(1, Math.round(c)), O.height = Math.max(1, Math.round(u));
    const $ = O.getContext("2d");
    return $ ? (g.wrapOffsets.forEach((R) => {
      $.save(), $.translate(g.centerX + R, g.centerY), $.rotate(g.rotationRad), $.scale(g.scale, g.scale), $.drawImage(
        k,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), $.restore();
    }), t.set(S, { revision: v, source: O }), { source: O, revision: v }) : null;
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
function SA(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function xA(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function kA({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const S = r.get(v.owner);
    (S == null ? void 0 : S.get(v.key)) === v && S.delete(v.key);
  }
  function c(v, S, M, k) {
    if (!v || typeof k != "function" || M.settled) return;
    let N = r.get(v);
    N || (N = /* @__PURE__ */ new Map(), r.set(v, N));
    const A = N.get(S);
    if ((A == null ? void 0 : A.entry) === M) {
      A.callback = k;
      return;
    }
    a(A);
    const O = { owner: v, key: S, entry: M, callback: k };
    N.set(S, O), M.listeners.add(O);
  }
  function u(v, S) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !S && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((M) => {
      a(M);
      try {
        M.callback(v.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [S, M] of n) {
        if (n.size <= v) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(S));
      }
  }
  function b(v, S, M, k = null) {
    const N = String(S || ""), A = String(M || "");
    if (!N || !A) return null;
    let O = n.get(N);
    if (O)
      n.delete(N), n.set(N, O);
    else {
      d(o - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const V = new R();
      O = { key: N, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(N, O), V.onload = () => u(O, !0), V.onerror = () => u(O, !1), V.src = A;
    }
    return O.settled || O.image.complete && Number(O.image.naturalWidth || O.image.width || 0) > 0 || c(v, N, O, k), O.image;
  }
  function g(v) {
    const S = r.get(v);
    S && ([...S.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: g };
}
const vs = /* @__PURE__ */ new WeakMap();
function j1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = vs.get(e);
  r || (r = [], vs.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = vs.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && vs.delete(e);
  };
}
function wi(e, ...t) {
  const n = vs.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const lc = Object.freeze({
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
}), H1 = "PanoramaSuite.Editor.ViewControls", MA = {
  id: H1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(lc).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function NA(e) {
  return Object.hasOwn(lc, e) ? lc[e] : lc.default;
}
function PA(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function AA(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const zc = "state_json";
function Si(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function CA(e) {
  var c, u;
  const t = Si(e, zc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = $b(n, {
    coverage: (c = Si(e, "coverage")) == null ? void 0 : c.value
  }), o = T1(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Bp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Si(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, g, v, S, M, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (k = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || k.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function IA(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function x0(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function EA(e) {
  var g, v, S, M, k, N;
  if (!e) return;
  const t = Si(e, "coverage"), n = Si(e, "bg_color"), r = Si(e, zc), o = Si(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && IA(a) && (x0(c) || c === ""))) return;
  let b = "360";
  if (x0(c))
    try {
      b = String(er((g = JSON.parse(c)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (S = n.callback) == null || S.call(n, a), r.value = c, (M = r.callback) == null || M.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0);
}
function cc(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Ld(e, t, n) {
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
async function OA(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function _s(e, t, n) {
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
async function G1(e, t = {}) {
  var r;
  await OA(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function TA(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await G1(e), n ? n.apply(this, r) : this.value;
  };
}
function FA(e) {
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
function DA(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ps(e, {
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
  function g(v) {
    var k;
    const S = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === S) return;
    FA(v), Bp(v, t), cc(v, zc);
    const M = Si(v, zc);
    if (TA(v, M), M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const N = M.callback;
      M.callback = (A) => {
        var $;
        const O = N ? N(A) : void 0;
        return ($ = v.setDirtyCanvas) == null || $.call(v, !0, !1), O;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const N = Si(v, "bg_color");
      !d && N && (N.value == null || String(N.value).trim() === "" || String(N.value).toLowerCase() === "#000000") && (N.value = "#00ff00", (k = N.callback) == null || k.call(N, "#00ff00")), Ld(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && cc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
      return;
    }
    v.__panoSceneStateV2 = d, Ld(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && cc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const S = e.prototype[v];
    e.prototype[v] = function() {
      const M = S ? S.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && CA(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && EA(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && g(this), v === "onAdded" && k && wi(this, "attach"), M;
    };
  }
}
function LA(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return DA(this), r;
  };
}
function RA(e, {
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
    Bp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Ld(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && cc(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function VA({
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
    settings: [MA, kM],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Vg],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Vg.id] }],
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaStickersNode" && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), g === "PanoramaStudio" && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && ps(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaCutoutNode" && ps(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), Pc(g) && LA(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Bp(d, e), Pc(b) && RA(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const $A = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Lr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : $A.test(String(e.name || "")) : !1;
}
function Up(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Lr(n)) : !1;
}
function zA(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (Up(d == null ? void 0 : d.dataTransfer)) {
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
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((v) => Lr(v));
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
async function ws(e, t = {}) {
  var c, u, d, b;
  if (!Lr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((v, S) => {
      const M = new n();
      M.onload = () => v(M), M.onerror = () => S(new Error("image load failed")), M.src = a;
    });
    return {
      image: g,
      width: Math.max(1, Number(g.naturalWidth || g.width || 1)),
      height: Math.max(1, Number(g.naturalHeight || g.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function _o(e, { fetchApi: t } = {}) {
  if (!Lr(e)) throw new TypeError("A supported image file is required.");
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
const k0 = /* @__PURE__ */ new WeakSet(), M0 = /* @__PURE__ */ new WeakSet();
let N0 = 0;
function Rd(e) {
  if (!e || typeof e != "object" || M0.has(e)) return e;
  const t = String(e.type || "preview");
  return N0 += 1, e.type = `${t}:pano-${N0}`, M0.add(e), e;
}
function jc(e) {
  if (!e || typeof e != "object" || k0.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, k0.add(e), e;
}
function K1(e, t) {
  var r, o;
  if (!t || ((o = (r = jc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function jA({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Kt } = Ul;
cP((e) => Yi(e.id));
uP(Zt);
const Yp = kA(), { linkedVideoFile: HA } = d1({ app: Kt, api: Zt });
function Vd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ul == null ? void 0 : Ul.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const GA = "pano_suite.ui_settings.v1", KA = 120, WA = 2048;
function P0() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(GA)) || "").trim();
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
function BA() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hs(e) {
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
function UA() {
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
function $d(e) {
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
function W1(e) {
  const t = $d(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function YA(e, t, n) {
  W1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function zd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Xp(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function B1(e) {
  return Pc(Xp(e));
}
function A0(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function U1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = zd(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && uc(e), $C(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = zd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      uc(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      uc(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function XA(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function uc(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  jd.unregister(e), XA(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), S = Vd();
      return g === S || v === S || g === "pano_preview" || v === "pano_preview" ? !0 : g === "preview" && v === "pano_preview";
    }).forEach((b) => gC(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function qA(e, t = "#00ff00") {
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
function JA(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = va(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Jn(e) {
  var u, d;
  const t = JA(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = va(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = va(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? zb(t, { backgroundColor: r, coverage: o, active: Gb(e) }) : qA(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function va(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function ZA(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Y1(e, t, n = null) {
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
  return !r && n != null && (r = ZA(e == null ? void 0 : e.graph, n)), r;
}
function QA(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function X1(e, t = []) {
  const n = QA(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Ji.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function C0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Hc(e, t) {
  const n = C0(e), r = C0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function eC(e, t) {
  var n;
  return Y1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function tC(e, t = Ji) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = X1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return gP(e, c, eC);
}
const jd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Zt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, v, S;
        if (!a) return;
        const c = Hc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...tC(a)].some((M) => Hc(r, M)) || f1(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (q1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (S = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Zt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Zt) != null && e.removeEventListener) || (Zt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Gc(e) {
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
  return typeof ((a = Zt) == null ? void 0 : a.apiURL) == "function" ? Zt.apiURL(o) : o;
}
function nC(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function rC(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function iC(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function oC(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (nC(t)) return [t];
  const { filename: n, subfolder: r } = rC(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Gc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return iC([...o, t]);
}
function aC(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Gc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Yi(e) {
  const t = Kt == null ? void 0 : Kt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Hc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Hc(c, o)) return t[c];
  }
  return null;
}
function Ds(e, t, n = null) {
  const r = n || Yi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function lr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return lr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Gc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = lr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Gc(e);
}
function Kc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Vf(e) {
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
function qp(e, t) {
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
function sC(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function lC(e, t) {
  try {
    e.__panoOwnOutputRev = SA(e.__panoOwnOutputRev);
    const n = sC(t);
    let r = "";
    for (const o of n)
      if (r = lr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), qp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function _a(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function cC(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Pn(e, "background"))
    return _a(e), null;
  const o = Yi(r), a = Rp(o, t, lr);
  if (!a)
    return _a(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = qp(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b && b.key === d) return b.player.failed() ? null : b.player.video;
  _a(e);
  const g = yP({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, player: g }, g.video) : null;
}
function uC(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = X1(e, t).map((v) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, S) => ({ input: v, idx: S })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const S = n[v], M = e.graph ? e.getInputLink(v) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const k = M.origin_id, N = Y1(e, v, k);
    if (!N) continue;
    const A = Number(M.origin_slot ?? 0), O = Yi((N == null ? void 0 : N.id) ?? k), $ = Array.isArray(O == null ? void 0 : O.images) ? O.images : [];
    if ($.length) {
      const z = [];
      A >= 0 && A < $.length && z.push($[A]), z.push(...$);
      for (const W of z.filter((se) => !ac(se))) {
        const se = lr(W);
        if (se)
          return String((S == null ? void 0 : S.name) || ""), { src: `${se}&pano_src=${Ed(O)}`, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (Kt == null ? void 0 : Kt.getNodeImageUrls) == "function" ? Kt.getNodeImageUrls(N) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const z = [];
      A >= 0 && A < R.length && z.push(R[A]), z.push(...R);
      for (const W of z) {
        const se = lr(W);
        if (se)
          return String((S == null ? void 0 : S.name) || ""), { src: se, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const V = Array.isArray(N == null ? void 0 : N.imgs) ? N.imgs : [];
    if (V.length) {
      const z = [];
      A >= 0 && A < V.length && z.push(V[A]), z.push(...V);
      for (const W of z) {
        const se = lr(W);
        if (se)
          return String((S == null ? void 0 : S.name) || ""), { src: se, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const w = (b = N == null ? void 0 : N.widgets) == null ? void 0 : b.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image");
    if (w) {
      let z = lr(w.value);
      if (z && !z.includes("/") && !z.includes(":") && (N.comfyClass === "LoadImage" || N.type === "LoadImage") && (z = Zt.apiURL(`/view?filename=${encodeURIComponent(z)}&type=input&subfolder=`)), z)
        return String((S == null ? void 0 : S.name) || ""), { src: z, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const u = Pn(e, "background") ? Yi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((g = u == null ? void 0 : u.ui) == null ? void 0 : g.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const S = lr(v);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function fC(e, t = [], n = {}) {
  const r = uC(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = oC(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(u, g);
  let v = -1;
  const S = () => {
    var k, N, A, O;
    if (v += 1, v >= a.length) {
      if (((N = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : N.call(k, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (O = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || O.call(A, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[v];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, k, N;
    ((k = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : k.call(M, u)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0);
  }, b.onerror = (M) => {
    var k, N, A, O;
    if (v + 1 < a.length) {
      S();
      return;
    }
    if (((N = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : N.call(k, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (O = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || O.call(A, u);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), c && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function dC(e, t = [], n = null, r = {}) {
  const o = fC(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function q1(e) {
  var t, n;
  if (e) {
    Yp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function pC(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function J1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function zl(e, t, n = "") {
  const r = J1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < KA ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function I0(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function hC(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), g = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function $f(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function mC(e) {
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
function gC(e, t) {
  return K1(e, t);
}
function Xs(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let a = aC(n);
  if (!a && (r != null && r.external)) {
    if (!Pn(e, "external-sticker")) return null;
    const M = Yi(e == null ? void 0 : e.id), k = ((S = M == null ? void 0 : M.ui) == null ? void 0 : S.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const N of Array.isArray(k) ? k : [k])
      if (a = lr(N), a) break;
  }
  if (!a) return null;
  const c = Ds(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? qp(a, d) : a, g = xA(a, u, d);
  return Yp.get(e, g, b, (M, k) => {
    var N, A;
    k && (r != null && r.external && e.__panoOutputFromRun && wi(e, "image-loaded"), (A = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || A.call(N));
  }) || null;
}
function yC(e, t) {
  var v, S, M, k;
  const n = SC(e, t), r = xC(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((N) => N && typeof N == "object").map((N) => [String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim(), Number((N == null ? void 0 : N.z_index) || 0)])
  ), c = n ? r.map((N) => {
    const A = n.getGroupDisplayCanvas(N);
    return A ? {
      id: `paint_group:${N}`,
      source: A,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${N}`,
      zIndex: Number(a.get(N) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || k.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = wA()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var N, A;
    return (A = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null ? void 0 : A.call(N);
  });
  const d = bA(t == null ? void 0 : t.output_preset), b = u.filter((N) => (N == null ? void 0 : N.visible) !== !1 && String((N == null ? void 0 : N.layerKind) || "paint") === "paint").map((N) => String((N == null ? void 0 : N.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = u.map((N) => {
    const A = e.__panoRasterObjectSurfaceCache.get(
      N,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return A ? {
      id: `raster:${String((N == null ? void 0 : N.id) || "")}`,
      source: A.source,
      revision: A.revision,
      zIndex: Number((N == null ? void 0 : N.z_index) || 0),
      opacity: 1,
      visible: (N == null ? void 0 : N.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...g];
}
function bC(e, t, n, r) {
  var a, c, u, d, b, g;
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
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = _C(e, t, r);
  return o || null;
}
function vC(e, t) {
  var v, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((S = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : S.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), g = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function _C(e, t, n) {
  var o, a;
  const r = vC(t, n || (Kt == null ? void 0 : Kt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function wC(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function SC(e, t) {
  var b, g, v, S, M, k, N, A, O, $, R, V;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (S = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = wC(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = dd(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((N = e.__panoPreviewPaintRevision) == null ? void 0 : N.paint) !== d.paint || ((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== d.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== d.groups || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function xC(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function kC(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function MC(e, t, n) {
  const r = Kp(t, n);
  r.visible && Gp(e, r.boundaryEdges, { selected: !1 });
}
function NC(e, t, n) {
  const r = Kp(t, n);
  r.visible && (e.save(), Gp(e, r.boundaryEdges, { selected: !0 }), z1(e, r, { accent: dA(t) }), e.restore());
}
function Hd(e, t, n) {
  return e1(Lc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Wc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Pa;
}
function PC(e) {
  return [Pn(e, "background") ? Rp(Yi(e.id), ["pano_input_videos"], lr) : "", HA(e, Ji)];
}
function AC(e) {
  var a;
  if (!Pn(e, "external-sticker")) return null;
  const t = Yi(e.id), n = Ds(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(lr), meta: n };
  const o = Rp(t, ["pano_sticker_input_videos"], lr);
  return o ? { src: o, meta: n } : null;
}
function CC({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function E0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: ri({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Xs(e, c.id, Hb(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, u), v = m1(b.playback.stickerMedia, u);
        return g ? { media: g, revision: Vf(g), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", g = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Xs(e, g, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Kc(u) ? { media: u, revision: Vf(u) } : null;
  }, o = (t.painting_visible === !1 ? [] : yC(e, t)).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Kc(n) ? { media: n, revision: Vf(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: t1(e.__panoSurfaceScene.sceneState, Wc(e), t.stickers, { media: r, paintLayers: o })
  };
}
function IC(e, t, n) {
  var V, w, z, W, se, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  J1(e, r);
  const o = Jn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (z = (w = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : w.refresh) == null || z.call(w)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (se = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : se.refresh) == null || _e.call(se));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const g = (e.__panoSurfacePlayback ? CC(e.__panoSurfacePlayback) : cC(e, ["pano_input_videos"], () => {
    var Y, J;
    return (J = (Y = e.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : J.call(Y);
  })) || dC(
    e,
    Ji,
    () => {
      var Y, J;
      return (J = (Y = e.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : J.call(Y);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Kc(g);
  let S = null;
  const M = (Y, J) => {
    S || (S = E0(e, o, g));
    const te = n.render({ width: Y.w, height: Y.h, camera: J, ...S });
    return te && d.drawImage(te.canvas, te.x, te.y, te.width, te.height, Y.x, Y.y, Y.w, Y.h), !!te;
  };
  if (r === "cutout") {
    const Y = mC(o), J = kC(g), te = Y ? ne(Xi(Y).aspect, 0.1, 10) : v ? ne(Number(J.width / J.height), 0.05, 20) : 1, ge = jp(b, te);
    e.__panoCutoutNodeFrame = ge;
    let he = "none";
    const re = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (Y)
      if (g && !v)
        he = "loading";
      else if (v) {
        const B = RP({ width: c, height: u }, ge, Y);
        [
          !B.fallback || M(B.fallback.rect, Ts(B.fallback.shot)),
          M(B.rect, Ts(B.shot)),
          !B.fallback || M(ge, Ts(Y))
        ].every(Boolean) || (he = "loading");
      } else
        he = "empty";
    else {
      const B = e.__panoLastCutoutShot;
      B ? (e.__panoPreviewView = O1(B, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? M(b, Lc(e.__panoPreviewView, c, u)) || (he = "loading") : g ? he = "loading" : he = "empty";
    }
    v || n.release(), n.failed && he === "loading" && (he = "none"), Y && (e.__panoLastCutoutShot = { ...Y }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(ge.x, ge.y, ge.w, ge.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ge.x + 0.5, ge.y + 0.5, Math.max(0, ge.w - 1), Math.max(0, ge.h - 1)), d.restore()), he === "loading" ? ($f(e, !1), zl(e, !0, re)) : he === "empty" ? ($f(e, !0), zl(e, !1, "")) : ($f(e, !1), zl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!g || v) && (S = E0(e, o, g), !S.background && !S.layers.length ? (n.release(), k = !0) : k = M(b, Lc(e.__panoPreviewView, c, u)));
  const N = !k && !n.failed;
  zl(e, N, N ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), N && hC(d, b, I0(t, b));
  const A = Hd(e, c, u);
  !g && k && EC(d, A, I0(t, b));
  const O = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), $ = Od(o, Wc(e)), R = k ? $.find((Y) => String((Y == null ? void 0 : Y.id) || "") === O && (Y == null ? void 0 : Y.visible) !== !1) : null;
  k && $.filter((Y) => Y !== R && (Y == null ? void 0 : Y.visible) !== !1 && (Y.external || Y.source_kind === "external_image")).filter((Y) => !Kc(Xs(e, Y.id, null, { external: !0 }))).forEach((Y) => MC(d, Y, A)), R && NC(d, R, A);
}
function O0(e, t, n, r, o = 1) {
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
function EC(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(tr(b, u));
    O0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(tr(u, b));
    O0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: tr(0, 0) },
    { name: "Right", dir: tr(90, 0) },
    { name: "Back", dir: tr(180, 0) },
    { name: "Left", dir: tr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Gd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function OC(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function yr(e, t) {
  return OC(e, t) ? !1 : (Gd(e), !0);
}
function T0() {
  var n;
  const e = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function TC(e) {
  var n;
  if (!e) return;
  const t = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function FC(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !W1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function DC(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function F0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && LC(e, 180, t);
    }
  };
}
function LC(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ss(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const RC = /* @__PURE__ */ new WeakMap();
function Z1(e, t) {
  return f1(RC, e, t) ? !1 : (lC(e, t), q1(e), Ss(e), !0);
}
async function VC(e) {
  var n, r;
  const t = await hP(e, Kt, Zt);
  t && (Z1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function $C(e, t = {}) {
  var wn;
  const n = t.__allowStandalone === !0, r = B1(e);
  if (r && !n) {
    Xp(e);
    return;
  }
  r && FC(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: A0(e)
  }, u = "dom", d = c.signature || A0(e);
  if (Number(e.__panoRebindGeneration || 0), zd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, $d(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (wn = e.__panoDomPreview) != null && wn.widget || (e.__panoLegacyPreviewHooked && uc(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, v = b ? 0 : TP, S = document.createElement("div");
  if (UA(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const G = jc(Rd(
      e.addDOMWidget(Vd(), "preview", S, F0(e, null))
    ));
    Ss(e), e.__panoDomPreview = { widget: G, root: S, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const M = document.createElement("div");
  M.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const k = Tn({ label: "node.surface" });
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
  const N = document.createElement("div");
  N.style.cssText = [
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
  ].join(";"), N.textContent = "Connect ERP image", M.appendChild(k), M.appendChild(N), S.appendChild(M);
  const A = cb(S), O = document.createElement("div");
  O && (O.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", O.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(O)), YA(e, 120, 120), Ss(e);
  let $ = null;
  try {
    DC(e, g, () => {
      var G, xe;
      return (xe = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : xe.call(G);
    }), $ = jc(Rd(e.addDOMWidget(
      Vd(),
      "preview",
      S,
      F0(
        e,
        () => {
          var G, xe;
          return (xe = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : xe.call(G);
        },
        g,
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
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(Ie)));
  }, w = r1(V), z = /* @__PURE__ */ Aa(o ? { ...N1(Jn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...I1(Jn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G }))
  });
  let W = null;
  if (o && e.__panoSceneStateV2) {
    const [G, xe] = [0, 1].map(() => {
      const Ee = au(document, "node.playback");
      return Ee.playsInline = !0, Ee.preload = "auto", Ee.crossOrigin = "anonymous", Ee.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", M.appendChild(Ee), Ee;
    }), ie = Tn({ label: "node.still" });
    ie.__panoFrameIdx = 0;
    const Fe = Tn({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const Ue = EP({
      video: G,
      stickerVideo: xe,
      createImage: (Ee, Qe) => {
        const Nt = new Image();
        return Nt.onload = Qe, Nt.onerror = Qe, Nt.src = Ee, Nt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ee) => requestAnimationFrame(Ee),
        cancelFrame: (Ee) => cancelAnimationFrame(Ee)
      },
      readState: () => Jn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Qe;
        if (!(G.videoWidth > 0 && G.videoHeight > 0)) return;
        const Ee = Math.min(1, WA / G.videoWidth);
        ie.width = Math.round(G.videoWidth * Ee), ie.height = Math.round(G.videoHeight * Ee), (Qe = ie.getContext("2d")) == null || Qe.drawImage(G, 0, 0, ie.width, ie.height), ie.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Ee;
        xe.videoWidth > 0 && xe.videoHeight > 0 && (Fe.width = xe.videoWidth, Fe.height = xe.videoHeight, (Ee = Fe.getContext("2d")) == null || Ee.drawImage(xe, 0, 0), Fe.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        z.playing = Ue.playing, V();
      }
    });
    W = { playback: Ue, video: G, still: ie, stickerVideo: xe, stickerStill: Fe, stickerSource: "" }, e.__panoSurfacePlayback = W;
  }
  const se = () => {
    var Nt;
    const { playback: G, still: xe, stickerStill: ie } = W, Fe = Fd(M, !!((Nt = e.flags) != null && Nt.collapsed)), Ue = G.source, Ee = Fe ? AC(e) : null, Qe = G.follow({
      shown: Fe,
      sources: Fe ? PC(e) : [],
      state: Jn(e),
      sticker: Ee
    });
    ((Ee == null ? void 0 : Ee.src) || "") !== W.stickerSource && (W.stickerSource = (Ee == null ? void 0 : Ee.src) || "", fd(ie)), G.source !== Ue && (fd(xe), xe.__panoFrameIdx = 0), z.playable = Qe, z.playing = G.playing;
  }, _e = () => {
    var xe, ie;
    const G = ((xe = e.__panoOwnOutputVideoCache) == null ? void 0 : xe.player) ?? null;
    G && !Fd(M, !!((ie = e.flags) != null && ie.collapsed)) && G.pause(), o && (z.playable = !!G && !G.failed(), z.playing = !!(G != null && G.playing));
  }, T = () => {
    var G;
    W == null || W.playback.pause(), (G = e.__panoOwnOutputVideoCache) == null || G.player.pause();
  };
  let Y = null;
  const J = (o ? CP : $P)({
    readState: () => Jn(e),
    publishLiveState: (G) => {
      G ? (Y = G, e.__panoLiveStateOverride = G) : (e.__panoLiveStateOverride === Y && (e.__panoLiveStateOverride = null), Y = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (G) => {
      var Fe, Ue, Ee, Qe;
      const xe = va(e, "state_json");
      if (!xe) return;
      Kb(e, G.active);
      const ie = Bb(e, G);
      Ub(e, ie, String(xe.value ?? "")) || (xe.value = ie, (Fe = xe.callback) == null || Fe.call(xe, ie), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (Qe = (Ee = e.graph) == null ? void 0 : Ee.setDirtyCanvas) == null || Qe.call(Ee, !0, !0));
    },
    onChange: (G) => Object.assign(z, G)
  }), ge = o ? j1(e, (G = "sync", xe = null) => {
    var Tt;
    if (!o || !e.graph || !J || J.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Pt = Pn(e, "external-sticker"), Sn = Jn(e).stickers.find((Ft) => Ft.source.kind === "port");
      return J.apply({
        type: "sync-port",
        value: k1(e, {
          pose: Pt ? Ds(e, "pano_sticker_input_pose", xe) : null,
          image: Sn ? Xs(e, Sn.id, null, { external: !0 }) : null
        })
      });
    }
    const ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Pt) => String((Pt == null ? void 0 : Pt.name) || "") === "sticker_image") : -1, Fe = ie >= 0 ? ((Tt = e.getInputLink(ie)) == null ? void 0 : Tt.id) ?? null : null;
    if (Fe == null)
      return J.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Pn(e, "external-sticker")) return !1;
    const Ue = Ds(e, "pano_sticker_input_pose", xe), Ee = Array.isArray(Ue) ? Ue[0] : Ue, Qe = String(Ds(e, "pano_sticker_input_state_hash", xe) ?? ""), Nt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, ln = Jn(e), bn = (Array.isArray(ln == null ? void 0 : ln.stickers) ? ln.stickers : []).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === "sticker_image_1"), Bt = Xs(e, "sticker_image_1", null, { external: !0 }), $r = Ee && typeof Ee == "object" ? Ee : bn || { yaw_deg: Nt.yaw, pitch_deg: Nt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return J.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Qe,
        pose: $r,
        imageWidth: Number((Bt == null ? void 0 : Bt.naturalWidth) || (Bt == null ? void 0 : Bt.width) || 0),
        imageHeight: Number((Bt == null ? void 0 : Bt.naturalHeight) || (Bt == null ? void 0 : Bt.height) || 0)
      }
    });
  }) : () => {
  };
  let he = 0;
  const re = async (G) => {
    if (!o || !J || !Lr(G)) return !1;
    T();
    const xe = `asset_${Math.random().toString(16).slice(2, 10)}`, ie = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    he += 1, z.importing = !0;
    const Ue = _s(e, `add:${xe}`, async () => {
      const Ee = await ws(G), Qe = await _o(G, {
        fetchApi: (Nt, ln) => Zt.fetchApi(Nt, ln)
      });
      return Oe(), J.apply({
        type: "add-sticker",
        value: {
          stickerId: ie,
          assetId: xe,
          asset: Qe,
          imageWidth: Ee.width,
          imageHeight: Ee.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      he = Math.max(0, he - 1), z.importing = he > 0, V();
    }
  };
  let B = null, D = null, I = null, Z = !1;
  const ce = () => {
    var G;
    return I && (clearTimeout(I), I = null), Z ? (Z = !1, ((G = J == null ? void 0 : J.commitGesture) == null ? void 0 : G.call(J)) ?? !1) : !1;
  }, Oe = () => {
    var Fe, Ue, Ee;
    const G = ce(), xe = (B == null ? void 0 : B.pointerId) ?? (D == null ? void 0 : D.pointerId);
    if (B = null, D = null, xe != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, xe) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, xe));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ie = ((Ee = J == null ? void 0 : J.commitGesture) == null ? void 0 : Ee.call(J)) ?? !1;
    return G || ie;
  }, Ye = () => {
    var Fe, Ue, Ee;
    const G = ce(), xe = B == null ? void 0 : B.pointerId;
    if (B = null, xe != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, xe) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, xe));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ie = ((Ee = J == null ? void 0 : J.cancelGesture) == null ? void 0 : Ee.call(J)) ?? !1;
    return G || ie;
  }, qe = () => Oe();
  J && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(qe));
  let vt = null, j = !1;
  if (O && J)
    try {
      Wp(), vt = up(o ? fA : rA, {
        model: z,
        onAction: (G) => {
          var Fe, Ue, Ee;
          if ((G == null ? void 0 : G.type) === "toggle-playback") {
            Oe(), W ? W.playback.toggle() : (Fe = e.__panoOwnOutputVideoCache) == null || Fe.player.toggle(), V();
            return;
          }
          if (T(), (G == null ? void 0 : G.type) === "open-editor") {
            Oe(), o || (z.aspectOpen = !1), (Ue = e.__panoOpenEditor) == null || Ue.call(e);
            return;
          }
          if (o) {
            if ((G == null ? void 0 : G.type) === "add-image-file") {
              re(G.file);
              return;
            }
            J.apply(G) && V();
            return;
          }
          if ((G == null ? void 0 : G.type) === "toggle-aspect") {
            z.aspectOpen = !z.aspectOpen;
            return;
          }
          if ((G == null ? void 0 : G.type) === "close-aspect") {
            z.aspectOpen = !1;
            return;
          }
          let xe = G;
          if ((G == null ? void 0 : G.type) === "add-frame") {
            const Qe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            xe = {
              ...G,
              ...DP(Qe, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((G == null ? void 0 : G.type) === "delete-frame") {
            const Qe = Eo(Jn(e));
            Qe && (e.__panoPreviewView = O1(Qe, {
              width: k.width,
              height: k.height
            }));
          }
          const ie = ((Ee = e.__panoCutoutNodeFrame) == null ? void 0 : Ee.safeRect) || null;
          z.aspectOpen = !1, J.apply({ ...xe, safeRect: ie }) && V();
        }
      }), vt.mount(O), j = !0;
    } catch {
      vt = null, j = !1;
    }
  const _t = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    W && se(), V();
  }) : null;
  _t == null || _t.observe(M);
  const Ie = (G) => {
    var ie, Fe;
    R.raf = 0, R.inTick = !0;
    let xe = !1;
    try {
      xe = wt.stepInertia(G), (R.needsDraw || xe) && (R.needsDraw = !1, W ? se() : _e(), (ie = e.flags) != null && ie.collapsed || IC(e, k, w), z.viewUnavailable = w.failed);
    } finally {
      R.inTick = !1;
    }
    (xe || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(Ie)), BA() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, $d(e), hs(S), hs(M), hs(k), hs(S.parentElement), hs((Fe = S.parentElement) == null ? void 0 : Fe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, wt = mp({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    getViewportSize: () => {
      const G = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(G.width || k.clientWidth || 0)),
        h: Math.max(1, Number(G.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const G = P0();
      return {
        x: G.invert_view_x ? -1 : 1,
        y: G.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), Ae = o ? M : S, De = (G) => {
    const xe = k.getBoundingClientRect();
    return {
      x: (Number(G.clientX) - xe.left) * (k.width / Math.max(1, xe.width)),
      y: (Number(G.clientY) - xe.top) * (k.height / Math.max(1, xe.height))
    };
  }, F = (G) => {
    var Fe, Ue;
    if (!o || !a) return;
    const xe = Jn(e), ie = S0(
      Od(xe, Wc(e)),
      String(((Fe = xe == null ? void 0 : xe.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      De(G),
      Hd(e, k.width, k.height)
    );
    if (!ie) {
      k.style.cursor = "grab";
      return;
    }
    if (((Ue = ie.item) == null ? void 0 : Ue.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = ie.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (G) => {
    var Nt, ln, bn, Bt, $r, Ta, Tt, Pt, Sn, Ft, Nr;
    if (!yr(G, Ae) || G.button !== 0) return;
    if (!o) {
      const mn = Eo(Jn(e)), An = e.__panoCutoutNodeFrame;
      if (!mn) {
        (Nt = S.focus) == null || Nt.call(S, { preventScroll: !0 }), (ln = k.setPointerCapture) == null || ln.call(k, G.pointerId), k.style.cursor = "grabbing", wt.startDrag(G.clientX, G.clientY, G.pointerId);
        return;
      }
      if (mn.locked === !0 || !An || !J) return;
      const nl = De(G);
      let Qi;
      if (G.shiftKey) {
        const Ci = F1({
          frame: An,
          point: nl,
          startRollDeg: Number(mn.roll_deg ?? mn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Ci) return;
        Qi = { kind: "roll", pointerId: G.pointerId, rollGesture: Ci };
      } else {
        const Ci = ((bn = Jn(e)) == null ? void 0 : bn.ui_settings) || P0();
        Qi = {
          kind: "pan",
          pointerId: G.pointerId,
          startPoint: nl,
          startShot: { ...mn },
          focalPx: Ao(An, mn),
          invertX: Ci.invert_view_x === !0,
          invertY: Ci.invert_view_y === !0
        };
      }
      Oe(), (Bt = S.focus) == null || Bt.call(S, { preventScroll: !0 }), ($r = k.setPointerCapture) == null || $r.call(k, G.pointerId), k.style.cursor = "grabbing", J.beginGesture(), B = Qi;
      return;
    }
    if (!a) return;
    const xe = De(G), ie = Jn(e), Fe = String(((Ta = ie == null ? void 0 : ie.active) == null ? void 0 : Ta.selected_sticker_id) || ""), Ue = Hd(e, k.width, k.height);
    (Tt = S.focus) == null || Tt.call(S, { preventScroll: !0 });
    const Ee = () => S0(Od(ie, Wc(e)), Fe, xe, Ue);
    let Qe = Ee();
    if (Qe && (W != null && W.playback.playing) && (T(), Qe = Ee()), Qe && J) {
      if (wt.stopMotion(), Oe(), String(((Pt = Qe.item) == null ? void 0 : Pt.id) || "") !== Fe && J.apply({ type: "select-sticker", id: Qe.item.id }), ((Sn = Qe.item) == null ? void 0 : Sn.locked) === !0) {
        V();
        return;
      }
      const mn = xe, An = Qe.geometry.center;
      D = {
        active: !0,
        kind: Qe.hit.kind,
        pointerId: G.pointerId,
        startPoint: mn,
        startCenter: { ...An },
        startSticker: { ...Qe.item },
        startDistance: Math.max(1, Math.hypot(mn.x - An.x, mn.y - An.y)),
        startAngle: Math.atan2(mn.y - An.y, mn.x - An.x),
        projection: Ue
      }, J.beginGesture(), (Ft = k.setPointerCapture) == null || Ft.call(k, G.pointerId), k.style.cursor = Qe.hit.kind === "rotate" ? "grabbing" : Qe.hit.kind === "move" ? "move" : Qe.hit.cursor, V();
      return;
    }
    (Nr = k.setPointerCapture) == null || Nr.call(k, G.pointerId), k.style.cursor = "grabbing", wt.startDrag(G.clientX, G.clientY, G.pointerId);
  }), k.addEventListener("pointermove", (G) => {
    if (!o) {
      if (!B) {
        if (!wt.state.drag.active) return;
        yr(G, Ae), wt.moveDrag(G.clientX, G.clientY, "pano");
        return;
      }
      if (B.pointerId !== G.pointerId || !J) return;
      if (yr(G, Ae), B.kind === "pan") {
        const ie = De(G);
        J.updateGesture({
          type: "pan-camera",
          startShot: B.startShot,
          dx: ie.x - B.startPoint.x,
          dy: ie.y - B.startPoint.y,
          focalPx: B.focalPx,
          invertX: B.invertX,
          invertY: B.invertY
        });
        return;
      }
      const xe = D1(B.rollGesture, De(G), G);
      if (!xe) return;
      B.rollGesture = xe.gesture, J.updateGesture({ type: "set-roll", value: xe.rollDeg });
      return;
    }
    if (!D && !wt.state.drag.active) {
      F(G);
      return;
    }
    if (D) {
      if (D.pointerId !== G.pointerId || !J) return;
      yr(G, Ae);
      const xe = De(G);
      let ie = D.startSticker;
      if (D.kind === "move")
        ie = mA(
          D.startSticker,
          {
            x: D.startCenter.x + xe.x - D.startPoint.x,
            y: D.startCenter.y + xe.y - D.startPoint.y
          },
          D.projection
        );
      else if (D.kind === "scale") {
        const Fe = Math.hypot(xe.x - D.startCenter.x, xe.y - D.startCenter.y);
        ie = gA(D.startSticker, D.startDistance, Fe);
      } else if (D.kind === "rotate") {
        const Fe = Math.atan2(xe.y - D.startCenter.y, xe.x - D.startCenter.x);
        ie = yA(D.startSticker, D.startAngle, Fe, G.shiftKey === !0);
      }
      J.updateGesture({ type: "set-transform", value: ie }), V();
      return;
    }
    !a || !wt.state.drag.active || (yr(G, Ae), wt.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const H = () => {
    var xe, ie;
    if (!B && !D) {
      if (!wt.state.drag.active) return;
      wt.endDrag(), k.style.cursor = "grab", V();
      return;
    }
    if (!J) return;
    const G = (B == null ? void 0 : B.pointerId) ?? (D == null ? void 0 : D.pointerId);
    B = null, D = null;
    try {
      (xe = k.hasPointerCapture) != null && xe.call(k, G) && ((ie = k.releasePointerCapture) == null || ie.call(k, G));
    } catch {
    }
    J.cancelGesture(), k.style.cursor = "grab", V();
  }, q = (G, xe = !1) => {
    var ie, Fe, Ue, Ee;
    if (!o) {
      if (!B) {
        if (!wt.state.drag.active) return;
        yr(G, Ae), (ie = k.releasePointerCapture) == null || ie.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), V();
        return;
      }
      if (B.pointerId !== G.pointerId || !J) return;
      yr(G, Ae), B = null, (Fe = k.releasePointerCapture) == null || Fe.call(k, G.pointerId), k.style.cursor = "grab", xe ? J.cancelGesture() : J.commitGesture(), F(G), V();
      return;
    }
    if (D) {
      if (D.pointerId !== G.pointerId || !J) return;
      yr(G, Ae), D = null, (Ue = k.releasePointerCapture) == null || Ue.call(k, G.pointerId), k.style.cursor = "grab", xe ? J.cancelGesture() : J.commitGesture(), V();
      return;
    }
    !a || !wt.state.drag.active || (yr(G, Ae), (Ee = k.releasePointerCapture) == null || Ee.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), V());
  };
  k.addEventListener("pointerup", q), k.addEventListener("pointercancel", (G) => q(G, !0)), k.addEventListener("lostpointercapture", H), k.addEventListener("pointerleave", (G) => {
    !o && B || D || wt.state.drag.active && q(G);
  });
  const pe = (G) => {
    const xe = document.activeElement;
    if (xe !== S && !S.contains(xe)) return;
    if (G.key === "Escape" && (B || D) && J) {
      H(), Gd(G);
      return;
    }
    if (!o || G.key !== "Delete" && G.key !== "Backspace" || !J) return;
    const ie = G.target, Fe = String((ie == null ? void 0 : ie.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || ie != null && ie.isContentEditable || z.canDelete === !0 && (T(), Oe(), J.apply({ type: "delete-selected" }) && V(), Gd(G));
  };
  window.addEventListener("keydown", pe, !0);
  const ye = jA({
    requestFrame: (G) => requestAnimationFrame(G),
    cancelFrame: (G) => cancelAnimationFrame(G),
    restore: (G) => TC(G)
  }), we = (G) => {
    var ie, Fe, Ue, Ee, Qe, Nt;
    if (!yr(G, Ae)) return;
    if (!o) {
      const ln = Eo(Jn(e));
      if (ln && ln.locked !== !0 && J) {
        const bn = kc(G);
        bn !== 0 && (Z || (Oe(), J.beginGesture(), Z = !0), J.updateGesture({
          type: "step-fov",
          direction: bn
        }) ? (I && clearTimeout(I), I = setTimeout(ce, 180), V()) : J.hasGestureChanges() || (J.cancelGesture(), Z = !1));
      } else if (!ln) {
        const bn = T0();
        wt.applyWheelEvent(G) && V(), ye.schedule(bn);
      }
      (ie = G.preventDefault) == null || ie.call(G), (Fe = G.stopPropagation) == null || Fe.call(G), (Ue = G.stopImmediatePropagation) == null || Ue.call(G);
      return;
    }
    if (!a) return;
    const xe = T0();
    wt.applyWheelEvent(G) && V(), (Ee = G.preventDefault) == null || Ee.call(G), (Qe = G.stopPropagation) == null || Qe.call(G), (Nt = G.stopImmediatePropagation) == null || Nt.call(G), ye.schedule(xe);
  }, Te = o ? [M, k] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    Te.forEach((xe) => xe.addEventListener(G, we, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    k.addEventListener(G, (xe) => yr(xe, Ae)), M.addEventListener(G, (xe) => yr(xe, Ae));
  });
  const Ne = va(e, "state_json");
  let Ce = null, be = null;
  Ne && !Ne.__panoPreviewPatchedCb && (Ce = Ne.callback, be = (G) => {
    const xe = Ce ? Ce(G) : void 0;
    return V(), xe;
  }, Ne.callback = be, Ne.__panoPreviewPatchedCb = be);
  const Re = va(e, "bg_color");
  let Me = null, Ve = null;
  Re && !Re.__panoPreviewPatchedCb && (Me = Re.callback, Ve = (G) => {
    const xe = Me ? Me(G) : void 0;
    return V(), xe;
  }, Re.callback = Ve, Re.__panoPreviewPatchedCb = Ve);
  const We = e.onRemoved, at = e.onResize, gt = e.onExecuted, dt = e.onDragOver, St = e.onDragDrop;
  let yt = null;
  const _n = () => {
    o && (z.dropActive = !0, yt && clearTimeout(yt), yt = setTimeout(() => {
      yt = null, z.dropActive = !1;
    }, 140));
  }, $n = o ? function(G) {
    return (dt ? dt.apply(this, arguments) : !1) === !0 ? !0 : Up(G == null ? void 0 : G.dataTransfer) ? (_n(), !0) : !1;
  } : null, si = o ? function(G) {
    var Fe;
    if ((St ? St.apply(this, arguments) : !1) === !0) return !0;
    const ie = Array.from(((Fe = G == null ? void 0 : G.dataTransfer) == null ? void 0 : Fe.files) || []).find((Ue) => Lr(Ue));
    return ie ? (yt && clearTimeout(yt), yt = null, z.dropActive = !1, re(ie), !0) : !1;
  } : null;
  o && (e.onDragOver = $n, e.onDragDrop = si);
  const h = o ? zA(S, {
    onActive: (G) => {
      if (G) {
        _n();
        return;
      }
      yt && clearTimeout(yt), yt = null, z.dropActive = !1;
    },
    onDrop: (G) => {
      re(G);
    }
  }) : () => {
  }, Ge = function(G) {
    e.__panoOutputFromRun = !0;
    const xe = Z1(e, G);
    wi(e, xe ? "executed" : "sync", G), V();
    const ie = gt ? gt.apply(this, arguments) : void 0;
    return Ss(e), ie;
  };
  e.onExecuted = Ge;
  const tn = e.onConnectionsChange, nn = function(G, xe) {
    const ie = u0(e, G, xe, Lp), Fe = u0(e, G, xe, Ji), Ue = arguments, Ee = tn ? tn.apply(this, Ue) : void 0, Qe = () => {
      R.destroyed || (Fe && pC(e), ie && wi(e, "connection-change"), Ss(e), V());
    };
    return Qe(), queueMicrotask(Qe), Ee;
  };
  e.onConnectionsChange = nn;
  const Ai = function() {
    const G = at ? at.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), G;
  };
  e.onResize = Ai;
  const Do = function() {
    return Zi(), jd.unregister(this), We ? We.apply(this, arguments) : void 0;
  };
  e.onRemoved = Do;
  const Zi = () => {
    var G, xe, ie, Fe, Ue, Ee, Qe, Nt, ln;
    R.destroyed = !0, (G = _t == null ? void 0 : _t.disconnect) == null || G.call(_t), o ? Oe() : Ye(), k.removeEventListener("lostpointercapture", H), h(), A(), window.removeEventListener("keydown", pe, !0), (ie = (xe = e.__panoStateFlushers) == null ? void 0 : xe.delete) == null || ie.call(xe, qe), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = J == null ? void 0 : J.destroy) == null || Fe.call(J), (Ue = vt == null ? void 0 : vt.unmount) == null || Ue.call(vt), W && (W.playback.dispose(), W.video.remove(), W.stickerVideo.remove(), e.__panoSurfacePlayback === W && (e.__panoSurfacePlayback = null)), w.dispose(), e.__panoSurfaceScene = null, (Qe = (Ee = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ee.dispose) == null || Qe.call(Ee), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ge(), ye.dispose(), yt && clearTimeout(yt), yt = null, Yp.disposeOwner(e), _a(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((Nt = e.__panoCutoutNodeSurface) == null ? void 0 : Nt.session) === J && (e.__panoCutoutNodeSurface = null), ((ln = e.__panoStickersNodeSurface) == null ? void 0 : ln.session) === J && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Ai && (e.onResize = at), e.onExecuted === Ge && (e.onExecuted = gt), e.onConnectionsChange === nn && (e.onConnectionsChange = tn), be && (Ne == null ? void 0 : Ne.callback) === be && (Ne.callback = Ce), be && (Ne == null ? void 0 : Ne.__panoPreviewPatchedCb) === be && delete Ne.__panoPreviewPatchedCb, Ve && (Re == null ? void 0 : Re.callback) === Ve && (Re.callback = Me), Ve && (Re == null ? void 0 : Re.__panoPreviewPatchedCb) === Ve && delete Re.__panoPreviewPatchedCb, e.onDragOver === $n && (e.onDragOver = dt), e.onDragDrop === si && (e.onDragDrop = St), e.onRemoved === Do && (e.onRemoved = We);
  };
  e.__panoDomRestore = Zi, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = J && j && !o ? { session: J, model: z } : null, e.__panoStickersNodeSurface = J && j && o ? { session: J, model: z } : null, e.__panoDomPreview = {
    widget: $,
    root: S,
    canvas: k,
    requestDraw: V,
    state: R,
    emptyHintEl: N,
    nodeSurface: e.__panoCutoutNodeSurface
  }, jd.register(e), e.graph && wi(e, "attach"), V();
}
function D0(e, t = {}) {
  U1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function L0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (B1(e) && !n) {
    Xp(e);
    return;
  }
  U1(e).attach(t);
}
function zC(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function jC(e, t = 1, n = 1 / 0, r = null) {
  const o = Number(t), a = Number.isFinite(o) && o > 0 ? o : 1, c = Number(e == null ? void 0 : e.width), u = Number(e == null ? void 0 : e.height), d = Math.max(0, Number.isFinite(c) ? c : 0) * a, b = Math.max(0, Number.isFinite(u) ? u : 0) * a, g = Number(n), v = g > 0 ? g : 1 / 0, S = Math.max(d, b);
  let M = S > 0 ? Math.min(1, v / S) : 1;
  return r && d > 0 && b > 0 && (M = Math.min(M, r.width * a / d, r.height * a / b)), {
    width: Math.max(1, Math.round(d * M)),
    height: Math.max(1, Math.round(b * M))
  };
}
function HC({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === u || (u = k, o(k)), k;
  }, g = () => b();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", g), b(), { toggle: async () => {
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
    var k, N, A;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", g), d())
        try {
          const O = (N = t.exitFullscreen) == null ? void 0 : N.call(t);
          (A = O == null ? void 0 : O.catch) == null || A.call(O, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const GC = { class: "pano-preview-node-surface" }, KC = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ae(), fe("div", GC, [
      Le(pn, {
        icon: e.model.fullscreen ? Ze(Pe).fullscreen_close : Ze(Pe).fullscreen,
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
      e.model.viewUnavailable ? (ae(), xr(Hp, { key: 0 })) : ht("", !0)
    ]));
  }
}, jl = 140, WC = 180, R0 = 40, zf = 10;
function V0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function $0(e, t) {
  const n = V0(e), r = V0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function z0(e) {
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
  return typeof ((a = Zt) == null ? void 0 : a.apiURL) == "function" ? Zt.apiURL(o) : o;
}
function wa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return wa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return z0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = wa(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : z0(e);
}
function Q1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function BC(e) {
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
function Kd(e) {
  var o;
  const t = (o = cr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if ($0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if ($0(a, n)) return t[a];
  return null;
}
function UC(e) {
  var r, o;
  const t = Kd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = wa(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function YC(e, t = "erp_image") {
  var M, k, N, A, O, $, R;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, w) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(w))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (N = (k = (M = cr) == null ? void 0 : M.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : N.call(k, a), u = Kd(a), d = Kd(e == null ? void 0 : e.id), b = [
    (A = d == null ? void 0 : d.ui) == null ? void 0 : A.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (O = u == null ? void 0 : u.ui) == null ? void 0 : O.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const w of V) {
        const z = wa(w);
        if (z) return z;
      }
  let g = [];
  try {
    g = typeof (($ = cr) == null ? void 0 : $.getNodeImageUrls) == "function" ? cr.getNodeImageUrls(c) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const V of g) {
      const w = wa(V);
      if (w) return w;
    }
  if (c) {
    const V = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const w of V) {
      const z = wa(w);
      if (z) return z;
    }
  }
  const v = (R = c == null ? void 0 : c.widgets) == null ? void 0 : R.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), S = String((v == null ? void 0 : v.value) || "").trim();
  return S ? Zt.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`) : "";
}
function jf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function j0(e, t, n, r, o, a, c) {
  var b, g, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Q1(a) || n <= 1 || r <= 1) {
    jf(t, n, r);
    return;
  }
  if (c.failed) {
    jf(t, n, r);
    return;
  }
  const u = Number(((v = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Lc(o, n, r),
    background: { media: a, revision: BC(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : jf(t, n, r);
}
function H0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class XC {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = r1(() => this.requestDraw()), this.controller = mp({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: jt(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${jl}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = Tn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return jl;
        },
        getHeight() {
          return jl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = jc(Rd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(jl, Number(a.minHeight || 0)),
            minWidth: Math.max(WC, Number(a.minWidth || 0))
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
      return Wp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Aa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = HC({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = up(KC, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = cb(n), t.addEventListener("pointerdown", (a) => {
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
      zC(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Q1(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Fd(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = cr.canvas) != null && r.graph) || this.node.graph === cr.canvas.graph);
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
      return H0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, v, S, M;
      const a = bC(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !H0(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - zf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - R0 - zf);
    return { x: zf, y: R0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), j0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? n1 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = jC(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = UC(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t;
      const u = au(document, "preview-node.video");
      u.muted = !0, u.loop = !0, u.preload = "auto", u.playsInline = !0, u.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = u, this.requestDraw());
      }, b = () => this.requestDraw();
      u.addEventListener("loadedmetadata", d), u.addEventListener("loadeddata", d), u.addEventListener("timeupdate", b), u.addEventListener("play", b), u.addEventListener("pause", b), u.src = t, u.load(), this.mediaCleanup = () => {
        u.pause(), u.removeEventListener("loadedmetadata", d), u.removeEventListener("loadeddata", d), u.removeEventListener("timeupdate", b), u.removeEventListener("play", b), u.removeEventListener("pause", b), u.removeAttribute("src"), u.load();
      };
      return;
    }
    const n = YC(this.node, this.imageInputName);
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
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), j0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, g, v, S, M, k, N, A, O;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || v.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (M = this.root) == null ? void 0 : M.remove) == null || k.call(M);
    } catch {
    }
    try {
      K1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((O = (A = (N = this.node) == null ? void 0 : N.widgets) == null ? void 0 : A.find) == null ? void 0 : O.call(A, ($) => ($ == null ? void 0 : $.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function qC(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new XC(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function ev(e, t, n) {
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
function Jp(e) {
  return !!(e != null && e.prototype);
}
function qs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function JC(e, t = {}) {
  Jp(e) || qC(e, {
    ...t,
    onOpen: qs(e, t.onOpen)
  });
}
function ZC(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Jp(e)) {
    L0(e, {
      ...r,
      onOpen: qs(e, t.onOpen)
    });
    return;
  }
  ev(e, "stickers_node_preview", (o) => {
    L0(o, {
      ...r,
      onOpen: qs(o, t.onOpen)
    });
  });
}
function QC(e, t = {}) {
  if (!Jp(e)) {
    D0(e, {
      ...t,
      onOpen: qs(e, t.onOpen)
    });
    return;
  }
  ev(e, "cutout_preview", (n) => {
    D0(n, {
      ...t,
      onOpen: qs(n, t.onOpen)
    });
  });
}
const qn = {
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
}, pi = "pen";
function G0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function eI({ requestFrame: e, cancelFrame: t, tasks: n }) {
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
const mt = Object.freeze({
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
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item loaded, Spark sorted.
  MEDIA: "media",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), tI = new Set(Object.values(mt));
function nI({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: o = (a) => console.error("[PanoramaStickers] editor frame callback failed", a) }) {
  let a = 0, c = !1, u = !1, d = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), g = 1, v = 0;
  function S(N) {
    try {
      N();
    } catch (A) {
      o(A);
    }
  }
  function M() {
    !a && !c && !u && (a = e(k));
  }
  function k(N) {
    a = 0, c = !0;
    try {
      const A = b;
      b = /* @__PURE__ */ new Map();
      for (const $ of A.values()) S(() => $(N));
      if (u) return;
      const O = d;
      d = /* @__PURE__ */ new Set(), (O.size || r()) && S(() => n(N, O));
    } finally {
      c = !1;
    }
    (d.size || b.size || r()) && M();
  }
  return {
    requestDraw(N) {
      if (!tI.has(N)) throw new Error(`Unknown draw reason: ${N}`);
      N === mt.STATE && (v += 1), d.add(N), M();
    },
    requestFrame(N) {
      const A = g++;
      return b.set(A, N), M(), A;
    },
    cancelFrame(N) {
      b.delete(N);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      M();
    },
    get stateRevision() {
      return v;
    },
    // Whether a frame is pending.
    get pending() {
      return a !== 0;
    },
    stop() {
      u = !0, a && t(a), a = 0, b.clear(), d.clear();
    }
  };
}
const rI = 250, iI = 600, oI = 180, aI = 2;
function sI(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xs(e, t, n) {
  return e + (t - e) * n;
}
function lI(e, t, n = 1) {
  const r = Math.max(
    Math.abs(hp(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / oI + o / aI);
  return Math.round(xs(rI, iI, a));
}
function cI(e, t, n) {
  const r = sI(ne(n, 0, 1));
  return {
    position: e.position.map((o, a) => xs(o, t.position[a], r)),
    yaw_deg: jt(e.yaw_deg + hp(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: xs(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: xs(e.hFOV_deg, t.hFOV_deg, r),
    distance: xs(e.distance, t.distance, r)
  };
}
function uI(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(hp(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function fI(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return uI(e, t) ? null : { from: e, to: t, startTs: n, durationMs: lI(e, t, r), end: o };
}
function dI(e, t) {
  const n = ne((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: cI(e.from, e.to, n), done: !1 };
}
function fc(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function pI(e, t, n) {
  const r = fc(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function ta(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function hI(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function mI({
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
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", g = {
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
    historyEntries: Array.from({ length: 8 }, (w, z) => ({ index: z, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const v = ((R = t.find((w) => o(e.paintColor, w.color))) == null ? void 0 : R.id) || "", S = !v, M = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), N = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), A = e.brushSizes[N] ?? 10, O = d(), $ = Array.from({ length: 8 }, (w, z) => e.customPaintHistory[z] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: $.map((w, z) => ({
      index: z,
      color: w ? { cssColor: r(w, 1) } : null
    })),
    sizeValue: A,
    sizeText: String(A),
    sizeFill: `${Math.max(0, Math.min(100, (A - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function gI({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const yI = {
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
function bI(e) {
  const t = [];
  for (const n of e) {
    const [r, o, a] = yI[n.key] || [], c = t[t.length - 1];
    r && (c != null && c.grouped) && c.label === r ? c.fields.push({ ...n, short: o, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: o, drag: a }] });
  }
  return t;
}
function Hf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function vI({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
        icon: a ? Pe.eye : Pe.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function _I({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const o = !e || t;
  let a = null;
  return r && o && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: o, tip: a };
}
function wI(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Sa = "erp", SI = ["1:1", "4:3", "3:2", "16:9"];
function tv(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...SI.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Sa, label: Number(n) === 180 ? "180°" : "360°", active: e === Sa }] : []
  ];
}
function xI({
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
    rows: bI(c),
    notes: u,
    paramsDisabled: !r,
    uiSettings: t ? null : d,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function kI({
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
  isExternalSticker: g,
  isStickerHidden: v,
  canRestoreSelectedToInitial: S,
  iconSet: M,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: k = !1,
  cameraDeletable: N = !1,
  erpChoice: A = !1,
  coverage: O = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let $ = [];
  if (n.length > 1)
    $ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    $ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if ($ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u }
    ], g(t) || ($.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), $.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const R = S(), V = v(t);
      $.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !R
      }), $.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: V ? "Show" : "Hide",
        tip: V ? "Show input image" : "Hide input image",
        icon: V ? M.eye : M.eye_dashed
      });
    }
    $.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed }), g(t) || $.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u });
  } else
    $ = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!b,
        choices: tv(d, { erp: A, coverage: O })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90, disabled: d === Sa }
    ], k ? N && $.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete }) : $.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    );
  return nv(o.corners, $);
}
const K0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function MI({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? K0.filter((u) => u.cameraTip) : K0;
  return nv([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: c.map(({ key: u, label: d, tip: b, cameraTip: g }) => ({ key: u, label: d, tip: r ? g : b, pressed: u === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...o ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Pe.delete }] : []
  ]);
}
function NI(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: g } = e || {};
  if (![u, d, b, g].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), S = Math.max(14, o - n - 14), M = g + 18, k = b - 18 - n;
  let N;
  return M <= S ? N = Math.max(M, 14) : k >= 14 ? N = Math.min(k, S) : N = Math.min(Math.max(M, 14), S), { left: v, top: N };
}
function nv(e, t) {
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
const rv = "painting";
function PI(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const AI = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function CI(e, { span: t, selection: n, selectedId: r, expanded: o, openRows: a, audio: c = null, fpsLocked: u = !1, camera: d = !1, cameraHideable: b = !1, stickers: g = !0, scene: v = !1, sceneLocked: S = !1 }) {
  const M = ($, R, V, w, z, W, { keyable: se = !0, hideable: _e = !0 } = {}) => {
    const T = (Y) => (n == null ? void 0 : n.owner) === $ && n.lane === Y ? n.frames.map((J) => J + W) : [];
    return {
      id: $,
      label: V,
      icon: w,
      clip: z,
      selected: $ === r,
      hideable: _e,
      visible: R.visible,
      keyable: se,
      open: se && a.has($),
      keys: DN(R).map((Y) => ({ frame: Y.frame + W, full: Y.full })),
      selectedFrames: T(null),
      lanes: (se ? Ea(R) : []).map((Y) => ({
        key: `${$}:${Y}`,
        lane: Y,
        label: AI[Y],
        frames: R[Y].keyframes.map((J) => J.frame + W),
        selectedFrames: T(Y)
      }))
    };
  }, k = g ? e.stickers : [], N = k.filter(($) => $.placement === "sky").sort(($, R) => R.z_index - $.z_index), A = k.filter(($) => $.placement === "world"), O = ({ start: $, in: R, duration: V }) => ({ clip: { start: $, end: V === null ? null : $ + V }, offset: $ - R });
  return {
    visible: !0,
    expanded: o,
    hasAudio: !!c,
    muted: !!(c != null && c.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: u || S,
    lengthLocked: S,
    lockTip: S ? "Set by the scene" : "Set by the video input",
    length: S ? t : e.timeline.length,
    rows: [
      ...d ? [M("camera", e.camera, "Camera", Pe.camera, null, 0, { hideable: b })] : [],
      ...[...N, ...A].map(($) => {
        const { clip: R, offset: V } = O($.clip);
        return M($.id, $, Sd($), Pe.image, R, V);
      }),
      ...g && (PI(e.painting) || !e.painting_visible) ? [{
        id: rv,
        label: "Paint",
        icon: Pe.paintbrush_vertical_tool,
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
      ...g && (v || Fc(e.scene)) ? [(() => {
        const { clip: $, offset: R } = O(e.scene.clip);
        return M("scene", e.scene, "Scene", Pe.box, $, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function II(e, t, n, r) {
  const o = $N(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const EI = { class: "pano-floating-right" }, OI = {
  key: 0,
  class: "pano-floating-space"
}, TI = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, FI = ["data-settled"], DI = ["data-ready", "data-settled"], LI = ["aria-label", "data-tip"], RI = {
  key: 1,
  class: "pano-camera-preview-label"
}, VI = {
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
    return (t, n) => (ae(), fe(Xe, null, [
      X("div", EI, [
        e.space ? xi((ae(), fe("div", OI, [
          X("div", TI, [
            (ae(!0), fe(Xe, null, At(e.space.modes, (r) => (ae(), xr(pn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Le(pn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Oo, e.space.visible]
        ]) : ht("", !0),
        (ae(!0), fe(Xe, null, At(e.buttons, (r) => (ae(), xr(pn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      xi(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: pt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
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
            Le(Gt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, LI)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ae(), fe("div", RI, rt(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, DI)
      ], 8, FI), [
        [Oo, e.preview.visible]
      ])
    ], 64));
  }
}, $I = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, zI = ["y2", "transform"], jI = ["transform"], HI = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => xi((ae(), fe("div", {
      class: pt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ae(), fe("svg", $I, [
        a[1] || (a[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ae(!0), fe(Xe, null, At(Ze(n), (c) => (ae(), fe("line", {
          key: c,
          class: pt(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, zI))), 128)),
        X("g", { transform: r.value }, [...a[0] || (a[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, jI),
        a[2] || (a[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Oo, e.model.visible === !0]
    ]);
  }
}, GI = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: pt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Le(R1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Le(pn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Le(HI, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, KI = ["aria-label"], WI = { class: "pano-canvas-confirm-title" }, BI = { class: "pano-canvas-confirm-text" }, UI = { class: "pano-canvas-confirm-actions" }, YI = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, XI = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Qt(null), r = /* @__PURE__ */ Qt(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const S = r.value;
      if (!S) return;
      const M = S.querySelector(`[data-action='${v}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function u() {
      var N;
      const v = r.value;
      if (!v) return;
      const S = v.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const k = a()[0] || v;
      (N = k == null ? void 0 : k.focus) == null || N.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var O;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const S = a(), M = r.value;
      if (!S.length) {
        v.preventDefault(), (O = M == null ? void 0 : M.focus) == null || O.call(M);
        return;
      }
      const k = S[0], N = S[S.length - 1], A = document.activeElement;
      if (v.shiftKey) {
        (A === k || A === M || !(M != null && M.contains(A))) && (v.preventDefault(), N.focus());
        return;
      }
      (A === N || !(M != null && M.contains(A))) && (v.preventDefault(), k.focus());
    }
    function g(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return No(() => t.model.visible, (v, S) => {
      if (v) {
        o = document.activeElement, eu(() => {
          u();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), el(() => {
      d();
    }), (v, S) => e.model.visible === !0 ? (ae(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: $t(g, ["self"])
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
        X("div", WI, rt(e.model.title), 1),
        X("div", BI, rt(e.model.text), 1),
        X("div", UI, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", YI, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, KI)
    ], 512)) : ht("", !0);
  }
}, qI = ["data-paint-pane"], JI = ["hidden"], ZI = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], QI = ["aria-pressed", "disabled"], eE = ["hidden"], tE = { class: "pano-paint-color-pop-head" }, nE = { class: "pano-paint-color-field" }, rE = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, iE = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, oE = { class: "pano-paint-color-field" }, aE = { class: "pano-paint-alpha-wrap" }, sE = ["value"], lE = { "data-paint-alpha-value": "" }, cE = ["hidden"], uE = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, fE = ["data-paint-history-index", "aria-label", "disabled"], dE = ["data-paint-footer"], pE = ["data-paint-group"], hE = ["hidden"], mE = ["value", "disabled"], gE = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, yE = ["hidden"], bE = {
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
      class: pt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ae(!0), fe(Xe, null, At(e.panes, (a) => {
        var c;
        return ae(), fe("div", {
          key: a.key,
          class: pt(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ae(), fe("div", {
            key: 0,
            class: pt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ae(!0), fe(Xe, null, At(e.paintSwatches, (u) => (ae(), fe("button", {
              key: u.id,
              class: pt(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Et(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, ZI))), 128)),
            X("button", {
              class: pt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, QI),
            X("div", {
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
              X("div", tE, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", nE, [
                X("div", rE, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", iE, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", oE, [
                o[1] || (o[1] = X("span", null, "Opacity", -1)),
                X("div", aE, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, sE),
                  X("span", lE, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", uE, [
                  (ae(!0), fe(Xe, null, At(e.state.historyEntries || [], (u) => (ae(), fe("button", {
                    key: u.index,
                    class: pt(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Et(n(u.color))
                  }, null, 14, fE))), 128))
                ])
              ], 8, cE)
            ], 12, eE)
          ], 10, JI)) : ht("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ae(!0), fe(Xe, null, At(a.tools, (u) => {
                var d;
                return ae(), xr(pn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, pE),
            X("div", {
              class: pt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, mE),
              X("span", gE, rt(e.state.sizeText || "10"), 1)
            ], 10, hE),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Le(pn, {
                icon: Ze(Pe).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, yE)
          ], 8, dE)
        ], 10, qI);
      }), 128))
    ], 2));
  }
}, vE = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Qt(null), r = /* @__PURE__ */ Qt(null), o = /* @__PURE__ */ Qt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ae(), fe(Xe, null, [
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
}, _E = ["aria-label"], wE = ["data-tip", "aria-pressed"], SE = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ae(), fe("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ae(!0), fe(Xe, null, At(e.buttons, (a) => (ae(), fe("button", bi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), rt(a.label), 17, wE))), 128))
    ], 12, _E));
  }
}, xE = {
  key: 0,
  class: "pano-cutout-menu"
}, kE = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, ME = ["data-aspect"], NE = ["data-action", "aria-label", "data-tip", "disabled"], PE = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ae(!0), fe(Xe, null, At(e.model.items || [], (r) => (ae(), fe(Xe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ae(), fe("div", xE, [
          X("button", kE, [
            Le(Gt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: pt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ae(!0), fe(Xe, null, At(r.choices || [], (o) => (ae(), fe("button", {
              key: o.value,
              class: pt(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, rt(o.label), 11, ME))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ae(), xr(SE, {
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
          Le(Gt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, NE))
      ], 64))), 128))
    ], 4));
  }
}, AE = {
  key: 0,
  class: "pano-easing"
}, CE = { class: "pano-section-title" }, IE = { class: "pano-easing-range" }, EE = { class: "pano-easing-modes" }, OE = ["aria-pressed", "onClick"], TE = ["viewBox"], FE = ["x", "y"], DE = ["x1", "y1", "x2", "y2"], LE = ["d"], RE = ["x1", "y1", "x2", "y2"], VE = ["x1", "y1", "x2", "y2"], $E = ["cx", "cy"], zE = ["cx", "cy"], jE = { class: "pano-easing-note" }, hi = 132, go = 14, HE = {
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
    ], a = /* @__PURE__ */ Qt(null), c = ft(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => go + k * hi, d = (k) => go + (1 - k) * hi, b = ft(() => {
      var $;
      if ((($ = n.model) == null ? void 0 : $.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, N, A, O] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(N)} ${u(A)} ${d(O)} ${u(1)} ${d(1)}`;
    }), g = ft(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var N;
      return JSON.stringify(k.easing) === JSON.stringify((N = n.model) == null ? void 0 : N.easing);
    }
    function S(k, N) {
      r("timeline", { type: "easing", easing: k, commit: N });
    }
    function M(k, N) {
      var V;
      if (k.button !== 0 || !c.value) return;
      const A = k.currentTarget;
      (V = A.setPointerCapture) == null || V.call(A, k.pointerId);
      let O = null;
      const $ = (w) => {
        const z = a.value.getBoundingClientRect(), W = z.width / (hi + go * 2), se = ((w.clientX - z.left) / W - go) / hi, _e = 1 - ((w.clientY - z.top) / W - go) / hi;
        O = [...O || c.value], O[N] = Math.round(Math.min(1, Math.max(0, se)) * 100) / 100, O[N + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, S(O, !1);
      }, R = () => {
        A.removeEventListener("pointermove", $), A.removeEventListener("pointerup", R), A.removeEventListener("pointercancel", R), O && S(O, !0);
      };
      A.addEventListener("pointermove", $), A.addEventListener("pointerup", R), A.addEventListener("pointercancel", R);
    }
    return (k, N) => e.model ? (ae(), fe("div", AE, [
      X("div", CE, [
        N[2] || (N[2] = X("span", null, "Easing", -1)),
        X("span", IE, rt(e.model.label), 1)
      ]),
      X("div", EE, [
        (ae(), fe(Xe, null, At(o, (A) => X("button", {
          key: A.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(A) ? "true" : "false",
          onClick: (O) => S(A.easing, !0)
        }, rt(A.label), 9, OE)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ae(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${hi + go * 2} ${hi + go * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        X("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: hi,
          height: hi
        }, null, 8, FE),
        X("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, DE),
        X("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, LE),
        c.value ? (ae(), fe(Xe, { key: 0 }, [
          X("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, RE),
          X("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, VE),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: N[0] || (N[0] = (A) => M(A, 0))
          }, null, 40, $E),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: N[1] || (N[1] = (A) => M(A, 2))
          }, null, 40, zE)
        ], 64)) : ht("", !0)
      ], 8, TE)) : ht("", !0),
      X("div", jE, [
        e.model.mixed ? (ae(), fe(Xe, { key: 0 }, [
          ys("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ae(), fe(Xe, { key: 1 }, [
          ys("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ae(), fe(Xe, { key: 2 }, [
          ys("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ae(), fe(Xe, { key: 3 }, [
          ys("cubic-bezier(" + rt(g.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, GE = {
  class: "pano-side",
  "data-side": ""
}, KE = { class: "pano-side-head" }, WE = { class: "pano-side-title" }, BE = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, UE = {
  key: 0,
  class: "pano-side-scroll"
}, YE = { class: "pano-inspector" }, XE = { class: "pano-ui-row pano-coverage-row" }, qE = ["data-selected"], JE = ["aria-pressed", "disabled"], ZE = ["aria-pressed", "disabled"], QE = {
  key: 0,
  class: "pano-section-title"
}, eO = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, tO = {
  class: "pano-picker",
  "data-picker": "selection"
}, nO = ["disabled"], rO = { class: "pano-picker-label" }, iO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, oO = ["hidden"], aO = ["data-selection-id"], sO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, lO = {
  key: 2,
  class: "pano-state-actions"
}, cO = ["disabled"], uO = ["data-key"], fO = { class: "pano-field-group-values" }, dO = ["title", "onPointerdown"], pO = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], hO = ["data-key"], mO = ["min", "max", "step", "value", "disabled", "data-param-key"], gO = ["min", "max", "step", "value", "disabled", "data-param-key"], yO = ["open"], bO = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, vO = { class: "pano-ui-settings-body" }, _O = { class: "pano-ui-row" }, wO = ["data-selected"], SO = ["aria-pressed"], xO = ["aria-pressed"], kO = { class: "pano-ui-row" }, MO = ["data-selected"], NO = ["aria-pressed"], PO = ["aria-pressed"], AO = {
  key: 1,
  class: "pano-side-footer"
}, CO = ["data-action"], IO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ft(() => {
      const b = n.model;
      return !b || typeof b != "object" ? !1 : Object.keys(b).length > 0 && !!b.coverage;
    });
    function a(b) {
      return { "--v": `${Number((b == null ? void 0 : b.fillPct) || 0)}%` };
    }
    function c(b, g) {
      return (g == null ? void 0 : g.paramsDisabled) === !0 || (b == null ? void 0 : b.enabled) === !1;
    }
    const u = {};
    function d(b, g) {
      const v = u[g.key];
      if (b.button !== 0 || !v || c(g, n.model)) return;
      b.preventDefault();
      const S = b.currentTarget, M = b.clientX, k = Number(v.value) || 0;
      let N = !1;
      S.setPointerCapture(b.pointerId);
      const A = ($) => {
        if (!N && Math.abs($.clientX - M) < 3) return;
        N = !0;
        const R = k + ($.clientX - M) * g.drag * ($.shiftKey ? 0.1 : 1);
        v.value = String(Number(R.toFixed(3))), v.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, O = () => {
        S.removeEventListener("pointermove", A), S.removeEventListener("pointerup", O), S.removeEventListener("pointercancel", O), S.removeEventListener("lostpointercapture", O), N ? v.dispatchEvent(new Event("change", { bubbles: !0 })) : v.focus();
      };
      S.addEventListener("pointermove", A), S.addEventListener("pointerup", O), S.addEventListener("pointercancel", O), S.addEventListener("lostpointercapture", O);
    }
    return (b, g) => {
      var v, S, M, k, N;
      return ae(), fe("div", GE, [
        X("div", KE, [
          X("div", WE, [
            X("span", BE, [
              Le(Gt, {
                icon: Ze(Pe).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, rt(e.nodeTitle), 1)
          ]),
          g[1] || (g[1] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        g[10] || (g[10] = X("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ae(), fe("div", UE, [
          X("div", YE, [
            g[9] || (g[9] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", XE, [
              g[2] || (g[2] = X("label", null, "Coverage", -1)),
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
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 360 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "360", 8, JE),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, ZE)
              ], 8, qE)
            ]),
            e.model.transformTitle !== !1 ? (ae(), fe("div", QE, [...g[3] || (g[3] = [
              X("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (ae(), fe("div", eO, [
              X("label", null, rt(e.model.selectionPicker.label), 1),
              X("div", tO, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", rO, [
                    e.model.selectionPicker.currentIcon ? (ae(), fe("span", iO, [
                      Le(Gt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    X("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  g[4] || (g[4] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, nO),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ae(!0), fe(Xe, null, At(e.model.selectionPicker.items || [], (A) => (ae(), fe("button", {
                    key: A.id,
                    type: "button",
                    class: pt(["pano-picker-item", { active: A.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": A.id
                  }, [
                    A.icon ? (ae(), fe("span", sO, [
                      Le(Gt, {
                        icon: A.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    X("span", null, rt(A.label), 1)
                  ], 10, aO))), 128))
                ], 8, oO)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (ae(), fe("div", lO, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Le(Gt, {
                  icon: Ze(Pe).copy
                }, null, 8, ["icon"]),
                X("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, cO)
            ])) : ht("", !0),
            X("div", {
              class: pt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ae(!0), fe(Xe, { key: 0 }, At(e.model.notes, (A) => (ae(), fe("div", {
                key: A,
                class: "pano-param-note"
              }, rt(A), 1))), 128)) : (ae(!0), fe(Xe, { key: 1 }, At(e.model.rows || [], (A) => (ae(), fe(Xe, {
                key: A.key
              }, [
                A.grouped ? (ae(), fe("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": A.key
                }, [
                  X("label", null, rt(A.label), 1),
                  X("div", fO, [
                    (ae(!0), fe(Xe, null, At(A.fields, (O) => (ae(), fe("div", {
                      key: O.key,
                      class: "pano-axis-field"
                    }, [
                      X("span", {
                        class: pt(["pano-axis", { disabled: c(O, e.model) }]),
                        title: O.label,
                        onPointerdown: ($) => d($, O)
                      }, rt(O.short), 43, dO),
                      X("input", {
                        ref_for: !0,
                        ref: ($) => {
                          u[O.key] = $;
                        },
                        type: "number",
                        min: O.min,
                        max: O.max,
                        step: O.step,
                        value: O.displayValue,
                        disabled: c(O, e.model),
                        "aria-label": `${A.label} ${O.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": O.key
                      }, null, 8, pO)
                    ]))), 128))
                  ])
                ], 8, uO)) : (ae(), fe("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": A.key
                }, [
                  X("label", null, rt(A.label), 1),
                  X("input", {
                    type: "range",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].value,
                    disabled: c(A.fields[0], e.model),
                    style: Et(a(A.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": A.fields[0].key
                  }, null, 12, mO),
                  X("input", {
                    type: "number",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].displayValue,
                    disabled: c(A.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": A.fields[0].key
                  }, null, 8, gO)
                ], 8, hO))
              ], 64))), 128))
            ], 2),
            Le(HE, {
              model: e.easing,
              onTimeline: g[0] || (g[0] = (A) => r("timeline", A))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (ae(), fe("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                g[5] || (g[5] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", bO, [
                  Le(Gt, {
                    icon: Ze(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", vO, [
                X("div", _O, [
                  g[6] || (g[6] = X("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, SO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, xO)
                  ], 8, wO)
                ]),
                X("div", kO, [
                  g[7] || (g[7] = X("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, NO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, PO)
                  ], 8, MO)
                ]),
                g[8] || (g[8] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, yO)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (ae(), fe("div", AO, [
          (ae(!0), fe(Xe, null, At(e.model.footerButtons, (A) => (ae(), fe("button", {
            key: A.action,
            class: pt(["pano-btn", { "pano-btn-primary": A.primary === !0 }]),
            type: "button",
            "data-action": A.action
          }, rt(A.label), 11, CO))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, EO = { class: "pano-timeline-bar" }, OO = ["aria-label", "data-tip"], TO = ["aria-label", "data-tip"], FO = { class: "pano-timeline-time" }, DO = ["data-tip"], LO = { key: 0 }, RO = ["min", "max", "value"], VO = ["data-tip"], $O = { key: 0 }, zO = ["max", "value"], jO = ["aria-expanded"], HO = ["inert"], GO = { class: "pano-timeline-name" }, KO = ["aria-pressed", "aria-label", "data-tip", "onClick"], WO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, BO = ["disabled", "aria-expanded", "aria-label", "onClick"], UO = ["title", "aria-current", "onClick"], YO = ["data-keyed", "aria-label", "onClick"], XO = ["onPointerdown"], qO = ["onPointerdown"], JO = ["onPointerdown"], ZO = ["onPointerdown"], QO = ["aria-label", "data-tip", "onPointerdown"], eT = { key: 0 }, tT = ["onPointerdown"], nT = ["aria-label", "data-tip", "onPointerdown"], rT = { key: 0 }, iT = 10, oT = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ mc(0), playing: /* @__PURE__ */ mc(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = /* @__PURE__ */ Qt(null), a = /* @__PURE__ */ Qt(null), c = /* @__PURE__ */ Qt(1), u = /* @__PURE__ */ Qt(0), d = /* @__PURE__ */ Qt(!1);
    let b = null, g = null, v = null;
    nu(() => {
      b = new ResizeObserver(([re]) => {
        c.value = Math.max(1, re.contentRect.width);
      }), o.value && b.observe(o.value), g = new ResizeObserver(([re]) => {
        u.value = re.contentRect.height;
      }), a.value && g.observe(a.value);
    }), el(() => {
      b == null || b.disconnect(), g == null || g.disconnect(), v == null || v();
    });
    const S = ft(() => Math.max(1, Number(n.model.span || 1))), M = ft(() => n.playhead.frame.value), k = ft(() => n.playhead.playing.value), N = ft(() => LN(M.value, Number(n.model.fps || 1))), A = ft(() => c.value / S.value), O = (re) => `${re / S.value * 100}%`, $ = ft(() => qN(S.value, A.value));
    function R(re) {
      const B = o.value.getBoundingClientRect(), D = Math.floor((re - B.left) / Math.max(1, B.width) * S.value);
      return Math.min(S.value - 1, Math.max(0, D));
    }
    function V(re, B, D) {
      const I = Math.ceil(iT / Math.max(1e-6, A.value)), Z = new Map(B.map((ce) => [ce.frame, ce.full]));
      return JN(B.map((ce) => ce.frame), I).map((ce, Oe) => ({
        ...ce,
        key: `${re}:${Oe}`,
        partial: ce.frames.some((Ye) => !Z.get(Ye)),
        selected: ce.frames.some((Ye) => D.includes(Ye))
      }));
    }
    const w = ft(() => {
      const re = /* @__PURE__ */ new Map();
      for (const B of n.model.rows || []) {
        re.set(B.id, V(B.id, B.keys, B.selectedFrames));
        for (const D of B.lanes) re.set(D.key, V(D.key, D.frames.map((I) => ({ frame: I, full: !0 })), D.selectedFrames));
      }
      return re;
    });
    function z(re) {
      const B = re.end === null ? S.value : re.end;
      return { left: O(re.start), width: O(Math.max(0, B - re.start)) };
    }
    function W(re, B) {
      const D = re.clientX, I = Math.max(1e-6, A.value);
      let Z = 0;
      B("start", 0, re);
      const ce = (Ye) => {
        if (Ye.pointerId !== re.pointerId) return;
        const qe = Math.round((Ye.clientX - D) / I);
        qe !== Z && (Z = qe, B("move", Z, Ye));
      }, Oe = (Ye) => {
        Ye.pointerId === re.pointerId && (v(), B("end", Z, Ye));
      };
      v == null || v(), v = () => {
        window.removeEventListener("pointermove", ce), window.removeEventListener("pointerup", Oe), window.removeEventListener("pointercancel", Oe), v = null;
      }, window.addEventListener("pointermove", ce), window.addEventListener("pointerup", Oe), window.addEventListener("pointercancel", Oe);
    }
    function se(re) {
      re.button === 0 && W(re, (B, D, I) => r("action", { type: "seek", frame: R(I.clientX), phase: B }));
    }
    function _e(re, B, D) {
      re.button === 0 && (r("action", { type: "select-row", id: B.id }), W(re, (I, Z) => r("action", { type: "clip", id: B.id, mode: D, delta: Z, phase: I })));
    }
    function T(re, B, D, I, Z) {
      if (re.button === 0) {
        if (re.shiftKey) {
          r("action", { type: "select-keys", owner: B.id, lane: D, frames: I.frames, additive: !0 });
          return;
        }
        I.frames.every((ce) => Z.includes(ce)) || r("action", { type: "select-keys", owner: B.id, lane: D, frames: I.frames, additive: !1 }), W(re, (ce, Oe) => r("action", { type: "move-keys", delta: Oe, phase: ce }));
      }
    }
    const Y = ft(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function J(re, B, D) {
      r("action", B), await eu(), re.target.value = D();
    }
    function te(re) {
      J(re, { type: "fps", fps: Number(re.target.value) }, () => Y.value);
    }
    function ge(re) {
      const B = re.target.value.trim();
      J(re, { type: "length", length: B ? Number(B) : null }, () => n.model.length ?? "");
    }
    function he(re, B, D) {
      re.button !== 0 || re.target !== re.currentTarget || r("action", { type: "select-keys", owner: B.id, lane: D, frames: [], additive: !1 });
    }
    return (re, B) => xi((ae(), fe("section", {
      class: pt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      X("div", EO, [
        X("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": k.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": k.value ? "Pause (Space)" : "Play (Space)",
          onClick: B[0] || (B[0] = (D) => r("action", { type: "play" }))
        }, [
          Le(Gt, {
            icon: k.value ? Ze(Pe).pause : Ze(Pe).play
          }, null, 8, ["icon"])
        ], 8, OO),
        e.model.hasAudio ? (ae(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: B[1] || (B[1] = (D) => r("action", { type: "mute" }))
        }, [
          Le(Gt, {
            icon: e.model.muted ? Ze(Pe).volume_muted : Ze(Pe).volume2
          }, null, 8, ["icon"])
        ], 8, TO)) : ht("", !0),
        X("span", FO, rt(N.value), 1),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ae(), fe("span", LO, rt(Y.value), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: Ze(kb),
            max: Ze(Sp),
            step: "any",
            value: Y.value,
            "aria-label": "Timeline fps",
            onChange: te
          }, null, 40, RO)),
          B[6] || (B[6] = X("span", null, "fps", -1))
        ], 8, DO),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          B[7] || (B[7] = X("span", null, "Length", -1)),
          e.model.lengthLocked ? (ae(), fe("span", $O, rt(e.model.length), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: "1",
            max: Ze(xp),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ge
          }, null, 40, zO))
        ], 8, VO),
        X("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: B[2] || (B[2] = (D) => r("action", { type: "toggle-expanded" }))
        }, [
          B[8] || (B[8] = X("span", null, "Timeline", -1)),
          Le(Gt, {
            icon: Ze(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, jO)
      ]),
      X("div", {
        class: pt(["pano-timeline-body", { open: e.model.expanded, sliding: d.value }]),
        style: Et({ "--pano-timeline-rows": `${u.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: B[3] || (B[3] = $t((D) => d.value = !0, ["self"])),
        onTransitionend: B[4] || (B[4] = $t((D) => d.value = !1, ["self"])),
        onTransitioncancel: B[5] || (B[5] = $t((D) => d.value = !1, ["self"]))
      }, [
        X("div", {
          ref_key: "gridRef",
          ref: a,
          class: "pano-timeline-grid"
        }, [
          B[9] || (B[9] = X("div", { class: "pano-timeline-corner" }, null, -1)),
          X("div", {
            ref_key: "rulerRef",
            ref: o,
            class: "pano-timeline-ruler",
            onPointerdown: se
          }, [
            (ae(!0), fe(Xe, null, At($.value, (D) => (ae(), fe("span", {
              key: D,
              class: "pano-timeline-tick",
              style: Et({ left: O(D) })
            }, rt(D), 5))), 128)),
            X("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: O(M.value + 0.5) })
            }, null, 4)
          ], 544),
          (ae(!0), fe(Xe, null, At(e.model.rows || [], (D) => (ae(), fe(Xe, {
            key: D.id
          }, [
            X("div", {
              class: pt(["pano-timeline-head", { selected: D.selected, "is-hidden": !D.visible }])
            }, [
              X("div", GO, [
                D.hideable ? (ae(), fe("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": D.visible ? "true" : "false",
                  "aria-label": `${D.label} visible`,
                  "data-tip": D.visible ? "Hide" : "Show",
                  onClick: $t((I) => r("action", { type: "toggle-visible", id: D.id }), ["stop"])
                }, [
                  Le(Gt, {
                    icon: D.visible ? Ze(Pe).eye : Ze(Pe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, KO)) : (ae(), fe("span", WO)),
                X("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !D.keyable,
                  "aria-expanded": D.open ? "true" : "false",
                  "aria-label": D.open ? `Hide ${D.label} parameters` : `Show ${D.label} parameters`,
                  onClick: $t((I) => r("action", { type: "toggle-row", id: D.id }), ["stop"])
                }, [
                  Le(Gt, {
                    icon: Ze(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, BO),
                X("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: D.label,
                  "aria-current": D.selected ? "true" : void 0,
                  onClick: (I) => r("action", { type: "select-row", id: D.id })
                }, [
                  Le(Gt, {
                    icon: D.icon
                  }, null, 8, ["icon"]),
                  X("span", null, rt(D.label), 1)
                ], 8, UO),
                D.keyable ? (ae(), fe("button", {
                  key: 2,
                  class: pt(["pano-timeline-key", { keyed: Ze(If)(D.keys, M.value) }]),
                  type: "button",
                  "data-keyed": Ze(If)(D.keys, M.value) ? "true" : "false",
                  "aria-label": Ze(If)(D.keys, M.value) ? `Every ${D.label} parameter has a keyframe here; update them` : `Add keyframes for every ${D.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: $t((I) => r("action", { type: "key-row", owner: D.id }), ["stop"])
                }, [
                  Le(Gt, {
                    icon: Ze(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, YO)) : ht("", !0)
              ]),
              D.open ? (ae(!0), fe(Xe, { key: 0 }, At(D.lanes, (I) => (ae(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane-head"
              }, rt(I.label), 1))), 128)) : ht("", !0)
            ], 2),
            X("div", {
              class: pt(["pano-timeline-track", { selected: D.selected }])
            }, [
              X("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (I) => he(I, D, null)
              }, [
                D.clip ? (ae(), fe("div", {
                  key: 0,
                  class: pt(["pano-timeline-clip", { open: D.clip.end === null }]),
                  style: Et(z(D.clip)),
                  onPointerdown: $t((I) => _e(I, D, "move"), ["stop"])
                }, [
                  X("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: $t((I) => _e(I, D, "start"), ["stop"])
                  }, null, 40, JO),
                  X("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: $t((I) => _e(I, D, "end"), ["stop"])
                  }, null, 40, ZO)
                ], 46, qO)) : ht("", !0),
                (ae(!0), fe(Xe, null, At(w.value.get(D.id), (I) => (ae(), fe("button", {
                  key: I.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: I.selected, cluster: I.frames.length > 1, partial: I.partial }]),
                  style: Et({ left: O(I.frame + 0.5) }),
                  "aria-label": `${D.label}: ${I.frames.length > 1 ? `${I.frames.length} keyframes` : `keyframe at frame ${I.frames[0]}`}`,
                  "data-tip": I.frames.length > 1 ? `${I.frames.length} keyframes` : `Frame ${I.frames[0]}`,
                  onPointerdown: $t((Z) => T(Z, D, null, I, D.selectedFrames), ["stop"])
                }, [
                  I.frames.length > 1 ? (ae(), fe("span", eT, rt(I.frames.length), 1)) : ht("", !0)
                ], 46, QO))), 128))
              ], 40, XO),
              D.open ? (ae(!0), fe(Xe, { key: 0 }, At(D.lanes, (I) => (ae(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane",
                onPointerdown: (Z) => he(Z, D, I.lane)
              }, [
                (ae(!0), fe(Xe, null, At(w.value.get(I.key), (Z) => (ae(), fe("button", {
                  key: Z.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: Z.selected, cluster: Z.frames.length > 1 }]),
                  style: Et({ left: O(Z.frame + 0.5) }),
                  "aria-label": `${I.label}: ${Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `keyframe at frame ${Z.frames[0]}`}`,
                  "data-tip": Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `Frame ${Z.frames[0]}`,
                  onPointerdown: $t((ce) => T(ce, D, I.lane, Z, I.selectedFrames), ["stop"])
                }, [
                  Z.frames.length > 1 ? (ae(), fe("span", rT, rt(Z.frames.length), 1)) : ht("", !0)
                ], 46, nT))), 128))
              ], 40, tT))), 128)) : ht("", !0),
              X("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: O(M.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, HO)
    ], 2)), [
      [Oo, e.model.visible]
    ]);
  }
}, aT = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: pt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, sT = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, lT = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", sT, [
      (ae(!0), fe(Xe, null, At(e.buttons, (r) => xi((ae(), xr(pn, {
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
        [Oo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, cT = ["data-video-ready"], uT = { class: "pano-video-transport-shell" }, fT = { class: "pano-video-controls-left" }, dT = { class: "pano-video-filmstrip" }, pT = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, hT = ["src", "onLoad"], mT = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, gT = ["max", "value", "disabled"], yT = { class: "pano-video-controls-right" }, bT = ["data-has-audio"], vT = { class: "pano-video-volume-pop" }, _T = ["value", "disabled"], wT = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.playing) === !0 ? "Pause video" : "Play video";
    }), o = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.playing) === !0 ? Pe.pause : Pe.play;
    }), a = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = ft(() => {
      var w;
      return ((w = t.state) == null ? void 0 : w.loop) === !1 ? Pe.loop_off : Pe.loop;
    }), d = ft(() => {
      var w, z;
      return ((w = t.state) == null ? void 0 : w.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ft(() => {
      var w, z, W;
      return ((w = t.state) == null ? void 0 : w.hasAudio) !== !0 ? Pe.volume : ((z = t.state) == null ? void 0 : z.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), g = ft(() => {
      var w;
      return Math.max(0, Math.min(100, Number(((w = t.state) == null ? void 0 : w.progressPct) || 0)));
    }), v = ft(() => ({ left: `${g.value}%` })), S = ft(() => {
      var se, _e;
      const w = (se = t.state) == null ? void 0 : se.volumePct, z = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, W = Number(w ?? z ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), M = ft(() => {
      var W, se;
      const z = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((se = t.state) == null ? void 0 : se.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, z)}ch`;
    }), k = ft(() => ({ "--pano-video-time-ch": M.value })), N = ft(() => {
      var W, se;
      const w = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if (w.length) return w;
      const z = Math.max(7, Number(((se = t.state) == null ? void 0 : se.thumbnailCount) || 9));
      return Array.from({ length: z }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), A = /* @__PURE__ */ Qt(/* @__PURE__ */ new Set()), O = (w) => String((w == null ? void 0 : w.id) || (w == null ? void 0 : w.src) || (w == null ? void 0 : w.label) || ""), $ = (w) => A.value.has(O(w)), R = (w) => {
      const z = new Set(A.value);
      z.add(O(w)), A.value = z;
    };
    No(N, (w) => {
      const z = new Set(w.map(O)), W = /* @__PURE__ */ new Set();
      for (const se of A.value)
        z.has(se) && W.add(se);
      A.value = W;
    }, { immediate: !0 });
    const V = ft(() => {
      var w;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((w = t.state) == null ? void 0 : w.shellMaxWidthPx) || 640))}px`
      };
    });
    return (w, z) => (ae(), fe("div", {
      class: pt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(V.value)
    }, [
      z[1] || (z[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      z[2] || (z[2] = X("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", uT, [
        X("div", fT, [
          Le(pn, {
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
            style: Et(k.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", dT, [
          X("div", pT, [
            (ae(!0), fe(Xe, null, At(N.value, (W) => (ae(), fe("div", {
              key: O(W),
              class: pt(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && $(W)
              }])
            }, [
              W.src ? (ae(), fe("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (se) => R(W)
              }, null, 40, hT)) : (ae(), fe("span", mT))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Et(v.value),
            "aria-hidden": "true"
          }, [...z[0] || (z[0] = [
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
          }, null, 8, gT)
        ]),
        X("div", yT, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(k.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Le(pn, {
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
            X("div", vT, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, _T)
            ]),
            Le(pn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, bT)
        ])
      ])
    ], 14, cT));
  }
}, ST = { class: "pano-floating-top" }, xT = ["data-selected", "data-view-count"], kT = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], MT = { class: "label" }, NT = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ae(), fe("div", ST, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ae(!0), fe(Xe, null, At(e.buttons, (o) => xi((ae(), fe("button", {
            key: o.key,
            class: pt(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            Le(Gt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            X("span", MT, rt(o.label), 1)
          ], 10, kT)), [
            [Oo, o.visible !== !1]
          ])), 128))
        ], 8, xT)
      ]);
    };
  }
};
function iv(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Pe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Pe.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Pe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Pe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Pe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Pe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Pe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Pe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Pe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Pe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Pe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Pe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Pe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Pe.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Pe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Pe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Pe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Pe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Pe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Pe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Pe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Pe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Pe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Pe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Pe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Pe.lasso_tool }
        ]
      }
    ]
  };
}
const PT = ["aria-label"], AT = { class: "pano-stage-column" }, CT = { class: "pano-stage-wrap" }, IT = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, ET = {
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
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ Qt(null), b = /* @__PURE__ */ Qt(null), g = /* @__PURE__ */ Qt(null);
    function v() {
      var T, Y;
      return ((Y = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : Y.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(T) {
      var Y, J;
      return ((J = (Y = b.value) == null ? void 0 : Y.open) == null ? void 0 : J.call(Y, T)) === !0;
    }
    function M(T) {
      o("image-file-selected", T);
    }
    function k(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: S });
    const N = ft(() => r.readOnly === !0), A = ft(() => r.shellPreset || iv(r.type)), O = ft(() => {
      var Y, J, te;
      const T = String((((Y = r.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (J = r.uiState) == null ? void 0 : J.stageStatusDetail : (te = r.uiState) == null ? void 0 : te.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), $ = ft(() => {
      var Y;
      const T = Array.isArray((Y = A.value) == null ? void 0 : Y.floatingButtons) ? A.value.floatingButtons.slice() : [];
      return N.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), T;
    });
    function R() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function V() {
      var J;
      const Y = R()[0] || d.value;
      (J = Y == null ? void 0 : Y.focus) == null || J.call(Y);
    }
    function w() {
      var T;
      u != null && u.isConnected && ((T = u.focus) == null || T.call(u)), u = null;
    }
    function z(T) {
      var Y, J, te, ge;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const he = R();
          if (!he.length) {
            T.preventDefault(), (J = (Y = d.value) == null ? void 0 : Y.focus) == null || J.call(Y);
            return;
          }
          const re = he[0], B = he[he.length - 1], D = document.activeElement;
          if (T.shiftKey) {
            (D === re || D === d.value || !((te = d.value) != null && te.contains(D))) && (T.preventDefault(), B.focus());
            return;
          }
          (D === B || !((ge = d.value) != null && ge.contains(D))) && (T.preventDefault(), re.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function W() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function se() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", z), T ? (u || (u = document.activeElement), W(), document.addEventListener("keydown", z), eu(() => {
        V();
      })) : (se(), w());
    }
    return nu(() => {
      _e(r.open);
    }), el(() => {
      se(), document.removeEventListener("keydown", z), w();
    }), No(() => r.open, (T) => {
      _e(T);
    }), (T, Y) => e.open ? (ae(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Y[2] || (Y[2] = $t((J) => o("close"), ["self"]))
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
        X("div", AT, [
          X("div", CT, [
            Y[3] || (Y[3] = X("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Y[4] || (Y[4] = X("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            Y[5] || (Y[5] = X("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ae(), fe("div", IT, rt(O.value), 1)) : ht("", !0),
            Y[6] || (Y[6] = X("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Le(vE, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            Le(V1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: M,
              onFileCancelled: k
            }, null, 512),
            N.value ? ht("", !0) : (ae(), fe(Xe, { key: 1 }, [
              Le(lT, {
                buttons: e.uiState.toolButtons || A.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Le(GI, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Le(bE, {
                "paint-swatches": e.paintSwatches,
                panes: A.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Le(wT, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Le(NT, {
              buttons: e.uiState.viewButtons || A.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Le(VI, {
              buttons: e.uiState.floatingButtons || $.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Le(PE, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Le(aT, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Le(XI, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Le(oT, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: Y[0] || (Y[0] = (J) => o("timeline", J))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (ae(), xr(IO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: Y[1] || (Y[1] = (J) => o("timeline", J))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, PT)
    ])) : ht("", !0);
  }
}, Dr = "loading", Js = "ready", _r = "failed";
function ov(e, t = "") {
  return e && (e.__panoLoadState = Dr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function av(e, t = "") {
  return e && (e.__panoLoadState = Js, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function sv(e, t = "") {
  return e && (e.__panoLoadState = _r, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wd(e, t) {
  return e ? e.__panoLoadState === _r ? _r : typeof t == "function" && t(e) ? Js : Dr : Js;
}
function Bd(e) {
  return Wd(e) === _r;
}
function OT({ presented: e, background: t = Js, stickers: n = [] } = {}) {
  if (!e) return { status: Dr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Dr, a = r.includes(Dr);
  if (o && a) return { status: Dr, detail: "mixed" };
  if (o) return { status: Dr, detail: "background" };
  if (a) return { status: Dr, detail: "stickers" };
  const c = t === _r, u = r.includes(_r);
  return c && u ? { status: _r, detail: "mixed" } : c ? { status: _r, detail: "background" } : u ? { status: _r, detail: "stickers" } : { status: Js, detail: "" };
}
const TT = "state_json", FT = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Gf = "sticker_image_1", DT = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), W0 = 0.01, LT = "external_image", Hl = "pano_sticker_input_images", RT = "pano_sticker_input_videos", VT = "pano_sticker_input_frames", $T = "pano_sticker_input_video_meta", zT = !0, dc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Yr = Math.PI / 180, So = 180 / Math.PI, Kf = 1, B0 = "rgb(255, 221, 87)", jT = "rgb(228, 228, 231)", HT = "rgb(180, 150, 60)", GT = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, KT = 64, U0 = 40, Wf = 16, WT = 0.45, Y0 = 180, BT = 160, Bc = 24, UT = 4, YT = 4, XT = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Bf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function qT(e) {
  return 1 - Math.pow(1 - e, 3);
}
function JT(e, t, n) {
  const r = ne((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function ZT(e) {
  return e * e * e;
}
function du(e, t, n) {
  return { x: e, y: t, z: n };
}
function X0(e, t) {
  return du(e.x + t.x, e.y + t.y, e.z + t.z);
}
function q0(e, t) {
  return du(e.x * t, e.y * t, e.z * t);
}
function Uf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function QT(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return du(e.x / t, e.y / t, e.z / t);
}
function Gl(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * So),
    pitch: ne(Math.asin(ne(e.y, -1, 1)) * So, -90, 90)
  };
}
function Hi(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function ks(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Yf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return ks(e, t);
  const d = ne((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, S = Number(e.y || 0) - g;
  return v * v + S * S;
}
function br(e, t, n) {
  return e + (t - e) * n;
}
function Xr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${ne(n, 0, 1)})`;
}
function eF(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Kl = { fillStyle: "", url: "" };
function tF(e, t, n) {
  if (Kl.url && Kl.fillStyle === String(e || ""))
    return Kl.url;
  const r = eF(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Bc}" height="${Bc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Kl = { fillStyle: String(e || ""), url: r }, r;
}
function pc(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function sr(e) {
  return {
    r: ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: ne(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function En(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function nF(e) {
  return dc.some((t) => pc(e, t.color));
}
function Xf(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = ne(Number(t), 0, 1), a = ne(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), u = r * 6 - c, d = a * (1 - o), b = a * (1 - u * o), g = a * (1 - (1 - u) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: g };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: g, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function qf(e) {
  const t = ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function na(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function rF(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function J0(e) {
  const { paintCount: t, maskCount: n } = rF(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function ra(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Wl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function iF(e, t) {
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
function yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function oF(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function aF(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function sF(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const lv = "pano_suite.ui_settings.v1", cv = "pano_suite.node_grid_visibility.v1";
let ca = null, qr = null;
function hc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function lF() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(lv)) || "").trim();
    if (!t) return ca ? hc(ca) : null;
    const n = JSON.parse(t), r = hc(n);
    return ca = r, r;
  } catch {
    return ca ? hc(ca) : null;
  }
}
function cF(e) {
  var n;
  const t = hc(e);
  ca = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(lv, JSON.stringify(t));
  } catch {
  }
  return t;
}
function uv() {
  var e;
  if (qr && typeof qr == "object")
    return qr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(cv)) || "").trim();
    if (!t)
      return qr = {}, qr;
    const n = JSON.parse(t);
    return qr = n && typeof n == "object" ? n : {}, qr;
  } catch {
    return qr = {}, qr;
  }
}
function uF(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = uv()[n];
  return typeof o == "boolean" ? o : !!t;
}
function fF(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = uv();
  r[n] = !!t, qr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(cv, JSON.stringify(r));
  } catch {
  }
}
const Wi = /* @__PURE__ */ new Map(), dF = 12;
function pF(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Wi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Wi.delete(t), Wi.set(t, n), n);
}
function hF(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Wi.delete(n), Wi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Wi.size > dF; ) {
      const o = Wi.keys().next().value;
      if (!o) break;
      Wi.delete(o);
    }
}
function mF(e, t) {
  const n = { ...e }, r = t.map((o) => o(e));
  for (const { connect: o, ...a } of r) {
    for (const c of Object.keys(a))
      if (c in n) throw new Error(`Panorama editor: ${c} is provided twice`);
    Object.assign(n, a);
  }
  for (const o of r) o.connect(n);
  return n;
}
function gF(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const g = Number(b.index);
    Number.isInteger(g) ? g === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, g)) : o = r.length - 1;
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
      const b = r.length, g = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, g)) : g, S = r.slice(v, v + c), M = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - v));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: u
  };
}
const yF = 80;
function fv(e) {
  return JSON.stringify(r2(e));
}
function bF(e) {
  return gF(yF, { entries: [fv(e)], index: 0 });
}
function vF(e) {
  const {
    editor: t,
    playback: n,
    readOnly: r,
    runtime: o,
    state: a,
    stateV2: c,
    studio: u,
    type: d
  } = e;
  let b, g, v, S, M, k, N, A, O, $, R, V, w;
  function z() {
    r || ($(), Wb(a), !(c && a.stickers.some(S)) && (t.historyController.commitActionGroup(fv(a)), V()));
  }
  function W(_e) {
    var te, ge;
    if (r) return;
    O();
    const T = _e < 0 ? t.historyController.undo() : t.historyController.redo();
    if (V(), !T) return;
    const Y = i2(a, T), J = (te = a.timeline) == null ? void 0 : te.fps;
    Object.keys(a).forEach((he) => delete a[he]), Object.assign(a, Y.state), $(!1), c && a.timeline.fps !== J && n.seek(Math.round(t.frame * a.timeline.fps / J)), t.selectedId = d === "stickers" || d === "cutout" ? a.active.selected_sticker_id : a.active.selected_shot_id, u && !t.selectedId && a.active.selected_shot_id && (t.selectedId = ((ge = v()) == null ? void 0 : ge.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && b(), N(), o.backgroundDirty = !0, Y.paintingChanged ? k() : M(), R(), w(), g(), A({ cause: "cutout_frame" });
  }
  function se() {
    var Y, J;
    const _e = Array.isArray((Y = t.historyController) == null ? void 0 : Y.entries) ? t.historyController.entries : [], T = Number((J = t.historyController) == null ? void 0 : J.index);
    return {
      canUndo: !r && _e.length > 1 && T > 0,
      canRedo: !r && _e.length > 1 && T >= 0 && T < _e.length - 1
    };
  }
  return {
    connect(_e) {
      ({
        clearWorldSelection: b,
        commitState: g,
        getActiveCutoutShot: v,
        isUploadingSticker: S,
        markObjectVisualsDirty: M,
        markPaintStrokeVisualsDirty: k,
        releaseHiddenSelection: N,
        requestDraw: A,
        stopTimelinePlayback: O,
        syncCutoutShot: $,
        syncPaintUi: R,
        syncUndoRedoButtons: V,
        updateSidePanel: w
      } = _e);
    },
    pushHistory: z,
    restoreHistory: W,
    getHistoryCapabilities: se
  };
}
const Bl = /* @__PURE__ */ new Map(), Z0 = /* @__PURE__ */ new Map(), Kn = d1({
  app: cr,
  api: Zt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Bd,
    markImageFailed: sv,
    markImageLoading: ov,
    markImageReady: av
  }
});
function Jf(e) {
  if (!Pn(e, "background") || !Pn(e, "external-sticker")) return null;
  const t = Kn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ia(t[0]) : null;
}
function _F(e) {
  if (!Pn(e, "background")) return null;
  const [t] = Kn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = Kn.uiValue(e, "pano_timeline_frames") || [], [r] = Kn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: er(r) };
}
const wF = Kn.assetSource, ms = Kn.source, Zf = Kn.uiImage, SF = Kn.invalidateUiImage, Qf = Kn.loadPreferredExactLinkedImage;
async function xF(e, t, n = {}) {
  var Zm, Qm;
  await G1(e, { tolerateOperationFailure: !0 }), Kn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = iF(e, t);
  await Wp();
  const u = Wl(e, "output_preset"), d = Wl(e, "coverage"), b = Wl(e, "bg_color"), g = Wl(e, TT), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Qf(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = v();
    return sF(i);
  }, M = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return aF(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : oF(s, i);
  }, k = e.__panoSceneStateV2 === !0, N = t === "stickers" && k, A = t === "cutout" && k, O = N && e.__panoStudio === !0, $ = A || O, R = t === "cutout" || O, V = A ? _F(e) : null, w = (k ? zb : $b)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: V ? V.coverage : er(d == null ? void 0 : d.value),
    sharedUiSettings: lF(),
    active: Gb(e),
    fps: k ? Jf(e) : null,
    scene: (V == null ? void 0 : V.state) ?? null,
    camera: A
  });
  e.__panoLiveStateOverride = w, e.__panoLiveStateVersion = 0;
  let z = null;
  $ ? (z = w.camera && (!O || w.camera.visible !== !1) ? Jg(w.camera, 0) : null, w.shots = z ? [{ ...z, position: [...z.position] }] : [], w.active.selected_shot_id = z && A ? nc : null) : t === "cutout" && (w.shots = Array.isArray(w.shots) ? w.shots.slice(0, 1) : [], w.shots.length || (w.active.selected_shot_id = null));
  const W = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(w.shots) ? w.shots : [], s = String(((l = w == null ? void 0 : w.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, se = W ? zh(W, !1) : { width: 220, height: 132 }, _e = iv(O ? "studio" : t), T = /* @__PURE__ */ Aa({
    stageStatus: Dr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (_e.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Zm = _e.spaceButtons) != null && Zm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: _e.spaceButtons, frame: _e.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (_e.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: N } : {},
      ...A && XT.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(_e.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Pe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Pe.aspect,
      rotateIcon: Pe.rotate_90,
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
      icon: Pe.fullscreen,
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
      customColorCss: Xr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Xr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: se.width,
      height: se.height,
      label: W ? "Loading preview" : "Add Frame to preview"
    }
  }), Y = { frame: /* @__PURE__ */ mc(0), playing: /* @__PURE__ */ mc(!1) }, J = document.createElement("div");
  document.body.appendChild(J);
  const te = ({ intent: i, file: s } = {}) => {
    if (Lr(s)) {
      if (i === "add") {
        im(s);
        return;
      }
      if (i === "add-world") {
        Aw(s);
        return;
      }
      i === "replace" && Ew(s);
    }
  }, ge = ({ intent: i } = {}) => {
  }, he = up(ET, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: _e,
    paintSwatches: dc.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Xr(i.color, 1)
    })),
    uiState: T,
    playhead: Y,
    onClose: () => {
      Jo();
    },
    onTimeline: (i) => Mw(i),
    onImageFileSelected: te,
    onImageFileCancelled: ge
  });
  let re = null;
  try {
    re = he.mount(J);
  } catch (i) {
    try {
      he.unmount();
    } catch {
    }
    throw J.remove(), i;
  }
  const B = J.querySelector(".pano-modal-overlay"), D = J.querySelector(".pano-modal"), I = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), Z = D == null ? void 0 : D.querySelector("[data-stage-background]"), ce = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), Oe = ((Qm = re == null ? void 0 : re.getPaintOverlayRefs) == null ? void 0 : Qm.call(re)) || {}, Ye = Oe.cursor || null, qe = Oe.sizePreview || null, vt = Oe.sizeSample || null;
  if (!B || !D || !I || !Z || !ce || !Ye || !qe || !vt)
    throw he.unmount(), J.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const j = I.getContext("2d"), _t = D.querySelector("[data-side]"), Ie = D.querySelector("[data-video-element]"), wt = D.querySelector("[data-port-video-element]");
  yf(I, "editor.stage-overlay"), yf(Z, "editor.stage-background"), Rg(Ie, "editor.video"), Rg(wt, "editor.port-video");
  const Ae = D.querySelector(".pano-floating-right"), De = D.querySelector(".pano-floating-top"), F = D.querySelector("[data-tool-rail]"), H = D.querySelector("[data-frame-rail]"), q = D.querySelector("[data-frame-roll-knob]"), pe = D.querySelector("[data-paint-dock]"), ye = D.querySelector(".pano-video-transport"), we = D.querySelector("[data-selection-menu]");
  let Te = !1;
  const Ne = D.querySelector("[data-tooltip]"), Ce = D.querySelector("[data-camera-preview-host]"), be = D.querySelector("[data-camera-preview-canvas]");
  yf(be, "editor.camera-preview");
  const Re = D.querySelector("[data-paint-color-row]"), Me = D.querySelector("[data-paint-color-pop]"), Ve = D.querySelector("[data-paint-color-sv]"), We = D.querySelector("[data-paint-color-sv-cursor]"), at = D.querySelector("[data-paint-hue-strip]"), gt = D.querySelector("[data-paint-hue-handle]");
  let dt = 0, St = 0;
  ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", Z.style.opacity = "0", o && (_t == null || _t.remove(), D.classList.add("pano-modal-readonly"));
  const yt = () => {
    if (!h.customPaintSessionStart) return;
    if (pc(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (nF(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      sr(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !pc(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, _n = (i = !1) => {
    !Me || Me.hidden || (i ? yt() : h.customPaintSessionStart = null, Me.hidden = !0, T.paintDock.colorPopOpen = !1);
  }, $n = () => {
    Me && (Me.hidden && (h.customPaintSessionStart = sr(h.customPaintColor)), Me.hidden = !1, T.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", () => Fe.wake(), !0), D.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || so(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), _n(!0), R && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), ue()), (s = T.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (T.frameRail.aspectOpen = !1)));
  });
  const h = {
    mode: "pano",
    selectedId: t === "stickers" ? w.active.selected_sticker_id : w.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Fr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: er(w.coverage),
    historyController: bF(w),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: pi,
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
    showGrid: uF(e == null ? void 0 : e.id, !0),
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
    paintEngine: dd(),
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
  let tn = null;
  t === "stickers" && (h.selectedId = null, w.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const nn = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), wn = Tn({ label: "editor.still" });
  wn.__panoFrameIdx = 0;
  const G = Tn({ label: "editor.port-still" });
  G.__panoFrameIdx = 0;
  let xe = () => {
  };
  const ie = {
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
  }, Fe = nI({
    requestAnimationFrame: (i) => requestAnimationFrame(i),
    cancelAnimationFrame: (i) => cancelAnimationFrame(i),
    draw: (i, s) => yw(i, s),
    animating: () => mw()
  }), Ue = eI({
    requestFrame: (i) => Fe.requestFrame(i),
    cancelFrame: (i) => Fe.cancelFrame(i),
    tasks: {
      seek: () => Ut.seek(Ge.scrubFrame),
      timeline: () => Kr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        gr(), ue({ localOnly: !0, reason: mt.STATE });
      },
      sidePanel: () => ze()
    }
  }), Ee = rP({
    canvas: Z,
    onReady: () => {
      vl(), ue({ reason: mt.CONTEXT });
    },
    onFailed: () => ue(),
    onUpdate: () => ue({ localOnly: !0, reason: mt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bn = null, vl(), ue({ reason: mt.CONTEXT });
    }
  });
  let Qe = { key: [], projection: null }, Nt = { revision: -1, sceneState: null }, ln = null, bn = null, Bt = null, $r = null;
  const Ta = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, Tt = (i) => {
    const s = String(i || "default");
    I.style.cursor !== s && (I.style.cursor = s);
  }, Pt = {
    timer: 0,
    target: null
  }, Sn = {
    active: !1,
    depth: 0
  }, Ft = {
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
  }, Nr = 9, mn = [];
  let An = 0;
  const nl = () => {
    var E, P;
    const i = (E = ce == null ? void 0 : ce.getBoundingClientRect) == null ? void 0 : E.call(ce), s = (P = Ae == null ? void 0 : Ae.getBoundingClientRect) == null ? void 0 : P.call(Ae), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, y = f > 0 ? f + 14 + 12 : 72, _ = Math.max(280, Math.floor(l - y * 2)), x = h.fullscreen ? Math.min(1200, _) : _;
    T.videoTransport.shellMaxWidthPx = x;
  }, Qi = () => {
    An || (An = Fe.requestFrame(() => {
      An = 0, nl();
    }));
  }, Ci = (i) => {
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
    return !!T.videoTransport.hasAudio;
  }, Pr = typeof ResizeObserver < "u" ? new ResizeObserver(() => Qi()) : null;
  Pr == null || Pr.observe(ce), Ae && (Pr == null || Pr.observe(Ae)), mn.push(() => {
    var i;
    An && (Fe.cancelFrame(An), An = 0), (i = Pr == null ? void 0 : Pr.disconnect) == null || i.call(Pr);
  }), Qi();
  const rl = () => {
    Ft.thumbnailJobId += 1, Ft.thumbnailSrc = "", T.videoTransport.thumbnails = [], T.videoTransport.thumbnailCount = Nr;
  }, dv = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      rl();
      return;
    }
    const p = pF(f);
    if (p) {
      Ft.thumbnailSrc = f, T.videoTransport.thumbnails = p.thumbnails, T.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Ft.thumbnailJobId;
    Ft.thumbnailSrc = f, T.videoTransport.thumbnails = [], T.videoTransport.thumbnailCount = Nr;
    const y = au(document, "editor.thumbnails");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const _ = Tn({ label: "editor.thumbnail" });
    try {
      const x = await new Promise((le) => {
        let me = !1;
        const oe = (ve) => {
          me || (me = !0, le(ve));
        };
        y.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), y.addEventListener("canplay", () => oe(!0), { once: !0 }), y.addEventListener("error", () => oe(!1), { once: !0 }), y.src = f, y.load();
      });
      if (Ft.thumbnailJobId !== m) return;
      const E = Number(y.videoWidth || 0), P = Number(y.videoHeight || 0);
      if (!x || E < 1 || P < 1) {
        Ft.thumbnailFailedSrcs.add(f);
        return;
      }
      const C = Math.max(0, Number(y.duration || s || 0)), L = 46, U = Math.max(72, Math.round(E / P * L));
      _.width = U, _.height = L;
      const K = _.getContext("2d");
      if (!K) return;
      const Q = [], ee = (le) => new Promise((me) => {
        let oe = !1;
        const ve = () => {
          oe || (oe = !0, me());
        };
        y.addEventListener("seeked", ve, { once: !0 }), y.addEventListener("error", ve, { once: !0 });
        try {
          y.currentTime = le;
        } catch {
          ve();
        }
      });
      for (let le = 0; le < Nr; le += 1) {
        if (Ft.thumbnailJobId !== m) return;
        const me = Nr <= 1 ? 0 : le / (Nr - 1), oe = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * me)) : 0;
        if (await ee(oe), Ft.thumbnailJobId !== m) return;
        K.clearRect(0, 0, U, L), K.drawImage(y, 0, 0, U, L), Q.push({
          id: `thumb-${le}`,
          src: _.toDataURL("image/jpeg", 0.72),
          time: oe,
          label: Nu(oe)
        });
      }
      if (Ft.thumbnailJobId !== m) return;
      T.videoTransport.thumbnails = Q, T.videoTransport.thumbnailCount = Q.length || Nr, hF(f, {
        thumbnails: Q,
        thumbnailCount: Q.length || Nr,
        duration: C,
        fps: l
      });
    } finally {
      y.removeAttribute("src"), y.load(), fd(_);
    }
  };
  mn.push(() => {
    rl();
  });
  const Ut = P1({
    video: Ie instanceof HTMLVideoElement ? Ie : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => Fe.requestFrame(i),
      cancelFrame: (i) => Fe.cancelFrame(i)
    },
    fps: ll,
    span: () => {
      if (k) return _l();
      const i = Math.round(Number(T.videoTransport.duration || 0) * ll());
      return Ie.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? _w(i) : Oi(), ue({ cause: "frame_view", localOnly: !0, reason: mt.PLAYHEAD });
    },
    onCapture: () => {
      Rv() && (ie.backgroundDirty = !0);
    },
    onChange: () => {
      Oi(), Y.playing.value = Ut.playing, Kr(), ue({ cause: "frame_view", localOnly: !0, reason: mt.PLAYHEAD });
    }
  });
  mn.push(() => Ut.dispose());
  const Lo = k && wt instanceof HTMLVideoElement ? A1({
    video: wt,
    onCapture: () => {
      var l;
      const i = Number(wt.videoWidth || 0), s = Number(wt.videoHeight || 0);
      i < 1 || s < 1 || (G.width = i, G.height = s, (l = G.getContext("2d")) == null || l.drawImage(wt, 0, 0), G.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0, reason: mt.MEDIA }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0, reason: mt.MEDIA })
  }) : null;
  Lo && mn.push(() => Lo.dispose());
  const pv = k ? g1({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0, reason: mt.MEDIA })
  }) : null;
  if (Ie instanceof HTMLVideoElement) {
    const i = () => {
      Ti(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Oi({
        hasAudio: T.videoTransport.hasAudio,
        muted: Ie.muted,
        volume: Number(Ie.volume ?? T.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ie.dataset.panoSrc;
      f && (Ft.failedSrcs.add(f), Ti(), ue());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ie.addEventListener(f, p), mn.push(() => Ie.removeEventListener(f, p));
  }
  const {
    getHistoryCapabilities: Zp,
    pushHistory: tt,
    restoreHistory: pu
  } = mF({
    clearWorldSelection: ro,
    commitState: jn,
    editor: h,
    getActiveCutoutShot: je,
    isUploadingSticker: mu,
    markObjectVisualsDirty: zt,
    markPaintStrokeVisualsDirty: Er,
    playback: Ut,
    readOnly: r,
    releaseHiddenSelection: ts,
    requestDraw: ue,
    runtime: ie,
    state: w,
    stateV2: k,
    stopTimelinePlayback: Nn,
    studio: O,
    syncCutoutShot: gr,
    syncPaintUi: Yn,
    syncUndoRedoButtons: Rm,
    type: t,
    updateSidePanel: ze
  }, [
    vF
  ]);
  function hv() {
    T.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function hu(i) {
    return Up(i == null ? void 0 : i.dataTransfer);
  }
  function eo(i) {
    const s = !!i;
    Sn.active !== s && (Sn.active = s, ce.classList.toggle("drop-active", s));
  }
  function to(i, s = null) {
    const l = Mn();
    Za(() => {
      h.viewTransition = fI(l, i, performance.now(), { scale: Gr(), end: s });
    }), !h.viewTransition && s && Qp(s), on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0, zr(), ue({ localOnly: !0, reason: mt.VIEW });
  }
  function Qp(i) {
    Ga(xd({ ...Ou(), moved: i.moved }, i.mode, jo())), ie.backgroundDirty = !0;
  }
  function Fa() {
    h.viewTransition && (h.viewTransition = null, zr());
  }
  function eh(i, s) {
    to({ ...Mn(), yaw_deg: i, pitch_deg: s });
  }
  Bv();
  function li() {
    return t === "stickers" ? Da() : w.shots;
  }
  function Da() {
    return N ? w.stickers.filter((i) => i.placement === "sky") : w.stickers;
  }
  function Bn(i) {
    return N && Ct(i);
  }
  function mu(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function cn(i) {
    return Bn(i) ? Ip(i, h.frame) : i;
  }
  function Ar(i, s) {
    Bn(i) ? jb(i, h.frame, s) : Object.assign(i, s);
  }
  function Cn() {
    const i = w.painting || (w.painting = ga(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function mv(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = w.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? w.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const y of s) {
      const _ = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !_ || f.has(_) || (f.add(_), l.push(_));
    }
    return l;
  }
  function gv() {
    return mv("paint");
  }
  function La(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Ra(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function vn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Va(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function gu() {
    var s;
    let i = -1;
    for (const l of Da())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Cn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = w.painting) == null ? void 0 : s.raster_objects) ? w.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function th(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = Cn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? gu() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function yv(i) {
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
  function bv() {
    const i = new Set(gv()), l = Cn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: gu(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), w.painting.groups = l, l;
  }
  function vv(i, s, l) {
    var Q;
    const f = (ee) => (Number(ee || 0) % 1 + 1) % 1, p = [];
    for (const ee of l) {
      const le = ee == null ? void 0 : ee.geometry, me = (le == null ? void 0 : le.geometryKind) === "lasso_fill" ? le == null ? void 0 : le.points : (le == null ? void 0 : le.processedPoints) || (le == null ? void 0 : le.rawPoints) || (le == null ? void 0 : le.points) || [];
      Array.isArray(me) && p.push(...me);
    }
    if (!p.length) return null;
    const m = f(((Q = p[0]) == null ? void 0 : Q.u) || 0);
    let y = 0, _ = 0;
    p.forEach((ee) => {
      const le = f((ee == null ? void 0 : ee.u) || 0);
      y += m + pr(le, m), _ += Number((ee == null ? void 0 : ee.v) || 0);
    });
    const x = (y / p.length % 1 + 1) % 1;
    let E = 1 / 0, P = -1 / 0, C = 1 / 0, L = -1 / 0;
    p.forEach((ee) => {
      const le = f((ee == null ? void 0 : ee.u) || 0), me = pr(le, x);
      E = Math.min(E, me), P = Math.max(P, me);
      const oe = Number((ee == null ? void 0 : ee.v) || 0);
      C = Math.min(C, oe), L = Math.max(L, oe);
    });
    const U = l.reduce((ee, le) => {
      const me = zi(String((le == null ? void 0 : le.toolKind) || "pen")), oe = qn[me] || qn[pi], ve = Math.max(1, Number((le == null ? void 0 : le.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(ee, ve);
    }, 0), K = Math.max(35e-4, U / 2048);
    return {
      centerUv: { u: ((x + (E + P) * 0.5) % 1 + 1) % 1, v: ne((C + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - E) * 0.5 + K,
      halfH: (L - C) * 0.5 + K,
      uvPad: K
    };
  }
  function Ii(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = Cn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || Cr(f, s);
    return p.frame = vv(f, s, m), p.frame;
  }
  function Ro() {
    var f;
    const i = Da().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = bv().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((f = w.painting) == null ? void 0 : f.raster_objects) ? w.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function yu(i = !0) {
    var l, f, p, m, y, _;
    const s = Ro().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), E = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((_ = (y = h.interaction) == null ? void 0 : y.stroke) == null ? void 0 : _.toolKind) || "").trim();
      x && E === "paint" && P !== "eraser" && !s.includes(x) && s.push(x);
    }
    return s;
  }
  function bu(i = !0) {
    var _, x, E, P, C, L;
    const s = Ro();
    if (!i) return s;
    const l = String(((x = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), f = String(((P = (E = h.interaction) == null ? void 0 : E.stroke) == null ? void 0 : P.layerKind) || "").trim(), p = String(((L = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((U) => U.type === "strokeGroup" && String(U.actionGroupId || "") === l))
      return s;
    const m = Lt();
    let y = s.reduce((U, K) => Math.max(U, Number((K == null ? void 0 : K.z_index) || 0)), -1) + 1;
    return m && fn(m) && String(m.actionGroupId || "") === l && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: y,
        item: null
      }
    ].sort((U, K) => Number((U == null ? void 0 : U.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0));
  }
  function _v() {
    return Cn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => $o(La("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function wv() {
    var i;
    return (Array.isArray((i = w.painting) == null ? void 0 : i.raster_objects) ? w.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Vo(Ra((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function nh(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function Sv() {
    var s, l, f, p;
    let i = null;
    try {
      const m = yu(), y = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      y && (i = {
        source: y,
        revision: `${Ya()}:${vu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function vu() {
    var p, m, y, _, x, E, P;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!nh(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), U = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((_ = C == null ? void 0 : C.points) == null ? void 0 : _.length) ?? 0, K = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${K}_${U}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), f = String(((E = i == null ? void 0 : i.item) == null ? void 0 : E.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function il() {
    return A || !Array.isArray(w.stickers) ? [] : Da();
  }
  function _u() {
    return [...Array.isArray(w.shots) ? w.shots : [], ...il()];
  }
  function un(i) {
    return !!i && Array.isArray(w.shots) && w.shots.includes(i);
  }
  function Ct(i) {
    return !!i && Array.isArray(w.stickers) && w.stickers.includes(i);
  }
  function Un() {
    var i;
    return Array.isArray((i = w.painting) == null ? void 0 : i.raster_objects) ? w.painting.raster_objects : [];
  }
  function Vo(i) {
    const s = vn(i);
    if (!s) return null;
    const l = Un().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Ra(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function xn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = vn(i.rasterObjectId || i.id || "");
    return !!s && !!Vo(Ra(s));
  }
  function $o(i) {
    const s = Va(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = Cn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: La("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function fn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!$o(La(l, s));
  }
  function Cr(i, s = null) {
    const l = Va(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Yo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function xv(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ua()}`;
    if (h.mode === "frame") {
      const m = je(), y = String((m == null ? void 0 : m.id) || ""), _ = m ? gn(m) : null;
      return `${p}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function ol(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: ne(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function pr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function wu(i, s = null, l = null) {
    var E;
    const f = Va(i, s), p = Array.isArray(l) ? l : Cr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((P) => {
      const C = (P == null ? void 0 : P.geometry) || null, L = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((E = m[0]) == null ? void 0 : E.u) || 0);
    let _ = 0, x = 0;
    return m.forEach((P) => {
      _ += y + pr(Number((P == null ? void 0 : P.u) || 0), y), x += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: ne(x / m.length, 0, 1)
    };
  }
  function al(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = pr(Number(i.u || 0), p), _ = Number(i.v || 0) - m, x = Number(f || 0) * Yr, E = Math.cos(x), P = Math.sin(x), C = Math.max(0.02, Number(l || 1)), L = (y * E - _ * P) * C, U = (y * P + _ * E) * C;
    return {
      ...i,
      u: ((p + L) % 1 + 1) % 1,
      v: ne(m + U, 0, 1)
    };
  }
  function rh(i, s, l, f = null, p = null, m = null) {
    const y = Va(i, p), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const x = Yo(y.layerKind), E = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let P = !1;
    if (x.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== _) return;
      const L = (E == null ? void 0 : E.get(String((C == null ? void 0 : C.id) || ""))) || C, U = C == null ? void 0 : C.geometry, K = L == null ? void 0 : L.geometry;
      !U || !K || (Array.isArray(K.points) && (U.points = K.points.map((Q) => ol(Q, s, l)), P = !0), Array.isArray(K.rawPoints) && (U.rawPoints = K.rawPoints.map((Q) => ol(Q, s, l)), P = !0), Array.isArray(K.processedPoints) && (U.processedPoints = K.processedPoints.map((Q) => ol(Q, s, l)), P = !0));
    }), P && m) {
      const C = Cn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === _);
      C && (C.frame = null);
    }
    return P;
  }
  function ih(i, s = 1, l = 0, f = null, p = null, m = null) {
    const y = Va(i, p), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const x = Yo(y.layerKind), E = Array.isArray(f) ? f : Cr(_, y.layerKind), P = Array.isArray(E) ? new Map(E.map((U) => [String((U == null ? void 0 : U.id) || ""), U])) : null, C = (m == null ? void 0 : m.centerUv) ?? wu(_, y.layerKind, E);
    let L = !1;
    if (x.forEach((U) => {
      if (String((U == null ? void 0 : U.actionGroupId) || "").trim() !== _) return;
      const K = (P == null ? void 0 : P.get(String((U == null ? void 0 : U.id) || ""))) || U, Q = U == null ? void 0 : U.geometry, ee = K == null ? void 0 : K.geometry;
      !Q || !ee || (Array.isArray(ee.points) && (Q.points = ee.points.map((le) => al(le, C, s, l)), L = !0), Array.isArray(ee.rawPoints) && (Q.rawPoints = ee.rawPoints.map((le) => al(le, C, s, l)), L = !0), Array.isArray(ee.processedPoints) && (Q.processedPoints = ee.processedPoints.map((le) => al(le, C, s, l)), L = !0));
    }), L && m) {
      const U = Cn().find((K) => String((K == null ? void 0 : K.actionGroupId) || "") === _);
      U && (U.frame = null);
    }
    return L;
  }
  function oh(i, s, l, f = null) {
    const p = vn(i);
    if (!p) return !1;
    const m = Un().find((P) => String((P == null ? void 0 : P.id) || "").trim() === p);
    if (!m) return !1;
    const y = f && typeof f == "object" ? f : m, _ = (y == null ? void 0 : y.transform) || {}, x = Number(_.du || 0) + Number(s || 0), E = ne(Number(_.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = E, !0;
  }
  function kv(i, s = 1, l = null) {
    const f = vn(i);
    if (!f) return !1;
    const p = Un().find((E) => String((E == null ? void 0 : E.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, y = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(y.scale || 1)), x = ne(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = x, !0;
  }
  function Lt() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = $o(i);
    if (s) return s;
    const l = Vo(i);
    return l || (R ? _u().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : li().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function or() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? Lt() : $o(p) || Vo(p) || (R ? _u().find((y) => String((y == null ? void 0 : y.id) || "") === p) : li().find((y) => String((y == null ? void 0 : y.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function $a(i = null) {
    const s = Array.isArray(i) ? i : or();
    if (!s || s.length < 2) return null;
    const l = s.map((E) => rn(E)).filter((E) => (E == null ? void 0 : E.visible) && Array.isArray(E.corners) && E.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((E) => E.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), p = l.flatMap((E) => E.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...f), y = Math.max(...f), _ = Math.min(...p), x = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (_ + x) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x: y, y: _ },
        { x: y, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: _, a: { x: m, y: _ }, b: { x: y, y: _ } },
        { edge: "right", x: y, y: (_ + x) * 0.5, a: { x: y, y: _ }, b: { x: y, y: x } },
        { edge: "bottom", x: (m + y) * 0.5, y: x, a: { x: y, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (_ + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: _ },
      rotateHandle: { x: (m + y) * 0.5, y: _ - 30 }
    };
  }
  function ah(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function za() {
    const i = Lt();
    return i ? fn(i) || xn(i) ? "stroke" : un(i) ? "frame" : "image" : null;
  }
  function kn(i) {
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Cn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (xn(i)) {
      const s = vn(i.rasterObjectId || i.id || ""), l = Un().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Su(i = null) {
    const s = Array.isArray(i) ? i : or();
    return s.length > 0 && s.every((l) => kn(l));
  }
  function Mv(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = Cn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (xn(i)) {
      const f = vn(i.rasterObjectId || i.id || ""), p = Un().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function Nv() {
    if (r) return;
    const i = or();
    if (!i.length) return;
    const s = !Su(i);
    let l = !1;
    i.forEach((f) => {
      Mv(f, s) && (l = !0);
    }), l && (tt(), st(), Ke(), ze(), ue());
  }
  function zn(i) {
    ro(), Ge.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && Ct(i) ? w.active.selected_sticker_id = i.id || null : w.active.selected_sticker_id = null, i && un(i) ? w.active.selected_shot_id = i.id || null : i ? un(i) || (w.active.selected_shot_id = w.active.selected_shot_id) : w.active.selected_shot_id = null;
  }
  function Pv(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const _ = String((y == null ? void 0 : y.id) || "").trim();
      !_ || f.has(_) || (f.add(_), l.push(_));
    }), h.selectedIds = l, ro(), Ge.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Lt();
    w.active.selected_sticker_id = m && Ct(m) && m.id || null, m && un(m) ? w.active.selected_shot_id = m.id || null : l.length || (w.active.selected_shot_id = null);
  }
  function sh() {
    const i = (Array.isArray(w.shots) ? w.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = il().map((l, f) => {
      var m, y;
      const p = Yt(l) ? String(l.id || Gf) : String(((y = (m = w.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : y.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function lh(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function xu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: lh(i.kind)
    };
  }
  function sl() {
    return gu();
  }
  function Yt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Gf || String(i.source_kind || "") === LT;
  }
  function zo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Av(i) {
    return Yt(i) && zo(i) ? Zb : 1;
  }
  function Cv() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function Iv() {
    return String(Cv() || "") === "lasso_fill";
  }
  function Ev() {
    if (r) return;
    const i = Lt();
    !i || !Yt(i) || (i.visible = zo(i), ts(), zt(), tt(), st(), ze(), Ke(), ue());
  }
  function Ov() {
    if (r || t !== "stickers") return;
    const i = Lt();
    if (!i || !Yt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Pu(Hl, () => {
      ue();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Fi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), tt(), st(), ze(), Ke(), ue();
  }
  function Tv(i) {
    if (!i || !Yt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Pu(Hl, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Fi(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function Fv() {
    const i = Lt();
    if (!i || !Yt(i)) return !1;
    const s = Tv(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Ei(i) {
    return Kn.uiList(e, i);
  }
  function ku(i) {
    return Kn.uiValue(e, i);
  }
  function ch() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Pc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Dv() {
    const { metaKey: i } = ch(), s = ku(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Mu(i) {
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
  function Nu(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function ll() {
    return k ? w.timeline.fps : Ft.metaFps || 1e3;
  }
  function Oi(i = {}) {
    const s = Number(i.duration ?? T.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? T.videoTransport.fps ?? 24)), f = Ut.frame / ll(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!T.videoTransport.ready, m = Ut.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!T.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ie instanceof HTMLVideoElement ? Ie.muted : T.videoTransport.muted), x = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ie instanceof HTMLVideoElement ? Ie.volume : T.videoTransport.volume
    ), E = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ci(Ie), P = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!T.videoTransport.loop;
    Object.assign(T.videoTransport, {
      ready: p,
      playing: m,
      visible: y,
      loop: P,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: Nu(f),
      durationLabel: Nu(s),
      frameCount: Math.max(0, Number(i.frameCount ?? T.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: E,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : T.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? T.videoTransport.thumbnailCount ?? Nr))
    });
  }
  function uh() {
    return !!(Ie instanceof HTMLVideoElement && !k && Ie.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function fh() {
    if (!(Ie instanceof HTMLVideoElement) || !T.videoTransport.hasAudio) return;
    const i = !Ie.muted;
    Ie.muted = i, !i && Number(Ie.volume || 0) <= 0 && (Ie.volume = Math.max(0.01, Number(T.videoTransport.volume || 1))), Oi({
      hasAudio: T.videoTransport.hasAudio,
      muted: Ie.muted,
      volume: Number(Ie.volume ?? T.videoTransport.volume ?? 1)
    });
  }
  function Lv() {
    Oi({
      visible: uh()
    });
  }
  function Rv() {
    if (!(Ie instanceof HTMLVideoElement) || Number(Ie.videoWidth || 0) < 1 || Number(Ie.videoHeight || 0) < 1) return !1;
    const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
    (wn.width !== i || wn.height !== s) && (wn.width = i, wn.height = s);
    const l = wn.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ie, 0, 0, i, s), wn.__panoFrameIdx = Number(wn.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function dh() {
    return !Ut.showsVideo && Number(wn.width || 0) > 0 && Number(wn.height || 0) > 0 && Number(wn.__panoFrameIdx || 0) > 0 ? wn : Ie instanceof HTMLVideoElement && Number(Ie.videoWidth || 0) > 0 && Number(Ie.videoHeight || 0) > 0 && Number(Ie.readyState || 0) >= 2 ? Ie : null;
  }
  function ph() {
    wn.__panoFrameIdx = 0, ie.backgroundDirty = !0;
  }
  function Ti() {
    if (!(Ie instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = ch(), s = Pn(e, "background") && Ei(i)[0] || null, l = ms(s), f = [l, Kn.linkedVideoFile(e, Ih())].filter(Boolean), p = f.find((C) => !Ft.failedSrcs.has(C)) || "";
    Ft.videoFailed = !p && f.length > 0;
    const m = p && p === l ? Dv() : null;
    Ft.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? w.timeline.fps : 24))), _ = Ie.dataset.panoSrc === p && Number.isFinite(Ie.duration) ? Ie.duration : 0, x = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : _)), E = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(x * y))), P = !!(m != null && m.has_audio) || Ci(Ie);
    return p && Ie.dataset.panoSrc !== p ? (Ie.pause(), ph(), Ie.dataset.panoSrc = p, Ie.loop = !k && !!T.videoTransport.loop, Ie.muted = !!T.videoTransport.muted, Ie.volume = Math.max(0, Math.min(1, Number(T.videoTransport.volume ?? 1))), Ie.src = p, Ie.load(), Ut.setSource(!0), k || Ut.seek(0)) : !p && Ie.getAttribute("src") && (Ie.pause(), Ie.removeAttribute("src"), delete Ie.dataset.panoSrc, Ie.load(), ph(), rl(), Ut.setSource(!1)), k || (Ie.loop = !!T.videoTransport.loop), p && !k && Ft.thumbnailSrc !== p && !Ft.thumbnailFailedSrcs.has(p) && dv(p, x, y), p || rl(), Oi({
      ready: !!p,
      visible: !!p && uh(),
      duration: x,
      frameCount: E,
      fps: y,
      hasAudio: P,
      loop: !!Ie.loop,
      muted: !!Ie.muted,
      volume: Number(Ie.volume ?? T.videoTransport.volume ?? 1),
      thumbnailCount: T.videoTransport.thumbnailCount
    }), p || null;
  }
  function hh(i, s = null) {
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
  function Pu(i, s = null) {
    return Zf(e, i, nn, s || (() => ue()));
  }
  function Au(i = null) {
    return Pn(e, "external-sticker") ? Pu(Hl, i) : null;
  }
  function mh() {
    if (!Pn(e, "external-sticker")) return null;
    const i = Ei($T)[0];
    if (!i || typeof i != "object") return null;
    const s = Ei(VT).map(ms).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = ms(Ei(RT)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function Vv() {
    const i = w.stickers.find(Yt), s = i ? mh() : null, l = s ? p1(i.clip, h.frame, w.timeline.fps, s.meta) : null;
    Lo.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: Ut.advancing, fps: w.timeline.fps });
    const f = i ? Du(i) : null, p = s != null && s.frames ? pv.picture(s.frames, l, s.meta, f) : Lo.picture(G, f);
    return p ? { media: p, revision: Mu(p), source: m1(s, f) } : null;
  }
  function Fi(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = ne(Number(i || 30), 0.1, 179) * Yr, y = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return ne(y * So, 0.1, 179);
  }
  function $v(i) {
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
      const y = Number(m.yaw_deg), _ = Number(m.pitch_deg), x = Number(m.roll_deg), E = Number(m.hFOV_deg);
      if (![y, _, x, E].every((U) => Number.isFinite(U))) return null;
      let P = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const C = {
        yaw_deg: P,
        pitch_deg: ne(_, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: ne(E, 0.1, 179)
      }, L = Number(l.source_aspect);
      return Number.isFinite(L) && L > 0 && (C.source_aspect = L), C;
    } catch {
      return null;
    }
  }
  function gh(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Co(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(s) ? s : 0),
        pitch_deg: ne(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: ne(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function zv(i) {
    var _;
    if (!i || typeof i != "object") return gh(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const x = ne(p, 0.1, 179) * Yr, E = ne(m, 0.1, 179) * Yr, P = Math.tan(E * 0.5);
      if (Math.abs(P) > 1e-6) {
        const C = Math.tan(x * 0.5) / P;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (i != null && i.asset_id && ((_ = w == null ? void 0 : w.assets) != null && _[i.asset_id])) {
      const x = w.assets[i.asset_id], E = Number((x == null ? void 0 : x.w) || 0), P = Number((x == null ? void 0 : x.h) || 0);
      E > 0 && P > 0 && (y = E / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(s) ? s : 0),
        pitch_deg: ne(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: ne(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function jv(i) {
    return Kn.linkedValue(e, i);
  }
  function Hv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : $v(s);
    if (f) {
      const y = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), _ = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Fi(f.hFOV_deg, y, _),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Fi(30, p, m),
      rot_deg: 0
    };
  }
  function Gv() {
    const i = Au(() => {
      wi(e, "image-loaded");
    }), s = Pn(e, "external-sticker") ? hh(ku("pano_sticker_input_pose"), null) : null;
    return M1(w, k1(e, { pose: s, image: i }));
  }
  function Kv() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((x) => String((x == null ? void 0 : x.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, l = Au(() => {
      wi(e, "image-loaded");
    }), f = hh(ku("pano_sticker_input_pose"), null), p = jv("sticker_state"), m = Kn.externalStateHash(e, p), y = s == null ? null : Hv(f, p, l);
    return x1(w, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function yh(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? Gv() : Kv();
    if (s.changed) {
      const l = w.stickers.find(Yt);
      w.stickers = s.state.stickers, w.active = s.state.active, l && h.selectedId === l.id && !w.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), st(), ze(), Ke();
    }
    ue();
  }
  function ja(i = {}) {
    const l = i.preservePanelValues !== !1 ? cn(Lt()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: gi(l)
    }), h.selectedId = null, h.selectedIds = [], ro(), h.cutoutAspectOpen = !1, w.active.selected_sticker_id = null, w.active.selected_shot_id = null;
  }
  function no() {
    return !N || !h.worldSelectedId ? null : w.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function Cu(i) {
    zn(null), h.worldSelectedId = i, ie.backgroundDirty = !0;
  }
  function ro() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, ie.backgroundDirty = !0);
  }
  function cl(i) {
    return !!i && !r && !i.locked;
  }
  function Wv() {
    if (t !== "cutout") return;
    const i = je();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function Iu() {
    if (O && ta(T.toolButtons, "value", "add-camera", { disabled: Di() }), t !== "cutout") return;
    const i = je();
    ta(T.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function zr() {
    const i = vI({
      spaceView: oo(),
      spaceMode: fc(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: R && h.mode === "frame",
      showGrid: h.showGrid
    });
    T.space && Object.assign(T.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) ta(T.floatingButtons, "action", s, l);
  }
  function ci() {
    var l;
    const i = _I({ hasShot: !!je(), erp: io(), hidden: Di() && !jr(), studio: O });
    h.mode === "frame" && i.disabled && (O ? hm(je()) : h.mode = "pano"), h.outputPreviewRect = null, T.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !R), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = R && h.mode === "frame" ? je() : null;
    T.frameRail.visible = !!s, T.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, T.frameRollKnob.visible = !!s && !r && s.locked !== !0, T.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, T.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), T.frameRollKnob.displayValue = na(T.frameRollKnob.rollDeg), T.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", T.frameRollKnob.armed = !!s && h.altModifier === !0, T.frameRail.rollKnob = T.frameRollKnob, T.frameRail.aspectLabel = s ? gi(s) : "", T.frameRail.aspectChoices = tv(s ? String(gi(s)) : null, { erp: O, coverage: w.coverage }), s || (T.frameRail.aspectOpen = !1), T.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!je(), R && T.cameraPreview && (T.cameraPreview.visible = h.mode !== "frame" && bh(), T.cameraPreview.expanded = !!h.outputPreviewExpanded, T.cameraPreview.settled = T.cameraPreview.settled === !0 && ie.pendingStableLayoutFrames <= 0 && ie.hasPresentedFrame), zr(), Sm() ? bt(h.pointerPos) : Tt(h.mode === "pano" ? "grab" : "default");
  }
  function bh() {
    return !O || jr() && !io();
  }
  function io() {
    return O && jr() && w.camera.projection === "erp";
  }
  function Bv() {
    const s = Eh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function vh() {
    return Qb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, I.width, I.height);
  }
  function _h() {
    return !k || !Pn(e, "scene") ? null : o0(Ei("pano_scene_files"), Ei("pano_scene_meta"), ms);
  }
  function Uv() {
    return !k || !Pn(e, "external-sticker") ? null : o0(Ei("pano_sticker_files"), Ei("pano_sticker_meta"), ms);
  }
  function oo() {
    return h.mode === "pano" && Ha();
  }
  function Ha() {
    return k && O2({ sceneLinked: N && !!Cd(e).scene, files: _h(), stickers: w.stickers });
  }
  function hr() {
    return h.spaceMode === "6dof" && oo();
  }
  function Eu() {
    var i, s, l;
    return NA((l = (s = (i = cr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, H1));
  }
  function Ou() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Ga(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function Yv(i) {
    var l;
    const s = pI(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        to({ ...Mn(), position: jo(), distance: ((l = Hr()) == null ? void 0 : l.radius) || Fr }, { mode: i, moved: !1 });
        return;
      }
      Fa(), Ga(xd({ ...Ou(), position: Mn().position }, i, jo())), ie.backgroundDirty = !0, zr(), ue({ localOnly: !0, reason: mt.VIEW });
    }
  }
  function Mn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Hr()) == null ? void 0 : l.radius) || Fr, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return P2(h.spaceMode, s, jo());
  }
  function jo() {
    return jr() ? ao().position : [0, 0, 0];
  }
  function Di() {
    return $ && w.camera !== null;
  }
  function jr() {
    return Di() && (!O || w.camera.visible);
  }
  function ul() {
    return w.painting_visible !== !1;
  }
  function fl(i) {
    return i.visible && ya(i.clip, h.frame);
  }
  function ao() {
    return wp(w.camera, h.frame);
  }
  function Hr() {
    var s;
    const i = Ir();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function wh(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, ie.backgroundDirty = !0, ue({ localOnly: !0, reason: mt.VIEW });
  }
  function Gr() {
    var i;
    return ((i = Hr()) == null ? void 0 : i.radius) || Fr;
  }
  function Xv() {
    var _;
    const i = Ir().space, s = Nt.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((x) => x.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: Ec(s, h.frame).stickers[f],
      plane: i.stickers.find((x) => x.id === l) ?? null,
      item: ((_ = i.sticker) == null ? void 0 : _.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: Ee.sceneBox(i.sticker.url) } : null
    }, m = mr() ? Fh() : V2(Hr(), p);
    if (!m) return;
    const y = Mn();
    h.viewDistance = y.distance, h.viewMoved = !0, to(i0(y, m, I.width, I.height));
  }
  function Sh(i) {
    return Ee.pickSurface(Xo(), i.x, i.y, I.width, I.height);
  }
  function xh(i, s) {
    var l;
    return Tf(i, s, h.viewMoved ? null : (l = Hr()) == null ? void 0 : l.center, Gr());
  }
  function kh() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function qv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: Ee.contentRevision(), view: kh() };
    if (!e0(Bt, f)) {
      const m = Sh(i);
      Bt = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = Mn();
    wh(r0(p, xh(p, Bt.hit), s, Gr())), Bt.view = kh(), Bt.wheelTime = l;
  }
  function Mh(i, s, l) {
    const f = Mn();
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: xh(f, Sh(s)) } : { kind: "space_pan", last: s, depth: Qg(f, Gr()) }, bt(s), I.setPointerCapture(l);
  }
  function Tu() {
    const i = [h.viewYaw, h.viewPitch, h.viewFov, I.width, I.height];
    return i.some((s, l) => s !== Qe.key[l]) && (Qe = { key: i, projection: e1(vh(), I.width, I.height) }), Qe.projection;
  }
  function Ka(i) {
    const s = Tu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Fu(i, s) {
    return Tu().ray(i, s);
  }
  function Li() {
    const i = I.width, s = I.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const _ = s, x = _ * l;
      return { x: (i - x) * 0.5, y: 0, w: x, h: _ };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Du(i) {
    var y;
    if (i && typeof i == "object" && (Yt(i) || i.external === !0))
      return Au(() => {
        wi(e, "image-loaded");
      });
    const s = k ? Wa(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = nn.get(s);
    if (l) return l;
    const f = k ? Hb(i.source) : (y = w.assets) == null ? void 0 : y[s], p = wF(f);
    if (!p) return null;
    const m = new Image();
    return ov(m, p), m.onload = () => {
      av(m, p), ue();
    }, m.onerror = () => {
      sv(m, p), ue();
    }, m.src = p, nn.set(s, m), m;
  }
  function Wa(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Nh(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Ai.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ai.set(l, p), p;
  }
  function Jv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Do.get(s);
    if (l) return l.ready ? l : null;
    const f = Nh(i, () => {
      const P = Do.get(s);
      P && (P.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const y = Tn({ label: "editor.image-pixels" });
    y.width = p, y.height = m;
    const _ = y.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, p, m), _.drawImage(f, 0, 0, p, m);
    const x = _.getImageData(0, 0, p, m).data, E = { canvas: y, width: p, height: m, alpha: x, ready: !0 };
    return Do.set(s, E), E;
  }
  function Zv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = pr(Number(i.u || 0), p), _ = Number(i.v || 0) - m, x = Math.max(0.02, Number(l || 1)), E = Number(f || 0) * Yr, P = Math.cos(E), C = Math.sin(E), L = y / x, U = _ / x, K = L * P + U * C, Q = -L * C + U * P;
    return {
      ...i,
      u: ((p + K) % 1 + 1) % 1,
      v: m + Q
    };
  }
  function Qv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, y = Zv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), _ = Number(l.u1 || 0) - Number(l.u0 || 0), x = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(_ > 1e-6) || !(x > 1e-6)) return null;
    const E = pr(Number(y.u || 0), Number(l.u0 || 0)) / _, P = (Number(y.v || 0) - Number(l.v0 || 0)) / x;
    if (E < 0 || E > 1 || P < 0 || P > 1) return 0;
    const C = Jv(i);
    if (!C) return null;
    const L = ne(Math.floor(E * C.width), 0, C.width - 1), U = ne(Math.floor(P * C.height), 0, C.height - 1);
    return Number(C.alpha[(U * C.width + L) * 4 + 3] || 0);
  }
  function Ph(i, s, l, f = null) {
    if (!(s != null && s.visible) || !Hi(l, s.corners)) return !1;
    const p = f || Or(l, performance.now()), m = Qv(i, p);
    return m === null ? !0 : m > 8;
  }
  function e_() {
    var f, p, m, y, _, x, E, P;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, yu(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : _.width) || 2048)), l = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((P = (E = i == null ? void 0 : i.displayPaint) == null ? void 0 : E.canvas) == null ? void 0 : P.height) || 1024));
    return { width: s, height: l };
  }
  function t_() {
    var U, K, Q;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = ar(), f = `${vu()}:${l.width}:${l.height}`;
    if (((U = h._activePaintEraserPreviewInfo) == null ? void 0 : U.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = En(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ee = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Wu(ee, p.targetSpace, !0);
    }
    const y = Ba(l.width, l.height, { readback: !0 });
    if (!Bh(y, p, { w: l.width, h: l.height })) return null;
    const _ = ((Q = (K = y.ctx) == null ? void 0 : K.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Q.data) || null;
    if (!_) return null;
    let x = l.width, E = l.height, P = -1, C = -1;
    for (let ee = 0; ee < l.height; ee += 1)
      for (let le = 0; le < l.width; le += 1)
        _[(ee * l.width + le) * 4 + 3] <= 8 || (le < x && (x = le), ee < E && (E = ee), le > P && (P = le), ee > C && (C = ee));
    if (P < x || C < E)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const L = {
      surface: y,
      bounds: { minX: x, minY: E, maxX: P, maxY: C },
      key: `${f}:${x}:${E}:${P}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: L }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Ho() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function n_(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, y = ((p = i.item) == null ? void 0 : p.transform) || {}, _ = Number(m.u0 || 0) + Number(y.du || 0), x = Number(m.u1 || 0) + Number(y.du || 0), E = Number(m.v0 || 0) + Number(y.dv || 0), P = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(ne(E, 0, 1) * l),
        maxY: Math.ceil(ne(P, 0, 1) * l),
        wraps: x - _ >= 1 || _ < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Cr(i.actionGroupId, "paint"), y = Ii(i.actionGroupId, "paint", m);
      if (!y) return null;
      const _ = y.centerUv.u - y.halfW, x = y.centerUv.u + y.halfW, E = y.centerUv.v - y.halfH, P = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(ne(E, 0, 1) * l),
        maxY: Math.ceil(ne(P, 0, 1) * l),
        wraps: x - _ >= 1 || _ < 0 || x > 1
      };
    }
    return null;
  }
  function r_(i, s, l) {
    if (!i || !s) return !1;
    const f = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: l - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], p = f(i), m = f(s);
    return p.some((y) => m.some((_) => !(y.maxX < _.minX || _.maxX < y.minX || y.maxY < _.minY || _.maxY < y.minY)));
  }
  function i_(i, s, l) {
    var ve, Be, Je, lt, ke, de, Se;
    if (!i || !s || !((ve = l == null ? void 0 : l.surface) != null && ve.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = n_(s, f, p);
    if (m && !r_(m, l.bounds, f)) return i;
    const y = String(((Be = s.item) == null ? void 0 : Be.id) || s.id || ""), _ = ((Je = s.item) == null ? void 0 : Je.transform) || {}, x = `${l.key}:${y}:${f}:${p}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, E = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (E.has(x)) return E.get(x);
    const P = ne(Math.floor(Number(((lt = l.bounds) == null ? void 0 : lt.minX) || 0)), 0, Math.max(0, f - 1)), C = ne(Math.floor(Number(((ke = l.bounds) == null ? void 0 : ke.minY) || 0)), 0, Math.max(0, p - 1)), L = ne(Math.ceil(Number(((de = l.bounds) == null ? void 0 : de.maxX) || 0)), P, Math.max(0, f - 1)), U = ne(Math.ceil(Number(((Se = l.bounds) == null ? void 0 : Se.maxY) || 0)), C, Math.max(0, p - 1)), K = Math.max(1, L - P + 1), Q = Math.max(1, U - C + 1), ee = Ba(f, p, { readback: !0 });
    ee.ctx.clearRect(0, 0, f, p), ee.ctx.drawImage(i, 0, 0);
    const le = ee.ctx.getImageData(P, C, K, Q);
    ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(l.surface.canvas, 0, 0), ee.ctx.restore();
    const me = ee.ctx.getImageData(P, C, K, Q);
    let oe = !1;
    for (let $e = 0; $e < K * Q; $e += 1) {
      const He = le.data[$e * 4 + 3], it = me.data[$e * 4 + 3];
      if (He > it) {
        oe = !0;
        break;
      }
    }
    return oe ? (E.size > 64 && E.clear(), E.set(x, ee.canvas), ee.canvas) : (E.set(x, i), i);
  }
  function Ah(i, s = null) {
    const l = vn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = Nh(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: y } = e_(), _ = (i == null ? void 0 : i.transform) || {}, x = [
      l,
      m,
      y,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      Ua()
    ].join(":"), E = Zi.get(x);
    if (E) return E;
    Zi.size > 64 && Zi.clear();
    const P = Tn({ label: "editor.raster-erp" });
    P.width = m, P.height = y;
    const C = P.getContext("2d");
    if (!C) return null;
    const L = Number(f.u0 || 0) * m, U = Number(f.v0 || 0) * y, K = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Q = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * y), ee = L + K * 0.5 + Number(_.du || 0) * m, le = U + Q * 0.5 + Number(_.dv || 0) * y, me = Number(_.rot_deg || 0) * Yr, oe = Math.max(0.01, Number(_.scale || 1));
    for (const ve of [-m, 0, m])
      C.save(), C.translate(ee + ve, le), C.rotate(me), C.scale(oe, oe), C.drawImage(p, -K * 0.5, -Q * 0.5, K, Q), C.restore();
    return Zi.set(x, P), P;
  }
  async function Lu(i, s) {
    const l = await new Promise((_) => i.toBlob(_, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Zt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), y = String((m == null ? void 0 : m.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let dl = null, pl = !1;
  function o_() {
    if (A) return !1;
    const i = J0(w.painting), { width: s, height: l } = qa();
    return o2(w.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function Ch() {
    const i = String(e.id ?? "0"), s = Bl.get(i);
    if (pl && s) return s;
    const l = (async () => {
      var m, y, _, x, E, P, C, L, U, K, Q, ee;
      const f = Ya(), p = J0(w.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        w.painting_layer !== null && (w.painting_layer = null, dl = f, jn());
        return;
      }
      if (dl !== f && !pl) {
        pl = !0;
        try {
          Xa();
          const le = yu(!1), me = ((y = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, le)) || null, oe = ((_ = me == null ? void 0 : me.displayPaint) == null ? void 0 : _.canvas) || null, ve = ((x = me == null ? void 0 : me.committedMask) == null ? void 0 : x.canvas) || null, Be = Math.max(1, Number(((E = me == null ? void 0 : me.descriptor) == null ? void 0 : E.width) || (oe == null ? void 0 : oe.width) || (ve == null ? void 0 : ve.width) || 2048)), Je = Math.max(1, Number(((P = me == null ? void 0 : me.descriptor) == null ? void 0 : P.height) || (oe == null ? void 0 : oe.height) || (ve == null ? void 0 : ve.height) || 1024));
          (!oe && p.totalPaintCount > 0 || !ve && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Be || Number(((L = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Je) && (h._paintLayerSyncBlankSurface = Ba(Be, Je)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Be, Je));
          const lt = oe || p.totalPaintCount > 0 && ((U = h._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null, ke = ve || p.totalMaskCount > 0 && ((K = h._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null;
          if (!lt && !ke) return;
          let de = null, Se = null;
          const $e = [];
          if (p.totalPaintCount > 0) {
            de = await Lu(lt, `pano_paint_${i}.png`);
            for (const He of le) {
              const it = String(He || "").trim();
              if (!it) continue;
              const ct = ((ee = (Q = h.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : ee.call(Q, it)) || null;
              if (!ct) continue;
              const Rt = it.replace(/[^a-zA-Z0-9_-]+/g, "_"), ut = await Lu(ct, `pano_group_${i}_${Rt}.png`);
              ut && $e.push({
                id: it,
                actionGroupId: it,
                image: ut
              });
            }
          }
          p.totalMaskCount > 0 && (Se = await Lu(ke, `pano_mask_${i}.png`)), f === Ya() && (w.painting_layer = {
            paint: de,
            mask: Se,
            groups: $e,
            revision: f
          }, dl = f, jn());
        } catch (le) {
          throw le;
        } finally {
          pl = !1;
        }
      }
    })();
    return Bl.set(i, l), l.finally(() => {
      Bl.get(i) === l && Bl.delete(i);
    }), l;
  }
  function Ru() {
    if (t === "cutout" && !A) {
      const p = dh();
      if (p) return p;
      const m = Qf(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Bd(m) ? m : Zf(e, "pano_input_images", nn, () => ue()) || m || null;
    }
    const i = dh();
    if (i) return i;
    const s = Pn(e, "background") ? Zf(e, "pano_input_images", nn, () => ue()) : null;
    if (s && !Bd(s)) return s;
    if (Ie instanceof HTMLVideoElement && Ie.dataset.panoSrc) return Ie;
    const l = Ih();
    return Qf(e, l, () => ue(), `background:${l.join("|")}`) || s || null;
  }
  function a_() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function Ih() {
    if (t === "cutout") return A ? a_() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Vu(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function s_() {
    if (Ee.failed) return { status: _r, detail: "renderer" };
    if (!Ee.ready) return { status: Dr, detail: "boot" };
    const i = Ru(), s = Ft.videoFailed ? _r : Wd(i, Vu), l = [];
    for (const f of Da()) {
      if ((f == null ? void 0 : f.visible) === !1) continue;
      const p = Du(f);
      l.push(Wd(p, Vu));
    }
    return OT({
      presented: ie.hasPresentedFrame,
      background: s,
      stickers: l
    });
  }
  function Go() {
    const i = new Set(
      (w.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(w.assets || {}).forEach((s) => {
      i.has(s) || (delete w.assets[s], nn.delete(s));
    });
  }
  function $u(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(ne(i.y, -1, 1))
    };
  }
  function zu(i, s = null) {
    const { lon: l, lat: f } = $u(i), p = Li();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const y = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y, z: 1 };
  }
  function hl(i) {
    const s = cn(i), l = Ca(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(ne(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Yr), p = Math.tan(ne(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Yr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Ri(i, s, l) {
    return QT(X0(X0(i.centerDir, q0(i.right, s)), q0(i.up, l)));
  }
  function Eh(i) {
    const s = hl(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Ri(s, f * s.tanX, p * s.tanY));
  }
  function Oh(i, s, l) {
    const f = hl(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Ri(f, p, m);
  }
  function Th(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: ne((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function l_(i) {
    var x, E, P, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), p = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.rot_deg) || 0), m = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), y = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => ol(al(L, l, f, p), m, y));
  }
  function c_(i) {
    const s = vn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ua()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = je(), y = m ? gn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function u_(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = un(i) ? "frame" : Ct(i) ? "sticker" : "item", f = cn(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      gi(f),
      Bn(i) && fl(i)
    ].join(":");
    if (h.mode === "frame") {
      const m = je(), y = m ? gn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function f_(i) {
    var y;
    const s = ((y = h.paintEngine) == null ? void 0 : y.getMaskDisplayCanvas()) || null;
    if (!s) return i;
    const l = `mask_display:${h.paintEngine.getMaskDisplayRevision()}`, f = i.reduce((_, x) => Math.max(_, Number((x == null ? void 0 : x.zIndex) || 0)), -1), p = (Array.isArray(w.stickers) ? w.stickers : []).reduce((_, x) => Math.max(_, Number((x == null ? void 0 : x.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function d_() {
    var f, p;
    const i = bu(!0), s = t_(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const _ = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, y)) || null;
        if (!_) continue;
        l.push({
          id: `paint_group:${y}`,
          source: _,
          revision: `${K_()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, _ = vn((y == null ? void 0 : y.id) || m.id || "");
        if (!_) continue;
        const x = Ah(y, () => ue());
        if (!x) continue;
        const E = i_(x, m, s), P = (y == null ? void 0 : y.transform) || {};
        l.push({
          id: `raster:${_}`,
          source: E,
          revision: [
            Ya(),
            (s == null ? void 0 : s.key) || "",
            _,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return f_(l);
  }
  function p_() {
    return ul() ? d_().filter((i) => i.visible !== !1).map((i) => ({ id: i.id, media: i.source, revision: i.revision, opacity: i.opacity, zIndex: i.zIndex })) : [];
  }
  function Ir() {
    return ln || (ln = h_()), ln;
  }
  function h_() {
    const i = Ru(), s = p_(), l = { ...w.assets };
    for (const K of k ? [] : w.stickers) {
      const Q = String((K == null ? void 0 : K.asset_id) || "");
      Q && !l[Q] && nn.has(Q) && (l[Q] = { type: "comfy_image", filename: Q });
    }
    const f = k ? w.stickers.map((K) => mu(K) ? { ...K, source: { kind: "file", filename: Wa(K) } } : K) : w.stickers;
    Nt.revision !== Fe.stateRevision && (Nt = { revision: Fe.stateRevision, sceneState: ri({ ...w, stickers: f, assets: l, painting: null }) }), k && m_(Nt.sceneState);
    const p = Ec(Nt.sceneState, h.frame), m = Lo ? Vv() : null, y = (K) => {
      if (k && !K.visible) return null;
      if (Lo && Yt(K)) return m;
      const Q = Du(K);
      return Q ? { media: Q, revision: Mu(Q) } : null;
    }, _ = t1(Nt.sceneState, h.frame, w.stickers, { media: y, paintLayers: s, evaluated: p }), x = i && (i === Ie || i === wn) ? Ie.dataset.panoSrc : i, E = Vu(i) ? { media: i, revision: Mu(i), coverage: er(w.coverage), source: x } : null, P = Ha(), C = A2(Ou(), P, jo());
    C.mode !== h.spaceMode && Fa(), Ga(C);
    const L = P ? g_(Nt.sceneState, p, y) : null, U = oo() ? { ...L, ...y_(L) } : null;
    return { background: E, layers: _, space: U, content: L };
  }
  function m_(i) {
    const s = new Map(w.stickers.map((l) => [l.id, l.clip]));
    i.scene.clip = { ...w.scene.clip };
    for (const l of i.stickers) {
      const f = s.get(l.id);
      f && (l.clip = { ...f });
    }
  }
  function g_(i, s, l) {
    const f = _h(), p = qb(f, s.scene), m = p != null && p.url ? Ee.sceneBox(p.url) : null, y = m && Nd(p.kind, m), _ = Uv(), x = T2(_, i, s), E = x != null && x.url ? Ee.sceneBox(x.url) : null, P = E ? [{ box: Nd(x.kind, E), value: x.value }] : [], C = nP(i, h.frame, w.stickers, { media: l, evaluated: s }), L = Ad(L2(s, y, C, P));
    return {
      evaluated: s,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: F2(_, i),
      sticker: x,
      stickers: C,
      sphere: L
    };
  }
  function y_(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Fr;
    return {
      gizmo: mr() ? w_() : b_(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? X2(s) : null,
      lines: jr() ? __(s) : []
    };
  }
  function b_(i) {
    const s = no(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !cl(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: kd(l) };
  }
  function ju(i) {
    return i * 0.2;
  }
  function Fh() {
    return { center: ao().position, radius: ju(Gr()) };
  }
  function v_(i, s) {
    const { yaw_deg: l, pitch_deg: f } = Jb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function mr() {
    return jr() && h.selectedId === nc;
  }
  let ml = { revision: -1, span: -1, segments: [] };
  function __(i) {
    const s = _l();
    (ml.revision !== Fe.stateRevision || ml.span !== s) && (ml = { revision: Fe.stateRevision, span: s, segments: J2(Z2(w, s)) });
    const { segments: l } = ml, f = l.length ? [{ segments: l, color: HT }] : [];
    if (!hr()) return f;
    const p = mr() ? B0 : jT;
    return [...f, { segments: l0(ao(), ju(i)), color: p }];
  }
  function w_() {
    return !hr() || !mr() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: kd({ ...ao(), scale: 1 }) };
  }
  function S_(i, s) {
    var p;
    const l = (p = Ir().space) == null ? void 0 : p.gizmo;
    if (mr() && l && lo("hover", s) !== null && lo("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: ao(), changed: !1 }, I.setPointerCapture(i.pointerId), bt(s), !0;
    const f = l0(ao(), ju(Gr()));
    return q2(Xo(), f, s, I.width, I.height) ? (mr() || (zn(je()), ze(), Ke(), ue()), h.interaction = { kind: "world_select" }, I.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Hu(i) {
    const s = Z.width / Math.max(1, I.width), l = Z.height / Math.max(1, I.height);
    return { x: i.x * s, y: i.y * l, w: i.w * s, h: i.h * l };
  }
  function x_() {
    const { background: i, layers: s, space: l } = Ir(), f = I.width, p = I.height, m = Hu({ x: 0, y: 0, w: f, h: p });
    let y = !1;
    return !i && !s.length && !l ? (Ee.clear(460551), y = Ee.ready) : (Ee.clear(), y = !!Ee.render({
      rect: m,
      camera: l ? Ff(Mn(), f, p, l.sphere) : vh(),
      background: i,
      layers: s,
      space: l
    })), zr(), (h.worldSelectedId || mr() || Te) && Ke(), y;
  }
  function Dh(i) {
    const { content: s } = Ir();
    return !s || !i.position ? Ts(i) : Yb(Ts(i), i.position, gm(), s.sphere);
  }
  function Lh(i, s, l, f = null) {
    const { background: p, layers: m, content: y } = Ir();
    if (!p && !m.length && !y) return null;
    const _ = y && s.position ? y : null;
    return Ee.render({ rect: i, camera: Dh(s), background: p, layers: m, space: _, owner: l, clearColor: f });
  }
  function k_(i) {
    return Ee.clear(460551), !!Ee.renderUnwrap({ rect: Hu(i), ...Ir() });
  }
  function M_(i) {
    const s = I.width, l = I.height, f = Li();
    if (j.globalAlpha = 1, j.lineWidth = 1, j.clearRect(0, 0, s, l), Xa(), i && (ie.backgroundDirty = !k_(f)), h.showGrid && !h.fullscreen) {
      j.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = f.x + f.w * m / 16;
        j.beginPath(), j.moveTo(y, f.y), j.lineTo(y, f.y + f.h), j.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = f.y + f.h * m / 8;
        j.beginPath(), j.moveTo(f.x, y), j.lineTo(f.x + f.w, y), j.stroke();
      }
      j.strokeStyle = "rgba(250, 250, 250, 0.86)", j.lineWidth = 1.2, j.beginPath(), j.moveTo(f.x, f.y + f.h / 2), j.lineTo(f.x + f.w, f.y + f.h / 2), j.stroke(), j.fillStyle = "rgba(250, 250, 250, 0.42)", j.font = "500 11px Geist, sans-serif", j.textAlign = "center";
      const p = f.y + f.h * 0.57;
      j.fillText("Left", f.x + f.w * 0.25, p), j.fillText("Front", f.x + f.w * 0.5, p), j.fillText("Right", f.x + f.w * 0.75, p), j.fillText("Back", f.x + 38, p), j.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function Rh(i, s, l = 1) {
    let f = !1;
    j.strokeStyle = s, j.lineWidth = l, j.beginPath();
    for (const p of i) {
      const m = Ka(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? j.lineTo(m.x, m.y) : (j.moveTo(m.x, m.y), f = !0);
    }
    j.stroke();
  }
  function N_(i) {
    const s = I.width, l = I.height;
    if (j.clearRect(0, 0, s, l), Xa(), i && (ie.backgroundDirty = !x_()), h.showGrid && !h.fullscreen && Ir().space)
      P_();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(tr(p, y));
        Rh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(tr(y, p));
        Rh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: tr(-90, 0) },
        { name: "Front", dir: tr(0, 0) },
        { name: "Right", dir: tr(90, 0) },
        { name: "Back", dir: tr(180, 0) }
      ];
      j.fillStyle = "rgba(250, 250, 250, 0.42)", j.font = "500 11px Geist, sans-serif", j.textAlign = "center", f.forEach((p) => {
        const m = Ka(p.dir);
        m && j.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function P_() {
    const i = Ff(Mn(), I.width, I.height, Hr()), s = Us(i, [0, 0, 0], I.width, I.height);
    s && (j.fillStyle = "rgba(255, 221, 87, 0.9)", j.font = "500 11px Geist, sans-serif", j.textAlign = "center", j.fillText("ERP origin", s.x, s.y - 12));
  }
  function A_(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || je();
      if (!p) return [];
      const m = l || gn(p);
      return sw(i, p, m);
    }
    return Uh(i, f);
  }
  function gl(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const y = Uh([i], p);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = Ko(i);
    return m ? ui(m, s, l, f) : null;
  }
  function C_(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = Cr(l, i.layerKind), p = Ii(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || wu(l, i.layerKind, f), y = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], x = h.mode === "frame" ? je() : null, E = x ? gn(x) : null;
    for (const oe of f) {
      const ve = (oe == null ? void 0 : oe.geometry) || null, Be = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], Je = A_(Be, x, E, y).filter((de) => Number.isFinite(de == null ? void 0 : de.x) && Number.isFinite(de == null ? void 0 : de.y));
      if (!Je.length) continue;
      const lt = zi(String((oe == null ? void 0 : oe.toolKind) || "pen")), ke = qn[lt] || qn[pi];
      _.push({
        points: Je,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((ke == null ? void 0 : ke.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || i.layerKind || "paint")
      });
    }
    const P = gl(m, null, x, E, y);
    if (!P) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, oe), oe;
    }
    const L = yv(p).map((oe) => gl(oe, P.x, x, E, y)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (L.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, oe), oe;
    }
    const U = (oe, ve) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: oe,
      b: ve
    }), K = U(L[0], L[1]), Q = U(L[1], L[2]), ee = U(L[2], L[3]), le = U(L[3], L[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...K },
        { edge: "right", ...Q },
        { edge: "bottom", ...ee },
        { edge: "left", ...le }
      ],
      rotateStemBase: { x: K.x, y: K.y },
      rotateHandle: { x: K.x, y: K.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return h._strokeGeomCache.set(s, me), me;
  }
  function I_(i, s) {
    const l = h.mode === "frame" ? je() : null, f = l ? gn(l) : null, p = Th(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, y = gl(p, null, l, f, m), x = l_(i).map((L) => gl(L, (y == null ? void 0 : y.x) ?? null, l, f, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(x) || x.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, L), L;
    }
    const E = x.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: E.reduce((L, U) => L + Number(U.x || 0), 0) / E.length,
        y: E.reduce((L, U) => L + Number(U.y || 0), 0) / E.length
      },
      corners: E,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function ui(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const P = l || je(), C = f || gn(P);
      if (!P || !C) return null;
      const L = P ? Ja(P, i) : null;
      return L ? {
        x: Number(C.x || 0) + Number(L.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(L.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return zu(i, s);
    const m = 1e-4, y = Tu().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(p != null && p.clipBehind)) return null;
    const _ = I.width, x = I.height, E = Math.max(_, x) * 2;
    return {
      x: ne(y.x, -E, _ + E),
      y: ne(y.y, -E, x + E),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function E_(i, s = []) {
    if (h.mode !== "pano" || Ct(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? JT(0.035, 0.2, Math.min(...l)) : 1;
  }
  function O_(i) {
    if (Bn(i) && !fl(i)) return { visible: !1 };
    const s = cn(i), l = tr(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? je() : null, p = f ? gn(f) : null, m = h.mode === "pano" && (Ct(i) || un(i)), y = m ? { clipBehind: !0 } : null, _ = ui(l, null, f, p, y);
    if (!_) return { visible: !1 };
    const x = hl(i), P = Eh(i).map((Se) => ui(Se, _.x, f, p, y)).filter((Se) => Number.isFinite(Se == null ? void 0 : Se.x) && Number.isFinite(Se == null ? void 0 : Se.y));
    if (P.length < 4) return { visible: !1 };
    const C = Ri(x, 0, x.tanY), L = Ri(x, 0, x.tanY + Math.max(x.tanY * 0.43, 0.053)), U = ui(C, _.x, f, p, y);
    if (!U) return { visible: !1 };
    const K = ui(L, (U == null ? void 0 : U.x) ?? _.x, f, p, y), Q = ((K == null ? void 0 : K.x) ?? U.x) - U.x, ee = ((K == null ? void 0 : K.y) ?? U.y) - U.y, le = Math.hypot(Q, ee) || 1, me = {
      x: U.x + Q / le * 30,
      y: U.y + ee / le * 30
    }, oe = ui(Ri(x, 0, x.tanY), _.x, f, p, y), ve = ui(Ri(x, x.tanX, 0), _.x, f, p, y), Be = ui(Ri(x, 0, -x.tanY), _.x, f, p, y), Je = ui(Ri(x, -x.tanX, 0), _.x, f, p, y);
    if (!oe || !ve || !Be || !Je) return { visible: !1 };
    const lt = [
      _,
      ...P,
      U,
      K,
      oe,
      ve,
      Be,
      Je
    ];
    if (m && !lt.some((Se) => Number((Se == null ? void 0 : Se.rawZ) ?? (Se == null ? void 0 : Se.z)) > 1e-4)) return { visible: !1 };
    const ke = E_(i, lt), de = [
      {
        edge: "top",
        x: oe.x,
        y: oe.y,
        a: { x: P[0].x, y: P[0].y },
        b: { x: P[1].x, y: P[1].y }
      },
      {
        edge: "right",
        x: ve.x,
        y: ve.y,
        a: { x: P[1].x, y: P[1].y },
        b: { x: P[2].x, y: P[2].y }
      },
      {
        edge: "bottom",
        x: Be.x,
        y: Be.y,
        a: { x: P[2].x, y: P[2].y },
        b: { x: P[3].x, y: P[3].y }
      },
      {
        edge: "left",
        x: Je.x,
        y: Je.y,
        a: { x: P[3].x, y: P[3].y },
        b: { x: P[0].x, y: P[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: P.map((Se) => ({ x: Se.x, y: Se.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: U.x, y: U.y },
      rotateHandle: me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ke,
      visible: !0
    };
  }
  function rn(i) {
    if ($ && un(i) && hr()) return { visible: !1 };
    if (!ul() && (fn(i) || xn(i))) return { visible: !1 };
    if (fn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = xv(p, i.layerKind), y = h._strokeGeomCache.get(m);
      return y || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), C_(i, m));
    }
    if (xn(i)) {
      const p = c_(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), I_(i, p));
    }
    const s = u_(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = O_(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function yl(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const y = m / l;
      let _ = 0, x = 0;
      s === 0 ? (_ = y, x = 0) : s === 1 ? (_ = 1, x = y) : s === 2 ? (_ = 1 - y, x = 1) : (_ = 0, x = 1 - y);
      const E = Oh(i, _, x), P = h.mode === "unwrap" ? zu(E, f) : Ka(E);
      P && p.push(P);
    }
    return p;
  }
  function T_(i, s) {
    const l = cn(i), f = tr(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? zu(f) : null, m = p ? p.x : null, y = h.mode === "pano" ? 28 : 20, _ = [
      yl(i, 0, y, m),
      yl(i, 1, y, m),
      yl(i, 2, y, m),
      yl(i, 3, y, m)
    ];
    Gp(j, _, { selected: s });
  }
  function F_() {
    const i = [...Array.isArray(w.shots) ? w.shots : []], s = [...il()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Gu() {
    const i = [...Array.isArray(w.shots) ? w.shots : []];
    return [...[...il()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function bl(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function Vh(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = ne(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = j.globalAlpha;
    j.globalAlpha = m * p;
    const y = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = s ? 3.2 : 2.6;
    bl(j, f), j.fillStyle = _, j.fill(), j.strokeStyle = y, j.lineWidth = x, j.stroke(), j.save(), j.strokeStyle = y, j.lineWidth = s ? 3.2 : 2.6, j.lineCap = "round";
    const E = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    E.forEach((L) => {
      const K = E.find((me) => (me == null ? void 0 : me.edge) === P[L == null ? void 0 : L.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Q = K.x - L.x, ee = K.y - L.y, le = Math.hypot(Q, ee) || 1;
      j.beginPath(), j.moveTo(L.x, L.y), j.lineTo(L.x + Q / le * C, L.y + ee / le * C), j.stroke();
    }), j.restore(), j.globalAlpha = m;
  }
  function D_(i, s, l, f) {
    const p = ne(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (un(i)) {
      Vh(s, l, f);
      return;
    }
    if (Ct(i)) {
      const y = j.globalAlpha;
      j.globalAlpha = y * Av(i) * p, h.mode === "frame" ? (j.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", j.lineWidth = l ? 2 : 1, bl(j, s.corners), j.stroke()) : T_(i, l), j.globalAlpha = y;
      return;
    }
    const m = j.globalAlpha;
    j.globalAlpha = m * p, j.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", bl(j, s.corners), j.fill(), j.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", j.lineWidth = l ? 2.8 : 1.9, bl(j, s.corners), j.stroke(), j.globalAlpha = m;
  }
  function $h(i, s, l) {
    if (Ct(i)) {
      z1(j, s, { accent: l });
      return;
    }
    const f = !(un(i) && io());
    j.fillStyle = l, f && s.corners.forEach((p) => {
      j.beginPath(), j.arc(p.x, p.y, 6.5, 0, Math.PI * 2), j.fill();
    }), f && un(i) && (j.strokeStyle = l, j.lineCap = "round", j.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var C, L, U, K;
      const m = (((C = p.b) == null ? void 0 : C.x) ?? p.x) - (((L = p.a) == null ? void 0 : L.x) ?? p.x), y = (((U = p.b) == null ? void 0 : U.y) ?? p.y) - (((K = p.a) == null ? void 0 : K.y) ?? p.y), _ = Math.hypot(m, y) || 1, x = m / _, E = y / _, P = 10;
      j.beginPath(), j.moveTo(p.x - x * P, p.y - E * P), j.lineTo(p.x + x * P, p.y + E * P), j.stroke();
    }), j.lineCap = "butt"), fn(i) || (j.strokeStyle = "rgba(250, 250, 250, 0.9)", j.lineWidth = 1.8, j.beginPath(), j.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), j.lineTo(s.rotateHandle.x, s.rotateHandle.y), j.stroke(), j.fillStyle = l, j.beginPath(), j.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), j.fill());
  }
  function L_() {
    var m;
    const i = h.mode === "frame" ? [] : or(), s = i.length > 1, l = R ? F_() : li(), f = l.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${un(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const y of p) {
      const _ = h.mode !== "frame" && !s && ah(y);
      if (h.mode === "frame" && !_) continue;
      const x = Ct(y), E = un(y), P = kn(y);
      if (!x && !E || Bn(y) && !fl(y)) continue;
      const C = rn(y);
      if (t !== "stickers" && !C.visible)
        continue;
      const L = ne(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const U = E && R && h.mode === "pano" ? ne(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (j.save(), j.globalAlpha *= U, D_(y, C, _, P), _ && C.visible) {
        const K = P ? "#ff4d4f" : x && Yt(y) ? "#f59e0b" : "#0070f3", Q = j.globalAlpha;
        j.globalAlpha = Q * L, $h(y, C, K), j.globalAlpha = Q;
      }
      j.restore();
    }
    if (R && h.mode === "pano" && !je() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const y = h.cutoutPanoFrameVisual, _ = ne(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      j.save(), j.globalAlpha *= _, Vh(y.geom, y.selected, y.locked), y.selected && $h(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), j.restore();
    }
    if (s) {
      const y = $a(i);
      if (y != null && y.visible) {
        const _ = Su(i) ? "#ff4d4f" : "#0070f3";
        j.save(), j.strokeStyle = "rgba(255, 255, 255, 0.95)", j.lineWidth = 2, j.setLineDash([6, 4]), j.beginPath(), j.moveTo(y.corners[0].x, y.corners[0].y);
        for (let x = 1; x < y.corners.length; x += 1) j.lineTo(y.corners[x].x, y.corners[x].y);
        j.closePath(), j.stroke(), j.setLineDash([]), j.fillStyle = _, y.corners.forEach((x) => {
          j.beginPath(), j.arc(x.x, x.y, 6.5, 0, Math.PI * 2), j.fill();
        }), j.restore();
      }
    } else
      i.forEach((y) => {
        if (!fn(y) && !xn(y)) return;
        const _ = rn(y);
        if (!(_ != null && _.visible)) return;
        const x = kn(y) ? "#ff4d4f" : "#0070f3";
        j.save(), j.strokeStyle = "rgba(255, 255, 255, 0.95)", j.lineWidth = 2, j.setLineDash([6, 4]), j.beginPath(), j.moveTo(_.corners[0].x, _.corners[0].y);
        for (let E = 1; E < _.corners.length; E += 1) j.lineTo(_.corners[E].x, _.corners[E].y);
        j.closePath(), j.stroke(), j.setLineDash([]), j.fillStyle = x, _.corners.forEach((E) => {
          j.beginPath(), j.arc(E.x, E.y, 6.5, 0, Math.PI * 2), j.fill();
        }), j.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = Pm(h.interaction.start, h.interaction.current);
      j.save(), j.strokeStyle = "rgba(255, 255, 255, 0.9)", j.fillStyle = "rgba(255, 255, 255, 0.08)", j.lineWidth = 1, j.setLineDash([5, 4]), j.beginPath(), j.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), j.fill(), j.stroke(), j.restore();
    }
  }
  function zh(i, s = !1) {
    const l = ne(Co(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function R_(i) {
    if (!Ce || !i) return !1;
    const s = Ce.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ce.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ce.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function V_(i, s) {
    if (h.outputPreviewRect = null, T.outputPreviewToggle.visible = h.mode !== "frame" && !!je(), O && (T.outputPreviewToggle.visible = !1), !R || !T.cameraPreview) return;
    if (h.mode === "frame" || !bh()) {
      T.cameraPreview.visible = !1, T.cameraPreview.settled = !1, bn = null;
      return;
    }
    const l = je();
    if (T.cameraPreview.visible = !0, T.cameraPreview.expanded = !!h.outputPreviewExpanded, !l || !be) {
      T.cameraPreview.ready = !1, T.cameraPreview.settled = !1, T.cameraPreview.width = 220, T.cameraPreview.height = 132, T.cameraPreview.label = l ? "Preview unavailable" : "Add Frame to preview", bn = null;
      return;
    }
    const f = zh(l, !!h.outputPreviewExpanded);
    T.cameraPreview.width = f.width, T.cameraPreview.height = f.height;
    const p = window.devicePixelRatio || 1, m = Math.max(1, f.width * p), y = Math.max(1, f.height * p), _ = Math.min(1, Z.width / m, Z.height / y), x = { width: Math.max(1, Math.floor(m * _)), height: Math.max(1, Math.floor(y * _)) }, E = [...s].some((L) => L !== mt.VIEW && L !== mt.OVERLAY), P = !bn || bn.width !== x.width || bn.height !== x.height || E;
    if (i && P) {
      const L = Lh({ x: 0, y: Z.height - x.height, w: x.width, h: x.height }, l, "camera_preview");
      bn = L ? x : null, L && $_(L);
    }
    if (!bn) {
      T.cameraPreview.ready = !1, T.cameraPreview.label = Ru() ? "Loading preview" : "Connect ERP image", T.cameraPreview.settled = !1;
      return;
    }
    const C = R_(f);
    T.cameraPreview.ready = !0, T.cameraPreview.label = C ? "" : "Loading preview", T.cameraPreview.settled = C && ie.pendingStableLayoutFrames <= 0 && ie.hasPresentedFrame;
  }
  let jh = 0, Hh = !1;
  function $_(i) {
    const s = ++jh;
    createImageBitmap(i.canvas, i.x, i.y, i.width, i.height).then((l) => {
      var f;
      if (s !== jh || !ie.running) {
        l.close();
        return;
      }
      (f = be.getContext("bitmaprenderer")) == null || f.transferFromImageBitmap(l);
    }).catch((l) => {
      Hh || (Hh = !0, console.error("[PanoramaStickers] camera preview frame failed", l));
    });
  }
  function Ku(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return Oh(i, l, f);
  }
  function Ko(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return du(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function z_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function j_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: In(i, "widthScale", 1),
      pressureLike: In(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function H_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Wu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Q = null;
      i.forEach((ee) => {
        const le = Number((ee == null ? void 0 : ee.u) || 0), me = Number((ee == null ? void 0 : ee.v) || 0), oe = (le % 1 + 1) % 1, ve = Q == null ? oe : Q + pr(oe, (Q % 1 + 1) % 1);
        p.set(ee, { x: ve, y: me }), Q = ve;
      });
    }
    const m = (Q) => !Q || typeof Q != "object" ? { x: 0, y: 0 } : p.get(Q) || z_(Q), y = (Q, ee, le, me = {}) => {
      const oe = f ? (Number(ee) % 1 + 1) % 1 : Number(ee), ve = j_(Q, oe, le, me);
      return p.set(ve, { x: Number(ee), y: Number(le) }), ve;
    }, _ = (Q, ee, le) => {
      const me = m(Q), oe = m(ee);
      return y(Q, br(me.x, oe.x, le), br(me.y, oe.y, le), {
        t: br(Number((Q == null ? void 0 : Q.t) || 0), Number((ee == null ? void 0 : ee.t) || 0), le),
        widthScale: br(In(Q, "widthScale", 1), In(ee, "widthScale", 1), le),
        pressureLike: br(In(Q, "pressureLike", 1), In(ee, "pressureLike", 1), le)
      });
    };
    if (i.length === 1) {
      const Q = m(i[0]);
      return [y(i[0], Q.x, Q.y)];
    }
    const x = H_(s, l), E = (Q, ee) => {
      const le = [0];
      for (let de = 1; de < Q.length; de += 1) {
        const Se = m(Q[de - 1]), $e = m(Q[de]);
        le.push(le[de - 1] + Math.hypot($e.x - Se.x, $e.y - Se.y));
      }
      const me = le[le.length - 1] || 0;
      if (me <= 1e-8) {
        const de = Q[0], Se = m(de);
        return [y(de, Se.x, Se.y)];
      }
      const oe = [];
      let ve = 0;
      for (let de = 0; de <= me + 1e-9; de += ee) {
        for (; ve < le.length - 2 && le[ve + 1] < de; ) ve += 1;
        const Se = le[ve], $e = le[ve + 1], He = Math.max(1e-8, $e - Se);
        oe.push(_(Q[ve], Q[ve + 1], ne((de - Se) / He, 0, 1)));
      }
      const Be = Q[Q.length - 1], Je = m(Be), lt = oe[oe.length - 1], ke = lt ? m(lt) : null;
      return (!ke || Math.hypot(ke.x - Je.x, ke.y - Je.y) > ee * 0.35) && oe.push(y(Be, Je.x, Je.y)), oe;
    }, P = (Q) => {
      if (!Array.isArray(Q) || Q.length < 3) return Q ? Q.slice() : [];
      const ee = m(Q[0]), le = [y(Q[0], ee.x, ee.y)];
      for (let ve = 0; ve < Q.length - 1; ve += 1) {
        const Be = Q[ve], Je = Q[ve + 1], lt = m(Be), ke = m(Je), de = y(
          Be,
          lt.x * 0.75 + ke.x * 0.25,
          lt.y * 0.75 + ke.y * 0.25,
          {
            t: Number(Be.t || 0) * 0.75 + Number(Je.t || 0) * 0.25,
            widthScale: In(Be, "widthScale", 1) * 0.75 + In(Je, "widthScale", 1) * 0.25,
            pressureLike: In(Be, "pressureLike", 1) * 0.75 + In(Je, "pressureLike", 1) * 0.25
          }
        ), Se = y(
          Be,
          lt.x * 0.25 + ke.x * 0.75,
          lt.y * 0.25 + ke.y * 0.75,
          {
            t: Number(Be.t || 0) * 0.25 + Number(Je.t || 0) * 0.75,
            widthScale: In(Be, "widthScale", 1) * 0.25 + In(Je, "widthScale", 1) * 0.75,
            pressureLike: In(Be, "pressureLike", 1) * 0.25 + In(Je, "pressureLike", 1) * 0.75
          }
        );
        le.push(de, Se);
      }
      const me = Q[Q.length - 1], oe = m(me);
      return le.push(y(me, oe.x, oe.y)), le;
    }, C = E(i, x);
    if (C.length < 3) return C;
    const L = l ? 2 : 1;
    let U = C.slice();
    for (let Q = 0; Q < L; Q += 1) U = P(U);
    return E(U, Math.max(x * 0.75, 55e-5));
  }
  function In(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function G_(i) {
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
  function Ba(i, s, l = {}) {
    const f = Tn({ label: "editor.raster-surface" });
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Ua() {
    const i = qa();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ya() {
    const i = qa();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function K_() {
    const i = vu(), s = Ya();
    return i ? `${s}:${i}` : s;
  }
  function W_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function B_() {
    h.paintCompositeRevision += 1;
  }
  function U_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Gh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, w), h.paintEngineRevisionKey = Ua();
  }
  function Kh() {
    w.painting_layer !== null && (w.painting_layer = null), dl = "";
  }
  function zt() {
    U_(), ie.backgroundDirty = !0, ie.dirty = !0;
  }
  function Er({ rebuildPaintEngine: i = !1 } = {}) {
    Kh(), W_(), zt(), i && Gh();
  }
  function Wo() {
    Kh(), B_(), zt();
  }
  function Xa() {
    var f;
    const i = qa(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = dd(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Ua();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(w));
  }
  function qa() {
    const i = Math.max(1, M(Number((w == null ? void 0 : w.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function ar() {
    return qa();
  }
  function Y_(i, s, l, f, p = null) {
    const m = G_(i), y = In(s, "widthScale", 1) * In(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * y) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Yr) * l * y) : Math.max(0.5, m.value / (2 * Math.PI) * l * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function X_(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * y : 1, f === "mask") {
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
  function q_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function J_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), X_(i, l, p);
    const y = (_) => q_(i, _, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const x = s[_], E = s[_ + 1];
      if (!x || !E) continue;
      const P = Number(x.x || 0), C = Number(x.y || 0), L = Number(E.x || 0), U = Number(E.y || 0), K = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), Q = Math.max(0.5, Math.min(m, Number(E.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(C) || !Number.isFinite(L) || !Number.isFinite(U) || !Number.isFinite(K) || !Number.isFinite(Q)) continue;
      const ee = L - P, le = U - C, me = Math.hypot(ee, le);
      if (!Number.isFinite(me) || me < 1e-6) {
        y(x);
        continue;
      }
      if (me > Math.max(f.w, f.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(K, Q)), ve = Math.max(0.35, Math.min(oe * 0.4, 2.25)), Be = Math.max(1, Math.ceil(me / ve));
      for (let Je = 0; Je <= Be; Je += 1) {
        const lt = Je / Be;
        y({
          x: br(P, L, lt),
          y: br(C, U, lt),
          radiusPx: br(K, Q, lt)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function Z_(i, s, l, f) {
    J_(i, s, l, f, { preview: !1 });
  }
  function Q_(i, s, l, f, p) {
    var _, x, E, P;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * f.w, Number(((x = s[0]) == null ? void 0 : x[y]) || 0) * f.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((E = s[C]) == null ? void 0 : E[m]) || 0) * f.w, Number(((P = s[C]) == null ? void 0 : P[y]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Wh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function ew(i, s) {
    const l = Wh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: Y_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Bh(i, s, l = null) {
    var _, x, E, P;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((E = s == null ? void 0 : s.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((P = s == null ? void 0 : s.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return Q_(i.ctx, Wh(p), p, f), !0;
    const y = ew(p, f);
    return y.length ? (Z_(i.ctx, y, p, f), !0) : !1;
  }
  function tw(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], y = new Int32Array(s * l), _ = new Int32Array(s * l);
    for (let x = 0; x < l; x += 1)
      for (let E = 0; E < s; E += 1) {
        const P = x * s + E;
        if (p[P] || i[P] <= f) continue;
        let C = 0, L = 0;
        y[L] = E, _[L] = x, L += 1, p[P] = 1;
        const U = [];
        let K = E, Q = x, ee = E, le = x;
        for (; C < L; ) {
          const me = y[C], oe = _[C];
          C += 1, U.push({ x: me, y: oe }), me < K && (K = me), oe < Q && (Q = oe), me > ee && (ee = me), oe > le && (le = oe);
          const ve = [
            [(me - 1 + s) % s, oe],
            [(me + 1) % s, oe],
            [me, oe - 1],
            [me, oe + 1]
          ];
          for (const [Be, Je] of ve) {
            if (Je < 0 || Je >= l) continue;
            const lt = Je * s + Be;
            p[lt] || i[lt] <= f || (p[lt] = 1, y[L] = Be, _[L] = Je, L += 1);
          }
        }
        m.push({ pixels: U, minX: K, minY: Q, maxX: ee, maxY: le });
      }
    return m;
  }
  function nw(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, E) => x - E);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let x = 0; x < l.length; x += 1) {
      const E = l[x], C = (x === l.length - 1 ? l[0] + s : l[x + 1]) - E - 1;
      C > f && (f = C, p = x);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let y = 1 / 0, _ = -1 / 0;
    for (const x of l) {
      const E = (x - m + s) % s;
      y = Math.min(y, E), _ = Math.max(_, E);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - y + 1)
    };
  }
  function rw(i, s, l = {}) {
    var E;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (E = i == null ? void 0 : i.getContext) == null ? void 0 : E.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const y = m.getImageData(0, 0, f, p), _ = new Uint8Array(f * p);
    for (let P = 0; P < _.length; P += 1) _[P] = y.data[P * 4 + 3];
    return tw(_, f, p, 8).map((P, C) => {
      const L = nw(P, f);
      if (!L) return null;
      const U = Number(L.widthPx || 0), K = P.maxY - P.minY + 1, Q = Number(L.startX || 0), ee = Tn({ label: "editor.lasso-fill" });
      ee.width = U, ee.height = K;
      const le = ee.getContext("2d");
      if (!le) return null;
      const me = le.createImageData(U, K);
      return P.pixels.forEach(({ x: oe, y: ve }) => {
        const Be = (ve * f + oe) * 4, Je = (Number(oe || 0) - Q + f) % f, lt = ((ve - P.minY) * U + Je) * 4;
        me.data[lt + 0] = y.data[Be + 0], me.data[lt + 1] = y.data[Be + 1], me.data[lt + 2] = y.data[Be + 2], me.data[lt + 3] = y.data[Be + 3];
      }), le.putImageData(me, 0, 0), {
        id: ra("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / p,
          u1: U / f,
          v1: (P.maxY + 1) / p
        },
        rasterDataUrl: ee.toDataURL("image/png"),
        transform: {
          du: Q / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ja(i, s) {
    if (!i || !s) return null;
    const l = hl(i), f = Uf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Uf(s, l.right) / f, m = Uf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function iw(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Li();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Ka(Ko(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Uh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Li();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + pr(m, s);
        return {
          x: f.x + y * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => Ka(Ko(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function ow(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function aw(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), y = Ja(s, m);
      if (!y) return [];
      f.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return ow(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function sw(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), y = Ja(s, m);
      y && f.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function lw(i) {
    const s = je(), l = kl(s);
    if (!s || !l)
      return j.clearRect(0, 0, I.width, I.height), i && Ee.clear(657930), !1;
    const f = { x: l.x, y: l.y, w: l.w, h: l.h }, { rect: p, shot: m } = c0(s, l, { width: I.width, height: I.height }), y = cw(f);
    if (j.clearRect(0, 0, I.width, I.height), i) {
      Ee.clear(657930);
      const _ = Hu(p), x = !!Lh(_, m, void 0, 657930);
      x || Ee.clear(1118481, _), ie.backgroundDirty = !x;
    }
    return j.save(), j.fillStyle = "rgba(0, 0, 0, 0.58)", j.beginPath(), j.rect(0, 0, I.width, I.height), j.roundRect(f.x, f.y, f.w, f.h, y), j.fill("evenodd"), j.restore(), j.save(), j.strokeStyle = B0, j.globalAlpha = 0.62, j.lineWidth = 2, j.beginPath(), j.roundRect(f.x + 1, f.y + 1, f.w - 2, f.h - 2, Math.max(0, y - 1)), j.stroke(), j.restore(), !0;
  }
  function cw(i) {
    const s = Math.max(1e-6, Number(ie.frameCanvasScale || 1));
    return Math.min(Ta * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function fi() {
    var s;
    const i = h.mode === "frame" ? je() : null;
    T.frameRollKnob.visible = !!i && !r && i.locked !== !0, T.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), T.frameRollKnob.displayValue = na(T.frameRollKnob.rollDeg), T.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", T.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function uw() {
    var x, E;
    if (((x = h.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (E = i == null ? void 0 : i.geometry) == null ? void 0 : E.points;
    let l;
    if (h.mode === "frame") {
      const P = je(), C = gn(P);
      l = aw(s, P, C);
    } else
      l = iw(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), y = Math.round(Number(p.g || 0) * 255), _ = Math.round(Number(p.b || 0) * 255);
    j.save(), j.beginPath(), j.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let P = 1; P < l.length; P++) j.lineTo(Number(l[P].x || 0), Number(l[P].y || 0));
    j.closePath(), f ? (j.lineWidth = 2, j.setLineDash([6, 6]), j.lineDashOffset = 0, j.strokeStyle = "rgba(0,0,0,0.96)", j.stroke(), j.lineDashOffset = -6, j.strokeStyle = "rgba(255,255,255,0.96)", j.stroke(), j.setLineDash([]), j.lineDashOffset = 0) : (j.lineWidth = 1.5, j.setLineDash([6, 4]), j.strokeStyle = `rgba(${m},${y},${_},1)`, j.stroke(), j.setLineDash([])), j.restore();
  }
  function fw() {
    const i = h.frameRollOverlayVisual, s = ne(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = gn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Yr, m = Math.hypot(l.w, l.h) * 0.55, y = Math.cos(p) * m, _ = Math.sin(p) * m;
    j.save(), j.globalAlpha *= s, j.beginPath(), j.rect(l.x, l.y, l.w, l.h), j.clip(), j.translate(f.x, f.y), j.rotate(p);
    const x = Math.max(12, Math.min(l.w, l.h) / 6);
    j.beginPath();
    for (let E = -m; E <= m; E += x)
      j.moveTo(E, -m), j.lineTo(E, m);
    for (let E = -m; E <= m; E += x)
      j.moveTo(-m, E), j.lineTo(m, E);
    j.lineWidth = 1, j.strokeStyle = "rgba(255, 255, 255, 0.22)", j.stroke(), j.setTransform(1, 0, 0, 1, 0, 0), j.beginPath(), j.moveTo(f.x - y, f.y - _), j.lineTo(f.x + y, f.y + _), j.lineWidth = 1.5, j.setLineDash([8, 6]), j.strokeStyle = "rgba(255, 255, 255, 0.92)", j.shadowColor = "rgba(0, 0, 0, 0.8)", j.shadowBlur = 3, j.stroke(), j.setLineDash([]), j.restore();
  }
  function dw() {
    return !R || !je() || $ && hr() || O && !mr() ? 0 : WT;
  }
  function pw() {
    const i = ne(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !R || h.mode !== "pano") return;
    const s = je(), l = s ? rn(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: ah(s),
      locked: kn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (j.save(), j.fillStyle = `rgba(0, 0, 0, ${i})`, j.beginPath(), j.rect(0, 0, I.width, I.height), m.length >= 4) {
      j.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) j.lineTo(m[y].x, m[y].y);
      j.closePath();
    }
    j.fill("evenodd"), j.restore();
  }
  function Yh(i = /* @__PURE__ */ new Set()) {
    ln = null;
    const s = ie.backgroundDirty;
    R && (Xa(), V_(s, i)), h.mode === "frame" ? (ie.frameSafeRect = Jw(), lw(s)) : h.mode === "unwrap" ? M_(s) : N_(s), pw(), L_(), fi(), uw(), fw(), T.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), ie.hasPresentedFrame || (ie.hasPresentedFrame = !0, Z.style.opacity = "1"), R && T.cameraPreview && (T.cameraPreview.settled = ie.pendingStableLayoutFrames <= 0 && ie.hasPresentedFrame && h.mode !== "frame");
    const l = s_();
    T.stageStatus = l.status, T.stageStatusDetail = l.detail, l.status === Dr ? (ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", l.detail)) : (ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind"));
  }
  function hw(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Bu() {
    return !!h.interaction || !!Ge.drag;
  }
  function Xh() {
    ie.nodePreviewPending = !1, e.__panoLiveStateOverride = w, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Sv();
  }
  function ue(i = {}) {
    var x, E, P, C, L, U, K, Q, ee;
    const s = i.reason ?? mt.STATE, l = !!i.localOnly, f = i.externalSync === !0, p = String(i.cause || ""), m = String(((x = h.interaction) == null ? void 0 : x.kind) || "");
    (!l || m === "view" || m === "pan_frame" || hw() || !!h.viewTransition || p === "mode" || p === "frame_view" || p === "cutout_frame") && (ie.backgroundDirty = !0), l && nh() && (h.livePaintInteractionRevision += 1, ie.backgroundDirty = !0), (!l || p === "selection" || p === "mode" || p === "cutout_frame") && (Iu(), ci()), Bu() ? ie.nodePreviewPending = !0 : Xh(), f && ((P = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || P.call(E), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), f && !l && ((U = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || U.call(L, !0, !0), (ee = (Q = (K = cr) == null ? void 0 : K.canvas) == null ? void 0 : Q.setDirty) == null || ee.call(Q, !0, !0)), Fe.requestDraw(s);
  }
  function vl() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height)), f = window.devicePixelRatio || 1, p = [I.width, I.height, Z.width, Z.height].join("x");
    (I.width !== s || I.height !== l) && (I.width = s, I.height = l);
    const m = Q2(i.width || s, i.height || l, f, window.innerWidth || i.width, window.innerHeight || i.height);
    return Ee.resize(m.width, m.height), [I.width, I.height, Z.width, Z.height].join("x") === p ? !1 : (ie.backgroundDirty = !0, ie.dirty = !0, R && Za(() => {
      ie.pendingStableLayoutFrames = Math.max(Number(ie.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function Za(i) {
    i(), Fe.wake();
  }
  function mw() {
    return !!h.viewTransition || !!on.state.inertia.active || ie.pendingStableLayoutFrames > 0 || Math.abs(Number(h.frameRollOverlayAlpha || 0) - Number(h.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(h.cutoutPanoDimAlpha || 0) - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 || h.outputPreviewAnim !== h.outputPreviewAnimTo || Bu();
  }
  function gw(i = performance.now(), s = /* @__PURE__ */ new Set()) {
    var y;
    ie.nodePreviewPending && !Bu() && Xh(), s.forEach((_) => ie.reasons.add(_)), s.size && (ie.dirty = !0), [...s].some((_) => _ !== mt.OVERLAY) && (ie.backgroundDirty = !0), gr(), ie.lastTickTs > 0 ? Math.max(1e-3, (i - ie.lastTickTs) / 1e3) : 1 / 60, ie.lastTickTs = i;
    const l = h.mode === "frame" && ((y = h.interaction) == null ? void 0 : y.kind) === "roll_frame" ? h.interaction : null;
    l != null && l.shot && (h.frameRollOverlayVisual = { shot: l.shot });
    const f = l ? 1 : 0;
    if (Math.abs(f - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = f, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - f) > 1e-6) {
      const _ = ne(
        (i - Number(h.frameRollOverlayStartTs || i)) / BT,
        0,
        1
      );
      h.frameRollOverlayAlpha = br(
        Number(h.frameRollOverlayFrom || 0),
        f,
        Bf(_)
      ), _ >= 1 && (h.frameRollOverlayAlpha = f, f === 0 && (h.frameRollOverlayVisual = null)), ie.dirty = !0;
    }
    const p = dw();
    if (Math.abs(p - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = p, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - p) > 1e-6) {
      const _ = ne(
        (i - Number(h.cutoutPanoDimStartTs || i)) / Y0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = br(
        Number(h.cutoutPanoDimFrom || 0),
        p,
        Bf(_)
      ), _ >= 1 && (h.cutoutPanoDimAlpha = p), _ >= 1 && p === 0 && (h.cutoutPanoDimCorners = null), ie.dirty = !0;
    }
    const m = R && je() ? 1 : 0;
    if (Math.abs(m - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = m, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - m) > 1e-6) {
      const _ = ne(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / Y0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = br(
        Number(h.cutoutPanoFrameFrom || 0),
        m,
        Bf(_)
      ), _ >= 1 && (h.cutoutPanoFrameAlpha = m, m === 0 && (h.cutoutPanoFrameVisual = null)), ie.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(h.outputPreviewAnimDurationMs || 180)), x = ne((i - Number(h.outputPreviewAnimStartTs || 0)) / _, 0, 1), P = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? qT(x) : ZT(x);
      h.outputPreviewAnim = br(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, P), ie.dirty = !0, x >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: _, done: x } = dI(h.viewTransition, i);
      if (h.viewPosition = _.position, h.viewYaw = _.yaw_deg, h.viewPitch = _.pitch_deg, h.viewFov = _.hFOV_deg, h.viewDistance = _.distance, x) {
        const { end: E } = h.viewTransition;
        h.viewTransition = null, E && Qp(E), zr();
      }
      ie.backgroundDirty = !0, ie.dirty = !0;
    }
    if (h.viewInertia.vx = Number(on.state.inertia.vx || 0), h.viewInertia.vy = Number(on.state.inertia.vy || 0), h.viewInertia.active = !!on.state.inertia.active, on.stepInertia(i) && (h.viewInertia.vx = Number(on.state.inertia.vx || 0), h.viewInertia.vy = Number(on.state.inertia.vy || 0), h.viewInertia.active = !!on.state.inertia.active, ie.backgroundDirty = !0, ie.dirty = !0), ie.pendingStableLayoutFrames > 0 && (ie.pendingStableLayoutFrames -= 1, ie.dirty = !0), ie.dirty) {
      if (ie.pendingStableLayoutFrames > 0)
        return;
      ie.dirty = !1;
      const _ = ie.reasons;
      ie.reasons = /* @__PURE__ */ new Set(), Yh(_);
    }
  }
  function qh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      ie.tickErrorSignature !== l && (ie.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), T.stageStatus = _r, T.stageStatusDetail = "frame", ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind");
    }
  }
  function yw(i = performance.now(), s = /* @__PURE__ */ new Set()) {
    if (!ie.running) return;
    const l = SM();
    qh(() => gw(i, s)), xM(l);
  }
  function Jh() {
    !ie.running || !vl() || qh(() => {
      ie.dirty = !1, Yh(/* @__PURE__ */ new Set([mt.RESIZE]));
    });
  }
  const Zh = new ResizeObserver(Jh);
  Zh.observe(I);
  let Bo = null;
  function Qh() {
    Bo == null || Bo.removeEventListener("change", Uu), Bo = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), Bo.addEventListener("change", Uu);
  }
  function Uu() {
    Qh(), Jh();
  }
  Qh();
  function bw() {
    xe(), ie.running = !1, Fe.stop(), Zh.disconnect(), Bo.removeEventListener("change", Uu);
  }
  function Yn() {
    hv();
    const i = mI({
      editor: h,
      swatches: dc,
      paintColorPopOpen: Me ? !Me.hidden : !1,
      colorToCss: Xr,
      colorsApproximatelyEqual: pc,
      rgb01ToHsv: qf,
      hsv01ToRgb: Xf,
      getBrushPresetIdForTool: zi,
      isActiveLassoTool: Iv
    });
    if (Object.assign(T.paintDock, i), Lv(), !i.visible) {
      Me && (Me.hidden = !0);
      return;
    }
    St && (clearTimeout(St), St = 0), Re && (!i.colorEnabled && Me && !Me.hidden && (St = window.setTimeout(() => {
      Me.hidden = !0, T.paintDock.colorPopOpen = !1, St = 0;
    }, 170)), Me && (Me.style.setProperty("--picker-hue-color", i.pickerHueColor), Me.style.setProperty("--picker-sat", i.pickerSat), Me.style.setProperty("--picker-val", i.pickerVal), Me.style.setProperty("--picker-hue", i.pickerHue)), We && (We.style.left = i.pickerSvLeft, We.style.top = i.pickerSvTop), gt && (gt.style.left = i.pickerHueLeft));
  }
  function Uo() {
    const i = cn(R && h.mode === "frame" ? je() : Lt());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: gi(i)
    }, ze());
  }
  function ze() {
    gr(), Kr(), em();
  }
  function vw() {
    const i = R && h.mode === "frame" ? je() : null;
    return [...or(), no(), i].some((s) => Bn(s) ? Fc(s) : un(s) && Di() && Fc(w.camera));
  }
  function em() {
    if (o) return;
    w.ui_settings = w.ui_settings || {};
    const i = hI(w.ui_settings);
    if (a) {
      T.sidePanel = gI({
        coverage: w.coverage,
        uiSettings: i,
        normalizeCoverageValue: er
      });
      return;
    }
    const s = Lt(), l = R && h.mode === "frame" ? je() : null, f = l || s, p = l ? [l] : or(), m = l ? "shot" : za();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const ee = cn(f);
      h.panelLastValues = {
        yaw_deg: Number(ee.yaw_deg || 0),
        pitch_deg: Number(ee.pitch_deg || 0),
        hFOV_deg: Number(ee.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(ee.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(ee.rot_deg || 0),
        roll_deg: Number(ee.roll_deg || 0),
        aspect_id: gi(ee)
      }, Bn(f) && (h.panelLastValues.opacity = Io(f, h.frame).opacity * 100);
    }
    const y = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : f, x = no(), E = $ && (m === "shot" || m === "frame") && Ha(), P = x ? m2(x, h.frame) : E ? { ..._, ...d2(w.camera, h.frame), vFOV_deg: _.vFOV_deg } : Bn(_) ? h.panelLastValues : _ || y, C = x ? cl(x) : !!_ && !kn(_);
    h.panelWasEnabled = C, Iu();
    let L = null;
    if (l) {
      const ee = xu({ item: l, kind: "shot", label: "Frame" });
      L = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ee.label,
        currentIcon: ee.icon || null,
        items: [{
          id: String(l.id || ""),
          label: ee.label,
          icon: ee.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ee = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const oe = je();
        oe && ee.push({ id: oe.id, label: "Camera", icon: lh("frame"), item: oe, kind: "frame" }), li().forEach((ve, Be) => {
          var de, Se;
          if (!ve || Bn(ve) && !ve.visible) return;
          const Je = N ? Sd(ve) : Yt(ve) ? String(ve.id || Gf) : String(((Se = (de = w.assets) == null ? void 0 : de[ve.asset_id]) == null ? void 0 : Se.name) || ve.asset_id || ve.id), lt = `${Be + 1}. ${Je}${Yt(ve) && zo(ve) ? " (hidden)" : ""}`, ke = xu({ item: ve, label: lt, kind: "image" });
          ee.push({ id: ve.id, label: ke.label, icon: ke.icon, item: ve, kind: "image" });
        });
      } else
        sh().forEach((oe) => {
          if (!(oe != null && oe.item)) return;
          const ve = xu(oe);
          ee.push({ id: oe.item.id, label: ve.label, icon: ve.icon, item: oe.item, kind: oe.kind });
        });
      const le = (_ == null ? void 0 : _.id) || "", me = x ? { label: Sd(x), icon: Pe.globe } : ee.find((oe) => oe.id === le) || ee[0];
      L = {
        label: "Selection",
        open: !1,
        disabled: ee.length <= 1,
        currentLabel: me.label,
        currentIcon: me.icon || null,
        items: ee.map((oe) => ({
          id: oe.id,
          label: oe.label,
          icon: oe.icon || null,
          active: oe.id === le
        }))
      };
    }
    const U = [], K = (ee, le, me, oe, ve) => {
      const Be = ne(Number(P[ee] || 0), me, oe);
      U.push({
        key: ee,
        label: le,
        min: me,
        max: oe,
        step: ve,
        value: Be,
        displayValue: na(Be),
        fillPct: ne((Be - me) / Math.max(1e-6, oe - me) * 100, 0, 100),
        enabled: C && !r
      });
    }, Q = [];
    if (x) {
      for (const [ee, le] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const me = Hf(P[ee]);
        K(ee, le, -me, me, 0.01);
      }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("roll_deg", "Roll", -180, 180, 0.1), K("scale", "Scale", W0, Hf(P.scale), 0.01), K("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      Q.push(`Selected objects: ${p.length}`), Q.push("Multi-selection supports z-order and delete.");
    else {
      const ee = m === "shot" || m === "frame";
      if (E)
        for (const [le, me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const oe = Hf(P[le]);
          K(le, me, -oe, oe, 0.01);
        }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K(m === "image" || t === "stickers" && !ee ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), K("hFOV_deg", "H FOV", 1, 179, 0.1), K("vFOV_deg", "V FOV", 1, 179, 0.1), ee && U.forEach((le) => {
        le.enabled = le.enabled && wI(le.key, { erp: io() });
      }), N && !ee && K("opacity", "Opacity", 0, 100, 1);
    }
    T.sidePanel = xI({
      coverage: w.coverage,
      readOnly: r,
      selectionPicker: L,
      enabled: C,
      selectedKind: x ? "world" : m,
      selectedItems: p,
      params: U,
      notes: Q,
      uiSettings: i,
      normalizeCoverageValue: er
    });
  }
  function Kr() {
    if (!k || r) return;
    const i = _l(), s = Ge.selection, l = s && Wr(s.owner);
    if (s) {
      const f = l ? Qa(s) : [];
      s.frames = s.frames.filter((p) => f.some((m) => l[m].keyframes.some((y) => y.frame === p))), s.frames.length || (Ge.selection = null);
    }
    T.timeline = CI(w, {
      span: i,
      selection: Ge.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ge.expanded ?? tm(),
      openRows: Ge.openRows,
      audio: ww() && T.videoTransport.hasAudio ? { muted: Ie.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Jf(e) !== null || aP(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Di(),
      cameraHideable: O,
      stickers: !A,
      scene: N && !!Cd(e).scene,
      sceneLocked: !!V
    }), T.easing = Ge.selection ? II(l, Qa(Ge.selection), Ge.selection.frames, es(Ge.selection.owner)) : null;
  }
  function tm() {
    return WN(w, { cameraOnly: A, camera: O });
  }
  function _l(i = null) {
    if (V != null && V.frames) return V.frames;
    const s = w.timeline.fps, l = w.stickers.find(Yt), f = l ? mh() : null, p = Math.max(
      T.videoTransport.ready ? Math.round(Number(T.videoTransport.duration || 0) * s) : 0,
      f ? h1(l.clip, s, f.meta) : 0
    );
    return Rb(w, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: A && !V || O });
  }
  function Wr(i) {
    return i === "camera" ? Di() ? w.camera : null : i === "scene" ? N ? w.scene : null : w.stickers.find((s) => s.id === i) || null;
  }
  function Qa(i) {
    return i.lane ? [i.lane] : Ea(Wr(i.owner));
  }
  function es(i) {
    if (i === "camera") return 0;
    const { clip: s } = Wr(i);
    return s.start - s.in;
  }
  function nm(i) {
    return `${ya(i, h.frame)}:${i.start - i.in}`;
  }
  function wl(i) {
    const s = Wr(i);
    return !!s && s.locked !== !0;
  }
  function ts() {
    var s;
    const i = Lt();
    (Bn(i) && !fl(i) || h.selectedId === nc && Di() && !jr() || za() === "stroke" && !ul()) && zn(null), ((s = no()) == null ? void 0 : s.visible) === !1 && ro();
  }
  function _w(i) {
    const s = Math.max(0, Math.round(i));
    if (s === h.frame) return;
    gr(), h.frame = s, Y.frame.value = s, gr();
    const l = [h.selectedId, h.worldSelectedId];
    ts(), zt(), l[0] !== h.selectedId || l[1] !== h.worldSelectedId ? ze() : vw() && em(), Ke(), ue({ reason: mt.PLAYHEAD });
  }
  function ww() {
    return Ie instanceof HTMLVideoElement && !!Ie.getAttribute("src");
  }
  function Sw(i) {
    Ti(), Ut.seek(i);
  }
  function Nn() {
    k && Ut.stop();
  }
  function Yu() {
    Ti(), Ut.toggle();
  }
  function Sl() {
    gr(), zt(), ze(), Ke(), ue();
  }
  function Vi() {
    tt(), st(), Sl();
  }
  function xw() {
    const { selection: i } = Ge;
    wl(i.owner) && (Nn(), RN(Wr(i.owner), Qa(i), i.frames, h.frame - es(i.owner)), Ge.selection = null, Vi());
  }
  function rm(i) {
    const s = Ia(i);
    if (s === null || s === w.timeline.fps) return;
    Nn();
    const l = Math.round(h.frame * s / w.timeline.fps);
    a2(w, s), Ge.selection = null, Ut.seek(l), Vi();
  }
  function kw() {
    const i = Jf(e);
    i !== null && i !== w.timeline.fps && rm(i);
  }
  function Mw(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        if (i.phase === "move") {
          Ge.scrubFrame = i.frame, Ue.request("seek");
          return;
        }
        Ue.cancel(), i.phase === "start" && Ti(), Ut.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Yu();
        return;
      }
      if (i.type === "mute") {
        fh(), Kr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ge.expanded = !(Ge.expanded ?? tm()), Ge.selection = null, Kr();
        return;
      }
      if (i.type === "toggle-row") {
        Ge.openRows.has(i.id) ? Ge.openRows.delete(i.id) : Ge.openRows.add(i.id), Kr();
        return;
      }
      if (i.type === "toggle-visible") {
        if (i.id === rv) w.painting_visible = !w.painting_visible;
        else {
          const s = Wr(i.id);
          if (!s || i.id === "camera" && !O) return;
          s.visible = !s.visible;
        }
        ts(), Vi();
        return;
      }
      if (i.type === "select-row") {
        const s = w.stickers.find((l) => l.id === i.id);
        if (s && !s.visible || i.id === "camera" && !jr()) return;
        s && !ya(s.clip, h.frame) && Sw(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? Cu(s.id) : i.id === "camera" ? zn(je()) : zn(li().find((l) => l.id === i.id) || null), zr(), Ge.selection = null, ze(), Ke(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = es(i.owner), l = i.frames.map((m) => m - s), f = Ge.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const y of l)
            m.has(y) ? m.delete(y) : m.add(y);
          f.frames = [...m].sort((y, _) => y - _);
        } else
          Ge.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        Kr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ge.selection;
        if (!s || !wl(s.owner)) return;
        const l = Wr(s.owner), f = Qa(s);
        if (i.phase === "start") {
          Nn(), Ge.drag = { keyframes: f.map((y) => structuredClone(l[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ge;
        if (!(p != null && p.keyframes)) return;
        f.forEach((y, _) => {
          l[y].keyframes = structuredClone(p.keyframes[_]);
        });
        const m = VN(l, f, p.frames, i.delta, -es(s.owner));
        if (s.frames = p.frames.map((y) => y + m), i.phase !== "end") {
          Ue.request("timeline"), Ue.request("view");
          return;
        }
        Ue.cancel(), Ge.drag = null, m ? Vi() : Sl();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? Wr("scene") : w.stickers.find((m) => m.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Nn(), Ge.drag = { clip: { ...s.clip }, span: _l(s.clip) };
          return;
        }
        const { drag: l } = Ge;
        if (!(l != null && l.clip)) return;
        const f = l.clip, p = nm(s.clip);
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? jN(s.clip, i.delta) : i.delta && i.mode === "start" ? HN(s.clip, f.start + i.delta) : i.delta && GN(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Ue.request("timeline"), nm(s.clip) !== p && Ue.request("view");
          return;
        }
        Ue.cancel(), Ge.drag = null, ts(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Vi() : Sl();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !wl(i.owner)) return;
        Nn(), FN(Wr(i.owner), h.frame - es(i.owner)), Vi();
        return;
      }
      if (i.type === "fps") {
        const s = UN(i.fps);
        if (s === null || s === w.timeline.fps || T.timeline.fpsLocked) {
          Kr();
          return;
        }
        rm(s);
        return;
      }
      if (i.type === "length") {
        const s = YN(i.length);
        if (s === void 0 || s === w.timeline.length) {
          Kr();
          return;
        }
        Nn(), w.timeline.length = s, Vi();
        return;
      }
      if (i.type === "easing") {
        const s = Ge.selection;
        if (!s || !wl(s.owner)) return;
        Nn(), zN(Wr(s.owner), Qa(s), s.frames, i.easing), i.commit ? Vi() : Sl();
      }
    }
  }
  async function im(i) {
    if (r || A || t !== "stickers" && t !== "cutout" || !Lr(i)) return;
    if (N) {
      Nn(), await om(i);
      return;
    }
    const s = yo("asset"), l = _s(e, `add:${s}`, async () => {
      try {
        const { image: f } = await ws(i);
        nn.set(s, f);
        const p = yo("st");
        w.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Fi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: sl()
        }), zn(w.stickers[w.stickers.length - 1]), ns(), ze(), Ke(), ue();
        const m = await _o(i, {
          fetchApi: (x, E) => Zt.fetchApi(x, E)
        });
        if (!(Array.isArray(w.stickers) ? w.stickers : []).filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s).length) return;
        w.assets[s] = m, Go(), tt(), st(), ze(), Ke(), ue();
      } catch (f) {
        delete w.assets[s], nn.delete(s);
        const p = Array.isArray(w.stickers) ? w.stickers : [], m = p.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (w.stickers = p.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(h.selectedId || "")) && zn(null), ze(), Ke(), ue(), st()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Nw() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = re == null ? void 0 : re.openImagePicker) == null || i.call(re, "add");
  }
  function Pw() {
    var i;
    r || !N || (i = re == null ? void 0 : re.openImagePicker) == null || i.call(re, "add-world");
  }
  async function Aw(i) {
    r || !N || !Lr(i) || (Nn(), await om(i, "world"));
  }
  function Cw() {
    const i = { x: I.width / 2, y: I.height / 2 }, s = oo() ? Ee.pick(Xo(), i.x, i.y, I.width, I.height) : null;
    return H2(Mn(), s, Hr());
  }
  async function om(i, s = "sky") {
    const l = yo("st"), f = _s(e, `add:${l}`, async () => {
      const { image: p } = await ws(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Fi(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, y = { kind: "file", filename: "" }, _ = s === "world" ? v2(l, y, Cw()) : Ep(l, y, m, sl());
      nn.set(Wa(_), p), w.stickers.push(_), s === "world" ? Cu(l) : zn(_), ns(), ze(), Ke(), ue();
      try {
        const x = await _o(i, {
          fetchApi: (P, C) => Zt.fetchApi(P, C)
        }), E = w.stickers.find((P) => P.id === l);
        if (!E) return;
        E.source = rc(x), nn.set(Wa(E), p), tt(), st();
      } catch (x) {
        throw w.stickers = w.stickers.filter((E) => E.id !== l), h.selectedId === l && zn(null), h.worldSelectedId === l && ro(), tt(), st(), x;
      } finally {
        ze(), Ke(), ue();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function Iw(i, s) {
    const l = _s(e, `replace:${s}:${yo("asset")}`, async () => {
      const { image: f } = await ws(i), p = await _o(i, {
        fetchApi: (y, _) => Zt.fetchApi(y, _)
      }), m = w.stickers.find((y) => y.id === s);
      if (m) {
        m.source = rc(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          y.vFOV_deg = Fi(y.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        nn.set(Wa(m), f), zt(), tt(), st(), ze(), Ke(), ue();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Ew(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Lt();
    if (!s || !Ct(s) || Yt(s) || !Lr(i)) return;
    if (N) {
      await Iw(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = yo("asset"), p = _s(e, `replace:${l}:${f}`, async () => {
      var P;
      const m = (Array.isArray(w.stickers) ? w.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !Ct(m) || Yt(m)) return;
      const y = String(m.asset_id || ""), _ = y ? En(((P = w.assets) == null ? void 0 : P[y]) || null) : null, x = Number(m.vFOV_deg || 0), E = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await ws(i);
        nn.set(f, C), m.asset_id = f, m.vFOV_deg = Fi(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, zt(), ze(), Ke(), ue();
        const L = await _o(i, {
          fetchApi: (K, Q) => Zt.fetchApi(K, Q)
        }), U = (Array.isArray(w.stickers) ? w.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === l) || null;
        if (!U || String(U.asset_id || "") !== f) return;
        w.assets[f] = L, Go(), tt(), st(), ze(), Ke(), ue();
      } catch (C) {
        delete w.assets[f], nn.delete(f);
        const L = (Array.isArray(w.stickers) ? w.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === l) || null;
        throw L && String(L.asset_id || "") === f && (y && _ && (w.assets[y] = _), L.asset_id = y, L.vFOV_deg = x, L.crop = E ? { ...E } : null), zt(), st(), ze(), Ke(), ue(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Ow() {
    var s;
    if (r) return;
    const i = Lt();
    !i || !Ct(i) || Yt(i) || (s = re == null ? void 0 : re.openImagePicker) == null || s.call(re, "replace");
  }
  async function Tw() {
    if (r || t !== "stickers") return;
    if (N) {
      await Fw();
      return;
    }
    const i = w.assets && typeof w.assets == "object" ? w.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((C) => C.blob()), _ = String(y.type || "image/png").split("/")[1] || "png", x = String((p == null ? void 0 : p.name) || `${f}.${_}`), E = new File([y], x, { type: y.type || "image/png" }), P = await _o(E, {
          fetchApi: (C, L) => Zt.fetchApi(C, L)
        });
        w.assets[f] = {
          ...P,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (st(), ue());
  }
  async function Fw() {
    let i = !1;
    for (const s of w.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((_) => _.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), y = await _o(m, {
            fetchApi: (_, x) => Zt.fetchApi(_, x)
          });
          s.source = rc(y), i = !0;
        } catch {
        }
    }
    i && (st(), ue());
  }
  function Dw() {
    if (r || t !== "cutout") return;
    const i = je();
    if (i) {
      zn(i), h.mode = "pano", A && hr() ? to(i0(v_(Mn(), i.position), Fh(), I.width, I.height)) : eh(jt(Number(i.yaw_deg || 0)), ne(Number(i.pitch_deg || 0), -89.9, 89.9)), ze(), Ke(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = pb({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    w.shots = [s], zn(s), ns(), h.mode = "pano", tt(), st(), ze(), Ke(), ue({ cause: "cutout_frame" });
  }
  function Lw() {
    r || !O || Di() || (Nn(), w.camera = c2(Mn()), gr(), zn(je()), ns(), tt(), st(), ze(), Ke(), ue({ cause: "cutout_frame" }));
  }
  function Rw() {
    Nn(), w.camera = null, zn(null), gr(), tt(), st(), ze(), Ke(), ue({ cause: "cutout_frame" });
  }
  function am(i, s) {
    O && un(i) && (w.camera.projection = s === Sa ? "erp" : "perspective", s === Sa) || Kw(i, s);
  }
  function Vw() {
    r || t !== "cutout" || (w.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, w.active.selected_shot_id = null, tt(), st(), ze(), Ke(), ue());
  }
  function $w() {
    const i = Array.isArray(w.stickers) ? w.stickers : [], s = [];
    for (const l of i)
      Yt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function sm(i, s, l = "Clear") {
    return new Promise((f) => {
      T.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function zw() {
    var l, f;
    if (r || !await sm(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    w.painting = ga(null), Er();
    const s = $w();
    if (t === "stickers")
      w.stickers = N ? w.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, N || (w.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], w.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Go();
    else {
      const p = n2(w.shots, w.active.selected_shot_id);
      w.stickers = s, w.assets = {}, w.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], w.active.selected_sticker_id = null, w.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Go();
    }
    tt(), st(), ze(), Ke(), ue();
  }
  async function jw(i) {
    var m, y, _, x;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Yo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((y = h.interaction) == null ? void 0 : y.layerKind) === s) || !await sm(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((_ = h.interaction) == null ? void 0 : _.kind) === "draw" && ((x = h.interaction) == null ? void 0 : x.layerKind) === s) {
        const E = ar(h.interaction);
        E && h.paintEngine.cancelActiveStroke(E), h.interaction = null;
      }
      f.length = 0, w.painting.raster_objects = Un().filter((E) => String((E == null ? void 0 : E.layerKind) || "paint") !== s), s === "paint" && (Cn().length = 0), Er(), tt(), st(), ze(), Ke(), Yn(), ue();
    }
  }
  function Hw() {
    if (r) return;
    const i = Lt();
    if (!i || !Ct(i) || Yt(i) || N && mu(i)) return;
    let s;
    N ? s = _2(i, yo("st"), sl()) : (s = JSON.parse(JSON.stringify(i)), s.id = yo("st"), s.yaw_deg = jt((s.yaw_deg || 0) + 8), s.z_index = sl()), w.stickers.push(s), w.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], zt(), tt(), st(), Ke(), ze(), ue();
  }
  function Gw() {
    const i = no();
    return i ? (cl(i) && (Nn(), b2(w, i.id), ro(), zt(), tt(), st(), ze(), Ke(), zr(), ue()), !0) : !1;
  }
  function lm() {
    var l, f, p, m, y;
    if (r || A) return;
    const i = or(), s = Lt();
    if (!(!s && i.length === 0) && !i.some((_) => kn(_))) {
      if (Nn(), i.length > 1) {
        const _ = new Set(i.filter((P) => fn(P)).map((P) => String(P.actionGroupId || P.id || ""))), x = new Set(i.filter((P) => xn(P)).map((P) => vn(P.rasterObjectId || P.id || ""))), E = new Set(i.filter(Ct).map((P) => String(P.id || "")));
        _.size > 0 && (w.painting.paint.strokes = (Array.isArray((f = (l = w.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? w.painting.paint.strokes : []).filter((P) => !_.has(String((P == null ? void 0 : P.actionGroupId) || ""))), w.painting.groups = Cn().filter((P) => !_.has(String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || ""))), Er()), x.size > 0 && (w.painting.raster_objects = Un().filter((P) => !x.has(String((P == null ? void 0 : P.id) || ""))), Wo()), E.size > 0 && (w.stickers = (Array.isArray(w.stickers) ? w.stickers : []).filter((P) => E.has(String((P == null ? void 0 : P.id) || "")) ? Yt(P) ? (zo(P) || (P.visible = !1), !0) : !1 : !0), Go(), zt()), h.selectedId = null, h.selectedIds = [], tt(), st(), ze(), Ke(), ue();
        return;
      }
      if (fn(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        w.painting.paint.strokes = (Array.isArray((m = (p = w.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? w.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== _), w.painting.groups = Cn().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== _), Er(), h.selectedId = null, h.selectedIds = [], tt(), st(), ze(), Ke(), ue();
        return;
      }
      if (xn(s)) {
        const _ = vn(s.rasterObjectId || s.id || "");
        w.painting.raster_objects = Un().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== _), Wo(), h.selectedId = null, h.selectedIds = [], tt(), st(), ze(), Ke(), ue();
        return;
      }
      if (O && un(s)) {
        Rw();
        return;
      }
      if (t === "stickers" || Ct(s)) {
        if (Yt(s)) {
          if (zo(s)) return;
          s.visible = !1, zt(), tt(), st(), ze(), Ke(), ue();
          return;
        }
        w.stickers = w.stickers.filter((_) => _.id !== s.id), Go(), zt(), h.selectedId = ((y = li()[0]) == null ? void 0 : y.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], w.active.selected_sticker_id = h.selectedId, tt(), st(), ze(), Ke(), ue();
        return;
      }
      Vw();
    }
  }
  function Xu(i, s) {
    const l = ie.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = Kf * Ao(l, i), p = bp(yp(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Kw(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [P, C] = _.split(":").map((L) => Number(L));
        if (Number.isFinite(P) && Number.isFinite(C)) return P >= C;
      }
      const x = Number(i.hFOV_deg || 64), E = Number(i.vFOV_deg || 40);
      return Math.abs(x - E) > 1e-6 ? x >= E : Co(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const y = p / m;
    if (!Xu(i, y)) {
      const _ = ne(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = Ql(_, y);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Ww(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = Ys(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Xu(i, p)) {
      const m = ne(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Ql(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function cm(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Xi(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Xu(i, p)) {
      const m = ne(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Ql(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = wo(i);
  }
  function um() {
    Ro().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Bw() {
    if (r) return;
    const i = or();
    if (!Lt() || i.length === 0 || i.some((_) => kn(_))) return;
    um();
    const l = Ro(), f = new Set(i.map((_) => Ct(_) ? `sticker:${String(_.id || "")}` : xn(_) ? `rasterObject:${vn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (l.forEach((_) => {
      var E, P;
      const x = _.type === "sticker" ? `sticker:${String(((E = _.item) == null ? void 0 : E.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((P = _.item) == null ? void 0 : P.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(x) ? p.push(_) : m.push(_);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((_, x) => {
      _.type === "sticker" && _.item && (_.item.z_index = x), _.type === "strokeGroup" && _.item && (_.item.z_index = x), _.type === "rasterObject" && _.item && (_.item.z_index = x);
    }), zt(), tt(), st(), Ke(), ue();
  }
  function Uw() {
    if (r) return;
    const i = or();
    if (!Lt() || i.length === 0 || i.some((_) => kn(_))) return;
    um();
    const l = Ro(), f = new Set(i.map((_) => Ct(_) ? `sticker:${String(_.id || "")}` : xn(_) ? `rasterObject:${vn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (l.forEach((_) => {
      var E, P;
      const x = _.type === "sticker" ? `sticker:${String(((E = _.item) == null ? void 0 : E.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((P = _.item) == null ? void 0 : P.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(x) ? p.push(_) : m.push(_);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((_, x) => {
      _.type === "sticker" && _.item && (_.item.z_index = x), _.type === "strokeGroup" && _.item && (_.item.z_index = x), _.type === "rasterObject" && _.item && (_.item.z_index = x);
    }), zt(), tt(), st(), Ke(), ue();
  }
  function Yw() {
    r || (w.projection_model = "pinhole_rectilinear", w.alpha_mode = "straight", u && (w.output_preset = M(Number(w.output_preset || 2048))), d && (w.coverage = er(d.value)), b && (w.bg_color = String(b.value || w.bg_color || "#00ff00")), jn(), e.setDirtyCanvas(!0, !0));
  }
  function jn() {
    var s;
    if (r) return;
    gr(), Wb(w), w.coverage = er(w.coverage), Kb(e, w.active);
    const i = Bb(e, w);
    g && !Ub(e, i, String(g.value ?? ""), { rebased: $ }) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const fm = () => jn();
  r || (e.__panoFlushStateBeforeQueue = fm);
  function qu() {
    w.ui_settings = cF(w.ui_settings), r || jn();
  }
  function st() {
    var i;
    r || (jn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Xw() {
    r || o_() && Ch().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function qw(i = {}) {
    var f, p, m, y, _, x, E, P, C, L;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), l && ((E = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || E.call(x, !0, !0), (L = (C = (P = cr) == null ? void 0 : P.canvas) == null ? void 0 : C.setDirty) == null || L.call(C, !0, !0));
  }
  function ns() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Yn(), ze());
  }
  function $i(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function xl(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function dm() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function gr(i = !0) {
    var f, p;
    if (!$) return;
    const s = z;
    if (!jr()) {
      z = null, (f = w.shots) != null && f.length && (w.shots = []), s && pm(s, null);
      return;
    }
    const l = (p = w.shots) == null ? void 0 : p[0];
    i && l && z && f2(w.camera, h.frame, l, z), z = Jg(w.camera, h.frame), l ? Object.assign(l, z, { position: [...z.position] }) : w.shots = [{ ...z, position: [...z.position] }], s || pm(null, z);
  }
  function pm(i, s) {
    var m, y;
    !s && h.mode === "frame" && hm(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((y = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : y.mode) === "3dof") {
      to({ ...Mn(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !Ha()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((_, x) => _ === l[x])) return;
    const p = { ...Mn(), position: f };
    Ga({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, to({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function hm(i) {
    if (h.mode = "pano", !i) return;
    Fa();
    const s = Mn().distance;
    h.viewYaw = jt(i.yaw_deg), h.viewPitch = ne(i.pitch_deg, -89.9, 89.9), h.viewFov = ne(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && Ga({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, ie.backgroundDirty = !0;
  }
  function je() {
    if (!R) return null;
    const i = Array.isArray(w.shots) ? w.shots : [];
    if (!i.length) return null;
    const s = String(w.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function Jw() {
    var U, K, Q, ee, le;
    if (!I) return null;
    const i = (U = I.getBoundingClientRect) == null ? void 0 : U.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    ie.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, I.width - 24);
    let y = Math.max(p + 1, I.height - 24);
    const _ = (K = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : K.call(F), x = (Q = H == null ? void 0 : H.getBoundingClientRect) == null ? void 0 : Q.call(H);
    let E = 24;
    _ && i && _.width > 0 && _.height > 0 && (E = Math.max(E, (_.right - i.left) * s + U0)), x && i && x.width > 0 && x.height > 0 && ((ee = T.frameRail) == null ? void 0 : ee.visible) === !0 && (E = Math.max(E, (i.right - x.left) * s + U0)), f = Math.max(f, E);
    const P = Math.min(m, I.width - E);
    let C = 24;
    const L = (le = De == null ? void 0 : De.getBoundingClientRect) == null ? void 0 : le.call(De);
    if (L && i && L.width > 0 && L.height > 0 && (C = Math.max(C, (L.bottom - i.top) * l + Wf)), [pe, ye].forEach((me) => {
      var Be;
      if (!me || !i) return;
      const oe = getComputedStyle(me);
      if (oe.display === "none" || oe.visibility === "hidden" || Number(oe.opacity) <= 0) return;
      const ve = (Be = me.getBoundingClientRect) == null ? void 0 : Be.call(me);
      !ve || ve.width <= 0 || ve.height <= 0 || (C = Math.max(C, (i.bottom - ve.top) * l + Wf));
    }), Ae && i) {
      const me = getComputedStyle(Ae);
      me.display !== "none" && me.visibility !== "hidden" && Number(me.opacity) > 0 && (C = Math.max(C, (KT + Wf) * l));
    }
    return p = Math.max(p, C), y = Math.max(p + 1, Math.min(y, I.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, P - f),
      h: Math.max(1, y - p)
    };
  }
  function kl(i = je()) {
    if (!i || !I) return null;
    const s = ie.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return eN(s, i, Kf * Ao(s, i));
  }
  function gn(i = je()) {
    const s = kl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ju() {
    return R && !!je();
  }
  function Or(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Li(), y = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: ne(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Fu(i.x, i.y), { lon: f, lat: p } = $u(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ne(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Tr(i, s, l = performance.now()) {
    const f = gn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Ku(s, p);
    if (!m) return null;
    const { lon: y, lat: _ } = $u(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ne(0.5 - _ / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Zw(i, s) {
    const l = je();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = mb(l, s);
    if (!p) return !1;
    if (f) {
      const m = Kf * Ao(
        ie.frameSafeRect || { w: I.width, h: I.height },
        p
      ), y = vp({ width: I.width, height: I.height }, m);
      if (y.halfW < I.width * 0.5 - 1e-6 || y.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, mm(), ze(), !0;
  }
  function mm() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, tt(), st(), ze());
    }, 180);
  }
  function Zu() {
    return $ && h.mode === "frame" && Ha();
  }
  function rs() {
    const i = je(), s = kl(i);
    return i && s ? c0(i, s, { width: I.width, height: I.height }) : null;
  }
  function gm() {
    var i;
    return ((i = Hr()) == null ? void 0 : i.radius) || Fr;
  }
  function is(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: gm() };
  }
  function ym(i, s) {
    const { rect: l } = i;
    return Ee.pickSurface(Dh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function bm(i, s, l) {
    return Tf(s, ym(i, l), null, Gr());
  }
  function vm(i) {
    return JSON.stringify([is(i), i.rect]);
  }
  function _m(i) {
    const s = je();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg;
  }
  function wm(i, s) {
    const l = je();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, bt(i), I.setPointerCapture(s));
  }
  function Qw(i, s, l) {
    const f = rs();
    if (!f || r) return;
    const p = is(f);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: bm(f, p, s), changed: !1 } : { kind: "frame_pan", last: s, depth: Qg(p, Gr()), changed: !1 }, bt(s), I.setPointerCapture(l);
  }
  function eS(i, s) {
    const l = rs();
    if (!l) return;
    const f = is(l), p = s.x - i.last.x, m = s.y - i.last.y;
    _m(i.kind === "frame_pan" ? n0(f, p, m, l.rect.w, l.rect.h, i.depth) : t0(f, p, m, I.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ue({ localOnly: !0, cause: "frame_view" });
  }
  function tS(i, s) {
    const l = rs();
    if (!l || r) return;
    const f = is(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: Ee.contentRevision(), view: vm(l) };
    if (!e0($r, m)) {
      const y = ym(l, i);
      $r = { ...m, cost: performance.now() - p, hit: y };
    }
    _m(r0(f, Tf(f, $r.hit, null, Gr()), s, Gr())), $r.view = vm(rs() ?? l), $r.wheelTime = p, mm(), ze(), ue({ localOnly: !0, cause: "frame_view" });
  }
  function nS() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, tt(), st(), ze(), !0) : !1;
  }
  function os() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && so(), h.interaction = null, Ho(), ci(), ze(), bt(h.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function rS(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function zi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? pi : qn[s] ? s : h.activeBrushPresetId || pi;
  }
  function Sm() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (dm() || Ju());
  }
  function xm() {
    var i;
    return Sm() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ml(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, y;
  }
  function iS() {
    var P, C;
    if (!xm()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = zi(s), f = qn[l] || qn[pi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : sr(h.paintColor), x = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : ne(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), E = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : ne(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: y,
      fillStyle: Xr(_, x),
      strokeStyle: Xr(_, E),
      x: Number(((P = h.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function oS() {
    var L, U, K;
    const i = iS();
    if (!Ye) return;
    if (!i) {
      Ye.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", E = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Bc, l = Bc, f = "0", y = "0", _ = "none", P = UT, C = YT, m = tF(i.fillStyle, E, x);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Q = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Q), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((K = (U = i.preset) == null ? void 0 : U.angle) == null ? void 0 : K.value) || 0) * So;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Ye.style.display = "block", Ye.style.width = `${Math.round(s)}px`, Ye.style.height = `${Math.round(l)}px`, Ye.style.borderRadius = f, Ye.style.border = y, Ye.style.boxShadow = _, Ye.style.background = m, Ye.style.backgroundRepeat = "no-repeat", Ye.style.backgroundPosition = "center", Ye.style.backgroundSize = "contain", Ye.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function aS() {
    var me;
    if (!qe || !vt) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = zi(s), f = qn[l] || qn[pi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(6, m * 0.5), _ = s === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : sr(h.paintColor), E = i === "mask" ? Xr(x, 0.22) : _ ? "rgba(255,255,255,0.14)" : Xr(x, ne(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? Xr(x, 0.96) : _ ? "rgba(255,255,255,0.72)" : Xr(x, ne(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, L = y * 2, U = "999px", K = 0, Q = E;
    const ee = "rgba(222, 222, 222, 0.72)", le = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const oe = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, y * 2 * oe), L = Math.max(10, y * 2), U = `${Math.min(8, L * 0.42)}px`, K = Number(((me = f == null ? void 0 : f.angle) == null ? void 0 : me.value) || 0) * So;
    } else s === "brush" ? Q = `radial-gradient(circle at 50% 50%, ${P} 0%, ${E} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, y * 1.8), L = C, Q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : _ && (Q = "rgba(255,255,255,0.12)");
    vt.style.width = `${Math.round(C)}px`, vt.style.height = `${Math.round(L)}px`, vt.style.borderRadius = U, vt.style.background = Q, vt.style.border = `1px solid ${ee}`, vt.style.boxShadow = `0 0 0 1px ${le}`, vt.style.transform = `rotate(${K}deg)`, dt && (clearTimeout(dt), dt = 0), qe.classList.remove("fade-out"), qe.classList.add("show");
  }
  function Nl() {
    !qe || !qe.classList.contains("show") || (qe.classList.add("fade-out"), dt && clearTimeout(dt), dt = window.setTimeout(() => {
      qe.classList.remove("show", "fade-out"), dt = 0;
    }, 180));
  }
  function km(i, s, l, f) {
    const p = zi(s), m = qn[p] || qn[pi], y = h.brushSizes[p] ?? 10, _ = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), x = rS(f, _), E = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), P = {
      id: ra(i),
      actionGroupId: ra("ag"),
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
        rawPoints: E.map((C) => ({ ...C })),
        points: E.map((C) => ({ ...C }))
      }
    };
    return G0(P, m), h.mode, Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function Mm(i, s, l, f) {
    const p = l.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = zi(s), y = qn[m] || qn[pi], _ = {
      id: ra(i),
      actionGroupId: ra("ag"),
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
    return G0(_, y), h.mode, Number(y.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function Yo(i) {
    const s = w.painting || (w.painting = ga(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function sS(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const E = je();
      if (!E || (f = Tr(s, E, l), !f)) return !1;
    } else
      f = Or(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = p[p.length - 1];
    if (y) {
      const E = Math.abs(Number(f.u ?? f.x ?? 0) - Number(y.u ?? y.x ?? 0)), P = Math.abs(Number(f.v ?? f.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (E < 15e-4 && P < 15e-4) return !1;
    }
    const _ = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ..._ }), m.push({ ..._ });
    const x = ar();
    if (x) {
      const E = h.paintEngine.ensureTarget(x);
      h.paintEngine.appendStrokePoint(E, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function lS(i, s, l = performance.now()) {
    var y, _;
    let f;
    if (h.mode === "frame") {
      const x = je();
      if (!x) return !1;
      f = Tr(s, x, l);
    } else
      f = Or(s, l);
    const p = (_ = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const x = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), E = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && E < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function cS(i) {
    var oe, ve, Be, Je, lt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Xa();
    const l = ar(), f = Ba(l.width, l.height);
    if (!Bh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((ve = (oe = f.ctx) == null ? void 0 : oe.getImageData(0, 0, l.width, l.height)) == null ? void 0 : ve.data) || null;
    if (!p) return !1;
    const m = new Map(Cn().map((ke) => [String((ke == null ? void 0 : ke.actionGroupId) || (ke == null ? void 0 : ke.id) || "").trim(), ke ? { ...ke } : null])), y = [], _ = [], x = [...Un().filter((ke) => String((ke == null ? void 0 : ke.layerKind) || "paint") !== "paint")];
    let E = !1, P = Ro().reduce((ke, de) => Math.max(ke, Number((de == null ? void 0 : de.z_index) || 0)), -1) + 1;
    function C(ke, de, Se, $e = 8) {
      let He = de, it = Se, ct = -1, Rt = -1;
      for (let ut = 0; ut < Se; ut += 1)
        for (let an = 0; an < de; an += 1)
          ke[(ut * de + an) * 4 + 3] <= $e || (an < He && (He = an), ut < it && (it = ut), an > ct && (ct = an), ut > Rt && (Rt = ut));
      return ct < He || Rt < it ? null : { minX: He, minY: it, maxX: ct, maxY: Rt };
    }
    const L = C(p, l.width, l.height, 8);
    if (!L) return !1;
    function U(ke, de) {
      return !ke || !de ? !1 : !(ke.maxX < de.minX || de.maxX < ke.minX || ke.maxY < de.minY || de.maxY < ke.minY);
    }
    function K(ke, de) {
      const Se = Ii((ke == null ? void 0 : ke.actionGroupId) || (ke == null ? void 0 : ke.id) || "", "paint", de);
      if (!Se) return null;
      const $e = Se.centerUv.u - Se.halfW, He = Se.centerUv.u + Se.halfW, it = Se.centerUv.v - Se.halfH, ct = Se.centerUv.v + Se.halfH, Rt = l.width, ut = l.height;
      return {
        minX: Math.floor(($e % 1 + 1) % 1 * Rt),
        maxX: Math.ceil((He % 1 + 1) % 1 * Rt),
        minY: Math.floor(ne(it, 0, 1) * ut),
        maxY: Math.ceil(ne(ct, 0, 1) * ut),
        wraps: He - $e >= 1 || $e < 0 || He > 1
      };
    }
    function Q(ke) {
      const de = (ke == null ? void 0 : ke.bbox) || null;
      if (!de) return null;
      const Se = (ke == null ? void 0 : ke.transform) || {}, $e = l.width, He = l.height, it = Number(de.u0 || 0) + Number(Se.du || 0), ct = Number(de.u1 || 0) + Number(Se.du || 0), Rt = Number(de.v0 || 0) + Number(Se.dv || 0), ut = Number(de.v1 || 0) + Number(Se.dv || 0);
      return {
        minX: Math.floor((it % 1 + 1) % 1 * $e),
        maxX: Math.ceil((ct % 1 + 1) % 1 * $e),
        minY: Math.floor(ne(Rt, 0, 1) * He),
        maxY: Math.ceil(ne(ut, 0, 1) * He),
        wraps: ct - it >= 1 || it < 0 || ct > 1
      };
    }
    function ee(ke) {
      return ke ? ke.wraps ? U(L, { minX: 0, maxX: ke.maxX, minY: ke.minY, maxY: ke.maxY }) || U(L, { minX: ke.minX, maxX: l.width - 1, minY: ke.minY, maxY: ke.maxY }) : U(L, ke) : !0;
    }
    function le(ke) {
      if (!ke) return { touched: !1, canvas: null };
      const de = Ba(l.width, l.height, { readback: !0 });
      de.ctx.drawImage(ke, 0, 0);
      const Se = de.ctx.getImageData(0, 0, l.width, l.height);
      de.ctx.save(), de.ctx.globalCompositeOperation = "destination-out", de.ctx.drawImage(f.canvas, 0, 0), de.ctx.restore();
      const $e = de.ctx.getImageData(0, 0, l.width, l.height);
      for (let He = 0; He < l.width * l.height; He += 1) {
        if (p[He * 4 + 3] <= 8) continue;
        const ct = Se.data[He * 4 + 3], Rt = $e.data[He * 4 + 3];
        if (ct > Rt)
          return { touched: !0, canvas: de.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(ke, de, Se) {
      const $e = Number(Se == null ? void 0 : Se.z_index), He = rw(ke, de, Se).map((it, ct) => ({
        ...it,
        z_index: Number.isFinite($e) ? $e + ct * 1e-3 : P + ct * 1e-3
      }));
      return He.length && (P = Math.max(P, ...He.map((it) => Number((it == null ? void 0 : it.z_index) || 0))) + 1), He;
    }
    for (const ke of Cn()) {
      const de = String((ke == null ? void 0 : ke.actionGroupId) || (ke == null ? void 0 : ke.id) || "").trim();
      if (!de) continue;
      const Se = Cr(de, "paint");
      if (!ee(K(ke, Se))) {
        _.push(ke), y.push(...Se);
        continue;
      }
      const $e = ((Je = (Be = h.paintEngine) == null ? void 0 : Be.getGroupTarget) == null ? void 0 : Je.call(Be, de)) || null, He = ((lt = $e == null ? void 0 : $e.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!He) {
        _.push(ke), y.push(...Se);
        continue;
      }
      const it = le(He);
      if (!it.touched || !it.canvas) {
        _.push(ke), y.push(...Se);
        continue;
      }
      E = !0;
      const ct = me(it.canvas, "paint", m.get(de) || ke || {});
      x.push(...ct);
    }
    for (const ke of Un().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") === "paint")) {
      if (!ee(Q(ke))) {
        x.push(ke);
        continue;
      }
      const de = Ah(ke, null);
      if (!de) {
        x.push(ke);
        continue;
      }
      const Se = le(de);
      if (!Se.touched || !Se.canvas) {
        x.push(ke);
        continue;
      }
      E = !0;
      const $e = me(Se.canvas, "paint", ke);
      x.push(...$e);
    }
    return E ? (w.painting.paint.strokes = y, w.painting.groups = _.sort((ke, de) => Number((ke == null ? void 0 : ke.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), w.painting.raster_objects = x.sort((ke, de) => Number((ke == null ? void 0 : ke.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), ja({ preservePanelValues: !1 }), !0) : !1;
  }
  function uS(i) {
    var y, _, x, E, P;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.rawPoints) || ((E = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : E.points) || []).length >= 1) {
      Qu(i);
      const C = ar();
      C && (String(((P = i.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = km(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ar();
    m && h.paintEngine.beginStroke(p, m);
  }
  function fS(i) {
    var y, _;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      Qu(i);
      const x = ar();
      x && h.paintEngine.commitActiveStroke(i.stroke, x), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Mm(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ar();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Qu(i) {
    var m, y, _, x;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Wu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), cS(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && th((_ = i.stroke) == null ? void 0 : _.actionGroupId), Yo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Wu(p, i.stroke.targetSpace, !0), f && th((x = i.stroke) == null ? void 0 : x.actionGroupId), Yo(i.layerKind).push(i.stroke), !0);
  }
  function Nm(i) {
    var l;
    if (R && h.mode === "frame") {
      const f = je(), p = gn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const y = Tr(i, f, performance.now()), _ = y ? Ko(y) : null;
      if (_)
        for (const E of Gu()) {
          if (!Ct(E)) continue;
          const P = Ja(E, _);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const C = rn(E);
            if (C != null && C.visible) return { item: E, geom: C };
          }
        }
      const x = bu(!1).slice().sort((E, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0));
      for (const E of x) {
        if (E.type === "strokeGroup") {
          const L = $o(La("paint", E.actionGroupId || E.id || ""));
          if (!L) continue;
          const U = rn(L);
          if (!(U != null && U.visible)) continue;
          const K = Array.isArray(U.strokePaths) ? U.strokePaths : [];
          for (const Q of K) {
            const ee = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
            if (!ee.length) continue;
            if (Q.closed && ee.length >= 3 && Hi(i, ee)) return { item: L, geom: U };
            const le = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < ee.length - 1; me += 1)
              if (Yf(i, ee[me], ee[me + 1]) <= le * le) return { item: L, geom: U };
            if (ee.length === 1 && ks(i, ee[0]) <= le * le) return { item: L, geom: U };
          }
          continue;
        }
        if (E.type === "rasterObject") {
          const L = Vo(Ra(((l = E.item) == null ? void 0 : l.id) || E.id || ""));
          if (!L) continue;
          const U = rn(L);
          if (Ph(L, U, i, y)) return { item: L, geom: U };
          continue;
        }
        const P = E.item;
        if (!P || !Ct(P) || !_) continue;
        const C = Ja(P, _);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const L = rn(P);
          if (L != null && L.visible) return { item: P, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...bu(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? $o(La("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Vo(Ra(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...R ? Gu().filter((f) => un(f)) : []
    ];
    for (const f of s) {
      if (fn(f)) {
        const m = rn(f);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of y) {
          const x = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!x.length) continue;
          if (_.closed && x.length >= 3 && Hi(i, x)) return { item: f, geom: m };
          const E = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < x.length - 1; P += 1)
            if (Yf(i, x[P], x[P + 1]) <= E * E) return { item: f, geom: m };
          if (x.length === 1 && ks(i, x[0]) <= E * E) return { item: f, geom: m };
        }
        continue;
      }
      if (xn(f)) {
        const m = rn(f);
        if (!(m != null && m.visible)) continue;
        if (Ph(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = rn(f);
      if (p.visible && Hi(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function as(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (Ct(l)) return Dd(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => ks(m, s) <= 121);
      if (f >= 0) {
        const m = i.corners[f], y = m.x - i.center.x, _ = m.y - i.center.y, x = y * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: x };
      }
      const p = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of p) {
        const y = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && y.length >= 3 && Hi(s, y)) return { kind: "move", cursor: "default" };
        const _ = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < y.length - 1; x += 1)
          if (Yf(s, y[x], y[x + 1]) <= _ * _) return { kind: "move", cursor: "default" };
      }
      return Hi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => ks(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, y = p.y - i.center.y, _ = m * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: _ };
      }
      return Hi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return pA(i, s, {
      edges: t === "cutout" || un(l),
      resize: !(un(l) && io()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function Pm(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function dS(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function pS(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => dS(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Hi({ x: l, y: f }, s.corners);
  }
  function bt(i) {
    if (oS(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Tt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Tt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? Tt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Tt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Tt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Tt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Tt("grabbing") : Tt("default");
      return;
    }
    if (xm()) {
      Tt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Tt(GT);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Tt("default");
        return;
      }
      Tt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Tt("default");
      return;
    }
    if (h.gizmoAxis) {
      Tt("grab");
      return;
    }
    const s = Lt(), l = s ? rn(s) : null, f = s ? kn(s) : !1, p = f ? { kind: "none", cursor: "default" } : as(l, i, s);
    if (!f && p.kind !== "none") {
      Tt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Nm(i)) {
      Tt("default");
      return;
    }
    Tt(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!we) return;
    if (Te = !1, h.mode === "frame") {
      T.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || mr() && hr()) {
      const p = hS();
      Te = p.visible, Am(p);
      return;
    }
    const i = Lt(), s = or();
    if (!i && s.length === 0 || h.interaction) {
      T.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = za(), f = kI({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? $a(s) : rn(i),
      allLocked: Su(s),
      anyLocked: s.some((p) => kn(p)),
      selectedLocked: kn(i),
      activeAspect: un(i) && io() ? Sa : gi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Yt,
      isStickerHidden: zo,
      canRestoreSelectedToInitial: Fv,
      iconSet: Pe,
      cameraShot: $,
      cameraDeletable: O,
      erpChoice: O,
      coverage: w.coverage
    });
    Am(f);
  }
  function hS() {
    const i = oo() && !h.interaction ? Ir().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Xo(), l = i.stickers.find((y) => y.id === h.worldSelectedId), p = (l ? Dp(l) : [i.gizmo.transform.position]).map((y) => Us(s, y, I.width, I.height)).filter(Boolean), m = U2(s, i.gizmo.transform.position, i.gizmo.mode, I.width, I.height);
    return MI({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: mr(), deletable: O && mr() });
  }
  function Am(i) {
    var m, y;
    if (!i.visible) {
      T.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (_, x) => NI(i.anchor, _, x, I.width, I.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((y = h.menuSize) == null ? void 0 : y.h) || 40)), p = s(l, f);
    if (!p) {
      T.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    T.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, Fe.requestFrame(() => {
      if (!we || T.selectionMenu.visible !== !0) return;
      const _ = we.getBoundingClientRect(), x = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, E = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40;
      h.menuSize = { w: x, h: E, measured: !0 };
      const P = s(x, E);
      P && (T.selectionMenu.left = P.left, T.selectionMenu.top = P.top);
    });
  }
  function so() {
    Pt.timer && (clearTimeout(Pt.timer), Pt.timer = 0), Pt.target = null, T.tooltip.visible = !1;
  }
  function mS(i) {
    if (!Ne || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    T.tooltip.text = s, T.tooltip.visible = !0;
    const l = i;
    Fe.requestFrame(() => {
      var Q, ee;
      if (Pt.target !== l || !Ne || !(l != null && l.isConnected)) return;
      const f = ce.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, y = 12, _ = Math.round(Number(((Q = Ne.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, x = Math.round(Number(((ee = Ne.getBoundingClientRect()) == null ? void 0 : ee.height) || 0)) || 24, E = !!l.closest(".pano-floating-left"), P = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let L = "", U = p.left - f.left + p.width * 0.5 - _ * 0.5, K = p.top - f.top - x - y;
      if (l.closest(".pano-floating-top") && (K = p.bottom - f.top + y), E)
        L = "tool-rail", U = p.right - f.left + 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, U = ne(U, m, Math.max(m, f.width - _ - m)), K = ne(K, m, Math.max(m, f.height - x - m));
      else if (P)
        L = "frame-rail", U = p.left - f.left - _ - 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, U = ne(U, m, Math.max(m, f.width - _ - m)), K = ne(K, m, Math.max(m, f.height - x - m));
      else if (C) {
        L = "footer";
        const le = l.closest(".pano-paint-footer"), me = le ? le.getBoundingClientRect() : p;
        U = me.left - f.left + me.width * 0.5 - _ * 0.5, K = me.bottom - f.top + 5, U = ne(U, m, Math.max(m, f.width - _ - m)), K = Math.max(m, K);
      }
      U = ne(U, m, Math.max(m, f.width - _ - m)), K = Math.max(m, K), T.tooltip.left = U, T.tooltip.top = K, T.tooltip.variant = L, T.tooltip.visible = !0;
    });
  }
  const on = mp({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = jt(Number(i.yaw || 0)), h.viewPitch = ne(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = ne(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || I.clientWidth || 0)),
        h: Math.max(1, Number(i.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = w.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = w.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Li,
    onInteraction: () => Fe.requestDraw(mt.VIEW)
  });
  function gS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += ub(s, i.lastAngle), i.lastAngle = s;
    const f = fb(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = T.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    p && (p.value = f, p.displayValue = na(f), p.fillPct = (f + 180) / 360 * 100), fi(), ef(i), ue({ localOnly: !0 });
  }
  function yS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = D1(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = T.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = na(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), fi(), ef(i), ue({ localOnly: !0 });
  }
  function Cm(i, s) {
    const l = $i(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  }
  function ef(i) {
    var y, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Pt.timer && (clearTimeout(Pt.timer), Pt.timer = 0), Pt.target = null;
    const s = gn(i.shot), l = (y = I.getBoundingClientRect) == null ? void 0 : y.call(I), f = (_ = ce.getBoundingClientRect) == null ? void 0 : _.call(ce);
    if (!s || !l || !f || I.width <= 0 || I.height <= 0) return;
    const p = l.width / I.width, m = l.height / I.height;
    T.tooltip.text = `${na(i.shot.roll_deg)}°`, T.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, T.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, T.tooltip.variant = "roll", T.tooltip.visible = !0;
  }
  function bS(i) {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = je();
    if (!s || s.locked === !0) return;
    const l = gn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Cm(i, f);
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
    }, (m = q.setPointerCapture) == null || m.call(q, i.pointerId), i.preventDefault(), fi(), ef(h.interaction), ue({ localOnly: !0 });
  }
  q == null || q.addEventListener("pointerdown", bS);
  function vS(i) {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || gS(
      h.interaction,
      Cm(i, h.interaction.center),
      i
    );
  }
  q == null || q.addEventListener("pointermove", vS);
  function _S() {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (tt(), st(), ze()), h.interaction = null, so(), ci(), fi(), ue());
  }
  q == null || q.addEventListener("pointerup", _S), q == null || q.addEventListener("pointercancel", () => os()), q == null || q.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && os();
  });
  function wS(i) {
    const s = h.mode === "frame" && !r ? je() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, tt(), st(), ze(), fi(), ue(), i.preventDefault());
  }
  q == null || q.addEventListener("dblclick", wS);
  function SS(i) {
    Ge.selection && (Ge.selection = null, Kr());
    const s = $i(i);
    tn = s, Ml(s, !0), Fa(), on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0;
    const l = hr(), f = Zu(), p = l || f ? PA(Eu(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? wm(s, i.pointerId) : Qw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const P = xl(i);
      h.interaction = { kind: "view", last: P, lastTs: performance.now() }, on.startDrag(P.x, P.y, i.pointerId, performance.now()), bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), Mh(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const P = je();
        if (!P || r || P.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: P,
          last: s,
          start: {
            yaw_deg: Number(P.yaw_deg || 0),
            pitch_deg: Number(P.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const P = h.mode === "unwrap" ? s : xl(i);
        h.interaction = { kind: "view", last: P, lastTs: performance.now() }, on.startDrag(P.x, P.y, i.pointerId, performance.now());
      }
      bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const P = je(), C = gn(P);
      if (!P || P.locked === !0 || !C) return;
      const L = F1({
        frame: C,
        point: s,
        startRollDeg: Number(P.roll_deg ?? P.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!L) return;
      h.interaction = {
        kind: "roll_frame",
        shot: P,
        center: L.center,
        lastAngle: L.lastAngle,
        accumulatedRad: L.accumulatedRad,
        rollGesture: L,
        start: { roll_deg: Number(P.roll_deg ?? P.rot_deg ?? 0) },
        changed: !1,
        altStarted: L.source === "alt",
        source: L.source
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), fi(), ue({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      wm(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && Om(i, s);
      return;
    }
    if (Me && !Me.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (dm() || Ju())) {
      if (!ul()) return;
      Nn();
      const P = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, L = h.mode === "frame" && Ju() ? je() : null, U = { kind: "ERP_GLOBAL" }, K = L ? Tr(s, L, performance.now()) : Or(s, performance.now());
      if (!K) {
        bt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: P,
        _livePreviewToken: ra("live"),
        stroke: C === "lasso_fill" ? Mm(P, C, [K], U) : km(P, C, [K], U)
      }, Ho();
      const Q = ar(h.interaction);
      if (Q)
        if (h.paintEngine.beginStroke(h.interaction.stroke, Q), h.interaction.kind === "paint_stroke") {
          const ee = h.paintEngine.ensureTarget(Q), le = Number((K == null ? void 0 : K.u) ?? (K == null ? void 0 : K.x) ?? 0), me = Number((K == null ? void 0 : K.v) ?? (K == null ? void 0 : K.y) ?? 0);
          h.paintEngine.appendStrokePoint(ee, le, me, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, Q);
      bt(s), I.setPointerCapture(i.pointerId), ue();
      return;
    }
    const m = or(), y = Lt(), _ = m.length > 1 ? $a(m) : y ? rn(y) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, bt(s), I.setPointerCapture(i.pointerId), ue({ localOnly: !0, reason: mt.OVERLAY });
      return;
    }
    if (h.primaryTool === "cursor" && jr() && hr() && S_(i, s) || h.primaryTool === "cursor" && N && oo() && xS(i, s)) return;
    if (m.length > 1 && (_ != null && _.visible)) {
      if ((m.some((C) => kn(C)) ? { kind: "none" } : as(_, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - _.center.x, y: s.y - _.center.y },
          startCenter: { x: _.center.x, y: _.center.y },
          stickerSnapshots: m.filter((C) => Ct(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(cn(C).yaw_deg || 0),
            pitch_deg: Number(cn(C).pitch_deg || 0),
            center: (() => {
              var U, K;
              const L = rn(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => fn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: En(Cr(C.actionGroupId, C.layerKind)),
            frameSnapshot: En(Ii(C.actionGroupId, C.layerKind)),
            center: (() => {
              var U, K;
              const L = rn(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: wu(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => xn(C)).map((C) => ({
            id: vn(C.rasterObjectId || C.id || ""),
            snapshot: En(Un().find((L) => String((L == null ? void 0 : L.id) || "") === vn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var U, K;
              const L = rn(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Th(C)
          }))
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (y && (_ != null && _.visible)) {
      const P = kn(y) ? { kind: "none" } : as(_, s, y);
      if (P.kind === "scale") {
        h.interaction = fn(y) ? {
          kind: "scale_stroke_group",
          item: y,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          snapshot: En(Cr(y.actionGroupId, y.layerKind)),
          frameSnapshot: En(Ii(y.actionGroupId, y.layerKind)),
          cursor: P.cursor
        } : xn(y) ? {
          kind: "scale_raster_object",
          item: y,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          snapshot: En(Un().find((C) => String((C == null ? void 0 : C.id) || "") === vn(y.rasterObjectId || y.id || ""))),
          cursor: P.cursor
        } : {
          kind: "scale",
          item: y,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          startHFOV: Number(cn(y).hFOV_deg || 20),
          startVFOV: Number(cn(y).vFOV_deg || 20),
          cursor: P.cursor
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "scale_x" || P.kind === "scale_y") {
        h.interaction = {
          kind: P.kind,
          item: y,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          startHFOV: Number(cn(y).hFOV_deg || 20),
          startVFOV: Number(cn(y).vFOV_deg || 20),
          cursor: P.cursor,
          edge: P.edge
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "rotate") {
        h.interaction = fn(y) ? {
          kind: "rotate_stroke_group",
          item: y,
          center: _.center,
          startAng: Math.atan2(s.y - _.center.y, s.x - _.center.x),
          snapshot: En(Cr(y.actionGroupId, y.layerKind)),
          frameSnapshot: En(Ii(y.actionGroupId, y.layerKind))
        } : {
          kind: "rotate",
          item: y,
          center: _.center,
          startRot: Number(cn(y).rot_deg || cn(y).roll_deg || 0),
          startAng: Math.atan2(s.y - _.center.y, s.x - _.center.x)
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "move") {
        if (fn(y)) {
          const C = h.mode === "frame" ? (() => {
            const L = je();
            return L ? Tr(s, L, performance.now()) : null;
          })() : Or(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: y,
            startUv: C,
            snapshot: En(Cr(y.actionGroupId, y.layerKind)),
            frameSnapshot: En(Ii(y.actionGroupId, y.layerKind))
          }, bt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (xn(y)) {
          const C = h.mode === "frame" ? (() => {
            const L = je();
            return L ? Tr(s, L, performance.now()) : null;
          })() : Or(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: y,
            startUv: C,
            snapshot: En(Un().find((L) => String((L == null ? void 0 : L.id) || "") === vn(y.rasterObjectId || y.id || "")))
          }, bt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: y,
          offset: { x: s.x - _.center.x, y: s.y - _.center.y }
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const x = Nm(s);
    if (x) {
      const P = h.selectedId !== x.item.id;
      if (P && h.selectedId && (tt(), jn()), zn(x.item), R && P && (h.cutoutAspectOpen = !1), P && ze(), Ke(), ue(), kn(x.item)) {
        bt(s);
        return;
      }
      h.interaction = {
        kind: fn(x.item) ? "move_stroke_group" : xn(x.item) ? "move_raster_object" : "move",
        item: x.item,
        offset: { x: s.x - x.geom.center.x, y: s.y - x.geom.center.y },
        startUv: fn(x.item) || xn(x.item) ? h.mode === "frame" ? (() => {
          const C = je();
          return C ? Tr(s, C, performance.now()) : null;
        })() : Or(s, performance.now()) : null,
        snapshot: fn(x.item) ? En(Cr(x.item.actionGroupId, x.item.layerKind)) : xn(x.item) ? En(Un().find((C) => String((C == null ? void 0 : C.id) || "") === vn(x.item.rasterObjectId || x.item.id || ""))) : null,
        frameSnapshot: fn(x.item) ? En(Ii(x.item.actionGroupId, x.item.layerKind)) : null
      }, bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const E = !!h.selectedId;
    E && (tt(), jn()), ja(), E && ze(), Ke(), ue(), h.mode === "pano" && Om(i, s);
  }
  I.onpointerdown = SS;
  function Xo() {
    return Ff(Mn(), I.width, I.height, Hr());
  }
  function lo(i, s) {
    return Ee.gizmoPointer(i, Xo(), s.x, s.y, I.width, I.height);
  }
  function xS(i, s) {
    var _;
    const l = (_ = Ir().space) == null ? void 0 : _.gizmo;
    if (l && lo("hover", s) !== null && lo("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: Io(no(), h.frame),
        changed: !1
      }, I.setPointerCapture(i.pointerId), bt(s), !0;
    const f = or(), p = Lt(), m = f.length > 1 ? f.some((x) => kn(x)) ? "none" : as($a(f), s).kind : p && !kn(p) ? as(rn(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const y = Ee.pickSticker(Xo(), s.x, s.y, I.width, I.height);
    return w.stickers.some((x) => x.id === y && x.placement === "world") ? (h.worldSelectedId !== y && (h.selectedId && (tt(), jn()), Cu(y), ze(), Ke(), zr(), ue()), h.interaction = { kind: "world_select" }, I.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Im(i) {
    var f;
    const l = !!(h.worldSelectedId || mr()) && h.primaryTool === "cursor" && oo() && !!((f = Ir().space) != null && f.gizmo) ? lo("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, ie.backgroundDirty = !0, ue({ localOnly: !0, reason: mt.VIEW }));
  }
  function kS(i, s) {
    const l = lo("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(s0(i.mode, i.base, i.start, l))) Ln(w.camera, p, h.frame, m);
      gr(), i.changed = !0, Ue.request("sidePanel"), ue({ localOnly: !0 });
      return;
    }
    const f = w.stickers.find((p) => p.id === i.id);
    !l || !f || (y2(f, h.frame, s0(i.mode, i.base, i.start, l)), i.changed = !0, zt(), Ue.request("sidePanel"), ue({ localOnly: !0 }));
  }
  function Em(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (lo("up", h.pointerPos), ie.backgroundDirty = !0, i.changed && (tt(), st(), ze())), bt(h.pointerPos), ue();
  }
  function Om(i, s) {
    if (hr()) {
      const f = Eu().emptyLeft;
      f && Mh(f, s, i.pointerId);
      return;
    }
    const l = xl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, on.startDrag(l.x, l.y, i.pointerId, performance.now()), bt(s), I.setPointerCapture(i.pointerId);
  }
  function MS(i, s) {
    if (!k || !Ut.playing || (Ut.stop(), i.kind === "frame_pan")) return;
    if (i.kind === "frame_orbit") {
      const p = rs();
      p && (i.pivot = bm(p, is(p), s));
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = w.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = ao() : p && (i.base = Io(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = $a(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((x) => String((x == null ? void 0 : x.id) || "") === m.id), _ = y ? rn(y) : null;
        _ != null && _.visible && (m.yaw_deg = Number(cn(y).yaw_deg || 0), m.pitch_deg = Number(cn(y).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = rn(i.item);
    if (!(l != null && l.visible)) return;
    const f = cn(i.item);
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
  function NS(i) {
    var f, p, m, y, _, x, E, P, C, L, U, K, Q, ee, le, me, oe, ve, Be, Je, lt, ke;
    const s = $i(i);
    if (Ml(s, !0), !h.interaction) {
      Im(s), bt(s);
      return;
    }
    bt(s);
    const l = h.interaction;
    if (tn && (s.x !== tn.x || s.y !== tn.y)) {
      const de = tn;
      tn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || MS(l, de);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        kS(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let Se = !1;
        de.forEach(($e) => {
          const He = $i($e);
          if (h.mode === "frame") {
            const it = je(), ct = it ? gn(it) : null;
            if (ct) {
              const Rt = (He.x - ct.x) / Math.max(1, ct.w), ut = (He.y - ct.y) / Math.max(1, ct.h);
              if (!(Rt >= 0 && Rt <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, uS(l));
            }
          }
          sS(l, He, performance.now()) && (Se = !0);
        }), Se && ue({ localOnly: !0, reason: mt.PAINT });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let Se = !1;
        if (de.forEach(($e) => {
          const He = $i($e);
          if (h.mode === "frame") {
            const it = je(), ct = it ? gn(it) : null;
            if (ct) {
              const Rt = (He.x - ct.x) / Math.max(1, ct.w), ut = (He.y - ct.y) / Math.max(1, ct.h);
              if (!(Rt >= 0 && Rt <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, fS(l));
            }
          }
          lS(l, He, performance.now()) && (Se = !0);
        }), Se) {
          const $e = ar();
          $e && h.paintEngine.updateActiveStroke(l.stroke, $e), ue({ localOnly: !0, reason: mt.PAINT });
        }
        return;
      }
      if (l.kind === "view") {
        const de = performance.now(), Se = h.mode === "unwrap" ? s : xl(i);
        on.moveDrag(Se.x, Se.y, h.mode === "unwrap" ? "unwrap" : "pano", de), l.lastTs = de, l.last = Se, ue({ localOnly: !0, reason: mt.VIEW });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        eS(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const de = Mn();
        wh(l.kind === "space_pan" ? n0(de, s.x - l.last.x, s.y - l.last.y, I.width, I.height, l.depth) : t0(de, s.x - l.last.x, s.y - l.last.y, I.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const de = kl(l.shot);
        if (!de || !l.shot) return;
        const Se = s.x - l.last.x, $e = s.y - l.last.y, He = L1(l.shot, {
          dx: Se,
          dy: $e,
          focalPx: de.focalPx,
          invertX: ((f = w.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = w.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = He.yaw_deg, l.shot.pitch_deg = He.pitch_deg, l.changed = l.changed || Math.abs(Se) > 0 || Math.abs($e) > 0, l.last = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        yS(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const de = s.x - l.offset.x, Se = s.y - l.offset.y;
        if (h.mode === "frame" && R) {
          const $e = je(), He = gn($e);
          if (!$e || !He) return;
          const it = {
            x: ne((de - He.x) / Math.max(1, He.w), 0, 1),
            y: ne((Se - He.y) / Math.max(1, He.h), 0, 1)
          }, ct = Ku($e, it);
          if (!ct) return;
          const Rt = Gl(ct);
          Ar(l.item, { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch });
        } else if (h.mode === "unwrap") {
          const $e = Li(), He = ne((de - $e.x) / Math.max($e.w, 1), 0, 1), it = ne((Se - $e.y) / Math.max($e.h, 1), 0, 1);
          Ar(l.item, { yaw_deg: jt(He * 360 - 180), pitch_deg: ne(90 - it * 180, -90, 90) });
        } else {
          const $e = Fu(de, Se), He = Gl($e);
          Ar(l.item, { yaw_deg: He.yaw, pitch_deg: He.pitch });
        }
        Ct(l.item) && zt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const de = h.mode === "frame" ? (() => {
          const He = je();
          return He ? Tr(s, He, performance.now()) : null;
        })() : Or(s, performance.now());
        if (!de || !l.startUv) return;
        const Se = pr(Number(de.u || 0), Number(l.startUv.u || 0)), $e = Number(de.v || 0) - Number(l.startUv.v || 0);
        rh((m = l.item) == null ? void 0 : m.actionGroupId, Se, $e, l.snapshot, (y = l.item) == null ? void 0 : y.layerKind, l.frameSnapshot) && (Er({ rebuildPaintEngine: !1 }), ue({ localOnly: !0, reason: mt.PAINT }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const de = h.mode === "frame" ? (() => {
          const He = je();
          return He ? Tr(s, He, performance.now()) : null;
        })() : Or(s, performance.now());
        if (!de || !l.startUv) return;
        const Se = pr(Number(de.u || 0), Number(l.startUv.u || 0)), $e = Number(de.v || 0) - Number(l.startUv.v || 0);
        oh(((_ = l.item) == null ? void 0 : _.rasterObjectId) || ((x = l.item) == null ? void 0 : x.id) || "", Se, $e, l.snapshot) && (Wo(), ue({ localOnly: !0, reason: mt.PAINT }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        kv(((E = l.item) == null ? void 0 : E.rasterObjectId) || ((P = l.item) == null ? void 0 : P.id) || "", Se, l.snapshot) && (Wo(), ue({ localOnly: !0, reason: mt.PAINT }));
        return;
      }
      if (l.kind === "move_multi") {
        const de = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), Se = s.y - Number(((L = l.offset) == null ? void 0 : L.y) || 0);
        let $e = !1, He = !1, it = !1;
        const ct = de - Number(((U = l.startCenter) == null ? void 0 : U.x) || de), Rt = Se - Number(((K = l.startCenter) == null ? void 0 : K.y) || Se);
        for (const ut of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const an = (t === "cutout" ? _u() : li()).find((Xt) => String((Xt == null ? void 0 : Xt.id) || "") === String(ut.id || ""));
          if (!an || !Ct(an)) continue;
          const Xn = {
            x: Number(((Q = ut.center) == null ? void 0 : Q.x) || 0) + ct,
            y: Number(((ee = ut.center) == null ? void 0 : ee.y) || 0) + Rt
          };
          if (h.mode === "frame" && R) {
            const Xt = je(), dn = gn(Xt);
            if (!Xt || !dn) continue;
            const co = {
              x: ne((Xn.x - dn.x) / Math.max(1, dn.w), 0, 1),
              y: ne((Xn.y - dn.y) / Math.max(1, dn.h), 0, 1)
            }, eg = Ku(Xt, co);
            if (!eg) continue;
            const tg = Gl(eg);
            Ar(an, { yaw_deg: tg.yaw, pitch_deg: tg.pitch });
          } else if (h.mode === "unwrap") {
            const Xt = Li(), dn = ne((Xn.x - Xt.x) / Math.max(Xt.w, 1), 0, 1), co = ne((Xn.y - Xt.y) / Math.max(Xt.h, 1), 0, 1);
            Ar(an, { yaw_deg: jt(dn * 360 - 180), pitch_deg: ne(90 - co * 180, -90, 90) });
          } else {
            const Xt = Fu(Xn.x, Xn.y), dn = Gl(Xt);
            Ar(an, { yaw_deg: dn.yaw, pitch_deg: dn.pitch });
          }
          $e = !0;
        }
        for (const ut of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const an = {
            x: Number(((le = ut.center) == null ? void 0 : le.x) || 0) + ct,
            y: Number(((me = ut.center) == null ? void 0 : me.y) || 0) + Rt
          }, Xn = h.mode === "frame" ? (() => {
            const dn = je();
            return dn ? Tr(an, dn, performance.now()) : null;
          })() : Or(an, performance.now()), Xt = ut.centerUv || null;
          if (Xn && Xt) {
            const dn = pr(Number(Xn.u || 0), Number(Xt.u || 0)), co = Number(Xn.v || 0) - Number(Xt.v || 0);
            rh(ut.id, dn, co, ut.snapshot, ut.layerKind, ut.frameSnapshot) && ($e = !0, He = !0);
          }
        }
        for (const ut of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const an = {
            x: Number(((oe = ut.center) == null ? void 0 : oe.x) || 0) + ct,
            y: Number(((ve = ut.center) == null ? void 0 : ve.y) || 0) + Rt
          }, Xn = h.mode === "frame" ? (() => {
            const dn = je();
            return dn ? Tr(an, dn, performance.now()) : null;
          })() : Or(an, performance.now()), Xt = ut.centerUv || null;
          if (Xn && Xt) {
            const dn = pr(Number(Xn.u || 0), Number(Xt.u || 0)), co = Number(Xn.v || 0) - Number(Xt.v || 0);
            oh(ut.id, dn, co, ut.snapshot) && ($e = !0, it = !0);
          }
        }
        $e && (He ? Er({ rebuildPaintEngine: !1 }) : it ? Wo() : zt(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        ih((Be = l.item) == null ? void 0 : Be.actionGroupId, Se, 0, l.snapshot, (Je = l.item) == null ? void 0 : Je.layerKind, l.frameSnapshot) && (Er({ rebuildPaintEngine: !1 }), ue({ localOnly: !0, reason: mt.PAINT }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let de = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * So;
        i.shiftKey && (de = Math.round(de / 45) * 45), ih((lt = l.item) == null ? void 0 : lt.actionGroupId, 1, de, l.snapshot, (ke = l.item) == null ? void 0 : ke.layerKind, l.frameSnapshot) && (Er({ rebuildPaintEngine: !1 }), ue({ localOnly: !0, reason: mt.PAINT }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ue({ localOnly: !0, reason: mt.OVERLAY });
        return;
      }
      if (l.kind === "scale") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Ar(l.item, { hFOV_deg: ne(l.startHFOV * Se, 1, 179), vFOV_deg: ne(l.startVFOV * Se, 1, 179) }), Bn(l.item) || (l.item.aspect_id = wo(l.item)), Ct(l.item) && zt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Ar(l.item, { hFOV_deg: ne(l.startHFOV * Se, 1, 179) }), Bn(l.item) || (l.item.aspect_id = wo(l.item)), Ct(l.item) && zt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Ar(l.item, { vFOV_deg: ne(l.startVFOV * Se, 1, 179) }), Bn(l.item) || (l.item.aspect_id = wo(l.item)), Ct(l.item) && zt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let Se = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * So, $e = l.startRot - Se;
        i.shiftKey && ($e = Math.round($e / 45) * 45), Ar(l.item, { [Ct(l.item) ? "rot_deg" : "roll_deg"]: $e }), Ct(l.item) && zt(), ue({ localOnly: !0 });
      }
    }
  }
  I.onpointermove = NS;
  function PS() {
    var s, l, f, p, m, y, _;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, bt(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        Em(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ho();
        const x = Qu(h.interaction), E = !!h.interaction._hasCommittedSegments;
        if (x || E) {
          Er();
          const P = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (P) {
            const L = Cn().find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === P);
            L && (L.frame = null);
          }
          const C = ar(h.interaction);
          C && (x ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), Gh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), tt(), jn(), ze(), Ke(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const P = ar(h.interaction);
          P && h.paintEngine.cancelActiveStroke(P);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const x = Pm(h.interaction.start, h.interaction.current), P = [
          ...t === "cutout" ? Gu().filter((C) => !un(C)) : [...li()],
          ..._v(),
          ...wv()
        ].filter((C) => pS(x, rn(C)));
        Pv(P, ((y = P[P.length - 1]) == null ? void 0 : y.id) || null), R && P.length && (h.cutoutAspectOpen = !1), ze(), Ke(), ue();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((_ = h.interaction) == null ? void 0 : _.kind))
        h.interaction.changed && (tt(), st(), ze());
      else if (h.interaction && h.interaction.kind !== "view") {
        let x = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (x = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (x = !0), x && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Er({ rebuildPaintEngine: !0 }) : Wo()), tt(), jn(), e.setDirtyCanvas(!0, !0), Uo(), Ke(), ue();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && so(), Ho(), i && i.kind === "view" && Za(() => on.endDrag(performance.now())), ci(), Ke(), bt(h.pointerPos), ue();
    }
  }
  I.onpointerup = PS;
  function AS() {
    var i, s, l, f, p;
    if (!os()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        Em(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && Za(() => on.endDrag(performance.now())), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Ho();
        const m = ar(h.interaction);
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Ho(), ci(), bt(h.pointerPos), ue({ localOnly: !0 });
    }
  }
  I.onpointercancel = AS, I.onlostpointercapture = () => {
    os();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.oncontextmenu = (i) => {
    (hr() || Zu()) && AA(Eu(), 2) && i.preventDefault();
  };
  function CS(i) {
    const s = $i(i), l = Ml(s, !0);
    h.interaction || (bt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0, reason: mt.OVERLAY }));
  }
  I.onmousemove = CS, I.onpointerleave = () => {
    h.interaction || Im({ x: -1e6, y: -1e6 });
  }, I.onmouseleave = () => {
    Ml(h.pointerPos, !1), bt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0, reason: mt.OVERLAY });
  };
  function IS(i) {
    if (h.mode === "frame") {
      const s = $i(i), l = kc(i);
      l && Nn(), l && Zu() ? tS(s, -l) : l && Zw(s, l) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Fa(), hr()) {
        const s = kc(i);
        s && qv($i(i), -s);
      } else on.applyWheelEvent(i) && ue({ localOnly: !0, reason: mt.VIEW });
      i.preventDefault();
    }
  }
  I.onwheel = IS;
  function ES(i) {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), eo(!0));
  }
  I.ondragover = ES;
  function OS(i) {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Sn.depth = 0, eo(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Lr(p));
    l && im(l);
  }
  I.ondrop = OS;
  function Tm(i) {
    t !== "stickers" && t !== "cutout" || r || hu(i) && (Sn.depth += 1, eo(!0), i.preventDefault());
  }
  function Fm(i) {
    t !== "stickers" && t !== "cutout" || r || (!Sn.active && hu(i) && eo(!0), Sn.active && i.preventDefault());
  }
  function Dm(i) {
    if (t !== "stickers" && t !== "cutout" || r || !Sn.active) return;
    Sn.depth = Math.max(0, Sn.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Sn.depth === 0 || s) && eo(!1);
  }
  function Lm(i) {
    t !== "stickers" && t !== "cutout" || r || (Sn.depth = 0, eo(!1), hu(i) && i.preventDefault());
  }
  window.addEventListener("dragenter", Tm, !0), window.addEventListener("dragover", Fm, !0), window.addEventListener("dragleave", Dm, !0), window.addEventListener("drop", Lm, !0);
  function Rm() {
    const { canUndo: i, canRedo: s } = Zp();
    ta(T.toolButtons, "value", "undo", { disabled: !i }), ta(T.toolButtons, "value", "redo", { disabled: !s });
  }
  function Vm(i, s, l = !1) {
    var E;
    Nn();
    const f = R && h.mode === "frame" ? je() : null, p = f || Lt(), m = f ? "shot" : za(), y = no();
    if (y && !cl(y) || !y && (!p || m === "stroke" || kn(p))) return;
    const _ = (((E = T.sidePanel) == null ? void 0 : E.params) || []).find((P) => P.key === i);
    if (!_ || _.enabled === !1) return;
    let x = Number(s);
    if (Number.isNaN(x) && (x = 0), (y || $) && DT.has(i) ? x = i === "scale" ? Math.max(x, W0) : x : x = ne(x, Number(_.min), Number(_.max)), i === "yaw_deg" && (x = jt(x)), !y && $ && i.startsWith("position_")) {
      gr(), p2(w.camera, h.frame, i, x), ze(), ue(), l && tt();
      return;
    }
    if (y) {
      g2(y, h.frame, i, x), zt(), ze(), ue(), l && tt();
      return;
    }
    i === "opacity" ? h2(p, h.frame, x / 100) : Ar(p, { [i]: x }), R && !Bn(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = wo(p)), ze(), ue(), l && tt();
  }
  async function TS(i) {
    var f, p, m, y, _, x, E;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const P = er(s.getAttribute("data-coverage"));
      if (P === er(w.coverage)) return;
      w.coverage = P, h.coverage = P, d && (d.value = String(P)), a ? ie.backgroundDirty = !0 : (jn(), qw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Ke(), ue();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = T.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      T.sidePanel.selectionPicker.open = !T.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      T.sidePanel.selectionPicker.open = !1;
      const P = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (P && (t === "stickers" ? C = [...li(), ...O ? w.shots : []].find((L) => String((L == null ? void 0 : L.id) || "") === P) || null : C = ((m = sh().find((L) => {
        var U;
        return String(((U = L == null ? void 0 : L.item) == null ? void 0 : U.id) || "") === P;
      })) == null ? void 0 : m.item) || null), zn(C || null), C && !fn(C)) {
        const L = cn(C);
        eh(jt(Number(L.yaw_deg || 0)), ne(Number(L.pitch_deg || 0), -89.9, 89.9));
      }
      ze(), Ke(), ue();
      return;
    }
    if (l === "copy-state-inline") {
      const P = Lt(), C = za();
      if (!P || C === "stroke" || or().length > 1) return;
      const L = JSON.stringify(R && C !== "image" ? gh(P) : zv(cn(P)));
      try {
        await navigator.clipboard.writeText(L), (y = T.sidePanel) != null && y.copyStateButton && (T.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var U;
          (U = T.sidePanel) != null && U.copyStateButton && (T.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "set-invert-x") {
      w.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", qu(), ze(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), ue();
      return;
    }
    if (l === "set-invert-y") {
      w.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", qu(), ze(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ue();
      return;
    }
    if (l === "ui-reset-defaults") {
      w.ui_settings.invert_view_x = !1, w.ui_settings.invert_view_y = !1, qu(), ze(), (E = e.setDirtyCanvas) == null || E.call(e, !0, !0), ue();
      return;
    }
    if (l === "close-preview") {
      Jo();
      return;
    }
    if (l === "cancel-close") {
      Jo();
      return;
    }
    l === "save-close" && (Yw(), Jo());
  }
  _t == null || _t.addEventListener("click", TS);
  function FS(i) {
    const s = i.target.closest("[data-action='param-input']");
    s && Vm(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }
  _t == null || _t.addEventListener("input", FS);
  function DS(i) {
    const s = i.target.closest("[data-action='param-input']");
    s && Vm(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  }
  _t == null || _t.addEventListener("change", DS);
  const tf = () => zr();
  tf();
  function LS(i) {
    var E, P, C, L, U;
    if ((P = (E = i.target) == null ? void 0 : E.matches) != null && P.call(E, "[data-confirm-overlay]")) {
      const K = (C = T.confirmDialog) == null ? void 0 : C.resolve;
      T.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, K == null || K(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Yv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), ie.backgroundDirty = !0, Ke(), ue({ localOnly: !0, reason: mt.VIEW });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const K = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), R && h.mode === "frame" && (K !== "frame" && (ie.frameSafeRect = null), ze(), Ke()), ns(), ci(), ue();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const K = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = K, (K === "paint" || K === "mask") && ja({ preservePanelValues: !0 }), Yn(), ze(), Ke(), ue();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const K = String(p.getAttribute("data-tool-ui-action") || "");
        if ((K === "undo" || K === "redo") && p.disabled) return;
        K === "undo" ? pu(-1) : K === "redo" ? pu(1) : K === "clear" ? zw() : K === "add" || K === "add-image" ? Nw() : K === "add-world" ? Pw() : K === "add-or-look" ? Dw() : K === "add-camera" && Lw();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const K = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = K, ja({ preservePanelValues: !0 }), qn[K] && (h.activeBrushPresetId = K), Yn(), ze(), Ke(), ue();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), ja({ preservePanelValues: !0 }), Yn(), ze(), Ke(), ue();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const K = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        jw(K);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const K = dc.find((Q) => Q.id === p.getAttribute("data-paint-color-swatch"));
        if (!K) return;
        h.paintColor = sr(K.color), _n(!0), Yn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Me && !Me.hidden ? _n(!0) : $n(), Yn();
        return;
      }
    }
    const m = String(((L = p == null ? void 0 : p.getAttribute) == null ? void 0 : L.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ie instanceof HTMLVideoElement)) return;
      Ft.resumeAfterScrub = !1, Yu();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), fh(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ie instanceof HTMLVideoElement)) return;
      const K = !T.videoTransport.loop;
      T.videoTransport.loop = K, Ie.loop = K, Oi({
        hasAudio: T.videoTransport.hasAudio,
        loop: K,
        muted: Ie.muted,
        volume: Number(Ie.volume ?? T.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        T.frameRail.aspectOpen = !T.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const K = h.mode === "frame" ? je() : null;
        if (!K || K.locked === !0) return;
        am(K, String(p.getAttribute("data-aspect") || "1:1")), T.frameRail.aspectOpen = !1, Uo(), tt(), st(), ci(), ze(), Ke(), ue();
        return;
      }
      if (m === "frame-aspect-custom") {
        const K = h.mode === "frame" ? je() : null, Q = p.getAttribute("data-custom-width"), ee = p.getAttribute("data-custom-height");
        if (!K || !Ww(K, Q, ee)) return;
        T.frameRail.aspectOpen = !1, Uo(), tt(), st(), ci(), ue();
        return;
      }
      if (m === "frame-rotate-90") {
        const K = h.mode === "frame" ? je() : null;
        if (!K || K.locked === !0) return;
        cm(K), T.frameRail.aspectOpen = !1, Uo(), tt(), st(), ci(), ue();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), ue();
        return;
      }
      if (m === "aspect-set") {
        const K = Lt();
        if (!K) return;
        const Q = String(p.getAttribute("data-aspect") || "1:1");
        am(K, Q), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Uo(), tt(), st(), Ke(), ue();
        return;
      }
      if (m === "rotate-90") {
        const K = Lt();
        if (!K || io()) return;
        cm(K), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Uo(), tt(), st(), Ke(), ue();
        return;
      }
      if (m === "bring-front") {
        Bw();
        return;
      }
      if (m === "send-back") {
        Uw();
        return;
      }
      if (m === "duplicate") {
        Hw();
        return;
      }
      if (m === "replace-image") {
        Ow();
        return;
      }
      if (m === "toggle-lock") {
        Nv();
        return;
      }
      if (m === "back-initial") {
        Ov();
        return;
      }
      if (m === "toggle-visible") {
        Ev();
        return;
      }
      if (m === "delete") {
        lm();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      to(
        { position: jo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((U = Hr()) == null ? void 0 : U.radius) || Fr },
        { mode: fc(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!hr() || fc(h.spaceMode, h.viewTransition) !== "6dof") return;
      Xv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, fF(e == null ? void 0 : e.id, h.showGrid), tf(), ue();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), GS();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const K = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = K, Za(() => {
        h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = K ? 1 : 0, h.outputPreviewAnimStartTs = performance.now();
      }), Gm(), ue();
      return;
    }
    const y = i.target.closest("[data-paint-history-index]");
    if (!y) return;
    const _ = Number(y.getAttribute("data-paint-history-index")), x = h.customPaintHistory[_];
    x && (h.customPaintColor = sr(x), h.paintColor = sr(x), Yn());
  }
  D.addEventListener("click", LS);
  function RS(i) {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      Ut.playing && (Ft.resumeAfterScrub = !0), Ut.seek(vo(Number(s.value || 0), ll()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      const m = ne(Number(l.value || 0), 0, 1);
      Ie.volume = m, Ie.muted = m <= 1e-4, Oi({
        hasAudio: T.videoTransport.hasAudio,
        muted: Ie.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), y = zi(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[y] = m, Yn(), aS();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: ne(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = sr(m), h.paintColor = sr(m), Yn();
    }
  }
  D.addEventListener("input", RS);
  function VS(i) {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      Ft.resumeAfterScrub && Ut.play(), Ft.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Nl();
  }
  D.addEventListener("change", VS), D.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Nl();
  }), D.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Nl();
  }), D.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Nl();
  });
  function $S(i) {
    const s = i.target.closest("[data-tip]");
    !s || !D.contains(s) || Pt.target !== s && (Pt.target = s, Pt.timer && clearTimeout(Pt.timer), Pt.timer = window.setTimeout(() => {
      Pt.target === s && mS(s);
    }, 220));
  }
  D.addEventListener("pointerover", $S);
  function zS(i) {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Pt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || so();
  }
  D.addEventListener("pointerout", zS), D.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || so();
  });
  function jS(i, s) {
    var _;
    if (!Ve) return;
    const l = Ve.getBoundingClientRect(), f = ne((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - ne((s - l.top) / Math.max(1, l.height), 0, 1), m = qf(h.customPaintColor), y = { ...Xf(m.h, f, p), a: Number(((_ = h.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    h.customPaintColor = sr(y), h.paintColor = sr(y), Yn();
  }
  function HS(i) {
    var m;
    if (!at) return;
    const s = at.getBoundingClientRect(), l = ne((i - s.left) / Math.max(1, s.width), 0, 1), f = qf(h.customPaintColor), p = { ...Xf(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = sr(p), h.paintColor = sr(p), Yn();
  }
  function $m(i, s) {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Ve && (Ve.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), $m(i, (s) => jS(s.clientX, s.clientY));
  }), at && (at.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), $m(i, (s) => HS(s.clientX));
  }), D.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = T.confirmDialog) == null ? void 0 : p.resolve;
    T.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  function zm() {
    const i = !!h.fullscreen;
    ta(T.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pl(i) {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, D.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), tf(), zm(), Qi(), ue());
  }
  const jm = () => document.fullscreenElement === B;
  async function GS() {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Pl(!h.fullscreen);
        return;
      }
      jm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = B.requestFullscreen) == null ? void 0 : i.call(B));
    } catch {
      Pl(!h.fullscreen);
    }
  }
  function Hm() {
    document.fullscreenEnabled && Pl(jm());
  }
  document.addEventListener("fullscreenchange", Hm), zm();
  function Gm() {
    const i = !!h.outputPreviewExpanded;
    T.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, T.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", T.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  }
  Gm();
  const nf = e.onConnectionsChange;
  let rf = null, Km = () => {
  };
  !r && t === "stickers" && (Km = j1(e, (i = "sync") => {
    i === "executed" && (SF(nn, Hl), Ti(), N && kw()), yh(i);
  }, { editor: !0 }), rf = function(...s) {
    typeof nf == "function" && nf.apply(this, s), Ti(), wi(this, "connections");
  }, e.onConnectionsChange = rf), !r && !A && Z0.set(String(e.id ?? "0"), () => Ch());
  let qo = null;
  async function Jo() {
    return qo || (qo = (async () => {
      var i, s, l, f, p, m, y, _;
      return Z0.delete(String(e.id ?? "0")), nS(), r || jn(), document.fullscreenElement === B && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Hm), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === fm && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (_ = (y = (m = cr) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || _.call(y, !0, !0), so(), Ue.cancel(), bw(), Ie instanceof HTMLVideoElement && Ie.pause(), mn.forEach((x) => {
        try {
          x();
        } catch {
        }
      }), Ee.dispose(), eo(!1), window.removeEventListener("keydown", Wm, !0), window.removeEventListener("keydown", Bm, !0), window.removeEventListener("keydown", Ym, !0), window.removeEventListener("keyup", Xm, !0), window.removeEventListener("keydown", Al, !0), window.removeEventListener("keyup", Al, !0), window.removeEventListener("blur", qm), window.removeEventListener("keydown", Jm, !0), window.removeEventListener("dragenter", Tm, !0), window.removeEventListener("dragover", Fm, !0), window.removeEventListener("dragleave", Dm, !0), window.removeEventListener("drop", Lm, !0), !r && t === "stickers" && (e.onConnectionsChange === rf && (e.onConnectionsChange = nf), Km()), he.unmount(), J.remove(), Xw(), qo = null, !0;
    })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), qo = null, !1)), qo);
  }
  function Wm(i) {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (os()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === B) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Pl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Jo();
    }
  }
  function Bm(i) {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const y = i.target, _ = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Ge.selection) {
      xw(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (Gw()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Lt() && (lm(), i.preventDefault(), i.stopPropagation());
  }
  function Um(i) {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !T.timeline.visible || T.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !B.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !FT.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }
  function Ym(i) {
    Um(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Yu());
  }
  function Xm(i) {
    Um(i) && (i.preventDefault(), i.stopPropagation());
  }
  function Al(i) {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, fi(), bt(h.pointerPos));
  }
  function qm() {
    h.marqueeModifier = !1, h.altModifier = !1, fi(), bt(h.pointerPos);
  }
  function Jm(i) {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Zp();
    i.shiftKey && !y || !i.shiftKey && !m || (pu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  }
  window.addEventListener("keydown", Wm, !0), window.addEventListener("keydown", Bm, !0), window.addEventListener("keydown", Ym, !0), window.addEventListener("keyup", Xm, !0), window.addEventListener("keydown", Al, !0), window.addEventListener("keyup", Al, !0), window.addEventListener("blur", qm), window.addEventListener("keydown", Jm, !0), B.addEventListener("pointerdown", (i) => {
    i.target === B && Jo();
  });
  function Br(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(w)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(w).forEach((y) => delete w[y]), Object.assign(w, m), r || jn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      T.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Br("cutout-focus", Wv), !r && t === "stickers" && Br("external-sticker-sync", () => yh("open"), { rollbackState: !0 }), Tw().catch((i) => {
    T.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Br("history", tt), Br("undo-redo", Rm), Br("paint-ui", Yn), Br("side-panel", ze), Br("look-at-frame", Iu), Br("video-source", Ti), Br("canvas-size", vl), Br("cursor", () => bt(h.pointerPos)), ue(), xe = wM("editor", () => {
    var i;
    return {
      type: t,
      readOnly: r,
      mode: h.mode,
      interaction: ((i = h.interaction) == null ? void 0 : i.kind) ?? null,
      timelineDrag: !!Ge.drag,
      playing: !!Ut.playing
    };
  });
}
cr.registerExtension(VA({
  app: cr,
  openEditor: xF,
  attachStickers: ZC,
  attachCutout: QC,
  attachPreview: JC,
  restoreOutput: VC,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: zT
}));
