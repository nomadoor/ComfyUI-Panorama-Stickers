import * as ms from "../../scripts/app.js";
import { app as lr } from "../../scripts/app.js";
import { api as mn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function mc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Mt = {}, fa = [], Pr = () => {
}, yp = () => !1, Zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qs = (e) => e.startsWith("onUpdate:"), yn = Object.assign, gc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, by = Object.prototype.hasOwnProperty, ht = (e, t) => by.call(e, t), qe = Array.isArray, da = (e) => So(e) === "[object Map]", vp = (e) => So(e) === "[object Set]", Ad = (e) => So(e) === "[object Date]", Xe = (e) => typeof e == "function", Vt = (e) => typeof e == "string", Ar = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", _p = (e) => (vt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), xp = Object.prototype.toString, So = (e) => xp.call(e), yy = (e) => So(e).slice(8, -1), Sp = (e) => So(e) === "[object Object]", bc = (e) => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ mc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), el = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, vy = /-\w/g, Pn = el(
  (e) => e.replace(vy, (t) => t.slice(1).toUpperCase())
), _y = /\B([A-Z])/g, Ti = el(
  (e) => e.replace(_y, "-$1").toLowerCase()
), tl = el((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ql = el(
  (e) => e ? `on${tl(e)}` : ""
), xr = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, wp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, yc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Cd;
const nl = () => Cd || (Cd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ut(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = Vt(r) ? ky(r) : Ut(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (Vt(e) || vt(e))
    return e;
}
const xy = /;(?![^(]*\))/g, Sy = /:([^]+)/, wy = /\/\*[^]*?\*\//g;
function ky(e) {
  const t = {};
  return e.replace(wy, "").split(xy).forEach((n) => {
    if (n) {
      const r = n.split(Sy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (Vt(e))
    t = e;
  else if (qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = ft(e[n]);
      r && (t += r + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const My = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ny = /* @__PURE__ */ mc(My);
function kp(e) {
  return !!e || e === "";
}
function Py(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = vc(e[r], t[r]);
  return n;
}
function vc(e, t) {
  if (e === t) return !0;
  let n = Ad(e), r = Ad(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ar(e), r = Ar(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? Py(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), h = t.hasOwnProperty(u);
      if (f && !h || !f && h || !vc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Mp = (e) => !!(e && e.__v_isRef === !0), ct = (e) => Vt(e) ? e : e == null ? "" : qe(e) || vt(e) && (e.toString === xp || !Xe(e.toString)) ? Mp(e) ? ct(e.value) : JSON.stringify(e, Np, 2) : String(e), Np = (e, t) => Mp(t) ? Np(e, t.value) : da(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[eu(r, o) + " =>"] = a, n),
    {}
  )
} : vp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => eu(n))
} : Ar(t) ? eu(t) : vt(t) && !qe(t) && !Sp(t) ? String(t) : t, eu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ar(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class Ay {
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
      const n = Fn;
      try {
        return Fn = this, t();
      } finally {
        Fn = n;
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
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Cy() {
  return Fn;
}
let Nt;
const tu = /* @__PURE__ */ new WeakSet();
class Pp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, tu.has(this) && (tu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Id(this), Ip(this);
    const t = Nt, n = ur;
    Nt = this, ur = !0;
    try {
      return this.fn();
    } finally {
      Tp(this), Nt = t, ur = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Sc(t);
      this.deps = this.depsTail = void 0, Id(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? tu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Du(this) && this.run();
  }
  get dirty() {
    return Du(this);
  }
}
let Ap = 0, io, ao;
function Cp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ao, ao = e;
    return;
  }
  e.next = io, io = e;
}
function _c() {
  Ap++;
}
function xc() {
  if (--Ap > 0)
    return;
  if (ao) {
    let t = ao;
    for (ao = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; io; ) {
    let t = io;
    for (io = void 0; t; ) {
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
function Ip(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Tp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), Sc(r), Iy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Du(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ep(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ep(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co) || (e.globalVersion = co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Du(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Nt, r = ur;
  Nt = e, ur = !0;
  try {
    Ip(e);
    const a = e.fn(e._value);
    (t.version === 0 || xr(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Nt = n, ur = r, Tp(e), e.flags &= -3;
  }
}
function Sc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Sc(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Iy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ur = !0;
const Dp = [];
function qr() {
  Dp.push(ur), ur = !1;
}
function Xr() {
  const e = Dp.pop();
  ur = e === void 0 ? !0 : e;
}
function Id(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Nt;
    Nt = void 0;
    try {
      t();
    } finally {
      Nt = n;
    }
  }
}
let co = 0;
class Ty {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Nt || !ur || Nt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Nt)
      n = this.activeLink = new Ty(Nt, this), Nt.deps ? (n.prevDep = Nt.depsTail, Nt.depsTail.nextDep = n, Nt.depsTail = n) : Nt.deps = Nt.depsTail = n, Op(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Nt.depsTail, n.nextDep = void 0, Nt.depsTail.nextDep = n, Nt.depsTail = n, Nt.deps === n && (Nt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, co++, this.notify(t);
  }
  notify(t) {
    _c();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xc();
    }
  }
}
function Op(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Op(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ou = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ Symbol(
  ""
), Fu = /* @__PURE__ */ Symbol(
  ""
), fo = /* @__PURE__ */ Symbol(
  ""
);
function hn(e, t, n) {
  if (ur && Nt) {
    let r = Ou.get(e);
    r || Ou.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new wc()), a.map = r, a.key = n), a.track();
  }
}
function Kr(e, t, n, r, a, o) {
  const u = Ou.get(e);
  if (!u) {
    co++;
    return;
  }
  const f = (h) => {
    h && h.trigger();
  };
  if (_c(), t === "clear")
    u.forEach(f);
  else {
    const h = qe(e), y = h && bc(n);
    if (h && n === "length") {
      const g = Number(r);
      u.forEach((_, S) => {
        (S === "length" || S === fo || !Ar(S) && S >= g) && f(_);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(fo)), t) {
        case "add":
          h ? y && f(u.get("length")) : (f(u.get(wi)), da(e) && f(u.get(Fu)));
          break;
        case "delete":
          h || (f(u.get(wi)), da(e) && f(u.get(Fu)));
          break;
        case "set":
          da(e) && f(u.get(wi));
          break;
      }
  }
  xc();
}
function Zi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (hn(t, "iterate", fo), /* @__PURE__ */ er(e) ? t : t.map(fr));
}
function rl(e) {
  return hn(e = /* @__PURE__ */ dt(e), "iterate", fo), e;
}
function yr(e, t) {
  return /* @__PURE__ */ Jr(e) ? Sa(/* @__PURE__ */ ki(e) ? fr(t) : t) : fr(t);
}
const Ey = {
  __proto__: null,
  [Symbol.iterator]() {
    return nu(this, Symbol.iterator, (e) => yr(this, e));
  },
  concat(...e) {
    return Zi(this).concat(
      ...e.map((t) => qe(t) ? Zi(t) : t)
    );
  },
  entries() {
    return nu(this, "entries", (e) => (e[1] = yr(this, e[1]), e));
  },
  every(e, t) {
    return Lr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Lr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => yr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Lr(
      this,
      "find",
      e,
      t,
      (n) => yr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Lr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Lr(
      this,
      "findLast",
      e,
      t,
      (n) => yr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Lr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Lr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ru(this, "includes", e);
  },
  indexOf(...e) {
    return ru(this, "indexOf", e);
  },
  join(e) {
    return Zi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ru(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Lr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ha(this, "pop");
  },
  push(...e) {
    return Ha(this, "push", e);
  },
  reduce(e, ...t) {
    return Td(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Td(this, "reduceRight", e, t);
  },
  shift() {
    return Ha(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Lr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ha(this, "splice", e);
  },
  toReversed() {
    return Zi(this).toReversed();
  },
  toSorted(e) {
    return Zi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ha(this, "unshift", e);
  },
  values() {
    return nu(this, "values", (e) => yr(this, e));
  }
};
function nu(e, t, n) {
  const r = rl(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ er(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const Dy = Array.prototype;
function Lr(e, t, n, r, a, o) {
  const u = rl(e), f = u !== e && !/* @__PURE__ */ er(e), h = u[t];
  if (h !== Dy[t]) {
    const _ = h.apply(e, o);
    return f ? fr(_) : _;
  }
  let y = n;
  u !== e && (f ? y = function(_, S) {
    return n.call(this, yr(e, _), S, e);
  } : n.length > 2 && (y = function(_, S) {
    return n.call(this, _, S, e);
  }));
  const g = h.call(u, y, r);
  return f && a ? a(g) : g;
}
function Td(e, t, n, r) {
  const a = rl(e), o = a !== e && !/* @__PURE__ */ er(e);
  let u = n, f = !1;
  a !== e && (o ? (f = r.length === 0, u = function(y, g, _) {
    return f && (f = !1, y = yr(e, y)), n.call(this, y, yr(e, g), _, e);
  }) : n.length > 3 && (u = function(y, g, _) {
    return n.call(this, y, g, _, e);
  }));
  const h = a[t](u, ...r);
  return f ? yr(e, h) : h;
}
function ru(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  hn(r, "iterate", fo);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Nc(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : a;
}
function Ha(e, t, n = []) {
  qr(), _c();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return xc(), Xr(), r;
}
const Oy = /* @__PURE__ */ mc("__proto__,__v_isRef,__isVue"), Fp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ar)
);
function Fy(e) {
  Ar(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return hn(t, "has", e), t.hasOwnProperty(e);
}
class Rp {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (a ? o ? By : $p : o ? Vp : zp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = qe(t);
    if (!a) {
      let h;
      if (u && (h = Ey[n]))
        return h;
      if (n === "hasOwnProperty")
        return Fy;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : r
    );
    if ((Ar(n) ? Fp.has(n) : Oy(n)) || (a || hn(t, "get", n), o))
      return f;
    if (/* @__PURE__ */ gn(f)) {
      const h = u && bc(n) ? f : f.value;
      return a && vt(h) ? /* @__PURE__ */ Lu(h) : h;
    }
    return vt(f) ? a ? /* @__PURE__ */ Lu(f) : /* @__PURE__ */ Aa(f) : f;
  }
}
class Lp extends Rp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    const u = qe(t) && bc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Jr(o);
      if (!/* @__PURE__ */ er(r) && !/* @__PURE__ */ Jr(r) && (o = /* @__PURE__ */ dt(o), r = /* @__PURE__ */ dt(r)), !u && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(r))
        return y || (o.value = r), !0;
    }
    const f = u ? Number(n) < t.length : ht(t, n), h = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ gn(t) ? t : a
    );
    return t === /* @__PURE__ */ dt(a) && (f ? xr(r, o) && Kr(t, "set", n, r) : Kr(t, "add", n, r)), h;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && Kr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ar(n) || !Fp.has(n)) && hn(t, "has", n), r;
  }
  ownKeys(t) {
    return hn(
      t,
      "iterate",
      qe(t) ? "length" : wi
    ), Reflect.ownKeys(t);
  }
}
class Ry extends Rp {
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
const Ly = /* @__PURE__ */ new Lp(), zy = /* @__PURE__ */ new Ry(), Vy = /* @__PURE__ */ new Lp(!0);
const Ru = (e) => e, Yo = (e) => Reflect.getPrototypeOf(e);
function $y(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = /* @__PURE__ */ dt(a), u = da(o), f = e === "entries" || e === Symbol.iterator && u, h = e === "keys" && u, y = a[e](...r), g = n ? Ru : t ? Sa : fr;
    return !t && hn(
      o,
      "iterate",
      h ? Fu : wi
    ), yn(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: _, done: S } = y.next();
          return S ? { value: _, done: S } : {
            value: f ? [g(_[0]), g(_[1])] : g(_),
            done: S
          };
        }
      }
    );
  };
}
function qo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jy(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      e || (xr(a, f) && hn(u, "get", a), hn(u, "get", f));
      const { has: h } = Yo(u), y = t ? Ru : e ? Sa : fr;
      if (h.call(u, a))
        return y(o.get(a));
      if (h.call(u, f))
        return y(o.get(f));
      o !== u && o.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && hn(/* @__PURE__ */ dt(a), "iterate", wi), a.size;
    },
    has(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      return e || (xr(a, f) && hn(u, "has", a), hn(u, "has", f)), a === f ? o.has(a) : o.has(a) || o.has(f);
    },
    forEach(a, o) {
      const u = this, f = u.__v_raw, h = /* @__PURE__ */ dt(f), y = t ? Ru : e ? Sa : fr;
      return !e && hn(h, "iterate", wi), f.forEach((g, _) => a.call(o, y(g), y(_), u));
    }
  };
  return yn(
    n,
    e ? {
      add: qo("add"),
      set: qo("set"),
      delete: qo("delete"),
      clear: qo("clear")
    } : {
      add(a) {
        const o = /* @__PURE__ */ dt(this), u = Yo(o), f = /* @__PURE__ */ dt(a), h = !t && !/* @__PURE__ */ er(a) && !/* @__PURE__ */ Jr(a) ? f : a;
        return u.has.call(o, h) || xr(a, h) && u.has.call(o, a) || xr(f, h) && u.has.call(o, f) || (o.add(h), Kr(o, "add", h, h)), this;
      },
      set(a, o) {
        !t && !/* @__PURE__ */ er(o) && !/* @__PURE__ */ Jr(o) && (o = /* @__PURE__ */ dt(o));
        const u = /* @__PURE__ */ dt(this), { has: f, get: h } = Yo(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ dt(a), y = f.call(u, a));
        const g = h.call(u, a);
        return u.set(a, o), y ? xr(o, g) && Kr(u, "set", a, o) : Kr(u, "add", a, o), this;
      },
      delete(a) {
        const o = /* @__PURE__ */ dt(this), { has: u, get: f } = Yo(o);
        let h = u.call(o, a);
        h || (a = /* @__PURE__ */ dt(a), h = u.call(o, a)), f && f.call(o, a);
        const y = o.delete(a);
        return h && Kr(o, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ dt(this), o = a.size !== 0, u = a.clear();
        return o && Kr(
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
    n[a] = $y(a, e, t);
  }), n;
}
function kc(e, t) {
  const n = jy(e, t);
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    ht(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Hy = {
  get: /* @__PURE__ */ kc(!1, !1)
}, Uy = {
  get: /* @__PURE__ */ kc(!1, !0)
}, Gy = {
  get: /* @__PURE__ */ kc(!0, !1)
};
const zp = /* @__PURE__ */ new WeakMap(), Vp = /* @__PURE__ */ new WeakMap(), $p = /* @__PURE__ */ new WeakMap(), By = /* @__PURE__ */ new WeakMap();
function Ky(e) {
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
function Wy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ky(yy(e));
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  return /* @__PURE__ */ Jr(e) ? e : Mc(
    e,
    !1,
    Ly,
    Hy,
    zp
  );
}
// @__NO_SIDE_EFFECTS__
function Yy(e) {
  return Mc(
    e,
    !1,
    Vy,
    Uy,
    Vp
  );
}
// @__NO_SIDE_EFFECTS__
function Lu(e) {
  return Mc(
    e,
    !0,
    zy,
    Gy,
    $p
  );
}
function Mc(e, t, n, r, a) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Wy(e);
  if (o === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    o === 2 ? r : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return /* @__PURE__ */ Jr(e) ? /* @__PURE__ */ ki(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function qy(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && wp(e, "__v_skip", !0), e;
}
const fr = (e) => vt(e) ? /* @__PURE__ */ Aa(e) : e, Sa = (e) => vt(e) ? /* @__PURE__ */ Lu(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return Xy(e, !1);
}
function Xy(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new Jy(e, t);
}
class Jy {
  constructor(t, n) {
    this.dep = new wc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : fr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ er(t) || /* @__PURE__ */ Jr(t);
    t = r ? t : /* @__PURE__ */ dt(t), xr(t, n) && (this._rawValue = t, this._value = r ? t : fr(t), this.dep.trigger());
  }
}
function pt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const Zy = {
  get: (e, t, n) => t === "__v_raw" ? e : pt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ gn(a) && !/* @__PURE__ */ gn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function jp(e) {
  return /* @__PURE__ */ ki(e) ? e : new Proxy(e, Zy);
}
class Qy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new wc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Nt !== this)
      return Cp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ep(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ev(e, t, n = !1) {
  let r, a;
  return Xe(e) ? r = e : (r = e.get, a = e.set), new Qy(r, a, n);
}
const Xo = {}, Is = /* @__PURE__ */ new WeakMap();
let xi;
function tv(e, t = !1, n = xi) {
  if (n) {
    let r = Is.get(n);
    r || Is.set(n, r = []), r.push(e);
  }
}
function nv(e, t, n = Mt) {
  const { immediate: r, deep: a, once: o, scheduler: u, augmentJob: f, call: h } = n, y = (T) => a ? T : /* @__PURE__ */ er(T) || a === !1 || a === 0 ? Wr(T, 1) : Wr(T);
  let g, _, S, N, b = !1, O = !1;
  if (/* @__PURE__ */ gn(e) ? (_ = () => e.value, b = /* @__PURE__ */ er(e)) : /* @__PURE__ */ ki(e) ? (_ = () => y(e), b = !0) : qe(e) ? (O = !0, b = e.some((T) => /* @__PURE__ */ ki(T) || /* @__PURE__ */ er(T)), _ = () => e.map((T) => {
    if (/* @__PURE__ */ gn(T))
      return T.value;
    if (/* @__PURE__ */ ki(T))
      return y(T);
    if (Xe(T))
      return h ? h(T, 2) : T();
  })) : Xe(e) ? t ? _ = h ? () => h(e, 2) : e : _ = () => {
    if (S) {
      qr();
      try {
        S();
      } finally {
        Xr();
      }
    }
    const T = xi;
    xi = g;
    try {
      return h ? h(e, 3, [N]) : e(N);
    } finally {
      xi = T;
    }
  } : _ = Pr, t && a) {
    const T = _, F = a === !0 ? 1 / 0 : a;
    _ = () => Wr(T(), F);
  }
  const V = Cy(), R = () => {
    g.stop(), V && V.active && gc(V.effects, g);
  };
  if (o && t) {
    const T = t;
    t = (...F) => {
      T(...F), R();
    };
  }
  let P = O ? new Array(e.length).fill(Xo) : Xo;
  const L = (T) => {
    if (!(!(g.flags & 1) || !g.dirty && !T))
      if (t) {
        const F = g.run();
        if (a || b || (O ? F.some((G, U) => xr(G, P[U])) : xr(F, P))) {
          S && S();
          const G = xi;
          xi = g;
          try {
            const U = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === Xo ? void 0 : O && P[0] === Xo ? [] : P,
              N
            ];
            P = F, h ? h(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            xi = G;
          }
        }
      } else
        g.run();
  };
  return f && f(L), g = new Pp(_), g.scheduler = u ? () => u(L, !1) : L, N = (T) => tv(T, !1, g), S = g.onStop = () => {
    const T = Is.get(g);
    if (T) {
      if (h)
        h(T, 4);
      else
        for (const F of T) F();
      Is.delete(g);
    }
  }, t ? r ? L(!0) : P = g.run() : u ? u(L.bind(null, !0), !0) : g.run(), R.pause = g.pause.bind(g), R.resume = g.resume.bind(g), R.stop = R, R;
}
function Wr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ gn(e))
    Wr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Wr(e[r], t, n);
  else if (vp(e) || da(e))
    e.forEach((r) => {
      Wr(r, t, n);
    });
  else if (Sp(e)) {
    for (const r in e)
      Wr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Wr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    il(a, t, n);
  }
}
function Cr(e, t, n, r) {
  if (Xe(e)) {
    const a = wo(e, t, n, r);
    return a && _p(a) && a.catch((o) => {
      il(o, t, n);
    }), a;
  }
  if (qe(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++)
      a.push(Cr(e[o], t, n, r));
    return a;
  }
}
function il(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: u } = t && t.appContext.config || Mt;
  if (t) {
    let f = t.parent;
    const h = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const g = f.ec;
      if (g) {
        for (let _ = 0; _ < g.length; _++)
          if (g[_](e, h, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (o) {
      qr(), wo(o, null, 10, [
        e,
        h,
        y
      ]), Xr();
      return;
    }
  }
  rv(e, n, a, r, u);
}
function rv(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Nn = [];
let br = -1;
const ha = [];
let si = null, aa = 0;
const Hp = /* @__PURE__ */ Promise.resolve();
let Ts = null;
function Pc(e) {
  const t = Ts || Hp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function iv(e) {
  let t = br + 1, n = Nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Nn[r], o = ho(a);
    o < e || o === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ac(e) {
  if (!(e.flags & 1)) {
    const t = ho(e), n = Nn[Nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ho(n) ? Nn.push(e) : Nn.splice(iv(t), 0, e), e.flags |= 1, Up();
  }
}
function Up() {
  Ts || (Ts = Hp.then(Bp));
}
function av(e) {
  qe(e) ? ha.push(...e) : si && e.id === -1 ? si.splice(aa + 1, 0, e) : e.flags & 1 || (ha.push(e), e.flags |= 1), Up();
}
function Ed(e, t, n = br + 1) {
  for (; n < Nn.length; n++) {
    const r = Nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Gp(e) {
  if (ha.length) {
    const t = [...new Set(ha)].sort(
      (n, r) => ho(n) - ho(r)
    );
    if (ha.length = 0, si) {
      si.push(...t);
      return;
    }
    for (si = t, aa = 0; aa < si.length; aa++) {
      const n = si[aa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    si = null, aa = 0;
  }
}
const ho = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bp(e) {
  try {
    for (br = 0; br < Nn.length; br++) {
      const t = Nn[br];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; br < Nn.length; br++) {
      const t = Nn[br];
      t && (t.flags &= -2);
    }
    br = -1, Nn.length = 0, Gp(), Ts = null, (Nn.length || ha.length) && Bp();
  }
}
let Un = null, Kp = null;
function Es(e) {
  const t = Un;
  return Un = e, Kp = e && e.type.__scopeId || null, t;
}
function Wp(e, t = Un, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && Gd(-1);
    const o = Es(t);
    let u;
    try {
      u = e(...a);
    } finally {
      Es(o), r._d && Gd(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Mi(e, t) {
  if (Un === null)
    return e;
  const n = ul(Un), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, u, f, h = Mt] = t[a];
    o && (Xe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Wr(u), r.push({
      dir: o,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: h
    }));
  }
  return e;
}
function bi(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    o && (f.oldValue = o[u].value);
    let h = f.dir[r];
    h && (qr(), Cr(h, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Xr());
  }
}
function ov(e, t) {
  if (pn) {
    let n = pn.provides;
    const r = pn.parent && pn.parent.provides;
    r === n && (n = pn.provides = Object.create(r)), n[e] = t;
  }
}
function bs(e, t, n = !1) {
  const r = a1();
  if (r || pa) {
    let a = pa ? pa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Xe(t) ? t.call(r && r.proxy) : t;
  }
}
const sv = /* @__PURE__ */ Symbol.for("v-scx"), lv = () => bs(sv);
function Ni(e, t, n) {
  return Yp(e, t, n);
}
function Yp(e, t, n = Mt) {
  const { immediate: r, deep: a, flush: o, once: u } = n, f = yn({}, n), h = t && r || !t && o !== "post";
  let y;
  if (mo) {
    if (o === "sync") {
      const N = lv();
      y = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!h) {
      const N = () => {
      };
      return N.stop = Pr, N.resume = Pr, N.pause = Pr, N;
    }
  }
  const g = pn;
  f.call = (N, b, O) => Cr(N, g, b, O);
  let _ = !1;
  o === "post" ? f.scheduler = (N) => {
    On(N, g && g.suspense);
  } : o !== "sync" && (_ = !0, f.scheduler = (N, b) => {
    b ? N() : Ac(N);
  }), f.augmentJob = (N) => {
    t && (N.flags |= 4), _ && (N.flags |= 2, g && (N.id = g.uid, N.i = g));
  };
  const S = nv(e, t, f);
  return mo && (y ? y.push(S) : h && S()), S;
}
function uv(e, t, n) {
  const r = this.proxy, a = Vt(e) ? e.includes(".") ? qp(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Xe(t) ? o = t : (o = t.handler, n = t);
  const u = ko(this), f = Yp(a, o.bind(r), n);
  return u(), f;
}
function qp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const cv = /* @__PURE__ */ Symbol("_vte"), fv = (e) => e.__isTeleport, dv = /* @__PURE__ */ Symbol("_leaveCb");
function Cc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Dd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ds = /* @__PURE__ */ new WeakMap();
function oo(e, t, n, r, a = !1) {
  if (qe(e)) {
    e.forEach(
      (O, V) => oo(
        O,
        t && (qe(t) ? t[V] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (so(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && oo(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? ul(r.component) : r.el, u = a ? null : o, { i: f, r: h } = e, y = t && t.r, g = f.refs === Mt ? f.refs = {} : f.refs, _ = f.setupState, S = /* @__PURE__ */ dt(_), N = _ === Mt ? yp : (O) => Dd(g, O) ? !1 : ht(S, O), b = (O, V) => !(V && Dd(g, V));
  if (y != null && y !== h) {
    if (Od(t), Vt(y))
      g[y] = null, N(y) && (_[y] = null);
    else if (/* @__PURE__ */ gn(y)) {
      const O = t;
      b(y, O.k) && (y.value = null), O.k && (g[O.k] = null);
    }
  }
  if (Xe(h))
    wo(h, f, 12, [u, g]);
  else {
    const O = Vt(h), V = /* @__PURE__ */ gn(h);
    if (O || V) {
      const R = () => {
        if (e.f) {
          const P = O ? N(h) ? _[h] : g[h] : b() || !e.k ? h.value : g[e.k];
          if (a)
            qe(P) && gc(P, o);
          else if (qe(P))
            P.includes(o) || P.push(o);
          else if (O)
            g[h] = [o], N(h) && (_[h] = g[h]);
          else {
            const L = [o];
            b(h, e.k) && (h.value = L), e.k && (g[e.k] = L);
          }
        } else O ? (g[h] = u, N(h) && (_[h] = u)) : V && (b(h, e.k) && (h.value = u), e.k && (g[e.k] = u));
      };
      if (u) {
        const P = () => {
          R(), Ds.delete(e);
        };
        P.id = -1, Ds.set(e, P), On(P, n);
      } else
        Od(e), R();
    }
  }
}
function Od(e) {
  const t = Ds.get(e);
  t && (t.flags |= 8, Ds.delete(e));
}
nl().requestIdleCallback;
nl().cancelIdleCallback;
const so = (e) => !!e.type.__asyncLoader, Jp = (e) => e.type.__isKeepAlive;
function hv(e, t) {
  Zp(e, "a", t);
}
function pv(e, t) {
  Zp(e, "da", t);
}
function Zp(e, t, n = pn) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (al(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Jp(a.parent.vnode) && mv(r, t, n, a), a = a.parent;
  }
}
function mv(e, t, n, r) {
  const a = al(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Qp(() => {
    gc(r[t], a);
  }, n);
}
function al(e, t, n = pn, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...u) => {
      qr();
      const f = ko(n), h = Cr(t, n, e, u);
      return f(), Xr(), h;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const Zr = (e) => (t, n = pn) => {
  (!mo || e === "sp") && al(e, (...r) => t(...r), n);
}, gv = Zr("bm"), Ic = Zr("m"), bv = Zr(
  "bu"
), yv = Zr("u"), ol = Zr(
  "bum"
), Qp = Zr("um"), vv = Zr(
  "sp"
), _v = Zr("rtg"), xv = Zr("rtc");
function Sv(e, t = pn) {
  al("ec", e, t);
}
const wv = "components", em = /* @__PURE__ */ Symbol.for("v-ndc");
function kv(e) {
  return Vt(e) ? Mv(wv, e, !1) || e : e || em;
}
function Mv(e, t, n = !0, r = !1) {
  const a = Un || pn;
  if (a) {
    const o = a.type;
    {
      const f = c1(
        o,
        !1
      );
      if (f && (f === t || f === Pn(t) || f === tl(Pn(t))))
        return o;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fd(a[e] || o[e], t) || // global registration
      Fd(a.appContext[e], t)
    );
    return !u && r ? o : u;
  }
}
function Fd(e, t) {
  return e && (e[t] || e[Pn(t)] || e[tl(Pn(t))]);
}
function zt(e, t, n, r) {
  let a;
  const o = n, u = qe(e);
  if (u || Vt(e)) {
    const f = u && /* @__PURE__ */ ki(e);
    let h = !1, y = !1;
    f && (h = !/* @__PURE__ */ er(e), y = /* @__PURE__ */ Jr(e), e = rl(e)), a = new Array(e.length);
    for (let g = 0, _ = e.length; g < _; g++)
      a[g] = t(
        h ? y ? Sa(fr(e[g])) : fr(e[g]) : e[g],
        g,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, o);
  } else if (vt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, h) => t(f, h, void 0, o)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let h = 0, y = f.length; h < y; h++) {
        const g = f[h];
        a[h] = t(e[g], g, h, o);
      }
    }
  else
    a = [];
  return a;
}
const zu = (e) => e ? xm(e) ? ul(e) : zu(e.parent) : null, lo = (
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
    $parent: (e) => zu(e.parent),
    $root: (e) => zu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => nm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ac(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pc.bind(e.proxy)),
    $watch: (e) => uv.bind(e)
  })
), iu = (e, t) => e !== Mt && !e.__isScriptSetup && ht(e, t), Nv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: o, accessCache: u, type: f, appContext: h } = e;
    if (t[0] !== "$") {
      const S = u[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (iu(r, t))
          return u[t] = 1, r[t];
        if (a !== Mt && ht(a, t))
          return u[t] = 2, a[t];
        if (ht(o, t))
          return u[t] = 3, o[t];
        if (n !== Mt && ht(n, t))
          return u[t] = 4, n[t];
        Vu && (u[t] = 0);
      }
    }
    const y = lo[t];
    let g, _;
    if (y)
      return t === "$attrs" && hn(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (g = f.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== Mt && ht(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      _ = h.config.globalProperties, ht(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return iu(a, t) ? (a[t] = n, !0) : r !== Mt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: u }
  }, f) {
    let h;
    return !!(n[f] || e !== Mt && f[0] !== "$" && ht(e, f) || iu(t, f) || ht(o, f) || ht(r, f) || ht(lo, f) || ht(a.config.globalProperties, f) || (h = u.__cssModules) && h[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Rd(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Vu = !0;
function Pv(e) {
  const t = nm(e), n = e.proxy, r = e.ctx;
  Vu = !1, t.beforeCreate && Ld(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: u,
    watch: f,
    provide: h,
    inject: y,
    // lifecycle
    created: g,
    beforeMount: _,
    mounted: S,
    beforeUpdate: N,
    updated: b,
    activated: O,
    deactivated: V,
    beforeDestroy: R,
    beforeUnmount: P,
    destroyed: L,
    unmounted: T,
    render: F,
    renderTracked: G,
    renderTriggered: U,
    errorCaptured: le,
    serverPrefetch: oe,
    // public API
    expose: I,
    inheritAttrs: Y,
    // assets
    components: ie,
    directives: J,
    filters: he
  } = t;
  if (y && Av(y, r, null), u)
    for (const A in u) {
      const we = u[A];
      Xe(we) && (r[A] = we.bind(n));
    }
  if (a) {
    const A = a.call(n, n);
    vt(A) && (e.data = /* @__PURE__ */ Aa(A));
  }
  if (Vu = !0, o)
    for (const A in o) {
      const we = o[A], Ce = Xe(we) ? we.bind(n, n) : Xe(we.get) ? we.get.bind(n, n) : Pr, Ne = !Xe(we) && Xe(we.set) ? we.set.bind(n) : Pr, B = kt({
        get: Ce,
        set: Ne
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => B.value,
        set: ($e) => B.value = $e
      });
    }
  if (f)
    for (const A in f)
      tm(f[A], r, n, A);
  if (h) {
    const A = Xe(h) ? h.call(n) : h;
    Reflect.ownKeys(A).forEach((we) => {
      ov(we, A[we]);
    });
  }
  g && Ld(g, e, "c");
  function ke(A, we) {
    qe(we) ? we.forEach((Ce) => A(Ce.bind(n))) : we && A(we.bind(n));
  }
  if (ke(gv, _), ke(Ic, S), ke(bv, N), ke(yv, b), ke(hv, O), ke(pv, V), ke(Sv, le), ke(xv, G), ke(_v, U), ke(ol, P), ke(Qp, T), ke(vv, oe), qe(I))
    if (I.length) {
      const A = e.exposed || (e.exposed = {});
      I.forEach((we) => {
        Object.defineProperty(A, we, {
          get: () => n[we],
          set: (Ce) => n[we] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Pr && (e.render = F), Y != null && (e.inheritAttrs = Y), ie && (e.components = ie), J && (e.directives = J), oe && Xp(e);
}
function Av(e, t, n = Pr) {
  qe(e) && (e = $u(e));
  for (const r in e) {
    const a = e[r];
    let o;
    vt(a) ? "default" in a ? o = bs(
      a.from || r,
      a.default,
      !0
    ) : o = bs(a.from || r) : o = bs(a), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : t[r] = o;
  }
}
function Ld(e, t, n) {
  Cr(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function tm(e, t, n, r) {
  let a = r.includes(".") ? qp(n, r) : () => n[r];
  if (Vt(e)) {
    const o = t[e];
    Xe(o) && Ni(a, o);
  } else if (Xe(e))
    Ni(a, e.bind(n));
  else if (vt(e))
    if (qe(e))
      e.forEach((o) => tm(o, t, n, r));
    else {
      const o = Xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Xe(o) && Ni(a, o, e);
    }
}
function nm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = o.get(t);
  let h;
  return f ? h = f : !a.length && !n && !r ? h = t : (h = {}, a.length && a.forEach(
    (y) => Os(h, y, u, !0)
  ), Os(h, t, u)), vt(t) && o.set(t, h), h;
}
function Os(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Os(e, o, n, !0), a && a.forEach(
    (u) => Os(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = Cv[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const Cv = {
  data: zd,
  props: Vd,
  emits: Vd,
  // objects
  methods: Za,
  computed: Za,
  // lifecycle
  beforeCreate: Mn,
  created: Mn,
  beforeMount: Mn,
  mounted: Mn,
  beforeUpdate: Mn,
  updated: Mn,
  beforeDestroy: Mn,
  beforeUnmount: Mn,
  destroyed: Mn,
  unmounted: Mn,
  activated: Mn,
  deactivated: Mn,
  errorCaptured: Mn,
  serverPrefetch: Mn,
  // assets
  components: Za,
  directives: Za,
  // watch
  watch: Tv,
  // provide / inject
  provide: zd,
  inject: Iv
};
function zd(e, t) {
  return t ? e ? function() {
    return yn(
      Xe(e) ? e.call(this, this) : e,
      Xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Iv(e, t) {
  return Za($u(e), $u(t));
}
function $u(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Mn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Za(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Vd(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    Rd(e),
    Rd(t ?? {})
  ) : t;
}
function Tv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Mn(e[r], t[r]);
  return n;
}
function rm() {
  return {
    app: null,
    config: {
      isNativeTag: yp,
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
let Ev = 0;
function Dv(e, t) {
  return function(r, a = null) {
    Xe(r) || (r = yn({}, r)), a != null && !vt(a) && (a = null);
    const o = rm(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const y = o.app = {
      _uid: Ev++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: d1,
      get config() {
        return o.config;
      },
      set config(g) {
      },
      use(g, ..._) {
        return u.has(g) || (g && Xe(g.install) ? (u.add(g), g.install(y, ..._)) : Xe(g) && (u.add(g), g(y, ..._))), y;
      },
      mixin(g) {
        return o.mixins.includes(g) || o.mixins.push(g), y;
      },
      component(g, _) {
        return _ ? (o.components[g] = _, y) : o.components[g];
      },
      directive(g, _) {
        return _ ? (o.directives[g] = _, y) : o.directives[g];
      },
      mount(g, _, S) {
        if (!h) {
          const N = y._ceVNode || Ve(r, a);
          return N.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(N, g, S), h = !0, y._container = g, g.__vue_app__ = y, ul(N.component);
        }
      },
      onUnmount(g) {
        f.push(g);
      },
      unmount() {
        h && (Cr(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(g, _) {
        return o.provides[g] = _, y;
      },
      runWithContext(g) {
        const _ = pa;
        pa = y;
        try {
          return g();
        } finally {
          pa = _;
        }
      }
    };
    return y;
  };
}
let pa = null;
const Ov = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pn(t)}Modifiers`] || e[`${Ti(t)}Modifiers`];
function Fv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Mt;
  let a = n;
  const o = t.startsWith("update:"), u = o && Ov(r, t.slice(7));
  u && (u.trim && (a = n.map((g) => Vt(g) ? g.trim() : g)), u.number && (a = n.map(yc)));
  let f, h = r[f = Ql(t)] || // also try camelCase event handler (#2249)
  r[f = Ql(Pn(t))];
  !h && o && (h = r[f = Ql(Ti(t))]), h && Cr(
    h,
    e,
    6,
    a
  );
  const y = r[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Cr(
      y,
      e,
      6,
      a
    );
  }
}
const Rv = /* @__PURE__ */ new WeakMap();
function im(e, t, n = !1) {
  const r = n ? Rv : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let u = {}, f = !1;
  if (!Xe(e)) {
    const h = (y) => {
      const g = im(y, t, !0);
      g && (f = !0, yn(u, g));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !o && !f ? (vt(e) && r.set(e, null), null) : (qe(o) ? o.forEach((h) => u[h] = null) : yn(u, o), vt(e) && r.set(e, u), u);
}
function sl(e, t) {
  return !e || !Zs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Ti(t)) || ht(e, t));
}
function $d(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [o],
    slots: u,
    attrs: f,
    emit: h,
    render: y,
    renderCache: g,
    props: _,
    data: S,
    setupState: N,
    ctx: b,
    inheritAttrs: O
  } = e, V = Es(e);
  let R, P;
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, F = T;
      R = vr(
        y.call(
          F,
          T,
          g,
          _,
          N,
          S,
          b
        )
      ), P = f;
    } else {
      const T = t;
      R = vr(
        T.length > 1 ? T(
          _,
          { attrs: f, slots: u, emit: h }
        ) : T(
          _,
          null
        )
      ), P = t.props ? f : Lv(f);
    }
  } catch (T) {
    uo.length = 0, il(T, e, 1), R = Ve(ci);
  }
  let L = R;
  if (P && O !== !1) {
    const T = Object.keys(P), { shapeFlag: F } = L;
    T.length && F & 7 && (o && T.some(Qs) && (P = zv(
      P,
      o
    )), L = wa(L, P, !1, !0));
  }
  return n.dirs && (L = wa(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && Cc(L, n.transition), R = L, Es(V), R;
}
const Lv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Qs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Vv(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: u, children: f, patchFlag: h } = t, y = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return r ? jd(r, u, y) : !!u;
    if (h & 8) {
      const g = t.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        const S = g[_];
        if (am(u, r, S) && !sl(y, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? jd(r, u, y) : !0 : !!u;
  return !1;
}
function jd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (am(t, e, o) && !sl(n, o))
      return !0;
  }
  return !1;
}
function am(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && vt(r) && vt(a) ? !vc(r, a) : r !== a;
}
function $v({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const om = {}, sm = () => Object.create(om), lm = (e) => Object.getPrototypeOf(e) === om;
function jv(e, t, n, r = !1) {
  const a = {}, o = sm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), um(e, t, a, o);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ Yy(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function Hv(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ dt(a), [h] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const g = e.vnode.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        let S = g[_];
        if (sl(e.emitsOptions, S))
          continue;
        const N = t[S];
        if (h)
          if (ht(o, S))
            N !== o[S] && (o[S] = N, y = !0);
          else {
            const b = Pn(S);
            a[b] = ju(
              h,
              f,
              b,
              N,
              e,
              !1
            );
          }
        else
          N !== o[S] && (o[S] = N, y = !0);
      }
    }
  } else {
    um(e, t, a, o) && (y = !0);
    let g;
    for (const _ in f)
      (!t || // for camelCase
      !ht(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Ti(_)) === _ || !ht(t, g))) && (h ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[g] !== void 0) && (a[_] = ju(
        h,
        f,
        _,
        void 0,
        e,
        !0
      )) : delete a[_]);
    if (o !== f)
      for (const _ in o)
        (!t || !ht(t, _)) && (delete o[_], y = !0);
  }
  y && Kr(e.attrs, "set", "");
}
function um(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let h in t) {
      if (ro(h))
        continue;
      const y = t[h];
      let g;
      a && ht(a, g = Pn(h)) ? !o || !o.includes(g) ? n[g] = y : (f || (f = {}))[g] = y : sl(e.emitsOptions, h) || (!(h in r) || y !== r[h]) && (r[h] = y, u = !0);
    }
  if (o) {
    const h = /* @__PURE__ */ dt(n), y = f || Mt;
    for (let g = 0; g < o.length; g++) {
      const _ = o[g];
      n[_] = ju(
        a,
        h,
        _,
        y[_],
        e,
        !ht(y, _)
      );
    }
  }
  return u;
}
function ju(e, t, n, r, a, o) {
  const u = e[n];
  if (u != null) {
    const f = ht(u, "default");
    if (f && r === void 0) {
      const h = u.default;
      if (u.type !== Function && !u.skipFactory && Xe(h)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const g = ko(a);
          r = y[n] = h.call(
            null,
            t
          ), g();
        }
      } else
        r = h;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (o && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ti(n)) && (r = !0));
  }
  return r;
}
const Uv = /* @__PURE__ */ new WeakMap();
function cm(e, t, n = !1) {
  const r = n ? Uv : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, u = {}, f = [];
  let h = !1;
  if (!Xe(e)) {
    const g = (_) => {
      h = !0;
      const [S, N] = cm(_, t, !0);
      yn(u, S), N && f.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !h)
    return vt(e) && r.set(e, fa), fa;
  if (qe(o))
    for (let g = 0; g < o.length; g++) {
      const _ = Pn(o[g]);
      Hd(_) && (u[_] = Mt);
    }
  else if (o)
    for (const g in o) {
      const _ = Pn(g);
      if (Hd(_)) {
        const S = o[g], N = u[_] = qe(S) || Xe(S) ? { type: S } : yn({}, S), b = N.type;
        let O = !1, V = !0;
        if (qe(b))
          for (let R = 0; R < b.length; ++R) {
            const P = b[R], L = Xe(P) && P.name;
            if (L === "Boolean") {
              O = !0;
              break;
            } else L === "String" && (V = !1);
          }
        else
          O = Xe(b) && b.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = O, N[
          1
          /* shouldCastTrue */
        ] = V, (O || ht(N, "default")) && f.push(_);
      }
    }
  const y = [u, f];
  return vt(e) && r.set(e, y), y;
}
function Hd(e) {
  return e[0] !== "$" && !ro(e);
}
const Tc = (e) => e === "_" || e === "_ctx" || e === "$stable", Ec = (e) => qe(e) ? e.map(vr) : [vr(e)], Gv = (e, t, n) => {
  if (t._n)
    return t;
  const r = Wp((...a) => Ec(t(...a)), n);
  return r._c = !1, r;
}, fm = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Tc(a)) continue;
    const o = e[a];
    if (Xe(o))
      t[a] = Gv(a, o, r);
    else if (o != null) {
      const u = Ec(o);
      t[a] = () => u;
    }
  }
}, dm = (e, t) => {
  const n = Ec(t);
  e.slots.default = () => n;
}, hm = (e, t, n) => {
  for (const r in t)
    (n || !Tc(r)) && (e[r] = t[r]);
}, Bv = (e, t, n) => {
  const r = e.slots = sm();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (hm(r, t, n), n && wp(r, "_", a, !0)) : fm(t, r);
  } else t && dm(e, t);
}, Kv = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, u = Mt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? o = !1 : hm(a, t, n) : (o = !t.$stable, fm(t, a)), u = t;
  } else t && (dm(e, t), u = { default: 1 });
  if (o)
    for (const f in a)
      !Tc(f) && u[f] == null && delete a[f];
}, On = Jv;
function Wv(e) {
  return Yv(e);
}
function Yv(e, t) {
  const n = nl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: u,
    createText: f,
    createComment: h,
    setText: y,
    setElementText: g,
    parentNode: _,
    nextSibling: S,
    setScopeId: N = Pr,
    insertStaticContent: b
  } = e, O = (z, j, te, _e = null, pe = null, D = null, Q = void 0, ee = null, de = !!j.dynamicChildren) => {
    if (z === j)
      return;
    z && !Ua(z, j) && (_e = Yt(z), $e(z, pe, D, !0), z = null), j.patchFlag === -2 && (de = !1, j.dynamicChildren = null);
    const { type: ne, ref: Pe, shapeFlag: ve } = j;
    switch (ne) {
      case ll:
        V(z, j, te, _e);
        break;
      case ci:
        R(z, j, te, _e);
        break;
      case ou:
        z == null && P(j, te, _e, Q);
        break;
      case ot:
        ie(
          z,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        );
        break;
      default:
        ve & 1 ? F(
          z,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        ) : ve & 6 ? J(
          z,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        ) : (ve & 64 || ve & 128) && ne.process(
          z,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de,
          nn
        );
    }
    Pe != null && pe ? oo(Pe, z && z.ref, D, j || z, !j) : Pe == null && z && z.ref != null && oo(z.ref, null, D, z, !0);
  }, V = (z, j, te, _e) => {
    if (z == null)
      r(
        j.el = f(j.children),
        te,
        _e
      );
    else {
      const pe = j.el = z.el;
      j.children !== z.children && y(pe, j.children);
    }
  }, R = (z, j, te, _e) => {
    z == null ? r(
      j.el = h(j.children || ""),
      te,
      _e
    ) : j.el = z.el;
  }, P = (z, j, te, _e) => {
    [z.el, z.anchor] = b(
      z.children,
      j,
      te,
      _e,
      z.el,
      z.anchor
    );
  }, L = ({ el: z, anchor: j }, te, _e) => {
    let pe;
    for (; z && z !== j; )
      pe = S(z), r(z, te, _e), z = pe;
    r(j, te, _e);
  }, T = ({ el: z, anchor: j }) => {
    let te;
    for (; z && z !== j; )
      te = S(z), a(z), z = te;
    a(j);
  }, F = (z, j, te, _e, pe, D, Q, ee, de) => {
    if (j.type === "svg" ? Q = "svg" : j.type === "math" && (Q = "mathml"), z == null)
      G(
        j,
        te,
        _e,
        pe,
        D,
        Q,
        ee,
        de
      );
    else {
      const ne = z.el && z.el._isVueCE ? z.el : null;
      try {
        ne && ne._beginPatch(), oe(
          z,
          j,
          pe,
          D,
          Q,
          ee,
          de
        );
      } finally {
        ne && ne._endPatch();
      }
    }
  }, G = (z, j, te, _e, pe, D, Q, ee) => {
    let de, ne;
    const { props: Pe, shapeFlag: ve, transition: Ie, dirs: d } = z;
    if (de = z.el = u(
      z.type,
      D,
      Pe && Pe.is,
      Pe
    ), ve & 8 ? g(de, z.children) : ve & 16 && le(
      z.children,
      de,
      null,
      _e,
      pe,
      au(z, D),
      Q,
      ee
    ), d && bi(z, null, _e, "created"), U(de, z, z.scopeId, Q, _e), Pe) {
      for (const Le in Pe)
        Le !== "value" && !ro(Le) && o(de, Le, null, Pe[Le], D, _e);
      "value" in Pe && o(de, "value", null, Pe.value, D), (ne = Pe.onVnodeBeforeMount) && pr(ne, _e, z);
    }
    d && bi(z, null, _e, "beforeMount");
    const Oe = qv(pe, Ie);
    Oe && Ie.beforeEnter(de), r(de, j, te), ((ne = Pe && Pe.onVnodeMounted) || Oe || d) && On(() => {
      try {
        ne && pr(ne, _e, z), Oe && Ie.enter(de), d && bi(z, null, _e, "mounted");
      } finally {
      }
    }, pe);
  }, U = (z, j, te, _e, pe) => {
    if (te && N(z, te), _e)
      for (let D = 0; D < _e.length; D++)
        N(z, _e[D]);
    if (pe) {
      let D = pe.subTree;
      if (j === D || bm(D.type) && (D.ssContent === j || D.ssFallback === j)) {
        const Q = pe.vnode;
        U(
          z,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          pe.parent
        );
      }
    }
  }, le = (z, j, te, _e, pe, D, Q, ee, de = 0) => {
    for (let ne = de; ne < z.length; ne++) {
      const Pe = z[ne] = ee ? Br(z[ne]) : vr(z[ne]);
      O(
        null,
        Pe,
        j,
        te,
        _e,
        pe,
        D,
        Q,
        ee
      );
    }
  }, oe = (z, j, te, _e, pe, D, Q) => {
    const ee = j.el = z.el;
    let { patchFlag: de, dynamicChildren: ne, dirs: Pe } = j;
    de |= z.patchFlag & 16;
    const ve = z.props || Mt, Ie = j.props || Mt;
    let d;
    if (te && yi(te, !1), (d = Ie.onVnodeBeforeUpdate) && pr(d, te, j, z), Pe && bi(j, z, te, "beforeUpdate"), te && yi(te, !0), (ve.innerHTML && Ie.innerHTML == null || ve.textContent && Ie.textContent == null) && g(ee, ""), ne ? I(
      z.dynamicChildren,
      ne,
      ee,
      te,
      _e,
      au(j, pe),
      D
    ) : Q || we(
      z,
      j,
      ee,
      null,
      te,
      _e,
      au(j, pe),
      D,
      !1
    ), de > 0) {
      if (de & 16)
        Y(ee, ve, Ie, te, pe);
      else if (de & 2 && ve.class !== Ie.class && o(ee, "class", null, Ie.class, pe), de & 4 && o(ee, "style", ve.style, Ie.style, pe), de & 8) {
        const Oe = j.dynamicProps;
        for (let Le = 0; Le < Oe.length; Le++) {
          const Ge = Oe[Le], Ze = ve[Ge], gt = Ie[Ge];
          (gt !== Ze || Ge === "value") && o(ee, Ge, Ze, gt, pe, te);
        }
      }
      de & 1 && z.children !== j.children && g(ee, j.children);
    } else !Q && ne == null && Y(ee, ve, Ie, te, pe);
    ((d = Ie.onVnodeUpdated) || Pe) && On(() => {
      d && pr(d, te, j, z), Pe && bi(j, z, te, "updated");
    }, _e);
  }, I = (z, j, te, _e, pe, D, Q) => {
    for (let ee = 0; ee < j.length; ee++) {
      const de = z[ee], ne = j[ee], Pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ua(de, ne) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? _(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      O(
        de,
        ne,
        Pe,
        null,
        _e,
        pe,
        D,
        Q,
        !0
      );
    }
  }, Y = (z, j, te, _e, pe) => {
    if (j !== te) {
      if (j !== Mt)
        for (const D in j)
          !ro(D) && !(D in te) && o(
            z,
            D,
            j[D],
            null,
            pe,
            _e
          );
      for (const D in te) {
        if (ro(D)) continue;
        const Q = te[D], ee = j[D];
        Q !== ee && D !== "value" && o(z, D, ee, Q, pe, _e);
      }
      "value" in te && o(z, "value", j.value, te.value, pe);
    }
  }, ie = (z, j, te, _e, pe, D, Q, ee, de) => {
    const ne = j.el = z ? z.el : f(""), Pe = j.anchor = z ? z.anchor : f("");
    let { patchFlag: ve, dynamicChildren: Ie, slotScopeIds: d } = j;
    d && (ee = ee ? ee.concat(d) : d), z == null ? (r(ne, te, _e), r(Pe, te, _e), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      te,
      Pe,
      pe,
      D,
      Q,
      ee,
      de
    )) : ve > 0 && ve & 64 && Ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    z.dynamicChildren && z.dynamicChildren.length === Ie.length ? (I(
      z.dynamicChildren,
      Ie,
      te,
      pe,
      D,
      Q,
      ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || pe && j === pe.subTree) && pm(
      z,
      j,
      !0
      /* shallow */
    )) : we(
      z,
      j,
      te,
      Pe,
      pe,
      D,
      Q,
      ee,
      de
    );
  }, J = (z, j, te, _e, pe, D, Q, ee, de) => {
    j.slotScopeIds = ee, z == null ? j.shapeFlag & 512 ? pe.ctx.activate(
      j,
      te,
      _e,
      Q,
      de
    ) : he(
      j,
      te,
      _e,
      pe,
      D,
      Q,
      de
    ) : fe(z, j, de);
  }, he = (z, j, te, _e, pe, D, Q) => {
    const ee = z.component = i1(
      z,
      _e,
      pe
    );
    if (Jp(z) && (ee.ctx.renderer = nn), o1(ee, !1, Q), ee.asyncDep) {
      if (pe && pe.registerDep(ee, ke, Q), !z.el) {
        const de = ee.subTree = Ve(ci);
        R(null, de, j, te), z.placeholder = de.el;
      }
    } else
      ke(
        ee,
        z,
        j,
        te,
        pe,
        D,
        Q
      );
  }, fe = (z, j, te) => {
    const _e = j.component = z.component;
    if (Vv(z, j, te))
      if (_e.asyncDep && !_e.asyncResolved) {
        A(_e, j, te);
        return;
      } else
        _e.next = j, _e.update();
    else
      j.el = z.el, _e.vnode = j;
  }, ke = (z, j, te, _e, pe, D, Q) => {
    const ee = () => {
      if (z.isMounted) {
        let { next: ve, bu: Ie, u: d, parent: Oe, vnode: Le } = z;
        {
          const ae = mm(z);
          if (ae) {
            ve && (ve.el = Le.el, A(z, ve, Q)), ae.asyncDep.then(() => {
              On(() => {
                z.isUnmounted || ne();
              }, pe);
            });
            return;
          }
        }
        let Ge = ve, Ze;
        yi(z, !1), ve ? (ve.el = Le.el, A(z, ve, Q)) : ve = Le, Ie && gs(Ie), (Ze = ve.props && ve.props.onVnodeBeforeUpdate) && pr(Ze, Oe, ve, Le), yi(z, !0);
        const gt = $d(z), rt = z.subTree;
        z.subTree = gt, O(
          rt,
          gt,
          // parent may have changed if it's in a teleport
          _(rt.el),
          // anchor may have changed if it's in a fragment
          Yt(rt),
          z,
          pe,
          D
        ), ve.el = gt.el, Ge === null && $v(z, gt.el), d && On(d, pe), (Ze = ve.props && ve.props.onVnodeUpdated) && On(
          () => pr(Ze, Oe, ve, Le),
          pe
        );
      } else {
        let ve;
        const { el: Ie, props: d } = j, { bm: Oe, m: Le, parent: Ge, root: Ze, type: gt } = z, rt = so(j);
        yi(z, !1), Oe && gs(Oe), !rt && (ve = d && d.onVnodeBeforeMount) && pr(ve, Ge, j), yi(z, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            gt,
            z.parent ? z.parent.type : void 0
          );
          const ae = z.subTree = $d(z);
          O(
            null,
            ae,
            te,
            _e,
            z,
            pe,
            D
          ), j.el = ae.el;
        }
        if (Le && On(Le, pe), !rt && (ve = d && d.onVnodeMounted)) {
          const ae = j;
          On(
            () => pr(ve, Ge, ae),
            pe
          );
        }
        (j.shapeFlag & 256 || Ge && so(Ge.vnode) && Ge.vnode.shapeFlag & 256) && z.a && On(z.a, pe), z.isMounted = !0, j = te = _e = null;
      }
    };
    z.scope.on();
    const de = z.effect = new Pp(ee);
    z.scope.off();
    const ne = z.update = de.run.bind(de), Pe = z.job = de.runIfDirty.bind(de);
    Pe.i = z, Pe.id = z.uid, de.scheduler = () => Ac(Pe), yi(z, !0), ne();
  }, A = (z, j, te) => {
    j.component = z;
    const _e = z.vnode.props;
    z.vnode = j, z.next = null, Hv(z, j.props, _e, te), Kv(z, j.children, te), qr(), Ed(z), Xr();
  }, we = (z, j, te, _e, pe, D, Q, ee, de = !1) => {
    const ne = z && z.children, Pe = z ? z.shapeFlag : 0, ve = j.children, { patchFlag: Ie, shapeFlag: d } = j;
    if (Ie > 0) {
      if (Ie & 128) {
        Ne(
          ne,
          ve,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        );
        return;
      } else if (Ie & 256) {
        Ce(
          ne,
          ve,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        );
        return;
      }
    }
    d & 8 ? (Pe & 16 && je(ne, pe, D), ve !== ne && g(te, ve)) : Pe & 16 ? d & 16 ? Ne(
      ne,
      ve,
      te,
      _e,
      pe,
      D,
      Q,
      ee,
      de
    ) : je(ne, pe, D, !0) : (Pe & 8 && g(te, ""), d & 16 && le(
      ve,
      te,
      _e,
      pe,
      D,
      Q,
      ee,
      de
    ));
  }, Ce = (z, j, te, _e, pe, D, Q, ee, de) => {
    z = z || fa, j = j || fa;
    const ne = z.length, Pe = j.length, ve = Math.min(ne, Pe);
    let Ie;
    for (Ie = 0; Ie < ve; Ie++) {
      const d = j[Ie] = de ? Br(j[Ie]) : vr(j[Ie]);
      O(
        z[Ie],
        d,
        te,
        null,
        pe,
        D,
        Q,
        ee,
        de
      );
    }
    ne > Pe ? je(
      z,
      pe,
      D,
      !0,
      !1,
      ve
    ) : le(
      j,
      te,
      _e,
      pe,
      D,
      Q,
      ee,
      de,
      ve
    );
  }, Ne = (z, j, te, _e, pe, D, Q, ee, de) => {
    let ne = 0;
    const Pe = j.length;
    let ve = z.length - 1, Ie = Pe - 1;
    for (; ne <= ve && ne <= Ie; ) {
      const d = z[ne], Oe = j[ne] = de ? Br(j[ne]) : vr(j[ne]);
      if (Ua(d, Oe))
        O(
          d,
          Oe,
          te,
          null,
          pe,
          D,
          Q,
          ee,
          de
        );
      else
        break;
      ne++;
    }
    for (; ne <= ve && ne <= Ie; ) {
      const d = z[ve], Oe = j[Ie] = de ? Br(j[Ie]) : vr(j[Ie]);
      if (Ua(d, Oe))
        O(
          d,
          Oe,
          te,
          null,
          pe,
          D,
          Q,
          ee,
          de
        );
      else
        break;
      ve--, Ie--;
    }
    if (ne > ve) {
      if (ne <= Ie) {
        const d = Ie + 1, Oe = d < Pe ? j[d].el : _e;
        for (; ne <= Ie; )
          O(
            null,
            j[ne] = de ? Br(j[ne]) : vr(j[ne]),
            te,
            Oe,
            pe,
            D,
            Q,
            ee,
            de
          ), ne++;
      }
    } else if (ne > Ie)
      for (; ne <= ve; )
        $e(z[ne], pe, D, !0), ne++;
    else {
      const d = ne, Oe = ne, Le = /* @__PURE__ */ new Map();
      for (ne = Oe; ne <= Ie; ne++) {
        const at = j[ne] = de ? Br(j[ne]) : vr(j[ne]);
        at.key != null && Le.set(at.key, ne);
      }
      let Ge, Ze = 0;
      const gt = Ie - Oe + 1;
      let rt = !1, ae = 0;
      const Et = new Array(gt);
      for (ne = 0; ne < gt; ne++) Et[ne] = 0;
      for (ne = d; ne <= ve; ne++) {
        const at = z[ne];
        if (Ze >= gt) {
          $e(at, pe, D, !0);
          continue;
        }
        let _n;
        if (at.key != null)
          _n = Le.get(at.key);
        else
          for (Ge = Oe; Ge <= Ie; Ge++)
            if (Et[Ge - Oe] === 0 && Ua(at, j[Ge])) {
              _n = Ge;
              break;
            }
        _n === void 0 ? $e(at, pe, D, !0) : (Et[_n - Oe] = ne + 1, _n >= ae ? ae = _n : rt = !0, O(
          at,
          j[_n],
          te,
          null,
          pe,
          D,
          Q,
          ee,
          de
        ), Ze++);
      }
      const tr = rt ? Xv(Et) : fa;
      for (Ge = tr.length - 1, ne = gt - 1; ne >= 0; ne--) {
        const at = Oe + ne, _n = j[at], $ = j[at + 1], me = at + 1 < Pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $.el || gm($)
        ) : _e;
        Et[ne] === 0 ? O(
          null,
          _n,
          te,
          me,
          pe,
          D,
          Q,
          ee,
          de
        ) : rt && (Ge < 0 || ne !== tr[Ge] ? B(_n, te, me, 2) : Ge--);
      }
    }
  }, B = (z, j, te, _e, pe = null) => {
    const { el: D, type: Q, transition: ee, children: de, shapeFlag: ne } = z;
    if (ne & 6) {
      B(z.component.subTree, j, te, _e);
      return;
    }
    if (ne & 128) {
      z.suspense.move(j, te, _e);
      return;
    }
    if (ne & 64) {
      Q.move(z, j, te, nn);
      return;
    }
    if (Q === ot) {
      r(D, j, te);
      for (let ve = 0; ve < de.length; ve++)
        B(de[ve], j, te, _e);
      r(z.anchor, j, te);
      return;
    }
    if (Q === ou) {
      L(z, j, te);
      return;
    }
    if (_e !== 2 && ne & 1 && ee)
      if (_e === 0)
        ee.beforeEnter(D), r(D, j, te), On(() => ee.enter(D), pe);
      else {
        const { leave: ve, delayLeave: Ie, afterLeave: d } = ee, Oe = () => {
          z.ctx.isUnmounted ? a(D) : r(D, j, te);
        }, Le = () => {
          D._isLeaving && D[dv](
            !0
            /* cancelled */
          ), ve(D, () => {
            Oe(), d && d();
          });
        };
        Ie ? Ie(D, Oe, Le) : Le();
      }
    else
      r(D, j, te);
  }, $e = (z, j, te, _e = !1, pe = !1) => {
    const {
      type: D,
      props: Q,
      ref: ee,
      children: de,
      dynamicChildren: ne,
      shapeFlag: Pe,
      patchFlag: ve,
      dirs: Ie,
      cacheIndex: d,
      memo: Oe
    } = z;
    if (ve === -2 && (pe = !1), ee != null && (qr(), oo(ee, null, te, z, !0), Xr()), d != null && (j.renderCache[d] = void 0), Pe & 256) {
      j.ctx.deactivate(z);
      return;
    }
    const Le = Pe & 1 && Ie, Ge = !so(z);
    let Ze;
    if (Ge && (Ze = Q && Q.onVnodeBeforeUnmount) && pr(Ze, j, z), Pe & 6)
      We(z.component, te, _e);
    else {
      if (Pe & 128) {
        z.suspense.unmount(te, _e);
        return;
      }
      Le && bi(z, null, j, "beforeUnmount"), Pe & 64 ? z.type.remove(
        z,
        j,
        te,
        nn,
        _e
      ) : ne && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ne.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (D !== ot || ve > 0 && ve & 64) ? je(
        ne,
        j,
        te,
        !1,
        !0
      ) : (D === ot && ve & 384 || !pe && Pe & 16) && je(de, j, te), _e && mt(z);
    }
    const gt = Oe != null && d == null;
    (Ge && (Ze = Q && Q.onVnodeUnmounted) || Le || gt) && On(() => {
      Ze && pr(Ze, j, z), Le && bi(z, null, j, "unmounted"), gt && (z.el = null);
    }, te);
  }, mt = (z) => {
    const { type: j, el: te, anchor: _e, transition: pe } = z;
    if (j === ot) {
      et(te, _e);
      return;
    }
    if (j === ou) {
      T(z);
      return;
    }
    const D = () => {
      a(te), pe && !pe.persisted && pe.afterLeave && pe.afterLeave();
    };
    if (z.shapeFlag & 1 && pe && !pe.persisted) {
      const { leave: Q, delayLeave: ee } = pe, de = () => Q(te, D);
      ee ? ee(z.el, D, de) : de();
    } else
      D();
  }, et = (z, j) => {
    let te;
    for (; z !== j; )
      te = S(z), a(z), z = te;
    a(j);
  }, We = (z, j, te) => {
    const { bum: _e, scope: pe, job: D, subTree: Q, um: ee, m: de, a: ne } = z;
    Ud(de), Ud(ne), _e && gs(_e), pe.stop(), D && (D.flags |= 8, $e(Q, z, j, te)), ee && On(ee, j), On(() => {
      z.isUnmounted = !0;
    }, j);
  }, je = (z, j, te, _e = !1, pe = !1, D = 0) => {
    for (let Q = D; Q < z.length; Q++)
      $e(z[Q], j, te, _e, pe);
  }, Yt = (z) => {
    if (z.shapeFlag & 6)
      return Yt(z.component.subTree);
    if (z.shapeFlag & 128)
      return z.suspense.next();
    const j = S(z.anchor || z.el), te = j && j[cv];
    return te ? S(te) : j;
  };
  let An = !1;
  const vn = (z, j, te) => {
    let _e;
    z == null ? j._vnode && ($e(j._vnode, null, null, !0), _e = j._vnode.component) : O(
      j._vnode || null,
      z,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = z, An || (An = !0, Ed(_e), Gp(), An = !1);
  }, nn = {
    p: O,
    um: $e,
    m: B,
    r: mt,
    mt: he,
    mc: le,
    pc: we,
    pbc: I,
    n: Yt,
    o: e
  };
  return {
    render: vn,
    hydrate: void 0,
    createApp: Dv(vn)
  };
}
function au({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pm(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (qe(r) && qe(a))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let f = a[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[o] = Br(a[o]), f.el = u.el), !n && f.patchFlag !== -2 && pm(u, f)), f.type === ll && (f.patchFlag === -1 && (f = a[o] = Br(f)), f.el = u.el), f.type === ci && !f.el && (f.el = u.el);
    }
}
function Xv(e) {
  const t = e.slice(), n = [0];
  let r, a, o, u, f;
  const h = e.length;
  for (r = 0; r < h; r++) {
    const y = e[r];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, u = n.length - 1; o < u; )
        f = o + u >> 1, e[n[f]] < y ? o = f + 1 : u = f;
      y < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, u = n[o - 1]; o-- > 0; )
    n[o] = u, u = t[u];
  return n;
}
function mm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mm(t);
}
function Ud(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function gm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? gm(t.subTree) : null;
}
const bm = (e) => e.__isSuspense;
function Jv(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : av(e);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), ll = /* @__PURE__ */ Symbol.for("v-txt"), ci = /* @__PURE__ */ Symbol.for("v-cmt"), ou = /* @__PURE__ */ Symbol.for("v-stc"), uo = [];
let Gn = null;
function Me(e = !1) {
  uo.push(Gn = e ? null : []);
}
function Zv() {
  uo.pop(), Gn = uo[uo.length - 1] || null;
}
let po = 1;
function Gd(e, t = !1) {
  po += e, e < 0 && Gn && t && (Gn.hasOnce = !0);
}
function ym(e) {
  return e.dynamicChildren = po > 0 ? Gn || fa : null, Zv(), po > 0 && Gn && Gn.push(e), e;
}
function Ae(e, t, n, r, a, o) {
  return ym(
    X(
      e,
      t,
      n,
      r,
      a,
      o,
      !0
    )
  );
}
function Ei(e, t, n, r, a) {
  return ym(
    Ve(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function vm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ua(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _m = ({ key: e }) => e ?? null, ys = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Vt(e) || /* @__PURE__ */ gn(e) || Xe(e) ? { i: Un, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, a = null, o = e === ot ? 0 : 1, u = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _m(t),
    ref: t && ys(t),
    scopeId: Kp,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Un
  };
  return f ? (Dc(h, n), o & 128 && e.normalize(h)) : n && (h.shapeFlag |= Vt(n) ? 8 : 16), po > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Gn.push(h), h;
}
const Ve = Qv;
function Qv(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === em) && (e = ci), vm(e)) {
    const f = wa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dc(f, n), po > 0 && !o && Gn && (f.shapeFlag & 6 ? Gn[Gn.indexOf(e)] = f : Gn.push(f)), f.patchFlag = -2, f;
  }
  if (f1(e) && (e = e.__vccOpts), t) {
    t = e1(t);
    let { class: f, style: h } = t;
    f && !Vt(f) && (t.class = ft(f)), vt(h) && (/* @__PURE__ */ Nc(h) && !qe(h) && (h = yn({}, h)), t.style = Ut(h));
  }
  const u = Vt(e) ? 1 : bm(e) ? 128 : fv(e) ? 64 : vt(e) ? 4 : Xe(e) ? 2 : 0;
  return X(
    e,
    t,
    n,
    r,
    a,
    u,
    o,
    !0
  );
}
function e1(e) {
  return e ? /* @__PURE__ */ Nc(e) || lm(e) ? yn({}, e) : e : null;
}
function wa(e, t, n = !1, r = !1) {
  const { props: a, ref: o, patchFlag: u, children: f, transition: h } = e, y = t ? li(a || {}, t) : a, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && _m(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? qe(o) ? o.concat(ys(t)) : [o, ys(t)] : ys(t)
    ) : o,
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
    patchFlag: t && e.type !== ot ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wa(e.ssContent),
    ssFallback: e.ssFallback && wa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && r && Cc(
    g,
    h.clone(g)
  ), g;
}
function t1(e = " ", t = 0) {
  return Ve(ll, null, e, t);
}
function Rt(e = "", t = !1) {
  return t ? (Me(), Ei(ci, null, e)) : Ve(ci, null, e);
}
function vr(e) {
  return e == null || typeof e == "boolean" ? Ve(ci) : qe(e) ? Ve(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vm(e) ? Br(e) : Ve(ll, null, String(e));
}
function Br(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wa(e);
}
function Dc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Dc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !lm(t) ? t._ctx = Un : a === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Xe(t) ? (t = { default: t, _ctx: Un }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [t1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function li(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = ft([t.class, r.class]));
      else if (a === "style")
        t.style = Ut([t.style, r.style]);
      else if (Zs(a)) {
        const o = t[a], u = r[a];
        u && o !== u && !(qe(o) && o.includes(u)) ? t[a] = o ? [].concat(o, u) : u : u == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qs(a) && (t[a] = u);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function pr(e, t, n, r = null) {
  Cr(e, t, 7, [
    n,
    r
  ]);
}
const n1 = rm();
let r1 = 0;
function i1(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || n1, o = {
    uid: r1++,
    vnode: e,
    type: r,
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
    scope: new Ay(
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
    propsOptions: cm(r, a),
    emitsOptions: im(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Mt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Mt,
    data: Mt,
    props: Mt,
    attrs: Mt,
    slots: Mt,
    refs: Mt,
    setupState: Mt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fv.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const a1 = () => pn || Un;
let Fs, Hu;
{
  const e = nl(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((u) => u(o)) : a[0](o);
    };
  };
  Fs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pn = n
  ), Hu = t(
    "__VUE_SSR_SETTERS__",
    (n) => mo = n
  );
}
const ko = (e) => {
  const t = pn;
  return Fs(e), e.scope.on(), () => {
    e.scope.off(), Fs(t);
  };
}, Bd = () => {
  pn && pn.scope.off(), Fs(null);
};
function xm(e) {
  return e.vnode.shapeFlag & 4;
}
let mo = !1;
function o1(e, t = !1, n = !1) {
  t && Hu(t);
  const { props: r, children: a } = e.vnode, o = xm(e);
  jv(e, r, o, t), Bv(e, a, n || t);
  const u = o ? s1(e, t) : void 0;
  return t && Hu(!1), u;
}
function s1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nv);
  const { setup: r } = n;
  if (r) {
    qr();
    const a = e.setupContext = r.length > 1 ? u1(e) : null, o = ko(e), u = wo(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = _p(u);
    if (Xr(), o(), (f || e.sp) && !so(e) && Xp(e), f) {
      if (u.then(Bd, Bd), t)
        return u.then((h) => {
          Kd(e, h);
        }).catch((h) => {
          il(h, e, 0);
        });
      e.asyncDep = u;
    } else
      Kd(e, u);
  } else
    Sm(e);
}
function Kd(e, t, n) {
  Xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = jp(t)), Sm(e);
}
function Sm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Pr);
  {
    const a = ko(e);
    qr();
    try {
      Pv(e);
    } finally {
      Xr(), a();
    }
  }
}
const l1 = {
  get(e, t) {
    return hn(e, "get", ""), e[t];
  }
};
function u1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, l1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ul(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jp(qy(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lo)
        return lo[n](e);
    },
    has(t, n) {
      return n in t || n in lo;
    }
  })) : e.proxy;
}
function c1(e, t = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function f1(e) {
  return Xe(e) && "__vccOpts" in e;
}
const kt = (e, t) => /* @__PURE__ */ ev(e, t, mo), d1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Uu;
const Wd = typeof window < "u" && window.trustedTypes;
if (Wd)
  try {
    Uu = /* @__PURE__ */ Wd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wm = Uu ? (e) => Uu.createHTML(e) : (e) => e, h1 = "http://www.w3.org/2000/svg", p1 = "http://www.w3.org/1998/Math/MathML", jr = typeof document < "u" ? document : null, Yd = jr && /* @__PURE__ */ jr.createElement("template"), m1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? jr.createElementNS(h1, e) : t === "mathml" ? jr.createElementNS(p1, e) : n ? jr.createElement(e, { is: n }) : jr.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => jr.createTextNode(e),
  createComment: (e) => jr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, o) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      Yd.innerHTML = wm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Yd.content;
      if (r === "svg" || r === "mathml") {
        const h = f.firstChild;
        for (; h.firstChild; )
          f.appendChild(h.firstChild);
        f.removeChild(h);
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
}, g1 = /* @__PURE__ */ Symbol("_vtc");
function b1(e, t, n) {
  const r = e[g1];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rs = /* @__PURE__ */ Symbol("_vod"), km = /* @__PURE__ */ Symbol("_vsh"), Mo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ga(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ga(e, !0), r.enter(e)) : r.leave(e, () => {
      Ga(e, !1);
    }) : Ga(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ga(e, t);
  }
};
function Ga(e, t) {
  e.style.display = t ? e[Rs] : "none", e[km] = !t;
}
const y1 = /* @__PURE__ */ Symbol(""), v1 = /(?:^|;)\s*display\s*:/;
function _1(e, t, n) {
  const r = e.style, a = Vt(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (Vt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && vs(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && vs(r, u, "");
    for (const u in n)
      u === "display" && (o = !0), vs(r, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = r[y1];
      u && (n += ";" + u), r.cssText = n, o = v1.test(n);
    }
  } else t && e.removeAttribute("style");
  Rs in e && (e[Rs] = o ? r.display : "", e[km] && (r.display = "none"));
}
const qd = /\s*!important$/;
function vs(e, t, n) {
  if (qe(n))
    n.forEach((r) => vs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = x1(e, t);
    qd.test(n) ? e.setProperty(
      Ti(r),
      n.replace(qd, ""),
      "important"
    ) : e[r] = n;
  }
}
const Xd = ["Webkit", "Moz", "ms"], su = {};
function x1(e, t) {
  const n = su[t];
  if (n)
    return n;
  let r = Pn(t);
  if (r !== "filter" && r in e)
    return su[t] = r;
  r = tl(r);
  for (let a = 0; a < Xd.length; a++) {
    const o = Xd[a] + r;
    if (o in e)
      return su[t] = o;
  }
  return t;
}
const Jd = "http://www.w3.org/1999/xlink";
function Zd(e, t, n, r, a, o = Ny(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Jd, t.slice(6, t.length)) : e.setAttributeNS(Jd, t, n) : n == null || o && !kp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ar(n) ? String(n) : n
  );
}
function Qd(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wm(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const f = o === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = kp(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function oa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function S1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const eh = /* @__PURE__ */ Symbol("_vei");
function w1(e, t, n, r, a = null) {
  const o = e[eh] || (e[eh] = {}), u = o[t];
  if (r && u)
    u.value = r;
  else {
    const [f, h] = k1(t);
    if (r) {
      const y = o[t] = P1(
        r,
        a
      );
      oa(e, f, y, h);
    } else u && (S1(e, f, u, h), o[t] = void 0);
  }
}
const th = /(?:Once|Passive|Capture)$/;
function k1(e) {
  let t;
  if (th.test(e)) {
    t = {};
    let r;
    for (; r = e.match(th); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ti(e.slice(2)), t];
}
let lu = 0;
const M1 = /* @__PURE__ */ Promise.resolve(), N1 = () => lu || (M1.then(() => lu = 0), lu = Date.now());
function P1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Cr(
      A1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = N1(), n;
}
function A1(e, t) {
  if (qe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const nh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, C1 = (e, t, n, r, a, o) => {
  const u = a === "svg";
  t === "class" ? b1(e, r, u) : t === "style" ? _1(e, n, r) : Zs(t) ? Qs(t) || w1(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : I1(e, t, r, u)) ? (Qd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zd(e, t, r, u, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (T1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Vt(r))) ? Qd(e, Pn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Zd(e, t, r, u));
};
function I1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && nh(t) && Xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return nh(t) && Vt(n) ? !1 : t in e;
}
function T1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Pn(t);
  return Array.isArray(n) ? n.some((a) => Pn(a) === r) : Object.keys(n).some((a) => Pn(a) === r);
}
const rh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => gs(t, n) : t;
};
function E1(e) {
  e.target.composing = !0;
}
function ih(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const uu = /* @__PURE__ */ Symbol("_assign");
function ah(e, t, n) {
  return t && (e = e.trim()), n && (e = yc(e)), e;
}
const oh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[uu] = rh(a);
    const o = r || a.props && a.props.type === "number";
    oa(e, t ? "change" : "input", (u) => {
      u.target.composing || e[uu](ah(e.value, n, o));
    }), (n || o) && oa(e, "change", () => {
      e.value = ah(e.value, n, o);
    }), t || (oa(e, "compositionstart", E1), oa(e, "compositionend", ih), oa(e, "change", ih));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: o } }, u) {
    if (e[uu] = rh(u), e.composing) return;
    const f = (o || e.type === "number") && !/^0\d/.test(e.value) ? yc(e.value) : e.value, h = t ?? "";
    if (f === h)
      return;
    const y = e.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === h) || (e.value = h);
  }
}, D1 = ["ctrl", "shift", "alt", "meta"], O1 = {
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
  exact: (e, t) => D1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...o) => {
    for (let u = 0; u < t.length; u++) {
      const f = O1[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...o);
  }));
}, F1 = /* @__PURE__ */ yn({ patchProp: C1 }, m1);
let sh;
function R1() {
  return sh || (sh = Wv(F1));
}
const Oc = ((...e) => {
  const t = R1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = z1(r);
    if (!a) return;
    const o = t._component;
    !Xe(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, L1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function L1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function z1(e) {
  return Vt(e) ? document.querySelector(e) : e;
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function V1(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Gt = Math.PI / 180, Wn = 180 / Math.PI;
function cr(e, t, n) {
  return { x: e, y: t, z: n };
}
function ka(e, t) {
  return cr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ma(e, t) {
  return cr(e.x * t, e.y * t, e.z * t);
}
function ma(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Fc(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return cr(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * Gt, r = t * Gt, a = Math.cos(r);
  return cr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ln(e, t, n = 0) {
  const r = Number(e || 0) * Gt, a = Number(t || 0) * Gt, o = n * Gt, u = Math.cos(r), f = Math.sin(r), h = Math.cos(a), y = Math.sin(a), g = Math.cos(o), _ = Math.sin(o);
  return {
    right: cr(
      u * g - f * y * _,
      h * _,
      -f * g - u * y * _
    ),
    up: cr(
      -u * _ - f * y * g,
      h * g,
      f * _ - u * y * g
    ),
    fwd: cr(f * h, y, u * h)
  };
}
const jt = Math.PI / 180, Mm = Math.PI * 2, Gu = 2048;
function wt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function cl(e, t, n) {
  return { x: e, y: t, z: n };
}
function lh(e, t) {
  return cl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function uh(e, t) {
  return cl(e.x * t, e.y * t, e.z * t);
}
function cu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $1(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return cl(e.x / t, e.y / t, e.z / t);
}
function j1(e, t) {
  const n = (Number(e || 0) - 0.5) * Mm, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return cl(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ch(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Number(n || 1)), u = Math.max(512, Gu), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: o,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function fh(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function fu(e, t, n) {
  const r = fh(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = fh(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(r), u;
  }
  const o = e.createProgram();
  if (e.attachShader(o, r), e.attachShader(o, a), e.linkProgram(o), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(o, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(o) || "program link failed";
    throw e.deleteProgram(o), new Error(u);
  }
  return o;
}
const du = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Nm = `
mat3 cameraBasis(float yaw, float pitch, float roll) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 fwd = normalize(vec3(cp * sy, sp, cp * cy));
  vec3 right = vec3(cy, 0.0, -sy);
  vec3 up = normalize(cross(fwd, right));
  vec3 rolledRight = normalize(right * cr + up * sr);
  vec3 rolledUp = normalize(right * (-sr) + up * cr);
  return mat3(rolledRight, rolledUp, fwd);
}`, H1 = `#version 300 es
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

${Nm}

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
}`, U1 = `#version 300 es
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

${Nm}

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
}`, G1 = `#version 300 es
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
function Ba(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(wt(r, 1, 179) * jt * 0.5) * (n / Math.max(t, 1))) / jt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: wt(r, 1, 179),
    vFovDeg: wt(a, 0.1, 179)
  };
}
function B1(e) {
  const t = Ln(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(wt(Number(e.hFovDeg), 0.1, 179) * 0.5 * jt),
    tanY: Math.tan(wt(Number(e.vFovDeg), 0.1, 179) * 0.5 * jt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: wt(Number(e.opacity ?? 1), 0, 1)
  };
}
function K1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, o = null, u = null, f = null, h = null, y = null, g = null, _ = null, S = null, N = !1, b = ch(1, 1, 1), O = null, V = null, R = null, P = null, L = null;
  const T = /* @__PURE__ */ new Map();
  let F = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, G = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, U = {
    paint: !1,
    mask: !1
  };
  function le(D = null, Q = null) {
    const ee = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ee), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, D ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Q ?? n.CLAMP_TO_EDGE), ee;
  }
  function oe() {
    if (N) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = fu(n, du, H1), a = fu(n, du, U1), o = fu(n, du, G1), O = {
        mode: n.getUniformLocation(r, "u_mode"),
        yaw: n.getUniformLocation(r, "u_yaw"),
        pitch: n.getUniformLocation(r, "u_pitch"),
        roll: n.getUniformLocation(r, "u_roll"),
        hFov: n.getUniformLocation(r, "u_hfov"),
        vFov: n.getUniformLocation(r, "u_vfov"),
        viewport: n.getUniformLocation(r, "u_viewport"),
        opacity: n.getUniformLocation(r, "u_opacity"),
        coverage: n.getUniformLocation(r, "u_coverage"),
        background: n.getUniformLocation(r, "u_background")
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
      }, R = {
        texture: n.getUniformLocation(o, "u_texture"),
        mode: n.getUniformLocation(o, "u_mode"),
        viewRight: n.getUniformLocation(o, "u_viewRight"),
        viewUp: n.getUniformLocation(o, "u_viewUp"),
        viewFwd: n.getUniformLocation(o, "u_viewFwd"),
        viewHfov: n.getUniformLocation(o, "u_viewHfov"),
        viewVfov: n.getUniformLocation(o, "u_viewVfov"),
        stickerRight: n.getUniformLocation(o, "u_stickerRight"),
        stickerUp: n.getUniformLocation(o, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(o, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(o, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(o, "u_stickerTanY"),
        crop: n.getUniformLocation(o, "u_crop"),
        opacity: n.getUniformLocation(o, "u_opacity")
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
      ]), n.STATIC_DRAW), f = le(n.REPEAT, n.CLAMP_TO_EDGE), h = le(n.REPEAT, n.CLAMP_TO_EDGE), y = le(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function I() {
    var D;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), h && n.deleteTexture(h), y && n.deleteTexture(y), T.forEach((Q) => {
          Ne(Q);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), o && n.deleteProgram(o), (D = n.getExtension("WEBGL_lose_context")) == null || D.loseContext();
      } catch {
      }
      n = null, r = null, a = null, o = null, u = null, f = null, h = null, y = null, T.clear(), g = null, _ = null, S = null, G = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, U = {
        paint: !1,
        mask: !1
      }, P = null, L = null, N = !1;
    }
  }
  function Y(D, Q, ee = 1) {
    b = ch(D, Q, ee), (t.width !== b.width || t.height !== b.height) && (t.width = b.width, t.height = b.height);
  }
  function ie(D) {
    D === "background" ? g = null : D === "paint" ? _ = null : S = null, G[D] && (G[D].width = 0, G[D].height = 0);
  }
  function J() {
    U.paint = !1, U.mask = !1;
  }
  function he(D) {
    J(), D === "paint" ? U.paint = !0 : D === "mask" && (U.mask = !0);
  }
  function fe(D, Q, ee = [], de = { width: 0, height: 0 }, ne = !1) {
    if (!n || !D || !Q) return !1;
    const Pe = Number(Q.width || Q.videoWidth || Q.naturalWidth || 0), ve = Number(Q.height || Q.videoHeight || Q.naturalHeight || 0);
    if (!(Pe > 1) || !(ve > 1)) return !1;
    const Ie = Array.isArray(ee) ? ee.filter((d) => d && d.w > 0 && d.h > 0) : [];
    if (!Ie.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ne ? 1 : 0), de.width !== Pe || de.height !== ve)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), de.width = Pe, de.height = ve, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), L = P.getContext("2d")), !L)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ie) {
      const Oe = Math.max(0, Math.floor(Number(d.x || 0))), Le = Math.max(0, Math.floor(Number(d.y || 0))), Ge = Math.min(Pe - Oe, Math.ceil(Number(d.w || 0))), Ze = Math.min(ve - Le, Math.ceil(Number(d.h || 0)));
      if (!(Ge <= 0 || Ze <= 0)) {
        if (P.width !== Ge || P.height !== Ze) {
          if (P.width = Ge, P.height = Ze, L = P.getContext("2d"), !L)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          L.clearRect(0, 0, Ge, Ze);
        L.drawImage(Q, Oe, Le, Ge, Ze, 0, 0, Ge, Ze), n.texSubImage2D(n.TEXTURE_2D, 0, Oe, Le, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ke(D, Q, ee, de, ne = null, Pe = !1) {
    if (!oe()) return !1;
    if (!ee)
      return ie(D), !1;
    const ve = String(de ?? ""), Ie = D === "background" ? g : D === "paint" ? _ : S, d = G[D], Oe = Number(ee.width || ee.videoWidth || ee.naturalWidth || 0), Le = Number(ee.height || ee.videoHeight || ee.naturalHeight || 0), Ge = d.width !== Oe || d.height !== Le;
    if (Ie === ve && !Ge && !(Array.isArray(ne) && ne.length)) return !0;
    if (!(Oe > 0) || !(Le > 0))
      return ie(D), !1;
    if (n.bindTexture(n.TEXTURE_2D, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Pe ? 1 : 0), !(Array.isArray(ne) && ne.length ? fe(Q, ee, ne, d, Pe) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ie(D), !1;
      d.width = Oe, d.height = Le;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), D === "background" ? g = ve : D === "paint" ? _ = ve : S = ve, !0;
  }
  function A(D, Q) {
    return ke("background", f, D, Q, null, !0);
  }
  function we(D, Q, ee = null) {
    return ke("paint", h, D, Q, ee, !0);
  }
  function Ce(D, Q, ee = null) {
    return ke("mask", y, D, Q, ee, !0);
  }
  function Ne(D) {
    D != null && D.texture && n && n.deleteTexture(D.texture);
  }
  function B(D = /* @__PURE__ */ new Set()) {
    T.forEach((Q, ee) => {
      D.has(ee) || (Ne(Q), T.delete(ee));
    });
  }
  function $e(D) {
    if (!n || !(D != null && D.assetId) || !(D != null && D.source)) return null;
    const Q = String(D.assetId), ee = String(D.revision ?? ""), de = D.source, ne = Number(de.width || de.naturalWidth || de.videoWidth || 0), Pe = Number(de.height || de.naturalHeight || de.videoHeight || 0);
    if (ne <= 0 || Pe <= 0) return null;
    let ve = T.get(Q);
    if (ve || (ve = {
      texture: le(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(Q, ve)), ve.revision !== ee || ve.width !== ne || ve.height !== Pe) {
      if (n.bindTexture(n.TEXTURE_2D, ve.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, de), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ve.revision = ee, ve.width = ne, ve.height = Pe;
    }
    return ve.texture;
  }
  function mt(D = []) {
    if (!oe()) return !1;
    const Q = /* @__PURE__ */ new Set();
    return D.forEach((ee) => {
      !(ee != null && ee.assetId) || !(ee != null && ee.source) || (Q.add(String(ee.assetId)), $e(ee));
    }), B(Q), !0;
  }
  function et() {
    return oe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function We(D) {
    n.useProgram(D), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function je(D, Q = {}) {
    if (!g) return null;
    n.disable(n.BLEND), We(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(O.background, 0), n.uniform2f(O.viewport, Math.max(1, b.width), Math.max(1, b.height)), n.uniform1i(O.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ee = Ba(D, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(O.yaw, Number(ee.yawDeg || 0) * jt), n.uniform1f(O.pitch, Number(ee.pitchDeg || 0) * jt), n.uniform1f(O.roll, Number(ee.rollDeg || 0) * jt), n.uniform1f(O.hFov, wt(Number(ee.hFovDeg || 90), 0.1, 179) * jt), n.uniform1f(O.vFov, wt(Number(ee.vFovDeg || 60), 0.1, 179) * jt), n.uniform1f(O.opacity, wt(Number(Q.backgroundOpacity ?? 1), 0, 1));
    const de = Number((D == null ? void 0 : D.coverageDeg) || (Q == null ? void 0 : Q.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(O.coverage, de), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Yt(D, Q = {}) {
    const ee = U.paint && _ != null, de = U.mask && S != null;
    if (!ee && !de) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), We(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ne = Ba(D, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(ne.yawDeg || 0) * jt), n.uniform1f(V.pitch, Number(ne.pitchDeg || 0) * jt), n.uniform1f(V.roll, Number(ne.rollDeg || 0) * jt), n.uniform1f(V.hFov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * jt), n.uniform1f(V.vFov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * jt), n.uniform1f(V.paintOpacity, wt(Number(Q.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, wt(Number(Q.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, ee ? 1 : 0), n.uniform1i(V.hasMask, de ? 1 : 0), n.uniform1i(V.showMaskTint, Q.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function An(D, Q) {
    var d, Oe, Le, Ge, Ze, gt, rt;
    const ee = Array.isArray(D == null ? void 0 : D.objects) ? D.objects : [];
    if (!ee.length) {
      J(), B(/* @__PURE__ */ new Set());
      return;
    }
    const de = (Q == null ? void 0 : Q.mode) === "unwrap" ? 0 : (Q == null ? void 0 : Q.mode) === "cutout" ? 2 : 1, ne = Ba(Q, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Pe = Ln(ne.yawDeg, ne.pitchDeg, ne.rollDeg), ve = ee.slice().sort((ae, Et) => Number((ae == null ? void 0 : ae.zIndex) || 0) - Number((Et == null ? void 0 : Et.zIndex) || 0)), Ie = /* @__PURE__ */ new Set();
    J();
    for (const ae of ve)
      if (!(!ae || ae.visible === !1)) {
        if (ae.type === "sticker") {
          const Et = String(((d = ae == null ? void 0 : ae.params) == null ? void 0 : d.assetId) || (ae == null ? void 0 : ae.id) || "");
          if (!Et) continue;
          Ie.add(Et);
          const tr = $e({
            assetId: Et,
            source: ae.source,
            revision: ae.revision
          });
          if (!tr) continue;
          const at = B1({
            yawDeg: ((Oe = ae == null ? void 0 : ae.transform) == null ? void 0 : Oe.yawDeg) || 0,
            pitchDeg: ((Le = ae == null ? void 0 : ae.transform) == null ? void 0 : Le.pitchDeg) || 0,
            rollDeg: ((Ge = ae == null ? void 0 : ae.transform) == null ? void 0 : Ge.rollDeg) || 0,
            hFovDeg: ((Ze = ae == null ? void 0 : ae.transform) == null ? void 0 : Ze.hFovDeg) || 30,
            vFovDeg: ((gt = ae == null ? void 0 : ae.transform) == null ? void 0 : gt.vFovDeg) || 30,
            crop: ((rt = ae == null ? void 0 : ae.params) == null ? void 0 : rt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ae == null ? void 0 : ae.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), We(o), n.uniform1i(R.texture, 0), n.uniform1i(R.mode, de), n.uniform3f(R.viewRight, Pe.right.x, Pe.right.y, Pe.right.z), n.uniform3f(R.viewUp, Pe.up.x, Pe.up.y, Pe.up.z), n.uniform3f(R.viewFwd, Pe.fwd.x, Pe.fwd.y, Pe.fwd.z), n.uniform1f(R.viewHfov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * jt), n.uniform1f(R.viewVfov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * jt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, tr), n.uniform3f(R.stickerRight, at.right.x, at.right.y, at.right.z), n.uniform3f(R.stickerUp, at.up.x, at.up.y, at.up.z), n.uniform3f(R.stickerFwd, at.fwd.x, at.fwd.y, at.fwd.z), n.uniform1f(R.stickerTanX, Math.max(1e-6, at.tanX)), n.uniform1f(R.stickerTanY, Math.max(1e-6, at.tanY)), n.uniform4f(
            R.crop,
            wt(Number(at.crop.x0 ?? 0), 0, 1),
            wt(Number(at.crop.y0 ?? 0), 0, 1),
            wt(Number(at.crop.x1 ?? 1), 0, 1),
            wt(Number(at.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(R.opacity, at.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ae.type === "paint" || ae.type === "raster") {
          if (!we(ae.source, ae.revision ?? "")) continue;
          he("paint"), Yt(Q, {
            paintOpacity: Number(ae.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ae.type === "mask") {
          if (!Ce(ae.source, ae.revision ?? "")) continue;
          he("mask"), Yt(Q, {
            paintOpacity: 0,
            maskOpacity: Number(ae.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    B(Ie), J();
  }
  function vn(D) {
    return !et() || !g ? null : (je({
      mode: "panorama",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      fovDeg: (D == null ? void 0 : D.fovDeg) || 100
    }, D), t);
  }
  function nn(D) {
    return !et() || !g ? null : (je({ mode: "unwrap" }, D), t);
  }
  function sn(D) {
    return !et() || !g ? null : (je({
      mode: "cutout",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      rollDeg: (D == null ? void 0 : D.rollDeg) || 0,
      hFovDeg: (D == null ? void 0 : D.hFovDeg) || 90,
      vFovDeg: (D == null ? void 0 : D.vFovDeg) || 60
    }, D), t);
  }
  function z(D = {}) {
    if (!oe()) return !1;
    const Q = Object.prototype.hasOwnProperty.call(D, "backgroundSource"), ee = Object.prototype.hasOwnProperty.call(D, "paintSource"), de = Object.prototype.hasOwnProperty.call(D, "maskSource"), ne = Object.prototype.hasOwnProperty.call(D, "textures"), Pe = Object.prototype.hasOwnProperty.call(D, "scene");
    return Q && A(D.backgroundSource, D.backgroundRevision ?? ""), ee && we(D.paintSource, D.paintRevision ?? ""), de && Ce(D.maskSource, D.maskRevision ?? ""), ne && (mt(D.textures || []), F.textures = D.textures || []), Pe && (F.scene = D.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "objectPass") && (F.objectPass = D.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "backgroundOpacity") && (F.backgroundOpacity = Number(D.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(D, "showMaskTint") && (F.showMaskTint = D.showMaskTint === !0), Object.prototype.hasOwnProperty.call(D, "coverageDeg") && (F.coverageDeg = Number(D.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function j(D = {}) {
    return !oe() || (Y(D.width, D.height, D.dpr || 1), !et()) || !z(D) ? null : (g && je(D.view, {
      ...D,
      backgroundOpacity: Number(D.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(D.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), An(
      F.objectPass || { objects: [] },
      D.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function te(D = {}) {
    return z(D);
  }
  function _e(D, Q, ee) {
    const de = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || b.sourceWidth || b.width || 1)), ne = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || b.sourceHeight || b.height || 1)), Pe = Number(Q), ve = Number(ee);
    if (!Number.isFinite(Pe) || !Number.isFinite(ve)) return null;
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return { u: (Pe / de % 1 + 1) % 1, v: wt(ve / ne, 0, 1) };
    const Ie = Ba(D, de, ne);
    if (!Ie) return null;
    const d = Ln(Ie.yawDeg, Ie.pitchDeg, Ie.rollDeg), Oe = (Pe - de * 0.5) / (de * 0.5) * Math.tan(wt(Ie.hFovDeg, 1, 179) * jt * 0.5), Le = (ne * 0.5 - ve) / (ne * 0.5) * Math.tan(wt(Ie.vFovDeg, 0.1, 179) * jt * 0.5), Ge = $1(lh(lh(uh(d.right, Oe), uh(d.up, Le)), d.fwd));
    return {
      u: (Math.atan2(Ge.x, Ge.z) / Mm + 0.5 + 1) % 1,
      v: wt(0.5 - Math.asin(wt(Ge.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function pe(D, Q, ee) {
    const de = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || b.sourceWidth || b.width || 1)), ne = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || b.sourceHeight || b.height || 1));
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return {
        x: (Number(Q || 0) % 1 + 1) % 1 * de,
        y: wt(Number(ee || 0), 0, 1) * ne,
        visible: !0
      };
    const Pe = Ba(D, de, ne);
    if (!Pe)
      return { x: de * 0.5, y: ne * 0.5, visible: !1 };
    const ve = Ln(Pe.yawDeg, Pe.pitchDeg, Pe.rollDeg), Ie = j1(Q, ee), d = cu(Ie, ve.right), Oe = cu(Ie, ve.up), Le = cu(Ie, ve.fwd);
    if (Le <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ge = de * 0.5 + d / Le * (de * 0.5 / Math.tan(wt(Pe.hFovDeg, 1, 179) * jt * 0.5)), Ze = ne * 0.5 - Oe / Le * (ne * 0.5 / Math.tan(wt(Pe.vFovDeg, 0.1, 179) * jt * 0.5));
    return { x: Ge, y: Ze, visible: Ge >= 0 && Ge <= de && Ze >= 0 && Ze <= ne };
  }
  return {
    init: oe,
    dispose: I,
    setViewport: Y,
    setBackgroundErp: A,
    setPaintErp: we,
    setMaskErp: Ce,
    renderPanorama: vn,
    renderUnwrap: nn,
    renderCutout: sn,
    renderScene: j,
    syncState: te,
    screenToErpUv: _e,
    erpUvToScreen: pe,
    getCanvas() {
      return t;
    },
    isSupported() {
      return oe();
    },
    getViewport() {
      return { ...b };
    }
  };
}
function dh(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function W1() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, h) {
    const y = t(u);
    let g = e.get(y) || null;
    if (!g) {
      const N = document.createElement("canvas"), b = N.getContext("2d");
      if (!b) return null;
      g = {
        id: y,
        canvas: N,
        ctx: b,
        width: 0,
        height: 0
      }, e.set(y, g);
    }
    const _ = dh(f), S = dh(h);
    return g.width !== _ && (g.canvas.width = _, g.width = _), g.height !== S && (g.canvas.height = S, g.height = S), g;
  }
  function r(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = r(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function o() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: r,
    clearTarget: a,
    dispose: o
  };
}
const Y1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), q1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Pm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function X1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function J1(e = {}) {
  const t = q1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Pm(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Z1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Y1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Pm(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: X1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Q1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => Z1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const o = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return o - u;
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Na(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: J1((e == null ? void 0 : e.background) || {}),
    objectPass: Q1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function e_(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Rc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? e_(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function t_(e, t, n = {}) {
  return e ? Rc({
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
function n_(e, t, n = {}) {
  return e ? Rc({
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
function r_(e, t, n = {}) {
  return e ? Rc({
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
function Am(e = {}) {
  const t = [], n = t_(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = n_(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((o, u) => {
    const f = r_(
      (o == null ? void 0 : o.source) || null,
      (o == null ? void 0 : o.revision) || "",
      {
        id: String((o == null ? void 0 : o.id) || `raster_layer_${u}`),
        zIndex: Number((o == null ? void 0 : o.zIndex) ?? (o == null ? void 0 : o.z_index) ?? 90),
        opacity: Number((o == null ? void 0 : o.opacity) ?? 1),
        visible: (o == null ? void 0 : o.visible) !== !1,
        transform: (o == null ? void 0 : o.transform) || null,
        params: (o == null ? void 0 : o.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((o, u) => {
    const f = Number((o == null ? void 0 : o.zIndex) || 0), h = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== h ? f - h : String((o == null ? void 0 : o.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function Lc(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((r) => [String((r == null ? void 0 : r.assetId) || ""), r]).filter(([r, a]) => r && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((r) => {
    const a = n.get(String((r == null ? void 0 : r.assetId) || ""));
    return a ? {
      id: String((r == null ? void 0 : r.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((r == null ? void 0 : r.zIndex) || 0),
      opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
      visible: (r == null ? void 0 : r.visible) !== !1,
      transform: {
        yawDeg: Number((r == null ? void 0 : r.yawDeg) || 0),
        pitchDeg: Number((r == null ? void 0 : r.pitchDeg) || 0),
        rollDeg: Number((r == null ? void 0 : r.rollDeg) || 0),
        hFovDeg: Number((r == null ? void 0 : r.hFovDeg) || 30),
        vFovDeg: Number((r == null ? void 0 : r.vFovDeg) || 30)
      },
      params: {
        assetId: String((r == null ? void 0 : r.assetId) || ""),
        crop: (r == null ? void 0 : r.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function Cm(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, o = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Na({
    stateRevision: r,
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
      objects: Lc(a, o)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Qa(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = Lc(t, n), a = Am({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Na({
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
      objects: [...r, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function i_(e = {}) {
  var o, u, f, h, y, g, _, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const N = Na(e), b = Array.isArray((o = N.objectPass) == null ? void 0 : o.objects) ? N.objectPass.objects : [], O = {
      stickers: b.filter((L) => L.type === "sticker").map((L) => {
        var T, F, G, U, le, oe, I, Y, ie, J, he, fe, ke;
        return {
          id: L.id,
          assetId: String(((T = L == null ? void 0 : L.params) == null ? void 0 : T.assetId) || ((F = L == null ? void 0 : L.params) == null ? void 0 : F.asset_id) || (L == null ? void 0 : L.id) || ""),
          yawDeg: Number(((G = L == null ? void 0 : L.transform) == null ? void 0 : G.yawDeg) ?? ((U = L == null ? void 0 : L.params) == null ? void 0 : U.yawDeg) ?? 0),
          pitchDeg: Number(((le = L == null ? void 0 : L.transform) == null ? void 0 : le.pitchDeg) ?? ((oe = L == null ? void 0 : L.params) == null ? void 0 : oe.pitchDeg) ?? 0),
          rollDeg: Number(((I = L == null ? void 0 : L.transform) == null ? void 0 : I.rollDeg) ?? ((Y = L == null ? void 0 : L.params) == null ? void 0 : Y.rollDeg) ?? 0),
          hFovDeg: Number(((ie = L == null ? void 0 : L.transform) == null ? void 0 : ie.hFovDeg) ?? ((J = L == null ? void 0 : L.params) == null ? void 0 : J.hFovDeg) ?? 30),
          vFovDeg: Number(((he = L == null ? void 0 : L.transform) == null ? void 0 : he.vFovDeg) ?? ((fe = L == null ? void 0 : L.params) == null ? void 0 : fe.vFovDeg) ?? 30),
          crop: ((ke = L == null ? void 0 : L.params) == null ? void 0 : ke.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((L == null ? void 0 : L.opacity) ?? 1),
          visible: (L == null ? void 0 : L.visible) !== !1,
          zIndex: Number((L == null ? void 0 : L.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = N.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = N.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, V = b.filter((L) => L.type === "sticker").map((L) => {
      var T, F;
      return {
        assetId: String(((T = L == null ? void 0 : L.params) == null ? void 0 : T.assetId) || ((F = L == null ? void 0 : L.params) == null ? void 0 : F.asset_id) || (L == null ? void 0 : L.id) || ""),
        source: L.source || null,
        revision: String((L == null ? void 0 : L.revision) || "")
      };
    }).filter((L) => L.assetId && L.source), R = b.find((L) => L.type === "paint") || null, P = b.find((L) => L.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = N.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((y = N.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((g = N.background) == null ? void 0 : g.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (R == null ? void 0 : R.source) || null,
      paintRevision: String((R == null ? void 0 : R.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: V,
      scene: O,
      objectPass: N.objectPass,
      backgroundOpacity: Number(((_ = N.background) == null ? void 0 : _.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = Na({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...Lc(t, n),
        ...Am({
          paintSource: e.paintSource || r.paintSource || null,
          paintRevision: e.paintRevision || r.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || r.maskSource || null,
          maskRevision: e.maskRevision || r.maskRevision || "",
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
    paintSource: r.paintSource || null,
    paintRevision: String(r.paintRevision || ""),
    maskSource: r.maskSource || null,
    maskRevision: String(r.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function a_(e) {
  let t = null;
  function n(o = {}) {
    const u = i_(o);
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
  function r() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: r,
    clear: a
  };
}
function No(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => K1(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => W1(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => a_(V), a = t(e), o = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const h = r({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const R = { ...V }, P = a.syncState(R);
        return P && (f = R, P);
      }
      return f = { ...V }, !0;
    }
  });
  function y(V = {}) {
    return h.sync(V);
  }
  function g(V = {}, R = {}) {
    return f ? a.renderScene({
      ...f,
      view: V,
      width: R.width,
      height: R.height,
      dpr: R.dpr,
      backgroundOpacity: R.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: R.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function _(V, R, P = {}, L = {}) {
    if (!R) return !1;
    const T = Math.min(1, Math.max(0.1, Number(L.renderScale ?? 1))), F = g(P, {
      ...L,
      width: Math.max(1, Math.round(R.w * T)),
      height: Math.max(1, Math.round(R.h * T))
    });
    return F ? V ? (V.canvas && F === V.canvas || V.drawImage(F, R.x, R.y, R.w, R.h), !0) : !!o && F === o : !1;
  }
  function S(V, R = {}, P = {}) {
    const L = Number(P.width || 0), T = Number(P.height || 0);
    if (!(L > 0) || !(T > 0)) return null;
    const F = u.ensureTarget(V, L, T);
    if (!F) return null;
    const G = g(R, {
      ...P,
      width: L,
      height: T
    });
    return G ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(G, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function N(V) {
    u.clearTarget(V);
  }
  function b() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), f = null;
  }
  function O() {
    f = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: g,
    renderToContext: _,
    renderToTarget: S,
    clearTarget: N,
    snapshotState: h.snapshot,
    clearState: O,
    dispose: b
  };
}
function sa(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function o_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hh(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const o = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, h = -1, y = -1;
  for (let _ = 0; _ < a; _ += 1)
    for (let S = 0; S < r; S += 1)
      o[(_ * r + S) * 4 + 3] <= t || (S < u && (u = S), _ < f && (f = _), S > h && (h = S), _ > y && (y = _));
  return h < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: h,
    maxY: y,
    width: h - u + 1,
    height: y - f + 1,
    aspect: Number(((h - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function zc(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Hr(e, t, n) {
  if (!e) return sa(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function It(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let hu = null, pu = null, ph = null, mh = null, Ft = null, Ka = null, kn = null, ai = null;
function s_() {
  if (pu) return pu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), pu = n, n;
}
function mu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  hu = Hr(hu, n, r);
  const a = hu;
  It(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", mh !== a.ctx && (ph = a.ctx.createPattern(s_(), "repeat"), mh = a.ctx), a.ctx.fillStyle = ph, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function l_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function u_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function c_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function f_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Tt = /* @__PURE__ */ new Map(), Vc = 128;
function d_(e, t, n, r, a, o) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), h = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${o.toFixed(3)}`;
  if (Tt.has(h)) {
    const P = Tt.get(h);
    return Tt.delete(h), Tt.set(h, P), P;
  }
  Tt.size >= Vc && Tt.delete(Tt.keys().next().value);
  const y = u * 2 + 2, g = u + 1, _ = zc(y, y), S = _.getContext("2d"), N = f * u, b = u + 1, O = `rgba(${n},${r},${a},${o})`, V = `rgba(${n},${r},${a},0)`, R = S.createRadialGradient(g, g, N, g, g, b);
  return R.addColorStop(0, O), R.addColorStop(1, V), S.fillStyle = R, S.fillRect(0, 0, y, y), Tt.set(h, _), _;
}
function h_(e, t, n, r, a, o, u) {
  const { r: f, g: h, b: y, a: g } = r, _ = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, a), b = Math.max(0, Math.min(0.99, o)), O = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${_}:${S}:${n.toFixed(2)}:${f}:${h}:${y}:${g.toFixed(3)}:${N.toFixed(2)}:${b.toFixed(2)}:${O.toFixed(2)}`;
  if (Tt.has(V)) {
    const le = Tt.get(V);
    return Tt.delete(V), Tt.set(V, le), le;
  }
  Tt.size >= Vc && Tt.delete(Tt.keys().next().value);
  const R = zc(_, S), P = R.getContext("2d"), L = P.createImageData(_, S), T = L.data, F = Math.max(0, e - t), G = Math.max(0, Math.min(1, n)), U = 1 + N;
  for (let le = 0; le < S; le++)
    for (let oe = 0; oe < _; oe++) {
      const I = oe + 0.5 - e, Y = le + 0.5 - t, ie = Math.max(Math.abs(I) - F, 0), he = Math.hypot(ie, Y) / t;
      if (he >= 1) continue;
      const fe = he <= G ? 1 : Math.max(0, (1 - he) / Math.max(1e-4, 1 - G)), ke = 1 - he, A = 1 + N * (1 - ke) * (1 - ke), we = 1 - b * ke * ke, Ce = A * we / U;
      let Ne = 1;
      if (O > 0) {
        const mt = Math.floor((Y + t) / 1.5), et = Math.floor((I + e) / 8), We = Pi(ga(mt * 41 + 500, et * 19 + 300));
        Ne = 1 - O * 0.42 * We;
      }
      const B = Math.round(255 * Math.min(1, g * fe * Ce * Ne));
      if (B <= 0) continue;
      const $e = (le * _ + oe) * 4;
      T[$e] = f, T[$e + 1] = h, T[$e + 2] = y, T[$e + 3] = B;
    }
  return P.putImageData(L, 0, 0), Tt.set(V, R), R;
}
function ga(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Pi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function p_(e, t, n, r, a, o, u) {
  const f = e + 0.5 - n, h = t + 0.5 - r, y = Math.max(0, n - r), g = Math.max(Math.abs(f) - y, 0), _ = Math.hypot(g, h) / r;
  if (_ >= 1) return 0;
  const S = Pi(ga(e * 17 + 3, t * 13 + 7)), N = _ + o * 0.22 * (S - 0.5);
  if (N >= 1) return 0;
  const b = N <= a ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - a)), O = m_(e, t, f, h, n, r), V = o * 0.55;
  if (O < V) return 0;
  const P = 0.45 + 0.55 * ((O - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * b * P));
}
function m_(e, t, n, r, a, o) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + o) / 2), h = Pi(ga(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), g = Math.floor((r + o) / 1.5), _ = Pi(ga(y * 23 + 800, g * 29 + 500)), S = Pi(ga(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + _ * 0.3 + S * 0.15;
}
function g_(e, t, n, r, a) {
  const { r: o, g: u, b: f, a: h } = r, y = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, Math.min(1, a)), S = `crayon:${y}:${g}:${n.toFixed(2)}:${o}:${u}:${f}:${h.toFixed(3)}:${_.toFixed(2)}`;
  if (Tt.has(S)) {
    const P = Tt.get(S);
    return Tt.delete(S), Tt.set(S, P), P;
  }
  Tt.size >= Vc && Tt.delete(Tt.keys().next().value);
  const N = zc(y, g), b = N.getContext("2d"), O = b.createImageData(y, g), V = O.data, R = Math.max(0, Math.min(1, n));
  for (let P = 0; P < g; P++)
    for (let L = 0; L < y; L++) {
      const T = p_(L, P, e, t, R, _, h);
      if (T <= 0) continue;
      const F = (P * y + L) * 4;
      V[F] = o, V[F + 1] = u, V[F + 2] = f, V[F + 3] = T;
    }
  return b.putImageData(O, 0, 0), Tt.set(S, N), N;
}
function Im(e, t, n) {
  var O, V;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = c_(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = b_(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((O = t == null ? void 0 : t.angle) == null ? void 0 : O.value) ?? 0), y = f_(t, a), g = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), _ = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", S = t == null ? void 0 : t.scatter, N = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let b;
  if (r === "chisel") {
    const R = a * f, P = a, L = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    b = h_(R, P, o, u, L, T, F);
  } else if (r === "crayon") {
    const R = a * f, P = a, L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    b = g_(R, P, o, u, L);
  } else
    b = d_(a, o, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: b, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: h, stampKind: r, scatter: N, latitudeCorrection: _ };
}
function b_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(r.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: o
  };
}
function y_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function gh(e, t, n, r, a) {
  const o = e.angle, u = e.desc.width;
  function f(y, g) {
    o === 0 ? e.ctx.drawImage(e.stampTex, y - a, g - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(y, g), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const h = o === 0 ? a : a * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - h < 0 && f(t + u, n), t + h > u && f(t - u, n);
}
function $c(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: y, count: g } = e.scatter, _ = y * e.radiusPx * a, S = ga(t, n);
    for (let N = 0; N < g; N++) {
      const b = Pi(S + N * 2) * Math.PI * 2, O = Math.sqrt(Pi(S + N * 2 + 1)) * _, V = t + Math.cos(b) * O, R = n + Math.sin(b) * O, P = Math.max(0.5, e.radiusPx * a * 0.48), L = (0.5 - R / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(L)) : 1, F = P * e.aspect * T;
      gh(e, V, R, P, F);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, h = o * e.aspect * f;
  gh(e, t, n, o, h);
}
function bh(e, t, n) {
  const r = u_(t);
  if (!e || r.length === 0) return;
  const a = n.width, o = n.height, u = Im(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let N = Number(r[S].u || 0) * a;
    const b = Number(r[S].v || 0) * o;
    S > 0 && Math.abs(N - f[S - 1].x) > a * 0.5 && (N += N < f[S - 1].x ? a : -a), f.push({ x: N, y: b });
  }
  if ($c(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let h = f[0], y = f[0], g = f[0], _ = 0;
  for (let S = 1; S < f.length; S++) {
    const N = f[S], b = { x: (y.x + N.x) * 0.5, y: (y.y + N.y) * 0.5 };
    S === 1 ? _ = go(u, g.x, g.y, b.x, b.y, _) : _ = Ls(u, h, g, b, N, _), h = y, y = N, g = b;
  }
  f.length === 2 ? go(u, g.x, g.y, y.x, y.y, _) : Ls(u, h, g, y, y, _), e.restore();
}
function _s(e, t, n) {
  var _;
  const r = Array.isArray((_ = t == null ? void 0 : t.geometry) == null ? void 0 : _.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, o = n.height, u = y_(t), f = [];
  let h = 1 / 0, y = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const N = l_(r[S]);
    let b = Number(N.x || 0) * a;
    S > 0 && Math.abs(b - f[S - 1].x) > a * 0.5 && (b += b < f[S - 1].x ? a : -a), f.push({ x: b, y: Number(N.y || 0) * o }), b < h && (h = b), b > y && (y = b);
  }
  function g(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let N = 1; N < f.length; N++) e.lineTo(f[N].x + S, f[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, g(0), h < 0 && g(a), y > a && g(-a), e.restore();
}
function Jo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    _s(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? bh(e, t, n) : (Ka = Hr(Ka, n.width, n.height), It(Ka), bh(Ka.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Ka.canvas, 0, 0), e.restore());
}
function vi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function go(e, t, n, r, a, o) {
  const u = r - t, f = a - n, h = Math.hypot(u, f);
  if (h < 1e-9) return o;
  let y = e.spacingPx - o;
  for (; y <= h; ) {
    const g = y / h;
    $c(e, t + u * g, n + f * g, 1), y += e.spacingPx;
  }
  return h - y + e.spacingPx;
}
function Ls(e, t, n, r, a, o) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, g = 0, _ = f, S = _ + h, N = S + y, b = S - _, O = 16;
  let V = o, R = n.x, P = n.y;
  for (let L = 1; L <= O; L++) {
    const T = _ + b * L / O, F = ((_ - T) * t.x + (T - g) * n.x) / (_ - g), G = ((_ - T) * t.y + (T - g) * n.y) / (_ - g), U = ((S - T) * n.x + (T - _) * r.x) / (S - _), le = ((S - T) * n.y + (T - _) * r.y) / (S - _), oe = ((N - T) * r.x + (T - S) * a.x) / (N - S), I = ((N - T) * r.y + (T - S) * a.y) / (N - S), Y = ((S - T) * F + (T - g) * U) / (S - g), ie = ((S - T) * G + (T - g) * le) / (S - g), J = ((N - T) * U + (T - _) * oe) / (N - _), he = ((N - T) * le + (T - _) * I) / (N - _), fe = ((S - T) * Y + (T - _) * J) / (S - _), ke = ((S - T) * ie + (T - _) * he) / (S - _);
    V = go(e, R, P, fe, ke, V), R = fe, P = ke;
  }
  return V;
}
function v_(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const o = e.descriptor, u = o.width, f = n * o.height, h = e.activeStroke;
  let y = t * u;
  if (h && Math.abs(y - h.prev.x) > u * 0.5 && (y += y < h.prev.x ? u : -u), !h) {
    const N = Im(a, r, o), b = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), O = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), V = String((r == null ? void 0 : r.toolKind) || "") === "eraser", R = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", $c(N, y, f, 1), e.activeStroke = {
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
      strokeOpacity: b,
      velocityWidthFactor: O,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: R,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (h.prev.x + y) * 0.5, _ = (h.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: h.stampTex,
    radiusPx: h.radiusPx,
    spacingPx: h.spacingPx,
    desc: o,
    aspect: h.aspect,
    angle: h.angle,
    stampKind: h.stampKind,
    scatter: h.scatter,
    latitudeCorrection: h.latitudeCorrection
  };
  h.pointCount === 1 ? h.distSinceStamp = go(S, h.lastMidX, h.lastMidY, g, _, h.distSinceStamp) : h.distSinceStamp = Ls(
    S,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: g, y: _ },
    { x: y, y: f },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: y, y: f }, h.lastMidX = g, h.lastMidY = _, h.pointCount++, e.displayDirty = !0;
}
function Bu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), o = sa(t, n), u = {
    descriptor: r,
    committedMask: sa(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: sa(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = sa(t, n);
  let y = null, g = "", _ = null;
  function S(I) {
    return {
      actionGroupId: I,
      descriptor: r,
      committedPaint: sa(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(I) {
    let Y = a.get(I);
    return Y || (Y = S(I), a.set(I, Y)), Y;
  }
  function b(I) {
    return g === "mask" ? u : y ? N(y) : f;
  }
  function O(I) {
    var ke;
    const Y = !_ || _.length !== I.length || I.some((A, we) => A !== _[we]), ie = g === "paint" && ((ke = y ? a.get(y) : f) == null ? void 0 : ke.activeStroke) || null;
    let J = u.displayDirty || f.displayDirty || Y;
    for (const A of I) {
      const we = a.get(A);
      if (we != null && we.displayDirty) {
        J = !0;
        break;
      }
    }
    if (ie && (J = !0), !J) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const A of I) {
      const we = a.get(A);
      we && (we.displayDirty = !1);
    }
    _ = [...I];
    const he = h.ctx;
    It(h);
    const fe = !!(ie != null && ie.isEraser);
    for (const A of I) {
      const we = a.get(A);
      if (!we) continue;
      const Ne = y === we.actionGroupId && g === "paint" ? we.activeStroke : null;
      if (fe)
        Ft = Hr(Ft, t, n), It(Ft), Ft.ctx.drawImage(we.committedPaint.canvas, 0, 0), vi(Ft.ctx, o.canvas), he.drawImage(Ft.canvas, 0, 0);
      else if (he.drawImage(we.committedPaint.canvas, 0, 0), Ne) {
        const B = we.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ne.strokeOpacity ?? 1));
        he.save(), he.globalAlpha = B, he.drawImage(o.canvas, 0, 0), he.restore();
      }
    }
  }
  function V(I) {
    var ie, J, he, fe, ke;
    for (const A of a.values())
      It(A.committedPaint), It(A.currentStroke), A.activeStroke = null, A.displayDirty = !0;
    It(u.committedMask), It(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, _ = null;
    const Y = [
      ...Array.isArray((J = (ie = I == null ? void 0 : I.painting) == null ? void 0 : ie.paint) == null ? void 0 : J.strokes) ? I.painting.paint.strokes : [],
      ...Array.isArray((fe = (he = I == null ? void 0 : I.painting) == null ? void 0 : he.mask) == null ? void 0 : fe.strokes) ? I.painting.mask.strokes : []
    ];
    for (const A of Y) {
      if (((ke = A == null ? void 0 : A.targetSpace) == null ? void 0 : ke.kind) !== "ERP_GLOBAL") continue;
      const we = String((A == null ? void 0 : A.layerKind) || "paint"), Ne = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (we === "mask") {
        const B = u.descriptor;
        Ne ? (Ft = Hr(Ft, B.width, B.height), It(Ft), Jo(Ft.ctx, A, B), vi(u.committedMask.ctx, Ft.canvas)) : Jo(u.committedMask.ctx, A, B);
        continue;
      }
      if (Ne) {
        Ft = Hr(Ft, r.width, r.height), It(Ft), Jo(Ft.ctx, A, r);
        for (const B of a.values())
          vi(B.committedPaint.ctx, Ft.canvas), B.displayDirty = !0;
      } else {
        const B = String((A == null ? void 0 : A.actionGroupId) || "__default__"), $e = N(B), mt = $e.descriptor;
        Jo($e.committedPaint.ctx, A, mt), $e.displayDirty = !0;
      }
    }
    O([...a.keys()]);
  }
  function R(I, Y) {
    g = String((I == null ? void 0 : I.layerKind) || "");
    const ie = String((I == null ? void 0 : I.toolKind) || "") === "eraser";
    if (g === "mask")
      y = null, It(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const J = ie ? f : N(String((I == null ? void 0 : I.actionGroupId) || "__default__"));
      y = ie ? "" : String((I == null ? void 0 : I.actionGroupId) || "__default__"), It(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function P(I, Y) {
    var we;
    const ie = String((I == null ? void 0 : I.layerKind) || "paint"), J = String((I == null ? void 0 : I.toolKind) || "") === "eraser", he = ie === "mask" ? u : J ? f : N(String((I == null ? void 0 : I.actionGroupId) || y || "__default__")), fe = he.activeStroke, ke = he.descriptor;
    if (fe && fe.pointCount > 1) {
      const Ce = he.currentStroke.ctx;
      Ce.globalCompositeOperation = "source-over";
      const Ne = {
        ctx: Ce,
        stampTex: fe.stampTex,
        radiusPx: fe.radiusPx,
        spacingPx: fe.spacingPx,
        desc: ke,
        aspect: fe.aspect,
        angle: fe.angle,
        stampKind: fe.stampKind,
        scatter: fe.scatter,
        latitudeCorrection: fe.latitudeCorrection
      };
      fe.pointCount === 2 ? go(Ne, fe.lastMidX, fe.lastMidY, fe.prev.x, fe.prev.y, fe.distSinceStamp) : Ls(Ne, fe.pprev, { x: fe.lastMidX, y: fe.lastMidY }, fe.prev, fe.prev, fe.distSinceStamp);
    }
    he.lassoPreviewActive && (It(he.currentStroke), _s(he.currentStroke.ctx, I, ke), he.lassoPreviewActive = !1);
    const A = ie === "mask" ? u.committedMask : he.committedPaint;
    if (J && ie === "paint")
      for (const Ce of a.values())
        vi(Ce.committedPaint.ctx, he.currentStroke.canvas), Ce.displayDirty = !0;
    else if (J)
      vi(A.ctx, he.currentStroke.canvas);
    else {
      const Ce = Math.max(0, Math.min(1, (fe == null ? void 0 : fe.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = Ce, A.ctx.drawImage(he.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    o_() && (String((I == null ? void 0 : I.toolKind) || ""), String((ke == null ? void 0 : ke.kind) || ""), Number((ke == null ? void 0 : ke.width) || 0), Number((ke == null ? void 0 : ke.height) || 0), String(((we = I == null ? void 0 : I.targetSpace) == null ? void 0 : we.viewMode) || ""), Number((I == null ? void 0 : I.aspect) ?? 1), hh(he.currentStroke.canvas), hh(A.canvas), void 0), It(he.currentStroke), he.activeStroke = null, he.displayDirty = !0, y = null, g = "", O([...a.keys()]);
  }
  function L(I) {
    if (g === "mask")
      It(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (g === "paint" && !y)
      It(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const Y = a.get(y);
      Y && (It(Y.currentStroke), Y.activeStroke = null, Y.lassoPreviewActive = !1, Y.displayDirty = !0);
    }
    y = null, g = "", O([...a.keys()]);
  }
  function T(I, Y) {
    var J;
    if (g = String((I == null ? void 0 : I.layerKind) || ""), String(((J = I == null ? void 0 : I.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        It(u.currentStroke), _s(u.currentStroke.ctx, I, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const he = String((I == null ? void 0 : I.toolKind) || "") === "eraser", fe = he ? f : N(String((I == null ? void 0 : I.actionGroupId) || y || "__default__"));
        y = he ? "" : String((I == null ? void 0 : I.actionGroupId) || y || "__default__"), It(fe.currentStroke), _s(fe.currentStroke.ctx, I, fe.descriptor), fe.lassoPreviewActive = !0, fe.displayDirty = !0;
      }
      O([...a.keys()]);
    }
  }
  function F(I) {
    return O(I ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function G(I) {
    return a.get(String(I)) ?? null;
  }
  function U() {
    return [...a.keys()];
  }
  function le(I) {
    var ke;
    const Y = a.get(String(I));
    if (!Y) return null;
    const ie = g === "paint" && y === Y.actionGroupId, J = g === "paint" && ((ke = y ? a.get(y) : f) == null ? void 0 : ke.activeStroke) || null;
    if (J != null && J.isEraser)
      return kn = Hr(kn, t, n), It(kn), kn.ctx.drawImage(Y.committedPaint.canvas, 0, 0), vi(kn.ctx, o.canvas), kn.canvas;
    const he = ie ? Y.activeStroke : null;
    if (!he) return Y.committedPaint.canvas;
    kn = Hr(kn, t, n), It(kn), kn.ctx.drawImage(Y.committedPaint.canvas, 0, 0);
    const fe = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, he.strokeOpacity ?? 1));
    return kn.ctx.save(), kn.ctx.globalAlpha = fe, kn.ctx.drawImage(o.canvas, 0, 0), kn.ctx.restore(), kn.canvas;
  }
  function oe() {
    return ai = Hr(ai, t, n), It(ai), mu(ai.ctx, u.committedMask.canvas), g === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Ft = Hr(Ft, t, n), It(Ft), Ft.ctx.drawImage(u.committedMask.canvas, 0, 0), vi(Ft.ctx, o.canvas), It(ai), mu(ai.ctx, Ft.canvas)) : mu(ai.ctx, o.canvas)), ai.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: R,
    appendStrokePoint: v_,
    updateActiveStroke: T,
    commitActiveStroke: P,
    cancelActiveStroke: L,
    getErpTarget: F,
    ensureTarget: b,
    getGroupTarget: G,
    getGroupDisplayCanvas: le,
    getMaskDisplayCanvas: oe,
    getAllGroupIds: U
  };
}
const Ku = 3;
function Wa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function jc(e, t = 0) {
  const n = Wa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Wa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const a = Wa(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const o = Wa(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Wa(t) || 0);
}
function Tm(e) {
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
const yh = Math.PI / 180, vh = 0.12, __ = Ku, x_ = 35, S_ = 140, eo = 100, w_ = 20, _h = 0.8;
function k_(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), o = W(Number(e || eo), 1, 179) * yh;
  return 2 * Math.atan(Math.tan(o * 0.5) * (a / r)) / yh;
}
function Hc(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: eo })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(P, L = null) {
    f && f(P, L);
  }
  function g(P, L, T = null, F = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(P || 0), h.drag.lastY = Number(L || 0), h.drag.lastTs = Number(F || performance.now()), h.drag.pointerId = T, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], y("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: T }), !0;
  }
  function _(P, L, T = "pano", F = performance.now()) {
    if (!h.drag.active) return !1;
    const G = Number(F || performance.now()), U = Number(P), le = Number(L), oe = U - h.drag.lastX, I = le - h.drag.lastY;
    h.drag.lastX = U, h.drag.lastY = le, h.drag.lastTs = G;
    const Y = r() || { x: 1, y: 1 }, ie = Number(Y.x || 1), J = Number(Y.y || 1), he = { ...t() };
    let fe = 0, ke = 0;
    if (T === "unwrap") {
      const we = a() || { w: 1, h: 1 }, Ce = Math.max(1, Number(we.w || 1)), Ne = Math.max(1, Number(we.h || 1)), B = oe / Ce, $e = I / Ne;
      fe = -B * 360 * ie, ke = $e * 180 * J;
    } else {
      const we = o() || { w: 0, h: 0 }, Ce = Math.max(1, Number(we.w || 0)), Ne = Math.max(1, Number(we.h || 0));
      if (Ce > 1 && Ne > 1) {
        const B = W(Number(he.fov || eo), 1, 179), $e = W(k_(B, Ce, Ne), 0.1, 179);
        fe = -(oe / Ce) * B * ie, ke = I / Ne * $e * J;
      } else
        fe = -oe * vh * ie, ke = I * vh * J;
    }
    he.yaw = Ht(Number(he.yaw || 0) + fe), he.pitch = W(Number(he.pitch || 0) + ke, -89.9, 89.9), n(he), h.velHistory.push({ ts: G, yaw: he.yaw, pitch: he.pitch });
    let A = 0;
    for (; A < h.velHistory.length - 1 && h.velHistory[A].ts < G - 100; ) A++;
    return A > 0 && h.velHistory.splice(0, A), h.inertia.active = !1, h.inertia.lastTs = G, u(), y("drag", { phase: "move", dx: oe, dy: I, dYaw: fe, dPitch: ke }), !0;
  }
  function S(P = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const L = Number(P || performance.now());
    h.drag.lastTs = L;
    const T = h.velHistory.filter((G) => L - G.ts <= 80);
    if (T.length >= 2) {
      const G = T[0], U = T.at(-1), le = Math.max(1e-3, (U.ts - G.ts) / 1e3);
      let oe = U.yaw - G.yaw;
      oe > 180 && (oe -= 360), oe < -180 && (oe += 360), h.inertia.vx = oe / le, h.inertia.vy = (U.pitch - G.pitch) / le;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const F = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = F > w_, h.inertia.lastTs = L, y("drag", { phase: "end", speed: F, inertiaActive: h.inertia.active }), !0;
  }
  function N(P = performance.now()) {
    if (!h.inertia.active) return !1;
    const L = Number(P || performance.now()), T = Math.max(1e-3, (L - (h.inertia.lastTs || L)) / 1e3);
    h.inertia.lastTs = L;
    const F = { ...t() };
    F.yaw = Ht(Number(F.yaw || 0) + h.inertia.vx * T), F.pitch = W(Number(F.pitch || 0) + h.inertia.vy * T, -89.9, 89.9);
    const G = Math.exp(-5.5 * T);
    return h.inertia.vx *= G, h.inertia.vy *= G, Math.abs(h.inertia.vx) < _h && Math.abs(h.inertia.vy) < _h && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(F), u(), h.inertia.active;
  }
  function b() {
    const P = h.drag.active || h.inertia.active || h.inertia.vx !== 0 || h.inertia.vy !== 0;
    return h.drag.active = !1, h.drag.pointerId = null, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.velHistory = [], P;
  }
  function O(P) {
    const L = Math.sign(Number(P || 0));
    if (!L) return !1;
    const T = { ...t() }, F = Number(T.fov || eo);
    return T.fov = W(F + L * __, x_, S_), n(T), u(), y("wheel", { deltaSign: L, fovBefore: F, fovAfter: T.fov }), !0;
  }
  function V(P, L = 0) {
    return O(jc(P, L));
  }
  function R() {
    n({ yaw: 0, pitch: 0, fov: eo }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, u();
  }
  return {
    state: h,
    startDrag: g,
    moveDrag: _,
    endDrag: S,
    stepInertia: N,
    stopMotion: b,
    applyWheel: O,
    applyWheelEvent: V,
    resetView: R
  };
}
function zs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function M_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function N_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const o = yt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function P_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function A_(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = yt(e.t, 0), r = yt(e.widthScale, null), a = yt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = yt(e.u, null), u = yt(e.v, null);
    if (o == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = yt(e.u, null), u = yt(e.v, null);
    if (o == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Zo(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const o = A_(a, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function C_(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const h = Zo(e.points, t, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const o = Zo(e.points, t, 1);
  if (!o) return null;
  const u = Zo(e.rawPoints, t, 1), f = Zo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: o,
    rawPoints: u || o.map((h) => ({ ...h })),
    processedPoints: f || o.map((h) => ({ ...h }))
  };
}
function I_(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = P_(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = C_(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const o = yt(e.size, null), u = yt(e.opacity, null);
  if (o == null || u == null) return null;
  const f = String(e.id || "").trim(), h = String(e.actionGroupId || "").trim();
  if (!f || !h) return null;
  const y = yt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let _ = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    _ = {
      r: Math.max(0, Math.min(1, yt(S.r, 0))),
      g: Math.max(0, Math.min(1, yt(S.g, 0))),
      b: Math.max(0, Math.min(1, yt(S.b, 0))),
      a: Math.max(0, Math.min(1, yt(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: h,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: yt(e.hardness, null),
    flow: yt(e.flow, null),
    spacing: yt(e.spacing, null),
    createdAt: Math.trunc(yt(e.createdAt, 0)),
    color: _,
    radiusModel: g,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function xh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = I_(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function T_(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), a = yt(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const o = (f) => Math.max(0, Math.min(1, f)), u = { u0: o(t), v0: o(n), u1: o(r), v1: o(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function E_(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function D_(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const o = T_(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: a,
    transform: E_(e.transform)
  } : null;
}
function O_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = D_(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ba(e) {
  const t = M_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: N_(e.groups),
    paint: xh(e.paint, "paint"),
    mask: xh(e.mask, "mask"),
    raster_objects: O_(e.raster_objects)
  };
}
const Ir = 1, Tr = 179, Wu = 85;
function fl(e) {
  const t = ((Je(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Em(e, t) {
  let n = Je(e, 0) - Je(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Dm(e, t, { shiftKey: n = !1 } = {}) {
  let r = Je(e, 0) + Je(t, 0) * Wn;
  return n && (r = Math.round(r / 15) * 15), fl(r);
}
function Je(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Di(e = {}) {
  const t = W(Je(e.hFOV_deg || 90, 90), Ir, Tr), n = W(Je(e.vFOV_deg || 60, 60), Ir, Tr), r = Math.tan(t * Gt * 0.5), a = Math.tan(n * Gt * 0.5);
  return {
    yawDeg: Je(e.yaw_deg, 0),
    pitchDeg: Je(e.pitch_deg, 0),
    rollDeg: Je(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: a,
    aspect: r / Math.max(1e-12, a)
  };
}
function Ai(e, t) {
  const n = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Di(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    r / (2 * a.tanHalfY)
  ));
}
function Uc(e, t) {
  const n = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, Je(t, 1)), o = Math.min(n, r * a);
  return { width: o, height: o / a };
}
function Gc(e, t) {
  const n = Math.max(1e-12, Je(t, 1)), r = Math.max(1e-6, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = W(2 * Math.atan(r / (2 * n)) * Wn, Ir, Tr), u = W(2 * Math.atan(a / (2 * n)) * Wn, Ir, Tr);
  return { hFOV_deg: o, vFOV_deg: u };
}
function F_(e, t, n) {
  const r = Je(e == null ? void 0 : e.x, 0), a = Je(e == null ? void 0 : e.y, 0), o = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Di(t), h = Math.max(1e-12, Je(n, 1)), y = 2 * h * f.tanHalfX, g = 2 * h * f.tanHalfY;
  return {
    x: r + (o - y) * 0.5,
    y: a + (u - g) * 0.5,
    w: y,
    h: g,
    focalPx: h
  };
}
function Yu(e, t, n = Wu) {
  const r = Math.max(1e-12, Je(t, 1)), a = W(Je(n, Wu), 1, 89.999), o = r * Math.tan(a * Gt), u = Math.max(1, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, o),
    halfH: Math.min(f * 0.5, o)
  };
}
function Om(e, t, n) {
  const r = Math.max(1e-12, Je(t, 1));
  return {
    x: (Je(n == null ? void 0 : n.x, 0) - Je(e == null ? void 0 : e.x, 0)) / r,
    y: -(Je(n == null ? void 0 : n.y, 0) - Je(e == null ? void 0 : e.y, 0)) / r
  };
}
function xs(e, t) {
  const n = W(Je(e, 60), Ir, Tr), r = Math.max(1e-6, Je(t, 1));
  return W(
    2 * Math.atan(Math.tan(n * Gt * 0.5) * r) * Wn,
    Ir,
    Tr
  );
}
function Sh(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function R_(e, t) {
  const n = Sh(e, 1), r = Sh(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, o = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (y, g) => g ? f(g, y % g) : y, h = f(o, u) || 1;
  return `${Math.max(1, Math.round(o / h))}:${Math.max(1, Math.round(u / h))}`;
}
function Ci(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Gt, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Gt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Si(e) {
  const t = Ci(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (r == null ? void 0 : r[0]) || R_(t, 1);
}
function Fm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Si(t), t;
}
function Rm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: a = 100,
  frameFovDeg: o = null
} = {}) {
  const u = o == null || String(o).trim() === "" ? NaN : Number(o), f = Number.isFinite(u) ? W(u, Ir, Tr) : W(Math.min(42, Je(a, 100) * 0.42), 8, 96);
  return Fm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Je(t, 0),
    pitch_deg: W(Je(n, 0), -89.9, 89.9),
    roll_deg: fl(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Ur(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Si(e);
}
function Lm(e, t) {
  const n = Di(e), r = Je(t, 1);
  if (!(r > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * r) * Wn, o = 2 * Math.atan(n.tanHalfY * r) * Wn;
  return a < Ir || a > Tr || o < Ir || o > Tr ? null : { hFOV_deg: a, vFOV_deg: o };
}
function zm(e, t, n = Ku) {
  const r = Math.sign(Je(t, 0)), a = Math.abs(Je(n, Ku));
  if (!r || !(a > 0)) return null;
  const o = Di(e), u = o.hFovDeg + r * a;
  if (u < Ir || u > Tr) return null;
  const f = Math.tan(u * Gt * 0.5);
  return Lm(e, f / o.tanHalfX);
}
function Vm(e, t) {
  const n = Di(e), r = Ln(n.yawDeg, n.pitchDeg, n.rollDeg), a = Je(t == null ? void 0 : t.x, 0), o = Je(t == null ? void 0 : t.y, 0);
  return Fc(ka(ka(r.fwd, Ma(r.right, a)), Ma(r.up, o)));
}
const L_ = 2, z_ = ["sky", "world"], V_ = ["input", "output", "temp"];
function Wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function At(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function qu(e, t) {
  const n = At(e, t);
  return n !== null && n > 0 ? n : t;
}
function Bn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ya(e) {
  const t = At(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function wh(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Bc(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => At(n, null));
  return t.includes(null) ? null : t;
}
function $_(e) {
  const t = Wt(e) ? e : {};
  return {
    position: Bc(t.position) || [0, 0, 0],
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    hFOV_deg: Bn(At(t.hFOV_deg, 90), 0.1, 179)
  };
}
function $m(e) {
  const t = Wt(e) ? e : {};
  return {
    position: Bc(t.position) || [0, 0, 0],
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    scale: qu(t.scale, 1)
  };
}
function j_(e) {
  const t = Wt(e) ? e : {};
  return {
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    hFOV_deg: Bn(At(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Bn(At(t.vFOV_deg, 20), 0.1, 179)
  };
}
function H_(e) {
  return Bn(At(e, 1), 0, 1);
}
function U_(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => At(n, null));
    if (!t.includes(null) && t[0] >= 0 && t[0] <= 1 && t[2] >= 0 && t[2] <= 1)
      return t;
  }
  return "auto";
}
function G_(e) {
  if (!Wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Bc(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function B_(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const a of Array.isArray(e) ? e : []) {
    if (!Wt(a)) continue;
    const o = ya(a.frame);
    if (o === null) continue;
    const u = { frame: o, value: t(a.value), easing: U_(a.easing) }, f = n ? G_(a.handles) : null;
    f && (u.handles = f), r.set(o, u);
  }
  return [...r.keys()].sort((a, o) => a - o).map((a) => r.get(a));
}
function Vs(e, t, n) {
  const r = Wt(e) ? e : {};
  return {
    value: t(r.value),
    keyframes: B_(r.keyframes, t, n)
  };
}
function jm(e) {
  const t = Wt(e) ? e : {}, n = ya(t.start), r = ya(t.in), a = ya(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: a === null ? null : Math.max(1, a)
  };
}
function K_(e) {
  const t = Wt(e) ? e : {}, n = Bn(At(t.x0, 0), 0, 1), r = Bn(At(t.y0, 0), 0, 1), a = Bn(At(t.x1, 1), 0, 1), o = Bn(At(t.y1, 1), 0, 1);
  return { x0: Math.min(n, a), y0: Math.min(r, o), x1: Math.max(n, a), y1: Math.max(r, o) };
}
function W_(e) {
  if (!Wt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: V_.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Y_(e) {
  const t = W_(e.source);
  if (!t) return null;
  const n = z_.includes(e.placement) ? e.placement : "sky", r = n === "world", a = {
    id: e.id,
    placement: n,
    source: t,
    clip: jm(e.clip),
    visible: wh(e.visible, !0),
    locked: wh(e.locked, !1),
    crop: K_(e.crop),
    transform: Vs(e.transform, r ? $m : j_, r),
    opacity: Vs(e.opacity, H_, !1)
  };
  return r || (a.z_index = ya(e.z_index) ?? 0), a;
}
function q_(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const u = Wt(o) ? Y_(o) : null;
    if (u) {
      if (u.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(u);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !r.has(o.id) ? r.add(o.id) : o.id = null;
  let a = 1;
  for (const o of t)
    if (o.id === null) {
      for (; r.has(`sticker_${a}`); ) a += 1;
      o.id = `sticker_${a}`, r.add(o.id);
    }
  return t;
}
function Xu(e) {
  const t = Wt(e.timeline) ? e.timeline : {}, n = Wt(e.camera) ? e.camera : {}, r = Wt(e.scene) ? e.scene : {}, a = ya(t.length);
  return {
    version: L_,
    timeline: {
      fps: qu(t.fps, 24),
      length: a !== null && a >= 1 ? a : null
    },
    camera: {
      aspect: qu(n.aspect, 1),
      transform: Vs(n.transform, $_, !0)
    },
    scene: {
      clip: jm(r.clip),
      transform: Vs(r.transform, $m, !0)
    },
    stickers: q_(e.stickers),
    painting: ba(e.painting),
    painting_layer: Wt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function X_(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Wt(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function J_(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Wt(t)) return {};
  const n = Bn(At(t.hFOV_deg, 90), 1, 179), r = Bn(At(t.vFOV_deg, 60), 1, 179), a = Math.PI / 180;
  return {
    aspect: Math.tan(n * a * 0.5) / Math.tan(r * a * 0.5),
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
function Z_(e) {
  const t = Wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Wt) : [];
  return n.sort((r, a) => At(r.z_index, 0) - At(a.z_index, 0)), Xu({
    camera: J_(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: X_(r, t),
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
function Ju(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Xu({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Wt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Z_(t) : Xu(t);
}
let Qo = { text: null, parsed: null };
function Qt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Zu(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Q_({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Qt(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ba(null),
    painting_layer: null,
    ui_settings: Zu(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ex(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function tx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function nx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function rx(e) {
  return Array.isArray(e) ? e.map((t) => Fm(t)) : [];
}
function ix(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), a = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0], o = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: o };
}
function Kc(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Q_(n), a = String(e || "").trim();
  if (!a) return r;
  try {
    let o = null;
    if (Qo.text === a ? o = Qo.parsed : (o = JSON.parse(a), Qo = { text: a, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    o.version === 2 && (o = { ...ax(Ju(o)), active: n.active });
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: tx(o.assets),
      stickers: nx(o.stickers),
      shots: rx(o.shots),
      painting: ba(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Zu(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return u && (f.ui_settings = Zu({ ...f.ui_settings, ...u })), f.output_preset = ex(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Qt(n.coverage), delete f.editor_history, f;
  } catch {
    return Qo = { text: a, parsed: null }, r;
  }
}
function kh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Wc(e) {
  return e.transform.keyframes.length > 0 || e.opacity.keyframes.length > 0;
}
function Hm(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.scene_state) == null ? void 0 : r.stickers.find((a) => a.id === t);
  return !!n && Wc(n);
}
function ax(e) {
  const t = {}, n = [];
  for (const u of e.stickers) {
    if (u.placement !== "sky") continue;
    const { yaw_deg: f, pitch_deg: h, roll_deg: y, hFOV_deg: g, vFOV_deg: _ } = u.transform.value, S = {
      id: u.id,
      yaw_deg: f,
      pitch_deg: h,
      hFOV_deg: g,
      vFOV_deg: _,
      rot_deg: y,
      z_index: u.z_index,
      visible: u.visible,
      locked: u.locked || Wc(u),
      crop: { ...u.crop }
    }, { source: N } = u;
    N.kind === "port" ? S.source_kind = "external_image" : (S.asset_id = u.id, t[u.id] = N.data_url ? { type: "dataurl", value: N.data_url } : { type: "comfy_image", filename: N.filename, subfolder: N.subfolder, storage: N.storage, name: N.filename }), n.push(S);
  }
  const { timeline: r, camera: a, scene: o } = e;
  return {
    assets: t,
    stickers: n,
    painting: e.painting,
    painting_layer: e.painting_layer,
    scene_state: { timeline: r, camera: a, scene: o, stickers: e.stickers }
  };
}
function Um(e) {
  const t = Ju({ ...e, version: 1 }), n = e.scene_state;
  if (!n) return t;
  const r = new Map(t.stickers.map((o) => [o.id, o])), a = [];
  for (const o of n.stickers) {
    if (o.placement !== "sky") {
      a.push(o);
      continue;
    }
    const u = r.get(o.id);
    u && (r.delete(o.id), a.push({
      ...u,
      locked: Wc(o) ? o.locked : u.locked,
      clip: o.clip,
      transform: { value: u.transform.value, keyframes: o.transform.keyframes },
      opacity: o.opacity
    }));
  }
  return a.push(...r.values()), Ju({ ...t, timeline: n.timeline, camera: n.camera, scene: n.scene, stickers: a });
}
function Gm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Bm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Km(e, t) {
  return e != null && e.__panoSceneStateV2 ? JSON.stringify(Um(t)) : JSON.stringify(t);
}
const Yc = 0.28;
function ox(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), r = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), o = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, o),
    x1: Math.max(n, a),
    y1: Math.max(r, o)
  };
}
function sx(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), r = e.type === "external_image" || e.source_kind === "external_image", a = n || (r ? String(e.id || "").trim() : ""), o = t.includeHidden === !0, u = e.visible === !1, f = o && r && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: W(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: W(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: ox(e.crop),
    opacity: f ? Yc : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function dl(e, t = {}) {
  var o;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((u) => sx(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((o = e == null ? void 0 : e.active) == null ? void 0 : o.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Wm(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || dl(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, o = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var b;
    const h = String((f == null ? void 0 : f.assetId) || "").trim(), y = h || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const g = h ? a[h] : null, _ = t(y, g, f);
    if (_ instanceof HTMLImageElement && !_.complete) return;
    const S = Number((_ == null ? void 0 : _.naturalWidth) || (_ == null ? void 0 : _.videoWidth) || (_ == null ? void 0 : _.width) || 0), N = Number((_ == null ? void 0 : _.naturalHeight) || (_ == null ? void 0 : _.videoHeight) || (_ == null ? void 0 : _.height) || 0);
    !_ || S <= 0 || N <= 0 || (u.add(y), o.push({
      assetId: y,
      source: _,
      revision: String(((b = n.revisionFor) == null ? void 0 : b.call(n, y, g, _)) ?? [
        y,
        Number(_.naturalWidth || _.videoWidth || _.width || 0),
        Number(_.naturalHeight || _.videoHeight || _.height || 0),
        String(_.currentSrc || _.src || "")
      ].join("|"))
    }));
  }), o;
}
function bo(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function lx(e, t = 360) {
  return bo(e, t);
}
function kr(e) {
  const t = Di(e || {});
  return {
    mode: "cutout",
    yawDeg: t.yawDeg,
    pitchDeg: t.pitchDeg,
    rollDeg: t.rollDeg,
    hFovDeg: t.hFovDeg,
    vFovDeg: t.vFovDeg,
    aspect: W(t.aspect, 0.1, 10)
  };
}
function Ym({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: a,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof a != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let u = null, f = !1, h = !1;
  const y = () => u || e(), g = () => o(n(y()));
  return {
    model: () => n(y()),
    refresh() {
      return h ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return h || u ? !1 : (u = e(), f = !1, g(), !0);
    },
    updateGesture(_) {
      if (h) return !1;
      u || this.beginGesture();
      const S = t(u, _);
      return S.changed ? (u = S.state, f = !0, r(u), g(), !0) : !1;
    },
    hasGestureChanges() {
      return u != null && f;
    },
    commitGesture() {
      if (h || !u) return !1;
      const _ = f;
      return _ && a(u), u = null, f = !1, r(null), g(), _;
    },
    cancelGesture() {
      return h || !u ? !1 : (u = null, f = !1, r(null), g(), !0);
    },
    apply(_) {
      if (h) return !1;
      u && this.commitGesture();
      const S = t(e(), _);
      return S.changed ? (a(S.state), g(), !0) : !1;
    },
    destroy() {
      if (h) return;
      h = !0;
      const _ = u != null;
      u = null, f = !1, _ && r(null);
    }
  };
}
const $s = Math.PI / 180, Mr = 180 / Math.PI, ux = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), cx = 260;
function Mh(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function qm(e, t) {
  return t ? qm(t, e % t) : e;
}
function fx(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), u = Math.max(1, Math.round(e / o * a)), f = Math.max(1, Math.round(t / o * a)), h = qm(u, f) || 1;
  return `${Math.round(u / h)}:${Math.round(f / h)}`;
}
function yo(e, t) {
  const n = Mh(e), r = Mh(t);
  if (n == null || r == null) return null;
  const a = n / r;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: r, ratio: a, label: fx(n, r) };
}
function Ii(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function Xm(e) {
  const t = Ii(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Ur(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function qc(e, t, n = ux) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), h = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), y = (V, R, P) => {
    const L = V + R, T = Math.max(0, P - 1), F = L > T && L > 0 ? T / L : 1;
    return [V * F, R * F];
  }, [g, _] = y(h, u, r), [S, N] = y(o, f, a), b = {
    x: g,
    y: S,
    w: Math.max(1, r - g - _),
    h: Math.max(1, a - S - N)
  }, O = Uc(b, t);
  return {
    x: b.x + (b.w - O.width) * 0.5,
    y: b.y + (b.h - O.height) * 0.5,
    w: O.width,
    h: O.height,
    safeRect: b
  };
}
function dx(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = qc({ width: n, height: r }, 1), o = W(Number((e == null ? void 0 : e.fov) || 100), 1, 179), u = n / (2 * Math.tan(o * $s * 0.5)), f = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, h = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, y = Vm(h, Om(
    { x: n * 0.5, y: r * 0.5 },
    u,
    f
  )), g = hx(y, Ln(
    h.yaw_deg,
    h.pitch_deg,
    h.roll_deg
  ).right), _ = Gc({ width: a.w, height: a.h }, u);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: _.hFOV_deg
  };
}
function Jm(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Mr),
    pitch: W(Math.asin(W(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Mr, -89.9, 89.9)
  };
}
function hx(e, t) {
  const n = Jm(e), r = Ln(n.yaw, n.pitch, 0), a = ma(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * a,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * a,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * a
  }, u = Math.hypot(o.x, o.y, o.z);
  if (!(u > 1e-8)) return { ...n, roll: 0 };
  const f = {
    x: o.x / u,
    y: o.y / u,
    z: o.z / u
  };
  return {
    ...n,
    roll: fl(Math.atan2(
      ma(f, r.up),
      ma(f, r.right)
    ) * Mr)
  };
}
function Zm(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = qc({ width: n, height: r }, Ci(e)), o = Ai(a, e), u = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, f = Vm(e, Om(
    u,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), h = Jm(f);
  return {
    yaw: h.yaw,
    pitch: h.pitch,
    fov: W(2 * Math.atan(n / (2 * o)) * Mr, 1, 179)
  };
}
function px(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, u = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Ai(t, n), h = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(u, a - u) * 2
  }, { halfW: y, halfH: g } = Yu(h, f), _ = {
    x: o - y,
    y: u - g,
    w: y * 2,
    h: g * 2
  }, S = _.x <= 0 && _.y <= 0 && _.x + _.w >= r && _.y + _.h >= a, N = r / a, b = Math.tan(Wu * $s), O = N >= 1 ? b : b * N, V = N >= 1 ? b / N : b;
  return {
    focalPx: f,
    rect: _,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(y / f) * Mr,
      vFOV_deg: 2 * Math.atan(g / f) * Mr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(O) * Mr,
        vFOV_deg: 2 * Math.atan(V) * Mr
      }
    }
  };
}
function Qi(e, t) {
  const n = Ii(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((a) => a === n ? r : a)
    },
    changed: !0
  };
}
function mx(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(a) && a > 0) {
    const u = Ai(n, e);
    return Gc(Uc(n, t), u);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: xs(o, t) };
}
function Nh(e, t, n, { preserveOrientation: r = !1, safeRect: a = null } = {}) {
  let o = yo(t, n);
  if (!o) return e;
  const u = Ci(e) >= 1;
  r && o.ratio >= 1 !== u && (o = yo(o.height, o.width));
  const f = mx(e, o.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...f, aspect_id: o.label };
}
function Qm(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ii(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), a = Rm({
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
        shots: [a],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = Ii(e);
    if (!r) return { state: e, changed: !1 };
    const a = (Array.isArray(e.shots) ? e.shots : []).filter((u) => u !== r), o = ((n = a[0]) == null ? void 0 : n.id) == null ? null : String(a[0].id);
    return {
      state: {
        ...e,
        shots: a,
        active: { ...e.active || {}, selected_shot_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Qi(e, (r) => Nh(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Qi(e, (r) => {
      const o = String(Ur(r) || "").match(/^([0-9.]+):([0-9.]+)$/), u = o ? yo(o[1], o[2]) : yo(Ci(r), 1);
      return u ? Nh(r, u.height, u.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Qi(e, (a) => {
      const o = fl(r), u = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(u - o) <= 1e-12) return a;
      const f = { ...a, roll_deg: o };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Qi(e, (r) => {
    const a = Lm(r, t.scale);
    return a ? { ...r, ...a } : r;
  }) : t.type === "step-fov" ? Qi(e, (r) => {
    const a = zm(r, t.direction);
    return a ? { ...r, ...a } : r;
  }) : t.type === "pan-camera" ? Qi(e, (r) => {
    const a = ng(t.startShot || r, t);
    return Math.abs(Number(a.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function eg({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: a = !1,
  allowAlt: o = !1,
  deadZoneRatio: u = 0.05
} = {}) {
  const f = o && a ? "alt" : r ? "shift" : "";
  if (!f || !e || !t) return null;
  const h = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, y = {
    x: h.x + h.w * 0.5,
    y: h.y + h.h * 0.5
  }, g = Math.hypot(Number(t.x || 0) - y.x, Number(t.y || 0) - y.y);
  if (f === "shift" && g < Math.min(h.w, h.h) * u) return null;
  const _ = Math.atan2(Number(t.y || 0) - y.y, Number(t.x || 0) - y.x);
  return {
    source: f,
    frame: h,
    center: y,
    startRollDeg: Number(n || 0),
    lastAngle: _,
    accumulatedRad: 0
  };
}
function tg(e, t, n = {}) {
  var u, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((u = e.center) == null ? void 0 : u.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + Em(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: a },
    rollDeg: Dm(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function ng(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, u = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * $s, h = Math.cos(f), y = Math.sin(f), g = o / n, _ = -u / n, S = g * h - _ * y, N = g * y + _ * h, b = Number(e.pitch_deg || 0) * $s, O = Math.max(0.25, Math.abs(Math.cos(b)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(S) / O * Mr),
    pitch_deg: W(Number(e.pitch_deg || 0) - Math.atan(N) * Mr, -90, 90)
  };
}
function gx({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Ym({
    readState: e,
    reduce: Qm,
    projectModel: Xm,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ee = Object.freeze({
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
}), bx = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, yx = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: bx(t[2])
})), vx = {
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
}, Ph = Object.fromEntries(
  Object.entries(vx).map(([e, t]) => [e, {
    name: t.name,
    elements: yx(t.body)
  }])
), en = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = kt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Ph, r) ? Ph[r] : null;
    });
    return (r, a) => n.value ? (Me(), Ae("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ft(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Ae(ot, null, zt(n.value.elements, (o, u) => (Me(), Ae(ot, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${u}`
      }, [
        o.tag === "path" ? (Me(), Ae("path", li({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Me(), Ae("circle", li({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Me(), Ae("rect", li({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Me(), Ae("line", li({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Me(), Ae("polyline", li({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Me(), Ae("polygon", li({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : Rt("", !0)
      ], 64))), 128))
    ], 2)) : Rt("", !0);
  }
}, tn = {
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
    const t = e, n = kt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, a) => (Me(), Ei(kv(e.tag), li({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Wp(() => [
        Ve(en, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, _x = ["aria-expanded", "disabled"], xx = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Sx = ["data-aspect", "disabled", "onClick"], wx = { class: "pano-cutout-aspect-custom" }, kx = ["disabled"], Mx = ["disabled"], Nx = ["data-custom-width", "data-custom-height", "disabled"], rg = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ bn("1"), u = /* @__PURE__ */ bn("1"), f = /* @__PURE__ */ bn(null), h = kt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), y = kt(() => {
      const O = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], V = String(n.model.aspectLabel || "");
      return O.length ? O.map((R) => {
        const P = typeof R == "string" ? R : String((R == null ? void 0 : R.value) || ""), L = typeof R == "string" ? R : String((R == null ? void 0 : R.label) || P);
        return {
          ...typeof R == "object" && R ? R : {},
          value: P,
          label: L,
          active: V ? P === V : (R == null ? void 0 : R.active) === !0
        };
      }) : a.map((R) => ({
        ...R,
        active: R.value === V
      }));
    }), g = kt(() => {
      var V;
      const O = String(n.model.aspectLabel || "").trim();
      return O || String(((V = y.value.find((R) => R.active === !0)) == null ? void 0 : V.label) || "Aspect");
    });
    Ni(g, (O) => {
      const V = String(O || "").match(/^([0-9.]+):([0-9.]+)$/);
      V && (o.value = V[1], u.value = V[2]);
    }, { immediate: !0 });
    function _(O) {
      r("action", O);
    }
    function S(O) {
      var V;
      n.model.aspectOpen === !0 && ((V = f.value) != null && V.contains(O.target) || _({ type: "close-aspect" }));
    }
    Ic(() => {
      document.addEventListener("pointerdown", S, !0);
    }), ol(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function N(O) {
      const [V, R] = String(O.value || "").split(":");
      _({
        type: "set-aspect",
        width: V,
        height: R,
        preserveOrientation: !0
      });
    }
    function b() {
      _({
        type: "set-aspect",
        width: o.value,
        height: u.value,
        preserveOrientation: !1
      });
    }
    return (O, V) => (Me(), Ae("div", {
      ref_key: "rootElement",
      ref: f,
      class: ft(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Me(), Ei(tn, {
        key: 0,
        icon: e.model.aspectIcon || pt(Ee).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: h.value },
        onClick: V[0] || (V[0] = (R) => _({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Me(), Ae("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: h.value,
        onClick: V[1] || (V[1] = (R) => _({ type: "toggle-aspect" }))
      }, [
        Ve(en, {
          icon: e.model.aspectIcon || pt(Ee).aspect
        }, null, 8, ["icon"]),
        X("span", null, ct(g.value), 1),
        Ve(en, {
          icon: pt(Ee).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, _x)),
      Mi(X("div", xx, [
        (Me(!0), Ae(ot, null, zt(y.value, (R) => (Me(), Ae("button", {
          key: R.value,
          class: ft(["pano-btn pano-frame-aspect-choice", { active: R.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": R.value,
          disabled: h.value,
          onClick: (P) => N(R)
        }, ct(R.label), 11, Sx))), 128)),
        X("div", wx, [
          Mi(X("input", {
            "onUpdate:modelValue": V[2] || (V[2] = (R) => o.value = R),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: h.value
          }, null, 8, kx), [
            [oh, o.value]
          ]),
          V[4] || (V[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          Mi(X("input", {
            "onUpdate:modelValue": V[3] || (V[3] = (R) => u.value = R),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: h.value
          }, null, 8, Mx), [
            [oh, u.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": u.value,
            disabled: h.value,
            onClick: b
          }, "Apply", 8, Nx)
        ])
      ], 512), [
        [Mo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Px = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Ax = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ bn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, a) => (Me(), Ae("div", {
      class: ft(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      Ve(tn, {
        icon: pt(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", Px, [
        a[3] || (a[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ae(ot, null, zt(pt(n), (o) => (Me(), Ae("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Cx = { class: "pano-cutout-node-surface" }, Ix = ["title", "disabled"], Tx = { class: "value" }, Ex = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Dx = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var a;
      (a = t.onAction) == null || a.call(t, r);
    }
    return (r, a) => (Me(), Ae("div", Cx, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: a[4] || (a[4] = Kn(() => {
        }, ["stop"])),
        onWheel: a[5] || (a[5] = Kn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (o) => n({ type: "open-editor" }))
        }, [
          Ve(en, {
            icon: pt(Ee).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ve(tn, {
          icon: e.model.hasShot ? pt(Ee).delete : pt(Ee).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ve(rg, {
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
          onDblclick: a[2] || (a[2] = Kn((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ve(en, {
            icon: pt(Ee).roll
          }, null, 8, ["icon"]),
          X("span", Tx, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, Ix),
        Ve(tn, {
          icon: pt(Ee).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ve(Ax)
      ], 32),
      e.model.hasShot === !1 ? (Me(), Ae("div", Ex, " Choose a view · + Add Frame ")) : Rt("", !0)
    ]));
  }
}, ig = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = /* @__PURE__ */ bn(null);
    let o, u = !1;
    function f() {
      if (!u) return { active: !1, intent: void 0 };
      const _ = o;
      return o = void 0, u = !1, { active: !0, intent: _ };
    }
    function h(_) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (o = _, u = !0, S.value = "", S.click(), !0) : !1;
    }
    function y(_) {
      var O, V;
      const { active: S, intent: N } = f();
      if (!S) return;
      const b = ((V = (O = _.target) == null ? void 0 : O.files) == null ? void 0 : V[0]) || null;
      if (b) {
        r("file-selected", { intent: N, file: b });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function g() {
      const { active: _, intent: S } = f();
      _ && r("file-cancelled", { intent: S });
    }
    return t({ open: h }), (_, S) => (Me(), Ae("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: y,
      onCancel: g
    }, null, 544));
  }
}, Ox = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Fx = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ bn(!1), n = Object.freeze([
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
    return (r, a) => (Me(), Ae("div", {
      class: ft(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      Ve(tn, {
        icon: pt(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", Ox, [
        a[3] || (a[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ae(ot, null, zt(pt(n), (o) => (Me(), Ae("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Rx = { class: "pano-stickers-node-surface" }, Lx = ["disabled"], zx = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, Vx = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, $x = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ bn(null);
    function r(u) {
      var f;
      (f = t.onAction) == null || f.call(t, u);
    }
    function a() {
      var u, f;
      (f = (u = n.value) == null ? void 0 : u.open) == null || f.call(u, "add");
    }
    function o(u) {
      r({ type: "add-image-file", file: (u == null ? void 0 : u.file) || null });
    }
    return (u, f) => (Me(), Ae("div", Rx, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Kn(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Kn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (h) => r({ type: "open-editor" }))
        }, [
          Ve(en, {
            icon: pt(Ee).fullscreen
          }, null, 8, ["icon"]),
          f[7] || (f[7] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: a
        }, [
          Ve(en, {
            icon: pt(Ee).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, Lx),
        Ve(tn, {
          icon: e.model.locked ? pt(Ee).lock_closed : pt(Ee).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (h) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ve(tn, {
          icon: pt(Ee).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (h) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ve(tn, {
          icon: pt(Ee).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (h) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ve(tn, {
          icon: e.model.isExternalSelection ? pt(Ee).back_initial : pt(Ee).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (h) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ve(Fx)
      ], 32),
      e.model.hasStickers === !1 ? (Me(), Ae("div", zx, " Add Image to place a sticker ")) : Rt("", !0),
      e.model.dropActive === !0 ? (Me(), Ae("div", Vx, "Drop image to add")) : Rt("", !0),
      Ve(ig, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512)
    ]));
  }
}, Ss = "sticker_image_1", ag = "external_image";
function ws(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), a = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * a) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function gu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Xc(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Jc(e) {
  return String((e == null ? void 0 : e.id) || "") === Ss || String((e == null ? void 0 : e.source_kind) || "") === ag;
}
const og = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function sg(e) {
  return !Jc(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(og.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), a = Number(e.initial_pose[t]);
    return [t, Number.isFinite(a) ? a : Number.isFinite(r) ? r : n];
  }));
}
function lg(e) {
  const t = sg(e);
  return t ? og.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function ug(e, t = {}) {
  var T, F, G;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((U) => String((U == null ? void 0 : U.id) || "") === Ss);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const U = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === Ss;
    return {
      state: {
        ...e,
        stickers: n.filter((le, oe) => oe !== r),
        active: U ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const a = Number(t.linkId), o = String(t.stateHash || ""), u = r >= 0 ? n[r] : null, f = !u || Number(u.source_link_id ?? -1) !== a || String(u.source_state_hash || "") !== o, h = Number(t.imageWidth || 0), y = Number(t.imageHeight || 0), g = h > 0 && y > 0, _ = Math.max(1, h), S = Math.max(1, y), N = t.pose && typeof t.pose == "object" ? t.pose : {}, b = f ? N.hFOV_deg || (u == null ? void 0 : u.hFOV_deg) || 30 : (u == null ? void 0 : u.hFOV_deg) || N.hFOV_deg || 30, O = Math.min(179, Math.max(0.1, Number(b)));
  if (!f) {
    if (!g) return { state: e, changed: !1 };
    const U = ws(O, _, S), le = Number(((F = u == null ? void 0 : u.initial_pose) == null ? void 0 : F.hFOV_deg) ?? O), oe = ws(le, _, S), I = Number(((G = u == null ? void 0 : u.initial_pose) == null ? void 0 : G.vFOV_deg) ?? oe);
    return Math.abs(Number((u == null ? void 0 : u.vFOV_deg) || 0) - U) <= 1e-6 && Math.abs(I - oe) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((Y, ie) => ie === r ? {
          ...Y,
          vFOV_deg: U,
          initial_pose: Y.initial_pose && typeof Y.initial_pose == "object" ? { ...Y.initial_pose, vFOV_deg: oe } : Y.initial_pose
        } : Y)
      },
      changed: !0
    };
  }
  const V = n.reduce((U, le) => Math.max(U, Number((le == null ? void 0 : le.z_index) || 0)), -1), R = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: O,
    vFOV_deg: g ? ws(O, _, S) : Number(N.vFOV_deg || (u == null ? void 0 : u.vFOV_deg) || O),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, P = {
    ...u || {},
    id: Ss,
    source_kind: ag,
    source_link_id: a,
    source_state_hash: o,
    ...R,
    initial_pose: { ...R },
    visible: !0,
    z_index: V + 1
  }, L = r >= 0 ? n.map((U, le) => le === r ? P : U) : [...n, P];
  return { state: { ...e, stickers: L }, changed: !0 };
}
function Zc(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: gu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: gu(o.z_index),
    item: o
  })), a = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: gu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...a].sort((o, u) => o.z_index - u.z_index);
}
function cg(e) {
  const t = Xc(e), n = Jc(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), a = Zc(e), o = t ? a.findIndex((f) => f.type === "sticker" && f.item === t) : -1, u = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: lg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: u,
    canDelete: !!t && !u,
    canMoveForward: o >= 0 && o < a.length - 1,
    canMoveBackward: o > 0
  };
}
function jx(e) {
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
function Ah(e, t) {
  const n = Xc(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = jx(e), a = String(n.id || ""), o = Zc(r), u = o.findIndex((h) => h.type === "sticker" && h.id === a);
  if (u < 0) return { state: e, changed: !1 };
  if (t === "front" && u === o.length - 1 || t === "back" && u === 0)
    return { state: e, changed: !1 };
  const [f] = o.splice(u, 1);
  return t === "front" ? o.push(f) : o.unshift(f), o.forEach((h, y) => {
    h.item.z_index = y;
  }), { state: r, changed: !0 };
}
function Hx(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Ux(e, t = {}) {
  var r, a;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return ug(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = String(o.stickerId || "").trim(), f = String(o.assetId || "").trim();
    if (!u || !f || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === u))
      return { state: e, changed: !1 };
    const y = Zc(e).reduce((S, N) => Math.max(S, Number(N.z_index || 0)), -1), g = 30, _ = {
      id: u,
      asset_id: f,
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: g,
      vFOV_deg: ws(g, o.imageWidth, o.imageHeight),
      rot_deg: 0,
      z_index: y + 1
    };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [f]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], _],
        active: { ...e.active || {}, selected_sticker_id: u }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !(Array.isArray(e.stickers) ? e.stickers : []).some((u) => String((u == null ? void 0 : u.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Xc(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    if (Hm(e, n.id)) return { state: e, changed: !1 };
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, locked: o } : u)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = sg(n);
    return !o || !lg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, ...o } : u)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Ah(e, "front");
  if (t.type === "send-back") return Ah(e, "back");
  if (t.type === "delete-selected") {
    if (Jc(n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((h) => h === n ? { ...h, visible: !1 } : h)
        },
        changed: !0
      };
    const o = e.stickers.filter((h) => h !== n), u = ((a = o[0]) == null ? void 0 : a.id) == null ? null : String(o[0].id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: u }
    };
    return f.assets = Hx(f), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], f = {};
    return u.forEach((h) => {
      const y = Number(o[h]);
      Number.isFinite(y) && Math.abs(y - Number(n[h] || 0)) > 1e-12 && (f[h] = y);
    }), Object.keys(f).length ? {
      state: {
        ...e,
        stickers: e.stickers.map((h) => h === n ? { ...h, ...f } : h)
      },
      changed: !0
    } : { state: e, changed: !1 };
  }
  return { state: e, changed: !1 };
}
function Gx(e = {}) {
  return Ym({
    ...e,
    reduce: Ux,
    projectModel: cg
  });
}
const Ch = 24;
function Bx(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ih(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function Kx(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r, r += 1) {
    const o = t[r], u = t[a];
    o.y > e.y != u.y > e.y && e.x < (u.x - o.x) * (e.y - o.y) / (u.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Qu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Ih(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], a = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: a * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ih(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Kx(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function fg(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((a) => (Array.isArray(a) ? a : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function dg(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function hg(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1))
  };
}
function pg(e) {
  return Ln(
    Number((e == null ? void 0 : e.yawDeg) ?? (e == null ? void 0 : e.yaw) ?? 0),
    Number((e == null ? void 0 : e.pitchDeg) ?? (e == null ? void 0 : e.pitch) ?? 0),
    0
  );
}
function Wx(e, t, n) {
  const { width: r, height: a } = hg(n), { right: o, up: u, fwd: f } = pg(t), h = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Gt, y = 2 * Math.atan(Math.tan(h * 0.5) * (a / r)), g = (Number((e == null ? void 0 : e.x) || 0) - r * 0.5) / (r * 0.5) * Math.tan(h * 0.5), _ = (a * 0.5 - Number((e == null ? void 0 : e.y) || 0)) / (a * 0.5) * Math.tan(y * 0.5);
  return Fc(ka(ka(Ma(o, g), Ma(u, _)), f));
}
function Ya(e, t, n) {
  const { width: r, height: a } = hg(n), { right: o, up: u, fwd: f } = pg(t), h = ma(e, o), y = ma(e, u), g = ma(e, f), _ = 1e-4;
  if (!Number.isFinite(g)) return null;
  const S = Math.max(g, _), N = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Gt, b = 2 * Math.atan(Math.tan(N * 0.5) * (a / r)), O = r * 0.5 / Math.tan(N * 0.5), V = a * 0.5 / Math.tan(b * 0.5), R = Math.max(r, a) * 2;
  return {
    x: W(r * 0.5 + h / S * O, -R, r + R),
    y: W(a * 0.5 - y / S * V, -R, a + R),
    rawZ: g
  };
}
function Yx(e) {
  const t = Ln(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(W(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Gt * 0.5),
    tanY: Math.tan(W(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Gt * 0.5)
  };
}
function _i(e, t, n) {
  return Fc(ka(
    ka(e.centerDir, Ma(e.right, t)),
    Ma(e.up, n)
  ));
}
function mg(e, t, n) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Yx(e), a = Ya(r.centerDir, t, n);
  if (!a) return { visible: !1 };
  const o = [
    _i(r, -r.tanX, r.tanY),
    _i(r, r.tanX, r.tanY),
    _i(r, r.tanX, -r.tanY),
    _i(r, -r.tanX, -r.tanY)
  ].map((N) => Ya(N, t, n)), u = Array.from({ length: 4 }, (N, b) => {
    const O = [];
    for (let V = 0; V <= 28; V += 1) {
      const R = V / 28;
      let P, L;
      b === 0 ? (P = -r.tanX + 2 * r.tanX * R, L = r.tanY) : b === 1 ? (P = r.tanX, L = r.tanY - 2 * r.tanY * R) : b === 2 ? (P = r.tanX - 2 * r.tanX * R, L = -r.tanY) : (P = -r.tanX, L = -r.tanY + 2 * r.tanY * R);
      const T = Ya(_i(r, P, L), t, n);
      T && O.push({ x: T.x, y: T.y });
    }
    return O;
  }), f = Ya(_i(r, 0, r.tanY), t, n), h = Ya(
    _i(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t,
    n
  ), y = [a, ...o, f, h];
  if (y.some((N) => !N || !Number.isFinite(N.x) || !Number.isFinite(N.y)))
    return { visible: !1 };
  if (!y.some((N) => N.rawZ > 1e-4)) return { visible: !1 };
  const g = h.x - f.x, _ = h.y - f.y, S = Math.hypot(g, _) || 1;
  return {
    center: { x: a.x, y: a.y },
    corners: o.map((N) => ({ x: N.x, y: N.y })),
    boundaryEdges: u,
    rotateStemBase: { x: f.x, y: f.y },
    rotateHandle: {
      x: f.x + g / S * Ch,
      y: f.y + _ / S * Ch
    },
    visible: !0
  };
}
function Th(e, t, n, r, a) {
  const o = (Array.isArray(e) ? e : []).filter((f) => f && f.visible !== !1).map((f) => ({ item: f, geometry: mg(f, r, a) })).filter((f) => f.geometry.visible).sort((f, h) => {
    var y, g;
    return Number(((y = h.item) == null ? void 0 : y.z_index) || 0) - Number(((g = f.item) == null ? void 0 : g.z_index) || 0);
  }), u = o.find((f) => {
    var h;
    return String(((h = f.item) == null ? void 0 : h.id) || "") === String(t || "");
  });
  if (u) {
    const f = Qu(u.geometry, n);
    if (f.kind === "scale" || f.kind === "rotate") return { ...u, hit: f };
  }
  for (const f of o) {
    const h = Qu(f.geometry, n);
    if (h.kind !== "none") return { ...f, hit: h };
  }
  return null;
}
function qx(e, t, n, r) {
  const a = Wx(t, n, r);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(a.x, a.z) * Wn),
    pitch_deg: Math.asin(W(a.y, -1, 1)) * Wn
  };
}
function Xx(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: W(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: W(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Jx(e, t, n, r = !1) {
  const a = (Number(n || 0) - Number(t || 0)) * Wn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - a;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let es = null;
function Qc() {
  return es || (es = new Promise((e) => {
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
  }), es);
}
function Zn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Zx(e, t = 1024) {
  const n = Math.max(1, Math.round(Zn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Zn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function Qx(e, t, n) {
  const r = Zn(t), a = Zn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || a < 1) return null;
  const u = Zn(o.u0), f = Zn(o.v0), h = Zn(o.u1), y = Zn(o.v1);
  if (h <= u || y <= f) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((u + h) * 0.5 + Zn(g.du)) * r,
    centerY: ((f + y) * 0.5 + Zn(g.dv)) * a,
    width: (h - u) * r,
    height: (y - f) * a,
    rotationRad: Zn(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Zn(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function eS(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), a = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
    a.u0,
    a.v0,
    a.u1,
    a.v1,
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function tS() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, u] of e) {
        if (e.size <= 16) break;
        u.settled && (u.image.onload = null, u.image.onerror = null, e.delete(o));
      }
  }
  function r(o, u) {
    let f = e.get(o);
    if (f)
      return e.delete(o), e.set(o, f), !f.settled && typeof u == "function" && f.listeners.add(u), f.image;
    const h = new Image();
    f = { image: h, listeners: new Set(typeof u == "function" ? [u] : []), settled: !1 }, e.set(o, f);
    const y = () => {
      f.settled = !0;
      const g = [...f.listeners];
      f.listeners.clear(), g.forEach((_) => _()), n();
    };
    return h.onload = y, h.onerror = y, h.src = o, n(), h;
  }
  function a(o, u, f, h = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const y = String(o.rasterDataUrl || "").trim(), g = Qx(o, u, f);
    if (!y.startsWith("data:") || !g) return null;
    const _ = eS(o, u, f), S = String((o == null ? void 0 : o.id) || "").trim() || _, N = t.get(S);
    if ((N == null ? void 0 : N.revision) === _) return { source: N.source, revision: _ };
    const b = r(y, h), O = Number(b.naturalWidth || b.width || 0), V = Number(b.naturalHeight || b.height || 0);
    if (!b.complete || O < 1 || V < 1) return null;
    const R = document.createElement("canvas");
    R.width = Math.max(1, Math.round(u)), R.height = Math.max(1, Math.round(f));
    const P = R.getContext("2d");
    return P ? (g.wrapOffsets.forEach((L) => {
      P.save(), P.translate(g.centerX + L, g.centerY), P.rotate(g.rotationRad), P.scale(g.scale, g.scale), P.drawImage(
        b,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), P.restore();
    }), t.set(S, { revision: _, source: R }), { source: R, revision: _ }) : null;
  }
  return {
    get: a,
    retain(o = []) {
      const u = new Set(Array.from(o, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        u.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function nS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function rS(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function iS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), a = Math.max(1, Math.trunc(Number(t || 32)));
  function o(_) {
    if (!_) return;
    _.entry.listeners.delete(_);
    const S = r.get(_.owner);
    (S == null ? void 0 : S.get(_.key)) === _ && S.delete(_.key);
  }
  function u(_, S, N, b) {
    if (!_ || typeof b != "function" || N.settled) return;
    let O = r.get(_);
    O || (O = /* @__PURE__ */ new Map(), r.set(_, O));
    const V = O.get(S);
    if ((V == null ? void 0 : V.entry) === N) {
      V.callback = b;
      return;
    }
    o(V);
    const R = { owner: _, key: S, entry: N, callback: b };
    O.set(S, R), N.listeners.add(R);
  }
  function f(_, S) {
    _.settled || (_.settled = !0, _.image.onload = null, _.image.onerror = null, !S && n.get(_.key) === _ && n.delete(_.key), [..._.listeners].forEach((N) => {
      o(N);
      try {
        N.callback(_.image, S);
      } catch {
      }
    }), h(a));
  }
  function h(_) {
    if (!(n.size <= _))
      for (const [S, N] of n) {
        if (n.size <= _) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(S));
      }
  }
  function y(_, S, N, b = null) {
    const O = String(S || ""), V = String(N || "");
    if (!O || !V) return null;
    let R = n.get(O);
    if (R)
      n.delete(O), n.set(O, R);
    else {
      h(a - 1);
      const L = e || globalThis.Image;
      if (typeof L != "function") return null;
      const T = new L();
      R = { key: O, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(O, R), T.onload = () => f(R, !0), T.onerror = () => f(R, !1), T.src = V;
    }
    return R.settled || R.image.complete && Number(R.image.naturalWidth || R.image.width || 0) > 0 || u(_, O, R, b), R.image;
  }
  function g(_) {
    const S = r.get(_);
    S && ([...S.values()].forEach(o), r.delete(_), h(a));
  }
  return { get: y, disposeOwner: g };
}
function js(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function hl(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = js(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function Eh(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    js(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function aS(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    js(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = js(e);
  Object.keys(r).forEach((a) => {
    r[a] = !0;
  });
}
function Dh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const u = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((u == null ? void 0 : u.name) || ""));
}
function oS(e, t = [], n = null) {
  var a;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const u = [(a = e == null ? void 0 : e.ui) == null ? void 0 : a[o], e == null ? void 0 : e[o]];
    for (const f of u)
      if (Array.isArray(f))
        for (const h of f) {
          const y = r(h);
          if (y && (/\.mp4(\?|$)/i.test(y) || String((h == null ? void 0 : h.format) || "").toLowerCase() === "video/mp4"))
            return y;
        }
  }
  return "";
}
function sS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var b;
  const r = ((b = e == null ? void 0 : e.createElement) == null ? void 0 : b.call(e, "video")) || null;
  if (!r || !t) return null;
  const a = typeof n == "function" ? n : () => {
  };
  let o = !1, u = 0;
  const f = typeof r.requestVideoFrameCallback == "function", h = () => {
    o || !f || u || r.paused || r.ended || (u = r.requestVideoFrameCallback(() => {
      u = 0, !o && (a(), h());
    }));
  }, y = () => {
    if (!o) {
      a();
      try {
        Promise.resolve(r.play()).then(h).catch(() => {
        });
      } catch {
      }
    }
  }, g = () => a(), _ = () => {
    a(), h();
  }, S = () => a();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", y, { once: !0 }), r.addEventListener("canplay", y, { once: !0 }), f || r.addEventListener("timeupdate", g), r.addEventListener("play", _), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var O, V;
    o || (o = !0, u && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(u), u = 0), r.removeEventListener("loadedmetadata", y), r.removeEventListener("canplay", y), r.removeEventListener("timeupdate", g), r.removeEventListener("play", _), r.removeEventListener("pause", S), r.pause(), (O = r.removeAttribute) == null || O.call(r, "src"), (V = r.load) == null || V.call(r));
  } };
}
const Hs = "state_json";
function Yr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function lS(e) {
  var u, f;
  const t = Yr(e, Hs);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Kc(n, {
    coverage: (u = Yr(e, "coverage")) == null ? void 0 : u.value
  }), a = Qm(r, { type: "add-frame" });
  if (!a.changed) return !1;
  const o = JSON.stringify(a.state);
  return t.value = o, (f = t.callback) == null || f.call(t, o), !0;
}
function ef(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Yr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var u, f, h, y, g, _, S, N, b;
    const o = r ? r(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || f.call(u), (y = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || y.call(h), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (S = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || S.call(_, !0, !0), (b = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || b.call(N, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function uS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Oh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function cS(e) {
  var g, _, S, N, b, O;
  if (!e) return;
  const t = Yr(e, "coverage"), n = Yr(e, "bg_color"), r = Yr(e, Hs), a = Yr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && uS(o) && (Oh(u) || u === ""))) return;
  let y = "360";
  if (Oh(u))
    try {
      y = String(Qt((g = JSON.parse(u)) == null ? void 0 : g.coverage));
    } catch {
      y = "360";
    }
  t.value = y, (_ = t.callback) == null || _.call(t, y), n.value = o, (S = n.callback) == null || S.call(n, o), r.value = u, (N = r.callback) == null || N.call(r, u), a && (a.value = f, (b = a.callback) == null || b.call(a, f)), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
}
function ks(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function ec(e, t, n) {
  var o, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (o = a.element) != null && o.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var h;
      return [Math.max(120, Number(((h = e == null ? void 0 : e.size) == null ? void 0 : h[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function fS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, a]) => a)) : await Promise.all(r.map(([, a]) => a)), r.forEach(([a, o]) => {
        n.get(a) === o && n.delete(a);
      });
    }
}
function tc(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = o.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, o);
  const f = () => {
    var h, y;
    ((y = (h = e.__panoPendingStickerUploads) == null ? void 0 : h.get) == null ? void 0 : y.call(h, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(f, f), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), o;
}
async function gg(e, t = {}) {
  var r;
  await fS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const a of n) await a();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function dS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await gg(e), n ? n.apply(this, r) : this.value;
  };
}
function hS(e) {
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
function pS(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((a) => String((a == null ? void 0 : a.name) || "") === "image" && String((a == null ? void 0 : a.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function bu(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: a,
  attachStickers: o,
  attachCutout: u,
  enableStickersPreview: f,
  sceneStateV2: h = !1
}) {
  if (!(e != null && e.prototype)) return;
  function y(g) {
    var N;
    const _ = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === _) return;
    hS(g), ef(g, t), ks(g, Hs);
    const S = Yr(g, Hs);
    if (dS(g, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const b = S.callback;
      S.callback = (O) => {
        var R;
        const V = b ? b(O) : void 0;
        return (R = g.setDirtyCanvas) == null || R.call(g, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = h;
      const b = Yr(g, "bg_color");
      !h && b && (b.value == null || String(b.value).trim() === "" || String(b.value).toLowerCase() === "#000000") && (b.value = "#00ff00", (N = b.callback) == null || N.call(b, "#00ff00")), ec(g, r, () => a(g, "stickers")), f && (o(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => a(g, "stickers")
      }), g.__panoStickersNodeSurface && ks(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
      return;
    }
    ec(g, r, () => a(g, "cutout")), u(g, {
      buttonText: r,
      onOpen: () => a(g, "cutout")
    }), g.__panoCutoutNodeSurface && ks(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const _ = e.prototype[g];
    e.prototype[g] = function() {
      const S = _ ? _.apply(this, arguments) : void 0;
      return g === "onNodeCreated" && n === "PanoramaCutout" && lS(this), g === "onConfigure" && n === "PanoramaStickers" && !h && this.widgets && cS(this), (g === "onNodeCreated" || this.widgets) && y(this), S;
    };
  }
}
function mS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return pS(this), r;
  };
}
function gS(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: a
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const u = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !u && f < 40) {
      a(o);
      return;
    }
    ef(e, t);
    const h = (y = e) => n(y, "stickers", { readOnly: !0, hideSidebar: !1 });
    ec(e, "Open Preview", () => h(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: h
    }), e.__panoPreviewNodeSurface && ks(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(o);
}
function bS({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: a,
  requestFrame: o,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, h) {
      const y = String((h == null ? void 0 : h.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && bu(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && bu(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && bu(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), zs(y) && mS(f);
    },
    nodeCreated(f) {
      const h = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      ef(f, e), zs(h) && gS(f, { app: e, openEditor: t, attachPreview: a, requestFrame: o });
    }
  };
}
const yS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Nr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : yS.test(String(e.name || "")) : !1;
}
function tf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Nr(n)) : !1;
}
function vS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, a = (h) => {
    var y, g, _;
    (y = h == null ? void 0 : h.preventDefault) == null || y.call(h), (g = h == null ? void 0 : h.stopPropagation) == null || g.call(h), (_ = h == null ? void 0 : h.stopImmediatePropagation) == null || _.call(h);
  }, o = (h) => {
    if (tf(h == null ? void 0 : h.dataTransfer)) {
      a(h);
      try {
        h.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, u = (h) => {
    var y;
    h != null && h.relatedTarget && ((y = e.contains) != null && y.call(e, h.relatedTarget)) || n(!1);
  }, f = (h) => {
    var g;
    const y = Array.from(((g = h == null ? void 0 : h.dataTransfer) == null ? void 0 : g.files) || []).find((_) => Nr(_));
    if (!y) {
      n(!1);
      return;
    }
    a(h), n(!1), r(y);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", u, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", u, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function nc(e, t = {}) {
  var u, f, h, y;
  if (!Nr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (u = globalThis.URL) == null ? void 0 : u.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), a = t.revokeObjectURL || ((y = (h = globalThis.URL) == null ? void 0 : h.revokeObjectURL) == null ? void 0 : y.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const g = await new Promise((_, S) => {
      const N = new n();
      N.onload = () => _(N), N.onerror = () => S(new Error("image load failed")), N.src = o;
    });
    return {
      image: g,
      width: Math.max(1, Number(g.naturalWidth || g.width || 1)),
      height: Math.max(1, Number(g.naturalHeight || g.height || 1))
    };
  } finally {
    a == null || a(o);
  }
}
async function Ms(e, { fetchApi: t } = {}) {
  if (!Nr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const a = await r.json(), o = String((a == null ? void 0 : a.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((a == null ? void 0 : a.subfolder) || "panorama_stickers"),
    storage: String((a == null ? void 0 : a.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const to = /* @__PURE__ */ new WeakMap();
function bg(e, t) {
  if (!e || typeof t != "function") return () => {
  };
  let n = to.get(e);
  n || (n = [], to.set(e, n));
  const r = { handler: t };
  n.push(r);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const o = to.get(e);
    if (!o) return;
    const u = o.indexOf(r);
    u >= 0 && o.splice(u, 1), o.length === 0 && to.delete(e);
  };
}
function no(e, ...t) {
  const n = to.get(e), r = n == null ? void 0 : n[n.length - 1];
  return r ? (r.handler(...t), !0) : !1;
}
const Fh = /* @__PURE__ */ new WeakSet(), Rh = /* @__PURE__ */ new WeakSet();
let Lh = 0;
function rc(e) {
  if (!e || typeof e != "object" || Rh.has(e)) return e;
  const t = String(e.type || "preview");
  return Lh += 1, e.type = `${t}:pano-${Lh}`, Rh.add(e), e;
}
function Us(e) {
  if (!e || typeof e != "object" || Fh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Fh.add(e), e;
}
function yg(e, t) {
  var r, a;
  if (!t || ((a = (r = Us(t)) == null ? void 0 : r.onRemove) == null || a.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function _S({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, a = null, o = !1;
  return { schedule: (h) => o || r || typeof e != "function" ? !1 : (a = h, r = e(() => {
    r = 0;
    const y = a;
    a = null, o || n == null || n(y);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, a = null);
  } };
}
const { app: Lt } = ms, nf = iS();
function ic() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ms == null ? void 0 : ms.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const xS = Math.PI / 180, SS = {}, wS = { Nu: 24, Nv: 14 }, kS = 10, MS = "pano_suite.ui_settings.v1", NS = 120;
function zh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(MS)) || "").trim();
    if (!n) return e;
    const r = JSON.parse(n), a = String((r == null ? void 0 : r.preview_quality) || "balanced");
    return {
      invert_view_x: !!(r != null && r.invert_view_x),
      invert_view_y: !!(r != null && r.invert_view_y),
      preview_quality: a === "draft" || a === "high" ? a : "balanced"
    };
  } catch {
    return e;
  }
}
function PS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function qa(e) {
  var n, r, a, o, u;
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
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function AS() {
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
function ac(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, a) => {
    const o = Number(r), u = Number(a);
    return !Number.isFinite(o) || !Number.isFinite(u) ? null : [o, u];
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
function vg(e) {
  const t = ac(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function CS(e, t, n) {
  vg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function oc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function rf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function _g(e) {
  return zs(rf(e));
}
function Vh(e = null) {
  var o, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (o = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, a].join("|");
}
function xg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = "dom", o = oc(e);
      this.activeBackend = o;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (o === a && o !== "none" && u === r && f === h) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Ns(e), bw(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = oc(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ns(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ns(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function IS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ns(e, t = {}) {
  var r, a, o, u, f;
  if (!e) return;
  sc.unregister(e), IS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (a = e.__panoLegacyRestore) == null || a.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((y) => {
      if (y === (n == null ? void 0 : n.widget)) return !0;
      const g = String((y == null ? void 0 : y.name) || ""), _ = String((y == null ? void 0 : y.type) || ""), S = ic();
      return g === S || _ === S || g === "pano_preview" || _ === "pano_preview" ? !0 : g === "preview" && _ === "pano_preview";
    }).forEach((y) => qS(e, y));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function yu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function TS(e, t = "#00ff00") {
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
    const a = e.trim();
    if (!a) return n;
    try {
      r = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = r;
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
function ES(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = va(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Qn(e) {
  var f, h;
  const t = ES(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = va(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((h = va(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === a)
    return o.parsed;
  const u = e.__panoSceneStateV2 && typeof t == "string" ? Kc(t, { backgroundColor: r, coverage: a, active: Gm(e) }) : TS(t, r);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: u }, u;
}
function va(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Sg(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function DS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function wg(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function kg(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = DS(e == null ? void 0 : e.graph, n)), r;
}
function OS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Mg(e, t = []) {
  const n = OS(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function $h(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Gs(e, t) {
  const n = $h(e), r = $h(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function FS(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Mg(e, t).map((y) => n.findIndex((g) => String((g == null ? void 0 : g.name) || "") === String(y))).filter((y) => y >= 0), o = n.map((y, g) => ({ input: y, idx: g })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...o])], f = [];
  for (const y of u) {
    const g = kg(e, y);
    if ((g == null ? void 0 : g.id) != null) {
      f.push(String(g.id));
      continue;
    }
    const _ = (h = n[y]) == null ? void 0 : h.link;
    if (_ == null) continue;
    const S = Sg(e == null ? void 0 : e.graph, _), { originId: N } = wg(S);
    N != null && f.push(String(N));
  }
  return [...new Set(f)];
}
const sc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = mn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var y, g, _, S, N;
        if (!o) return;
        const u = Gs(r, o == null ? void 0 : o.id);
        FS(o, ["erp_image", "bg_erp"]).some((b) => Gs(r, b)), !(String(o.__panoPreviewMode || "") === "cutout" && !u) && (Pg(o), (g = (y = o.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || g.call(y), (_ = o.setDirtyCanvas) == null || _.call(o, !0, !0), (N = (S = o.graph) == null ? void 0 : S.setDirtyCanvas) == null || N.call(S, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Bs(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(a) : a;
}
function RS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function LS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: a, subfolder: o };
}
function zS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function VS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (RS(t)) return [t];
  const { filename: n, subfolder: r } = LS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((o) => Bs({
    filename: n,
    subfolder: r,
    type: o
  }));
  return zS([...a, t]);
}
function $S(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Bs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function vo(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Gs(o, a)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const u of o)
      if (Gs(u, a)) return t[u];
  }
  return null;
}
function lc(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || vo(e == null ? void 0 : e.id), a = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(a) ? a[0] : a;
}
function Sr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Sr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Bs({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Sr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Bs(e);
}
function jh(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ng(e) {
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
function af(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", o = new URL(n, a);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function jS(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((u) => t.push(u));
  }, a = (o, u = 0) => {
    !o || u > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), a(o.output, u + 1), a(o.ui, u + 1), a(o.data, u + 1), a(o.result, u + 1));
  };
  return a(e, 0), t;
}
function HS(e, t) {
  try {
    e.__panoOwnOutputRev = nS(e.__panoOwnOutputRev);
    const n = jS(t);
    let r = "";
    for (const a of n)
      if (r = Sr(a), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), af(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function _a(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function Hh(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!hl(e, "background"))
    return _a(e), null;
  const a = vo(r), o = oS(a, t, Sr);
  if (!o)
    return _a(e), null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = af(o, u), h = `${t.join("|")}:${f}`, y = e.__panoOwnOutputVideoCache;
  if (y != null && y.video && y.key === h) return y.video;
  _a(e);
  const g = sS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: h, ...g }, g.video) : null;
}
function US(e, t = []) {
  var y, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Mg(e, t).map((_) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(_))).filter((_) => _ >= 0), o = n.map((_, S) => ({ input: _, idx: S })).filter(({ input: _ }) => String((_ == null ? void 0 : _.type) || "").toUpperCase() === "IMAGE").map(({ idx: _ }) => _), u = [.../* @__PURE__ */ new Set([...a, ...o])];
  for (const _ of u) {
    const S = n[_], N = S == null ? void 0 : S.link;
    if (N == null) continue;
    const b = Sg(e.graph, N), { originId: O, originSlot: V } = wg(b);
    if (O == null) continue;
    const R = kg(e, _, O);
    if (!R) continue;
    const P = Number(V || 0), L = vo((R == null ? void 0 : R.id) ?? O), T = Array.isArray(L == null ? void 0 : L.images) ? L.images : [];
    if (T.length) {
      const le = [];
      P >= 0 && P < T.length && le.push(T[P]), le.push(...T);
      for (const oe of le) {
        const I = Sr(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(R) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const le = [];
      P >= 0 && P < F.length && le.push(F[P]), le.push(...F);
      for (const oe of le) {
        const I = Sr(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const G = Array.isArray(R == null ? void 0 : R.imgs) ? R.imgs : [];
    if (G.length) {
      const le = [];
      P >= 0 && P < G.length && le.push(G[P]), le.push(...G);
      for (const oe of le) {
        const I = Sr(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const U = (y = R == null ? void 0 : R.widgets) == null ? void 0 : y.find((le) => String((le == null ? void 0 : le.name) || "").toLowerCase() === "image");
    if (U) {
      let le = Sr(U.value);
      if (le && !le.includes("/") && !le.includes(":") && (R.comfyClass === "LoadImage" || R.type === "LoadImage") && (le = mn.apiURL(`/view?filename=${encodeURIComponent(le)}&type=input&subfolder=`)), le)
        return String((S == null ? void 0 : S.name) || ""), { src: le, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = hl(e, "background") ? vo(e == null ? void 0 : e.id) : null, h = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && h.push(...f.pano_input_images), Array.isArray((g = f == null ? void 0 : f.ui) == null ? void 0 : g.pano_input_images) && h.push(...f.ui.pano_input_images), h.length > 0)
    for (const _ of h) {
      const S = Sr(_);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function GS(e, t = [], n = {}) {
  const r = US(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const o = VS(a);
  if (!o.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", h = e.__panoLinkedInputImageCache.get(f);
  if (h && h.srcRaw === a && h.img) return h.img;
  if (h && h.pendingSrcRaw === a && h.pendingImg)
    return u && h.img && (h.img.complete || h.img.naturalWidth || h.img.width) ? h.img : h.pendingImg;
  const y = new Image(), g = h || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = a, g.pendingResolvedSrc = "", g.pendingImg = y, e.__panoLinkedInputImageCache.set(f, g);
  let _ = -1;
  const S = () => {
    var b, O, V, R;
    if (_ += 1, _ >= o.length) {
      if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === g && g.pendingImg === y && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const N = o[_];
    g.pendingResolvedSrc = N, y.src = N;
  };
  return y.onload = () => {
    var N, b, O;
    ((b = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : b.call(N, f)) === g && g.pendingImg === y && (g.srcRaw = a, g.resolvedSrc = String(g.pendingResolvedSrc || y.src || ""), g.img = y, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || y.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
  }, y.onerror = (N) => {
    var b, O, V, R;
    if (_ + 1 < o.length) {
      S();
      return;
    }
    if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === g && g.pendingImg === y && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, f);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, S(), u && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : y;
}
function Uh(e, t = [], n = null, r = {}) {
  const a = GS(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Pg(e) {
  var t, n, r, a;
  if (e) {
    nf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (a = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || a.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function BS(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function KS(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function Ag(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Xa(e, t, n = "") {
  const r = Ag(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < NS ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function vu(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / a, f = r / o, h = Math.min(u, f);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function WS(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), g = r + (o - h) * 0.5, _ = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, _, h, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + h * 0.5, _ + y * 0.5 + 0.5), e.restore();
}
function ea(e, t, n = "Connect ERP image") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Connect ERP image"), r.style.display = t ? "flex" : "none");
}
function YS(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const a = t.find((o) => String((o == null ? void 0 : o.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function qS(e, t) {
  return yg(e, t);
}
function Cg(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let o = $S(n);
  if (!o && (r != null && r.external)) {
    if (!hl(e, "external-sticker")) return null;
    const N = e.__panoLastExecutedOutput || vo(e == null ? void 0 : e.id), b = ((S = N == null ? void 0 : N.ui) == null ? void 0 : S.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const O of Array.isArray(b) ? b : [b])
      if (o = Sr(O), o) break;
  }
  if (!o) return null;
  const u = lc(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(u ?? "") : "", h = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, y = r != null && r.external ? af(o, h) : o, g = rS(o, f, h);
  return nf.get(e, g, y, (N, b) => {
    var O, V;
    b && (r != null && r.external && no(e, "image-loaded"), (V = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null || V.call(O));
  }) || null;
}
function XS(e, t) {
  return dl(t, {
    selectedId: null,
    hoveredId: null
  });
}
function JS(e, t, n) {
  return Wm(
    t,
    (r, a, o) => Cg(e, r, a, o),
    { scene: n }
  );
}
function ZS(e, t) {
  var _, S, N, b;
  const n = rw(e, t), r = iw(t), a = Array.isArray((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) ? t.painting.groups : [], o = new Map(
    a.filter((O) => O && typeof O == "object").map((O) => [String((O == null ? void 0 : O.actionGroupId) || (O == null ? void 0 : O.id) || "").trim(), Number((O == null ? void 0 : O.z_index) || 0)])
  ), u = n ? r.map((O) => {
    const V = n.getGroupDisplayCanvas(O);
    return V ? {
      id: `paint_group:${O}`,
      source: V,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${O}`,
      zIndex: Number(o.get(O) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (b = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || b.call(N, []), u;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = tS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var O, V;
    return (V = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : V.call(O);
  });
  const h = Zx(t == null ? void 0 : t.output_preset), y = f.filter((O) => (O == null ? void 0 : O.visible) !== !1 && String((O == null ? void 0 : O.layerKind) || "paint") === "paint").map((O) => String((O == null ? void 0 : O.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(y);
  const g = f.map((O) => {
    const V = e.__panoRasterObjectSurfaceCache.get(
      O,
      h.width,
      h.height,
      e.__panoRasterObjectReady
    );
    return V ? {
      id: `raster:${String((O == null ? void 0 : O.id) || "")}`,
      source: V.source,
      revision: V.revision,
      zIndex: Number((O == null ? void 0 : O.z_index) || 0),
      opacity: 1,
      visible: (O == null ? void 0 : O.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...u, ...g];
}
function _u(e, t, n, r = "") {
  const a = XS(e, t), o = JS(e, t, a), u = ZS(e, t), f = Ng(n), h = Tg(n), y = Qa({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      h.width,
      h.height,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(r || ""),
      Array.isArray(o) ? o.map((g) => `${String((g == null ? void 0 : g.assetId) || "")}:${String((g == null ? void 0 : g.revision) || "")}`).join(",") : "",
      Array.isArray(u) ? u.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${String((g == null ? void 0 : g.revision) || "")}:${Number((g == null ? void 0 : g.zIndex) || 0)}`).join(",") : ""
    ].join("|"),
    backgroundSource: n,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: a,
    textures: o,
    rasterEntries: u,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = No()), e.__panoRuntimeCore.syncState(y), e.__panoRuntimeCore;
}
function Ig(e, t, n, r) {
  const a = yu(e, t.right), o = yu(e, t.up), u = yu(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = o / u / r, h = a / u / r;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function QS(e, t, n, r) {
  var o, u, f, h, y, g;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const _ = r.convertEventToCanvasOffset(t);
      if (Array.isArray(_) && _.length >= 2)
        return {
          x: Number(_[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(_[1]) - Number(((h = e == null ? void 0 : e.pos) == null ? void 0 : h[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const a = tw(e, t, r);
  return a || null;
}
function ew(e, t) {
  var _, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (_ = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : _.call(a), u = (t == null ? void 0 : t.ds) || ((S = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : S.ds);
  if (!o || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const h = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(o.left || 0)) / f - Number(h[0] || 0), g = (r - Number(o.top || 0)) / f - Number(h[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(g) ? null : { x: y, y: g };
}
function tw(e, t, n) {
  var a, o;
  const r = ew(t, n || (Lt == null ? void 0 : Lt.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function nw(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function rw(e, t) {
  var y, g, _, S, N, b, O, V, R, P, L, T;
  const n = (g = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : g.strokes, r = (S = (_ = t == null ? void 0 : t.painting) == null ? void 0 : _.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!a && !o) return null;
  const u = nw(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Bu(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((b = t == null ? void 0 : t.painting) == null ? void 0 : b.raster_objects) || null
  };
  return (((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.paint) !== h.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== h.mask || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== h.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((L = t == null ? void 0 : t.painting) == null ? void 0 : L.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function iw(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Tg(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function aw(e, t, n, r) {
  const a = mg(t, n, r);
  if (!a.visible) return null;
  const o = Bx(t);
  return e.save(), fg(e, a.boundaryEdges, { selected: !0 }), dg(e, a, { accent: o }), e.restore(), a;
}
function ow(e, t, n, r = null) {
  var N, b, O, V, R, P, L, T, F, G, U, le, oe, I, Y, ie;
  const a = String(e.__panoPreviewMode || "stickers");
  Ag(e, a);
  const o = Qn(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (O = (b = (N = e.__panoCutoutNodeSurface) == null ? void 0 : N.session) == null ? void 0 : b.refresh) == null || O.call(b)) : a === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (P = (R = (V = e.__panoStickersNodeSurface) == null ? void 0 : V.session) == null ? void 0 : R.refresh) == null || P.call(R));
  const u = t.parentElement, f = 1, h = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), g = Math.max(64, Math.round(h * f)), _ = Math.max(64, Math.round(y * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const J = YS(o), he = Hh(
        e,
        ["pano_input_videos"],
        () => {
          var We, je;
          return (je = (We = e.__panoDomPreview) == null ? void 0 : We.requestDraw) == null ? void 0 : je.call(We);
        }
      ) || Uh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var We, je;
          return (je = (We = e.__panoDomPreview) == null ? void 0 : We.requestDraw) == null ? void 0 : je.call(We);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = jh(he);
      (t.width !== g || t.height !== _) && (t.width = g, t.height = _);
      const ke = { x: 0, y: 0, w: g, h: _ }, A = Tg(he), we = fe ? W(Number(A.width / A.height), 0.05, 20) : 1, Ce = J ? kr(J) : null, Ne = W(Number((Ce == null ? void 0 : Ce.aspect) || we || 1), 0.05, 20), B = qc(ke, Ne);
      e.__panoCutoutNodeFrame = B, vu(t, ke), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, g, _);
      let $e = "none", mt = "Connect ERP image", et = "";
      if (et = String((he == null ? void 0 : he.currentSrc) || (he == null ? void 0 : he.src) || ""), J)
        if (he && !fe)
          $e = "loading";
        else if (fe) {
          const We = _u(e, o, he, (J == null ? void 0 : J.id) || ""), je = px({ width: g, height: _ }, B, J), Yt = je.rect, An = kr(je.shot);
          let vn = !0;
          if (je.fallback) {
            const z = je.fallback.rect, j = kr(je.fallback.shot);
            vn = We.renderToContext(
              S,
              z,
              j,
              { width: z.w, height: z.h, dpr: 1 }
            );
          }
          const nn = We.renderToContext(
            S,
            Yt,
            An,
            { width: Yt.w, height: Yt.h, dpr: 1 }
          );
          let sn = !0;
          je.fallback && (sn = We.renderToContext(
            S,
            B,
            kr(J),
            { width: B.w, height: B.h, dpr: 1 }
          )), (!vn || !nn || !sn) && ($e = "empty", mt = "Open editor or run node");
        } else
          $e = "empty", mt = "Connect ERP image";
      else {
        const We = e.__panoLastCutoutShot;
        if (We ? (e.__panoPreviewView = Zm(We, { width: g, height: _ }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), fe) {
          const je = _u(e, o, he, "zero_shot_viewer"), Yt = ((T = (L = r == null ? void 0 : r.state) == null ? void 0 : L.drag) == null ? void 0 : T.active) === !0 || ((G = (F = r == null ? void 0 : r.state) == null ? void 0 : F.inertia) == null ? void 0 : G.active) === !0 ? 0.5 : 1;
          je.renderToContext(
            S,
            ke,
            bo(e.__panoPreviewView, o == null ? void 0 : o.coverage),
            { width: ke.w, height: ke.h, dpr: 1, renderScale: Yt }
          ) || ($e = "empty", mt = "Open editor or run node");
        } else he ? $e = "loading" : ($e = "empty", mt = "Connect ERP image");
      }
      J && (e.__panoLastCutoutShot = { ...J }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, g, _), S.rect(B.x, B.y, B.w, B.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(B.x + 0.5, B.y + 0.5, Math.max(0, B.w - 1), Math.max(0, B.h - 1)), S.restore()), $e === "loading" ? (ea(e, !1), Xa(e, !0, et)) : $e === "empty" ? (ea(e, !0, mt), Xa(e, !1, "")) : (ea(e, !1), Xa(e, !1, ""));
    } else {
      ea(e, !1), (t.width !== g || t.height !== _) && (t.width = g, t.height = _);
      const J = { x: 0, y: 0, w: g, h: _ };
      S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, g, _), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const he = Hh(
        e,
        ["pano_input_videos"],
        () => {
          var Ce, Ne;
          return (Ne = (Ce = e.__panoDomPreview) == null ? void 0 : Ce.requestDraw) == null ? void 0 : Ne.call(Ce);
        }
      ) || Uh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Ce, Ne;
          return (Ne = (Ce = e.__panoDomPreview) == null ? void 0 : Ce.requestDraw) == null ? void 0 : Ne.call(Ce);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = he || null, ke = !he || jh(fe), A = bo(e.__panoPreviewView, o == null ? void 0 : o.coverage);
      let we = !1;
      if (ke) {
        const Ne = _u(e, o, fe, he ? "stickers_surface|background:input" : "stickers_surface|background:none"), B = fw(e) || ((le = (U = r == null ? void 0 : r.state) == null ? void 0 : U.drag) == null ? void 0 : le.active) === !0 || ((I = (oe = r == null ? void 0 : r.state) == null ? void 0 : oe.inertia) == null ? void 0 : I.active) === !0 || ((Y = e.__panoStickerDrag) == null ? void 0 : Y.active) === !0;
        we = Ne.renderToContext(
          S,
          J,
          A,
          { width: J.w, height: J.h, dpr: 1, renderScale: B ? 0.5 : 1 }
        );
      }
      if (ke && we)
        Xa(e, !1, "");
      else {
        const Ce = !!he && !ke;
        Xa(e, Ce, String((fe == null ? void 0 : fe.currentSrc) || (fe == null ? void 0 : fe.src) || "")), Ce && WS(S, J, vu(t, J)), ea(e, !1);
      }
      if (!he && we) {
        const Ce = W(Number(A.fovDeg || 100), 1, 179) * xS, Ne = Math.tan(Ce * 0.5) * (J.h / Math.max(1, J.w)), B = Ln(Number(A.yawDeg || 0), Number(A.pitchDeg || 0), 0);
        lw(S, J, B, Ne, vu(t, J));
      }
      if (we) {
        ea(e, !1);
        const Ce = String(((ie = o == null ? void 0 : o.active) == null ? void 0 : ie.selected_sticker_id) || ""), Ne = (Array.isArray(o == null ? void 0 : o.stickers) ? o.stickers : []).find((B) => String((B == null ? void 0 : B.id) || "") === Ce && (B == null ? void 0 : B.visible) !== !1);
        e.__panoSelectedStickerGeometry = Ne ? aw(S, Ne, A, { width: g, height: _ }) : null;
      } else
        e.__panoSelectedStickerGeometry = null;
    }
}
function sw(e, t, n, r, a, o, u = wS) {
  const f = Qn(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = No());
  const y = Ng(o), g = Cm({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: y,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(g)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(h.yaw || 0),
    pitchDeg: Number(h.pitch || 0),
    fovDeg: Number(h.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  S && t.drawImage(S, n.x, n.y, n.w, n.h);
}
function Gh(e, t, n, r, a, o, u = 1) {
  let f = !1;
  e.strokeStyle = o, e.lineWidth = u, e.beginPath();
  for (const h of t) {
    const y = Ig(h, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), f = !0);
  }
  e.stroke();
}
function lw(e, t, n, r, a = 1) {
  e.save();
  const o = "#3f3f46", u = "rgba(250, 250, 250, 0.86)";
  for (let y = -75; y <= 75; y += 15) {
    const g = [];
    for (let _ = -180; _ <= 180; _ += 4) g.push(Rn(_, y));
    Gh(e, g, n, t, r, y === 0 ? u : o, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 15) {
    const g = [];
    for (let _ = -89; _ <= 89; _ += 4) g.push(Rn(y, _));
    Gh(e, g, n, t, r, o, y % 90 === 0 ? 1.3 : 1);
  }
  const f = [
    { name: "Front", dir: Rn(0, 0) },
    { name: "Right", dir: Rn(90, 0) },
    { name: "Back", dir: Rn(180, 0) },
    { name: "Left", dir: Rn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((y) => {
    const g = Ig(y.dir, n, t, r);
    g && e.fillText(y.name, g.x, g.y + 24 * a);
  }), e.restore();
}
function uw(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function cw(e) {
  const t = uw(e);
  t.dragging = !1, t.hqFrames = kS;
}
function uc(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function fw(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function cc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function dw(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && o >= r.height - n;
}
function Xn(e, t) {
  return dw(e, t) ? !1 : (cc(e), !0);
}
function Bh() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function hw(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function pw(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !vg(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function mw(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, u;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Kh(e, t = null, n = 0, r = 0, a = !0) {
  const o = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, uc(e, 150), t == null || t(), a && gw(e, 180, t);
    }
  };
}
function gw(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ja(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function bw(e, t = {}) {
  var _n;
  const n = t.__allowStandalone === !0, r = _g(e);
  if (r && !n) {
    rf(e);
    return;
  }
  r && pw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), String(t.__panoForcedPath || "").trim();
  const u = {
    signature: Vh(e)
  }, f = "dom", h = u.signature || Vh(e);
  if (Number(e.__panoRebindGeneration || 0), oc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, ac(e), e.__panoFrontendSig = h, e.__panoStickersPath = f, (_n = e.__panoDomPreview) != null && _n.widget || (e.__panoLegacyPreviewHooked && Ns(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const y = t.noPreview === !0, g = y ? 0 : 56, _ = y ? 0 : cx, S = document.createElement("div");
  if (AS(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), y && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
    "width:100%",
    y ? "height:auto" : "height:100%",
    _ > 0 ? `min-height:${_}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), y) {
    const $ = Us(rc(
      e.addDOMWidget(ic(), "preview", S, Kh(e, null))
    ));
    Ja(e), e.__panoDomPreview = { widget: $, root: S, requestDraw: () => {
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
  const b = document.createElement("canvas");
  b.style.cssText = [
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
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), O.textContent = "Connect ERP image", N.appendChild(b), N.appendChild(O), S.appendChild(N);
  const V = Tm(S), R = document.createElement("div");
  R && (R.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", R.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(R)), CS(e, 120, 120), Ja(e);
  let P = null;
  try {
    mw(e, g, () => {
      var $, me;
      return (me = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : me.call($);
    }), P = Us(rc(e.addDOMWidget(
      ic(),
      "preview",
      S,
      Kh(
        e,
        () => {
          var $, me;
          return (me = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : me.call($);
        },
        g,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const L = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    L.destroyed || (L.needsDraw = !0, !L.inTick && !L.raf && (L.raf = requestAnimationFrame(mt)));
  }, F = /* @__PURE__ */ Aa(a ? { ...cg(Qn(e)), importing: !1, dropActive: !1 } : {
    ...Xm(Qn(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map(($) => ({ value: $, label: $ }))
  });
  let G = null;
  const U = (a ? Gx : gx)({
    readState: () => Qn(e),
    publishLiveState: ($) => {
      $ ? (G = $, e.__panoLiveStateOverride = $) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: ($) => {
      var re, it, He, bt;
      const me = va(e, "state_json");
      if (!me) return;
      Bm(e, $.active);
      const Te = Km(e, $);
      me.value = Te, (re = me.callback) == null || re.call(me, Te), e.__panoStateCache = null, (it = e.setDirtyCanvas) == null || it.call(e, !0, !0), (bt = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || bt.call(He, !0, !0);
    },
    onChange: ($) => Object.assign(F, $)
  }), le = ($ = "sync", me = null) => {
    if (!a || e.__panoSceneStateV2 || !U || U.hasGestureChanges()) return !1;
    const Te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((Sn) => String((Sn == null ? void 0 : Sn.name) || "") === "sticker_image") : null, re = (Te == null ? void 0 : Te.link) ?? null;
    if (re == null)
      return U.apply({ type: "sync-external", value: { connected: !1 } });
    if (!hl(e, "external-sticker")) return !1;
    const it = lc(e, "pano_sticker_input_pose", me), He = Array.isArray(it) ? it[0] : it, bt = String(lc(e, "pano_sticker_input_state_hash", me) ?? ""), Ot = e.__panoPreviewView || { yaw: 0, pitch: 0 }, qt = Qn(e), ln = (Array.isArray(qt == null ? void 0 : qt.stickers) ? qt.stickers : []).find((Sn) => String((Sn == null ? void 0 : Sn.id) || "") === "sticker_image_1"), Dt = Cg(e, "sticker_image_1", null, { external: !0 }), fi = He && typeof He == "object" ? He : ln || { yaw_deg: Ot.yaw, pitch_deg: Ot.pitch, hFOV_deg: 30, rot_deg: 0 };
    return U.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: re,
        stateHash: bt,
        pose: fi,
        imageWidth: Number((Dt == null ? void 0 : Dt.naturalWidth) || (Dt == null ? void 0 : Dt.width) || 0),
        imageHeight: Number((Dt == null ? void 0 : Dt.naturalHeight) || (Dt == null ? void 0 : Dt.height) || 0)
      }
    });
  }, oe = a ? bg(e, le) : () => {
  };
  let I = 0;
  const Y = async ($) => {
    if (!a || !U || !Nr($)) return !1;
    const me = `asset_${Math.random().toString(16).slice(2, 10)}`, Te = `st_${Math.random().toString(16).slice(2, 10)}`, re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    I += 1, F.importing = !0;
    const it = tc(e, `add:${me}`, async () => {
      const He = await nc($), bt = await Ms($, {
        fetchApi: (Ot, qt) => mn.fetchApi(Ot, qt)
      });
      return A(), U.apply({
        type: "add-sticker",
        value: {
          stickerId: Te,
          assetId: me,
          asset: bt,
          imageWidth: He.width,
          imageHeight: He.height,
          yaw_deg: Number(re.yaw || 0),
          pitch_deg: Number(re.pitch || 0)
        }
      });
    });
    try {
      return await it;
    } catch {
      return !1;
    } finally {
      I = Math.max(0, I - 1), F.importing = I > 0, T();
    }
  };
  let ie = null, J = null, he = null, fe = !1;
  const ke = () => {
    var $;
    return he && (clearTimeout(he), he = null), fe ? (fe = !1, (($ = U == null ? void 0 : U.commitGesture) == null ? void 0 : $.call(U)) ?? !1) : !1;
  }, A = () => {
    var re, it, He;
    const $ = ke(), me = (ie == null ? void 0 : ie.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (ie = null, J = null, e.__panoStickerDrag = null, me != null) {
      try {
        (re = b.hasPointerCapture) != null && re.call(b, me) && ((it = b.releasePointerCapture) == null || it.call(b, me));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Te = ((He = U == null ? void 0 : U.commitGesture) == null ? void 0 : He.call(U)) ?? !1;
    return $ || Te;
  }, we = () => {
    var re, it, He;
    const $ = ke(), me = ie == null ? void 0 : ie.pointerId;
    if (ie = null, e.__panoStickerDrag = null, me != null) {
      try {
        (re = b.hasPointerCapture) != null && re.call(b, me) && ((it = b.releasePointerCapture) == null || it.call(b, me));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Te = ((He = U == null ? void 0 : U.cancelGesture) == null ? void 0 : He.call(U)) ?? !1;
    return $ || Te;
  }, Ce = () => A();
  U && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Ce));
  let Ne = null, B = !1;
  if (R && U)
    try {
      Qc(), Ne = Oc(a ? $x : Dx, {
        model: F,
        onAction: ($) => {
          var re, it;
          if (($ == null ? void 0 : $.type) === "open-editor") {
            A(), a || (F.aspectOpen = !1), (re = e.__panoOpenEditor) == null || re.call(e);
            return;
          }
          if (a) {
            if (($ == null ? void 0 : $.type) === "add-image-file") {
              Y($.file);
              return;
            }
            U.apply($) && T();
            return;
          }
          if (($ == null ? void 0 : $.type) === "toggle-aspect") {
            F.aspectOpen = !F.aspectOpen;
            return;
          }
          if (($ == null ? void 0 : $.type) === "close-aspect") {
            F.aspectOpen = !1;
            return;
          }
          let me = $;
          if (($ == null ? void 0 : $.type) === "add-frame") {
            const He = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            me = {
              ...$,
              ...dx(He, {
                width: b.width,
                height: b.height
              })
            };
          } else if (($ == null ? void 0 : $.type) === "delete-frame") {
            const He = Ii(Qn(e));
            He && (e.__panoPreviewView = Zm(He, {
              width: b.width,
              height: b.height
            }));
          }
          const Te = ((it = e.__panoCutoutNodeFrame) == null ? void 0 : it.safeRect) || null;
          F.aspectOpen = !1, U.apply({ ...me, safeRect: Te }) && T();
        }
      }), Ne.mount(R), B = !0;
    } catch {
      Ne = null, B = !1;
    }
  const $e = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    uc(e, 150), T();
  }) : null;
  $e == null || $e.observe(N);
  const mt = ($) => {
    var Te, re;
    L.raf = 0, L.inTick = !0;
    let me = !1;
    try {
      me = et.stepInertia($), (L.needsDraw || me) && (L.needsDraw = !1, (Te = e.flags) != null && Te.collapsed || ow(e, b, null, et));
    } finally {
      L.inTick = !1;
    }
    (me || L.needsDraw) && !L.raf && (L.raf = requestAnimationFrame(mt)), PS() && (!e.__panoDebugLastTs || $ - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = $, e.__panoPreviewMode, ac(e), qa(S), qa(N), qa(b), qa(S.parentElement), qa((re = S.parentElement) == null ? void 0 : re.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, et = Hc({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: ($) => {
      e.__panoPreviewView = $;
    },
    getViewportSize: () => {
      const $ = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number($.width || b.clientWidth || 0)),
        h: Math.max(1, Number($.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const $ = zh();
      return {
        x: $.invert_view_x ? -1 : 1,
        y: $.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), We = a ? N : S, je = ($) => {
    const me = b.getBoundingClientRect();
    return {
      x: (Number($.clientX) - me.left) * (b.width / Math.max(1, me.width)),
      y: (Number($.clientY) - me.top) * (b.height / Math.max(1, me.height))
    };
  }, Yt = ($) => {
    var re, it;
    if (!a || !o) return;
    const me = Qn(e), Te = Th(
      me == null ? void 0 : me.stickers,
      String(((re = me == null ? void 0 : me.active) == null ? void 0 : re.selected_sticker_id) || ""),
      je($),
      bo(e.__panoPreviewView, me == null ? void 0 : me.coverage),
      { width: b.width, height: b.height }
    );
    if (!Te) {
      b.style.cursor = "grab";
      return;
    }
    if (((it = Te.item) == null ? void 0 : it.locked) === !0) {
      b.style.cursor = "default";
      return;
    }
    b.style.cursor = Te.hit.cursor || "default";
  };
  b.addEventListener("pointerdown", ($) => {
    var bt, Ot, qt, ln, Dt, fi, xn, Sn, Ca, Ia, Ta;
    if (!Xn($, We) || $.button !== 0) return;
    if (!a) {
      const Cn = Ii(Qn(e)), Yn = e.__panoCutoutNodeFrame;
      if (!Cn) {
        (bt = S.focus) == null || bt.call(S, { preventScroll: !0 }), (Ot = b.setPointerCapture) == null || Ot.call(b, $.pointerId), b.style.cursor = "grabbing", et.startDrag($.clientX, $.clientY, $.pointerId);
        return;
      }
      if (Cn.locked === !0 || !Yn || !U) return;
      const Po = je($);
      let di;
      if ($.shiftKey) {
        const zn = eg({
          frame: Yn,
          point: Po,
          startRollDeg: Number(Cn.roll_deg ?? Cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!zn) return;
        di = { kind: "roll", pointerId: $.pointerId, rollGesture: zn };
      } else {
        const zn = ((qt = Qn(e)) == null ? void 0 : qt.ui_settings) || zh();
        di = {
          kind: "pan",
          pointerId: $.pointerId,
          startPoint: Po,
          startShot: { ...Cn },
          focalPx: Ai(Yn, Cn),
          invertX: zn.invert_view_x === !0,
          invertY: zn.invert_view_y === !0
        };
      }
      A(), (ln = S.focus) == null || ln.call(S, { preventScroll: !0 }), (Dt = b.setPointerCapture) == null || Dt.call(b, $.pointerId), b.style.cursor = "grabbing", U.beginGesture(), ie = di;
      return;
    }
    if (!o) return;
    const me = je($), Te = Qn(e), re = String(((fi = Te == null ? void 0 : Te.active) == null ? void 0 : fi.selected_sticker_id) || ""), it = bo(e.__panoPreviewView, Te == null ? void 0 : Te.coverage), He = Th(
      Te == null ? void 0 : Te.stickers,
      re,
      me,
      it,
      { width: b.width, height: b.height }
    );
    if ((xn = S.focus) == null || xn.call(S, { preventScroll: !0 }), He && U) {
      if (et.stopMotion(), A(), String(((Sn = He.item) == null ? void 0 : Sn.id) || "") !== re && U.apply({ type: "select-sticker", id: He.item.id }), ((Ca = He.item) == null ? void 0 : Ca.locked) === !0) {
        T();
        return;
      }
      const Cn = me, Yn = He.geometry.center;
      J = {
        active: !0,
        kind: He.hit.kind,
        pointerId: $.pointerId,
        startPoint: Cn,
        startCenter: { ...Yn },
        startSticker: { ...He.item },
        startDistance: Math.max(1, Math.hypot(Cn.x - Yn.x, Cn.y - Yn.y)),
        startAngle: Math.atan2(Cn.y - Yn.y, Cn.x - Yn.x),
        camera: it,
        viewport: { width: b.width, height: b.height }
      }, e.__panoStickerDrag = J, U.beginGesture(), (Ia = b.setPointerCapture) == null || Ia.call(b, $.pointerId), b.style.cursor = He.hit.kind === "rotate" ? "grabbing" : He.hit.kind === "move" ? "move" : He.hit.cursor, T();
      return;
    }
    (Ta = b.setPointerCapture) == null || Ta.call(b, $.pointerId), b.style.cursor = "grabbing", et.startDrag($.clientX, $.clientY, $.pointerId);
  }), b.addEventListener("pointermove", ($) => {
    if (!a) {
      if (!ie) {
        if (!et.state.drag.active) return;
        Xn($, We), et.moveDrag($.clientX, $.clientY, "pano");
        return;
      }
      if (ie.pointerId !== $.pointerId || !U) return;
      if (Xn($, We), ie.kind === "pan") {
        const Te = je($);
        U.updateGesture({
          type: "pan-camera",
          startShot: ie.startShot,
          dx: Te.x - ie.startPoint.x,
          dy: Te.y - ie.startPoint.y,
          focalPx: ie.focalPx,
          invertX: ie.invertX,
          invertY: ie.invertY
        });
        return;
      }
      const me = tg(ie.rollGesture, je($), $);
      if (!me) return;
      ie.rollGesture = me.gesture, U.updateGesture({ type: "set-roll", value: me.rollDeg });
      return;
    }
    if (!J && !et.state.drag.active) {
      Yt($);
      return;
    }
    if (J) {
      if (J.pointerId !== $.pointerId || !U) return;
      Xn($, We);
      const me = je($);
      let Te = J.startSticker;
      if (J.kind === "move")
        Te = qx(
          J.startSticker,
          {
            x: J.startCenter.x + me.x - J.startPoint.x,
            y: J.startCenter.y + me.y - J.startPoint.y
          },
          J.camera,
          J.viewport
        );
      else if (J.kind === "scale") {
        const re = Math.hypot(me.x - J.startCenter.x, me.y - J.startCenter.y);
        Te = Xx(J.startSticker, J.startDistance, re);
      } else if (J.kind === "rotate") {
        const re = Math.atan2(me.y - J.startCenter.y, me.x - J.startCenter.x);
        Te = Jx(J.startSticker, J.startAngle, re, $.shiftKey === !0);
      }
      U.updateGesture({ type: "set-transform", value: Te }), T();
      return;
    }
    !o || !et.state.drag.active || (Xn($, We), et.moveDrag($.clientX, $.clientY, "pano"));
  });
  const An = () => {
    var me, Te;
    if (!ie && !J) {
      if (!et.state.drag.active) return;
      et.endDrag(), b.style.cursor = "grab", T();
      return;
    }
    if (!U) return;
    const $ = (ie == null ? void 0 : ie.pointerId) ?? (J == null ? void 0 : J.pointerId);
    ie = null, J = null, e.__panoStickerDrag = null;
    try {
      (me = b.hasPointerCapture) != null && me.call(b, $) && ((Te = b.releasePointerCapture) == null || Te.call(b, $));
    } catch {
    }
    U.cancelGesture(), b.style.cursor = "grab", T();
  }, vn = ($, me = !1) => {
    var Te, re, it, He;
    if (!a) {
      if (!ie) {
        if (!et.state.drag.active) return;
        Xn($, We), (Te = b.releasePointerCapture) == null || Te.call(b, $.pointerId), b.style.cursor = "grab", et.endDrag(), T();
        return;
      }
      if (ie.pointerId !== $.pointerId || !U) return;
      Xn($, We), ie = null, (re = b.releasePointerCapture) == null || re.call(b, $.pointerId), b.style.cursor = "grab", me ? U.cancelGesture() : U.commitGesture(), Yt($), T();
      return;
    }
    if (J) {
      if (J.pointerId !== $.pointerId || !U) return;
      Xn($, We), J = null, e.__panoStickerDrag = null, (it = b.releasePointerCapture) == null || it.call(b, $.pointerId), b.style.cursor = "grab", me ? U.cancelGesture() : U.commitGesture(), T();
      return;
    }
    !o || !et.state.drag.active || (Xn($, We), (He = b.releasePointerCapture) == null || He.call(b, $.pointerId), b.style.cursor = "grab", et.endDrag(), cw(e), T());
  };
  b.addEventListener("pointerup", vn), b.addEventListener("pointercancel", ($) => vn($, !0)), b.addEventListener("lostpointercapture", An), b.addEventListener("pointerleave", ($) => {
    !a && ie || J || et.state.drag.active && vn($);
  });
  const nn = ($) => {
    const me = document.activeElement;
    if (me !== S && !S.contains(me)) return;
    if ($.key === "Escape" && (ie || J) && U) {
      An(), cc($);
      return;
    }
    if (!a || $.key !== "Delete" && $.key !== "Backspace" || !U) return;
    const Te = $.target, re = String((Te == null ? void 0 : Te.tagName) || "").toUpperCase();
    re === "INPUT" || re === "TEXTAREA" || Te != null && Te.isContentEditable || F.canDelete === !0 && (A(), U.apply({ type: "delete-selected" }) && T(), cc($));
  };
  window.addEventListener("keydown", nn, !0);
  const sn = _S({
    requestFrame: ($) => requestAnimationFrame($),
    cancelFrame: ($) => cancelAnimationFrame($),
    restore: ($) => hw($)
  }), z = ($) => {
    var Te, re, it, He, bt, Ot;
    if (!Xn($, We)) return;
    if (!a) {
      const qt = Ii(Qn(e));
      if (qt && qt.locked !== !0 && U) {
        const ln = jc($);
        ln !== 0 && (fe || (A(), U.beginGesture(), fe = !0), U.updateGesture({
          type: "step-fov",
          direction: ln
        }) ? (he && clearTimeout(he), he = setTimeout(ke, 180), T()) : U.hasGestureChanges() || (U.cancelGesture(), fe = !1));
      } else if (!qt) {
        const ln = Bh();
        et.applyWheelEvent($) && T(), sn.schedule(ln);
      }
      (Te = $.preventDefault) == null || Te.call($), (re = $.stopPropagation) == null || re.call($), (it = $.stopImmediatePropagation) == null || it.call($);
      return;
    }
    if (!o) return;
    const me = Bh();
    et.applyWheelEvent($) && T(), (He = $.preventDefault) == null || He.call($), (bt = $.stopPropagation) == null || bt.call($), (Ot = $.stopImmediatePropagation) == null || Ot.call($), sn.schedule(me);
  }, j = a ? [N, b] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach(($) => {
    j.forEach((me) => me.addEventListener($, z, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach(($) => {
    b.addEventListener($, (me) => Xn(me, We)), N.addEventListener($, (me) => Xn(me, We));
  });
  const te = va(e, "state_json");
  let _e = null, pe = null;
  te && !te.__panoPreviewPatchedCb && (_e = te.callback, pe = ($) => {
    const me = _e ? _e($) : void 0;
    return T(), me;
  }, te.callback = pe, te.__panoPreviewPatchedCb = pe);
  const D = va(e, "bg_color");
  let Q = null, ee = null;
  D && !D.__panoPreviewPatchedCb && (Q = D.callback, ee = ($) => {
    const me = Q ? Q($) : void 0;
    return T(), me;
  }, D.callback = ee, D.__panoPreviewPatchedCb = ee);
  const de = e.onRemoved, ne = e.onResize, Pe = e.onExecuted, ve = e.onDragOver, Ie = e.onDragDrop;
  let d = null;
  const Oe = () => {
    a && (F.dropActive = !0, d && clearTimeout(d), d = setTimeout(() => {
      d = null, F.dropActive = !1;
    }, 140));
  }, Le = a ? function($) {
    return (ve ? ve.apply(this, arguments) : !1) === !0 ? !0 : tf($ == null ? void 0 : $.dataTransfer) ? (Oe(), !0) : !1;
  } : null, Ge = a ? function($) {
    var re;
    if ((Ie ? Ie.apply(this, arguments) : !1) === !0) return !0;
    const Te = Array.from(((re = $ == null ? void 0 : $.dataTransfer) == null ? void 0 : re.files) || []).find((it) => Nr(it));
    return Te ? (d && clearTimeout(d), d = null, F.dropActive = !1, Y(Te), !0) : !1;
  } : null;
  a && (e.onDragOver = Le, e.onDragDrop = Ge);
  const Ze = a ? vS(S, {
    onActive: ($) => {
      if ($) {
        Oe();
        return;
      }
      d && clearTimeout(d), d = null, F.dropActive = !1;
    },
    onDrop: ($) => {
      Y($);
    }
  }) : () => {
  }, gt = function($) {
    HS(e, $), e.__panoLastExecutedOutput = $ || null, Pg(e), aS(e), le("executed", $), Ja(e), T();
    const me = Pe ? Pe.apply(this, arguments) : void 0;
    return Ja(e), me;
  };
  e.onExecuted = gt;
  const rt = e.onConnectionsChange, ae = function($, me) {
    const Te = Dh(e, $, me, ["sticker_image"]), re = Dh(
      e,
      $,
      me,
      ["erp_image", "bg_erp"]
    ), it = arguments, He = rt ? rt.apply(this, it) : void 0, bt = () => {
      L.destroyed || ((re || Te) && (re && (Eh(e, "background"), BS(e)), Te && (Eh(e, "external-sticker"), e.__panoLastExecutedOutput = null, KS(e))), Te && le("connection-change"), Ja(e), T());
    };
    return bt(), queueMicrotask(bt), He;
  };
  e.onConnectionsChange = ae;
  const Et = function() {
    const $ = ne ? ne.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, uc(this, 150), T(), $;
  };
  e.onResize = Et;
  const tr = function() {
    return at(), sc.unregister(this), de ? de.apply(this, arguments) : void 0;
  };
  e.onRemoved = tr;
  const at = () => {
    var $, me, Te, re, it, He, bt, Ot, qt, ln, Dt;
    L.destroyed = !0, ($ = $e == null ? void 0 : $e.disconnect) == null || $.call($e), a ? A() : we(), b.removeEventListener("lostpointercapture", An), Ze(), V(), window.removeEventListener("keydown", nn, !0), (Te = (me = e.__panoStateFlushers) == null ? void 0 : me.delete) == null || Te.call(me, Ce), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (re = U == null ? void 0 : U.destroy) == null || re.call(U), (it = Ne == null ? void 0 : Ne.unmount) == null || it.call(Ne), (bt = (He = e.__panoRuntimeCore) == null ? void 0 : He.dispose) == null || bt.call(He), e.__panoRuntimeCore = null, (qt = (Ot = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ot.dispose) == null || qt.call(Ot), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, oe(), sn.dispose(), d && clearTimeout(d), d = null, nf.disposeOwner(e), _a(e), L.raf && cancelAnimationFrame(L.raf), L.raf = 0, ((ln = e.__panoCutoutNodeSurface) == null ? void 0 : ln.session) === U && (e.__panoCutoutNodeSurface = null), ((Dt = e.__panoStickersNodeSurface) == null ? void 0 : Dt.session) === U && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Et && (e.onResize = ne), e.onExecuted === gt && (e.onExecuted = Pe), e.onConnectionsChange === ae && (e.onConnectionsChange = rt), pe && (te == null ? void 0 : te.callback) === pe && (te.callback = _e), pe && (te == null ? void 0 : te.__panoPreviewPatchedCb) === pe && delete te.__panoPreviewPatchedCb, ee && (D == null ? void 0 : D.callback) === ee && (D.callback = Q), ee && (D == null ? void 0 : D.__panoPreviewPatchedCb) === ee && delete D.__panoPreviewPatchedCb, e.onDragOver === Le && (e.onDragOver = ve), e.onDragDrop === Ge && (e.onDragDrop = Ie), e.onRemoved === tr && (e.onRemoved = de);
  };
  e.__panoDomRestore = at, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = U && B && !a ? { session: U, model: F } : null, e.__panoStickersNodeSurface = U && B && a ? { session: U, model: F } : null, e.__panoDomPreview = {
    widget: P,
    root: S,
    canvas: b,
    requestDraw: T,
    state: L,
    emptyHintEl: O,
    nodeSurface: e.__panoCutoutNodeSurface
  }, sc.register(e), le("attach"), T();
}
function Wh(e, t = {}) {
  xg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Yh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (_g(e) && !n) {
    rf(e);
    return;
  }
  xg(e).attach(t);
}
function yw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function vw(e, t = 1, n = Gu) {
  const r = Number(t), a = Number.isFinite(r) && r > 0 ? r : 1, o = Number(e == null ? void 0 : e.width), u = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(o) ? o : 0) * a, h = Math.max(0, Number.isFinite(u) ? u : 0) * a, y = Number(n), g = Number.isFinite(y) && y > 0 ? y : Gu, _ = Math.max(f, h), S = _ > 0 ? Math.min(1, g / _) : 1;
  return {
    width: Math.max(1, Math.round(f * S)),
    height: Math.max(1, Math.round(h * S))
  };
}
function _w({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const a = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let u = !1, f = null;
  const h = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, y = () => {
    const b = h();
    return b === f || (f = b, a(b)), b;
  }, g = () => y();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", g), y(), { toggle: async () => {
    var b;
    if (u || !e || !t) return !1;
    if (h()) {
      try {
        await ((b = t.exitFullscreen) == null ? void 0 : b.call(t));
      } catch {
      }
      return u ? !1 : (y(), h());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), u) return !1;
        if (h())
          return y(), !0;
      } catch {
      }
    return u || (o(), y()), !1;
  }, isActive: h, destroy: () => {
    var b, O, V;
    if (!u) {
      if (u = !0, (b = t == null ? void 0 : t.removeEventListener) == null || b.call(t, "fullscreenchange", g), h())
        try {
          const R = (O = t.exitFullscreen) == null ? void 0 : O.call(t);
          (V = R == null ? void 0 : R.catch) == null || V.call(R, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
const xw = { class: "pano-preview-node-surface" }, Sw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Me(), Ae("div", xw, [
      Ve(tn, {
        icon: e.model.fullscreen ? pt(Ee).fullscreen_close : pt(Ee).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (a) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"])
    ]));
  }
}, ts = 140, ww = 180, qh = 40, xu = 10;
function Xh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Jh(e, t) {
  const n = Xh(e), r = Xh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Zh(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(a) : a;
}
function xa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Zh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = xa(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Zh(e);
}
function Eg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function kw(e) {
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
function fc(e) {
  var a;
  const t = (a = lr) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Jh(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Jh(o, n)) return t[o];
  return null;
}
function Mw(e) {
  var r, a;
  const t = fc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const u of o) {
        const f = xa(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Nw(e, t = "erp_image") {
  var b, O, V, R, P, L, T, F, G, U, le, oe;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((I) => String((I == null ? void 0 : I.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const I = n.find((Y) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && (Y == null ? void 0 : Y.link) != null);
    (I == null ? void 0 : I.link) != null && (r = I.link);
  }
  if (r == null) return "";
  const o = ((O = (b = e == null ? void 0 : e.graph) == null ? void 0 : b.links) == null ? void 0 : O[r]) || ((P = (R = (V = lr) == null ? void 0 : V.graph) == null ? void 0 : R.links) == null ? void 0 : P[r]);
  if (!o) return "";
  const u = Number(o.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (F = (T = (L = lr) == null ? void 0 : L.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : F.call(T, u), h = fc(u), y = fc(e == null ? void 0 : e.id), g = [
    (G = y == null ? void 0 : y.ui) == null ? void 0 : G.pano_input_images,
    y == null ? void 0 : y.pano_input_images,
    h == null ? void 0 : h.images,
    (U = h == null ? void 0 : h.ui) == null ? void 0 : U.pano_input_images,
    h == null ? void 0 : h.pano_input_images
  ];
  for (const I of g)
    if (Array.isArray(I))
      for (const Y of I) {
        const ie = xa(Y);
        if (ie) return ie;
      }
  let _ = [];
  try {
    _ = typeof ((le = lr) == null ? void 0 : le.getNodeImageUrls) == "function" ? lr.getNodeImageUrls(f) || [] : [];
  } catch {
    _ = [];
  }
  if (Array.isArray(_) && _.length > 0)
    for (const I of _) {
      const Y = xa(I);
      if (Y) return Y;
    }
  if (f) {
    const I = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Y of I) {
      const ie = xa(Y);
      if (ie) return ie;
    }
  }
  const S = (oe = f == null ? void 0 : f.widgets) == null ? void 0 : oe.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image"), N = String((S == null ? void 0 : S.value) || "").trim();
  return N ? mn.apiURL(`/view?filename=${encodeURIComponent(N)}&type=input&subfolder=`) : "";
}
function Qh(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function ep(e, t, n, r, a, o) {
  var S, N, b;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Eg(o) || n <= 1 || r <= 1) {
    Qh(t, n, r);
    return;
  }
  const u = Ln(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Gt * 0.5), h = Number(((b = (N = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : N.call(S, (O) => (O == null ? void 0 : O.name) === "coverage")) == null ? void 0 : b.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = No());
  const y = kw(o), g = Cm({
    stateRevision: [
      "standalone_preview_scene",
      y,
      h
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: y,
    coverageDeg: h,
    scene: dl(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(g) && (() => {
    const O = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      lx(a, h),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return O ? (t.drawImage(O, 0, 0, n, r), !0) : !1;
  })() || (sw(e, t, { x: 0, y: 0, w: n, h: r }, u, f, o, SS), Qh(t, n, r));
}
function tp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Pw {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Hc({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: W(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: W(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, o, u, f;
        const r = (o = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : o.call(a);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
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
    var r, a, o;
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
    const n = ((o = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var o;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (o = this.flags) != null && o.collapsed || !t.errorText) return r;
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${ts}px`,
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
          return ts;
        },
        getHeight() {
          return ts;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Us(rc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const o = r ? r(a) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ts, Number(o.minHeight || 0)),
            minWidth: Math.max(ww, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, a, o, u;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Qc(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Aa({ fullscreen: !1 }), this.fullscreenController = _w({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, h;
          return (h = (f = this.options).onOpen) == null ? void 0 : h.call(f, this.node);
        }
      }), this.surfaceApp = Oc(Sw, {
        model: this.surfaceModel,
        onAction: (f) => {
          var h, y;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((y = (h = this.fullscreenController) == null ? void 0 : h.toggle) == null || y.call(h));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, h;
          return (h = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : h.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (a = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || a.call(r), this.surfaceApp = null, (u = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || u.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var a;
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = Tm(n), t.addEventListener("pointerdown", (o) => {
      var u, f, h;
      o.button === 0 && ((u = n.focus) == null || u.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (h = o.stopImmediatePropagation) == null || h.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var u;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    });
    const r = (o) => {
      var u, f;
      this.controller.state.drag.active && ((u = t.releasePointerCapture) == null || u.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (f = o.stopImmediatePropagation) == null || f.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var u;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var u;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o);
    }), n.addEventListener("keydown", (o) => {
      var u;
      yw(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Eg(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const a = t.localPoint(r);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return tp(a.x, a.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - o.x, a.y - o.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(r);
      if (!a) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - o.x, a.y - o.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var h, y, g, _, S, N;
      const o = QS(this, n, r, a), u = t.getLegacyPreviewRect();
      if (!o || !tp(o.x, o.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((h = t.view) == null ? void 0 : h.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((y = t.view) == null ? void 0 : y.fov) || 100), f && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (_ = n == null ? void 0 : n.preventDefault) == null || _.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, o, u;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - xu * 2), n = Math.max(60, Number(((u = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : u[1]) || 0) - qh - xu);
    return { x: xu, y: qh, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), ep(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = vw(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var a, o, u;
    const t = Mw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const h = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      f.addEventListener("loadedmetadata", h), f.addEventListener("canplay", h), f.addEventListener("timeupdate", y), f.addEventListener("play", y), f.addEventListener("pause", y), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", h), f.removeEventListener("canplay", h), f.removeEventListener("timeupdate", y), f.removeEventListener("play", y), f.removeEventListener("pause", y);
      };
      return;
    }
    const n = Nw(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const r = new Image();
    r.onload = () => {
      this.imgSrc === n && (this.img = r, this.requestDraw());
    }, r.onerror = () => {
      this.imgSrc === n && (this.img = null, this.requestDraw());
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
    var a, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), ep(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (a = this.node).setDirtyCanvas) == null || o.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, a, o, u, f, h, y, g, _, S, N, b, O, V, R, P, L;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null, (u = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || u.call(o), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (y = (h = this.surfaceApp) == null ? void 0 : h.unmount) == null || y.call(h), this.surfaceApp = null, (_ = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || _.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (b = (N = this.root) == null ? void 0 : N.remove) == null || b.call(N);
    } catch {
    }
    try {
      yg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((R = (V = (O = this.node) == null ? void 0 : O.widgets) == null ? void 0 : V.find) == null ? void 0 : R.call(V, (T) => (T == null ? void 0 : T.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (L = (P = this.node.__panoStandaloneCore) == null ? void 0 : P.dispose) == null || L.call(P), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function Aw(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Pw(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Dg(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = o ? o.apply(this, arguments) : void 0;
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
function of(e) {
  return !!(e != null && e.prototype);
}
function _o(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Cw(e, t = {}) {
  of(e) || Aw(e, {
    ...t,
    onOpen: _o(e, t.onOpen)
  });
}
function Iw(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!of(e)) {
    Yh(e, {
      ...r,
      onOpen: _o(e, t.onOpen)
    });
    return;
  }
  Dg(e, "stickers_node_preview", (a) => {
    Yh(a, {
      ...r,
      onOpen: _o(a, t.onOpen)
    });
  });
}
function Tw(e, t = {}) {
  if (!of(e)) {
    Wh(e, {
      ...t,
      onOpen: _o(e, t.onOpen)
    });
    return;
  }
  Dg(e, "cutout_preview", (n) => {
    Wh(n, {
      ...t,
      onOpen: _o(n, t.onOpen)
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
}, zr = "pen";
function np(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Ew(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const o = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((_) => {
      r.push(String(_ || ""));
    }), !r.length)) return;
    const g = Number(y.index);
    Number.isInteger(g) ? g === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, g)) : a = r.length - 1;
  }
  function h(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > o && r.shift(), a = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      h(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = r.length, g = Math.max(0, y - u), _ = a >= 0 ? Math.max(0, Math.min(a, g)) : g, S = r.slice(_, _ + u), N = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - _));
      return {
        version: 1,
        entries: S,
        index: N
      };
    },
    hydrate: f
  };
}
function rp(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Dw(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function ip(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const r = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (r.transform = Dw((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function Ow(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Na({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: rp((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((o, u) => ip(o, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = rp((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((o, u) => ip(o, u)).filter(Boolean);
  return Na({
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
function xo(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Ks(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Fw(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || No((e == null ? void 0 : e.coreOptions) || {});
  let r = null, a = "";
  function o(_) {
    var S;
    return JSON.stringify({
      stateRevision: (_ == null ? void 0 : _.stateRevision) || "",
      background: (_ == null ? void 0 : _.background) || null,
      objects: Array.isArray((S = _ == null ? void 0 : _.objectPass) == null ? void 0 : S.objects) ? _.objectPass.objects.map((N) => ({
        id: (N == null ? void 0 : N.id) || "",
        type: (N == null ? void 0 : N.type) || "",
        revision: (N == null ? void 0 : N.revision) || "",
        visible: (N == null ? void 0 : N.visible) !== !1,
        opacity: Number((N == null ? void 0 : N.opacity) ?? 1),
        zIndex: Number((N == null ? void 0 : N.zIndex) ?? 0),
        transform: (N == null ? void 0 : N.transform) || null,
        params: (N == null ? void 0 : N.params) || null
      })) : [],
      overlay: (_ == null ? void 0 : _.overlay) || {}
    });
  }
  function u(_ = {}) {
    const S = Ow(_), N = o(S);
    return a === N || !n.syncState(S) ? !1 : (r = S, a = N, !0);
  }
  function f(_ = {}, S = {}) {
    if (!r) return null;
    const N = xo(_), b = Ks(S);
    return n.renderToTarget(t, N, b);
  }
  function h(_, S, N = {}, b = {}) {
    if (!_ || !S || !r) return !1;
    const O = xo(N), V = Ks({
      ...b,
      width: Number((S == null ? void 0 : S.w) || (b == null ? void 0 : b.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (b == null ? void 0 : b.height) || 1)
    });
    return n.renderToContext(_, S, O, V);
  }
  function y() {
    var _;
    r = null, a = "", (_ = n.clearState) == null || _.call(n);
  }
  function g() {
    var _;
    y(), (_ = n.dispose) == null || _.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: h,
    snapshotScene: () => r,
    clearScene: y,
    dispose: g
  };
}
function Rw(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((o) => {
      o ? r(o) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Lw(e, t = {}) {
  var h, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = xo((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = Ks(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), o = e.renderFrame(n, a);
  if (!o) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Rw(o, u, f);
}
function zw(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let o = xo((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function h() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), N = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), b = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), O = Ks({ width: S, height: N, dpr: b });
    return r.width = Math.max(1, Math.round(O.width * O.dpr)), r.height = Math.max(1, Math.round(O.height * O.dpr)), r.style.width = `${O.width}px`, r.style.height = `${O.height}px`, O;
  }
  function y() {
    if (u || !a) return !1;
    const S = h();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      o,
      { ...S, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function g() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, y();
    }));
  }
  const _ = typeof ResizeObserver == "function" ? new ResizeObserver(() => g()) : null;
  return _ == null || _.observe(t), g(), {
    canvas: r,
    setView(S) {
      o = xo(S || {}), g();
    },
    getView() {
      return { ...o };
    },
    present: y,
    requestRender: g,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), _ == null || _.disconnect(), r.remove();
    }
  };
}
function Vw(e = {}) {
  const t = Fw({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(kr(n), r);
    },
    renderShotToContext(n, r, a, o = {}) {
      return t.renderToContext(n, r, kr(a), o);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? kr(r.shot) : r == null ? void 0 : r.view;
      return zw(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: kr(n.shot) } : n;
      return Lw(t, r);
    }
  };
}
function Su(e) {
  return cr(e.x, e.y, -e.z);
}
function sf(e, t, n = 0) {
  const { right: r, up: a, fwd: o } = Ln(e, t, n);
  return [
    [r.x, a.x, -o.x],
    [r.y, a.y, -o.y],
    [-r.z, -a.z, o.z]
  ];
}
function $w(e) {
  const t = Su(cr(e[0][0], e[1][0], e[2][0])), n = Su(cr(e[0][1], e[1][1], e[2][1])), r = Su(cr(-e[0][2], -e[1][2], -e[2][2])), a = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), u = Math.cos(a), f = Math.sin(a), h = Math.atan2(f * n.z - u * n.x, u * t.x - f * t.z);
  return { yawDeg: a * Wn, pitchDeg: o * Wn, rollDeg: h * Wn };
}
function jw(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, a = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + a * a), 2 * (n * r - a * o), 2 * (n * a + r * o)],
    [2 * (n * r + a * o), 1 - 2 * (n * n + a * a), 2 * (r * a - n * o)],
    [2 * (n * a - r * o), 2 * (r * a + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function lf(e) {
  const [[t, n, r], [a, o, u], [f, h, y]] = e, g = t + o + y;
  if (g > 0) {
    const S = 0.5 / Math.sqrt(g + 1);
    return { x: (h - u) * S, y: (r - f) * S, z: (a - n) * S, w: 0.25 / S };
  }
  if (t > o && t > y) {
    const S = 2 * Math.sqrt(1 + t - o - y);
    return { x: 0.25 * S, y: (n + a) / S, z: (r + f) / S, w: (h - u) / S };
  }
  if (o > y) {
    const S = 2 * Math.sqrt(1 + o - t - y);
    return { x: (n + a) / S, y: 0.25 * S, z: (u + h) / S, w: (r - f) / S };
  }
  const _ = 2 * Math.sqrt(1 + y - t - o);
  return { x: (r + f) / _, y: (u + h) / _, z: 0.25 * _, w: (a - n) / _ };
}
function ns(e) {
  if (!e || typeof e != "object") return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) t[n] = Array.isArray(r) ? [...r] : r;
  return t;
}
const ua = 1e-6, Hw = ["yaw_deg", "pitch_deg", "roll_deg"], ap = { hFOV_deg: [0.1, 179], vFOV_deg: [0.1, 179], scale: [1e-6, 1 / 0] }, op = 1e-6;
function Ws(e, t, n, r, a) {
  const o = 1 - a;
  return o * o * o * e + 3 * o * o * a * t + 3 * o * a * a * n + a * a * a * r;
}
function Uw(e, t) {
  if (e === "auto") return t;
  const [n, r, a, o] = e;
  let u = 0, f = 1;
  for (let h = 0; h < 50; h += 1) {
    const y = 0.5 * (u + f);
    Ws(0, n, a, 1, y) < t ? u = y : f = y;
  }
  return Ws(0, r, o, 1, 0.5 * (u + f));
}
function Ys(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function qs(e, t, n, r) {
  const a = e[t] - e[t - 1], o = e[t + 1] - e[t], u = n.map((S) => -S / a), f = r.map((S) => S / o);
  if (u.reduce((S, N, b) => S + N * f[b], 0) < 0) return n.map(() => 0);
  const h = u.map((S, N) => (S * o + f[N] * a) / (a + o)), y = (S) => Math.sqrt(S.reduce((N, b) => N + b * b, 0)), g = 3 * Math.min(y(u), y(f)), _ = y(h);
  return _ <= g ? h : h.map((S) => S * g / _);
}
function Og(e, t, n, r) {
  const a = n[r], o = n[r + 1], u = t[r + 1] - t[r], f = a.map((g, _) => o[_] - g);
  let h = f;
  Ys(e, r) && (h = qs(t, r, n[r - 1].map((g, _) => g - a[_]), f).map((g) => g * u));
  let y = f;
  return Ys(e, r + 1) && (y = qs(t, r + 1, f.map((g) => -g), n[r + 2].map((g, _) => g - o[_])).map((g) => g * u)), [h.map((g) => g / 3), y.map((g) => -g / 3)];
}
function sp(e, t, n, r, a) {
  const [[o], [u]] = Og(e, t, n.map((f) => [f]), r);
  return Ws(n[r], n[r] + o, n[r + 1] + u, n[r + 1], a);
}
function Gw(e, t, n, r) {
  var y, g;
  const a = e.map((_) => _.value.position);
  let [o, u] = Og(e, t, a, n);
  o = ((y = e[n].handles) == null ? void 0 : y.out) ?? o, u = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? u;
  const f = a[n], h = a[n + 1];
  return [0, 1, 2].map((_) => Ws(f[_], f[_] + o[_], h[_] + u[_], h[_], r));
}
function Xs([e, t, n, r], [a, o, u, f]) {
  return [
    r * a + e * f + t * u - n * o,
    r * o - e * u + t * f + n * a,
    r * u + e * o - t * a + n * f,
    r * f - e * a - t * o - n * u
  ];
}
function Bw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function wu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Kw([e, t, n, r]) {
  const a = Math.sqrt(e * e + t * t + n * n), o = a > 1e-12 ? Math.atan2(a, r) / a : 1;
  return [e * o, t * o, n * o];
}
function dc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ca(e, t) {
  return Kw(Xs([-e[0], -e[1], -e[2], e[3]], t));
}
function ku(e, t, n) {
  return Xs(e, dc(ca(e, t).map((r) => n * r)));
}
function Mu(e, t) {
  const n = Bw(e, t);
  if (Math.abs(n) > op) return n < 0;
  const [r, a, o] = ca(e, t);
  for (const u of [-a, r, o])
    if (Math.abs(u) > op) return u < 0;
  return !1;
}
function rs(e) {
  const { x: t, y: n, z: r, w: a } = lf(sf(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, a];
}
function lp(e, t, n, r) {
  const a = t + (n - t) * r;
  return e + 360 * Math.ceil((a - 180 - 1e-6 - e) / 360);
}
function Ww(e, t, n, r) {
  const a = rs(e[n].value);
  let o = rs(e[n + 1].value);
  Mu(a, o) && (o = wu(o));
  const u = t[n + 1] - t[n], f = ca(a, o);
  let h = f;
  if (Ys(e, n)) {
    let F = rs(e[n - 1].value);
    Mu(F, a) && (F = wu(F)), h = qs(t, n, ca(a, F), f).map((G) => G * u);
  }
  let y = f;
  if (Ys(e, n + 1)) {
    let F = rs(e[n + 2].value);
    Mu(o, F) && (F = wu(F)), y = qs(t, n + 1, ca(o, a), ca(o, F)).map((G) => G * u);
  }
  const g = Xs(a, dc(h.map((F, G) => 0.5 * (F - f[G])))), _ = Xs(o, dc(f.map((F, G) => 0.5 * (F - y[G])))), [S, N, b, O] = ku(ku(a, o, r), ku(g, _, r), 2 * r * (1 - r)), { yawDeg: V, pitchDeg: R, rollDeg: P } = $w(jw({ x: S, y: N, z: b, w: O })), L = e[n].value, T = e[n + 1].value;
  return {
    yaw_deg: lp(V, L.yaw_deg, T.yaw_deg, r),
    pitch_deg: R,
    roll_deg: lp(P, L.roll_deg, T.roll_deg, r)
  };
}
function Yw(e, t, n) {
  const r = e.map((h) => h.frame), a = Uw(e[t].easing, (n - r[t]) / (r[t + 1] - r[t])), o = e[t].value;
  if (!o || typeof o != "object") return sp(e, r, e.map((h) => h.value), t, a);
  const u = "yaw_deg" in o ? Ww(e, r, t, a) : {}, f = {};
  for (const h of Object.keys(o))
    if (h === "position")
      f[h] = Gw(e, r, t, a);
    else if (Hw.includes(h))
      f[h] = u[h];
    else if (f[h] = sp(e, r, e.map((y) => y.value[h]), t, a), h in ap) {
      const [y, g] = ap[h];
      f[h] = Math.min(g, Math.max(y, f[h]));
    }
  return f;
}
function is(e, t) {
  const n = e.keyframes;
  if (!n.length) return ns(e.value);
  if (t <= n[0].frame + ua) return ns(n[0].value);
  const r = n[n.length - 1];
  if (t >= r.frame - ua) return ns(r.value);
  let a = 0;
  for (; n[a + 1].frame <= t + ua; ) a += 1;
  const o = n[a];
  return Math.abs(t - o.frame) <= ua || o.easing === "hold" ? ns(o.value) : Yw(n, a, t);
}
function up(e, t) {
  return t - (e.start - e.in);
}
function cp(e, t) {
  return t >= e.start - ua && (e.duration === null || t < e.start + e.duration - ua);
}
function qw(e, t) {
  const n = Number(t), { camera: r, scene: a } = e, o = up(a.clip, n);
  return {
    frame: n,
    camera: { ...is(r.transform, n), aspect: r.aspect },
    scene: {
      active: cp(a.clip, n),
      clip_frame: o,
      ...is(a.transform, o)
    },
    stickers: e.stickers.map((u) => {
      const f = up(u.clip, n);
      return {
        id: u.id,
        placement: u.placement,
        active: u.visible && cp(u.clip, n),
        clip_frame: f,
        ...is(u.transform, f),
        opacity: Math.min(1, Math.max(0, is(u.opacity, f)))
      };
    })
  };
}
function Xw(e, t, n) {
  const r = t / n, a = Math.tan(e.hFOV_deg * 0.5 * Gt);
  return {
    quaternion: lf(sf(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(a / r) * Wn,
    aspect: r
  };
}
function Jw(e, t, { media: n, zIndex: r, paintLayers: a }) {
  const o = qw(e, t), u = [];
  e.stickers.forEach((f, h) => {
    const y = o.stickers[h];
    if (f.placement !== "sky") return;
    const g = f.source.kind === "port" && !f.visible;
    if (!y.active && !g) return;
    const _ = n(f);
    if (!_) return;
    const S = Math.tan(y.hFOV_deg * 0.5 * Gt), N = Math.tan(y.vFOV_deg * 0.5 * Gt), { crop: b } = f;
    u.push({
      kind: "sticker",
      id: f.id,
      media: _.media,
      revision: _.revision,
      opacity: g ? Yc : y.opacity,
      zIndex: r(f),
      quaternion: lf(sf(y.yaw_deg, y.pitch_deg, y.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * b.x0 - 1) * S,
        x1: (2 * b.x1 - 1) * S,
        y0: (1 - 2 * b.y1) * N,
        y1: (1 - 2 * b.y0) * N
      }
    });
  });
  for (const f of a) u.push({ kind: "erp", ...f });
  return u.sort((f, h) => f.zIndex - h.zIndex);
}
function Zw({ onReady: e, onFailed: t }) {
  let n = null, r = !1;
  const a = {
    failed: !1,
    // Returns the rendered canvas, or null until the view has loaded.
    render(o) {
      return n ? n.render(o) : null;
    },
    dispose() {
      r = !0, n == null || n.dispose(), n = null;
    }
  };
  return import("./.lazy/pano_three_view-BsGU_K6I.js").then((o) => {
    r || (n = o.createThreeView(), e());
  }).catch((o) => {
    console.error("[PanoramaStickers] three.js view is unavailable; using the previous renderer", o), a.failed = !0, t();
  }), a;
}
function ta(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function Qw(e = {}) {
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
    qualityLabel: (n.find((r) => r.value === t) || n[1]).label,
    qualityOptions: n.map((r) => ({ ...r, active: r.value === t }))
  };
}
function ek({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: o,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: h
}) {
  var L, T;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", g = {
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
    historyEntries: Array.from({ length: 8 }, (F, G) => ({ index: G, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return g;
  const _ = ((L = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : L.id) || "", S = !_, N = o(e.customPaintColor), b = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), O = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[O] ?? 10, R = h(), P = Array.from({ length: 8 }, (F, G) => e.customPaintHistory[G] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: _,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: b,
    alphaText: `${b}%`,
    historyEntries: P.map((F, G) => ({
      index: G,
      color: F ? { cssColor: r(F, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: R,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function tk({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function nk({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: o,
  params: u,
  notes: f,
  visibilityRows: h,
  uiSettings: y,
  normalizeCoverageValue: g
}) {
  return {
    coverage: { value: g(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || o.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: h,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function rk({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: o,
  anyLocked: u,
  selectedLocked: f,
  activeAspect: h,
  cutoutAspectOpen: y,
  isExternalSticker: g,
  isStickerHidden: _,
  canRestoreSelectedToInitial: S,
  iconSet: N
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let b = [];
  if (n.length > 1)
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (r === "stroke")
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!f }
    ], g(t) || (b.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), b.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), g(t)) {
      const G = S(), U = _(t);
      b.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: G ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !G
      }), b.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: U ? "Show" : "Hide",
        tip: U ? "Show input image" : "Hide input image",
        icon: U ? N.eye : N.eye_dashed
      });
    }
    b.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed }), g(t) || b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f });
  } else
    b = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!y,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G, active: h === G }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f }
    ];
  const O = a.corners.map((G) => ({ x: Number(G == null ? void 0 : G.x), y: Number(G == null ? void 0 : G.y) })).filter((G) => Number.isFinite(G.x) && Number.isFinite(G.y));
  if (!O.length) return { visible: !1, left: 0, top: 0, items: [] };
  const V = O.map((G) => G.x), R = O.map((G) => G.y), P = Math.min(...V), L = Math.max(...V), T = Math.min(...R), F = Math.max(...R);
  return {
    visible: !0,
    left: (P + L) * 0.5,
    top: F + 18,
    items: b,
    anchor: { minX: P, maxX: L, minY: T, maxY: F }
  };
}
const ik = { class: "pano-floating-right" }, ak = ["data-settled"], ok = ["data-ready", "data-settled"], sk = ["aria-label", "data-tip"], lk = {
  key: 1,
  class: "pano-camera-preview-label"
}, uk = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae(ot, null, [
      X("div", ik, [
        (Me(!0), Ae(ot, null, zt(e.buttons, (r) => (Me(), Ei(tn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Mi(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: ft(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ut({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), Ae("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ve(en, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, sk)) : Rt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Ae("div", lk, ct(e.preview.label || "Preview unavailable"), 1)) : Rt("", !0)
        ], 14, ok)
      ], 8, ak), [
        [Mo, e.preview.visible]
      ])
    ], 64));
  }
}, ck = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, fk = ["y2", "transform"], dk = ["transform"], hk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, o) => o * 15), r = kt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, o) => Mi((Me(), Ae("div", {
      class: ft(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Ae("svg", ck, [
        o[1] || (o[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Ae(ot, null, zt(pt(n), (u) => (Me(), Ae("line", {
          key: u,
          class: ft(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, fk))), 128)),
        X("g", { transform: r.value }, [...o[0] || (o[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, dk),
        o[2] || (o[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Mo, e.model.visible === !0]
    ]);
  }
}, pk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: ft(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ve(rg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ve(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ve(hk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, mk = ["aria-label"], gk = { class: "pano-canvas-confirm-title" }, bk = { class: "pano-canvas-confirm-text" }, yk = { class: "pano-canvas-confirm-actions" }, vk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, _k = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ bn(null), r = /* @__PURE__ */ bn(null);
    let a = null;
    function o() {
      const _ = r.value;
      return _ ? Array.from(_.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(_) {
      const S = r.value;
      if (!S) return;
      const N = S.querySelector(`[data-action='${_}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function f() {
      var O;
      const _ = r.value;
      if (!_) return;
      const S = _.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const b = o()[0] || _;
      (O = b == null ? void 0 : b.focus) == null || O.call(b);
    }
    function h() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(_) {
      var R;
      if (_.defaultPrevented) return;
      if (_.key === "Escape") {
        _.preventDefault(), _.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (_.key !== "Tab") return;
      const S = o(), N = r.value;
      if (!S.length) {
        _.preventDefault(), (R = N == null ? void 0 : N.focus) == null || R.call(N);
        return;
      }
      const b = S[0], O = S[S.length - 1], V = document.activeElement;
      if (_.shiftKey) {
        (V === b || V === N || !(N != null && N.contains(V))) && (_.preventDefault(), O.focus());
        return;
      }
      (V === O || !(N != null && N.contains(V))) && (_.preventDefault(), b.focus());
    }
    function g(_) {
      _.target === n.value && u("confirm-cancel");
    }
    return Ni(() => t.model.visible, (_, S) => {
      if (_) {
        a = document.activeElement, Pc(() => {
          f();
        });
        return;
      }
      S && h();
    }, { immediate: !0 }), ol(() => {
      h();
    }), (_, S) => e.model.visible === !0 ? (Me(), Ae("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Kn(g, ["self"])
    }, [
      X("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        X("div", gk, ct(e.model.title), 1),
        X("div", bk, ct(e.model.text), 1),
        X("div", yk, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", vk, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, mk)
    ], 512)) : Rt("", !0);
  }
}, xk = ["data-paint-pane"], Sk = ["hidden"], wk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], kk = ["aria-pressed", "disabled"], Mk = ["hidden"], Nk = { class: "pano-paint-color-pop-head" }, Pk = { class: "pano-paint-color-field" }, Ak = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Ck = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Ik = { class: "pano-paint-color-field" }, Tk = { class: "pano-paint-alpha-wrap" }, Ek = ["value"], Dk = { "data-paint-alpha-value": "" }, Ok = ["hidden"], Fk = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Rk = ["data-paint-history-index", "aria-label", "disabled"], Lk = ["data-paint-footer"], zk = ["data-paint-group"], Vk = ["hidden"], $k = ["value", "disabled"], jk = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Hk = ["hidden"], Uk = {
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
    return (r, a) => (Me(), Ae("div", {
      class: ft(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Ae(ot, null, zt(e.panes, (o) => {
        var u;
        return Me(), Ae("div", {
          key: o.key,
          class: ft(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Me(), Ae("div", {
            key: 0,
            class: ft(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Ae(ot, null, zt(e.paintSwatches, (f) => (Me(), Ae("button", {
              key: f.id,
              class: ft(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Ut(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, wk))), 128)),
            X("button", {
              class: ft(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ut({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, kk),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ut({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", Nk, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ut({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", Pk, [
                X("div", Ak, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ut({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", Ck, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ut({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", Ik, [
                a[1] || (a[1] = X("span", null, "Opacity", -1)),
                X("div", Tk, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Ek),
                  X("span", Dk, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", Fk, [
                  (Me(!0), Ae(ot, null, zt(e.state.historyEntries || [], (f) => (Me(), Ae("button", {
                    key: f.index,
                    class: ft(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Ut(n(f.color))
                  }, null, 14, Rk))), 128))
                ])
              ], 8, Ok)
            ], 12, Mk)
          ], 10, Sk)) : Rt("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Me(!0), Ae(ot, null, zt(o.tools, (f) => {
                var h;
                return Me(), Ei(tn, {
                  key: `${o.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[o.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, zk),
            X("div", {
              class: ft(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: Ut({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, $k),
              X("span", jk, ct(e.state.sizeText || "10"), 1)
            ], 10, Vk),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[o.key]) ?? !o.clearHidden)
            }, [
              Ve(tn, {
                icon: pt(Ee).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Hk)
          ], 8, Lk)
        ], 10, xk);
      }), 128))
    ], 2));
  }
}, Gk = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ bn(null), r = /* @__PURE__ */ bn(null), a = /* @__PURE__ */ bn(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: a.value
      };
    }
    return t({ getRefs: o }), (u, f) => (Me(), Ae(ot, null, [
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
          ref: a,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, Bk = {
  key: 0,
  class: "pano-cutout-menu"
}, Kk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Wk = ["data-aspect"], Yk = ["data-action", "aria-label", "data-tip", "disabled"], qk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ut({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Ae(ot, null, zt(e.model.items || [], (r) => (Me(), Ae(ot, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Me(), Ae("div", Bk, [
          X("button", Kk, [
            Ve(en, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ft(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Ae(ot, null, zt(r.choices || [], (a) => (Me(), Ae("button", {
              key: a.value,
              class: ft(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ct(a.label), 11, Wk))), 128))
          ], 2)
        ])) : (Me(), Ae("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Ve(en, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, Yk))
      ], 64))), 128))
    ], 4));
  }
}, Xk = {
  class: "pano-side",
  "data-side": ""
}, Jk = { class: "pano-side-head" }, Zk = { class: "pano-side-title" }, Qk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, eM = {
  key: 0,
  class: "pano-side-scroll"
}, tM = { class: "pano-inspector" }, nM = { class: "pano-ui-row pano-coverage-row" }, rM = ["data-selected"], iM = ["aria-pressed", "disabled"], aM = ["aria-pressed", "disabled"], oM = {
  key: 0,
  class: "pano-section-title"
}, sM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, lM = {
  class: "pano-picker",
  "data-picker": "selection"
}, uM = ["disabled"], cM = { class: "pano-picker-label" }, fM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, dM = ["hidden"], hM = ["data-selection-id"], pM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, mM = {
  key: 2,
  class: "pano-state-actions"
}, gM = ["disabled"], bM = ["data-key"], yM = ["min", "max", "step", "value", "disabled", "data-param-key"], vM = ["min", "max", "step", "value", "disabled", "data-param-key"], _M = { class: "pano-visibility-section" }, xM = { class: "pano-visibility-stack" }, SM = ["data-visibility-row"], wM = { class: "pano-visibility-name" }, kM = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, MM = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], NM = ["open"], PM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, AM = { class: "pano-ui-settings-body" }, CM = { class: "pano-ui-row" }, IM = ["data-selected"], TM = ["aria-pressed"], EM = ["aria-pressed"], DM = { class: "pano-ui-row" }, OM = ["data-selected"], FM = ["aria-pressed"], RM = ["aria-pressed"], LM = { class: "pano-ui-row" }, zM = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, VM = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, $M = { class: "pano-picker-label" }, jM = ["hidden"], HM = ["data-quality"], UM = {
  key: 1,
  class: "pano-side-footer"
}, GM = ["data-action"], BM = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = kt(() => {
      const o = t.model;
      return !o || typeof o != "object" ? !1 : Object.keys(o).length > 0 && !!o.coverage;
    });
    function r(o) {
      return { "--v": `${Number((o == null ? void 0 : o.fillPct) || 0)}%` };
    }
    function a(o, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (o == null ? void 0 : o.enabled) === !1;
    }
    return (o, u) => {
      var f, h, y, g, _;
      return Me(), Ae("div", Xk, [
        X("div", Jk, [
          X("div", Zk, [
            X("span", Qk, [
              Ve(en, {
                icon: pt(Ee).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, ct(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = X("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Ae("div", eM, [
          X("div", tM, [
            u[12] || (u[12] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", nM, [
              u[1] || (u[1] = X("label", null, "Coverage", -1)),
              X("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((h = e.model.coverage) == null ? void 0 : h.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, iM),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 180 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "180", 8, aM)
              ], 8, rM)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Ae("div", oM, [...u[2] || (u[2] = [
              X("span", null, "Transform", -1)
            ])])) : Rt("", !0),
            e.model.selectionPicker ? (Me(), Ae("div", sM, [
              X("label", null, ct(e.model.selectionPicker.label), 1),
              X("div", lM, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", cM, [
                    e.model.selectionPicker.currentIcon ? (Me(), Ae("span", fM, [
                      Ve(en, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    X("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, uM),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Ae(ot, null, zt(e.model.selectionPicker.items || [], (S) => (Me(), Ae("button", {
                    key: S.id,
                    type: "button",
                    class: ft(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Ae("span", pM, [
                      Ve(en, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    X("span", null, ct(S.label), 1)
                  ], 10, hM))), 128))
                ], 8, dM)
              ])
            ])) : Rt("", !0),
            e.model.copyStateButton ? (Me(), Ae("div", mM, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ve(en, {
                  icon: pt(Ee).copy
                }, null, 8, ["icon"]),
                X("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, gM)
            ])) : Rt("", !0),
            X("div", {
              class: ft(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Ae(ot, { key: 0 }, zt(e.model.notes, (S) => (Me(), Ae("div", {
                key: S,
                class: "pano-param-note"
              }, ct(S), 1))), 128)) : (Me(!0), Ae(ot, { key: 1 }, zt(e.model.params || [], (S) => (Me(), Ae("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                X("label", null, ct(S.label), 1),
                X("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: Ut(r(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, yM),
                X("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, vM)
              ], 8, bM))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Ae(ot, { key: 3 }, [
              u[5] || (u[5] = X("div", { class: "pano-divider" }, null, -1)),
              X("div", _M, [
                u[4] || (u[4] = X("div", { class: "pano-section-title" }, [
                  X("span", null, "Layers")
                ], -1)),
                X("div", xM, [
                  (Me(!0), Ae(ot, null, zt(e.model.visibilityRows, (S) => (Me(), Ae("div", {
                    key: S.key,
                    class: ft(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    X("span", wM, [
                      X("span", kM, [
                        Ve(en, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      X("span", null, ct(S.label), 1)
                    ]),
                    X("button", {
                      class: ft(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      Ve(en, {
                        icon: S.visible === !0 ? pt(Ee).eye : pt(Ee).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, MM)
                  ], 10, SM))), 128))
                ])
              ])
            ], 64)) : Rt("", !0),
            e.model.uiSettings ? (Me(), Ae("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                u[6] || (u[6] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", PM, [
                  Ve(en, {
                    icon: pt(Ee).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", AM, [
                X("div", CM, [
                  u[7] || (u[7] = X("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, TM),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, EM)
                  ], 8, IM)
                ]),
                X("div", DM, [
                  u[8] || (u[8] = X("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, FM),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, RM)
                  ], 8, OM)
                ]),
                X("div", LM, [
                  u[10] || (u[10] = X("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  X("div", zM, [
                    X("button", VM, [
                      X("span", $M, ct(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    X("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Ae(ot, null, zt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Ae("button", {
                        key: S.value,
                        type: "button",
                        class: ft(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ct(S.label), 11, HM))), 128))
                    ], 8, jM)
                  ])
                ]),
                u[11] || (u[11] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, NM)) : Rt("", !0)
          ])
        ])) : Rt("", !0),
        (e.model.footerButtons || []).length ? (Me(), Ae("div", UM, [
          (Me(!0), Ae(ot, null, zt(e.model.footerButtons, (S) => (Me(), Ae("button", {
            key: S.action,
            class: ft(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ct(S.label), 11, GM))), 128))
        ])) : Rt("", !0)
      ]);
    };
  }
}, KM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: ft(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Ut({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ct(e.model.text || ""), 7));
  }
}, WM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, YM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", WM, [
      (Me(!0), Ae(ot, null, zt(e.buttons, (r) => Mi((Me(), Ei(tn, {
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
        [Mo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, qM = ["data-video-ready"], XM = { class: "pano-video-transport-shell" }, JM = { class: "pano-video-controls-left" }, ZM = { class: "pano-video-filmstrip" }, QM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, eN = ["src", "onLoad"], tN = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, nN = ["max", "value", "disabled"], rN = { class: "pano-video-controls-right" }, iN = ["data-has-audio"], aN = { class: "pano-video-volume-pop" }, oN = ["value", "disabled"], sN = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), r = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), a = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Ee.pause : Ee.play;
    }), o = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Ee.loop_off : Ee.loop;
    }), h = kt(() => {
      var F, G;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = kt(() => {
      var F, G, U;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Ee.volume : ((G = t.state) == null ? void 0 : G.muted) === !0 || Number(((U = t.state) == null ? void 0 : U.volume) ?? 1) <= 0 ? Ee.volume_muted : Ee.volume2;
    }), g = kt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), _ = kt(() => ({ left: `${g.value}%` })), S = kt(() => {
      var le, oe;
      const F = (le = t.state) == null ? void 0 : le.volumePct, G = Number(((oe = t.state) == null ? void 0 : oe.volume) ?? 1) * 100, U = Number(F ?? G ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, U))}%`
      };
    }), N = kt(() => {
      var U, le;
      const G = [
        String(((U = t.state) == null ? void 0 : U.currentTimeLabel) || "0:00"),
        String(((le = t.state) == null ? void 0 : le.durationLabel) || "0:00")
      ].reduce((oe, I) => Math.max(oe, I.length), 4);
      return `${Math.max(4, G)}ch`;
    }), b = kt(() => ({ "--pano-video-time-ch": N.value })), O = kt(() => {
      var U, le;
      const F = Array.isArray((U = t.state) == null ? void 0 : U.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const G = Math.max(7, Number(((le = t.state) == null ? void 0 : le.thumbnailCount) || 9));
      return Array.from({ length: G }, (oe, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ bn(/* @__PURE__ */ new Set()), R = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => V.value.has(R(F)), L = (F) => {
      const G = new Set(V.value);
      G.add(R(F)), V.value = G;
    };
    Ni(O, (F) => {
      const G = new Set(F.map(R)), U = /* @__PURE__ */ new Set();
      for (const le of V.value)
        G.has(le) && U.add(le);
      V.value = U;
    }, { immediate: !0 });
    const T = kt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, G) => (Me(), Ae("div", {
      class: ft(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ut(T.value)
    }, [
      G[1] || (G[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", XM, [
        X("div", JM, [
          Ve(tn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          X("div", {
            class: "pano-video-time pano-video-time-start",
            style: Ut(b.value)
          }, ct(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", ZM, [
          X("div", QM, [
            (Me(!0), Ae(ot, null, zt(O.value, (U) => (Me(), Ae("div", {
              key: R(U),
              class: ft(["pano-video-thumb", {
                "is-placeholder": !U.src,
                "is-loaded": U.src && P(U)
              }])
            }, [
              U.src ? (Me(), Ae("img", {
                key: 0,
                src: U.src,
                alt: "",
                draggable: "false",
                onLoad: (le) => L(U)
              }, null, 40, eN)) : (Me(), Ae("span", tN))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Ut(_.value),
            "aria-hidden": "true"
          }, [...G[0] || (G[0] = [
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
          }, null, 8, nN)
        ]),
        X("div", rN, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ut(b.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          Ve(tn, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: o.value,
            tip: u.value,
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
            X("div", aN, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ut(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, oN)
            ]),
            Ve(tn, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: h.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, iN)
        ])
      ])
    ], 14, qM));
  }
}, lN = { class: "pano-floating-top" }, uN = ["data-selected", "data-view-count"], cN = ["data-view", "aria-pressed", "aria-label", "disabled"], fN = { class: "label" }, dN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Me(), Ae("div", lN, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Ae(ot, null, zt(e.buttons, (a) => Mi((Me(), Ae("button", {
            key: a.key,
            class: ft(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Ve(en, {
              icon: a.icon
            }, null, 8, ["icon"]),
            X("span", fN, ct(a.label), 1)
          ], 10, cN)), [
            [Mo, a.visible !== !1]
          ])), 128))
        ], 8, uN)
      ]);
    };
  }
};
function Fg(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ee.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ee.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ee.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ee.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ee.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ee.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ee.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ee.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ee.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ee.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ee.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ee.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ee.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ee.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ee.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ee.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ee.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ee.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ee.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ee.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ee.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ee.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ee.lasso_tool }
        ]
      }
    ]
  };
}
const hN = ["aria-label"], pN = { class: "pano-stage-wrap" }, mN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, gN = {
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
    const r = e, a = n;
    let o = "", u = !1, f = null;
    const h = /* @__PURE__ */ bn(null), y = /* @__PURE__ */ bn(null), g = /* @__PURE__ */ bn(null);
    function _() {
      var I, Y;
      return ((Y = (I = g.value) == null ? void 0 : I.getRefs) == null ? void 0 : Y.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(I) {
      var Y, ie;
      return ((ie = (Y = y.value) == null ? void 0 : Y.open) == null ? void 0 : ie.call(Y, I)) === !0;
    }
    function N(I) {
      a("image-file-selected", I);
    }
    function b(I) {
      a("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: _, openImagePicker: S });
    const O = kt(() => r.readOnly === !0), V = kt(() => r.shellPreset || Fg(r.type)), R = kt(() => {
      var Y, ie, J;
      const I = String((((Y = r.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (ie = r.uiState) == null ? void 0 : ie.stageStatusDetail : (J = r.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Re-run the node to refresh it." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = kt(() => {
      var Y;
      const I = Array.isArray((Y = V.value) == null ? void 0 : Y.floatingButtons) ? V.value.floatingButtons.slice() : [];
      return O.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ee.fullscreen
      }), I;
    });
    function L() {
      const I = h.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function T() {
      var ie;
      const Y = L()[0] || h.value;
      (ie = Y == null ? void 0 : Y.focus) == null || ie.call(Y);
    }
    function F() {
      var I;
      f != null && f.isConnected && ((I = f.focus) == null || I.call(f)), f = null;
    }
    function G(I) {
      var Y, ie, J, he;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const fe = L();
          if (!fe.length) {
            I.preventDefault(), (ie = (Y = h.value) == null ? void 0 : Y.focus) == null || ie.call(Y);
            return;
          }
          const ke = fe[0], A = fe[fe.length - 1], we = document.activeElement;
          if (I.shiftKey) {
            (we === ke || we === h.value || !((J = h.value) != null && J.contains(we))) && (I.preventDefault(), A.focus());
            return;
          }
          (we === A || !((he = h.value) != null && he.contains(we))) && (I.preventDefault(), ke.focus());
          return;
        }
        I.key === "Escape" && a("close");
      }
    }
    function U() {
      u || (o = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function le() {
      u && (document.body.style.overflow = o, u = !1);
    }
    function oe(I) {
      document.removeEventListener("keydown", G), I ? (f || (f = document.activeElement), U(), document.addEventListener("keydown", G), Pc(() => {
        T();
      })) : (le(), F());
    }
    return Ic(() => {
      oe(r.open);
    }), ol(() => {
      le(), document.removeEventListener("keydown", G), F();
    }), Ni(() => r.open, (I) => {
      oe(I);
    }), (I, Y) => e.open ? (Me(), Ae("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Y[0] || (Y[0] = Kn((ie) => a("close"), ["self"]))
    }, [
      X("section", {
        ref_key: "modalRef",
        ref: h,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        X("div", pN, [
          Y[1] || (Y[1] = X("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Y[2] || (Y[2] = X("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          Y[3] || (Y[3] = X("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Ae("div", mN, ct(R.value), 1)) : Rt("", !0),
          Y[4] || (Y[4] = X("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          Ve(Gk, {
            ref_key: "paintOverlaysRef",
            ref: g
          }, null, 512),
          Ve(ig, {
            ref_key: "imageFilePickerRef",
            ref: y,
            onFileSelected: N,
            onFileCancelled: b
          }, null, 512),
          O.value ? Rt("", !0) : (Me(), Ae(ot, { key: 1 }, [
            Ve(YM, {
              buttons: e.uiState.toolButtons || V.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ve(pk, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            Ve(Uk, {
              "paint-swatches": e.paintSwatches,
              panes: V.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ve(sN, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ve(dN, {
            buttons: e.uiState.viewButtons || V.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ve(uk, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ve(qk, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ve(KM, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ve(_k, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Rt("", !0) : (Me(), Ei(BM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, hN)
    ])) : Rt("", !0);
  }
}, _r = "loading", Pa = "ready", wr = "failed";
function Rg(e, t = "") {
  return e && (e.__panoLoadState = _r, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Lg(e, t = "") {
  return e && (e.__panoLoadState = Pa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function zg(e, t = "") {
  return e && (e.__panoLoadState = wr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function hc(e, t) {
  return e ? e.__panoLoadState === wr ? wr : typeof t == "function" && t(e) ? Pa : _r : Pa;
}
function pc(e) {
  return hc(e) === wr;
}
function bN({ presented: e, background: t = Pa, stickers: n = [] } = {}) {
  if (!e) return { status: _r, detail: "boot" };
  const r = Array.isArray(n) ? n : [], a = t === _r, o = r.includes(_r);
  if (a && o) return { status: _r, detail: "mixed" };
  if (a) return { status: _r, detail: "background" };
  if (o) return { status: _r, detail: "stickers" };
  const u = t === wr, f = r.includes(wr);
  return u && f ? { status: wr, detail: "mixed" } : u ? { status: wr, detail: "background" } : f ? { status: wr, detail: "stickers" } : { status: Pa, detail: "" };
}
function na(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const a = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function fp(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function yN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function dp(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function vN(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = yN(e == null ? void 0 : e.graph, n)), r;
}
function _N(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function xN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function SN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function wN({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const a = (T) => {
    if (!T) return "";
    if (typeof T == "string") return String(T || "").trim();
    if (Array.isArray(T)) {
      if (T.length === 0) return "";
      if (T.length === 1) return a(T[0]);
      const F = String(T[0] || "").trim();
      if (F)
        return na(t, {
          filename: F,
          subfolder: String(T[1] || "").trim(),
          type: String(T[2] || "output").trim() || "output"
        });
      for (const G of T) {
        const U = a(G);
        if (U) return U;
      }
      return "";
    }
    return typeof (T == null ? void 0 : T.src) == "string" && T.src ? T.src : typeof (T == null ? void 0 : T.url) == "string" && T.url ? T.url : na(t, T);
  }, o = (T) => {
    if (!T || typeof T != "object") return "";
    const F = String(T.type || "").trim().toLowerCase();
    if (F === "dataurl") return String(T.value || "");
    if (F !== "comfy_image") return "";
    const G = String(T.filename || "").trim();
    return G ? na(t, {
      filename: G,
      subfolder: String(T.subfolder || ""),
      type: String(T.storage || "input")
    }) : "";
  }, u = (T) => {
    const F = e == null ? void 0 : e.nodeOutputs;
    if (!F || T == null) return null;
    const G = String(T);
    return F instanceof Map ? F.get(T) || F.get(G) || F.get(Number(G)) || null : F[T] || F[G] || null;
  }, f = (T, F) => {
    var U;
    const G = u(T == null ? void 0 : T.id);
    return Array.isArray((U = G == null ? void 0 : G.ui) == null ? void 0 : U[F]) ? G.ui[F] : Array.isArray(G == null ? void 0 : G[F]) ? G[F] : [];
  }, h = (T, F) => {
    const G = u(T == null ? void 0 : T.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, F) ? G.ui[F] : G && Object.prototype.hasOwnProperty.call(G, F) ? G[F] : null;
  }, y = (T, F) => {
    const G = h(T, "pano_sticker_input_state_hash"), U = Array.isArray(G) ? G[0] : G;
    return String(U ?? "").trim() || SN(F);
  }, g = (T) => {
    const F = [], G = /* @__PURE__ */ new Set();
    for (const U of T || []) {
      const le = a(U);
      !le || G.has(le) || (G.add(le), F.push(le));
    }
    return F;
  }, _ = (T, F) => {
    var le;
    const G = [];
    Array.isArray(T == null ? void 0 : T.images) && T.images.length && G.push(T.images), Array.isArray((le = T == null ? void 0 : T.ui) == null ? void 0 : le.images) && T.ui.images.length && G.push(T.ui.images);
    const U = [];
    for (const oe of G)
      F >= 0 && F < oe.length && U.push(oe[F]), U.push(...oe);
    return U;
  }, S = (T, F) => {
    var Ce;
    const G = String(F || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const U = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs : [], le = U.findIndex((Ne) => String((Ne == null ? void 0 : Ne.name) || "") === G);
    if (le < 0) return { src: "", sourceType: "", inputName: G };
    const oe = U[le], I = oe == null ? void 0 : oe.link;
    if (I == null) return { src: "", sourceType: "", inputName: G };
    const { originId: Y, originSlot: ie } = dp(fp(T == null ? void 0 : T.graph, I));
    if (Y == null) return { src: "", sourceType: "", inputName: G };
    const J = vN(T, le, Y);
    if (!J) return { src: "", sourceType: "", inputName: G };
    const he = Number(ie || 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Ne = [];
      he >= 0 && he < fe.length && Ne.push(fe[he]), Ne.push(...fe);
      const B = g(Ne);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: G };
    }
    const ke = g(_(u((J == null ? void 0 : J.id) ?? Y), he));
    if (ke.length)
      return { src: ke[0], srcCandidates: ke, sourceType: "nodeOutputs", inputName: G };
    const A = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (A.length) {
      const Ne = [];
      he >= 0 && he < A.length && Ne.push(A[he]), Ne.push(...A);
      const B = g(Ne);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: G };
    }
    const we = (Ce = J == null ? void 0 : J.widgets) == null ? void 0 : Ce.find((Ne) => String((Ne == null ? void 0 : Ne.name) || "").toLowerCase() === "image");
    if (we) {
      let Ne = a(we.value);
      if (Ne && !Ne.includes("/") && !Ne.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Ne = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Ne)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Ne)}&type=input&subfolder=`), Ne) return { src: Ne, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, N = (T, F = []) => {
    const G = Array.isArray(F) ? F : [F];
    for (const U of G) {
      const le = S(T, U);
      if (String((le == null ? void 0 : le.src) || "").trim()) return le;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, b = (T) => {
    const F = String(T || "").trim();
    if (!F) return [];
    if (_N(F)) return [F];
    const { filename: G, subfolder: U } = xN(F);
    return G ? g([
      na(t, { filename: G, subfolder: U, type: "temp" }),
      na(t, { filename: G, subfolder: U, type: "output" }),
      na(t, { filename: G, subfolder: U, type: "input" }),
      F
    ]) : [F];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (T) => {
      var F, G;
      try {
        (G = (F = T == null ? void 0 : T.__panoLinkedInputImageCache) == null ? void 0 : F.forEach) == null || G.call(F, (U, le, oe) => {
          var I;
          U != null && U.img && ((I = r == null ? void 0 : r.isImageLoadFailed) != null && I.call(r, U.img)) && oe.delete(le);
        });
      } catch {
      }
    },
    externalStateHash: y,
    invalidateUiImage: (T, F) => {
      var G;
      (G = T == null ? void 0 : T.delete) == null || G.call(T, `__ui__${String(F || "")}`);
    },
    linkedValue: (T, F) => {
      var oe, I, Y, ie;
      const G = String(F || ""), U = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs.find((J) => String((J == null ? void 0 : J.name) || "") === G) : null;
      if ((U == null ? void 0 : U.link) != null) {
        const { originId: J, originSlot: he } = dp(fp(T == null ? void 0 : T.graph, U.link)), fe = u(J), ke = [
          fe == null ? void 0 : fe.output,
          fe == null ? void 0 : fe.result,
          (oe = fe == null ? void 0 : fe.data) == null ? void 0 : oe.output,
          (I = fe == null ? void 0 : fe.data) == null ? void 0 : I.result,
          (Y = fe == null ? void 0 : fe.ui) == null ? void 0 : Y.output,
          (ie = fe == null ? void 0 : fe.ui) == null ? void 0 : ie.result
        ];
        for (const A of ke) {
          if (!Array.isArray(A)) continue;
          const we = A[Number(he || 0)];
          if (typeof we == "string" && we.trim()) return we;
        }
      }
      const le = Array.isArray(T == null ? void 0 : T.widgets) ? T.widgets.find((J) => String((J == null ? void 0 : J.name) || "") === G) : null;
      return String((le == null ? void 0 : le.value) || "");
    },
    loadPreferredExactLinkedImage: (T, F = [], G = null, U = "") => {
      var $e;
      const le = Array.isArray(F) ? F : [F], oe = N(T, le), Y = (Array.isArray(oe == null ? void 0 : oe.srcCandidates) && oe.srcCandidates.length ? oe.srcCandidates : [oe == null ? void 0 : oe.src]).map((mt) => String(mt || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const ie = g(Y.flatMap((mt) => b(mt)));
      if (!ie.length) return null;
      T.__panoLinkedInputImageCache || (T.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(U || le.join("|") || "image_exact"), he = Y.join(`
`), fe = T.__panoLinkedInputImageCache.get(J);
      if (fe && fe.srcRaw === he && fe.img) return fe.img;
      const ke = n || globalThis.Image;
      if (typeof ke != "function") return null;
      const A = new ke();
      ($e = r == null ? void 0 : r.markImageLoading) == null || $e.call(r, A, he);
      const we = { srcRaw: he, resolvedSrc: "", img: A };
      T.__panoLinkedInputImageCache.set(J, we);
      let Ce = -1;
      const Ne = (mt) => {
        var et, We, je;
        mt === "ready" ? (et = r == null ? void 0 : r.markImageReady) == null || et.call(r, A, he) : (We = r == null ? void 0 : r.markImageFailed) == null || We.call(r, A, he), G == null || G(A), (je = T.setDirtyCanvas) == null || je.call(T, !0, !0);
      }, B = () => {
        if (Ce += 1, Ce >= ie.length) {
          Ne("failed");
          return;
        }
        we.resolvedSrc = ie[Ce], A.src = we.resolvedSrc;
      };
      return A.onload = () => Ne("ready"), A.onerror = () => {
        if (Ce + 1 < ie.length) {
          B();
          return;
        }
        Ne("failed");
      }, B(), A;
    },
    output: u,
    resolvePreferredExactLinkedSource: N,
    source: a,
    uiImage: (T, F, G, U = null) => {
      var he, fe, ke;
      const le = f(T, F)[0] || null, oe = a(le);
      if (!oe) return null;
      const I = `__ui__${F}`, Y = (he = G == null ? void 0 : G.get) == null ? void 0 : he.call(G, I);
      if (Y && Y.__panoSrc === oe) return Y;
      const ie = n || globalThis.Image;
      if (typeof ie != "function") return null;
      const J = new ie();
      return J.__panoSrc = oe, (fe = r == null ? void 0 : r.markImageLoading) == null || fe.call(r, J, oe), J.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, J, oe), U == null || U(J);
      }, J.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, J, oe), U == null || U(J);
      }, J.src = oe, (ke = G == null ? void 0 : G.set) == null || ke.call(G, I, J), J;
    },
    uiList: f,
    uiValue: h
  };
}
const kN = "state_json", as = "sticker_image_1", MN = "external_image", os = "pano_sticker_input_images", NN = !0, Ps = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], jn = Math.PI / 180, Gr = 180 / Math.PI, Nu = 1, PN = "rgb(255, 221, 87)", AN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, CN = 64, hp = 40, Pu = 16, IN = 0.45, pp = 180, TN = 160, Js = 24, EN = 4, DN = 4, ss = /* @__PURE__ */ new Map(), mp = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), ON = 12, sr = wN({
  app: lr,
  api: mn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: pc,
    markImageFailed: zg,
    markImageLoading: Rg,
    markImageReady: Lg
  }
}), FN = sr.assetSource, RN = sr.source, Au = sr.uiImage, LN = sr.invalidateUiImage, zN = sr.resolvePreferredExactLinkedSource, Cu = sr.loadPreferredExactLinkedImage;
function ls(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function VN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function $N(e, t, n) {
  const r = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function jN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ui.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ui.delete(t), ui.set(t, n), n);
}
function HN(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ui.delete(n), ui.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ui.size > ON; ) {
      const a = ui.keys().next().value;
      if (!a) break;
      ui.delete(a);
    }
}
function UN(e) {
  return e * e * e;
}
function pl(e, t, n) {
  return { x: e, y: t, z: n };
}
function us(e, t) {
  return pl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function cs(e, t) {
  return pl(e.x * t, e.y * t, e.z * t);
}
function Vr(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function gp(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return pl(e.x / t, e.y / t, e.z / t);
}
function fs(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Gr),
    pitch: W(Math.asin(W(e.y, -1, 1)) * Gr, -90, 90)
  };
}
function $r(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const o = t[r].x, u = t[r].y, f = t[a].x, h = t[a].y;
    u > e.y != h > e.y && e.x < (f - o) * (e.y - u) / (h - u || 1e-6) + o && (n = !n);
  }
  return n;
}
function oi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Iu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return oi(e, t);
  const h = W((o * r + u * a) / f, 0, 1), y = Number(t.x || 0) + r * h, g = Number(t.y || 0) + a * h, _ = Number(e.x || 0) - y, S = Number(e.y || 0) - g;
  return _ * _ + S * S;
}
function Jn(e, t, n) {
  return e + (t - e) * n;
}
function mr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function GN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ds = { fillStyle: "", url: "" };
function BN(e, t, n) {
  if (ds.url && ds.fillStyle === String(e || ""))
    return ds.url;
  const r = GN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Js}" height="${Js}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ds = { fillStyle: String(e || ""), url: r }, r;
}
function As(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Hn(e) {
  return {
    r: W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: W(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function KN(e) {
  return Ps.some((t) => As(e, t.color));
}
function Tu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), o = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: o, g: o, b: o };
  const u = Math.floor(r * 6), f = r * 6 - u, h = o * (1 - a), y = o * (1 - f * a), g = o * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: o, g, b: h };
    case 1:
      return { r: y, g: o, b: h };
    case 2:
      return { r: h, g: o, b: g };
    case 3:
      return { r: h, g: y, b: o };
    case 4:
      return { r: g, g: h, b: o };
    default:
      return { r: o, g: h, b: y };
  }
}
function Eu(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), o = Math.min(t, n, r), u = a - o;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const h = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: h, v: a };
}
function ra(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Vg = "pano_suite.ui_settings.v1", $g = "pano_suite.node_grid_visibility.v1";
let la = null, gr = null;
function Cs(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function WN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Vg)) || "").trim();
    if (!t) return la ? Cs(la) : null;
    const n = JSON.parse(t), r = Cs(n);
    return la = r, r;
  } catch {
    return la ? Cs(la) : null;
  }
}
function YN(e) {
  var n;
  const t = Cs(e);
  la = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Vg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function jg() {
  var e;
  if (gr && typeof gr == "object")
    return gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($g)) || "").trim();
    if (!t)
      return gr = {}, gr;
    const n = JSON.parse(t);
    return gr = n && typeof n == "object" ? n : {}, gr;
  } catch {
    return gr = {}, gr;
  }
}
function qN(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = jg()[n];
  return typeof a == "boolean" ? a : !!t;
}
function XN(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = jg();
  r[n] = !!t, gr = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem($g, JSON.stringify(r));
  } catch {
  }
}
function JN(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function bp(e) {
  const { paintCount: t, maskCount: n } = JN(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, o = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? o += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: o,
    totalPaintCount: t + a,
    totalMaskCount: n + o
  };
}
function ia(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function hs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function ZN(e, t) {
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
function ps(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function QN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function eP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function tP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function nP(e, t, n = {}) {
  var Md;
  await gg(e, { tolerateOperationFailure: !0 }), sr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, u = ZN(e, t);
  await Qc();
  const f = hs(e, "output_preset"), h = hs(e, "coverage"), y = hs(e, "bg_color"), g = hs(e, kN), _ = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Cu(
      e,
      i,
      () => ye(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = _();
    return tP(i);
  }, N = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return eP(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : QN(s, i);
  }, b = Kc(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((y == null ? void 0 : y.value) || "#00ff00"),
    coverage: Qt(h == null ? void 0 : h.value),
    sharedUiSettings: WN(),
    active: Gm(e)
  });
  e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = 0, t === "cutout" && (b.shots = Array.isArray(b.shots) ? b.shots.slice(0, 1) : [], b.shots.length || (b.active.selected_shot_id = null));
  const O = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(b.shots) ? b.shots : [], s = String(((l = b == null ? void 0 : b.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  })() : null, V = O ? Vf(O, !1) : { width: 220, height: 132 }, R = Fg(t), P = /* @__PURE__ */ Aa({
    stageStatus: _r,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (R.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (R.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(R.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ee.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ee.aspect,
      rotateIcon: Ee.rotate_90,
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
      icon: Ee.fullscreen,
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
      label: O ? "Loading preview" : "Add Frame to preview"
    }
  }), L = document.createElement("div");
  document.body.appendChild(L);
  const T = ({ intent: i, file: s } = {}) => {
    if (Nr(s)) {
      if (i === "add") {
        Yf(s);
        return;
      }
      i === "replace" && Fb(s);
    }
  }, F = ({ intent: i } = {}) => {
  }, G = Oc(gN, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: R,
    paintSwatches: Ps.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: mr(i.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Ji();
    },
    onImageFileSelected: T,
    onImageFileCancelled: F
  });
  let U = null;
  try {
    U = G.mount(L);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw L.remove(), i;
  }
  const le = L.querySelector(".pano-modal-overlay"), oe = L.querySelector(".pano-modal"), I = oe == null ? void 0 : oe.querySelector("[data-stage-overlay]"), Y = oe == null ? void 0 : oe.querySelector("[data-stage-background]"), ie = oe == null ? void 0 : oe.querySelector(".pano-stage-wrap"), J = ((Md = U == null ? void 0 : U.getPaintOverlayRefs) == null ? void 0 : Md.call(U)) || {}, he = J.cursor || null, fe = J.sizePreview || null, ke = J.sizeSample || null;
  if (!le || !oe || !I || !Y || !ie || !he || !fe || !ke)
    throw G.unmount(), L.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = I.getContext("2d"), we = No(), Ce = t === "cutout" ? Vw({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Ne = oe.querySelector("[data-side]"), B = oe.querySelector("[data-video-element]"), $e = oe.querySelector(".pano-floating-right"), mt = oe.querySelector(".pano-floating-top"), et = oe.querySelector("[data-tool-rail]"), We = oe.querySelector("[data-frame-rail]"), je = oe.querySelector("[data-frame-roll-knob]"), Yt = oe.querySelector("[data-paint-dock]"), An = oe.querySelector(".pano-video-transport"), vn = oe.querySelector("[data-selection-menu]"), nn = oe.querySelector("[data-tooltip]"), sn = oe.querySelector("[data-camera-preview-host]"), z = oe.querySelector("[data-paint-color-row]"), j = oe.querySelector("[data-paint-color-pop]"), te = oe.querySelector("[data-paint-color-sv]"), _e = oe.querySelector("[data-paint-color-sv-cursor]"), pe = oe.querySelector("[data-paint-hue-strip]"), D = oe.querySelector("[data-paint-hue-handle]");
  let Q = 0, ee = 0;
  ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", Y.style.opacity = "0", a && (Ne == null || Ne.remove(), oe.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!d.customPaintSessionStart) return;
    if (As(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (KN(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(d.customPaintColor),
      ...d.customPaintHistory.filter((s) => !As(s, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, ne = (i = !1) => {
    !j || j.hidden || (i ? de() : d.customPaintSessionStart = null, j.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, Pe = () => {
    j && (j.hidden && (d.customPaintSessionStart = Hn(d.customPaintColor)), j.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  oe.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || mi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (oe.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ne(!0), t === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, tt(), ye()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const ve = t === "stickers" ? b.active.selected_sticker_id : b.active.selected_shot_id, Ie = JSON.stringify(kh(b)), d = {
    mode: "pano",
    selectedId: ve,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Qt(b.coverage),
    historyController: Ew(80, { entries: [Ie], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: zr,
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
    showGrid: qN(e == null ? void 0 : e.id, !0),
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
    paintEngine: Bu(),
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
  }, Oe = Ce && sn ? Ce.mount(sn, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, b.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Le = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), rt = document.createElement("canvas");
  rt.__panoFrameIdx = 0;
  const ae = {
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
  }, Et = t === "stickers" && !r ? Zw({ onReady: () => ye(), onFailed: () => ye() }) : null, tr = () => !!Et && !Et.failed;
  let at = { key: null, sceneState: null };
  const _n = Number.parseFloat(
    getComputedStyle(oe).getPropertyValue("--pano-float-radius")
  ) || 10, $ = (i) => {
    const s = String(i || "default");
    I.style.cursor !== s && (I.style.cursor = s);
  }, me = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  }, re = {
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
  }, it = 4, He = 9, bt = [];
  let Ot = 0;
  const qt = () => {
    var k, C;
    const i = (k = ie == null ? void 0 : ie.getBoundingClientRect) == null ? void 0 : k.call(ie), s = (C = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : C.call($e), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), c = s ? Math.max(0, Number(s.width || 0)) : 0, x = c > 0 ? c + 14 + 12 : 72, v = Math.max(280, Math.floor(l - x * 2)), w = d.fullscreen ? Math.min(1200, v) : v;
    P.videoTransport.shellMaxWidthPx = w;
  }, ln = () => {
    Ot || (Ot = window.requestAnimationFrame(() => {
      Ot = 0, qt();
    }));
  }, Dt = () => {
    const i = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, fi = (i) => {
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
    return !!P.videoTransport.hasAudio;
  }, xn = typeof ResizeObserver < "u" ? new ResizeObserver(() => ln()) : null;
  xn == null || xn.observe(ie), $e && (xn == null || xn.observe($e)), bt.push(() => {
    var i;
    Ot && (window.cancelAnimationFrame(Ot), Ot = 0), (i = xn == null ? void 0 : xn.disconnect) == null || i.call(xn);
  }), ln();
  const Sn = () => {
    re.thumbnailJobId += 1, re.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = He;
  }, Ca = async (i, s, l) => {
    const c = String(i || "").trim();
    if (!c) {
      Sn();
      return;
    }
    const p = jN(c);
    if (p) {
      re.thumbnailSrc = c, P.videoTransport.thumbnails = p.thumbnails, P.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    if (re.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++re.thumbnailJobId;
    re.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = He;
    const x = document.createElement("video");
    if (x.preload = "auto", x.muted = !0, x.playsInline = !0, x.crossOrigin = "anonymous", !await new Promise((ce) => {
      let ge = !1;
      const ue = (Se) => {
        ge || (ge = !0, ce(Se));
      };
      x.addEventListener("loadedmetadata", () => ue(!0), { once: !0 }), x.addEventListener("canplay", () => ue(!0), { once: !0 }), x.addEventListener("error", () => ue(!1), { once: !0 }), x.src = c, x.load();
    }) || re.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(x.videoWidth || 0)), k = Math.max(1, Number(x.videoHeight || 0));
    if (w < 1 || k < 1) return;
    const C = Math.max(0, Number(x.duration || s || 0)), M = document.createElement("canvas"), E = 46, H = Math.max(72, Math.round(w / k * E));
    M.width = H, M.height = E;
    const Z = M.getContext("2d");
    if (!Z) return;
    const K = [], q = (ce) => new Promise((ge) => {
      let ue = !1;
      const Se = () => {
        ue || (ue = !0, ge());
      };
      x.addEventListener("seeked", Se, { once: !0 }), x.addEventListener("error", Se, { once: !0 });
      try {
        x.currentTime = ce;
      } catch {
        Se();
      }
    });
    for (let ce = 0; ce < He; ce += 1) {
      if (re.thumbnailJobId !== m) return;
      const ge = ce / (He - 1), ue = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * ge)) : 0;
      if (await q(ue), re.thumbnailJobId !== m) return;
      Z.clearRect(0, 0, H, E), Z.drawImage(x, 0, 0, H, E), K.push({
        id: `thumb-${ce}`,
        src: M.toDataURL("image/jpeg", 0.72),
        time: ue,
        label: kl(ue)
      });
    }
    re.thumbnailJobId === m && (P.videoTransport.thumbnails = K, P.videoTransport.thumbnailCount = K.length || He, HN(c, {
      thumbnails: K,
      thumbnailCount: K.length || He,
      duration: C,
      fps: l
    }));
  }, Ia = (i) => {
    const s = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, Ta = (i) => {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return null;
    const s = Number(B.videoWidth || 0), l = Number(B.videoHeight || 0), c = document.createElement("canvas");
    c.width = s, c.height = l, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const p = c.getContext("2d");
    if (!p) return null;
    for (p.drawImage(B, 0, 0, s, l), re.frameCache.set(i, c), re.frameCacheOrder = re.frameCacheOrder.filter((m) => m !== i), re.frameCacheOrder.push(i); re.frameCacheOrder.length > it; ) {
      const m = re.frameCacheOrder.shift();
      m != null && re.frameCache.delete(m);
    }
    return c;
  }, Cn = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), c = Number(i.height || 0);
    if (l < 1 || c < 1) return !1;
    (rt.width !== l || rt.height !== c) && (rt.width = l, rt.height = c);
    const p = rt.getContext("2d");
    return p ? (p.clearRect(0, 0, l, c), p.drawImage(i, 0, 0, l, c), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, s != null && (re.presentedTime = Number(s || 0)), !0) : !1;
  }, Yn = (i) => {
    const s = Ia(i), l = re.frameCache.get(s) || null;
    return l ? (re.currentFrameNumber = s, Cn(l, i)) : !1;
  };
  if (bt.push(() => {
    Sn();
  }), B instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof B.requestVideoFrameCallback != "function" || B.__panoFramePumpActive) return;
      B.__panoFramePumpActive = !0;
      const v = (w, k) => {
        B.__panoFramePumpActive = !1;
        const C = Number((k == null ? void 0 : k.mediaTime) ?? B.currentTime ?? 0), M = Ia(C), E = Dt();
        re.mode === "scrub" ? Math.abs(C - Number(re.editorTime || 0)) <= E && (Ta(M), Yn(re.editorTime), ae.backgroundDirty = !0, ae.dirty = !0, dr({
          ready: !0,
          playing: !1,
          visible: Dr(),
          currentTime: re.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ye({ cause: "frame_view", localOnly: !0 })) : (re.editorTime = C, re.presentedTime = C, re.requestedTime = null, re.currentFrameNumber = M, Ta(M), re.frameCounter += 1, B.dataset.panoFrameIdx = String(re.frameCounter), ae.backgroundDirty = !0, ae.dirty = !0, dr({
          ready: !0,
          playing: !B.paused && !B.ended,
          visible: Dr(),
          currentTime: C,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ye({ cause: "frame_view", localOnly: !0 })), ae.running && (!B.paused || re.mode === "scrub") && i();
      };
      try {
        B.requestVideoFrameCallback(v);
      } catch {
        B.__panoFramePumpActive = !1;
      }
    }, s = () => {
      re.pendingPlaybackResume && (re.pendingPlaybackResume = !1, re.mode = "playback", re.requestedTime = null, Vi() && (ae.backgroundDirty = !0, ae.dirty = !0), B.play().catch(() => {
      }));
    }, l = () => {
      re.editorTime = Number(B.currentTime || 0), Number(B.readyState || 0) >= 2 && Vi() && (ae.backgroundDirty = !0, ae.dirty = !0), $i(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      re.mode = "playback", re.seeking = !1, re.requestedTime = null, $i(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      re.mode === "playback" && Vi() && (ae.backgroundDirty = !0, ae.dirty = !0), $i(), ye({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      dr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: Dr(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      });
    }, x = () => {
      const v = re.seeking || re.pendingPlaybackResume || re.mode === "scrub";
      if (re.seeking = !1, !v) {
        re.requestedTime = null, i();
        return;
      }
      const w = Number(re.requestedTime ?? re.editorTime ?? 0), k = Number(B.currentTime || 0);
      if (Math.abs(k - w) > Dt()) {
        Ml(w);
        return;
      }
      re.mode === "scrub" && (Vi(), ae.backgroundDirty = !0, ae.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), re.requestedTime = null, s(), i();
    };
    B.addEventListener("loadedmetadata", l), B.addEventListener("loadeddata", l), B.addEventListener("canplay", l), B.addEventListener("play", c), B.addEventListener("pause", p), B.addEventListener("volumechange", m), B.addEventListener("seeked", x), bt.push(() => B.removeEventListener("loadedmetadata", l)), bt.push(() => B.removeEventListener("loadeddata", l)), bt.push(() => B.removeEventListener("canplay", l)), bt.push(() => B.removeEventListener("play", c)), bt.push(() => B.removeEventListener("pause", p)), bt.push(() => B.removeEventListener("volumechange", m)), bt.push(() => B.removeEventListener("seeked", x));
  }
  function Po() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", c = i.attr === "data-mask-tool";
      i.active = s ? i.value === d.primaryTool : l ? i.key === d.paintTool : c ? i.key === d.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function di(i) {
    return tf(i == null ? void 0 : i.dataTransfer);
  }
  function zn(i) {
    const s = !!i;
    Te.active !== s && (Te.active = s, ie.classList.toggle("drop-active", s));
  }
  function ml(i, s, l = d.viewFov, c = 140, p = 620) {
    const m = V1(d.viewYaw, i), x = s - d.viewPitch, v = l - d.viewFov, w = Math.hypot(m, x) + Math.abs(v) * 0.6, k = Math.round(W(c + w * 2.2, c, p));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: k,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: s,
      targetFov: l,
      deltaYaw: m
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ye();
  }
  b0();
  function Er() {
    return t === "stickers" ? b.stickers : b.shots;
  }
  function un() {
    const i = b.painting || (b.painting = ba(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Hg(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = b.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? b.painting[i].strokes : [], l = [], c = /* @__PURE__ */ new Set();
    for (const x of s) {
      const v = String((x == null ? void 0 : x.actionGroupId) || "").trim();
      !v || c.has(v) || (c.add(v), l.push(v));
    }
    return l;
  }
  function Ug() {
    return Hg("paint");
  }
  function Ea(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Da(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Xt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Oa(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const c = l.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function gl() {
    var s;
    let i = -1;
    for (const l of Array.isArray(b.stickers) ? b.stickers : [])
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of un())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = b.painting) == null ? void 0 : s.raster_objects) ? b.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function uf(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const c = un();
    let p = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? gl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, c.push(p)), p;
  }
  function Gg(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), c = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - c) % 1 + 1) % 1,
        v: W(l - p, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: W(l - p, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: W(l + p, 0, 1)
      },
      {
        u: ((s - c) % 1 + 1) % 1,
        v: W(l + p, 0, 1)
      }
    ];
  }
  function Bg() {
    const i = new Set(Ug()), l = un().filter((c) => i.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return i.forEach((c) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === c) || l.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: gl(),
        locked: !1,
        frame: null
      });
    }), l.sort((c, p) => Number((c == null ? void 0 : c.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), b.painting.groups = l, l;
  }
  function Kg(i, s, l) {
    var K;
    const c = (q) => (Number(q || 0) % 1 + 1) % 1, p = [];
    for (const q of l) {
      const ce = q == null ? void 0 : q.geometry, ge = (ce == null ? void 0 : ce.geometryKind) === "lasso_fill" ? ce == null ? void 0 : ce.points : (ce == null ? void 0 : ce.processedPoints) || (ce == null ? void 0 : ce.rawPoints) || (ce == null ? void 0 : ce.points) || [];
      Array.isArray(ge) && p.push(...ge);
    }
    if (!p.length) return null;
    const m = c(((K = p[0]) == null ? void 0 : K.u) || 0);
    let x = 0, v = 0;
    p.forEach((q) => {
      const ce = c((q == null ? void 0 : q.u) || 0);
      x += m + qn(ce, m), v += Number((q == null ? void 0 : q.v) || 0);
    });
    const w = (x / p.length % 1 + 1) % 1;
    let k = 1 / 0, C = -1 / 0, M = 1 / 0, E = -1 / 0;
    p.forEach((q) => {
      const ce = c((q == null ? void 0 : q.u) || 0), ge = qn(ce, w);
      k = Math.min(k, ge), C = Math.max(C, ge);
      const ue = Number((q == null ? void 0 : q.v) || 0);
      M = Math.min(M, ue), E = Math.max(E, ue);
    });
    const H = l.reduce((q, ce) => {
      const ge = ii(String((ce == null ? void 0 : ce.toolKind) || "pen")), ue = Dn[ge] || Dn[zr], Se = Math.max(1, Number((ce == null ? void 0 : ce.size) || 10)) * Math.max(0.1, Number((ue == null ? void 0 : ue.sizeScale) ?? 1));
      return Math.max(q, Se);
    }, 0), Z = Math.max(35e-4, H / 2048);
    return {
      centerUv: { u: ((w + (k + C) * 0.5) % 1 + 1) % 1, v: W((M + E) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - k) * 0.5 + Z,
      halfH: (E - M) * 0.5 + Z,
      uvPad: Z
    };
  }
  function Qr(i, s, l) {
    const c = String(i || "").trim();
    if (!c) return null;
    const p = un().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === c);
    if (!p) return null;
    const m = l || nr(c, s);
    return p.frame = Kg(c, s, m), p.frame;
  }
  function Oi() {
    var c;
    const i = (Array.isArray(b.stickers) ? b.stickers : []).map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = Bg().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((c = b.painting) == null ? void 0 : c.raster_objects) ? b.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function bl(i = !0) {
    var l, c, p, m, x, v;
    const s = Oi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((c = (l = d.interaction) == null ? void 0 : l.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), k = String(((m = (p = d.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((v = (x = d.interaction) == null ? void 0 : x.stroke) == null ? void 0 : v.toolKind) || "").trim();
      w && k === "paint" && C !== "eraser" && !s.includes(w) && s.push(w);
    }
    return s;
  }
  function yl(i = !0) {
    var v, w, k, C, M, E;
    const s = Oi();
    if (!i) return s;
    const l = String(((w = (v = d.interaction) == null ? void 0 : v.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((C = (k = d.interaction) == null ? void 0 : k.stroke) == null ? void 0 : C.layerKind) || "").trim(), p = String(((E = (M = d.interaction) == null ? void 0 : M.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!l || c !== "paint" || p === "eraser" || s.some((H) => H.type === "strokeGroup" && String(H.actionGroupId || "") === l))
      return s;
    const m = Ct();
    let x = s.reduce((H, Z) => Math.max(H, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    return m && Bt(m) && String(m.actionGroupId || "") === l && (x = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: x,
        item: null
      }
    ].sort((H, Z) => Number((H == null ? void 0 : H.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0));
  }
  function Wg() {
    return un().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ri(Ea("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Yg() {
    var i;
    return (Array.isArray((i = b.painting) == null ? void 0 : i.raster_objects) ? b.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Fi(Da((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function cf(i = d.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, c = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || c;
    }
    return !1;
  }
  function qg() {
    var s, l, c, p;
    let i = null;
    try {
      const m = bl(), x = ((p = (c = (l = (s = d.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : p.canvas) || null;
      x && (i = {
        source: x,
        revision: `${Ki()}:${Ao()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Ao() {
    var p, m, x, v, w, k, C;
    const i = d.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!cf(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const M = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, E = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), H = ((x = M == null ? void 0 : M.rawPoints) == null ? void 0 : x.length) ?? ((v = M == null ? void 0 : M.points) == null ? void 0 : v.length) ?? 0, Z = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${E || "paint"}_${s}_live${Z}_${H}_${d.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
    return `_${s}_${l || c || "active"}_${d.livePaintInteractionRevision}`;
  }
  function vl() {
    const i = Array.isArray(b.shots) ? b.shots : [], s = Array.isArray(b.stickers) ? b.stickers : [];
    return [...i, ...s];
  }
  function Vn(i) {
    return !!i && Array.isArray(b.shots) && b.shots.includes(i);
  }
  function _t(i) {
    return !!i && Array.isArray(b.stickers) && b.stickers.includes(i);
  }
  function In() {
    var i;
    return Array.isArray((i = b.painting) == null ? void 0 : i.raster_objects) ? b.painting.raster_objects : [];
  }
  function Fi(i) {
    const s = Xt(i);
    if (!s) return null;
    const l = In().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Da(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function cn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Xt(i.rasterObjectId || i.id || "");
    return !!s && !!Fi(Da(s));
  }
  function Ri(i) {
    const s = Oa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const c = un().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return c ? {
      ...c,
      id: Ea("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Bt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ri(Ea(l, s));
  }
  function nr(i, s = null) {
    const l = Oa(i, s), c = String(l.actionGroupId || "").trim();
    return c ? qi(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === c) : [];
  }
  function Xg(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${d.mode}:${Va()}`;
    if (d.mode === "frame") {
      const m = Ue(), x = String((m == null ? void 0 : m.id) || ""), v = m ? Kt(m) : null;
      return `${p}:frame:${x}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Co(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: W(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function qn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function _l(i, s = null, l = null) {
    var k;
    const c = Oa(i, s), p = Array.isArray(l) ? l : nr(c.actionGroupId, c.layerKind), m = [];
    if (p.forEach((C) => {
      const M = (C == null ? void 0 : C.geometry) || null, E = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(E) && m.push(...E);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const x = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let v = 0, w = 0;
    return m.forEach((C) => {
      v += x + qn(Number((C == null ? void 0 : C.u) || 0), x), w += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function Io(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), x = qn(Number(i.u || 0), p), v = Number(i.v || 0) - m, w = Number(c || 0) * jn, k = Math.cos(w), C = Math.sin(w), M = Math.max(0.02, Number(l || 1)), E = (x * k - v * C) * M, H = (x * C + v * k) * M;
    return {
      ...i,
      u: ((p + E) % 1 + 1) % 1,
      v: W(m + H, 0, 1)
    };
  }
  function ff(i, s, l, c = null, p = null, m = null) {
    const x = Oa(i, p), v = String(x.actionGroupId || "").trim();
    if (!v) return !1;
    const w = qi(x.layerKind), k = Array.isArray(c) ? new Map(c.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let C = !1;
    if (w.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== v) return;
      const E = (k == null ? void 0 : k.get(String((M == null ? void 0 : M.id) || ""))) || M, H = M == null ? void 0 : M.geometry, Z = E == null ? void 0 : E.geometry;
      !H || !Z || (Array.isArray(Z.points) && (H.points = Z.points.map((K) => Co(K, s, l)), C = !0), Array.isArray(Z.rawPoints) && (H.rawPoints = Z.rawPoints.map((K) => Co(K, s, l)), C = !0), Array.isArray(Z.processedPoints) && (H.processedPoints = Z.processedPoints.map((K) => Co(K, s, l)), C = !0));
    }), C && m) {
      const M = un().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === v);
      M && (M.frame = null);
    }
    return C;
  }
  function df(i, s = 1, l = 0, c = null, p = null, m = null) {
    const x = Oa(i, p), v = String(x.actionGroupId || "").trim();
    if (!v) return !1;
    const w = qi(x.layerKind), k = Array.isArray(c) ? c : nr(v, x.layerKind), C = Array.isArray(k) ? new Map(k.map((H) => [String((H == null ? void 0 : H.id) || ""), H])) : null, M = (m == null ? void 0 : m.centerUv) ?? _l(v, x.layerKind, k);
    let E = !1;
    if (w.forEach((H) => {
      if (String((H == null ? void 0 : H.actionGroupId) || "").trim() !== v) return;
      const Z = (C == null ? void 0 : C.get(String((H == null ? void 0 : H.id) || ""))) || H, K = H == null ? void 0 : H.geometry, q = Z == null ? void 0 : Z.geometry;
      !K || !q || (Array.isArray(q.points) && (K.points = q.points.map((ce) => Io(ce, M, s, l)), E = !0), Array.isArray(q.rawPoints) && (K.rawPoints = q.rawPoints.map((ce) => Io(ce, M, s, l)), E = !0), Array.isArray(q.processedPoints) && (K.processedPoints = q.processedPoints.map((ce) => Io(ce, M, s, l)), E = !0));
    }), E && m) {
      const H = un().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === v);
      H && (H.frame = null);
    }
    return E;
  }
  function hf(i, s, l, c = null) {
    const p = Xt(i);
    if (!p) return !1;
    const m = In().find((C) => String((C == null ? void 0 : C.id) || "").trim() === p);
    if (!m) return !1;
    const x = c && typeof c == "object" ? c : m, v = (x == null ? void 0 : x.transform) || {}, w = Number(v.du || 0) + Number(s || 0), k = W(Number(v.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function Jg(i, s = 1, l = null) {
    const c = Xt(i);
    if (!c) return !1;
    const p = In().find((k) => String((k == null ? void 0 : k.id) || "").trim() === c);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, x = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(x.scale || 1)), w = W(v * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = w, !0;
  }
  function Ct() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const s = Ri(i);
    if (s) return s;
    const l = Fi(i);
    return l || (t === "cutout" ? vl().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null : Er().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null);
  }
  function rr() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((c) => {
      const p = String(c || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(d.selectedId || "") ? Ct() : Ri(p) || Fi(p) || (t === "cutout" ? vl().find((x) => String((x == null ? void 0 : x.id) || "") === p) : Er().find((x) => String((x == null ? void 0 : x.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function xl(i = null) {
    const s = Array.isArray(i) ? i : rr();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => Zt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const c = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), p = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...c), x = Math.max(...c), v = Math.min(...p), w = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + x) * 0.5, y: (v + w) * 0.5 },
      corners: [
        { x: m, y: v },
        { x, y: v },
        { x, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + x) * 0.5, y: v, a: { x: m, y: v }, b: { x, y: v } },
        { edge: "right", x, y: (v + w) * 0.5, a: { x, y: v }, b: { x, y: w } },
        { edge: "bottom", x: (m + x) * 0.5, y: w, a: { x, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (v + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + x) * 0.5, y: v },
      rotateHandle: { x: (m + x) * 0.5, y: v - 30 }
    };
  }
  function pf(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(d.selectedIds) && d.selectedIds.includes(s);
  }
  function To() {
    const i = Ct();
    return i ? Bt(i) || cn(i) ? "stroke" : Vn(i) ? "frame" : "image" : null;
  }
  function wn(i) {
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = un().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (cn(i)) {
      const s = Xt(i.rasterObjectId || i.id || ""), l = In().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Sl(i = null) {
    const s = Array.isArray(i) ? i : rr();
    return s.length > 0 && s.every((l) => wn(l));
  }
  function Zg(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const c = String(i.actionGroupId || i.id || "").trim(), p = un().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (cn(i)) {
      const c = Xt(i.rasterObjectId || i.id || ""), p = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l || Hm(b, i.id) ? !1 : (i.locked = l, !0);
  }
  function Qg() {
    if (r) return;
    const i = rr();
    if (!i.length) return;
    const s = !Sl(i);
    let l = !1;
    i.forEach((c) => {
      Zg(c, s) && (l = !0);
    }), l && (st(), ut(), tt(), Ke(), ye());
  }
  function Li(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && _t(i) ? b.active.selected_sticker_id = i.id || null : b.active.selected_sticker_id = null, i && Vn(i) ? b.active.selected_shot_id = i.id || null : i ? Vn(i) || (b.active.selected_shot_id = b.active.selected_shot_id) : b.active.selected_shot_id = null;
  }
  function e0(i, s = null) {
    const l = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((x) => {
      const v = String((x == null ? void 0 : x.id) || "").trim();
      !v || c.has(v) || (c.add(v), l.push(v));
    }), d.selectedIds = l;
    const p = String(s || "").trim();
    d.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Ct();
    b.active.selected_sticker_id = m && _t(m) && m.id || null, m && Vn(m) ? b.active.selected_shot_id = m.id || null : l.length || (b.active.selected_shot_id = null);
  }
  function mf() {
    const i = (Array.isArray(b.shots) ? b.shots : []).map((l, c) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${c + 1}`)
    })), s = (Array.isArray(b.stickers) ? b.stickers : []).map((l, c) => {
      var m, x;
      const p = Jt(l) ? String(l.id || as) : String(((x = (m = b.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : x.name) || l.asset_id || l.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function t0(i) {
    return i === "frame" ? Ee.camera : i === "stroke" ? Ee.paintbrush_vertical_tool : Ee.image;
  }
  function wl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: t0(i.kind)
    };
  }
  function gf() {
    return gl();
  }
  function Jt(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === as || String(i.source_kind || "") === MN;
  }
  function zi(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function n0(i) {
    return Jt(i) && zi(i) ? Yc : 1;
  }
  function r0() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function i0() {
    return String(r0() || "") === "lasso_fill";
  }
  function a0() {
    if (r) return;
    const i = Ct();
    !i || !Jt(i) || (i.visible = zi(i), rn(), st(), ut(), Ke(), tt(), ye());
  }
  function o0() {
    if (r || t !== "stickers") return;
    const i = Ct();
    if (!i || !Jt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Nl(os, () => {
      ye();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = ji(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), st(), ut(), Ke(), tt(), ye();
  }
  function s0(i) {
    if (!i || !Jt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, c = Nl(os, () => {
      ye();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (l.vFOV_deg = ji(
      l.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), l;
  }
  function l0() {
    const i = Ct();
    if (!i || !Jt(i)) return !1;
    const s = s0(i);
    if (!s) return !1;
    const l = (c, p) => Math.abs(Number(c || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function bf(i) {
    return sr.uiList(e, i);
  }
  function yf(i) {
    return sr.uiValue(e, i);
  }
  function vf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return zs(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function u0() {
    const { metaKey: i } = vf(), s = yf(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function ei(i) {
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
  function kl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), c = s % 60;
    return `${l}:${String(c).padStart(2, "0")}`;
  }
  function dr(i = {}) {
    const s = Number(i.currentTime ?? re.editorTime ?? 0), l = Number(i.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, p = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, x = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(B instanceof HTMLVideoElement ? B.muted : P.videoTransport.muted), v = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : B instanceof HTMLVideoElement ? B.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : fi(B), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: p,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: kl(s),
      durationLabel: kl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(i.mode || re.mode || "playback"),
      hasAudio: w,
      muted: x,
      volume: Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? He))
    });
  }
  function Dr() {
    return !!(B instanceof HTMLVideoElement && B.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function c0() {
    dr({
      visible: Dr()
    });
  }
  function Vi() {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return !1;
    const i = Number(B.videoWidth || 0), s = Number(B.videoHeight || 0);
    (rt.width !== i || rt.height !== s) && (rt.width = i, rt.height = s);
    const l = rt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(B, 0, 0, i, s), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, re.presentedTime = Number(re.editorTime || B.currentTime || 0), !0) : !1;
  }
  function _f() {
    return re.mode === "scrub" && Number(rt.width || 0) > 0 && Number(rt.height || 0) > 0 && Number(rt.__panoFrameIdx || 0) > 0 ? rt : B instanceof HTMLVideoElement && Number(B.videoWidth || 0) > 0 && Number(B.videoHeight || 0) > 0 && Number(B.readyState || 0) >= 2 ? B : null;
  }
  function Ml(i) {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (re.requestedTime = s, !re.seeking && !(Math.abs(Number(B.currentTime || 0) - s) <= 5e-4)) {
      re.seeking = !0;
      try {
        B.currentTime = s;
      } catch {
        re.seeking = !1;
      }
    }
  }
  function $i() {
    if (!(B instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = vf(), s = bf(i)[0] || null, l = RN(s), c = u0(), p = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), x = Number((c == null ? void 0 : c.duration) || (p > 0 ? p / m : 0)), v = !!(c != null && c.has_audio) || fi(B);
    return l && B.dataset.panoSrc !== l ? (B.pause(), B.dataset.panoSrc = l, B.dataset.panoFrameIdx = "0", B.loop = !!P.videoTransport.loop, B.muted = !!P.videoTransport.muted, B.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), B.src = l, B.load(), Ca(l, x, m)) : !l && B.getAttribute("src") && (B.pause(), B.removeAttribute("src"), B.load(), Sn()), B.loop !== !!P.videoTransport.loop && (B.loop = !!P.videoTransport.loop), l && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Ca(l, x, m), l || Sn(), dr({
      ready: !!l,
      playing: !B.paused && !B.ended,
      visible: !!l && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: re.editorTime,
      duration: x,
      frameCount: p,
      fps: m,
      mode: re.mode,
      hasAudio: v,
      loop: !!B.loop,
      muted: !!B.muted,
      volume: Number(B.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), l || null;
  }
  function f0(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const c = i[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(s) && s.length > 0) {
      const c = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (c && typeof c == "object" && !Array.isArray(c))
        return {
          yaw_deg: Number(c.yaw_deg || 0),
          pitch_deg: Number(c.pitch_deg || 0),
          hFOV_deg: Number(c.hFOV_deg || 30),
          rot_deg: Number(c.roll_deg || 0)
        };
    }
    return null;
  }
  function Nl(i, s = null) {
    return Au(e, i, Le, s || (() => ye()));
  }
  function xf(i = null) {
    return Nl(os, i);
  }
  function ji(i, s, l) {
    const c = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = W(Number(i || 30), 0.1, 179) * jn, x = 2 * Math.atan(Math.tan(m * 0.5) * (p / c));
    return W(x * Gr, 0.1, 179);
  }
  function d0(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const c = l.version;
      let p = null;
      if (typeof c == "number" && Number.isInteger(c) ? p = c : typeof c == "string" && /^\d+$/.test(c) && (p = Number.parseInt(c, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const x = Number(m.yaw_deg), v = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![x, v, w, k].every((H) => Number.isFinite(H))) return null;
      let C = ((x + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const M = {
        yaw_deg: C,
        pitch_deg: W(v, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(k, 0.1, 179)
      }, E = Number(l.source_aspect);
      return Number.isFinite(E) && E > 0 && (M.source_aspect = E), M;
    } catch {
      return null;
    }
  }
  function Sf(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Ci(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function h0(i) {
    var v;
    if (!i || typeof i != "object") return Sf(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let x = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const w = W(p, 0.1, 179) * jn, k = W(m, 0.1, 179) * jn, C = Math.tan(k * 0.5);
      if (Math.abs(C) > 1e-6) {
        const M = Math.tan(w * 0.5) / C;
        Number.isFinite(M) && M > 0 && (x = M);
      }
    }
    if (i != null && i.asset_id && ((v = b == null ? void 0 : b.assets) != null && v[i.asset_id])) {
      const w = b.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), C = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && C > 0 && (x = k / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: x
    };
  }
  function p0(i) {
    return sr.linkedValue(e, i);
  }
  function m0(i, s, l) {
    const c = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : d0(s);
    if (c) {
      const x = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || c.source_aspect || 1), v = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: ji(c.hFOV_deg, x, v),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: ji(30, p, m),
      rot_deg: 0
    };
  }
  function wf(i = "sync") {
    if (t !== "stickers" || r || e.__panoSceneStateV2) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, c = xf(() => {
      no(e, "image-loaded");
    }), p = f0(yf("pano_sticker_input_pose"), null), m = p0("sticker_state"), x = sr.externalStateHash(e, m), v = l == null ? null : m0(p, m, c), w = ug(b, {
      connected: l != null,
      linkId: l,
      stateHash: x,
      pose: v,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
    w.changed && (b.stickers = w.state.stickers, b.active = w.state.active, l == null && d.selectedId === as && (d.selectedId = null, d.selectedIds = []), ut(), Ke(), tt()), ye();
  }
  function Fa(i = {}) {
    const l = i.preservePanelValues !== !1 ? Ct() : null;
    l && (d.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Ur(l)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, b.active.selected_sticker_id = null, b.active.selected_shot_id = null;
  }
  function g0() {
    if (t !== "cutout") return;
    const i = Ue();
    i && (d.selectedId = String(i.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function Pl() {
    if (t !== "cutout") return;
    const i = Ue();
    ta(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ee.camera : Ee.plus_circle
    });
  }
  function kf() {
    const i = t === "cutout" && d.mode === "frame", s = !i && !!d.showGrid;
    ta(P.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), ta(P.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ee.eye : Ee.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Or() {
    var l;
    const i = !!Ue();
    d.mode === "frame" && !i && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((c) => {
      const p = c.key === d.mode;
      c.pressed = p ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && d.mode === "frame" ? Ue() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = ra(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = d.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && d.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? Ur(s) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!s && String(Ur(s)) === c
    })), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!Ue(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame), kf(), nd() ? xt(d.pointerPos) : $(d.mode === "pano" ? "grab" : "default");
  }
  function b0() {
    const s = If({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Al() {
    return Ln(d.viewYaw, d.viewPitch, 0);
  }
  function Ra(i) {
    const { right: s, up: l, fwd: c } = Al(), p = Vr(i, s), m = Vr(i, l), x = Vr(i, c);
    if (x <= 1e-5) return null;
    const v = I.width, w = I.height, k = d.viewFov * jn, C = 2 * Math.atan(Math.tan(k / 2) * (w / v)), M = v / 2 / Math.tan(k / 2), E = w / 2 / Math.tan(C / 2);
    return {
      x: v / 2 + p / x * M,
      y: w / 2 - m / x * E,
      z: x
    };
  }
  function Cl(i, s) {
    const { right: l, up: c, fwd: p } = Al(), m = I.width, x = I.height, v = d.viewFov * jn, w = 2 * Math.atan(Math.tan(v / 2) * (x / m)), k = (i - m / 2) / (m / 2) * Math.tan(v / 2), C = (x / 2 - s) / (x / 2) * Math.tan(w / 2), M = us(us(cs(l, k), cs(c, C)), p);
    return gp(M);
  }
  function ti() {
    const i = I.width, s = I.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const v = s, w = v * l;
      return { x: (i - w) * 0.5, y: 0, w, h: v };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Il(i) {
    var x;
    if (i && typeof i == "object" && (Jt(i) || i.external === !0))
      return xf(() => {
        no(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Le.get(s);
    if (l) return l;
    const c = (x = b.assets) == null ? void 0 : x[s], p = FN(c);
    if (!p) return null;
    const m = new Image();
    return Rg(m, p), m.onload = () => {
      Lg(m, p), ye();
    }, m.onerror = () => {
      zg(m, p), ye();
    }, m.src = p, Le.set(s, m), m;
  }
  function Mf(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const c = Ge.get(l);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ge.set(l, p), p;
  }
  function y0(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ze.get(s);
    if (l) return l.ready ? l : null;
    const c = Mf(i, () => {
      const C = Ze.get(s);
      C && (C.ready = !1), ye({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const p = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (p < 1 || m < 1) return null;
    const x = document.createElement("canvas");
    x.width = p, x.height = m;
    const v = x.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, p, m), v.drawImage(c, 0, 0, p, m);
    const w = v.getImageData(0, 0, p, m).data, k = { canvas: x, width: p, height: m, alpha: w, ready: !0 };
    return Ze.set(s, k), k;
  }
  function v0(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), x = qn(Number(i.u || 0), p), v = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), k = Number(c || 0) * jn, C = Math.cos(k), M = Math.sin(k), E = x / w, H = v / w, Z = E * C + H * M, K = -E * M + H * C;
    return {
      ...i,
      u: ((p + Z) % 1 + 1) % 1,
      v: m + K
    };
  }
  function _0(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const c = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(c.dv || 0)
    }, x = v0(
      m,
      p,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), v = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(v > 1e-6) || !(w > 1e-6)) return null;
    const k = qn(Number(x.u || 0), Number(l.u0 || 0)) / v, C = (Number(x.v || 0) - Number(l.v0 || 0)) / w;
    if (k < 0 || k > 1 || C < 0 || C > 1) return 0;
    const M = y0(i);
    if (!M) return null;
    const E = W(Math.floor(k * M.width), 0, M.width - 1), H = W(Math.floor(C * M.height), 0, M.height - 1);
    return Number(M.alpha[(H * M.width + E) * 4 + 3] || 0);
  }
  function Nf(i, s, l, c = null) {
    if (!(s != null && s.visible) || !$r(l, s.corners)) return !1;
    const p = c || ar(l, performance.now()), m = _0(i, p);
    return m === null ? !0 : m > 8;
  }
  function x0() {
    var c, p, m, x, v, w, k, C;
    const i = ((p = (c = d.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : p.call(c, bl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (x = i == null ? void 0 : i.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : v.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((C = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: l };
  }
  function S0() {
    var H, Z, K;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = $n(), c = `${Ao()}:${l.width}:${l.height}`;
    if (((H = d._activePaintEraserPreviewInfo) == null ? void 0 : H.cacheKey) === c)
      return d._activePaintEraserPreviewInfo.value || null;
    const p = dn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const q = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Ll(q, p.targetSpace, !0);
    }
    const x = za(l.width, l.height, { readback: !0 });
    if (!Uf(x, p, { w: l.width, h: l.height })) return null;
    const v = ((K = (Z = x.ctx) == null ? void 0 : Z.getImageData(0, 0, l.width, l.height)) == null ? void 0 : K.data) || null;
    if (!v) return null;
    let w = l.width, k = l.height, C = -1, M = -1;
    for (let q = 0; q < l.height; q += 1)
      for (let ce = 0; ce < l.width; ce += 1)
        v[(q * l.width + ce) * 4 + 3] <= 8 || (ce < w && (w = ce), q < k && (k = q), ce > C && (C = ce), q > M && (M = q));
    if (C < w || M < k)
      return d._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const E = {
      surface: x,
      bounds: { minX: w, minY: k, maxX: C, maxY: M },
      key: `${c}:${w}:${k}:${C}:${M}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: c, value: E }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function Hi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function w0(i, s, l) {
    var c, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((c = i.item) != null && c.bbox)) {
      const m = i.item.bbox, x = ((p = i.item) == null ? void 0 : p.transform) || {}, v = Number(m.u0 || 0) + Number(x.du || 0), w = Number(m.u1 || 0) + Number(x.du || 0), k = Number(m.v0 || 0) + Number(x.dv || 0), C = Number(m.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - v >= 1 || v < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = nr(i.actionGroupId, "paint"), x = Qr(i.actionGroupId, "paint", m);
      if (!x) return null;
      const v = x.centerUv.u - x.halfW, w = x.centerUv.u + x.halfW, k = x.centerUv.v - x.halfH, C = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - v >= 1 || v < 0 || w > 1
      };
    }
    return null;
  }
  function k0(i, s, l) {
    if (!i || !s) return !1;
    const c = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: l - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], p = c(i), m = c(s);
    return p.some((x) => m.some((v) => !(x.maxX < v.minX || v.maxX < x.minX || x.maxY < v.minY || v.maxY < x.minY)));
  }
  function M0(i, s, l) {
    var Se, ze, Be, nt, xe, se, be;
    if (!i || !s || !((Se = l == null ? void 0 : l.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const c = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (c < 1 || p < 1) return i;
    const m = w0(s, c, p);
    if (m && !k0(m, l.bounds, c)) return i;
    const x = String(((ze = s.item) == null ? void 0 : ze.id) || s.id || ""), v = ((Be = s.item) == null ? void 0 : Be.transform) || {}, w = `${l.key}:${x}:${c}:${p}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, k = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const C = W(Math.floor(Number(((nt = l.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, c - 1)), M = W(Math.floor(Number(((xe = l.bounds) == null ? void 0 : xe.minY) || 0)), 0, Math.max(0, p - 1)), E = W(Math.ceil(Number(((se = l.bounds) == null ? void 0 : se.maxX) || 0)), C, Math.max(0, c - 1)), H = W(Math.ceil(Number(((be = l.bounds) == null ? void 0 : be.maxY) || 0)), M, Math.max(0, p - 1)), Z = Math.max(1, E - C + 1), K = Math.max(1, H - M + 1), q = za(c, p, { readback: !0 });
    q.ctx.clearRect(0, 0, c, p), q.ctx.drawImage(i, 0, 0);
    const ce = q.ctx.getImageData(C, M, Z, K);
    q.ctx.save(), q.ctx.globalCompositeOperation = "destination-out", q.ctx.drawImage(l.surface.canvas, 0, 0), q.ctx.restore();
    const ge = q.ctx.getImageData(C, M, Z, K);
    let ue = !1;
    for (let Fe = 0; Fe < Z * K; Fe += 1) {
      const Re = ce.data[Fe * 4 + 3], De = ge.data[Fe * 4 + 3];
      if (Re > De) {
        ue = !0;
        break;
      }
    }
    return ue ? (k.size > 64 && k.clear(), k.set(w, q.canvas), q.canvas) : (k.set(w, i), i);
  }
  function Pf(i, s = null) {
    const l = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.bbox) || null;
    if (!l || !c) return null;
    const p = Mf(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: x } = x0(), v = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      x,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      Va()
    ].join(":"), k = gt.get(w);
    if (k) return k;
    gt.size > 64 && gt.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = x;
    const M = C.getContext("2d");
    if (!M) return null;
    const E = Number(c.u0 || 0) * m, H = Number(c.v0 || 0) * x, Z = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), K = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * x), q = E + Z * 0.5 + Number(v.du || 0) * m, ce = H + K * 0.5 + Number(v.dv || 0) * x, ge = Number(v.rot_deg || 0) * jn, ue = Math.max(0.01, Number(v.scale || 1));
    for (const Se of [-m, 0, m])
      M.save(), M.translate(q + Se, ce), M.rotate(ge), M.scale(ue, ue), M.drawImage(p, -Z * 0.5, -K * 0.5, Z, K), M.restore();
    return gt.set(w, C), C;
  }
  function N0() {
    return dl(b, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function P0(i) {
    return Wm(
      b,
      (s, l, c) => Il(c || s),
      { scene: i }
    );
  }
  function Af(i, s, l, c, p = "modal_object_view") {
    if (!i || !s || !l) return !1;
    String((l == null ? void 0 : l.mode) || "");
    const m = ni(c);
    if (Of(s, l))
      return R0(
        s,
        l,
        m && d.showPanorama ? c : null,
        `${p}_bg_gl`
      );
    const v = Fo(), w = Ro(v), k = d.showObjects ? La() : Gi([]), M = Qa({
      stateRevision: [
        p,
        m ? ei(c) : "no_bg",
        Array.isArray(w) ? w.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        k.length ? k.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? c : null,
      backgroundRevision: m ? `${p}:${ei(c)}` : "",
      coverageDeg: Qt(b.coverage),
      scene: v,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), E = we;
    if (!E.syncState(M)) return !1;
    const Z = E.renderToTarget(`${p}_direct`, l, {
      width: s.w,
      height: s.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Z ? (i.drawImage(Z, s.x, s.y, s.w, s.h), !0) : !1;
  }
  async function Tl(i, s) {
    const l = await new Promise((v) => i.toBlob(v, "image/png")), c = new FormData();
    c.append("image", l, s), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const p = await mn.fetchApi("/upload/image", { method: "POST", body: c });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), x = String((m == null ? void 0 : m.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Eo = null, Do = !1;
  function A0() {
    const i = bp(b.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = b.painting_layer, l = Ki();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function Cf() {
    const i = String(e.id ?? "0"), s = ss.get(i);
    if (Do && s) return s;
    const l = (async () => {
      var m, x, v, w, k, C, M, E, H, Z, K, q;
      const c = Ki(), p = bp(b.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        b.painting_layer !== null && (b.painting_layer = null, Eo = c, En());
        return;
      }
      if (Eo !== c && !Do) {
        Do = !0;
        try {
          $o();
          const ce = bl(!1), ge = ((x = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : x.call(m, ce)) || null, ue = ((v = ge == null ? void 0 : ge.displayPaint) == null ? void 0 : v.canvas) || null, Se = ((w = ge == null ? void 0 : ge.committedMask) == null ? void 0 : w.canvas) || null, ze = Math.max(1, Number(((k = ge == null ? void 0 : ge.descriptor) == null ? void 0 : k.width) || (ue == null ? void 0 : ue.width) || (Se == null ? void 0 : Se.width) || 2048)), Be = Math.max(1, Number(((C = ge == null ? void 0 : ge.descriptor) == null ? void 0 : C.height) || (ue == null ? void 0 : ue.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!ue && p.totalPaintCount > 0 || !Se && p.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((M = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== ze || Number(((E = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.height) || 0) !== Be) && (d._paintLayerSyncBlankSurface = za(ze, Be)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ze, Be));
          const nt = ue || p.totalPaintCount > 0 && ((H = d._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null, xe = Se || p.totalMaskCount > 0 && ((Z = d._paintLayerSyncBlankSurface) == null ? void 0 : Z.canvas) || null;
          if (!nt && !xe) return;
          let se = null, be = null;
          const Fe = [];
          if (p.totalPaintCount > 0) {
            se = await Tl(nt, `pano_paint_${i}.png`);
            for (const Re of ce) {
              const De = String(Re || "").trim();
              if (!De) continue;
              const Ye = ((q = (K = d.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : q.call(K, De)) || null;
              if (!Ye) continue;
              const lt = De.replace(/[^a-zA-Z0-9_-]+/g, "_"), Qe = await Tl(Ye, `pano_group_${i}_${lt}.png`);
              Qe && Fe.push({
                id: De,
                actionGroupId: De,
                image: Qe
              });
            }
          }
          p.totalMaskCount > 0 && (be = await Tl(xe, `pano_mask_${i}.png`)), c === Ki() && (b.painting_layer = {
            paint: se,
            mask: be,
            groups: Fe,
            revision: c
          }, Eo = c, En());
        } catch (ce) {
          throw ce;
        } finally {
          Do = !1;
        }
      }
    })();
    return ss.set(i, l), l.finally(() => {
      ss.get(i) === l && ss.delete(i);
    }), l;
  }
  function hi() {
    if (t === "cutout") {
      const v = _f();
      if (v) return v;
      const w = Cu(
        e,
        ["erp_image", "bg_erp"],
        () => ye(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !pc(w) ? w : Au(e, "pano_input_images", Le, () => ye()) || w || null;
    }
    const i = _f();
    if (i) return i;
    const s = Au(e, "pano_input_images", Le, () => ye());
    if (s && !pc(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((v) => String((v == null ? void 0 : v.name) || "")) : [], c = l.includes("erp_image"), p = l.includes("bg_erp");
    let m = [];
    return r && (c || p) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Cu(e, m, () => ye(), `background:${m.join("|")}`) || s || null;
  }
  function ni(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function C0() {
    let i = Pa;
    const s = [];
    if (d.showPanorama) {
      const l = hi();
      i = hc(l, ni);
    }
    if (d.showObjects) {
      const l = Array.isArray(b.stickers) ? b.stickers : [];
      for (const c of l) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const p = Il(c);
        s.push(hc(p, ni));
      }
    }
    return bN({
      presented: ae.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Ui() {
    const i = new Set(
      (b.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(b.assets || {}).forEach((s) => {
      i.has(s) || (delete b.assets[s], Le.delete(s));
    });
  }
  function El(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Dl(i, s = null) {
    const { lon: l, lat: c } = El(i), p = ti();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const x = p.y + (0.5 - c / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: x, z: 1 };
  }
  function Oo(i) {
    const s = Ln(
      Number(i.yaw_deg || 0),
      Number(i.pitch_deg || 0),
      Number(i.rot_deg || i.roll_deg || 0)
    ), l = Math.tan(W(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * jn), c = Math.tan(W(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * jn);
    return {
      centerDir: s.fwd,
      right: s.right,
      up: s.up,
      tanX: l,
      tanY: c
    };
  }
  function ri(i, s, l) {
    return gp(us(us(i.centerDir, cs(i.right, s)), cs(i.up, l)));
  }
  function If(i) {
    const s = Oo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: p }) => ri(s, c * s.tanX, p * s.tanY));
  }
  function Tf(i, s, l) {
    const c = Oo(i), p = (s * 2 - 1) * c.tanX, m = (1 - l * 2) * c.tanY;
    return ri(c, p, m);
  }
  function Ef(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: W((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function I0(i) {
    var w, k, C, M;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), p = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.du) || 0), x = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((E) => Co(Io(E, l, c, p), m, x));
  }
  function T0(i) {
    const s = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, c = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${d.mode}:${Va()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (d.mode === "frame") {
      const m = Ue(), x = m ? Kt(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function E0(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = [
      Vn(i) ? "frame" : _t(i) ? "sticker" : "item",
      s,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Ur(i)
    ].join(":");
    if (d.mode === "frame") {
      const p = Ue(), m = p ? Kt(p) : null;
      return `${c}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function D0() {
    var s;
    const i = String(((s = b.ui_settings) == null ? void 0 : s.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Df() {
    var i;
    return !!Y && !!((i = we == null ? void 0 : we.isSupported) != null && i.call(we));
  }
  function Of(i, s) {
    return !Df() || t !== "stickers" && t !== "cutout" || String((s == null ? void 0 : s.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Fo() {
    return d.showObjects ? N0() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ro(i) {
    return !d.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : P0(i);
  }
  function Ff() {
    var i, s;
    return ((s = (i = d.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function O0() {
    return Ff() ? `${zl()}:mask_display` : "";
  }
  function Gi(i) {
    if (!d.showMask) return i;
    const s = Ff();
    if (!s) return i;
    const l = O0(), c = i.reduce((x, v) => Math.max(x, Number((v == null ? void 0 : v.zIndex) || 0)), -1), p = (Array.isArray(b.stickers) ? b.stickers : []).reduce((x, v) => Math.max(x, Number((v == null ? void 0 : v.z_index) || 0)), -1), m = Math.max(c, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function La() {
    var c, p;
    const i = yl(!0), s = S0(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const x = String(m.actionGroupId || m.id || "");
        if (!x) continue;
        const v = ((p = (c = d.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : p.call(c, x)) || null;
        if (!v) continue;
        l.push({
          id: `paint_group:${x}`,
          source: v,
          revision: `${zl()}:${x}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const x = m.item || null, v = Xt((x == null ? void 0 : x.id) || m.id || "");
        if (!v) continue;
        const w = Pf(x, () => ye());
        if (!w) continue;
        const k = M0(w, m, s), C = (x == null ? void 0 : x.transform) || {};
        l.push({
          id: `raster:${v}`,
          source: k,
          revision: [
            Ki(),
            (s == null ? void 0 : s.key) || "",
            v,
            Number(C.du || 0).toFixed(6),
            Number(C.dv || 0).toFixed(6),
            Number(C.rot_deg || 0).toFixed(3),
            Number(C.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (x == null ? void 0 : x.visible) !== !1
        });
      }
    }
    return Gi(l);
  }
  function F0(i, s = "modal_bg_gl") {
    const l = Fo(), c = Ro(l), p = ni(i), m = p ? ei(i) : "none", x = d.showObjects ? La() : Gi([]), v = null, w = [
      s,
      m,
      Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      x.length ? x.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Qa({
        stateRevision: w,
        backgroundSource: p ? i : null,
        backgroundRevision: p ? `${s}:${m}` : "",
        coverageDeg: Qt(b.coverage),
        scene: l,
        textures: c,
        paintSource: v,
        paintRevision: "",
        rasterEntries: x,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: p || c.length > 0 || x.length > 0
    };
  }
  function Ol() {
    if (!Y) return;
    const i = Y.getContext("webgl2");
    if (i)
      i.viewport(0, 0, Y.width, Y.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const s = Y.getContext("2d");
      s && (s.clearRect(0, 0, Y.width, Y.height), s.fillStyle = "#070707", s.fillRect(0, 0, Y.width, Y.height));
    }
    ae.backgroundWasVisible = !1, ae.backgroundDirty = !1;
  }
  function R0(i, s, l, c = "modal_bg_gl") {
    var k;
    if (!Of(i, s)) return !1;
    if (!ae.backgroundDirty && ae.backgroundWasVisible) return !0;
    const { descriptor: p, hasContent: m } = F0(l, c);
    if (!m || !we.syncState(p))
      return Ol(), !1;
    const v = we.renderToTarget("modal_pano", s, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = Y == null ? void 0 : Y.getContext) == null ? void 0 : k.call(Y, "2d");
    return !v || !w ? (Ol(), !1) : (w.clearRect(0, 0, Y.width, Y.height), w.drawImage(v, 0, 0, Y.width, Y.height), ae.backgroundWasVisible = !0, ae.backgroundDirty = !1, !0);
  }
  function L0() {
    return (d.showObjects ? La() : Gi([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function z0() {
    if (!ae.backgroundDirty && ae.backgroundWasVisible) return;
    const i = hi(), s = L0(), l = new Map((b.stickers || []).map((E) => [String((E == null ? void 0 : E.id) || ""), E])), c = (E) => {
      const H = Il(l.get(E.id));
      return H ? { media: H, revision: ei(H) } : null;
    }, p = { ...b.assets };
    for (const E of b.stickers || []) {
      const H = String((E == null ? void 0 : E.asset_id) || "");
      H && !p[H] && Le.has(H) && (p[H] = { type: "comfy_image", filename: H });
    }
    const m = JSON.stringify([b.stickers, Object.keys(p)]);
    at.key !== m && (at = { key: m, sceneState: Um({ ...b, assets: p, painting: null }) });
    const x = d.showObjects ? Jw(at.sceneState, 0, {
      media: c,
      zIndex: (E) => {
        var H;
        return Number(((H = l.get(E.id)) == null ? void 0 : H.z_index) || 0);
      },
      paintLayers: s
    }) : s.map((E) => ({ kind: "erp", ...E })), v = d.showPanorama && ni(i) ? { media: i, revision: ei(i), coverage: Qt(b.coverage) } : null, w = Y.width, k = Y.height, C = Et.render({
      width: w,
      height: k,
      camera: Xw({ yaw_deg: d.viewYaw, pitch_deg: d.viewPitch, roll_deg: 0, hFOV_deg: d.viewFov }, w, k),
      background: v,
      layers: x
    }), M = Y.getContext("2d");
    M.clearRect(0, 0, w, k), !v && !x.length ? (M.fillStyle = "#070707", M.fillRect(0, 0, w, k)) : C && M.drawImage(C, 0, 0, w, k), ae.backgroundWasVisible = !!C, ae.backgroundDirty = !1;
  }
  function V0(i = !1) {
    const s = I.width, l = I.height, c = ti();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || (A.fillStyle = "#070707", A.fillRect(0, 0, s, l), A.fillStyle = "#070707", A.fillRect(c.x, c.y, c.w, c.h)), $o(), Af(
      A,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      hi(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const x = c.x + c.w * m / 16;
        A.beginPath(), A.moveTo(x, c.y), A.lineTo(x, c.y + c.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const x = c.y + c.h * m / 8;
        A.beginPath(), A.moveTo(c.x, x), A.lineTo(c.x + c.w, x), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(c.x, c.y + c.h / 2), A.lineTo(c.x + c.w, c.y + c.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const p = c.y + c.h * 0.57;
      A.fillText("Left", c.x + c.w * 0.25, p), A.fillText("Front", c.x + c.w * 0.5, p), A.fillText("Right", c.x + c.w * 0.75, p), A.fillText("Back", c.x + 38, p), A.fillText("Back", c.x + c.w - 38, p);
    }
  }
  function Rf(i, s, l = 1) {
    let c = !1;
    A.strokeStyle = s, A.lineWidth = l, A.beginPath();
    for (const p of i) {
      const m = Ra(p);
      if (!m) {
        c = !1;
        continue;
      }
      c ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), c = !0);
    }
    A.stroke();
  }
  function $0(i = !1) {
    const s = I.width, l = I.height;
    if (i || (tr() || Df() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l))), $o(), tr() ? z0() : Af(
      A,
      { x: 0, y: 0, w: s, h: l },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Qt(b.coverage)
      },
      hi(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let x = -89; x <= 89; x += 4) m.push(Rn(p, x));
        Rf(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let x = -180; x <= 180; x += 4) m.push(Rn(x, p));
        Rf(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", c.forEach((p) => {
        const m = Ra(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function j0(i, s = null, l = null, c = null) {
    if (d.mode === "frame") {
      const p = s || Ue();
      if (!p) return [];
      const m = l || Kt(p);
      return Sb(i, p, m);
    }
    return Gf(i, c);
  }
  function Lo(i, s = null, l = null, c = null, p = null) {
    if (!i) return null;
    if (d.mode === "unwrap") {
      const x = Gf([i], p);
      return x[0] ? { x: x[0].x, y: x[0].y, z: 1 } : null;
    }
    const m = Bi(i);
    return m ? Fr(m, s, l, c) : null;
  }
  function H0(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), c = nr(l, i.layerKind), p = Qr(l, i.layerKind, c), m = (p == null ? void 0 : p.centerUv) || _l(l, i.layerKind, c), x = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], w = d.mode === "frame" ? Ue() : null, k = w ? Kt(w) : null;
    for (const ue of c) {
      const Se = (ue == null ? void 0 : ue.geometry) || null, ze = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Be = j0(ze, w, k, x).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
      if (!Be.length) continue;
      const nt = ii(String((ue == null ? void 0 : ue.toolKind) || "pen")), xe = Dn[nt] || Dn[zr];
      v.push({
        points: Be,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ue == null ? void 0 : ue.size) || 10) * Math.max(0.1, Number((xe == null ? void 0 : xe.sizeScale) ?? 1)) + 10),
        layerKind: String((ue == null ? void 0 : ue.layerKind) || i.layerKind || "paint")
      });
    }
    const C = Lo(m, null, w, k, x);
    if (!C) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, ue), ue;
    }
    const E = Gg(p).map((ue) => Lo(ue, C.x, w, k, x)).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y)).map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) }));
    if (E.length < 4) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, ue), ue;
    }
    const H = (ue, Se) => ({
      x: (Number((ue == null ? void 0 : ue.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((ue == null ? void 0 : ue.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: ue,
      b: Se
    }), Z = H(E[0], E[1]), K = H(E[1], E[2]), q = H(E[2], E[3]), ce = H(E[3], E[0]), ge = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: E,
      edgeMidpoints: [
        { edge: "top", ...Z },
        { edge: "right", ...K },
        { edge: "bottom", ...q },
        { edge: "left", ...ce }
      ],
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: { x: Z.x, y: Z.y - 30 },
      strokePaths: v,
      visible: !0
    };
    return d._strokeGeomCache.set(s, ge), ge;
  }
  function U0(i, s) {
    const l = d.mode === "frame" ? Ue() : null, c = l ? Kt(l) : null, p = Ef(i), m = d.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, x = Lo(p, null, l, c, m), w = I0(i).map((E) => Lo(E, (x == null ? void 0 : x.x) ?? null, l, c, m)).filter((E) => Number.isFinite(E == null ? void 0 : E.x) && Number.isFinite(E == null ? void 0 : E.y));
    if (!Array.isArray(w) || w.length < 4) {
      const E = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(s, E), E;
    }
    const k = w.slice(0, 4).map((E) => ({ x: Number((E == null ? void 0 : E.x) || 0), y: Number((E == null ? void 0 : E.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: k.reduce((E, H) => E + Number(H.x || 0), 0) / k.length,
        y: k.reduce((E, H) => E + Number(H.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return d._strokeGeomCache.set(s, M), M;
  }
  function Fr(i, s = null, l = null, c = null, p = {}) {
    if (d.mode === "frame") {
      const Se = l || Ue(), ze = c || Kt(Se);
      if (!Se || !ze) return null;
      const Be = Se ? $a(Se, i) : null;
      return Be ? {
        x: Number(ze.x || 0) + Number(Be.x || 0) * Number(ze.w || 0),
        y: Number(ze.y || 0) + Number(Be.y || 0) * Number(ze.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return Dl(i, s);
    const { right: m, up: x, fwd: v } = Al(), w = Vr(i, m), k = Vr(i, x), C = Vr(i, v), M = 1e-4;
    if (!Number.isFinite(C) || C <= M && !(p != null && p.clipBehind)) return null;
    const E = Math.max(C, M), H = I.width, Z = I.height, K = d.viewFov * jn, q = 2 * Math.atan(Math.tan(K / 2) * (Z / Math.max(H, 1))), ce = H / 2 / Math.tan(K / 2), ge = Z / 2 / Math.tan(q / 2), ue = Math.max(H, Z) * 2;
    return {
      x: W(H / 2 + w / E * ce, -ue, H + ue),
      y: W(Z / 2 - k / E * ge, -ue, Z + ue),
      z: E,
      rawZ: C,
      clipped: C <= M
    };
  }
  function G0(i, s = []) {
    if (d.mode !== "pano" || _t(i)) return 1;
    const l = s.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return l.length ? $N(0.035, 0.2, Math.min(...l)) : 1;
  }
  function B0(i) {
    const s = Rn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "frame" ? Ue() : null, c = l ? Kt(l) : null, p = d.mode === "pano" && (_t(i) || Vn(i)), m = p ? { clipBehind: !0 } : null, x = Fr(s, null, l, c, m);
    if (!x) return { visible: !1 };
    const v = Oo(i), k = If(i).map((se) => Fr(se, x.x, l, c, m)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
    if (k.length < 4) return { visible: !1 };
    const C = ri(v, 0, v.tanY), M = ri(v, 0, v.tanY + Math.max(v.tanY * 0.43, 0.053)), E = Fr(C, x.x, l, c, m);
    if (!E) return { visible: !1 };
    const H = Fr(M, (E == null ? void 0 : E.x) ?? x.x, l, c, m), Z = ((H == null ? void 0 : H.x) ?? E.x) - E.x, K = ((H == null ? void 0 : H.y) ?? E.y) - E.y, q = Math.hypot(Z, K) || 1, ce = {
      x: E.x + Z / q * 30,
      y: E.y + K / q * 30
    }, ge = Fr(ri(v, 0, v.tanY), x.x, l, c, m), ue = Fr(ri(v, v.tanX, 0), x.x, l, c, m), Se = Fr(ri(v, 0, -v.tanY), x.x, l, c, m), ze = Fr(ri(v, -v.tanX, 0), x.x, l, c, m);
    if (!ge || !ue || !Se || !ze) return { visible: !1 };
    const Be = [
      x,
      ...k,
      E,
      H,
      ge,
      ue,
      Se,
      ze
    ];
    if (p && !Be.some((se) => Number((se == null ? void 0 : se.rawZ) ?? (se == null ? void 0 : se.z)) > 1e-4)) return { visible: !1 };
    const nt = G0(i, Be), xe = [
      {
        edge: "top",
        x: ge.x,
        y: ge.y,
        a: { x: k[0].x, y: k[0].y },
        b: { x: k[1].x, y: k[1].y }
      },
      {
        edge: "right",
        x: ue.x,
        y: ue.y,
        a: { x: k[1].x, y: k[1].y },
        b: { x: k[2].x, y: k[2].y }
      },
      {
        edge: "bottom",
        x: Se.x,
        y: Se.y,
        a: { x: k[2].x, y: k[2].y },
        b: { x: k[3].x, y: k[3].y }
      },
      {
        edge: "left",
        x: ze.x,
        y: ze.y,
        a: { x: k[3].x, y: k[3].y },
        b: { x: k[0].x, y: k[0].y }
      }
    ];
    return {
      center: { x: x.x, y: x.y },
      corners: k.map((se) => ({ x: se.x, y: se.y })),
      edgeMidpoints: xe,
      rotateStemBase: { x: E.x, y: E.y },
      rotateHandle: ce,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: nt,
      visible: !0
    };
  }
  function Zt(i) {
    if (Bt(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = Xg(p, i.layerKind), x = d._strokeGeomCache.get(m);
      return x || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), H0(i, m));
    }
    if (cn(i)) {
      const p = T0(i), m = d._strokeGeomCache.get(p);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), U0(i, p));
    }
    const s = E0(i), l = d._strokeGeomCache.get(s);
    if (l) return l;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const c = B0(i);
    return d._strokeGeomCache.set(s, c), c;
  }
  function zo(i, s, l, c = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const x = m / l;
      let v = 0, w = 0;
      s === 0 ? (v = x, w = 0) : s === 1 ? (v = 1, w = x) : s === 2 ? (v = 1 - x, w = 1) : (v = 0, w = 1 - x);
      const k = Tf(i, v, w), C = d.mode === "unwrap" ? Dl(k, c) : Ra(k);
      C && p.push(C);
    }
    return p;
  }
  function K0(i, s) {
    const l = Rn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = d.mode === "unwrap" ? Dl(l) : null, p = c ? c.x : null, m = d.mode === "pano" ? 28 : 20, x = [
      zo(i, 0, m, p),
      zo(i, 1, m, p),
      zo(i, 2, m, p),
      zo(i, 3, m, p)
    ];
    fg(A, x, { selected: s });
  }
  function W0() {
    const i = [...Array.isArray(b.shots) ? b.shots : []], s = [...Array.isArray(b.stickers) ? b.stickers : []].sort((l, c) => Number(l.z_index || 0) - Number(c.z_index || 0));
    return [...i, ...s];
  }
  function Fl() {
    const i = [...Array.isArray(b.shots) ? b.shots : []];
    return [...[...Array.isArray(b.stickers) ? b.stickers : []].sort((l, c) => Number(c.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function Vo(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function Lf(i, s, l) {
    const c = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (c.length < 4) return;
    const p = W(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const x = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", v = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = s ? 3.2 : 2.6;
    Vo(A, c), A.fillStyle = v, A.fill(), A.strokeStyle = x, A.lineWidth = w, A.stroke(), A.save(), A.strokeStyle = x, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, M = s ? 12 : 9;
    k.forEach((E) => {
      const Z = k.find((ge) => (ge == null ? void 0 : ge.edge) === C[E == null ? void 0 : E.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, K = Z.x - E.x, q = Z.y - E.y, ce = Math.hypot(K, q) || 1;
      A.beginPath(), A.moveTo(E.x, E.y), A.lineTo(E.x + K / ce * M, E.y + q / ce * M), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function Y0(i, s, l, c) {
    const p = W(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (Vn(i)) {
      Lf(s, l, c);
      return;
    }
    if (_t(i)) {
      const x = A.globalAlpha;
      A.globalAlpha = x * n0(i) * p, d.mode === "frame" ? (A.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = l ? 2 : 1, Vo(A, s.corners), A.stroke()) : K0(i, l), A.globalAlpha = x;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Vo(A, s.corners), A.fill(), A.strokeStyle = l ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = l ? 2.8 : 1.9, Vo(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function zf(i, s, l) {
    if (_t(i)) {
      dg(A, s, { accent: l });
      return;
    }
    A.fillStyle = l, s.corners.forEach((c) => {
      A.beginPath(), A.arc(c.x, c.y, 6.5, 0, Math.PI * 2), A.fill();
    }), Vn(i) && (A.strokeStyle = l, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((c) => {
      var C, M, E, H;
      const p = (((C = c.b) == null ? void 0 : C.x) ?? c.x) - (((M = c.a) == null ? void 0 : M.x) ?? c.x), m = (((E = c.b) == null ? void 0 : E.y) ?? c.y) - (((H = c.a) == null ? void 0 : H.y) ?? c.y), x = Math.hypot(p, m) || 1, v = p / x, w = m / x, k = 10;
      A.beginPath(), A.moveTo(c.x - v * k, c.y - w * k), A.lineTo(c.x + v * k, c.y + w * k), A.stroke();
    }), A.lineCap = "butt"), Bt(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = l, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function q0() {
    var v;
    const [i, s] = D0(), l = d.mode === "frame" ? [] : rr(), c = l.length > 1, p = t === "cutout" ? W0() : Er(), m = p.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${Vn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== p || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: p,
      orderKey: m,
      sorted: [...p]
    });
    const x = d._sortedItemsCache.sorted;
    for (const w of x) {
      const k = d.mode !== "frame" && !c && pf(w);
      if (d.mode === "frame" && !k || !d.showObjects && !Vn(w)) continue;
      const C = _t(w), M = Vn(w), E = wn(w);
      if (!C && !M)
        continue;
      const H = Zt(w);
      if (t !== "stickers" && !H.visible)
        continue;
      const Z = W(Number((H == null ? void 0 : H.visibilityAlpha) ?? 1), 0, 1);
      if (Z <= 0.01) continue;
      const K = M && t === "cutout" && d.mode === "pano" ? W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= K, Y0(w, H, k, E), k && H.visible) {
        const q = E ? "#ff4d4f" : C && Jt(w) ? "#f59e0b" : "#0070f3", ce = A.globalAlpha;
        A.globalAlpha = ce * Z, zf(w, H, q), A.globalAlpha = ce;
      }
      A.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !Ue() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const w = d.cutoutPanoFrameVisual, k = W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= k, Lf(w.geom, w.selected, w.locked), w.selected && zf(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (c) {
      const w = xl(l);
      if (w != null && w.visible) {
        const k = Sl(l) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let C = 1; C < w.corners.length; C += 1) A.lineTo(w.corners[C].x, w.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      l.forEach((w) => {
        if (!Bt(w) && !cn(w)) return;
        const k = Zt(w);
        if (!(k != null && k.visible)) return;
        const C = wn(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(k.corners[0].x, k.corners[0].y);
        for (let M = 1; M < k.corners.length; M += 1) A.lineTo(k.corners[M].x, k.corners[M].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, k.corners.forEach((M) => {
          A.beginPath(), A.arc(M.x, M.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((v = d.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const w = sd(d.interaction.start, d.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    d.hqFrames && i >= 40 && s >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ye());
  }
  function X0(i) {
    const s = kr(i), l = W(Number((s == null ? void 0 : s.aspect) || 1), 0.05, 20), c = 320;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function Vf(i, s = !1) {
    const l = W(Ci(i), 0.05, 20), c = s ? 320 : 220;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function J0(i) {
    if (!sn || !i) return !1;
    const s = sn.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || sn.clientWidth || 0)), c = Math.round(Number(s.clientHeight || sn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(c - Number(i.height || 0)) <= 1;
  }
  function Z0() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function Q0(i, s = {}) {
    if (!i) return "";
    const l = hi(), c = l && ni(l) ? ei(l) : "no_bg", p = X0(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      zl(),
      Z0(),
      Ao(),
      c,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${p.width}x${p.height}`,
      String(s.quality || "balanced")
    ].join("|");
  }
  function eb() {
    var E, H, Z, K;
    if (d.outputPreviewRect = null, P.outputPreviewToggle.visible = d.mode !== "frame" && !!Ue(), t !== "cutout" || !P.cameraPreview) return;
    if (d.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const i = Ue();
    if (!i) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (E = Ce == null ? void 0 : Ce.clearScene) == null || E.call(Ce), (H = Oe == null ? void 0 : Oe.requestRender) == null || H.call(Oe);
      return;
    }
    P.cameraPreview.visible = !0;
    const s = hi();
    if (!i || !Ce || !Oe) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (Z = Ce == null ? void 0 : Ce.clearScene) == null || Z.call(Ce), (K = Oe == null ? void 0 : Oe.requestRender) == null || K.call(Oe);
      return;
    }
    const l = Vf(i, !!d.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const c = Fo(), p = Ro(c), m = ni(s), x = m ? ei(s) : "none", v = d.showObjects ? La() : Gi([]), w = Qa({
      stateRevision: [
        "cutout_preview_camera",
        x,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((q) => String((q == null ? void 0 : q.id) || "")).join(",") : "none",
        Array.isArray(p) ? p.map((q) => `${String((q == null ? void 0 : q.assetId) || "")}:${String((q == null ? void 0 : q.revision) || "")}`).join(",") : "none",
        v.length ? v.map((q) => `${String((q == null ? void 0 : q.id) || "")}:${String((q == null ? void 0 : q.revision) || "")}:${Number((q == null ? void 0 : q.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Qt(b.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? s : null,
      backgroundRevision: m ? `cutout_preview:${x}` : "",
      coverageDeg: Qt(b.coverage),
      scene: c,
      textures: p,
      rasterEntries: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || p.length > 0 || v.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, Ce.clearScene(), Oe.requestRender();
      return;
    }
    if (d.showPanorama && !m && p.length === 0 && v.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = s ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, Ce.clearScene(), Oe.requestRender();
      return;
    }
    Ce.syncScene(w), Oe.setView(kr(i));
    const C = J0(l), M = C ? Oe.present() : !1;
    C || Oe.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = C && M ? "" : "Loading preview", P.cameraPreview.settled = C && M && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame;
  }
  function tb(i, s, l, c = {}) {
    if (!Ce || !l) return !1;
    const p = hi(), m = Fo(), x = Ro(m), v = ni(p), w = d.showObjects ? La() : Gi([]);
    return v || x.length > 0 || w.length > 0 ? (Ce.syncScene(Qa({
      stateRevision: Q0(l, c),
      backgroundSource: v && d.showPanorama ? p : null,
      backgroundRevision: v ? `cutout_frame:${ei(p)}` : "",
      coverageDeg: Qt(b.coverage),
      scene: m,
      textures: x,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Ce.renderShotToContext(i, s, l, c)) : !1;
  }
  function Rl(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), c = Number(s.y || 0);
    return Tf(i, l, c);
  }
  function Bi(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, c = Math.cos(l);
    return pl(c * Math.sin(s), Math.sin(l), c * Math.cos(s));
  }
  function nb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function rb(i, s, l, c = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: fn(i, "widthScale", 1),
      pressureLike: fn(i, "pressureLike", 1)
    }, ...c, u: s, v: l };
  }
  function ib(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Ll(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const c = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (c) {
      let K = null;
      i.forEach((q) => {
        const ce = Number((q == null ? void 0 : q.u) || 0), ge = Number((q == null ? void 0 : q.v) || 0), ue = (ce % 1 + 1) % 1, Se = K == null ? ue : K + qn(ue, (K % 1 + 1) % 1);
        p.set(q, { x: Se, y: ge }), K = Se;
      });
    }
    const m = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : p.get(K) || nb(K), x = (K, q, ce, ge = {}) => {
      const ue = c ? (Number(q) % 1 + 1) % 1 : Number(q), Se = rb(K, ue, ce, ge);
      return p.set(Se, { x: Number(q), y: Number(ce) }), Se;
    }, v = (K, q, ce) => {
      const ge = m(K), ue = m(q);
      return x(K, Jn(ge.x, ue.x, ce), Jn(ge.y, ue.y, ce), {
        t: Jn(Number((K == null ? void 0 : K.t) || 0), Number((q == null ? void 0 : q.t) || 0), ce),
        widthScale: Jn(fn(K, "widthScale", 1), fn(q, "widthScale", 1), ce),
        pressureLike: Jn(fn(K, "pressureLike", 1), fn(q, "pressureLike", 1), ce)
      });
    };
    if (i.length === 1) {
      const K = m(i[0]);
      return [x(i[0], K.x, K.y)];
    }
    const w = ib(s, l), k = (K, q) => {
      const ce = [0];
      for (let se = 1; se < K.length; se += 1) {
        const be = m(K[se - 1]), Fe = m(K[se]);
        ce.push(ce[se - 1] + Math.hypot(Fe.x - be.x, Fe.y - be.y));
      }
      const ge = ce[ce.length - 1] || 0;
      if (ge <= 1e-8) {
        const se = K[0], be = m(se);
        return [x(se, be.x, be.y)];
      }
      const ue = [];
      let Se = 0;
      for (let se = 0; se <= ge + 1e-9; se += q) {
        for (; Se < ce.length - 2 && ce[Se + 1] < se; ) Se += 1;
        const be = ce[Se], Fe = ce[Se + 1], Re = Math.max(1e-8, Fe - be);
        ue.push(v(K[Se], K[Se + 1], W((se - be) / Re, 0, 1)));
      }
      const ze = K[K.length - 1], Be = m(ze), nt = ue[ue.length - 1], xe = nt ? m(nt) : null;
      return (!xe || Math.hypot(xe.x - Be.x, xe.y - Be.y) > q * 0.35) && ue.push(x(ze, Be.x, Be.y)), ue;
    }, C = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const q = m(K[0]), ce = [x(K[0], q.x, q.y)];
      for (let Se = 0; Se < K.length - 1; Se += 1) {
        const ze = K[Se], Be = K[Se + 1], nt = m(ze), xe = m(Be), se = x(
          ze,
          nt.x * 0.75 + xe.x * 0.25,
          nt.y * 0.75 + xe.y * 0.25,
          {
            t: Number(ze.t || 0) * 0.75 + Number(Be.t || 0) * 0.25,
            widthScale: fn(ze, "widthScale", 1) * 0.75 + fn(Be, "widthScale", 1) * 0.25,
            pressureLike: fn(ze, "pressureLike", 1) * 0.75 + fn(Be, "pressureLike", 1) * 0.25
          }
        ), be = x(
          ze,
          nt.x * 0.25 + xe.x * 0.75,
          nt.y * 0.25 + xe.y * 0.75,
          {
            t: Number(ze.t || 0) * 0.25 + Number(Be.t || 0) * 0.75,
            widthScale: fn(ze, "widthScale", 1) * 0.25 + fn(Be, "widthScale", 1) * 0.75,
            pressureLike: fn(ze, "pressureLike", 1) * 0.25 + fn(Be, "pressureLike", 1) * 0.75
          }
        );
        ce.push(se, be);
      }
      const ge = K[K.length - 1], ue = m(ge);
      return ce.push(x(ge, ue.x, ue.y)), ce;
    }, M = k(i, w);
    if (M.length < 3) return M;
    const E = l ? 2 : 1;
    let H = M.slice();
    for (let K = 0; K < E; K += 1) H = C(H);
    return k(H, Math.max(w * 0.75, 55e-5));
  }
  function fn(i, s, l = 1) {
    const c = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(c) ? Math.max(0, c) : l;
  }
  function ab(i) {
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
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(s));
    const p = c.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, c.width, c.height), p.imageSmoothingEnabled = !0), { canvas: c, ctx: p };
  }
  function Va() {
    const i = jo();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ki() {
    const i = jo();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function zl() {
    const i = Ao(), s = Ki();
    return i ? `${s}:${i}` : s;
  }
  function ob() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function sb() {
    d.paintCompositeRevision += 1;
  }
  function lb() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function $f() {
    var i, s;
    d.paintEngineRevisionKey = null, (s = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, b), d.paintEngineRevisionKey = Va();
  }
  function jf() {
    b.painting_layer !== null && (b.painting_layer = null), Eo = "";
  }
  function rn() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, lb(), ae.backgroundDirty = !0, ae.dirty = !0;
  }
  function ir({ rebuildPaintEngine: i = !1 } = {}) {
    jf(), ob(), rn(), i && $f();
  }
  function Wi() {
    jf(), sb(), rn();
  }
  function $o() {
    var c;
    const i = jo(), s = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== s && (d.paintEngine = Bu(i), d.paintEngineDescriptorKey = s, d.paintEngineRevisionKey = "");
    const l = Va();
    d.paintEngineRevisionKey !== l && (d.paintEngineRevisionKey = l, (c = d.paintEngine) == null || c.rebuildCommitted(b));
  }
  function jo() {
    const i = Math.max(1, N(Number((b == null ? void 0 : b.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function $n() {
    return jo();
  }
  function ub(i, s, l, c, p = null) {
    const m = ab(i), x = fn(s, "widthScale", 1) * fn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * x) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * jn) * l * x) : Math.max(0.5, m.value / (2 * Math.PI) * l * x) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * x);
  }
  function cb(i, s, l = {}) {
    const c = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, x = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * x : 1, c === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${w})`;
  }
  function fb(i, s, l) {
    const c = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(c) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), c, 0, Math.PI * 2), i.fill());
  }
  function db(i, s, l, c, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    i.save(), cb(i, l, p);
    const x = (v) => fb(i, v, m);
    if (s.length === 1) {
      x(s[0]), i.restore();
      return;
    }
    for (let v = 0; v < s.length - 1; v += 1) {
      const w = s[v], k = s[v + 1];
      if (!w || !k) continue;
      const C = Number(w.x || 0), M = Number(w.y || 0), E = Number(k.x || 0), H = Number(k.y || 0), Z = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(H) || !Number.isFinite(Z) || !Number.isFinite(K)) continue;
      const q = E - C, ce = H - M, ge = Math.hypot(q, ce);
      if (!Number.isFinite(ge) || ge < 1e-6) {
        x(w);
        continue;
      }
      if (ge > Math.max(c.w, c.h) * 0.5) continue;
      const ue = Math.max(0.5, Math.min(Z, K)), Se = Math.max(0.35, Math.min(ue * 0.4, 2.25)), ze = Math.max(1, Math.ceil(ge / Se));
      for (let Be = 0; Be <= ze; Be += 1) {
        const nt = Be / ze;
        x({
          x: Jn(C, E, nt),
          y: Jn(M, H, nt),
          radiusPx: Jn(Z, K, nt)
        });
      }
    }
    x(s[s.length - 1]), i.restore();
  }
  function hb(i, s, l, c) {
    db(i, s, l, c, { preview: !1 });
  }
  function pb(i, s, l, c, p) {
    var v, w, k, C;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", x = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = s[0]) == null ? void 0 : v[m]) || 0) * c.w, Number(((w = s[0]) == null ? void 0 : w[x]) || 0) * c.h);
    for (let M = 1; M < s.length; M += 1)
      i.lineTo(Number(((k = s[M]) == null ? void 0 : k[m]) || 0) * c.w, Number(((C = s[M]) == null ? void 0 : C[x]) || 0) * c.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Hf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function mb(i, s) {
    const l = Hf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: ub(i, c, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Uf(i, s, l = null) {
    var v, w, k, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const c = l || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return pb(i.ctx, Hf(p), p, c), !0;
    const x = mb(p, c);
    return x.length ? (hb(i.ctx, x, p, c), !0) : !1;
  }
  function gb(i, s, l, c = 8) {
    const p = new Uint8Array(s * l), m = [], x = new Int32Array(s * l), v = new Int32Array(s * l);
    for (let w = 0; w < l; w += 1)
      for (let k = 0; k < s; k += 1) {
        const C = w * s + k;
        if (p[C] || i[C] <= c) continue;
        let M = 0, E = 0;
        x[E] = k, v[E] = w, E += 1, p[C] = 1;
        const H = [];
        let Z = k, K = w, q = k, ce = w;
        for (; M < E; ) {
          const ge = x[M], ue = v[M];
          M += 1, H.push({ x: ge, y: ue }), ge < Z && (Z = ge), ue < K && (K = ue), ge > q && (q = ge), ue > ce && (ce = ue);
          const Se = [
            [(ge - 1 + s) % s, ue],
            [(ge + 1) % s, ue],
            [ge, ue - 1],
            [ge, ue + 1]
          ];
          for (const [ze, Be] of Se) {
            if (Be < 0 || Be >= l) continue;
            const nt = Be * s + ze;
            p[nt] || i[nt] <= c || (p[nt] = 1, x[E] = ze, v[E] = Be, E += 1);
          }
        }
        m.push({ pixels: H, minX: Z, minY: K, maxX: q, maxY: ce });
      }
    return m;
  }
  function bb(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, k) => w - k);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let c = -1, p = 0;
    for (let w = 0; w < l.length; w += 1) {
      const k = l[w], M = (w === l.length - 1 ? l[0] + s : l[w + 1]) - k - 1;
      M > c && (c = M, p = w);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let x = 1 / 0, v = -1 / 0;
    for (const w of l) {
      const k = (w - m + s) % s;
      x = Math.min(x, k), v = Math.max(v, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - x + 1)
    };
  }
  function yb(i, s, l = {}) {
    var k;
    const c = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || c < 1 || p < 1) return [];
    const x = m.getImageData(0, 0, c, p), v = new Uint8Array(c * p);
    for (let C = 0; C < v.length; C += 1) v[C] = x.data[C * 4 + 3];
    return gb(v, c, p, 8).map((C, M) => {
      const E = bb(C, c);
      if (!E) return null;
      const H = Number(E.widthPx || 0), Z = C.maxY - C.minY + 1, K = Number(E.startX || 0), q = document.createElement("canvas");
      q.width = H, q.height = Z;
      const ce = q.getContext("2d");
      if (!ce) return null;
      const ge = ce.createImageData(H, Z);
      return C.pixels.forEach(({ x: ue, y: Se }) => {
        const ze = (Se * c + ue) * 4, Be = (Number(ue || 0) - K + c) % c, nt = ((Se - C.minY) * H + Be) * 4;
        ge.data[nt + 0] = x.data[ze + 0], ge.data[nt + 1] = x.data[ze + 1], ge.data[nt + 2] = x.data[ze + 2], ge.data[nt + 3] = x.data[ze + 3];
      }), ce.putImageData(ge, 0, 0), {
        id: ia("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + M * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / p,
          u1: H / c,
          v1: (C.maxY + 1) / p
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: K / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function $a(i, s) {
    if (!i || !s) return null;
    const l = Oo(i), c = Vr(s, l.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const p = Vr(s, l.right) / c, m = Vr(s, l.up) / c;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function vb(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const l = ti();
      return i.map((c) => ({
        x: l.x + Number(c.u || 0) * l.w,
        y: l.y + Number(c.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Ra(Bi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Gf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const c = ti();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, x = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: c.x + x * c.w,
          y: c.y + Number(p.v || 0) * c.h
        };
      });
    }
    const l = i.map((c) => Ra(Bi(c))).filter(Boolean);
    return l.every((c) => Number(c.z || 0) > 0) ? l.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function _b(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l], p = i[(l + 1) % i.length];
      if (!c || !p || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(c.x), Number(p.y) - Number(c.y)) > s) return !1;
    }
    return !0;
  }
  function xb(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const c = [];
    for (const p of i) {
      const m = Bi(p), x = $a(s, m);
      if (!x) return [];
      c.push({
        x: Number(l.x || 0) + Number(x.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(x.y || 0) * Number(l.h || 0)
      });
    }
    return _b(c, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? c : [];
  }
  function Sb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const c = [];
    for (const p of i) {
      const m = Bi(p), x = $a(s, m);
      x && c.push({
        x: Number(l.x || 0) + Number(x.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(x.y || 0) * Number(l.h || 0)
      });
    }
    return c;
  }
  function wb() {
    var H;
    const i = Ue(), s = Hl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, c = Math.max(1, Number(s.focalPx || 1)), p = l.x + l.w * 0.5, m = l.y + l.h * 0.5, { halfW: x, halfH: v } = Yu(
      { width: I.width, height: I.height },
      c
    ), w = { x: p - x, y: m - v, w: x * 2, h: v * 2 }, k = {
      ...i,
      hFOV_deg: 2 * Math.atan(x / c) * Gr,
      vFOV_deg: 2 * Math.atan(v / c) * Gr
    }, C = kb(l);
    A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, I.width, I.height);
    const M = d.interaction ? "draft" : String(((H = b.ui_settings) == null ? void 0 : H.preview_quality) || "balanced");
    return tb(A, w, k, { quality: M }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(w.x, w.y, w.w, w.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, I.width, I.height), A.roundRect(l.x, l.y, l.w, l.h, C), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = PN, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, C - 1)), A.stroke(), A.restore(), !0;
  }
  function kb(i) {
    const s = Math.max(1e-6, Number(ae.frameCanvasScale || 1));
    return Math.min(_n * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Rr() {
    var s;
    const i = d.mode === "frame" ? Ue() : null;
    P.frameRollKnob.visible = !!i && !r && i.locked !== !0, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = ra(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && d.altModifier === !0;
  }
  function Mb() {
    var w, k;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (d.mode === "frame") {
      const C = Ue(), M = Kt(C);
      l = xb(s, C, M);
    } else
      l = vb(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const c = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), x = Math.round(Number(p.g || 0) * 255), v = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let C = 1; C < l.length; C++) A.lineTo(Number(l[C].x || 0), Number(l[C].y || 0));
    A.closePath(), c ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${x},${v},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Nb() {
    const i = d.frameRollOverlayVisual, s = W(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Kt(i.shot);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * jn, m = Math.hypot(l.w, l.h) * 0.55, x = Math.cos(p) * m, v = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(l.x, l.y, l.w, l.h), A.clip(), A.translate(c.x, c.y), A.rotate(p);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    A.beginPath();
    for (let k = -m; k <= m; k += w)
      A.moveTo(k, -m), A.lineTo(k, m);
    for (let k = -m; k <= m; k += w)
      A.moveTo(-m, k), A.lineTo(m, k);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(c.x - x, c.y - v), A.lineTo(c.x + x, c.y + v), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function Pb() {
    return t !== "cutout" || !Ue() ? 0 : IN;
  }
  function Ab() {
    const i = W(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const s = Ue(), l = s ? Zt(s) : null, c = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((x) => ({ x: Number(x.x || 0), y: Number(x.y || 0) })) : null;
    l != null && l.visible && c && (d.cutoutPanoDimCorners = c), s && (l != null && l.visible) && c && (d.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: pf(s),
      locked: wn(s)
    });
    const p = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? c : p ? d.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, I.width, I.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let x = 1; x < 4; x += 1) A.lineTo(m[x].x, m[x].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function Cb() {
    d.mode === "frame" ? (ae.frameSafeRect = Xb(), wb()) : d.mode === "unwrap" ? V0(!1) : $0(!1), Ab(), t === "cutout" && eb(), q0(), Rr(), Mb(), Nb(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && tt(), ae.hasPresentedFrame || (ae.hasPresentedFrame = !0, Y.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame && d.mode !== "frame");
    const i = C0();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === _r ? (ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", i.detail)) : (ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind"));
  }
  function Ib(i = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Tb() {
    e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = qg();
  }
  function ye(i = {}) {
    var v, w, k, C, M, E, H, Z, K, q;
    const s = !!i.localOnly, l = i.externalSync === !0, c = String(i.cause || ""), p = String(((v = d.interaction) == null ? void 0 : v.kind) || "");
    (!s || p === "view" || p === "pan_frame" || Ib() || !!((w = d.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (ae.backgroundDirty = !0), s && cf() && (d.livePaintInteractionRevision += 1, ae.backgroundDirty = !0), (!s || c === "selection" || c === "mode" || c === "cutout_frame") && (Pl(), Or()), Tb(), l && ((C = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || C.call(k), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((H = (E = e.graph) == null ? void 0 : E.setDirtyCanvas) == null || H.call(E, !0, !0), (q = (K = (Z = lr) == null ? void 0 : Z.canvas) == null ? void 0 : K.setDirty) == null || q.call(K, !0, !0)), ae.dirty = !0;
  }
  function Bf() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return I.width !== s || I.height !== l || Y.width !== s || Y.height !== l ? (I.width = s, I.height = l, Y.width = s, Y.height = l, ae.backgroundDirty = !0, ae.dirty = !0, t === "cutout" && (ae.pendingStableLayoutFrames = Math.max(Number(ae.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Eb(i = performance.now()) {
    var m, x;
    ae.lastTickTs = i;
    const s = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    s != null && s.shot && (d.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = l, d.frameRollOverlayStartTs = i), Math.abs(Number(d.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const v = W(
        (i - Number(d.frameRollOverlayStartTs || i)) / TN,
        0,
        1
      );
      d.frameRollOverlayAlpha = Jn(
        Number(d.frameRollOverlayFrom || 0),
        l,
        ls(v)
      ), v >= 1 && (d.frameRollOverlayAlpha = l, l === 0 && (d.frameRollOverlayVisual = null)), ae.dirty = !0;
    }
    const c = Pb();
    if (Math.abs(c - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = c, d.cutoutPanoDimStartTs = i), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const v = W(
        (i - Number(d.cutoutPanoDimStartTs || i)) / pp,
        0,
        1
      );
      d.cutoutPanoDimAlpha = Jn(
        Number(d.cutoutPanoDimFrom || 0),
        c,
        ls(v)
      ), v >= 1 && (d.cutoutPanoDimAlpha = c), v >= 1 && c === 0 && (d.cutoutPanoDimCorners = null), ae.dirty = !0;
    }
    const p = t === "cutout" && Ue() ? 1 : 0;
    if (Math.abs(p - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = p, d.cutoutPanoFrameStartTs = i), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const v = W(
        (i - Number(d.cutoutPanoFrameStartTs || i)) / pp,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = Jn(
        Number(d.cutoutPanoFrameFrom || 0),
        p,
        ls(v)
      ), v >= 1 && (d.cutoutPanoFrameAlpha = p, p === 0 && (d.cutoutPanoFrameVisual = null)), ae.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const v = Math.max(1, Number(d.outputPreviewAnimDurationMs)), w = W((i - Number(d.outputPreviewAnimStartTs || 0)) / v, 0, 1), C = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? VN(w) : UN(w);
      d.outputPreviewAnim = Jn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, C), ae.dirty = !0, w >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((x = d.viewTween) != null && x.active) {
      const v = d.viewTween, w = W((i - v.startTs) / v.durationMs, 0, 1), k = ls(w);
      d.viewYaw = Ht(v.startYaw + v.deltaYaw * k), d.viewPitch = v.startPitch + (v.targetPitch - v.startPitch) * k, d.viewFov = v.startFov + (v.targetFov - v.startFov) * k, ae.backgroundDirty = !0, ae.dirty = !0, w >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(an.state.inertia.vx || 0), d.viewInertia.vy = Number(an.state.inertia.vy || 0), d.viewInertia.active = !!an.state.inertia.active, an.stepInertia(i) && (d.viewInertia.vx = Number(an.state.inertia.vx || 0), d.viewInertia.vy = Number(an.state.inertia.vy || 0), d.viewInertia.active = !!an.state.inertia.active, ae.backgroundDirty = !0, ae.dirty = !0), (ae.dirty || i - ae.lastSizeCheckTs >= 220) && (Bf(), ae.lastSizeCheckTs = i), ae.pendingStableLayoutFrames > 0 && (ae.pendingStableLayoutFrames -= 1, ae.dirty = !0), ae.dirty) {
      if (ae.pendingStableLayoutFrames > 0)
        return;
      ae.dirty = !1, Cb();
    }
  }
  function Kf(i = performance.now()) {
    if (ae.running)
      try {
        Eb(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        ae.tickErrorSignature !== l && (ae.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = wr, P.stageStatusDetail = "frame", ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind");
      } finally {
        ae.running && (ae.rafId = requestAnimationFrame(Kf));
      }
  }
  function Db() {
    ae.running = !1, ae.rafId && cancelAnimationFrame(ae.rafId), ae.rafId = 0;
  }
  function st() {
    r || (d.historyController.commitActionGroup(JSON.stringify(kh(b))), Wl());
  }
  function Vl(i) {
    if (r) return;
    const s = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (Wl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(b).forEach((c) => delete b[c]), Object.assign(b, l), d.selectedId = t === "stickers" || t === "cutout" ? b.active.selected_sticker_id : b.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], ir(), Tn(), Ke(), En(), ye({ cause: "cutout_frame" });
  }
  function Wf() {
    var l, c;
    const i = Array.isArray((l = d.historyController) == null ? void 0 : l.entries) ? d.historyController.entries : [], s = Number((c = d.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Tn() {
    Po();
    const i = ek({
      editor: d,
      swatches: Ps,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: mr,
      colorsApproximatelyEqual: As,
      rgb01ToHsv: Eu,
      hsv01ToRgb: Tu,
      getBrushPresetIdForTool: ii,
      isActiveLassoTool: i0
    });
    if (Object.assign(P.paintDock, i), c0(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    ee && (clearTimeout(ee), ee = 0), z && (!i.colorEnabled && j && !j.hidden && (ee = window.setTimeout(() => {
      j.hidden = !0, P.paintDock.colorPopOpen = !1, ee = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), _e && (_e.style.left = i.pickerSvLeft, _e.style.top = i.pickerSvTop), D && (D.style.left = i.pickerHueLeft));
  }
  function Yi() {
    const i = t === "cutout" && d.mode === "frame" ? Ue() : Ct();
    i && (d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Ur(i)
    }, Ke());
  }
  function Ke() {
    var Be, nt, xe, se;
    if (a) return;
    b.ui_settings = b.ui_settings || {};
    const i = Qw(b.ui_settings);
    if (o) {
      P.sidePanel = tk({
        coverage: b.coverage,
        uiSettings: i,
        normalizeCoverageValue: Qt
      });
      return;
    }
    const s = Ct(), l = t === "cutout" && d.mode === "frame" ? Ue() : null, c = l || s, p = l ? [l] : rr(), m = l ? "shot" : To();
    p.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Ur(c)
    });
    const x = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), v = m === "stroke" ? null : c, w = v || x, k = !!v && !wn(v);
    d.panelWasEnabled = k, Pl();
    let C = null;
    if (l) {
      const be = wl({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: be.label,
        currentIcon: be.icon || null,
        items: [{
          id: String(l.id || ""),
          label: be.label,
          icon: be.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const be = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Er().forEach((De, Ye) => {
        var on, Pt;
        if (!De) return;
        const lt = Jt(De) ? String(De.id || as) : String(((Pt = (on = b.assets) == null ? void 0 : on[De.asset_id]) == null ? void 0 : Pt.name) || De.asset_id || De.id), Qe = `${Ye + 1}. ${lt}${Jt(De) && zi(De) ? " (hidden)" : ""}`, St = wl({ item: De, label: Qe, kind: "image" });
        be.push({ id: De.id, label: St.label, icon: St.icon, item: De, kind: "image" });
      }) : mf().forEach((De) => {
        if (!(De != null && De.item)) return;
        const Ye = wl(De);
        be.push({ id: De.item.id, label: Ye.label, icon: Ye.icon, item: De.item, kind: De.kind });
      });
      const Fe = (v == null ? void 0 : v.id) || "", Re = be.find((De) => De.id === Fe) || be[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: be.length <= 1,
        currentLabel: Re.label,
        currentIcon: Re.icon || null,
        items: be.map((De) => ({
          id: De.id,
          label: De.label,
          icon: De.icon || null,
          active: De.id === Fe
        }))
      };
    }
    const M = [], E = (be, Fe, Re, De, Ye) => {
      const lt = W(Number(w[be] || 0), Re, De);
      M.push({
        key: be,
        label: Fe,
        min: Re,
        max: De,
        step: Ye,
        value: lt,
        displayValue: ra(lt),
        fillPct: W((lt - Re) / Math.max(1e-6, De - Re) * 100, 0, 100),
        enabled: k && !r
      });
    }, H = [];
    p.length > 1 ? (H.push(`Selected objects: ${p.length}`), H.push("Multi-selection supports z-order and delete.")) : (E("yaw_deg", "Yaw", -180, 180, 0.1), E("pitch_deg", "Pitch", -90, 90, 0.1), E("hFOV_deg", "H FOV", 1, 179, 0.1), E("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? E("rot_deg", "Rotation", -180, 180, 0.1) : E("roll_deg", "Roll", -180, 180, 0.1));
    const Z = Array.isArray((nt = (Be = b == null ? void 0 : b.painting) == null ? void 0 : Be.paint) == null ? void 0 : nt.strokes) ? b.painting.paint.strokes.length : 0, K = Array.isArray((se = (xe = b == null ? void 0 : b.painting) == null ? void 0 : xe.mask) == null ? void 0 : se.strokes) ? b.painting.mask.strokes.length : 0, q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], ce = zN(
      e,
      q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ge = !!String((ce == null ? void 0 : ce.src) || "").trim() || bf("pano_input_images").length > 0, ue = Array.isArray(Er()) && Er().length > 0 || Z > 0, Se = K > 0, ze = [
      { key: "mask", label: "Mask", icon: Ee.circle_dashed_tool, visible: !!d.showMask, enabled: Se },
      { key: "objects", label: "Paint / Images", icon: Ee.image, visible: !!d.showObjects, enabled: ue },
      { key: "panorama", label: "Panorama", icon: Ee.globe, visible: !!d.showPanorama, enabled: ge }
    ].map((be) => ({
      ...be,
      ariaLabel: `Toggle ${be.label.toLowerCase()}`,
      tip: be.visible ? "Hide" : "Show"
    }));
    P.sidePanel = nk({
      coverage: b.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: k,
      selectedKind: m,
      selectedItems: p,
      params: M,
      notes: H,
      visibilityRows: ze,
      uiSettings: i,
      normalizeCoverageValue: Qt
    });
  }
  async function Yf(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Nr(i)) return;
    const s = ps("asset"), l = tc(e, `add:${s}`, async () => {
      try {
        const { image: c } = await nc(i);
        Le.set(s, c);
        const p = ps("st");
        b.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ji(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
          rot_deg: 0,
          z_index: gf()
        }), Li(b.stickers[b.stickers.length - 1]), jl(), Ke(), tt(), ye();
        const m = await Ms(i, {
          fetchApi: (w, k) => mn.fetchApi(w, k)
        });
        if (!(Array.isArray(b.stickers) ? b.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === s).length) return;
        b.assets[s] = m, Ui(), st(), ut(), Ke(), tt(), ye();
      } catch (c) {
        delete b.assets[s], Le.delete(s);
        const p = Array.isArray(b.stickers) ? b.stickers : [], m = p.filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s);
        throw m.length && (b.stickers = p.filter((x) => String((x == null ? void 0 : x.asset_id) || "") !== s), m.some((x) => String((x == null ? void 0 : x.id) || "") === String(d.selectedId || "")) && Li(null), Ke(), tt(), ye(), ut()), c;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Ob() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add");
  }
  async function Fb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Ct();
    if (!s || !_t(s) || Jt(s) || !Nr(i)) return;
    const l = String(s.id || ""), c = ps("asset"), p = tc(e, `replace:${l}:${c}`, async () => {
      var C;
      const m = (Array.isArray(b.stickers) ? b.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === l) || null;
      if (!m || !_t(m) || Jt(m)) return;
      const x = String(m.asset_id || ""), v = x ? dn(((C = b.assets) == null ? void 0 : C[x]) || null) : null, w = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: M } = await nc(i);
        Le.set(c, M), m.asset_id = c, m.vFOV_deg = ji(
          Number(m.hFOV_deg || 30),
          Number(M.naturalWidth || M.width || 1),
          Number(M.naturalHeight || M.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, rn(), Ke(), tt(), ye();
        const E = await Ms(i, {
          fetchApi: (Z, K) => mn.fetchApi(Z, K)
        }), H = (Array.isArray(b.stickers) ? b.stickers : []).find((Z) => String((Z == null ? void 0 : Z.id) || "") === l) || null;
        if (!H || String(H.asset_id || "") !== c) return;
        b.assets[c] = E, Ui(), st(), ut(), Ke(), tt(), ye();
      } catch (M) {
        delete b.assets[c], Le.delete(c);
        const E = (Array.isArray(b.stickers) ? b.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        throw E && String(E.asset_id || "") === c && (x && v && (b.assets[x] = v), E.asset_id = x, E.vFOV_deg = w, E.crop = k ? { ...k } : null), rn(), ut(), Ke(), tt(), ye(), M;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Rb() {
    var s;
    if (r) return;
    const i = Ct();
    !i || !_t(i) || Jt(i) || (s = U == null ? void 0 : U.openImagePicker) == null || s.call(U, "replace");
  }
  async function Lb() {
    if (r || t !== "stickers") return;
    const i = b.assets && typeof b.assets == "object" ? b.assets : {}, s = Object.entries(i).filter(([, c]) => {
      const p = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [c, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const x = await fetch(m).then((M) => M.blob()), v = String(x.type || "image/png").split("/")[1] || "png", w = String((p == null ? void 0 : p.name) || `${c}.${v}`), k = new File([x], w, { type: x.type || "image/png" }), C = await Ms(k, {
          fetchApi: (M, E) => mn.fetchApi(M, E)
        });
        b.assets[c] = {
          ...C,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ut(), ye());
  }
  function zb() {
    if (r || t !== "cutout") return;
    const i = Ue();
    if (i) {
      Li(i), d.mode = "pano", ml(
        Ht(Number(i.yaw_deg || 0)),
        W(Number(i.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), tt(), ye({ cause: "cutout_frame" });
      return;
    }
    const s = Rm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    b.shots = [s], Li(s), jl(), d.mode = "pano", st(), ut(), Ke(), tt(), ye({ cause: "cutout_frame" });
  }
  function Vb() {
    r || t !== "cutout" || (b.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, b.active.selected_shot_id = null, st(), ut(), Ke(), tt(), ye());
  }
  function $b() {
    const i = Array.isArray(b.stickers) ? b.stickers : [], s = [];
    for (const l of i)
      Jt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function qf(i, s, l = "Clear") {
    return new Promise((c) => {
      P.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: c
      };
    });
  }
  async function jb() {
    var l, c;
    if (r || !await qf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    b.painting = ba(null), ir();
    const s = $b();
    if (t === "stickers")
      b.stickers = s, b.assets = {}, d.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((c = s[0]) == null ? void 0 : c.id) || null, Ui();
    else {
      const p = ix(b.shots, b.active.selected_shot_id);
      b.stickers = s, b.assets = {}, b.shots = p.shots, d.selectedId = p.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = null, b.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Ui();
    }
    st(), ut(), Ke(), tt(), ye();
  }
  async function Hb(i) {
    var m, x, v, w;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", c = qi(s);
    if (!(!c.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((x = d.interaction) == null ? void 0 : x.layerKind) === s) || !await qf(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((v = d.interaction) == null ? void 0 : v.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === s) {
        const k = $n();
        k && d.paintEngine.cancelActiveStroke(k), d.interaction = null;
      }
      c.length = 0, b.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (un().length = 0), ir(), st(), ut(), Ke(), tt(), Tn(), ye();
    }
  }
  function Ub() {
    if (r) return;
    const i = Ct();
    if (!i || !_t(i) || Jt(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = ps("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = gf(), b.stickers.push(s), b.active.selected_sticker_id = s.id, d.selectedId = s.id, d.selectedIds = [s.id], rn(), st(), ut(), tt(), Ke(), ye();
  }
  function Xf() {
    var l, c, p, m, x, v;
    if (r) return;
    const i = rr(), s = Ct();
    if (!(!s && i.length === 0) && !i.some((w) => wn(w))) {
      if (i.length > 1) {
        const w = new Set(i.filter((M) => Bt(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => cn(M)).map((M) => Xt(M.rasterObjectId || M.id || ""))), C = new Set(i.filter(_t).map((M) => String(M.id || "")));
        w.size > 0 && (b.painting.paint.strokes = (Array.isArray((c = (l = b.painting) == null ? void 0 : l.paint) == null ? void 0 : c.strokes) ? b.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), b.painting.groups = un().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), ir()), k.size > 0 && (b.painting.raster_objects = In().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Wi()), C.size > 0 && (b.stickers = (Array.isArray(b.stickers) ? b.stickers : []).filter((M) => C.has(String((M == null ? void 0 : M.id) || "")) ? Jt(M) ? (zi(M) || (M.visible = !1), !0) : !1 : !0), Ui(), rn()), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (Bt(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        b.painting.paint.strokes = (Array.isArray((m = (p = b.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? b.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), b.painting.groups = un().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), ir(), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (cn(s)) {
        const w = Xt(s.rasterObjectId || s.id || "");
        b.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Wi(), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (t === "stickers" || _t(s)) {
        if (Jt(s)) {
          if (zi(s)) return;
          s.visible = !1, rn(), st(), ut(), Ke(), tt(), ye();
          return;
        }
        b.stickers = b.stickers.filter((w) => w.id !== s.id), Ui(), rn(), d.selectedId = ((x = b.stickers[0]) == null ? void 0 : x.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((v = b.stickers[0]) == null ? void 0 : v.id) || null, st(), ut(), Ke(), tt(), ye();
        return;
      }
      Vb();
    }
  }
  function $l(i, s) {
    const l = ae.frameSafeRect;
    if (!i || !l || d.mode !== "frame") return !1;
    const c = Nu * Ai(l, i), p = Gc(Uc(l, s), c);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Jf(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const v = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(v)) {
        const [C, M] = v.split(":").map((E) => Number(E));
        if (Number.isFinite(C) && Number.isFinite(M)) return C >= M;
      }
      const w = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(w - k) > 1e-6 ? w >= k : Ci(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== c && ([p, m] = [m, p]);
    const x = p / m;
    if (!$l(i, x)) {
      const v = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = v, i.hFOV_deg = xs(v, x);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Gb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const c = yo(s, l);
    if (!c) return !1;
    const p = c.ratio;
    if (!$l(i, p)) {
      const m = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = xs(m, p);
    }
    return i.aspect_id = c.label, !0;
  }
  function Zf(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Di(i), c = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, c);
    if (!$l(i, p)) {
      const m = W(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = xs(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, x] = s.split(":");
      i.aspect_id = `${x}:${m}`;
    } else
      i.aspect_id = Si(i);
  }
  function Qf() {
    Oi().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Bb() {
    if (r) return;
    const i = rr();
    if (!Ct() || i.length === 0 || i.some((v) => wn(v))) return;
    Qf();
    const l = Oi(), c = new Set(i.map((v) => _t(v) ? `sticker:${String(v.id || "")}` : cn(v) ? `rasterObject:${Xt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), p = [], m = [];
    if (l.forEach((v) => {
      var k, C;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((C = v.item) == null ? void 0 : C.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      c.has(w) ? p.push(v) : m.push(v);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), rn(), st(), ut(), tt(), ye();
  }
  function Kb() {
    if (r) return;
    const i = rr();
    if (!Ct() || i.length === 0 || i.some((v) => wn(v))) return;
    Qf();
    const l = Oi(), c = new Set(i.map((v) => _t(v) ? `sticker:${String(v.id || "")}` : cn(v) ? `rasterObject:${Xt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), p = [], m = [];
    if (l.forEach((v) => {
      var k, C;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((C = v.item) == null ? void 0 : C.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      c.has(w) ? p.push(v) : m.push(v);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), rn(), st(), ut(), tt(), ye();
  }
  function Wb() {
    r || (b.projection_model = "pinhole_rectilinear", b.alpha_mode = "straight", f && (b.output_preset = N(Number(b.output_preset || 2048))), h && (b.coverage = Qt(h.value)), y && (b.bg_color = String(y.value || b.bg_color || "#00ff00")), En(), e.setDirtyCanvas(!0, !0));
  }
  function En() {
    var s;
    if (r) return;
    b.coverage = Qt(b.coverage), Bm(e, b.active);
    const i = Km(e, b);
    g && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const ed = () => En();
  r || (e.__panoFlushStateBeforeQueue = ed);
  function Ho() {
    b.ui_settings = YN(b.ui_settings), r || En();
  }
  function ut() {
    var i;
    r || (En(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Yb() {
    r || A0() && Cf().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function qb(i = {}) {
    var c, p, m, x, v, w, k, C, M, E;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || p.call(c), (x = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || x.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !1)), l && ((k = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || k.call(w, !0, !0), (E = (M = (C = lr) == null ? void 0 : C.canvas) == null ? void 0 : M.setDirty) == null || E.call(M, !0, !0));
  }
  function jl() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", Tn(), Ke());
  }
  function pi(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function Uo(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function td() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function Ue() {
    if (t !== "cutout") return null;
    const i = Array.isArray(b.shots) ? b.shots : [];
    if (!i.length) return null;
    const s = String(b.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function Xb() {
    var H, Z, K, q, ce;
    if (!I) return null;
    const i = (H = I.getBoundingClientRect) == null ? void 0 : H.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    ae.frameCanvasScale = Math.min(s, l);
    let c = 24, p = 24;
    const m = Math.max(c + 1, I.width - 24);
    let x = Math.max(p + 1, I.height - 24);
    const v = (Z = et == null ? void 0 : et.getBoundingClientRect) == null ? void 0 : Z.call(et), w = (K = We == null ? void 0 : We.getBoundingClientRect) == null ? void 0 : K.call(We);
    let k = 24;
    v && i && v.width > 0 && v.height > 0 && (k = Math.max(k, (v.right - i.left) * s + hp)), w && i && w.width > 0 && w.height > 0 && ((q = P.frameRail) == null ? void 0 : q.visible) === !0 && (k = Math.max(k, (i.right - w.left) * s + hp)), c = Math.max(c, k);
    const C = Math.min(m, I.width - k);
    let M = 24;
    const E = (ce = mt == null ? void 0 : mt.getBoundingClientRect) == null ? void 0 : ce.call(mt);
    if (E && i && E.width > 0 && E.height > 0 && (M = Math.max(M, (E.bottom - i.top) * l + Pu)), [Yt, An].forEach((ge) => {
      var ze;
      if (!ge || !i) return;
      const ue = getComputedStyle(ge);
      if (ue.display === "none" || ue.visibility === "hidden" || Number(ue.opacity) <= 0) return;
      const Se = (ze = ge.getBoundingClientRect) == null ? void 0 : ze.call(ge);
      !Se || Se.width <= 0 || Se.height <= 0 || (M = Math.max(M, (i.bottom - Se.top) * l + Pu));
    }), $e && i) {
      const ge = getComputedStyle($e);
      ge.display !== "none" && ge.visibility !== "hidden" && Number(ge.opacity) > 0 && (M = Math.max(M, (CN + Pu) * l));
    }
    return p = Math.max(p, M), x = Math.max(p + 1, Math.min(x, I.height - M)), {
      x: c,
      y: p,
      w: Math.max(1, C - c),
      h: Math.max(1, x - p)
    };
  }
  function Hl(i = Ue()) {
    if (!i || !I) return null;
    const s = ae.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return F_(s, i, Nu * Ai(s, i));
  }
  function Kt(i = Ue()) {
    const s = Hl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ul() {
    return t === "cutout" && !!Ue();
  }
  function ar(i, s = performance.now()) {
    if (d.mode === "unwrap") {
      const m = ti(), x = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (x % 1 + 1) % 1,
        v: W(v, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Cl(i.x, i.y), { lon: c, lat: p } = El(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function or(i, s, l = performance.now()) {
    const c = Kt(s);
    if (!c) return null;
    const p = {
      x: (Number(i.x) - c.x) / Math.max(1, c.w),
      y: (Number(i.y) - c.y) / Math.max(1, c.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Rl(s, p);
    if (!m) return null;
    const { lon: x, lat: v } = El(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (x / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - v / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Jb(i, s) {
    const l = Ue();
    if (!l || l.locked === !0) return !1;
    const c = Number(s) > 0, p = zm(l, s);
    if (!p) return !1;
    if (c) {
      const m = Nu * Ai(
        ae.frameSafeRect || { w: I.width, h: I.height },
        p
      ), x = Yu({ width: I.width, height: I.height }, m);
      if (x.halfW < I.width * 0.5 - 1e-6 || x.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, st(), ut(), Ke());
    }, 180), Ke(), !0;
  }
  function Zb() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, st(), ut(), Ke(), !0) : !1;
  }
  function ja() {
    const i = d.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && mi(), d.interaction = null, Hi(), Or(), Ke(), xt(d.pointerPos), ye({ localOnly: !0 }), !0;
  }
  function Qb(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function ii(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? zr : Dn[s] ? s : d.activeBrushPresetId || zr;
  }
  function nd() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (td() || Ul());
  }
  function rd() {
    var i;
    return nd() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Go(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), c = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, x = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - c) > 0.01;
    return d.pointerPos = { x: l, y: c, inside: p }, x;
  }
  function ey() {
    var C, M;
    if (!rd()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool, l = ii(s), c = Dn[l] || Dn[zr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), x = Math.max(3, m * 0.5), v = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(d.paintColor), w = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : W(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : W(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: c,
      radius: x,
      fillStyle: mr(v, w),
      strokeStyle: mr(v, k),
      x: Number(((C = d.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((M = d.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: x,
      hotspotY: x
    };
  }
  function ty() {
    var E, H, Z;
    const i = ey();
    if (!he) return;
    if (!i) {
      he.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, c = "999px", p = 0, m = i.fillStyle, x = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), M = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Js, l = Js, c = "0", x = "0", v = "none", C = EN, M = DN, m = BN(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const K = Math.max(1, Number(((E = i.preset) == null ? void 0 : E.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * K), l = Math.max(6, i.radius * 2), c = `${Math.min(6, l * 0.42)}px`, p = Number(((Z = (H = i.preset) == null ? void 0 : H.angle) == null ? void 0 : Z.value) || 0) * Gr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    he.style.display = "block", he.style.width = `${Math.round(s)}px`, he.style.height = `${Math.round(l)}px`, he.style.borderRadius = c, he.style.border = x, he.style.boxShadow = v, he.style.background = m, he.style.backgroundRepeat = "no-repeat", he.style.backgroundPosition = "center", he.style.backgroundSize = "contain", he.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - M)}px) rotate(${p}deg)`;
  }
  function ny() {
    var ge;
    if (!fe || !ke) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool;
    if (s === "lasso_fill") return;
    const l = ii(s), c = Dn[l] || Dn[zr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(c.sizeScale ?? 1)), x = Math.max(6, m * 0.5), v = s === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(d.paintColor), k = i === "mask" ? mr(w, 0.22) : v ? "rgba(255,255,255,0.14)" : mr(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? mr(w, 0.96) : v ? "rgba(255,255,255,0.72)" : mr(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let M = x * 2, E = x * 2, H = "999px", Z = 0, K = k;
    const q = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ue = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      M = Math.max(16, x * 2 * ue), E = Math.max(10, x * 2), H = `${Math.min(8, E * 0.42)}px`, Z = Number(((ge = c == null ? void 0 : c.angle) == null ? void 0 : ge.value) || 0) * Gr;
    } else s === "brush" ? K = `radial-gradient(circle at 50% 50%, ${C} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (M = Math.max(18, x * 1.8), E = M, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : v && (K = "rgba(255,255,255,0.12)");
    ke.style.width = `${Math.round(M)}px`, ke.style.height = `${Math.round(E)}px`, ke.style.borderRadius = H, ke.style.background = K, ke.style.border = `1px solid ${q}`, ke.style.boxShadow = `0 0 0 1px ${ce}`, ke.style.transform = `rotate(${Z}deg)`, Q && (clearTimeout(Q), Q = 0), fe.classList.remove("fade-out"), fe.classList.add("show");
  }
  function Bo() {
    !fe || !fe.classList.contains("show") || (fe.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      fe.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function id(i, s, l, c) {
    const p = ii(s), m = Dn[p] || Dn[zr], x = d.brushSizes[p] ?? 10, v = Math.max(1, x) * Math.max(0.1, m.sizeScale ?? 1), w = Qb(c, v), k = l.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), C = {
      id: ia(i),
      actionGroupId: ia("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((M) => ({ ...M })),
        points: k.map((M) => ({ ...M }))
      }
    };
    return np(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function ad(i, s, l, c) {
    const p = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = ii(s), x = Dn[m] || Dn[zr], v = {
      id: ia(i),
      actionGroupId: ia("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: p.map((w) => ({ ...w }))
      }
    };
    return np(v, x), Number(x.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function qi(i) {
    const s = b.painting || (b.painting = ba(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function ry(i, s, l = performance.now()) {
    let c;
    if (d.mode === "frame") {
      const k = Ue();
      if (!k || (c = or(s, k, l), !c)) return !1;
    } else
      c = ar(s, l);
    if (!c) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, x = p[p.length - 1];
    if (x) {
      const k = Math.abs(Number(c.u ?? c.x ?? 0) - Number(x.u ?? x.x ?? 0)), C = Math.abs(Number(c.v ?? c.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (k < 15e-4 && C < 15e-4) return !1;
    }
    const v = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...v }), m.push({ ...v });
    const w = $n();
    if (w) {
      const k = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(k, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function iy(i, s, l = performance.now()) {
    var x, v;
    let c;
    if (d.mode === "frame") {
      const w = Ue();
      if (!w) return !1;
      c = or(s, w, l);
    } else
      c = ar(s, l);
    const p = (v = (x = i == null ? void 0 : i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : v.points;
    if (!c || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && k < 15e-4) return !1;
    }
    return p.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ay(i) {
    var ue, Se, ze, Be, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    $o();
    const l = $n(), c = za(l.width, l.height);
    if (!Uf(c, s, { w: l.width, h: l.height })) return !1;
    const p = ((Se = (ue = c.ctx) == null ? void 0 : ue.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Se.data) || null;
    if (!p) return !1;
    const m = new Map(un().map((xe) => [String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim(), xe ? { ...xe } : null])), x = [], v = [], w = [...In().filter((xe) => String((xe == null ? void 0 : xe.layerKind) || "paint") !== "paint")];
    let k = !1, C = Oi().reduce((xe, se) => Math.max(xe, Number((se == null ? void 0 : se.z_index) || 0)), -1) + 1;
    function M(xe, se, be, Fe = 8) {
      let Re = se, De = be, Ye = -1, lt = -1;
      for (let Qe = 0; Qe < be; Qe += 1)
        for (let St = 0; St < se; St += 1)
          xe[(Qe * se + St) * 4 + 3] <= Fe || (St < Re && (Re = St), Qe < De && (De = Qe), St > Ye && (Ye = St), Qe > lt && (lt = Qe));
      return Ye < Re || lt < De ? null : { minX: Re, minY: De, maxX: Ye, maxY: lt };
    }
    const E = M(p, l.width, l.height, 8);
    if (!E) return !1;
    function H(xe, se) {
      return !xe || !se ? !1 : !(xe.maxX < se.minX || se.maxX < xe.minX || xe.maxY < se.minY || se.maxY < xe.minY);
    }
    function Z(xe, se) {
      const be = Qr((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "", "paint", se);
      if (!be) return null;
      const Fe = be.centerUv.u - be.halfW, Re = be.centerUv.u + be.halfW, De = be.centerUv.v - be.halfH, Ye = be.centerUv.v + be.halfH, lt = l.width, Qe = l.height;
      return {
        minX: Math.floor((Fe % 1 + 1) % 1 * lt),
        maxX: Math.ceil((Re % 1 + 1) % 1 * lt),
        minY: Math.floor(W(De, 0, 1) * Qe),
        maxY: Math.ceil(W(Ye, 0, 1) * Qe),
        wraps: Re - Fe >= 1 || Fe < 0 || Re > 1
      };
    }
    function K(xe) {
      const se = (xe == null ? void 0 : xe.bbox) || null;
      if (!se) return null;
      const be = (xe == null ? void 0 : xe.transform) || {}, Fe = l.width, Re = l.height, De = Number(se.u0 || 0) + Number(be.du || 0), Ye = Number(se.u1 || 0) + Number(be.du || 0), lt = Number(se.v0 || 0) + Number(be.dv || 0), Qe = Number(se.v1 || 0) + Number(be.dv || 0);
      return {
        minX: Math.floor((De % 1 + 1) % 1 * Fe),
        maxX: Math.ceil((Ye % 1 + 1) % 1 * Fe),
        minY: Math.floor(W(lt, 0, 1) * Re),
        maxY: Math.ceil(W(Qe, 0, 1) * Re),
        wraps: Ye - De >= 1 || De < 0 || Ye > 1
      };
    }
    function q(xe) {
      return xe ? xe.wraps ? H(E, { minX: 0, maxX: xe.maxX, minY: xe.minY, maxY: xe.maxY }) || H(E, { minX: xe.minX, maxX: l.width - 1, minY: xe.minY, maxY: xe.maxY }) : H(E, xe) : !0;
    }
    function ce(xe) {
      if (!xe) return { touched: !1, canvas: null };
      const se = za(l.width, l.height, { readback: !0 });
      se.ctx.drawImage(xe, 0, 0);
      const be = se.ctx.getImageData(0, 0, l.width, l.height);
      se.ctx.save(), se.ctx.globalCompositeOperation = "destination-out", se.ctx.drawImage(c.canvas, 0, 0), se.ctx.restore();
      const Fe = se.ctx.getImageData(0, 0, l.width, l.height);
      for (let Re = 0; Re < l.width * l.height; Re += 1) {
        if (p[Re * 4 + 3] <= 8) continue;
        const Ye = be.data[Re * 4 + 3], lt = Fe.data[Re * 4 + 3];
        if (Ye > lt)
          return { touched: !0, canvas: se.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ge(xe, se, be) {
      const Fe = Number(be == null ? void 0 : be.z_index), Re = yb(xe, se, be).map((De, Ye) => ({
        ...De,
        z_index: Number.isFinite(Fe) ? Fe + Ye * 1e-3 : C + Ye * 1e-3
      }));
      return Re.length && (C = Math.max(C, ...Re.map((De) => Number((De == null ? void 0 : De.z_index) || 0))) + 1), Re;
    }
    for (const xe of un()) {
      const se = String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim();
      if (!se) continue;
      const be = nr(se, "paint");
      if (!q(Z(xe, be))) {
        v.push(xe), x.push(...be);
        continue;
      }
      const Fe = ((Be = (ze = d.paintEngine) == null ? void 0 : ze.getGroupTarget) == null ? void 0 : Be.call(ze, se)) || null, Re = ((nt = Fe == null ? void 0 : Fe.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Re) {
        v.push(xe), x.push(...be);
        continue;
      }
      const De = ce(Re);
      if (!De.touched || !De.canvas) {
        v.push(xe), x.push(...be);
        continue;
      }
      k = !0;
      const Ye = ge(De.canvas, "paint", m.get(se) || xe || {});
      w.push(...Ye);
    }
    for (const xe of In().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") === "paint")) {
      if (!q(K(xe))) {
        w.push(xe);
        continue;
      }
      const se = Pf(xe, null);
      if (!se) {
        w.push(xe);
        continue;
      }
      const be = ce(se);
      if (!be.touched || !be.canvas) {
        w.push(xe);
        continue;
      }
      k = !0;
      const Fe = ge(be.canvas, "paint", xe);
      w.push(...Fe);
    }
    return k ? (b.painting.paint.strokes = x, b.painting.groups = v.sort((xe, se) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), b.painting.raster_objects = w.sort((xe, se) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), Fa({ preservePanelValues: !1 }), !0) : !1;
  }
  function oy(i) {
    var x, v, w, k, C;
    if ((((v = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : v.rawPoints) || ((k = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      Gl(i);
      const M = $n();
      M && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(M) : d.paintEngine.commitActiveStroke(i.stroke, M)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = id(i.layerKind, l.toolKind, [], c);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = $n();
    m && d.paintEngine.beginStroke(p, m);
  }
  function sy(i) {
    var x, v;
    if ((((v = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : v.points) || []).length >= 3) {
      Gl(i);
      const w = $n();
      w && d.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = ad(i.layerKind, l.toolKind, [], c);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = $n();
    m && d.paintEngine.beginStroke(p, m);
  }
  function Gl(i) {
    var m, x, v, w;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((x = i == null ? void 0 : i.stroke) == null ? void 0 : x.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Ll(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), ay(i);
    const c = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (c && uf((v = i.stroke) == null ? void 0 : v.actionGroupId), qi(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Ll(p, i.stroke.targetSpace, !0), c && uf((w = i.stroke) == null ? void 0 : w.actionGroupId), qi(i.layerKind).push(i.stroke), !0);
  }
  function od(i) {
    var l;
    if (t === "cutout" && d.mode === "frame") {
      const c = Ue(), p = Kt(c);
      if (!c || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const x = or(i, c, performance.now()), v = x ? Bi(x) : null;
      if (v)
        for (const k of Fl()) {
          if (!_t(k)) continue;
          const C = $a(k, v);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const M = Zt(k);
            if (M != null && M.visible) return { item: k, geom: M };
          }
        }
      const w = yl(!1).slice().sort((k, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of w) {
        if (k.type === "strokeGroup") {
          const E = Ri(Ea("paint", k.actionGroupId || k.id || ""));
          if (!E) continue;
          const H = Zt(E);
          if (!(H != null && H.visible)) continue;
          const Z = Array.isArray(H.strokePaths) ? H.strokePaths : [];
          for (const K of Z) {
            const q = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!q.length) continue;
            if (K.closed && q.length >= 3 && $r(i, q)) return { item: E, geom: H };
            const ce = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let ge = 0; ge < q.length - 1; ge += 1)
              if (Iu(i, q[ge], q[ge + 1]) <= ce * ce) return { item: E, geom: H };
            if (q.length === 1 && oi(i, q[0]) <= ce * ce) return { item: E, geom: H };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const E = Fi(Da(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!E) continue;
          const H = Zt(E);
          if (Nf(E, H, i, x)) return { item: E, geom: H };
          continue;
        }
        const C = k.item;
        if (!C || !_t(C) || !v) continue;
        const M = $a(C, v);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const E = Zt(C);
          if (E != null && E.visible) return { item: C, geom: E };
        }
      }
      return null;
    }
    const s = [
      ...yl(!1).slice().sort((c, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var p;
        return c.type === "strokeGroup" ? Ri(Ea("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Fi(Da(((p = c.item) == null ? void 0 : p.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? Fl().filter((c) => Vn(c)) : []
    ];
    for (const c of s) {
      if (Bt(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        const x = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const v of x) {
          const w = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!w.length) continue;
          if (v.closed && w.length >= 3 && $r(i, w)) return { item: c, geom: m };
          const k = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < w.length - 1; C += 1)
            if (Iu(i, w[C], w[C + 1]) <= k * k) return { item: c, geom: m };
          if (w.length === 1 && oi(i, w[0]) <= k * k) return { item: c, geom: m };
        }
        continue;
      }
      if (cn(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        if (Nf(c, m, i)) return { item: c, geom: m };
        continue;
      }
      const p = Zt(c);
      if (p.visible && $r(i, p.corners))
        return { item: c, geom: p };
    }
    return null;
  }
  function Bl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (_t(l)) return Qu(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((x) => oi(x, s) <= 121);
      if (p >= 0) {
        const x = i.corners[p], v = x.x - i.center.x, w = x.y - i.center.y, k = v * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const x of m) {
        const v = Array.isArray(x == null ? void 0 : x.points) ? x.points : [];
        if (x.closed && v.length >= 3 && $r(s, v)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((x == null ? void 0 : x.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < v.length - 1; k += 1)
          if (Iu(s, v[k], v[k + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return $r(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => oi(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], x = m.x - i.center.x, v = m.y - i.center.y, w = x * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: w };
      }
      return $r(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => oi(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const c = i.corners.findIndex((p) => oi(p, s) <= 121);
    if (c >= 0) {
      const p = i.corners[c], m = p.x - i.center.x, x = p.y - i.center.y, v = m * x >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: v };
    }
    return oi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : $r(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function sd(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function ly(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function uy(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => ly(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, c = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!$r({ x: l, y: c }, s.corners);
  }
  function xt(i) {
    if (ty(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? $("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? $("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? $("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? $(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? $("grabbing") : $("default");
      return;
    }
    if (rd()) {
      $("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !r) {
        $(AN);
        return;
      }
      if (d.primaryTool !== "cursor") {
        $("default");
        return;
      }
      $("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      $("default");
      return;
    }
    const s = Ct(), l = s ? Zt(s) : null, c = s ? wn(s) : !1, p = c ? { kind: "none", cursor: "default" } : Bl(l, i, s);
    if (!c && p.kind !== "none") {
      $(p.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && od(i)) {
      $("default");
      return;
    }
    $(d.mode === "pano" ? "grab" : "default");
  }
  function tt() {
    var w, k;
    if (!vn) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Ct(), s = rr();
    if (!i && s.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = To(), c = rk({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? xl(s) : Zt(i),
      allLocked: Sl(s),
      anyLocked: s.some((C) => wn(C)),
      selectedLocked: wn(i),
      activeAspect: Ur(i),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Jt,
      isStickerHidden: zi,
      canRestoreSelectedToInitial: l0,
      iconSet: Ee
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const p = (C, M, { requireFitsBelow: E = !0 } = {}) => {
      var Se, ze, Be;
      const Z = Number((Se = c.anchor) == null ? void 0 : Se.minX), K = Number((ze = c.anchor) == null ? void 0 : ze.maxX), q = Number((Be = c.anchor) == null ? void 0 : Be.maxY);
      if (![Z, K, q].every(Number.isFinite)) return null;
      const ce = Math.max(14, I.width - C - 14), ge = W((Z + K) * 0.5 - C * 0.5, 14, ce), ue = q + 18;
      return !Number.isFinite(ge) || !Number.isFinite(ue) || E && ue + M > I.height - 14 ? null : { left: ge, top: ue };
    }, m = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), x = Math.max(1, Number(((k = d.menuSize) == null ? void 0 : k.h) || 40)), v = p(m, x, { requireFitsBelow: !1 });
    if (!v) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: v.left,
      top: v.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!vn || P.selectionMenu.visible !== !0) return;
      const C = vn.getBoundingClientRect(), M = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, E = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      d.menuSize = { w: M, h: E, measured: !0 };
      const H = p(M, E);
      if (!H) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = H.left, P.selectionMenu.top = H.top;
    });
  }
  function mi() {
    me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null, P.tooltip.visible = !1;
  }
  function cy(i) {
    if (!nn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var K, q;
      if (me.target !== l || !nn || !(l != null && l.isConnected)) return;
      const c = ie.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, x = 12, v = Math.round(Number(((K = nn.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, w = Math.round(Number(((q = nn.getBoundingClientRect()) == null ? void 0 : q.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), C = !!l.closest(".pano-frame-rail"), M = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let E = "", H = p.left - c.left + p.width * 0.5 - v * 0.5, Z = p.top - c.top - w - x;
      if (k)
        E = "tool-rail", H = p.right - c.left + 10, Z = p.top - c.top + p.height * 0.5 - w * 0.5, H = W(H, m, Math.max(m, c.width - v - m)), Z = W(Z, m, Math.max(m, c.height - w - m));
      else if (C)
        E = "frame-rail", H = p.left - c.left - v - 10, Z = p.top - c.top + p.height * 0.5 - w * 0.5, H = W(H, m, Math.max(m, c.width - v - m)), Z = W(Z, m, Math.max(m, c.height - w - m));
      else if (M) {
        E = "footer";
        const ce = l.closest(".pano-paint-footer"), ge = ce ? ce.getBoundingClientRect() : p;
        H = ge.left - c.left + ge.width * 0.5 - v * 0.5, Z = ge.bottom - c.top + 5, H = W(H, m, Math.max(m, c.width - v - m)), Z = Math.max(m, Z);
      }
      H = W(H, m, Math.max(m, c.width - v - m)), Z = Math.max(m, Z), P.tooltip.left = H, P.tooltip.top = Z, P.tooltip.variant = E, P.tooltip.visible = !0;
    });
  }
  const an = Hc({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = Ht(Number(i.yaw || 0)), d.viewPitch = W(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = W(Number(i.fov || d.viewFov || 100), 35, 140);
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
        x: (i = b.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = b.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ti,
    onInteraction: () => {
      ae.backgroundDirty = !0, ae.dirty = !0;
    }
  });
  function fy(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Em(s, i.lastAngle), i.lastAngle = s;
    const c = Dm(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = c, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((x) => x.key === "roll_deg");
    p && (p.value = c, p.displayValue = ra(c), p.fillPct = (c + 180) / 360 * 100), Rr(), Kl(i), ye({ localOnly: !0 });
  }
  function dy(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const c = tg(i.rollGesture, s, l);
    if (!c) return;
    i.rollGesture = c.gesture, i.center = c.gesture.center, i.lastAngle = c.gesture.lastAngle, i.accumulatedRad = c.gesture.accumulatedRad, i.shot.roll_deg = c.rollDeg, i.changed = i.changed || Math.abs(c.gesture.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((x) => x.key === "roll_deg");
    p && (p.value = c.rollDeg, p.displayValue = ra(c.rollDeg), p.fillPct = (c.rollDeg + 180) / 360 * 100), Rr(), Kl(i), ye({ localOnly: !0 });
  }
  const ld = (i, s) => {
    const l = pi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Kl(i) {
    var x, v;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null;
    const s = Kt(i.shot), l = (x = I.getBoundingClientRect) == null ? void 0 : x.call(I), c = (v = ie.getBoundingClientRect) == null ? void 0 : v.call(ie);
    if (!s || !l || !c || I.width <= 0 || I.height <= 0) return;
    const p = l.width / I.width, m = l.height / I.height;
    P.tooltip.text = `${ra(i.shot.roll_deg)}°`, P.tooltip.left = l.left - c.left + (s.x + s.w * 0.5) * p, P.tooltip.top = l.top - c.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  je == null || je.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || d.mode !== "frame") return;
    const s = Ue();
    if (!s || s.locked === !0) return;
    const l = Kt(s);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = ld(i, c);
    d.interaction = {
      kind: "roll_frame",
      shot: s,
      center: c,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = je.setPointerCapture) == null || m.call(je, i.pointerId), i.preventDefault(), Rr(), Kl(d.interaction), ye({ localOnly: !0 });
  }), je == null || je.addEventListener("pointermove", (i) => {
    var s;
    ((s = d.interaction) == null ? void 0 : s.kind) !== "roll_frame" || d.interaction.source !== "knob" || fy(
      d.interaction,
      ld(i, d.interaction.center),
      i
    );
  });
  const hy = () => {
    const i = d.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (st(), ut(), Ke()), d.interaction = null, mi(), Or(), Rr(), ye());
  };
  je == null || je.addEventListener("pointerup", hy), je == null || je.addEventListener("pointercancel", () => ja()), je == null || je.addEventListener("lostpointercapture", () => {
    var i;
    ((i = d.interaction) == null ? void 0 : i.source) === "knob" && ja();
  }), je == null || je.addEventListener("dblclick", (i) => {
    const s = d.mode === "frame" && !r ? Ue() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, st(), ut(), Ke(), Rr(), ye(), i.preventDefault());
  }), I.onpointerdown = (i) => {
    const s = pi(i);
    if (Go(s, !0), d.viewTween = null, an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), d.mode === "frame") {
        const v = Ue();
        if (!v || r || v.locked === !0) return;
        d.interaction = {
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
        const v = d.mode === "unwrap" ? s : Uo(i);
        d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (d.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const v = Ue(), w = Kt(v);
      if (!v || v.locked === !0 || !w) return;
      const k = eg({
        frame: w,
        point: s,
        startRollDeg: Number(v.roll_deg ?? v.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!k) return;
      d.interaction = {
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
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), Rr(), ye({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const v = Ue();
      if (!v || r || v.locked === !0) return;
      d.interaction = {
        kind: "pan_frame",
        shot: v,
        last: s,
        start: { yaw_deg: Number(v.yaw_deg || 0), pitch_deg: Number(v.pitch_deg || 0) },
        changed: !1
      }, xt(s), I.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (d.mode === "pano") {
        const v = Uo(i);
        d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (td() || Ul())) {
      const v = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, k = d.mode === "frame" && Ul() ? Ue() : null, C = { kind: "ERP_GLOBAL" }, M = k ? or(s, k, performance.now()) : ar(s, performance.now());
      if (!M) {
        xt(s);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: ia("live"),
        stroke: w === "lasso_fill" ? ad(v, w, [M], C) : id(v, w, [M], C)
      }, Hi();
      const E = $n();
      if (E)
        if (d.paintEngine.beginStroke(d.interaction.stroke, E), d.interaction.kind === "paint_stroke") {
          const H = d.paintEngine.ensureTarget(E), Z = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), K = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          d.paintEngine.appendStrokePoint(H, Z, K, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, E);
      xt(s), I.setPointerCapture(i.pointerId), ye();
      return;
    }
    const l = rr(), c = Ct(), p = l.length > 1 ? xl(l) : c ? Zt(c) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: s, current: s }, xt(s), I.setPointerCapture(i.pointerId), ye({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (p != null && p.visible)) {
      if ((l.some((w) => wn(w)) ? { kind: "none" } : Bl(p, s)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: l.map((w) => w),
          offset: { x: s.x - p.center.x, y: s.y - p.center.y },
          startCenter: { x: p.center.x, y: p.center.y },
          stickerSnapshots: l.filter((w) => _t(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var C, M;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Bt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: dn(nr(w.actionGroupId, w.layerKind)),
            frameSnapshot: dn(Qr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var C, M;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: _l(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => cn(w)).map((w) => ({
            id: Xt(w.rasterObjectId || w.id || ""),
            snapshot: dn(In().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var C, M;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Ef(w)
          }))
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (c && (p != null && p.visible)) {
      const v = wn(c) ? { kind: "none" } : Bl(p, s, c);
      if (v.kind === "scale") {
        d.interaction = Bt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: dn(nr(c.actionGroupId, c.layerKind)),
          frameSnapshot: dn(Qr(c.actionGroupId, c.layerKind)),
          cursor: v.cursor
        } : cn(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: dn(In().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(c.rasterObjectId || c.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: v.cursor
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        d.interaction = {
          kind: v.kind,
          item: c,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        d.interaction = Bt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: p.center,
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x),
          snapshot: dn(nr(c.actionGroupId, c.layerKind)),
          frameSnapshot: dn(Qr(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: p.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x)
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (Bt(c)) {
          const w = d.mode === "frame" ? (() => {
            const k = Ue();
            return k ? or(s, k, performance.now()) : null;
          })() : ar(s, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: dn(nr(c.actionGroupId, c.layerKind)),
            frameSnapshot: dn(Qr(c.actionGroupId, c.layerKind))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (cn(c)) {
          const w = d.mode === "frame" ? (() => {
            const k = Ue();
            return k ? or(s, k, performance.now()) : null;
          })() : ar(s, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: dn(In().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(c.rasterObjectId || c.id || "")))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: c,
          offset: { x: s.x - p.center.x, y: s.y - p.center.y }
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = od(s);
    if (m) {
      const v = d.selectedId !== m.item.id;
      if (v && d.selectedId && (st(), En()), Li(m.item), t === "cutout" && v && (d.cutoutAspectOpen = !1), v && Ke(), tt(), ye(), wn(m.item)) {
        xt(s);
        return;
      }
      d.interaction = {
        kind: Bt(m.item) ? "move_stroke_group" : cn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Bt(m.item) || cn(m.item) ? d.mode === "frame" ? (() => {
          const w = Ue();
          return w ? or(s, w, performance.now()) : null;
        })() : ar(s, performance.now()) : null,
        snapshot: Bt(m.item) ? dn(nr(m.item.actionGroupId, m.item.layerKind)) : cn(m.item) ? dn(In().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Bt(m.item) ? dn(Qr(m.item.actionGroupId, m.item.layerKind)) : null
      }, xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const x = !!d.selectedId;
    if (x && (st(), En()), Fa(), x && Ke(), tt(), ye(), d.mode === "pano") {
      const v = Uo(i);
      d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
    }
  }, I.onpointermove = (i) => {
    var c, p, m, x, v, w, k, C, M, E, H, Z, K, q, ce, ge, ue, Se, ze, Be, nt, xe;
    const s = pi(i);
    if (Go(s, !0), !d.interaction) {
      xt(s);
      return;
    }
    xt(s);
    const l = d.interaction;
    if (l.kind === "paint_stroke") {
      const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      se.forEach((Fe) => {
        const Re = pi(Fe);
        if (d.mode === "frame") {
          const De = Ue(), Ye = De ? Kt(De) : null;
          if (Ye) {
            const lt = (Re.x - Ye.x) / Math.max(1, Ye.w), Qe = (Re.y - Ye.y) / Math.max(1, Ye.h);
            if (!(lt >= 0 && lt <= 1 && Qe >= 0 && Qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, oy(l));
          }
        }
        ry(l, Re, performance.now()) && (be = !0);
      }), be && ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      if (se.forEach((Fe) => {
        const Re = pi(Fe);
        if (d.mode === "frame") {
          const De = Ue(), Ye = De ? Kt(De) : null;
          if (Ye) {
            const lt = (Re.x - Ye.x) / Math.max(1, Ye.w), Qe = (Re.y - Ye.y) / Math.max(1, Ye.h);
            if (!(lt >= 0 && lt <= 1 && Qe >= 0 && Qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, sy(l));
          }
        }
        iy(l, Re, performance.now()) && (be = !0);
      }), be) {
        const Fe = $n();
        Fe && d.paintEngine.updateActiveStroke(l.stroke, Fe), ye({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const se = performance.now(), be = d.mode === "unwrap" ? s : Uo(i);
      an.moveDrag(be.x, be.y, d.mode === "unwrap" ? "unwrap" : "pano", se), l.lastTs = se, l.last = be, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const se = Hl(l.shot);
      if (!se || !l.shot) return;
      const be = s.x - l.last.x, Fe = s.y - l.last.y, Re = ng(l.shot, {
        dx: be,
        dy: Fe,
        focalPx: se.focalPx,
        invertX: ((c = b.ui_settings) == null ? void 0 : c.invert_view_x) === !0,
        invertY: ((p = b.ui_settings) == null ? void 0 : p.invert_view_y) === !0
      });
      l.shot.yaw_deg = Re.yaw_deg, l.shot.pitch_deg = Re.pitch_deg, l.changed = l.changed || Math.abs(be) > 0 || Math.abs(Fe) > 0, l.last = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      dy(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const se = s.x - l.offset.x, be = s.y - l.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Fe = Ue(), Re = Kt(Fe);
        if (!Fe || !Re) return;
        const De = {
          x: W((se - Re.x) / Math.max(1, Re.w), 0, 1),
          y: W((be - Re.y) / Math.max(1, Re.h), 0, 1)
        }, Ye = Rl(Fe, De);
        if (!Ye) return;
        const lt = fs(Ye);
        l.item.yaw_deg = lt.yaw, l.item.pitch_deg = lt.pitch;
      } else if (d.mode === "unwrap") {
        const Fe = ti(), Re = W((se - Fe.x) / Math.max(Fe.w, 1), 0, 1), De = W((be - Fe.y) / Math.max(Fe.h, 1), 0, 1);
        l.item.yaw_deg = Ht(Re * 360 - 180), l.item.pitch_deg = W(90 - De * 180, -90, 90);
      } else {
        const Fe = Cl(se, be), Re = fs(Fe);
        l.item.yaw_deg = Re.yaw, l.item.pitch_deg = Re.pitch;
      }
      _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const se = d.mode === "frame" ? (() => {
        const Re = Ue();
        return Re ? or(s, Re, performance.now()) : null;
      })() : ar(s, performance.now());
      if (!se || !l.startUv) return;
      const be = qn(Number(se.u || 0), Number(l.startUv.u || 0)), Fe = Number(se.v || 0) - Number(l.startUv.v || 0);
      ff((m = l.item) == null ? void 0 : m.actionGroupId, be, Fe, l.snapshot, (x = l.item) == null ? void 0 : x.layerKind, l.frameSnapshot) && (ir({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const se = d.mode === "frame" ? (() => {
        const Re = Ue();
        return Re ? or(s, Re, performance.now()) : null;
      })() : ar(s, performance.now());
      if (!se || !l.startUv) return;
      const be = qn(Number(se.u || 0), Number(l.startUv.u || 0)), Fe = Number(se.v || 0) - Number(l.startUv.v || 0);
      hf(((v = l.item) == null ? void 0 : v.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", be, Fe, l.snapshot) && (Wi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Jg(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((C = l.item) == null ? void 0 : C.id) || "", be, l.snapshot) && (Wi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const se = s.x - Number(((M = l.offset) == null ? void 0 : M.x) || 0), be = s.y - Number(((E = l.offset) == null ? void 0 : E.y) || 0);
      let Fe = !1, Re = !1, De = !1;
      const Ye = se - Number(((H = l.startCenter) == null ? void 0 : H.x) || se), lt = be - Number(((Z = l.startCenter) == null ? void 0 : Z.y) || be);
      for (const Qe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const St = (t === "cutout" ? vl() : Er()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(Qe.id || ""));
        if (!St || !_t(St)) continue;
        const on = {
          x: Number(((K = Qe.center) == null ? void 0 : K.x) || 0) + Ye,
          y: Number(((q = Qe.center) == null ? void 0 : q.y) || 0) + lt
        };
        if (d.mode === "frame" && t === "cutout") {
          const Pt = Ue(), $t = Kt(Pt);
          if (!Pt || !$t) continue;
          const gi = {
            x: W((on.x - $t.x) / Math.max(1, $t.w), 0, 1),
            y: W((on.y - $t.y) / Math.max(1, $t.h), 0, 1)
          }, Nd = Rl(Pt, gi);
          if (!Nd) continue;
          const Pd = fs(Nd);
          St.yaw_deg = Pd.yaw, St.pitch_deg = Pd.pitch;
        } else if (d.mode === "unwrap") {
          const Pt = ti(), $t = W((on.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), gi = W((on.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          St.yaw_deg = Ht($t * 360 - 180), St.pitch_deg = W(90 - gi * 180, -90, 90);
        } else {
          const Pt = Cl(on.x, on.y), $t = fs(Pt);
          St.yaw_deg = $t.yaw, St.pitch_deg = $t.pitch;
        }
        Fe = !0;
      }
      for (const Qe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const St = {
          x: Number(((ce = Qe.center) == null ? void 0 : ce.x) || 0) + Ye,
          y: Number(((ge = Qe.center) == null ? void 0 : ge.y) || 0) + lt
        }, on = d.mode === "frame" ? (() => {
          const $t = Ue();
          return $t ? or(St, $t, performance.now()) : null;
        })() : ar(St, performance.now()), Pt = Qe.centerUv || null;
        if (on && Pt) {
          const $t = qn(Number(on.u || 0), Number(Pt.u || 0)), gi = Number(on.v || 0) - Number(Pt.v || 0);
          ff(Qe.id, $t, gi, Qe.snapshot, Qe.layerKind, Qe.frameSnapshot) && (Fe = !0, Re = !0);
        }
      }
      for (const Qe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const St = {
          x: Number(((ue = Qe.center) == null ? void 0 : ue.x) || 0) + Ye,
          y: Number(((Se = Qe.center) == null ? void 0 : Se.y) || 0) + lt
        }, on = d.mode === "frame" ? (() => {
          const $t = Ue();
          return $t ? or(St, $t, performance.now()) : null;
        })() : ar(St, performance.now()), Pt = Qe.centerUv || null;
        if (on && Pt) {
          const $t = qn(Number(on.u || 0), Number(Pt.u || 0)), gi = Number(on.v || 0) - Number(Pt.v || 0);
          hf(Qe.id, $t, gi, Qe.snapshot) && (Fe = !0, De = !0);
        }
      }
      Fe && (Re ? ir({ rebuildPaintEngine: !1 }) : De ? Wi() : rn(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      df((ze = l.item) == null ? void 0 : ze.actionGroupId, be, 0, l.snapshot, (Be = l.item) == null ? void 0 : Be.layerKind, l.frameSnapshot) && (ir({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let se = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * Gr;
      i.shiftKey && (se = Math.round(se / 45) * 45), df((nt = l.item) == null ? void 0 : nt.actionGroupId, 1, se, l.snapshot, (xe = l.item) == null ? void 0 : xe.layerKind, l.frameSnapshot) && (ir({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * be, 1, 179), l.item.vFOV_deg = W(l.startVFOV * be, 1, 179), l.item.aspect_id = Si(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * be, 1, 179), l.item.aspect_id = Si(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = W(l.startVFOV * be, 1, 179), l.item.aspect_id = Si(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let be = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * Gr, Fe = l.startRot - be;
      i.shiftKey && (Fe = Math.round(Fe / 45) * 45);
      const Re = _t(l.item) ? "rot_deg" : "roll_deg";
      l.item[Re] = Fe, _t(l.item) && rn(), ye({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var s, l, c, p, m, x, v, w;
    const i = d.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Hi();
        const k = Gl(d.interaction), C = !!d.interaction._hasCommittedSegments;
        if (k || C) {
          ir();
          const M = String(((c = d.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (M) {
            const H = un().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === M);
            H && (H.frame = null);
          }
          const E = $n();
          E && (k ? String(((p = d.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(E), $f()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, E) : d.paintEngine.cancelActiveStroke(E)), st(), En(), Ke(), tt(), e.setDirtyCanvas(!0, !0), ye();
        } else {
          const M = $n();
          M && d.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = sd(d.interaction.start, d.interaction.current), M = [
          ...t === "cutout" ? Fl().filter((E) => !Vn(E)) : [...Er()],
          ...Wg(),
          ...Yg()
        ].filter((E) => uy(k, Zt(E)));
        e0(M, ((x = M[M.length - 1]) == null ? void 0 : x.id) || null), t === "cutout" && M.length && (d.cutoutAspectOpen = !1), Ke(), tt(), ye();
      } else if (((v = d.interaction) == null ? void 0 : v.kind) === "pan_frame" || ((w = d.interaction) == null ? void 0 : w.kind) === "roll_frame")
        d.interaction.changed && (st(), ut(), Ke());
      else if (d.interaction && d.interaction.kind !== "view") {
        let k = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (k = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? ir({ rebuildPaintEngine: !0 }) : Wi()), st(), En(), e.setDirtyCanvas(!0, !0), Yi(), d.hqFrames = 1, tt(), ye();
      }
      d.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && mi(), Hi(), i && i.kind === "view" && an.endDrag(performance.now()), Or(), tt(), xt(d.pointerPos), ye();
    }
  }, I.onpointercancel = () => {
    var i, s, l;
    if (!ja()) {
      if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && an.endDrag(performance.now()), ((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Hi();
        const c = $n();
        c && d.paintEngine.cancelActiveStroke(c);
      }
      d.interaction = null, Hi(), Or(), xt(d.pointerPos), ye({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    ja();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.onmousemove = (i) => {
    const s = pi(i), l = Go(s, !0);
    d.interaction || (xt(s), l && d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 }));
  }, I.onmouseleave = () => {
    Go(d.pointerPos, !1), xt(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 });
  }, I.onwheel = (i) => {
    if (d.mode === "frame") {
      const s = pi(i), l = jc(i);
      l && Jb(s, l) && ye({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (an.applyWheelEvent(i) && ye({ localOnly: !0 }), i.preventDefault());
  }, I.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), zn(!0));
  }, I.ondrop = (i) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Te.depth = 0, zn(!1);
    const l = Array.from(((c = i.dataTransfer) == null ? void 0 : c.files) || []).find((p) => Nr(p));
    l && Yf(l);
  };
  const ud = (i) => {
    t !== "stickers" && t !== "cutout" || r || di(i) && (Te.depth += 1, zn(!0), i.preventDefault());
  }, cd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Te.active && di(i) && zn(!0), Te.active && i.preventDefault());
  }, fd = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Te.depth === 0 || s) && zn(!1);
  }, dd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Te.depth = 0, zn(!1), di(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", ud, !0), window.addEventListener("dragover", cd, !0), window.addEventListener("dragleave", fd, !0), window.addEventListener("drop", dd, !0);
  function Wl() {
    const { canUndo: i, canRedo: s } = Wf();
    ta(P.toolButtons, "value", "undo", { disabled: !i }), ta(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const hd = (i, s, l = !1) => {
    var w;
    const c = t === "cutout" && d.mode === "frame" ? Ue() : null, p = c || Ct(), m = c ? "shot" : To();
    if (!p || m === "stroke" || wn(p)) return;
    const x = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((k) => k.key === i);
    if (!x || x.enabled === !1) return;
    let v = Number(s);
    Number.isNaN(v) && (v = 0), v = W(v, Number(x.min), Number(x.max)), i === "yaw_deg" && (v = Ht(v)), p[i] = v, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = Si(p)), Ke(), ye(), l && st();
  };
  Ne == null || Ne.addEventListener("click", async (i) => {
    var c, p, m, x, v, w, k, C, M;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const E = Qt(s.getAttribute("data-coverage"));
      if (E === Qt(b.coverage)) return;
      b.coverage = E, d.coverage = E, h && (h.value = String(E)), o ? ae.backgroundDirty = !0 : (En(), qb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ke(), tt(), ye();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (c = P.sidePanel) == null ? void 0 : c.selectionPicker) != null && p.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const E = String(s.getAttribute("data-selection-id") || "");
      let H = null;
      E && (t === "stickers" ? H = Er().find((Z) => String((Z == null ? void 0 : Z.id) || "") === E) || null : H = ((m = mf().find((Z) => {
        var K;
        return String(((K = Z == null ? void 0 : Z.item) == null ? void 0 : K.id) || "") === E;
      })) == null ? void 0 : m.item) || null), Li(H || null), H && !Bt(H) && ml(
        Ht(Number(H.yaw_deg || 0)),
        W(Number(H.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), tt(), ye();
      return;
    }
    if (l === "copy-state-inline") {
      const E = Ct(), H = To();
      if (!E || H === "stroke" || rr().length > 1) return;
      const Z = JSON.stringify(t === "cutout" && H !== "image" ? Sf(E) : h0(E));
      try {
        await navigator.clipboard.writeText(Z), (x = P.sidePanel) != null && x.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = P.sidePanel) != null && K.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const E = String(s.getAttribute("data-visibility") || "");
      E === "panorama" ? d.showPanorama = !d.showPanorama : E === "objects" ? d.showObjects = !d.showObjects : E === "mask" && (d.showMask = !d.showMask), Ke(), ye();
      return;
    }
    if (l === "set-invert-x") {
      b.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Ho(), Ke(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), ye();
      return;
    }
    if (l === "set-invert-y") {
      b.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Ho(), Ke(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ye();
      return;
    }
    if (l === "toggle-quality-picker") {
      (k = P.sidePanel) != null && k.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (l === "set-quality") {
      const E = String(s.getAttribute("data-quality") || "balanced");
      b.ui_settings.preview_quality = E === "draft" || E === "high" ? E : "balanced", Ho(), Ke(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ye();
      return;
    }
    if (l === "ui-reset-defaults") {
      b.ui_settings.invert_view_x = !1, b.ui_settings.invert_view_y = !1, b.ui_settings.preview_quality = "balanced", Ho(), Ke(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ye();
      return;
    }
    if (l === "close-preview") {
      Ji();
      return;
    }
    if (l === "cancel-close") {
      Ji();
      return;
    }
    l === "save-close" && (Wb(), Ji());
  }), Ne == null || Ne.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && hd(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Ne == null || Ne.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && hd(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Yl = () => kf();
  Yl(), oe.addEventListener("click", (i) => {
    var v, w, k, C;
    if ((w = (v = i.target) == null ? void 0 : v.matches) != null && w.call(v, "[data-confirm-overlay]")) {
      const M = (k = P.confirmDialog) == null ? void 0 : k.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const M = d.mode;
      d.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (M !== "frame" && (ae.frameSafeRect = null), Ke(), tt()), jl(), Or(), ye();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const M = String(l.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = M, (M === "paint" || M === "mask") && Fa({ preservePanelValues: !0 }), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const M = String(l.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && l.disabled) return;
        M === "undo" ? Vl(-1) : M === "redo" ? Vl(1) : M === "clear" ? jb() : M === "add" || M === "add-image" ? Ob() : M === "add-or-look" && zb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const M = String(l.getAttribute("data-paint-tool") || "pen");
        d.paintTool = M, Fa({ preservePanelValues: !0 }), Dn[M] && (d.activeBrushPresetId = M), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Fa({ preservePanelValues: !0 }), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const M = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Hb(M);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const M = Ps.find((E) => E.id === l.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        d.paintColor = Hn(M.color), ne(!0), Tn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ne(!0) : Pe(), Tn();
        return;
      }
    }
    const c = String(((C = l == null ? void 0 : l.getAttribute) == null ? void 0 : C.call(l, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      if ($i(), B.paused) {
        re.mode = "playback", re.pendingPlaybackResume = !1, re.resumeAfterScrub = !1;
        const M = Number(P.videoTransport.duration || B.duration || 0), E = Number(B.currentTime || re.editorTime || 0), H = M > 0 && E >= M - 1e-3 ? 0 : Number(re.editorTime || E || 0), Z = Math.max(Dt(), 0.04);
        re.editorTime = H, Math.abs(E - H) > Z ? (re.seeking = !1, re.pendingPlaybackResume = !0, Ml(H)) : B.play().catch(() => {
        });
      } else
        B.pause(), re.mode = "scrub", re.resumeAfterScrub = !1, re.pendingPlaybackResume = !1, re.editorTime = Number(B.currentTime || 0), Vi();
      dr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: Dr(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode
      }), ye({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(B instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const M = !B.muted;
      B.muted = M, !M && Number(B.volume || 0) <= 0 && (B.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), dr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: Dr(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      const M = !P.videoTransport.loop;
      P.videoTransport.loop = M, B.loop = M, dr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: Dr(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: M,
        muted: B.muted,
        volume: Number(B.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (c === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const M = d.mode === "frame" ? Ue() : null;
        if (!M || M.locked === !0) return;
        Jf(M, String(l.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Or(), ye();
        return;
      }
      if (c === "frame-aspect-custom") {
        const M = d.mode === "frame" ? Ue() : null, E = l.getAttribute("data-custom-width"), H = l.getAttribute("data-custom-height");
        if (!M || !Gb(M, E, H)) return;
        P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Or(), ye();
        return;
      }
      if (c === "frame-rotate-90") {
        const M = d.mode === "frame" ? Ue() : null;
        if (!M || M.locked === !0) return;
        Zf(M), P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Or(), ye();
        return;
      }
      if (c === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, tt(), ye();
        return;
      }
      if (c === "aspect-set") {
        const M = Ct();
        if (!M) return;
        const E = String(l.getAttribute("data-aspect") || "1:1");
        Jf(M, E), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Yi(), st(), ut(), tt(), ye();
        return;
      }
      if (c === "rotate-90") {
        const M = Ct();
        if (!M) return;
        Zf(M), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Yi(), st(), ut(), tt(), ye();
        return;
      }
      if (c === "bring-front") {
        Bb();
        return;
      }
      if (c === "send-back") {
        Kb();
        return;
      }
      if (c === "duplicate") {
        Ub();
        return;
      }
      if (c === "replace-image") {
        Rb();
        return;
      }
      if (c === "toggle-lock") {
        Qg();
        return;
      }
      if (c === "back-initial") {
        o0();
        return;
      }
      if (c === "toggle-visible") {
        a0();
        return;
      }
      if (c === "delete") {
        Xf();
        return;
      }
    }
    if (c === "reset-view") {
      if (d.mode === "frame") return;
      ml(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, XN(e == null ? void 0 : e.id, d.showGrid), Yl(), ye();
      return;
    }
    if (c === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), gy();
      return;
    }
    if (c === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const M = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = M, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = M ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), yd(), ye();
      return;
    }
    const p = i.target.closest("[data-paint-history-index]");
    if (!p) return;
    const m = Number(p.getAttribute("data-paint-history-index")), x = d.customPaintHistory[m];
    x && (d.customPaintColor = Hn(x), d.paintColor = Hn(x), Tn());
  }), oe.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(B instanceof HTMLVideoElement)) return;
      $i();
      const m = W(Number(s.value || 0), 0, Number(P.videoTransport.duration || 0));
      re.mode = "scrub", !re.seeking && !B.paused && !B.ended && (re.resumeAfterScrub = !0, B.pause()), re.editorTime = m, Yn(m), dr({
        ready: !!B.getAttribute("src"),
        playing: !1,
        visible: Dr(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(rt.__panoFrameIdx || 0) > 0 && (ae.backgroundDirty = !0, ae.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), Ml(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(B instanceof HTMLVideoElement)) return;
      const m = W(Number(l.value || 0), 0, 1);
      B.volume = m, B.muted = m <= 1e-4, dr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: Dr(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: B.muted,
        volume: m
      });
      return;
    }
    const c = i.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), x = ii(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[x] = m, Tn(), ny();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...d.customPaintColor, a: W(Number(p.value) / 100, 0, 1) };
      d.customPaintColor = Hn(m), d.paintColor = Hn(m), Tn();
    }
  }), oe.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(B instanceof HTMLVideoElement)) return;
      re.pendingPlaybackResume = !!re.resumeAfterScrub, re.resumeAfterScrub = !1, re.pendingPlaybackResume || (re.mode = "scrub"), re.seeking || (re.pendingPlaybackResume ? (re.pendingPlaybackResume = !1, re.mode = "playback", B.play().catch(() => {
      })) : (Vi(), ye({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Bo();
  }), oe.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Bo();
  }), oe.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Bo();
  }), oe.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Bo();
  }), oe.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !oe.contains(s) || me.target !== s && (me.target = s, me.timer && clearTimeout(me.timer), me.timer = window.setTimeout(() => {
      me.target === s && cy(s);
    }, 220));
  }), oe.addEventListener("pointerout", (i) => {
    var c, p;
    const s = i.target.closest("[data-tip]");
    !s || me.target !== s || (i.relatedTarget instanceof Element ? (p = (c = i.relatedTarget).closest) == null ? void 0 : p.call(c, "[data-tip]") : null) === s || mi();
  }), oe.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || mi();
  });
  const py = (i, s) => {
    var v;
    if (!te) return;
    const l = te.getBoundingClientRect(), c = W((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - W((s - l.top) / Math.max(1, l.height), 0, 1), m = Eu(d.customPaintColor), x = { ...Tu(m.h, c, p), a: Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    d.customPaintColor = Hn(x), d.paintColor = Hn(x), Tn();
  }, my = (i) => {
    var m;
    if (!pe) return;
    const s = pe.getBoundingClientRect(), l = W((i - s.left) / Math.max(1, s.width), 0, 1), c = Eu(d.customPaintColor), p = { ...Tu(l, c.s, c.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = Hn(p), d.paintColor = Hn(p), Tn();
  }, pd = (i, s) => {
    const l = i.pointerId;
    s(i);
    const c = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  te && (te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), pd(i, (s) => py(s.clientX, s.clientY));
  }), pe && (pe.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), pd(i, (s) => my(s.clientX));
  }), oe.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", c = (p = P.confirmDialog) == null ? void 0 : p.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(l);
  });
  const md = () => {
    const i = !!d.fullscreen;
    ta(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ee.fullscreen_close : Ee.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ko = (i) => {
    const s = !!i;
    d.fullscreen !== s && (d.fullscreen = s, oe.classList.toggle("pano-modal-fullscreen", s), s ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Yl(), md(), ln(), ye());
  }, gd = () => document.fullscreenElement === le, gy = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Ko(!d.fullscreen);
        return;
      }
      gd() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = le.requestFullscreen) == null ? void 0 : i.call(le));
    } catch {
      Ko(!d.fullscreen);
    }
  }, bd = () => {
    document.fullscreenEnabled && Ko(gd());
  };
  document.addEventListener("fullscreenchange", bd), md();
  const yd = () => {
    const i = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? Ee.fullscreen_close : Ee.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  yd();
  const ql = e.onExecuted, Xl = e.onConnectionsChange;
  let Jl = null, Zl = null, vd = null, _d = () => {
  };
  !r && t === "stickers" && (vd = (i = "sync") => {
    wf(i);
  }, _d = bg(e, vd), Jl = function(...s) {
    typeof ql == "function" && ql.apply(this, s), LN(Le, os), no(this, "executed");
  }, e.onExecuted = Jl, Zl = function(...s) {
    typeof Xl == "function" && Xl.apply(this, s), no(this, "connections");
  }, e.onConnectionsChange = Zl), r || mp.set(String(e.id ?? "0"), () => Cf());
  let Xi = null;
  const Ji = async () => Xi || (Xi = (async () => {
    var i, s, l, c, p, m, x, v, w, k, C;
    return mp.delete(String(e.id ?? "0")), Zb(), r || En(), document.fullscreenElement === le && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", bd), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === ed && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || p.call(c, !0, !0), (v = (x = (m = lr) == null ? void 0 : m.canvas) == null ? void 0 : x.setDirty) == null || v.call(x, !0, !0), mi(), Db(), B instanceof HTMLVideoElement && B.pause(), bt.forEach((M) => {
      try {
        M();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), Et == null || Et.dispose(), (k = Oe == null ? void 0 : Oe.unmount) == null || k.call(Oe), (C = Ce == null ? void 0 : Ce.dispose) == null || C.call(Ce), zn(!1), window.removeEventListener("keydown", xd, !0), window.removeEventListener("keydown", Sd, !0), window.removeEventListener("keydown", Wo, !0), window.removeEventListener("keyup", Wo, !0), window.removeEventListener("blur", wd), window.removeEventListener("keydown", kd, !0), window.removeEventListener("dragenter", ud, !0), window.removeEventListener("dragover", cd, !0), window.removeEventListener("dragleave", fd, !0), window.removeEventListener("drop", dd, !0), !r && t === "stickers" && (e.onExecuted === Jl && (e.onExecuted = ql), e.onConnectionsChange === Zl && (e.onConnectionsChange = Xl), _d()), G.unmount(), L.remove(), Yb(), Xi = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Xi = null, !1)), Xi), xd = (i) => {
    var s, l, c, p, m;
    if (i.key === "Escape") {
      if (ja()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === le) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Ko(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Ji();
    }
  }, Sd = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), c = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || c === 46) && !(s === "Backspace" || l === "Backspace" || c === 8)) return;
    const x = i.target, v = ((x == null ? void 0 : x.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || x != null && x.isContentEditable || !Ct() || (Xf(), i.preventDefault(), i.stopPropagation());
  }, Wo = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    d.marqueeModifier === s && d.altModifier === l || (d.marqueeModifier = s, d.altModifier = l, Rr(), xt(d.pointerPos));
  }, wd = () => {
    d.marqueeModifier = !1, d.altModifier = !1, Rr(), xt(d.pointerPos);
  }, kd = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const c = i.target, p = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: x } = Wf();
    i.shiftKey && !x || !i.shiftKey && !m || (Vl(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", xd, !0), window.addEventListener("keydown", Sd, !0), window.addEventListener("keydown", Wo, !0), window.addEventListener("keyup", Wo, !0), window.addEventListener("blur", wd), window.addEventListener("keydown", kd, !0), le.addEventListener("pointerdown", (i) => {
    i.target === le && Ji();
  });
  function hr(i, s, { rollbackState: l = !1 } = {}) {
    let c = "";
    try {
      l && (c = JSON.stringify(b)), s();
    } catch (p) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(b).forEach((x) => delete b[x]), Object.assign(b, m), r || En();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  hr("cutout-focus", g0), !r && t === "stickers" && hr("external-sticker-sync", () => wf("open"), { rollbackState: !0 }), Lb().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), hr("history", st), hr("undo-redo", Wl), hr("paint-ui", Tn), hr("side-panel", Ke), hr("look-at-frame", Pl), hr("video-source", $i), hr("canvas-size", Bf), hr("cursor", () => xt(d.pointerPos)), ye(), ae.rafId = requestAnimationFrame(Kf);
}
lr.registerExtension(bS({
  app: lr,
  openEditor: nP,
  attachStickers: Iw,
  attachCutout: Tw,
  attachPreview: Cw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: NN
}));
