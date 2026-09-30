import * as hs from "../../scripts/app.js";
import { app as sr } from "../../scripts/app.js";
import { api as mn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Mt = {}, da = [], Mr = () => {
}, Np = () => !1, Js = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zs = (e) => e.startsWith("onUpdate:"), yn = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ny = Object.prototype.hasOwnProperty, pt = (e, t) => Ny.call(e, t), Je = Array.isArray, ha = (e) => So(e) === "[object Map]", Pp = (e) => So(e) === "[object Set]", Dd = (e) => So(e) === "[object Date]", Ze = (e) => typeof e == "function", $t = (e) => typeof e == "string", Nr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Ap = (e) => (vt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Cp = Object.prototype.toString, So = (e) => Cp.call(e), Py = (e) => So(e).slice(8, -1), Ip = (e) => So(e) === "[object Object]", xc = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ vc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ay = /-\w/g, Nn = Qs(
  (e) => e.replace(Ay, (t) => t.slice(1).toUpperCase())
), Cy = /\B([A-Z])/g, Di = Qs(
  (e) => e.replace(Cy, "-$1").toLowerCase()
), el = Qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), iu = Qs(
  (e) => e ? `on${el(e)}` : ""
), _r = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Tp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Sc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Od;
const tl = () => Od || (Od = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = $t(r) ? Dy(r) : Gt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if ($t(e) || vt(e))
    return e;
}
const Iy = /;(?![^(]*\))/g, Ty = /:([^]+)/, Ey = /\/\*[^]*?\*\//g;
function Dy(e) {
  const t = {};
  return e.replace(Ey, "").split(Iy).forEach((n) => {
    if (n) {
      const r = n.split(Ty);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function dt(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = dt(e[n]);
      r && (t += r + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Oy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fy = /* @__PURE__ */ vc(Oy);
function Ep(e) {
  return !!e || e === "";
}
function Ry(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = wc(e[r], t[r]);
  return n;
}
function wc(e, t) {
  if (e === t) return !0;
  let n = Dd(e), r = Dd(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Nr(e), r = Nr(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? Ry(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), d = t.hasOwnProperty(u);
      if (f && !d || !f && d || !wc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Dp = (e) => !!(e && e.__v_isRef === !0), ft = (e) => $t(e) ? e : e == null ? "" : Je(e) || vt(e) && (e.toString === Cp || !Ze(e.toString)) ? Dp(e) ? ft(e.value) : JSON.stringify(e, Op, 2) : String(e), Op = (e, t) => Dp(t) ? Op(e, t.value) : ha(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[au(r, o) + " =>"] = a, n),
    {}
  )
} : Pp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => au(n))
} : Nr(t) ? au(t) : vt(t) && !Je(t) && !Ip(t) ? String(t) : t, au = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ln;
class Ly {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ln, !t && Ln && (this.index = (Ln.scopes || (Ln.scopes = [])).push(
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
      const n = Ln;
      try {
        return Ln = this, t();
      } finally {
        Ln = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ln, Ln = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ln = this.prevScope, this.prevScope = void 0);
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
function Vy() {
  return Ln;
}
let Pt;
const ou = /* @__PURE__ */ new WeakSet();
class Fp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ln && Ln.active && Ln.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ou.has(this) && (ou.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fd(this), Vp(this);
    const t = Pt, n = lr;
    Pt = this, lr = !0;
    try {
      return this.fn();
    } finally {
      zp(this), Pt = t, lr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nc(t);
      this.deps = this.depsTail = void 0, Fd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ou.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zu(this) && this.run();
  }
  get dirty() {
    return zu(this);
  }
}
let Rp = 0, io, ao;
function Lp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ao, ao = e;
    return;
  }
  e.next = io, io = e;
}
function kc() {
  Rp++;
}
function Mc() {
  if (--Rp > 0)
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
function Vp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), Nc(r), zy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function zu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($p(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $p(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co) || (e.globalVersion = co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Pt, r = lr;
  Pt = e, lr = !0;
  try {
    Vp(e);
    const a = e.fn(e._value);
    (t.version === 0 || _r(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Pt = n, lr = r, zp(e), e.flags &= -3;
  }
}
function Nc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Nc(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lr = !0;
const jp = [];
function Wr() {
  jp.push(lr), lr = !1;
}
function Yr() {
  const e = jp.pop();
  lr = e === void 0 ? !0 : e;
}
function Fd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Pt;
    Pt = void 0;
    try {
      t();
    } finally {
      Pt = n;
    }
  }
}
let co = 0;
class $y {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Pc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Pt || !lr || Pt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Pt)
      n = this.activeLink = new $y(Pt, this), Pt.deps ? (n.prevDep = Pt.depsTail, Pt.depsTail.nextDep = n, Pt.depsTail = n) : Pt.deps = Pt.depsTail = n, Hp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Pt.depsTail, n.nextDep = void 0, Pt.depsTail.nextDep = n, Pt.depsTail = n, Pt.deps === n && (Pt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, co++, this.notify(t);
  }
  notify(t) {
    kc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mc();
    }
  }
}
function Hp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Hp(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const $u = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ Symbol(
  ""
), ju = /* @__PURE__ */ Symbol(
  ""
), fo = /* @__PURE__ */ Symbol(
  ""
);
function hn(e, t, n) {
  if (lr && Pt) {
    let r = $u.get(e);
    r || $u.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new Pc()), a.map = r, a.key = n), a.track();
  }
}
function Ur(e, t, n, r, a, o) {
  const u = $u.get(e);
  if (!u) {
    co++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (kc(), t === "clear")
    u.forEach(f);
  else {
    const d = Je(e), b = d && xc(n);
    if (d && n === "length") {
      const g = Number(r);
      u.forEach((v, S) => {
        (S === "length" || S === fo || !Nr(S) && S >= g) && f(v);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), b && f(u.get(fo)), t) {
        case "add":
          d ? b && f(u.get("length")) : (f(u.get(Mi)), ha(e) && f(u.get(ju)));
          break;
        case "delete":
          d || (f(u.get(Mi)), ha(e) && f(u.get(ju)));
          break;
        case "set":
          ha(e) && f(u.get(Mi));
          break;
      }
  }
  Mc();
}
function Qi(e) {
  const t = /* @__PURE__ */ ht(e);
  return t === e ? t : (hn(t, "iterate", fo), /* @__PURE__ */ Qn(e) ? t : t.map(cr));
}
function nl(e) {
  return hn(e = /* @__PURE__ */ ht(e), "iterate", fo), e;
}
function br(e, t) {
  return /* @__PURE__ */ qr(e) ? wa(/* @__PURE__ */ Ni(e) ? cr(t) : t) : cr(t);
}
const jy = {
  __proto__: null,
  [Symbol.iterator]() {
    return su(this, Symbol.iterator, (e) => br(this, e));
  },
  concat(...e) {
    return Qi(this).concat(
      ...e.map((t) => Je(t) ? Qi(t) : t)
    );
  },
  entries() {
    return su(this, "entries", (e) => (e[1] = br(this, e[1]), e));
  },
  every(e, t) {
    return Fr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Fr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => br(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Fr(
      this,
      "find",
      e,
      t,
      (n) => br(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Fr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Fr(
      this,
      "findLast",
      e,
      t,
      (n) => br(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Fr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Fr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return lu(this, "includes", e);
  },
  indexOf(...e) {
    return lu(this, "indexOf", e);
  },
  join(e) {
    return Qi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return lu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Fr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ua(this, "pop");
  },
  push(...e) {
    return Ua(this, "push", e);
  },
  reduce(e, ...t) {
    return Rd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rd(this, "reduceRight", e, t);
  },
  shift() {
    return Ua(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Fr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ua(this, "splice", e);
  },
  toReversed() {
    return Qi(this).toReversed();
  },
  toSorted(e) {
    return Qi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ua(this, "unshift", e);
  },
  values() {
    return su(this, "values", (e) => br(this, e));
  }
};
function su(e, t, n) {
  const r = nl(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ Qn(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const Hy = Array.prototype;
function Fr(e, t, n, r, a, o) {
  const u = nl(e), f = u !== e && !/* @__PURE__ */ Qn(e), d = u[t];
  if (d !== Hy[t]) {
    const v = d.apply(e, o);
    return f ? cr(v) : v;
  }
  let b = n;
  u !== e && (f ? b = function(v, S) {
    return n.call(this, br(e, v), S, e);
  } : n.length > 2 && (b = function(v, S) {
    return n.call(this, v, S, e);
  }));
  const g = d.call(u, b, r);
  return f && a ? a(g) : g;
}
function Rd(e, t, n, r) {
  const a = nl(e), o = a !== e && !/* @__PURE__ */ Qn(e);
  let u = n, f = !1;
  a !== e && (o ? (f = r.length === 0, u = function(b, g, v) {
    return f && (f = !1, b = br(e, b)), n.call(this, b, br(e, g), v, e);
  }) : n.length > 3 && (u = function(b, g, v) {
    return n.call(this, b, g, v, e);
  }));
  const d = a[t](u, ...r);
  return f ? br(e, d) : d;
}
function lu(e, t, n) {
  const r = /* @__PURE__ */ ht(e);
  hn(r, "iterate", fo);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ic(n[0]) ? (n[0] = /* @__PURE__ */ ht(n[0]), r[t](...n)) : a;
}
function Ua(e, t, n = []) {
  Wr(), kc();
  const r = (/* @__PURE__ */ ht(e))[t].apply(e, n);
  return Mc(), Yr(), r;
}
const Uy = /* @__PURE__ */ vc("__proto__,__v_isRef,__isVue"), Up = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nr)
);
function Gy(e) {
  Nr(e) || (e = String(e));
  const t = /* @__PURE__ */ ht(this);
  return hn(t, "has", e), t.hasOwnProperty(e);
}
class Gp {
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
      return r === (a ? o ? ev : Yp : o ? Wp : Kp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = Je(t);
    if (!a) {
      let d;
      if (u && (d = jy[n]))
        return d;
      if (n === "hasOwnProperty")
        return Gy;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : r
    );
    if ((Nr(n) ? Up.has(n) : Uy(n)) || (a || hn(t, "get", n), o))
      return f;
    if (/* @__PURE__ */ gn(f)) {
      const d = u && xc(n) ? f : f.value;
      return a && vt(d) ? /* @__PURE__ */ Uu(d) : d;
    }
    return vt(f) ? a ? /* @__PURE__ */ Uu(f) : /* @__PURE__ */ Ca(f) : f;
  }
}
class Bp extends Gp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    const u = Je(t) && xc(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ qr(o);
      if (!/* @__PURE__ */ Qn(r) && !/* @__PURE__ */ qr(r) && (o = /* @__PURE__ */ ht(o), r = /* @__PURE__ */ ht(r)), !u && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(r))
        return b || (o.value = r), !0;
    }
    const f = u ? Number(n) < t.length : pt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ gn(t) ? t : a
    );
    return t === /* @__PURE__ */ ht(a) && (f ? _r(r, o) && Ur(t, "set", n, r) : Ur(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = pt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && Ur(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Nr(n) || !Up.has(n)) && hn(t, "has", n), r;
  }
  ownKeys(t) {
    return hn(
      t,
      "iterate",
      Je(t) ? "length" : Mi
    ), Reflect.ownKeys(t);
  }
}
class By extends Gp {
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
const Ky = /* @__PURE__ */ new Bp(), Wy = /* @__PURE__ */ new By(), Yy = /* @__PURE__ */ new Bp(!0);
const Hu = (e) => e, Ko = (e) => Reflect.getPrototypeOf(e);
function qy(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = /* @__PURE__ */ ht(a), u = ha(o), f = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, b = a[e](...r), g = n ? Hu : t ? wa : cr;
    return !t && hn(
      o,
      "iterate",
      d ? ju : Mi
    ), yn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: S } = b.next();
          return S ? { value: v, done: S } : {
            value: f ? [g(v[0]), g(v[1])] : g(v),
            done: S
          };
        }
      }
    );
  };
}
function Wo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xy(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ ht(o), f = /* @__PURE__ */ ht(a);
      e || (_r(a, f) && hn(u, "get", a), hn(u, "get", f));
      const { has: d } = Ko(u), b = t ? Hu : e ? wa : cr;
      if (d.call(u, a))
        return b(o.get(a));
      if (d.call(u, f))
        return b(o.get(f));
      o !== u && o.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && hn(/* @__PURE__ */ ht(a), "iterate", Mi), a.size;
    },
    has(a) {
      const o = this.__v_raw, u = /* @__PURE__ */ ht(o), f = /* @__PURE__ */ ht(a);
      return e || (_r(a, f) && hn(u, "has", a), hn(u, "has", f)), a === f ? o.has(a) : o.has(a) || o.has(f);
    },
    forEach(a, o) {
      const u = this, f = u.__v_raw, d = /* @__PURE__ */ ht(f), b = t ? Hu : e ? wa : cr;
      return !e && hn(d, "iterate", Mi), f.forEach((g, v) => a.call(o, b(g), b(v), u));
    }
  };
  return yn(
    n,
    e ? {
      add: Wo("add"),
      set: Wo("set"),
      delete: Wo("delete"),
      clear: Wo("clear")
    } : {
      add(a) {
        const o = /* @__PURE__ */ ht(this), u = Ko(o), f = /* @__PURE__ */ ht(a), d = !t && !/* @__PURE__ */ Qn(a) && !/* @__PURE__ */ qr(a) ? f : a;
        return u.has.call(o, d) || _r(a, d) && u.has.call(o, a) || _r(f, d) && u.has.call(o, f) || (o.add(d), Ur(o, "add", d, d)), this;
      },
      set(a, o) {
        !t && !/* @__PURE__ */ Qn(o) && !/* @__PURE__ */ qr(o) && (o = /* @__PURE__ */ ht(o));
        const u = /* @__PURE__ */ ht(this), { has: f, get: d } = Ko(u);
        let b = f.call(u, a);
        b || (a = /* @__PURE__ */ ht(a), b = f.call(u, a));
        const g = d.call(u, a);
        return u.set(a, o), b ? _r(o, g) && Ur(u, "set", a, o) : Ur(u, "add", a, o), this;
      },
      delete(a) {
        const o = /* @__PURE__ */ ht(this), { has: u, get: f } = Ko(o);
        let d = u.call(o, a);
        d || (a = /* @__PURE__ */ ht(a), d = u.call(o, a)), f && f.call(o, a);
        const b = o.delete(a);
        return d && Ur(o, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ ht(this), o = a.size !== 0, u = a.clear();
        return o && Ur(
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
    n[a] = qy(a, e, t);
  }), n;
}
function Ac(e, t) {
  const n = Xy(e, t);
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    pt(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Jy = {
  get: /* @__PURE__ */ Ac(!1, !1)
}, Zy = {
  get: /* @__PURE__ */ Ac(!1, !0)
}, Qy = {
  get: /* @__PURE__ */ Ac(!0, !1)
};
const Kp = /* @__PURE__ */ new WeakMap(), Wp = /* @__PURE__ */ new WeakMap(), Yp = /* @__PURE__ */ new WeakMap(), ev = /* @__PURE__ */ new WeakMap();
function tv(e) {
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
function nv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tv(Py(e));
}
// @__NO_SIDE_EFFECTS__
function Ca(e) {
  return /* @__PURE__ */ qr(e) ? e : Cc(
    e,
    !1,
    Ky,
    Jy,
    Kp
  );
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return Cc(
    e,
    !1,
    Yy,
    Zy,
    Wp
  );
}
// @__NO_SIDE_EFFECTS__
function Uu(e) {
  return Cc(
    e,
    !0,
    Wy,
    Qy,
    Yp
  );
}
function Cc(e, t, n, r, a) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = nv(e);
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
function Ni(e) {
  return /* @__PURE__ */ qr(e) ? /* @__PURE__ */ Ni(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ic(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ht(t) : e;
}
function iv(e) {
  return !pt(e, "__v_skip") && Object.isExtensible(e) && Tp(e, "__v_skip", !0), e;
}
const cr = (e) => vt(e) ? /* @__PURE__ */ Ca(e) : e, wa = (e) => vt(e) ? /* @__PURE__ */ Uu(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return av(e, !1);
}
function av(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new ov(e, t);
}
class ov {
  constructor(t, n) {
    this.dep = new Pc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ht(t), this._value = n ? t : cr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Qn(t) || /* @__PURE__ */ qr(t);
    t = r ? t : /* @__PURE__ */ ht(t), _r(t, n) && (this._rawValue = t, this._value = r ? t : cr(t), this.dep.trigger());
  }
}
function mt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const sv = {
  get: (e, t, n) => t === "__v_raw" ? e : mt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ gn(a) && !/* @__PURE__ */ gn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function qp(e) {
  return /* @__PURE__ */ Ni(e) ? e : new Proxy(e, sv);
}
class lv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Pc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pt !== this)
      return Lp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $p(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function uv(e, t, n = !1) {
  let r, a;
  return Ze(e) ? r = e : (r = e.get, a = e.set), new lv(r, a, n);
}
const Yo = {}, Cs = /* @__PURE__ */ new WeakMap();
let Si;
function cv(e, t = !1, n = Si) {
  if (n) {
    let r = Cs.get(n);
    r || Cs.set(n, r = []), r.push(e);
  }
}
function fv(e, t, n = Mt) {
  const { immediate: r, deep: a, once: o, scheduler: u, augmentJob: f, call: d } = n, b = (T) => a ? T : /* @__PURE__ */ Qn(T) || a === !1 || a === 0 ? Gr(T, 1) : Gr(T);
  let g, v, S, M, y = !1, D = !1;
  if (/* @__PURE__ */ gn(e) ? (v = () => e.value, y = /* @__PURE__ */ Qn(e)) : /* @__PURE__ */ Ni(e) ? (v = () => b(e), y = !0) : Je(e) ? (D = !0, y = e.some((T) => /* @__PURE__ */ Ni(T) || /* @__PURE__ */ Qn(T)), v = () => e.map((T) => {
    if (/* @__PURE__ */ gn(T))
      return T.value;
    if (/* @__PURE__ */ Ni(T))
      return b(T);
    if (Ze(T))
      return d ? d(T, 2) : T();
  })) : Ze(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (S) {
      Wr();
      try {
        S();
      } finally {
        Yr();
      }
    }
    const T = Si;
    Si = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      Si = T;
    }
  } : v = Mr, t && a) {
    const T = v, F = a === !0 ? 1 / 0 : a;
    v = () => Gr(T(), F);
  }
  const z = Vy(), L = () => {
    g.stop(), z && z.active && _c(z.effects, g);
  };
  if (o && t) {
    const T = t;
    t = (...F) => {
      T(...F), L();
    };
  }
  let P = D ? new Array(e.length).fill(Yo) : Yo;
  const V = (T) => {
    if (!(!(g.flags & 1) || !g.dirty && !T))
      if (t) {
        const F = g.run();
        if (a || y || (D ? F.some((j, $) => _r(j, P[$])) : _r(F, P))) {
          S && S();
          const j = Si;
          Si = g;
          try {
            const $ = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === Yo ? void 0 : D && P[0] === Yo ? [] : P,
              M
            ];
            P = F, d ? d(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Si = j;
          }
        }
      } else
        g.run();
  };
  return f && f(V), g = new Fp(v), g.scheduler = u ? () => u(V, !1) : V, M = (T) => cv(T, !1, g), S = g.onStop = () => {
    const T = Cs.get(g);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const F of T) F();
      Cs.delete(g);
    }
  }, t ? r ? V(!0) : P = g.run() : u ? u(V.bind(null, !0), !0) : g.run(), L.pause = g.pause.bind(g), L.resume = g.resume.bind(g), L.stop = L, L;
}
function Gr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ gn(e))
    Gr(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      Gr(e[r], t, n);
  else if (Pp(e) || ha(e))
    e.forEach((r) => {
      Gr(r, t, n);
    });
  else if (Ip(e)) {
    for (const r in e)
      Gr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Gr(e[r], t, n);
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
    rl(a, t, n);
  }
}
function Pr(e, t, n, r) {
  if (Ze(e)) {
    const a = wo(e, t, n, r);
    return a && Ap(a) && a.catch((o) => {
      rl(o, t, n);
    }), a;
  }
  if (Je(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++)
      a.push(Pr(e[o], t, n, r));
    return a;
  }
}
function rl(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: u } = t && t.appContext.config || Mt;
  if (t) {
    let f = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const g = f.ec;
      if (g) {
        for (let v = 0; v < g.length; v++)
          if (g[v](e, d, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (o) {
      Wr(), wo(o, null, 10, [
        e,
        d,
        b
      ]), Yr();
      return;
    }
  }
  dv(e, n, a, r, u);
}
function dv(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Mn = [];
let gr = -1;
const pa = [];
let ai = null, oa = 0;
const Xp = /* @__PURE__ */ Promise.resolve();
let Is = null;
function Tc(e) {
  const t = Is || Xp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hv(e) {
  let t = gr + 1, n = Mn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Mn[r], o = ho(a);
    o < e || o === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ec(e) {
  if (!(e.flags & 1)) {
    const t = ho(e), n = Mn[Mn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ho(n) ? Mn.push(e) : Mn.splice(hv(t), 0, e), e.flags |= 1, Jp();
  }
}
function Jp() {
  Is || (Is = Xp.then(Qp));
}
function pv(e) {
  Je(e) ? pa.push(...e) : ai && e.id === -1 ? ai.splice(oa + 1, 0, e) : e.flags & 1 || (pa.push(e), e.flags |= 1), Jp();
}
function Ld(e, t, n = gr + 1) {
  for (; n < Mn.length; n++) {
    const r = Mn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Mn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Zp(e) {
  if (pa.length) {
    const t = [...new Set(pa)].sort(
      (n, r) => ho(n) - ho(r)
    );
    if (pa.length = 0, ai) {
      ai.push(...t);
      return;
    }
    for (ai = t, oa = 0; oa < ai.length; oa++) {
      const n = ai[oa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ai = null, oa = 0;
  }
}
const ho = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qp(e) {
  try {
    for (gr = 0; gr < Mn.length; gr++) {
      const t = Mn[gr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; gr < Mn.length; gr++) {
      const t = Mn[gr];
      t && (t.flags &= -2);
    }
    gr = -1, Mn.length = 0, Zp(), Is = null, (Mn.length || pa.length) && Qp();
  }
}
let Un = null, em = null;
function Ts(e) {
  const t = Un;
  return Un = e, em = e && e.type.__scopeId || null, t;
}
function tm(e, t = Un, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && qd(-1);
    const o = Ts(t);
    let u;
    try {
      u = e(...a);
    } finally {
      Ts(o), r._d && qd(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Pi(e, t) {
  if (Un === null)
    return e;
  const n = ll(Un), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, u, f, d = Mt] = t[a];
    o && (Ze(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Gr(u), r.push({
      dir: o,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: d
    }));
  }
  return e;
}
function yi(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    o && (f.oldValue = o[u].value);
    let d = f.dir[r];
    d && (Wr(), Pr(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Yr());
  }
}
function mv(e, t) {
  if (pn) {
    let n = pn.provides;
    const r = pn.parent && pn.parent.provides;
    r === n && (n = pn.provides = Object.create(r)), n[e] = t;
  }
}
function ms(e, t, n = !1) {
  const r = p1();
  if (r || ma) {
    let a = ma ? ma._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ze(t) ? t.call(r && r.proxy) : t;
  }
}
const gv = /* @__PURE__ */ Symbol.for("v-scx"), bv = () => ms(gv);
function Ai(e, t, n) {
  return nm(e, t, n);
}
function nm(e, t, n = Mt) {
  const { immediate: r, deep: a, flush: o, once: u } = n, f = yn({}, n), d = t && r || !t && o !== "post";
  let b;
  if (mo) {
    if (o === "sync") {
      const M = bv();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = Mr, M.resume = Mr, M.pause = Mr, M;
    }
  }
  const g = pn;
  f.call = (M, y, D) => Pr(M, g, y, D);
  let v = !1;
  o === "post" ? f.scheduler = (M) => {
    Rn(M, g && g.suspense);
  } : o !== "sync" && (v = !0, f.scheduler = (M, y) => {
    y ? M() : Ec(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), v && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const S = fv(e, t, f);
  return mo && (b ? b.push(S) : d && S()), S;
}
function yv(e, t, n) {
  const r = this.proxy, a = $t(e) ? e.includes(".") ? rm(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ze(t) ? o = t : (o = t.handler, n = t);
  const u = ko(this), f = nm(a, o.bind(r), n);
  return u(), f;
}
function rm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const vv = /* @__PURE__ */ Symbol("_vte"), _v = (e) => e.__isTeleport, xv = /* @__PURE__ */ Symbol("_leaveCb");
function Dc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Dc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function im(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Vd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Es = /* @__PURE__ */ new WeakMap();
function oo(e, t, n, r, a = !1) {
  if (Je(e)) {
    e.forEach(
      (D, z) => oo(
        D,
        t && (Je(t) ? t[z] : t),
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
  const o = r.shapeFlag & 4 ? ll(r.component) : r.el, u = a ? null : o, { i: f, r: d } = e, b = t && t.r, g = f.refs === Mt ? f.refs = {} : f.refs, v = f.setupState, S = /* @__PURE__ */ ht(v), M = v === Mt ? Np : (D) => Vd(g, D) ? !1 : pt(S, D), y = (D, z) => !(z && Vd(g, z));
  if (b != null && b !== d) {
    if (zd(t), $t(b))
      g[b] = null, M(b) && (v[b] = null);
    else if (/* @__PURE__ */ gn(b)) {
      const D = t;
      y(b, D.k) && (b.value = null), D.k && (g[D.k] = null);
    }
  }
  if (Ze(d))
    wo(d, f, 12, [u, g]);
  else {
    const D = $t(d), z = /* @__PURE__ */ gn(d);
    if (D || z) {
      const L = () => {
        if (e.f) {
          const P = D ? M(d) ? v[d] : g[d] : y() || !e.k ? d.value : g[e.k];
          if (a)
            Je(P) && _c(P, o);
          else if (Je(P))
            P.includes(o) || P.push(o);
          else if (D)
            g[d] = [o], M(d) && (v[d] = g[d]);
          else {
            const V = [o];
            y(d, e.k) && (d.value = V), e.k && (g[e.k] = V);
          }
        } else D ? (g[d] = u, M(d) && (v[d] = u)) : z && (y(d, e.k) && (d.value = u), e.k && (g[e.k] = u));
      };
      if (u) {
        const P = () => {
          L(), Es.delete(e);
        };
        P.id = -1, Es.set(e, P), Rn(P, n);
      } else
        zd(e), L();
    }
  }
}
function zd(e) {
  const t = Es.get(e);
  t && (t.flags |= 8, Es.delete(e));
}
tl().requestIdleCallback;
tl().cancelIdleCallback;
const so = (e) => !!e.type.__asyncLoader, am = (e) => e.type.__isKeepAlive;
function Sv(e, t) {
  om(e, "a", t);
}
function wv(e, t) {
  om(e, "da", t);
}
function om(e, t, n = pn) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (il(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      am(a.parent.vnode) && kv(r, t, n, a), a = a.parent;
  }
}
function kv(e, t, n, r) {
  const a = il(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  sm(() => {
    _c(r[t], a);
  }, n);
}
function il(e, t, n = pn, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...u) => {
      Wr();
      const f = ko(n), d = Pr(t, n, e, u);
      return f(), Yr(), d;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const Jr = (e) => (t, n = pn) => {
  (!mo || e === "sp") && il(e, (...r) => t(...r), n);
}, Mv = Jr("bm"), Oc = Jr("m"), Nv = Jr(
  "bu"
), Pv = Jr("u"), al = Jr(
  "bum"
), sm = Jr("um"), Av = Jr(
  "sp"
), Cv = Jr("rtg"), Iv = Jr("rtc");
function Tv(e, t = pn) {
  il("ec", e, t);
}
const Ev = "components", lm = /* @__PURE__ */ Symbol.for("v-ndc");
function Dv(e) {
  return $t(e) ? Ov(Ev, e, !1) || e : e || lm;
}
function Ov(e, t, n = !0, r = !1) {
  const a = Un || pn;
  if (a) {
    const o = a.type;
    {
      const f = v1(
        o,
        !1
      );
      if (f && (f === t || f === Nn(t) || f === el(Nn(t))))
        return o;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      $d(a[e] || o[e], t) || // global registration
      $d(a.appContext[e], t)
    );
    return !u && r ? o : u;
  }
}
function $d(e, t) {
  return e && (e[t] || e[Nn(t)] || e[el(Nn(t))]);
}
function zt(e, t, n, r) {
  let a;
  const o = n, u = Je(e);
  if (u || $t(e)) {
    const f = u && /* @__PURE__ */ Ni(e);
    let d = !1, b = !1;
    f && (d = !/* @__PURE__ */ Qn(e), b = /* @__PURE__ */ qr(e), e = nl(e)), a = new Array(e.length);
    for (let g = 0, v = e.length; g < v; g++)
      a[g] = t(
        d ? b ? wa(cr(e[g])) : cr(e[g]) : e[g],
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
        (f, d) => t(f, d, void 0, o)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let d = 0, b = f.length; d < b; d++) {
        const g = f[d];
        a[d] = t(e[g], g, d, o);
      }
    }
  else
    a = [];
  return a;
}
const Gu = (e) => e ? Cm(e) ? ll(e) : Gu(e.parent) : null, lo = (
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
    $parent: (e) => Gu(e.parent),
    $root: (e) => Gu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ec(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Tc.bind(e.proxy)),
    $watch: (e) => yv.bind(e)
  })
), uu = (e, t) => e !== Mt && !e.__isScriptSetup && pt(e, t), Fv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: o, accessCache: u, type: f, appContext: d } = e;
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
        if (uu(r, t))
          return u[t] = 1, r[t];
        if (a !== Mt && pt(a, t))
          return u[t] = 2, a[t];
        if (pt(o, t))
          return u[t] = 3, o[t];
        if (n !== Mt && pt(n, t))
          return u[t] = 4, n[t];
        Bu && (u[t] = 0);
      }
    }
    const b = lo[t];
    let g, v;
    if (b)
      return t === "$attrs" && hn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = f.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== Mt && pt(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, pt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return uu(a, t) ? (a[t] = n, !0) : r !== Mt && pt(r, t) ? (r[t] = n, !0) : pt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: u }
  }, f) {
    let d;
    return !!(n[f] || e !== Mt && f[0] !== "$" && pt(e, f) || uu(t, f) || pt(o, f) || pt(r, f) || pt(lo, f) || pt(a.config.globalProperties, f) || (d = u.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function jd(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Bu = !0;
function Rv(e) {
  const t = cm(e), n = e.proxy, r = e.ctx;
  Bu = !1, t.beforeCreate && Hd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: u,
    watch: f,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: v,
    mounted: S,
    beforeUpdate: M,
    updated: y,
    activated: D,
    deactivated: z,
    beforeDestroy: L,
    beforeUnmount: P,
    destroyed: V,
    unmounted: T,
    render: F,
    renderTracked: j,
    renderTriggered: $,
    errorCaptured: se,
    serverPrefetch: ie,
    // public API
    expose: I,
    inheritAttrs: Y,
    // assets
    components: ee,
    directives: J,
    filters: de
  } = t;
  if (b && Lv(b, r, null), u)
    for (const A in u) {
      const we = u[A];
      Ze(we) && (r[A] = we.bind(n));
    }
  if (a) {
    const A = a.call(n, n);
    vt(A) && (e.data = /* @__PURE__ */ Ca(A));
  }
  if (Bu = !0, o)
    for (const A in o) {
      const we = o[A], De = Ze(we) ? we.bind(n, n) : Ze(we.get) ? we.get.bind(n, n) : Mr, Pe = !Ze(we) && Ze(we.set) ? we.set.bind(n) : Mr, U = kt({
        get: De,
        set: Pe
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => U.value,
        set: (He) => U.value = He
      });
    }
  if (f)
    for (const A in f)
      um(f[A], r, n, A);
  if (d) {
    const A = Ze(d) ? d.call(n) : d;
    Reflect.ownKeys(A).forEach((we) => {
      mv(we, A[we]);
    });
  }
  g && Hd(g, e, "c");
  function ke(A, we) {
    Je(we) ? we.forEach((De) => A(De.bind(n))) : we && A(we.bind(n));
  }
  if (ke(Mv, v), ke(Oc, S), ke(Nv, M), ke(Pv, y), ke(Sv, D), ke(wv, z), ke(Tv, se), ke(Iv, j), ke(Cv, $), ke(al, P), ke(sm, T), ke(Av, ie), Je(I))
    if (I.length) {
      const A = e.exposed || (e.exposed = {});
      I.forEach((we) => {
        Object.defineProperty(A, we, {
          get: () => n[we],
          set: (De) => n[we] = De,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Mr && (e.render = F), Y != null && (e.inheritAttrs = Y), ee && (e.components = ee), J && (e.directives = J), ie && im(e);
}
function Lv(e, t, n = Mr) {
  Je(e) && (e = Ku(e));
  for (const r in e) {
    const a = e[r];
    let o;
    vt(a) ? "default" in a ? o = ms(
      a.from || r,
      a.default,
      !0
    ) : o = ms(a.from || r) : o = ms(a), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : t[r] = o;
  }
}
function Hd(e, t, n) {
  Pr(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function um(e, t, n, r) {
  let a = r.includes(".") ? rm(n, r) : () => n[r];
  if ($t(e)) {
    const o = t[e];
    Ze(o) && Ai(a, o);
  } else if (Ze(e))
    Ai(a, e.bind(n));
  else if (vt(e))
    if (Je(e))
      e.forEach((o) => um(o, t, n, r));
    else {
      const o = Ze(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ze(o) && Ai(a, o, e);
    }
}
function cm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = o.get(t);
  let d;
  return f ? d = f : !a.length && !n && !r ? d = t : (d = {}, a.length && a.forEach(
    (b) => Ds(d, b, u, !0)
  ), Ds(d, t, u)), vt(t) && o.set(t, d), d;
}
function Ds(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ds(e, o, n, !0), a && a.forEach(
    (u) => Ds(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = Vv[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const Vv = {
  data: Ud,
  props: Gd,
  emits: Gd,
  // objects
  methods: Qa,
  computed: Qa,
  // lifecycle
  beforeCreate: kn,
  created: kn,
  beforeMount: kn,
  mounted: kn,
  beforeUpdate: kn,
  updated: kn,
  beforeDestroy: kn,
  beforeUnmount: kn,
  destroyed: kn,
  unmounted: kn,
  activated: kn,
  deactivated: kn,
  errorCaptured: kn,
  serverPrefetch: kn,
  // assets
  components: Qa,
  directives: Qa,
  // watch
  watch: $v,
  // provide / inject
  provide: Ud,
  inject: zv
};
function Ud(e, t) {
  return t ? e ? function() {
    return yn(
      Ze(e) ? e.call(this, this) : e,
      Ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function zv(e, t) {
  return Qa(Ku(e), Ku(t));
}
function Ku(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function kn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qa(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gd(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    jd(e),
    jd(t ?? {})
  ) : t;
}
function $v(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = kn(e[r], t[r]);
  return n;
}
function fm() {
  return {
    app: null,
    config: {
      isNativeTag: Np,
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
let jv = 0;
function Hv(e, t) {
  return function(r, a = null) {
    Ze(r) || (r = yn({}, r)), a != null && !vt(a) && (a = null);
    const o = fm(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const b = o.app = {
      _uid: jv++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: x1,
      get config() {
        return o.config;
      },
      set config(g) {
      },
      use(g, ...v) {
        return u.has(g) || (g && Ze(g.install) ? (u.add(g), g.install(b, ...v)) : Ze(g) && (u.add(g), g(b, ...v))), b;
      },
      mixin(g) {
        return o.mixins.includes(g) || o.mixins.push(g), b;
      },
      component(g, v) {
        return v ? (o.components[g] = v, b) : o.components[g];
      },
      directive(g, v) {
        return v ? (o.directives[g] = v, b) : o.directives[g];
      },
      mount(g, v, S) {
        if (!d) {
          const M = b._ceVNode || je(r, a);
          return M.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, g, S), d = !0, b._container = g, g.__vue_app__ = b, ll(M.component);
        }
      },
      onUnmount(g) {
        f.push(g);
      },
      unmount() {
        d && (Pr(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, v) {
        return o.provides[g] = v, b;
      },
      runWithContext(g) {
        const v = ma;
        ma = b;
        try {
          return g();
        } finally {
          ma = v;
        }
      }
    };
    return b;
  };
}
let ma = null;
const Uv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nn(t)}Modifiers`] || e[`${Di(t)}Modifiers`];
function Gv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Mt;
  let a = n;
  const o = t.startsWith("update:"), u = o && Uv(r, t.slice(7));
  u && (u.trim && (a = n.map((g) => $t(g) ? g.trim() : g)), u.number && (a = n.map(Sc)));
  let f, d = r[f = iu(t)] || // also try camelCase event handler (#2249)
  r[f = iu(Nn(t))];
  !d && o && (d = r[f = iu(Di(t))]), d && Pr(
    d,
    e,
    6,
    a
  );
  const b = r[f + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Pr(
      b,
      e,
      6,
      a
    );
  }
}
const Bv = /* @__PURE__ */ new WeakMap();
function dm(e, t, n = !1) {
  const r = n ? Bv : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let u = {}, f = !1;
  if (!Ze(e)) {
    const d = (b) => {
      const g = dm(b, t, !0);
      g && (f = !0, yn(u, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !o && !f ? (vt(e) && r.set(e, null), null) : (Je(o) ? o.forEach((d) => u[d] = null) : yn(u, o), vt(e) && r.set(e, u), u);
}
function ol(e, t) {
  return !e || !Js(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pt(e, t[0].toLowerCase() + t.slice(1)) || pt(e, Di(t)) || pt(e, t));
}
function Bd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [o],
    slots: u,
    attrs: f,
    emit: d,
    render: b,
    renderCache: g,
    props: v,
    data: S,
    setupState: M,
    ctx: y,
    inheritAttrs: D
  } = e, z = Ts(e);
  let L, P;
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, F = T;
      L = yr(
        b.call(
          F,
          T,
          g,
          v,
          M,
          S,
          y
        )
      ), P = f;
    } else {
      const T = t;
      L = yr(
        T.length > 1 ? T(
          v,
          { attrs: f, slots: u, emit: d }
        ) : T(
          v,
          null
        )
      ), P = t.props ? f : Kv(f);
    }
  } catch (T) {
    uo.length = 0, rl(T, e, 1), L = je(li);
  }
  let V = L;
  if (P && D !== !1) {
    const T = Object.keys(P), { shapeFlag: F } = V;
    T.length && F & 7 && (o && T.some(Zs) && (P = Wv(
      P,
      o
    )), V = ka(V, P, !1, !0));
  }
  return n.dirs && (V = ka(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && Dc(V, n.transition), L = V, Ts(z), L;
}
const Kv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Js(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Zs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Yv(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: u, children: f, patchFlag: d } = t, b = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Kd(r, u, b) : !!u;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        const S = g[v];
        if (hm(u, r, S) && !ol(b, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Kd(r, u, b) : !0 : !!u;
  return !1;
}
function Kd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (hm(t, e, o) && !ol(n, o))
      return !0;
  }
  return !1;
}
function hm(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && vt(r) && vt(a) ? !wc(r, a) : r !== a;
}
function qv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const pm = {}, mm = () => Object.create(pm), gm = (e) => Object.getPrototypeOf(e) === pm;
function Xv(e, t, n, r = !1) {
  const a = {}, o = mm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bm(e, t, a, o);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ rv(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function Jv(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ ht(a), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const g = e.vnode.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        let S = g[v];
        if (ol(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (d)
          if (pt(o, S))
            M !== o[S] && (o[S] = M, b = !0);
          else {
            const y = Nn(S);
            a[y] = Wu(
              d,
              f,
              y,
              M,
              e,
              !1
            );
          }
        else
          M !== o[S] && (o[S] = M, b = !0);
      }
    }
  } else {
    bm(e, t, a, o) && (b = !0);
    let g;
    for (const v in f)
      (!t || // for camelCase
      !pt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Di(v)) === v || !pt(t, g))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[g] !== void 0) && (a[v] = Wu(
        d,
        f,
        v,
        void 0,
        e,
        !0
      )) : delete a[v]);
    if (o !== f)
      for (const v in o)
        (!t || !pt(t, v)) && (delete o[v], b = !0);
  }
  b && Ur(e.attrs, "set", "");
}
function bm(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const b = t[d];
      let g;
      a && pt(a, g = Nn(d)) ? !o || !o.includes(g) ? n[g] = b : (f || (f = {}))[g] = b : ol(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, u = !0);
    }
  if (o) {
    const d = /* @__PURE__ */ ht(n), b = f || Mt;
    for (let g = 0; g < o.length; g++) {
      const v = o[g];
      n[v] = Wu(
        a,
        d,
        v,
        b[v],
        e,
        !pt(b, v)
      );
    }
  }
  return u;
}
function Wu(e, t, n, r, a, o) {
  const u = e[n];
  if (u != null) {
    const f = pt(u, "default");
    if (f && r === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && Ze(d)) {
        const { propsDefaults: b } = a;
        if (n in b)
          r = b[n];
        else {
          const g = ko(a);
          r = b[n] = d.call(
            null,
            t
          ), g();
        }
      } else
        r = d;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (o && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Di(n)) && (r = !0));
  }
  return r;
}
const Zv = /* @__PURE__ */ new WeakMap();
function ym(e, t, n = !1) {
  const r = n ? Zv : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, u = {}, f = [];
  let d = !1;
  if (!Ze(e)) {
    const g = (v) => {
      d = !0;
      const [S, M] = ym(v, t, !0);
      yn(u, S), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !d)
    return vt(e) && r.set(e, da), da;
  if (Je(o))
    for (let g = 0; g < o.length; g++) {
      const v = Nn(o[g]);
      Wd(v) && (u[v] = Mt);
    }
  else if (o)
    for (const g in o) {
      const v = Nn(g);
      if (Wd(v)) {
        const S = o[g], M = u[v] = Je(S) || Ze(S) ? { type: S } : yn({}, S), y = M.type;
        let D = !1, z = !0;
        if (Je(y))
          for (let L = 0; L < y.length; ++L) {
            const P = y[L], V = Ze(P) && P.name;
            if (V === "Boolean") {
              D = !0;
              break;
            } else V === "String" && (z = !1);
          }
        else
          D = Ze(y) && y.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = D, M[
          1
          /* shouldCastTrue */
        ] = z, (D || pt(M, "default")) && f.push(v);
      }
    }
  const b = [u, f];
  return vt(e) && r.set(e, b), b;
}
function Wd(e) {
  return e[0] !== "$" && !ro(e);
}
const Fc = (e) => e === "_" || e === "_ctx" || e === "$stable", Rc = (e) => Je(e) ? e.map(yr) : [yr(e)], Qv = (e, t, n) => {
  if (t._n)
    return t;
  const r = tm((...a) => Rc(t(...a)), n);
  return r._c = !1, r;
}, vm = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Fc(a)) continue;
    const o = e[a];
    if (Ze(o))
      t[a] = Qv(a, o, r);
    else if (o != null) {
      const u = Rc(o);
      t[a] = () => u;
    }
  }
}, _m = (e, t) => {
  const n = Rc(t);
  e.slots.default = () => n;
}, xm = (e, t, n) => {
  for (const r in t)
    (n || !Fc(r)) && (e[r] = t[r]);
}, e1 = (e, t, n) => {
  const r = e.slots = mm();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (xm(r, t, n), n && Tp(r, "_", a, !0)) : vm(t, r);
  } else t && _m(e, t);
}, t1 = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, u = Mt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? o = !1 : xm(a, t, n) : (o = !t.$stable, vm(t, a)), u = t;
  } else t && (_m(e, t), u = { default: 1 });
  if (o)
    for (const f in a)
      !Fc(f) && u[f] == null && delete a[f];
}, Rn = o1;
function n1(e) {
  return r1(e);
}
function r1(e, t) {
  const n = tl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: u,
    createText: f,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: v,
    nextSibling: S,
    setScopeId: M = Mr,
    insertStaticContent: y
  } = e, D = (R, B, q, ye = null, he = null, E = null, te = void 0, Z = null, ce = !!B.dynamicChildren) => {
    if (R === B)
      return;
    R && !Ga(R, B) && (ye = qt(R), He(R, he, E, !0), R = null), B.patchFlag === -2 && (ce = !1, B.dynamicChildren = null);
    const { type: ne, ref: Ne, shapeFlag: ve } = B;
    switch (ne) {
      case sl:
        z(R, B, q, ye);
        break;
      case li:
        L(R, B, q, ye);
        break;
      case fu:
        R == null && P(B, q, ye, te);
        break;
      case st:
        ee(
          R,
          B,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce
        );
        break;
      default:
        ve & 1 ? F(
          R,
          B,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce
        ) : ve & 6 ? J(
          R,
          B,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce
        ) : (ve & 64 || ve & 128) && ne.process(
          R,
          B,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce,
          tn
        );
    }
    Ne != null && he ? oo(Ne, R && R.ref, E, B || R, !B) : Ne == null && R && R.ref != null && oo(R.ref, null, E, R, !0);
  }, z = (R, B, q, ye) => {
    if (R == null)
      r(
        B.el = f(B.children),
        q,
        ye
      );
    else {
      const he = B.el = R.el;
      B.children !== R.children && b(he, B.children);
    }
  }, L = (R, B, q, ye) => {
    R == null ? r(
      B.el = d(B.children || ""),
      q,
      ye
    ) : B.el = R.el;
  }, P = (R, B, q, ye) => {
    [R.el, R.anchor] = y(
      R.children,
      B,
      q,
      ye,
      R.el,
      R.anchor
    );
  }, V = ({ el: R, anchor: B }, q, ye) => {
    let he;
    for (; R && R !== B; )
      he = S(R), r(R, q, ye), R = he;
    r(B, q, ye);
  }, T = ({ el: R, anchor: B }) => {
    let q;
    for (; R && R !== B; )
      q = S(R), a(R), R = q;
    a(B);
  }, F = (R, B, q, ye, he, E, te, Z, ce) => {
    if (B.type === "svg" ? te = "svg" : B.type === "math" && (te = "mathml"), R == null)
      j(
        B,
        q,
        ye,
        he,
        E,
        te,
        Z,
        ce
      );
    else {
      const ne = R.el && R.el._isVueCE ? R.el : null;
      try {
        ne && ne._beginPatch(), ie(
          R,
          B,
          he,
          E,
          te,
          Z,
          ce
        );
      } finally {
        ne && ne._endPatch();
      }
    }
  }, j = (R, B, q, ye, he, E, te, Z) => {
    let ce, ne;
    const { props: Ne, shapeFlag: ve, transition: Ie, dirs: Ce } = R;
    if (ce = R.el = u(
      R.type,
      E,
      Ne && Ne.is,
      Ne
    ), ve & 8 ? g(ce, R.children) : ve & 16 && se(
      R.children,
      ce,
      null,
      ye,
      he,
      cu(R, E),
      te,
      Z
    ), Ce && yi(R, null, ye, "created"), $(ce, R, R.scopeId, te, ye), Ne) {
      for (const Ve in Ne)
        Ve !== "value" && !ro(Ve) && o(ce, Ve, null, Ne[Ve], E, ye);
      "value" in Ne && o(ce, "value", null, Ne.value, E), (ne = Ne.onVnodeBeforeMount) && hr(ne, ye, R);
    }
    Ce && yi(R, null, ye, "beforeMount");
    const p = i1(he, Ie);
    p && Ie.beforeEnter(ce), r(ce, B, q), ((ne = Ne && Ne.onVnodeMounted) || p || Ce) && Rn(() => {
      try {
        ne && hr(ne, ye, R), p && Ie.enter(ce), Ce && yi(R, null, ye, "mounted");
      } finally {
      }
    }, he);
  }, $ = (R, B, q, ye, he) => {
    if (q && M(R, q), ye)
      for (let E = 0; E < ye.length; E++)
        M(R, ye[E]);
    if (he) {
      let E = he.subTree;
      if (B === E || Mm(E.type) && (E.ssContent === B || E.ssFallback === B)) {
        const te = he.vnode;
        $(
          R,
          te,
          te.scopeId,
          te.slotScopeIds,
          he.parent
        );
      }
    }
  }, se = (R, B, q, ye, he, E, te, Z, ce = 0) => {
    for (let ne = ce; ne < R.length; ne++) {
      const Ne = R[ne] = Z ? Hr(R[ne]) : yr(R[ne]);
      D(
        null,
        Ne,
        B,
        q,
        ye,
        he,
        E,
        te,
        Z
      );
    }
  }, ie = (R, B, q, ye, he, E, te) => {
    const Z = B.el = R.el;
    let { patchFlag: ce, dynamicChildren: ne, dirs: Ne } = B;
    ce |= R.patchFlag & 16;
    const ve = R.props || Mt, Ie = B.props || Mt;
    let Ce;
    if (q && vi(q, !1), (Ce = Ie.onVnodeBeforeUpdate) && hr(Ce, q, B, R), Ne && yi(B, R, q, "beforeUpdate"), q && vi(q, !0), (ve.innerHTML && Ie.innerHTML == null || ve.textContent && Ie.textContent == null) && g(Z, ""), ne ? I(
      R.dynamicChildren,
      ne,
      Z,
      q,
      ye,
      cu(B, he),
      E
    ) : te || we(
      R,
      B,
      Z,
      null,
      q,
      ye,
      cu(B, he),
      E,
      !1
    ), ce > 0) {
      if (ce & 16)
        Y(Z, ve, Ie, q, he);
      else if (ce & 2 && ve.class !== Ie.class && o(Z, "class", null, Ie.class, he), ce & 4 && o(Z, "style", ve.style, Ie.style, he), ce & 8) {
        const p = B.dynamicProps;
        for (let Ve = 0; Ve < p.length; Ve++) {
          const Ke = p[Ve], et = ve[Ke], bt = Ie[Ke];
          (bt !== et || Ke === "value") && o(Z, Ke, et, bt, he, q);
        }
      }
      ce & 1 && R.children !== B.children && g(Z, B.children);
    } else !te && ne == null && Y(Z, ve, Ie, q, he);
    ((Ce = Ie.onVnodeUpdated) || Ne) && Rn(() => {
      Ce && hr(Ce, q, B, R), Ne && yi(B, R, q, "updated");
    }, ye);
  }, I = (R, B, q, ye, he, E, te) => {
    for (let Z = 0; Z < B.length; Z++) {
      const ce = R[Z], ne = B[Z], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ce.type === st || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ga(ce, ne) || // - In the case of a component, it could contain anything.
        ce.shapeFlag & 198) ? v(ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      D(
        ce,
        ne,
        Ne,
        null,
        ye,
        he,
        E,
        te,
        !0
      );
    }
  }, Y = (R, B, q, ye, he) => {
    if (B !== q) {
      if (B !== Mt)
        for (const E in B)
          !ro(E) && !(E in q) && o(
            R,
            E,
            B[E],
            null,
            he,
            ye
          );
      for (const E in q) {
        if (ro(E)) continue;
        const te = q[E], Z = B[E];
        te !== Z && E !== "value" && o(R, E, Z, te, he, ye);
      }
      "value" in q && o(R, "value", B.value, q.value, he);
    }
  }, ee = (R, B, q, ye, he, E, te, Z, ce) => {
    const ne = B.el = R ? R.el : f(""), Ne = B.anchor = R ? R.anchor : f("");
    let { patchFlag: ve, dynamicChildren: Ie, slotScopeIds: Ce } = B;
    Ce && (Z = Z ? Z.concat(Ce) : Ce), R == null ? (r(ne, q, ye), r(Ne, q, ye), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      q,
      Ne,
      he,
      E,
      te,
      Z,
      ce
    )) : ve > 0 && ve & 64 && Ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ie.length ? (I(
      R.dynamicChildren,
      Ie,
      q,
      he,
      E,
      te,
      Z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || he && B === he.subTree) && Sm(
      R,
      B,
      !0
      /* shallow */
    )) : we(
      R,
      B,
      q,
      Ne,
      he,
      E,
      te,
      Z,
      ce
    );
  }, J = (R, B, q, ye, he, E, te, Z, ce) => {
    B.slotScopeIds = Z, R == null ? B.shapeFlag & 512 ? he.ctx.activate(
      B,
      q,
      ye,
      te,
      ce
    ) : de(
      B,
      q,
      ye,
      he,
      E,
      te,
      ce
    ) : fe(R, B, ce);
  }, de = (R, B, q, ye, he, E, te) => {
    const Z = R.component = h1(
      R,
      ye,
      he
    );
    if (am(R) && (Z.ctx.renderer = tn), m1(Z, !1, te), Z.asyncDep) {
      if (he && he.registerDep(Z, ke, te), !R.el) {
        const ce = Z.subTree = je(li);
        L(null, ce, B, q), R.placeholder = ce.el;
      }
    } else
      ke(
        Z,
        R,
        B,
        q,
        he,
        E,
        te
      );
  }, fe = (R, B, q) => {
    const ye = B.component = R.component;
    if (Yv(R, B, q))
      if (ye.asyncDep && !ye.asyncResolved) {
        A(ye, B, q);
        return;
      } else
        ye.next = B, ye.update();
    else
      B.el = R.el, ye.vnode = B;
  }, ke = (R, B, q, ye, he, E, te) => {
    const Z = () => {
      if (R.isMounted) {
        let { next: ve, bu: Ie, u: Ce, parent: p, vnode: Ve } = R;
        {
          const re = wm(R);
          if (re) {
            ve && (ve.el = Ve.el, A(R, ve, te)), re.asyncDep.then(() => {
              Rn(() => {
                R.isUnmounted || ne();
              }, he);
            });
            return;
          }
        }
        let Ke = ve, et;
        vi(R, !1), ve ? (ve.el = Ve.el, A(R, ve, te)) : ve = Ve, Ie && ps(Ie), (et = ve.props && ve.props.onVnodeBeforeUpdate) && hr(et, p, ve, Ve), vi(R, !0);
        const bt = Bd(R), at = R.subTree;
        R.subTree = bt, D(
          at,
          bt,
          // parent may have changed if it's in a teleport
          v(at.el),
          // anchor may have changed if it's in a fragment
          qt(at),
          R,
          he,
          E
        ), ve.el = bt.el, Ke === null && qv(R, bt.el), Ce && Rn(Ce, he), (et = ve.props && ve.props.onVnodeUpdated) && Rn(
          () => hr(et, p, ve, Ve),
          he
        );
      } else {
        let ve;
        const { el: Ie, props: Ce } = B, { bm: p, m: Ve, parent: Ke, root: et, type: bt } = R, at = so(B);
        vi(R, !1), p && ps(p), !at && (ve = Ce && Ce.onVnodeBeforeMount) && hr(ve, Ke, B), vi(R, !0);
        {
          et.ce && et.ce._hasShadowRoot() && et.ce._injectChildStyle(
            bt,
            R.parent ? R.parent.type : void 0
          );
          const re = R.subTree = Bd(R);
          D(
            null,
            re,
            q,
            ye,
            R,
            he,
            E
          ), B.el = re.el;
        }
        if (Ve && Rn(Ve, he), !at && (ve = Ce && Ce.onVnodeMounted)) {
          const re = B;
          Rn(
            () => hr(ve, Ke, re),
            he
          );
        }
        (B.shapeFlag & 256 || Ke && so(Ke.vnode) && Ke.vnode.shapeFlag & 256) && R.a && Rn(R.a, he), R.isMounted = !0, B = q = ye = null;
      }
    };
    R.scope.on();
    const ce = R.effect = new Fp(Z);
    R.scope.off();
    const ne = R.update = ce.run.bind(ce), Ne = R.job = ce.runIfDirty.bind(ce);
    Ne.i = R, Ne.id = R.uid, ce.scheduler = () => Ec(Ne), vi(R, !0), ne();
  }, A = (R, B, q) => {
    B.component = R;
    const ye = R.vnode.props;
    R.vnode = B, R.next = null, Jv(R, B.props, ye, q), t1(R, B.children, q), Wr(), Ld(R), Yr();
  }, we = (R, B, q, ye, he, E, te, Z, ce = !1) => {
    const ne = R && R.children, Ne = R ? R.shapeFlag : 0, ve = B.children, { patchFlag: Ie, shapeFlag: Ce } = B;
    if (Ie > 0) {
      if (Ie & 128) {
        Pe(
          ne,
          ve,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce
        );
        return;
      } else if (Ie & 256) {
        De(
          ne,
          ve,
          q,
          ye,
          he,
          E,
          te,
          Z,
          ce
        );
        return;
      }
    }
    Ce & 8 ? (Ne & 16 && Ue(ne, he, E), ve !== ne && g(q, ve)) : Ne & 16 ? Ce & 16 ? Pe(
      ne,
      ve,
      q,
      ye,
      he,
      E,
      te,
      Z,
      ce
    ) : Ue(ne, he, E, !0) : (Ne & 8 && g(q, ""), Ce & 16 && se(
      ve,
      q,
      ye,
      he,
      E,
      te,
      Z,
      ce
    ));
  }, De = (R, B, q, ye, he, E, te, Z, ce) => {
    R = R || da, B = B || da;
    const ne = R.length, Ne = B.length, ve = Math.min(ne, Ne);
    let Ie;
    for (Ie = 0; Ie < ve; Ie++) {
      const Ce = B[Ie] = ce ? Hr(B[Ie]) : yr(B[Ie]);
      D(
        R[Ie],
        Ce,
        q,
        null,
        he,
        E,
        te,
        Z,
        ce
      );
    }
    ne > Ne ? Ue(
      R,
      he,
      E,
      !0,
      !1,
      ve
    ) : se(
      B,
      q,
      ye,
      he,
      E,
      te,
      Z,
      ce,
      ve
    );
  }, Pe = (R, B, q, ye, he, E, te, Z, ce) => {
    let ne = 0;
    const Ne = B.length;
    let ve = R.length - 1, Ie = Ne - 1;
    for (; ne <= ve && ne <= Ie; ) {
      const Ce = R[ne], p = B[ne] = ce ? Hr(B[ne]) : yr(B[ne]);
      if (Ga(Ce, p))
        D(
          Ce,
          p,
          q,
          null,
          he,
          E,
          te,
          Z,
          ce
        );
      else
        break;
      ne++;
    }
    for (; ne <= ve && ne <= Ie; ) {
      const Ce = R[ve], p = B[Ie] = ce ? Hr(B[Ie]) : yr(B[Ie]);
      if (Ga(Ce, p))
        D(
          Ce,
          p,
          q,
          null,
          he,
          E,
          te,
          Z,
          ce
        );
      else
        break;
      ve--, Ie--;
    }
    if (ne > ve) {
      if (ne <= Ie) {
        const Ce = Ie + 1, p = Ce < Ne ? B[Ce].el : ye;
        for (; ne <= Ie; )
          D(
            null,
            B[ne] = ce ? Hr(B[ne]) : yr(B[ne]),
            q,
            p,
            he,
            E,
            te,
            Z,
            ce
          ), ne++;
      }
    } else if (ne > Ie)
      for (; ne <= ve; )
        He(R[ne], he, E, !0), ne++;
    else {
      const Ce = ne, p = ne, Ve = /* @__PURE__ */ new Map();
      for (ne = p; ne <= Ie; ne++) {
        const ot = B[ne] = ce ? Hr(B[ne]) : yr(B[ne]);
        ot.key != null && Ve.set(ot.key, ne);
      }
      let Ke, et = 0;
      const bt = Ie - p + 1;
      let at = !1, re = 0;
      const At = new Array(bt);
      for (ne = 0; ne < bt; ne++) At[ne] = 0;
      for (ne = Ce; ne <= ve; ne++) {
        const ot = R[ne];
        if (et >= bt) {
          He(ot, he, E, !0);
          continue;
        }
        let nn;
        if (ot.key != null)
          nn = Ve.get(ot.key);
        else
          for (Ke = p; Ke <= Ie; Ke++)
            if (At[Ke - p] === 0 && Ga(ot, B[Ke])) {
              nn = Ke;
              break;
            }
        nn === void 0 ? He(ot, he, E, !0) : (At[nn - p] = ne + 1, nn >= re ? re = nn : at = !0, D(
          ot,
          B[nn],
          q,
          null,
          he,
          E,
          te,
          Z,
          ce
        ), et++);
      }
      const _n = at ? a1(At) : da;
      for (Ke = _n.length - 1, ne = bt - 1; ne >= 0; ne--) {
        const ot = p + ne, nn = B[ot], H = B[ot + 1], xe = ot + 1 < Ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          H.el || km(H)
        ) : ye;
        At[ne] === 0 ? D(
          null,
          nn,
          q,
          xe,
          he,
          E,
          te,
          Z,
          ce
        ) : at && (Ke < 0 || ne !== _n[Ke] ? U(nn, q, xe, 2) : Ke--);
      }
    }
  }, U = (R, B, q, ye, he = null) => {
    const { el: E, type: te, transition: Z, children: ce, shapeFlag: ne } = R;
    if (ne & 6) {
      U(R.component.subTree, B, q, ye);
      return;
    }
    if (ne & 128) {
      R.suspense.move(B, q, ye);
      return;
    }
    if (ne & 64) {
      te.move(R, B, q, tn);
      return;
    }
    if (te === st) {
      r(E, B, q);
      for (let ve = 0; ve < ce.length; ve++)
        U(ce[ve], B, q, ye);
      r(R.anchor, B, q);
      return;
    }
    if (te === fu) {
      V(R, B, q);
      return;
    }
    if (ye !== 2 && ne & 1 && Z)
      if (ye === 0)
        Z.beforeEnter(E), r(E, B, q), Rn(() => Z.enter(E), he);
      else {
        const { leave: ve, delayLeave: Ie, afterLeave: Ce } = Z, p = () => {
          R.ctx.isUnmounted ? a(E) : r(E, B, q);
        }, Ve = () => {
          E._isLeaving && E[xv](
            !0
            /* cancelled */
          ), ve(E, () => {
            p(), Ce && Ce();
          });
        };
        Ie ? Ie(E, p, Ve) : Ve();
      }
    else
      r(E, B, q);
  }, He = (R, B, q, ye = !1, he = !1) => {
    const {
      type: E,
      props: te,
      ref: Z,
      children: ce,
      dynamicChildren: ne,
      shapeFlag: Ne,
      patchFlag: ve,
      dirs: Ie,
      cacheIndex: Ce,
      memo: p
    } = R;
    if (ve === -2 && (he = !1), Z != null && (Wr(), oo(Z, null, q, R, !0), Yr()), Ce != null && (B.renderCache[Ce] = void 0), Ne & 256) {
      B.ctx.deactivate(R);
      return;
    }
    const Ve = Ne & 1 && Ie, Ke = !so(R);
    let et;
    if (Ke && (et = te && te.onVnodeBeforeUnmount) && hr(et, B, R), Ne & 6)
      qe(R.component, q, ye);
    else {
      if (Ne & 128) {
        R.suspense.unmount(q, ye);
        return;
      }
      Ve && yi(R, null, B, "beforeUnmount"), Ne & 64 ? R.type.remove(
        R,
        B,
        q,
        tn,
        ye
      ) : ne && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ne.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== st || ve > 0 && ve & 64) ? Ue(
        ne,
        B,
        q,
        !1,
        !0
      ) : (E === st && ve & 384 || !he && Ne & 16) && Ue(ce, B, q), ye && gt(R);
    }
    const bt = p != null && Ce == null;
    (Ke && (et = te && te.onVnodeUnmounted) || Ve || bt) && Rn(() => {
      et && hr(et, B, R), Ve && yi(R, null, B, "unmounted"), bt && (R.el = null);
    }, q);
  }, gt = (R) => {
    const { type: B, el: q, anchor: ye, transition: he } = R;
    if (B === st) {
      nt(q, ye);
      return;
    }
    if (B === fu) {
      T(R);
      return;
    }
    const E = () => {
      a(q), he && !he.persisted && he.afterLeave && he.afterLeave();
    };
    if (R.shapeFlag & 1 && he && !he.persisted) {
      const { leave: te, delayLeave: Z } = he, ce = () => te(q, E);
      Z ? Z(R.el, E, ce) : ce();
    } else
      E();
  }, nt = (R, B) => {
    let q;
    for (; R !== B; )
      q = S(R), a(R), R = q;
    a(B);
  }, qe = (R, B, q) => {
    const { bum: ye, scope: he, job: E, subTree: te, um: Z, m: ce, a: ne } = R;
    Yd(ce), Yd(ne), ye && ps(ye), he.stop(), E && (E.flags |= 8, He(te, R, B, q)), Z && Rn(Z, B), Rn(() => {
      R.isUnmounted = !0;
    }, B);
  }, Ue = (R, B, q, ye = !1, he = !1, E = 0) => {
    for (let te = E; te < R.length; te++)
      He(R[te], B, q, ye, he);
  }, qt = (R) => {
    if (R.shapeFlag & 6)
      return qt(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const B = S(R.anchor || R.el), q = B && B[vv];
    return q ? S(q) : B;
  };
  let An = !1;
  const vn = (R, B, q) => {
    let ye;
    R == null ? B._vnode && (He(B._vnode, null, null, !0), ye = B._vnode.component) : D(
      B._vnode || null,
      R,
      B,
      null,
      null,
      null,
      q
    ), B._vnode = R, An || (An = !0, Ld(ye), Zp(), An = !1);
  }, tn = {
    p: D,
    um: He,
    m: U,
    r: gt,
    mt: de,
    mc: se,
    pc: we,
    pbc: I,
    n: qt,
    o: e
  };
  return {
    render: vn,
    hydrate: void 0,
    createApp: Hv(vn)
  };
}
function cu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function i1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sm(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Je(r) && Je(a))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let f = a[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[o] = Hr(a[o]), f.el = u.el), !n && f.patchFlag !== -2 && Sm(u, f)), f.type === sl && (f.patchFlag === -1 && (f = a[o] = Hr(f)), f.el = u.el), f.type === li && !f.el && (f.el = u.el);
    }
}
function a1(e) {
  const t = e.slice(), n = [0];
  let r, a, o, u, f;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (a = n[n.length - 1], e[a] < b) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, u = n.length - 1; o < u; )
        f = o + u >> 1, e[n[f]] < b ? o = f + 1 : u = f;
      b < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, u = n[o - 1]; o-- > 0; )
    n[o] = u, u = t[u];
  return n;
}
function wm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : wm(t);
}
function Yd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function km(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? km(t.subTree) : null;
}
const Mm = (e) => e.__isSuspense;
function o1(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : pv(e);
}
const st = /* @__PURE__ */ Symbol.for("v-fgt"), sl = /* @__PURE__ */ Symbol.for("v-txt"), li = /* @__PURE__ */ Symbol.for("v-cmt"), fu = /* @__PURE__ */ Symbol.for("v-stc"), uo = [];
let Gn = null;
function Me(e = !1) {
  uo.push(Gn = e ? null : []);
}
function s1() {
  uo.pop(), Gn = uo[uo.length - 1] || null;
}
let po = 1;
function qd(e, t = !1) {
  po += e, e < 0 && Gn && t && (Gn.hasOnce = !0);
}
function Nm(e) {
  return e.dynamicChildren = po > 0 ? Gn || da : null, s1(), po > 0 && Gn && Gn.push(e), e;
}
function Ae(e, t, n, r, a, o) {
  return Nm(
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
function Oi(e, t, n, r, a) {
  return Nm(
    je(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Pm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ga(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Am = ({ key: e }) => e ?? null, gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || /* @__PURE__ */ gn(e) || Ze(e) ? { i: Un, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, a = null, o = e === st ? 0 : 1, u = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Am(t),
    ref: t && gs(t),
    scopeId: em,
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
  return f ? (Lc(d, n), o & 128 && e.normalize(d)) : n && (d.shapeFlag |= $t(n) ? 8 : 16), po > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Gn.push(d), d;
}
const je = l1;
function l1(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === lm) && (e = li), Pm(e)) {
    const f = ka(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lc(f, n), po > 0 && !o && Gn && (f.shapeFlag & 6 ? Gn[Gn.indexOf(e)] = f : Gn.push(f)), f.patchFlag = -2, f;
  }
  if (_1(e) && (e = e.__vccOpts), t) {
    t = u1(t);
    let { class: f, style: d } = t;
    f && !$t(f) && (t.class = dt(f)), vt(d) && (/* @__PURE__ */ Ic(d) && !Je(d) && (d = yn({}, d)), t.style = Gt(d));
  }
  const u = $t(e) ? 1 : Mm(e) ? 128 : _v(e) ? 64 : vt(e) ? 4 : Ze(e) ? 2 : 0;
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
function u1(e) {
  return e ? /* @__PURE__ */ Ic(e) || gm(e) ? yn({}, e) : e : null;
}
function ka(e, t, n = !1, r = !1) {
  const { props: a, ref: o, patchFlag: u, children: f, transition: d } = e, b = t ? oi(a || {}, t) : a, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Am(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Je(o) ? o.concat(gs(t)) : [o, gs(t)] : gs(t)
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
    patchFlag: t && e.type !== st ? u === -1 ? 16 : u | 16 : u,
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
  return d && r && Dc(
    g,
    d.clone(g)
  ), g;
}
function c1(e = " ", t = 0) {
  return je(sl, null, e, t);
}
function Lt(e = "", t = !1) {
  return t ? (Me(), Oi(li, null, e)) : je(li, null, e);
}
function yr(e) {
  return e == null || typeof e == "boolean" ? je(li) : Je(e) ? je(
    st,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Pm(e) ? Hr(e) : je(sl, null, String(e));
}
function Hr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ka(e);
}
function Lc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Lc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !gm(t) ? t._ctx = Un : a === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ze(t) ? (t = { default: t, _ctx: Un }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [c1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = dt([t.class, r.class]));
      else if (a === "style")
        t.style = Gt([t.style, r.style]);
      else if (Js(a)) {
        const o = t[a], u = r[a];
        u && o !== u && !(Je(o) && o.includes(u)) ? t[a] = o ? [].concat(o, u) : u : u == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Zs(a) && (t[a] = u);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function hr(e, t, n, r = null) {
  Pr(e, t, 7, [
    n,
    r
  ]);
}
const f1 = fm();
let d1 = 0;
function h1(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || f1, o = {
    uid: d1++,
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
    scope: new Ly(
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
    propsOptions: ym(r, a),
    emitsOptions: dm(r, a),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Gv.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const p1 = () => pn || Un;
let Os, Yu;
{
  const e = tl(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((u) => u(o)) : a[0](o);
    };
  };
  Os = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pn = n
  ), Yu = t(
    "__VUE_SSR_SETTERS__",
    (n) => mo = n
  );
}
const ko = (e) => {
  const t = pn;
  return Os(e), e.scope.on(), () => {
    e.scope.off(), Os(t);
  };
}, Xd = () => {
  pn && pn.scope.off(), Os(null);
};
function Cm(e) {
  return e.vnode.shapeFlag & 4;
}
let mo = !1;
function m1(e, t = !1, n = !1) {
  t && Yu(t);
  const { props: r, children: a } = e.vnode, o = Cm(e);
  Xv(e, r, o, t), e1(e, a, n || t);
  const u = o ? g1(e, t) : void 0;
  return t && Yu(!1), u;
}
function g1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fv);
  const { setup: r } = n;
  if (r) {
    Wr();
    const a = e.setupContext = r.length > 1 ? y1(e) : null, o = ko(e), u = wo(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Ap(u);
    if (Yr(), o(), (f || e.sp) && !so(e) && im(e), f) {
      if (u.then(Xd, Xd), t)
        return u.then((d) => {
          Jd(e, d);
        }).catch((d) => {
          rl(d, e, 0);
        });
      e.asyncDep = u;
    } else
      Jd(e, u);
  } else
    Im(e);
}
function Jd(e, t, n) {
  Ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = qp(t)), Im(e);
}
function Im(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mr);
  {
    const a = ko(e);
    Wr();
    try {
      Rv(e);
    } finally {
      Yr(), a();
    }
  }
}
const b1 = {
  get(e, t) {
    return hn(e, "get", ""), e[t];
  }
};
function y1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, b1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ll(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qp(iv(e.exposed)), {
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
function v1(e, t = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _1(e) {
  return Ze(e) && "__vccOpts" in e;
}
const kt = (e, t) => /* @__PURE__ */ uv(e, t, mo), x1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qu;
const Zd = typeof window < "u" && window.trustedTypes;
if (Zd)
  try {
    qu = /* @__PURE__ */ Zd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tm = qu ? (e) => qu.createHTML(e) : (e) => e, S1 = "http://www.w3.org/2000/svg", w1 = "http://www.w3.org/1998/Math/MathML", zr = typeof document < "u" ? document : null, Qd = zr && /* @__PURE__ */ zr.createElement("template"), k1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? zr.createElementNS(S1, e) : t === "mathml" ? zr.createElementNS(w1, e) : n ? zr.createElement(e, { is: n }) : zr.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => zr.createTextNode(e),
  createComment: (e) => zr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zr.querySelector(e),
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
      Qd.innerHTML = Tm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Qd.content;
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
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, M1 = /* @__PURE__ */ Symbol("_vtc");
function N1(e, t, n) {
  const r = e[M1];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fs = /* @__PURE__ */ Symbol("_vod"), Em = /* @__PURE__ */ Symbol("_vsh"), Mo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ba(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ba(e, !0), r.enter(e)) : r.leave(e, () => {
      Ba(e, !1);
    }) : Ba(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ba(e, t);
  }
};
function Ba(e, t) {
  e.style.display = t ? e[Fs] : "none", e[Em] = !t;
}
const P1 = /* @__PURE__ */ Symbol(""), A1 = /(?:^|;)\s*display\s*:/;
function C1(e, t, n) {
  const r = e.style, a = $t(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if ($t(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && bs(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && bs(r, u, "");
    for (const u in n)
      u === "display" && (o = !0), bs(r, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = r[P1];
      u && (n += ";" + u), r.cssText = n, o = A1.test(n);
    }
  } else t && e.removeAttribute("style");
  Fs in e && (e[Fs] = o ? r.display : "", e[Em] && (r.display = "none"));
}
const eh = /\s*!important$/;
function bs(e, t, n) {
  if (Je(n))
    n.forEach((r) => bs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = I1(e, t);
    eh.test(n) ? e.setProperty(
      Di(r),
      n.replace(eh, ""),
      "important"
    ) : e[r] = n;
  }
}
const th = ["Webkit", "Moz", "ms"], du = {};
function I1(e, t) {
  const n = du[t];
  if (n)
    return n;
  let r = Nn(t);
  if (r !== "filter" && r in e)
    return du[t] = r;
  r = el(r);
  for (let a = 0; a < th.length; a++) {
    const o = th[a] + r;
    if (o in e)
      return du[t] = o;
  }
  return t;
}
const nh = "http://www.w3.org/1999/xlink";
function rh(e, t, n, r, a, o = Fy(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(nh, t.slice(6, t.length)) : e.setAttributeNS(nh, t, n) : n == null || o && !Ep(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Nr(n) ? String(n) : n
  );
}
function ih(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Tm(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const f = o === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Ep(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function sa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function T1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ah = /* @__PURE__ */ Symbol("_vei");
function E1(e, t, n, r, a = null) {
  const o = e[ah] || (e[ah] = {}), u = o[t];
  if (r && u)
    u.value = r;
  else {
    const [f, d] = D1(t);
    if (r) {
      const b = o[t] = R1(
        r,
        a
      );
      sa(e, f, b, d);
    } else u && (T1(e, f, u, d), o[t] = void 0);
  }
}
const oh = /(?:Once|Passive|Capture)$/;
function D1(e) {
  let t;
  if (oh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(oh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Di(e.slice(2)), t];
}
let hu = 0;
const O1 = /* @__PURE__ */ Promise.resolve(), F1 = () => hu || (O1.then(() => hu = 0), hu = Date.now());
function R1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Pr(
      L1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = F1(), n;
}
function L1(e, t) {
  if (Je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const sh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, V1 = (e, t, n, r, a, o) => {
  const u = a === "svg";
  t === "class" ? N1(e, r, u) : t === "style" ? C1(e, n, r) : Js(t) ? Zs(t) || E1(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : z1(e, t, r, u)) ? (ih(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rh(e, t, r, u, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !$t(r))) ? ih(e, Nn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), rh(e, t, r, u));
};
function z1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sh(t) && Ze(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return sh(t) && $t(n) ? !1 : t in e;
}
function $1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Nn(t);
  return Array.isArray(n) ? n.some((a) => Nn(a) === r) : Object.keys(n).some((a) => Nn(a) === r);
}
const lh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => ps(t, n) : t;
};
function j1(e) {
  e.target.composing = !0;
}
function uh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pu = /* @__PURE__ */ Symbol("_assign");
function ch(e, t, n) {
  return t && (e = e.trim()), n && (e = Sc(e)), e;
}
const fh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[pu] = lh(a);
    const o = r || a.props && a.props.type === "number";
    sa(e, t ? "change" : "input", (u) => {
      u.target.composing || e[pu](ch(e.value, n, o));
    }), (n || o) && sa(e, "change", () => {
      e.value = ch(e.value, n, o);
    }), t || (sa(e, "compositionstart", j1), sa(e, "compositionend", uh), sa(e, "change", uh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: o } }, u) {
    if (e[pu] = lh(u), e.composing) return;
    const f = (o || e.type === "number") && !/^0\d/.test(e.value) ? Sc(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === d) || (e.value = d);
  }
}, H1 = ["ctrl", "shift", "alt", "meta"], U1 = {
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
  exact: (e, t) => H1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...o) => {
    for (let u = 0; u < t.length; u++) {
      const f = U1[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...o);
  }));
}, G1 = /* @__PURE__ */ yn({ patchProp: V1 }, k1);
let dh;
function B1() {
  return dh || (dh = n1(G1));
}
const Vc = ((...e) => {
  const t = B1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = W1(r);
    if (!a) return;
    const o = t._component;
    !Ze(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, K1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function K1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function W1(e) {
  return $t(e) ? document.querySelector(e) : e;
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ut(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Y1(e, t) {
  let n = Ut(t) - Ut(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Yt = Math.PI / 180, Pn = 180 / Math.PI;
function ur(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ma(e, t) {
  return ur(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Na(e, t) {
  return ur(e.x * t, e.y * t, e.z * t);
}
function ga(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function zc(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ur(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const n = e * Yt, r = t * Yt, a = Math.cos(r);
  return ur(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Wn(e, t, n = 0) {
  const r = Number(e || 0) * Yt, a = Number(t || 0) * Yt, o = n * Yt, u = Math.cos(r), f = Math.sin(r), d = Math.cos(a), b = Math.sin(a), g = Math.cos(o), v = Math.sin(o);
  return {
    right: ur(
      u * g - f * b * v,
      d * v,
      -f * g - u * b * v
    ),
    up: ur(
      -u * v - f * b * g,
      d * g,
      f * v - u * b * g
    ),
    fwd: ur(f * d, b, u * d)
  };
}
const Ht = Math.PI / 180, Dm = Math.PI * 2, q1 = 2048;
function wt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ul(e, t, n) {
  return { x: e, y: t, z: n };
}
function hh(e, t) {
  return ul(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ph(e, t) {
  return ul(e.x * t, e.y * t, e.z * t);
}
function mu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function X1(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ul(e.x / t, e.y / t, e.z / t);
}
function J1(e, t) {
  const n = (Number(e || 0) - 0.5) * Dm, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return ul(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function mh(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Number(n || 1)), u = Math.max(512, q1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: o,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function gh(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function gu(e, t, n) {
  const r = gh(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = gh(e, e.FRAGMENT_SHADER, n);
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
const bu = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Om = `
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
}`, Z1 = `#version 300 es
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

${Om}

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
}`, Q1 = `#version 300 es
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

${Om}

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
}`, e_ = `#version 300 es
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
function Ka(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(wt(r, 1, 179) * Ht * 0.5) * (n / Math.max(t, 1))) / Ht);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: wt(r, 1, 179),
    vFovDeg: wt(a, 0.1, 179)
  };
}
function t_(e) {
  const t = Wn(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(wt(Number(e.hFovDeg), 0.1, 179) * 0.5 * Ht),
    tanY: Math.tan(wt(Number(e.vFovDeg), 0.1, 179) * 0.5 * Ht),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: wt(Number(e.opacity ?? 1), 0, 1)
  };
}
function n_(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, o = null, u = null, f = null, d = null, b = null, g = null, v = null, S = null, M = !1, y = mh(1, 1, 1), D = null, z = null, L = null, P = null, V = null;
  const T = /* @__PURE__ */ new Map();
  let F = {
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
  }, $ = {
    paint: !1,
    mask: !1
  };
  function se(E = null, te = null) {
    const Z = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Z), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, te ?? n.CLAMP_TO_EDGE), Z;
  }
  function ie() {
    if (M) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = gu(n, bu, Z1), a = gu(n, bu, Q1), o = gu(n, bu, e_), D = {
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
      }, z = {
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
      }, L = {
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
      ]), n.STATIC_DRAW), f = se(n.REPEAT, n.CLAMP_TO_EDGE), d = se(n.REPEAT, n.CLAMP_TO_EDGE), b = se(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function I() {
    var E;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), d && n.deleteTexture(d), b && n.deleteTexture(b), T.forEach((te) => {
          Pe(te);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), o && n.deleteProgram(o), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, r = null, a = null, o = null, u = null, f = null, d = null, b = null, T.clear(), g = null, v = null, S = null, j = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, $ = {
        paint: !1,
        mask: !1
      }, P = null, V = null, M = !1;
    }
  }
  function Y(E, te, Z = 1) {
    y = mh(E, te, Z), (t.width !== y.width || t.height !== y.height) && (t.width = y.width, t.height = y.height);
  }
  function ee(E) {
    E === "background" ? g = null : E === "paint" ? v = null : S = null, j[E] && (j[E].width = 0, j[E].height = 0);
  }
  function J() {
    $.paint = !1, $.mask = !1;
  }
  function de(E) {
    J(), E === "paint" ? $.paint = !0 : E === "mask" && ($.mask = !0);
  }
  function fe(E, te, Z = [], ce = { width: 0, height: 0 }, ne = !1) {
    if (!n || !E || !te) return !1;
    const Ne = Number(te.width || te.videoWidth || te.naturalWidth || 0), ve = Number(te.height || te.videoHeight || te.naturalHeight || 0);
    if (!(Ne > 1) || !(ve > 1)) return !1;
    const Ie = Array.isArray(Z) ? Z.filter((Ce) => Ce && Ce.w > 0 && Ce.h > 0) : [];
    if (!Ie.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ne ? 1 : 0), ce.width !== Ne || ce.height !== ve)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, te), ce.width = Ne, ce.height = ve, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), V = P.getContext("2d")), !V)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, te), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Ce of Ie) {
      const p = Math.max(0, Math.floor(Number(Ce.x || 0))), Ve = Math.max(0, Math.floor(Number(Ce.y || 0))), Ke = Math.min(Ne - p, Math.ceil(Number(Ce.w || 0))), et = Math.min(ve - Ve, Math.ceil(Number(Ce.h || 0)));
      if (!(Ke <= 0 || et <= 0)) {
        if (P.width !== Ke || P.height !== et) {
          if (P.width = Ke, P.height = et, V = P.getContext("2d"), !V)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, te), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          V.clearRect(0, 0, Ke, et);
        V.drawImage(te, p, Ve, Ke, et, 0, 0, Ke, et), n.texSubImage2D(n.TEXTURE_2D, 0, p, Ve, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ke(E, te, Z, ce, ne = null, Ne = !1) {
    if (!ie()) return !1;
    if (!Z)
      return ee(E), !1;
    const ve = String(ce ?? ""), Ie = E === "background" ? g : E === "paint" ? v : S, Ce = j[E], p = Number(Z.width || Z.videoWidth || Z.naturalWidth || 0), Ve = Number(Z.height || Z.videoHeight || Z.naturalHeight || 0), Ke = Ce.width !== p || Ce.height !== Ve;
    if (Ie === ve && !Ke && !(Array.isArray(ne) && ne.length)) return !0;
    if (!(p > 0) || !(Ve > 0))
      return ee(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, te), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Ne ? 1 : 0), !(Array.isArray(ne) && ne.length ? fe(te, Z, ne, Ce, Ne) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Z), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ee(E), !1;
      Ce.width = p, Ce.height = Ve;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? g = ve : E === "paint" ? v = ve : S = ve, !0;
  }
  function A(E, te) {
    return ke("background", f, E, te, null, !0);
  }
  function we(E, te, Z = null) {
    return ke("paint", d, E, te, Z, !0);
  }
  function De(E, te, Z = null) {
    return ke("mask", b, E, te, Z, !0);
  }
  function Pe(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function U(E = /* @__PURE__ */ new Set()) {
    T.forEach((te, Z) => {
      E.has(Z) || (Pe(te), T.delete(Z));
    });
  }
  function He(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const te = String(E.assetId), Z = String(E.revision ?? ""), ce = E.source, ne = Number(ce.width || ce.naturalWidth || ce.videoWidth || 0), Ne = Number(ce.height || ce.naturalHeight || ce.videoHeight || 0);
    if (ne <= 0 || Ne <= 0) return null;
    let ve = T.get(te);
    if (ve || (ve = {
      texture: se(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(te, ve)), ve.revision !== Z || ve.width !== ne || ve.height !== Ne) {
      if (n.bindTexture(n.TEXTURE_2D, ve.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ce), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ve.revision = Z, ve.width = ne, ve.height = Ne;
    }
    return ve.texture;
  }
  function gt(E = []) {
    if (!ie()) return !1;
    const te = /* @__PURE__ */ new Set();
    return E.forEach((Z) => {
      !(Z != null && Z.assetId) || !(Z != null && Z.source) || (te.add(String(Z.assetId)), He(Z));
    }), U(te), !0;
  }
  function nt() {
    return ie() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function qe(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ue(E, te = {}) {
    if (!g) return null;
    n.disable(n.BLEND), qe(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.background, 0), n.uniform2f(D.viewport, Math.max(1, y.width), Math.max(1, y.height)), n.uniform1i(D.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const Z = Ka(E, y.width, y.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(D.yaw, Number(Z.yawDeg || 0) * Ht), n.uniform1f(D.pitch, Number(Z.pitchDeg || 0) * Ht), n.uniform1f(D.roll, Number(Z.rollDeg || 0) * Ht), n.uniform1f(D.hFov, wt(Number(Z.hFovDeg || 90), 0.1, 179) * Ht), n.uniform1f(D.vFov, wt(Number(Z.vFovDeg || 60), 0.1, 179) * Ht), n.uniform1f(D.opacity, wt(Number(te.backgroundOpacity ?? 1), 0, 1));
    const ce = Number((E == null ? void 0 : E.coverageDeg) || (te == null ? void 0 : te.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(D.coverage, ce), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function qt(E, te = {}) {
    const Z = $.paint && v != null, ce = $.mask && S != null;
    if (!Z && !ce) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), qe(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(z.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(z.mask, 1), n.uniform1i(z.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const ne = Ka(E, y.width, y.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(z.yaw, Number(ne.yawDeg || 0) * Ht), n.uniform1f(z.pitch, Number(ne.pitchDeg || 0) * Ht), n.uniform1f(z.roll, Number(ne.rollDeg || 0) * Ht), n.uniform1f(z.hFov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * Ht), n.uniform1f(z.vFov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * Ht), n.uniform1f(z.paintOpacity, wt(Number(te.paintOpacity ?? 1), 0, 1)), n.uniform1f(z.maskOpacity, wt(Number(te.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(z.hasPaint, Z ? 1 : 0), n.uniform1i(z.hasMask, ce ? 1 : 0), n.uniform1i(z.showMaskTint, te.showMaskTint === !1 ? 0 : 1), n.uniform3f(z.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function An(E, te) {
    var Ce, p, Ve, Ke, et, bt, at;
    const Z = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!Z.length) {
      J(), U(/* @__PURE__ */ new Set());
      return;
    }
    const ce = (te == null ? void 0 : te.mode) === "unwrap" ? 0 : (te == null ? void 0 : te.mode) === "cutout" ? 2 : 1, ne = Ka(te, y.width, y.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Ne = Wn(ne.yawDeg, ne.pitchDeg, ne.rollDeg), ve = Z.slice().sort((re, At) => Number((re == null ? void 0 : re.zIndex) || 0) - Number((At == null ? void 0 : At.zIndex) || 0)), Ie = /* @__PURE__ */ new Set();
    J();
    for (const re of ve)
      if (!(!re || re.visible === !1)) {
        if (re.type === "sticker") {
          const At = String(((Ce = re == null ? void 0 : re.params) == null ? void 0 : Ce.assetId) || (re == null ? void 0 : re.id) || "");
          if (!At) continue;
          Ie.add(At);
          const _n = He({
            assetId: At,
            source: re.source,
            revision: re.revision
          });
          if (!_n) continue;
          const ot = t_({
            yawDeg: ((p = re == null ? void 0 : re.transform) == null ? void 0 : p.yawDeg) || 0,
            pitchDeg: ((Ve = re == null ? void 0 : re.transform) == null ? void 0 : Ve.pitchDeg) || 0,
            rollDeg: ((Ke = re == null ? void 0 : re.transform) == null ? void 0 : Ke.rollDeg) || 0,
            hFovDeg: ((et = re == null ? void 0 : re.transform) == null ? void 0 : et.hFovDeg) || 30,
            vFovDeg: ((bt = re == null ? void 0 : re.transform) == null ? void 0 : bt.vFovDeg) || 30,
            crop: ((at = re == null ? void 0 : re.params) == null ? void 0 : at.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (re == null ? void 0 : re.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), qe(o), n.uniform1i(L.texture, 0), n.uniform1i(L.mode, ce), n.uniform3f(L.viewRight, Ne.right.x, Ne.right.y, Ne.right.z), n.uniform3f(L.viewUp, Ne.up.x, Ne.up.y, Ne.up.z), n.uniform3f(L.viewFwd, Ne.fwd.x, Ne.fwd.y, Ne.fwd.z), n.uniform1f(L.viewHfov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * Ht), n.uniform1f(L.viewVfov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * Ht), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, _n), n.uniform3f(L.stickerRight, ot.right.x, ot.right.y, ot.right.z), n.uniform3f(L.stickerUp, ot.up.x, ot.up.y, ot.up.z), n.uniform3f(L.stickerFwd, ot.fwd.x, ot.fwd.y, ot.fwd.z), n.uniform1f(L.stickerTanX, Math.max(1e-6, ot.tanX)), n.uniform1f(L.stickerTanY, Math.max(1e-6, ot.tanY)), n.uniform4f(
            L.crop,
            wt(Number(ot.crop.x0 ?? 0), 0, 1),
            wt(Number(ot.crop.y0 ?? 0), 0, 1),
            wt(Number(ot.crop.x1 ?? 1), 0, 1),
            wt(Number(ot.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(L.opacity, ot.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (re.type === "paint" || re.type === "raster") {
          if (!we(re.source, re.revision ?? "")) continue;
          de("paint"), qt(te, {
            paintOpacity: Number(re.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (re.type === "mask") {
          if (!De(re.source, re.revision ?? "")) continue;
          de("mask"), qt(te, {
            paintOpacity: 0,
            maskOpacity: Number(re.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    U(Ie), J();
  }
  function vn(E) {
    return !nt() || !g ? null : (Ue({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function tn(E) {
    return !nt() || !g ? null : (Ue({ mode: "unwrap" }, E), t);
  }
  function Cn(E) {
    return !nt() || !g ? null : (Ue({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function R(E = {}) {
    if (!ie()) return !1;
    const te = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), Z = Object.prototype.hasOwnProperty.call(E, "paintSource"), ce = Object.prototype.hasOwnProperty.call(E, "maskSource"), ne = Object.prototype.hasOwnProperty.call(E, "textures"), Ne = Object.prototype.hasOwnProperty.call(E, "scene");
    return te && A(E.backgroundSource, E.backgroundRevision ?? ""), Z && we(E.paintSource, E.paintRevision ?? ""), ce && De(E.maskSource, E.maskRevision ?? ""), ne && (gt(E.textures || []), F.textures = E.textures || []), Ne && (F.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (F.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (F.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (F.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (F.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function B(E = {}) {
    return !ie() || (Y(E.width, E.height, E.dpr || 1), !nt()) || !R(E) ? null : (g && Ue(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), An(
      F.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function q(E = {}) {
    return R(E);
  }
  function ye(E, te, Z) {
    const ce = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || y.sourceWidth || y.width || 1)), ne = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || y.sourceHeight || y.height || 1)), Ne = Number(te), ve = Number(Z);
    if (!Number.isFinite(Ne) || !Number.isFinite(ve)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (Ne / ce % 1 + 1) % 1, v: wt(ve / ne, 0, 1) };
    const Ie = Ka(E, ce, ne);
    if (!Ie) return null;
    const Ce = Wn(Ie.yawDeg, Ie.pitchDeg, Ie.rollDeg), p = (Ne - ce * 0.5) / (ce * 0.5) * Math.tan(wt(Ie.hFovDeg, 1, 179) * Ht * 0.5), Ve = (ne * 0.5 - ve) / (ne * 0.5) * Math.tan(wt(Ie.vFovDeg, 0.1, 179) * Ht * 0.5), Ke = X1(hh(hh(ph(Ce.right, p), ph(Ce.up, Ve)), Ce.fwd));
    return {
      u: (Math.atan2(Ke.x, Ke.z) / Dm + 0.5 + 1) % 1,
      v: wt(0.5 - Math.asin(wt(Ke.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function he(E, te, Z) {
    const ce = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || y.sourceWidth || y.width || 1)), ne = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || y.sourceHeight || y.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(te || 0) % 1 + 1) % 1 * ce,
        y: wt(Number(Z || 0), 0, 1) * ne,
        visible: !0
      };
    const Ne = Ka(E, ce, ne);
    if (!Ne)
      return { x: ce * 0.5, y: ne * 0.5, visible: !1 };
    const ve = Wn(Ne.yawDeg, Ne.pitchDeg, Ne.rollDeg), Ie = J1(te, Z), Ce = mu(Ie, ve.right), p = mu(Ie, ve.up), Ve = mu(Ie, ve.fwd);
    if (Ve <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ke = ce * 0.5 + Ce / Ve * (ce * 0.5 / Math.tan(wt(Ne.hFovDeg, 1, 179) * Ht * 0.5)), et = ne * 0.5 - p / Ve * (ne * 0.5 / Math.tan(wt(Ne.vFovDeg, 0.1, 179) * Ht * 0.5));
    return { x: Ke, y: et, visible: Ke >= 0 && Ke <= ce && et >= 0 && et <= ne };
  }
  return {
    init: ie,
    dispose: I,
    setViewport: Y,
    setBackgroundErp: A,
    setPaintErp: we,
    setMaskErp: De,
    renderPanorama: vn,
    renderUnwrap: tn,
    renderCutout: Cn,
    renderScene: B,
    syncState: q,
    screenToErpUv: ye,
    erpUvToScreen: he,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ie();
    },
    getViewport() {
      return { ...y };
    }
  };
}
function bh(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function r_() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, d) {
    const b = t(u);
    let g = e.get(b) || null;
    if (!g) {
      const M = document.createElement("canvas"), y = M.getContext("2d");
      if (!y) return null;
      g = {
        id: b,
        canvas: M,
        ctx: y,
        width: 0,
        height: 0
      }, e.set(b, g);
    }
    const v = bh(f), S = bh(d);
    return g.width !== v && (g.canvas.width = v, g.width = v), g.height !== S && (g.canvas.height = S, g.height = S), g;
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
const i_ = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), a_ = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Fm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function o_(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function s_(e = {}) {
  const t = a_.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Fm(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function l_(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!i_.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Fm(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: o_(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function u_(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => l_(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const o = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return o - u;
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Pa(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: s_((e == null ? void 0 : e.background) || {}),
    objectPass: u_((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function c_(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $c(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? c_(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function f_(e, t, n = {}) {
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
function d_(e, t, n = {}) {
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
function h_(e, t, n = {}) {
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
function Rm(e = {}) {
  const t = [], n = f_(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = d_(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((o, u) => {
    const f = h_(
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
    const f = Number((o == null ? void 0 : o.zIndex) || 0), d = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== d ? f - d : String((o == null ? void 0 : o.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function jc(e, t) {
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
function p_(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, o = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Pa({
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
      objects: jc(a, o)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ys(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = jc(t, n), a = Rm({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Pa({
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
function m_(e = {}) {
  var o, u, f, d, b, g, v, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = Pa(e), y = Array.isArray((o = M.objectPass) == null ? void 0 : o.objects) ? M.objectPass.objects : [], D = {
      stickers: y.filter((V) => V.type === "sticker").map((V) => {
        var T, F, j, $, se, ie, I, Y, ee, J, de, fe, ke;
        return {
          id: V.id,
          assetId: String(((T = V == null ? void 0 : V.params) == null ? void 0 : T.assetId) || ((F = V == null ? void 0 : V.params) == null ? void 0 : F.asset_id) || (V == null ? void 0 : V.id) || ""),
          yawDeg: Number(((j = V == null ? void 0 : V.transform) == null ? void 0 : j.yawDeg) ?? (($ = V == null ? void 0 : V.params) == null ? void 0 : $.yawDeg) ?? 0),
          pitchDeg: Number(((se = V == null ? void 0 : V.transform) == null ? void 0 : se.pitchDeg) ?? ((ie = V == null ? void 0 : V.params) == null ? void 0 : ie.pitchDeg) ?? 0),
          rollDeg: Number(((I = V == null ? void 0 : V.transform) == null ? void 0 : I.rollDeg) ?? ((Y = V == null ? void 0 : V.params) == null ? void 0 : Y.rollDeg) ?? 0),
          hFovDeg: Number(((ee = V == null ? void 0 : V.transform) == null ? void 0 : ee.hFovDeg) ?? ((J = V == null ? void 0 : V.params) == null ? void 0 : J.hFovDeg) ?? 30),
          vFovDeg: Number(((de = V == null ? void 0 : V.transform) == null ? void 0 : de.vFovDeg) ?? ((fe = V == null ? void 0 : V.params) == null ? void 0 : fe.vFovDeg) ?? 30),
          crop: ((ke = V == null ? void 0 : V.params) == null ? void 0 : ke.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((V == null ? void 0 : V.opacity) ?? 1),
          visible: (V == null ? void 0 : V.visible) !== !1,
          zIndex: Number((V == null ? void 0 : V.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = M.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, z = y.filter((V) => V.type === "sticker").map((V) => {
      var T, F;
      return {
        assetId: String(((T = V == null ? void 0 : V.params) == null ? void 0 : T.assetId) || ((F = V == null ? void 0 : V.params) == null ? void 0 : F.asset_id) || (V == null ? void 0 : V.id) || ""),
        source: V.source || null,
        revision: String((V == null ? void 0 : V.revision) || "")
      };
    }).filter((V) => V.assetId && V.source), L = y.find((V) => V.type === "paint") || null, P = y.find((V) => V.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((d = M.background) == null ? void 0 : d.source) || null,
      backgroundRevision: String(((b = M.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((g = M.background) == null ? void 0 : g.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (L == null ? void 0 : L.source) || null,
      paintRevision: String((L == null ? void 0 : L.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: z,
      scene: D,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((v = M.background) == null ? void 0 : v.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = Pa({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...jc(t, n),
        ...Rm({
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
function g_(e) {
  let t = null;
  function n(o = {}) {
    const u = m_(o);
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
function cl(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (z) => n_(z), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => r_(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (z) => g_(z), a = t(e), o = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const d = r({
    syncState(z = {}) {
      if (typeof a.syncState == "function") {
        const L = { ...z }, P = a.syncState(L);
        return P && (f = L, P);
      }
      return f = { ...z }, !0;
    }
  });
  function b(z = {}) {
    return d.sync(z);
  }
  function g(z = {}, L = {}) {
    return f ? a.renderScene({
      ...f,
      view: z,
      width: L.width,
      height: L.height,
      dpr: L.dpr,
      backgroundOpacity: L.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: L.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function v(z, L, P = {}, V = {}) {
    if (!L) return !1;
    const T = Math.min(1, Math.max(0.1, Number(V.renderScale ?? 1))), F = g(P, {
      ...V,
      width: Math.max(1, Math.round(L.w * T)),
      height: Math.max(1, Math.round(L.h * T))
    });
    return F ? z ? (z.canvas && F === z.canvas || z.drawImage(F, L.x, L.y, L.w, L.h), !0) : !!o && F === o : !1;
  }
  function S(z, L = {}, P = {}) {
    const V = Number(P.width || 0), T = Number(P.height || 0);
    if (!(V > 0) || !(T > 0)) return null;
    const F = u.ensureTarget(z, V, T);
    if (!F) return null;
    const j = g(L, {
      ...P,
      width: V,
      height: T
    });
    return j ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(j, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function M(z) {
    u.clearTarget(z);
  }
  function y() {
    var z;
    u.dispose(), (z = a.dispose) == null || z.call(a), f = null;
  }
  function D() {
    f = null, d.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: g,
    renderToContext: v,
    renderToTarget: S,
    clearTarget: M,
    snapshotState: d.snapshot,
    clearState: D,
    dispose: y
  };
}
function la(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function b_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function yh(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const o = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, d = -1, b = -1;
  for (let v = 0; v < a; v += 1)
    for (let S = 0; S < r; S += 1)
      o[(v * r + S) * 4 + 3] <= t || (S < u && (u = S), v < f && (f = v), S > d && (d = S), v > b && (b = v));
  return d < u || b < f ? null : {
    minX: u,
    minY: f,
    maxX: d,
    maxY: b,
    width: d - u + 1,
    height: b - f + 1,
    aspect: Number(((d - u + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function Hc(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function $r(e, t, n) {
  if (!e) return la(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function Dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let yu = null, vu = null, vh = null, _h = null, Rt = null, Wa = null, wn = null, ri = null;
function y_() {
  if (vu) return vu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), vu = n, n;
}
function _u(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  yu = $r(yu, n, r);
  const a = yu;
  Dt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", _h !== a.ctx && (vh = a.ctx.createPattern(y_(), "repeat"), _h = a.ctx), a.ctx.fillStyle = vh, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function v_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function __(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function x_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function S_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ot = /* @__PURE__ */ new Map(), Uc = 128;
function w_(e, t, n, r, a, o) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${o.toFixed(3)}`;
  if (Ot.has(d)) {
    const P = Ot.get(d);
    return Ot.delete(d), Ot.set(d, P), P;
  }
  Ot.size >= Uc && Ot.delete(Ot.keys().next().value);
  const b = u * 2 + 2, g = u + 1, v = Hc(b, b), S = v.getContext("2d"), M = f * u, y = u + 1, D = `rgba(${n},${r},${a},${o})`, z = `rgba(${n},${r},${a},0)`, L = S.createRadialGradient(g, g, M, g, g, y);
  return L.addColorStop(0, D), L.addColorStop(1, z), S.fillStyle = L, S.fillRect(0, 0, b, b), Ot.set(d, v), v;
}
function k_(e, t, n, r, a, o, u) {
  const { r: f, g: d, b, a: g } = r, v = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), y = Math.max(0, Math.min(0.99, o)), D = Math.max(0, Math.min(1, u ?? 0)), z = `chisel:${v}:${S}:${n.toFixed(2)}:${f}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${y.toFixed(2)}:${D.toFixed(2)}`;
  if (Ot.has(z)) {
    const se = Ot.get(z);
    return Ot.delete(z), Ot.set(z, se), se;
  }
  Ot.size >= Uc && Ot.delete(Ot.keys().next().value);
  const L = Hc(v, S), P = L.getContext("2d"), V = P.createImageData(v, S), T = V.data, F = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), $ = 1 + M;
  for (let se = 0; se < S; se++)
    for (let ie = 0; ie < v; ie++) {
      const I = ie + 0.5 - e, Y = se + 0.5 - t, ee = Math.max(Math.abs(I) - F, 0), de = Math.hypot(ee, Y) / t;
      if (de >= 1) continue;
      const fe = de <= j ? 1 : Math.max(0, (1 - de) / Math.max(1e-4, 1 - j)), ke = 1 - de, A = 1 + M * (1 - ke) * (1 - ke), we = 1 - y * ke * ke, De = A * we / $;
      let Pe = 1;
      if (D > 0) {
        const gt = Math.floor((Y + t) / 1.5), nt = Math.floor((I + e) / 8), qe = Ci(ba(gt * 41 + 500, nt * 19 + 300));
        Pe = 1 - D * 0.42 * qe;
      }
      const U = Math.round(255 * Math.min(1, g * fe * De * Pe));
      if (U <= 0) continue;
      const He = (se * v + ie) * 4;
      T[He] = f, T[He + 1] = d, T[He + 2] = b, T[He + 3] = U;
    }
  return P.putImageData(V, 0, 0), Ot.set(z, L), L;
}
function ba(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Ci(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function M_(e, t, n, r, a, o, u) {
  const f = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(f) - b, 0), v = Math.hypot(g, d) / r;
  if (v >= 1) return 0;
  const S = Ci(ba(e * 17 + 3, t * 13 + 7)), M = v + o * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const y = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), D = N_(e, t, f, d, n, r), z = o * 0.55;
  if (D < z) return 0;
  const P = 0.45 + 0.55 * ((D - z) / Math.max(1e-4, 1 - z));
  return Math.round(255 * Math.min(1, u * y * P));
}
function N_(e, t, n, r, a, o) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + o) / 2), d = Ci(ba(u * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), g = Math.floor((r + o) / 1.5), v = Ci(ba(b * 23 + 800, g * 29 + 500)), S = Ci(ba(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + S * 0.15;
}
function P_(e, t, n, r, a) {
  const { r: o, g: u, b: f, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, a)), S = `crayon:${b}:${g}:${n.toFixed(2)}:${o}:${u}:${f}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (Ot.has(S)) {
    const P = Ot.get(S);
    return Ot.delete(S), Ot.set(S, P), P;
  }
  Ot.size >= Uc && Ot.delete(Ot.keys().next().value);
  const M = Hc(b, g), y = M.getContext("2d"), D = y.createImageData(b, g), z = D.data, L = Math.max(0, Math.min(1, n));
  for (let P = 0; P < g; P++)
    for (let V = 0; V < b; V++) {
      const T = M_(V, P, e, t, L, v, d);
      if (T <= 0) continue;
      const F = (P * b + V) * 4;
      z[F] = o, z[F + 1] = u, z[F + 2] = f, z[F + 3] = T;
    }
  return y.putImageData(D, 0, 0), Ot.set(S, M), M;
}
function Lm(e, t, n) {
  var D, z;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = x_(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = A_(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((D = t == null ? void 0 : t.angle) == null ? void 0 : D.value) ?? 0), b = S_(t, a), g = String(((z = t == null ? void 0 : t.targetSpace) == null ? void 0 : z.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let y;
  if (r === "chisel") {
    const L = a * f, P = a, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    y = k_(L, P, o, u, V, T, F);
  } else if (r === "crayon") {
    const L = a * f, P = a, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    y = P_(L, P, o, u, V);
  } else
    y = w_(a, o, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: y, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: d, stampKind: r, scatter: M, latitudeCorrection: v };
}
function A_(e) {
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
function C_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function xh(e, t, n, r, a) {
  const o = e.angle, u = e.desc.width;
  function f(b, g) {
    o === 0 ? e.ctx.drawImage(e.stampTex, b - a, g - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = o === 0 ? a : a * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - d < 0 && f(t + u, n), t + d > u && f(t - u, n);
}
function Gc(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, v = b * e.radiusPx * a, S = ba(t, n);
    for (let M = 0; M < g; M++) {
      const y = Ci(S + M * 2) * Math.PI * 2, D = Math.sqrt(Ci(S + M * 2 + 1)) * v, z = t + Math.cos(y) * D, L = n + Math.sin(y) * D, P = Math.max(0.5, e.radiusPx * a * 0.48), V = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, F = P * e.aspect * T;
      xh(e, z, L, P, F);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, d = o * e.aspect * f;
  xh(e, t, n, o, d);
}
function Sh(e, t, n) {
  const r = __(t);
  if (!e || r.length === 0) return;
  const a = n.width, o = n.height, u = Lm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * a;
    const y = Number(r[S].v || 0) * o;
    S > 0 && Math.abs(M - f[S - 1].x) > a * 0.5 && (M += M < f[S - 1].x ? a : -a), f.push({ x: M, y });
  }
  if (Gc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], b = f[0], g = f[0], v = 0;
  for (let S = 1; S < f.length; S++) {
    const M = f[S], y = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    S === 1 ? v = go(u, g.x, g.y, y.x, y.y, v) : v = Rs(u, d, g, y, M, v), d = b, b = M, g = y;
  }
  f.length === 2 ? go(u, g.x, g.y, b.x, b.y, v) : Rs(u, d, g, b, b, v), e.restore();
}
function vs(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, o = n.height, u = C_(t), f = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = v_(r[S]);
    let y = Number(M.x || 0) * a;
    S > 0 && Math.abs(y - f[S - 1].x) > a * 0.5 && (y += y < f[S - 1].x ? a : -a), f.push({ x: y, y: Number(M.y || 0) * o }), y < d && (d = y), y > b && (b = y);
  }
  function g(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + S, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, g(0), d < 0 && g(a), b > a && g(-a), e.restore();
}
function qo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    vs(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Sh(e, t, n) : (Wa = $r(Wa, n.width, n.height), Dt(Wa), Sh(Wa.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Wa.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function go(e, t, n, r, a, o) {
  const u = r - t, f = a - n, d = Math.hypot(u, f);
  if (d < 1e-9) return o;
  let b = e.spacingPx - o;
  for (; b <= d; ) {
    const g = b / d;
    Gc(e, t + u * g, n + f * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function Rs(e, t, n, r, a, o) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, g = 0, v = f, S = v + d, M = S + b, y = S - v, D = 16;
  let z = o, L = n.x, P = n.y;
  for (let V = 1; V <= D; V++) {
    const T = v + y * V / D, F = ((v - T) * t.x + (T - g) * n.x) / (v - g), j = ((v - T) * t.y + (T - g) * n.y) / (v - g), $ = ((S - T) * n.x + (T - v) * r.x) / (S - v), se = ((S - T) * n.y + (T - v) * r.y) / (S - v), ie = ((M - T) * r.x + (T - S) * a.x) / (M - S), I = ((M - T) * r.y + (T - S) * a.y) / (M - S), Y = ((S - T) * F + (T - g) * $) / (S - g), ee = ((S - T) * j + (T - g) * se) / (S - g), J = ((M - T) * $ + (T - v) * ie) / (M - v), de = ((M - T) * se + (T - v) * I) / (M - v), fe = ((S - T) * Y + (T - v) * J) / (S - v), ke = ((S - T) * ee + (T - v) * de) / (S - v);
    z = go(e, L, P, fe, ke, z), L = fe, P = ke;
  }
  return z;
}
function I_(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const o = e.descriptor, u = o.width, f = n * o.height, d = e.activeStroke;
  let b = t * u;
  if (d && Math.abs(b - d.prev.x) > u * 0.5 && (b += b < d.prev.x ? u : -u), !d) {
    const M = Lm(a, r, o), y = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), D = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), z = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Gc(M, b, f, 1), e.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
      lastMidY: f,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: y,
      velocityWidthFactor: D,
      distSinceStamp: 0,
      isEraser: z,
      layerKind: L,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + b) * 0.5, v = (d.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: d.stampTex,
    radiusPx: d.radiusPx,
    spacingPx: d.spacingPx,
    desc: o,
    aspect: d.aspect,
    angle: d.angle,
    stampKind: d.stampKind,
    scatter: d.scatter,
    latitudeCorrection: d.latitudeCorrection
  };
  d.pointCount === 1 ? d.distSinceStamp = go(S, d.lastMidX, d.lastMidY, g, v, d.distSinceStamp) : d.distSinceStamp = Rs(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: v },
    { x: b, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: f }, d.lastMidX = g, d.lastMidY = v, d.pointCount++, e.displayDirty = !0;
}
function Xu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), o = la(t, n), u = {
    descriptor: r,
    committedMask: la(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: la(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = la(t, n);
  let b = null, g = "", v = null;
  function S(I) {
    return {
      actionGroupId: I,
      descriptor: r,
      committedPaint: la(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(I) {
    let Y = a.get(I);
    return Y || (Y = S(I), a.set(I, Y)), Y;
  }
  function y(I) {
    return g === "mask" ? u : b ? M(b) : f;
  }
  function D(I) {
    var ke;
    const Y = !v || v.length !== I.length || I.some((A, we) => A !== v[we]), ee = g === "paint" && ((ke = b ? a.get(b) : f) == null ? void 0 : ke.activeStroke) || null;
    let J = u.displayDirty || f.displayDirty || Y;
    for (const A of I) {
      const we = a.get(A);
      if (we != null && we.displayDirty) {
        J = !0;
        break;
      }
    }
    if (ee && (J = !0), !J) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const A of I) {
      const we = a.get(A);
      we && (we.displayDirty = !1);
    }
    v = [...I];
    const de = d.ctx;
    Dt(d);
    const fe = !!(ee != null && ee.isEraser);
    for (const A of I) {
      const we = a.get(A);
      if (!we) continue;
      const Pe = b === we.actionGroupId && g === "paint" ? we.activeStroke : null;
      if (fe)
        Rt = $r(Rt, t, n), Dt(Rt), Rt.ctx.drawImage(we.committedPaint.canvas, 0, 0), _i(Rt.ctx, o.canvas), de.drawImage(Rt.canvas, 0, 0);
      else if (de.drawImage(we.committedPaint.canvas, 0, 0), Pe) {
        const U = we.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = U, de.drawImage(o.canvas, 0, 0), de.restore();
      }
    }
  }
  function z(I) {
    var ee, J, de, fe, ke;
    for (const A of a.values())
      Dt(A.committedPaint), Dt(A.currentStroke), A.activeStroke = null, A.displayDirty = !0;
    Dt(u.committedMask), Dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, v = null;
    const Y = [
      ...Array.isArray((J = (ee = I == null ? void 0 : I.painting) == null ? void 0 : ee.paint) == null ? void 0 : J.strokes) ? I.painting.paint.strokes : [],
      ...Array.isArray((fe = (de = I == null ? void 0 : I.painting) == null ? void 0 : de.mask) == null ? void 0 : fe.strokes) ? I.painting.mask.strokes : []
    ];
    for (const A of Y) {
      if (((ke = A == null ? void 0 : A.targetSpace) == null ? void 0 : ke.kind) !== "ERP_GLOBAL") continue;
      const we = String((A == null ? void 0 : A.layerKind) || "paint"), Pe = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (we === "mask") {
        const U = u.descriptor;
        Pe ? (Rt = $r(Rt, U.width, U.height), Dt(Rt), qo(Rt.ctx, A, U), _i(u.committedMask.ctx, Rt.canvas)) : qo(u.committedMask.ctx, A, U);
        continue;
      }
      if (Pe) {
        Rt = $r(Rt, r.width, r.height), Dt(Rt), qo(Rt.ctx, A, r);
        for (const U of a.values())
          _i(U.committedPaint.ctx, Rt.canvas), U.displayDirty = !0;
      } else {
        const U = String((A == null ? void 0 : A.actionGroupId) || "__default__"), He = M(U), gt = He.descriptor;
        qo(He.committedPaint.ctx, A, gt), He.displayDirty = !0;
      }
    }
    D([...a.keys()]);
  }
  function L(I, Y) {
    g = String((I == null ? void 0 : I.layerKind) || "");
    const ee = String((I == null ? void 0 : I.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const J = ee ? f : M(String((I == null ? void 0 : I.actionGroupId) || "__default__"));
      b = ee ? "" : String((I == null ? void 0 : I.actionGroupId) || "__default__"), Dt(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function P(I, Y) {
    var we;
    const ee = String((I == null ? void 0 : I.layerKind) || "paint"), J = String((I == null ? void 0 : I.toolKind) || "") === "eraser", de = ee === "mask" ? u : J ? f : M(String((I == null ? void 0 : I.actionGroupId) || b || "__default__")), fe = de.activeStroke, ke = de.descriptor;
    if (fe && fe.pointCount > 1) {
      const De = de.currentStroke.ctx;
      De.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: De,
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
      fe.pointCount === 2 ? go(Pe, fe.lastMidX, fe.lastMidY, fe.prev.x, fe.prev.y, fe.distSinceStamp) : Rs(Pe, fe.pprev, { x: fe.lastMidX, y: fe.lastMidY }, fe.prev, fe.prev, fe.distSinceStamp);
    }
    de.lassoPreviewActive && (Dt(de.currentStroke), vs(de.currentStroke.ctx, I, ke), de.lassoPreviewActive = !1);
    const A = ee === "mask" ? u.committedMask : de.committedPaint;
    if (J && ee === "paint")
      for (const De of a.values())
        _i(De.committedPaint.ctx, de.currentStroke.canvas), De.displayDirty = !0;
    else if (J)
      _i(A.ctx, de.currentStroke.canvas);
    else {
      const De = Math.max(0, Math.min(1, (fe == null ? void 0 : fe.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = De, A.ctx.drawImage(de.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    b_() && (String((I == null ? void 0 : I.toolKind) || ""), String((ke == null ? void 0 : ke.kind) || ""), Number((ke == null ? void 0 : ke.width) || 0), Number((ke == null ? void 0 : ke.height) || 0), String(((we = I == null ? void 0 : I.targetSpace) == null ? void 0 : we.viewMode) || ""), Number((I == null ? void 0 : I.aspect) ?? 1), yh(de.currentStroke.canvas), yh(A.canvas), void 0), Dt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0, b = null, g = "", D([...a.keys()]);
  }
  function V(I) {
    if (g === "mask")
      Dt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (g === "paint" && !b)
      Dt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const Y = a.get(b);
      Y && (Dt(Y.currentStroke), Y.activeStroke = null, Y.lassoPreviewActive = !1, Y.displayDirty = !0);
    }
    b = null, g = "", D([...a.keys()]);
  }
  function T(I, Y) {
    var J;
    if (g = String((I == null ? void 0 : I.layerKind) || ""), String(((J = I == null ? void 0 : I.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Dt(u.currentStroke), vs(u.currentStroke.ctx, I, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const de = String((I == null ? void 0 : I.toolKind) || "") === "eraser", fe = de ? f : M(String((I == null ? void 0 : I.actionGroupId) || b || "__default__"));
        b = de ? "" : String((I == null ? void 0 : I.actionGroupId) || b || "__default__"), Dt(fe.currentStroke), vs(fe.currentStroke.ctx, I, fe.descriptor), fe.lassoPreviewActive = !0, fe.displayDirty = !0;
      }
      D([...a.keys()]);
    }
  }
  function F(I) {
    return D(I ?? [...a.keys()]), {
      displayPaint: d,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function j(I) {
    return a.get(String(I)) ?? null;
  }
  function $() {
    return [...a.keys()];
  }
  function se(I) {
    var ke;
    const Y = a.get(String(I));
    if (!Y) return null;
    const ee = g === "paint" && b === Y.actionGroupId, J = g === "paint" && ((ke = b ? a.get(b) : f) == null ? void 0 : ke.activeStroke) || null;
    if (J != null && J.isEraser)
      return wn = $r(wn, t, n), Dt(wn), wn.ctx.drawImage(Y.committedPaint.canvas, 0, 0), _i(wn.ctx, o.canvas), wn.canvas;
    const de = ee ? Y.activeStroke : null;
    if (!de) return Y.committedPaint.canvas;
    wn = $r(wn, t, n), Dt(wn), wn.ctx.drawImage(Y.committedPaint.canvas, 0, 0);
    const fe = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, de.strokeOpacity ?? 1));
    return wn.ctx.save(), wn.ctx.globalAlpha = fe, wn.ctx.drawImage(o.canvas, 0, 0), wn.ctx.restore(), wn.canvas;
  }
  function ie() {
    return ri = $r(ri, t, n), Dt(ri), _u(ri.ctx, u.committedMask.canvas), g === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Rt = $r(Rt, t, n), Dt(Rt), Rt.ctx.drawImage(u.committedMask.canvas, 0, 0), _i(Rt.ctx, o.canvas), Dt(ri), _u(ri.ctx, Rt.canvas)) : _u(ri.ctx, o.canvas)), ri.canvas;
  }
  return {
    rebuildCommitted: z,
    beginStroke: L,
    appendStrokePoint: I_,
    updateActiveStroke: T,
    commitActiveStroke: P,
    cancelActiveStroke: V,
    getErpTarget: F,
    ensureTarget: y,
    getGroupTarget: j,
    getGroupDisplayCanvas: se,
    getMaskDisplayCanvas: ie,
    getAllGroupIds: $
  };
}
const Ju = 3;
function Ya(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Bc(e, t = 0) {
  const n = Ya(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ya(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const a = Ya(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const o = Ya(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Ya(t) || 0);
}
function Vm(e) {
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
const wh = Math.PI / 180, kh = 0.12, T_ = Ju, E_ = 35, D_ = 140, eo = 100, O_ = 20, Mh = 0.8;
function F_(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), o = W(Number(e || eo), 1, 179) * wh;
  return 2 * Math.atan(Math.tan(o * 0.5) * (a / r)) / wh;
}
function Kc(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: eo })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(P, V = null) {
    f && f(P, V);
  }
  function g(P, V, T = null, F = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(P || 0), d.drag.lastY = Number(V || 0), d.drag.lastTs = Number(F || performance.now()), d.drag.pointerId = T, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: T }), !0;
  }
  function v(P, V, T = "pano", F = performance.now()) {
    if (!d.drag.active) return !1;
    const j = Number(F || performance.now()), $ = Number(P), se = Number(V), ie = $ - d.drag.lastX, I = se - d.drag.lastY;
    d.drag.lastX = $, d.drag.lastY = se, d.drag.lastTs = j;
    const Y = r() || { x: 1, y: 1 }, ee = Number(Y.x || 1), J = Number(Y.y || 1), de = { ...t() };
    let fe = 0, ke = 0;
    if (T === "unwrap") {
      const we = a() || { w: 1, h: 1 }, De = Math.max(1, Number(we.w || 1)), Pe = Math.max(1, Number(we.h || 1)), U = ie / De, He = I / Pe;
      fe = -U * 360 * ee, ke = He * 180 * J;
    } else {
      const we = o() || { w: 0, h: 0 }, De = Math.max(1, Number(we.w || 0)), Pe = Math.max(1, Number(we.h || 0));
      if (De > 1 && Pe > 1) {
        const U = W(Number(de.fov || eo), 1, 179), He = W(F_(U, De, Pe), 0.1, 179);
        fe = -(ie / De) * U * ee, ke = I / Pe * He * J;
      } else
        fe = -ie * kh * ee, ke = I * kh * J;
    }
    de.yaw = Ut(Number(de.yaw || 0) + fe), de.pitch = W(Number(de.pitch || 0) + ke, -89.9, 89.9), n(de), d.velHistory.push({ ts: j, yaw: de.yaw, pitch: de.pitch });
    let A = 0;
    for (; A < d.velHistory.length - 1 && d.velHistory[A].ts < j - 100; ) A++;
    return A > 0 && d.velHistory.splice(0, A), d.inertia.active = !1, d.inertia.lastTs = j, u(), b("drag", { phase: "move", dx: ie, dy: I, dYaw: fe, dPitch: ke }), !0;
  }
  function S(P = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const V = Number(P || performance.now());
    d.drag.lastTs = V;
    const T = d.velHistory.filter((j) => V - j.ts <= 80);
    if (T.length >= 2) {
      const j = T[0], $ = T.at(-1), se = Math.max(1e-3, ($.ts - j.ts) / 1e3);
      let ie = $.yaw - j.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), d.inertia.vx = ie / se, d.inertia.vy = ($.pitch - j.pitch) / se;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const F = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = F > O_, d.inertia.lastTs = V, b("drag", { phase: "end", speed: F, inertiaActive: d.inertia.active }), !0;
  }
  function M(P = performance.now()) {
    if (!d.inertia.active) return !1;
    const V = Number(P || performance.now()), T = Math.max(1e-3, (V - (d.inertia.lastTs || V)) / 1e3);
    d.inertia.lastTs = V;
    const F = { ...t() };
    F.yaw = Ut(Number(F.yaw || 0) + d.inertia.vx * T), F.pitch = W(Number(F.pitch || 0) + d.inertia.vy * T, -89.9, 89.9);
    const j = Math.exp(-5.5 * T);
    return d.inertia.vx *= j, d.inertia.vy *= j, Math.abs(d.inertia.vx) < Mh && Math.abs(d.inertia.vy) < Mh && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(F), u(), d.inertia.active;
  }
  function y() {
    const P = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], P;
  }
  function D(P) {
    const V = Math.sign(Number(P || 0));
    if (!V) return !1;
    const T = { ...t() }, F = Number(T.fov || eo);
    return T.fov = W(F + V * T_, E_, D_), n(T), u(), b("wheel", { deltaSign: V, fovBefore: F, fovAfter: T.fov }), !0;
  }
  function z(P, V = 0) {
    return D(Bc(P, V));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: eo }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, u();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: v,
    endDrag: S,
    stepInertia: M,
    stopMotion: y,
    applyWheel: D,
    applyWheelEvent: z,
    resetView: L
  };
}
function Ls(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function R_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function L_(e) {
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
function V_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function z_(e, t) {
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
function Xo(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const o = z_(a, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function $_(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Xo(e.points, t, 3);
    return d ? { geometryKind: a, points: d } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const o = Xo(e.points, t, 1);
  if (!o) return null;
  const u = Xo(e.rawPoints, t, 1), f = Xo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: o,
    rawPoints: u || o.map((d) => ({ ...d })),
    processedPoints: f || o.map((d) => ({ ...d }))
  };
}
function j_(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = V_(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = $_(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const o = yt(e.size, null), u = yt(e.opacity, null);
  if (o == null || u == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const b = yt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, yt(S.r, 0))),
      g: Math.max(0, Math.min(1, yt(S.g, 0))),
      b: Math.max(0, Math.min(1, yt(S.b, 0))),
      a: Math.max(0, Math.min(1, yt(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: d,
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
    color: v,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function Nh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = j_(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function H_(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), a = yt(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const o = (f) => Math.max(0, Math.min(1, f)), u = { u0: o(t), v0: o(n), u1: o(r), v1: o(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function U_(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function G_(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const o = H_(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: a,
    transform: U_(e.transform)
  } : null;
}
function B_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = G_(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ya(e) {
  const t = R_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: L_(e.groups),
    paint: Nh(e.paint, "paint"),
    mask: Nh(e.mask, "mask"),
    raster_objects: B_(e.raster_objects)
  };
}
const Ar = 1, Cr = 179, Zu = 85;
function fl(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function zm(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function $m(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * Pn;
  return n && (r = Math.round(r / 15) * 15), fl(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Xr(e = {}) {
  const t = W(Qe(e.hFOV_deg || 90, 90), Ar, Cr), n = W(Qe(e.vFOV_deg || 60, 60), Ar, Cr), r = Math.tan(t * Yt * 0.5), a = Math.tan(n * Yt * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: a,
    aspect: r / Math.max(1e-12, a)
  };
}
function Ii(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Xr(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    r / (2 * a.tanHalfY)
  ));
}
function Wc(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, Qe(t, 1)), o = Math.min(n, r * a);
  return { width: o, height: o / a };
}
function Yc(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = W(2 * Math.atan(r / (2 * n)) * Pn, Ar, Cr), u = W(2 * Math.atan(a / (2 * n)) * Pn, Ar, Cr);
  return { hFOV_deg: o, vFOV_deg: u };
}
function K_(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), a = Qe(e == null ? void 0 : e.y, 0), o = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Xr(t), d = Math.max(1e-12, Qe(n, 1)), b = 2 * d * f.tanHalfX, g = 2 * d * f.tanHalfY;
  return {
    x: r + (o - b) * 0.5,
    y: a + (u - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function qc(e, t, n = Zu) {
  const r = Math.max(1e-12, Qe(t, 1)), a = W(Qe(n, Zu), 1, 89.999), o = r * Math.tan(a * Yt), u = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, o),
    halfH: Math.min(f * 0.5, o)
  };
}
function jm(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function _s(e, t) {
  const n = W(Qe(e, 60), Ar, Cr), r = Math.max(1e-6, Qe(t, 1));
  return W(
    2 * Math.atan(Math.tan(n * Yt * 0.5) * r) * Pn,
    Ar,
    Cr
  );
}
function Ph(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function W_(e, t) {
  const n = Ph(e, 1), r = Ph(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, o = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (b, g) => g ? f(g, b % g) : b, d = f(o, u) || 1;
  return `${Math.max(1, Math.round(o / d))}:${Math.max(1, Math.round(u / d))}`;
}
function Ti(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Yt, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Yt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function wi(e) {
  const t = Ti(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (r == null ? void 0 : r[0]) || W_(t, 1);
}
function Hm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = wi(t), t;
}
function Um({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: a = 100,
  frameFovDeg: o = null
} = {}) {
  const u = o == null || String(o).trim() === "" ? NaN : Number(o), f = Number.isFinite(u) ? W(u, Ar, Cr) : W(Math.min(42, Qe(a, 100) * 0.42), 8, 96);
  return Hm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: W(Qe(n, 0), -89.9, 89.9),
    roll_deg: fl(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function jr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : wi(e);
}
function Gm(e, t) {
  const n = Xr(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * r) * Pn, o = 2 * Math.atan(n.tanHalfY * r) * Pn;
  return a < Ar || a > Cr || o < Ar || o > Cr ? null : { hFOV_deg: a, vFOV_deg: o };
}
function Bm(e, t, n = Ju) {
  const r = Math.sign(Qe(t, 0)), a = Math.abs(Qe(n, Ju));
  if (!r || !(a > 0)) return null;
  const o = Xr(e), u = o.hFovDeg + r * a;
  if (u < Ar || u > Cr) return null;
  const f = Math.tan(u * Yt * 0.5);
  return Gm(e, f / o.tanHalfX);
}
function Km(e, t) {
  const n = Xr(e), r = Wn(n.yawDeg, n.pitchDeg, n.rollDeg), a = Qe(t == null ? void 0 : t.x, 0), o = Qe(t == null ? void 0 : t.y, 0);
  return zc(Ma(Ma(r.fwd, Na(r.right, a)), Na(r.up, o)));
}
const Y_ = 2, q_ = ["sky", "world"], X_ = ["input", "output", "temp"];
function Wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function It(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Qu(e, t) {
  const n = It(e, t);
  return n !== null && n > 0 ? n : t;
}
function Bn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function va(e) {
  const t = It(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Ah(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Xc(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => It(n, null));
  return t.includes(null) ? null : t;
}
function J_(e) {
  const t = Wt(e) ? e : {};
  return {
    position: Xc(t.position) || [0, 0, 0],
    yaw_deg: It(t.yaw_deg, 0),
    pitch_deg: Bn(It(t.pitch_deg, 0), -90, 90),
    roll_deg: It(t.roll_deg, 0),
    hFOV_deg: Bn(It(t.hFOV_deg, 90), 0.1, 179)
  };
}
function Wm(e) {
  const t = Wt(e) ? e : {};
  return {
    position: Xc(t.position) || [0, 0, 0],
    yaw_deg: It(t.yaw_deg, 0),
    pitch_deg: Bn(It(t.pitch_deg, 0), -90, 90),
    roll_deg: It(t.roll_deg, 0),
    scale: Qu(t.scale, 1)
  };
}
function Z_(e) {
  const t = Wt(e) ? e : {};
  return {
    yaw_deg: It(t.yaw_deg, 0),
    pitch_deg: Bn(It(t.pitch_deg, 0), -90, 90),
    roll_deg: It(t.roll_deg, 0),
    hFOV_deg: Bn(It(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Bn(It(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Q_(e) {
  return Bn(It(e, 1), 0, 1);
}
function ex(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => It(n, null));
    if (!t.includes(null) && t[0] >= 0 && t[0] <= 1 && t[2] >= 0 && t[2] <= 1)
      return t;
  }
  return "auto";
}
function tx(e) {
  if (!Wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Xc(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function nx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const a of Array.isArray(e) ? e : []) {
    if (!Wt(a)) continue;
    const o = va(a.frame);
    if (o === null) continue;
    const u = { frame: o, value: t(a.value), easing: ex(a.easing) }, f = n ? tx(a.handles) : null;
    f && (u.handles = f), r.set(o, u);
  }
  return [...r.keys()].sort((a, o) => a - o).map((a) => r.get(a));
}
function Vs(e, t, n) {
  const r = Wt(e) ? e : {};
  return {
    value: t(r.value),
    keyframes: nx(r.keyframes, t, n)
  };
}
function Ym(e) {
  const t = Wt(e) ? e : {}, n = va(t.start), r = va(t.in), a = va(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: a === null ? null : Math.max(1, a)
  };
}
function rx(e) {
  const t = Wt(e) ? e : {}, n = Bn(It(t.x0, 0), 0, 1), r = Bn(It(t.y0, 0), 0, 1), a = Bn(It(t.x1, 1), 0, 1), o = Bn(It(t.y1, 1), 0, 1);
  return { x0: Math.min(n, a), y0: Math.min(r, o), x1: Math.max(n, a), y1: Math.max(r, o) };
}
function ix(e) {
  if (!Wt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: X_.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function ax(e) {
  const t = ix(e.source);
  if (!t) return null;
  const n = q_.includes(e.placement) ? e.placement : "sky", r = n === "world", a = {
    id: e.id,
    placement: n,
    source: t,
    clip: Ym(e.clip),
    visible: Ah(e.visible, !0),
    locked: Ah(e.locked, !1),
    crop: rx(e.crop),
    transform: Vs(e.transform, r ? Wm : Z_, r),
    opacity: Vs(e.opacity, Q_, !1)
  };
  return r || (a.z_index = va(e.z_index) ?? 0), a;
}
function ox(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const u = Wt(o) ? ax(o) : null;
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
function ec(e) {
  const t = Wt(e.timeline) ? e.timeline : {}, n = Wt(e.camera) ? e.camera : {}, r = Wt(e.scene) ? e.scene : {}, a = va(t.length);
  return {
    version: Y_,
    timeline: {
      fps: Qu(t.fps, 24),
      length: a !== null && a >= 1 ? a : null
    },
    camera: {
      aspect: Qu(n.aspect, 1),
      transform: Vs(n.transform, J_, !0)
    },
    scene: {
      clip: Ym(r.clip),
      transform: Vs(r.transform, Wm, !0)
    },
    stickers: ox(e.stickers),
    painting: ya(e.painting),
    painting_layer: Wt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function sx(e, t) {
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
function lx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Wt(t)) return {};
  const n = Bn(It(t.hFOV_deg, 90), 1, 179), r = Bn(It(t.vFOV_deg, 60), 1, 179), a = Math.PI / 180;
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
function ux(e) {
  const t = Wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Wt) : [];
  return n.sort((r, a) => It(r.z_index, 0) - It(a.z_index, 0)), ec({
    camera: lx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: sx(r, t),
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
function tc(e) {
  if (e == null || typeof e == "string" && !e.trim()) return ec({});
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
  return n === 1 ? ux(t) : ec(t);
}
let Jo = { text: null, parsed: null };
function dn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function nc(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function cx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: dn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ya(null),
    painting_layer: null,
    ui_settings: nc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function fx(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function dx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function hx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function px(e) {
  return Array.isArray(e) ? e.map((t) => Hm(t)) : [];
}
function mx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), a = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0], o = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: o };
}
function Jc(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = cx(n), a = String(e || "").trim();
  if (!a) return r;
  try {
    let o = null;
    if (Jo.text === a ? o = Jo.parsed : (o = JSON.parse(a), Jo = { text: a, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    o.version === 2 && (o = { ...gx(tc(o)), active: n.active });
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: dx(o.assets),
      stickers: hx(o.stickers),
      shots: px(o.shots),
      painting: ya(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: nc(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return u && (f.ui_settings = nc({ ...f.ui_settings, ...u })), f.output_preset = fx(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = dn(n.coverage), delete f.editor_history, f;
  } catch {
    return Jo = { text: a, parsed: null }, r;
  }
}
function Ch(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Zc(e) {
  return e.transform.keyframes.length > 0 || e.opacity.keyframes.length > 0;
}
function qm(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.scene_state) == null ? void 0 : r.stickers.find((a) => a.id === t);
  return !!n && Zc(n);
}
function gx(e) {
  const t = {}, n = [];
  for (const u of e.stickers) {
    if (u.placement !== "sky") continue;
    const { yaw_deg: f, pitch_deg: d, roll_deg: b, hFOV_deg: g, vFOV_deg: v } = u.transform.value, S = {
      id: u.id,
      yaw_deg: f,
      pitch_deg: d,
      hFOV_deg: g,
      vFOV_deg: v,
      rot_deg: b,
      z_index: u.z_index,
      visible: u.visible,
      locked: u.locked || Zc(u),
      crop: { ...u.crop }
    }, { source: M } = u;
    M.kind === "port" ? S.source_kind = "external_image" : (S.asset_id = u.id, t[u.id] = M.data_url ? { type: "dataurl", value: M.data_url } : { type: "comfy_image", filename: M.filename, subfolder: M.subfolder, storage: M.storage, name: M.filename }), n.push(S);
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
function Xm(e) {
  const t = tc({ ...e, version: 1 }), n = e.scene_state;
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
      locked: Zc(o) ? o.locked : u.locked,
      clip: o.clip,
      transform: { value: u.transform.value, keyframes: o.transform.keyframes },
      opacity: o.opacity
    }));
  }
  return a.push(...r.values()), tc({ ...t, timeline: n.timeline, camera: n.camera, scene: n.scene, stickers: a });
}
function Jm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Zm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Qm(e, t) {
  return e != null && e.__panoSceneStateV2 ? JSON.stringify(Xm(t)) : JSON.stringify(t);
}
const Qc = 0.28;
function bx(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), r = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), o = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, o),
    x1: Math.max(n, a),
    y1: Math.max(r, o)
  };
}
function yx(e, t = {}) {
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
    crop: bx(e.crop),
    opacity: f ? Qc : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function dl(e, t = {}) {
  var o;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((u) => yx(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((o = e == null ? void 0 : e.active) == null ? void 0 : o.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function eg(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || dl(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, o = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var y;
    const d = String((f == null ? void 0 : f.assetId) || "").trim(), b = d || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || u.has(b)) return;
    const g = d ? a[d] : null, v = t(b, g, f);
    if (v instanceof HTMLImageElement && !v.complete) return;
    const S = Number((v == null ? void 0 : v.naturalWidth) || (v == null ? void 0 : v.videoWidth) || (v == null ? void 0 : v.width) || 0), M = Number((v == null ? void 0 : v.naturalHeight) || (v == null ? void 0 : v.videoHeight) || (v == null ? void 0 : v.height) || 0);
    !v || S <= 0 || M <= 0 || (u.add(b), o.push({
      assetId: b,
      source: v,
      revision: String(((y = n.revisionFor) == null ? void 0 : y.call(n, b, g, v)) ?? [
        b,
        Number(v.naturalWidth || v.videoWidth || v.width || 0),
        Number(v.naturalHeight || v.videoHeight || v.height || 0),
        String(v.currentSrc || v.src || "")
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
function vx(e, t = 360) {
  return bo(e, t);
}
function Br(e) {
  const t = Xr(e || {});
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
function tg({
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
  let u = null, f = !1, d = !1;
  const b = () => u || e(), g = () => o(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || u ? !1 : (u = e(), f = !1, g(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      u || this.beginGesture();
      const S = t(u, v);
      return S.changed ? (u = S.state, f = !0, r(u), g(), !0) : !1;
    },
    hasGestureChanges() {
      return u != null && f;
    },
    commitGesture() {
      if (d || !u) return !1;
      const v = f;
      return v && a(u), u = null, f = !1, r(null), g(), v;
    },
    cancelGesture() {
      return d || !u ? !1 : (u = null, f = !1, r(null), g(), !0);
    },
    apply(v) {
      if (d) return !1;
      u && this.commitGesture();
      const S = t(e(), v);
      return S.changed ? (a(S.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = u != null;
      u = null, f = !1, v && r(null);
    }
  };
}
const zs = Math.PI / 180, wr = 180 / Math.PI, _x = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), xx = 260;
function Ih(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function ng(e, t) {
  return t ? ng(t, e % t) : e;
}
function Sx(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), u = Math.max(1, Math.round(e / o * a)), f = Math.max(1, Math.round(t / o * a)), d = ng(u, f) || 1;
  return `${Math.round(u / d)}:${Math.round(f / d)}`;
}
function yo(e, t) {
  const n = Ih(e), r = Ih(t);
  if (n == null || r == null) return null;
  const a = n / r;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: r, ratio: a, label: Sx(n, r) };
}
function Ei(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function rg(e) {
  const t = Ei(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? jr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function ef(e, t, n = _x) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (z, L, P) => {
    const V = z + L, T = Math.max(0, P - 1), F = V > T && V > 0 ? T / V : 1;
    return [z * F, L * F];
  }, [g, v] = b(d, u, r), [S, M] = b(o, f, a), y = {
    x: g,
    y: S,
    w: Math.max(1, r - g - v),
    h: Math.max(1, a - S - M)
  }, D = Wc(y, t);
  return {
    x: y.x + (y.w - D.width) * 0.5,
    y: y.y + (y.h - D.height) * 0.5,
    w: D.width,
    h: D.height,
    safeRect: y
  };
}
function wx(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = ef({ width: n, height: r }, 1), o = W(Number((e == null ? void 0 : e.fov) || 100), 1, 179), u = n / (2 * Math.tan(o * zs * 0.5)), f = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Km(d, jm(
    { x: n * 0.5, y: r * 0.5 },
    u,
    f
  )), g = kx(b, Wn(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Yc({ width: a.w, height: a.h }, u);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function ig(e) {
  return {
    yaw: Ut(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: W(Math.asin(W(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function kx(e, t) {
  const n = ig(e), r = Wn(n.yaw, n.pitch, 0), a = ga(t, e), o = {
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
      ga(f, r.up),
      ga(f, r.right)
    ) * wr)
  };
}
function ag(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = ef({ width: n, height: r }, Ti(e)), o = Ii(a, e), u = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, f = Km(e, jm(
    u,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), d = ig(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: W(2 * Math.atan(n / (2 * o)) * wr, 1, 179)
  };
}
function Mx(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, u = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Ii(t, n), d = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(u, a - u) * 2
  }, { halfW: b, halfH: g } = qc(d, f), v = {
    x: o - b,
    y: u - g,
    w: b * 2,
    h: g * 2
  }, S = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= a, M = r / a, y = Math.tan(Zu * zs), D = M >= 1 ? y : y * M, z = M >= 1 ? y / M : y;
  return {
    focalPx: f,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / f) * wr,
      vFOV_deg: 2 * Math.atan(g / f) * wr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(D) * wr,
        vFOV_deg: 2 * Math.atan(z) * wr
      }
    }
  };
}
function ea(e, t) {
  const n = Ei(e);
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
function Nx(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(a) && a > 0) {
    const u = Ii(n, e);
    return Yc(Wc(n, t), u);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: _s(o, t) };
}
function Th(e, t, n, { preserveOrientation: r = !1, safeRect: a = null } = {}) {
  let o = yo(t, n);
  if (!o) return e;
  const u = Ti(e) >= 1;
  r && o.ratio >= 1 !== u && (o = yo(o.height, o.width));
  const f = Nx(e, o.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...f, aspect_id: o.label };
}
function og(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ei(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), a = Um({
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
    const r = Ei(e);
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
    return ea(e, (r) => Th(
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
      const o = String(jr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), u = o ? yo(o[1], o[2]) : yo(Ti(r), 1);
      return u ? Th(r, u.height, u.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? ea(e, (a) => {
      const o = fl(r), u = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(u - o) <= 1e-12) return a;
      const f = { ...a, roll_deg: o };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ea(e, (r) => {
    const a = Gm(r, t.scale);
    return a ? { ...r, ...a } : r;
  }) : t.type === "step-fov" ? ea(e, (r) => {
    const a = Bm(r, t.direction);
    return a ? { ...r, ...a } : r;
  }) : t.type === "pan-camera" ? ea(e, (r) => {
    const a = ug(t.startShot || r, t);
    return Math.abs(Number(a.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function sg({
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
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (f === "shift" && g < Math.min(d.w, d.h) * u) return null;
  const v = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: f,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: v,
    accumulatedRad: 0
  };
}
function lg(e, t, n = {}) {
  var u, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((u = e.center) == null ? void 0 : u.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + zm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: a },
    rollDeg: $m(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function ug(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, u = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * zs, d = Math.cos(f), b = Math.sin(f), g = o / n, v = -u / n, S = g * d - v * b, M = g * b + v * d, y = Number(e.pitch_deg || 0) * zs, D = Math.max(0.25, Math.abs(Math.cos(y)));
  return {
    ...e,
    yaw_deg: Ut(Number(e.yaw_deg || 0) - Math.atan(S) / D * wr),
    pitch_deg: W(Number(e.pitch_deg || 0) - Math.atan(M) * wr, -90, 90)
  };
}
function Px({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return tg({
    readState: e,
    reduce: og,
    projectModel: rg,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Te = Object.freeze({
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
}), Ax = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, Cx = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Ax(t[2])
})), Ix = {
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
}, Eh = Object.fromEntries(
  Object.entries(Ix).map(([e, t]) => [e, {
    name: t.name,
    elements: Cx(t.body)
  }])
), Qt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = kt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Eh, r) ? Eh[r] : null;
    });
    return (r, a) => n.value ? (Me(), Ae("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: dt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Ae(st, null, zt(n.value.elements, (o, u) => (Me(), Ae(st, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${u}`
      }, [
        o.tag === "path" ? (Me(), Ae("path", oi({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Me(), Ae("circle", oi({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Me(), Ae("rect", oi({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Me(), Ae("line", oi({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Me(), Ae("polyline", oi({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Me(), Ae("polygon", oi({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : Lt("", !0)
      ], 64))), 128))
    ], 2)) : Lt("", !0);
  }
}, en = {
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
    return (r, a) => (Me(), Oi(Dv(e.tag), oi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: tm(() => [
        je(Qt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Tx = ["aria-expanded", "disabled"], Ex = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Dx = ["data-aspect", "disabled", "onClick"], Ox = { class: "pano-cutout-aspect-custom" }, Fx = ["disabled"], Rx = ["disabled"], Lx = ["data-custom-width", "data-custom-height", "disabled"], cg = {
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
    ]), o = /* @__PURE__ */ bn("1"), u = /* @__PURE__ */ bn("1"), f = /* @__PURE__ */ bn(null), d = kt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = kt(() => {
      const D = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], z = String(n.model.aspectLabel || "");
      return D.length ? D.map((L) => {
        const P = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), V = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || P);
        return {
          ...typeof L == "object" && L ? L : {},
          value: P,
          label: V,
          active: z ? P === z : (L == null ? void 0 : L.active) === !0
        };
      }) : a.map((L) => ({
        ...L,
        active: L.value === z
      }));
    }), g = kt(() => {
      var z;
      const D = String(n.model.aspectLabel || "").trim();
      return D || String(((z = b.value.find((L) => L.active === !0)) == null ? void 0 : z.label) || "Aspect");
    });
    Ai(g, (D) => {
      const z = String(D || "").match(/^([0-9.]+):([0-9.]+)$/);
      z && (o.value = z[1], u.value = z[2]);
    }, { immediate: !0 });
    function v(D) {
      r("action", D);
    }
    function S(D) {
      var z;
      n.model.aspectOpen === !0 && ((z = f.value) != null && z.contains(D.target) || v({ type: "close-aspect" }));
    }
    Oc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), al(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(D) {
      const [z, L] = String(D.value || "").split(":");
      v({
        type: "set-aspect",
        width: z,
        height: L,
        preserveOrientation: !0
      });
    }
    function y() {
      v({
        type: "set-aspect",
        width: o.value,
        height: u.value,
        preserveOrientation: !1
      });
    }
    return (D, z) => (Me(), Ae("div", {
      ref_key: "rootElement",
      ref: f,
      class: dt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Me(), Oi(en, {
        key: 0,
        icon: e.model.aspectIcon || mt(Te).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: z[0] || (z[0] = (L) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Me(), Ae("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: z[1] || (z[1] = (L) => v({ type: "toggle-aspect" }))
      }, [
        je(Qt, {
          icon: e.model.aspectIcon || mt(Te).aspect
        }, null, 8, ["icon"]),
        X("span", null, ft(g.value), 1),
        je(Qt, {
          icon: mt(Te).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Tx)),
      Pi(X("div", Ex, [
        (Me(!0), Ae(st, null, zt(b.value, (L) => (Me(), Ae("button", {
          key: L.value,
          class: dt(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: d.value,
          onClick: (P) => M(L)
        }, ft(L.label), 11, Dx))), 128)),
        X("div", Ox, [
          Pi(X("input", {
            "onUpdate:modelValue": z[2] || (z[2] = (L) => o.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, Fx), [
            [fh, o.value]
          ]),
          z[4] || (z[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          Pi(X("input", {
            "onUpdate:modelValue": z[3] || (z[3] = (L) => u.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, Rx), [
            [fh, u.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": u.value,
            disabled: d.value,
            onClick: y
          }, "Apply", 8, Lx)
        ])
      ], 512), [
        [Mo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Vx = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, zx = {
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
      class: dt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      je(en, {
        icon: mt(Te).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", Vx, [
        a[3] || (a[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ae(st, null, zt(mt(n), (o) => (Me(), Ae("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, ft(o[0]), 1),
          X("span", null, ft(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, $x = { class: "pano-cutout-node-surface" }, jx = ["title", "disabled"], Hx = { class: "value" }, Ux = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Gx = {
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
    return (r, a) => (Me(), Ae("div", $x, [
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
          je(Qt, {
            icon: mt(Te).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        je(en, {
          icon: e.model.hasShot ? mt(Te).delete : mt(Te).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        je(cg, {
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
          je(Qt, {
            icon: mt(Te).roll
          }, null, 8, ["icon"]),
          X("span", Hx, ft(e.model.rollLabel || "0.0°"), 1)
        ], 40, jx),
        je(en, {
          icon: mt(Te).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        je(zx)
      ], 32),
      e.model.hasShot === !1 ? (Me(), Ae("div", Ux, " Choose a view · + Add Frame ")) : Lt("", !0)
    ]));
  }
}, fg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = /* @__PURE__ */ bn(null);
    let o, u = !1;
    function f() {
      if (!u) return { active: !1, intent: void 0 };
      const v = o;
      return o = void 0, u = !1, { active: !0, intent: v };
    }
    function d(v) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (o = v, u = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(v) {
      var D, z;
      const { active: S, intent: M } = f();
      if (!S) return;
      const y = ((z = (D = v.target) == null ? void 0 : D.files) == null ? void 0 : z[0]) || null;
      if (y) {
        r("file-selected", { intent: M, file: y });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function g() {
      const { active: v, intent: S } = f();
      v && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (v, S) => (Me(), Ae("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: g
    }, null, 544));
  }
}, Bx = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Kx = {
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
      class: dt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      je(en, {
        icon: mt(Te).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", Bx, [
        a[3] || (a[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Me(!0), Ae(st, null, zt(mt(n), (o) => (Me(), Ae("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, ft(o[0]), 1),
          X("span", null, ft(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Wx = { class: "pano-stickers-node-surface" }, Yx = ["disabled"], qx = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, Xx = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, Jx = {
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
    return (u, f) => (Me(), Ae("div", Wx, [
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
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          je(Qt, {
            icon: mt(Te).fullscreen
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
          je(Qt, {
            icon: mt(Te).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, Yx),
        je(en, {
          icon: e.model.locked ? mt(Te).lock_closed : mt(Te).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        je(en, {
          icon: mt(Te).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        je(en, {
          icon: mt(Te).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        je(en, {
          icon: e.model.isExternalSelection ? mt(Te).back_initial : mt(Te).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        je(Kx)
      ], 32),
      e.model.hasStickers === !1 ? (Me(), Ae("div", qx, " Add Image to place a sticker ")) : Lt("", !0),
      e.model.dropActive === !0 ? (Me(), Ae("div", Xx, "Drop image to add")) : Lt("", !0),
      je(fg, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512)
    ]));
  }
}, xs = "sticker_image_1", dg = "external_image";
function Ss(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), a = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * a) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function xu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function tf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function nf(e) {
  return String((e == null ? void 0 : e.id) || "") === xs || String((e == null ? void 0 : e.source_kind) || "") === dg;
}
const hg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function pg(e) {
  return !nf(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(hg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), a = Number(e.initial_pose[t]);
    return [t, Number.isFinite(a) ? a : Number.isFinite(r) ? r : n];
  }));
}
function mg(e) {
  const t = pg(e);
  return t ? hg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function gg(e, t = {}) {
  var T, F, j;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === xs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const $ = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === xs;
    return {
      state: {
        ...e,
        stickers: n.filter((se, ie) => ie !== r),
        active: $ ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const a = Number(t.linkId), o = String(t.stateHash || ""), u = r >= 0 ? n[r] : null, f = !u || Number(u.source_link_id ?? -1) !== a || String(u.source_state_hash || "") !== o, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, v = Math.max(1, d), S = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, y = f ? M.hFOV_deg || (u == null ? void 0 : u.hFOV_deg) || 30 : (u == null ? void 0 : u.hFOV_deg) || M.hFOV_deg || 30, D = Math.min(179, Math.max(0.1, Number(y)));
  if (!f) {
    if (!g) return { state: e, changed: !1 };
    const $ = Ss(D, v, S), se = Number(((F = u == null ? void 0 : u.initial_pose) == null ? void 0 : F.hFOV_deg) ?? D), ie = Ss(se, v, S), I = Number(((j = u == null ? void 0 : u.initial_pose) == null ? void 0 : j.vFOV_deg) ?? ie);
    return Math.abs(Number((u == null ? void 0 : u.vFOV_deg) || 0) - $) <= 1e-6 && Math.abs(I - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((Y, ee) => ee === r ? {
          ...Y,
          vFOV_deg: $,
          initial_pose: Y.initial_pose && typeof Y.initial_pose == "object" ? { ...Y.initial_pose, vFOV_deg: ie } : Y.initial_pose
        } : Y)
      },
      changed: !0
    };
  }
  const z = n.reduce(($, se) => Math.max($, Number((se == null ? void 0 : se.z_index) || 0)), -1), L = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: D,
    vFOV_deg: g ? Ss(D, v, S) : Number(M.vFOV_deg || (u == null ? void 0 : u.vFOV_deg) || D),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, P = {
    ...u || {},
    id: xs,
    source_kind: dg,
    source_link_id: a,
    source_state_hash: o,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: z + 1
  }, V = r >= 0 ? n.map(($, se) => se === r ? P : $) : [...n, P];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function rf(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: xu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: xu(o.z_index),
    item: o
  })), a = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: xu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...a].sort((o, u) => o.z_index - u.z_index);
}
function bg(e) {
  const t = tf(e), n = nf(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), a = rf(e), o = t ? a.findIndex((f) => f.type === "sticker" && f.item === t) : -1, u = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: mg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: u,
    canDelete: !!t && !u,
    canMoveForward: o >= 0 && o < a.length - 1,
    canMoveBackward: o > 0
  };
}
function Zx(e) {
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
function Dh(e, t) {
  const n = tf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Zx(e), a = String(n.id || ""), o = rf(r), u = o.findIndex((d) => d.type === "sticker" && d.id === a);
  if (u < 0) return { state: e, changed: !1 };
  if (t === "front" && u === o.length - 1 || t === "back" && u === 0)
    return { state: e, changed: !1 };
  const [f] = o.splice(u, 1);
  return t === "front" ? o.push(f) : o.unshift(f), o.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function Qx(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function eS(e, t = {}) {
  var r, a;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return gg(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = String(o.stickerId || "").trim(), f = String(o.assetId || "").trim();
    if (!u || !f || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === u))
      return { state: e, changed: !1 };
    const b = rf(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), g = 30, v = {
      id: u,
      asset_id: f,
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: g,
      vFOV_deg: Ss(g, o.imageWidth, o.imageHeight),
      rot_deg: 0,
      z_index: b + 1
    };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [f]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], v],
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
  const n = tf(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    if (qm(e, n.id)) return { state: e, changed: !1 };
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
    const o = pg(n);
    return !o || !mg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, ...o } : u)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Dh(e, "front");
  if (t.type === "send-back") return Dh(e, "back");
  if (t.type === "delete-selected") {
    if (nf(n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), u = ((a = o[0]) == null ? void 0 : a.id) == null ? null : String(o[0].id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: u }
    };
    return f.assets = Qx(f), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, u = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], f = {};
    return u.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(n[d] || 0)) > 1e-12 && (f[d] = b);
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
function tS(e = {}) {
  return tg({
    ...e,
    reduce: eS,
    projectModel: bg
  });
}
const Oh = 24;
function nS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Fh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function rS(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r, r += 1) {
    const o = t[r], u = t[a];
    o.y > e.y != u.y > e.y && e.x < (u.x - o.x) * (e.y - o.y) / (u.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function rc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Fh(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], a = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: a * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Fh(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : rS(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function yg(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((a) => (Array.isArray(a) ? a : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function vg(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function _g(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1))
  };
}
function xg(e) {
  return Wn(
    Number((e == null ? void 0 : e.yawDeg) ?? (e == null ? void 0 : e.yaw) ?? 0),
    Number((e == null ? void 0 : e.pitchDeg) ?? (e == null ? void 0 : e.pitch) ?? 0),
    0
  );
}
function iS(e, t, n) {
  const { width: r, height: a } = _g(n), { right: o, up: u, fwd: f } = xg(t), d = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Yt, b = 2 * Math.atan(Math.tan(d * 0.5) * (a / r)), g = (Number((e == null ? void 0 : e.x) || 0) - r * 0.5) / (r * 0.5) * Math.tan(d * 0.5), v = (a * 0.5 - Number((e == null ? void 0 : e.y) || 0)) / (a * 0.5) * Math.tan(b * 0.5);
  return zc(Ma(Ma(Na(o, g), Na(u, v)), f));
}
function qa(e, t, n) {
  const { width: r, height: a } = _g(n), { right: o, up: u, fwd: f } = xg(t), d = ga(e, o), b = ga(e, u), g = ga(e, f), v = 1e-4;
  if (!Number.isFinite(g)) return null;
  const S = Math.max(g, v), M = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Yt, y = 2 * Math.atan(Math.tan(M * 0.5) * (a / r)), D = r * 0.5 / Math.tan(M * 0.5), z = a * 0.5 / Math.tan(y * 0.5), L = Math.max(r, a) * 2;
  return {
    x: W(r * 0.5 + d / S * D, -L, r + L),
    y: W(a * 0.5 - b / S * z, -L, a + L),
    rawZ: g
  };
}
function aS(e) {
  const t = Wn(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(W(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Yt * 0.5),
    tanY: Math.tan(W(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Yt * 0.5)
  };
}
function xi(e, t, n) {
  return zc(Ma(
    Ma(e.centerDir, Na(e.right, t)),
    Na(e.up, n)
  ));
}
function Sg(e, t, n) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = aS(e), a = qa(r.centerDir, t, n);
  if (!a) return { visible: !1 };
  const o = [
    xi(r, -r.tanX, r.tanY),
    xi(r, r.tanX, r.tanY),
    xi(r, r.tanX, -r.tanY),
    xi(r, -r.tanX, -r.tanY)
  ].map((M) => qa(M, t, n)), u = Array.from({ length: 4 }, (M, y) => {
    const D = [];
    for (let z = 0; z <= 28; z += 1) {
      const L = z / 28;
      let P, V;
      y === 0 ? (P = -r.tanX + 2 * r.tanX * L, V = r.tanY) : y === 1 ? (P = r.tanX, V = r.tanY - 2 * r.tanY * L) : y === 2 ? (P = r.tanX - 2 * r.tanX * L, V = -r.tanY) : (P = -r.tanX, V = -r.tanY + 2 * r.tanY * L);
      const T = qa(xi(r, P, V), t, n);
      T && D.push({ x: T.x, y: T.y });
    }
    return D;
  }), f = qa(xi(r, 0, r.tanY), t, n), d = qa(
    xi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t,
    n
  ), b = [a, ...o, f, d];
  if (b.some((M) => !M || !Number.isFinite(M.x) || !Number.isFinite(M.y)))
    return { visible: !1 };
  if (!b.some((M) => M.rawZ > 1e-4)) return { visible: !1 };
  const g = d.x - f.x, v = d.y - f.y, S = Math.hypot(g, v) || 1;
  return {
    center: { x: a.x, y: a.y },
    corners: o.map((M) => ({ x: M.x, y: M.y })),
    boundaryEdges: u,
    rotateStemBase: { x: f.x, y: f.y },
    rotateHandle: {
      x: f.x + g / S * Oh,
      y: f.y + v / S * Oh
    },
    visible: !0
  };
}
function Rh(e, t, n, r, a) {
  const o = (Array.isArray(e) ? e : []).filter((f) => f && f.visible !== !1).map((f) => ({ item: f, geometry: Sg(f, r, a) })).filter((f) => f.geometry.visible).sort((f, d) => {
    var b, g;
    return Number(((b = d.item) == null ? void 0 : b.z_index) || 0) - Number(((g = f.item) == null ? void 0 : g.z_index) || 0);
  }), u = o.find((f) => {
    var d;
    return String(((d = f.item) == null ? void 0 : d.id) || "") === String(t || "");
  });
  if (u) {
    const f = rc(u.geometry, n);
    if (f.kind === "scale" || f.kind === "rotate") return { ...u, hit: f };
  }
  for (const f of o) {
    const d = rc(f.geometry, n);
    if (d.kind !== "none") return { ...f, hit: d };
  }
  return null;
}
function oS(e, t, n, r) {
  const a = iS(t, n, r);
  return {
    ...e,
    yaw_deg: Ut(Math.atan2(a.x, a.z) * Pn),
    pitch_deg: Math.asin(W(a.y, -1, 1)) * Pn
  };
}
function sS(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: W(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: W(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function lS(e, t, n, r = !1) {
  const a = (Number(n || 0) - Number(t || 0)) * Pn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - a;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Zo = null;
function af() {
  return Zo || (Zo = new Promise((e) => {
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
  }), Zo);
}
function Zn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function uS(e, t = 1024) {
  const n = Math.max(1, Math.round(Zn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Zn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function cS(e, t, n) {
  const r = Zn(t), a = Zn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || a < 1) return null;
  const u = Zn(o.u0), f = Zn(o.v0), d = Zn(o.u1), b = Zn(o.v1);
  if (d <= u || b <= f) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((u + d) * 0.5 + Zn(g.du)) * r,
    centerY: ((f + b) * 0.5 + Zn(g.dv)) * a,
    width: (d - u) * r,
    height: (b - f) * a,
    rotationRad: Zn(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Zn(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function fS(e, t, n) {
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
function dS() {
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
    const d = new Image();
    f = { image: d, listeners: new Set(typeof u == "function" ? [u] : []), settled: !1 }, e.set(o, f);
    const b = () => {
      f.settled = !0;
      const g = [...f.listeners];
      f.listeners.clear(), g.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = o, n(), d;
  }
  function a(o, u, f, d = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const b = String(o.rasterDataUrl || "").trim(), g = cS(o, u, f);
    if (!b.startsWith("data:") || !g) return null;
    const v = fS(o, u, f), S = String((o == null ? void 0 : o.id) || "").trim() || v, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === v) return { source: M.source, revision: v };
    const y = r(b, d), D = Number(y.naturalWidth || y.width || 0), z = Number(y.naturalHeight || y.height || 0);
    if (!y.complete || D < 1 || z < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(u)), L.height = Math.max(1, Math.round(f));
    const P = L.getContext("2d");
    return P ? (g.wrapOffsets.forEach((V) => {
      P.save(), P.translate(g.centerX + V, g.centerY), P.rotate(g.rotationRad), P.scale(g.scale, g.scale), P.drawImage(
        y,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), P.restore();
    }), t.set(S, { revision: v, source: L }), { source: L, revision: v }) : null;
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
function hS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function pS(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function mS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), a = Math.max(1, Math.trunc(Number(t || 32)));
  function o(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const S = r.get(v.owner);
    (S == null ? void 0 : S.get(v.key)) === v && S.delete(v.key);
  }
  function u(v, S, M, y) {
    if (!v || typeof y != "function" || M.settled) return;
    let D = r.get(v);
    D || (D = /* @__PURE__ */ new Map(), r.set(v, D));
    const z = D.get(S);
    if ((z == null ? void 0 : z.entry) === M) {
      z.callback = y;
      return;
    }
    o(z);
    const L = { owner: v, key: S, entry: M, callback: y };
    D.set(S, L), M.listeners.add(L);
  }
  function f(v, S) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !S && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((M) => {
      o(M);
      try {
        M.callback(v.image, S);
      } catch {
      }
    }), d(a));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [S, M] of n) {
        if (n.size <= v) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(S));
      }
  }
  function b(v, S, M, y = null) {
    const D = String(S || ""), z = String(M || "");
    if (!D || !z) return null;
    let L = n.get(D);
    if (L)
      n.delete(D), n.set(D, L);
    else {
      d(a - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const T = new V();
      L = { key: D, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(D, L), T.onload = () => f(L, !0), T.onerror = () => f(L, !1), T.src = z;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || u(v, D, L, y), L.image;
  }
  function g(v) {
    const S = r.get(v);
    S && ([...S.values()].forEach(o), r.delete(v), d(a));
  }
  return { get: b, disposeOwner: g };
}
function $s(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function hl(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = $s(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function Lh(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    $s(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function gS(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    $s(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = $s(e);
  Object.keys(r).forEach((a) => {
    r[a] = !0;
  });
}
function Vh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const u = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((u == null ? void 0 : u.name) || ""));
}
function bS(e, t = [], n = null) {
  var a;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const u = [(a = e == null ? void 0 : e.ui) == null ? void 0 : a[o], e == null ? void 0 : e[o]];
    for (const f of u)
      if (Array.isArray(f))
        for (const d of f) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function yS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var y;
  const r = ((y = e == null ? void 0 : e.createElement) == null ? void 0 : y.call(e, "video")) || null;
  if (!r || !t) return null;
  const a = typeof n == "function" ? n : () => {
  };
  let o = !1, u = 0;
  const f = typeof r.requestVideoFrameCallback == "function", d = () => {
    o || !f || u || r.paused || r.ended || (u = r.requestVideoFrameCallback(() => {
      u = 0, !o && (a(), d());
    }));
  }, b = () => {
    if (!o) {
      a();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, g = () => a(), v = () => {
    a(), d();
  }, S = () => a();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), f || r.addEventListener("timeupdate", g), r.addEventListener("play", v), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var D, z;
    o || (o = !0, u && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(u), u = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", v), r.removeEventListener("pause", S), r.pause(), (D = r.removeAttribute) == null || D.call(r, "src"), (z = r.load) == null || z.call(r));
  } };
}
const js = "state_json";
function Kr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function vS(e) {
  var u, f;
  const t = Kr(e, js);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Jc(n, {
    coverage: (u = Kr(e, "coverage")) == null ? void 0 : u.value
  }), a = og(r, { type: "add-frame" });
  if (!a.changed) return !1;
  const o = JSON.stringify(a.state);
  return t.value = o, (f = t.callback) == null || f.call(t, o), !0;
}
function of(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Kr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var u, f, d, b, g, v, S, M, y;
    const o = r ? r(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || f.call(u), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (y = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || y.call(M, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function _S(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function zh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function xS(e) {
  var g, v, S, M, y, D;
  if (!e) return;
  const t = Kr(e, "coverage"), n = Kr(e, "bg_color"), r = Kr(e, js), a = Kr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && _S(o) && (zh(u) || u === ""))) return;
  let b = "360";
  if (zh(u))
    try {
      b = String(dn((g = JSON.parse(u)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = o, (S = n.callback) == null || S.call(n, o), r.value = u, (M = r.callback) == null || M.call(r, u), a && (a.value = f, (y = a.callback) == null || y.call(a, f)), (D = e.setDirtyCanvas) == null || D.call(e, !0, !0);
}
function ws(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function ic(e, t, n) {
  var o, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (o = a.element) != null && o.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function SS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, a]) => a)) : await Promise.all(r.map(([, a]) => a)), r.forEach(([a, o]) => {
        n.get(a) === o && n.delete(a);
      });
    }
}
function ac(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = o.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, o);
  const f = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(f, f), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), o;
}
async function wg(e, t = {}) {
  var r;
  await SS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const a of n) await a();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function wS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await wg(e), n ? n.apply(this, r) : this.value;
  };
}
function kS(e) {
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
function MS(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((a) => String((a == null ? void 0 : a.name) || "") === "image" && String((a == null ? void 0 : a.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Su(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: a,
  attachStickers: o,
  attachCutout: u,
  enableStickersPreview: f,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function b(g) {
    var M;
    const v = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === v) return;
    kS(g), of(g, t), ws(g, js);
    const S = Kr(g, js);
    if (wS(g, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const y = S.callback;
      S.callback = (D) => {
        var L;
        const z = y ? y(D) : void 0;
        return (L = g.setDirtyCanvas) == null || L.call(g, !0, !1), z;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const y = Kr(g, "bg_color");
      !d && y && (y.value == null || String(y.value).trim() === "" || String(y.value).toLowerCase() === "#000000") && (y.value = "#00ff00", (M = y.callback) == null || M.call(y, "#00ff00")), ic(g, r, () => a(g, "stickers")), f && (o(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => a(g, "stickers")
      }), g.__panoStickersNodeSurface && ws(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = v;
      return;
    }
    ic(g, r, () => a(g, "cutout")), u(g, {
      buttonText: r,
      onOpen: () => a(g, "cutout")
    }), g.__panoCutoutNodeSurface && ws(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = v;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const v = e.prototype[g];
    e.prototype[g] = function() {
      const S = v ? v.apply(this, arguments) : void 0;
      return g === "onNodeCreated" && n === "PanoramaCutout" && vS(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && xS(this), (g === "onNodeCreated" || this.widgets) && b(this), S;
    };
  }
}
function NS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return MS(this), r;
  };
}
function PS(e, {
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
    of(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    ic(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && ws(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(o);
}
function AS({
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
    beforeRegisterNodeDef(f, d) {
      const b = String((d == null ? void 0 : d.name) || "");
      (b === "PanoramaStickers" || b === "Panorama Stickers") && Su(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), b === "PanoramaStickersNode" && Su(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (b === "PanoramaCutout" || b === "Panorama Cutout") && Su(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), Ls(b) && NS(f);
    },
    nodeCreated(f) {
      const d = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      of(f, e), Ls(d) && PS(f, { app: e, openEditor: t, attachPreview: a, requestFrame: o });
    }
  };
}
const CS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function kr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : CS.test(String(e.name || "")) : !1;
}
function sf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => kr(n)) : !1;
}
function IS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, a = (d) => {
    var b, g, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, o = (d) => {
    if (sf(d == null ? void 0 : d.dataTransfer)) {
      a(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, u = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, f = (d) => {
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((v) => kr(v));
    if (!b) {
      n(!1);
      return;
    }
    a(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", u, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", u, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function oc(e, t = {}) {
  var u, f, d, b;
  if (!kr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (u = globalThis.URL) == null ? void 0 : u.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), a = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const g = await new Promise((v, S) => {
      const M = new n();
      M.onload = () => v(M), M.onerror = () => S(new Error("image load failed")), M.src = o;
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
async function ks(e, { fetchApi: t } = {}) {
  if (!kr(e)) throw new TypeError("A supported image file is required.");
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
function kg(e, t) {
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
const $h = /* @__PURE__ */ new WeakSet(), jh = /* @__PURE__ */ new WeakSet();
let Hh = 0;
function sc(e) {
  if (!e || typeof e != "object" || jh.has(e)) return e;
  const t = String(e.type || "preview");
  return Hh += 1, e.type = `${t}:pano-${Hh}`, jh.add(e), e;
}
function Hs(e) {
  if (!e || typeof e != "object" || $h.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, $h.add(e), e;
}
function Mg(e, t) {
  var r, a;
  if (!t || ((a = (r = Hs(t)) == null ? void 0 : r.onRemove) == null || a.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function TS({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, a = null, o = !1;
  return { schedule: (d) => o || r || typeof e != "function" ? !1 : (a = d, r = e(() => {
    r = 0;
    const b = a;
    a = null, o || n == null || n(b);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, a = null);
  } };
}
const { app: Vt } = hs, lf = mS();
function lc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (hs == null ? void 0 : hs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ES = Math.PI / 180, DS = 10, OS = "pano_suite.ui_settings.v1", FS = 120;
function Uh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(OS)) || "").trim();
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
function RS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Xa(e) {
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
function LS() {
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
function uc(e) {
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
function Ng(e) {
  const t = uc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function VS(e, t, n) {
  Ng(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function cc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function uf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Pg(e) {
  return Ls(uf(e));
}
function Gh(e = null) {
  var o, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (o = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, a].join("|");
}
function Ag(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = "dom", o = cc(e);
      this.activeBackend = o;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (o === a && o !== "none" && u === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Ms(e), Nw(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = cc(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ms(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ms(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function zS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ms(e, t = {}) {
  var r, a, o, u, f;
  if (!e) return;
  fc.unregister(e), zS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const g = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), S = lc();
      return g === S || v === S || g === "pano_preview" || v === "pano_preview" ? !0 : g === "preview" && v === "pano_preview";
    }).forEach((b) => aw(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function wu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $S(e, t = "#00ff00") {
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
function jS(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = _a(e, "state_json")) == null ? void 0 : n.value) || "");
}
function ar(e) {
  var f, d;
  const t = jS(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = _a(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((d = _a(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === a)
    return o.parsed;
  const u = e.__panoSceneStateV2 && typeof t == "string" ? Jc(t, { backgroundColor: r, coverage: a, active: Jm(e) }) : $S(t, r);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: u }, u;
}
function _a(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Cg(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function HS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Ig(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Tg(e, t, n = null) {
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
  return !r && n != null && (r = HS(e == null ? void 0 : e.graph, n)), r;
}
function US(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Eg(e, t = []) {
  const n = US(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function Bh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Us(e, t) {
  const n = Bh(e), r = Bh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function GS(e, t = ["erp_image", "bg_erp"]) {
  var d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Eg(e, t).map((b) => n.findIndex((g) => String((g == null ? void 0 : g.name) || "") === String(b))).filter((b) => b >= 0), o = n.map((b, g) => ({ input: b, idx: g })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), u = [.../* @__PURE__ */ new Set([...a, ...o])], f = [];
  for (const b of u) {
    const g = Tg(e, b);
    if ((g == null ? void 0 : g.id) != null) {
      f.push(String(g.id));
      continue;
    }
    const v = (d = n[b]) == null ? void 0 : d.link;
    if (v == null) continue;
    const S = Cg(e == null ? void 0 : e.graph, v), { originId: M } = Ig(S);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const fc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = mn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var b, g, v, S, M;
        if (!o) return;
        const u = Us(r, o == null ? void 0 : o.id);
        GS(o, ["erp_image", "bg_erp"]).some((y) => Us(r, y)), !(String(o.__panoPreviewMode || "") === "cutout" && !u) && (Dg(o), (g = (b = o.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || g.call(b), (v = o.setDirtyCanvas) == null || v.call(o, !0, !0), (M = (S = o.graph) == null ? void 0 : S.setDirtyCanvas) == null || M.call(S, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Gs(e) {
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
function BS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function KS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: a, subfolder: o };
}
function WS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function YS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (BS(t)) return [t];
  const { filename: n, subfolder: r } = KS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((o) => Gs({
    filename: n,
    subfolder: r,
    type: o
  }));
  return WS([...a, t]);
}
function qS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Gs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function vo(e) {
  const t = Vt == null ? void 0 : Vt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Us(o, a)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const u of o)
      if (Us(u, a)) return t[u];
  }
  return null;
}
function dc(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || vo(e == null ? void 0 : e.id), a = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(a) ? a[0] : a;
}
function xr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Gs({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = xr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Gs(e);
}
function Kh(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function XS(e) {
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
function cf(e, t) {
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
function JS(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((u) => t.push(u));
  }, a = (o, u = 0) => {
    !o || u > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), a(o.output, u + 1), a(o.ui, u + 1), a(o.data, u + 1), a(o.result, u + 1));
  };
  return a(e, 0), t;
}
function ZS(e, t) {
  try {
    e.__panoOwnOutputRev = hS(e.__panoOwnOutputRev);
    const n = JS(t);
    let r = "";
    for (const a of n)
      if (r = xr(a), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), cf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function xa(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function Wh(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!hl(e, "background"))
    return xa(e), null;
  const a = vo(r), o = bS(a, t, xr);
  if (!o)
    return xa(e), null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = cf(o, u), d = `${t.join("|")}:${f}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.video;
  xa(e);
  const g = yS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function QS(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Eg(e, t).map((v) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(v))).filter((v) => v >= 0), o = n.map((v, S) => ({ input: v, idx: S })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), u = [.../* @__PURE__ */ new Set([...a, ...o])];
  for (const v of u) {
    const S = n[v], M = S == null ? void 0 : S.link;
    if (M == null) continue;
    const y = Cg(e.graph, M), { originId: D, originSlot: z } = Ig(y);
    if (D == null) continue;
    const L = Tg(e, v, D);
    if (!L) continue;
    const P = Number(z || 0), V = vo((L == null ? void 0 : L.id) ?? D), T = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (T.length) {
      const se = [];
      P >= 0 && P < T.length && se.push(T[P]), se.push(...T);
      for (const ie of se) {
        const I = xr(ie);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (Vt == null ? void 0 : Vt.getNodeImageUrls) == "function" ? Vt.getNodeImageUrls(L) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const se = [];
      P >= 0 && P < F.length && se.push(F[P]), se.push(...F);
      for (const ie of se) {
        const I = xr(ie);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const j = Array.isArray(L == null ? void 0 : L.imgs) ? L.imgs : [];
    if (j.length) {
      const se = [];
      P >= 0 && P < j.length && se.push(j[P]), se.push(...j);
      for (const ie of se) {
        const I = xr(ie);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const $ = (b = L == null ? void 0 : L.widgets) == null ? void 0 : b.find((se) => String((se == null ? void 0 : se.name) || "").toLowerCase() === "image");
    if ($) {
      let se = xr($.value);
      if (se && !se.includes("/") && !se.includes(":") && (L.comfyClass === "LoadImage" || L.type === "LoadImage") && (se = mn.apiURL(`/view?filename=${encodeURIComponent(se)}&type=input&subfolder=`)), se)
        return String((S == null ? void 0 : S.name) || ""), { src: se, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = hl(e, "background") ? vo(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((g = f == null ? void 0 : f.ui) == null ? void 0 : g.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const S = xr(v);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function ew(e, t = [], n = {}) {
  const r = QS(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const o = YS(a);
  if (!o.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  if (d && d.pendingSrcRaw === a && d.pendingImg)
    return u && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = a, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(f, g);
  let v = -1;
  const S = () => {
    var y, D, z, L;
    if (v += 1, v >= o.length) {
      if (((D = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.get) == null ? void 0 : D.call(y, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (L = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || L.call(z, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const M = o[v];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, y, D;
    ((y = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : y.call(M, f)) === g && g.pendingImg === b && (g.srcRaw = a, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (D = e.setDirtyCanvas) == null || D.call(e, !0, !0);
  }, b.onerror = (M) => {
    var y, D, z, L;
    if (v + 1 < o.length) {
      S();
      return;
    }
    if (((D = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.get) == null ? void 0 : D.call(y, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (L = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || L.call(z, f);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), u && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function Yh(e, t = [], n = null, r = {}) {
  const a = ew(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Dg(e) {
  var t, n, r, a;
  if (e) {
    lf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (a = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || a.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, xa(e), e.__panoWrappedErpCache = null;
  }
}
function tw(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, xa(e), e.__panoWrappedErpCache = null;
  }
}
function nw(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function Og(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ja(e, t, n = "") {
  const r = Og(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < FS ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function ku(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / a, f = r / o, d = Math.min(u, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function rw(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), g = r + (o - d) * 0.5, v = a + (u - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function ta(e, t, n = "Connect ERP image") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Connect ERP image"), r.style.display = t ? "flex" : "none");
}
function iw(e) {
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
function aw(e, t) {
  return Mg(e, t);
}
function Fg(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let o = qS(n);
  if (!o && (r != null && r.external)) {
    if (!hl(e, "external-sticker")) return null;
    const M = e.__panoLastExecutedOutput || vo(e == null ? void 0 : e.id), y = ((S = M == null ? void 0 : M.ui) == null ? void 0 : S.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const D of Array.isArray(y) ? y : [y])
      if (o = xr(D), o) break;
  }
  if (!o) return null;
  const u = dc(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(u ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? cf(o, d) : o, g = pS(o, f, d);
  return lf.get(e, g, b, (M, y) => {
    var D, z;
    y && (r != null && r.external && no(e, "image-loaded"), (z = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || z.call(D));
  }) || null;
}
function ow(e, t) {
  return dl(t, {
    selectedId: null,
    hoveredId: null
  });
}
function sw(e, t, n) {
  return eg(
    t,
    (r, a, o) => Fg(e, r, a, o),
    { scene: n }
  );
}
function lw(e, t) {
  var v, S, M, y;
  const n = hw(e, t), r = pw(t), a = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], o = new Map(
    a.filter((D) => D && typeof D == "object").map((D) => [String((D == null ? void 0 : D.actionGroupId) || (D == null ? void 0 : D.id) || "").trim(), Number((D == null ? void 0 : D.z_index) || 0)])
  ), u = n ? r.map((D) => {
    const z = n.getGroupDisplayCanvas(D);
    return z ? {
      id: `paint_group:${D}`,
      source: z,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${D}`,
      zIndex: Number(o.get(D) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (y = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || y.call(M, []), u;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = dS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var D, z;
    return (z = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : z.call(D);
  });
  const d = uS(t == null ? void 0 : t.output_preset), b = f.filter((D) => (D == null ? void 0 : D.visible) !== !1 && String((D == null ? void 0 : D.layerKind) || "paint") === "paint").map((D) => String((D == null ? void 0 : D.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = f.map((D) => {
    const z = e.__panoRasterObjectSurfaceCache.get(
      D,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return z ? {
      id: `raster:${String((D == null ? void 0 : D.id) || "")}`,
      source: z.source,
      revision: z.revision,
      zIndex: Number((D == null ? void 0 : D.z_index) || 0),
      opacity: 1,
      visible: (D == null ? void 0 : D.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...u, ...g];
}
function Mu(e, t, n, r = "") {
  const a = ow(e, t), o = sw(e, t, a), u = lw(e, t), f = XS(n), d = Lg(n), b = ys({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      d.width,
      d.height,
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
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = cl()), e.__panoRuntimeCore.syncState(b), e.__panoRuntimeCore;
}
function Rg(e, t, n, r) {
  const a = wu(e, t.right), o = wu(e, t.up), u = wu(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = o / u / r, d = a / u / r;
  return { x: n.x + n.w * 0.5 + d * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function uw(e, t, n, r) {
  var o, u, f, d, b, g;
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
      const v = r.convertEventToCanvasOffset(t);
      if (Array.isArray(v) && v.length >= 2)
        return {
          x: Number(v[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(v[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const a = fw(e, t, r);
  return a || null;
}
function cw(e, t) {
  var v, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (v = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : v.call(a), u = (t == null ? void 0 : t.ds) || ((S = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : S.ds);
  if (!o || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(u.offset) ? u.offset : [0, 0], b = (n - Number(o.left || 0)) / f - Number(d[0] || 0), g = (r - Number(o.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function fw(e, t, n) {
  var a, o;
  const r = cw(t, n || (Vt == null ? void 0 : Vt.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function dw(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function hw(e, t) {
  var b, g, v, S, M, y, D, z, L, P, V, T;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (S = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!a && !o) return null;
  const u = dw(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Xu(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((y = t == null ? void 0 : t.painting) == null ? void 0 : y.raster_objects) || null
  };
  return (((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.paint) !== d.paint || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.mask) !== d.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== d.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function pw(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Lg(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function mw(e, t, n, r) {
  const a = Sg(t, n, r);
  if (!a.visible) return null;
  const o = nS(t);
  return e.save(), yg(e, a.boundaryEdges, { selected: !0 }), vg(e, a, { accent: o }), e.restore(), a;
}
function gw(e, t, n, r = null) {
  var M, y, D, z, L, P, V, T, F, j, $, se, ie, I, Y, ee;
  const a = String(e.__panoPreviewMode || "stickers");
  Og(e, a);
  const o = ar(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (D = (y = (M = e.__panoCutoutNodeSurface) == null ? void 0 : M.session) == null ? void 0 : y.refresh) == null || D.call(y)) : a === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (P = (L = (z = e.__panoStickersNodeSurface) == null ? void 0 : z.session) == null ? void 0 : L.refresh) == null || P.call(L));
  const u = t.parentElement, f = 1, d = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), g = Math.max(64, Math.round(d * f)), v = Math.max(64, Math.round(b * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const J = iw(o), de = Wh(
        e,
        ["pano_input_videos"],
        () => {
          var qe, Ue;
          return (Ue = (qe = e.__panoDomPreview) == null ? void 0 : qe.requestDraw) == null ? void 0 : Ue.call(qe);
        }
      ) || Yh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var qe, Ue;
          return (Ue = (qe = e.__panoDomPreview) == null ? void 0 : qe.requestDraw) == null ? void 0 : Ue.call(qe);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = Kh(de);
      (t.width !== g || t.height !== v) && (t.width = g, t.height = v);
      const ke = { x: 0, y: 0, w: g, h: v }, A = Lg(de), we = fe ? W(Number(A.width / A.height), 0.05, 20) : 1, De = J ? Br(J) : null, Pe = W(Number((De == null ? void 0 : De.aspect) || we || 1), 0.05, 20), U = ef(ke, Pe);
      e.__panoCutoutNodeFrame = U, ku(t, ke), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, g, v);
      let He = "none", gt = "Connect ERP image", nt = "";
      if (nt = String((de == null ? void 0 : de.currentSrc) || (de == null ? void 0 : de.src) || ""), J)
        if (de && !fe)
          He = "loading";
        else if (fe) {
          const qe = Mu(e, o, de, (J == null ? void 0 : J.id) || ""), Ue = Mx({ width: g, height: v }, U, J), qt = Ue.rect, An = Br(Ue.shot);
          let vn = !0;
          if (Ue.fallback) {
            const R = Ue.fallback.rect, B = Br(Ue.fallback.shot);
            vn = qe.renderToContext(
              S,
              R,
              B,
              { width: R.w, height: R.h, dpr: 1 }
            );
          }
          const tn = qe.renderToContext(
            S,
            qt,
            An,
            { width: qt.w, height: qt.h, dpr: 1 }
          );
          let Cn = !0;
          Ue.fallback && (Cn = qe.renderToContext(
            S,
            U,
            Br(J),
            { width: U.w, height: U.h, dpr: 1 }
          )), (!vn || !tn || !Cn) && (He = "empty", gt = "Open editor or run node");
        } else
          He = "empty", gt = "Connect ERP image";
      else {
        const qe = e.__panoLastCutoutShot;
        if (qe ? (e.__panoPreviewView = ag(qe, { width: g, height: v }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), fe) {
          const Ue = Mu(e, o, de, "zero_shot_viewer"), qt = ((T = (V = r == null ? void 0 : r.state) == null ? void 0 : V.drag) == null ? void 0 : T.active) === !0 || ((j = (F = r == null ? void 0 : r.state) == null ? void 0 : F.inertia) == null ? void 0 : j.active) === !0 ? 0.5 : 1;
          Ue.renderToContext(
            S,
            ke,
            bo(e.__panoPreviewView, o == null ? void 0 : o.coverage),
            { width: ke.w, height: ke.h, dpr: 1, renderScale: qt }
          ) || (He = "empty", gt = "Open editor or run node");
        } else de ? He = "loading" : (He = "empty", gt = "Connect ERP image");
      }
      J && (e.__panoLastCutoutShot = { ...J }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, g, v), S.rect(U.x, U.y, U.w, U.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(U.x + 0.5, U.y + 0.5, Math.max(0, U.w - 1), Math.max(0, U.h - 1)), S.restore()), He === "loading" ? (ta(e, !1), Ja(e, !0, nt)) : He === "empty" ? (ta(e, !0, gt), Ja(e, !1, "")) : (ta(e, !1), Ja(e, !1, ""));
    } else {
      ta(e, !1), (t.width !== g || t.height !== v) && (t.width = g, t.height = v);
      const J = { x: 0, y: 0, w: g, h: v };
      S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, g, v), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const de = Wh(
        e,
        ["pano_input_videos"],
        () => {
          var De, Pe;
          return (Pe = (De = e.__panoDomPreview) == null ? void 0 : De.requestDraw) == null ? void 0 : Pe.call(De);
        }
      ) || Yh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var De, Pe;
          return (Pe = (De = e.__panoDomPreview) == null ? void 0 : De.requestDraw) == null ? void 0 : Pe.call(De);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = de || null, ke = !de || Kh(fe), A = bo(e.__panoPreviewView, o == null ? void 0 : o.coverage);
      let we = !1;
      if (ke) {
        const Pe = Mu(e, o, fe, de ? "stickers_surface|background:input" : "stickers_surface|background:none"), U = _w(e) || ((se = ($ = r == null ? void 0 : r.state) == null ? void 0 : $.drag) == null ? void 0 : se.active) === !0 || ((I = (ie = r == null ? void 0 : r.state) == null ? void 0 : ie.inertia) == null ? void 0 : I.active) === !0 || ((Y = e.__panoStickerDrag) == null ? void 0 : Y.active) === !0;
        we = Pe.renderToContext(
          S,
          J,
          A,
          { width: J.w, height: J.h, dpr: 1, renderScale: U ? 0.5 : 1 }
        );
      }
      if (ke && we)
        Ja(e, !1, "");
      else {
        const De = !!de && !ke;
        Ja(e, De, String((fe == null ? void 0 : fe.currentSrc) || (fe == null ? void 0 : fe.src) || "")), De && rw(S, J, ku(t, J)), ta(e, !1);
      }
      if (!de && we) {
        const De = W(Number(A.fovDeg || 100), 1, 179) * ES, Pe = Math.tan(De * 0.5) * (J.h / Math.max(1, J.w)), U = Wn(Number(A.yawDeg || 0), Number(A.pitchDeg || 0), 0);
        bw(S, J, U, Pe, ku(t, J));
      }
      if (we) {
        ta(e, !1);
        const De = String(((ee = o == null ? void 0 : o.active) == null ? void 0 : ee.selected_sticker_id) || ""), Pe = (Array.isArray(o == null ? void 0 : o.stickers) ? o.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === De && (U == null ? void 0 : U.visible) !== !1);
        e.__panoSelectedStickerGeometry = Pe ? mw(S, Pe, A, { width: g, height: v }) : null;
      } else
        e.__panoSelectedStickerGeometry = null;
    }
}
function qh(e, t, n, r, a, o, u = 1) {
  let f = !1;
  e.strokeStyle = o, e.lineWidth = u, e.beginPath();
  for (const d of t) {
    const b = Rg(d, n, r, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), f = !0);
  }
  e.stroke();
}
function bw(e, t, n, r, a = 1) {
  e.save();
  const o = "#3f3f46", u = "rgba(250, 250, 250, 0.86)";
  for (let b = -75; b <= 75; b += 15) {
    const g = [];
    for (let v = -180; v <= 180; v += 4) g.push(Vn(v, b));
    qh(e, g, n, t, r, b === 0 ? u : o, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 15) {
    const g = [];
    for (let v = -89; v <= 89; v += 4) g.push(Vn(b, v));
    qh(e, g, n, t, r, o, b % 90 === 0 ? 1.3 : 1);
  }
  const f = [
    { name: "Front", dir: Vn(0, 0) },
    { name: "Right", dir: Vn(90, 0) },
    { name: "Back", dir: Vn(180, 0) },
    { name: "Left", dir: Vn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const d = Math.max(9, Math.round(11 * a));
  e.font = `500 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((b) => {
    const g = Rg(b.dir, n, t, r);
    g && e.fillText(b.name, g.x, g.y + 24 * a);
  }), e.restore();
}
function yw(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function vw(e) {
  const t = yw(e);
  t.dragging = !1, t.hqFrames = DS;
}
function hc(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function _w(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function pc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function xw(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && o >= r.height - n;
}
function Xn(e, t) {
  return xw(e, t) ? !1 : (pc(e), !0);
}
function Xh() {
  var n;
  const e = (n = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Sw(e) {
  var n;
  if (!e) return;
  const t = (n = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ww(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Ng(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function kw(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, u;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Jh(e, t = null, n = 0, r = 0, a = !0) {
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
      e.__panoUserResized = !0, hc(e, 150), t == null || t(), a && Mw(e, 180, t);
    }
  };
}
function Mw(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Za(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Nw(e, t = {}) {
  var nn;
  const n = t.__allowStandalone === !0, r = Pg(e);
  if (r && !n) {
    uf(e);
    return;
  }
  r && ww(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), String(t.__panoForcedPath || "").trim();
  const u = {
    signature: Gh(e)
  }, f = "dom", d = u.signature || Gh(e);
  if (Number(e.__panoRebindGeneration || 0), cc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, uc(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (nn = e.__panoDomPreview) != null && nn.widget || (e.__panoLegacyPreviewHooked && Ms(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, v = b ? 0 : xx, S = document.createElement("div");
  if (LS(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const H = Hs(sc(
      e.addDOMWidget(lc(), "preview", S, Jh(e, null))
    ));
    Za(e), e.__panoDomPreview = { widget: H, root: S, requestDraw: () => {
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
  const y = document.createElement("canvas");
  y.style.cssText = [
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
  const D = document.createElement("div");
  D.style.cssText = [
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
  ].join(";"), D.textContent = "Connect ERP image", M.appendChild(y), M.appendChild(D), S.appendChild(M);
  const z = Vm(S), L = document.createElement("div");
  L && (L.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(L)), VS(e, 120, 120), Za(e);
  let P = null;
  try {
    kw(e, g, () => {
      var H, xe;
      return (xe = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : xe.call(H);
    }), P = Hs(sc(e.addDOMWidget(
      lc(),
      "preview",
      S,
      Jh(
        e,
        () => {
          var H, xe;
          return (xe = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : xe.call(H);
        },
        g,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const V = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(gt)));
  }, F = /* @__PURE__ */ Ca(a ? { ...bg(ar(e)), importing: !1, dropActive: !1 } : {
    ...rg(ar(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((H) => ({ value: H, label: H }))
  });
  let j = null;
  const $ = (a ? tS : Px)({
    readState: () => ar(e),
    publishLiveState: (H) => {
      H ? (j = H, e.__panoLiveStateOverride = H) : (e.__panoLiveStateOverride === j && (e.__panoLiveStateOverride = null), j = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (H) => {
      var Le, Ge, $e, pe;
      const xe = _a(e, "state_json");
      if (!xe) return;
      Zm(e, H.active);
      const Re = Qm(e, H);
      xe.value = Re, (Le = xe.callback) == null || Le.call(xe, Re), e.__panoStateCache = null, (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), (pe = ($e = e.graph) == null ? void 0 : $e.setDirtyCanvas) == null || pe.call($e, !0, !0);
    },
    onChange: (H) => Object.assign(F, H)
  }), se = (H = "sync", xe = null) => {
    if (!a || e.__panoSceneStateV2 || !$ || $.hasGestureChanges()) return !1;
    const Re = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((In) => String((In == null ? void 0 : In.name) || "") === "sticker_image") : null, Le = (Re == null ? void 0 : Re.link) ?? null;
    if (Le == null)
      return $.apply({ type: "sync-external", value: { connected: !1 } });
    if (!hl(e, "external-sticker")) return !1;
    const Ge = dc(e, "pano_sticker_input_pose", xe), $e = Array.isArray(Ge) ? Ge[0] : Ge, pe = String(dc(e, "pano_sticker_input_state_hash", xe) ?? ""), rn = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Tt = ar(e), Ft = (Array.isArray(Tt == null ? void 0 : Tt.stickers) ? Tt.stickers : []).find((In) => String((In == null ? void 0 : In.id) || "") === "sticker_image_1"), Nt = Fg(e, "sticker_image_1", null, { external: !0 }), Fi = $e && typeof $e == "object" ? $e : Ft || { yaw_deg: rn.yaw, pitch_deg: rn.pitch, hFOV_deg: 30, rot_deg: 0 };
    return $.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Le,
        stateHash: pe,
        pose: Fi,
        imageWidth: Number((Nt == null ? void 0 : Nt.naturalWidth) || (Nt == null ? void 0 : Nt.width) || 0),
        imageHeight: Number((Nt == null ? void 0 : Nt.naturalHeight) || (Nt == null ? void 0 : Nt.height) || 0)
      }
    });
  }, ie = a ? kg(e, se) : () => {
  };
  let I = 0;
  const Y = async (H) => {
    if (!a || !$ || !kr(H)) return !1;
    const xe = `asset_${Math.random().toString(16).slice(2, 10)}`, Re = `st_${Math.random().toString(16).slice(2, 10)}`, Le = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    I += 1, F.importing = !0;
    const Ge = ac(e, `add:${xe}`, async () => {
      const $e = await oc(H), pe = await ks(H, {
        fetchApi: (rn, Tt) => mn.fetchApi(rn, Tt)
      });
      return A(), $.apply({
        type: "add-sticker",
        value: {
          stickerId: Re,
          assetId: xe,
          asset: pe,
          imageWidth: $e.width,
          imageHeight: $e.height,
          yaw_deg: Number(Le.yaw || 0),
          pitch_deg: Number(Le.pitch || 0)
        }
      });
    });
    try {
      return await Ge;
    } catch {
      return !1;
    } finally {
      I = Math.max(0, I - 1), F.importing = I > 0, T();
    }
  };
  let ee = null, J = null, de = null, fe = !1;
  const ke = () => {
    var H;
    return de && (clearTimeout(de), de = null), fe ? (fe = !1, ((H = $ == null ? void 0 : $.commitGesture) == null ? void 0 : H.call($)) ?? !1) : !1;
  }, A = () => {
    var Le, Ge, $e;
    const H = ke(), xe = (ee == null ? void 0 : ee.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (ee = null, J = null, e.__panoStickerDrag = null, xe != null) {
      try {
        (Le = y.hasPointerCapture) != null && Le.call(y, xe) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, xe));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Re = (($e = $ == null ? void 0 : $.commitGesture) == null ? void 0 : $e.call($)) ?? !1;
    return H || Re;
  }, we = () => {
    var Le, Ge, $e;
    const H = ke(), xe = ee == null ? void 0 : ee.pointerId;
    if (ee = null, e.__panoStickerDrag = null, xe != null) {
      try {
        (Le = y.hasPointerCapture) != null && Le.call(y, xe) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, xe));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Re = (($e = $ == null ? void 0 : $.cancelGesture) == null ? void 0 : $e.call($)) ?? !1;
    return H || Re;
  }, De = () => A();
  $ && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(De));
  let Pe = null, U = !1;
  if (L && $)
    try {
      af(), Pe = Vc(a ? Jx : Gx, {
        model: F,
        onAction: (H) => {
          var Le, Ge;
          if ((H == null ? void 0 : H.type) === "open-editor") {
            A(), a || (F.aspectOpen = !1), (Le = e.__panoOpenEditor) == null || Le.call(e);
            return;
          }
          if (a) {
            if ((H == null ? void 0 : H.type) === "add-image-file") {
              Y(H.file);
              return;
            }
            $.apply(H) && T();
            return;
          }
          if ((H == null ? void 0 : H.type) === "toggle-aspect") {
            F.aspectOpen = !F.aspectOpen;
            return;
          }
          if ((H == null ? void 0 : H.type) === "close-aspect") {
            F.aspectOpen = !1;
            return;
          }
          let xe = H;
          if ((H == null ? void 0 : H.type) === "add-frame") {
            const $e = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            xe = {
              ...H,
              ...wx($e, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((H == null ? void 0 : H.type) === "delete-frame") {
            const $e = Ei(ar(e));
            $e && (e.__panoPreviewView = ag($e, {
              width: y.width,
              height: y.height
            }));
          }
          const Re = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          F.aspectOpen = !1, $.apply({ ...xe, safeRect: Re }) && T();
        }
      }), Pe.mount(L), U = !0;
    } catch {
      Pe = null, U = !1;
    }
  const He = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    hc(e, 150), T();
  }) : null;
  He == null || He.observe(M);
  const gt = (H) => {
    var Re, Le;
    V.raf = 0, V.inTick = !0;
    let xe = !1;
    try {
      xe = nt.stepInertia(H), (V.needsDraw || xe) && (V.needsDraw = !1, (Re = e.flags) != null && Re.collapsed || gw(e, y, null, nt));
    } finally {
      V.inTick = !1;
    }
    (xe || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(gt)), RS() && (!e.__panoDebugLastTs || H - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = H, e.__panoPreviewMode, uc(e), Xa(S), Xa(M), Xa(y), Xa(S.parentElement), Xa((Le = S.parentElement) == null ? void 0 : Le.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, nt = Kc({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (H) => {
      e.__panoPreviewView = H;
    },
    getViewportSize: () => {
      const H = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(H.width || y.clientWidth || 0)),
        h: Math.max(1, Number(H.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const H = Uh();
      return {
        x: H.invert_view_x ? -1 : 1,
        y: H.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), qe = a ? M : S, Ue = (H) => {
    const xe = y.getBoundingClientRect();
    return {
      x: (Number(H.clientX) - xe.left) * (y.width / Math.max(1, xe.width)),
      y: (Number(H.clientY) - xe.top) * (y.height / Math.max(1, xe.height))
    };
  }, qt = (H) => {
    var Le, Ge;
    if (!a || !o) return;
    const xe = ar(e), Re = Rh(
      xe == null ? void 0 : xe.stickers,
      String(((Le = xe == null ? void 0 : xe.active) == null ? void 0 : Le.selected_sticker_id) || ""),
      Ue(H),
      bo(e.__panoPreviewView, xe == null ? void 0 : xe.coverage),
      { width: y.width, height: y.height }
    );
    if (!Re) {
      y.style.cursor = "grab";
      return;
    }
    if (((Ge = Re.item) == null ? void 0 : Ge.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Re.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (H) => {
    var pe, rn, Tt, Ft, Nt, Fi, ui, In, Ia, Tn, ci;
    if (!Xn(H, qe) || H.button !== 0) return;
    if (!a) {
      const xn = Ei(ar(e)), Yn = e.__panoCutoutNodeFrame;
      if (!xn) {
        (pe = S.focus) == null || pe.call(S, { preventScroll: !0 }), (rn = y.setPointerCapture) == null || rn.call(y, H.pointerId), y.style.cursor = "grabbing", nt.startDrag(H.clientX, H.clientY, H.pointerId);
        return;
      }
      if (xn.locked === !0 || !Yn || !$) return;
      const Ta = Ue(H);
      let Ea;
      if (H.shiftKey) {
        const Zr = sg({
          frame: Yn,
          point: Ta,
          startRollDeg: Number(xn.roll_deg ?? xn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Zr) return;
        Ea = { kind: "roll", pointerId: H.pointerId, rollGesture: Zr };
      } else {
        const Zr = ((Tt = ar(e)) == null ? void 0 : Tt.ui_settings) || Uh();
        Ea = {
          kind: "pan",
          pointerId: H.pointerId,
          startPoint: Ta,
          startShot: { ...xn },
          focalPx: Ii(Yn, xn),
          invertX: Zr.invert_view_x === !0,
          invertY: Zr.invert_view_y === !0
        };
      }
      A(), (Ft = S.focus) == null || Ft.call(S, { preventScroll: !0 }), (Nt = y.setPointerCapture) == null || Nt.call(y, H.pointerId), y.style.cursor = "grabbing", $.beginGesture(), ee = Ea;
      return;
    }
    if (!o) return;
    const xe = Ue(H), Re = ar(e), Le = String(((Fi = Re == null ? void 0 : Re.active) == null ? void 0 : Fi.selected_sticker_id) || ""), Ge = bo(e.__panoPreviewView, Re == null ? void 0 : Re.coverage), $e = Rh(
      Re == null ? void 0 : Re.stickers,
      Le,
      xe,
      Ge,
      { width: y.width, height: y.height }
    );
    if ((ui = S.focus) == null || ui.call(S, { preventScroll: !0 }), $e && $) {
      if (nt.stopMotion(), A(), String(((In = $e.item) == null ? void 0 : In.id) || "") !== Le && $.apply({ type: "select-sticker", id: $e.item.id }), ((Ia = $e.item) == null ? void 0 : Ia.locked) === !0) {
        T();
        return;
      }
      const xn = xe, Yn = $e.geometry.center;
      J = {
        active: !0,
        kind: $e.hit.kind,
        pointerId: H.pointerId,
        startPoint: xn,
        startCenter: { ...Yn },
        startSticker: { ...$e.item },
        startDistance: Math.max(1, Math.hypot(xn.x - Yn.x, xn.y - Yn.y)),
        startAngle: Math.atan2(xn.y - Yn.y, xn.x - Yn.x),
        camera: Ge,
        viewport: { width: y.width, height: y.height }
      }, e.__panoStickerDrag = J, $.beginGesture(), (Tn = y.setPointerCapture) == null || Tn.call(y, H.pointerId), y.style.cursor = $e.hit.kind === "rotate" ? "grabbing" : $e.hit.kind === "move" ? "move" : $e.hit.cursor, T();
      return;
    }
    (ci = y.setPointerCapture) == null || ci.call(y, H.pointerId), y.style.cursor = "grabbing", nt.startDrag(H.clientX, H.clientY, H.pointerId);
  }), y.addEventListener("pointermove", (H) => {
    if (!a) {
      if (!ee) {
        if (!nt.state.drag.active) return;
        Xn(H, qe), nt.moveDrag(H.clientX, H.clientY, "pano");
        return;
      }
      if (ee.pointerId !== H.pointerId || !$) return;
      if (Xn(H, qe), ee.kind === "pan") {
        const Re = Ue(H);
        $.updateGesture({
          type: "pan-camera",
          startShot: ee.startShot,
          dx: Re.x - ee.startPoint.x,
          dy: Re.y - ee.startPoint.y,
          focalPx: ee.focalPx,
          invertX: ee.invertX,
          invertY: ee.invertY
        });
        return;
      }
      const xe = lg(ee.rollGesture, Ue(H), H);
      if (!xe) return;
      ee.rollGesture = xe.gesture, $.updateGesture({ type: "set-roll", value: xe.rollDeg });
      return;
    }
    if (!J && !nt.state.drag.active) {
      qt(H);
      return;
    }
    if (J) {
      if (J.pointerId !== H.pointerId || !$) return;
      Xn(H, qe);
      const xe = Ue(H);
      let Re = J.startSticker;
      if (J.kind === "move")
        Re = oS(
          J.startSticker,
          {
            x: J.startCenter.x + xe.x - J.startPoint.x,
            y: J.startCenter.y + xe.y - J.startPoint.y
          },
          J.camera,
          J.viewport
        );
      else if (J.kind === "scale") {
        const Le = Math.hypot(xe.x - J.startCenter.x, xe.y - J.startCenter.y);
        Re = sS(J.startSticker, J.startDistance, Le);
      } else if (J.kind === "rotate") {
        const Le = Math.atan2(xe.y - J.startCenter.y, xe.x - J.startCenter.x);
        Re = lS(J.startSticker, J.startAngle, Le, H.shiftKey === !0);
      }
      $.updateGesture({ type: "set-transform", value: Re }), T();
      return;
    }
    !o || !nt.state.drag.active || (Xn(H, qe), nt.moveDrag(H.clientX, H.clientY, "pano"));
  });
  const An = () => {
    var xe, Re;
    if (!ee && !J) {
      if (!nt.state.drag.active) return;
      nt.endDrag(), y.style.cursor = "grab", T();
      return;
    }
    if (!$) return;
    const H = (ee == null ? void 0 : ee.pointerId) ?? (J == null ? void 0 : J.pointerId);
    ee = null, J = null, e.__panoStickerDrag = null;
    try {
      (xe = y.hasPointerCapture) != null && xe.call(y, H) && ((Re = y.releasePointerCapture) == null || Re.call(y, H));
    } catch {
    }
    $.cancelGesture(), y.style.cursor = "grab", T();
  }, vn = (H, xe = !1) => {
    var Re, Le, Ge, $e;
    if (!a) {
      if (!ee) {
        if (!nt.state.drag.active) return;
        Xn(H, qe), (Re = y.releasePointerCapture) == null || Re.call(y, H.pointerId), y.style.cursor = "grab", nt.endDrag(), T();
        return;
      }
      if (ee.pointerId !== H.pointerId || !$) return;
      Xn(H, qe), ee = null, (Le = y.releasePointerCapture) == null || Le.call(y, H.pointerId), y.style.cursor = "grab", xe ? $.cancelGesture() : $.commitGesture(), qt(H), T();
      return;
    }
    if (J) {
      if (J.pointerId !== H.pointerId || !$) return;
      Xn(H, qe), J = null, e.__panoStickerDrag = null, (Ge = y.releasePointerCapture) == null || Ge.call(y, H.pointerId), y.style.cursor = "grab", xe ? $.cancelGesture() : $.commitGesture(), T();
      return;
    }
    !o || !nt.state.drag.active || (Xn(H, qe), ($e = y.releasePointerCapture) == null || $e.call(y, H.pointerId), y.style.cursor = "grab", nt.endDrag(), vw(e), T());
  };
  y.addEventListener("pointerup", vn), y.addEventListener("pointercancel", (H) => vn(H, !0)), y.addEventListener("lostpointercapture", An), y.addEventListener("pointerleave", (H) => {
    !a && ee || J || nt.state.drag.active && vn(H);
  });
  const tn = (H) => {
    const xe = document.activeElement;
    if (xe !== S && !S.contains(xe)) return;
    if (H.key === "Escape" && (ee || J) && $) {
      An(), pc(H);
      return;
    }
    if (!a || H.key !== "Delete" && H.key !== "Backspace" || !$) return;
    const Re = H.target, Le = String((Re == null ? void 0 : Re.tagName) || "").toUpperCase();
    Le === "INPUT" || Le === "TEXTAREA" || Re != null && Re.isContentEditable || F.canDelete === !0 && (A(), $.apply({ type: "delete-selected" }) && T(), pc(H));
  };
  window.addEventListener("keydown", tn, !0);
  const Cn = TS({
    requestFrame: (H) => requestAnimationFrame(H),
    cancelFrame: (H) => cancelAnimationFrame(H),
    restore: (H) => Sw(H)
  }), R = (H) => {
    var Re, Le, Ge, $e, pe, rn;
    if (!Xn(H, qe)) return;
    if (!a) {
      const Tt = Ei(ar(e));
      if (Tt && Tt.locked !== !0 && $) {
        const Ft = Bc(H);
        Ft !== 0 && (fe || (A(), $.beginGesture(), fe = !0), $.updateGesture({
          type: "step-fov",
          direction: Ft
        }) ? (de && clearTimeout(de), de = setTimeout(ke, 180), T()) : $.hasGestureChanges() || ($.cancelGesture(), fe = !1));
      } else if (!Tt) {
        const Ft = Xh();
        nt.applyWheelEvent(H) && T(), Cn.schedule(Ft);
      }
      (Re = H.preventDefault) == null || Re.call(H), (Le = H.stopPropagation) == null || Le.call(H), (Ge = H.stopImmediatePropagation) == null || Ge.call(H);
      return;
    }
    if (!o) return;
    const xe = Xh();
    nt.applyWheelEvent(H) && T(), ($e = H.preventDefault) == null || $e.call(H), (pe = H.stopPropagation) == null || pe.call(H), (rn = H.stopImmediatePropagation) == null || rn.call(H), Cn.schedule(xe);
  }, B = a ? [M, y] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((H) => {
    B.forEach((xe) => xe.addEventListener(H, R, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((H) => {
    y.addEventListener(H, (xe) => Xn(xe, qe)), M.addEventListener(H, (xe) => Xn(xe, qe));
  });
  const q = _a(e, "state_json");
  let ye = null, he = null;
  q && !q.__panoPreviewPatchedCb && (ye = q.callback, he = (H) => {
    const xe = ye ? ye(H) : void 0;
    return T(), xe;
  }, q.callback = he, q.__panoPreviewPatchedCb = he);
  const E = _a(e, "bg_color");
  let te = null, Z = null;
  E && !E.__panoPreviewPatchedCb && (te = E.callback, Z = (H) => {
    const xe = te ? te(H) : void 0;
    return T(), xe;
  }, E.callback = Z, E.__panoPreviewPatchedCb = Z);
  const ce = e.onRemoved, ne = e.onResize, Ne = e.onExecuted, ve = e.onDragOver, Ie = e.onDragDrop;
  let Ce = null;
  const p = () => {
    a && (F.dropActive = !0, Ce && clearTimeout(Ce), Ce = setTimeout(() => {
      Ce = null, F.dropActive = !1;
    }, 140));
  }, Ve = a ? function(H) {
    return (ve ? ve.apply(this, arguments) : !1) === !0 ? !0 : sf(H == null ? void 0 : H.dataTransfer) ? (p(), !0) : !1;
  } : null, Ke = a ? function(H) {
    var Le;
    if ((Ie ? Ie.apply(this, arguments) : !1) === !0) return !0;
    const Re = Array.from(((Le = H == null ? void 0 : H.dataTransfer) == null ? void 0 : Le.files) || []).find((Ge) => kr(Ge));
    return Re ? (Ce && clearTimeout(Ce), Ce = null, F.dropActive = !1, Y(Re), !0) : !1;
  } : null;
  a && (e.onDragOver = Ve, e.onDragDrop = Ke);
  const et = a ? IS(S, {
    onActive: (H) => {
      if (H) {
        p();
        return;
      }
      Ce && clearTimeout(Ce), Ce = null, F.dropActive = !1;
    },
    onDrop: (H) => {
      Y(H);
    }
  }) : () => {
  }, bt = function(H) {
    ZS(e, H), e.__panoLastExecutedOutput = H || null, Dg(e), gS(e), se("executed", H), Za(e), T();
    const xe = Ne ? Ne.apply(this, arguments) : void 0;
    return Za(e), xe;
  };
  e.onExecuted = bt;
  const at = e.onConnectionsChange, re = function(H, xe) {
    const Re = Vh(e, H, xe, ["sticker_image"]), Le = Vh(
      e,
      H,
      xe,
      ["erp_image", "bg_erp"]
    ), Ge = arguments, $e = at ? at.apply(this, Ge) : void 0, pe = () => {
      V.destroyed || ((Le || Re) && (Le && (Lh(e, "background"), tw(e)), Re && (Lh(e, "external-sticker"), e.__panoLastExecutedOutput = null, nw(e))), Re && se("connection-change"), Za(e), T());
    };
    return pe(), queueMicrotask(pe), $e;
  };
  e.onConnectionsChange = re;
  const At = function() {
    const H = ne ? ne.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, hc(this, 150), T(), H;
  };
  e.onResize = At;
  const _n = function() {
    return ot(), fc.unregister(this), ce ? ce.apply(this, arguments) : void 0;
  };
  e.onRemoved = _n;
  const ot = () => {
    var H, xe, Re, Le, Ge, $e, pe, rn, Tt, Ft, Nt;
    V.destroyed = !0, (H = He == null ? void 0 : He.disconnect) == null || H.call(He), a ? A() : we(), y.removeEventListener("lostpointercapture", An), et(), z(), window.removeEventListener("keydown", tn, !0), (Re = (xe = e.__panoStateFlushers) == null ? void 0 : xe.delete) == null || Re.call(xe, De), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Le = $ == null ? void 0 : $.destroy) == null || Le.call($), (Ge = Pe == null ? void 0 : Pe.unmount) == null || Ge.call(Pe), (pe = ($e = e.__panoRuntimeCore) == null ? void 0 : $e.dispose) == null || pe.call($e), e.__panoRuntimeCore = null, (Tt = (rn = e.__panoRasterObjectSurfaceCache) == null ? void 0 : rn.dispose) == null || Tt.call(rn), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ie(), Cn.dispose(), Ce && clearTimeout(Ce), Ce = null, lf.disposeOwner(e), xa(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((Ft = e.__panoCutoutNodeSurface) == null ? void 0 : Ft.session) === $ && (e.__panoCutoutNodeSurface = null), ((Nt = e.__panoStickersNodeSurface) == null ? void 0 : Nt.session) === $ && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === At && (e.onResize = ne), e.onExecuted === bt && (e.onExecuted = Ne), e.onConnectionsChange === re && (e.onConnectionsChange = at), he && (q == null ? void 0 : q.callback) === he && (q.callback = ye), he && (q == null ? void 0 : q.__panoPreviewPatchedCb) === he && delete q.__panoPreviewPatchedCb, Z && (E == null ? void 0 : E.callback) === Z && (E.callback = te), Z && (E == null ? void 0 : E.__panoPreviewPatchedCb) === Z && delete E.__panoPreviewPatchedCb, e.onDragOver === Ve && (e.onDragOver = ve), e.onDragDrop === Ke && (e.onDragDrop = Ie), e.onRemoved === _n && (e.onRemoved = ce);
  };
  e.__panoDomRestore = ot, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = $ && U && !a ? { session: $, model: F } : null, e.__panoStickersNodeSurface = $ && U && a ? { session: $, model: F } : null, e.__panoDomPreview = {
    widget: P,
    root: S,
    canvas: y,
    requestDraw: T,
    state: V,
    emptyHintEl: D,
    nodeSurface: e.__panoCutoutNodeSurface
  }, fc.register(e), se("attach"), T();
}
function Zh(e, t = {}) {
  Ag(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Qh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Pg(e) && !n) {
    uf(e);
    return;
  }
  Ag(e).attach(t);
}
function Nu(e) {
  return ur(e.x, e.y, -e.z);
}
function pl(e, t, n = 0) {
  const { right: r, up: a, fwd: o } = Wn(e, t, n);
  return [
    [r.x, a.x, -o.x],
    [r.y, a.y, -o.y],
    [-r.z, -a.z, o.z]
  ];
}
function Pw(e) {
  const t = Nu(ur(e[0][0], e[1][0], e[2][0])), n = Nu(ur(e[0][1], e[1][1], e[2][1])), r = Nu(ur(-e[0][2], -e[1][2], -e[2][2])), a = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), u = Math.cos(a), f = Math.sin(a), d = Math.atan2(f * n.z - u * n.x, u * t.x - f * t.z);
  return { yawDeg: a * Pn, pitchDeg: o * Pn, rollDeg: d * Pn };
}
function Aw(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, a = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + a * a), 2 * (n * r - a * o), 2 * (n * a + r * o)],
    [2 * (n * r + a * o), 1 - 2 * (n * n + a * a), 2 * (r * a - n * o)],
    [2 * (n * a - r * o), 2 * (r * a + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function ml(e) {
  const [[t, n, r], [a, o, u], [f, d, b]] = e, g = t + o + b;
  if (g > 0) {
    const S = 0.5 / Math.sqrt(g + 1);
    return { x: (d - u) * S, y: (r - f) * S, z: (a - n) * S, w: 0.25 / S };
  }
  if (t > o && t > b) {
    const S = 2 * Math.sqrt(1 + t - o - b);
    return { x: 0.25 * S, y: (n + a) / S, z: (r + f) / S, w: (d - u) / S };
  }
  if (o > b) {
    const S = 2 * Math.sqrt(1 + o - t - b);
    return { x: (n + a) / S, y: 0.25 * S, z: (u + d) / S, w: (r - f) / S };
  }
  const v = 2 * Math.sqrt(1 + b - t - o);
  return { x: (r + f) / v, y: (u + d) / v, z: 0.25 * v, w: (a - n) / v };
}
function Qo(e) {
  if (!e || typeof e != "object") return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) t[n] = Array.isArray(r) ? [...r] : r;
  return t;
}
const ca = 1e-6, Cw = ["yaw_deg", "pitch_deg", "roll_deg"], ep = { hFOV_deg: [0.1, 179], vFOV_deg: [0.1, 179], scale: [1e-6, 1 / 0] }, tp = 1e-6;
function Bs(e, t, n, r, a) {
  const o = 1 - a;
  return o * o * o * e + 3 * o * o * a * t + 3 * o * a * a * n + a * a * a * r;
}
function Iw(e, t) {
  if (e === "auto") return t;
  const [n, r, a, o] = e;
  let u = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (u + f);
    Bs(0, n, a, 1, b) < t ? u = b : f = b;
  }
  return Bs(0, r, o, 1, 0.5 * (u + f));
}
function Ks(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ws(e, t, n, r) {
  const a = e[t] - e[t - 1], o = e[t + 1] - e[t], u = n.map((S) => -S / a), f = r.map((S) => S / o);
  if (u.reduce((S, M, y) => S + M * f[y], 0) < 0) return n.map(() => 0);
  const d = u.map((S, M) => (S * o + f[M] * a) / (a + o)), b = (S) => Math.sqrt(S.reduce((M, y) => M + y * y, 0)), g = 3 * Math.min(b(u), b(f)), v = b(d);
  return v <= g ? d : d.map((S) => S * g / v);
}
function Vg(e, t, n, r) {
  const a = n[r], o = n[r + 1], u = t[r + 1] - t[r], f = a.map((g, v) => o[v] - g);
  let d = f;
  Ks(e, r) && (d = Ws(t, r, n[r - 1].map((g, v) => g - a[v]), f).map((g) => g * u));
  let b = f;
  return Ks(e, r + 1) && (b = Ws(t, r + 1, f.map((g) => -g), n[r + 2].map((g, v) => g - o[v])).map((g) => g * u)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function np(e, t, n, r, a) {
  const [[o], [u]] = Vg(e, t, n.map((f) => [f]), r);
  return Bs(n[r], n[r] + o, n[r + 1] + u, n[r + 1], a);
}
function Tw(e, t, n, r) {
  var b, g;
  const a = e.map((v) => v.value.position);
  let [o, u] = Vg(e, t, a, n);
  o = ((b = e[n].handles) == null ? void 0 : b.out) ?? o, u = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? u;
  const f = a[n], d = a[n + 1];
  return [0, 1, 2].map((v) => Bs(f[v], f[v] + o[v], d[v] + u[v], d[v], r));
}
function Ys([e, t, n, r], [a, o, u, f]) {
  return [
    r * a + e * f + t * u - n * o,
    r * o - e * u + t * f + n * a,
    r * u + e * o - t * a + n * f,
    r * f - e * a - t * o - n * u
  ];
}
function Ew(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Pu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Dw([e, t, n, r]) {
  const a = Math.sqrt(e * e + t * t + n * n), o = a > 1e-12 ? Math.atan2(a, r) / a : 1;
  return [e * o, t * o, n * o];
}
function mc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function fa(e, t) {
  return Dw(Ys([-e[0], -e[1], -e[2], e[3]], t));
}
function Au(e, t, n) {
  return Ys(e, mc(fa(e, t).map((r) => n * r)));
}
function Cu(e, t) {
  const n = Ew(e, t);
  if (Math.abs(n) > tp) return n < 0;
  const [r, a, o] = fa(e, t);
  for (const u of [-a, r, o])
    if (Math.abs(u) > tp) return u < 0;
  return !1;
}
function es(e) {
  const { x: t, y: n, z: r, w: a } = ml(pl(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, a];
}
function rp(e, t, n, r) {
  const a = t + (n - t) * r;
  return e + 360 * Math.ceil((a - 180 - 1e-6 - e) / 360);
}
function Ow(e, t, n, r) {
  const a = es(e[n].value);
  let o = es(e[n + 1].value);
  Cu(a, o) && (o = Pu(o));
  const u = t[n + 1] - t[n], f = fa(a, o);
  let d = f;
  if (Ks(e, n)) {
    let F = es(e[n - 1].value);
    Cu(F, a) && (F = Pu(F)), d = Ws(t, n, fa(a, F), f).map((j) => j * u);
  }
  let b = f;
  if (Ks(e, n + 1)) {
    let F = es(e[n + 2].value);
    Cu(o, F) && (F = Pu(F)), b = Ws(t, n + 1, fa(o, a), fa(o, F)).map((j) => j * u);
  }
  const g = Ys(a, mc(d.map((F, j) => 0.5 * (F - f[j])))), v = Ys(o, mc(f.map((F, j) => 0.5 * (F - b[j])))), [S, M, y, D] = Au(Au(a, o, r), Au(g, v, r), 2 * r * (1 - r)), { yawDeg: z, pitchDeg: L, rollDeg: P } = Pw(Aw({ x: S, y: M, z: y, w: D })), V = e[n].value, T = e[n + 1].value;
  return {
    yaw_deg: rp(z, V.yaw_deg, T.yaw_deg, r),
    pitch_deg: L,
    roll_deg: rp(P, V.roll_deg, T.roll_deg, r)
  };
}
function Fw(e, t, n) {
  const r = e.map((d) => d.frame), a = Iw(e[t].easing, (n - r[t]) / (r[t + 1] - r[t])), o = e[t].value;
  if (!o || typeof o != "object") return np(e, r, e.map((d) => d.value), t, a);
  const u = "yaw_deg" in o ? Ow(e, r, t, a) : {}, f = {};
  for (const d of Object.keys(o))
    if (d === "position")
      f[d] = Tw(e, r, t, a);
    else if (Cw.includes(d))
      f[d] = u[d];
    else if (f[d] = np(e, r, e.map((b) => b.value[d]), t, a), d in ep) {
      const [b, g] = ep[d];
      f[d] = Math.min(g, Math.max(b, f[d]));
    }
  return f;
}
function ts(e, t) {
  const n = e.keyframes;
  if (!n.length) return Qo(e.value);
  if (t <= n[0].frame + ca) return Qo(n[0].value);
  const r = n[n.length - 1];
  if (t >= r.frame - ca) return Qo(r.value);
  let a = 0;
  for (; n[a + 1].frame <= t + ca; ) a += 1;
  const o = n[a];
  return Math.abs(t - o.frame) <= ca || o.easing === "hold" ? Qo(o.value) : Fw(n, a, t);
}
function ip(e, t) {
  return t - (e.start - e.in);
}
function ap(e, t) {
  return t >= e.start - ca && (e.duration === null || t < e.start + e.duration - ca);
}
function Rw(e, t) {
  const n = Number(t), { camera: r, scene: a } = e, o = ip(a.clip, n);
  return {
    frame: n,
    camera: { ...ts(r.transform, n), aspect: r.aspect },
    scene: {
      active: ap(a.clip, n),
      clip_frame: o,
      ...ts(a.transform, o)
    },
    stickers: e.stickers.map((u) => {
      const f = ip(u.clip, n);
      return {
        id: u.id,
        placement: u.placement,
        active: u.visible && ap(u.clip, n),
        clip_frame: f,
        ...ts(u.transform, f),
        opacity: Math.min(1, Math.max(0, ts(u.opacity, f)))
      };
    })
  };
}
const op = 2048;
function zg(e, t, n) {
  const r = t / n, a = Math.tan(e.hFOV_deg * 0.5 * Yt);
  return {
    quaternion: ml(pl(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(a / r) * Pn,
    aspect: r
  };
}
function Lw(e) {
  const t = Xr(e);
  return {
    quaternion: ml(pl(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Vw(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: a, halfH: o } = qc(n, r), u = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: u - a, y: f - o, w: a * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(a / r) * Pn,
      vFOV_deg: 2 * Math.atan(o / r) * Pn
    }
  };
}
function zw(e, t, { media: n, zIndex: r, paintLayers: a }) {
  const o = Rw(e, t), u = [];
  e.stickers.forEach((f, d) => {
    const b = o.stickers[d];
    if (f.placement !== "sky") return;
    const g = f.source.kind === "port" && !f.visible;
    if (!b.active && !g) return;
    const v = n(f);
    if (!v) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * Yt), M = Math.tan(b.vFOV_deg * 0.5 * Yt), { crop: y } = f;
    u.push({
      kind: "sticker",
      id: f.id,
      media: v.media,
      revision: v.revision,
      opacity: g ? Qc : b.opacity,
      zIndex: r(f),
      quaternion: ml(pl(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * y.x0 - 1) * S,
        x1: (2 * y.x1 - 1) * S,
        y0: (1 - 2 * y.y1) * M,
        y1: (1 - 2 * y.y0) * M
      }
    });
  });
  for (const f of a) u.push({ kind: "erp", ...f });
  return u.sort((f, d) => f.zIndex - d.zIndex);
}
const Iu = /* @__PURE__ */ new WeakMap();
let $w = 1;
function sp(e) {
  return Iu.has(e) || Iu.set(e, $w++), Iu.get(e);
}
function lp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [sp(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, sp(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function jw({ onReady: e, onFailed: t }) {
  let n = null, r = !1;
  const a = {
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(o) {
      return n ? n.render(o) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(o) {
      return n ? n.renderUnwrap(o) : null;
    },
    dispose() {
      r = !0, n == null || n.dispose(), n = null;
    }
  };
  return import("./.lazy/pano_three_view-DtiQ-hzq.js").then((o) => {
    r || (n = o.createThreeView(), e());
  }).catch((o) => {
    console.error("[PanoramaStickers] three.js view is unavailable; using the previous renderer", o), a.failed = !0, t();
  }), a;
}
function Hw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Uw(e, t = 1, n = op) {
  const r = Number(t), a = Number.isFinite(r) && r > 0 ? r : 1, o = Number(e == null ? void 0 : e.width), u = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(o) ? o : 0) * a, d = Math.max(0, Number.isFinite(u) ? u : 0) * a, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : op, v = Math.max(f, d), S = v > 0 ? Math.min(1, g / v) : 1;
  return {
    width: Math.max(1, Math.round(f * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function Gw({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const a = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let u = !1, f = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const y = d();
    return y === f || (f = y, a(y)), y;
  }, g = () => b();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", g), b(), { toggle: async () => {
    var y;
    if (u || !e || !t) return !1;
    if (d()) {
      try {
        await ((y = t.exitFullscreen) == null ? void 0 : y.call(t));
      } catch {
      }
      return u ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), u) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return u || (o(), b()), !1;
  }, isActive: d, destroy: () => {
    var y, D, z;
    if (!u) {
      if (u = !0, (y = t == null ? void 0 : t.removeEventListener) == null || y.call(t, "fullscreenchange", g), d())
        try {
          const L = (D = t.exitFullscreen) == null ? void 0 : D.call(t);
          (z = L == null ? void 0 : L.catch) == null || z.call(L, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
function Bw(e, t, n) {
  return zg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function Kw(e) {
  let t = null, n = !1, r = !1;
  const a = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((u) => {
      if (n = !1, !a.size) {
        u.dispose();
        return;
      }
      t = u, a.forEach((f) => f.onChange());
    }).catch((u) => {
      n = !1, a.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable; Preview nodes use the previous renderer", u), a.forEach((f) => f.onChange()));
    }));
  }
  return function(f) {
    const d = { onChange: f };
    let b = !1;
    return a.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(g) {
        return b ? null : (o(), t ? t.render({ ...g, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        b || (b = !0, a.delete(d), t == null || t.release(d), !a.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Ww = Kw(
  () => import("./.lazy/pano_three_view-DtiQ-hzq.js").then((e) => e.createThreeView())
), Yw = { class: "pano-preview-node-surface" }, qw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Me(), Ae("div", Yw, [
      je(en, {
        icon: e.model.fullscreen ? mt(Te).fullscreen_close : mt(Te).fullscreen,
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
}, ns = 140, Xw = 180, up = 40, Tu = 10;
function cp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function fp(e, t) {
  const n = cp(e), r = cp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function dp(e) {
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
function Sa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Sa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return dp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Sa(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : dp(e);
}
function $g(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Jw(e) {
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
function gc(e) {
  var a;
  const t = (a = sr) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (fp(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (fp(o, n)) return t[o];
  return null;
}
function Zw(e) {
  var r, a;
  const t = gc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const u of o) {
        const f = Sa(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Qw(e, t = "erp_image") {
  var y, D, z, L, P, V, T, F, j, $, se, ie;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((I) => String((I == null ? void 0 : I.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const I = n.find((Y) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && (Y == null ? void 0 : Y.link) != null);
    (I == null ? void 0 : I.link) != null && (r = I.link);
  }
  if (r == null) return "";
  const o = ((D = (y = e == null ? void 0 : e.graph) == null ? void 0 : y.links) == null ? void 0 : D[r]) || ((P = (L = (z = sr) == null ? void 0 : z.graph) == null ? void 0 : L.links) == null ? void 0 : P[r]);
  if (!o) return "";
  const u = Number(o.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (F = (T = (V = sr) == null ? void 0 : V.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : F.call(T, u), d = gc(u), b = gc(e == null ? void 0 : e.id), g = [
    (j = b == null ? void 0 : b.ui) == null ? void 0 : j.pano_input_images,
    b == null ? void 0 : b.pano_input_images,
    d == null ? void 0 : d.images,
    ($ = d == null ? void 0 : d.ui) == null ? void 0 : $.pano_input_images,
    d == null ? void 0 : d.pano_input_images
  ];
  for (const I of g)
    if (Array.isArray(I))
      for (const Y of I) {
        const ee = Sa(Y);
        if (ee) return ee;
      }
  let v = [];
  try {
    v = typeof ((se = sr) == null ? void 0 : se.getNodeImageUrls) == "function" ? sr.getNodeImageUrls(f) || [] : [];
  } catch {
    v = [];
  }
  if (Array.isArray(v) && v.length > 0)
    for (const I of v) {
      const Y = Sa(I);
      if (Y) return Y;
    }
  if (f) {
    const I = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Y of I) {
      const ee = Sa(Y);
      if (ee) return ee;
    }
  }
  const S = (ie = f == null ? void 0 : f.widgets) == null ? void 0 : ie.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image"), M = String((S == null ? void 0 : S.value) || "").trim();
  return M ? mn.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function hp(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function ek(e, t, n, r, a, o, u) {
  e.__panoStandaloneCore || (e.__panoStandaloneCore = cl());
  const f = p_({
    stateRevision: [
      "standalone_preview_scene",
      u,
      o
    ].join("|"),
    backgroundSource: a,
    backgroundRevision: u,
    coverageDeg: o,
    scene: dl(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoStandaloneCore.syncState(f)) return null;
  const d = e.__panoStandaloneCore.renderToTarget(
    "preview_node",
    vx(r, o),
    { width: t, height: n, dpr: window.devicePixelRatio || 1 }
  );
  return d ? { canvas: d, x: 0, y: 0, width: d.width, height: d.height } : null;
}
function pp(e, t, n, r, a, o, u) {
  var g, v, S;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !$g(o) || n <= 1 || r <= 1) {
    hp(t, n, r);
    return;
  }
  const f = Number(((S = (v = (g = e == null ? void 0 : e.widgets) == null ? void 0 : g.find) == null ? void 0 : v.call(g, (M) => (M == null ? void 0 : M.name) === "coverage")) == null ? void 0 : S.value) || 360) === 180 ? 180 : 360, d = Jw(o), b = u.failed ? ek(e, n, r, a, o, f, d) : u.render({
    width: n,
    height: r,
    camera: Bw(a, n, r),
    background: { media: o, revision: d, coverage: f },
    layers: []
  });
  b ? t.drawImage(b.canvas, b.x, b.y, b.width, b.height, 0, 0, n, r) : hp(t, n, r);
}
function mp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class tk {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Ww(() => this.requestDraw()), this.controller = Kc({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ut(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${ns}px`,
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
          return ns;
        },
        getHeight() {
          return ns;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Hs(sc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const o = r ? r(a) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ns, Number(o.minHeight || 0)),
            minWidth: Math.max(Xw, Number(o.minWidth || 0))
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
      return af(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ca({ fullscreen: !1 }), this.fullscreenController = Gw({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = Vc(qw, {
        model: this.surfaceModel,
        onAction: (f) => {
          var d, b;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((b = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || b.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, d;
          return (d = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : d.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (a = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || a.call(r), this.surfaceApp = null, (u = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || u.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var a;
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = Vm(n), t.addEventListener("pointerdown", (o) => {
      var u, f, d;
      o.button === 0 && ((u = n.focus) == null || u.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (d = o.stopImmediatePropagation) == null || d.call(o));
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
      Hw(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !$g(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return mp(a.x, a.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - o.x, a.y - o.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, v, S, M;
      const o = uw(this, n, r, a), u = t.getLegacyPreviewRect();
      if (!o || !mp(o.x, o.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), f && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, o, u;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - Tu * 2), n = Math.max(60, Number(((u = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : u[1]) || 0) - up - Tu);
    return { x: Tu, y: up, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), pp(this.node, t, n.w, n.h, this.view, this.img, this.previewView), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = Uw(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var a, o, u;
    const t = Zw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", d), f.addEventListener("canplay", d), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", d), f.removeEventListener("canplay", d), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = Qw(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    var a, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), pp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (a = this.node).setDirtyCanvas) == null || o.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, a, o, u, f, d, b, g, v, S, M, y, D, z, L, P, V;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null, (u = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || u.call(o), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || v.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (y = (M = this.root) == null ? void 0 : M.remove) == null || y.call(M);
    } catch {
    }
    try {
      Mg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((L = (z = (D = this.node) == null ? void 0 : D.widgets) == null ? void 0 : z.find) == null ? void 0 : L.call(z, (T) => (T == null ? void 0 : T.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), (V = (P = this.node.__panoStandaloneCore) == null ? void 0 : P.dispose) == null || V.call(P), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function nk(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new tk(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function jg(e, t, n) {
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
function ff(e) {
  return !!(e != null && e.prototype);
}
function _o(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function rk(e, t = {}) {
  ff(e) || nk(e, {
    ...t,
    onOpen: _o(e, t.onOpen)
  });
}
function ik(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!ff(e)) {
    Qh(e, {
      ...r,
      onOpen: _o(e, t.onOpen)
    });
    return;
  }
  jg(e, "stickers_node_preview", (a) => {
    Qh(a, {
      ...r,
      onOpen: _o(a, t.onOpen)
    });
  });
}
function ak(e, t = {}) {
  if (!ff(e)) {
    Zh(e, {
      ...t,
      onOpen: _o(e, t.onOpen)
    });
    return;
  }
  jg(e, "cutout_preview", (n) => {
    Zh(n, {
      ...t,
      onOpen: _o(n, t.onOpen)
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
}, Rr = "pen";
function gp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function ok(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const o = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(b) {
    if (r.splice(0, r.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const g = Number(b.index);
    Number.isInteger(g) ? g === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, g)) : a = r.length - 1;
  }
  function d(b) {
    r[a] !== b && (r.splice(a + 1), r.push(b), r.length > o && r.shift(), a = r.length - 1);
  }
  return f(t), {
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
      const b = a - 1;
      return b < 0 || b >= r.length ? null : (a = b, r[a]);
    },
    redo() {
      const b = a + 1;
      return b < 0 || b >= r.length ? null : (a = b, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const b = r.length, g = Math.max(0, b - u), v = a >= 0 ? Math.max(0, Math.min(a, g)) : g, S = r.slice(v, v + u), M = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - v));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: f
  };
}
function bp(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function sk(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function yp(e = {}, t = 0) {
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
  return n === "sticker" ? (r.transform = sk((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function lk(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Pa({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: bp((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((o, u) => yp(o, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = bp((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((o, u) => yp(o, u)).filter(Boolean);
  return Pa({
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
function qs(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function uk(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || cl((e == null ? void 0 : e.coreOptions) || {});
  let r = null, a = "";
  function o(v) {
    var S;
    return JSON.stringify({
      stateRevision: (v == null ? void 0 : v.stateRevision) || "",
      background: (v == null ? void 0 : v.background) || null,
      objects: Array.isArray((S = v == null ? void 0 : v.objectPass) == null ? void 0 : S.objects) ? v.objectPass.objects.map((M) => ({
        id: (M == null ? void 0 : M.id) || "",
        type: (M == null ? void 0 : M.type) || "",
        revision: (M == null ? void 0 : M.revision) || "",
        visible: (M == null ? void 0 : M.visible) !== !1,
        opacity: Number((M == null ? void 0 : M.opacity) ?? 1),
        zIndex: Number((M == null ? void 0 : M.zIndex) ?? 0),
        transform: (M == null ? void 0 : M.transform) || null,
        params: (M == null ? void 0 : M.params) || null
      })) : [],
      overlay: (v == null ? void 0 : v.overlay) || {}
    });
  }
  function u(v = {}) {
    const S = lk(v), M = o(S);
    return a === M || !n.syncState(S) ? !1 : (r = S, a = M, !0);
  }
  function f(v = {}, S = {}) {
    if (!r) return null;
    const M = xo(v), y = qs(S);
    return n.renderToTarget(t, M, y);
  }
  function d(v, S, M = {}, y = {}) {
    if (!v || !S || !r) return !1;
    const D = xo(M), z = qs({
      ...y,
      width: Number((S == null ? void 0 : S.w) || (y == null ? void 0 : y.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (y == null ? void 0 : y.height) || 1)
    });
    return n.renderToContext(v, S, D, z);
  }
  function b() {
    var v;
    r = null, a = "", (v = n.clearState) == null || v.call(n);
  }
  function g() {
    var v;
    b(), (v = n.dispose) == null || v.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: d,
    snapshotScene: () => r,
    clearScene: b,
    dispose: g
  };
}
function ck(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((o) => {
      o ? r(o) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function fk(e, t = {}) {
  var d, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = xo((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((d = t == null ? void 0 : t.camera) == null ? void 0 : d.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = qs(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), o = e.renderFrame(n, a);
  if (!o) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return ck(o, u, f);
}
function dk(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let o = xo((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function d() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), y = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), D = qs({ width: S, height: M, dpr: y });
    return r.width = Math.max(1, Math.round(D.width * D.dpr)), r.height = Math.max(1, Math.round(D.height * D.dpr)), r.style.width = `${D.width}px`, r.style.height = `${D.height}px`, D;
  }
  function b() {
    if (u || !a) return !1;
    const S = d();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      o,
      { ...S, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function g() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, b();
    }));
  }
  const v = typeof ResizeObserver == "function" ? new ResizeObserver(() => g()) : null;
  return v == null || v.observe(t), g(), {
    canvas: r,
    setView(S) {
      o = xo(S || {}), g();
    },
    getView() {
      return { ...o };
    },
    present: b,
    requestRender: g,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), v == null || v.disconnect(), r.remove();
    }
  };
}
function hk(e = {}) {
  const t = uk({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(Br(n), r);
    },
    renderShotToContext(n, r, a, o = {}) {
      return t.renderToContext(n, r, Br(a), o);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? Br(r.shot) : r == null ? void 0 : r.view;
      return dk(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: Br(n.shot) } : n;
      return fk(t, r);
    }
  };
}
function na(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function pk(e = {}) {
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
function mk({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: o,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: d
}) {
  var V, T;
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
    historyEntries: Array.from({ length: 8 }, (F, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const v = ((V = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : V.id) || "", S = !v, M = o(e.customPaintColor), y = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), D = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), z = e.brushSizes[D] ?? 10, L = d(), P = Array.from({ length: 8 }, (F, j) => e.customPaintHistory[j] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: y,
    alphaText: `${y}%`,
    historyEntries: P.map((F, j) => ({
      index: j,
      color: F ? { cssColor: r(F, 1) } : null
    })),
    sizeValue: z,
    sizeText: String(z),
    sizeFill: `${Math.max(0, Math.min(100, (z - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function gk({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function bk({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: o,
  params: u,
  notes: f,
  visibilityRows: d,
  uiSettings: b,
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
    visibilityRows: d,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function yk({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: o,
  anyLocked: u,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: g,
  isStickerHidden: v,
  canRestoreSelectedToInitial: S,
  iconSet: M
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (n.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    ];
  else if (r === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f }
    ], g(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const j = S(), $ = v(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: j ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !j
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: $ ? "Show" : "Hide",
        tip: $ ? "Show input image" : "Hide input image",
        icon: $ ? M.eye : M.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), g(t) || y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((j) => ({ value: j, label: j, active: d === j }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  const D = a.corners.map((j) => ({ x: Number(j == null ? void 0 : j.x), y: Number(j == null ? void 0 : j.y) })).filter((j) => Number.isFinite(j.x) && Number.isFinite(j.y));
  if (!D.length) return { visible: !1, left: 0, top: 0, items: [] };
  const z = D.map((j) => j.x), L = D.map((j) => j.y), P = Math.min(...z), V = Math.max(...z), T = Math.min(...L), F = Math.max(...L);
  return {
    visible: !0,
    left: (P + V) * 0.5,
    top: F + 18,
    items: y,
    anchor: { minX: P, maxX: V, minY: T, maxY: F }
  };
}
const vk = { class: "pano-floating-right" }, _k = ["data-settled"], xk = ["data-ready", "data-settled"], Sk = ["aria-label", "data-tip"], wk = {
  key: 1,
  class: "pano-camera-preview-label"
}, kk = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae(st, null, [
      X("div", vk, [
        (Me(!0), Ae(st, null, zt(e.buttons, (r) => (Me(), Oi(en, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Pi(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: dt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Gt({
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
          e.previewToggle.visible ? (Me(), Ae("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            je(Qt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Sk)) : Lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Ae("div", wk, ft(e.preview.label || "Preview unavailable"), 1)) : Lt("", !0)
        ], 14, xk)
      ], 8, _k), [
        [Mo, e.preview.visible]
      ])
    ], 64));
  }
}, Mk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Nk = ["y2", "transform"], Pk = ["transform"], Ak = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, o) => o * 15), r = kt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, o) => Pi((Me(), Ae("div", {
      class: dt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Ae("svg", Mk, [
        o[1] || (o[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Ae(st, null, zt(mt(n), (u) => (Me(), Ae("line", {
          key: u,
          class: dt(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, Nk))), 128)),
        X("g", { transform: r.value }, [...o[0] || (o[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Pk),
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
}, Ck = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: dt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      je(cg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      je(en, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      je(Ak, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Ik = ["aria-label"], Tk = { class: "pano-canvas-confirm-title" }, Ek = { class: "pano-canvas-confirm-text" }, Dk = { class: "pano-canvas-confirm-actions" }, Ok = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Fk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ bn(null), r = /* @__PURE__ */ bn(null);
    let a = null;
    function o() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(v) {
      const S = r.value;
      if (!S) return;
      const M = S.querySelector(`[data-action='${v}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var D;
      const v = r.value;
      if (!v) return;
      const S = v.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const y = o()[0] || v;
      (D = y == null ? void 0 : y.focus) == null || D.call(y);
    }
    function d() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(v) {
      var L;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const S = o(), M = r.value;
      if (!S.length) {
        v.preventDefault(), (L = M == null ? void 0 : M.focus) == null || L.call(M);
        return;
      }
      const y = S[0], D = S[S.length - 1], z = document.activeElement;
      if (v.shiftKey) {
        (z === y || z === M || !(M != null && M.contains(z))) && (v.preventDefault(), D.focus());
        return;
      }
      (z === D || !(M != null && M.contains(z))) && (v.preventDefault(), y.focus());
    }
    function g(v) {
      v.target === n.value && u("confirm-cancel");
    }
    return Ai(() => t.model.visible, (v, S) => {
      if (v) {
        a = document.activeElement, Tc(() => {
          f();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), al(() => {
      d();
    }), (v, S) => e.model.visible === !0 ? (Me(), Ae("div", {
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
        onKeydown: b
      }, [
        X("div", Tk, ft(e.model.title), 1),
        X("div", Ek, ft(e.model.text), 1),
        X("div", Dk, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", Ok, ft(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Ik)
    ], 512)) : Lt("", !0);
  }
}, Rk = ["data-paint-pane"], Lk = ["hidden"], Vk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], zk = ["aria-pressed", "disabled"], $k = ["hidden"], jk = { class: "pano-paint-color-pop-head" }, Hk = { class: "pano-paint-color-field" }, Uk = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Gk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Bk = { class: "pano-paint-color-field" }, Kk = { class: "pano-paint-alpha-wrap" }, Wk = ["value"], Yk = { "data-paint-alpha-value": "" }, qk = ["hidden"], Xk = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Jk = ["data-paint-history-index", "aria-label", "disabled"], Zk = ["data-paint-footer"], Qk = ["data-paint-group"], eM = ["hidden"], tM = ["value", "disabled"], nM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, rM = ["hidden"], iM = {
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
      class: dt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Ae(st, null, zt(e.panes, (o) => {
        var u;
        return Me(), Ae("div", {
          key: o.key,
          class: dt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Me(), Ae("div", {
            key: 0,
            class: dt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Ae(st, null, zt(e.paintSwatches, (f) => (Me(), Ae("button", {
              key: f.id,
              class: dt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Gt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Vk))), 128)),
            X("button", {
              class: dt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Gt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, zk),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Gt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", jk, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Gt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", Hk, [
                X("div", Uk, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Gt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", Gk, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Gt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", Bk, [
                a[1] || (a[1] = X("span", null, "Opacity", -1)),
                X("div", Kk, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Wk),
                  X("span", Yk, ft(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", Xk, [
                  (Me(!0), Ae(st, null, zt(e.state.historyEntries || [], (f) => (Me(), Ae("button", {
                    key: f.index,
                    class: dt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Gt(n(f.color))
                  }, null, 14, Jk))), 128))
                ])
              ], 8, qk)
            ], 12, $k)
          ], 10, Lk)) : Lt("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Me(!0), Ae(st, null, zt(o.tools, (f) => {
                var d;
                return Me(), Oi(en, {
                  key: `${o.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[o.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Qk),
            X("div", {
              class: dt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: Gt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, tM),
              X("span", nM, ft(e.state.sizeText || "10"), 1)
            ], 10, eM),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[o.key]) ?? !o.clearHidden)
            }, [
              je(en, {
                icon: mt(Te).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, rM)
          ], 8, Zk)
        ], 10, Rk);
      }), 128))
    ], 2));
  }
}, aM = {
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
    return t({ getRefs: o }), (u, f) => (Me(), Ae(st, null, [
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
}, oM = {
  key: 0,
  class: "pano-cutout-menu"
}, sM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, lM = ["data-aspect"], uM = ["data-action", "aria-label", "data-tip", "disabled"], cM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Gt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Ae(st, null, zt(e.model.items || [], (r) => (Me(), Ae(st, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Me(), Ae("div", oM, [
          X("button", sM, [
            je(Qt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: dt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Ae(st, null, zt(r.choices || [], (a) => (Me(), Ae("button", {
              key: a.value,
              class: dt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ft(a.label), 11, lM))), 128))
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
          je(Qt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, uM))
      ], 64))), 128))
    ], 4));
  }
}, fM = {
  class: "pano-side",
  "data-side": ""
}, dM = { class: "pano-side-head" }, hM = { class: "pano-side-title" }, pM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, mM = {
  key: 0,
  class: "pano-side-scroll"
}, gM = { class: "pano-inspector" }, bM = { class: "pano-ui-row pano-coverage-row" }, yM = ["data-selected"], vM = ["aria-pressed", "disabled"], _M = ["aria-pressed", "disabled"], xM = {
  key: 0,
  class: "pano-section-title"
}, SM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, wM = {
  class: "pano-picker",
  "data-picker": "selection"
}, kM = ["disabled"], MM = { class: "pano-picker-label" }, NM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, PM = ["hidden"], AM = ["data-selection-id"], CM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, IM = {
  key: 2,
  class: "pano-state-actions"
}, TM = ["disabled"], EM = ["data-key"], DM = ["min", "max", "step", "value", "disabled", "data-param-key"], OM = ["min", "max", "step", "value", "disabled", "data-param-key"], FM = { class: "pano-visibility-section" }, RM = { class: "pano-visibility-stack" }, LM = ["data-visibility-row"], VM = { class: "pano-visibility-name" }, zM = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, $M = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], jM = ["open"], HM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, UM = { class: "pano-ui-settings-body" }, GM = { class: "pano-ui-row" }, BM = ["data-selected"], KM = ["aria-pressed"], WM = ["aria-pressed"], YM = { class: "pano-ui-row" }, qM = ["data-selected"], XM = ["aria-pressed"], JM = ["aria-pressed"], ZM = { class: "pano-ui-row" }, QM = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, eN = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, tN = { class: "pano-picker-label" }, nN = ["hidden"], rN = ["data-quality"], iN = {
  key: 1,
  class: "pano-side-footer"
}, aN = ["data-action"], oN = {
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
      var f, d, b, g, v;
      return Me(), Ae("div", fM, [
        X("div", dM, [
          X("div", hM, [
            X("span", pM, [
              je(Qt, {
                icon: mt(Te).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, ft(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = X("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Ae("div", mM, [
          X("div", gM, [
            u[12] || (u[12] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", bM, [
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
                  "aria-pressed": ((d = e.model.coverage) == null ? void 0 : d.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, vM),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 180 ? "true" : "false",
                  disabled: ((v = e.model.coverage) == null ? void 0 : v.disabled) === !0
                }, "180", 8, _M)
              ], 8, yM)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Ae("div", xM, [...u[2] || (u[2] = [
              X("span", null, "Transform", -1)
            ])])) : Lt("", !0),
            e.model.selectionPicker ? (Me(), Ae("div", SM, [
              X("label", null, ft(e.model.selectionPicker.label), 1),
              X("div", wM, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", MM, [
                    e.model.selectionPicker.currentIcon ? (Me(), Ae("span", NM, [
                      je(Qt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    X("span", null, ft(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, kM),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Ae(st, null, zt(e.model.selectionPicker.items || [], (S) => (Me(), Ae("button", {
                    key: S.id,
                    type: "button",
                    class: dt(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Ae("span", CM, [
                      je(Qt, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    X("span", null, ft(S.label), 1)
                  ], 10, AM))), 128))
                ], 8, PM)
              ])
            ])) : Lt("", !0),
            e.model.copyStateButton ? (Me(), Ae("div", IM, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                je(Qt, {
                  icon: mt(Te).copy
                }, null, 8, ["icon"]),
                X("span", null, ft(e.model.copyStateButton.label), 1)
              ], 8, TM)
            ])) : Lt("", !0),
            X("div", {
              class: dt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Ae(st, { key: 0 }, zt(e.model.notes, (S) => (Me(), Ae("div", {
                key: S,
                class: "pano-param-note"
              }, ft(S), 1))), 128)) : (Me(!0), Ae(st, { key: 1 }, zt(e.model.params || [], (S) => (Me(), Ae("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                X("label", null, ft(S.label), 1),
                X("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: Gt(r(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, DM),
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
                }, null, 8, OM)
              ], 8, EM))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Ae(st, { key: 3 }, [
              u[5] || (u[5] = X("div", { class: "pano-divider" }, null, -1)),
              X("div", FM, [
                u[4] || (u[4] = X("div", { class: "pano-section-title" }, [
                  X("span", null, "Layers")
                ], -1)),
                X("div", RM, [
                  (Me(!0), Ae(st, null, zt(e.model.visibilityRows, (S) => (Me(), Ae("div", {
                    key: S.key,
                    class: dt(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    X("span", VM, [
                      X("span", zM, [
                        je(Qt, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      X("span", null, ft(S.label), 1)
                    ]),
                    X("button", {
                      class: dt(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      je(Qt, {
                        icon: S.visible === !0 ? mt(Te).eye : mt(Te).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, $M)
                  ], 10, LM))), 128))
                ])
              ])
            ], 64)) : Lt("", !0),
            e.model.uiSettings ? (Me(), Ae("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                u[6] || (u[6] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", HM, [
                  je(Qt, {
                    icon: mt(Te).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", UM, [
                X("div", GM, [
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
                    }, "Normal", 8, KM),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, WM)
                  ], 8, BM)
                ]),
                X("div", YM, [
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
                    }, "Normal", 8, XM),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, JM)
                  ], 8, qM)
                ]),
                X("div", ZM, [
                  u[10] || (u[10] = X("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  X("div", QM, [
                    X("button", eN, [
                      X("span", tN, ft(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    X("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Ae(st, null, zt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Ae("button", {
                        key: S.value,
                        type: "button",
                        class: dt(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ft(S.label), 11, rN))), 128))
                    ], 8, nN)
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
            ], 8, jM)) : Lt("", !0)
          ])
        ])) : Lt("", !0),
        (e.model.footerButtons || []).length ? (Me(), Ae("div", iN, [
          (Me(!0), Ae(st, null, zt(e.model.footerButtons, (S) => (Me(), Ae("button", {
            key: S.action,
            class: dt(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ft(S.label), 11, aN))), 128))
        ])) : Lt("", !0)
      ]);
    };
  }
}, sN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", {
      class: dt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Gt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ft(e.model.text || ""), 7));
  }
}, lN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, uN = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Ae("div", lN, [
      (Me(!0), Ae(st, null, zt(e.buttons, (r) => Pi((Me(), Oi(en, {
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
}, cN = ["data-video-ready"], fN = { class: "pano-video-transport-shell" }, dN = { class: "pano-video-controls-left" }, hN = { class: "pano-video-filmstrip" }, pN = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, mN = ["src", "onLoad"], gN = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, bN = ["max", "value", "disabled"], yN = { class: "pano-video-controls-right" }, vN = ["data-has-audio"], _N = { class: "pano-video-volume-pop" }, xN = ["value", "disabled"], SN = {
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
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Te.pause : Te.play;
    }), o = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Te.loop_off : Te.loop;
    }), d = kt(() => {
      var F, j;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = kt(() => {
      var F, j, $;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Te.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? Te.volume_muted : Te.volume2;
    }), g = kt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), v = kt(() => ({ left: `${g.value}%` })), S = kt(() => {
      var se, ie;
      const F = (se = t.state) == null ? void 0 : se.volumePct, j = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, $ = Number(F ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, $))}%`
      };
    }), M = kt(() => {
      var $, se;
      const j = [
        String((($ = t.state) == null ? void 0 : $.currentTimeLabel) || "0:00"),
        String(((se = t.state) == null ? void 0 : se.durationLabel) || "0:00")
      ].reduce((ie, I) => Math.max(ie, I.length), 4);
      return `${Math.max(4, j)}ch`;
    }), y = kt(() => ({ "--pano-video-time-ch": M.value })), D = kt(() => {
      var $, se;
      const F = Array.isArray(($ = t.state) == null ? void 0 : $.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const j = Math.max(7, Number(((se = t.state) == null ? void 0 : se.thumbnailCount) || 9));
      return Array.from({ length: j }, (ie, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), z = /* @__PURE__ */ bn(/* @__PURE__ */ new Set()), L = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => z.value.has(L(F)), V = (F) => {
      const j = new Set(z.value);
      j.add(L(F)), z.value = j;
    };
    Ai(D, (F) => {
      const j = new Set(F.map(L)), $ = /* @__PURE__ */ new Set();
      for (const se of z.value)
        j.has(se) && $.add(se);
      z.value = $;
    }, { immediate: !0 });
    const T = kt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, j) => (Me(), Ae("div", {
      class: dt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Gt(T.value)
    }, [
      j[1] || (j[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", fN, [
        X("div", dN, [
          je(en, {
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
            style: Gt(y.value)
          }, ft(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", hN, [
          X("div", pN, [
            (Me(!0), Ae(st, null, zt(D.value, ($) => (Me(), Ae("div", {
              key: L($),
              class: dt(["pano-video-thumb", {
                "is-placeholder": !$.src,
                "is-loaded": $.src && P($)
              }])
            }, [
              $.src ? (Me(), Ae("img", {
                key: 0,
                src: $.src,
                alt: "",
                draggable: "false",
                onLoad: (se) => V($)
              }, null, 40, mN)) : (Me(), Ae("span", gN))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Gt(v.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
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
          }, null, 8, bN)
        ]),
        X("div", yN, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Gt(y.value)
          }, ft(e.state.durationLabel || "0:00"), 5),
          je(en, {
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
            X("div", _N, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Gt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, xN)
            ]),
            je(en, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, vN)
        ])
      ])
    ], 14, cN));
  }
}, wN = { class: "pano-floating-top" }, kN = ["data-selected", "data-view-count"], MN = ["data-view", "aria-pressed", "aria-label", "disabled"], NN = { class: "label" }, PN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Me(), Ae("div", wN, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Ae(st, null, zt(e.buttons, (a) => Pi((Me(), Ae("button", {
            key: a.key,
            class: dt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            je(Qt, {
              icon: a.icon
            }, null, 8, ["icon"]),
            X("span", NN, ft(a.label), 1)
          ], 10, MN)), [
            [Mo, a.visible !== !1]
          ])), 128))
        ], 8, kN)
      ]);
    };
  }
};
function Hg(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Te.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Te.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Te.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Te.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Te.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Te.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Te.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Te.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Te.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Te.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Te.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Te.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Te.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Te.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Te.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Te.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Te.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Te.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Te.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Te.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Te.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Te.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Te.lasso_tool }
        ]
      }
    ]
  };
}
const AN = ["aria-label"], CN = { class: "pano-stage-wrap" }, IN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, TN = {
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
    const d = /* @__PURE__ */ bn(null), b = /* @__PURE__ */ bn(null), g = /* @__PURE__ */ bn(null);
    function v() {
      var I, Y;
      return ((Y = (I = g.value) == null ? void 0 : I.getRefs) == null ? void 0 : Y.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(I) {
      var Y, ee;
      return ((ee = (Y = b.value) == null ? void 0 : Y.open) == null ? void 0 : ee.call(Y, I)) === !0;
    }
    function M(I) {
      a("image-file-selected", I);
    }
    function y(I) {
      a("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: S });
    const D = kt(() => r.readOnly === !0), z = kt(() => r.shellPreset || Hg(r.type)), L = kt(() => {
      var Y, ee, J;
      const I = String((((Y = r.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (ee = r.uiState) == null ? void 0 : ee.stageStatusDetail : (J = r.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Re-run the node to refresh it." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = kt(() => {
      var Y;
      const I = Array.isArray((Y = z.value) == null ? void 0 : Y.floatingButtons) ? z.value.floatingButtons.slice() : [];
      return D.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Te.fullscreen
      }), I;
    });
    function V() {
      const I = d.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function T() {
      var ee;
      const Y = V()[0] || d.value;
      (ee = Y == null ? void 0 : Y.focus) == null || ee.call(Y);
    }
    function F() {
      var I;
      f != null && f.isConnected && ((I = f.focus) == null || I.call(f)), f = null;
    }
    function j(I) {
      var Y, ee, J, de;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const fe = V();
          if (!fe.length) {
            I.preventDefault(), (ee = (Y = d.value) == null ? void 0 : Y.focus) == null || ee.call(Y);
            return;
          }
          const ke = fe[0], A = fe[fe.length - 1], we = document.activeElement;
          if (I.shiftKey) {
            (we === ke || we === d.value || !((J = d.value) != null && J.contains(we))) && (I.preventDefault(), A.focus());
            return;
          }
          (we === A || !((de = d.value) != null && de.contains(we))) && (I.preventDefault(), ke.focus());
          return;
        }
        I.key === "Escape" && a("close");
      }
    }
    function $() {
      u || (o = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function se() {
      u && (document.body.style.overflow = o, u = !1);
    }
    function ie(I) {
      document.removeEventListener("keydown", j), I ? (f || (f = document.activeElement), $(), document.addEventListener("keydown", j), Tc(() => {
        T();
      })) : (se(), F());
    }
    return Oc(() => {
      ie(r.open);
    }), al(() => {
      se(), document.removeEventListener("keydown", j), F();
    }), Ai(() => r.open, (I) => {
      ie(I);
    }), (I, Y) => e.open ? (Me(), Ae("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: Y[0] || (Y[0] = Kn((ee) => a("close"), ["self"]))
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
        X("div", CN, [
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
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Ae("div", IN, ft(L.value), 1)) : Lt("", !0),
          Y[4] || (Y[4] = X("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          je(aM, {
            ref_key: "paintOverlaysRef",
            ref: g
          }, null, 512),
          je(fg, {
            ref_key: "imageFilePickerRef",
            ref: b,
            onFileSelected: M,
            onFileCancelled: y
          }, null, 512),
          D.value ? Lt("", !0) : (Me(), Ae(st, { key: 1 }, [
            je(uN, {
              buttons: e.uiState.toolButtons || z.value.toolButtons || []
            }, null, 8, ["buttons"]),
            je(Ck, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            je(iM, {
              "paint-swatches": e.paintSwatches,
              panes: z.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          je(SN, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          je(PN, {
            buttons: e.uiState.viewButtons || z.value.viewButtons || []
          }, null, 8, ["buttons"]),
          je(kk, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          je(cM, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          je(sN, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          je(Fk, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Lt("", !0) : (Me(), Oi(oN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, AN)
    ])) : Lt("", !0);
  }
}, vr = "loading", Aa = "ready", Sr = "failed";
function Ug(e, t = "") {
  return e && (e.__panoLoadState = vr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Gg(e, t = "") {
  return e && (e.__panoLoadState = Aa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Bg(e, t = "") {
  return e && (e.__panoLoadState = Sr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function bc(e, t) {
  return e ? e.__panoLoadState === Sr ? Sr : typeof t == "function" && t(e) ? Aa : vr : Aa;
}
function yc(e) {
  return bc(e) === Sr;
}
function EN({ presented: e, background: t = Aa, stickers: n = [] } = {}) {
  if (!e) return { status: vr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], a = t === vr, o = r.includes(vr);
  if (a && o) return { status: vr, detail: "mixed" };
  if (a) return { status: vr, detail: "background" };
  if (o) return { status: vr, detail: "stickers" };
  const u = t === Sr, f = r.includes(Sr);
  return u && f ? { status: Sr, detail: "mixed" } : u ? { status: Sr, detail: "background" } : f ? { status: Sr, detail: "stickers" } : { status: Aa, detail: "" };
}
function ra(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const a = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function vp(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function DN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function _p(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function ON(e, t, n = null) {
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
  return !r && n != null && (r = DN(e == null ? void 0 : e.graph, n)), r;
}
function FN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function RN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function LN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function VN({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const a = (T) => {
    if (!T) return "";
    if (typeof T == "string") return String(T || "").trim();
    if (Array.isArray(T)) {
      if (T.length === 0) return "";
      if (T.length === 1) return a(T[0]);
      const F = String(T[0] || "").trim();
      if (F)
        return ra(t, {
          filename: F,
          subfolder: String(T[1] || "").trim(),
          type: String(T[2] || "output").trim() || "output"
        });
      for (const j of T) {
        const $ = a(j);
        if ($) return $;
      }
      return "";
    }
    return typeof (T == null ? void 0 : T.src) == "string" && T.src ? T.src : typeof (T == null ? void 0 : T.url) == "string" && T.url ? T.url : ra(t, T);
  }, o = (T) => {
    if (!T || typeof T != "object") return "";
    const F = String(T.type || "").trim().toLowerCase();
    if (F === "dataurl") return String(T.value || "");
    if (F !== "comfy_image") return "";
    const j = String(T.filename || "").trim();
    return j ? ra(t, {
      filename: j,
      subfolder: String(T.subfolder || ""),
      type: String(T.storage || "input")
    }) : "";
  }, u = (T) => {
    const F = e == null ? void 0 : e.nodeOutputs;
    if (!F || T == null) return null;
    const j = String(T);
    return F instanceof Map ? F.get(T) || F.get(j) || F.get(Number(j)) || null : F[T] || F[j] || null;
  }, f = (T, F) => {
    var $;
    const j = u(T == null ? void 0 : T.id);
    return Array.isArray(($ = j == null ? void 0 : j.ui) == null ? void 0 : $[F]) ? j.ui[F] : Array.isArray(j == null ? void 0 : j[F]) ? j[F] : [];
  }, d = (T, F) => {
    const j = u(T == null ? void 0 : T.id);
    return j != null && j.ui && Object.prototype.hasOwnProperty.call(j.ui, F) ? j.ui[F] : j && Object.prototype.hasOwnProperty.call(j, F) ? j[F] : null;
  }, b = (T, F) => {
    const j = d(T, "pano_sticker_input_state_hash"), $ = Array.isArray(j) ? j[0] : j;
    return String($ ?? "").trim() || LN(F);
  }, g = (T) => {
    const F = [], j = /* @__PURE__ */ new Set();
    for (const $ of T || []) {
      const se = a($);
      !se || j.has(se) || (j.add(se), F.push(se));
    }
    return F;
  }, v = (T, F) => {
    var se;
    const j = [];
    Array.isArray(T == null ? void 0 : T.images) && T.images.length && j.push(T.images), Array.isArray((se = T == null ? void 0 : T.ui) == null ? void 0 : se.images) && T.ui.images.length && j.push(T.ui.images);
    const $ = [];
    for (const ie of j)
      F >= 0 && F < ie.length && $.push(ie[F]), $.push(...ie);
    return $;
  }, S = (T, F) => {
    var De;
    const j = String(F || "").trim();
    if (!j) return { src: "", sourceType: "", inputName: "" };
    const $ = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs : [], se = $.findIndex((Pe) => String((Pe == null ? void 0 : Pe.name) || "") === j);
    if (se < 0) return { src: "", sourceType: "", inputName: j };
    const ie = $[se], I = ie == null ? void 0 : ie.link;
    if (I == null) return { src: "", sourceType: "", inputName: j };
    const { originId: Y, originSlot: ee } = _p(vp(T == null ? void 0 : T.graph, I));
    if (Y == null) return { src: "", sourceType: "", inputName: j };
    const J = ON(T, se, Y);
    if (!J) return { src: "", sourceType: "", inputName: j };
    const de = Number(ee || 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Pe = [];
      de >= 0 && de < fe.length && Pe.push(fe[de]), Pe.push(...fe);
      const U = g(Pe);
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "appNodeImageUrls", inputName: j };
    }
    const ke = g(v(u((J == null ? void 0 : J.id) ?? Y), de));
    if (ke.length)
      return { src: ke[0], srcCandidates: ke, sourceType: "nodeOutputs", inputName: j };
    const A = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (A.length) {
      const Pe = [];
      de >= 0 && de < A.length && Pe.push(A[de]), Pe.push(...A);
      const U = g(Pe);
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "nodeImgs", inputName: j };
    }
    const we = (De = J == null ? void 0 : J.widgets) == null ? void 0 : De.find((Pe) => String((Pe == null ? void 0 : Pe.name) || "").toLowerCase() === "image");
    if (we) {
      let Pe = a(we.value);
      if (Pe && !Pe.includes("/") && !Pe.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Pe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Pe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Pe)}&type=input&subfolder=`), Pe) return { src: Pe, sourceType: "widget", inputName: j };
    }
    return { src: "", sourceType: "", inputName: j };
  }, M = (T, F = []) => {
    const j = Array.isArray(F) ? F : [F];
    for (const $ of j) {
      const se = S(T, $);
      if (String((se == null ? void 0 : se.src) || "").trim()) return se;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, y = (T) => {
    const F = String(T || "").trim();
    if (!F) return [];
    if (FN(F)) return [F];
    const { filename: j, subfolder: $ } = RN(F);
    return j ? g([
      ra(t, { filename: j, subfolder: $, type: "temp" }),
      ra(t, { filename: j, subfolder: $, type: "output" }),
      ra(t, { filename: j, subfolder: $, type: "input" }),
      F
    ]) : [F];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (T) => {
      var F, j;
      try {
        (j = (F = T == null ? void 0 : T.__panoLinkedInputImageCache) == null ? void 0 : F.forEach) == null || j.call(F, ($, se, ie) => {
          var I;
          $ != null && $.img && ((I = r == null ? void 0 : r.isImageLoadFailed) != null && I.call(r, $.img)) && ie.delete(se);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (T, F) => {
      var j;
      (j = T == null ? void 0 : T.delete) == null || j.call(T, `__ui__${String(F || "")}`);
    },
    linkedValue: (T, F) => {
      var ie, I, Y, ee;
      const j = String(F || ""), $ = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs.find((J) => String((J == null ? void 0 : J.name) || "") === j) : null;
      if (($ == null ? void 0 : $.link) != null) {
        const { originId: J, originSlot: de } = _p(vp(T == null ? void 0 : T.graph, $.link)), fe = u(J), ke = [
          fe == null ? void 0 : fe.output,
          fe == null ? void 0 : fe.result,
          (ie = fe == null ? void 0 : fe.data) == null ? void 0 : ie.output,
          (I = fe == null ? void 0 : fe.data) == null ? void 0 : I.result,
          (Y = fe == null ? void 0 : fe.ui) == null ? void 0 : Y.output,
          (ee = fe == null ? void 0 : fe.ui) == null ? void 0 : ee.result
        ];
        for (const A of ke) {
          if (!Array.isArray(A)) continue;
          const we = A[Number(de || 0)];
          if (typeof we == "string" && we.trim()) return we;
        }
      }
      const se = Array.isArray(T == null ? void 0 : T.widgets) ? T.widgets.find((J) => String((J == null ? void 0 : J.name) || "") === j) : null;
      return String((se == null ? void 0 : se.value) || "");
    },
    loadPreferredExactLinkedImage: (T, F = [], j = null, $ = "") => {
      var He;
      const se = Array.isArray(F) ? F : [F], ie = M(T, se), Y = (Array.isArray(ie == null ? void 0 : ie.srcCandidates) && ie.srcCandidates.length ? ie.srcCandidates : [ie == null ? void 0 : ie.src]).map((gt) => String(gt || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const ee = g(Y.flatMap((gt) => y(gt)));
      if (!ee.length) return null;
      T.__panoLinkedInputImageCache || (T.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String($ || se.join("|") || "image_exact"), de = Y.join(`
`), fe = T.__panoLinkedInputImageCache.get(J);
      if (fe && fe.srcRaw === de && fe.img) return fe.img;
      const ke = n || globalThis.Image;
      if (typeof ke != "function") return null;
      const A = new ke();
      (He = r == null ? void 0 : r.markImageLoading) == null || He.call(r, A, de);
      const we = { srcRaw: de, resolvedSrc: "", img: A };
      T.__panoLinkedInputImageCache.set(J, we);
      let De = -1;
      const Pe = (gt) => {
        var nt, qe, Ue;
        gt === "ready" ? (nt = r == null ? void 0 : r.markImageReady) == null || nt.call(r, A, de) : (qe = r == null ? void 0 : r.markImageFailed) == null || qe.call(r, A, de), j == null || j(A), (Ue = T.setDirtyCanvas) == null || Ue.call(T, !0, !0);
      }, U = () => {
        if (De += 1, De >= ee.length) {
          Pe("failed");
          return;
        }
        we.resolvedSrc = ee[De], A.src = we.resolvedSrc;
      };
      return A.onload = () => Pe("ready"), A.onerror = () => {
        if (De + 1 < ee.length) {
          U();
          return;
        }
        Pe("failed");
      }, U(), A;
    },
    output: u,
    resolvePreferredExactLinkedSource: M,
    source: a,
    uiImage: (T, F, j, $ = null) => {
      var de, fe, ke;
      const se = f(T, F)[0] || null, ie = a(se);
      if (!ie) return null;
      const I = `__ui__${F}`, Y = (de = j == null ? void 0 : j.get) == null ? void 0 : de.call(j, I);
      if (Y && Y.__panoSrc === ie) return Y;
      const ee = n || globalThis.Image;
      if (typeof ee != "function") return null;
      const J = new ee();
      return J.__panoSrc = ie, (fe = r == null ? void 0 : r.markImageLoading) == null || fe.call(r, J, ie), J.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, J, ie), $ == null || $(J);
      }, J.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, J, ie), $ == null || $(J);
      }, J.src = ie, (ke = j == null ? void 0 : j.set) == null || ke.call(j, I, J), J;
    },
    uiList: f,
    uiValue: d
  };
}
const zN = "state_json", rs = "sticker_image_1", $N = "external_image", is = "pano_sticker_input_images", jN = !0, Ns = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], jn = Math.PI / 180, ki = 180 / Math.PI, Eu = 1, HN = "rgb(255, 221, 87)", UN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, GN = 64, xp = 40, Du = 16, BN = 0.45, Sp = 180, KN = 160, Xs = 24, WN = 4, YN = 4, as = /* @__PURE__ */ new Map(), wp = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new Map(), qN = 12, or = VN({
  app: sr,
  api: mn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: yc,
    markImageFailed: Bg,
    markImageLoading: Ug,
    markImageReady: Gg
  }
}), XN = or.assetSource, JN = or.source, Ou = or.uiImage, ZN = or.invalidateUiImage, QN = or.resolvePreferredExactLinkedSource, Fu = or.loadPreferredExactLinkedImage;
function os(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function eP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function tP(e, t, n) {
  const r = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function nP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = si.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (si.delete(t), si.set(t, n), n);
}
function rP(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (si.delete(n), si.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); si.size > qN; ) {
      const a = si.keys().next().value;
      if (!a) break;
      si.delete(a);
    }
}
function iP(e) {
  return e * e * e;
}
function gl(e, t, n) {
  return { x: e, y: t, z: n };
}
function ss(e, t) {
  return gl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ls(e, t) {
  return gl(e.x * t, e.y * t, e.z * t);
}
function Lr(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function kp(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return gl(e.x / t, e.y / t, e.z / t);
}
function us(e) {
  return {
    yaw: Ut(Math.atan2(e.x, e.z) * ki),
    pitch: W(Math.asin(W(e.y, -1, 1)) * ki, -90, 90)
  };
}
function Vr(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const o = t[r].x, u = t[r].y, f = t[a].x, d = t[a].y;
    u > e.y != d > e.y && e.x < (f - o) * (e.y - u) / (d - u || 1e-6) + o && (n = !n);
  }
  return n;
}
function ii(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Ru(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return ii(e, t);
  const d = W((o * r + u * a) / f, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + a * d, v = Number(e.x || 0) - b, S = Number(e.y || 0) - g;
  return v * v + S * S;
}
function Jn(e, t, n) {
  return e + (t - e) * n;
}
function pr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function aP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let cs = { fillStyle: "", url: "" };
function oP(e, t, n) {
  if (cs.url && cs.fillStyle === String(e || ""))
    return cs.url;
  const r = aP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Xs}" height="${Xs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return cs = { fillStyle: String(e || ""), url: r }, r;
}
function Ps(e, t, n = 0.015) {
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
function fn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function sP(e) {
  return Ns.some((t) => Ps(e, t.color));
}
function Lu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), o = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: o, g: o, b: o };
  const u = Math.floor(r * 6), f = r * 6 - u, d = o * (1 - a), b = o * (1 - f * a), g = o * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: o, g, b: d };
    case 1:
      return { r: b, g: o, b: d };
    case 2:
      return { r: d, g: o, b: g };
    case 3:
      return { r: d, g: b, b: o };
    case 4:
      return { r: g, g: d, b: o };
    default:
      return { r: o, g: d, b };
  }
}
function Vu(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), o = Math.min(t, n, r), u = a - o;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const d = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: d, v: a };
}
function ia(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Kg = "pano_suite.ui_settings.v1", Wg = "pano_suite.node_grid_visibility.v1";
let ua = null, mr = null;
function As(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function lP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Kg)) || "").trim();
    if (!t) return ua ? As(ua) : null;
    const n = JSON.parse(t), r = As(n);
    return ua = r, r;
  } catch {
    return ua ? As(ua) : null;
  }
}
function uP(e) {
  var n;
  const t = As(e);
  ua = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Kg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Yg() {
  var e;
  if (mr && typeof mr == "object")
    return mr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Wg)) || "").trim();
    if (!t)
      return mr = {}, mr;
    const n = JSON.parse(t);
    return mr = n && typeof n == "object" ? n : {}, mr;
  } catch {
    return mr = {}, mr;
  }
}
function cP(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Yg()[n];
  return typeof a == "boolean" ? a : !!t;
}
function fP(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Yg();
  r[n] = !!t, mr = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Wg, JSON.stringify(r));
  } catch {
  }
}
function dP(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Mp(e) {
  const { paintCount: t, maskCount: n } = dP(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function aa(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function fs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function hP(e, t) {
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
function ds(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function pP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function mP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function gP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function bP(e, t, n = {}) {
  var Id;
  await wg(e, { tolerateOperationFailure: !0 }), or.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, u = hP(e, t);
  await af();
  const f = fs(e, "output_preset"), d = fs(e, "coverage"), b = fs(e, "bg_color"), g = fs(e, zN), v = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Fu(
      e,
      i,
      () => be(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = v();
    return gP(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return mP(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : pP(s, i);
  }, y = Jc(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: dn(d == null ? void 0 : d.value),
    sharedUiSettings: lP(),
    active: Jm(e)
  });
  e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = 0, t === "cutout" && (y.shots = Array.isArray(y.shots) ? y.shots.slice(0, 1) : [], y.shots.length || (y.active.selected_shot_id = null));
  const D = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(y.shots) ? y.shots : [], s = String(((l = y == null ? void 0 : y.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  })() : null, z = D ? Uf(D, !1) : { width: 220, height: 132 }, L = Hg(t), P = /* @__PURE__ */ Ca({
    stageStatus: vr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (L.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (L.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(L.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Te.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Te.aspect,
      rotateIcon: Te.rotate_90,
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
      icon: Te.fullscreen,
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
      customColorCss: pr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: pr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: z.width,
      height: z.height,
      label: D ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const T = ({ intent: i, file: s } = {}) => {
    if (kr(s)) {
      if (i === "add") {
        Qf(s);
        return;
      }
      i === "replace" && Gb(s);
    }
  }, F = ({ intent: i } = {}) => {
  }, j = Vc(TN, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: L,
    paintSwatches: Ns.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: pr(i.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Zi();
    },
    onImageFileSelected: T,
    onImageFileCancelled: F
  });
  let $ = null;
  try {
    $ = j.mount(V);
  } catch (i) {
    try {
      j.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const se = V.querySelector(".pano-modal-overlay"), ie = V.querySelector(".pano-modal"), I = ie == null ? void 0 : ie.querySelector("[data-stage-overlay]"), Y = ie == null ? void 0 : ie.querySelector("[data-stage-background]"), ee = ie == null ? void 0 : ie.querySelector(".pano-stage-wrap"), J = ((Id = $ == null ? void 0 : $.getPaintOverlayRefs) == null ? void 0 : Id.call($)) || {}, de = J.cursor || null, fe = J.sizePreview || null, ke = J.sizeSample || null;
  if (!se || !ie || !I || !Y || !ee || !de || !fe || !ke)
    throw j.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = I.getContext("2d"), we = cl(), De = t === "cutout" ? hk({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Pe = ie.querySelector("[data-side]"), U = ie.querySelector("[data-video-element]"), He = ie.querySelector(".pano-floating-right"), gt = ie.querySelector(".pano-floating-top"), nt = ie.querySelector("[data-tool-rail]"), qe = ie.querySelector("[data-frame-rail]"), Ue = ie.querySelector("[data-frame-roll-knob]"), qt = ie.querySelector("[data-paint-dock]"), An = ie.querySelector(".pano-video-transport"), vn = ie.querySelector("[data-selection-menu]"), tn = ie.querySelector("[data-tooltip]"), Cn = ie.querySelector("[data-camera-preview-host]"), R = ie.querySelector("[data-camera-preview-canvas]"), B = ie.querySelector("[data-paint-color-row]"), q = ie.querySelector("[data-paint-color-pop]"), ye = ie.querySelector("[data-paint-color-sv]"), he = ie.querySelector("[data-paint-color-sv-cursor]"), E = ie.querySelector("[data-paint-hue-strip]"), te = ie.querySelector("[data-paint-hue-handle]");
  let Z = 0, ce = 0;
  ee == null || ee.removeAttribute("data-stage-ready"), ee == null || ee.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", Y.style.opacity = "0", a && (Pe == null || Pe.remove(), ie.classList.add("pano-modal-readonly"));
  const ne = () => {
    if (!p.customPaintSessionStart) return;
    if (Ps(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (sP(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !Ps(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, Ne = (i = !1) => {
    !q || q.hidden || (i ? ne() : p.customPaintSessionStart = null, q.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, ve = () => {
    q && (q.hidden && (p.customPaintSessionStart = Hn(p.customPaintColor)), q.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  ie.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || gi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (ie.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Ne(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, rt(), be()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const Ie = t === "stickers" ? y.active.selected_sticker_id : y.active.selected_shot_id, Ce = JSON.stringify(Ch(y)), p = {
    mode: "pano",
    selectedId: Ie,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: dn(y.coverage),
    historyController: ok(80, { entries: [Ce], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Rr,
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
    showGrid: cP(e == null ? void 0 : e.id, !0),
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
    paintEngine: Xu(),
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
  };
  t === "stickers" && (p.selectedId = null, y.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Ve = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), at = document.createElement("canvas");
  at.__panoFrameIdx = 0;
  const re = {
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
  }, At = t === "stickers" || t === "cutout" ? jw({ onReady: () => be(), onFailed: () => be() }) : null, _n = () => !!At && !At.failed;
  let ot = { key: null, sceneState: null }, nn = null, H = null, xe = null;
  const Re = Number.parseFloat(
    getComputedStyle(ie).getPropertyValue("--pano-float-radius")
  ) || 10, Le = (i) => {
    const s = String(i || "default");
    I.style.cursor !== s && (I.style.cursor = s);
  }, Ge = {
    timer: 0,
    target: null
  }, $e = {
    active: !1,
    depth: 0
  }, pe = {
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
  }, rn = 4, Tt = 9, Ft = [];
  let Nt = 0;
  const Fi = () => {
    var k, C;
    const i = (k = ee == null ? void 0 : ee.getBoundingClientRect) == null ? void 0 : k.call(ee), s = (C = He == null ? void 0 : He.getBoundingClientRect) == null ? void 0 : C.call(He), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), c = s ? Math.max(0, Number(s.width || 0)) : 0, x = c > 0 ? c + 14 + 12 : 72, _ = Math.max(280, Math.floor(l - x * 2)), w = p.fullscreen ? Math.min(1200, _) : _;
    P.videoTransport.shellMaxWidthPx = w;
  }, ui = () => {
    Nt || (Nt = window.requestAnimationFrame(() => {
      Nt = 0, Fi();
    }));
  }, In = () => {
    const i = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, Ia = (i) => {
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
  }, Tn = typeof ResizeObserver < "u" ? new ResizeObserver(() => ui()) : null;
  Tn == null || Tn.observe(ee), He && (Tn == null || Tn.observe(He)), Ft.push(() => {
    var i;
    Nt && (window.cancelAnimationFrame(Nt), Nt = 0), (i = Tn == null ? void 0 : Tn.disconnect) == null || i.call(Tn);
  }), ui();
  const ci = () => {
    pe.thumbnailJobId += 1, pe.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Tt;
  }, xn = async (i, s, l) => {
    const c = String(i || "").trim();
    if (!c) {
      ci();
      return;
    }
    const h = nP(c);
    if (h) {
      pe.thumbnailSrc = c, P.videoTransport.thumbnails = h.thumbnails, P.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (pe.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++pe.thumbnailJobId;
    pe.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Tt;
    const x = document.createElement("video");
    if (x.preload = "auto", x.muted = !0, x.playsInline = !0, x.crossOrigin = "anonymous", !await new Promise((ue) => {
      let me = !1;
      const le = (Se) => {
        me || (me = !0, ue(Se));
      };
      x.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), x.addEventListener("canplay", () => le(!0), { once: !0 }), x.addEventListener("error", () => le(!1), { once: !0 }), x.src = c, x.load();
    }) || pe.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(x.videoWidth || 0)), k = Math.max(1, Number(x.videoHeight || 0));
    if (w < 1 || k < 1) return;
    const C = Math.max(0, Number(x.duration || s || 0)), N = document.createElement("canvas"), O = 46, G = Math.max(72, Math.round(w / k * O));
    N.width = G, N.height = O;
    const Q = N.getContext("2d");
    if (!Q) return;
    const K = [], oe = (ue) => new Promise((me) => {
      let le = !1;
      const Se = () => {
        le || (le = !0, me());
      };
      x.addEventListener("seeked", Se, { once: !0 }), x.addEventListener("error", Se, { once: !0 });
      try {
        x.currentTime = ue;
      } catch {
        Se();
      }
    });
    for (let ue = 0; ue < Tt; ue += 1) {
      if (pe.thumbnailJobId !== m) return;
      const me = ue / (Tt - 1), le = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * me)) : 0;
      if (await oe(le), pe.thumbnailJobId !== m) return;
      Q.clearRect(0, 0, G, O), Q.drawImage(x, 0, 0, G, O), K.push({
        id: `thumb-${ue}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: le,
        label: Pl(le)
      });
    }
    pe.thumbnailJobId === m && (P.videoTransport.thumbnails = K, P.videoTransport.thumbnailCount = K.length || Tt, rP(c, {
      thumbnails: K,
      thumbnailCount: K.length || Tt,
      duration: C,
      fps: l
    }));
  }, Yn = (i) => {
    const s = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, Ta = (i) => {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return null;
    const s = Number(U.videoWidth || 0), l = Number(U.videoHeight || 0), c = document.createElement("canvas");
    c.width = s, c.height = l, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage(U, 0, 0, s, l), pe.frameCache.set(i, c), pe.frameCacheOrder = pe.frameCacheOrder.filter((m) => m !== i), pe.frameCacheOrder.push(i); pe.frameCacheOrder.length > rn; ) {
      const m = pe.frameCacheOrder.shift();
      m != null && pe.frameCache.delete(m);
    }
    return c;
  }, Ea = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), c = Number(i.height || 0);
    if (l < 1 || c < 1) return !1;
    (at.width !== l || at.height !== c) && (at.width = l, at.height = c);
    const h = at.getContext("2d");
    return h ? (h.clearRect(0, 0, l, c), h.drawImage(i, 0, 0, l, c), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, s != null && (pe.presentedTime = Number(s || 0)), !0) : !1;
  }, Zr = (i) => {
    const s = Yn(i), l = pe.frameCache.get(s) || null;
    return l ? (pe.currentFrameNumber = s, Ea(l, i)) : !1;
  };
  if (Ft.push(() => {
    ci();
  }), U instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof U.requestVideoFrameCallback != "function" || U.__panoFramePumpActive) return;
      U.__panoFramePumpActive = !0;
      const _ = (w, k) => {
        U.__panoFramePumpActive = !1;
        const C = Number((k == null ? void 0 : k.mediaTime) ?? U.currentTime ?? 0), N = Yn(C), O = In();
        pe.mode === "scrub" ? Math.abs(C - Number(pe.editorTime || 0)) <= O && (Ta(N), Zr(pe.editorTime), re.backgroundDirty = !0, re.dirty = !0, fr({
          ready: !0,
          playing: !1,
          visible: Tr(),
          currentTime: pe.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), be({ cause: "frame_view", localOnly: !0 })) : (pe.editorTime = C, pe.presentedTime = C, pe.requestedTime = null, pe.currentFrameNumber = N, Ta(N), pe.frameCounter += 1, U.dataset.panoFrameIdx = String(pe.frameCounter), re.backgroundDirty = !0, re.dirty = !0, fr({
          ready: !0,
          playing: !U.paused && !U.ended,
          visible: Tr(),
          currentTime: C,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), be({ cause: "frame_view", localOnly: !0 })), re.running && (!U.paused || pe.mode === "scrub") && i();
      };
      try {
        U.requestVideoFrameCallback(_);
      } catch {
        U.__panoFramePumpActive = !1;
      }
    }, s = () => {
      pe.pendingPlaybackResume && (pe.pendingPlaybackResume = !1, pe.mode = "playback", pe.requestedTime = null, ji() && (re.backgroundDirty = !0, re.dirty = !0), U.play().catch(() => {
      }));
    }, l = () => {
      pe.editorTime = Number(U.currentTime || 0), Number(U.readyState || 0) >= 2 && ji() && (re.backgroundDirty = !0, re.dirty = !0), Hi(), i(), be({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      pe.mode = "playback", pe.seeking = !1, pe.requestedTime = null, Hi(), i(), be({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      pe.mode === "playback" && ji() && (re.backgroundDirty = !0, re.dirty = !0), Hi(), be({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      fr({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Tr(),
        currentTime: pe.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: pe.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      });
    }, x = () => {
      const _ = pe.seeking || pe.pendingPlaybackResume || pe.mode === "scrub";
      if (pe.seeking = !1, !_) {
        pe.requestedTime = null, i();
        return;
      }
      const w = Number(pe.requestedTime ?? pe.editorTime ?? 0), k = Number(U.currentTime || 0);
      if (Math.abs(k - w) > In()) {
        Al(w);
        return;
      }
      pe.mode === "scrub" && (ji(), re.backgroundDirty = !0, re.dirty = !0, be({ cause: "frame_view", localOnly: !0 })), pe.requestedTime = null, s(), i();
    };
    U.addEventListener("loadedmetadata", l), U.addEventListener("loadeddata", l), U.addEventListener("canplay", l), U.addEventListener("play", c), U.addEventListener("pause", h), U.addEventListener("volumechange", m), U.addEventListener("seeked", x), Ft.push(() => U.removeEventListener("loadedmetadata", l)), Ft.push(() => U.removeEventListener("loadeddata", l)), Ft.push(() => U.removeEventListener("canplay", l)), Ft.push(() => U.removeEventListener("play", c)), Ft.push(() => U.removeEventListener("pause", h)), Ft.push(() => U.removeEventListener("volumechange", m)), Ft.push(() => U.removeEventListener("seeked", x));
  }
  function qg() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", c = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : c ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function bl(i) {
    return sf(i == null ? void 0 : i.dataTransfer);
  }
  function fi(i) {
    const s = !!i;
    $e.active !== s && ($e.active = s, ee.classList.toggle("drop-active", s));
  }
  function yl(i, s, l = p.viewFov, c = 140, h = 620) {
    const m = Y1(p.viewYaw, i), x = s - p.viewPitch, _ = l - p.viewFov, w = Math.hypot(m, x) + Math.abs(_) * 0.6, k = Math.round(W(c + w * 2.2, c, h));
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
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, be();
  }
  M0();
  function Ir() {
    return t === "stickers" ? y.stickers : y.shots;
  }
  function ln() {
    const i = y.painting || (y.painting = ya(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Xg(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = y.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? y.painting[i].strokes : [], l = [], c = /* @__PURE__ */ new Set();
    for (const x of s) {
      const _ = String((x == null ? void 0 : x.actionGroupId) || "").trim();
      !_ || c.has(_) || (c.add(_), l.push(_));
    }
    return l;
  }
  function Jg() {
    return Xg("paint");
  }
  function Da(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Oa(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Xt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Fa(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const c = l.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function vl() {
    var s;
    let i = -1;
    for (const l of Array.isArray(y.stickers) ? y.stickers : [])
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of ln())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = y.painting) == null ? void 0 : s.raster_objects) ? y.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function df(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const c = ln();
    let h = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? vl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function Zg(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), c = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - c) % 1 + 1) % 1,
        v: W(l - h, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: W(l - h, 0, 1)
      },
      {
        u: ((s + c) % 1 + 1) % 1,
        v: W(l + h, 0, 1)
      },
      {
        u: ((s - c) % 1 + 1) % 1,
        v: W(l + h, 0, 1)
      }
    ];
  }
  function Qg() {
    const i = new Set(Jg()), l = ln().filter((c) => i.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return i.forEach((c) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || l.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: vl(),
        locked: !1,
        frame: null
      });
    }), l.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), y.painting.groups = l, l;
  }
  function e0(i, s, l) {
    var K;
    const c = (oe) => (Number(oe || 0) % 1 + 1) % 1, h = [];
    for (const oe of l) {
      const ue = oe == null ? void 0 : oe.geometry, me = (ue == null ? void 0 : ue.geometryKind) === "lasso_fill" ? ue == null ? void 0 : ue.points : (ue == null ? void 0 : ue.processedPoints) || (ue == null ? void 0 : ue.rawPoints) || (ue == null ? void 0 : ue.points) || [];
      Array.isArray(me) && h.push(...me);
    }
    if (!h.length) return null;
    const m = c(((K = h[0]) == null ? void 0 : K.u) || 0);
    let x = 0, _ = 0;
    h.forEach((oe) => {
      const ue = c((oe == null ? void 0 : oe.u) || 0);
      x += m + qn(ue, m), _ += Number((oe == null ? void 0 : oe.v) || 0);
    });
    const w = (x / h.length % 1 + 1) % 1;
    let k = 1 / 0, C = -1 / 0, N = 1 / 0, O = -1 / 0;
    h.forEach((oe) => {
      const ue = c((oe == null ? void 0 : oe.u) || 0), me = qn(ue, w);
      k = Math.min(k, me), C = Math.max(C, me);
      const le = Number((oe == null ? void 0 : oe.v) || 0);
      N = Math.min(N, le), O = Math.max(O, le);
    });
    const G = l.reduce((oe, ue) => {
      const me = ni(String((ue == null ? void 0 : ue.toolKind) || "pen")), le = Fn[me] || Fn[Rr], Se = Math.max(1, Number((ue == null ? void 0 : ue.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(oe, Se);
    }, 0), Q = Math.max(35e-4, G / 2048);
    return {
      centerUv: { u: ((w + (k + C) * 0.5) % 1 + 1) % 1, v: W((N + O) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - k) * 0.5 + Q,
      halfH: (O - N) * 0.5 + Q,
      uvPad: Q
    };
  }
  function Qr(i, s, l) {
    const c = String(i || "").trim();
    if (!c) return null;
    const h = ln().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === c);
    if (!h) return null;
    const m = l || er(c, s);
    return h.frame = e0(c, s, m), h.frame;
  }
  function Ri() {
    var c;
    const i = (Array.isArray(y.stickers) ? y.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = Qg().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), l = (Array.isArray((c = y.painting) == null ? void 0 : c.raster_objects) ? y.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...l].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function _l(i = !0) {
    var l, c, h, m, x, _;
    const s = Ri().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((c = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), k = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((_ = (x = p.interaction) == null ? void 0 : x.stroke) == null ? void 0 : _.toolKind) || "").trim();
      w && k === "paint" && C !== "eraser" && !s.includes(w) && s.push(w);
    }
    return s;
  }
  function xl(i = !0) {
    var _, w, k, C, N, O;
    const s = Ri();
    if (!i) return s;
    const l = String(((w = (_ = p.interaction) == null ? void 0 : _.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((C = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : C.layerKind) || "").trim(), h = String(((O = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : O.toolKind) || "").trim();
    if (!l || c !== "paint" || h === "eraser" || s.some((G) => G.type === "strokeGroup" && String(G.actionGroupId || "") === l))
      return s;
    const m = Et();
    let x = s.reduce((G, Q) => Math.max(G, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return m && Bt(m) && String(m.actionGroupId || "") === l && (x = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: x,
        item: null
      }
    ].sort((G, Q) => Number((G == null ? void 0 : G.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function t0() {
    return ln().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Vi(Da("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function n0() {
    var i;
    return (Array.isArray((i = y.painting) == null ? void 0 : i.raster_objects) ? y.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Li(Oa((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function hf(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, c = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || c;
    }
    return !1;
  }
  function r0() {
    var s, l, c, h;
    let i = null;
    try {
      const m = _l(), x = ((h = (c = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      x && (i = {
        source: x,
        revision: `${Wi()}:${No()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function No() {
    var h, m, x, _, w, k, C;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!hf(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const N = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, O = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), G = ((x = N == null ? void 0 : N.rawPoints) == null ? void 0 : x.length) ?? ((_ = N == null ? void 0 : N.points) == null ? void 0 : _.length) ?? 0, Q = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${O || "paint"}_${s}_live${Q}_${G}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
    return `_${s}_${l || c || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Sl() {
    const i = Array.isArray(y.shots) ? y.shots : [], s = Array.isArray(y.stickers) ? y.stickers : [];
    return [...i, ...s];
  }
  function zn(i) {
    return !!i && Array.isArray(y.shots) && y.shots.includes(i);
  }
  function _t(i) {
    return !!i && Array.isArray(y.stickers) && y.stickers.includes(i);
  }
  function En() {
    var i;
    return Array.isArray((i = y.painting) == null ? void 0 : i.raster_objects) ? y.painting.raster_objects : [];
  }
  function Li(i) {
    const s = Xt(i);
    if (!s) return null;
    const l = En().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Oa(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function un(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Xt(i.rasterObjectId || i.id || "");
    return !!s && !!Li(Oa(s));
  }
  function Vi(i) {
    const s = Fa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const c = ln().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return c ? {
      ...c,
      id: Da("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Bt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Vi(Da(l, s));
  }
  function er(i, s = null) {
    const l = Fa(i, s), c = String(l.actionGroupId || "").trim();
    return c ? Xi(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function i0(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${$a()}`;
    if (p.mode === "frame") {
      const m = Be(), x = String((m == null ? void 0 : m.id) || ""), _ = m ? Kt(m) : null;
      return `${h}:frame:${x}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Po(i, s, l) {
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
  function wl(i, s = null, l = null) {
    var k;
    const c = Fa(i, s), h = Array.isArray(l) ? l : er(c.actionGroupId, c.layerKind), m = [];
    if (h.forEach((C) => {
      const N = (C == null ? void 0 : C.geometry) || null, O = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(O) && m.push(...O);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const x = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let _ = 0, w = 0;
    return m.forEach((C) => {
      _ += x + qn(Number((C == null ? void 0 : C.u) || 0), x), w += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function Ao(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), x = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, w = Number(c || 0) * jn, k = Math.cos(w), C = Math.sin(w), N = Math.max(0.02, Number(l || 1)), O = (x * k - _ * C) * N, G = (x * C + _ * k) * N;
    return {
      ...i,
      u: ((h + O) % 1 + 1) % 1,
      v: W(m + G, 0, 1)
    };
  }
  function pf(i, s, l, c = null, h = null, m = null) {
    const x = Fa(i, h), _ = String(x.actionGroupId || "").trim();
    if (!_) return !1;
    const w = Xi(x.layerKind), k = Array.isArray(c) ? new Map(c.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let C = !1;
    if (w.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== _) return;
      const O = (k == null ? void 0 : k.get(String((N == null ? void 0 : N.id) || ""))) || N, G = N == null ? void 0 : N.geometry, Q = O == null ? void 0 : O.geometry;
      !G || !Q || (Array.isArray(Q.points) && (G.points = Q.points.map((K) => Po(K, s, l)), C = !0), Array.isArray(Q.rawPoints) && (G.rawPoints = Q.rawPoints.map((K) => Po(K, s, l)), C = !0), Array.isArray(Q.processedPoints) && (G.processedPoints = Q.processedPoints.map((K) => Po(K, s, l)), C = !0));
    }), C && m) {
      const N = ln().find((O) => String((O == null ? void 0 : O.actionGroupId) || "") === _);
      N && (N.frame = null);
    }
    return C;
  }
  function mf(i, s = 1, l = 0, c = null, h = null, m = null) {
    const x = Fa(i, h), _ = String(x.actionGroupId || "").trim();
    if (!_) return !1;
    const w = Xi(x.layerKind), k = Array.isArray(c) ? c : er(_, x.layerKind), C = Array.isArray(k) ? new Map(k.map((G) => [String((G == null ? void 0 : G.id) || ""), G])) : null, N = (m == null ? void 0 : m.centerUv) ?? wl(_, x.layerKind, k);
    let O = !1;
    if (w.forEach((G) => {
      if (String((G == null ? void 0 : G.actionGroupId) || "").trim() !== _) return;
      const Q = (C == null ? void 0 : C.get(String((G == null ? void 0 : G.id) || ""))) || G, K = G == null ? void 0 : G.geometry, oe = Q == null ? void 0 : Q.geometry;
      !K || !oe || (Array.isArray(oe.points) && (K.points = oe.points.map((ue) => Ao(ue, N, s, l)), O = !0), Array.isArray(oe.rawPoints) && (K.rawPoints = oe.rawPoints.map((ue) => Ao(ue, N, s, l)), O = !0), Array.isArray(oe.processedPoints) && (K.processedPoints = oe.processedPoints.map((ue) => Ao(ue, N, s, l)), O = !0));
    }), O && m) {
      const G = ln().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === _);
      G && (G.frame = null);
    }
    return O;
  }
  function gf(i, s, l, c = null) {
    const h = Xt(i);
    if (!h) return !1;
    const m = En().find((C) => String((C == null ? void 0 : C.id) || "").trim() === h);
    if (!m) return !1;
    const x = c && typeof c == "object" ? c : m, _ = (x == null ? void 0 : x.transform) || {}, w = Number(_.du || 0) + Number(s || 0), k = W(Number(_.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function a0(i, s = 1, l = null) {
    const c = Xt(i);
    if (!c) return !1;
    const h = En().find((k) => String((k == null ? void 0 : k.id) || "").trim() === c);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, x = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(x.scale || 1)), w = W(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = w, !0;
  }
  function Et() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = Vi(i);
    if (s) return s;
    const l = Li(i);
    return l || (t === "cutout" ? Sl().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null : Ir().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null);
  }
  function tr() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? Et() : Vi(h) || Li(h) || (t === "cutout" ? Sl().find((x) => String((x == null ? void 0 : x.id) || "") === h) : Ir().find((x) => String((x == null ? void 0 : x.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function kl(i = null) {
    const s = Array.isArray(i) ? i : tr();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => Zt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const c = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), h = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...c), x = Math.max(...c), _ = Math.min(...h), w = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + x) * 0.5, y: (_ + w) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x, y: _ },
        { x, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + x) * 0.5, y: _, a: { x: m, y: _ }, b: { x, y: _ } },
        { edge: "right", x, y: (_ + w) * 0.5, a: { x, y: _ }, b: { x, y: w } },
        { edge: "bottom", x: (m + x) * 0.5, y: w, a: { x, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (_ + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + x) * 0.5, y: _ },
      rotateHandle: { x: (m + x) * 0.5, y: _ - 30 }
    };
  }
  function bf(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function Co() {
    const i = Et();
    return i ? Bt(i) || un(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function Sn(i) {
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = ln().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (un(i)) {
      const s = Xt(i.rasterObjectId || i.id || ""), l = En().find((c) => String((c == null ? void 0 : c.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Ml(i = null) {
    const s = Array.isArray(i) ? i : tr();
    return s.length > 0 && s.every((l) => Sn(l));
  }
  function o0(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const c = String(i.actionGroupId || i.id || "").trim(), h = ln().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (un(i)) {
      const c = Xt(i.rasterObjectId || i.id || ""), h = En().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l || qm(y, i.id) ? !1 : (i.locked = l, !0);
  }
  function s0() {
    if (r) return;
    const i = tr();
    if (!i.length) return;
    const s = !Ml(i);
    let l = !1;
    i.forEach((c) => {
      o0(c, s) && (l = !0);
    }), l && (lt(), ct(), rt(), Ye(), be());
  }
  function zi(i) {
    p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && _t(i) ? y.active.selected_sticker_id = i.id || null : y.active.selected_sticker_id = null, i && zn(i) ? y.active.selected_shot_id = i.id || null : i ? zn(i) || (y.active.selected_shot_id = y.active.selected_shot_id) : y.active.selected_shot_id = null;
  }
  function l0(i, s = null) {
    const l = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((x) => {
      const _ = String((x == null ? void 0 : x.id) || "").trim();
      !_ || c.has(_) || (c.add(_), l.push(_));
    }), p.selectedIds = l;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = Et();
    y.active.selected_sticker_id = m && _t(m) && m.id || null, m && zn(m) ? y.active.selected_shot_id = m.id || null : l.length || (y.active.selected_shot_id = null);
  }
  function yf() {
    const i = (Array.isArray(y.shots) ? y.shots : []).map((l, c) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${c + 1}`)
    })), s = (Array.isArray(y.stickers) ? y.stickers : []).map((l, c) => {
      var m, x;
      const h = Jt(l) ? String(l.id || rs) : String(((x = (m = y.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : x.name) || l.asset_id || l.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function u0(i) {
    return i === "frame" ? Te.camera : i === "stroke" ? Te.paintbrush_vertical_tool : Te.image;
  }
  function Nl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: u0(i.kind)
    };
  }
  function vf() {
    return vl();
  }
  function Jt(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === rs || String(i.source_kind || "") === $N;
  }
  function $i(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function c0(i) {
    return Jt(i) && $i(i) ? Qc : 1;
  }
  function f0() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function d0() {
    return String(f0() || "") === "lasso_fill";
  }
  function h0() {
    if (r) return;
    const i = Et();
    !i || !Jt(i) || (i.visible = $i(i), an(), lt(), ct(), Ye(), rt(), be());
  }
  function p0() {
    if (r || t !== "stickers") return;
    const i = Et();
    if (!i || !Jt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Cl(is, () => {
      be();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Ui(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), lt(), ct(), Ye(), rt(), be();
  }
  function m0(i) {
    if (!i || !Jt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, c = Cl(is, () => {
      be();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (l.vFOV_deg = Ui(
      l.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), l;
  }
  function g0() {
    const i = Et();
    if (!i || !Jt(i)) return !1;
    const s = m0(i);
    if (!s) return !1;
    const l = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function _f(i) {
    return or.uiList(e, i);
  }
  function xf(i) {
    return or.uiValue(e, i);
  }
  function Sf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Ls(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function b0() {
    const { metaKey: i } = Sf(), s = xf(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function di(i) {
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
  function Pl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), c = s % 60;
    return `${l}:${String(c).padStart(2, "0")}`;
  }
  function fr(i = {}) {
    const s = Number(i.currentTime ?? pe.editorTime ?? 0), l = Number(i.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, x = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(U instanceof HTMLVideoElement ? U.muted : P.videoTransport.muted), _ = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : U instanceof HTMLVideoElement ? U.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ia(U), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: h,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: Pl(s),
      durationLabel: Pl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(i.mode || pe.mode || "playback"),
      hasAudio: w,
      muted: x,
      volume: Math.max(0, Math.min(1, Number.isFinite(_) ? _ : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(_) ? _ : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Tt))
    });
  }
  function Tr() {
    return !!(U instanceof HTMLVideoElement && U.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function y0() {
    fr({
      visible: Tr()
    });
  }
  function ji() {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return !1;
    const i = Number(U.videoWidth || 0), s = Number(U.videoHeight || 0);
    (at.width !== i || at.height !== s) && (at.width = i, at.height = s);
    const l = at.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(U, 0, 0, i, s), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, pe.presentedTime = Number(pe.editorTime || U.currentTime || 0), !0) : !1;
  }
  function wf() {
    return pe.mode === "scrub" && Number(at.width || 0) > 0 && Number(at.height || 0) > 0 && Number(at.__panoFrameIdx || 0) > 0 ? at : U instanceof HTMLVideoElement && Number(U.videoWidth || 0) > 0 && Number(U.videoHeight || 0) > 0 && Number(U.readyState || 0) >= 2 ? U : null;
  }
  function Al(i) {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (pe.requestedTime = s, !pe.seeking && !(Math.abs(Number(U.currentTime || 0) - s) <= 5e-4)) {
      pe.seeking = !0;
      try {
        U.currentTime = s;
      } catch {
        pe.seeking = !1;
      }
    }
  }
  function Hi() {
    if (!(U instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Sf(), s = _f(i)[0] || null, l = JN(s), c = b0(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), x = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / m : 0)), _ = !!(c != null && c.has_audio) || Ia(U);
    return l && U.dataset.panoSrc !== l ? (U.pause(), U.dataset.panoSrc = l, U.dataset.panoFrameIdx = "0", U.loop = !!P.videoTransport.loop, U.muted = !!P.videoTransport.muted, U.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), U.src = l, U.load(), xn(l, x, m)) : !l && U.getAttribute("src") && (U.pause(), U.removeAttribute("src"), U.load(), ci()), U.loop !== !!P.videoTransport.loop && (U.loop = !!P.videoTransport.loop), l && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && xn(l, x, m), l || ci(), fr({
      ready: !!l,
      playing: !U.paused && !U.ended,
      visible: !!l && p.primaryTool !== "paint" && p.primaryTool !== "mask",
      currentTime: pe.editorTime,
      duration: x,
      frameCount: h,
      fps: m,
      mode: pe.mode,
      hasAudio: _,
      loop: !!U.loop,
      muted: !!U.muted,
      volume: Number(U.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), l || null;
  }
  function v0(i, s = null) {
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
  function Cl(i, s = null) {
    return Ou(e, i, Ve, s || (() => be()));
  }
  function kf(i = null) {
    return Cl(is, i);
  }
  function Ui(i, s, l) {
    const c = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = W(Number(i || 30), 0.1, 179) * jn, x = 2 * Math.atan(Math.tan(m * 0.5) * (h / c));
    return W(x * ki, 0.1, 179);
  }
  function _0(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const c = l.version;
      let h = null;
      if (typeof c == "number" && Number.isInteger(c) ? h = c : typeof c == "string" && /^\d+$/.test(c) && (h = Number.parseInt(c, 10)), h !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const x = Number(m.yaw_deg), _ = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![x, _, w, k].every((G) => Number.isFinite(G))) return null;
      let C = ((x + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const N = {
        yaw_deg: C,
        pitch_deg: W(_, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(k, 0.1, 179)
      }, O = Number(l.source_aspect);
      return Number.isFinite(O) && O > 0 && (N.source_aspect = O), N;
    } catch {
      return null;
    }
  }
  function Mf(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Ti(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function x0(i) {
    var _;
    if (!i || typeof i != "object") return Mf(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let x = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const w = W(h, 0.1, 179) * jn, k = W(m, 0.1, 179) * jn, C = Math.tan(k * 0.5);
      if (Math.abs(C) > 1e-6) {
        const N = Math.tan(w * 0.5) / C;
        Number.isFinite(N) && N > 0 && (x = N);
      }
    }
    if (i != null && i.asset_id && ((_ = y == null ? void 0 : y.assets) != null && _[i.asset_id])) {
      const w = y.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), C = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && C > 0 && (x = k / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: x
    };
  }
  function S0(i) {
    return or.linkedValue(e, i);
  }
  function w0(i, s, l) {
    const c = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : _0(s);
    if (c) {
      const x = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || c.source_aspect || 1), _ = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Ui(c.hFOV_deg, x, _),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ui(30, h, m),
      rot_deg: 0
    };
  }
  function Nf(i = "sync") {
    if (t !== "stickers" || r || e.__panoSceneStateV2) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, c = kf(() => {
      no(e, "image-loaded");
    }), h = v0(xf("pano_sticker_input_pose"), null), m = S0("sticker_state"), x = or.externalStateHash(e, m), _ = l == null ? null : w0(h, m, c), w = gg(y, {
      connected: l != null,
      linkId: l,
      stateHash: x,
      pose: _,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
    w.changed && (y.stickers = w.state.stickers, y.active = w.state.active, l == null && p.selectedId === rs && (p.selectedId = null, p.selectedIds = []), ct(), Ye(), rt()), be();
  }
  function Ra(i = {}) {
    const l = i.preservePanelValues !== !1 ? Et() : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: jr(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, y.active.selected_sticker_id = null, y.active.selected_shot_id = null;
  }
  function k0() {
    if (t !== "cutout") return;
    const i = Be();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function Il() {
    if (t !== "cutout") return;
    const i = Be();
    na(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Te.camera : Te.plus_circle
    });
  }
  function Pf() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    na(P.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), na(P.floatingButtons, "action", "toggle-grid", {
      icon: s ? Te.eye : Te.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Er() {
    var l;
    const i = !!Be();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, P.viewButtons.forEach((c) => {
      const h = c.key === p.mode;
      c.pressed = h ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? Be() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = ia(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && p.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? jr(s) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!s && String(jr(s)) === c
    })), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!Be(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = p.mode !== "frame", P.cameraPreview.expanded = !!p.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame), Pf(), sd() ? xt(p.pointerPos) : Le(p.mode === "pano" ? "grab" : "default");
  }
  function M0() {
    const s = Df({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Tl() {
    return Wn(p.viewYaw, p.viewPitch, 0);
  }
  function La(i) {
    const { right: s, up: l, fwd: c } = Tl(), h = Lr(i, s), m = Lr(i, l), x = Lr(i, c);
    if (x <= 1e-5) return null;
    const _ = I.width, w = I.height, k = p.viewFov * jn, C = 2 * Math.atan(Math.tan(k / 2) * (w / _)), N = _ / 2 / Math.tan(k / 2), O = w / 2 / Math.tan(C / 2);
    return {
      x: _ / 2 + h / x * N,
      y: w / 2 - m / x * O,
      z: x
    };
  }
  function El(i, s) {
    const { right: l, up: c, fwd: h } = Tl(), m = I.width, x = I.height, _ = p.viewFov * jn, w = 2 * Math.atan(Math.tan(_ / 2) * (x / m)), k = (i - m / 2) / (m / 2) * Math.tan(_ / 2), C = (x / 2 - s) / (x / 2) * Math.tan(w / 2), N = ss(ss(ls(l, k), ls(c, C)), h);
    return kp(N);
  }
  function ei() {
    const i = I.width, s = I.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const _ = s, w = _ * l;
      return { x: (i - w) * 0.5, y: 0, w, h: _ };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function Dl(i) {
    var x;
    if (i && typeof i == "object" && (Jt(i) || i.external === !0))
      return kf(() => {
        no(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Ve.get(s);
    if (l) return l;
    const c = (x = y.assets) == null ? void 0 : x[s], h = XN(c);
    if (!h) return null;
    const m = new Image();
    return Ug(m, h), m.onload = () => {
      Gg(m, h), be();
    }, m.onerror = () => {
      Bg(m, h), be();
    }, m.src = h, Ve.set(s, m), m;
  }
  function Af(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const c = Ke.get(l);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, Ke.set(l, h), h;
  }
  function N0(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = et.get(s);
    if (l) return l.ready ? l : null;
    const c = Af(i, () => {
      const C = et.get(s);
      C && (C.ready = !1), be({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const h = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (h < 1 || m < 1) return null;
    const x = document.createElement("canvas");
    x.width = h, x.height = m;
    const _ = x.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, h, m), _.drawImage(c, 0, 0, h, m);
    const w = _.getImageData(0, 0, h, m).data, k = { canvas: x, width: h, height: m, alpha: w, ready: !0 };
    return et.set(s, k), k;
  }
  function P0(i, s, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), x = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), k = Number(c || 0) * jn, C = Math.cos(k), N = Math.sin(k), O = x / w, G = _ / w, Q = O * C + G * N, K = -O * N + G * C;
    return {
      ...i,
      u: ((h + Q) % 1 + 1) % 1,
      v: m + K
    };
  }
  function A0(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const c = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(c.dv || 0)
    }, x = P0(
      m,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), _ = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(_ > 1e-6) || !(w > 1e-6)) return null;
    const k = qn(Number(x.u || 0), Number(l.u0 || 0)) / _, C = (Number(x.v || 0) - Number(l.v0 || 0)) / w;
    if (k < 0 || k > 1 || C < 0 || C > 1) return 0;
    const N = N0(i);
    if (!N) return null;
    const O = W(Math.floor(k * N.width), 0, N.width - 1), G = W(Math.floor(C * N.height), 0, N.height - 1);
    return Number(N.alpha[(G * N.width + O) * 4 + 3] || 0);
  }
  function Cf(i, s, l, c = null) {
    if (!(s != null && s.visible) || !Vr(l, s.corners)) return !1;
    const h = c || rr(l, performance.now()), m = A0(i, h);
    return m === null ? !0 : m > 8;
  }
  function C0() {
    var c, h, m, x, _, w, k, C;
    const i = ((h = (c = p.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, _l(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (x = i == null ? void 0 : i.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : _.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((C = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: l };
  }
  function I0() {
    var G, Q, K;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = $n(), c = `${No()}:${l.width}:${l.height}`;
    if (((G = p._activePaintEraserPreviewInfo) == null ? void 0 : G.cacheKey) === c)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = fn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const oe = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Hl(oe, h.targetSpace, !0);
    }
    const x = za(l.width, l.height, { readback: !0 });
    if (!Yf(x, h, { w: l.width, h: l.height })) return null;
    const _ = ((K = (Q = x.ctx) == null ? void 0 : Q.getImageData(0, 0, l.width, l.height)) == null ? void 0 : K.data) || null;
    if (!_) return null;
    let w = l.width, k = l.height, C = -1, N = -1;
    for (let oe = 0; oe < l.height; oe += 1)
      for (let ue = 0; ue < l.width; ue += 1)
        _[(oe * l.width + ue) * 4 + 3] <= 8 || (ue < w && (w = ue), oe < k && (k = oe), ue > C && (C = ue), oe > N && (N = oe));
    if (C < w || N < k)
      return p._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const O = {
      surface: x,
      bounds: { minX: w, minY: k, maxX: C, maxY: N },
      key: `${c}:${w}:${k}:${C}:${N}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: c, value: O }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), O;
  }
  function Gi() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function T0(i, s, l) {
    var c, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((c = i.item) != null && c.bbox)) {
      const m = i.item.bbox, x = ((h = i.item) == null ? void 0 : h.transform) || {}, _ = Number(m.u0 || 0) + Number(x.du || 0), w = Number(m.u1 || 0) + Number(x.du || 0), k = Number(m.v0 || 0) + Number(x.dv || 0), C = Number(m.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - _ >= 1 || _ < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = er(i.actionGroupId, "paint"), x = Qr(i.actionGroupId, "paint", m);
      if (!x) return null;
      const _ = x.centerUv.u - x.halfW, w = x.centerUv.u + x.halfW, k = x.centerUv.v - x.halfH, C = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - _ >= 1 || _ < 0 || w > 1
      };
    }
    return null;
  }
  function E0(i, s, l) {
    if (!i || !s) return !1;
    const c = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: l - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], h = c(i), m = c(s);
    return h.some((x) => m.some((_) => !(x.maxX < _.minX || _.maxX < x.minX || x.maxY < _.minY || _.maxY < x.minY)));
  }
  function D0(i, s, l) {
    var Se, ze, We, it, _e, ae, ge;
    if (!i || !s || !((Se = l == null ? void 0 : l.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const c = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (c < 1 || h < 1) return i;
    const m = T0(s, c, h);
    if (m && !E0(m, l.bounds, c)) return i;
    const x = String(((ze = s.item) == null ? void 0 : ze.id) || s.id || ""), _ = ((We = s.item) == null ? void 0 : We.transform) || {}, w = `${l.key}:${x}:${c}:${h}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, k = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const C = W(Math.floor(Number(((it = l.bounds) == null ? void 0 : it.minX) || 0)), 0, Math.max(0, c - 1)), N = W(Math.floor(Number(((_e = l.bounds) == null ? void 0 : _e.minY) || 0)), 0, Math.max(0, h - 1)), O = W(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), C, Math.max(0, c - 1)), G = W(Math.ceil(Number(((ge = l.bounds) == null ? void 0 : ge.maxY) || 0)), N, Math.max(0, h - 1)), Q = Math.max(1, O - C + 1), K = Math.max(1, G - N + 1), oe = za(c, h, { readback: !0 });
    oe.ctx.clearRect(0, 0, c, h), oe.ctx.drawImage(i, 0, 0);
    const ue = oe.ctx.getImageData(C, N, Q, K);
    oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(l.surface.canvas, 0, 0), oe.ctx.restore();
    const me = oe.ctx.getImageData(C, N, Q, K);
    let le = !1;
    for (let Oe = 0; Oe < Q * K; Oe += 1) {
      const Fe = ue.data[Oe * 4 + 3], Ee = me.data[Oe * 4 + 3];
      if (Fe > Ee) {
        le = !0;
        break;
      }
    }
    return le ? (k.size > 64 && k.clear(), k.set(w, oe.canvas), oe.canvas) : (k.set(w, i), i);
  }
  function If(i, s = null) {
    const l = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.bbox) || null;
    if (!l || !c) return null;
    const h = Af(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: x } = C0(), _ = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      x,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      $a()
    ].join(":"), k = bt.get(w);
    if (k) return k;
    bt.size > 64 && bt.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = x;
    const N = C.getContext("2d");
    if (!N) return null;
    const O = Number(c.u0 || 0) * m, G = Number(c.v0 || 0) * x, Q = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), K = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * x), oe = O + Q * 0.5 + Number(_.du || 0) * m, ue = G + K * 0.5 + Number(_.dv || 0) * x, me = Number(_.rot_deg || 0) * jn, le = Math.max(0.01, Number(_.scale || 1));
    for (const Se of [-m, 0, m])
      N.save(), N.translate(oe + Se, ue), N.rotate(me), N.scale(le, le), N.drawImage(h, -Q * 0.5, -K * 0.5, Q, K), N.restore();
    return bt.set(w, C), C;
  }
  function O0() {
    return dl(y, {
      selectedId: p.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function F0(i) {
    return eg(
      y,
      (s, l, c) => Dl(c || s),
      { scene: i }
    );
  }
  function Tf(i, s, l, c, h = "modal_object_view") {
    if (!i || !s || !l) return !1;
    String((l == null ? void 0 : l.mode) || "");
    const m = pi(c);
    if (Lf(s, l))
      return G0(
        s,
        l,
        m && p.showPanorama ? c : null,
        `${h}_bg_gl`
      );
    const _ = Ll(), w = Vl(_), k = p.showObjects ? Do() : Va([]), N = ys({
      stateRevision: [
        h,
        m ? di(c) : "no_bg",
        Array.isArray(w) ? w.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        k.length ? k.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && p.showPanorama ? c : null,
      backgroundRevision: m ? `${h}:${di(c)}` : "",
      coverageDeg: dn(y.coverage),
      scene: _,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), O = we;
    if (!O.syncState(N)) return !1;
    const Q = O.renderToTarget(`${h}_direct`, l, {
      width: s.w,
      height: s.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Q ? (i.drawImage(Q, s.x, s.y, s.w, s.h), !0) : !1;
  }
  async function Ol(i, s) {
    const l = await new Promise((_) => i.toBlob(_, "image/png")), c = new FormData();
    c.append("image", l, s), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await mn.fetchApi("/upload/image", { method: "POST", body: c });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), x = String((m == null ? void 0 : m.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Io = null, To = !1;
  function R0() {
    const i = Mp(y.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = y.painting_layer, l = Wi();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function Ef() {
    const i = String(e.id ?? "0"), s = as.get(i);
    if (To && s) return s;
    const l = (async () => {
      var m, x, _, w, k, C, N, O, G, Q, K, oe;
      const c = Wi(), h = Mp(y.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        y.painting_layer !== null && (y.painting_layer = null, Io = c, On());
        return;
      }
      if (Io !== c && !To) {
        To = !0;
        try {
          Vo();
          const ue = _l(!1), me = ((x = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : x.call(m, ue)) || null, le = ((_ = me == null ? void 0 : me.displayPaint) == null ? void 0 : _.canvas) || null, Se = ((w = me == null ? void 0 : me.committedMask) == null ? void 0 : w.canvas) || null, ze = Math.max(1, Number(((k = me == null ? void 0 : me.descriptor) == null ? void 0 : k.width) || (le == null ? void 0 : le.width) || (Se == null ? void 0 : Se.width) || 2048)), We = Math.max(1, Number(((C = me == null ? void 0 : me.descriptor) == null ? void 0 : C.height) || (le == null ? void 0 : le.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!le && h.totalPaintCount > 0 || !Se && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((N = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== ze || Number(((O = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : O.height) || 0) !== We) && (p._paintLayerSyncBlankSurface = za(ze, We)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ze, We));
          const it = le || h.totalPaintCount > 0 && ((G = p._paintLayerSyncBlankSurface) == null ? void 0 : G.canvas) || null, _e = Se || h.totalMaskCount > 0 && ((Q = p._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!it && !_e) return;
          let ae = null, ge = null;
          const Oe = [];
          if (h.totalPaintCount > 0) {
            ae = await Ol(it, `pano_paint_${i}.png`);
            for (const Fe of ue) {
              const Ee = String(Fe || "").trim();
              if (!Ee) continue;
              const Xe = ((oe = (K = p.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : oe.call(K, Ee)) || null;
              if (!Xe) continue;
              const ut = Ee.replace(/[^a-zA-Z0-9_-]+/g, "_"), tt = await Ol(Xe, `pano_group_${i}_${ut}.png`);
              tt && Oe.push({
                id: Ee,
                actionGroupId: Ee,
                image: tt
              });
            }
          }
          h.totalMaskCount > 0 && (ge = await Ol(_e, `pano_mask_${i}.png`)), c === Wi() && (y.painting_layer = {
            paint: ae,
            mask: ge,
            groups: Oe,
            revision: c
          }, Io = c, On());
        } catch (ue) {
          throw ue;
        } finally {
          To = !1;
        }
      }
    })();
    return as.set(i, l), l.finally(() => {
      as.get(i) === l && as.delete(i);
    }), l;
  }
  function hi() {
    if (t === "cutout") {
      const _ = wf();
      if (_) return _;
      const w = Fu(
        e,
        ["erp_image", "bg_erp"],
        () => be(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !yc(w) ? w : Ou(e, "pano_input_images", Ve, () => be()) || w || null;
    }
    const i = wf();
    if (i) return i;
    const s = Ou(e, "pano_input_images", Ve, () => be());
    if (s && !yc(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], c = l.includes("erp_image"), h = l.includes("bg_erp");
    let m = [];
    return r && (c || h) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Fu(e, m, () => be(), `background:${m.join("|")}`) || s || null;
  }
  function pi(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function L0() {
    let i = Aa;
    const s = [];
    if (p.showPanorama) {
      const l = hi();
      i = bc(l, pi);
    }
    if (p.showObjects) {
      const l = Array.isArray(y.stickers) ? y.stickers : [];
      for (const c of l) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const h = Dl(c);
        s.push(bc(h, pi));
      }
    }
    return EN({
      presented: re.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Bi() {
    const i = new Set(
      (y.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(y.assets || {}).forEach((s) => {
      i.has(s) || (delete y.assets[s], Ve.delete(s));
    });
  }
  function Fl(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Rl(i, s = null) {
    const { lon: l, lat: c } = Fl(i), h = ei();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const x = h.y + (0.5 - c / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: x, z: 1 };
  }
  function Eo(i) {
    const s = Wn(
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
  function ti(i, s, l) {
    return kp(ss(ss(i.centerDir, ls(i.right, s)), ls(i.up, l)));
  }
  function Df(i) {
    const s = Eo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => ti(s, c * s.tanX, h * s.tanY));
  }
  function Of(i, s, l) {
    const c = Eo(i), h = (s * 2 - 1) * c.tanX, m = (1 - l * 2) * c.tanY;
    return ti(c, h, m);
  }
  function Ff(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: W((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function V0(i) {
    var w, k, C, N;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), h = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.du) || 0), x = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((O) => Po(Ao(O, l, c, h), m, x));
  }
  function z0(i) {
    const s = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, c = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${$a()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = Be(), x = m ? Kt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function $0(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = [
      zn(i) ? "frame" : _t(i) ? "sticker" : "item",
      s,
      p.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      jr(i)
    ].join(":");
    if (p.mode === "frame") {
      const h = Be(), m = h ? Kt(h) : null;
      return `${c}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function j0() {
    var s;
    const i = String(((s = y.ui_settings) == null ? void 0 : s.preview_quality) || "balanced");
    return i === "draft" ? p.hqFrames && p.hqFrames > 0 ? [28, 20] : p.interaction ? [12, 9] : [20, 14] : i === "high" ? p.hqFrames && p.hqFrames > 0 ? [48, 36] : p.interaction ? [20, 14] : [36, 26] : p.hqFrames && p.hqFrames > 0 ? [40, 30] : p.interaction ? [16, 12] : [28, 20];
  }
  function Rf() {
    var i;
    return !!Y && !!((i = we == null ? void 0 : we.isSupported) != null && i.call(we));
  }
  function Lf(i, s) {
    return !Rf() || t !== "stickers" && t !== "cutout" || String((s == null ? void 0 : s.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Ll() {
    return p.showObjects ? O0() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Vl(i) {
    return !p.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : F0(i);
  }
  function Vf() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function H0() {
    return Vf() ? `${Ul()}:mask_display` : "";
  }
  function Va(i) {
    if (!p.showMask) return i;
    const s = Vf();
    if (!s) return i;
    const l = H0(), c = i.reduce((x, _) => Math.max(x, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), h = (Array.isArray(y.stickers) ? y.stickers : []).reduce((x, _) => Math.max(x, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(c, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Do() {
    var c, h;
    const i = xl(!0), s = I0(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const x = String(m.actionGroupId || m.id || "");
        if (!x) continue;
        const _ = ((h = (c = p.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, x)) || null;
        if (!_) continue;
        l.push({
          id: `paint_group:${x}`,
          source: _,
          revision: `${Ul()}:${x}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const x = m.item || null, _ = Xt((x == null ? void 0 : x.id) || m.id || "");
        if (!_) continue;
        const w = If(x, () => be());
        if (!w) continue;
        const k = D0(w, m, s), C = (x == null ? void 0 : x.transform) || {};
        l.push({
          id: `raster:${_}`,
          source: k,
          revision: [
            Wi(),
            (s == null ? void 0 : s.key) || "",
            _,
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
    return Va(l);
  }
  function U0(i, s = "modal_bg_gl") {
    const l = Ll(), c = Vl(l), h = pi(i), m = h ? di(i) : "none", x = p.showObjects ? Do() : Va([]), _ = null, w = [
      s,
      m,
      Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      x.length ? x.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ys({
        stateRevision: w,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${s}:${m}` : "",
        coverageDeg: dn(y.coverage),
        scene: l,
        textures: c,
        paintSource: _,
        paintRevision: "",
        rasterEntries: x,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || c.length > 0 || x.length > 0
    };
  }
  function zl() {
    if (!Y) return;
    const i = Y.getContext("webgl2");
    if (i)
      i.viewport(0, 0, Y.width, Y.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const s = Y.getContext("2d");
      s && (s.clearRect(0, 0, Y.width, Y.height), s.fillStyle = "#070707", s.fillRect(0, 0, Y.width, Y.height));
    }
    re.backgroundWasVisible = !1, re.backgroundDirty = !1;
  }
  function G0(i, s, l, c = "modal_bg_gl") {
    var k;
    if (!Lf(i, s)) return !1;
    if (!re.backgroundDirty && re.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = U0(l, c);
    if (!m || !we.syncState(h))
      return zl(), !1;
    const _ = we.renderToTarget("modal_pano", s, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = Y == null ? void 0 : Y.getContext) == null ? void 0 : k.call(Y, "2d");
    return !_ || !w ? (zl(), !1) : (w.clearRect(0, 0, Y.width, Y.height), w.drawImage(_, 0, 0, Y.width, Y.height), re.backgroundWasVisible = !0, re.backgroundDirty = !1, !0);
  }
  function B0() {
    return (p.showObjects ? Do() : Va([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Oo() {
    return nn || (nn = K0()), nn;
  }
  function K0() {
    const i = hi(), s = B0(), l = new Map((y.stickers || []).map((w) => [String((w == null ? void 0 : w.id) || ""), w])), c = (w) => {
      const k = Dl(l.get(w.id));
      return k ? { media: k, revision: di(k) } : null;
    }, h = { ...y.assets };
    for (const w of y.stickers || []) {
      const k = String((w == null ? void 0 : w.asset_id) || "");
      k && !h[k] && Ve.has(k) && (h[k] = { type: "comfy_image", filename: k });
    }
    const m = JSON.stringify([y.stickers, Object.keys(h)]);
    ot.key !== m && (ot = { key: m, sceneState: Xm({ ...y, assets: h, painting: null }) });
    const x = p.showObjects ? zw(ot.sceneState, 0, {
      media: c,
      zIndex: (w) => {
        var k;
        return Number(((k = l.get(w.id)) == null ? void 0 : k.z_index) || 0);
      },
      paintLayers: s
    }) : s.map((w) => ({ kind: "erp", ...w }));
    return { background: p.showPanorama && pi(i) ? { media: i, revision: di(i), coverage: dn(y.coverage) } : null, layers: x };
  }
  function W0() {
    if (!re.backgroundDirty && re.backgroundWasVisible) return;
    const { background: i, layers: s } = Oo(), l = Y.width, c = Y.height, h = At.render({
      width: l,
      height: c,
      camera: zg({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, l, c),
      background: i,
      layers: s
    }), m = Y.getContext("2d");
    m.clearRect(0, 0, l, c), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, c)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, c), re.backgroundWasVisible = !!h, re.backgroundDirty = !1, xe = null;
  }
  function zf(i, s, l, c) {
    const { background: h, layers: m } = Oo();
    if (!h && !m.length) return !1;
    const x = At.render({ width: s.w, height: s.h, camera: Lw(l), background: h, layers: m, owner: c });
    return x ? (i.drawImage(x.canvas, x.x, x.y, x.width, x.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Y0(i) {
    const s = Oo(), l = JSON.stringify([i, Y.width, Y.height, lp(s)]);
    if (l === xe) return;
    const c = At.renderUnwrap({ width: i.w, height: i.h, ...s }), h = Y.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, Y.width, Y.height), c && h.drawImage(c.canvas, c.x, c.y, c.width, c.height, i.x, i.y, i.w, i.h), xe = c ? l : null, re.backgroundWasVisible = !1;
  }
  function q0(i = !1) {
    const s = I.width, l = I.height, c = ei();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || (_n() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l), A.fillStyle = "#070707", A.fillRect(c.x, c.y, c.w, c.h))), Vo(), _n() ? Y0(c) : Tf(
      A,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      hi(),
      "modal_unwrap"
    ), p.showGrid && !p.fullscreen) {
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
      const h = c.y + c.h * 0.57;
      A.fillText("Left", c.x + c.w * 0.25, h), A.fillText("Front", c.x + c.w * 0.5, h), A.fillText("Right", c.x + c.w * 0.75, h), A.fillText("Back", c.x + 38, h), A.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function $f(i, s, l = 1) {
    let c = !1;
    A.strokeStyle = s, A.lineWidth = l, A.beginPath();
    for (const h of i) {
      const m = La(h);
      if (!m) {
        c = !1;
        continue;
      }
      c ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), c = !0);
    }
    A.stroke();
  }
  function X0(i = !1) {
    const s = I.width, l = I.height;
    if (i || (_n() || Rf() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l))), Vo(), _n() ? W0() : Tf(
      A,
      { x: 0, y: 0, w: s, h: l },
      {
        mode: "panorama",
        yawDeg: p.viewYaw,
        pitchDeg: p.viewPitch,
        fovDeg: p.viewFov,
        coverageDeg: dn(y.coverage)
      },
      hi(),
      "modal_pano"
    ), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let x = -89; x <= 89; x += 4) m.push(Vn(h, x));
        $f(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let x = -180; x <= 180; x += 4) m.push(Vn(x, h));
        $f(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", c.forEach((h) => {
        const m = La(h.dir);
        m && A.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function J0(i, s = null, l = null, c = null) {
    if (p.mode === "frame") {
      const h = s || Be();
      if (!h) return [];
      const m = l || Kt(h);
      return Tb(i, h, m);
    }
    return qf(i, c);
  }
  function Fo(i, s = null, l = null, c = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const x = qf([i], h);
      return x[0] ? { x: x[0].x, y: x[0].y, z: 1 } : null;
    }
    const m = Ki(i);
    return m ? Dr(m, s, l, c) : null;
  }
  function Z0(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), c = er(l, i.layerKind), h = Qr(l, i.layerKind, c), m = (h == null ? void 0 : h.centerUv) || wl(l, i.layerKind, c), x = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], w = p.mode === "frame" ? Be() : null, k = w ? Kt(w) : null;
    for (const le of c) {
      const Se = (le == null ? void 0 : le.geometry) || null, ze = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], We = J0(ze, w, k, x).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!We.length) continue;
      const it = ni(String((le == null ? void 0 : le.toolKind) || "pen")), _e = Fn[it] || Fn[Rr];
      _.push({
        points: We,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((_e == null ? void 0 : _e.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || i.layerKind || "paint")
      });
    }
    const C = Fo(m, null, w, k, x);
    if (!C) {
      const le = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, le), le;
    }
    const O = Zg(h).map((le) => Fo(le, C.x, w, k, x)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (O.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, le), le;
    }
    const G = (le, Se) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: le,
      b: Se
    }), Q = G(O[0], O[1]), K = G(O[1], O[2]), oe = G(O[2], O[3]), ue = G(O[3], O[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: O,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...K },
        { edge: "bottom", ...oe },
        { edge: "left", ...ue }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return p._strokeGeomCache.set(s, me), me;
  }
  function Q0(i, s) {
    const l = p.mode === "frame" ? Be() : null, c = l ? Kt(l) : null, h = Ff(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, x = Fo(h, null, l, c, m), w = V0(i).map((O) => Fo(O, (x == null ? void 0 : x.x) ?? null, l, c, m)).filter((O) => Number.isFinite(O == null ? void 0 : O.x) && Number.isFinite(O == null ? void 0 : O.y));
    if (!Array.isArray(w) || w.length < 4) {
      const O = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, O), O;
    }
    const k = w.slice(0, 4).map((O) => ({ x: Number((O == null ? void 0 : O.x) || 0), y: Number((O == null ? void 0 : O.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: k.reduce((O, G) => O + Number(G.x || 0), 0) / k.length,
        y: k.reduce((O, G) => O + Number(G.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return p._strokeGeomCache.set(s, N), N;
  }
  function Dr(i, s = null, l = null, c = null, h = {}) {
    if (p.mode === "frame") {
      const Se = l || Be(), ze = c || Kt(Se);
      if (!Se || !ze) return null;
      const We = Se ? ja(Se, i) : null;
      return We ? {
        x: Number(ze.x || 0) + Number(We.x || 0) * Number(ze.w || 0),
        y: Number(ze.y || 0) + Number(We.y || 0) * Number(ze.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Rl(i, s);
    const { right: m, up: x, fwd: _ } = Tl(), w = Lr(i, m), k = Lr(i, x), C = Lr(i, _), N = 1e-4;
    if (!Number.isFinite(C) || C <= N && !(h != null && h.clipBehind)) return null;
    const O = Math.max(C, N), G = I.width, Q = I.height, K = p.viewFov * jn, oe = 2 * Math.atan(Math.tan(K / 2) * (Q / Math.max(G, 1))), ue = G / 2 / Math.tan(K / 2), me = Q / 2 / Math.tan(oe / 2), le = Math.max(G, Q) * 2;
    return {
      x: W(G / 2 + w / O * ue, -le, G + le),
      y: W(Q / 2 - k / O * me, -le, Q + le),
      z: O,
      rawZ: C,
      clipped: C <= N
    };
  }
  function eb(i, s = []) {
    if (p.mode !== "pano" || _t(i)) return 1;
    const l = s.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return l.length ? tP(0.035, 0.2, Math.min(...l)) : 1;
  }
  function tb(i) {
    const s = Vn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = p.mode === "frame" ? Be() : null, c = l ? Kt(l) : null, h = p.mode === "pano" && (_t(i) || zn(i)), m = h ? { clipBehind: !0 } : null, x = Dr(s, null, l, c, m);
    if (!x) return { visible: !1 };
    const _ = Eo(i), k = Df(i).map((ae) => Dr(ae, x.x, l, c, m)).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
    if (k.length < 4) return { visible: !1 };
    const C = ti(_, 0, _.tanY), N = ti(_, 0, _.tanY + Math.max(_.tanY * 0.43, 0.053)), O = Dr(C, x.x, l, c, m);
    if (!O) return { visible: !1 };
    const G = Dr(N, (O == null ? void 0 : O.x) ?? x.x, l, c, m), Q = ((G == null ? void 0 : G.x) ?? O.x) - O.x, K = ((G == null ? void 0 : G.y) ?? O.y) - O.y, oe = Math.hypot(Q, K) || 1, ue = {
      x: O.x + Q / oe * 30,
      y: O.y + K / oe * 30
    }, me = Dr(ti(_, 0, _.tanY), x.x, l, c, m), le = Dr(ti(_, _.tanX, 0), x.x, l, c, m), Se = Dr(ti(_, 0, -_.tanY), x.x, l, c, m), ze = Dr(ti(_, -_.tanX, 0), x.x, l, c, m);
    if (!me || !le || !Se || !ze) return { visible: !1 };
    const We = [
      x,
      ...k,
      O,
      G,
      me,
      le,
      Se,
      ze
    ];
    if (h && !We.some((ae) => Number((ae == null ? void 0 : ae.rawZ) ?? (ae == null ? void 0 : ae.z)) > 1e-4)) return { visible: !1 };
    const it = eb(i, We), _e = [
      {
        edge: "top",
        x: me.x,
        y: me.y,
        a: { x: k[0].x, y: k[0].y },
        b: { x: k[1].x, y: k[1].y }
      },
      {
        edge: "right",
        x: le.x,
        y: le.y,
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
      corners: k.map((ae) => ({ x: ae.x, y: ae.y })),
      edgeMidpoints: _e,
      rotateStemBase: { x: O.x, y: O.y },
      rotateHandle: ue,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: it,
      visible: !0
    };
  }
  function Zt(i) {
    if (Bt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = i0(h, i.layerKind), x = p._strokeGeomCache.get(m);
      return x || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Z0(i, m));
    }
    if (un(i)) {
      const h = z0(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Q0(i, h));
    }
    const s = $0(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const c = tb(i);
    return p._strokeGeomCache.set(s, c), c;
  }
  function Ro(i, s, l, c = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const x = m / l;
      let _ = 0, w = 0;
      s === 0 ? (_ = x, w = 0) : s === 1 ? (_ = 1, w = x) : s === 2 ? (_ = 1 - x, w = 1) : (_ = 0, w = 1 - x);
      const k = Of(i, _, w), C = p.mode === "unwrap" ? Rl(k, c) : La(k);
      C && h.push(C);
    }
    return h;
  }
  function nb(i, s) {
    const l = Vn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = p.mode === "unwrap" ? Rl(l) : null, h = c ? c.x : null, m = p.mode === "pano" ? 28 : 20, x = [
      Ro(i, 0, m, h),
      Ro(i, 1, m, h),
      Ro(i, 2, m, h),
      Ro(i, 3, m, h)
    ];
    yg(A, x, { selected: s });
  }
  function rb() {
    const i = [...Array.isArray(y.shots) ? y.shots : []], s = [...Array.isArray(y.stickers) ? y.stickers : []].sort((l, c) => Number(l.z_index || 0) - Number(c.z_index || 0));
    return [...i, ...s];
  }
  function $l() {
    const i = [...Array.isArray(y.shots) ? y.shots : []];
    return [...[...Array.isArray(y.stickers) ? y.stickers : []].sort((l, c) => Number(c.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function Lo(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function jf(i, s, l) {
    const c = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (c.length < 4) return;
    const h = W(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * h;
    const x = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = s ? 3.2 : 2.6;
    Lo(A, c), A.fillStyle = _, A.fill(), A.strokeStyle = x, A.lineWidth = w, A.stroke(), A.save(), A.strokeStyle = x, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = s ? 12 : 9;
    k.forEach((O) => {
      const Q = k.find((me) => (me == null ? void 0 : me.edge) === C[O == null ? void 0 : O.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, K = Q.x - O.x, oe = Q.y - O.y, ue = Math.hypot(K, oe) || 1;
      A.beginPath(), A.moveTo(O.x, O.y), A.lineTo(O.x + K / ue * N, O.y + oe / ue * N), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function ib(i, s, l, c) {
    const h = W(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (zn(i)) {
      jf(s, l, c);
      return;
    }
    if (_t(i)) {
      const x = A.globalAlpha;
      A.globalAlpha = x * c0(i) * h, p.mode === "frame" ? (A.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = l ? 2 : 1, Lo(A, s.corners), A.stroke()) : nb(i, l), A.globalAlpha = x;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * h, A.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Lo(A, s.corners), A.fill(), A.strokeStyle = l ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = l ? 2.8 : 1.9, Lo(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function Hf(i, s, l) {
    if (_t(i)) {
      vg(A, s, { accent: l });
      return;
    }
    A.fillStyle = l, s.corners.forEach((c) => {
      A.beginPath(), A.arc(c.x, c.y, 6.5, 0, Math.PI * 2), A.fill();
    }), zn(i) && (A.strokeStyle = l, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((c) => {
      var C, N, O, G;
      const h = (((C = c.b) == null ? void 0 : C.x) ?? c.x) - (((N = c.a) == null ? void 0 : N.x) ?? c.x), m = (((O = c.b) == null ? void 0 : O.y) ?? c.y) - (((G = c.a) == null ? void 0 : G.y) ?? c.y), x = Math.hypot(h, m) || 1, _ = h / x, w = m / x, k = 10;
      A.beginPath(), A.moveTo(c.x - _ * k, c.y - w * k), A.lineTo(c.x + _ * k, c.y + w * k), A.stroke();
    }), A.lineCap = "butt"), Bt(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = l, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function ab() {
    var _;
    const [i, s] = j0(), l = p.mode === "frame" ? [] : tr(), c = l.length > 1, h = t === "cutout" ? rb() : Ir(), m = h.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${zn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== h || p._sortedItemsCache.orderKey !== m) && (p._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const x = p._sortedItemsCache.sorted;
    for (const w of x) {
      const k = p.mode !== "frame" && !c && bf(w);
      if (p.mode === "frame" && !k || !p.showObjects && !zn(w)) continue;
      const C = _t(w), N = zn(w), O = Sn(w);
      if (!C && !N)
        continue;
      const G = Zt(w);
      if (t !== "stickers" && !G.visible)
        continue;
      const Q = W(Number((G == null ? void 0 : G.visibilityAlpha) ?? 1), 0, 1);
      if (Q <= 0.01) continue;
      const K = N && t === "cutout" && p.mode === "pano" ? W(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= K, ib(w, G, k, O), k && G.visible) {
        const oe = O ? "#ff4d4f" : C && Jt(w) ? "#f59e0b" : "#0070f3", ue = A.globalAlpha;
        A.globalAlpha = ue * Q, Hf(w, G, oe), A.globalAlpha = ue;
      }
      A.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !Be() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const w = p.cutoutPanoFrameVisual, k = W(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= k, jf(w.geom, w.selected, w.locked), w.selected && Hf(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (c) {
      const w = kl(l);
      if (w != null && w.visible) {
        const k = Ml(l) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let C = 1; C < w.corners.length; C += 1) A.lineTo(w.corners[C].x, w.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      l.forEach((w) => {
        if (!Bt(w) && !un(w)) return;
        const k = Zt(w);
        if (!(k != null && k.visible)) return;
        const C = Sn(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(k.corners[0].x, k.corners[0].y);
        for (let N = 1; N < k.corners.length; N += 1) A.lineTo(k.corners[N].x, k.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, k.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((_ = p.interaction) == null ? void 0 : _.kind) === "marquee_select") {
      const w = dd(p.interaction.start, p.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    p.hqFrames && i >= 40 && s >= 30 && (p.hqFrames -= 1, p.hqFrames > 0 && be());
  }
  function ob(i) {
    const s = Br(i), l = W(Number((s == null ? void 0 : s.aspect) || 1), 0.05, 20), c = 320;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function Uf(i, s = !1) {
    const l = W(Ti(i), 0.05, 20), c = s ? 320 : 220;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function sb(i) {
    if (!Cn || !i) return !1;
    const s = Cn.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Cn.clientWidth || 0)), c = Math.round(Number(s.clientHeight || Cn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(c - Number(i.height || 0)) <= 1;
  }
  function lb() {
    return `obj:${Number(p.objectVisualRevision || 0)}`;
  }
  function ub(i, s = {}) {
    if (!i) return "";
    const l = hi(), c = l && pi(l) ? di(l) : "no_bg", h = ob(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      Ul(),
      lb(),
      No(),
      c,
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(s.quality || "balanced")
    ].join("|");
  }
  function cb() {
    if (p.outputPreviewRect = null, P.outputPreviewToggle.visible = p.mode !== "frame" && !!Be(), t !== "cutout" || !P.cameraPreview) return;
    if (p.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const i = Be();
    P.cameraPreview.visible = !0, P.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = R == null ? void 0 : R.getContext("2d");
    if (!i || !s) {
      P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, R.width, R.height), H = null;
      return;
    }
    const l = Uf(i, !!p.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height;
    const c = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * c)), h: Math.max(1, Math.round(l.height * c)) };
    (R.width !== h.w || R.height !== h.h) && (R.width = h.w, R.height = h.h);
    let m;
    if (_n()) {
      const _ = JSON.stringify([h, Xr(i), lp(Oo())]);
      m = _ === H, m || (s.clearRect(0, 0, h.w, h.h), m = zf(s, h, i, "camera_preview"), H = m ? _ : null);
    } else
      s.clearRect(0, 0, h.w, h.h), m = Gf(s, h, i);
    if (!m) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = hi() ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1;
      return;
    }
    const x = sb(l);
    P.cameraPreview.ready = !0, P.cameraPreview.label = x ? "" : "Loading preview", P.cameraPreview.settled = x && re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame;
  }
  function Gf(i, s, l, c = {}) {
    if (!De || !l) return !1;
    const h = hi(), m = Ll(), x = Vl(m), _ = pi(h), w = p.showObjects ? Do() : Va([]);
    return _ || x.length > 0 || w.length > 0 ? (De.syncScene(ys({
      stateRevision: ub(l, c),
      backgroundSource: _ && p.showPanorama ? h : null,
      backgroundRevision: _ ? `cutout_frame:${di(h)}` : "",
      coverageDeg: dn(y.coverage),
      scene: m,
      textures: x,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), De.renderShotToContext(i, s, l, c)) : !1;
  }
  function jl(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), c = Number(s.y || 0);
    return Of(i, l, c);
  }
  function Ki(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, c = Math.cos(l);
    return gl(c * Math.sin(s), Math.sin(l), c * Math.cos(s));
  }
  function fb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function db(i, s, l, c = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: cn(i, "widthScale", 1),
      pressureLike: cn(i, "pressureLike", 1)
    }, ...c, u: s, v: l };
  }
  function hb(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Hl(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const c = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let K = null;
      i.forEach((oe) => {
        const ue = Number((oe == null ? void 0 : oe.u) || 0), me = Number((oe == null ? void 0 : oe.v) || 0), le = (ue % 1 + 1) % 1, Se = K == null ? le : K + qn(le, (K % 1 + 1) % 1);
        h.set(oe, { x: Se, y: me }), K = Se;
      });
    }
    const m = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : h.get(K) || fb(K), x = (K, oe, ue, me = {}) => {
      const le = c ? (Number(oe) % 1 + 1) % 1 : Number(oe), Se = db(K, le, ue, me);
      return h.set(Se, { x: Number(oe), y: Number(ue) }), Se;
    }, _ = (K, oe, ue) => {
      const me = m(K), le = m(oe);
      return x(K, Jn(me.x, le.x, ue), Jn(me.y, le.y, ue), {
        t: Jn(Number((K == null ? void 0 : K.t) || 0), Number((oe == null ? void 0 : oe.t) || 0), ue),
        widthScale: Jn(cn(K, "widthScale", 1), cn(oe, "widthScale", 1), ue),
        pressureLike: Jn(cn(K, "pressureLike", 1), cn(oe, "pressureLike", 1), ue)
      });
    };
    if (i.length === 1) {
      const K = m(i[0]);
      return [x(i[0], K.x, K.y)];
    }
    const w = hb(s, l), k = (K, oe) => {
      const ue = [0];
      for (let ae = 1; ae < K.length; ae += 1) {
        const ge = m(K[ae - 1]), Oe = m(K[ae]);
        ue.push(ue[ae - 1] + Math.hypot(Oe.x - ge.x, Oe.y - ge.y));
      }
      const me = ue[ue.length - 1] || 0;
      if (me <= 1e-8) {
        const ae = K[0], ge = m(ae);
        return [x(ae, ge.x, ge.y)];
      }
      const le = [];
      let Se = 0;
      for (let ae = 0; ae <= me + 1e-9; ae += oe) {
        for (; Se < ue.length - 2 && ue[Se + 1] < ae; ) Se += 1;
        const ge = ue[Se], Oe = ue[Se + 1], Fe = Math.max(1e-8, Oe - ge);
        le.push(_(K[Se], K[Se + 1], W((ae - ge) / Fe, 0, 1)));
      }
      const ze = K[K.length - 1], We = m(ze), it = le[le.length - 1], _e = it ? m(it) : null;
      return (!_e || Math.hypot(_e.x - We.x, _e.y - We.y) > oe * 0.35) && le.push(x(ze, We.x, We.y)), le;
    }, C = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const oe = m(K[0]), ue = [x(K[0], oe.x, oe.y)];
      for (let Se = 0; Se < K.length - 1; Se += 1) {
        const ze = K[Se], We = K[Se + 1], it = m(ze), _e = m(We), ae = x(
          ze,
          it.x * 0.75 + _e.x * 0.25,
          it.y * 0.75 + _e.y * 0.25,
          {
            t: Number(ze.t || 0) * 0.75 + Number(We.t || 0) * 0.25,
            widthScale: cn(ze, "widthScale", 1) * 0.75 + cn(We, "widthScale", 1) * 0.25,
            pressureLike: cn(ze, "pressureLike", 1) * 0.75 + cn(We, "pressureLike", 1) * 0.25
          }
        ), ge = x(
          ze,
          it.x * 0.25 + _e.x * 0.75,
          it.y * 0.25 + _e.y * 0.75,
          {
            t: Number(ze.t || 0) * 0.25 + Number(We.t || 0) * 0.75,
            widthScale: cn(ze, "widthScale", 1) * 0.25 + cn(We, "widthScale", 1) * 0.75,
            pressureLike: cn(ze, "pressureLike", 1) * 0.25 + cn(We, "pressureLike", 1) * 0.75
          }
        );
        ue.push(ae, ge);
      }
      const me = K[K.length - 1], le = m(me);
      return ue.push(x(me, le.x, le.y)), ue;
    }, N = k(i, w);
    if (N.length < 3) return N;
    const O = l ? 2 : 1;
    let G = N.slice();
    for (let K = 0; K < O; K += 1) G = C(G);
    return k(G, Math.max(w * 0.75, 55e-5));
  }
  function cn(i, s, l = 1) {
    const c = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(c) ? Math.max(0, c) : l;
  }
  function pb(i) {
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
    const h = c.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function $a() {
    const i = zo();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Wi() {
    const i = zo();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Ul() {
    const i = No(), s = Wi();
    return i ? `${s}:${i}` : s;
  }
  function mb() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function gb() {
    p.paintCompositeRevision += 1;
  }
  function bb() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function Bf() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, y), p.paintEngineRevisionKey = $a();
  }
  function Kf() {
    y.painting_layer !== null && (y.painting_layer = null), Io = "";
  }
  function an() {
    p.objectVisualRevision = Number(p.objectVisualRevision || 0) + 1, bb(), re.backgroundDirty = !0, re.dirty = !0;
  }
  function nr({ rebuildPaintEngine: i = !1 } = {}) {
    Kf(), mb(), an(), i && Bf();
  }
  function Yi() {
    Kf(), gb(), an();
  }
  function Vo() {
    var c;
    const i = zo(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = Xu(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = $a();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (c = p.paintEngine) == null || c.rebuildCommitted(y));
  }
  function zo() {
    const i = Math.max(1, M(Number((y == null ? void 0 : y.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function $n() {
    return zo();
  }
  function yb(i, s, l, c, h = null) {
    const m = pb(i), x = cn(s, "widthScale", 1) * cn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * x) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * jn) * l * x) : Math.max(0.5, m.value / (2 * Math.PI) * l * x) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * x);
  }
  function vb(i, s, l = {}) {
    const c = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, x = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * x : 1, c === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const _ = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(_.a ?? 1) * 0.88) : Math.max(0.12, Number(_.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${w})`;
  }
  function _b(i, s, l) {
    const c = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(c) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), c, 0, Math.PI * 2), i.fill());
  }
  function xb(i, s, l, c, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    i.save(), vb(i, l, h);
    const x = (_) => _b(i, _, m);
    if (s.length === 1) {
      x(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const w = s[_], k = s[_ + 1];
      if (!w || !k) continue;
      const C = Number(w.x || 0), N = Number(w.y || 0), O = Number(k.x || 0), G = Number(k.y || 0), Q = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(N) || !Number.isFinite(O) || !Number.isFinite(G) || !Number.isFinite(Q) || !Number.isFinite(K)) continue;
      const oe = O - C, ue = G - N, me = Math.hypot(oe, ue);
      if (!Number.isFinite(me) || me < 1e-6) {
        x(w);
        continue;
      }
      if (me > Math.max(c.w, c.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(Q, K)), Se = Math.max(0.35, Math.min(le * 0.4, 2.25)), ze = Math.max(1, Math.ceil(me / Se));
      for (let We = 0; We <= ze; We += 1) {
        const it = We / ze;
        x({
          x: Jn(C, O, it),
          y: Jn(N, G, it),
          radiusPx: Jn(Q, K, it)
        });
      }
    }
    x(s[s.length - 1]), i.restore();
  }
  function Sb(i, s, l, c) {
    xb(i, s, l, c, { preview: !1 });
  }
  function wb(i, s, l, c, h) {
    var _, w, k, C;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", x = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * c.w, Number(((w = s[0]) == null ? void 0 : w[x]) || 0) * c.h);
    for (let N = 1; N < s.length; N += 1)
      i.lineTo(Number(((k = s[N]) == null ? void 0 : k[m]) || 0) * c.w, Number(((C = s[N]) == null ? void 0 : C[x]) || 0) * c.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Wf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function kb(i, s) {
    const l = Wf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: yb(i, c, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Yf(i, s, l = null) {
    var _, w, k, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const c = l || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return wb(i.ctx, Wf(h), h, c), !0;
    const x = kb(h, c);
    return x.length ? (Sb(i.ctx, x, h, c), !0) : !1;
  }
  function Mb(i, s, l, c = 8) {
    const h = new Uint8Array(s * l), m = [], x = new Int32Array(s * l), _ = new Int32Array(s * l);
    for (let w = 0; w < l; w += 1)
      for (let k = 0; k < s; k += 1) {
        const C = w * s + k;
        if (h[C] || i[C] <= c) continue;
        let N = 0, O = 0;
        x[O] = k, _[O] = w, O += 1, h[C] = 1;
        const G = [];
        let Q = k, K = w, oe = k, ue = w;
        for (; N < O; ) {
          const me = x[N], le = _[N];
          N += 1, G.push({ x: me, y: le }), me < Q && (Q = me), le < K && (K = le), me > oe && (oe = me), le > ue && (ue = le);
          const Se = [
            [(me - 1 + s) % s, le],
            [(me + 1) % s, le],
            [me, le - 1],
            [me, le + 1]
          ];
          for (const [ze, We] of Se) {
            if (We < 0 || We >= l) continue;
            const it = We * s + ze;
            h[it] || i[it] <= c || (h[it] = 1, x[O] = ze, _[O] = We, O += 1);
          }
        }
        m.push({ pixels: G, minX: Q, minY: K, maxX: oe, maxY: ue });
      }
    return m;
  }
  function Nb(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, k) => w - k);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let w = 0; w < l.length; w += 1) {
      const k = l[w], N = (w === l.length - 1 ? l[0] + s : l[w + 1]) - k - 1;
      N > c && (c = N, h = w);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let x = 1 / 0, _ = -1 / 0;
    for (const w of l) {
      const k = (w - m + s) % s;
      x = Math.min(x, k), _ = Math.max(_, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - x + 1)
    };
  }
  function Pb(i, s, l = {}) {
    var k;
    const c = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || c < 1 || h < 1) return [];
    const x = m.getImageData(0, 0, c, h), _ = new Uint8Array(c * h);
    for (let C = 0; C < _.length; C += 1) _[C] = x.data[C * 4 + 3];
    return Mb(_, c, h, 8).map((C, N) => {
      const O = Nb(C, c);
      if (!O) return null;
      const G = Number(O.widthPx || 0), Q = C.maxY - C.minY + 1, K = Number(O.startX || 0), oe = document.createElement("canvas");
      oe.width = G, oe.height = Q;
      const ue = oe.getContext("2d");
      if (!ue) return null;
      const me = ue.createImageData(G, Q);
      return C.pixels.forEach(({ x: le, y: Se }) => {
        const ze = (Se * c + le) * 4, We = (Number(le || 0) - K + c) % c, it = ((Se - C.minY) * G + We) * 4;
        me.data[it + 0] = x.data[ze + 0], me.data[it + 1] = x.data[ze + 1], me.data[it + 2] = x.data[ze + 2], me.data[it + 3] = x.data[ze + 3];
      }), ue.putImageData(me, 0, 0), {
        id: aa("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + N * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / h,
          u1: G / c,
          v1: (C.maxY + 1) / h
        },
        rasterDataUrl: oe.toDataURL("image/png"),
        transform: {
          du: K / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ja(i, s) {
    if (!i || !s) return null;
    const l = Eo(i), c = Lr(s, l.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = Lr(s, l.right) / c, m = Lr(s, l.up) / c;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function Ab(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ei();
      return i.map((c) => ({
        x: l.x + Number(c.u || 0) * l.w,
        y: l.y + Number(c.v || 0) * l.h
      }));
    }
    const s = i.map((l) => La(Ki(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function qf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = ei();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, x = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: c.x + x * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const l = i.map((c) => La(Ki(c))).filter(Boolean);
    return l.every((c) => Number(c.z || 0) > 0) ? l.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Cb(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l], h = i[(l + 1) % i.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > s) return !1;
    }
    return !0;
  }
  function Ib(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const c = [];
    for (const h of i) {
      const m = Ki(h), x = ja(s, m);
      if (!x) return [];
      c.push({
        x: Number(l.x || 0) + Number(x.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(x.y || 0) * Number(l.h || 0)
      });
    }
    return Cb(c, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? c : [];
  }
  function Tb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const c = [];
    for (const h of i) {
      const m = Ki(h), x = ja(s, m);
      x && c.push({
        x: Number(l.x || 0) + Number(x.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(x.y || 0) * Number(l.h || 0)
      });
    }
    return c;
  }
  function Eb() {
    var w;
    const i = Be(), s = Wl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: c, shot: h } = Vw(i, s, { width: I.width, height: I.height }), m = Db(l);
    A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, I.width, I.height);
    const x = p.interaction ? "draft" : String(((w = y.ui_settings) == null ? void 0 : w.preview_quality) || "balanced");
    return (_n() ? zf(A, c, h) : Gf(A, c, h, { quality: x }) === !0) || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(c.x, c.y, c.w, c.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, I.width, I.height), A.roundRect(l.x, l.y, l.w, l.h, m), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = HN, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), A.stroke(), A.restore(), !0;
  }
  function Db(i) {
    const s = Math.max(1e-6, Number(re.frameCanvasScale || 1));
    return Math.min(Re * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Or() {
    var s;
    const i = p.mode === "frame" ? Be() : null;
    P.frameRollKnob.visible = !!i && !r && i.locked !== !0, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = ia(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function Ob() {
    var w, k;
    if (((w = p.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (p.mode === "frame") {
      const C = Be(), N = Kt(C);
      l = Ib(s, C, N);
    } else
      l = Ab(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const c = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), x = Math.round(Number(h.g || 0) * 255), _ = Math.round(Number(h.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let C = 1; C < l.length; C++) A.lineTo(Number(l[C].x || 0), Number(l[C].y || 0));
    A.closePath(), c ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${x},${_},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Fb() {
    const i = p.frameRollOverlayVisual, s = W(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Kt(i.shot);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * jn, m = Math.hypot(l.w, l.h) * 0.55, x = Math.cos(h) * m, _ = Math.sin(h) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(l.x, l.y, l.w, l.h), A.clip(), A.translate(c.x, c.y), A.rotate(h);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    A.beginPath();
    for (let k = -m; k <= m; k += w)
      A.moveTo(k, -m), A.lineTo(k, m);
    for (let k = -m; k <= m; k += w)
      A.moveTo(-m, k), A.lineTo(m, k);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(c.x - x, c.y - _), A.lineTo(c.x + x, c.y + _), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function Rb() {
    return t !== "cutout" || !Be() ? 0 : BN;
  }
  function Lb() {
    const i = W(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = Be(), l = s ? Zt(s) : null, c = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((x) => ({ x: Number(x.x || 0), y: Number(x.y || 0) })) : null;
    l != null && l.visible && c && (p.cutoutPanoDimCorners = c), s && (l != null && l.visible) && c && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: bf(s),
      locked: Sn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? c : h ? p.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, I.width, I.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let x = 1; x < 4; x += 1) A.lineTo(m[x].x, m[x].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function Vb() {
    nn = null, p.mode === "frame" ? (re.frameSafeRect = ay(), Eb()) : p.mode === "unwrap" ? q0(!1) : X0(!1), Lb(), t === "cutout" && cb(), ab(), Or(), Ob(), Fb(), P.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && rt(), re.hasPresentedFrame || (re.hasPresentedFrame = !0, Y.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame && p.mode !== "frame");
    const i = L0();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === vr ? (ee == null || ee.removeAttribute("data-stage-ready"), ee == null || ee.setAttribute("data-stage-loading-kind", i.detail)) : (ee == null || ee.setAttribute("data-stage-ready", ""), ee == null || ee.removeAttribute("data-stage-loading-kind"));
  }
  function zb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function $b() {
    e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = r0();
  }
  function be(i = {}) {
    var _, w, k, C, N, O, G, Q, K, oe;
    const s = !!i.localOnly, l = i.externalSync === !0, c = String(i.cause || ""), h = String(((_ = p.interaction) == null ? void 0 : _.kind) || "");
    (!s || h === "view" || h === "pan_frame" || zb() || !!((w = p.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (re.backgroundDirty = !0), s && hf() && (p.livePaintInteractionRevision += 1, re.backgroundDirty = !0), (!s || c === "selection" || c === "mode" || c === "cutout_frame") && (Il(), Er()), $b(), l && ((C = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || C.call(k), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), l && !s && ((G = (O = e.graph) == null ? void 0 : O.setDirtyCanvas) == null || G.call(O, !0, !0), (oe = (K = (Q = sr) == null ? void 0 : Q.canvas) == null ? void 0 : K.setDirty) == null || oe.call(K, !0, !0)), re.dirty = !0;
  }
  function Xf() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return I.width !== s || I.height !== l || Y.width !== s || Y.height !== l ? (I.width = s, I.height = l, Y.width = s, Y.height = l, re.backgroundDirty = !0, re.dirty = !0, t === "cutout" && (re.pendingStableLayoutFrames = Math.max(Number(re.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function jb(i = performance.now()) {
    var m, x;
    re.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const _ = W(
        (i - Number(p.frameRollOverlayStartTs || i)) / KN,
        0,
        1
      );
      p.frameRollOverlayAlpha = Jn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        os(_)
      ), _ >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), re.dirty = !0;
    }
    const c = Rb();
    if (Math.abs(c - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = c, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const _ = W(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Sp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Jn(
        Number(p.cutoutPanoDimFrom || 0),
        c,
        os(_)
      ), _ >= 1 && (p.cutoutPanoDimAlpha = c), _ >= 1 && c === 0 && (p.cutoutPanoDimCorners = null), re.dirty = !0;
    }
    const h = t === "cutout" && Be() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const _ = W(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Sp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Jn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        os(_)
      ), _ >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), re.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(p.outputPreviewAnimDurationMs)), w = W((i - Number(p.outputPreviewAnimStartTs || 0)) / _, 0, 1), C = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? eP(w) : iP(w);
      p.outputPreviewAnim = Jn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, C), re.dirty = !0, w >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((x = p.viewTween) != null && x.active) {
      const _ = p.viewTween, w = W((i - _.startTs) / _.durationMs, 0, 1), k = os(w);
      p.viewYaw = Ut(_.startYaw + _.deltaYaw * k), p.viewPitch = _.startPitch + (_.targetPitch - _.startPitch) * k, p.viewFov = _.startFov + (_.targetFov - _.startFov) * k, re.backgroundDirty = !0, re.dirty = !0, w >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(on.state.inertia.vx || 0), p.viewInertia.vy = Number(on.state.inertia.vy || 0), p.viewInertia.active = !!on.state.inertia.active, on.stepInertia(i) && (p.viewInertia.vx = Number(on.state.inertia.vx || 0), p.viewInertia.vy = Number(on.state.inertia.vy || 0), p.viewInertia.active = !!on.state.inertia.active, re.backgroundDirty = !0, re.dirty = !0), (re.dirty || i - re.lastSizeCheckTs >= 220) && (Xf(), re.lastSizeCheckTs = i), re.pendingStableLayoutFrames > 0 && (re.pendingStableLayoutFrames -= 1, re.dirty = !0), re.dirty) {
      if (re.pendingStableLayoutFrames > 0)
        return;
      re.dirty = !1, Vb();
    }
  }
  function Jf(i = performance.now()) {
    if (re.running)
      try {
        jb(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        re.tickErrorSignature !== l && (re.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = Sr, P.stageStatusDetail = "frame", ee == null || ee.setAttribute("data-stage-ready", ""), ee == null || ee.removeAttribute("data-stage-loading-kind");
      } finally {
        re.running && (re.rafId = requestAnimationFrame(Jf));
      }
  }
  function Hb() {
    re.running = !1, re.rafId && cancelAnimationFrame(re.rafId), re.rafId = 0;
  }
  function lt() {
    r || (p.historyController.commitActionGroup(JSON.stringify(Ch(y))), Zl());
  }
  function Gl(i) {
    if (r) return;
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Zl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(y).forEach((c) => delete y[c]), Object.assign(y, l), p.selectedId = t === "stickers" || t === "cutout" ? y.active.selected_sticker_id : y.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], nr(), Dn(), Ye(), On(), be({ cause: "cutout_frame" });
  }
  function Zf() {
    var l, c;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((c = p.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Dn() {
    qg();
    const i = mk({
      editor: p,
      swatches: Ns,
      paintColorPopOpen: q ? !q.hidden : !1,
      colorToCss: pr,
      colorsApproximatelyEqual: Ps,
      rgb01ToHsv: Vu,
      hsv01ToRgb: Lu,
      getBrushPresetIdForTool: ni,
      isActiveLassoTool: d0
    });
    if (Object.assign(P.paintDock, i), y0(), !i.visible) {
      q && (q.hidden = !0);
      return;
    }
    ce && (clearTimeout(ce), ce = 0), B && (!i.colorEnabled && q && !q.hidden && (ce = window.setTimeout(() => {
      q.hidden = !0, P.paintDock.colorPopOpen = !1, ce = 0;
    }, 170)), q && (q.style.setProperty("--picker-hue-color", i.pickerHueColor), q.style.setProperty("--picker-sat", i.pickerSat), q.style.setProperty("--picker-val", i.pickerVal), q.style.setProperty("--picker-hue", i.pickerHue)), he && (he.style.left = i.pickerSvLeft, he.style.top = i.pickerSvTop), te && (te.style.left = i.pickerHueLeft));
  }
  function qi() {
    const i = t === "cutout" && p.mode === "frame" ? Be() : Et();
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: jr(i)
    }, Ye());
  }
  function Ye() {
    var We, it, _e, ae;
    if (a) return;
    y.ui_settings = y.ui_settings || {};
    const i = pk(y.ui_settings);
    if (o) {
      P.sidePanel = gk({
        coverage: y.coverage,
        uiSettings: i,
        normalizeCoverageValue: dn
      });
      return;
    }
    const s = Et(), l = t === "cutout" && p.mode === "frame" ? Be() : null, c = l || s, h = l ? [l] : tr(), m = l ? "shot" : Co();
    h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: jr(c)
    });
    const x = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : c, w = _ || x, k = !!_ && !Sn(_);
    p.panelWasEnabled = k, Il();
    let C = null;
    if (l) {
      const ge = Nl({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ge.label,
        currentIcon: ge.icon || null,
        items: [{
          id: String(l.id || ""),
          label: ge.label,
          icon: ge.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ge = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Ir().forEach((Ee, Xe) => {
        var sn, Ct;
        if (!Ee) return;
        const ut = Jt(Ee) ? String(Ee.id || rs) : String(((Ct = (sn = y.assets) == null ? void 0 : sn[Ee.asset_id]) == null ? void 0 : Ct.name) || Ee.asset_id || Ee.id), tt = `${Xe + 1}. ${ut}${Jt(Ee) && $i(Ee) ? " (hidden)" : ""}`, St = Nl({ item: Ee, label: tt, kind: "image" });
        ge.push({ id: Ee.id, label: St.label, icon: St.icon, item: Ee, kind: "image" });
      }) : yf().forEach((Ee) => {
        if (!(Ee != null && Ee.item)) return;
        const Xe = Nl(Ee);
        ge.push({ id: Ee.item.id, label: Xe.label, icon: Xe.icon, item: Ee.item, kind: Ee.kind });
      });
      const Oe = (_ == null ? void 0 : _.id) || "", Fe = ge.find((Ee) => Ee.id === Oe) || ge[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: ge.length <= 1,
        currentLabel: Fe.label,
        currentIcon: Fe.icon || null,
        items: ge.map((Ee) => ({
          id: Ee.id,
          label: Ee.label,
          icon: Ee.icon || null,
          active: Ee.id === Oe
        }))
      };
    }
    const N = [], O = (ge, Oe, Fe, Ee, Xe) => {
      const ut = W(Number(w[ge] || 0), Fe, Ee);
      N.push({
        key: ge,
        label: Oe,
        min: Fe,
        max: Ee,
        step: Xe,
        value: ut,
        displayValue: ia(ut),
        fillPct: W((ut - Fe) / Math.max(1e-6, Ee - Fe) * 100, 0, 100),
        enabled: k && !r
      });
    }, G = [];
    h.length > 1 ? (G.push(`Selected objects: ${h.length}`), G.push("Multi-selection supports z-order and delete.")) : (O("yaw_deg", "Yaw", -180, 180, 0.1), O("pitch_deg", "Pitch", -90, 90, 0.1), O("hFOV_deg", "H FOV", 1, 179, 0.1), O("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? O("rot_deg", "Rotation", -180, 180, 0.1) : O("roll_deg", "Roll", -180, 180, 0.1));
    const Q = Array.isArray((it = (We = y == null ? void 0 : y.painting) == null ? void 0 : We.paint) == null ? void 0 : it.strokes) ? y.painting.paint.strokes.length : 0, K = Array.isArray((ae = (_e = y == null ? void 0 : y.painting) == null ? void 0 : _e.mask) == null ? void 0 : ae.strokes) ? y.painting.mask.strokes.length : 0, oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ge) => String((ge == null ? void 0 : ge.name) || "")) : [], ue = QN(
      e,
      oe.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), me = !!String((ue == null ? void 0 : ue.src) || "").trim() || _f("pano_input_images").length > 0, le = Array.isArray(Ir()) && Ir().length > 0 || Q > 0, Se = K > 0, ze = [
      { key: "mask", label: "Mask", icon: Te.circle_dashed_tool, visible: !!p.showMask, enabled: Se },
      { key: "objects", label: "Paint / Images", icon: Te.image, visible: !!p.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: Te.globe, visible: !!p.showPanorama, enabled: me }
    ].map((ge) => ({
      ...ge,
      ariaLabel: `Toggle ${ge.label.toLowerCase()}`,
      tip: ge.visible ? "Hide" : "Show"
    }));
    P.sidePanel = bk({
      coverage: y.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: k,
      selectedKind: m,
      selectedItems: h,
      params: N,
      notes: G,
      visibilityRows: ze,
      uiSettings: i,
      normalizeCoverageValue: dn
    });
  }
  async function Qf(i) {
    if (r || t !== "stickers" && t !== "cutout" || !kr(i)) return;
    const s = ds("asset"), l = ac(e, `add:${s}`, async () => {
      try {
        const { image: c } = await oc(i);
        Ve.set(s, c);
        const h = ds("st");
        y.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ui(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
          rot_deg: 0,
          z_index: vf()
        }), zi(y.stickers[y.stickers.length - 1]), Kl(), Ye(), rt(), be();
        const m = await ks(i, {
          fetchApi: (w, k) => mn.fetchApi(w, k)
        });
        if (!(Array.isArray(y.stickers) ? y.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === s).length) return;
        y.assets[s] = m, Bi(), lt(), ct(), Ye(), rt(), be();
      } catch (c) {
        delete y.assets[s], Ve.delete(s);
        const h = Array.isArray(y.stickers) ? y.stickers : [], m = h.filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s);
        throw m.length && (y.stickers = h.filter((x) => String((x == null ? void 0 : x.asset_id) || "") !== s), m.some((x) => String((x == null ? void 0 : x.id) || "") === String(p.selectedId || "")) && zi(null), Ye(), rt(), be(), ct()), c;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Ub() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = $ == null ? void 0 : $.openImagePicker) == null || i.call($, "add");
  }
  async function Gb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Et();
    if (!s || !_t(s) || Jt(s) || !kr(i)) return;
    const l = String(s.id || ""), c = ds("asset"), h = ac(e, `replace:${l}:${c}`, async () => {
      var C;
      const m = (Array.isArray(y.stickers) ? y.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === l) || null;
      if (!m || !_t(m) || Jt(m)) return;
      const x = String(m.asset_id || ""), _ = x ? fn(((C = y.assets) == null ? void 0 : C[x]) || null) : null, w = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: N } = await oc(i);
        Ve.set(c, N), m.asset_id = c, m.vFOV_deg = Ui(
          Number(m.hFOV_deg || 30),
          Number(N.naturalWidth || N.width || 1),
          Number(N.naturalHeight || N.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, an(), Ye(), rt(), be();
        const O = await ks(i, {
          fetchApi: (Q, K) => mn.fetchApi(Q, K)
        }), G = (Array.isArray(y.stickers) ? y.stickers : []).find((Q) => String((Q == null ? void 0 : Q.id) || "") === l) || null;
        if (!G || String(G.asset_id || "") !== c) return;
        y.assets[c] = O, Bi(), lt(), ct(), Ye(), rt(), be();
      } catch (N) {
        delete y.assets[c], Ve.delete(c);
        const O = (Array.isArray(y.stickers) ? y.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === l) || null;
        throw O && String(O.asset_id || "") === c && (x && _ && (y.assets[x] = _), O.asset_id = x, O.vFOV_deg = w, O.crop = k ? { ...k } : null), an(), ct(), Ye(), rt(), be(), N;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function Bb() {
    var s;
    if (r) return;
    const i = Et();
    !i || !_t(i) || Jt(i) || (s = $ == null ? void 0 : $.openImagePicker) == null || s.call($, "replace");
  }
  async function Kb() {
    if (r || t !== "stickers") return;
    const i = y.assets && typeof y.assets == "object" ? y.assets : {}, s = Object.entries(i).filter(([, c]) => {
      const h = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [c, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const x = await fetch(m).then((N) => N.blob()), _ = String(x.type || "image/png").split("/")[1] || "png", w = String((h == null ? void 0 : h.name) || `${c}.${_}`), k = new File([x], w, { type: x.type || "image/png" }), C = await ks(k, {
          fetchApi: (N, O) => mn.fetchApi(N, O)
        });
        y.assets[c] = {
          ...C,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ct(), be());
  }
  function Wb() {
    if (r || t !== "cutout") return;
    const i = Be();
    if (i) {
      zi(i), p.mode = "pano", yl(
        Ut(Number(i.yaw_deg || 0)),
        W(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), Ye(), rt(), be({ cause: "cutout_frame" });
      return;
    }
    const s = Um({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ut(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    y.shots = [s], zi(s), Kl(), p.mode = "pano", lt(), ct(), Ye(), rt(), be({ cause: "cutout_frame" });
  }
  function Yb() {
    r || t !== "cutout" || (y.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, y.active.selected_shot_id = null, lt(), ct(), Ye(), rt(), be());
  }
  function qb() {
    const i = Array.isArray(y.stickers) ? y.stickers : [], s = [];
    for (const l of i)
      Jt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function ed(i, s, l = "Clear") {
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
  async function Xb() {
    var l, c;
    if (r || !await ed(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    y.painting = ya(null), nr();
    const s = qb();
    if (t === "stickers")
      y.stickers = s, y.assets = {}, p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], y.active.selected_sticker_id = ((c = s[0]) == null ? void 0 : c.id) || null, Bi();
    else {
      const h = mx(y.shots, y.active.selected_shot_id);
      y.stickers = s, y.assets = {}, y.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], y.active.selected_sticker_id = null, y.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, Bi();
    }
    lt(), ct(), Ye(), rt(), be();
  }
  async function Jb(i) {
    var m, x, _, w;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", c = Xi(s);
    if (!(!c.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((x = p.interaction) == null ? void 0 : x.layerKind) === s) || !await ed(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((_ = p.interaction) == null ? void 0 : _.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === s) {
        const k = $n();
        k && p.paintEngine.cancelActiveStroke(k), p.interaction = null;
      }
      c.length = 0, y.painting.raster_objects = En().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (ln().length = 0), nr(), lt(), ct(), Ye(), rt(), Dn(), be();
    }
  }
  function Zb() {
    if (r) return;
    const i = Et();
    if (!i || !_t(i) || Jt(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = ds("st"), s.yaw_deg = Ut((s.yaw_deg || 0) + 8), s.z_index = vf(), y.stickers.push(s), y.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], an(), lt(), ct(), rt(), Ye(), be();
  }
  function td() {
    var l, c, h, m, x, _;
    if (r) return;
    const i = tr(), s = Et();
    if (!(!s && i.length === 0) && !i.some((w) => Sn(w))) {
      if (i.length > 1) {
        const w = new Set(i.filter((N) => Bt(N)).map((N) => String(N.actionGroupId || N.id || ""))), k = new Set(i.filter((N) => un(N)).map((N) => Xt(N.rasterObjectId || N.id || ""))), C = new Set(i.filter(_t).map((N) => String(N.id || "")));
        w.size > 0 && (y.painting.paint.strokes = (Array.isArray((c = (l = y.painting) == null ? void 0 : l.paint) == null ? void 0 : c.strokes) ? y.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), y.painting.groups = ln().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), nr()), k.size > 0 && (y.painting.raster_objects = En().filter((N) => !k.has(String((N == null ? void 0 : N.id) || ""))), Yi()), C.size > 0 && (y.stickers = (Array.isArray(y.stickers) ? y.stickers : []).filter((N) => C.has(String((N == null ? void 0 : N.id) || "")) ? Jt(N) ? ($i(N) || (N.visible = !1), !0) : !1 : !0), Bi(), an()), p.selectedId = null, p.selectedIds = [], lt(), ct(), Ye(), rt(), be();
        return;
      }
      if (Bt(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        y.painting.paint.strokes = (Array.isArray((m = (h = y.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? y.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), y.painting.groups = ln().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), nr(), p.selectedId = null, p.selectedIds = [], lt(), ct(), Ye(), rt(), be();
        return;
      }
      if (un(s)) {
        const w = Xt(s.rasterObjectId || s.id || "");
        y.painting.raster_objects = En().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Yi(), p.selectedId = null, p.selectedIds = [], lt(), ct(), Ye(), rt(), be();
        return;
      }
      if (t === "stickers" || _t(s)) {
        if (Jt(s)) {
          if ($i(s)) return;
          s.visible = !1, an(), lt(), ct(), Ye(), rt(), be();
          return;
        }
        y.stickers = y.stickers.filter((w) => w.id !== s.id), Bi(), an(), p.selectedId = ((x = y.stickers[0]) == null ? void 0 : x.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], y.active.selected_sticker_id = ((_ = y.stickers[0]) == null ? void 0 : _.id) || null, lt(), ct(), Ye(), rt(), be();
        return;
      }
      Yb();
    }
  }
  function Bl(i, s) {
    const l = re.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const c = Eu * Ii(l, i), h = Yc(Wc(l, s), c);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function nd(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [C, N] = _.split(":").map((O) => Number(O));
        if (Number.isFinite(C) && Number.isFinite(N)) return C >= N;
      }
      const w = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(w - k) > 1e-6 ? w >= k : Ti(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== c && ([h, m] = [m, h]);
    const x = h / m;
    if (!Bl(i, x)) {
      const _ = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = _s(_, x);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Qb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const c = yo(s, l);
    if (!c) return !1;
    const h = c.ratio;
    if (!Bl(i, h)) {
      const m = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = _s(m, h);
    }
    return i.aspect_id = c.label, !0;
  }
  function rd(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Xr(i), c = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, c);
    if (!Bl(i, h)) {
      const m = W(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = _s(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, x] = s.split(":");
      i.aspect_id = `${x}:${m}`;
    } else
      i.aspect_id = wi(i);
  }
  function id() {
    Ri().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function ey() {
    if (r) return;
    const i = tr();
    if (!Et() || i.length === 0 || i.some((_) => Sn(_))) return;
    id();
    const l = Ri(), c = new Set(i.map((_) => _t(_) ? `sticker:${String(_.id || "")}` : un(_) ? `rasterObject:${Xt(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (l.forEach((_) => {
      var k, C;
      const w = _.type === "sticker" ? `sticker:${String(((k = _.item) == null ? void 0 : k.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((C = _.item) == null ? void 0 : C.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      c.has(w) ? h.push(_) : m.push(_);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((_, w) => {
      _.type === "sticker" && _.item && (_.item.z_index = w), _.type === "strokeGroup" && _.item && (_.item.z_index = w), _.type === "rasterObject" && _.item && (_.item.z_index = w);
    }), an(), lt(), ct(), rt(), be();
  }
  function ty() {
    if (r) return;
    const i = tr();
    if (!Et() || i.length === 0 || i.some((_) => Sn(_))) return;
    id();
    const l = Ri(), c = new Set(i.map((_) => _t(_) ? `sticker:${String(_.id || "")}` : un(_) ? `rasterObject:${Xt(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (l.forEach((_) => {
      var k, C;
      const w = _.type === "sticker" ? `sticker:${String(((k = _.item) == null ? void 0 : k.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((C = _.item) == null ? void 0 : C.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      c.has(w) ? h.push(_) : m.push(_);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((_, w) => {
      _.type === "sticker" && _.item && (_.item.z_index = w), _.type === "strokeGroup" && _.item && (_.item.z_index = w), _.type === "rasterObject" && _.item && (_.item.z_index = w);
    }), an(), lt(), ct(), rt(), be();
  }
  function ny() {
    r || (y.projection_model = "pinhole_rectilinear", y.alpha_mode = "straight", f && (y.output_preset = M(Number(y.output_preset || 2048))), d && (y.coverage = dn(d.value)), b && (y.bg_color = String(b.value || y.bg_color || "#00ff00")), On(), e.setDirtyCanvas(!0, !0));
  }
  function On() {
    var s;
    if (r) return;
    y.coverage = dn(y.coverage), Zm(e, y.active);
    const i = Qm(e, y);
    g && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const ad = () => On();
  r || (e.__panoFlushStateBeforeQueue = ad);
  function $o() {
    y.ui_settings = uP(y.ui_settings), r || On();
  }
  function ct() {
    var i;
    r || (On(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function ry() {
    r || R0() && Ef().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function iy(i = {}) {
    var c, h, m, x, _, w, k, C, N, O;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (x = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || x.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), l && ((k = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || k.call(w, !0, !0), (O = (N = (C = sr) == null ? void 0 : C.canvas) == null ? void 0 : N.setDirty) == null || O.call(N, !0, !0));
  }
  function Kl() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", Dn(), Ye());
  }
  function mi(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function jo(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function od() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Be() {
    if (t !== "cutout") return null;
    const i = Array.isArray(y.shots) ? y.shots : [];
    if (!i.length) return null;
    const s = String(y.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function ay() {
    var G, Q, K, oe, ue;
    if (!I) return null;
    const i = (G = I.getBoundingClientRect) == null ? void 0 : G.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    re.frameCanvasScale = Math.min(s, l);
    let c = 24, h = 24;
    const m = Math.max(c + 1, I.width - 24);
    let x = Math.max(h + 1, I.height - 24);
    const _ = (Q = nt == null ? void 0 : nt.getBoundingClientRect) == null ? void 0 : Q.call(nt), w = (K = qe == null ? void 0 : qe.getBoundingClientRect) == null ? void 0 : K.call(qe);
    let k = 24;
    _ && i && _.width > 0 && _.height > 0 && (k = Math.max(k, (_.right - i.left) * s + xp)), w && i && w.width > 0 && w.height > 0 && ((oe = P.frameRail) == null ? void 0 : oe.visible) === !0 && (k = Math.max(k, (i.right - w.left) * s + xp)), c = Math.max(c, k);
    const C = Math.min(m, I.width - k);
    let N = 24;
    const O = (ue = gt == null ? void 0 : gt.getBoundingClientRect) == null ? void 0 : ue.call(gt);
    if (O && i && O.width > 0 && O.height > 0 && (N = Math.max(N, (O.bottom - i.top) * l + Du)), [qt, An].forEach((me) => {
      var ze;
      if (!me || !i) return;
      const le = getComputedStyle(me);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const Se = (ze = me.getBoundingClientRect) == null ? void 0 : ze.call(me);
      !Se || Se.width <= 0 || Se.height <= 0 || (N = Math.max(N, (i.bottom - Se.top) * l + Du));
    }), He && i) {
      const me = getComputedStyle(He);
      me.display !== "none" && me.visibility !== "hidden" && Number(me.opacity) > 0 && (N = Math.max(N, (GN + Du) * l));
    }
    return h = Math.max(h, N), x = Math.max(h + 1, Math.min(x, I.height - N)), {
      x: c,
      y: h,
      w: Math.max(1, C - c),
      h: Math.max(1, x - h)
    };
  }
  function Wl(i = Be()) {
    if (!i || !I) return null;
    const s = re.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return K_(s, i, Eu * Ii(s, i));
  }
  function Kt(i = Be()) {
    const s = Wl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Yl() {
    return t === "cutout" && !!Be();
  }
  function rr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ei(), x = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (x % 1 + 1) % 1,
        v: W(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = El(i.x, i.y), { lon: c, lat: h } = Fl(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function ir(i, s, l = performance.now()) {
    const c = Kt(s);
    if (!c) return null;
    const h = {
      x: (Number(i.x) - c.x) / Math.max(1, c.w),
      y: (Number(i.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = jl(s, h);
    if (!m) return null;
    const { lon: x, lat: _ } = Fl(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (x / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - _ / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function oy(i, s) {
    const l = Be();
    if (!l || l.locked === !0) return !1;
    const c = Number(s) > 0, h = Bm(l, s);
    if (!h) return !1;
    if (c) {
      const m = Eu * Ii(
        re.frameSafeRect || { w: I.width, h: I.height },
        h
      ), x = qc({ width: I.width, height: I.height }, m);
      if (x.halfW < I.width * 0.5 - 1e-6 || x.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, lt(), ct(), Ye());
    }, 180), Ye(), !0;
  }
  function sy() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, lt(), ct(), Ye(), !0) : !1;
  }
  function Ha() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && gi(), p.interaction = null, Gi(), Er(), Ye(), xt(p.pointerPos), be({ localOnly: !0 }), !0;
  }
  function ly(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function ni(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Rr : Fn[s] ? s : p.activeBrushPresetId || Rr;
  }
  function sd() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (od() || Yl());
  }
  function ld() {
    var i;
    return sd() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ho(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), c = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, x = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - c) > 0.01;
    return p.pointerPos = { x: l, y: c, inside: h }, x;
  }
  function uy() {
    var C, N;
    if (!ld()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = ni(s), c = Fn[l] || Fn[Rr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), x = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(p.paintColor), w = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : W(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : W(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: c,
      radius: x,
      fillStyle: pr(_, w),
      strokeStyle: pr(_, k),
      x: Number(((C = p.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((N = p.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: x,
      hotspotY: x
    };
  }
  function cy() {
    var O, G, Q;
    const i = uy();
    if (!de) return;
    if (!i) {
      de.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, c = "999px", h = 0, m = i.fillStyle, x = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), N = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Xs, l = Xs, c = "0", x = "0", _ = "none", C = WN, N = YN, m = oP(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const K = Math.max(1, Number(((O = i.preset) == null ? void 0 : O.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * K), l = Math.max(6, i.radius * 2), c = `${Math.min(6, l * 0.42)}px`, h = Number(((Q = (G = i.preset) == null ? void 0 : G.angle) == null ? void 0 : Q.value) || 0) * ki;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    de.style.display = "block", de.style.width = `${Math.round(s)}px`, de.style.height = `${Math.round(l)}px`, de.style.borderRadius = c, de.style.border = x, de.style.boxShadow = _, de.style.background = m, de.style.backgroundRepeat = "no-repeat", de.style.backgroundPosition = "center", de.style.backgroundSize = "contain", de.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - N)}px) rotate(${h}deg)`;
  }
  function fy() {
    var me;
    if (!fe || !ke) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = ni(s), c = Fn[l] || Fn[Rr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), x = Math.max(6, m * 0.5), _ = s === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(p.paintColor), k = i === "mask" ? pr(w, 0.22) : _ ? "rgba(255,255,255,0.14)" : pr(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? pr(w, 0.96) : _ ? "rgba(255,255,255,0.72)" : pr(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let N = x * 2, O = x * 2, G = "999px", Q = 0, K = k;
    const oe = "rgba(222, 222, 222, 0.72)", ue = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const le = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      N = Math.max(16, x * 2 * le), O = Math.max(10, x * 2), G = `${Math.min(8, O * 0.42)}px`, Q = Number(((me = c == null ? void 0 : c.angle) == null ? void 0 : me.value) || 0) * ki;
    } else s === "brush" ? K = `radial-gradient(circle at 50% 50%, ${C} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (N = Math.max(18, x * 1.8), O = N, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : _ && (K = "rgba(255,255,255,0.12)");
    ke.style.width = `${Math.round(N)}px`, ke.style.height = `${Math.round(O)}px`, ke.style.borderRadius = G, ke.style.background = K, ke.style.border = `1px solid ${oe}`, ke.style.boxShadow = `0 0 0 1px ${ue}`, ke.style.transform = `rotate(${Q}deg)`, Z && (clearTimeout(Z), Z = 0), fe.classList.remove("fade-out"), fe.classList.add("show");
  }
  function Uo() {
    !fe || !fe.classList.contains("show") || (fe.classList.add("fade-out"), Z && clearTimeout(Z), Z = window.setTimeout(() => {
      fe.classList.remove("show", "fade-out"), Z = 0;
    }, 180));
  }
  function ud(i, s, l, c) {
    const h = ni(s), m = Fn[h] || Fn[Rr], x = p.brushSizes[h] ?? 10, _ = Math.max(1, x) * Math.max(0.1, m.sizeScale ?? 1), w = ly(c, _), k = l.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), C = {
      id: aa(i),
      actionGroupId: aa("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: _,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((N) => ({ ...N })),
        points: k.map((N) => ({ ...N }))
      }
    };
    return gp(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function cd(i, s, l, c) {
    const h = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = ni(s), x = Fn[m] || Fn[Rr], _ = {
      id: aa(i),
      actionGroupId: aa("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((w) => ({ ...w }))
      }
    };
    return gp(_, x), Number(x.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function Xi(i) {
    const s = y.painting || (y.painting = ya(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function dy(i, s, l = performance.now()) {
    let c;
    if (p.mode === "frame") {
      const k = Be();
      if (!k || (c = ir(s, k, l), !c)) return !1;
    } else
      c = rr(s, l);
    if (!c) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, x = h[h.length - 1];
    if (x) {
      const k = Math.abs(Number(c.u ?? c.x ?? 0) - Number(x.u ?? x.x ?? 0)), C = Math.abs(Number(c.v ?? c.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (k < 15e-4 && C < 15e-4) return !1;
    }
    const _ = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ..._ }), m.push({ ..._ });
    const w = $n();
    if (w) {
      const k = p.paintEngine.ensureTarget(w);
      p.paintEngine.appendStrokePoint(k, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function hy(i, s, l = performance.now()) {
    var x, _;
    let c;
    if (p.mode === "frame") {
      const w = Be();
      if (!w) return !1;
      c = ir(s, w, l);
    } else
      c = rr(s, l);
    const h = (_ = (x = i == null ? void 0 : i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : _.points;
    if (!c || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && k < 15e-4) return !1;
    }
    return h.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function py(i) {
    var le, Se, ze, We, it;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Vo();
    const l = $n(), c = za(l.width, l.height);
    if (!Yf(c, s, { w: l.width, h: l.height })) return !1;
    const h = ((Se = (le = c.ctx) == null ? void 0 : le.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Se.data) || null;
    if (!h) return !1;
    const m = new Map(ln().map((_e) => [String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim(), _e ? { ..._e } : null])), x = [], _ = [], w = [...En().filter((_e) => String((_e == null ? void 0 : _e.layerKind) || "paint") !== "paint")];
    let k = !1, C = Ri().reduce((_e, ae) => Math.max(_e, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function N(_e, ae, ge, Oe = 8) {
      let Fe = ae, Ee = ge, Xe = -1, ut = -1;
      for (let tt = 0; tt < ge; tt += 1)
        for (let St = 0; St < ae; St += 1)
          _e[(tt * ae + St) * 4 + 3] <= Oe || (St < Fe && (Fe = St), tt < Ee && (Ee = tt), St > Xe && (Xe = St), tt > ut && (ut = tt));
      return Xe < Fe || ut < Ee ? null : { minX: Fe, minY: Ee, maxX: Xe, maxY: ut };
    }
    const O = N(h, l.width, l.height, 8);
    if (!O) return !1;
    function G(_e, ae) {
      return !_e || !ae ? !1 : !(_e.maxX < ae.minX || ae.maxX < _e.minX || _e.maxY < ae.minY || ae.maxY < _e.minY);
    }
    function Q(_e, ae) {
      const ge = Qr((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "", "paint", ae);
      if (!ge) return null;
      const Oe = ge.centerUv.u - ge.halfW, Fe = ge.centerUv.u + ge.halfW, Ee = ge.centerUv.v - ge.halfH, Xe = ge.centerUv.v + ge.halfH, ut = l.width, tt = l.height;
      return {
        minX: Math.floor((Oe % 1 + 1) % 1 * ut),
        maxX: Math.ceil((Fe % 1 + 1) % 1 * ut),
        minY: Math.floor(W(Ee, 0, 1) * tt),
        maxY: Math.ceil(W(Xe, 0, 1) * tt),
        wraps: Fe - Oe >= 1 || Oe < 0 || Fe > 1
      };
    }
    function K(_e) {
      const ae = (_e == null ? void 0 : _e.bbox) || null;
      if (!ae) return null;
      const ge = (_e == null ? void 0 : _e.transform) || {}, Oe = l.width, Fe = l.height, Ee = Number(ae.u0 || 0) + Number(ge.du || 0), Xe = Number(ae.u1 || 0) + Number(ge.du || 0), ut = Number(ae.v0 || 0) + Number(ge.dv || 0), tt = Number(ae.v1 || 0) + Number(ge.dv || 0);
      return {
        minX: Math.floor((Ee % 1 + 1) % 1 * Oe),
        maxX: Math.ceil((Xe % 1 + 1) % 1 * Oe),
        minY: Math.floor(W(ut, 0, 1) * Fe),
        maxY: Math.ceil(W(tt, 0, 1) * Fe),
        wraps: Xe - Ee >= 1 || Ee < 0 || Xe > 1
      };
    }
    function oe(_e) {
      return _e ? _e.wraps ? G(O, { minX: 0, maxX: _e.maxX, minY: _e.minY, maxY: _e.maxY }) || G(O, { minX: _e.minX, maxX: l.width - 1, minY: _e.minY, maxY: _e.maxY }) : G(O, _e) : !0;
    }
    function ue(_e) {
      if (!_e) return { touched: !1, canvas: null };
      const ae = za(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(_e, 0, 0);
      const ge = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(c.canvas, 0, 0), ae.ctx.restore();
      const Oe = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Fe = 0; Fe < l.width * l.height; Fe += 1) {
        if (h[Fe * 4 + 3] <= 8) continue;
        const Xe = ge.data[Fe * 4 + 3], ut = Oe.data[Fe * 4 + 3];
        if (Xe > ut)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(_e, ae, ge) {
      const Oe = Number(ge == null ? void 0 : ge.z_index), Fe = Pb(_e, ae, ge).map((Ee, Xe) => ({
        ...Ee,
        z_index: Number.isFinite(Oe) ? Oe + Xe * 1e-3 : C + Xe * 1e-3
      }));
      return Fe.length && (C = Math.max(C, ...Fe.map((Ee) => Number((Ee == null ? void 0 : Ee.z_index) || 0))) + 1), Fe;
    }
    for (const _e of ln()) {
      const ae = String((_e == null ? void 0 : _e.actionGroupId) || (_e == null ? void 0 : _e.id) || "").trim();
      if (!ae) continue;
      const ge = er(ae, "paint");
      if (!oe(Q(_e, ge))) {
        _.push(_e), x.push(...ge);
        continue;
      }
      const Oe = ((We = (ze = p.paintEngine) == null ? void 0 : ze.getGroupTarget) == null ? void 0 : We.call(ze, ae)) || null, Fe = ((it = Oe == null ? void 0 : Oe.committedPaint) == null ? void 0 : it.canvas) || null;
      if (!Fe) {
        _.push(_e), x.push(...ge);
        continue;
      }
      const Ee = ue(Fe);
      if (!Ee.touched || !Ee.canvas) {
        _.push(_e), x.push(...ge);
        continue;
      }
      k = !0;
      const Xe = me(Ee.canvas, "paint", m.get(ae) || _e || {});
      w.push(...Xe);
    }
    for (const _e of En().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!oe(K(_e))) {
        w.push(_e);
        continue;
      }
      const ae = If(_e, null);
      if (!ae) {
        w.push(_e);
        continue;
      }
      const ge = ue(ae);
      if (!ge.touched || !ge.canvas) {
        w.push(_e);
        continue;
      }
      k = !0;
      const Oe = me(ge.canvas, "paint", _e);
      w.push(...Oe);
    }
    return k ? (y.painting.paint.strokes = x, y.painting.groups = _.sort((_e, ae) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), y.painting.raster_objects = w.sort((_e, ae) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Ra({ preservePanelValues: !1 }), !0) : !1;
  }
  function my(i) {
    var x, _, w, k, C;
    if ((((_ = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : _.rawPoints) || ((k = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      ql(i);
      const N = $n();
      N && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(N) : p.paintEngine.commitActiveStroke(i.stroke, N)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = ud(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = $n();
    m && p.paintEngine.beginStroke(h, m);
  }
  function gy(i) {
    var x, _;
    if ((((_ = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      ql(i);
      const w = $n();
      w && p.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = cd(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = $n();
    m && p.paintEngine.beginStroke(h, m);
  }
  function ql(i) {
    var m, x, _, w;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((x = i == null ? void 0 : i.stroke) == null ? void 0 : x.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Hl(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), py(i);
    const c = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (c && df((_ = i.stroke) == null ? void 0 : _.actionGroupId), Xi(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = Hl(h, i.stroke.targetSpace, !0), c && df((w = i.stroke) == null ? void 0 : w.actionGroupId), Xi(i.layerKind).push(i.stroke), !0);
  }
  function fd(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const c = Be(), h = Kt(c);
      if (!c || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const x = ir(i, c, performance.now()), _ = x ? Ki(x) : null;
      if (_)
        for (const k of $l()) {
          if (!_t(k)) continue;
          const C = ja(k, _);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const N = Zt(k);
            if (N != null && N.visible) return { item: k, geom: N };
          }
        }
      const w = xl(!1).slice().sort((k, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of w) {
        if (k.type === "strokeGroup") {
          const O = Vi(Da("paint", k.actionGroupId || k.id || ""));
          if (!O) continue;
          const G = Zt(O);
          if (!(G != null && G.visible)) continue;
          const Q = Array.isArray(G.strokePaths) ? G.strokePaths : [];
          for (const K of Q) {
            const oe = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!oe.length) continue;
            if (K.closed && oe.length >= 3 && Vr(i, oe)) return { item: O, geom: G };
            const ue = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < oe.length - 1; me += 1)
              if (Ru(i, oe[me], oe[me + 1]) <= ue * ue) return { item: O, geom: G };
            if (oe.length === 1 && ii(i, oe[0]) <= ue * ue) return { item: O, geom: G };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const O = Li(Oa(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!O) continue;
          const G = Zt(O);
          if (Cf(O, G, i, x)) return { item: O, geom: G };
          continue;
        }
        const C = k.item;
        if (!C || !_t(C) || !_) continue;
        const N = ja(C, _);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const O = Zt(C);
          if (O != null && O.visible) return { item: C, geom: O };
        }
      }
      return null;
    }
    const s = [
      ...xl(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? Vi(Da("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Li(Oa(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? $l().filter((c) => zn(c)) : []
    ];
    for (const c of s) {
      if (Bt(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        const x = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of x) {
          const w = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!w.length) continue;
          if (_.closed && w.length >= 3 && Vr(i, w)) return { item: c, geom: m };
          const k = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < w.length - 1; C += 1)
            if (Ru(i, w[C], w[C + 1]) <= k * k) return { item: c, geom: m };
          if (w.length === 1 && ii(i, w[0]) <= k * k) return { item: c, geom: m };
        }
        continue;
      }
      if (un(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        if (Cf(c, m, i)) return { item: c, geom: m };
        continue;
      }
      const h = Zt(c);
      if (h.visible && Vr(i, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function Xl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (_t(l)) return rc(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((x) => ii(x, s) <= 121);
      if (h >= 0) {
        const x = i.corners[h], _ = x.x - i.center.x, w = x.y - i.center.y, k = _ * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const x of m) {
        const _ = Array.isArray(x == null ? void 0 : x.points) ? x.points : [];
        if (x.closed && _.length >= 3 && Vr(s, _)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((x == null ? void 0 : x.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < _.length - 1; k += 1)
          if (Ru(s, _[k], _[k + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Vr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => ii(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], x = m.x - i.center.x, _ = m.y - i.center.y, w = x * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: w };
      }
      return Vr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => ii(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const c = i.corners.findIndex((h) => ii(h, s) <= 121);
    if (c >= 0) {
      const h = i.corners[c], m = h.x - i.center.x, x = h.y - i.center.y, _ = m * x >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: _ };
    }
    return ii(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Vr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function dd(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function by(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function yy(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => by(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, c = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Vr({ x: l, y: c }, s.corners);
  }
  function xt(i) {
    if (cy(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Le("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? Le("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Le("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Le(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Le("grabbing") : Le("default");
      return;
    }
    if (ld()) {
      Le("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Le(UN);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Le("default");
        return;
      }
      Le("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Le("default");
      return;
    }
    const s = Et(), l = s ? Zt(s) : null, c = s ? Sn(s) : !1, h = c ? { kind: "none", cursor: "default" } : Xl(l, i, s);
    if (!c && h.kind !== "none") {
      Le(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && fd(i)) {
      Le("default");
      return;
    }
    Le(p.mode === "pano" ? "grab" : "default");
  }
  function rt() {
    var w, k;
    if (!vn) return;
    if (p.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Et(), s = tr();
    if (!i && s.length === 0 || p.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Co(), c = yk({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? kl(s) : Zt(i),
      allLocked: Ml(s),
      anyLocked: s.some((C) => Sn(C)),
      selectedLocked: Sn(i),
      activeAspect: jr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Jt,
      isStickerHidden: $i,
      canRestoreSelectedToInitial: g0,
      iconSet: Te
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (C, N, { requireFitsBelow: O = !0 } = {}) => {
      var Se, ze, We;
      const Q = Number((Se = c.anchor) == null ? void 0 : Se.minX), K = Number((ze = c.anchor) == null ? void 0 : ze.maxX), oe = Number((We = c.anchor) == null ? void 0 : We.maxY);
      if (![Q, K, oe].every(Number.isFinite)) return null;
      const ue = Math.max(14, I.width - C - 14), me = W((Q + K) * 0.5 - C * 0.5, 14, ue), le = oe + 18;
      return !Number.isFinite(me) || !Number.isFinite(le) || O && le + N > I.height - 14 ? null : { left: me, top: le };
    }, m = Math.max(1, Number(((w = p.menuSize) == null ? void 0 : w.w) || 220)), x = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.h) || 40)), _ = h(m, x, { requireFitsBelow: !1 });
    if (!_) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!vn || P.selectionMenu.visible !== !0) return;
      const C = vn.getBoundingClientRect(), N = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, O = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      p.menuSize = { w: N, h: O, measured: !0 };
      const G = h(N, O);
      if (!G) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = G.left, P.selectionMenu.top = G.top;
    });
  }
  function gi() {
    Ge.timer && (clearTimeout(Ge.timer), Ge.timer = 0), Ge.target = null, P.tooltip.visible = !1;
  }
  function vy(i) {
    if (!tn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var K, oe;
      if (Ge.target !== l || !tn || !(l != null && l.isConnected)) return;
      const c = ee.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, x = 12, _ = Math.round(Number(((K = tn.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, w = Math.round(Number(((oe = tn.getBoundingClientRect()) == null ? void 0 : oe.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), C = !!l.closest(".pano-frame-rail"), N = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let O = "", G = h.left - c.left + h.width * 0.5 - _ * 0.5, Q = h.top - c.top - w - x;
      if (k)
        O = "tool-rail", G = h.right - c.left + 10, Q = h.top - c.top + h.height * 0.5 - w * 0.5, G = W(G, m, Math.max(m, c.width - _ - m)), Q = W(Q, m, Math.max(m, c.height - w - m));
      else if (C)
        O = "frame-rail", G = h.left - c.left - _ - 10, Q = h.top - c.top + h.height * 0.5 - w * 0.5, G = W(G, m, Math.max(m, c.width - _ - m)), Q = W(Q, m, Math.max(m, c.height - w - m));
      else if (N) {
        O = "footer";
        const ue = l.closest(".pano-paint-footer"), me = ue ? ue.getBoundingClientRect() : h;
        G = me.left - c.left + me.width * 0.5 - _ * 0.5, Q = me.bottom - c.top + 5, G = W(G, m, Math.max(m, c.width - _ - m)), Q = Math.max(m, Q);
      }
      G = W(G, m, Math.max(m, c.width - _ - m)), Q = Math.max(m, Q), P.tooltip.left = G, P.tooltip.top = Q, P.tooltip.variant = O, P.tooltip.visible = !0;
    });
  }
  const on = Kc({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Ut(Number(i.yaw || 0)), p.viewPitch = W(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = W(Number(i.fov || p.viewFov || 100), 35, 140);
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
        x: (i = y.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = y.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ei,
    onInteraction: () => {
      re.backgroundDirty = !0, re.dirty = !0;
    }
  });
  function _y(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += zm(s, i.lastAngle), i.lastAngle = s;
    const c = $m(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = c, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((x) => x.key === "roll_deg");
    h && (h.value = c, h.displayValue = ia(c), h.fillPct = (c + 180) / 360 * 100), Or(), Jl(i), be({ localOnly: !0 });
  }
  function xy(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const c = lg(i.rollGesture, s, l);
    if (!c) return;
    i.rollGesture = c.gesture, i.center = c.gesture.center, i.lastAngle = c.gesture.lastAngle, i.accumulatedRad = c.gesture.accumulatedRad, i.shot.roll_deg = c.rollDeg, i.changed = i.changed || Math.abs(c.gesture.accumulatedRad) > 1e-9;
    const h = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((x) => x.key === "roll_deg");
    h && (h.value = c.rollDeg, h.displayValue = ia(c.rollDeg), h.fillPct = (c.rollDeg + 180) / 360 * 100), Or(), Jl(i), be({ localOnly: !0 });
  }
  const hd = (i, s) => {
    const l = mi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Jl(i) {
    var x, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Ge.timer && (clearTimeout(Ge.timer), Ge.timer = 0), Ge.target = null;
    const s = Kt(i.shot), l = (x = I.getBoundingClientRect) == null ? void 0 : x.call(I), c = (_ = ee.getBoundingClientRect) == null ? void 0 : _.call(ee);
    if (!s || !l || !c || I.width <= 0 || I.height <= 0) return;
    const h = l.width / I.width, m = l.height / I.height;
    P.tooltip.text = `${ia(i.shot.roll_deg)}°`, P.tooltip.left = l.left - c.left + (s.x + s.w * 0.5) * h, P.tooltip.top = l.top - c.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  Ue == null || Ue.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = Be();
    if (!s || s.locked === !0) return;
    const l = Kt(s);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = hd(i, c);
    p.interaction = {
      kind: "roll_frame",
      shot: s,
      center: c,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = Ue.setPointerCapture) == null || m.call(Ue, i.pointerId), i.preventDefault(), Or(), Jl(p.interaction), be({ localOnly: !0 });
  }), Ue == null || Ue.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || _y(
      p.interaction,
      hd(i, p.interaction.center),
      i
    );
  });
  const Sy = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (lt(), ct(), Ye()), p.interaction = null, gi(), Er(), Or(), be());
  };
  Ue == null || Ue.addEventListener("pointerup", Sy), Ue == null || Ue.addEventListener("pointercancel", () => Ha()), Ue == null || Ue.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && Ha();
  }), Ue == null || Ue.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? Be() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, lt(), ct(), Ye(), Or(), be(), i.preventDefault());
  }), I.onpointerdown = (i) => {
    const s = mi(i);
    if (Ho(s, !0), p.viewTween = null, on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const _ = Be();
        if (!_ || r || _.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: _,
          last: s,
          start: {
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const _ = p.mode === "unwrap" ? s : jo(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, on.startDrag(_.x, _.y, i.pointerId, performance.now());
      }
      xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const _ = Be(), w = Kt(_);
      if (!_ || _.locked === !0 || !w) return;
      const k = sg({
        frame: w,
        point: s,
        startRollDeg: Number(_.roll_deg ?? _.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!k) return;
      p.interaction = {
        kind: "roll_frame",
        shot: _,
        center: k.center,
        lastAngle: k.lastAngle,
        accumulatedRad: k.accumulatedRad,
        rollGesture: k,
        start: { roll_deg: Number(_.roll_deg ?? _.rot_deg ?? 0) },
        changed: !1,
        altStarted: k.source === "alt",
        source: k.source
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), Or(), be({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const _ = Be();
      if (!_ || r || _.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: _,
        last: s,
        start: { yaw_deg: Number(_.yaw_deg || 0), pitch_deg: Number(_.pitch_deg || 0) },
        changed: !1
      }, xt(s), I.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const _ = jo(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, on.startDrag(_.x, _.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (q && !q.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (od() || Yl())) {
      const _ = p.primaryTool === "mask" ? "mask" : "paint", w = p.primaryTool === "mask" ? p.maskTool : p.paintTool, k = p.mode === "frame" && Yl() ? Be() : null, C = { kind: "ERP_GLOBAL" }, N = k ? ir(s, k, performance.now()) : rr(s, performance.now());
      if (!N) {
        xt(s);
        return;
      }
      p.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: _,
        _livePreviewToken: aa("live"),
        stroke: w === "lasso_fill" ? cd(_, w, [N], C) : ud(_, w, [N], C)
      }, Gi();
      const O = $n();
      if (O)
        if (p.paintEngine.beginStroke(p.interaction.stroke, O), p.interaction.kind === "paint_stroke") {
          const G = p.paintEngine.ensureTarget(O), Q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), K = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          p.paintEngine.appendStrokePoint(G, Q, K, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, O);
      xt(s), I.setPointerCapture(i.pointerId), be();
      return;
    }
    const l = tr(), c = Et(), h = l.length > 1 ? kl(l) : c ? Zt(c) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, xt(s), I.setPointerCapture(i.pointerId), be({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((w) => Sn(w)) ? { kind: "none" } : Xl(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((w) => w),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((w) => _t(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Bt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: fn(er(w.actionGroupId, w.layerKind)),
            frameSnapshot: fn(Qr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: wl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => un(w)).map((w) => ({
            id: Xt(w.rasterObjectId || w.id || ""),
            snapshot: fn(En().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Ff(w)
          }))
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const _ = Sn(c) ? { kind: "none" } : Xl(h, s, c);
      if (_.kind === "scale") {
        p.interaction = Bt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: fn(er(c.actionGroupId, c.layerKind)),
          frameSnapshot: fn(Qr(c.actionGroupId, c.layerKind)),
          cursor: _.cursor
        } : un(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: fn(En().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(c.rasterObjectId || c.id || ""))),
          cursor: _.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: _.cursor
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "scale_x" || _.kind === "scale_y") {
        p.interaction = {
          kind: _.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: _.cursor,
          edge: _.edge
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "rotate") {
        p.interaction = Bt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: fn(er(c.actionGroupId, c.layerKind)),
          frameSnapshot: fn(Qr(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "move") {
        if (Bt(c)) {
          const w = p.mode === "frame" ? (() => {
            const k = Be();
            return k ? ir(s, k, performance.now()) : null;
          })() : rr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: fn(er(c.actionGroupId, c.layerKind)),
            frameSnapshot: fn(Qr(c.actionGroupId, c.layerKind))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (un(c)) {
          const w = p.mode === "frame" ? (() => {
            const k = Be();
            return k ? ir(s, k, performance.now()) : null;
          })() : rr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: fn(En().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(c.rasterObjectId || c.id || "")))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: c,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = fd(s);
    if (m) {
      const _ = p.selectedId !== m.item.id;
      if (_ && p.selectedId && (lt(), On()), zi(m.item), t === "cutout" && _ && (p.cutoutAspectOpen = !1), _ && Ye(), rt(), be(), Sn(m.item)) {
        xt(s);
        return;
      }
      p.interaction = {
        kind: Bt(m.item) ? "move_stroke_group" : un(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Bt(m.item) || un(m.item) ? p.mode === "frame" ? (() => {
          const w = Be();
          return w ? ir(s, w, performance.now()) : null;
        })() : rr(s, performance.now()) : null,
        snapshot: Bt(m.item) ? fn(er(m.item.actionGroupId, m.item.layerKind)) : un(m.item) ? fn(En().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Bt(m.item) ? fn(Qr(m.item.actionGroupId, m.item.layerKind)) : null
      }, xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const x = !!p.selectedId;
    if (x && (lt(), On()), Ra(), x && Ye(), rt(), be(), p.mode === "pano") {
      const _ = jo(i);
      p.interaction = { kind: "view", last: _, lastTs: performance.now() }, on.startDrag(_.x, _.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
    }
  }, I.onpointermove = (i) => {
    var c, h, m, x, _, w, k, C, N, O, G, Q, K, oe, ue, me, le, Se, ze, We, it, _e;
    const s = mi(i);
    if (Ho(s, !0), !p.interaction) {
      xt(s);
      return;
    }
    xt(s);
    const l = p.interaction;
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let ge = !1;
      ae.forEach((Oe) => {
        const Fe = mi(Oe);
        if (p.mode === "frame") {
          const Ee = Be(), Xe = Ee ? Kt(Ee) : null;
          if (Xe) {
            const ut = (Fe.x - Xe.x) / Math.max(1, Xe.w), tt = (Fe.y - Xe.y) / Math.max(1, Xe.h);
            if (!(ut >= 0 && ut <= 1 && tt >= 0 && tt <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, my(l));
          }
        }
        dy(l, Fe, performance.now()) && (ge = !0);
      }), ge && be({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let ge = !1;
      if (ae.forEach((Oe) => {
        const Fe = mi(Oe);
        if (p.mode === "frame") {
          const Ee = Be(), Xe = Ee ? Kt(Ee) : null;
          if (Xe) {
            const ut = (Fe.x - Xe.x) / Math.max(1, Xe.w), tt = (Fe.y - Xe.y) / Math.max(1, Xe.h);
            if (!(ut >= 0 && ut <= 1 && tt >= 0 && tt <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, gy(l));
          }
        }
        hy(l, Fe, performance.now()) && (ge = !0);
      }), ge) {
        const Oe = $n();
        Oe && p.paintEngine.updateActiveStroke(l.stroke, Oe), be({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), ge = p.mode === "unwrap" ? s : jo(i);
      on.moveDrag(ge.x, ge.y, p.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = ge, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = Wl(l.shot);
      if (!ae || !l.shot) return;
      const ge = s.x - l.last.x, Oe = s.y - l.last.y, Fe = ug(l.shot, {
        dx: ge,
        dy: Oe,
        focalPx: ae.focalPx,
        invertX: ((c = y.ui_settings) == null ? void 0 : c.invert_view_x) === !0,
        invertY: ((h = y.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Fe.yaw_deg, l.shot.pitch_deg = Fe.pitch_deg, l.changed = l.changed || Math.abs(ge) > 0 || Math.abs(Oe) > 0, l.last = s, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      xy(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const ae = s.x - l.offset.x, ge = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const Oe = Be(), Fe = Kt(Oe);
        if (!Oe || !Fe) return;
        const Ee = {
          x: W((ae - Fe.x) / Math.max(1, Fe.w), 0, 1),
          y: W((ge - Fe.y) / Math.max(1, Fe.h), 0, 1)
        }, Xe = jl(Oe, Ee);
        if (!Xe) return;
        const ut = us(Xe);
        l.item.yaw_deg = ut.yaw, l.item.pitch_deg = ut.pitch;
      } else if (p.mode === "unwrap") {
        const Oe = ei(), Fe = W((ae - Oe.x) / Math.max(Oe.w, 1), 0, 1), Ee = W((ge - Oe.y) / Math.max(Oe.h, 1), 0, 1);
        l.item.yaw_deg = Ut(Fe * 360 - 180), l.item.pitch_deg = W(90 - Ee * 180, -90, 90);
      } else {
        const Oe = El(ae, ge), Fe = us(Oe);
        l.item.yaw_deg = Fe.yaw, l.item.pitch_deg = Fe.pitch;
      }
      _t(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = p.mode === "frame" ? (() => {
        const Fe = Be();
        return Fe ? ir(s, Fe, performance.now()) : null;
      })() : rr(s, performance.now());
      if (!ae || !l.startUv) return;
      const ge = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), Oe = Number(ae.v || 0) - Number(l.startUv.v || 0);
      pf((m = l.item) == null ? void 0 : m.actionGroupId, ge, Oe, l.snapshot, (x = l.item) == null ? void 0 : x.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = p.mode === "frame" ? (() => {
        const Fe = Be();
        return Fe ? ir(s, Fe, performance.now()) : null;
      })() : rr(s, performance.now());
      if (!ae || !l.startUv) return;
      const ge = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), Oe = Number(ae.v || 0) - Number(l.startUv.v || 0);
      gf(((_ = l.item) == null ? void 0 : _.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", ge, Oe, l.snapshot) && (Yi(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const ge = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      a0(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((C = l.item) == null ? void 0 : C.id) || "", ge, l.snapshot) && (Yi(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = s.x - Number(((N = l.offset) == null ? void 0 : N.x) || 0), ge = s.y - Number(((O = l.offset) == null ? void 0 : O.y) || 0);
      let Oe = !1, Fe = !1, Ee = !1;
      const Xe = ae - Number(((G = l.startCenter) == null ? void 0 : G.x) || ae), ut = ge - Number(((Q = l.startCenter) == null ? void 0 : Q.y) || ge);
      for (const tt of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const St = (t === "cutout" ? Sl() : Ir()).find((Ct) => String((Ct == null ? void 0 : Ct.id) || "") === String(tt.id || ""));
        if (!St || !_t(St)) continue;
        const sn = {
          x: Number(((K = tt.center) == null ? void 0 : K.x) || 0) + Xe,
          y: Number(((oe = tt.center) == null ? void 0 : oe.y) || 0) + ut
        };
        if (p.mode === "frame" && t === "cutout") {
          const Ct = Be(), jt = Kt(Ct);
          if (!Ct || !jt) continue;
          const bi = {
            x: W((sn.x - jt.x) / Math.max(1, jt.w), 0, 1),
            y: W((sn.y - jt.y) / Math.max(1, jt.h), 0, 1)
          }, Td = jl(Ct, bi);
          if (!Td) continue;
          const Ed = us(Td);
          St.yaw_deg = Ed.yaw, St.pitch_deg = Ed.pitch;
        } else if (p.mode === "unwrap") {
          const Ct = ei(), jt = W((sn.x - Ct.x) / Math.max(Ct.w, 1), 0, 1), bi = W((sn.y - Ct.y) / Math.max(Ct.h, 1), 0, 1);
          St.yaw_deg = Ut(jt * 360 - 180), St.pitch_deg = W(90 - bi * 180, -90, 90);
        } else {
          const Ct = El(sn.x, sn.y), jt = us(Ct);
          St.yaw_deg = jt.yaw, St.pitch_deg = jt.pitch;
        }
        Oe = !0;
      }
      for (const tt of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const St = {
          x: Number(((ue = tt.center) == null ? void 0 : ue.x) || 0) + Xe,
          y: Number(((me = tt.center) == null ? void 0 : me.y) || 0) + ut
        }, sn = p.mode === "frame" ? (() => {
          const jt = Be();
          return jt ? ir(St, jt, performance.now()) : null;
        })() : rr(St, performance.now()), Ct = tt.centerUv || null;
        if (sn && Ct) {
          const jt = qn(Number(sn.u || 0), Number(Ct.u || 0)), bi = Number(sn.v || 0) - Number(Ct.v || 0);
          pf(tt.id, jt, bi, tt.snapshot, tt.layerKind, tt.frameSnapshot) && (Oe = !0, Fe = !0);
        }
      }
      for (const tt of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const St = {
          x: Number(((le = tt.center) == null ? void 0 : le.x) || 0) + Xe,
          y: Number(((Se = tt.center) == null ? void 0 : Se.y) || 0) + ut
        }, sn = p.mode === "frame" ? (() => {
          const jt = Be();
          return jt ? ir(St, jt, performance.now()) : null;
        })() : rr(St, performance.now()), Ct = tt.centerUv || null;
        if (sn && Ct) {
          const jt = qn(Number(sn.u || 0), Number(Ct.u || 0)), bi = Number(sn.v || 0) - Number(Ct.v || 0);
          gf(tt.id, jt, bi, tt.snapshot) && (Oe = !0, Ee = !0);
        }
      }
      Oe && (Fe ? nr({ rebuildPaintEngine: !1 }) : Ee ? Yi() : an(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const ge = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      mf((ze = l.item) == null ? void 0 : ze.actionGroupId, ge, 0, l.snapshot, (We = l.item) == null ? void 0 : We.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * ki;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), mf((it = l.item) == null ? void 0 : it.actionGroupId, 1, ae, l.snapshot, (_e = l.item) == null ? void 0 : _e.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const ge = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * ge, 1, 179), l.item.vFOV_deg = W(l.startVFOV * ge, 1, 179), l.item.aspect_id = wi(l.item), _t(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const ge = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * ge, 1, 179), l.item.aspect_id = wi(l.item), _t(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const ge = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = W(l.startVFOV * ge, 1, 179), l.item.aspect_id = wi(l.item), _t(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let ge = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * ki, Oe = l.startRot - ge;
      i.shiftKey && (Oe = Math.round(Oe / 45) * 45);
      const Fe = _t(l.item) ? "rot_deg" : "roll_deg";
      l.item[Fe] = Oe, _t(l.item) && an(), be({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var s, l, c, h, m, x, _, w;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Gi();
        const k = ql(p.interaction), C = !!p.interaction._hasCommittedSegments;
        if (k || C) {
          nr();
          const N = String(((c = p.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (N) {
            const G = ln().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === N);
            G && (G.frame = null);
          }
          const O = $n();
          O && (k ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(O), Bf()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, O) : p.paintEngine.cancelActiveStroke(O)), lt(), On(), Ye(), rt(), e.setDirtyCanvas(!0, !0), be();
        } else {
          const N = $n();
          N && p.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = dd(p.interaction.start, p.interaction.current), N = [
          ...t === "cutout" ? $l().filter((O) => !zn(O)) : [...Ir()],
          ...t0(),
          ...n0()
        ].filter((O) => yy(k, Zt(O)));
        l0(N, ((x = N[N.length - 1]) == null ? void 0 : x.id) || null), t === "cutout" && N.length && (p.cutoutAspectOpen = !1), Ye(), rt(), be();
      } else if (((_ = p.interaction) == null ? void 0 : _.kind) === "pan_frame" || ((w = p.interaction) == null ? void 0 : w.kind) === "roll_frame")
        p.interaction.changed && (lt(), ct(), Ye());
      else if (p.interaction && p.interaction.kind !== "view") {
        let k = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (k = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (k = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (k = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? nr({ rebuildPaintEngine: !0 }) : Yi()), lt(), On(), e.setDirtyCanvas(!0, !0), qi(), p.hqFrames = 1, rt(), be();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && gi(), Gi(), i && i.kind === "view" && on.endDrag(performance.now()), Er(), rt(), xt(p.pointerPos), be();
    }
  }, I.onpointercancel = () => {
    var i, s, l;
    if (!Ha()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && on.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Gi();
        const c = $n();
        c && p.paintEngine.cancelActiveStroke(c);
      }
      p.interaction = null, Gi(), Er(), xt(p.pointerPos), be({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    Ha();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.onmousemove = (i) => {
    const s = mi(i), l = Ho(s, !0);
    p.interaction || (xt(s), l && p.mode === "frame" && p.primaryTool === "cursor" && be({ localOnly: !0 }));
  }, I.onmouseleave = () => {
    Ho(p.pointerPos, !1), xt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && be({ localOnly: !0 });
  }, I.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = mi(i), l = Bc(i);
      l && oy(s, l) && be({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (on.applyWheelEvent(i) && be({ localOnly: !0 }), i.preventDefault());
  }, I.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), fi(!0));
  }, I.ondrop = (i) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), $e.depth = 0, fi(!1);
    const l = Array.from(((c = i.dataTransfer) == null ? void 0 : c.files) || []).find((h) => kr(h));
    l && Qf(l);
  };
  const pd = (i) => {
    t !== "stickers" && t !== "cutout" || r || bl(i) && ($e.depth += 1, fi(!0), i.preventDefault());
  }, md = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!$e.active && bl(i) && fi(!0), $e.active && i.preventDefault());
  }, gd = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !$e.active) return;
    $e.depth = Math.max(0, $e.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    ($e.depth === 0 || s) && fi(!1);
  }, bd = (i) => {
    t !== "stickers" && t !== "cutout" || r || ($e.depth = 0, fi(!1), bl(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", pd, !0), window.addEventListener("dragover", md, !0), window.addEventListener("dragleave", gd, !0), window.addEventListener("drop", bd, !0);
  function Zl() {
    const { canUndo: i, canRedo: s } = Zf();
    na(P.toolButtons, "value", "undo", { disabled: !i }), na(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const yd = (i, s, l = !1) => {
    var w;
    const c = t === "cutout" && p.mode === "frame" ? Be() : null, h = c || Et(), m = c ? "shot" : Co();
    if (!h || m === "stroke" || Sn(h)) return;
    const x = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((k) => k.key === i);
    if (!x || x.enabled === !1) return;
    let _ = Number(s);
    Number.isNaN(_) && (_ = 0), _ = W(_, Number(x.min), Number(x.max)), i === "yaw_deg" && (_ = Ut(_)), h[i] = _, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = wi(h)), Ye(), be(), l && lt();
  };
  Pe == null || Pe.addEventListener("click", async (i) => {
    var c, h, m, x, _, w, k, C, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const O = dn(s.getAttribute("data-coverage"));
      if (O === dn(y.coverage)) return;
      y.coverage = O, p.coverage = O, d && (d.value = String(O)), o ? re.backgroundDirty = !0 : (On(), iy({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ye(), rt(), be();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (c = P.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const O = String(s.getAttribute("data-selection-id") || "");
      let G = null;
      O && (t === "stickers" ? G = Ir().find((Q) => String((Q == null ? void 0 : Q.id) || "") === O) || null : G = ((m = yf().find((Q) => {
        var K;
        return String(((K = Q == null ? void 0 : Q.item) == null ? void 0 : K.id) || "") === O;
      })) == null ? void 0 : m.item) || null), zi(G || null), G && !Bt(G) && yl(
        Ut(Number(G.yaw_deg || 0)),
        W(Number(G.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), Ye(), rt(), be();
      return;
    }
    if (l === "copy-state-inline") {
      const O = Et(), G = Co();
      if (!O || G === "stroke" || tr().length > 1) return;
      const Q = JSON.stringify(t === "cutout" && G !== "image" ? Mf(O) : x0(O));
      try {
        await navigator.clipboard.writeText(Q), (x = P.sidePanel) != null && x.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = P.sidePanel) != null && K.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const O = String(s.getAttribute("data-visibility") || "");
      O === "panorama" ? p.showPanorama = !p.showPanorama : O === "objects" ? p.showObjects = !p.showObjects : O === "mask" && (p.showMask = !p.showMask), Ye(), be();
      return;
    }
    if (l === "set-invert-x") {
      y.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", $o(), Ye(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), be();
      return;
    }
    if (l === "set-invert-y") {
      y.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", $o(), Ye(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), be();
      return;
    }
    if (l === "toggle-quality-picker") {
      (k = P.sidePanel) != null && k.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (l === "set-quality") {
      const O = String(s.getAttribute("data-quality") || "balanced");
      y.ui_settings.preview_quality = O === "draft" || O === "high" ? O : "balanced", $o(), Ye(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), be();
      return;
    }
    if (l === "ui-reset-defaults") {
      y.ui_settings.invert_view_x = !1, y.ui_settings.invert_view_y = !1, y.ui_settings.preview_quality = "balanced", $o(), Ye(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), be();
      return;
    }
    if (l === "close-preview") {
      Zi();
      return;
    }
    if (l === "cancel-close") {
      Zi();
      return;
    }
    l === "save-close" && (ny(), Zi());
  }), Pe == null || Pe.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && yd(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Pe == null || Pe.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && yd(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Ql = () => Pf();
  Ql(), ie.addEventListener("click", (i) => {
    var _, w, k, C;
    if ((w = (_ = i.target) == null ? void 0 : _.matches) != null && w.call(_, "[data-confirm-overlay]")) {
      const N = (k = P.confirmDialog) == null ? void 0 : k.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const N = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (N !== "frame" && (re.frameSafeRect = null), Ye(), rt()), Kl(), Er(), be();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const N = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = N, (N === "paint" || N === "mask") && Ra({ preservePanelValues: !0 }), Dn(), Ye(), rt(), be();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const N = String(l.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && l.disabled) return;
        N === "undo" ? Gl(-1) : N === "redo" ? Gl(1) : N === "clear" ? Xb() : N === "add" || N === "add-image" ? Ub() : N === "add-or-look" && Wb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const N = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = N, Ra({ preservePanelValues: !0 }), Fn[N] && (p.activeBrushPresetId = N), Dn(), Ye(), rt(), be();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Ra({ preservePanelValues: !0 }), Dn(), Ye(), rt(), be();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const N = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Jb(N);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const N = Ns.find((O) => O.id === l.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        p.paintColor = Hn(N.color), Ne(!0), Dn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), q && !q.hidden ? Ne(!0) : ve(), Dn();
        return;
      }
    }
    const c = String(((C = l == null ? void 0 : l.getAttribute) == null ? void 0 : C.call(l, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement)) return;
      if (Hi(), U.paused) {
        pe.mode = "playback", pe.pendingPlaybackResume = !1, pe.resumeAfterScrub = !1;
        const N = Number(P.videoTransport.duration || U.duration || 0), O = Number(U.currentTime || pe.editorTime || 0), G = N > 0 && O >= N - 1e-3 ? 0 : Number(pe.editorTime || O || 0), Q = Math.max(In(), 0.04);
        pe.editorTime = G, Math.abs(O - G) > Q ? (pe.seeking = !1, pe.pendingPlaybackResume = !0, Al(G)) : U.play().catch(() => {
        });
      } else
        U.pause(), pe.mode = "scrub", pe.resumeAfterScrub = !1, pe.pendingPlaybackResume = !1, pe.editorTime = Number(U.currentTime || 0), ji();
      fr({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Tr(),
        currentTime: pe.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: pe.mode
      }), be({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const N = !U.muted;
      U.muted = N, !N && Number(U.volume || 0) <= 0 && (U.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), fr({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Tr(),
        currentTime: pe.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: pe.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement)) return;
      const N = !P.videoTransport.loop;
      P.videoTransport.loop = N, U.loop = N, fr({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Tr(),
        currentTime: pe.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: pe.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: N,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (c === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const N = p.mode === "frame" ? Be() : null;
        if (!N || N.locked === !0) return;
        nd(N, String(l.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, qi(), lt(), ct(), Er(), be();
        return;
      }
      if (c === "frame-aspect-custom") {
        const N = p.mode === "frame" ? Be() : null, O = l.getAttribute("data-custom-width"), G = l.getAttribute("data-custom-height");
        if (!N || !Qb(N, O, G)) return;
        P.frameRail.aspectOpen = !1, qi(), lt(), ct(), Er(), be();
        return;
      }
      if (c === "frame-rotate-90") {
        const N = p.mode === "frame" ? Be() : null;
        if (!N || N.locked === !0) return;
        rd(N), P.frameRail.aspectOpen = !1, qi(), lt(), ct(), Er(), be();
        return;
      }
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, rt(), be();
        return;
      }
      if (c === "aspect-set") {
        const N = Et();
        if (!N) return;
        const O = String(l.getAttribute("data-aspect") || "1:1");
        nd(N, O), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, qi(), lt(), ct(), rt(), be();
        return;
      }
      if (c === "rotate-90") {
        const N = Et();
        if (!N) return;
        rd(N), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, qi(), lt(), ct(), rt(), be();
        return;
      }
      if (c === "bring-front") {
        ey();
        return;
      }
      if (c === "send-back") {
        ty();
        return;
      }
      if (c === "duplicate") {
        Zb();
        return;
      }
      if (c === "replace-image") {
        Bb();
        return;
      }
      if (c === "toggle-lock") {
        s0();
        return;
      }
      if (c === "back-initial") {
        p0();
        return;
      }
      if (c === "toggle-visible") {
        h0();
        return;
      }
      if (c === "delete") {
        td();
        return;
      }
    }
    if (c === "reset-view") {
      if (p.mode === "frame") return;
      yl(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, fP(e == null ? void 0 : e.id, p.showGrid), Ql(), be();
      return;
    }
    if (c === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), My();
      return;
    }
    if (c === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = N, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = N ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), wd(), be();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), x = p.customPaintHistory[m];
    x && (p.customPaintColor = Hn(x), p.paintColor = Hn(x), Dn());
  }), ie.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(U instanceof HTMLVideoElement)) return;
      Hi();
      const m = W(Number(s.value || 0), 0, Number(P.videoTransport.duration || 0));
      pe.mode = "scrub", !pe.seeking && !U.paused && !U.ended && (pe.resumeAfterScrub = !0, U.pause()), pe.editorTime = m, Zr(m), fr({
        ready: !!U.getAttribute("src"),
        playing: !1,
        visible: Tr(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(at.__panoFrameIdx || 0) > 0 && (re.backgroundDirty = !0, re.dirty = !0, be({ cause: "frame_view", localOnly: !0 })), Al(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(U instanceof HTMLVideoElement)) return;
      const m = W(Number(l.value || 0), 0, 1);
      U.volume = m, U.muted = m <= 1e-4, fr({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Tr(),
        currentTime: pe.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: pe.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: m
      });
      return;
    }
    const c = i.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), x = ni(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[x] = m, Dn(), fy();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: W(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Hn(m), p.paintColor = Hn(m), Dn();
    }
  }), ie.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(U instanceof HTMLVideoElement)) return;
      pe.pendingPlaybackResume = !!pe.resumeAfterScrub, pe.resumeAfterScrub = !1, pe.pendingPlaybackResume || (pe.mode = "scrub"), pe.seeking || (pe.pendingPlaybackResume ? (pe.pendingPlaybackResume = !1, pe.mode = "playback", U.play().catch(() => {
      })) : (ji(), be({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Uo();
  }), ie.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Uo();
  }), ie.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Uo();
  }), ie.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Uo();
  }), ie.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !ie.contains(s) || Ge.target !== s && (Ge.target = s, Ge.timer && clearTimeout(Ge.timer), Ge.timer = window.setTimeout(() => {
      Ge.target === s && vy(s);
    }, 220));
  }), ie.addEventListener("pointerout", (i) => {
    var c, h;
    const s = i.target.closest("[data-tip]");
    !s || Ge.target !== s || (i.relatedTarget instanceof Element ? (h = (c = i.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === s || gi();
  }), ie.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || gi();
  });
  const wy = (i, s) => {
    var _;
    if (!ye) return;
    const l = ye.getBoundingClientRect(), c = W((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - W((s - l.top) / Math.max(1, l.height), 0, 1), m = Vu(p.customPaintColor), x = { ...Lu(m.h, c, h), a: Number(((_ = p.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    p.customPaintColor = Hn(x), p.paintColor = Hn(x), Dn();
  }, ky = (i) => {
    var m;
    if (!E) return;
    const s = E.getBoundingClientRect(), l = W((i - s.left) / Math.max(1, s.width), 0, 1), c = Vu(p.customPaintColor), h = { ...Lu(l, c.s, c.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Hn(h), p.paintColor = Hn(h), Dn();
  }, vd = (i, s) => {
    const l = i.pointerId;
    s(i);
    const c = (m) => {
      m.pointerId === l && s(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  ye && (ye.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), vd(i, (s) => wy(s.clientX, s.clientY));
  }), E && (E.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), vd(i, (s) => ky(s.clientX));
  }), ie.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", c = (h = P.confirmDialog) == null ? void 0 : h.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(l);
  });
  const _d = () => {
    const i = !!p.fullscreen;
    na(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Te.fullscreen_close : Te.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Go = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, ie.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Ql(), _d(), ui(), be());
  }, xd = () => document.fullscreenElement === se, My = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Go(!p.fullscreen);
        return;
      }
      xd() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = se.requestFullscreen) == null ? void 0 : i.call(se));
    } catch {
      Go(!p.fullscreen);
    }
  }, Sd = () => {
    document.fullscreenEnabled && Go(xd());
  };
  document.addEventListener("fullscreenchange", Sd), _d();
  const wd = () => {
    const i = !!p.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? Te.fullscreen_close : Te.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  wd();
  const eu = e.onExecuted, tu = e.onConnectionsChange;
  let nu = null, ru = null, kd = null, Md = () => {
  };
  !r && t === "stickers" && (kd = (i = "sync") => {
    Nf(i);
  }, Md = kg(e, kd), nu = function(...s) {
    typeof eu == "function" && eu.apply(this, s), ZN(Ve, is), no(this, "executed");
  }, e.onExecuted = nu, ru = function(...s) {
    typeof tu == "function" && tu.apply(this, s), no(this, "connections");
  }, e.onConnectionsChange = ru), r || wp.set(String(e.id ?? "0"), () => Ef());
  let Ji = null;
  const Zi = async () => Ji || (Ji = (async () => {
    var i, s, l, c, h, m, x, _, w, k;
    return wp.delete(String(e.id ?? "0")), sy(), r || On(), document.fullscreenElement === se && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Sd), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === ad && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (_ = (x = (m = sr) == null ? void 0 : m.canvas) == null ? void 0 : x.setDirty) == null || _.call(x, !0, !0), gi(), Hb(), U instanceof HTMLVideoElement && U.pause(), Ft.forEach((C) => {
      try {
        C();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), At == null || At.dispose(), (k = De == null ? void 0 : De.dispose) == null || k.call(De), fi(!1), window.removeEventListener("keydown", Nd, !0), window.removeEventListener("keydown", Pd, !0), window.removeEventListener("keydown", Bo, !0), window.removeEventListener("keyup", Bo, !0), window.removeEventListener("blur", Ad), window.removeEventListener("keydown", Cd, !0), window.removeEventListener("dragenter", pd, !0), window.removeEventListener("dragover", md, !0), window.removeEventListener("dragleave", gd, !0), window.removeEventListener("drop", bd, !0), !r && t === "stickers" && (e.onExecuted === nu && (e.onExecuted = eu), e.onConnectionsChange === ru && (e.onConnectionsChange = tu), Md()), j.unmount(), V.remove(), ry(), Ji = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Ji = null, !1)), Ji), Nd = (i) => {
    var s, l, c, h, m;
    if (i.key === "Escape") {
      if (Ha()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === se) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), Go(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Zi();
    }
  }, Pd = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), c = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || c === 46) && !(s === "Backspace" || l === "Backspace" || c === 8)) return;
    const x = i.target, _ = ((x == null ? void 0 : x.tagName) || "").toUpperCase();
    _ === "INPUT" || _ === "TEXTAREA" || x != null && x.isContentEditable || !Et() || (td(), i.preventDefault(), i.stopPropagation());
  }, Bo = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, Or(), xt(p.pointerPos));
  }, Ad = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Or(), xt(p.pointerPos);
  }, Cd = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const c = i.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: x } = Zf();
    i.shiftKey && !x || !i.shiftKey && !m || (Gl(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Nd, !0), window.addEventListener("keydown", Pd, !0), window.addEventListener("keydown", Bo, !0), window.addEventListener("keyup", Bo, !0), window.addEventListener("blur", Ad), window.addEventListener("keydown", Cd, !0), se.addEventListener("pointerdown", (i) => {
    i.target === se && Zi();
  });
  function dr(i, s, { rollbackState: l = !1 } = {}) {
    let c = "";
    try {
      l && (c = JSON.stringify(y)), s();
    } catch (h) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(y).forEach((x) => delete y[x]), Object.assign(y, m), r || On();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  dr("cutout-focus", k0), !r && t === "stickers" && dr("external-sticker-sync", () => Nf("open"), { rollbackState: !0 }), Kb().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), dr("history", lt), dr("undo-redo", Zl), dr("paint-ui", Dn), dr("side-panel", Ye), dr("look-at-frame", Il), dr("video-source", Hi), dr("canvas-size", Xf), dr("cursor", () => xt(p.pointerPos)), be(), re.rafId = requestAnimationFrame(Jf);
}
sr.registerExtension(AS({
  app: sr,
  openEditor: bP,
  attachStickers: ik,
  attachCutout: ak,
  attachPreview: rk,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: jN
}));
