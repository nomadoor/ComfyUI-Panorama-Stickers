import * as wo from "../../scripts/app.js";
import { app as Sr } from "../../scripts/app.js";
import { api as vn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const lt = {}, xi = [], Un = () => {
}, Jf = () => !1, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rs = (e) => e.startsWith("onUpdate:"), qt = Object.assign, Zl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vg = Object.prototype.hasOwnProperty, Qe = (e, t) => vg.call(e, t), ze = Array.isArray, wi = (e) => Pa(e) === "[object Map]", Zf = (e) => Pa(e) === "[object Set]", ju = (e) => Pa(e) === "[object Date]", Ve = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", at = (e) => e !== null && typeof e == "object", Qf = (e) => (at(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), ed = Object.prototype.toString, Pa = (e) => ed.call(e), _g = (e) => Pa(e).slice(8, -1), td = (e) => Pa(e) === "[object Object]", Ql = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ra = /* @__PURE__ */ Jl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), is = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xg = /-\w/g, Qt = is(
  (e) => e.replace(xg, (t) => t.slice(1).toUpperCase())
), wg = /\B([A-Z])/g, Xr = is(
  (e) => e.replace(wg, "-$1").toLowerCase()
), as = is((e) => e.charAt(0).toUpperCase() + e.slice(1)), il = is(
  (e) => e ? `on${as(e)}` : ""
), jn = (e, t) => !Object.is(e, t), al = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, nd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Sg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Vu;
const os = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if (ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Nt(i) ? Pg(i) : kt(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (Nt(e) || at(e))
    return e;
}
const Ng = /;(?![^(]*\))/g, Mg = /:([^]+)/, kg = /\/\*[^]*?\*\//g;
function Pg(e) {
  const t = {};
  return e.replace(kg, "").split(Ng).forEach((n) => {
    if (n) {
      const i = n.split(Mg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if (ze(e))
    for (let n = 0; n < e.length; n++) {
      const i = gt(e[n]);
      i && (t += i + " ");
    }
  else if (at(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ag = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cg = /* @__PURE__ */ Jl(Ag);
function rd(e) {
  return !!e || e === "";
}
function Ig(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = ec(e[i], t[i]);
  return n;
}
function ec(e, t) {
  if (e === t) return !0;
  let n = ju(e), i = ju(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Bn(e), i = Bn(t), n || i)
    return e === t;
  if (n = ze(e), i = ze(t), n || i)
    return n && i ? Ig(e, t) : !1;
  if (n = at(e), i = at(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f), p = t.hasOwnProperty(f);
      if (d && !p || !d && p || !ec(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const id = (e) => !!(e && e.__v_isRef === !0), yt = (e) => Nt(e) ? e : e == null ? "" : ze(e) || at(e) && (e.toString === ed || !Ve(e.toString)) ? id(e) ? yt(e.value) : JSON.stringify(e, ad, 2) : String(e), ad = (e, t) => id(t) ? ad(e, t.value) : wi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[ol(i, c) + " =>"] = a, n),
    {}
  )
} : Zf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ol(n))
} : Bn(t) ? ol(t) : at(t) && !ze(t) && !td(t) ? String(t) : t, ol = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Tg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = an, !t && an && (this.index = (an.scopes || (an.scopes = [])).push(
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
      const n = an;
      try {
        return an = this, t();
      } finally {
        an = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = an, an = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (an = this.prevScope, this.prevScope = void 0);
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
function Eg() {
  return an;
}
let ut;
const sl = /* @__PURE__ */ new WeakSet();
class od {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sl.has(this) && (sl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ld(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hu(this), cd(this);
    const t = ut, n = An;
    ut = this, An = !0;
    try {
      return this.fn();
    } finally {
      ud(this), ut = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rc(t);
      this.deps = this.depsTail = void 0, Hu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cl(this) && this.run();
  }
  get dirty() {
    return Cl(this);
  }
}
let sd = 0, ia, aa;
function ld(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = aa, aa = e;
    return;
  }
  e.next = ia, ia = e;
}
function tc() {
  sd++;
}
function nc() {
  if (--sd > 0)
    return;
  if (aa) {
    let t = aa;
    for (aa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ia; ) {
    let t = ia;
    for (ia = void 0; t; ) {
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
function cd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ud(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), rc(i), Dg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Cl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ga) || (e.globalVersion = ga, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ut, i = An;
  ut = e, An = !0;
  try {
    cd(e);
    const a = e.fn(e._value);
    (t.version === 0 || jn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ut = n, An = i, ud(e), e.flags &= -3;
  }
}
function rc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      rc(c, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Dg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const dd = [];
function ar() {
  dd.push(An), An = !1;
}
function or() {
  const e = dd.pop();
  An = e === void 0 ? !0 : e;
}
function Hu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ut;
    ut = void 0;
    try {
      t();
    } finally {
      ut = n;
    }
  }
}
let ga = 0;
class Og {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ic {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ut || !An || ut === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ut)
      n = this.activeLink = new Og(ut, this), ut.deps ? (n.prevDep = ut.depsTail, ut.depsTail.nextDep = n, ut.depsTail = n) : ut.deps = ut.depsTail = n, hd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ut.depsTail, n.nextDep = void 0, ut.depsTail.nextDep = n, ut.depsTail = n, ut.deps === n && (ut.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, ga++, this.notify(t);
  }
  notify(t) {
    tc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      nc();
    }
  }
}
function hd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        hd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Il = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ Symbol(
  ""
), Tl = /* @__PURE__ */ Symbol(
  ""
), ba = /* @__PURE__ */ Symbol(
  ""
);
function Gt(e, t, n) {
  if (An && ut) {
    let i = Il.get(e);
    i || Il.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new ic()), a.map = i, a.key = n), a.track();
  }
}
function rr(e, t, n, i, a, c) {
  const f = Il.get(e);
  if (!f) {
    ga++;
    return;
  }
  const d = (p) => {
    p && p.trigger();
  };
  if (tc(), t === "clear")
    f.forEach(d);
  else {
    const p = ze(e), b = p && Ql(n);
    if (p && n === "length") {
      const v = Number(i);
      f.forEach((h, x) => {
        (x === "length" || x === ba || !Bn(x) && x >= v) && d(h);
      });
    } else
      switch ((n !== void 0 || f.has(void 0)) && d(f.get(n)), b && d(f.get(ba)), t) {
        case "add":
          p ? b && d(f.get("length")) : (d(f.get(Hr)), wi(e) && d(f.get(Tl)));
          break;
        case "delete":
          p || (d(f.get(Hr)), wi(e) && d(f.get(Tl)));
          break;
        case "set":
          wi(e) && d(f.get(Hr));
          break;
      }
  }
  nc();
}
function hi(e) {
  const t = /* @__PURE__ */ Ze(e);
  return t === e ? t : (Gt(t, "iterate", ba), /* @__PURE__ */ _n(e) ? t : t.map(In));
}
function ss(e) {
  return Gt(e = /* @__PURE__ */ Ze(e), "iterate", ba), e;
}
function Ln(e, t) {
  return /* @__PURE__ */ sr(e) ? Pi(/* @__PURE__ */ Ur(e) ? In(t) : t) : In(t);
}
const Rg = {
  __proto__: null,
  [Symbol.iterator]() {
    return ll(this, Symbol.iterator, (e) => Ln(this, e));
  },
  concat(...e) {
    return hi(this).concat(
      ...e.map((t) => ze(t) ? hi(t) : t)
    );
  },
  entries() {
    return ll(this, "entries", (e) => (e[1] = Ln(this, e[1]), e));
  },
  every(e, t) {
    return Xn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Ln(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Xn(
      this,
      "find",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Xn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xn(
      this,
      "findLast",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Xn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cl(this, "includes", e);
  },
  indexOf(...e) {
    return cl(this, "indexOf", e);
  },
  join(e) {
    return hi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ui(this, "pop");
  },
  push(...e) {
    return Ui(this, "push", e);
  },
  reduce(e, ...t) {
    return Uu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Uu(this, "reduceRight", e, t);
  },
  shift() {
    return Ui(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ui(this, "splice", e);
  },
  toReversed() {
    return hi(this).toReversed();
  },
  toSorted(e) {
    return hi(this).toSorted(e);
  },
  toSpliced(...e) {
    return hi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ui(this, "unshift", e);
  },
  values() {
    return ll(this, "values", (e) => Ln(this, e));
  }
};
function ll(e, t, n) {
  const i = ss(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ _n(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const Fg = Array.prototype;
function Xn(e, t, n, i, a, c) {
  const f = ss(e), d = f !== e && !/* @__PURE__ */ _n(e), p = f[t];
  if (p !== Fg[t]) {
    const h = p.apply(e, c);
    return d ? In(h) : h;
  }
  let b = n;
  f !== e && (d ? b = function(h, x) {
    return n.call(this, Ln(e, h), x, e);
  } : n.length > 2 && (b = function(h, x) {
    return n.call(this, h, x, e);
  }));
  const v = p.call(f, b, i);
  return d && a ? a(v) : v;
}
function Uu(e, t, n, i) {
  const a = ss(e), c = a !== e && !/* @__PURE__ */ _n(e);
  let f = n, d = !1;
  a !== e && (c ? (d = i.length === 0, f = function(b, v, h) {
    return d && (d = !1, b = Ln(e, b)), n.call(this, b, Ln(e, v), h, e);
  }) : n.length > 3 && (f = function(b, v, h) {
    return n.call(this, b, v, h, e);
  }));
  const p = a[t](f, ...i);
  return d ? Ln(e, p) : p;
}
function cl(e, t, n) {
  const i = /* @__PURE__ */ Ze(e);
  Gt(i, "iterate", ba);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ sc(n[0]) ? (n[0] = /* @__PURE__ */ Ze(n[0]), i[t](...n)) : a;
}
function Ui(e, t, n = []) {
  ar(), tc();
  const i = (/* @__PURE__ */ Ze(e))[t].apply(e, n);
  return nc(), or(), i;
}
const Lg = /* @__PURE__ */ Jl("__proto__,__v_isRef,__isVue"), pd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
);
function zg(e) {
  Bn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ze(this);
  return Gt(t, "has", e), t.hasOwnProperty(e);
}
class md {
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
      return i === (a ? c ? Yg : vd : c ? yd : bd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const f = ze(t);
    if (!a) {
      let p;
      if (f && (p = Rg[n]))
        return p;
      if (n === "hasOwnProperty")
        return zg;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Yt(t) ? t : i
    );
    if ((Bn(n) ? pd.has(n) : Lg(n)) || (a || Gt(t, "get", n), c))
      return d;
    if (/* @__PURE__ */ Yt(d)) {
      const p = f && Ql(n) ? d : d.value;
      return a && at(p) ? /* @__PURE__ */ Dl(p) : p;
    }
    return at(d) ? a ? /* @__PURE__ */ Dl(d) : /* @__PURE__ */ ls(d) : d;
  }
}
class gd extends md {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const f = ze(t) && Ql(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ sr(c);
      if (!/* @__PURE__ */ _n(i) && !/* @__PURE__ */ sr(i) && (c = /* @__PURE__ */ Ze(c), i = /* @__PURE__ */ Ze(i)), !f && /* @__PURE__ */ Yt(c) && !/* @__PURE__ */ Yt(i))
        return b || (c.value = i), !0;
    }
    const d = f ? Number(n) < t.length : Qe(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Yt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ze(a) && (d ? jn(i, c) && rr(t, "set", n, i) : rr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = Qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && rr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Bn(n) || !pd.has(n)) && Gt(t, "has", n), i;
  }
  ownKeys(t) {
    return Gt(
      t,
      "iterate",
      ze(t) ? "length" : Hr
    ), Reflect.ownKeys(t);
  }
}
class $g extends md {
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
const jg = /* @__PURE__ */ new gd(), Vg = /* @__PURE__ */ new $g(), Hg = /* @__PURE__ */ new gd(!0);
const El = (e) => e, to = (e) => Reflect.getPrototypeOf(e);
function Ug(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ Ze(a), f = wi(c), d = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, b = a[e](...i), v = n ? El : t ? Pi : In;
    return !t && Gt(
      c,
      "iterate",
      p ? Tl : Hr
    ), qt(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: h, done: x } = b.next();
          return x ? { value: h, done: x } : {
            value: d ? [v(h[0]), v(h[1])] : v(h),
            done: x
          };
        }
      }
    );
  };
}
function no(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bg(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Ze(c), d = /* @__PURE__ */ Ze(a);
      e || (jn(a, d) && Gt(f, "get", a), Gt(f, "get", d));
      const { has: p } = to(f), b = t ? El : e ? Pi : In;
      if (p.call(f, a))
        return b(c.get(a));
      if (p.call(f, d))
        return b(c.get(d));
      c !== f && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Gt(/* @__PURE__ */ Ze(a), "iterate", Hr), a.size;
    },
    has(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Ze(c), d = /* @__PURE__ */ Ze(a);
      return e || (jn(a, d) && Gt(f, "has", a), Gt(f, "has", d)), a === d ? c.has(a) : c.has(a) || c.has(d);
    },
    forEach(a, c) {
      const f = this, d = f.__v_raw, p = /* @__PURE__ */ Ze(d), b = t ? El : e ? Pi : In;
      return !e && Gt(p, "iterate", Hr), d.forEach((v, h) => a.call(c, b(v), b(h), f));
    }
  };
  return qt(
    n,
    e ? {
      add: no("add"),
      set: no("set"),
      delete: no("delete"),
      clear: no("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ Ze(this), f = to(c), d = /* @__PURE__ */ Ze(a), p = !t && !/* @__PURE__ */ _n(a) && !/* @__PURE__ */ sr(a) ? d : a;
        return f.has.call(c, p) || jn(a, p) && f.has.call(c, a) || jn(d, p) && f.has.call(c, d) || (c.add(p), rr(c, "add", p, p)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ _n(c) && !/* @__PURE__ */ sr(c) && (c = /* @__PURE__ */ Ze(c));
        const f = /* @__PURE__ */ Ze(this), { has: d, get: p } = to(f);
        let b = d.call(f, a);
        b || (a = /* @__PURE__ */ Ze(a), b = d.call(f, a));
        const v = p.call(f, a);
        return f.set(a, c), b ? jn(c, v) && rr(f, "set", a, c) : rr(f, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ Ze(this), { has: f, get: d } = to(c);
        let p = f.call(c, a);
        p || (a = /* @__PURE__ */ Ze(a), p = f.call(c, a)), d && d.call(c, a);
        const b = c.delete(a);
        return p && rr(c, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ Ze(this), c = a.size !== 0, f = a.clear();
        return c && rr(
          a,
          "clear",
          void 0,
          void 0
        ), f;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = Ug(a, e, t);
  }), n;
}
function ac(e, t) {
  const n = Bg(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Qe(n, a) && a in i ? n : i,
    a,
    c
  );
}
const Kg = {
  get: /* @__PURE__ */ ac(!1, !1)
}, Gg = {
  get: /* @__PURE__ */ ac(!1, !0)
}, Wg = {
  get: /* @__PURE__ */ ac(!0, !1)
};
const bd = /* @__PURE__ */ new WeakMap(), yd = /* @__PURE__ */ new WeakMap(), vd = /* @__PURE__ */ new WeakMap(), Yg = /* @__PURE__ */ new WeakMap();
function qg(e) {
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
function Xg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qg(_g(e));
}
// @__NO_SIDE_EFFECTS__
function ls(e) {
  return /* @__PURE__ */ sr(e) ? e : oc(
    e,
    !1,
    jg,
    Kg,
    bd
  );
}
// @__NO_SIDE_EFFECTS__
function Jg(e) {
  return oc(
    e,
    !1,
    Hg,
    Gg,
    yd
  );
}
// @__NO_SIDE_EFFECTS__
function Dl(e) {
  return oc(
    e,
    !0,
    Vg,
    Wg,
    vd
  );
}
function oc(e, t, n, i, a) {
  if (!at(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = Xg(e);
  if (c === 0)
    return e;
  const f = a.get(e);
  if (f)
    return f;
  const d = new Proxy(
    e,
    c === 2 ? i : n
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  return /* @__PURE__ */ sr(e) ? /* @__PURE__ */ Ur(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function sc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ze(t) : e;
}
function Zg(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && nd(e, "__v_skip", !0), e;
}
const In = (e) => at(e) ? /* @__PURE__ */ ls(e) : e, Pi = (e) => at(e) ? /* @__PURE__ */ Dl(e) : e;
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return Qg(e, !1);
}
function Qg(e, t) {
  return /* @__PURE__ */ Yt(e) ? e : new e0(e, t);
}
class e0 {
  constructor(t, n) {
    this.dep = new ic(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ze(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ _n(t) || /* @__PURE__ */ sr(t);
    t = i ? t : /* @__PURE__ */ Ze(t), jn(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function jr(e) {
  return /* @__PURE__ */ Yt(e) ? e.value : e;
}
const t0 = {
  get: (e, t, n) => t === "__v_raw" ? e : jr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Yt(a) && !/* @__PURE__ */ Yt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function _d(e) {
  return /* @__PURE__ */ Ur(e) ? e : new Proxy(e, t0);
}
class n0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ic(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ga - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ut !== this)
      return ld(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function r0(e, t, n = !1) {
  let i, a;
  return Ve(e) ? i = e : (i = e.get, a = e.set), new n0(i, a, n);
}
const ro = {}, Oo = /* @__PURE__ */ new WeakMap();
let zr;
function i0(e, t = !1, n = zr) {
  if (n) {
    let i = Oo.get(n);
    i || Oo.set(n, i = []), i.push(e);
  }
}
function a0(e, t, n = lt) {
  const { immediate: i, deep: a, once: c, scheduler: f, augmentJob: d, call: p } = n, b = (I) => a ? I : /* @__PURE__ */ _n(I) || a === !1 || a === 0 ? ir(I, 1) : ir(I);
  let v, h, x, M, C = !1, N = !1;
  if (/* @__PURE__ */ Yt(e) ? (h = () => e.value, C = /* @__PURE__ */ _n(e)) : /* @__PURE__ */ Ur(e) ? (h = () => b(e), C = !0) : ze(e) ? (N = !0, C = e.some((I) => /* @__PURE__ */ Ur(I) || /* @__PURE__ */ _n(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Yt(I))
      return I.value;
    if (/* @__PURE__ */ Ur(I))
      return b(I);
    if (Ve(I))
      return p ? p(I, 2) : I();
  })) : Ve(e) ? t ? h = p ? () => p(e, 2) : e : h = () => {
    if (x) {
      ar();
      try {
        x();
      } finally {
        or();
      }
    }
    const I = zr;
    zr = v;
    try {
      return p ? p(e, 3, [M]) : e(M);
    } finally {
      zr = I;
    }
  } : h = Un, t && a) {
    const I = h, R = a === !0 ? 1 / 0 : a;
    h = () => ir(I(), R);
  }
  const z = Eg(), O = () => {
    v.stop(), z && z.active && Zl(z.effects, v);
  };
  if (c && t) {
    const I = t;
    t = (...R) => {
      I(...R), O();
    };
  }
  let F = N ? new Array(e.length).fill(ro) : ro;
  const T = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (t) {
        const R = v.run();
        if (a || C || (N ? R.some((K, Q) => jn(K, F[Q])) : jn(R, F))) {
          x && x();
          const K = zr;
          zr = v;
          try {
            const Q = [
              R,
              // pass undefined as the old value when it's changed for the first time
              F === ro ? void 0 : N && F[0] === ro ? [] : F,
              M
            ];
            F = R, p ? p(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            zr = K;
          }
        }
      } else
        v.run();
  };
  return d && d(T), v = new od(h), v.scheduler = f ? () => f(T, !1) : T, M = (I) => i0(I, !1, v), x = v.onStop = () => {
    const I = Oo.get(v);
    if (I) {
      if (p)
        p(I, 4);
      else
        for (const R of I) R();
      Oo.delete(v);
    }
  }, t ? i ? T(!0) : F = v.run() : f ? f(T.bind(null, !0), !0) : v.run(), O.pause = v.pause.bind(v), O.resume = v.resume.bind(v), O.stop = O, O;
}
function ir(e, t = 1 / 0, n) {
  if (t <= 0 || !at(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Yt(e))
    ir(e.value, t, n);
  else if (ze(e))
    for (let i = 0; i < e.length; i++)
      ir(e[i], t, n);
  else if (Zf(e) || wi(e))
    e.forEach((i) => {
      ir(i, t, n);
    });
  else if (td(e)) {
    for (const i in e)
      ir(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ir(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Aa(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    cs(a, t, n);
  }
}
function Kn(e, t, n, i) {
  if (Ve(e)) {
    const a = Aa(e, t, n, i);
    return a && Qf(a) && a.catch((c) => {
      cs(c, t, n);
    }), a;
  }
  if (ze(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Kn(e[c], t, n, i));
    return a;
  }
}
function cs(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || lt;
  if (t) {
    let d = t.parent;
    const p = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let h = 0; h < v.length; h++)
          if (v[h](e, p, b) === !1)
            return;
      }
      d = d.parent;
    }
    if (c) {
      ar(), Aa(c, null, 10, [
        e,
        p,
        b
      ]), or();
      return;
    }
  }
  o0(e, n, a, i, f);
}
function o0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Zt = [];
let Fn = -1;
const Si = [];
let yr = null, gi = 0;
const xd = /* @__PURE__ */ Promise.resolve();
let Ro = null;
function lc(e) {
  const t = Ro || xd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function s0(e) {
  let t = Fn + 1, n = Zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Zt[i], c = ya(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function cc(e) {
  if (!(e.flags & 1)) {
    const t = ya(e), n = Zt[Zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ya(n) ? Zt.push(e) : Zt.splice(s0(t), 0, e), e.flags |= 1, wd();
  }
}
function wd() {
  Ro || (Ro = xd.then(Nd));
}
function l0(e) {
  ze(e) ? Si.push(...e) : yr && e.id === -1 ? yr.splice(gi + 1, 0, e) : e.flags & 1 || (Si.push(e), e.flags |= 1), wd();
}
function Bu(e, t, n = Fn + 1) {
  for (; n < Zt.length; n++) {
    const i = Zt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Zt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Sd(e) {
  if (Si.length) {
    const t = [...new Set(Si)].sort(
      (n, i) => ya(n) - ya(i)
    );
    if (Si.length = 0, yr) {
      yr.push(...t);
      return;
    }
    for (yr = t, gi = 0; gi < yr.length; gi++) {
      const n = yr[gi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    yr = null, gi = 0;
  }
}
const ya = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nd(e) {
  try {
    for (Fn = 0; Fn < Zt.length; Fn++) {
      const t = Zt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Aa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Zt.length; Fn++) {
      const t = Zt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Zt.length = 0, Sd(), Ro = null, (Zt.length || Si.length) && Nd();
  }
}
let dn = null, Md = null;
function Fo(e) {
  const t = dn;
  return dn = e, Md = e && e.type.__scopeId || null, t;
}
function kd(e, t = dn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && nf(-1);
    const c = Fo(t);
    let f;
    try {
      f = e(...a);
    } finally {
      Fo(c), i._d && nf(1);
    }
    return f;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function uc(e, t) {
  if (dn === null)
    return e;
  const n = hs(dn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, f, d, p = lt] = t[a];
    c && (Ve(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && ir(f), i.push({
      dir: c,
      instance: n,
      value: f,
      oldValue: void 0,
      arg: d,
      modifiers: p
    }));
  }
  return e;
}
function Or(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    c && (d.oldValue = c[f].value);
    let p = d.dir[i];
    p && (ar(), Kn(p, n, 8, [
      e.el,
      d,
      e,
      t
    ]), or());
  }
}
function c0(e, t) {
  if (Wt) {
    let n = Wt.provides;
    const i = Wt.parent && Wt.parent.provides;
    i === n && (n = Wt.provides = Object.create(i)), n[e] = t;
  }
}
function So(e, t, n = !1) {
  const i = cb();
  if (i || Mi) {
    let a = Mi ? Mi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ve(t) ? t.call(i && i.proxy) : t;
  }
}
const u0 = /* @__PURE__ */ Symbol.for("v-scx"), f0 = () => So(u0);
function Ni(e, t, n) {
  return Pd(e, t, n);
}
function Pd(e, t, n = lt) {
  const { immediate: i, deep: a, flush: c, once: f } = n, d = qt({}, n), p = t && i || !t && c !== "post";
  let b;
  if (_a) {
    if (c === "sync") {
      const M = f0();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!p) {
      const M = () => {
      };
      return M.stop = Un, M.resume = Un, M.pause = Un, M;
    }
  }
  const v = Wt;
  d.call = (M, C, N) => Kn(M, v, C, N);
  let h = !1;
  c === "post" ? d.scheduler = (M) => {
    rn(M, v && v.suspense);
  } : c !== "sync" && (h = !0, d.scheduler = (M, C) => {
    C ? M() : cc(M);
  }), d.augmentJob = (M) => {
    t && (M.flags |= 4), h && (M.flags |= 2, v && (M.id = v.uid, M.i = v));
  };
  const x = a0(e, t, d);
  return _a && (b ? b.push(x) : p && x()), x;
}
function d0(e, t, n) {
  const i = this.proxy, a = Nt(e) ? e.includes(".") ? Ad(i, e) : () => i[e] : e.bind(i, i);
  let c;
  Ve(t) ? c = t : (c = t.handler, n = t);
  const f = Ca(this), d = Pd(a, c.bind(i), n);
  return f(), d;
}
function Ad(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const h0 = /* @__PURE__ */ Symbol("_vte"), p0 = (e) => e.__isTeleport, m0 = /* @__PURE__ */ Symbol("_leaveCb");
function fc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Cd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ku(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Lo = /* @__PURE__ */ new WeakMap();
function oa(e, t, n, i, a = !1) {
  if (ze(e)) {
    e.forEach(
      (N, z) => oa(
        N,
        t && (ze(t) ? t[z] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (sa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && oa(e, t, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? hs(i.component) : i.el, f = a ? null : c, { i: d, r: p } = e, b = t && t.r, v = d.refs === lt ? d.refs = {} : d.refs, h = d.setupState, x = /* @__PURE__ */ Ze(h), M = h === lt ? Jf : (N) => Ku(v, N) ? !1 : Qe(x, N), C = (N, z) => !(z && Ku(v, z));
  if (b != null && b !== p) {
    if (Gu(t), Nt(b))
      v[b] = null, M(b) && (h[b] = null);
    else if (/* @__PURE__ */ Yt(b)) {
      const N = t;
      C(b, N.k) && (b.value = null), N.k && (v[N.k] = null);
    }
  }
  if (Ve(p))
    Aa(p, d, 12, [f, v]);
  else {
    const N = Nt(p), z = /* @__PURE__ */ Yt(p);
    if (N || z) {
      const O = () => {
        if (e.f) {
          const F = N ? M(p) ? h[p] : v[p] : C() || !e.k ? p.value : v[e.k];
          if (a)
            ze(F) && Zl(F, c);
          else if (ze(F))
            F.includes(c) || F.push(c);
          else if (N)
            v[p] = [c], M(p) && (h[p] = v[p]);
          else {
            const T = [c];
            C(p, e.k) && (p.value = T), e.k && (v[e.k] = T);
          }
        } else N ? (v[p] = f, M(p) && (h[p] = f)) : z && (C(p, e.k) && (p.value = f), e.k && (v[e.k] = f));
      };
      if (f) {
        const F = () => {
          O(), Lo.delete(e);
        };
        F.id = -1, Lo.set(e, F), rn(F, n);
      } else
        Gu(e), O();
    }
  }
}
function Gu(e) {
  const t = Lo.get(e);
  t && (t.flags |= 8, Lo.delete(e));
}
os().requestIdleCallback;
os().cancelIdleCallback;
const sa = (e) => !!e.type.__asyncLoader, Id = (e) => e.type.__isKeepAlive;
function g0(e, t) {
  Td(e, "a", t);
}
function b0(e, t) {
  Td(e, "da", t);
}
function Td(e, t, n = Wt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (us(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Id(a.parent.vnode) && y0(i, t, n, a), a = a.parent;
  }
}
function y0(e, t, n, i) {
  const a = us(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Dd(() => {
    Zl(i[t], a);
  }, n);
}
function us(e, t, n = Wt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
      ar();
      const d = Ca(n), p = Kn(t, n, e, f);
      return d(), or(), p;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const lr = (e) => (t, n = Wt) => {
  (!_a || e === "sp") && us(e, (...i) => t(...i), n);
}, v0 = lr("bm"), Ed = lr("m"), _0 = lr(
  "bu"
), x0 = lr("u"), dc = lr(
  "bum"
), Dd = lr("um"), w0 = lr(
  "sp"
), S0 = lr("rtg"), N0 = lr("rtc");
function M0(e, t = Wt) {
  us("ec", e, t);
}
const k0 = "components", Od = /* @__PURE__ */ Symbol.for("v-ndc");
function P0(e) {
  return Nt(e) ? A0(k0, e, !1) || e : e || Od;
}
function A0(e, t, n = !0, i = !1) {
  const a = dn || Wt;
  if (a) {
    const c = a.type;
    {
      const d = pb(
        c,
        !1
      );
      if (d && (d === t || d === Qt(t) || d === as(Qt(t))))
        return c;
    }
    const f = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wu(a[e] || c[e], t) || // global registration
      Wu(a.appContext[e], t)
    );
    return !f && i ? c : f;
  }
}
function Wu(e, t) {
  return e && (e[t] || e[Qt(t)] || e[as(Qt(t))]);
}
function $t(e, t, n, i) {
  let a;
  const c = n, f = ze(e);
  if (f || Nt(e)) {
    const d = f && /* @__PURE__ */ Ur(e);
    let p = !1, b = !1;
    d && (p = !/* @__PURE__ */ _n(e), b = /* @__PURE__ */ sr(e), e = ss(e)), a = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      a[v] = t(
        p ? b ? Pi(In(e[v])) : In(e[v]) : e[v],
        v,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, c);
  } else if (at(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, p) => t(d, p, void 0, c)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let p = 0, b = d.length; p < b; p++) {
        const v = d[p];
        a[p] = t(e[v], v, p, c);
      }
    }
  else
    a = [];
  return a;
}
const Ol = (e) => e ? th(e) ? hs(e) : Ol(e.parent) : null, la = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ol(e.parent),
    $root: (e) => Ol(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lc.bind(e.proxy)),
    $watch: (e) => d0.bind(e)
  })
), ul = (e, t) => e !== lt && !e.__isScriptSetup && Qe(e, t), C0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: c, accessCache: f, type: d, appContext: p } = e;
    if (t[0] !== "$") {
      const x = f[t];
      if (x !== void 0)
        switch (x) {
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
        if (ul(i, t))
          return f[t] = 1, i[t];
        if (a !== lt && Qe(a, t))
          return f[t] = 2, a[t];
        if (Qe(c, t))
          return f[t] = 3, c[t];
        if (n !== lt && Qe(n, t))
          return f[t] = 4, n[t];
        Rl && (f[t] = 0);
      }
    }
    const b = la[t];
    let v, h;
    if (b)
      return t === "$attrs" && Gt(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== lt && Qe(n, t))
      return f[t] = 4, n[t];
    if (
      // global properties
      h = p.config.globalProperties, Qe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: c } = e;
    return ul(a, t) ? (a[t] = n, !0) : i !== lt && Qe(i, t) ? (i[t] = n, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: f }
  }, d) {
    let p;
    return !!(n[d] || e !== lt && d[0] !== "$" && Qe(e, d) || ul(t, d) || Qe(c, d) || Qe(i, d) || Qe(la, d) || Qe(a.config.globalProperties, d) || (p = f.__cssModules) && p[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Yu(e) {
  return ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Rl = !0;
function I0(e) {
  const t = Fd(e), n = e.proxy, i = e.ctx;
  Rl = !1, t.beforeCreate && qu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: f,
    watch: d,
    provide: p,
    inject: b,
    // lifecycle
    created: v,
    beforeMount: h,
    mounted: x,
    beforeUpdate: M,
    updated: C,
    activated: N,
    deactivated: z,
    beforeDestroy: O,
    beforeUnmount: F,
    destroyed: T,
    unmounted: I,
    render: R,
    renderTracked: K,
    renderTriggered: Q,
    errorCaptured: te,
    serverPrefetch: _e,
    // public API
    expose: A,
    inheritAttrs: ye,
    // assets
    components: he,
    directives: fe,
    filters: $
  } = t;
  if (b && T0(b, i, null), f)
    for (const ie in f) {
      const G = f[ie];
      Ve(G) && (i[ie] = G.bind(n));
    }
  if (a) {
    const ie = a.call(n, n);
    at(ie) && (e.data = /* @__PURE__ */ ls(ie));
  }
  if (Rl = !0, c)
    for (const ie in c) {
      const G = c[ie], ce = Ve(G) ? G.bind(n, n) : Ve(G.get) ? G.get.bind(n, n) : Un, we = !Ve(G) && Ve(G.set) ? G.set.bind(n) : Un, Oe = St({
        get: ce,
        set: we
      });
      Object.defineProperty(i, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Fe) => Oe.value = Fe
      });
    }
  if (d)
    for (const ie in d)
      Rd(d[ie], i, n, ie);
  if (p) {
    const ie = Ve(p) ? p.call(n) : p;
    Reflect.ownKeys(ie).forEach((G) => {
      c0(G, ie[G]);
    });
  }
  v && qu(v, e, "c");
  function U(ie, G) {
    ze(G) ? G.forEach((ce) => ie(ce.bind(n))) : G && ie(G.bind(n));
  }
  if (U(v0, h), U(Ed, x), U(_0, M), U(x0, C), U(g0, N), U(b0, z), U(M0, te), U(N0, K), U(S0, Q), U(dc, F), U(Dd, I), U(w0, _e), ze(A))
    if (A.length) {
      const ie = e.exposed || (e.exposed = {});
      A.forEach((G) => {
        Object.defineProperty(ie, G, {
          get: () => n[G],
          set: (ce) => n[G] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === Un && (e.render = R), ye != null && (e.inheritAttrs = ye), he && (e.components = he), fe && (e.directives = fe), _e && Cd(e);
}
function T0(e, t, n = Un) {
  ze(e) && (e = Fl(e));
  for (const i in e) {
    const a = e[i];
    let c;
    at(a) ? "default" in a ? c = So(
      a.from || i,
      a.default,
      !0
    ) : c = So(a.from || i) : c = So(a), /* @__PURE__ */ Yt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (f) => c.value = f
    }) : t[i] = c;
  }
}
function qu(e, t, n) {
  Kn(
    ze(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Rd(e, t, n, i) {
  let a = i.includes(".") ? Ad(n, i) : () => n[i];
  if (Nt(e)) {
    const c = t[e];
    Ve(c) && Ni(a, c);
  } else if (Ve(e))
    Ni(a, e.bind(n));
  else if (at(e))
    if (ze(e))
      e.forEach((c) => Rd(c, t, n, i));
    else {
      const c = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ve(c) && Ni(a, c, e);
    }
}
function Fd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: f }
  } = e.appContext, d = c.get(t);
  let p;
  return d ? p = d : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (b) => zo(p, b, f, !0)
  ), zo(p, t, f)), at(t) && c.set(t, p), p;
}
function zo(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && zo(e, c, n, !0), a && a.forEach(
    (f) => zo(e, f, n, !0)
  );
  for (const f in t)
    if (!(i && f === "expose")) {
      const d = E0[f] || n && n[f];
      e[f] = d ? d(e[f], t[f]) : t[f];
    }
  return e;
}
const E0 = {
  data: Xu,
  props: Ju,
  emits: Ju,
  // objects
  methods: Zi,
  computed: Zi,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: Zi,
  directives: Zi,
  // watch
  watch: O0,
  // provide / inject
  provide: Xu,
  inject: D0
};
function Xu(e, t) {
  return t ? e ? function() {
    return qt(
      Ve(e) ? e.call(this, this) : e,
      Ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function D0(e, t) {
  return Zi(Fl(e), Fl(t));
}
function Fl(e) {
  if (ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zi(e, t) {
  return e ? qt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ju(e, t) {
  return e ? ze(e) && ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : qt(
    /* @__PURE__ */ Object.create(null),
    Yu(e),
    Yu(t ?? {})
  ) : t;
}
function O0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Jt(e[i], t[i]);
  return n;
}
function Ld() {
  return {
    app: null,
    config: {
      isNativeTag: Jf,
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
let R0 = 0;
function F0(e, t) {
  return function(i, a = null) {
    Ve(i) || (i = qt({}, i)), a != null && !at(a) && (a = null);
    const c = Ld(), f = /* @__PURE__ */ new WeakSet(), d = [];
    let p = !1;
    const b = c.app = {
      _uid: R0++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: gb,
      get config() {
        return c.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return f.has(v) || (v && Ve(v.install) ? (f.add(v), v.install(b, ...h)) : Ve(v) && (f.add(v), v(b, ...h))), b;
      },
      mixin(v) {
        return c.mixins.includes(v) || c.mixins.push(v), b;
      },
      component(v, h) {
        return h ? (c.components[v] = h, b) : c.components[v];
      },
      directive(v, h) {
        return h ? (c.directives[v] = h, b) : c.directives[v];
      },
      mount(v, h, x) {
        if (!p) {
          const M = b._ceVNode || Ge(i, a);
          return M.appContext = c, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(M, v, x), p = !0, b._container = v, v.__vue_app__ = b, hs(M.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        p && (Kn(
          d,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(v, h) {
        return c.provides[v] = h, b;
      },
      runWithContext(v) {
        const h = Mi;
        Mi = b;
        try {
          return v();
        } finally {
          Mi = h;
        }
      }
    };
    return b;
  };
}
let Mi = null;
const L0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Xr(t)}Modifiers`];
function z0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || lt;
  let a = n;
  const c = t.startsWith("update:"), f = c && L0(i, t.slice(7));
  f && (f.trim && (a = n.map((v) => Nt(v) ? v.trim() : v)), f.number && (a = n.map(Sg)));
  let d, p = i[d = il(t)] || // also try camelCase event handler (#2249)
  i[d = il(Qt(t))];
  !p && c && (p = i[d = il(Xr(t))]), p && Kn(
    p,
    e,
    6,
    a
  );
  const b = i[d + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Kn(
      b,
      e,
      6,
      a
    );
  }
}
const $0 = /* @__PURE__ */ new WeakMap();
function zd(e, t, n = !1) {
  const i = n ? $0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let f = {}, d = !1;
  if (!Ve(e)) {
    const p = (b) => {
      const v = zd(b, t, !0);
      v && (d = !0, qt(f, v));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !c && !d ? (at(e) && i.set(e, null), null) : (ze(c) ? c.forEach((p) => f[p] = null) : qt(f, c), at(e) && i.set(e, f), f);
}
function fs(e, t) {
  return !e || !ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, Xr(t)) || Qe(e, t));
}
function Zu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: f,
    attrs: d,
    emit: p,
    render: b,
    renderCache: v,
    props: h,
    data: x,
    setupState: M,
    ctx: C,
    inheritAttrs: N
  } = e, z = Fo(e);
  let O, F;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, R = I;
      O = zn(
        b.call(
          R,
          I,
          v,
          h,
          M,
          x,
          C
        )
      ), F = d;
    } else {
      const I = t;
      O = zn(
        I.length > 1 ? I(
          h,
          { attrs: d, slots: f, emit: p }
        ) : I(
          h,
          null
        )
      ), F = t.props ? d : j0(d);
    }
  } catch (I) {
    ca.length = 0, cs(I, e, 1), O = Ge(kr);
  }
  let T = O;
  if (F && N !== !1) {
    const I = Object.keys(F), { shapeFlag: R } = T;
    I.length && R & 7 && (c && I.some(rs) && (F = V0(
      F,
      c
    )), T = Ai(T, F, !1, !0));
  }
  return n.dirs && (T = Ai(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && fc(T, n.transition), O = T, Fo(z), O;
}
const j0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ns(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, V0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!rs(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function H0(e, t, n) {
  const { props: i, children: a, component: c } = e, { props: f, children: d, patchFlag: p } = t, b = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Qu(i, f, b) : !!f;
    if (p & 8) {
      const v = t.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const x = v[h];
        if ($d(f, i, x) && !fs(b, x))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === f ? !1 : i ? f ? Qu(i, f, b) : !0 : !!f;
  return !1;
}
function Qu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if ($d(t, e, c) && !fs(n, c))
      return !0;
  }
  return !1;
}
function $d(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && at(i) && at(a) ? !ec(i, a) : i !== a;
}
function U0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const jd = {}, Vd = () => Object.create(jd), Hd = (e) => Object.getPrototypeOf(e) === jd;
function B0(e, t, n, i = !1) {
  const a = {}, c = Vd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ud(e, t, a, c);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Jg(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function K0(e, t, n, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: f }
  } = e, d = /* @__PURE__ */ Ze(a), [p] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const v = e.vnode.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        let x = v[h];
        if (fs(e.emitsOptions, x))
          continue;
        const M = t[x];
        if (p)
          if (Qe(c, x))
            M !== c[x] && (c[x] = M, b = !0);
          else {
            const C = Qt(x);
            a[C] = Ll(
              p,
              d,
              C,
              M,
              e,
              !1
            );
          }
        else
          M !== c[x] && (c[x] = M, b = !0);
      }
    }
  } else {
    Ud(e, t, a, c) && (b = !0);
    let v;
    for (const h in d)
      (!t || // for camelCase
      !Qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Xr(h)) === h || !Qe(t, v))) && (p ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[h] = Ll(
        p,
        d,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (c !== d)
      for (const h in c)
        (!t || !Qe(t, h)) && (delete c[h], b = !0);
  }
  b && rr(e.attrs, "set", "");
}
function Ud(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let f = !1, d;
  if (t)
    for (let p in t) {
      if (ra(p))
        continue;
      const b = t[p];
      let v;
      a && Qe(a, v = Qt(p)) ? !c || !c.includes(v) ? n[v] = b : (d || (d = {}))[v] = b : fs(e.emitsOptions, p) || (!(p in i) || b !== i[p]) && (i[p] = b, f = !0);
    }
  if (c) {
    const p = /* @__PURE__ */ Ze(n), b = d || lt;
    for (let v = 0; v < c.length; v++) {
      const h = c[v];
      n[h] = Ll(
        a,
        p,
        h,
        b[h],
        e,
        !Qe(b, h)
      );
    }
  }
  return f;
}
function Ll(e, t, n, i, a, c) {
  const f = e[n];
  if (f != null) {
    const d = Qe(f, "default");
    if (d && i === void 0) {
      const p = f.default;
      if (f.type !== Function && !f.skipFactory && Ve(p)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const v = Ca(a);
          i = b[n] = p.call(
            null,
            t
          ), v();
        }
      } else
        i = p;
      a.ce && a.ce._setProp(n, i);
    }
    f[
      0
      /* shouldCast */
    ] && (c && !d ? i = !1 : f[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Xr(n)) && (i = !0));
  }
  return i;
}
const G0 = /* @__PURE__ */ new WeakMap();
function Bd(e, t, n = !1) {
  const i = n ? G0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, f = {}, d = [];
  let p = !1;
  if (!Ve(e)) {
    const v = (h) => {
      p = !0;
      const [x, M] = Bd(h, t, !0);
      qt(f, x), M && d.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!c && !p)
    return at(e) && i.set(e, xi), xi;
  if (ze(c))
    for (let v = 0; v < c.length; v++) {
      const h = Qt(c[v]);
      ef(h) && (f[h] = lt);
    }
  else if (c)
    for (const v in c) {
      const h = Qt(v);
      if (ef(h)) {
        const x = c[v], M = f[h] = ze(x) || Ve(x) ? { type: x } : qt({}, x), C = M.type;
        let N = !1, z = !0;
        if (ze(C))
          for (let O = 0; O < C.length; ++O) {
            const F = C[O], T = Ve(F) && F.name;
            if (T === "Boolean") {
              N = !0;
              break;
            } else T === "String" && (z = !1);
          }
        else
          N = Ve(C) && C.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = N, M[
          1
          /* shouldCastTrue */
        ] = z, (N || Qe(M, "default")) && d.push(h);
      }
    }
  const b = [f, d];
  return at(e) && i.set(e, b), b;
}
function ef(e) {
  return e[0] !== "$" && !ra(e);
}
const hc = (e) => e === "_" || e === "_ctx" || e === "$stable", pc = (e) => ze(e) ? e.map(zn) : [zn(e)], W0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = kd((...a) => pc(t(...a)), n);
  return i._c = !1, i;
}, Kd = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (hc(a)) continue;
    const c = e[a];
    if (Ve(c))
      t[a] = W0(a, c, i);
    else if (c != null) {
      const f = pc(c);
      t[a] = () => f;
    }
  }
}, Gd = (e, t) => {
  const n = pc(t);
  e.slots.default = () => n;
}, Wd = (e, t, n) => {
  for (const i in t)
    (n || !hc(i)) && (e[i] = t[i]);
}, Y0 = (e, t, n) => {
  const i = e.slots = Vd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Wd(i, t, n), n && nd(i, "_", a, !0)) : Kd(t, i);
  } else t && Gd(e, t);
}, q0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, f = lt;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? c = !1 : Wd(a, t, n) : (c = !t.$stable, Kd(t, a)), f = t;
  } else t && (Gd(e, t), f = { default: 1 });
  if (c)
    for (const d in a)
      !hc(d) && f[d] == null && delete a[d];
}, rn = eb;
function X0(e) {
  return J0(e);
}
function J0(e, t) {
  const n = os();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: c,
    createElement: f,
    createText: d,
    createComment: p,
    setText: b,
    setElementText: v,
    parentNode: h,
    nextSibling: x,
    setScopeId: M = Un,
    insertStaticContent: C
  } = e, N = (u, L, ee, de = null, E = null, W = null, X = void 0, B = null, re = !!L.dynamicChildren) => {
    if (u === L)
      return;
    u && !Bi(u, L) && (de = jt(u), Fe(u, E, W, !0), u = null), L.patchFlag === -2 && (re = !1, L.dynamicChildren = null);
    const { type: Z, ref: me, shapeFlag: V } = L;
    switch (Z) {
      case ds:
        z(u, L, ee, de);
        break;
      case kr:
        O(u, L, ee, de);
        break;
      case No:
        u == null && F(L, ee, de, X);
        break;
      case Xe:
        he(
          u,
          L,
          ee,
          de,
          E,
          W,
          X,
          B,
          re
        );
        break;
      default:
        V & 1 ? R(
          u,
          L,
          ee,
          de,
          E,
          W,
          X,
          B,
          re
        ) : V & 6 ? fe(
          u,
          L,
          ee,
          de,
          E,
          W,
          X,
          B,
          re
        ) : (V & 64 || V & 128) && Z.process(
          u,
          L,
          ee,
          de,
          E,
          W,
          X,
          B,
          re,
          on
        );
    }
    me != null && E ? oa(me, u && u.ref, W, L || u, !L) : me == null && u && u.ref != null && oa(u.ref, null, W, u, !0);
  }, z = (u, L, ee, de) => {
    if (u == null)
      i(
        L.el = d(L.children),
        ee,
        de
      );
    else {
      const E = L.el = u.el;
      L.children !== u.children && b(E, L.children);
    }
  }, O = (u, L, ee, de) => {
    u == null ? i(
      L.el = p(L.children || ""),
      ee,
      de
    ) : L.el = u.el;
  }, F = (u, L, ee, de) => {
    [u.el, u.anchor] = C(
      u.children,
      L,
      ee,
      de,
      u.el,
      u.anchor
    );
  }, T = ({ el: u, anchor: L }, ee, de) => {
    let E;
    for (; u && u !== L; )
      E = x(u), i(u, ee, de), u = E;
    i(L, ee, de);
  }, I = ({ el: u, anchor: L }) => {
    let ee;
    for (; u && u !== L; )
      ee = x(u), a(u), u = ee;
    a(L);
  }, R = (u, L, ee, de, E, W, X, B, re) => {
    if (L.type === "svg" ? X = "svg" : L.type === "math" && (X = "mathml"), u == null)
      K(
        L,
        ee,
        de,
        E,
        W,
        X,
        B,
        re
      );
    else {
      const Z = u.el && u.el._isVueCE ? u.el : null;
      try {
        Z && Z._beginPatch(), _e(
          u,
          L,
          E,
          W,
          X,
          B,
          re
        );
      } finally {
        Z && Z._endPatch();
      }
    }
  }, K = (u, L, ee, de, E, W, X, B) => {
    let re, Z;
    const { props: me, shapeFlag: V, transition: xe, dirs: Me } = u;
    if (re = u.el = f(
      u.type,
      W,
      me && me.is,
      me
    ), V & 8 ? v(re, u.children) : V & 16 && te(
      u.children,
      re,
      null,
      de,
      E,
      fl(u, W),
      X,
      B
    ), Me && Or(u, null, de, "created"), Q(re, u, u.scopeId, X, de), me) {
      for (const Ee in me)
        Ee !== "value" && !ra(Ee) && c(re, Ee, null, me[Ee], W, de);
      "value" in me && c(re, "value", null, me.value, W), (Z = me.onVnodeBeforeMount) && En(Z, de, u);
    }
    Me && Or(u, null, de, "beforeMount");
    const Ae = Z0(E, xe);
    Ae && xe.beforeEnter(re), i(re, L, ee), ((Z = me && me.onVnodeMounted) || Ae || Me) && rn(() => {
      try {
        Z && En(Z, de, u), Ae && xe.enter(re), Me && Or(u, null, de, "mounted");
      } finally {
      }
    }, E);
  }, Q = (u, L, ee, de, E) => {
    if (ee && M(u, ee), de)
      for (let W = 0; W < de.length; W++)
        M(u, de[W]);
    if (E) {
      let W = E.subTree;
      if (L === W || Jd(W.type) && (W.ssContent === L || W.ssFallback === L)) {
        const X = E.vnode;
        Q(
          u,
          X,
          X.scopeId,
          X.slotScopeIds,
          E.parent
        );
      }
    }
  }, te = (u, L, ee, de, E, W, X, B, re = 0) => {
    for (let Z = re; Z < u.length; Z++) {
      const me = u[Z] = B ? nr(u[Z]) : zn(u[Z]);
      N(
        null,
        me,
        L,
        ee,
        de,
        E,
        W,
        X,
        B
      );
    }
  }, _e = (u, L, ee, de, E, W, X) => {
    const B = L.el = u.el;
    let { patchFlag: re, dynamicChildren: Z, dirs: me } = L;
    re |= u.patchFlag & 16;
    const V = u.props || lt, xe = L.props || lt;
    let Me;
    if (ee && Rr(ee, !1), (Me = xe.onVnodeBeforeUpdate) && En(Me, ee, L, u), me && Or(L, u, ee, "beforeUpdate"), ee && Rr(ee, !0), (V.innerHTML && xe.innerHTML == null || V.textContent && xe.textContent == null) && v(B, ""), Z ? A(
      u.dynamicChildren,
      Z,
      B,
      ee,
      de,
      fl(L, E),
      W
    ) : X || G(
      u,
      L,
      B,
      null,
      ee,
      de,
      fl(L, E),
      W,
      !1
    ), re > 0) {
      if (re & 16)
        ye(B, V, xe, ee, E);
      else if (re & 2 && V.class !== xe.class && c(B, "class", null, xe.class, E), re & 4 && c(B, "style", V.style, xe.style, E), re & 8) {
        const Ae = L.dynamicProps;
        for (let Ee = 0; Ee < Ae.length; Ee++) {
          const $e = Ae[Ee], nt = V[$e], dt = xe[$e];
          (dt !== nt || $e === "value") && c(B, $e, nt, dt, E, ee);
        }
      }
      re & 1 && u.children !== L.children && v(B, L.children);
    } else !X && Z == null && ye(B, V, xe, ee, E);
    ((Me = xe.onVnodeUpdated) || me) && rn(() => {
      Me && En(Me, ee, L, u), me && Or(L, u, ee, "updated");
    }, de);
  }, A = (u, L, ee, de, E, W, X) => {
    for (let B = 0; B < L.length; B++) {
      const re = u[B], Z = L[B], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bi(re, Z) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? h(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ee
        )
      );
      N(
        re,
        Z,
        me,
        null,
        de,
        E,
        W,
        X,
        !0
      );
    }
  }, ye = (u, L, ee, de, E) => {
    if (L !== ee) {
      if (L !== lt)
        for (const W in L)
          !ra(W) && !(W in ee) && c(
            u,
            W,
            L[W],
            null,
            E,
            de
          );
      for (const W in ee) {
        if (ra(W)) continue;
        const X = ee[W], B = L[W];
        X !== B && W !== "value" && c(u, W, B, X, E, de);
      }
      "value" in ee && c(u, "value", L.value, ee.value, E);
    }
  }, he = (u, L, ee, de, E, W, X, B, re) => {
    const Z = L.el = u ? u.el : d(""), me = L.anchor = u ? u.anchor : d("");
    let { patchFlag: V, dynamicChildren: xe, slotScopeIds: Me } = L;
    Me && (B = B ? B.concat(Me) : Me), u == null ? (i(Z, ee, de), i(me, ee, de), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      ee,
      me,
      E,
      W,
      X,
      B,
      re
    )) : V > 0 && V & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === xe.length ? (A(
      u.dynamicChildren,
      xe,
      ee,
      E,
      W,
      X,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || E && L === E.subTree) && Yd(
      u,
      L,
      !0
      /* shallow */
    )) : G(
      u,
      L,
      ee,
      me,
      E,
      W,
      X,
      B,
      re
    );
  }, fe = (u, L, ee, de, E, W, X, B, re) => {
    L.slotScopeIds = B, u == null ? L.shapeFlag & 512 ? E.ctx.activate(
      L,
      ee,
      de,
      X,
      re
    ) : $(
      L,
      ee,
      de,
      E,
      W,
      X,
      re
    ) : se(u, L, re);
  }, $ = (u, L, ee, de, E, W, X) => {
    const B = u.component = lb(
      u,
      de,
      E
    );
    if (Id(u) && (B.ctx.renderer = on), ub(B, !1, X), B.asyncDep) {
      if (E && E.registerDep(B, U, X), !u.el) {
        const re = B.subTree = Ge(kr);
        O(null, re, L, ee), u.placeholder = re.el;
      }
    } else
      U(
        B,
        u,
        L,
        ee,
        E,
        W,
        X
      );
  }, se = (u, L, ee) => {
    const de = L.component = u.component;
    if (H0(u, L, ee))
      if (de.asyncDep && !de.asyncResolved) {
        ie(de, L, ee);
        return;
      } else
        de.next = L, de.update();
    else
      L.el = u.el, de.vnode = L;
  }, U = (u, L, ee, de, E, W, X) => {
    const B = () => {
      if (u.isMounted) {
        let { next: V, bu: xe, u: Me, parent: Ae, vnode: Ee } = u;
        {
          const Je = qd(u);
          if (Je) {
            V && (V.el = Ee.el, ie(u, V, X)), Je.asyncDep.then(() => {
              rn(() => {
                u.isUnmounted || Z();
              }, E);
            });
            return;
          }
        }
        let $e = V, nt;
        Rr(u, !1), V ? (V.el = Ee.el, ie(u, V, X)) : V = Ee, xe && al(xe), (nt = V.props && V.props.onVnodeBeforeUpdate) && En(nt, Ae, V, Ee), Rr(u, !0);
        const dt = Zu(u), Ce = u.subTree;
        u.subTree = dt, N(
          Ce,
          dt,
          // parent may have changed if it's in a teleport
          h(Ce.el),
          // anchor may have changed if it's in a fragment
          jt(Ce),
          u,
          E,
          W
        ), V.el = dt.el, $e === null && U0(u, dt.el), Me && rn(Me, E), (nt = V.props && V.props.onVnodeUpdated) && rn(
          () => En(nt, Ae, V, Ee),
          E
        );
      } else {
        let V;
        const { el: xe, props: Me } = L, { bm: Ae, m: Ee, parent: $e, root: nt, type: dt } = u, Ce = sa(L);
        Rr(u, !1), Ae && al(Ae), !Ce && (V = Me && Me.onVnodeBeforeMount) && En(V, $e, L), Rr(u, !0);
        {
          nt.ce && nt.ce._hasShadowRoot() && nt.ce._injectChildStyle(
            dt,
            u.parent ? u.parent.type : void 0
          );
          const Je = u.subTree = Zu(u);
          N(
            null,
            Je,
            ee,
            de,
            u,
            E,
            W
          ), L.el = Je.el;
        }
        if (Ee && rn(Ee, E), !Ce && (V = Me && Me.onVnodeMounted)) {
          const Je = L;
          rn(
            () => En(V, $e, Je),
            E
          );
        }
        (L.shapeFlag & 256 || $e && sa($e.vnode) && $e.vnode.shapeFlag & 256) && u.a && rn(u.a, E), u.isMounted = !0, L = ee = de = null;
      }
    };
    u.scope.on();
    const re = u.effect = new od(B);
    u.scope.off();
    const Z = u.update = re.run.bind(re), me = u.job = re.runIfDirty.bind(re);
    me.i = u, me.id = u.uid, re.scheduler = () => cc(me), Rr(u, !0), Z();
  }, ie = (u, L, ee) => {
    L.component = u;
    const de = u.vnode.props;
    u.vnode = L, u.next = null, K0(u, L.props, de, ee), q0(u, L.children, ee), ar(), Bu(u), or();
  }, G = (u, L, ee, de, E, W, X, B, re = !1) => {
    const Z = u && u.children, me = u ? u.shapeFlag : 0, V = L.children, { patchFlag: xe, shapeFlag: Me } = L;
    if (xe > 0) {
      if (xe & 128) {
        we(
          Z,
          V,
          ee,
          de,
          E,
          W,
          X,
          B,
          re
        );
        return;
      } else if (xe & 256) {
        ce(
          Z,
          V,
          ee,
          de,
          E,
          W,
          X,
          B,
          re
        );
        return;
      }
    }
    Me & 8 ? (me & 16 && ot(Z, E, W), V !== Z && v(ee, V)) : me & 16 ? Me & 16 ? we(
      Z,
      V,
      ee,
      de,
      E,
      W,
      X,
      B,
      re
    ) : ot(Z, E, W, !0) : (me & 8 && v(ee, ""), Me & 16 && te(
      V,
      ee,
      de,
      E,
      W,
      X,
      B,
      re
    ));
  }, ce = (u, L, ee, de, E, W, X, B, re) => {
    u = u || xi, L = L || xi;
    const Z = u.length, me = L.length, V = Math.min(Z, me);
    let xe;
    for (xe = 0; xe < V; xe++) {
      const Me = L[xe] = re ? nr(L[xe]) : zn(L[xe]);
      N(
        u[xe],
        Me,
        ee,
        null,
        E,
        W,
        X,
        B,
        re
      );
    }
    Z > me ? ot(
      u,
      E,
      W,
      !0,
      !1,
      V
    ) : te(
      L,
      ee,
      de,
      E,
      W,
      X,
      B,
      re,
      V
    );
  }, we = (u, L, ee, de, E, W, X, B, re) => {
    let Z = 0;
    const me = L.length;
    let V = u.length - 1, xe = me - 1;
    for (; Z <= V && Z <= xe; ) {
      const Me = u[Z], Ae = L[Z] = re ? nr(L[Z]) : zn(L[Z]);
      if (Bi(Me, Ae))
        N(
          Me,
          Ae,
          ee,
          null,
          E,
          W,
          X,
          B,
          re
        );
      else
        break;
      Z++;
    }
    for (; Z <= V && Z <= xe; ) {
      const Me = u[V], Ae = L[xe] = re ? nr(L[xe]) : zn(L[xe]);
      if (Bi(Me, Ae))
        N(
          Me,
          Ae,
          ee,
          null,
          E,
          W,
          X,
          B,
          re
        );
      else
        break;
      V--, xe--;
    }
    if (Z > V) {
      if (Z <= xe) {
        const Me = xe + 1, Ae = Me < me ? L[Me].el : de;
        for (; Z <= xe; )
          N(
            null,
            L[Z] = re ? nr(L[Z]) : zn(L[Z]),
            ee,
            Ae,
            E,
            W,
            X,
            B,
            re
          ), Z++;
      }
    } else if (Z > xe)
      for (; Z <= V; )
        Fe(u[Z], E, W, !0), Z++;
    else {
      const Me = Z, Ae = Z, Ee = /* @__PURE__ */ new Map();
      for (Z = Ae; Z <= xe; Z++) {
        const Vt = L[Z] = re ? nr(L[Z]) : zn(L[Z]);
        Vt.key != null && Ee.set(Vt.key, Z);
      }
      let $e, nt = 0;
      const dt = xe - Ae + 1;
      let Ce = !1, Je = 0;
      const sn = new Array(dt);
      for (Z = 0; Z < dt; Z++) sn[Z] = 0;
      for (Z = Me; Z <= V; Z++) {
        const Vt = u[Z];
        if (nt >= dt) {
          Fe(Vt, E, W, !0);
          continue;
        }
        let ln;
        if (Vt.key != null)
          ln = Ee.get(Vt.key);
        else
          for ($e = Ae; $e <= xe; $e++)
            if (sn[$e - Ae] === 0 && Bi(Vt, L[$e])) {
              ln = $e;
              break;
            }
        ln === void 0 ? Fe(Vt, E, W, !0) : (sn[ln - Ae] = Z + 1, ln >= Je ? Je = ln : Ce = !0, N(
          Vt,
          L[ln],
          ee,
          null,
          E,
          W,
          X,
          B,
          re
        ), nt++);
      }
      const vt = Ce ? Q0(sn) : xi;
      for ($e = vt.length - 1, Z = dt - 1; Z >= 0; Z--) {
        const Vt = Ae + Z, ln = L[Vt], Ia = L[Vt + 1], Di = Vt + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ia.el || Xd(Ia)
        ) : de;
        sn[Z] === 0 ? N(
          null,
          ln,
          ee,
          Di,
          E,
          W,
          X,
          B,
          re
        ) : Ce && ($e < 0 || Z !== vt[$e] ? Oe(ln, ee, Di, 2) : $e--);
      }
    }
  }, Oe = (u, L, ee, de, E = null) => {
    const { el: W, type: X, transition: B, children: re, shapeFlag: Z } = u;
    if (Z & 6) {
      Oe(u.component.subTree, L, ee, de);
      return;
    }
    if (Z & 128) {
      u.suspense.move(L, ee, de);
      return;
    }
    if (Z & 64) {
      X.move(u, L, ee, on);
      return;
    }
    if (X === Xe) {
      i(W, L, ee);
      for (let V = 0; V < re.length; V++)
        Oe(re[V], L, ee, de);
      i(u.anchor, L, ee);
      return;
    }
    if (X === No) {
      T(u, L, ee);
      return;
    }
    if (de !== 2 && Z & 1 && B)
      if (de === 0)
        B.beforeEnter(W), i(W, L, ee), rn(() => B.enter(W), E);
      else {
        const { leave: V, delayLeave: xe, afterLeave: Me } = B, Ae = () => {
          u.ctx.isUnmounted ? a(W) : i(W, L, ee);
        }, Ee = () => {
          W._isLeaving && W[m0](
            !0
            /* cancelled */
          ), V(W, () => {
            Ae(), Me && Me();
          });
        };
        xe ? xe(W, Ae, Ee) : Ee();
      }
    else
      i(W, L, ee);
  }, Fe = (u, L, ee, de = !1, E = !1) => {
    const {
      type: W,
      props: X,
      ref: B,
      children: re,
      dynamicChildren: Z,
      shapeFlag: me,
      patchFlag: V,
      dirs: xe,
      cacheIndex: Me,
      memo: Ae
    } = u;
    if (V === -2 && (E = !1), B != null && (ar(), oa(B, null, ee, u, !0), or()), Me != null && (L.renderCache[Me] = void 0), me & 256) {
      L.ctx.deactivate(u);
      return;
    }
    const Ee = me & 1 && xe, $e = !sa(u);
    let nt;
    if ($e && (nt = X && X.onVnodeBeforeUnmount) && En(nt, L, u), me & 6)
      tt(u.component, ee, de);
    else {
      if (me & 128) {
        u.suspense.unmount(ee, de);
        return;
      }
      Ee && Or(u, null, L, "beforeUnmount"), me & 64 ? u.type.remove(
        u,
        L,
        ee,
        on,
        de
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (W !== Xe || V > 0 && V & 64) ? ot(
        Z,
        L,
        ee,
        !1,
        !0
      ) : (W === Xe && V & 384 || !E && me & 16) && ot(re, L, ee), de && Ke(u);
    }
    const dt = Ae != null && Me == null;
    ($e && (nt = X && X.onVnodeUnmounted) || Ee || dt) && rn(() => {
      nt && En(nt, L, u), Ee && Or(u, null, L, "unmounted"), dt && (u.el = null);
    }, ee);
  }, Ke = (u) => {
    const { type: L, el: ee, anchor: de, transition: E } = u;
    if (L === Xe) {
      et(ee, de);
      return;
    }
    if (L === No) {
      I(u);
      return;
    }
    const W = () => {
      a(ee), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: X, delayLeave: B } = E, re = () => X(ee, W);
      B ? B(u.el, W, re) : re();
    } else
      W();
  }, et = (u, L) => {
    let ee;
    for (; u !== L; )
      ee = x(u), a(u), u = ee;
    a(L);
  }, tt = (u, L, ee) => {
    const { bum: de, scope: E, job: W, subTree: X, um: B, m: re, a: Z } = u;
    tf(re), tf(Z), de && al(de), E.stop(), W && (W.flags |= 8, Fe(X, u, L, ee)), B && rn(B, L), rn(() => {
      u.isUnmounted = !0;
    }, L);
  }, ot = (u, L, ee, de = !1, E = !1, W = 0) => {
    for (let X = W; X < u.length; X++)
      Fe(u[X], L, ee, de, E);
  }, jt = (u) => {
    if (u.shapeFlag & 6)
      return jt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const L = x(u.anchor || u.el), ee = L && L[h0];
    return ee ? x(ee) : L;
  };
  let At = !1;
  const pn = (u, L, ee) => {
    let de;
    u == null ? L._vnode && (Fe(L._vnode, null, null, !0), de = L._vnode.component) : N(
      L._vnode || null,
      u,
      L,
      null,
      null,
      null,
      ee
    ), L._vnode = u, At || (At = !0, Bu(de), Sd(), At = !1);
  }, on = {
    p: N,
    um: Fe,
    m: Oe,
    r: Ke,
    mt: $,
    mc: te,
    pc: G,
    pbc: A,
    n: jt,
    o: e
  };
  return {
    render: pn,
    hydrate: void 0,
    createApp: F0(pn)
  };
}
function fl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Rr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Z0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yd(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (ze(i) && ze(a))
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let d = a[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[c] = nr(a[c]), d.el = f.el), !n && d.patchFlag !== -2 && Yd(f, d)), d.type === ds && (d.patchFlag === -1 && (d = a[c] = nr(d)), d.el = f.el), d.type === kr && !d.el && (d.el = f.el);
    }
}
function Q0(e) {
  const t = e.slice(), n = [0];
  let i, a, c, f, d;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const b = e[i];
    if (b !== 0) {
      if (a = n[n.length - 1], e[a] < b) {
        t[i] = a, n.push(i);
        continue;
      }
      for (c = 0, f = n.length - 1; c < f; )
        d = c + f >> 1, e[n[d]] < b ? c = d + 1 : f = d;
      b < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, f = n[c - 1]; c-- > 0; )
    n[c] = f, f = t[f];
  return n;
}
function qd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qd(t);
}
function tf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xd(t.subTree) : null;
}
const Jd = (e) => e.__isSuspense;
function eb(e, t) {
  t && t.pendingBranch ? ze(e) ? t.effects.push(...e) : t.effects.push(e) : l0(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), ds = /* @__PURE__ */ Symbol.for("v-txt"), kr = /* @__PURE__ */ Symbol.for("v-cmt"), No = /* @__PURE__ */ Symbol.for("v-stc"), ca = [];
let hn = null;
function Ne(e = !1) {
  ca.push(hn = e ? null : []);
}
function tb() {
  ca.pop(), hn = ca[ca.length - 1] || null;
}
let va = 1;
function nf(e, t = !1) {
  va += e, e < 0 && hn && t && (hn.hasOnce = !0);
}
function Zd(e) {
  return e.dynamicChildren = va > 0 ? hn || xi : null, tb(), va > 0 && hn && hn.push(e), e;
}
function Pe(e, t, n, i, a, c) {
  return Zd(
    le(
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
function Ei(e, t, n, i, a) {
  return Zd(
    Ge(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Qd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const eh = ({ key: e }) => e ?? null, Mo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || /* @__PURE__ */ Yt(e) || Ve(e) ? { i: dn, r: e, k: t, f: !!n } : e : null);
function le(e, t = null, n = null, i = 0, a = null, c = e === Xe ? 0 : 1, f = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && eh(t),
    ref: t && Mo(t),
    scopeId: Md,
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
    ctx: dn
  };
  return d ? (mc(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= Nt(n) ? 8 : 16), va > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && hn.push(p), p;
}
const Ge = nb;
function nb(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === Od) && (e = kr), Qd(e)) {
    const d = Ai(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mc(d, n), va > 0 && !c && hn && (d.shapeFlag & 6 ? hn[hn.indexOf(e)] = d : hn.push(d)), d.patchFlag = -2, d;
  }
  if (mb(e) && (e = e.__vccOpts), t) {
    t = rb(t);
    let { class: d, style: p } = t;
    d && !Nt(d) && (t.class = gt(d)), at(p) && (/* @__PURE__ */ sc(p) && !ze(p) && (p = qt({}, p)), t.style = kt(p));
  }
  const f = Nt(e) ? 1 : Jd(e) ? 128 : p0(e) ? 64 : at(e) ? 4 : Ve(e) ? 2 : 0;
  return le(
    e,
    t,
    n,
    i,
    a,
    f,
    c,
    !0
  );
}
function rb(e) {
  return e ? /* @__PURE__ */ sc(e) || Hd(e) ? qt({}, e) : e : null;
}
function Ai(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: f, children: d, transition: p } = e, b = t ? vr(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && eh(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? ze(c) ? c.concat(Mo(t)) : [c, Mo(t)] : Mo(t)
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
    patchFlag: t && e.type !== Xe ? f === -1 ? 16 : f | 16 : f,
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
    ssContent: e.ssContent && Ai(e.ssContent),
    ssFallback: e.ssFallback && Ai(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && fc(
    v,
    p.clone(v)
  ), v;
}
function ib(e = " ", t = 0) {
  return Ge(ds, null, e, t);
}
function ab(e, t) {
  const n = Ge(No, null, e);
  return n.staticCount = t, n;
}
function Et(e = "", t = !1) {
  return t ? (Ne(), Ei(kr, null, e)) : Ge(kr, null, e);
}
function zn(e) {
  return e == null || typeof e == "boolean" ? Ge(kr) : ze(e) ? Ge(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qd(e) ? nr(e) : Ge(ds, null, String(e));
}
function nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ai(e);
}
function mc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ze(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), mc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Hd(t) ? t._ctx = dn : a === 3 && dn && (dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ve(t) ? (t = { default: t, _ctx: dn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [ib(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = gt([t.class, i.class]));
      else if (a === "style")
        t.style = kt([t.style, i.style]);
      else if (ns(a)) {
        const c = t[a], f = i[a];
        f && c !== f && !(ze(c) && c.includes(f)) ? t[a] = c ? [].concat(c, f) : f : f == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !rs(a) && (t[a] = f);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function En(e, t, n, i = null) {
  Kn(e, t, 7, [
    n,
    i
  ]);
}
const ob = Ld();
let sb = 0;
function lb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || ob, c = {
    uid: sb++,
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
    scope: new Tg(
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
    propsOptions: Bd(i, a),
    emitsOptions: zd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: lt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: lt,
    data: lt,
    props: lt,
    attrs: lt,
    slots: lt,
    refs: lt,
    setupState: lt,
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = z0.bind(null, c), e.ce && e.ce(c), c;
}
let Wt = null;
const cb = () => Wt || dn;
let $o, zl;
{
  const e = os(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
    };
  };
  $o = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Wt = n
  ), zl = t(
    "__VUE_SSR_SETTERS__",
    (n) => _a = n
  );
}
const Ca = (e) => {
  const t = Wt;
  return $o(e), e.scope.on(), () => {
    e.scope.off(), $o(t);
  };
}, rf = () => {
  Wt && Wt.scope.off(), $o(null);
};
function th(e) {
  return e.vnode.shapeFlag & 4;
}
let _a = !1;
function ub(e, t = !1, n = !1) {
  t && zl(t);
  const { props: i, children: a } = e.vnode, c = th(e);
  B0(e, i, c, t), Y0(e, a, n || t);
  const f = c ? fb(e, t) : void 0;
  return t && zl(!1), f;
}
function fb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, C0);
  const { setup: i } = n;
  if (i) {
    ar();
    const a = e.setupContext = i.length > 1 ? hb(e) : null, c = Ca(e), f = Aa(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Qf(f);
    if (or(), c(), (d || e.sp) && !sa(e) && Cd(e), d) {
      if (f.then(rf, rf), t)
        return f.then((p) => {
          af(e, p);
        }).catch((p) => {
          cs(p, e, 0);
        });
      e.asyncDep = f;
    } else
      af(e, f);
  } else
    nh(e);
}
function af(e, t, n) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : at(t) && (e.setupState = _d(t)), nh(e);
}
function nh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Un);
  {
    const a = Ca(e);
    ar();
    try {
      I0(e);
    } finally {
      or(), a();
    }
  }
}
const db = {
  get(e, t) {
    return Gt(e, "get", ""), e[t];
  }
};
function hb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, db),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_d(Zg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in la)
        return la[n](e);
    },
    has(t, n) {
      return n in t || n in la;
    }
  })) : e.proxy;
}
function pb(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mb(e) {
  return Ve(e) && "__vccOpts" in e;
}
const St = (e, t) => /* @__PURE__ */ r0(e, t, _a), gb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $l;
const of = typeof window < "u" && window.trustedTypes;
if (of)
  try {
    $l = /* @__PURE__ */ of.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rh = $l ? (e) => $l.createHTML(e) : (e) => e, bb = "http://www.w3.org/2000/svg", yb = "http://www.w3.org/1998/Math/MathML", er = typeof document < "u" ? document : null, sf = er && /* @__PURE__ */ er.createElement("template"), vb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? er.createElementNS(bb, e) : t === "mathml" ? er.createElementNS(yb, e) : n ? er.createElement(e, { is: n }) : er.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => er.createTextNode(e),
  createComment: (e) => er.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => er.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, c) {
    const f = n ? n.previousSibling : t.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      sf.innerHTML = rh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = sf.content;
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
      f ? f.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, _b = /* @__PURE__ */ Symbol("_vtc");
function xb(e, t, n) {
  const i = e[_b];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const jo = /* @__PURE__ */ Symbol("_vod"), ih = /* @__PURE__ */ Symbol("_vsh"), gc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[jo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ki(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ki(e, !0), i.enter(e)) : i.leave(e, () => {
      Ki(e, !1);
    }) : Ki(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ki(e, t);
  }
};
function Ki(e, t) {
  e.style.display = t ? e[jo] : "none", e[ih] = !t;
}
const wb = /* @__PURE__ */ Symbol(""), Sb = /(?:^|;)\s*display\s*:/;
function Nb(e, t, n) {
  const i = e.style, a = Nt(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (Nt(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          n[d] == null && ko(i, d, "");
        }
      else
        for (const f in t)
          n[f] == null && ko(i, f, "");
    for (const f in n)
      f === "display" && (c = !0), ko(i, f, n[f]);
  } else if (a) {
    if (t !== n) {
      const f = i[wb];
      f && (n += ";" + f), i.cssText = n, c = Sb.test(n);
    }
  } else t && e.removeAttribute("style");
  jo in e && (e[jo] = c ? i.display : "", e[ih] && (i.display = "none"));
}
const lf = /\s*!important$/;
function ko(e, t, n) {
  if (ze(n))
    n.forEach((i) => ko(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Mb(e, t);
    lf.test(n) ? e.setProperty(
      Xr(i),
      n.replace(lf, ""),
      "important"
    ) : e[i] = n;
  }
}
const cf = ["Webkit", "Moz", "ms"], dl = {};
function Mb(e, t) {
  const n = dl[t];
  if (n)
    return n;
  let i = Qt(t);
  if (i !== "filter" && i in e)
    return dl[t] = i;
  i = as(i);
  for (let a = 0; a < cf.length; a++) {
    const c = cf[a] + i;
    if (c in e)
      return dl[t] = c;
  }
  return t;
}
const uf = "http://www.w3.org/1999/xlink";
function ff(e, t, n, i, a, c = Cg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(uf, t.slice(6, t.length)) : e.setAttributeNS(uf, t, n) : n == null || c && !rd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : Bn(n) ? String(n) : n
  );
}
function df(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rh(n) : n);
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
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = rd(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function kb(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Pb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const hf = /* @__PURE__ */ Symbol("_vei");
function Ab(e, t, n, i, a = null) {
  const c = e[hf] || (e[hf] = {}), f = c[t];
  if (i && f)
    f.value = i;
  else {
    const [d, p] = Cb(t);
    if (i) {
      const b = c[t] = Eb(
        i,
        a
      );
      kb(e, d, b, p);
    } else f && (Pb(e, d, f, p), c[t] = void 0);
  }
}
const pf = /(?:Once|Passive|Capture)$/;
function Cb(e) {
  let t;
  if (pf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(pf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xr(e.slice(2)), t];
}
let hl = 0;
const Ib = /* @__PURE__ */ Promise.resolve(), Tb = () => hl || (Ib.then(() => hl = 0), hl = Date.now());
function Eb(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Kn(
      Db(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Tb(), n;
}
function Db(e, t) {
  if (ze(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ob = (e, t, n, i, a, c) => {
  const f = a === "svg";
  t === "class" ? xb(e, i, f) : t === "style" ? Nb(e, n, i) : ns(t) ? rs(t) || Ab(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rb(e, t, i, f)) ? (df(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, i, f, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Fb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Nt(i))) ? df(e, Qt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ff(e, t, i, f));
};
function Rb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && Ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return mf(t) && Nt(n) ? !1 : t in e;
}
function Fb(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Qt(t);
  return Array.isArray(n) ? n.some((a) => Qt(a) === i) : Object.keys(n).some((a) => Qt(a) === i);
}
const Lb = ["ctrl", "shift", "alt", "meta"], zb = {
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
  exact: (e, t) => Lb.some((n) => e[`${n}Key`] && !t.includes(n))
}, ah = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let f = 0; f < t.length; f++) {
      const d = zb[t[f]];
      if (d && d(a, t)) return;
    }
    return e(a, ...c);
  }));
}, $b = /* @__PURE__ */ qt({ patchProp: Ob }, vb);
let gf;
function jb() {
  return gf || (gf = X0($b));
}
const Vb = ((...e) => {
  const t = jb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ub(i);
    if (!a) return;
    const c = t._component;
    !Ve(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = n(a, !1, Hb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
});
function Hb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ub(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const bt = Math.PI / 180, oh = Math.PI * 2, Bb = 2048;
function st(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Pr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Vo(e, t) {
  return Pr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function vi(e, t) {
  return Pr(e.x * t, e.y * t, e.z * t);
}
function Po(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function bf(e, t) {
  return Pr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Qi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Pr(e.x / t, e.y / t, e.z / t);
}
function Kb(e, t) {
  const n = Number(e || 0) * bt, i = Number(t || 0) * bt, a = Math.cos(i);
  return Pr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Ao(e, t, n = 0) {
  const i = Kb(e, t);
  let a = Pr(0, 1, 0);
  Math.abs(Po(i, a)) > 0.999 && (a = Pr(0, 0, 1));
  let c = Qi(bf(a, i)), f = Qi(bf(i, c));
  const d = Number(n || 0) * bt, p = Math.cos(d), b = Math.sin(d), v = Vo(vi(c, p), vi(f, b)), h = Vo(vi(c, -b), vi(f, p));
  return c = Qi(v), f = Qi(h), { fwd: i, right: c, up: f };
}
function Gb(e, t) {
  const n = (Number(e || 0) - 0.5) * oh, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Pr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function yf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), f = Math.max(512, Bb), d = Math.min(1, f / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function vf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function pl(e, t, n) {
  const i = vf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = vf(e, e.FRAGMENT_SHADER, n);
  } catch (f) {
    throw e.deleteShader(i), f;
  }
  const c = e.createProgram();
  if (e.attachShader(c, i), e.attachShader(c, a), e.linkProgram(c), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(c, e.LINK_STATUS)) {
    const f = e.getProgramInfoLog(c) || "program link failed";
    throw e.deleteProgram(c), new Error(f);
  }
  return c;
}
const ml = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Wb = `#version 300 es
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
}`, Yb = `#version 300 es
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
}`, qb = `#version 300 es
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
function Gi(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(st(i, 1, 179) * bt * 0.5) * (n / Math.max(t, 1))) / bt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: st(i, 1, 179),
    vFovDeg: st(a, 0.1, 179)
  };
}
function Xb(e) {
  const t = Ao(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(st(Number(e.hFovDeg), 0.1, 179) * 0.5 * bt),
    tanY: Math.tan(st(Number(e.vFovDeg), 0.1, 179) * 0.5 * bt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: st(Number(e.opacity ?? 1), 0, 1)
  };
}
function Jb(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, c = null, f = null, d = null, p = null, b = null, v = null, h = null, x = null, M = !1, C = yf(1, 1, 1), N = null, z = null, O = null, F = null, T = null;
  const I = /* @__PURE__ */ new Map();
  let R = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, K = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, Q = {
    paint: !1,
    mask: !1
  };
  function te(E = null, W = null) {
    const X = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, X), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, W ?? n.CLAMP_TO_EDGE), X;
  }
  function _e() {
    if (M) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = pl(n, ml, Wb), a = pl(n, ml, Yb), c = pl(n, ml, qb), N = {
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
      }, O = {
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
      }, f = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, f), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), d = te(n.REPEAT, n.CLAMP_TO_EDGE), p = te(n.REPEAT, n.CLAMP_TO_EDGE), b = te(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function A() {
    var E;
    if (n) {
      try {
        f && n.deleteBuffer(f), d && n.deleteTexture(d), p && n.deleteTexture(p), b && n.deleteTexture(b), I.forEach((W) => {
          we(W);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, f = null, d = null, p = null, b = null, I.clear(), v = null, h = null, x = null, K = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, Q = {
        paint: !1,
        mask: !1
      }, F = null, T = null, M = !1;
    }
  }
  function ye(E, W, X = 1) {
    C = yf(E, W, X), (t.width !== C.width || t.height !== C.height) && (t.width = C.width, t.height = C.height);
  }
  function he(E) {
    E === "background" ? v = null : E === "paint" ? h = null : x = null, K[E] && (K[E].width = 0, K[E].height = 0);
  }
  function fe() {
    Q.paint = !1, Q.mask = !1;
  }
  function $(E) {
    fe(), E === "paint" ? Q.paint = !0 : E === "mask" && (Q.mask = !0);
  }
  function se(E, W, X = [], B = { width: 0, height: 0 }, re = !1) {
    if (!n || !E || !W) return !1;
    const Z = Number(W.width || W.videoWidth || W.naturalWidth || 0), me = Number(W.height || W.videoHeight || W.naturalHeight || 0);
    if (!(Z > 1) || !(me > 1)) return !1;
    const V = Array.isArray(X) ? X.filter((xe) => xe && xe.w > 0 && xe.h > 0) : [];
    if (!V.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, re ? 1 : 0), B.width !== Z || B.height !== me)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), B.width = Z, B.height = me, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (F || (F = document.createElement("canvas"), T = F.getContext("2d")), !T)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const xe of V) {
      const Me = Math.max(0, Math.floor(Number(xe.x || 0))), Ae = Math.max(0, Math.floor(Number(xe.y || 0))), Ee = Math.min(Z - Me, Math.ceil(Number(xe.w || 0))), $e = Math.min(me - Ae, Math.ceil(Number(xe.h || 0)));
      if (!(Ee <= 0 || $e <= 0)) {
        if (F.width !== Ee || F.height !== $e) {
          if (F.width = Ee, F.height = $e, T = F.getContext("2d"), !T)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          T.clearRect(0, 0, Ee, $e);
        T.drawImage(W, Me, Ae, Ee, $e, 0, 0, Ee, $e), n.texSubImage2D(n.TEXTURE_2D, 0, Me, Ae, n.RGBA, n.UNSIGNED_BYTE, F);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function U(E, W, X, B, re = null, Z = !1) {
    if (!_e()) return !1;
    if (!X)
      return he(E), !1;
    const me = String(B ?? ""), V = E === "background" ? v : E === "paint" ? h : x, xe = K[E], Me = Number(X.width || X.videoWidth || X.naturalWidth || 0), Ae = Number(X.height || X.videoHeight || X.naturalHeight || 0), Ee = xe.width !== Me || xe.height !== Ae;
    if (V === me && !Ee && !(Array.isArray(re) && re.length)) return !0;
    if (!(Me > 0) || !(Ae > 0))
      return he(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, W), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z ? 1 : 0), !(Array.isArray(re) && re.length ? se(W, X, re, xe, Z) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, X), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he(E), !1;
      xe.width = Me, xe.height = Ae;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? v = me : E === "paint" ? h = me : x = me, !0;
  }
  function ie(E, W) {
    return U("background", d, E, W, null, !0);
  }
  function G(E, W, X = null) {
    return U("paint", p, E, W, X, !0);
  }
  function ce(E, W, X = null) {
    return U("mask", b, E, W, X, !0);
  }
  function we(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function Oe(E = /* @__PURE__ */ new Set()) {
    I.forEach((W, X) => {
      E.has(X) || (we(W), I.delete(X));
    });
  }
  function Fe(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const W = String(E.assetId), X = String(E.revision ?? ""), B = E.source, re = Number(B.width || B.naturalWidth || B.videoWidth || 0), Z = Number(B.height || B.naturalHeight || B.videoHeight || 0);
    if (re <= 0 || Z <= 0) return null;
    let me = I.get(W);
    if (me || (me = {
      texture: te(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set(W, me)), me.revision !== X || me.width !== re || me.height !== Z) {
      if (n.bindTexture(n.TEXTURE_2D, me.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, B), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), me.revision = X, me.width = re, me.height = Z;
    }
    return me.texture;
  }
  function Ke(E = []) {
    if (!_e()) return !1;
    const W = /* @__PURE__ */ new Set();
    return E.forEach((X) => {
      !(X != null && X.assetId) || !(X != null && X.source) || (W.add(String(X.assetId)), Fe(X));
    }), Oe(W), !0;
  }
  function et() {
    return _e() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function tt(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, f), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function ot(E, W = {}) {
    if (!v) return null;
    n.disable(n.BLEND), tt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(N.background, 0), n.uniform2f(N.viewport, Math.max(1, C.width), Math.max(1, C.height)), n.uniform1i(N.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const X = Gi(E, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(N.yaw, Number(X.yawDeg || 0) * bt), n.uniform1f(N.pitch, Number(X.pitchDeg || 0) * bt), n.uniform1f(N.roll, Number(X.rollDeg || 0) * bt), n.uniform1f(N.hFov, st(Number(X.hFovDeg || 90), 0.1, 179) * bt), n.uniform1f(N.vFov, st(Number(X.vFovDeg || 60), 0.1, 179) * bt), n.uniform1f(N.opacity, st(Number(W.backgroundOpacity ?? 1), 0, 1));
    const B = Number((E == null ? void 0 : E.coverageDeg) || (W == null ? void 0 : W.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(N.coverage, B), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function jt(E, W = {}) {
    const X = Q.paint && h != null, B = Q.mask && x != null;
    if (!X && !B) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), tt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(z.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(z.mask, 1), n.uniform1i(z.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const re = Gi(E, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(z.yaw, Number(re.yawDeg || 0) * bt), n.uniform1f(z.pitch, Number(re.pitchDeg || 0) * bt), n.uniform1f(z.roll, Number(re.rollDeg || 0) * bt), n.uniform1f(z.hFov, st(Number(re.hFovDeg || 90), 0.1, 179) * bt), n.uniform1f(z.vFov, st(Number(re.vFovDeg || 60), 0.1, 179) * bt), n.uniform1f(z.paintOpacity, st(Number(W.paintOpacity ?? 1), 0, 1)), n.uniform1f(z.maskOpacity, st(Number(W.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(z.hasPaint, X ? 1 : 0), n.uniform1i(z.hasMask, B ? 1 : 0), n.uniform1i(z.showMaskTint, W.showMaskTint === !1 ? 0 : 1), n.uniform3f(z.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function At(E, W) {
    var xe, Me, Ae, Ee, $e, nt, dt;
    const X = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!X.length) {
      fe(), Oe(/* @__PURE__ */ new Set());
      return;
    }
    const B = (W == null ? void 0 : W.mode) === "unwrap" ? 0 : (W == null ? void 0 : W.mode) === "cutout" ? 2 : 1, re = Gi(W, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Z = Ao(re.yawDeg, re.pitchDeg, re.rollDeg), me = X.slice().sort((Ce, Je) => Number((Ce == null ? void 0 : Ce.zIndex) || 0) - Number((Je == null ? void 0 : Je.zIndex) || 0)), V = /* @__PURE__ */ new Set();
    fe();
    for (const Ce of me)
      if (!(!Ce || Ce.visible === !1)) {
        if (Ce.type === "sticker") {
          const Je = String(((xe = Ce == null ? void 0 : Ce.params) == null ? void 0 : xe.assetId) || (Ce == null ? void 0 : Ce.id) || "");
          if (!Je) continue;
          V.add(Je);
          const sn = Fe({
            assetId: Je,
            source: Ce.source,
            revision: Ce.revision
          });
          if (!sn) continue;
          const vt = Xb({
            yawDeg: ((Me = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Me.yawDeg) || 0,
            pitchDeg: ((Ae = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ae.pitchDeg) || 0,
            rollDeg: ((Ee = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ee.rollDeg) || 0,
            hFovDeg: (($e = Ce == null ? void 0 : Ce.transform) == null ? void 0 : $e.hFovDeg) || 30,
            vFovDeg: ((nt = Ce == null ? void 0 : Ce.transform) == null ? void 0 : nt.vFovDeg) || 30,
            crop: ((dt = Ce == null ? void 0 : Ce.params) == null ? void 0 : dt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ce == null ? void 0 : Ce.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), tt(c), n.uniform1i(O.texture, 0), n.uniform1i(O.mode, B), n.uniform3f(O.viewRight, Z.right.x, Z.right.y, Z.right.z), n.uniform3f(O.viewUp, Z.up.x, Z.up.y, Z.up.z), n.uniform3f(O.viewFwd, Z.fwd.x, Z.fwd.y, Z.fwd.z), n.uniform1f(O.viewHfov, st(Number(re.hFovDeg || 90), 0.1, 179) * bt), n.uniform1f(O.viewVfov, st(Number(re.vFovDeg || 60), 0.1, 179) * bt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, sn), n.uniform3f(O.stickerRight, vt.right.x, vt.right.y, vt.right.z), n.uniform3f(O.stickerUp, vt.up.x, vt.up.y, vt.up.z), n.uniform3f(O.stickerFwd, vt.fwd.x, vt.fwd.y, vt.fwd.z), n.uniform1f(O.stickerTanX, Math.max(1e-6, vt.tanX)), n.uniform1f(O.stickerTanY, Math.max(1e-6, vt.tanY)), n.uniform4f(
            O.crop,
            st(Number(vt.crop.x0 ?? 0), 0, 1),
            st(Number(vt.crop.y0 ?? 0), 0, 1),
            st(Number(vt.crop.x1 ?? 1), 0, 1),
            st(Number(vt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(O.opacity, vt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ce.type === "paint" || Ce.type === "raster") {
          if (!G(Ce.source, Ce.revision ?? "")) continue;
          $("paint"), jt(W, {
            paintOpacity: Number(Ce.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ce.type === "mask") {
          if (!ce(Ce.source, Ce.revision ?? "")) continue;
          $("mask"), jt(W, {
            paintOpacity: 0,
            maskOpacity: Number(Ce.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Oe(V), fe();
  }
  function pn(E) {
    return !et() || !v ? null : (ot({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function on(E) {
    return !et() || !v ? null : (ot({ mode: "unwrap" }, E), t);
  }
  function Gn(E) {
    return !et() || !v ? null : (ot({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function u(E = {}) {
    if (!_e() || (ye(E.width, E.height, E.dpr || 1), !et())) return null;
    const W = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), X = Object.prototype.hasOwnProperty.call(E, "paintSource"), B = Object.prototype.hasOwnProperty.call(E, "maskSource"), re = Object.prototype.hasOwnProperty.call(E, "textures"), Z = Object.prototype.hasOwnProperty.call(E, "scene");
    return W && ie(E.backgroundSource, E.backgroundRevision ?? ""), X && G(E.paintSource, E.paintRevision ?? ""), B && ce(E.maskSource, E.maskRevision ?? ""), re && (Ke(E.textures || []), R.textures = E.textures || []), Z && (R.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (R.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (R.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (R.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (R.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), v && ot(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? R.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || R.coverageDeg || 360) === 180 ? 180 : 360
    }), At(
      R.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function L(E = {}) {
    return _e() ? !!u({
      ...E,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(E.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function ee(E, W, X) {
    const B = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || C.sourceWidth || C.width || 1)), re = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || C.sourceHeight || C.height || 1)), Z = Number(W), me = Number(X);
    if (!Number.isFinite(Z) || !Number.isFinite(me)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (Z / B % 1 + 1) % 1, v: st(me / re, 0, 1) };
    const V = Gi(E, B, re);
    if (!V) return null;
    const xe = Ao(V.yawDeg, V.pitchDeg, V.rollDeg), Me = (Z - B * 0.5) / (B * 0.5) * Math.tan(st(V.hFovDeg, 1, 179) * bt * 0.5), Ae = (re * 0.5 - me) / (re * 0.5) * Math.tan(st(V.vFovDeg, 0.1, 179) * bt * 0.5), Ee = Qi(Vo(Vo(vi(xe.right, Me), vi(xe.up, Ae)), xe.fwd));
    return {
      u: (Math.atan2(Ee.x, Ee.z) / oh + 0.5 + 1) % 1,
      v: st(0.5 - Math.asin(st(Ee.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function de(E, W, X) {
    const B = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || C.sourceWidth || C.width || 1)), re = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || C.sourceHeight || C.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(W || 0) % 1 + 1) % 1 * B,
        y: st(Number(X || 0), 0, 1) * re,
        visible: !0
      };
    const Z = Gi(E, B, re);
    if (!Z)
      return { x: B * 0.5, y: re * 0.5, visible: !1 };
    const me = Ao(Z.yawDeg, Z.pitchDeg, Z.rollDeg), V = Gb(W, X), xe = Po(V, me.right), Me = Po(V, me.up), Ae = Po(V, me.fwd);
    if (Ae <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ee = B * 0.5 + xe / Ae * (B * 0.5 / Math.tan(st(Z.hFovDeg, 1, 179) * bt * 0.5)), $e = re * 0.5 - Me / Ae * (re * 0.5 / Math.tan(st(Z.vFovDeg, 0.1, 179) * bt * 0.5));
    return { x: Ee, y: $e, visible: Ee >= 0 && Ee <= B && $e >= 0 && $e <= re };
  }
  return {
    init: _e,
    dispose: A,
    setViewport: ye,
    setBackgroundErp: ie,
    setPaintErp: G,
    setMaskErp: ce,
    renderPanorama: pn,
    renderUnwrap: on,
    renderCutout: Gn,
    renderScene: u,
    syncState: L,
    screenToErpUv: ee,
    erpUvToScreen: de,
    getCanvas() {
      return t;
    },
    isSupported() {
      return _e();
    },
    getViewport() {
      return { ...C };
    }
  };
}
function _f(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Zb() {
  const e = /* @__PURE__ */ new Map();
  function t(f) {
    return f != null ? String(f) : "default";
  }
  function n(f, d, p) {
    const b = t(f);
    let v = e.get(b) || null;
    if (!v) {
      const M = document.createElement("canvas"), C = M.getContext("2d");
      if (!C) return null;
      v = {
        id: b,
        canvas: M,
        ctx: C,
        width: 0,
        height: 0
      }, e.set(b, v);
    }
    const h = _f(d), x = _f(p);
    return v.width !== h && (v.canvas.width = h, v.width = h), v.height !== x && (v.canvas.height = x, v.height = x), v;
  }
  function i(f) {
    return e.get(t(f)) || null;
  }
  function a(f) {
    const d = i(f);
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
const Qb = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), ey = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function sh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ty(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function ny(e = {}) {
  const t = ey.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? sh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function ry(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Qb.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? sh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: ty(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function iy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => ry(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), f = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== f ? c - f : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Ci(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: ny((e == null ? void 0 : e.background) || {}),
    objectPass: iy((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function ay(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function bc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? ay(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function oy(e, t, n = {}) {
  return e ? bc({
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
function sy(e, t, n = {}) {
  return e ? bc({
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
function ly(e, t, n = {}) {
  return e ? bc({
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
function lh(e = {}) {
  const t = [], n = oy(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = sy(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, f) => {
    const d = ly(
      (c == null ? void 0 : c.source) || null,
      (c == null ? void 0 : c.revision) || "",
      {
        id: String((c == null ? void 0 : c.id) || `raster_layer_${f}`),
        zIndex: Number((c == null ? void 0 : c.zIndex) ?? (c == null ? void 0 : c.z_index) ?? 90),
        opacity: Number((c == null ? void 0 : c.opacity) ?? 1),
        visible: (c == null ? void 0 : c.visible) !== !1,
        transform: (c == null ? void 0 : c.transform) || null,
        params: (c == null ? void 0 : c.params) || {}
      }
    );
    d && t.push(d);
  }), t.sort((c, f) => {
    const d = Number((c == null ? void 0 : c.zIndex) || 0), p = Number((f == null ? void 0 : f.zIndex) || 0);
    return d !== p ? d - p : String((c == null ? void 0 : c.id) || "").localeCompare(String((f == null ? void 0 : f.id) || ""));
  });
}
function yc(e, t) {
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
function ps(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], f = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Ci({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: t,
      revision: f,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: yc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ea(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = yc(t, n), a = lh({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Ci({
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
function cy(e = {}) {
  var c, f, d, p, b, v, h, x;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = Ci(e), C = Array.isArray((c = M.objectPass) == null ? void 0 : c.objects) ? M.objectPass.objects : [], N = {
      stickers: C.filter((T) => T.type === "sticker").map((T) => {
        var I, R, K, Q, te, _e, A, ye, he, fe, $, se, U;
        return {
          id: T.id,
          assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((R = T == null ? void 0 : T.params) == null ? void 0 : R.asset_id) || (T == null ? void 0 : T.id) || ""),
          yawDeg: Number(((K = T == null ? void 0 : T.transform) == null ? void 0 : K.yawDeg) ?? ((Q = T == null ? void 0 : T.params) == null ? void 0 : Q.yawDeg) ?? 0),
          pitchDeg: Number(((te = T == null ? void 0 : T.transform) == null ? void 0 : te.pitchDeg) ?? ((_e = T == null ? void 0 : T.params) == null ? void 0 : _e.pitchDeg) ?? 0),
          rollDeg: Number(((A = T == null ? void 0 : T.transform) == null ? void 0 : A.rollDeg) ?? ((ye = T == null ? void 0 : T.params) == null ? void 0 : ye.rollDeg) ?? 0),
          hFovDeg: Number(((he = T == null ? void 0 : T.transform) == null ? void 0 : he.hFovDeg) ?? ((fe = T == null ? void 0 : T.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number((($ = T == null ? void 0 : T.transform) == null ? void 0 : $.vFovDeg) ?? ((se = T == null ? void 0 : T.params) == null ? void 0 : se.vFovDeg) ?? 30),
          crop: ((U = T == null ? void 0 : T.params) == null ? void 0 : U.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((T == null ? void 0 : T.opacity) ?? 1),
          visible: (T == null ? void 0 : T.visible) !== !1,
          zIndex: Number((T == null ? void 0 : T.zIndex) ?? 0)
        };
      }),
      selectedId: ((f = M.objectPass) == null ? void 0 : f.selectedId) ?? null,
      hoveredId: ((d = M.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, z = C.filter((T) => T.type === "sticker").map((T) => {
      var I, R;
      return {
        assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((R = T == null ? void 0 : T.params) == null ? void 0 : R.asset_id) || (T == null ? void 0 : T.id) || ""),
        source: T.source || null,
        revision: String((T == null ? void 0 : T.revision) || "")
      };
    }).filter((T) => T.assetId && T.source), O = C.find((T) => T.type === "paint") || null, F = C.find((T) => T.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = M.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((b = M.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((v = M.background) == null ? void 0 : v.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (O == null ? void 0 : O.source) || null,
      paintRevision: String((O == null ? void 0 : O.revision) || ""),
      maskSource: (F == null ? void 0 : F.source) || null,
      maskRevision: String((F == null ? void 0 : F.revision) || ""),
      textures: z,
      scene: N,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((h = M.background) == null ? void 0 : h.opacity) ?? 1),
      showMaskTint: ((x = e == null ? void 0 : e.overlay) == null ? void 0 : x.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Ci({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...yc(t, n),
        ...lh({
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
function uy(e) {
  let t = null;
  function n(c = {}) {
    const f = cy(c);
    return e.syncState({
      stateRevision: f.stateRevision,
      backgroundSource: f.backgroundSource,
      backgroundRevision: f.backgroundRevision,
      coverageDeg: f.coverageDeg,
      paintSource: f.paintSource,
      paintRevision: f.paintRevision,
      maskSource: f.maskSource,
      maskRevision: f.maskRevision,
      textures: f.textures,
      scene: f.scene,
      objectPass: f.objectPass,
      backgroundOpacity: f.backgroundOpacity,
      showMaskTint: f.showMaskTint
    }) ? (t = f, !0) : !1;
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
function Wr(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (z) => Jb(z), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Zb(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (z) => uy(z), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, f = n();
  let d = null;
  const p = i({
    syncState(z = {}) {
      if (typeof a.syncState == "function") {
        const O = { ...z }, F = a.syncState(O);
        return F && (d = O, F);
      }
      return d = { ...z }, !0;
    }
  });
  function b(z = {}) {
    return p.sync(z);
  }
  function v(z = {}, O = {}) {
    return d ? a.renderScene({
      ...d,
      view: z,
      width: O.width,
      height: O.height,
      dpr: O.dpr,
      backgroundOpacity: O.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: O.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function h(z, O, F = {}, T = {}) {
    if (!O) return !1;
    const I = v(F, {
      ...T,
      width: O.w,
      height: O.h
    });
    return I ? z ? (z.canvas && I === z.canvas || z.drawImage(I, O.x, O.y, O.w, O.h), !0) : !!c && I === c : !1;
  }
  function x(z, O = {}, F = {}) {
    const T = Number(F.width || 0), I = Number(F.height || 0);
    if (!(T > 0) || !(I > 0)) return null;
    const R = f.ensureTarget(z, T, I);
    if (!R) return null;
    const K = v(O, {
      ...F,
      width: T,
      height: I
    });
    return K ? (R.ctx.clearRect(0, 0, R.canvas.width, R.canvas.height), R.ctx.drawImage(K, 0, 0, R.canvas.width, R.canvas.height), R.canvas) : null;
  }
  function M(z) {
    f.clearTarget(z);
  }
  function C() {
    var z;
    f.dispose(), (z = a.dispose) == null || z.call(a), d = null;
  }
  function N() {
    d = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: v,
    renderToContext: h,
    renderToTarget: x,
    clearTarget: M,
    snapshotState: p.snapshot,
    clearState: N,
    dispose: C
  };
}
function bi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function fy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function xf(e, t = 8) {
  var v;
  const n = (v = e == null ? void 0 : e.getContext) == null ? void 0 : v.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const c = n.getImageData(0, 0, i, a).data;
  let f = i, d = a, p = -1, b = -1;
  for (let h = 0; h < a; h += 1)
    for (let x = 0; x < i; x += 1)
      c[(h * i + x) * 4 + 3] <= t || (x < f && (f = x), h < d && (d = h), x > p && (p = x), h > b && (b = h));
  return p < f || b < d ? null : {
    minX: f,
    minY: d,
    maxX: p,
    maxY: b,
    width: p - f + 1,
    height: b - d + 1,
    aspect: Number(((p - f + 1) / Math.max(1, b - d + 1)).toFixed(4))
  };
}
function vc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function tr(e, t, n) {
  if (!e) return bi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function pt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let gl = null, bl = null, wf = null, Sf = null, wt = null, Wi = null, Xt = null, mr = null;
function dy() {
  if (bl) return bl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), bl = n, n;
}
function yl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  gl = tr(gl, n, i);
  const a = gl;
  pt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Sf !== a.ctx && (wf = a.ctx.createPattern(dy(), "repeat"), Sf = a.ctx), a.ctx.fillStyle = wf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function hy(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function py(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function my(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function gy(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const mt = /* @__PURE__ */ new Map(), _c = 128;
function by(e, t, n, i, a, c) {
  const f = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), p = `${f}:${d.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (mt.has(p)) {
    const F = mt.get(p);
    return mt.delete(p), mt.set(p, F), F;
  }
  mt.size >= _c && mt.delete(mt.keys().next().value);
  const b = f * 2 + 2, v = f + 1, h = vc(b, b), x = h.getContext("2d"), M = d * f, C = f + 1, N = `rgba(${n},${i},${a},${c})`, z = `rgba(${n},${i},${a},0)`, O = x.createRadialGradient(v, v, M, v, v, C);
  return O.addColorStop(0, N), O.addColorStop(1, z), x.fillStyle = O, x.fillRect(0, 0, b, b), mt.set(p, h), h;
}
function yy(e, t, n, i, a, c, f) {
  const { r: d, g: p, b, a: v } = i, h = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), C = Math.max(0, Math.min(0.99, c)), N = Math.max(0, Math.min(1, f ?? 0)), z = `chisel:${h}:${x}:${n.toFixed(2)}:${d}:${p}:${b}:${v.toFixed(3)}:${M.toFixed(2)}:${C.toFixed(2)}:${N.toFixed(2)}`;
  if (mt.has(z)) {
    const te = mt.get(z);
    return mt.delete(z), mt.set(z, te), te;
  }
  mt.size >= _c && mt.delete(mt.keys().next().value);
  const O = vc(h, x), F = O.getContext("2d"), T = F.createImageData(h, x), I = T.data, R = Math.max(0, e - t), K = Math.max(0, Math.min(1, n)), Q = 1 + M;
  for (let te = 0; te < x; te++)
    for (let _e = 0; _e < h; _e++) {
      const A = _e + 0.5 - e, ye = te + 0.5 - t, he = Math.max(Math.abs(A) - R, 0), $ = Math.hypot(he, ye) / t;
      if ($ >= 1) continue;
      const se = $ <= K ? 1 : Math.max(0, (1 - $) / Math.max(1e-4, 1 - K)), U = 1 - $, ie = 1 + M * (1 - U) * (1 - U), G = 1 - C * U * U, ce = ie * G / Q;
      let we = 1;
      if (N > 0) {
        const Ke = Math.floor((ye + t) / 1.5), et = Math.floor((A + e) / 8), tt = Br(ki(Ke * 41 + 500, et * 19 + 300));
        we = 1 - N * 0.42 * tt;
      }
      const Oe = Math.round(255 * Math.min(1, v * se * ce * we));
      if (Oe <= 0) continue;
      const Fe = (te * h + _e) * 4;
      I[Fe] = d, I[Fe + 1] = p, I[Fe + 2] = b, I[Fe + 3] = Oe;
    }
  return F.putImageData(T, 0, 0), mt.set(z, O), O;
}
function ki(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Br(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function vy(e, t, n, i, a, c, f) {
  const d = e + 0.5 - n, p = t + 0.5 - i, b = Math.max(0, n - i), v = Math.max(Math.abs(d) - b, 0), h = Math.hypot(v, p) / i;
  if (h >= 1) return 0;
  const x = Br(ki(e * 17 + 3, t * 13 + 7)), M = h + c * 0.22 * (x - 0.5);
  if (M >= 1) return 0;
  const C = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), N = _y(e, t, d, p, n, i), z = c * 0.55;
  if (N < z) return 0;
  const F = 0.45 + 0.55 * ((N - z) / Math.max(1e-4, 1 - z));
  return Math.round(255 * Math.min(1, f * C * F));
}
function _y(e, t, n, i, a, c) {
  const f = Math.floor((n + a) / 3), d = Math.floor((i + c) / 2), p = Br(ki(f * 13 + 700, d * 17 + 400)), b = Math.floor((n + a) / 1.5), v = Math.floor((i + c) / 1.5), h = Br(ki(b * 23 + 800, v * 29 + 500)), x = Br(ki(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + h * 0.3 + x * 0.15;
}
function xy(e, t, n, i, a) {
  const { r: c, g: f, b: d, a: p } = i, b = Math.max(2, Math.ceil(e) * 2), v = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, a)), x = `crayon:${b}:${v}:${n.toFixed(2)}:${c}:${f}:${d}:${p.toFixed(3)}:${h.toFixed(2)}`;
  if (mt.has(x)) {
    const F = mt.get(x);
    return mt.delete(x), mt.set(x, F), F;
  }
  mt.size >= _c && mt.delete(mt.keys().next().value);
  const M = vc(b, v), C = M.getContext("2d"), N = C.createImageData(b, v), z = N.data, O = Math.max(0, Math.min(1, n));
  for (let F = 0; F < v; F++)
    for (let T = 0; T < b; T++) {
      const I = vy(T, F, e, t, O, h, p);
      if (I <= 0) continue;
      const R = (F * b + T) * 4;
      z[R] = c, z[R + 1] = f, z[R + 2] = d, z[R + 3] = I;
    }
  return C.putImageData(N, 0, 0), mt.set(x, M), M;
}
function ch(e, t, n) {
  var N, z;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = my(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), f = wy(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((N = t == null ? void 0 : t.angle) == null ? void 0 : N.value) ?? 0), b = gy(t, a), v = String(((z = t == null ? void 0 : t.targetSpace) == null ? void 0 : z.viewMode) || ""), h = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", x = t == null ? void 0 : t.scatter, M = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let C;
  if (i === "chisel") {
    const O = a * d, F = a, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    C = yy(O, F, c, f, T, I, R);
  } else if (i === "crayon") {
    const O = a * d, F = a, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    C = xy(O, F, c, f, T);
  } else
    C = by(a, c, f.r, f.g, f.b, f.a);
  return { ctx: e, stampTex: C, radiusPx: a, spacingPx: b, desc: n, aspect: d, angle: p, stampKind: i, scatter: M, latitudeCorrection: h };
}
function wy(e) {
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
function Sy(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Nf(e, t, n, i, a) {
  const c = e.angle, f = e.desc.width;
  function d(b, v) {
    c === 0 ? e.ctx.drawImage(e.stampTex, b - a, v - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(b, v), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const p = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - p < 0 && d(t + f, n), t + p > f && d(t - f, n);
}
function xc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: b, count: v } = e.scatter, h = b * e.radiusPx * a, x = ki(t, n);
    for (let M = 0; M < v; M++) {
      const C = Br(x + M * 2) * Math.PI * 2, N = Math.sqrt(Br(x + M * 2 + 1)) * h, z = t + Math.cos(C) * N, O = n + Math.sin(C) * N, F = Math.max(0.5, e.radiusPx * a * 0.48), T = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, R = F * e.aspect * I;
      Nf(e, z, O, F, R);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), f = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(f)) : 1, p = c * e.aspect * d;
  Nf(e, t, n, c, p);
}
function Mf(e, t, n) {
  const i = py(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, f = ch(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let x = 0; x < i.length; x++) {
    let M = Number(i[x].u || 0) * a;
    const C = Number(i[x].v || 0) * c;
    x > 0 && Math.abs(M - d[x - 1].x) > a * 0.5 && (M += M < d[x - 1].x ? a : -a), d.push({ x: M, y: C });
  }
  if (xc(f, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let p = d[0], b = d[0], v = d[0], h = 0;
  for (let x = 1; x < d.length; x++) {
    const M = d[x], C = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    x === 1 ? h = xa(f, v.x, v.y, C.x, C.y, h) : h = Ho(f, p, v, C, M, h), p = b, b = M, v = C;
  }
  d.length === 2 ? xa(f, v.x, v.y, b.x, b.y, h) : Ho(f, p, v, b, b, h), e.restore();
}
function Co(e, t, n) {
  var h;
  const i = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, f = Sy(t), d = [];
  let p = 1 / 0, b = -1 / 0;
  for (let x = 0; x < i.length; x++) {
    const M = hy(i[x]);
    let C = Number(M.x || 0) * a;
    x > 0 && Math.abs(C - d[x - 1].x) > a * 0.5 && (C += C < d[x - 1].x ? a : -a), d.push({ x: C, y: Number(M.y || 0) * c }), C < p && (p = C), C > b && (b = C);
  }
  function v(x) {
    e.beginPath(), e.moveTo(d[0].x + x, d[0].y);
    for (let M = 1; M < d.length; M++) e.lineTo(d[M].x + x, d[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = f, v(0), p < 0 && v(a), b > a && v(-a), e.restore();
}
function io(e, t, n) {
  var f;
  if (String(((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.geometryKind) || "") === "lasso_fill") {
    Co(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? Mf(e, t, n) : (Wi = tr(Wi, n.width, n.height), pt(Wi), Mf(Wi.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(Wi.canvas, 0, 0), e.restore());
}
function Fr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function xa(e, t, n, i, a, c) {
  const f = i - t, d = a - n, p = Math.hypot(f, d);
  if (p < 1e-9) return c;
  let b = e.spacingPx - c;
  for (; b <= p; ) {
    const v = b / p;
    xc(e, t + f * v, n + d * v, 1), b += e.spacingPx;
  }
  return p - b + e.spacingPx;
}
function Ho(e, t, n, i, a, c) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, v = 0, h = d, x = h + p, M = x + b, C = x - h, N = 16;
  let z = c, O = n.x, F = n.y;
  for (let T = 1; T <= N; T++) {
    const I = h + C * T / N, R = ((h - I) * t.x + (I - v) * n.x) / (h - v), K = ((h - I) * t.y + (I - v) * n.y) / (h - v), Q = ((x - I) * n.x + (I - h) * i.x) / (x - h), te = ((x - I) * n.y + (I - h) * i.y) / (x - h), _e = ((M - I) * i.x + (I - x) * a.x) / (M - x), A = ((M - I) * i.y + (I - x) * a.y) / (M - x), ye = ((x - I) * R + (I - v) * Q) / (x - v), he = ((x - I) * K + (I - v) * te) / (x - v), fe = ((M - I) * Q + (I - h) * _e) / (M - h), $ = ((M - I) * te + (I - h) * A) / (M - h), se = ((x - I) * ye + (I - h) * fe) / (x - h), U = ((x - I) * he + (I - h) * $) / (x - h);
    z = xa(e, O, F, se, U, z), O = se, F = U;
  }
  return z;
}
function Ny(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, f = c.width, d = n * c.height, p = e.activeStroke;
  let b = t * f;
  if (p && Math.abs(b - p.prev.x) > f * 0.5 && (b += b < p.prev.x ? f : -f), !p) {
    const M = ch(a, i, c), C = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), N = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), z = String((i == null ? void 0 : i.toolKind) || "") === "eraser", O = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", xc(M, b, d, 1), e.activeStroke = {
      pprev: { x: b, y: d },
      prev: { x: b, y: d },
      lastMidX: b,
      lastMidY: d,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: C,
      velocityWidthFactor: N,
      distSinceStamp: 0,
      isEraser: z,
      layerKind: O,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const v = (p.prev.x + b) * 0.5, h = (p.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const x = {
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
  p.pointCount === 1 ? p.distSinceStamp = xa(x, p.lastMidX, p.lastMidY, v, h, p.distSinceStamp) : p.distSinceStamp = Ho(
    x,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: v, y: h },
    { x: b, y: d },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: b, y: d }, p.lastMidX = v, p.lastMidY = h, p.pointCount++, e.displayDirty = !0;
}
function jl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = bi(t, n), f = {
    descriptor: i,
    committedMask: bi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: bi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = bi(t, n);
  let b = null, v = "", h = null;
  function x(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: bi(t, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(A) {
    let ye = a.get(A);
    return ye || (ye = x(A), a.set(A, ye)), ye;
  }
  function C(A) {
    return v === "mask" ? f : b ? M(b) : d;
  }
  function N(A) {
    var U;
    const ye = !h || h.length !== A.length || A.some((ie, G) => ie !== h[G]), he = v === "paint" && ((U = b ? a.get(b) : d) == null ? void 0 : U.activeStroke) || null;
    let fe = f.displayDirty || d.displayDirty || ye;
    for (const ie of A) {
      const G = a.get(ie);
      if (G != null && G.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (he && (fe = !0), !fe) return;
    f.displayDirty = !1, d.displayDirty = !1;
    for (const ie of A) {
      const G = a.get(ie);
      G && (G.displayDirty = !1);
    }
    h = [...A];
    const $ = p.ctx;
    pt(p);
    const se = !!(he != null && he.isEraser);
    for (const ie of A) {
      const G = a.get(ie);
      if (!G) continue;
      const we = b === G.actionGroupId && v === "paint" ? G.activeStroke : null;
      if (se)
        wt = tr(wt, t, n), pt(wt), wt.ctx.drawImage(G.committedPaint.canvas, 0, 0), Fr(wt.ctx, c.canvas), $.drawImage(wt.canvas, 0, 0);
      else if ($.drawImage(G.committedPaint.canvas, 0, 0), we) {
        const Oe = G.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
        $.save(), $.globalAlpha = Oe, $.drawImage(c.canvas, 0, 0), $.restore();
      }
    }
  }
  function z(A) {
    var he, fe, $, se, U;
    for (const ie of a.values())
      pt(ie.committedPaint), pt(ie.currentStroke), ie.activeStroke = null, ie.displayDirty = !0;
    pt(f.committedMask), pt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0, d.displayDirty = !0, h = null;
    const ye = [
      ...Array.isArray((fe = (he = A == null ? void 0 : A.painting) == null ? void 0 : he.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((se = ($ = A == null ? void 0 : A.painting) == null ? void 0 : $.mask) == null ? void 0 : se.strokes) ? A.painting.mask.strokes : []
    ];
    for (const ie of ye) {
      if (((U = ie == null ? void 0 : ie.targetSpace) == null ? void 0 : U.kind) !== "ERP_GLOBAL") continue;
      const G = String((ie == null ? void 0 : ie.layerKind) || "paint"), we = String((ie == null ? void 0 : ie.toolKind) || "pen") === "eraser";
      if (G === "mask") {
        const Oe = f.descriptor;
        we ? (wt = tr(wt, Oe.width, Oe.height), pt(wt), io(wt.ctx, ie, Oe), Fr(f.committedMask.ctx, wt.canvas)) : io(f.committedMask.ctx, ie, Oe);
        continue;
      }
      if (we) {
        wt = tr(wt, i.width, i.height), pt(wt), io(wt.ctx, ie, i);
        for (const Oe of a.values())
          Fr(Oe.committedPaint.ctx, wt.canvas), Oe.displayDirty = !0;
      } else {
        const Oe = String((ie == null ? void 0 : ie.actionGroupId) || "__default__"), Fe = M(Oe), Ke = Fe.descriptor;
        io(Fe.committedPaint.ctx, ie, Ke), Fe.displayDirty = !0;
      }
    }
    N([...a.keys()]);
  }
  function O(A, ye) {
    v = String((A == null ? void 0 : A.layerKind) || "");
    const he = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (v === "mask")
      b = null, pt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0;
    else {
      const fe = he ? d : M(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      b = he ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), pt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function F(A, ye) {
    var G;
    const he = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", $ = he === "mask" ? f : fe ? d : M(String((A == null ? void 0 : A.actionGroupId) || b || "__default__")), se = $.activeStroke, U = $.descriptor;
    if (se && se.pointCount > 1) {
      const ce = $.currentStroke.ctx;
      ce.globalCompositeOperation = "source-over";
      const we = {
        ctx: ce,
        stampTex: se.stampTex,
        radiusPx: se.radiusPx,
        spacingPx: se.spacingPx,
        desc: U,
        aspect: se.aspect,
        angle: se.angle,
        stampKind: se.stampKind,
        scatter: se.scatter,
        latitudeCorrection: se.latitudeCorrection
      };
      se.pointCount === 2 ? xa(we, se.lastMidX, se.lastMidY, se.prev.x, se.prev.y, se.distSinceStamp) : Ho(we, se.pprev, { x: se.lastMidX, y: se.lastMidY }, se.prev, se.prev, se.distSinceStamp);
    }
    $.lassoPreviewActive && (pt($.currentStroke), Co($.currentStroke.ctx, A, U), $.lassoPreviewActive = !1);
    const ie = he === "mask" ? f.committedMask : $.committedPaint;
    if (fe && he === "paint")
      for (const ce of a.values())
        Fr(ce.committedPaint.ctx, $.currentStroke.canvas), ce.displayDirty = !0;
    else if (fe)
      Fr(ie.ctx, $.currentStroke.canvas);
    else {
      const ce = Math.max(0, Math.min(1, (se == null ? void 0 : se.strokeOpacity) ?? 1));
      ie.ctx.save(), ie.ctx.globalAlpha = ce, ie.ctx.drawImage($.currentStroke.canvas, 0, 0), ie.ctx.restore();
    }
    fy() && (String((A == null ? void 0 : A.toolKind) || ""), String((U == null ? void 0 : U.kind) || ""), Number((U == null ? void 0 : U.width) || 0), Number((U == null ? void 0 : U.height) || 0), String(((G = A == null ? void 0 : A.targetSpace) == null ? void 0 : G.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), xf($.currentStroke.canvas), xf(ie.canvas), void 0), pt($.currentStroke), $.activeStroke = null, $.displayDirty = !0, b = null, v = "", N([...a.keys()]);
  }
  function T(A) {
    if (v === "mask")
      pt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (v === "paint" && !b)
      pt(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (b) {
      const ye = a.get(b);
      ye && (pt(ye.currentStroke), ye.activeStroke = null, ye.lassoPreviewActive = !1, ye.displayDirty = !0);
    }
    b = null, v = "", N([...a.keys()]);
  }
  function I(A, ye) {
    var fe;
    if (v = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        pt(f.currentStroke), Co(f.currentStroke.ctx, A, f.descriptor), f.lassoPreviewActive = !0, f.displayDirty = !0;
      else {
        const $ = String((A == null ? void 0 : A.toolKind) || "") === "eraser", se = $ ? d : M(String((A == null ? void 0 : A.actionGroupId) || b || "__default__"));
        b = $ ? "" : String((A == null ? void 0 : A.actionGroupId) || b || "__default__"), pt(se.currentStroke), Co(se.currentStroke.ctx, A, se.descriptor), se.lassoPreviewActive = !0, se.displayDirty = !0;
      }
      N([...a.keys()]);
    }
  }
  function R(A) {
    return N(A ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: f.committedMask,
      descriptor: i
    };
  }
  function K(A) {
    return a.get(String(A)) ?? null;
  }
  function Q() {
    return [...a.keys()];
  }
  function te(A) {
    var U;
    const ye = a.get(String(A));
    if (!ye) return null;
    const he = v === "paint" && b === ye.actionGroupId, fe = v === "paint" && ((U = b ? a.get(b) : d) == null ? void 0 : U.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return Xt = tr(Xt, t, n), pt(Xt), Xt.ctx.drawImage(ye.committedPaint.canvas, 0, 0), Fr(Xt.ctx, c.canvas), Xt.canvas;
    const $ = he ? ye.activeStroke : null;
    if (!$) return ye.committedPaint.canvas;
    Xt = tr(Xt, t, n), pt(Xt), Xt.ctx.drawImage(ye.committedPaint.canvas, 0, 0);
    const se = ye.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, $.strokeOpacity ?? 1));
    return Xt.ctx.save(), Xt.ctx.globalAlpha = se, Xt.ctx.drawImage(c.canvas, 0, 0), Xt.ctx.restore(), Xt.canvas;
  }
  function _e() {
    return mr = tr(mr, t, n), pt(mr), yl(mr.ctx, f.committedMask.canvas), v === "mask" && f.activeStroke && (f.activeStroke.isEraser ? (wt = tr(wt, t, n), pt(wt), wt.ctx.drawImage(f.committedMask.canvas, 0, 0), Fr(wt.ctx, c.canvas), pt(mr), yl(mr.ctx, wt.canvas)) : yl(mr.ctx, c.canvas)), mr.canvas;
  }
  return {
    rebuildCommitted: z,
    beginStroke: O,
    appendStrokePoint: Ny,
    updateActiveStroke: I,
    commitActiveStroke: F,
    cancelActiveStroke: T,
    getErpTarget: R,
    ensureTarget: C,
    getGroupTarget: K,
    getGroupDisplayCanvas: te,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: Q
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function vl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function zt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function My(e, t) {
  let n = zt(t) - zt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Vl = Math.PI / 180, Hl = 0.12, uh = 3, wc = 35, Sc = 140, _i = 100, ky = 0.4, Py = 0.6, fh = 5.5, dh = 20, Ul = 0.8;
function Ay(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = q(Number(e || _i), 1, 179) * Vl;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / Vl;
}
function Cy(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function ms(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: _i })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), f = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(O, F = null) {
    d && d(O, F);
  }
  function v(O, F, T = null, I = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(O || 0), p.drag.lastY = Number(F || 0), p.drag.lastTs = Number(I || performance.now()), p.drag.pointerId = T, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], b("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: T }), !0;
  }
  function h(O, F, T = "pano", I = performance.now()) {
    if (!p.drag.active) return !1;
    const R = Number(I || performance.now()), K = Number(O), Q = Number(F), te = K - p.drag.lastX, _e = Q - p.drag.lastY;
    p.drag.lastX = K, p.drag.lastY = Q, p.drag.lastTs = R;
    const A = i() || { x: 1, y: 1 }, ye = Number(A.x || 1), he = Number(A.y || 1), fe = { ...t() };
    let $ = 0, se = 0;
    if (T === "unwrap") {
      const ie = a() || { w: 1, h: 1 }, G = Math.max(1, Number(ie.w || 1)), ce = Math.max(1, Number(ie.h || 1)), we = te / G, Oe = _e / ce;
      $ = -we * 360 * ye, se = Oe * 180 * he;
    } else {
      const ie = c() || { w: 0, h: 0 }, G = Math.max(1, Number(ie.w || 0)), ce = Math.max(1, Number(ie.h || 0));
      if (G > 1 && ce > 1) {
        const we = q(Number(fe.fov || _i), 1, 179), Oe = q(Ay(we, G, ce), 0.1, 179);
        $ = -(te / G) * we * ye, se = _e / ce * Oe * he;
      } else
        $ = -te * Hl * ye, se = _e * Hl * he;
    }
    fe.yaw = zt(Number(fe.yaw || 0) + $), fe.pitch = q(Number(fe.pitch || 0) + se, -89.9, 89.9), n(fe), p.velHistory.push({ ts: R, yaw: fe.yaw, pitch: fe.pitch });
    let U = 0;
    for (; U < p.velHistory.length - 1 && p.velHistory[U].ts < R - 100; ) U++;
    return U > 0 && p.velHistory.splice(0, U), p.inertia.active = !1, p.inertia.lastTs = R, f(), b("drag", { phase: "move", dx: te, dy: _e, dYaw: $, dPitch: se }), !0;
  }
  function x(O = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const F = Number(O || performance.now());
    p.drag.lastTs = F;
    const T = p.velHistory.filter((R) => F - R.ts <= 80);
    if (T.length >= 2) {
      const R = T[0], K = T.at(-1), Q = Math.max(1e-3, (K.ts - R.ts) / 1e3);
      let te = K.yaw - R.yaw;
      te > 180 && (te -= 360), te < -180 && (te += 360), p.inertia.vx = te / Q, p.inertia.vy = (K.pitch - R.pitch) / Q;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const I = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = I > dh, p.inertia.lastTs = F, b("drag", { phase: "end", speed: I, inertiaActive: p.inertia.active }), !0;
  }
  function M(O = performance.now()) {
    if (!p.inertia.active) return !1;
    const F = Number(O || performance.now()), T = Math.max(1e-3, (F - (p.inertia.lastTs || F)) / 1e3);
    p.inertia.lastTs = F;
    const I = { ...t() };
    I.yaw = zt(Number(I.yaw || 0) + p.inertia.vx * T), I.pitch = q(Number(I.pitch || 0) + p.inertia.vy * T, -89.9, 89.9);
    const R = Math.exp(-fh * T);
    return p.inertia.vx *= R, p.inertia.vy *= R, Math.abs(p.inertia.vx) < Ul && Math.abs(p.inertia.vy) < Ul && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(I), f(), p.inertia.active;
  }
  function C(O) {
    const F = Math.sign(Number(O || 0));
    if (!F) return !1;
    const T = { ...t() }, I = Number(T.fov || _i);
    return T.fov = q(I + F * uh, wc, Sc), n(T), f(), b("wheel", { deltaSign: F, fovBefore: I, fovAfter: T.fov }), !0;
  }
  function N(O) {
    return C(Math.sign(Cy(O)));
  }
  function z() {
    n({ yaw: 0, pitch: 0, fov: _i }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, f();
  }
  return {
    state: p,
    startDrag: v,
    moveDrag: h,
    endDrag: x,
    stepInertia: M,
    applyWheel: C,
    applyWheelEvent: N,
    resetView: z
  };
}
const Iy = {
  dragSensitivity: Hl,
  wheelStep: uh,
  fovMin: wc,
  fovMax: Sc,
  initialFov: _i,
  inertiaBlendOld: ky,
  inertiaBlendInst: Py,
  inertiaDamping: fh,
  inertiaStartSpeed: dh,
  inertiaStopSpeed: Ul,
  rad2deg: 1 / Vl
};
function Uo(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const kf = Math.PI / 180;
function Yi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ty(e) {
  const t = e || {}, n = Yi(t.yaw_deg, 0), i = Yi(t.pitch_deg, 0), a = Yi(t.roll_deg ?? t.rot_deg, 0), c = vl(Yi(t.hFOV_deg, 90), 1, 179), f = vl(Yi(t.vFOV_deg, 60), 1, 179), d = Math.tan(c * kf * 0.5) / Math.max(1e-6, Math.tan(f * kf * 0.5)), p = vl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: f,
    aspect: p
  };
}
const hh = 0.28;
function Ey(e) {
  const t = e && typeof e == "object" ? e : {}, n = q(Number(t.x0 ?? 0), 0, 1), i = q(Number(t.y0 ?? 0), 0, 1), a = q(Number(t.x1 ?? 1), 0, 1), c = q(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Dy(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), c = t.includeHidden === !0, f = e.visible === !1, d = c && i && f;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: q(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: q(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: Ey(e.crop),
    opacity: d ? hh : q(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function gs(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((f) => Dy(f, { includeHidden: i })).filter((f) => f && (i || f.visible !== !1)).sort((f, d) => Number(f.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function ph(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || gs(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], f = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var C;
    const p = String((d == null ? void 0 : d.assetId) || "").trim(), b = p || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!b || f.has(b)) return;
    const v = p ? a[p] : null, h = t(b, v, d);
    if (h instanceof HTMLImageElement && !h.complete) return;
    const x = Number((h == null ? void 0 : h.naturalWidth) || (h == null ? void 0 : h.videoWidth) || (h == null ? void 0 : h.width) || 0), M = Number((h == null ? void 0 : h.naturalHeight) || (h == null ? void 0 : h.videoHeight) || (h == null ? void 0 : h.height) || 0);
    !h || x <= 0 || M <= 0 || (f.add(b), c.push({
      assetId: b,
      source: h,
      revision: String(((C = n.revisionFor) == null ? void 0 : C.call(n, b, v, h)) ?? [
        b,
        Number(h.naturalWidth || h.videoWidth || h.width || 0),
        Number(h.naturalHeight || h.videoHeight || h.height || 0),
        String(h.currentSrc || h.src || "")
      ].join("|"))
    }));
  }), c;
}
function Nc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Oy(e, t = 360) {
  return Nc(e, t);
}
function wr(e) {
  const t = Ty(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: it } = wo;
function Bo() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (wo == null ? void 0 : wo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Ar = Math.PI / 180, Ry = wc, Fy = Sc, wa = { Nu: 14, Nv: 9 }, Ly = { Nu: 24, Nv: 14 }, zy = 10, Pf = 0.16, $y = 3, jy = 220, Vy = "pano_suite.ui_settings.v1", Hy = 120;
function Uy() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Vy)) || "").trim();
    if (!n) return e;
    const i = JSON.parse(n), a = String((i == null ? void 0 : i.preview_quality) || "balanced");
    return {
      invert_view_x: !!(i != null && i.invert_view_x),
      invert_view_y: !!(i != null && i.invert_view_y),
      preview_quality: a === "draft" || a === "high" ? a : "balanced"
    };
  } catch {
    return e;
  }
}
function mh() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function qi(e) {
  var n, i, a, c, f;
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
    styleTransform: String(((f = e.style) == null ? void 0 : f.transform) || "")
  };
}
function gh() {
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
function ao(e, t, n = {}) {
  var h;
  if (!mh()) return;
  const i = e.__panoDomPreview, a = i == null ? void 0 : i.widget, c = i == null ? void 0 : i.root, f = (h = c == null ? void 0 : c.querySelector) == null ? void 0 : h.call(c, "div"), d = i == null ? void 0 : i.canvas, p = c == null ? void 0 : c.parentElement, b = p == null ? void 0 : p.parentElement, v = (x) => {
    var C;
    if (!x) return null;
    const M = (C = x.getBoundingClientRect) == null ? void 0 : C.call(x);
    return {
      tag: x.tagName.toLowerCase(),
      cw: x.clientWidth,
      ch: x.clientHeight,
      ow: x.offsetWidth,
      oh: x.offsetHeight,
      rect: M ? { w: Math.round(M.width), h: Math.round(M.height), top: Math.round(M.top) } : null,
      styleH: x.style.height,
      styleW: x.style.width
    };
  };
  d && (d.width, d.height), Cn(e), `${t}`, {
    ...n,
    widgetCompute: a != null && a.__lastComputeSize,
    dom: (v(c), v(f), v(d), v(p), v(b))
  };
}
function Cn(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const c = Number(i), f = Number(a);
    return !Number.isFinite(c) || !Number.isFinite(f) ? null : [c, f];
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
function bh(e) {
  const t = Cn(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function yh(e, t, n) {
  bh(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Bl(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Nr(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function vh(e) {
  return Uo(Nr(e));
}
function Kr(e = null) {
  var c, f;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((f = (c = it == null ? void 0 : it.canvas) == null ? void 0 : c.constructor) == null ? void 0 : f.name) || "");
  return [t, i, n, a].join("|");
}
function _h(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(t)
  };
}
const ua = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Kr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Kr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, xh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function xh(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : _h(i, e).chosenPath, c = Bl(e);
      this.activeBackend = c;
      const f = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (c === a && c !== "none" && f === i && d === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Mr(e, { keepMonitor: i === "stickers" }), kv(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Bl(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Mr(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Mr(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Ko(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Mr(e, t = {}) {
  var i, a, c, f, d;
  if (!e) return;
  Ii.unregister(e), Ko(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (d = (f = n.root) == null ? void 0 : f.remove) == null || d.call(f);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const b = String((p == null ? void 0 : p.name) || ""), v = String((p == null ? void 0 : p.type) || ""), h = Bo();
      return !(b === h || v === h || b === "pano_preview" || v === "pano_preview" || b === "preview" && v === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ua.unregister(e);
}
function Yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Af(e, t) {
  return Yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function oo(e, t) {
  return Yr(e.x * t, e.y * t, e.z * t);
}
function _l(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Cf(e, t) {
  return Yr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function so(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yr(e.x / t, e.y / t, e.z / t);
}
function $r(e, t) {
  const n = e * Ar, i = t * Ar, a = Math.cos(i);
  return Yr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function bs(e, t, n = 0) {
  const i = $r(e, t), a = Yr(0, 1, 0);
  let c = Cf(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Yr(1, 0, 0)), c = so(c);
  let f = so(Cf(i, c));
  const d = n * Ar, p = Math.cos(d), b = Math.sin(d), v = Af(oo(c, p), oo(f, b)), h = Af(oo(c, -b), oo(f, p));
  return { fwd: i, right: so(v), up: so(h) };
}
function By(e, t = "#00ff00") {
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
function Ky(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Sa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Mc(e) {
  var d, p;
  const t = Ky(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = Sa(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((p = Sa(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const f = By(t, i);
  return f.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: f }, f;
}
function Sa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function If(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function wh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Gy(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Sh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Nh(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Gy(e == null ? void 0 : e.graph, n)), i;
}
function Wy(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function ys(e, t = []) {
  const n = Wy(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function Tf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Go(e, t) {
  const n = Tf(e), i = Tf(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Yy(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = ys(e, t).map((b) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(b))).filter((b) => b >= 0), c = n.map((b, v) => ({ input: b, idx: v })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), f = [.../* @__PURE__ */ new Set([...a, ...c])], d = [];
  for (const b of f) {
    const v = Nh(e, b);
    if ((v == null ? void 0 : v.id) != null) {
      d.push(String(v.id));
      continue;
    }
    const h = (p = n[b]) == null ? void 0 : p.link;
    if (h == null) continue;
    const x = wh(e == null ? void 0 : e.graph, h), { originId: M } = Sh(x);
    M != null && d.push(String(M));
  }
  return [...new Set(d)];
}
const Ii = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = vn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var b, v, h, x, M;
        if (!c) return;
        const f = Go(i, c == null ? void 0 : c.id);
        Yy(c, ["erp_image", "bg_erp"]).some((C) => Go(i, C)), !(String(c.__panoPreviewMode || "") === "cutout" && !f) && (Na(c), (v = (b = c.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || v.call(b), (h = c.setDirtyCanvas) == null || h.call(c, !0, !0), (M = (x = c.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, vn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = vn) != null && e.removeEventListener) || (vn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Wo(e) {
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
  return typeof ((c = vn) == null ? void 0 : c.apiURL) == "function" ? vn.apiURL(a) : a;
}
function qy(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Xy(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function Jy(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Mh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (qy(t)) return [t];
  const { filename: n, subfolder: i } = Xy(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Wo({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Jy([...a, t]);
}
function Zy(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Wo({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Yo(e) {
  const t = it == null ? void 0 : it.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (Go(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const f of c)
      if (Go(f, a)) return t[f];
  }
  return null;
}
function Pn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Pn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Wo({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Pn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Wo(e);
}
function Qy(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function kh(e) {
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
function kc(e, t) {
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
function ev(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((f) => t.push(f));
  }, a = (c, f = 0) => {
    !c || f > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, f + 1), a(c.ui, f + 1), a(c.data, f + 1), a(c.result, f + 1));
  };
  return a(e, 0), t;
}
function Ph(e, t) {
  try {
    const n = ev(t);
    let i = "";
    for (const a of n)
      if (i = Pn(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), kc(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function tv(e, t = null) {
  var O, F;
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = Yo(n), a = [
    (O = i == null ? void 0 : i.ui) == null ? void 0 : O.pano_videos,
    i == null ? void 0 : i.pano_videos,
    (F = i == null ? void 0 : i.ui) == null ? void 0 : F.images,
    i == null ? void 0 : i.images
  ];
  let c = "";
  for (const T of a)
    if (Array.isArray(T)) {
      for (const I of T) {
        const R = Pn(I);
        if (R && (/\.mp4(\?|$)/i.test(R) || String((I == null ? void 0 : I.format) || "").toLowerCase() === "video/mp4")) {
          c = R;
          break;
        }
      }
      if (c) break;
    }
  if (!c) return null;
  const f = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = kc(c, f);
  e.__panoOwnOutputVideoCache || (e.__panoOwnOutputVideoCache = { src: "", video: null });
  const p = e.__panoOwnOutputVideoCache;
  if (p.video && p.src === d) return p.video;
  const b = document.createElement("video");
  b.muted = !0, b.loop = !0, b.playsInline = !0, b.crossOrigin = "anonymous";
  let v = 0;
  const h = typeof b.requestVideoFrameCallback == "function", x = () => {
    !h || v || b.paused || b.ended || (v = b.requestVideoFrameCallback(() => {
      v = 0, t == null || t(), x();
    }));
  }, M = () => {
    t == null || t(), b.play().then(() => {
      x();
    }).catch(() => {
    });
  }, C = () => t == null ? void 0 : t(), N = () => {
    t == null || t(), x();
  }, z = () => {
    t == null || t();
  };
  return b.addEventListener("loadedmetadata", M, { once: !0 }), b.addEventListener("canplay", M, { once: !0 }), h || b.addEventListener("timeupdate", C), b.addEventListener("play", N), b.addEventListener("pause", z), b.src = d, b.load(), p.src = d, p.video = b, b;
}
function nv(e, t = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = String((e == null ? void 0 : e.__panoOwnOutputSrc) || "").trim(), a = Yo(n), c = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], f = Array.isArray(e == null ? void 0 : e.imgs) ? e.imgs : [], d = i ? [i, ...c, ...f] : [...c, ...f];
  let p = "";
  for (const O of d)
    if (p = Pn(O), p) break;
  if (!p) return null;
  const b = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), h = Mh(p).map((O) => kc(O, b));
  if (!h.length) return null;
  const x = `${p}|rev:${b}`;
  e.__panoOwnOutputImageCache || (e.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const M = e.__panoOwnOutputImageCache;
  if (M.img && M.src === x) return M.img;
  if (M.pendingImg && M.pendingSrc === x)
    return M.img && (M.img.complete || M.img.naturalWidth || M.img.width) ? M.img : M.pendingImg;
  const C = new Image();
  let N = -1;
  const z = () => {
    if (N += 1, N >= h.length) {
      e.__panoOwnOutputImageCache === M && (M.pendingSrc = "", M.pendingImg = null);
      return;
    }
    C.src = h[N];
  };
  return C.onload = () => {
    var O;
    e.__panoOwnOutputImageCache === M && M.pendingImg === C && M.pendingSrc === x && (M.src = x, M.img = C, M.pendingSrc = "", M.pendingImg = null), t == null || t(), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
  }, C.onerror = () => {
    if (N + 1 >= h.length) {
      e.__panoOwnOutputImageCache === M && M.pendingImg === C && (M.pendingSrc = "", M.pendingImg = null);
      return;
    }
    z();
  }, M.pendingSrc = x, M.pendingImg = C, z(), M.img && (M.img.complete || M.img.naturalWidth || M.img.width) ? M.img : C;
}
function rv(e, t = []) {
  var b, v;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = ys(e, t).map((h) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(h))).filter((h) => h >= 0), c = n.map((h, x) => ({ input: h, idx: x })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), f = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const h of f) {
    const x = n[h], M = x == null ? void 0 : x.link;
    if (M == null) continue;
    const C = wh(e.graph, M), { originId: N, originSlot: z } = Sh(C);
    if (N == null) continue;
    const O = Nh(e, h, N);
    if (!O) continue;
    const F = Number(z || 0), T = Yo((O == null ? void 0 : O.id) ?? N), I = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
    if (I.length) {
      const te = [];
      F >= 0 && F < I.length && te.push(I[F]), te.push(...I);
      for (const _e of te) {
        const A = Pn(_e);
        if (A)
          return String((x == null ? void 0 : x.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (it == null ? void 0 : it.getNodeImageUrls) == "function" ? it.getNodeImageUrls(O) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const te = [];
      F >= 0 && F < R.length && te.push(R[F]), te.push(...R);
      for (const _e of te) {
        const A = Pn(_e);
        if (A)
          return String((x == null ? void 0 : x.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const K = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (K.length) {
      const te = [];
      F >= 0 && F < K.length && te.push(K[F]), te.push(...K);
      for (const _e of te) {
        const A = Pn(_e);
        if (A)
          return String((x == null ? void 0 : x.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const Q = (b = O == null ? void 0 : O.widgets) == null ? void 0 : b.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image");
    if (Q) {
      let te = Pn(Q.value);
      if (te && !te.includes("/") && !te.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (te = vn.apiURL(`/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`)), te)
        return String((x == null ? void 0 : x.name) || ""), { src: te, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const d = Yo(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && p.push(...d.pano_input_images), Array.isArray((v = d == null ? void 0 : d.ui) == null ? void 0 : v.pano_input_images) && p.push(...d.ui.pano_input_images), p.length > 0)
    for (const h of p) {
      const x = Pn(h);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function iv(e, t = [], n = {}) {
  const i = rv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = Mh(a);
  if (!c.length) return null;
  const f = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(d);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return f && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const b = new Image(), v = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  v.pendingSrcRaw = a, v.pendingResolvedSrc = "", v.pendingImg = b, e.__panoLinkedInputImageCache.set(d, v);
  let h = -1;
  const x = () => {
    var C, N, z, O;
    if (h += 1, h >= c.length) {
      if (((N = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : N.call(C, d)) === v && v.pendingImg === b && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
        try {
          (O = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || O.call(z, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const M = c[h];
    v.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, C, N;
    ((C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : C.call(M, d)) === v && v.pendingImg === b && (v.srcRaw = a, v.resolvedSrc = String(v.pendingResolvedSrc || b.src || ""), v.img = b, v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null), String(v.pendingResolvedSrc || v.resolvedSrc || b.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0);
  }, b.onerror = (M) => {
    var C, N, z, O;
    if (h + 1 < c.length) {
      x();
      return;
    }
    if (((N = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : N.call(C, d)) === v && v.pendingImg === b && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
      try {
        (O = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || O.call(z, d);
      } catch {
      }
    String(v.pendingResolvedSrc || v.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, x(), f && v.img && (v.img.complete || v.img.naturalWidth || v.img.width) ? v.img : b;
}
function qo(e, t = [], n = null, i = {}) {
  const a = iv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Na(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function Pc(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function gr(e, t, n = "") {
  const i = Pc(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Hy ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Xo(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), f = n / a, d = i / c, p = Math.min(f, d);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Ah(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), f = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || f <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), b = Math.max(Math.round(34 * n), d + Math.round(14 * n)), v = i + (c - p) * 0.5, h = a + (f - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(v, h, p, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", v + p * 0.5, h + b * 0.5 + 0.5), e.restore();
}
function lo(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function av(e) {
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
function Ch(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), f = Number(t) > 0 ? Number(t) : 1;
  let d = a, p = a / f;
  return p > c && (p = c, d = c * f), {
    x: n + (a - d) * 0.5,
    y: i + (c - p) * 0.5,
    w: d,
    h: p
  };
}
function ov(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const f = Ch(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, f.x, f.y, f.w, f.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(f.x, f.y, f.w, f.h)), e.restore(), !0;
}
function sv(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var d;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let f = 22;
    try {
      const p = typeof c.computeSize == "function" ? c.computeSize(((d = Cn(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (f = Number(p[1]));
    } catch {
      f = 22;
    }
    a += f;
  }), a;
}
function Ef(e, t) {
  if (!e || !t || !Array.isArray(e.widgets)) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Io(e) {
  const n = sv(e) + 2, i = 8, a = Cn(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), f = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return f < 40 || c < 80 ? null : { x: i, y: n, w: c, h: f };
}
function Ih(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Zy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const f = e.__panoPreviewImageCache.get(i);
  if (f && f.src === a) return f.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var p, b, v;
    (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || b.call(p), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function lv(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, f) => Number((c == null ? void 0 : c.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Kl(e, t) {
  return gs(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Gl(e, t, n) {
  return ph(t, (i, a) => Ih(e, i, a), { scene: n });
}
function cv(e, t) {
  var f;
  const n = Dh(e, t);
  if (!n) return [];
  const i = Oh(t), a = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], c = new Map(
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
function uv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, f = (d) => {
    const p = d.x - a, b = d.y - c, v = Math.hypot(p, b) || 1;
    return { x: d.x + p / v * i, y: d.y + b / v * i };
  };
  return [f(e), f(t), f(n)];
}
function Df(e, t, n, i, a, c, f, d) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [b, v, h] = uv(c, f, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(b.x, b.y), e.lineTo(v.x, v.y), e.lineTo(h.x, h.y), e.closePath(), e.clip();
  const x = (c.x * (i.y - a.y) + f.x * (a.y - n.y) + d.x * (n.y - i.y)) / p, M = (c.x * (a.x - i.x) + f.x * (n.x - a.x) + d.x * (i.x - n.x)) / p, C = (c.x * (i.x * a.y - a.x * i.y) + f.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / p, N = (c.y * (i.y - a.y) + f.y * (a.y - n.y) + d.y * (n.y - i.y)) / p, z = (c.y * (a.x - i.x) + f.y * (n.x - a.x) + d.y * (i.x - n.x)) / p, O = (c.y * (i.x * a.y - a.x * i.y) + f.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(x, N, M, z, C, O), e.drawImage(t, 0, 0), e.restore();
}
function Th(e, t, n, i) {
  const a = _l(e, t.right), c = _l(e, t.up), f = _l(e, t.fwd);
  if (f <= 1e-4) return null;
  const d = c / f / i, p = a / f / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Eh(e, t, n, i, a, c, f, d = 12, p = 9) {
  var $;
  const b = q(Number(f.hFOV_deg || 30), 1, 179) * Ar, v = q(Number(f.vFOV_deg || 30), 1, 179) * Ar, h = Math.tan(b * 0.5), x = Math.tan(v * 0.5), M = f.crop || {}, C = q(Number(M.x0 ?? 0), 0, 1), N = q(Number(M.y0 ?? 0), 0, 1), z = q(Number(M.x1 ?? 1), 0, 1), O = q(Number(M.y1 ?? 1), 0, 1), F = Math.max(1e-4, z - C), T = Math.max(1e-4, O - N), I = bs(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0), Number(f.rot_deg || f.roll_deg || 0)), R = [], K = [], Q = [], te = [];
  for (let se = 0; se <= p; se++) {
    const U = se / p, G = (1 - (N + U * T) * 2) * x;
    for (let ce = 0; ce <= d; ce++) {
      const we = ce / d, Fe = ((C + we * F) * 2 - 1) * h, Ke = I.fwd.x + I.right.x * Fe + I.up.x * G, et = I.fwd.y + I.right.y * Fe + I.up.y * G, tt = I.fwd.z + I.right.z * Fe + I.up.z * G, ot = Math.hypot(Ke, et, tt) || 1e-8, jt = Ke / ot, At = et / ot, pn = tt / ot, on = jt * i.right.x + At * i.right.y + pn * i.right.z, Gn = jt * i.up.x + At * i.up.y + pn * i.up.z, u = jt * i.fwd.x + At * i.fwd.y + pn * i.fwd.z;
      if (u <= 1e-4)
        R[se] || (R[se] = []), K[se] || (K[se] = []), R[se][ce] = null, K[se][ce] = null;
      else {
        const L = Gn / u / a, ee = on / u / a;
        R[se] || (R[se] = []), K[se] || (K[se] = []), R[se][ce] = n.x + n.w * 0.5 + ee * n.h * 0.5, K[se][ce] = n.y + n.h * 0.5 - L * n.h * 0.5;
      }
      Q[se] || (Q[se] = []), te[se] || (te[se] = []), Q[se][ce] = we, te[se][ce] = U;
    }
  }
  const _e = ($ = c.assets) == null ? void 0 : $[f.asset_id], A = Ih(t, f.asset_id, _e);
  if (!A || !A.complete || !A.naturalWidth) return;
  const ye = Number(A.naturalWidth || A.width || 1), he = Number(A.naturalHeight || A.height || 1), fe = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let se = 0; se < p; se++)
    for (let U = 0; U < d; U++) {
      const ie = R[se][U], G = K[se][U], ce = R[se][U + 1], we = K[se][U + 1], Oe = R[se + 1][U], Fe = K[se + 1][U], Ke = R[se + 1][U + 1], et = K[se + 1][U + 1];
      if (ie === null || ce === null || Oe === null || Ke === null) continue;
      const tt = Q[se][U] * ye, ot = te[se][U] * he, jt = Q[se][U + 1] * ye, At = te[se][U + 1] * he, pn = Q[se + 1][U] * ye, on = te[se + 1][U] * he, Gn = Q[se + 1][U + 1] * ye, u = te[se + 1][U + 1] * he;
      Df(e, A, { x: tt, y: ot }, { x: jt, y: At }, { x: Gn, y: u }, { x: ie, y: G }, { x: ce, y: we }, { x: Ke, y: et }), Df(e, A, { x: tt, y: ot }, { x: Gn, y: u }, { x: pn, y: on }, { x: ie, y: G }, { x: Ke, y: et }, { x: Oe, y: Fe });
    }
}
function fv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Mc(e), a = Io(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = bs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), f = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ar * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = qo(
    e,
    ys(e, ["erp_image", "bg_erp"]),
    () => {
      var I, R, K;
      (R = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null || R.call(I), (K = e.setDirtyCanvas) == null || K.call(e, !0, !1);
    }
  ), p = !!(d && d.complete && (d.naturalWidth || d.width)), b = Cc(e), v = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, h = b || v, x = wa, M = Kl(e, i), C = Gl(e, i, M), N = Nc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let z = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Wr()), p) {
    const I = ps({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(C) ? C.map((Q) => `${String((Q == null ? void 0 : Q.assetId) || "")}:${String((Q == null ? void 0 : Q.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: M,
      textures: C,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), K = e.__panoRuntimeCore.syncState(I) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", N, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    z = !!K, K && t.drawImage(K, a.x, a.y, a.w, a.h);
  }
  const O = h ? 8 : 12, F = h ? 6 : 9, T = lv(e, i);
  if (!p || T.length === 0) {
    const I = Xo(t == null ? void 0 : t.canvas, a);
    Fh(t, a, c, f, I);
  }
  !z && p && Jo(e, t, a, c, f, d, x), !z && T.length > 0 && T.forEach((I) => Eh(t, e, a, c, f, i, I, O, F)), t.restore();
}
function dv(e, t, n, i, a = "preview_scene", c = "") {
  const f = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return ps({
    stateRevision: [
      a,
      f,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((d) => `${String((d == null ? void 0 : d.assetId) || "")}:${String((d == null ? void 0 : d.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function xl(e, t, n, i) {
  var c, f, d, p, b, v;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const h = i.convertEventToCanvasOffset(t);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(h[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = pv(e, t, i);
  return a || null;
}
function hv(e, t) {
  var h, x;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (h = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : h.call(a), f = (t == null ? void 0 : t.ds) || ((x = it == null ? void 0 : it.canvas) == null ? void 0 : x.ds);
  if (!c || !f) return null;
  const d = Number(f.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const p = Array.isArray(f.offset) ? f.offset : [0, 0], b = (n - Number(c.left || 0)) / d - Number(p[0] || 0), v = (i - Number(c.top || 0)) / d - Number(p[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(v) ? null : { x: b, y: v };
}
function pv(e, t, n) {
  var a, c;
  const i = hv(t, n || (it == null ? void 0 : it.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Of(e) {
  return Number(e == null ? void 0 : e.button) === 0 && String((e == null ? void 0 : e.type) || "").toLowerCase().includes("down") ? !0 : String((e == null ? void 0 : e.type) || "").toLowerCase() === "mouseup" ? !1 : typeof (e == null ? void 0 : e.buttons) == "number" ? (e.buttons & 1) === 1 : typeof (e == null ? void 0 : e.which) == "number" ? e.which === 1 : typeof (e == null ? void 0 : e.button) == "number" ? e.button === 0 : !1;
}
function co(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), Cn(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", yh(e, 320, 180), Vn(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var x, M;
    const h = t ? t.apply(this, arguments) : void 0;
    try {
      const C = arguments[0];
      C && !((x = this.flags) != null && x.collapsed) && (i.stepInertia(performance.now()) && ((M = this.setDirtyCanvas) == null || M.call(this, !0, !1)), fv(this, C, i));
    } catch {
    }
    return h;
  }, e.onResize = function() {
    var x;
    const h = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ti(this, 150), (x = this.setDirtyCanvas) == null || x.call(this, !0, !0), Vh(this, 220, null), h;
  };
  const i = ms({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (h) => {
      e.__panoPreviewView = h;
    },
    getViewportSize: () => {
      const h = Io(e);
      return {
        w: Math.max(1, Number((h == null ? void 0 : h.w) || 0)),
        h: Math.max(1, Number((h == null ? void 0 : h.h) || 0))
      };
    },
    onInteraction: () => {
      var h;
      Ac(e), (h = e.setDirtyCanvas) == null || h.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(h, x, M) {
    var C;
    try {
      if (!((C = this.flags) != null && C.collapsed)) {
        const N = xl(this, h, x, M) || { x: 0, y: 0 }, z = Cn(this), O = Number((z == null ? void 0 : z[0]) || 0), F = Number((z == null ? void 0 : z[1]) || 0);
        if (N.x >= O - 20 && N.y >= F - 20)
          return a ? a.apply(this, arguments) : void 0;
        const I = Io(this);
        if (If(N.x, N.y, I))
          return (h == null ? void 0 : h.button) === 0 && i.startDrag(N.x, N.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(h, x, M) {
    try {
      const C = xl(this, h, x, M);
      if (i.state.drag.active) {
        if (typeof (h == null ? void 0 : h.buttons) == "number" && (h.buttons & 1) === 0)
          return i.endDrag(), !0;
        const N = C || i.state.drag;
        return i.moveDrag(N.x, N.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const f = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : f ? f.apply(this, arguments) : void 0;
  };
  const d = e.onMouseLeave;
  e.onMouseLeave = function() {
    const h = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), h;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(h, x, M) {
    var C, N;
    try {
      if ((C = this.flags) != null && C.collapsed) return p ? p.apply(this, arguments) : void 0;
      const z = xl(this, h, x, M), O = Io(this);
      if (!z || !If(z.x, z.y, O)) return p ? p.apply(this, arguments) : void 0;
      const F = Number((h == null ? void 0 : h.deltaY) ?? (h == null ? void 0 : h.wheelDeltaY) ?? (typeof x == "number" ? x : 0));
      return i.applyWheel(Math.sign(F)) && ((N = this.setDirtyCanvas) == null || N.call(this, !0, !1)), typeof (h == null ? void 0 : h.preventDefault) == "function" && h.preventDefault(), typeof (h == null ? void 0 : h.stopPropagation) == "function" && h.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const b = e.onRemoved, v = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = f, e.onMouseLeave = d, e.onMouseWheel = p, e.onRemoved = b, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = v, e.onRemoved = function() {
    return v(), ua.unregister(this), Ii.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function mv(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Dh(e, t) {
  var b, v, h, x, M, C, N, z, O, F, T, I;
  const n = (v = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : v.strokes, i = (x = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : x.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const f = mv(e, t), d = `${f.width}x${f.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = jl(f), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) || null
  };
  return (((N = e.__panoPreviewPaintRevision) == null ? void 0 : N.paint) !== p.paint || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.mask) !== p.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== p.groups || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Oh(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function gv(e, t) {
  const n = Dh(e, t);
  if (!n) return null;
  const i = Oh(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function bv(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = Pn(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = e.__panoPaintingLayerImageCache;
  if (c.img && c.src === a) return c.img;
  const f = new Image();
  return f.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, f.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === f && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, f.src = a, e.__panoPaintingLayerImageCache = { src: a, img: f }, f;
}
function Rf(e, t) {
  var c, f;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = bv(e, t, () => {
      var p, b;
      return (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : b.call(p);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = gv(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function yv(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Rh(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function vv(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const f = yv(n);
  if (f.width === i && f.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = Rh(e, c, f.width, f.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, f.width, f.height), p.drawImage(n, 0, 0, f.width, f.height);
    const b = p.getImageData(0, 0, f.width, f.height).data, v = t.getImageData(0, 0, i, a), h = v.data, x = Math.max(0, f.width - 1), M = Math.max(0, f.height - 1);
    for (let C = 0; C < a; C += 1) {
      const N = (C + 0.5) * f.height / a - 0.5, z = q(Math.floor(N), 0, M), O = q(z + 1, 0, M), F = q(N - z, 0, 1);
      for (let T = 0; T < i; T += 1) {
        const I = (T + 0.5) * f.width / i - 0.5, R = q(Math.floor(I), 0, x), K = q(R + 1, 0, x), Q = q(I - R, 0, 1);
        let te = 0, _e = 0, A = 0, ye = 0;
        const he = (se, U, ie) => {
          const G = (U * f.width + se) * 4, ce = (b[G + 3] || 0) / 255;
          te += ce * ie, _e += (b[G] || 0) / 255 * ce * ie, A += (b[G + 1] || 0) / 255 * ce * ie, ye += (b[G + 2] || 0) / 255 * ce * ie;
        };
        if (he(R, z, (1 - Q) * (1 - F)), he(K, z, Q * (1 - F)), he(R, O, (1 - Q) * F), he(K, O, Q * F), te <= 1e-6) continue;
        const fe = (C * i + T) * 4, $ = 1 - te;
        h[fe] = Math.round(q((_e + h[fe] / 255 * $) * 255, 0, 255)), h[fe + 1] = Math.round(q((A + h[fe + 1] / 255 * $) * 255, 0, 255)), h[fe + 2] = Math.round(q((ye + h[fe + 2] / 255 * $) * 255, 0, 255)), h[fe + 3] = 255;
      }
    }
    t.putImageData(v, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function Ff(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== d || p.width !== a || p.height !== c) {
    (!p || p.width !== a || p.height !== c) && (p = document.createElement("canvas"), p.width = a, p.height = c, e.__panoPreviewBgPaint = p);
    const b = p.getContext("2d");
    b.clearRect(0, 0, a, c), b.drawImage(t, 0, 0, a, c), vv(e, b, n, a, c, "__panoPreviewOverlayScratch"), p.__revKey = d;
  }
  return p;
}
function _v(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Pc(e, a);
  const c = Mc(e), f = t.parentElement, d = 1, p = Math.max(1, Number((f == null ? void 0 : f.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((f == null ? void 0 : f.clientHeight) || t.clientHeight || 0)), v = Math.max(64, Math.round(p * d)), h = Math.max(64, Math.round(b * d)), x = t.getContext("2d");
  if (x)
    if (a === "cutout") {
      const M = av(c), C = qo(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var te, _e;
          return (_e = (te = e.__panoDomPreview) == null ? void 0 : te.requestDraw) == null ? void 0 : _e.call(te);
        },
        { preserveReadyWhilePending: !1 }
      ), N = !!(C && C.complete && (C.naturalWidth || C.width));
      (t.width !== v || t.height !== h) && (t.width = v, t.height = h);
      const z = { x: 0, y: 0, w: v, h }, O = N ? q(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, F = M ? wr(M) : null, T = q(Number((F == null ? void 0 : F.aspect) || O || 1), 0.05, 20), I = Ch(z, T);
      Xo(t, z), x.setTransform(1, 0, 0, 1, 0, 0), x.fillStyle = "#070707", x.fillRect(0, 0, v, h);
      let R = "none", K = "Open editor and add frame", Q = "";
      if (Q = String((C == null ? void 0 : C.src) || ""), M)
        if (C && !N)
          R = "loading";
        else if (N) {
          const te = Kl(e, c), _e = Gl(e, c, te), A = cv(e, c), ye = ea({
            stateRevision: [
              "runtime_cutout_scene",
              String(C.currentSrc || C.src || ""),
              Number(C.naturalWidth || C.width || 0),
              Number(C.naturalHeight || C.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((M == null ? void 0 : M.id) || ""),
              Array.isArray(_e) ? _e.map((fe) => `${String((fe == null ? void 0 : fe.assetId) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}`).join(",") : "",
              Array.isArray(A) ? A.map((fe) => `${String((fe == null ? void 0 : fe.id) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}:${Number((fe == null ? void 0 : fe.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: C,
            backgroundRevision: String(C.currentSrc || C.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: te,
            textures: _e,
            rasterEntries: A,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Wr()), e.__panoRuntimeCore.syncState(ye), e.__panoRuntimeCore.renderToContext(
            x,
            I,
            wr(M),
            { width: I.w, height: I.h, dpr: 1 }
          ) || (R = "empty", K = "Open editor or run node");
        } else
          R = "empty", K = "Connect ERP image";
      else {
        if (N) {
          const te = Rf(e, c), _e = te != null && te.source ? Ff(e, C, te.source, te.revision || "") : C;
          ov(x, _e, z, 0.44);
        }
        R = "empty", K = "Open editor and add frame";
      }
      R === "loading" ? (lo(e, !1), gr(e, !0, Q)) : R === "empty" ? (lo(e, !0, K), gr(e, !1, "")) : (lo(e, !1), gr(e, !1, ""));
    } else {
      lo(e, !1), (t.width !== v || t.height !== h) && (t.width = v, t.height = h);
      const M = { x: 0, y: 0, w: v, h }, C = Xo(t, M);
      x.setTransform(1, 0, 0, 1, 0, 0), x.clearRect(0, 0, v, h), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const N = bs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), z = Math.tan(Number(e.__panoPreviewView.fov || 100) * Ar * 0.5), O = qo(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var he, fe;
          return (fe = (he = e.__panoDomPreview) == null ? void 0 : he.requestDraw) == null ? void 0 : fe.call(he);
        }
      ), F = !!(O && O.complete && (O.naturalWidth || O.width));
      x.fillStyle = "#1a1a1e", x.fillRect(0, 0, v, h);
      const T = Kl(e, c), I = Gl(e, c, T), R = Nc(e.__panoPreviewView, c == null ? void 0 : c.coverage), K = Rf(e, c), Q = (K == null ? void 0 : K.source) || null, te = F && Q ? Ff(e, O, Q, (K == null ? void 0 : K.revision) || "") : O, _e = te !== O ? String(te.__revKey || "") : O ? [
        String(O.currentSrc || O.src || ""),
        Number(O.naturalWidth || O.width || 0),
        Number(O.naturalHeight || O.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Wr());
      let A = !1;
      if (F) {
        const fe = e.__panoDomRuntimeCore.syncState(
          dv(te, c, T, I, "runtime_dom_scene", _e)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", R, {
          width: M.w,
          height: M.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        fe && (x.drawImage(fe, M.x, M.y, M.w, M.h), A = !0);
      }
      const ye = T.stickers;
      if (F && A)
        gr(e, !1, "");
      else if (F)
        Jo(e, x, M, N, z, te, wa), gr(e, !1, "");
      else if (Q)
        Jo(e, x, M, N, z, Q, wa), gr(e, !!O && !F, String((O == null ? void 0 : O.src) || ""));
      else {
        const he = !!O && !F;
        gr(e, he, String((O == null ? void 0 : O.src) || "")), he && Ah(x, M, C);
      }
      if ((!F || ye.length === 0) && Fh(x, M, N, z, C), !A && ye.length > 0) {
        const he = Cc(e), fe = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, $ = he || fe, se = $ ? 8 : 12, U = $ ? 6 : 9;
        ye.forEach((ie) => Eh(x, e, M, N, z, c, ie, se, U));
      } else if (!O || !F) {
        const he = Math.max(14, Math.round(16 * C));
        x.fillStyle = "rgba(212,212,216,0.85)", x.font = `600 ${he}px Plus Jakarta Sans, Geist, sans-serif`, x.textAlign = "center", x.fillText("Open editor to add stickers", v * 0.5, h * 0.5 + 24 * C);
      }
    }
}
function Jo(e, t, n, i, a, c, f = Ly) {
  const d = Mc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Wr());
  const b = kh(c), v = ps({
    stateRevision: [
      "runtime_bg_only",
      b,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: b,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(v)) return;
  const x = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
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
  x && t.drawImage(x, n.x, n.y, n.w, n.h);
}
function Lf(e, t, n, i, a, c, f = 1) {
  let d = !1;
  e.strokeStyle = c, e.lineWidth = f, e.beginPath();
  for (const p of t) {
    const b = Th(p, n, i, a);
    if (!b) {
      d = !1;
      continue;
    }
    d ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), d = !0);
  }
  e.stroke();
}
function Fh(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", f = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const v = [];
    for (let h = -180; h <= 180; h += 15) v.push($r(h, b));
    Lf(e, v, n, t, i, b === 0 ? f : c, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const v = [];
    for (let h = -89; h <= 89; h += 15) v.push($r(b, h));
    Lf(e, v, n, t, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, b % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: $r(0, 0) },
    { name: "Right", dir: $r(90, 0) },
    { name: "Back", dir: $r(180, 0) },
    { name: "Left", dir: $r(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((b) => {
    const v = Th(b.dir, n, t, i);
    v && e.fillText(b.name, v.x, v.y + 20 * a);
  }), e.restore();
}
function Lh(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Ac(e) {
  const t = Lh(e);
  t.dragging = !1, t.hqFrames = zy;
}
function Ti(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Cc(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function xv(e, t = performance.now()) {
  const n = Lh(e);
  if (n.lastFrameTs > 0) {
    const i = Math.max(1, t - n.lastFrameTs);
    n.frameEmaMs <= 0 ? n.frameEmaMs = i : n.frameEmaMs = n.frameEmaMs * (1 - Pf) + i * Pf;
  }
  return n.lastFrameTs = t, n.frameEmaMs;
}
function wv(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Sv(e, t, n = 20) {
  var f;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (f = t.getBoundingClientRect) == null ? void 0 : f.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
}
function $n(e, t) {
  return Sv(e, t) ? !1 : (wv(e), !0);
}
function zh() {
  var n;
  const e = (n = it == null ? void 0 : it.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function $h(e) {
  var n;
  if (!e) return;
  const t = (n = it == null ? void 0 : it.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Nv(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !bh(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function jh(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var c, f;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Wl(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, Ti(e, 150), t == null || t(), Vh(e, 180, t);
    }
  };
}
function Vh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Vn(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function ta(e) {
  return e.__panoStandaloneView || (e.__panoStandaloneView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoStandaloneView;
}
function fa(e) {
  if (e) {
    if (typeof e.__panoStandaloneUnavailableRestore == "function")
      try {
        e.__panoStandaloneUnavailableRestore();
      } catch {
      }
    e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }
}
function Zo(e, t = "Node 2.0 preview unavailable") {
  var i;
  if (!e || e.__panoStandaloneUnavailable) return;
  const n = e.onDrawForeground;
  e.onDrawForeground = function(a) {
    var v, h, x;
    const c = n ? n.apply(this, arguments) : void 0;
    if (!a || (v = this.flags) != null && v.collapsed) return c;
    const f = 8, d = 44, p = Math.max(120, Number(((h = this.size) == null ? void 0 : h[0]) || 320) - 16), b = Math.max(70, Number(((x = this.size) == null ? void 0 : x[1]) || 240) - 52);
    return a.save(), a.fillStyle = "rgba(20,20,24,0.94)", a.strokeStyle = "rgba(78,78,86,0.95)", a.lineWidth = 1, a.beginPath(), a.roundRect(f, d, p, b, 8), a.fill(), a.stroke(), a.fillStyle = "rgba(236,236,242,0.92)", a.font = "600 12px Plus Jakarta Sans, Geist, sans-serif", a.textAlign = "center", a.textBaseline = "middle", a.fillText(String(t), f + p * 0.5, d + b * 0.5), a.restore(), c;
  }, e.__panoStandaloneUnavailableRestore = () => {
    e.onDrawForeground = n, e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }, e.__panoStandaloneUnavailable = !0, (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
}
function Mv(e, t, n, i = "erp_image", a = wa) {
  var T, I, R;
  Pc(e, "standalone");
  const c = Xo(t == null ? void 0 : t.canvas, n), f = ta(e), d = bs(Number(f.yaw || 0), Number(f.pitch || 0), 0), p = Math.tan(Number(f.fov || 100) * Ar * 0.5), b = ys(e, [i, "erp_image", "bg_erp"]), h = vh(e) ? tv(e, () => {
    var K, Q;
    return (Q = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : Q.call(K);
  }) || nv(e, () => {
    var K, Q;
    return (Q = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : Q.call(K);
  }) : qo(
    e,
    b,
    () => {
      var K, Q;
      return (Q = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : Q.call(K);
    }
  ), x = Qy(h), M = String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || ""), C = Number(((R = (I = (T = e == null ? void 0 : e.widgets) == null ? void 0 : T.find) == null ? void 0 : I.call(T, (K) => (K == null ? void 0 : K.name) === "coverage")) == null ? void 0 : R.value) || 360) === 180 ? 180 : 360, N = kh(h), z = String(e.__panoStandaloneLastFrameSrc || ""), O = !!e.__panoStandaloneLastFrameCanvas && !!M && M === z;
  if (e.__panoStandaloneCore || (e.__panoStandaloneCore = Wr()), x) {
    const K = ps({
      stateRevision: [
        "standalone_preview_scene",
        N,
        C
      ].join("|"),
      backgroundSource: h,
      backgroundRevision: N,
      coverageDeg: C,
      scene: gs(null, {}),
      textures: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), te = e.__panoStandaloneCore.syncState(K) ? e.__panoStandaloneCore.renderToTarget("preview_node", Oy(f, C), {
      width: n.w,
      height: n.h,
      dpr: window.devicePixelRatio || 1
    }) : null, _e = !!te;
    if (te) {
      t.drawImage(te, n.x, n.y, n.w, n.h);
      const ye = Rh(e, "__panoStandaloneLastFrameCanvas", n.w, n.h).getContext("2d");
      ye && (ye.clearRect(0, 0, n.w, n.h), ye.drawImage(te, 0, 0, n.w, n.h), e.__panoStandaloneLastFrameSrc = M);
    }
    _e || (O ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h), Jo(e, t, n, d, p, h, a)));
  } else
    O ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h));
  gr(e, !!h && !x, M) && Ah(t, n, c);
}
function kv(e, t = {}) {
  var ie;
  const n = t.__allowStandalone === !0, i = vh(e);
  if (i && !n) {
    Nr(e);
    return;
  }
  i && Nv(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ii.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, f = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ua.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), p = a ? _h(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Kr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (p.chosenPath = d, p.reason = "controller_target_backend");
  const b = a ? p.chosenPath : "dom", v = p.signature || Kr(e);
  if (Number(e.__panoRebindGeneration || 0), Bl(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, Cn(e), e.__panoFrontendSig = v, e.__panoStickersPath = b, a && ua.register(e), a && b === "legacy_draw") {
    if (c) return;
    Mr(e, { keepMonitor: !0 }), co(e);
    return;
  }
  if ((ie = e.__panoDomPreview) != null && ie.widget) return;
  if (e.__panoLegacyPreviewHooked && Mr(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && co(e);
    return;
  }
  const h = t.noPreview === !0, x = a || h ? 0 : 56, M = document.createElement("div");
  if (gh(), M.className = "pano-node-preview-dom", M.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), h && M.classList.add("pano-node-preview--no-preview"), M.setAttribute("data-capture-wheel", "true"), M.setAttribute("tabindex", "-1"), M.style.cssText = [
    "width:100%",
    h ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), h) {
    const G = e.addDOMWidget(Bo(), "preview", M, Wl(e, null));
    Vn(e), e.__panoDomPreview = { widget: G, root: M, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const C = document.createElement("div");
  C.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const N = document.createElement("canvas");
  N.style.cssText = [
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
  const z = document.createElement("div");
  z.style.cssText = [
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
  ].join(";"), z.textContent = "Open editor and add frame", C.appendChild(N), C.appendChild(z), M.appendChild(C), yh(e, 120, 120), Vn(e);
  let O = null;
  try {
    jh(e, x, () => {
      var G, ce;
      return (ce = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ce.call(G);
    }), O = e.addDOMWidget(
      Bo(),
      "preview",
      M,
      Wl(e, () => {
        var G, ce;
        return (ce = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ce.call(G);
      }, x)
    );
  } catch {
    a && co(e);
    return;
  }
  const F = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    F.needsDraw = !0, F.raf || (F.raf = requestAnimationFrame(K));
  }, I = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Ti(e, 150), T();
  }) : null;
  I == null || I.observe(C);
  const R = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const G = 3, ce = (we) => {
      requestAnimationFrame(() => {
        var Fe;
        const Oe = !!(M != null && M.isConnected && (C != null && C.isConnected) && (N != null && N.isConnected) && Number(C.clientHeight || 0) > 0 && Number(N.clientHeight || 0) > 0);
        if (!Oe && we < G) {
          ce(we + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((N == null ? void 0 : N.clientHeight) || 0), !Oe) {
          if (c) {
            e.__panoPreviewMode, Number((C == null ? void 0 : C.clientHeight) || 0), Number((N == null ? void 0 : N.clientHeight) || 0);
            return;
          }
          Mr(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", co(e), (Fe = e.setDirtyCanvas) == null || Fe.call(e, !0, !0);
        }
      });
    };
    ce(1);
  }, K = (G) => {
    var we, Oe, Fe;
    F.raf = 0;
    const ce = Q.stepInertia(G);
    (F.needsDraw || ce) && (F.needsDraw = !1, (we = e.flags) != null && we.collapsed || _v(e, N, null, Q), (Oe = e.setDirtyCanvas) == null || Oe.call(e, !0, !1)), (ce || F.needsDraw) && (F.raf = requestAnimationFrame(K)), mh() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, Cn(e), qi(M), qi(C), qi(N), qi(M.parentElement), qi((Fe = M.parentElement) == null ? void 0 : Fe.parentElement), Number(N.width || 0), Number(N.height || 0), void 0);
  }, Q = ms({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    onInteraction: () => {
      T();
    }
  });
  N.addEventListener("pointerdown", (G) => {
    var ce, we;
    $n(G, C) && f && G.button === 0 && ((ce = M.focus) == null || ce.call(M), (we = N.setPointerCapture) == null || we.call(N, G.pointerId), N.style.cursor = "grabbing", Q.startDrag(G.clientX, G.clientY, G.pointerId));
  }), N.addEventListener("pointermove", (G) => {
    !f || !Q.state.drag.active || ($n(G, C), Q.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const te = (G) => {
    var ce;
    !f || !Q.state.drag.active || ($n(G, C), (ce = N.releasePointerCapture) == null || ce.call(N, G.pointerId), N.style.cursor = "grab", Q.endDrag(), Ac(e), T());
  };
  N.addEventListener("pointerup", te), N.addEventListener("pointercancel", te), N.addEventListener("pointerleave", (G) => {
    Q.state.drag.active && te(G);
  });
  const _e = (G) => {
    var we, Oe, Fe;
    if (!$n(G, C) || !f) return;
    const ce = zh();
    Q.applyWheelEvent(G) && T(), (we = G.preventDefault) == null || we.call(G), (Oe = G.stopPropagation) == null || Oe.call(G), (Fe = G.stopImmediatePropagation) == null || Fe.call(G), requestAnimationFrame(() => {
      var Ke, et;
      $h(ce), (et = (Ke = it == null ? void 0 : it.canvas) == null ? void 0 : Ke.setDirty) == null || et.call(Ke, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    C.addEventListener(G, _e, { passive: !1, capture: !0 }), N.addEventListener(G, _e, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    N.addEventListener(G, (ce) => $n(ce, C)), C.addEventListener(G, (ce) => $n(ce, C));
  });
  const A = Sa(e, "state_json");
  if (A && !A.__panoPreviewPatchedCb) {
    A.__panoPreviewPatchedCb = !0;
    const G = A.callback;
    A.callback = (ce) => {
      const we = G ? G(ce) : void 0;
      return T(), we;
    };
  }
  const ye = Sa(e, "bg_color");
  if (ye && !ye.__panoPreviewPatchedCb) {
    ye.__panoPreviewPatchedCb = !0;
    const G = ye.callback;
    ye.callback = (ce) => {
      const we = G ? G(ce) : void 0;
      return T(), we;
    };
  }
  const he = e.onRemoved, fe = e.onResize, $ = e.onExecuted;
  e.onExecuted = function(G) {
    Ph(e, G), Na(e), Vn(e), T();
    const ce = $ ? $.apply(this, arguments) : void 0;
    return Vn(e), ce;
  };
  const se = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return Na(e), Vn(e), T(), se ? se.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var ce;
    const G = fe ? fe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ti(this, 150), T(), (ce = this.setDirtyCanvas) == null || ce.call(this, !0, !1), G;
  }, e.onRemoved = function() {
    return U(), ua.unregister(this), Ii.unregister(this), he ? he.apply(this, arguments) : void 0;
  };
  const U = () => {
    var G;
    F.raf && cancelAnimationFrame(F.raf), (G = I == null ? void 0 : I.disconnect) == null || G.call(I), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = fe, e.onExecuted = $, e.onConnectionsChange = se, e.onRemoved = he;
  };
  e.__panoDomRestore = U, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: O, root: M, canvas: N, requestDraw: T, state: F, emptyHintEl: z }, R(), T();
}
function zf(e, t = {}) {
  xh(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Pv(e) {
  var p;
  const t = e == null ? void 0 : e.root, n = (p = t == null ? void 0 : t.querySelector) == null ? void 0 : p.call(t, "div"), i = e == null ? void 0 : e.canvas;
  if (!t || !i || !t.isConnected || !i.isConnected) return !1;
  const a = Number(i.clientWidth || 0), c = Number(i.clientHeight || 0);
  if (a > 0 && c > 0) return !0;
  const f = Number(t.clientWidth || 0), d = Number(t.clientHeight || 0);
  if (f > 0 && d > 0) return !0;
  if (n) {
    const b = Number(n.clientWidth || 0), v = Number(n.clientHeight || 0);
    if (b > 0 && v > 0) return !0;
  }
  return !1;
}
function Av(e, t = {}, n = null) {
  var d;
  let i = !1;
  try {
    i = Iv(e, {
      ...t,
      __noAutoFallback: !0,
      __skipRouteLog: !0
    }) === !0;
  } catch {
    i = !1;
  }
  if (!i || !((d = e.__panoDomPreview) != null && d.widget))
    return Zo(e, "Preview mount failed"), Nr(e), !0;
  Ko(e);
  const a = { cancelled: !1, frame: 0, timeoutId: 0 };
  e.__panoDomMountProbe = a;
  const c = (p) => {
    var b, v, h;
    a.cancelled || (a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, Zo(e, "Preview mount failed"), (v = (b = e.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || v.call(b), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0), n && (e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n), Nr(e), void 0);
  }, f = () => {
    var v, h, x, M, C, N, z, O, F, T;
    if (a.cancelled) return;
    const p = e.__panoDomPreview;
    Number(((v = p == null ? void 0 : p.root) == null ? void 0 : v.clientWidth) || 0), Number(((h = p == null ? void 0 : p.root) == null ? void 0 : h.clientHeight) || 0);
    const b = (M = (x = p == null ? void 0 : p.root) == null ? void 0 : x.querySelector) == null ? void 0 : M.call(x, "div");
    if (Number((b == null ? void 0 : b.clientWidth) || 0), Number((b == null ? void 0 : b.clientHeight) || 0), Number(((C = p == null ? void 0 : p.canvas) == null ? void 0 : C.clientWidth) || 0), Number(((N = p == null ? void 0 : p.canvas) == null ? void 0 : N.clientHeight) || 0), a.frame, p != null && p.widget, (z = p == null ? void 0 : p.root) != null && z.isConnected && ((O = p == null ? void 0 : p.canvas) != null && O.isConnected), !(p != null && p.widget) || !((F = p.root) != null && F.isConnected) || !((T = p.canvas) != null && T.isConnected)) {
      c();
      return;
    }
    if (Pv(p)) {
      a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, fa(e), Nr(e);
      return;
    }
    if (a.frame += 1, a.frame >= $y) {
      c();
      return;
    }
    requestAnimationFrame(f);
  };
  return a.timeoutId = setTimeout(() => {
    c();
  }, jy), requestAnimationFrame(f), !0;
}
function Cv(e, t = {}) {
  var i, a;
  const n = `standalone_unified|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (!(e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n)) {
    if (Nr(e), e == null || e.id, Cn(e), Number(((i = Cn(e)) == null ? void 0 : i[0]) || 0), Number(((a = Cn(e)) == null ? void 0 : a[1]) || 0), e == null || e.addDOMWidget, Mr(e, { keepMonitor: !1, reason: "attach_standalone_unified_begin" }), fa(e), typeof (e == null ? void 0 : e.addDOMWidget) == "function" && Av(e, t, n)) {
      e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n;
      return;
    }
    Zo(e, "Preview mount failed"), e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, Nr(e);
  }
}
function Iv(e, t = {}) {
  var a, c;
  const n = `standalone_dom|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n && ((a = e.__panoDomPreview) != null && a.widget)) return !0;
  Mr(e, { keepMonitor: !1, reason: "attach_standalone_dom_begin" }), fa(e), e.__panoPreviewMode = "standalone_dom", e.__panoPreviewButtonText = String(t.buttonText || "Open Preview"), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, Ii.register(e), t.__skipRouteLog !== !0 && (Nr(e), void 0);
  const i = String(t.imageInputName || "erp_image");
  gh();
  try {
    if (typeof e.addDOMWidget != "function") throw new Error("addDOMWidget unavailable");
    if ((c = e.__panoDomPreview) != null && c.widget) return !0;
    const f = document.createElement("div");
    f.className = "pano-node-preview-dom pano-node-preview--stickers", f.style.cssText = "width:100%;height:100%;position:relative;display:block;min-height:56px;overflow:hidden;", f.setAttribute("data-capture-wheel", "true"), f.setAttribute("tabindex", "-1");
    const d = document.createElement("div");
    d.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const p = document.createElement("canvas");
    p.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;", d.appendChild(p), f.appendChild(d), jh(e, 56, () => {
      var U, ie;
      return (ie = (U = e.__panoDomPreview) == null ? void 0 : U.requestDraw) == null ? void 0 : ie.call(U);
    });
    const b = e.addDOMWidget(
      Bo(),
      "preview",
      f,
      Wl(e, () => {
        var U, ie;
        return (ie = (U = e.__panoDomPreview) == null ? void 0 : U.requestDraw) == null ? void 0 : ie.call(U);
      }, 56)
    );
    b && (b.serialize = !1), Vn(e), e.__panoBindSeq = Number(e.__panoBindSeq || 0) + 1;
    const v = e.__panoBindSeq;
    e == null || e.id;
    const h = { raf: 0, needsDraw: !0, dragging: !1, pointerId: null }, x = { listeners: 0, raf: 0, widget: 0 }, M = ms({
      getView: () => ta(e),
      setView: (U) => {
        const ie = ta(e);
        ie.yaw = zt(Number(U.yaw || 0)), ie.pitch = q(Number(U.pitch || 0), -89.9, 89.9), ie.fov = q(Number(U.fov || 100), Ry, Fy);
      },
      getViewportSize: () => {
        const U = p.getBoundingClientRect();
        return {
          w: Math.max(1, Number(U.width || p.clientWidth || 0)),
          h: Math.max(1, Number(U.height || p.clientHeight || 0))
        };
      },
      getInvert: () => {
        const U = Uy();
        return {
          x: U.invert_view_x ? -1 : 1,
          y: U.invert_view_y ? -1 : 1
        };
      },
      onInteraction: () => {
        Ac(e);
      },
      onDebug: (U, ie) => {
      }
    });
    e.__panoStandaloneController = M;
    let C = null;
    const N = (U) => {
      var ie, G, ce;
      (ie = U.preventDefault) == null || ie.call(U), (G = U.stopPropagation) == null || G.call(U), (ce = U.stopImmediatePropagation) == null || ce.call(U);
    }, z = () => {
      C && C();
      const U = (ce) => {
        if (h.dragging) {
          if (!Of(ce)) {
            Q(ce, (ce == null ? void 0 : ce.type) || "pointermove_buttons_released");
            return;
          }
          M.moveDrag(ce.clientX, ce.clientY, "pano", performance.now()), O(), N(ce);
        }
      }, ie = (ce) => {
        h.dragging && (Q(ce, (ce == null ? void 0 : ce.type) || "pointerup"), N(ce));
      }, G = (ce) => {
        h.dragging && (Q(ce, (ce == null ? void 0 : ce.type) || "pointercancel"), N(ce));
      };
      window.addEventListener("pointermove", U, !0), window.addEventListener("pointerup", ie, !0), window.addEventListener("pointercancel", G, !0), x.listeners += 3, C = () => {
        window.removeEventListener("pointermove", U, !0), window.removeEventListener("pointerup", ie, !0), window.removeEventListener("pointercancel", G, !0), x.listeners = Math.max(0, x.listeners - 3), C = null;
      };
    }, O = () => {
      h.needsDraw = !0, h.raf || (h.raf = requestAnimationFrame(I));
    }, F = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
      Ti(e, 150), O();
    }) : null;
    F == null || F.observe(d);
    let T = 0;
    const I = (U = performance.now()) => {
      var At;
      h.raf = 0, T++, T <= 20 && ao(e, `tick.${T}`);
      const ie = M.stepInertia(U), G = Cc(e, U), ce = ie || G;
      if (xv(e, U), !h.needsDraw && !ce && T > 20) return;
      h.needsDraw = !1;
      const we = 1, Oe = Number(p.clientWidth || 0), Fe = Number(p.clientHeight || 0);
      e.__panoBootMinHeightActive && Oe > 0 && Fe > 0 && (e.__panoBootMinHeightActive = !1);
      const Ke = Math.max(64, Math.round(Oe * we)), et = Math.max(64, Math.round(Fe * we));
      (T <= 20 || Ke !== p.width || et !== p.height) && ao(e, "tick.resize", { w: Ke, h: et, cw: p.clientWidth, ch: p.clientHeight }), (p.width !== Ke || p.height !== et) && (p.width = Ke, p.height = et);
      const tt = p.getContext("2d");
      if (!tt) return;
      Mv(e, tt, { x: 0, y: 0, w: Ke, h: et }, i, wa), (At = e.setDirtyCanvas) == null || At.call(e, !0, !1), (h.needsDraw || ce) && (h.raf = requestAnimationFrame(I));
    }, R = (U) => {
      var ie, G, ce;
      $n(U, d) && U.button === 0 && ((ie = f.focus) == null || ie.call(f), (G = p.setPointerCapture) == null || G.call(p, U.pointerId), h.pointerId = U.pointerId, h.dragging = !0, p.style.cursor = "grabbing", M.startDrag(U.clientX, U.clientY, U.pointerId, performance.now()), (ce = p.hasPointerCapture) == null || ce.call(p, U.pointerId), z(), O());
    }, K = (U) => {
      if (h.dragging) {
        if ($n(U, d), !Of(U)) {
          Q(U);
          return;
        }
        M.moveDrag(U.clientX, U.clientY, "pano", performance.now()), O();
      }
    }, Q = (U, ie = "pointerup") => {
      h.dragging && ($n(U, d), h.dragging = !1, h.pointerId = null, p.style.cursor = "grab", M.endDrag(performance.now()), C == null || C(), O());
    }, te = (U) => Q(U, (U == null ? void 0 : U.type) || "pointerup"), _e = () => {
      h.dragging && (h.dragging = !1, h.pointerId = null, p.style.cursor = "grab", M.endDrag(performance.now()), C == null || C(), O());
    }, A = (U) => {
      var Fe, Ke, et;
      if (!$n(U, d)) return;
      const ie = zh(), G = document.activeElement, ce = Number(ta(e).fov || 100), we = M.applyWheelEvent(U), Oe = Number(ta(e).fov || 100);
      Number(U.deltaY || 0), we && O(), (Fe = U.preventDefault) == null || Fe.call(U), (Ke = U.stopPropagation) == null || Ke.call(U), (et = U.stopImmediatePropagation) == null || et.call(U), requestAnimationFrame(() => {
        var tt, ot;
        $h(ie), (ot = (tt = it == null ? void 0 : it.canvas) == null ? void 0 : tt.setDirty) == null || ot.call(tt, !0, !0);
      });
    };
    p.addEventListener("pointerdown", R), p.addEventListener("pointermove", K), p.addEventListener("pointerup", te), p.addEventListener("pointercancel", te), p.addEventListener("lostpointercapture", _e), p.addEventListener("wheel", A, { passive: !1, capture: !0 }), d.addEventListener("wheel", A, { passive: !1, capture: !0 }), x.listeners += 7;
    const ye = ["contextmenu", "click", "dblclick"];
    ye.forEach((U) => {
      d.addEventListener(U, N, { capture: !0 }), p.addEventListener(U, N, { capture: !0 }), x.listeners += 2;
    });
    const he = e.onRemoved, fe = e.onResize, $ = e.onExecuted, se = e.onConnectionsChange;
    return e.onExecuted = function(U) {
      ao(e, "onExecuted"), Ph(e, U), Na(e), Vn(e), O();
      const ie = $ ? $.apply(this, arguments) : void 0;
      return Vn(e), ie;
    }, e.onConnectionsChange = function() {
      return ao(e, "onConnectionsChange"), Na(e), Vn(e), O(), se ? se.apply(this, arguments) : void 0;
    }, e.onResize = function() {
      var ie;
      const U = fe ? fe.apply(this, arguments) : void 0;
      return this.__panoUserResized = !0, Ti(this, 150), O(), (ie = this.setDirtyCanvas) == null || ie.call(this, !0, !1), U;
    }, e.onRemoved = function() {
      var U, ie, G;
      return (ie = (U = e.__panoStandaloneModal) == null ? void 0 : U.dispose) == null || ie.call(U), e.__panoStandaloneModal = null, Ko(e), h.raf && (cancelAnimationFrame(h.raf), x.raf += 1), C == null || C(), p.removeEventListener("pointerdown", R), p.removeEventListener("pointermove", K), p.removeEventListener("pointerup", te), p.removeEventListener("pointercancel", te), p.removeEventListener("lostpointercapture", _e), p.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), x.listeners = Math.max(0, x.listeners - 7), ye.forEach((ce) => {
        d.removeEventListener(ce, N, !0), p.removeEventListener(ce, N, !0), x.listeners = Math.max(0, x.listeners - 2);
      }), Ef(e, b) && (x.widget += 1), (G = F == null ? void 0 : F.disconnect) == null || G.call(F), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = $, e.onConnectionsChange = se, Ii.unregister(e), { ...x }, e.onRemoved = he, he ? he.apply(this, arguments) : void 0;
    }, e.__panoDomRestore = () => {
      var U, ie;
      (ie = (U = e.__panoStandaloneModal) == null ? void 0 : U.dispose) == null || ie.call(U), e.__panoStandaloneModal = null, Ko(e), h.raf && (cancelAnimationFrame(h.raf), x.raf += 1), C == null || C(), p.removeEventListener("pointerdown", R), p.removeEventListener("pointermove", K), p.removeEventListener("pointerup", te), p.removeEventListener("pointercancel", te), p.removeEventListener("lostpointercapture", _e), p.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), x.listeners = Math.max(0, x.listeners - 7), ye.forEach((G) => {
        d.removeEventListener(G, N, !0), p.removeEventListener(G, N, !0), x.listeners = Math.max(0, x.listeners - 2);
      }), Ef(e, b) && (x.widget += 1), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = $, e.onConnectionsChange = se, e.onRemoved = he, { ...x }, fa(e);
    }, e.__panoPreviewHooked = !0, e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, e.__panoDomPreview = { widget: b, root: f, canvas: p, requestDraw: O, state: h }, O(), !0;
  } catch {
    return t.__noAutoFallback === !0 ? (Zo(e, "Node 2.0 preview unavailable"), !1) : (fa(e), !1);
  }
}
function Tv(e, t = {}) {
  Cv(e, t);
}
function Ev(e, t, n) {
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
  const f = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Hh(e) {
  return !!(e != null && e.prototype);
}
function Yl(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Dv(e, t = {}) {
  Hh(e) || Tv(e, {
    ...t,
    onOpen: Yl(e, t.onOpen)
  });
}
function Ov(e, t = {}) {
  if (!Hh(e)) {
    zf(e, {
      ...t,
      onOpen: Yl(e, t.onOpen)
    });
    return;
  }
  Ev(e, "cutout_preview", (n) => {
    zf(n, {
      ...t,
      onOpen: Yl(n, t.onOpen)
    });
  });
}
const nn = {
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
}, Jn = "pen";
function $f(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Rv(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), f = Math.max(1, Number(n || 8));
  function d(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((h) => {
      i.push(String(h || ""));
    }), !i.length)) return;
    const v = Number(b.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, v)) : a = i.length - 1;
  }
  function p(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > c && i.shift(), a = i.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      p(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = a - 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    redo() {
      const b = a + 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const b = i.length, v = Math.max(0, b - f), h = a >= 0 ? Math.max(0, Math.min(a, v)) : v, x = i.slice(h, h + f), M = a < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, a - h));
      return {
        version: 1,
        entries: x,
        index: M
      };
    },
    hydrate: d
  };
}
function rt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Fv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Lv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const c = rt(i.z_index ?? i.zIndex, t.length);
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
function zv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function $v(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = rt(e.t, 0), i = rt(e.widthScale, null), a = rt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const c = rt(e.u, null), f = rt(e.v, null);
    if (c == null || f == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, f)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const c = rt(e.u, null), f = rt(e.v, null);
    if (c == null || f == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: c,
      v: f,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function uo(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = $v(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function jv(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = uo(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = uo(e.points, t, 1);
  if (!c) return null;
  const f = uo(e.rawPoints, t, 1), d = uo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: f || c.map((p) => ({ ...p })),
    processedPoints: d || c.map((p) => ({ ...p }))
  };
}
function Vv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = zv(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = jv(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const c = rt(e.size, null), f = rt(e.opacity, null);
  if (c == null || f == null) return null;
  const d = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!d || !p) return null;
  const b = rt(e.radiusValue, null), v = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, rt(x.r, 0))),
      g: Math.max(0, Math.min(1, rt(x.g, 0))),
      b: Math.max(0, Math.min(1, rt(x.b, 0))),
      a: Math.max(0, Math.min(1, rt(x.a, 1)))
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
    opacity: Math.max(0, Math.min(1, f)),
    hardness: rt(e.hardness, null),
    flow: rt(e.flow, null),
    spacing: rt(e.spacing, null),
    createdAt: Math.trunc(rt(e.createdAt, 0)),
    color: h,
    radiusModel: v,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function jf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = Vv(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function Hv(e) {
  if (!e || typeof e != "object") return null;
  const t = rt(e.u0, null), n = rt(e.v0, null), i = rt(e.u1, null), a = rt(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const c = (d) => Math.max(0, Math.min(1, d)), f = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return f.u1 <= f.u0 || f.v1 <= f.v0 ? null : f;
}
function Uv(e) {
  const t = e || {};
  return {
    du: rt(t.du, 0) ?? 0,
    dv: rt(t.dv, 0) ?? 0,
    rot_deg: rt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, rt(t.scale, 1) ?? 1)
  };
}
function Bv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const c = Hv(e.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, rt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: Uv(e.transform)
  } : null;
}
function Kv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Bv(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function da(e) {
  const t = Fv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Lv(e.groups),
    paint: jf(e.paint, "paint"),
    mask: jf(e.mask, "mask"),
    raster_objects: Kv(e.raster_objects)
  };
}
function Vf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Gv(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Hf(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = Gv((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Wv(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ci({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Vf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, f) => Hf(c, f)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Vf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, f) => Hf(c, f)).filter(Boolean);
  return Ci({
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
function Ma(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function Qo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Yv(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Wr((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(h) {
    var x;
    return JSON.stringify({
      stateRevision: (h == null ? void 0 : h.stateRevision) || "",
      background: (h == null ? void 0 : h.background) || null,
      objects: Array.isArray((x = h == null ? void 0 : h.objectPass) == null ? void 0 : x.objects) ? h.objectPass.objects.map((M) => ({
        id: (M == null ? void 0 : M.id) || "",
        type: (M == null ? void 0 : M.type) || "",
        revision: (M == null ? void 0 : M.revision) || "",
        visible: (M == null ? void 0 : M.visible) !== !1,
        opacity: Number((M == null ? void 0 : M.opacity) ?? 1),
        zIndex: Number((M == null ? void 0 : M.zIndex) ?? 0),
        transform: (M == null ? void 0 : M.transform) || null,
        params: (M == null ? void 0 : M.params) || null
      })) : [],
      overlay: (h == null ? void 0 : h.overlay) || {}
    });
  }
  function f(h = {}) {
    const x = Wv(h), M = c(x);
    return a === M || !n.syncState(x) ? !1 : (i = x, a = M, !0);
  }
  function d(h = {}, x = {}) {
    if (!i) return null;
    const M = Ma(h), C = Qo(x);
    return n.renderToTarget(t, M, C);
  }
  function p(h, x, M = {}, C = {}) {
    if (!h || !x || !i) return !1;
    const N = Ma(M), z = Qo({
      ...C,
      width: Number((x == null ? void 0 : x.w) || (C == null ? void 0 : C.width) || 1),
      height: Number((x == null ? void 0 : x.h) || (C == null ? void 0 : C.height) || 1)
    });
    return n.renderToContext(h, x, N, z);
  }
  function b() {
    var h;
    i = null, a = "", (h = n.clearState) == null || h.call(n);
  }
  function v() {
    var h;
    b(), (h = n.dispose) == null || h.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: f,
    renderFrame: d,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: b,
    dispose: v
  };
}
function qv(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Xv(e, t = {}) {
  var p, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = Ma((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = Qo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const f = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return qv(c, f, d);
}
function Jv(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = Ma((n == null ? void 0 : n.view) || {}), f = !1, d = 0;
  function p() {
    const x = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), C = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), N = Qo({ width: x, height: M, dpr: C });
    return i.width = Math.max(1, Math.round(N.width * N.dpr)), i.height = Math.max(1, Math.round(N.height * N.dpr)), i.style.width = `${N.width}px`, i.style.height = `${N.height}px`, N;
  }
  function b() {
    if (f || !a) return !1;
    const x = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...x, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function v() {
    f || d || (d = requestAnimationFrame(() => {
      d = 0, b();
    }));
  }
  const h = typeof ResizeObserver == "function" ? new ResizeObserver(() => v()) : null;
  return h == null || h.observe(t), v(), {
    canvas: i,
    setView(x) {
      c = Ma(x || {}), v();
    },
    getView() {
      return { ...c };
    },
    present: b,
    requestRender: v,
    unmount() {
      f = !0, d && cancelAnimationFrame(d), h == null || h.disconnect(), i.remove();
    }
  };
}
function Zv(e = {}) {
  const t = Yv({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(wr(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, wr(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? wr(i.shot) : i == null ? void 0 : i.view;
      return Jv(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: wr(n.shot) } : n;
      return Xv(t, i);
    }
  };
}
function Xi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Qv(e = {}) {
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
function e1({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: f,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: p
}) {
  var T, I;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", v = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (R, K) => ({ index: K, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return v;
  const h = ((T = t.find((R) => a(e.paintColor, R.color))) == null ? void 0 : T.id) || "", x = !h, M = c(e.customPaintColor), C = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), N = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), z = e.brushSizes[N] ?? 10, O = p(), F = Array.from({ length: 8 }, (R, K) => e.customPaintHistory[K] || null);
  return {
    ...v,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: x,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...f(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: C,
    alphaText: `${C}%`,
    historyEntries: F.map((R, K) => ({
      index: K,
      color: R ? { cssColor: i(R, 1) } : null
    })),
    sizeValue: z,
    sizeText: String(z),
    sizeFill: `${Math.max(0, Math.min(100, (z - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function t1({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function n1({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: f,
  notes: d,
  visibilityRows: p,
  uiSettings: b,
  normalizeCoverageValue: v
}) {
  return {
    coverage: { value: v(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: f,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function r1({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: p,
  isExternalSticker: b,
  isStickerHidden: v,
  canRestoreSelectedToInitial: h,
  iconSet: x
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let M = [];
  if (n.length > 1)
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete }
    ];
  else if (i === "stroke")
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back }
    ], b(t) || (M.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: x.duplicate }), M.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: x.replace_image })), b(t)) {
      const T = h(), I = v(t);
      M.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: T ? "Back to initial position" : "Already at initial position",
        icon: x.back_initial,
        disabled: !T
      }), M.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: I ? "Show" : "Hide",
        tip: I ? "Show input image" : "Hide input image",
        icon: I ? x.eye : x.eye_dashed
      });
    }
    M.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? x.lock_open : x.lock_closed }), b(t) || M.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete });
  } else
    M = [
      {
        key: "aspect",
        kind: "aspect",
        icon: x.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((T) => ({ value: T, label: T, active: d === T }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: x.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete }
    ];
  const C = a.corners.map((T) => T.x), N = a.corners.map((T) => T.y), z = Math.min(...C), O = Math.max(...C), F = Math.max(...N);
  return {
    visible: !0,
    left: (z + O) * 0.5,
    top: F + 18,
    items: M,
    anchor: { minX: z, maxX: O, maxY: F }
  };
}
const De = Object.freeze({
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
}), i1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, a1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: i1(t[2])
})), o1 = {
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
}, Uf = Object.fromEntries(
  Object.entries(o1).map(([e, t]) => [e, {
    name: t.name,
    elements: a1(t.body)
  }])
), bn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = St(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Uf, i) ? Uf[i] : null;
    });
    return (i, a) => n.value ? (Ne(), Pe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: gt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Ne(!0), Pe(Xe, null, $t(n.value.elements, (c, f) => (Ne(), Pe(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${c.tag}-${f}`
      }, [
        c.tag === "path" ? (Ne(), Pe("path", vr({
          key: 0,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "circle" ? (Ne(), Pe("circle", vr({
          key: 1,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "rect" ? (Ne(), Pe("rect", vr({
          key: 2,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "line" ? (Ne(), Pe("line", vr({
          key: 3,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polyline" ? (Ne(), Pe("polyline", vr({
          key: 4,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polygon" ? (Ne(), Pe("polygon", vr({
          key: 5,
          ref_for: !0
        }, c.attrs), null, 16)) : Et("", !0)
      ], 64))), 128))
    ], 2)) : Et("", !0);
  }
}, Gr = {
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
    return (i, a) => (Ne(), Ei(P0(e.tag), vr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: kd(() => [
        Ge(bn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, s1 = { class: "pano-floating-right" }, l1 = ["data-settled"], c1 = ["data-ready", "data-settled"], u1 = ["aria-label", "data-tip"], f1 = {
  key: 1,
  class: "pano-camera-preview-label"
}, d1 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Pe(Xe, null, [
      le("div", s1, [
        (Ne(!0), Pe(Xe, null, $t(e.buttons, (i) => (Ne(), Ei(Gr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      uc(le("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        le("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: kt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = le("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ne(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ge(bn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, u1)) : Et("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ne(), Pe("div", f1, yt(e.preview.label || "Preview unavailable"), 1)) : Et("", !0)
        ], 14, c1)
      ], 8, l1), [
        [gc, e.preview.visible]
      ])
    ], 64));
  }
}, h1 = ["aria-label"], p1 = { class: "pano-canvas-confirm-title" }, m1 = { class: "pano-canvas-confirm-text" }, g1 = { class: "pano-canvas-confirm-actions" }, b1 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, y1 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Do(null), i = /* @__PURE__ */ Do(null);
    let a = null;
    function c() {
      const h = i.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function f(h) {
      const x = i.value;
      if (!x) return;
      const M = x.querySelector(`[data-action='${h}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function d() {
      var N;
      const h = i.value;
      if (!h) return;
      const x = h.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const C = c()[0] || h;
      (N = C == null ? void 0 : C.focus) == null || N.call(C);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(h) {
      var O;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), f("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const x = c(), M = i.value;
      if (!x.length) {
        h.preventDefault(), (O = M == null ? void 0 : M.focus) == null || O.call(M);
        return;
      }
      const C = x[0], N = x[x.length - 1], z = document.activeElement;
      if (h.shiftKey) {
        (z === C || z === M || !(M != null && M.contains(z))) && (h.preventDefault(), N.focus());
        return;
      }
      (z === N || !(M != null && M.contains(z))) && (h.preventDefault(), C.focus());
    }
    function v(h) {
      h.target === n.value && f("confirm-cancel");
    }
    return Ni(() => t.model.visible, (h, x) => {
      if (h) {
        a = document.activeElement, lc(() => {
          d();
        });
        return;
      }
      x && p();
    }, { immediate: !0 }), dc(() => {
      p();
    }), (h, x) => e.model.visible === !0 ? (Ne(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: ah(v, ["self"])
    }, [
      le("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        le("div", p1, yt(e.model.title), 1),
        le("div", m1, yt(e.model.text), 1),
        le("div", g1, [
          x[0] || (x[0] = le("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          le("button", b1, yt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, h1)
    ], 512)) : Et("", !0);
  }
}, v1 = ["data-paint-pane"], _1 = ["hidden"], x1 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], w1 = ["aria-pressed", "disabled"], S1 = ["hidden"], N1 = { class: "pano-paint-color-pop-head" }, M1 = { class: "pano-paint-color-field" }, k1 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, P1 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, A1 = { class: "pano-paint-color-field" }, C1 = { class: "pano-paint-alpha-wrap" }, I1 = ["value"], T1 = { "data-paint-alpha-value": "" }, E1 = ["hidden"], D1 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, O1 = ["data-paint-history-index", "aria-label", "disabled"], R1 = ["data-paint-footer"], F1 = ["data-paint-group"], L1 = ["hidden"], z1 = ["value", "disabled"], $1 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, j1 = ["hidden"], V1 = {
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
    return (i, a) => (Ne(), Pe("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ne(!0), Pe(Xe, null, $t(e.panes, (c) => {
        var f;
        return Ne(), Pe("div", {
          key: c.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Ne(), Pe("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ne(!0), Pe(Xe, null, $t(e.paintSwatches, (d) => (Ne(), Pe("button", {
              key: d.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: kt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, x1))), 128)),
            le("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: kt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, w1),
            le("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: kt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              le("div", N1, [
                le("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: kt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = le("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              le("div", M1, [
                le("div", k1, [
                  le("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: kt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                le("div", P1, [
                  le("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: kt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              le("label", A1, [
                a[1] || (a[1] = le("span", null, "Opacity", -1)),
                le("div", C1, [
                  le("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, I1),
                  le("span", T1, yt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              le("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                le("div", D1, [
                  (Ne(!0), Pe(Xe, null, $t(e.state.historyEntries || [], (d) => (Ne(), Pe("button", {
                    key: d.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: kt(n(d.color))
                  }, null, 14, O1))), 128))
                ])
              ], 8, E1)
            ], 12, S1)
          ], 10, _1)) : Et("", !0),
          le("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            le("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Ne(!0), Pe(Xe, null, $t(c.tools, (d) => {
                var p;
                return Ne(), Ei(Gr, {
                  key: `${c.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[c.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, F1),
            le("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              le("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: kt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, z1),
              le("span", $1, yt(e.state.sizeText || "10"), 1)
            ], 10, L1),
            le("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((f = e.state.clearVisible) == null ? void 0 : f[c.key]) ?? !c.clearHidden)
            }, [
              Ge(Gr, {
                icon: jr(De).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, j1)
          ], 8, R1)
        ], 10, v1);
      }), 128))
    ], 2));
  }
}, H1 = {
  key: 0,
  class: "pano-cutout-menu"
}, U1 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, B1 = ["data-aspect"], K1 = ["data-action", "aria-label", "data-tip", "disabled"], G1 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: kt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ne(!0), Pe(Xe, null, $t(e.model.items || [], (i) => (Ne(), Pe(Xe, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Ne(), Pe("div", H1, [
          le("button", U1, [
            Ge(bn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          le("div", {
            class: gt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ne(!0), Pe(Xe, null, $t(i.choices || [], (a) => (Ne(), Pe("button", {
              key: a.value,
              class: gt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, yt(a.label), 11, B1))), 128))
          ], 2)
        ])) : (Ne(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          Ge(bn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, K1))
      ], 64))), 128))
    ], 4));
  }
}, W1 = {
  class: "pano-side",
  "data-side": ""
}, Y1 = { class: "pano-side-head" }, q1 = { class: "pano-side-title" }, X1 = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, J1 = {
  key: 0,
  class: "pano-side-scroll"
}, Z1 = { class: "pano-inspector" }, Q1 = { class: "pano-ui-row pano-coverage-row" }, e_ = ["data-selected"], t_ = ["aria-pressed", "disabled"], n_ = ["aria-pressed", "disabled"], r_ = {
  key: 0,
  class: "pano-section-title"
}, i_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, a_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, o_ = ["disabled"], s_ = { class: "pano-picker-label" }, l_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, c_ = ["hidden"], u_ = ["data-selection-id"], f_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, d_ = {
  key: 2,
  class: "pano-state-actions"
}, h_ = ["disabled"], p_ = ["data-key"], m_ = ["min", "max", "step", "value", "disabled", "data-param-key"], g_ = ["min", "max", "step", "value", "disabled", "data-param-key"], b_ = { class: "pano-visibility-section" }, y_ = { class: "pano-visibility-stack" }, v_ = ["data-visibility-row"], __ = { class: "pano-visibility-name" }, x_ = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, w_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], S_ = ["open"], N_ = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, M_ = { class: "pano-ui-settings-body" }, k_ = { class: "pano-ui-row" }, P_ = ["data-selected"], A_ = ["aria-pressed"], C_ = ["aria-pressed"], I_ = { class: "pano-ui-row" }, T_ = ["data-selected"], E_ = ["aria-pressed"], D_ = ["aria-pressed"], O_ = { class: "pano-ui-row" }, R_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, F_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, L_ = { class: "pano-picker-label" }, z_ = ["hidden"], $_ = ["data-quality"], j_ = {
  key: 1,
  class: "pano-side-footer"
}, V_ = ["data-action"], H_ = {
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
    function a(c, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    return (c, f) => {
      var d, p, b, v, h;
      return Ne(), Pe("div", W1, [
        le("div", Y1, [
          le("div", q1, [
            le("span", X1, [
              Ge(bn, {
                icon: jr(De).globe
              }, null, 8, ["icon"])
            ]),
            le("span", null, yt(e.nodeTitle), 1)
          ]),
          f[0] || (f[0] = le("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[13] || (f[13] = le("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Ne(), Pe("div", J1, [
          le("div", Z1, [
            f[12] || (f[12] = le("div", { class: "pano-section-title" }, [
              le("span", null, "Scene")
            ], -1)),
            le("div", Q1, [
              f[1] || (f[1] = le("label", null, "Coverage", -1)),
              le("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                le("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, t_),
                le("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "180", 8, n_)
              ], 8, e_)
            ]),
            e.model.transformTitle !== !1 ? (Ne(), Pe("div", r_, [...f[2] || (f[2] = [
              le("span", null, "Transform", -1)
            ])])) : Et("", !0),
            e.model.selectionPicker ? (Ne(), Pe("div", i_, [
              le("label", null, yt(e.model.selectionPicker.label), 1),
              le("div", a_, [
                le("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  le("span", s_, [
                    e.model.selectionPicker.currentIcon ? (Ne(), Pe("span", l_, [
                      Ge(bn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    le("span", null, yt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[3] || (f[3] = le("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, o_),
                le("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ne(!0), Pe(Xe, null, $t(e.model.selectionPicker.items || [], (x) => (Ne(), Pe("button", {
                    key: x.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: x.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": x.id
                  }, [
                    x.icon ? (Ne(), Pe("span", f_, [
                      Ge(bn, {
                        icon: x.icon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    le("span", null, yt(x.label), 1)
                  ], 10, u_))), 128))
                ], 8, c_)
              ])
            ])) : Et("", !0),
            e.model.copyStateButton ? (Ne(), Pe("div", d_, [
              le("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ge(bn, {
                  icon: jr(De).copy
                }, null, 8, ["icon"]),
                le("span", null, yt(e.model.copyStateButton.label), 1)
              ], 8, h_)
            ])) : Et("", !0),
            le("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ne(!0), Pe(Xe, { key: 0 }, $t(e.model.notes, (x) => (Ne(), Pe("div", {
                key: x,
                class: "pano-param-note"
              }, yt(x), 1))), 128)) : (Ne(!0), Pe(Xe, { key: 1 }, $t(e.model.params || [], (x) => (Ne(), Pe("div", {
                key: x.key,
                class: "pano-field",
                "data-key": x.key
              }, [
                le("label", null, yt(x.label), 1),
                le("input", {
                  type: "range",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.value,
                  disabled: a(x, e.model),
                  style: kt(i(x)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": x.key
                }, null, 12, m_),
                le("input", {
                  type: "number",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.displayValue,
                  disabled: a(x, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": x.key
                }, null, 8, g_)
              ], 8, p_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ne(), Pe(Xe, { key: 3 }, [
              f[5] || (f[5] = le("div", { class: "pano-divider" }, null, -1)),
              le("div", b_, [
                f[4] || (f[4] = le("div", { class: "pano-section-title" }, [
                  le("span", null, "Layers")
                ], -1)),
                le("div", y_, [
                  (Ne(!0), Pe(Xe, null, $t(e.model.visibilityRows, (x) => (Ne(), Pe("div", {
                    key: x.key,
                    class: gt(["pano-visibility-row", { "is-hidden": x.visible === !1, "is-disabled": x.enabled === !1 }]),
                    "data-visibility-row": x.key
                  }, [
                    le("span", __, [
                      le("span", x_, [
                        Ge(bn, {
                          icon: x.icon
                        }, null, 8, ["icon"])
                      ]),
                      le("span", null, yt(x.label), 1)
                    ]),
                    le("button", {
                      class: gt(["pano-visibility-toggle", { active: x.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": x.key,
                      "aria-label": x.ariaLabel,
                      "aria-pressed": x.visible === !0 ? "true" : "false",
                      "data-tip": x.tip,
                      disabled: x.enabled === !1
                    }, [
                      Ge(bn, {
                        icon: x.visible === !0 ? jr(De).eye : jr(De).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, w_)
                  ], 10, v_))), 128))
                ])
              ])
            ], 64)) : Et("", !0),
            e.model.uiSettings ? (Ne(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              le("summary", null, [
                f[6] || (f[6] = le("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                le("span", N_, [
                  Ge(bn, {
                    icon: jr(De).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              le("div", M_, [
                le("div", k_, [
                  f[7] || (f[7] = le("label", null, "Drag X", -1)),
                  le("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    le("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, A_),
                    le("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, C_)
                  ], 8, P_)
                ]),
                le("div", I_, [
                  f[8] || (f[8] = le("label", null, "Drag Y", -1)),
                  le("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    le("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, E_),
                    le("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, D_)
                  ], 8, T_)
                ]),
                le("div", O_, [
                  f[10] || (f[10] = le("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  le("div", R_, [
                    le("button", F_, [
                      le("span", L_, yt(e.model.uiSettings.qualityLabel), 1),
                      f[9] || (f[9] = le("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    le("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ne(!0), Pe(Xe, null, $t(e.model.uiSettings.qualityOptions || [], (x) => (Ne(), Pe("button", {
                        key: x.value,
                        type: "button",
                        class: gt(["pano-picker-item", { active: x.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": x.value
                      }, yt(x.label), 11, $_))), 128))
                    ], 8, z_)
                  ])
                ]),
                f[11] || (f[11] = le("div", { class: "pano-ui-row" }, [
                  le("span"),
                  le("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, S_)) : Et("", !0)
          ])
        ])) : Et("", !0),
        (e.model.footerButtons || []).length ? (Ne(), Pe("div", j_, [
          (Ne(!0), Pe(Xe, null, $t(e.model.footerButtons, (x) => (Ne(), Pe("button", {
            key: x.action,
            class: gt(["pano-btn", { "pano-btn-primary": x.primary === !0 }]),
            type: "button",
            "data-action": x.action
          }, yt(x.label), 11, V_))), 128))
        ])) : Et("", !0)
      ]);
    };
  }
}, U_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Pe("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: kt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, yt(e.model.text || ""), 7));
  }
}, B_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, K_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ne(), Pe("div", B_, [
      (Ne(!0), Pe(Xe, null, $t(e.buttons, (i) => uc((Ne(), Ei(Gr, {
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
        [gc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, G_ = ["data-video-ready"], W_ = { class: "pano-video-transport-shell" }, Y_ = { class: "pano-video-controls-left" }, q_ = { class: "pano-video-filmstrip" }, X_ = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, J_ = ["src", "onLoad"], Z_ = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Q_ = ["max", "value", "disabled"], ex = { class: "pano-video-controls-right" }, tx = ["data-has-audio"], nx = { class: "pano-video-volume-pop" }, rx = ["value", "disabled"], ix = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause" : "Play";
    }), i = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause video" : "Play video";
    }), a = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? De.pause : De.play;
    }), c = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop" : "Disable loop";
    }), f = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), d = St(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? De.loop_off : De.loop;
    }), p = St(() => {
      var R, K;
      return ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((K = t.state) == null ? void 0 : K.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = St(() => {
      var R, K, Q;
      return ((R = t.state) == null ? void 0 : R.hasAudio) !== !0 ? De.volume : ((K = t.state) == null ? void 0 : K.muted) === !0 || Number(((Q = t.state) == null ? void 0 : Q.volume) ?? 1) <= 0 ? De.volume_muted : De.volume2;
    }), v = St(() => {
      var R;
      return Math.max(0, Math.min(100, Number(((R = t.state) == null ? void 0 : R.progressPct) || 0)));
    }), h = St(() => ({ left: `${v.value}%` })), x = St(() => {
      var te, _e;
      const R = (te = t.state) == null ? void 0 : te.volumePct, K = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, Q = Number(R ?? K ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Q))}%`
      };
    }), M = St(() => {
      var Q, te;
      const K = [
        String(((Q = t.state) == null ? void 0 : Q.currentTimeLabel) || "0:00"),
        String(((te = t.state) == null ? void 0 : te.durationLabel) || "0:00")
      ].reduce((_e, A) => Math.max(_e, A.length), 4);
      return `${Math.max(4, K)}ch`;
    }), C = St(() => ({ "--pano-video-time-ch": M.value })), N = St(() => {
      var Q, te;
      const R = Array.isArray((Q = t.state) == null ? void 0 : Q.thumbnails) ? t.state.thumbnails : [];
      if (R.length) return R;
      const K = Math.max(7, Number(((te = t.state) == null ? void 0 : te.thumbnailCount) || 9));
      return Array.from({ length: K }, (_e, A) => ({
        id: `placeholder-${A}`,
        src: "",
        label: ""
      }));
    }), z = /* @__PURE__ */ Do(/* @__PURE__ */ new Set()), O = (R) => String((R == null ? void 0 : R.id) || (R == null ? void 0 : R.src) || (R == null ? void 0 : R.label) || ""), F = (R) => z.value.has(O(R)), T = (R) => {
      const K = new Set(z.value);
      K.add(O(R)), z.value = K;
    };
    Ni(N, (R) => {
      const K = new Set(R.map(O)), Q = /* @__PURE__ */ new Set();
      for (const te of z.value)
        K.has(te) && Q.add(te);
      z.value = Q;
    }, { immediate: !0 });
    const I = St(() => {
      var R;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((R = t.state) == null ? void 0 : R.shellMaxWidthPx) || 640))}px`
      };
    });
    return (R, K) => (Ne(), Pe("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: kt(I.value)
    }, [
      K[1] || (K[1] = le("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      le("div", W_, [
        le("div", Y_, [
          Ge(Gr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          le("div", {
            class: "pano-video-time pano-video-time-start",
            style: kt(C.value)
          }, yt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        le("div", q_, [
          le("div", X_, [
            (Ne(!0), Pe(Xe, null, $t(N.value, (Q) => (Ne(), Pe("div", {
              key: O(Q),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !Q.src,
                "is-loaded": Q.src && F(Q)
              }])
            }, [
              Q.src ? (Ne(), Pe("img", {
                key: 0,
                src: Q.src,
                alt: "",
                draggable: "false",
                onLoad: (te) => T(Q)
              }, null, 40, J_)) : (Ne(), Pe("span", Z_))
            ], 2))), 128))
          ]),
          le("div", {
            class: "pano-video-playhead",
            style: kt(h.value),
            "aria-hidden": "true"
          }, [...K[0] || (K[0] = [
            le("span", { class: "pano-video-playhead-line" }, null, -1),
            le("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          le("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, Q_)
        ]),
        le("div", ex, [
          le("div", {
            class: "pano-video-time pano-video-time-end",
            style: kt(C.value)
          }, yt(e.state.durationLabel || "0:00"), 5),
          Ge(Gr, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: c.value,
            tip: f.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          le("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            le("div", nx, [
              le("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: kt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, rx)
            ]),
            Ge(Gr, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, tx)
        ])
      ])
    ], 14, G_));
  }
}, ax = { class: "pano-floating-top" }, ox = ["data-selected", "data-view-count"], sx = ["data-view", "aria-pressed", "aria-label", "disabled"], lx = { class: "label" }, cx = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Ne(), Pe("div", ax, [
        le("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ne(!0), Pe(Xe, null, $t(e.buttons, (a) => uc((Ne(), Pe("button", {
            key: a.key,
            class: gt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Ge(bn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            le("span", lx, yt(a.label), 1)
          ], 10, sx)), [
            [gc, a.visible !== !1]
          ])), 128))
        ], 8, ox)
      ]);
    };
  }
};
function Uh(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: De.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: De.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: De.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: De.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: De.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: De.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: De.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: De.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: De.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: De.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: De.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: De.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: De.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: De.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: De.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: De.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: De.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: De.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: De.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: De.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: De.lasso_tool }
        ]
      }
    ]
  };
}
const ux = ["aria-label"], fx = { class: "pano-stage-wrap" }, dx = {
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
    let a = "", c = !1, f = null;
    const d = /* @__PURE__ */ Do(null), p = St(() => n.readOnly === !0), b = St(() => n.shellPreset || Uh(n.type)), v = St(() => {
      var T;
      const F = Array.isArray((T = b.value) == null ? void 0 : T.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return p.value && F.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: De.fullscreen
      }), F;
    });
    function h() {
      const F = d.value;
      return F ? Array.from(F.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function x() {
      var I;
      const T = h()[0] || d.value;
      (I = T == null ? void 0 : T.focus) == null || I.call(T);
    }
    function M() {
      var F;
      f != null && f.isConnected && ((F = f.focus) == null || F.call(f)), f = null;
    }
    function C(F) {
      var T, I, R, K;
      if (!F.defaultPrevented) {
        if (F.key === "Tab") {
          const Q = h();
          if (!Q.length) {
            F.preventDefault(), (I = (T = d.value) == null ? void 0 : T.focus) == null || I.call(T);
            return;
          }
          const te = Q[0], _e = Q[Q.length - 1], A = document.activeElement;
          if (F.shiftKey) {
            (A === te || A === d.value || !((R = d.value) != null && R.contains(A))) && (F.preventDefault(), _e.focus());
            return;
          }
          (A === _e || !((K = d.value) != null && K.contains(A))) && (F.preventDefault(), te.focus());
          return;
        }
        F.key === "Escape" && i("close");
      }
    }
    function N() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function z() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function O(F) {
      document.removeEventListener("keydown", C), F ? (f || (f = document.activeElement), N(), document.addEventListener("keydown", C), lc(() => {
        x();
      })) : (z(), M());
    }
    return Ed(() => {
      O(n.open);
    }), dc(() => {
      z(), document.removeEventListener("keydown", C), M();
    }), Ni(() => n.open, (F) => {
      O(F);
    }), (F, T) => e.open ? (Ne(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[0] || (T[0] = ah((I) => i("close"), ["self"]))
    }, [
      le("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        le("div", fx, [
          T[1] || (T[1] = ab('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          p.value ? Et("", !0) : (Ne(), Pe(Xe, { key: 0 }, [
            Ge(K_, {
              buttons: e.uiState.toolButtons || b.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ge(V1, {
              "paint-swatches": e.paintSwatches,
              panes: b.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ge(ix, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ge(cx, {
            buttons: e.uiState.viewButtons || b.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ge(d1, {
            buttons: e.uiState.floatingButtons || v.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ge(G1, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ge(U_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ge(y1, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Et("", !0) : (Ne(), Ei(H_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, ux)
    ])) : Et("", !0);
  }
}, es = "state_json", Lr = "sticker_image_1", wl = "external_image", Sl = "pano_sticker_input_images", To = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Tt = Math.PI / 180, _r = 180 / Math.PI, ts = 24, hx = 4, px = 4, fo = /* @__PURE__ */ new Map(), Bf = /* @__PURE__ */ new Map(), ho = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), mx = 12;
function Lt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function gx(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function bx(e) {
  return 1 - Math.pow(1 - e, 3);
}
function yx(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = xr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (xr.delete(t), xr.set(t, n), n);
}
function vx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (xr.delete(n), xr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); xr.size > mx; ) {
      const a = xr.keys().next().value;
      if (!a) break;
      xr.delete(a);
    }
}
function _x(e) {
  return e * e * e;
}
function Hn(e, t, n) {
  return { x: e, y: t, z: n };
}
function po(e, t) {
  return Hn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function mo(e, t) {
  return Hn(e.x * t, e.y * t, e.z * t);
}
function kn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function go(e, t) {
  return Hn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function pi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const n = e * Tt, i = t * Tt, a = Math.cos(i);
  return Hn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function bo(e) {
  return {
    yaw: zt(Math.atan2(e.x, e.z) * _r),
    pitch: q(Math.asin(q(e.y, -1, 1)) * _r, -90, 90)
  };
}
function Zn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, f = t[i].y, d = t[a].x, p = t[a].y;
    f > e.y != p > e.y && e.x < (d - c) * (e.y - f) / (p - f || 1e-6) + c && (n = !n);
  }
  return n;
}
function br(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Nl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), f = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return br(e, t);
  const p = q((c * i + f * a) / d, 0, 1), b = Number(t.x || 0) + i * p, v = Number(t.y || 0) + a * p, h = Number(e.x || 0) - b, x = Number(e.y || 0) - v;
  return h * h + x * x;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function On(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function xx(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let yo = { fillStyle: "", url: "" };
function wx(e, t, n) {
  if (yo.url && yo.fillStyle === String(e || ""))
    return yo.url;
  const i = xx(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ts}" height="${ts}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return yo = { fillStyle: String(e || ""), url: i }, i;
}
function Eo(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function fn(e) {
  return {
    r: q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Kt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Sx(e) {
  return To.some((t) => Eo(e, t.color));
}
function Ml(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = q(Number(t), 0, 1), c = q(Number(n), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const f = Math.floor(i * 6), d = i * 6 - f, p = c * (1 - a), b = c * (1 - d * a), v = c * (1 - (1 - d) * a);
  switch (f % 6) {
    case 0:
      return { r: c, g: v, b: p };
    case 1:
      return { r: b, g: c, b: p };
    case 2:
      return { r: p, g: c, b: v };
    case 3:
      return { r: p, g: b, b: c };
    case 4:
      return { r: v, g: p, b: c };
    default:
      return { r: c, g: p, b };
  }
}
function kl(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), f = a - c;
  let d = 0;
  f > 1e-6 && (a === t ? d = ((n - i) / f + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / f + 2) / 6 : d = ((t - n) / f + 4) / 6);
  const p = a <= 1e-6 ? 0 : f / a;
  return { h: d, s: p, v: a };
}
function Nx(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Kf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Mx(e, t) {
  const n = Kf(e, 1), i = Kf(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), f = Math.max(1, Math.round(i * a)), d = (h, x) => x ? d(x, h % x) : h, p = d(c, f) || 1, b = Math.max(1, Math.round(c / p)), v = Math.max(1, Math.round(f / p));
  return `${b}:${v}`;
}
function na(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Tt, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Tt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function kx(e) {
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
function Vr(e) {
  const t = na(e);
  return kx(t) || Mx(t, 1);
}
function Bh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Vr(t), t;
}
function Ji(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Vr(e);
}
let vo = null;
function Px() {
  return vo || (vo = new Promise((e) => {
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
  }), vo);
}
const Kh = "pano_suite.ui_settings.v1", Gh = "pano_suite.node_grid_visibility.v1";
let yi = null, Rn = null, _o = { text: null, parsed: null };
function ha(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Ax() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Kh)) || "").trim();
    if (!t) return yi ? ha(yi) : null;
    const n = JSON.parse(t), i = ha(n);
    return yi = i, i;
  } catch {
    return yi ? ha(yi) : null;
  }
}
function Cx(e) {
  var n;
  const t = ha(e);
  yi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Kh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Wh() {
  var e;
  if (Rn && typeof Rn == "object")
    return Rn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Gh)) || "").trim();
    if (!t)
      return Rn = {}, Rn;
    const n = JSON.parse(t);
    return Rn = n && typeof n == "object" ? n : {}, Rn;
  } catch {
    return Rn = {}, Rn;
  }
}
function Ix(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Wh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Tx(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Wh();
  i[n] = !!t, Rn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Gh, JSON.stringify(i));
  } catch {
  }
}
function Ex(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Dx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Ox(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Gf(e) {
  const { paintCount: t, maskCount: n } = Ox(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, c = 0;
  return i.forEach((f) => {
    String((f == null ? void 0 : f.layerKind) || "paint") === "mask" ? c += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: c,
    totalPaintCount: t + a,
    totalMaskCount: n + c
  };
}
function mi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Wf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Rx(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Bh(t)) : [];
}
function Fx(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Ax(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Lt(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: da(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, f = String(e || "").trim();
  if (!f) return c;
  try {
    let d = null;
    if (_o.text === f ? d = _o.parsed : (d = JSON.parse(f), _o = { text: f, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return c;
    const p = {
      ...c,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Ex(d.assets),
      stickers: Dx(d.stickers),
      shots: Rx(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: da(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var v;
          const b = String(((v = d.ui_settings) == null ? void 0 : v.preview_quality) || "balanced");
          return b === "draft" || b === "balanced" || b === "high" ? b : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...c.active }
    };
    return a && (p.ui_settings = ha({ ...p.ui_settings, ...a })), p.output_preset = Xl(t, Number(p.output_preset || c.output_preset)), p.bg_color = String(n || p.bg_color || c.bg_color), p.coverage = Lt(i), delete p.editor_history, p;
  } catch {
    return _o = { text: f, parsed: null }, c;
  }
}
function yn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Ic(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = yn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, f, d, p, b, v, h, x, M, C;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (p = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || p.call(d), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), (h = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || h.call(v, !0, !0), (C = (M = (x = Sr) == null ? void 0 : x.canvas) == null ? void 0 : M.setDirty) == null || C.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Lx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Yf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function zx(e) {
  var M, C, N, z, O;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = yn(e, "coverage"), n = yn(e, "bg_color"), i = yn(e, es), a = yn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), f = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && Lx(c) && (Yf(f) || f === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let b = "360";
  if (Yf(f))
    try {
      const F = JSON.parse(f);
      b = String(Lt(F == null ? void 0 : F.coverage));
    } catch {
      b = "360";
    }
  const v = c, h = f, x = d;
  t.value = b, (M = t.callback) == null || M.call(t, b), n.value = v, (C = n.callback) == null || C.call(n, v), i.value = h, (N = i.callback) == null || N.call(i, h), a && (a.value = x, (z = a.callback) == null || z.call(a, x)), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function $x(e, t) {
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
function jx(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, f;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (f = i.parentEl) != null && f.style && (i.parentEl.style.display = "none")));
  });
}
function ql(e, t, n) {
  var c, f;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (f = a.parentEl) != null && f.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function xo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Xl(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Yh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Vx(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function qh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Hx(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Vx(e == null ? void 0 : e.graph, n)), i;
}
function ka(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = vn) == null ? void 0 : a.apiURL) == "function" ? vn.apiURL(i) : i;
}
function Ux(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Bx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function Kx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Xh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Ux(t)) return [t];
  const { filename: n, subfolder: i } = Bx(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => ka({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Kx([...a, t]);
}
function Gx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? ka({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function pa(e) {
  var i;
  const t = (i = Sr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function qr(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return qr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return ka({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = qr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ka(e);
}
function Wx(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (t >= 0 && t < c.length && i.push(c[t]), i.push(...c));
  return i;
}
function Pl(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = qr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function qf(e, t, n, i = null) {
  var h;
  const a = pa(e == null ? void 0 : e.id), c = Array.isArray((h = a == null ? void 0 : a.ui) == null ? void 0 : h[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], f = Array.isArray(c) && c.length ? c[0] : null, d = qr(f);
  if (!d) return null;
  const p = `__ui__${t}`, b = n.get(p);
  if (b && b.__panoSrc === d) return b;
  const v = new Image();
  return v.__panoSrc = d, v.onload = () => {
    typeof i == "function" && i(v);
  }, v.src = d, n.set(p, v), v;
}
function Yx(e, t) {
  var F, T;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((I) => String((I == null ? void 0 : I.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[a], f = c == null ? void 0 : c.link;
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const d = Yh(e.graph, f), { originId: p, originSlot: b } = qh(d);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const v = Hx(e, a, p), h = Number(b || 0);
  if (!v) return { src: "", sourceType: "", inputName: n };
  let x = [];
  try {
    x = typeof ((F = Sr) == null ? void 0 : F.getNodeImageUrls) == "function" ? Sr.getNodeImageUrls(v) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length) {
    const I = [];
    h >= 0 && h < x.length && I.push(x[h]), I.push(...x);
    const R = Pl(I);
    if (R.length) return { src: R[0], srcCandidates: R, sourceType: "appNodeImageUrls", inputName: n };
  }
  const M = pa((v == null ? void 0 : v.id) ?? p), C = Wx(M, h), N = Pl(C);
  if (N.length) return { src: N[0], srcCandidates: N, sourceType: "nodeOutputs", inputName: n };
  const z = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
  if (z.length) {
    const I = [];
    h >= 0 && h < z.length && I.push(z[h]), I.push(...z);
    const R = Pl(I);
    if (R.length) return { src: R[0], srcCandidates: R, sourceType: "nodeImgs", inputName: n };
  }
  const O = (T = v == null ? void 0 : v.widgets) == null ? void 0 : T.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image");
  if (O) {
    let I = qr(O.value);
    if (I && !I.includes("/") && !I.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (I = vn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`)), I) return { src: I, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function qx(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const c = Xh(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = String(t || "image"), d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  const p = new Image(), b = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(f, b);
  let v = -1;
  const h = () => {
    var M, C;
    if (v += 1, v >= c.length) {
      try {
        (C = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || C.call(M, f);
      } catch {
      }
      return;
    }
    const x = c[v];
    b.resolvedSrc = x, p.src = x;
  };
  return p.onload = () => {
    var x;
    i == null || i(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0);
  }, p.onerror = () => {
    var x, M;
    if (v + 1 < c.length) {
      h();
      return;
    }
    try {
      (M = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.delete) == null || M.call(x, f);
    } catch {
    }
  }, h(), p;
}
function Xx(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((C) => String(C || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), f = a.join(`
`), d = e.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === f && d.img) return d.img;
  const p = [], b = /* @__PURE__ */ new Set();
  if (a.forEach((C) => {
    Xh(C).forEach((N) => {
      const z = String(N || "").trim();
      !z || b.has(z) || (b.add(z), p.push(z));
    });
  }), !p.length) return null;
  const v = new Image(), h = { srcRaw: f, resolvedSrc: "", img: v };
  e.__panoLinkedInputImageCache.set(c, h);
  let x = -1;
  const M = () => {
    var N, z;
    if (x += 1, x >= p.length) {
      try {
        (z = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || z.call(N, c);
      } catch {
      }
      return;
    }
    const C = p[x];
    h.resolvedSrc = C, v.src = C;
  };
  return v.onload = () => {
    var C;
    i == null || i(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0);
  }, v.onerror = () => {
    var C, N;
    if (x + 1 < p.length) {
      M();
      return;
    }
    try {
      (N = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || N.call(C, c);
    } catch {
    }
  }, M(), v;
}
function Jh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = Yx(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Al(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = Jh(e, a), f = String(i || a.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return Xx(e, f, d, n);
  const p = String((c == null ? void 0 : c.src) || "").trim();
  return p ? qx(e, f, p, n) : null;
}
async function ma(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, f = $x(e, t);
  await Px();
  const d = yn(e, "output_preset"), p = yn(e, "coverage"), b = yn(e, "bg_color"), v = yn(e, es), h = Fx(
    String((v == null ? void 0 : v.value) || ""),
    Xl(d == null ? void 0 : d.value, 2048),
    String((b == null ? void 0 : b.value) || "#00ff00"),
    Lt(p == null ? void 0 : p.value)
  );
  e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = 0, t === "cutout" && (h.shots = Array.isArray(h.shots) ? h.shots.slice(0, 1) : [], h.shots.length || (h.active.selected_shot_id = null));
  const x = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(h.shots) ? h.shots : [], o = String(((s = h == null ? void 0 : h.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, M = x ? au(x, !1) : { width: 220, height: 132 }, C = Uh(t), N = /* @__PURE__ */ ls({
    viewButtons: (C.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (C.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(C.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: De.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: De.fullscreen,
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
      customColorCss: On({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: On({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: M.width,
      height: M.height,
      label: x ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const O = Vb(dx, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: f,
    shellPreset: C,
    paintSwatches: To.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: On(r.color, 1)
    })),
    uiState: N,
    onClose: () => {
      di();
    }
  });
  try {
    O.mount(z);
  } catch (r) {
    try {
      O.unmount();
    } catch {
    }
    throw z.remove(), r;
  }
  const F = z.querySelector(".pano-modal-overlay"), T = z.querySelector(".pano-modal"), I = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), R = T == null ? void 0 : T.querySelector("[data-stage-background]"), K = T == null ? void 0 : T.querySelector(".pano-stage-wrap");
  if (!F || !T || !I || !R || !K)
    throw O.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const Q = document.createElement("div");
  Q.setAttribute("aria-hidden", "true"), Q.style.position = "absolute", Q.style.left = "0", Q.style.top = "0", Q.style.pointerEvents = "none", Q.style.zIndex = "12", Q.style.display = "none", Q.style.willChange = "transform,width,height,background,border-radius", K == null || K.appendChild(Q);
  const te = document.createElement("div");
  te.className = "pano-paint-size-preview", te.setAttribute("aria-hidden", "true");
  const _e = document.createElement("div");
  _e.className = "pano-paint-size-preview-sample", te.appendChild(_e), K == null || K.appendChild(te);
  const A = I.getContext("2d"), ye = Wr(), he = t === "cutout" ? Zv({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, fe = T.querySelector("[data-side]"), $ = T.querySelector("[data-video-element]"), se = T.querySelector(".pano-floating-right"), U = T.querySelector("[data-selection-menu]"), ie = T.querySelector("[data-tooltip]"), G = T.querySelector("[data-camera-preview-host]"), ce = T.querySelector("[data-paint-color-row]"), we = T.querySelector("[data-paint-color-pop]"), Oe = T.querySelector("[data-paint-color-sv]"), Fe = T.querySelector("[data-paint-color-sv-cursor]"), Ke = T.querySelector("[data-paint-hue-strip]"), et = T.querySelector("[data-paint-hue-handle]");
  let tt = 0, ot = 0;
  K == null || K.removeAttribute("data-stage-ready"), K == null || K.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", R.style.opacity = "0", a && (fe == null || fe.remove(), T.classList.add("pano-modal-readonly"));
  const jt = () => {
    if (!u.customPaintSessionStart) return;
    if (Eo(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (Sx(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const r = [
      fn(u.customPaintColor),
      ...u.customPaintHistory.filter((o) => !Eo(o, u.customPaintColor))
    ];
    u.customPaintHistory = r.slice(0, 8), u.customPaintSessionStart = null;
  }, At = (r = !1) => {
    !we || we.hidden || (r ? jt() : u.customPaintSessionStart = null, we.hidden = !0, N.paintDock.colorPopOpen = !1);
  }, pn = () => {
    we && (we.hidden && (u.customPaintSessionStart = fn(u.customPaintColor)), we.hidden = !1, N.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (r) => {
    Za(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), At(!0), t === "cutout" && u.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, Ue(), ge())));
  });
  const on = t === "stickers" ? h.active.selected_sticker_id : h.active.selected_shot_id, Gn = JSON.stringify(Wf(h)), u = {
    mode: "pano",
    selectedId: on,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Lt(h.coverage),
    historyController: Rv(80, { entries: [Gn], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Jn,
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
    showGrid: Ix(e == null ? void 0 : e.id, !0),
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
    frameView: { zoom: 1, panX: 0, panY: 0 },
    paintEngine: jl(),
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
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  }, L = he && G ? he.mount(G, { shot: null }) : null;
  t === "stickers" && (u.selectedId = null, h.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), X = document.createElement("canvas");
  X.__panoFrameIdx = 0;
  const B = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, re = (r) => {
    const o = String(r || "default");
    I.style.cursor !== o && (I.style.cursor = o);
  }, Z = {
    timer: 0,
    target: null
  }, me = {
    active: !1,
    depth: 0
  }, V = {
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
  }, xe = 4, Me = 9, Ae = [];
  let Ee = 0;
  const $e = () => {
    var S, P;
    const r = (S = K == null ? void 0 : K.getBoundingClientRect) == null ? void 0 : S.call(K), o = (P = se == null ? void 0 : se.getBoundingClientRect) == null ? void 0 : P.call(se), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, _ = l > 0 ? l + 14 + 12 : 72, y = Math.max(280, Math.floor(s - _ * 2)), w = u.fullscreen ? Math.min(1200, y) : y;
    N.videoTransport.shellMaxWidthPx = w;
  }, nt = () => {
    Ee || (Ee = window.requestAnimationFrame(() => {
      Ee = 0, $e();
    }));
  }, dt = () => {
    const r = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Ce = (r) => {
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
    return !!N.videoTransport.hasAudio;
  }, Je = typeof ResizeObserver < "u" ? new ResizeObserver(() => nt()) : null;
  Je == null || Je.observe(K), se && (Je == null || Je.observe(se)), Ae.push(() => {
    var r;
    Ee && (window.cancelAnimationFrame(Ee), Ee = 0), (r = Je == null ? void 0 : Je.disconnect) == null || r.call(Je);
  }), nt();
  const sn = () => {
    V.thumbnailJobId += 1, V.thumbnailSrc = "", N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Me;
  }, vt = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      sn();
      return;
    }
    const m = yx(l);
    if (m) {
      V.thumbnailSrc = l, N.videoTransport.thumbnails = m.thumbnails, N.videoTransport.thumbnailCount = m.thumbnailCount;
      return;
    }
    if (V.thumbnailSrc === l && Array.isArray(N.videoTransport.thumbnails) && N.videoTransport.thumbnails.length)
      return;
    const g = ++V.thumbnailJobId;
    V.thumbnailSrc = l, N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Me;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((ae) => {
      let pe = !1;
      const oe = (be) => {
        pe || (pe = !0, ae(be));
      };
      _.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), _.addEventListener("canplay", () => oe(!0), { once: !0 }), _.addEventListener("error", () => oe(!1), { once: !0 }), _.src = l, _.load();
    }) || V.thumbnailJobId !== g) return;
    const w = Math.max(1, Number(_.videoWidth || 0)), S = Math.max(1, Number(_.videoHeight || 0));
    if (w < 1 || S < 1) return;
    const P = Math.max(0, Number(_.duration || o || 0)), k = document.createElement("canvas"), D = 46, j = Math.max(72, Math.round(w / S * D));
    k.width = j, k.height = D;
    const ne = k.getContext("2d");
    if (!ne) return;
    const H = [], Y = (ae) => new Promise((pe) => {
      let oe = !1;
      const be = () => {
        oe || (oe = !0, pe());
      };
      _.addEventListener("seeked", be, { once: !0 }), _.addEventListener("error", be, { once: !0 });
      try {
        _.currentTime = ae;
      } catch {
        be();
      }
    });
    for (let ae = 0; ae < Me; ae += 1) {
      if (V.thumbnailJobId !== g) return;
      const pe = ae / (Me - 1), oe = P > 0 ? Math.max(0, Math.min(P - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), P * pe)) : 0;
      if (await Y(oe), V.thumbnailJobId !== g) return;
      ne.clearRect(0, 0, j, D), ne.drawImage(_, 0, 0, j, D), H.push({
        id: `thumb-${ae}`,
        src: k.toDataURL("image/jpeg", 0.72),
        time: oe,
        label: Cs(oe)
      });
    }
    V.thumbnailJobId === g && (N.videoTransport.thumbnails = H, N.videoTransport.thumbnailCount = H.length || Me, vx(l, {
      thumbnails: H,
      thumbnailCount: H.length || Me,
      duration: P,
      fps: s
    }));
  }, Vt = (r) => {
    const o = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, ln = (r) => {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return null;
    const o = Number($.videoWidth || 0), s = Number($.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const m = l.getContext("2d");
    if (!m) return null;
    for (m.drawImage($, 0, 0, o, s), V.frameCache.set(r, l), V.frameCacheOrder = V.frameCacheOrder.filter((g) => g !== r), V.frameCacheOrder.push(r); V.frameCacheOrder.length > xe; ) {
      const g = V.frameCacheOrder.shift();
      g != null && V.frameCache.delete(g);
    }
    return l;
  }, Ia = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (X.width !== s || X.height !== l) && (X.width = s, X.height = l);
    const m = X.getContext("2d");
    return m ? (m.clearRect(0, 0, s, l), m.drawImage(r, 0, 0, s, l), X.__panoFrameIdx = Number(X.__panoFrameIdx || 0) + 1, o != null && (V.presentedTime = Number(o || 0)), !0) : !1;
  }, Di = (r) => {
    const o = Vt(r), s = V.frameCache.get(o) || null;
    return s ? (V.currentFrameNumber = o, Ia(s, r)) : !1;
  };
  if (Ae.push(() => {
    sn();
  }), $ instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof $.requestVideoFrameCallback != "function" || $.__panoFramePumpActive) return;
      $.__panoFramePumpActive = !0;
      const y = (w, S) => {
        $.__panoFramePumpActive = !1;
        const P = Number((S == null ? void 0 : S.mediaTime) ?? $.currentTime ?? 0), k = Vt(P), D = dt();
        V.mode === "scrub" ? Math.abs(P - Number(V.editorTime || 0)) <= D && (ln(k), Di(V.editorTime), B.backgroundDirty = !0, B.dirty = !0, Tn({
          ready: !0,
          playing: !1,
          visible: Yn(),
          currentTime: V.editorTime,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (V.editorTime = P, V.presentedTime = P, V.requestedTime = null, V.currentFrameNumber = k, ln(k), V.frameCounter += 1, $.dataset.panoFrameIdx = String(V.frameCounter), B.backgroundDirty = !0, B.dirty = !0, Tn({
          ready: !0,
          playing: !$.paused && !$.ended,
          visible: Yn(),
          currentTime: P,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), B.running && (!$.paused || V.mode === "scrub") && r();
      };
      try {
        $.requestVideoFrameCallback(y);
      } catch {
        $.__panoFramePumpActive = !1;
      }
    }, o = () => {
      V.pendingPlaybackResume && (V.pendingPlaybackResume = !1, V.mode = "playback", V.requestedTime = null, ni() && (B.backgroundDirty = !0, B.dirty = !0), $.play().catch(() => {
      }));
    }, s = () => {
      V.editorTime = Number($.currentTime || 0), Number($.readyState || 0) >= 2 && ni() && (B.backgroundDirty = !0, B.dirty = !0), ri(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, l = () => {
      V.mode = "playback", V.seeking = !1, V.requestedTime = null, ri(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      V.mode === "playback" && ni() && (B.backgroundDirty = !0, B.dirty = !0), ri(), ge({ cause: "frame_view", localOnly: !0 });
    }, g = () => {
      Tn({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: Yn(),
        currentTime: V.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: V.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? N.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const y = V.seeking || V.pendingPlaybackResume || V.mode === "scrub";
      if (V.seeking = !1, !y) {
        V.requestedTime = null, r();
        return;
      }
      const w = Number(V.requestedTime ?? V.editorTime ?? 0), S = Number($.currentTime || 0);
      if (Math.abs(S - w) > dt()) {
        Is(w);
        return;
      }
      V.mode === "scrub" && (ni(), B.backgroundDirty = !0, B.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), V.requestedTime = null, o(), r();
    };
    $.addEventListener("loadedmetadata", s), $.addEventListener("loadeddata", s), $.addEventListener("canplay", s), $.addEventListener("play", l), $.addEventListener("pause", m), $.addEventListener("volumechange", g), $.addEventListener("seeked", _), Ae.push(() => $.removeEventListener("loadedmetadata", s)), Ae.push(() => $.removeEventListener("loadeddata", s)), Ae.push(() => $.removeEventListener("canplay", s)), Ae.push(() => $.removeEventListener("play", l)), Ae.push(() => $.removeEventListener("pause", m)), Ae.push(() => $.removeEventListener("volumechange", g)), Ae.push(() => $.removeEventListener("seeked", _));
  }
  function Zh() {
    N.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === u.primaryTool : s ? r.key === u.paintTool : l ? r.key === u.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function vs(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => Wa(s)) : !1;
  }
  function Cr(r) {
    const o = !!r;
    me.active !== o && (me.active = o, K.classList.toggle("drop-active", o));
  }
  function _s(r, o, s = u.viewFov, l = 140, m = 620) {
    const g = My(u.viewYaw, r), _ = o - u.viewPitch, y = s - u.viewFov, w = Math.hypot(g, _) + Math.abs(y) * 0.6, S = Math.round(q(l + w * 2.2, l, m));
    u.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: u.viewYaw,
      startPitch: u.viewPitch,
      startFov: u.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: g
    }, u.viewInertia.active = !1, u.viewInertia.vx = 0, u.viewInertia.vy = 0, ge();
  }
  Cp();
  function Wn() {
    return t === "stickers" ? h.stickers : h.shots;
  }
  function Ht() {
    const r = h.painting || (h.painting = da(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Qh(r = "paint") {
    var m, g;
    const o = Array.isArray((g = (m = h.painting) == null ? void 0 : m[r]) == null ? void 0 : g.strokes) ? h.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const y = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !y || l.has(y) || (l.add(y), s.push(y));
    }
    return s;
  }
  function ep() {
    return Qh("paint");
  }
  function Oi(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Ri(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Ct(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Fi(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function xs() {
    var o;
    let r = -1;
    for (const s of Array.isArray(h.stickers) ? h.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Ht())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = h.painting) == null ? void 0 : o.raster_objects) ? h.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Tc(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = Ht();
    let m = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return m ? o != null && (m.z_index = Math.max(0, Number(o || 0))) : (m = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? xs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(m)), m;
  }
  function tp(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), l = Number(r.halfW || 0), m = Number(r.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: q(s - m, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: q(s - m, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: q(s + m, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: q(s + m, 0, 1)
      }
    ];
  }
  function np() {
    const r = new Set(ep()), s = Ht().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: xs(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, m) => Number((l == null ? void 0 : l.z_index) || 0) - Number((m == null ? void 0 : m.z_index) || 0)), h.painting.groups = s, s;
  }
  function rp(r, o, s) {
    var H;
    const l = (Y) => (Number(Y || 0) % 1 + 1) % 1, m = [];
    for (const Y of s) {
      const ae = Y == null ? void 0 : Y.geometry, pe = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(pe) && m.push(...pe);
    }
    if (!m.length) return null;
    const g = l(((H = m[0]) == null ? void 0 : H.u) || 0);
    let _ = 0, y = 0;
    m.forEach((Y) => {
      const ae = l((Y == null ? void 0 : Y.u) || 0);
      _ += g + mn(ae, g), y += Number((Y == null ? void 0 : Y.v) || 0);
    });
    const w = (_ / m.length % 1 + 1) % 1;
    let S = 1 / 0, P = -1 / 0, k = 1 / 0, D = -1 / 0;
    m.forEach((Y) => {
      const ae = l((Y == null ? void 0 : Y.u) || 0), pe = mn(ae, w);
      S = Math.min(S, pe), P = Math.max(P, pe);
      const oe = Number((Y == null ? void 0 : Y.v) || 0);
      k = Math.min(k, oe), D = Math.max(D, oe);
    });
    const j = s.reduce((Y, ae) => {
      const pe = pr(String((ae == null ? void 0 : ae.toolKind) || "pen")), oe = nn[pe] || nn[Jn], be = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(Y, be);
    }, 0), ne = Math.max(35e-4, j / 2048);
    return {
      centerUv: { u: ((w + (S + P) * 0.5) % 1 + 1) % 1, v: q((k + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - S) * 0.5 + ne,
      halfH: (D - k) * 0.5 + ne,
      uvPad: ne
    };
  }
  function cr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const m = Ht().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!m) return null;
    const g = s || xn(l, o);
    return m.frame = rp(l, o, g), m.frame;
  }
  function Jr() {
    var l;
    const r = (Array.isArray(h.stickers) ? h.stickers : []).map((m) => ({
      type: "sticker",
      id: String((m == null ? void 0 : m.id) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    })), o = np().map((m) => ({
      type: "strokeGroup",
      id: String((m == null ? void 0 : m.id) || (m == null ? void 0 : m.actionGroupId) || ""),
      actionGroupId: String((m == null ? void 0 : m.actionGroupId) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    })), s = (Array.isArray((l = h.painting) == null ? void 0 : l.raster_objects) ? h.painting.raster_objects : []).filter((m) => String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => ({
      type: "rasterObject",
      id: String((m == null ? void 0 : m.id) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    }));
    return [...r, ...o, ...s].sort((m, g) => Number(m.z_index || 0) - Number(g.z_index || 0));
  }
  function ws(r = !0) {
    var s, l, m, g, _, y;
    const o = Jr().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (r) {
      const w = String(((l = (s = u.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((g = (m = u.interaction) == null ? void 0 : m.stroke) == null ? void 0 : g.layerKind) || "").trim(), P = String(((y = (_ = u.interaction) == null ? void 0 : _.stroke) == null ? void 0 : y.toolKind) || "").trim();
      w && S === "paint" && P !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function Ss(r = !0) {
    var y, w, S, P, k, D;
    const o = Jr();
    if (!r) return o;
    const s = String(((w = (y = u.interaction) == null ? void 0 : y.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), l = String(((P = (S = u.interaction) == null ? void 0 : S.stroke) == null ? void 0 : P.layerKind) || "").trim(), m = String(((D = (k = u.interaction) == null ? void 0 : k.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!s || l !== "paint" || m === "eraser" || o.some((j) => j.type === "strokeGroup" && String(j.actionGroupId || "") === s))
      return o;
    const g = ct();
    let _ = o.reduce((j, ne) => Math.max(j, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return g && Pt(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((j, ne) => Number((j == null ? void 0 : j.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function ip() {
    return Ht().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => Qr(Oi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ap() {
    var r;
    return (Array.isArray((r = h.painting) == null ? void 0 : r.raster_objects) ? h.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => Zr(Ri((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Ec(r = u.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function op() {
    var o, s, l, m;
    let r = null;
    try {
      const g = ws(), _ = ((m = (l = (s = (o = u.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, g)) == null ? void 0 : l.displayPaint) == null ? void 0 : m.canvas) || null;
      _ && (r = {
        source: _,
        revision: `${si()}:${Ta()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Ta() {
    var m, g, _, y, w, S, P;
    const r = u.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Ec(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null, D = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), j = ((_ = k == null ? void 0 : k.rawPoints) == null ? void 0 : _.length) ?? ((y = k == null ? void 0 : k.points) == null ? void 0 : y.length) ?? 0, ne = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${D || "paint"}_${o}_live${ne}_${j}_${u.livePaintInteractionRevision}`;
    }
    const s = String(((w = r == null ? void 0 : r.item) == null ? void 0 : w.actionGroupId) || ""), l = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((P = r == null ? void 0 : r.item) == null ? void 0 : P.id) || "");
    return `_${o}_${s || l || "active"}_${u.livePaintInteractionRevision}`;
  }
  function Ns() {
    const r = Array.isArray(h.shots) ? h.shots : [], o = Array.isArray(h.stickers) ? h.stickers : [];
    return [...r, ...o];
  }
  function cn(r) {
    return !!r && Array.isArray(h.shots) && h.shots.includes(r);
  }
  function _t(r) {
    return !!r && Array.isArray(h.stickers) && h.stickers.includes(r);
  }
  function en() {
    var r;
    return Array.isArray((r = h.painting) == null ? void 0 : r.raster_objects) ? h.painting.raster_objects : [];
  }
  function Zr(r) {
    const o = Ct(r);
    if (!o) return null;
    const s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ri(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ut(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Ct(r.rasterObjectId || r.id || "");
    return !!o && !!Zr(Ri(o));
  }
  function Qr(r) {
    const o = Fi(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = Ht().find((m) => String((m == null ? void 0 : m.id) || (m == null ? void 0 : m.actionGroupId) || "") === s || String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Oi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Pt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!Qr(Oi(s, o));
  }
  function xn(r, o = null) {
    const s = Fi(r, o), l = String(s.actionGroupId || "").trim();
    return l ? ui(s.layerKind).filter((m) => String((m == null ? void 0 : m.actionGroupId) || "").trim() === l) : [];
  }
  function sp(r, o = "paint") {
    var g, _, y;
    const s = String(r || "").trim(), m = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${u.mode}:${Vi()}`;
    if (u.mode === "frame") {
      const w = Be(), S = String((w == null ? void 0 : w.id) || ""), P = w ? It(w) : null;
      return `${m}:frame:${S}:${Math.round(Number((P == null ? void 0 : P.x) || 0))}:${Math.round(Number((P == null ? void 0 : P.y) || 0))}:${Math.round(Number((P == null ? void 0 : P.w) || 0))}:${Math.round(Number((P == null ? void 0 : P.h) || 0))}:${Math.round(Number(((g = u.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = u.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((y = u.frameView) == null ? void 0 : y.panY) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Ea(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: q(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function mn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Ms(r, o = null, s = null) {
    var S;
    const l = Fi(r, o), m = Array.isArray(s) ? s : xn(l.actionGroupId, l.layerKind), g = [];
    if (m.forEach((P) => {
      const k = (P == null ? void 0 : P.geometry) || null, D = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(D) && g.push(...D);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = g[0]) == null ? void 0 : S.u) || 0);
    let y = 0, w = 0;
    return g.forEach((P) => {
      y += _ + mn(Number((P == null ? void 0 : P.u) || 0), _), w += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (y / g.length % 1 + 1) % 1,
      v: q(w / g.length, 0, 1)
    };
  }
  function Da(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = mn(Number(r.u || 0), m), y = Number(r.v || 0) - g, w = Number(l || 0) * Tt, S = Math.cos(w), P = Math.sin(w), k = Math.max(0.02, Number(s || 1)), D = (_ * S - y * P) * k, j = (_ * P + y * S) * k;
    return {
      ...r,
      u: ((m + D) % 1 + 1) % 1,
      v: q(g + j, 0, 1)
    };
  }
  function Dc(r, o, s, l = null, m = null, g = null) {
    const _ = Fi(r, m), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const w = ui(_.layerKind), S = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let P = !1;
    if (w.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== y) return;
      const D = (S == null ? void 0 : S.get(String((k == null ? void 0 : k.id) || ""))) || k, j = k == null ? void 0 : k.geometry, ne = D == null ? void 0 : D.geometry;
      !j || !ne || (Array.isArray(ne.points) && (j.points = ne.points.map((H) => Ea(H, o, s)), P = !0), Array.isArray(ne.rawPoints) && (j.rawPoints = ne.rawPoints.map((H) => Ea(H, o, s)), P = !0), Array.isArray(ne.processedPoints) && (j.processedPoints = ne.processedPoints.map((H) => Ea(H, o, s)), P = !0));
    }), P && g) {
      const k = Ht().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === y);
      k && (k.frame = null);
    }
    return P;
  }
  function Oc(r, o = 1, s = 0, l = null, m = null, g = null) {
    const _ = Fi(r, m), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const w = ui(_.layerKind), S = Array.isArray(l) ? l : xn(y, _.layerKind), P = Array.isArray(S) ? new Map(S.map((j) => [String((j == null ? void 0 : j.id) || ""), j])) : null, k = (g == null ? void 0 : g.centerUv) ?? Ms(y, _.layerKind, S);
    let D = !1;
    if (w.forEach((j) => {
      if (String((j == null ? void 0 : j.actionGroupId) || "").trim() !== y) return;
      const ne = (P == null ? void 0 : P.get(String((j == null ? void 0 : j.id) || ""))) || j, H = j == null ? void 0 : j.geometry, Y = ne == null ? void 0 : ne.geometry;
      !H || !Y || (Array.isArray(Y.points) && (H.points = Y.points.map((ae) => Da(ae, k, o, s)), D = !0), Array.isArray(Y.rawPoints) && (H.rawPoints = Y.rawPoints.map((ae) => Da(ae, k, o, s)), D = !0), Array.isArray(Y.processedPoints) && (H.processedPoints = Y.processedPoints.map((ae) => Da(ae, k, o, s)), D = !0));
    }), D && g) {
      const j = Ht().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === y);
      j && (j.frame = null);
    }
    return D;
  }
  function Rc(r, o, s, l = null) {
    const m = Ct(r);
    if (!m) return !1;
    const g = en().find((P) => String((P == null ? void 0 : P.id) || "").trim() === m);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, y = (_ == null ? void 0 : _.transform) || {}, w = Number(y.du || 0) + Number(o || 0), S = q(Number(y.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = w, g.transform.dv = S, !0;
  }
  function lp(r, o = 1, s = null) {
    const l = Ct(r);
    if (!l) return !1;
    const m = en().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!m) return !1;
    const g = s && typeof s == "object" ? s : m, _ = (g == null ? void 0 : g.transform) || {}, y = Math.max(0.01, Number(_.scale || 1)), w = q(y * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.scale = w, !0;
  }
  function ct() {
    const r = String(u.selectedId || "");
    if (!r) return null;
    const o = Qr(r);
    if (o) return o;
    const s = Zr(r);
    return s || (t === "cutout" ? Ns().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Wn().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function wn() {
    const r = Array.isArray(u.selectedIds) && u.selectedIds.length ? u.selectedIds : u.selectedId ? [u.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const m = String(l || "").trim();
      if (!m || s.has(m)) return;
      s.add(m);
      const g = m === String(u.selectedId || "") ? ct() : Qr(m) || Zr(m) || (t === "cutout" ? Ns().find((_) => String((_ == null ? void 0 : _.id) || "") === m) : Wn().find((_) => String((_ == null ? void 0 : _.id) || "") === m));
      g && o.push(g);
    }), o;
  }
  function ks(r = null) {
    const o = Array.isArray(r) ? r : wn();
    if (!o || o.length < 2) return null;
    const s = o.map((S) => Ot(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), m = s.flatMap((S) => S.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), g = Math.min(...l), _ = Math.max(...l), y = Math.min(...m), w = Math.max(...m);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + _) * 0.5, y: (y + w) * 0.5 },
      corners: [
        { x: g, y },
        { x: _, y },
        { x: _, y: w },
        { x: g, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + _) * 0.5, y, a: { x: g, y }, b: { x: _, y } },
        { edge: "right", x: _, y: (y + w) * 0.5, a: { x: _, y }, b: { x: _, y: w } },
        { edge: "bottom", x: (g + _) * 0.5, y: w, a: { x: _, y: w }, b: { x: g, y: w } },
        { edge: "left", x: g, y: (y + w) * 0.5, a: { x: g, y: w }, b: { x: g, y } }
      ],
      rotateStemBase: { x: (g + _) * 0.5, y },
      rotateHandle: { x: (g + _) * 0.5, y: y - 30 }
    };
  }
  function cp(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(u.selectedIds) && u.selectedIds.includes(o);
  }
  function Oa() {
    const r = ct();
    return r ? Pt(r) || Ut(r) ? "stroke" : cn(r) ? "frame" : "image" : null;
  }
  function ur(r) {
    if (!r || typeof r != "object") return !1;
    if (Pt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Ht().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Ut(r)) {
      const o = Ct(r.rasterObjectId || r.id || ""), s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Ps(r = null) {
    const o = Array.isArray(r) ? r : wn();
    return o.length > 0 && o.every((s) => ur(s));
  }
  function up(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Pt(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), m = Ht().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    if (Ut(r)) {
      const l = Ct(r.rasterObjectId || r.id || ""), m = en().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function fp() {
    if (i) return;
    const r = wn();
    if (!r.length) return;
    const o = !Ps(r);
    let s = !1;
    r.forEach((l) => {
      up(l, o) && (s = !0);
    }), s && (ft(), xt(), Ue(), ge());
  }
  function Ir(r) {
    u.selectedId = (r == null ? void 0 : r.id) || null, u.selectedIds = r != null && r.id ? [r.id] : [], r && _t(r) ? h.active.selected_sticker_id = r.id || null : h.active.selected_sticker_id = null, r && cn(r) ? h.active.selected_shot_id = r.id || null : r ? cn(r) || (h.active.selected_shot_id = h.active.selected_shot_id) : h.active.selected_shot_id = null;
  }
  function dp(r, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((_) => {
      const y = String((_ == null ? void 0 : _.id) || "").trim();
      !y || l.has(y) || (l.add(y), s.push(y));
    }), u.selectedIds = s;
    const m = String(o || "").trim();
    u.selectedId = m && s.includes(m) ? m : s[s.length - 1] || null;
    const g = ct();
    h.active.selected_sticker_id = g && _t(g) && g.id || null, g && cn(g) ? h.active.selected_shot_id = g.id || null : s.length || (h.active.selected_shot_id = null);
  }
  function Fc() {
    const r = (Array.isArray(h.shots) ? h.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(h.stickers) ? h.stickers : []).map((s, l) => {
      var g, _;
      const m = Dt(s) ? String(s.id || Lr) : String(((_ = (g = h.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: m
      };
    });
    return [...r, ...o];
  }
  function hp(r) {
    return r === "frame" ? De.camera : r === "stroke" ? De.paintbrush_vertical_tool : De.image;
  }
  function Lc(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: hp(r.kind)
    };
  }
  function zc() {
    return xs();
  }
  function Dt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Lr || String(r.source_kind || "") === wl;
  }
  function ei(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function pp(r) {
    return Dt(r) && ei(r) ? hh : 1;
  }
  function mp() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function gp() {
    return String(mp() || "") === "lasso_fill";
  }
  function bp() {
    if (i) return;
    const r = ct();
    !r || !Dt(r) || (r.visible = ei(r), Rt(), ft(), xt(), He(), Ue(), ge());
  }
  function yp() {
    if (i || t !== "stickers") return;
    const r = ct();
    if (!r || !Dt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ts(Sl, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Tr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), ft(), xt(), He(), Ue(), ge();
  }
  function vp(r) {
    if (!r || !Dt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Ts(Sl, () => {
      ge();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Tr(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function _p() {
    const r = ct();
    if (!r || !Dt(r)) return !1;
    const o = vp(r);
    if (!o) return !1;
    const s = (l, m) => Math.abs(Number(l || 0) - Number(m || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function As(r) {
    var s;
    const o = pa(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function $c(r) {
    const o = pa(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function jc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Uo(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function xp() {
    const { metaKey: r } = jc(), o = $c(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function ti(r) {
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
  function Cs(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function Tn(r = {}) {
    const o = Number(r.currentTime ?? V.editorTime ?? 0), s = Number(r.duration ?? N.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!N.videoTransport.ready, m = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!N.videoTransport.playing, g = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!N.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!($ instanceof HTMLVideoElement ? $.muted : N.videoTransport.muted), y = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : $ instanceof HTMLVideoElement ? $.volume : N.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Ce($), S = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!($ instanceof HTMLVideoElement ? $.loop : N.videoTransport.loop);
    Object.assign(N.videoTransport, {
      ready: l,
      playing: m,
      visible: g,
      loop: S,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Cs(o),
      durationLabel: Cs(s),
      frameCount: Math.max(0, Number(r.frameCount ?? N.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? N.videoTransport.fps ?? 24)),
      mode: String(r.mode || V.mode || "playback"),
      hasAudio: w,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(y) ? y : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(y) ? y : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : N.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? N.videoTransport.thumbnailCount ?? Me))
    });
  }
  function Yn() {
    return !!($ instanceof HTMLVideoElement && $.getAttribute("src") && u.primaryTool !== "paint" && u.primaryTool !== "mask");
  }
  function wp() {
    Tn({
      visible: Yn()
    });
  }
  function ni() {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return !1;
    const r = Number($.videoWidth || 0), o = Number($.videoHeight || 0);
    (X.width !== r || X.height !== o) && (X.width = r, X.height = o);
    const s = X.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage($, 0, 0, r, o), X.__panoFrameIdx = Number(X.__panoFrameIdx || 0) + 1, V.presentedTime = Number(V.editorTime || $.currentTime || 0), !0) : !1;
  }
  function Vc() {
    return V.mode === "scrub" && Number(X.width || 0) > 0 && Number(X.height || 0) > 0 && Number(X.__panoFrameIdx || 0) > 0 ? X : $ instanceof HTMLVideoElement && Number($.videoWidth || 0) > 0 && Number($.videoHeight || 0) > 0 && Number($.readyState || 0) >= 2 ? $ : null;
  }
  function Is(r) {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (V.requestedTime = o, !V.seeking && !(Math.abs(Number($.currentTime || 0) - o) <= 5e-4)) {
      V.seeking = !0;
      try {
        $.currentTime = o;
      } catch {
        V.seeking = !1;
      }
    }
  }
  function ri() {
    if (!($ instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = jc(), o = As(r)[0] || null, s = o && typeof o == "object" ? ka(o) : qr(o), l = xp(), m = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), g = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), _ = Number((l == null ? void 0 : l.duration) || (m > 0 ? m / g : 0)), y = !!(l != null && l.has_audio) || Ce($);
    return s && $.dataset.panoSrc !== s ? ($.pause(), $.dataset.panoSrc = s, $.dataset.panoFrameIdx = "0", $.loop = !!N.videoTransport.loop, $.muted = !!N.videoTransport.muted, $.volume = Math.max(0, Math.min(1, Number(N.videoTransport.volume ?? 1))), $.src = s, $.load(), vt(s, _, g)) : !s && $.getAttribute("src") && ($.pause(), $.removeAttribute("src"), $.load(), sn()), $.loop !== !!N.videoTransport.loop && ($.loop = !!N.videoTransport.loop), s && (!Array.isArray(N.videoTransport.thumbnails) || N.videoTransport.thumbnails.length === 0) && vt(s, _, g), s || sn(), Tn({
      ready: !!s,
      playing: !$.paused && !$.ended,
      visible: !!s && u.primaryTool !== "paint" && u.primaryTool !== "mask",
      currentTime: V.editorTime,
      duration: _,
      frameCount: m,
      fps: g,
      mode: V.mode,
      hasAudio: y,
      loop: !!$.loop,
      muted: !!$.muted,
      volume: Number($.volume ?? N.videoTransport.volume ?? 1),
      thumbnailCount: N.videoTransport.thumbnailCount
    }), s || null;
  }
  function Sp(r, o = null) {
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
  function Ts(r, o = null) {
    const s = As(r), l = Array.isArray(s) && s.length ? s[0] : null, m = qr(l);
    if (!m) return null;
    const g = `__ui__${r}`, _ = ee.get(g);
    if (_ && _.__panoSrc === m) return _;
    const y = new Image();
    return y.__panoSrc = m, y.onload = () => {
      typeof o == "function" ? o(y) : ge();
    }, y.src = m, ee.set(g, y), y;
  }
  function Hc(r = null) {
    const o = Al(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Ts(Sl, r);
  }
  function Uc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Tr(r, o, s) {
    const l = Math.max(1, Number(o || 1)), m = Math.max(1, Number(s || 1)), g = q(Number(r || 30), 0.1, 179) * Tt, _ = 2 * Math.atan(Math.tan(g * 0.5) * (m / l));
    return q(_ * _r, 0.1, 179);
  }
  function Np(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let m = null;
      if (typeof l == "number" && Number.isInteger(l) ? m = l : typeof l == "string" && /^\d+$/.test(l) && (m = Number.parseInt(l, 10)), m !== 1) return null;
      const g = s.pose;
      if (!g || typeof g != "object") return null;
      const _ = Number(g.yaw_deg), y = Number(g.pitch_deg), w = Number(g.roll_deg), S = Number(g.hFOV_deg);
      if (![_, y, w, S].every((j) => Number.isFinite(j))) return null;
      let P = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const k = {
        yaw_deg: P,
        pitch_deg: q(y, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: q(S, 0.1, 179)
      }, D = Number(s.source_aspect);
      return Number.isFinite(D) && D > 0 && (k.source_aspect = D), k;
    } catch {
      return null;
    }
  }
  function Bc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = na(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Mp(r) {
    var y;
    if (!r || typeof r != "object") return Bc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(m) && Number.isFinite(g)) {
      const w = q(m, 0.1, 179) * Tt, S = q(g, 0.1, 179) * Tt, P = Math.tan(S * 0.5);
      if (Math.abs(P) > 1e-6) {
        const k = Math.tan(w * 0.5) / P;
        Number.isFinite(k) && k > 0 && (_ = k);
      }
    }
    if (r != null && r.asset_id && ((y = h == null ? void 0 : h.assets) != null && y[r.asset_id])) {
      const w = h.assets[r.asset_id], S = Number((w == null ? void 0 : w.w) || 0), P = Number((w == null ? void 0 : w.h) || 0);
      S > 0 && P > 0 && (_ = S / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function kp(r) {
    var l, m, g, _, y;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((w) => String((w == null ? void 0 : w.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const w = Yh(e.graph, s), { originId: S, originSlot: P } = qh(w), k = pa(S), D = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (m = k == null ? void 0 : k.data) == null ? void 0 : m.result,
        (g = k == null ? void 0 : k.ui) == null ? void 0 : g.output,
        (_ = k == null ? void 0 : k.ui) == null ? void 0 : _.result
      ];
      for (const j of D) {
        if (!Array.isArray(j)) continue;
        const ne = Number(P || 0), H = j[ne];
        if (typeof H == "string" && H.trim()) return H;
      }
    }
    return String(((y = yn(e, r)) == null ? void 0 : y.value) || "");
  }
  function Pp(r, o, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : Np(o);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), y = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Tr(l.hFOV_deg, _, y),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const m = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(u.viewYaw || 0),
      pitch_deg: Number(u.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Tr(30, m, g),
      rot_deg: 0
    };
  }
  function Kc(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((j) => String((j == null ? void 0 : j.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = Hc(() => {
      var j;
      (j = e.__panoExternalStickerSync) == null || j.call(e, "image-loaded");
    }), m = Sp($c("pano_sticker_input_pose"), null), g = kp("sticker_state"), _ = Uc(m && typeof m == "object" ? JSON.stringify(m) : g), y = Array.isArray(h.stickers) ? h.stickers : h.stickers = [], w = y.findIndex((j) => String((j == null ? void 0 : j.id) || "") === Lr);
    if (s == null) {
      w >= 0 && (y.splice(w, 1), u.selectedId === Lr && (u.selectedId = null, u.selectedIds = [], h.active.selected_sticker_id = null), xt(), He(), Ue(), ge());
      return;
    }
    const S = y.reduce((j, ne) => Math.max(j, Number((ne == null ? void 0 : ne.z_index) || 0)), -1);
    let P = w >= 0 ? y[w] : null;
    const k = !P || Number(P.source_link_id ?? -1) !== Number(s) || String(P.source_state_hash || "") !== _;
    P || (P = {
      id: Lr,
      source_kind: wl
    }, y.push(P)), P.id = Lr, P.source_kind = wl, P.source_link_id = Number(s), P.source_state_hash = _, P.visible = P.visible !== !1;
    let D = !1;
    if (k) {
      const j = Pp(m, g, l);
      Object.assign(P, j, {
        initial_pose: { ...j },
        visible: !0,
        z_index: S + 1
      }), D = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const j = Tr(
        Number(P.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - j) > 1e-6 && (P.vFOV_deg = j, D = !0);
    }
    D && (xt(), He(), Ue()), ge();
  }
  function ii(r = {}) {
    const s = r.preservePanelValues !== !1 ? ct() : null;
    s && (u.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ji(s)
    }), u.selectedId = null, u.selectedIds = [], u.cutoutAspectOpen = !1, h.active.selected_sticker_id = null, h.active.selected_shot_id = null;
  }
  function Ap() {
    if (t !== "cutout") return;
    const r = Be();
    r && Ir(r);
  }
  function Es() {
    if (t !== "cutout") return;
    const r = Be();
    Xi(N.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? De.camera : De.plus_circle
    });
  }
  function Ra() {
    const r = !!Be();
    u.mode === "frame" && !r && (u.mode = "pano"), u.outputPreviewRect = null, N.viewButtons.forEach((o) => {
      const s = o.key === u.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), N.outputPreviewToggle.visible = t === "cutout" && !!Be(), t === "cutout" && N.cameraPreview && (N.cameraPreview.visible = !0, N.cameraPreview.expanded = !!u.outputPreviewExpanded, N.cameraPreview.settled = N.cameraPreview.settled === !0 && B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame), vu() ? ht(u.pointerPos) : re(u.mode === "pano" ? "grab" : "default");
  }
  function Cp() {
    const o = Zc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Ds() {
    const r = Dn(u.viewYaw, u.viewPitch);
    let o = Hn(0, 1, 0);
    Math.abs(kn(r, o)) > 0.999 && (o = Hn(0, 0, 1));
    const s = pi(go(o, r)), l = pi(go(r, s));
    return { right: s, up: l, fwd: r };
  }
  function Li(r) {
    const { right: o, up: s, fwd: l } = Ds(), m = kn(r, o), g = kn(r, s), _ = kn(r, l);
    if (_ <= 1e-5) return null;
    const y = I.width, w = I.height, S = u.viewFov * Tt, P = 2 * Math.atan(Math.tan(S / 2) * (w / y)), k = y / 2 / Math.tan(S / 2), D = w / 2 / Math.tan(P / 2);
    return {
      x: y / 2 + m / _ * k,
      y: w / 2 - g / _ * D,
      z: _
    };
  }
  function Os(r, o) {
    const { right: s, up: l, fwd: m } = Ds(), g = I.width, _ = I.height, y = u.viewFov * Tt, w = 2 * Math.atan(Math.tan(y / 2) * (_ / g)), S = (r - g / 2) / (g / 2) * Math.tan(y / 2), P = (_ / 2 - o) / (_ / 2) * Math.tan(w / 2), k = po(po(mo(s, S), mo(l, P)), m);
    return pi(k);
  }
  function fr() {
    const r = I.width, o = I.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const y = o, w = y * s;
      return { x: (r - w) * 0.5, y: 0, w, h: y };
    }
    const m = r, g = m / s;
    return { x: 0, y: (o - g) * 0.5, w: m, h: g };
  }
  function Gc(r) {
    var _;
    if (r && typeof r == "object" && (Dt(r) || r.external === !0))
      return Hc(() => {
        var y;
        (y = e.__panoExternalStickerSync) == null || y.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = ee.get(o);
    if (s) return s;
    const l = (_ = h.assets) == null ? void 0 : _[o], m = Gx(l);
    if (!m) return null;
    const g = new Image();
    return g.onload = () => ge(), g.src = m, ee.set(o, g), g;
  }
  function Wc(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = de.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const m = new Image();
    return m.onload = () => {
      typeof o == "function" && o();
    }, m.src = s, de.set(s, m), m;
  }
  function Ip(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = E.get(o);
    if (s) return s.ready ? s : null;
    const l = Wc(r, () => {
      const P = E.get(o);
      P && (P.ready = !1), ge({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const m = Number(l.naturalWidth || l.width || 0), g = Number(l.naturalHeight || l.height || 0);
    if (m < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = m, _.height = g;
    const y = _.getContext("2d", { willReadFrequently: !0 });
    if (!y) return null;
    y.clearRect(0, 0, m, g), y.drawImage(l, 0, 0, m, g);
    const w = y.getImageData(0, 0, m, g).data, S = { canvas: _, width: m, height: g, alpha: w, ready: !0 };
    return E.set(o, S), S;
  }
  function Tp(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = mn(Number(r.u || 0), m), y = Number(r.v || 0) - g, w = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * Tt, P = Math.cos(S), k = Math.sin(S), D = _ / w, j = y / w, ne = D * P + j * k, H = -D * k + j * P;
    return {
      ...r,
      u: ((m + ne) % 1 + 1) % 1,
      v: g + H
    };
  }
  function Ep(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, m = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, _ = Tp(
      g,
      m,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), y = Number(s.u1 || 0) - Number(s.u0 || 0), w = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(y > 1e-6) || !(w > 1e-6)) return null;
    const S = mn(Number(_.u || 0), Number(s.u0 || 0)) / y, P = (Number(_.v || 0) - Number(s.v0 || 0)) / w;
    if (S < 0 || S > 1 || P < 0 || P > 1) return 0;
    const k = Ip(r);
    if (!k) return null;
    const D = q(Math.floor(S * k.width), 0, k.width - 1), j = q(Math.floor(P * k.height), 0, k.height - 1);
    return Number(k.alpha[(j * k.width + D) * 4 + 3] || 0);
  }
  function Yc(r, o, s, l = null) {
    if (!(o != null && o.visible) || !Zn(s, o.corners)) return !1;
    const m = l || Nn(s, performance.now()), g = Ep(r, m);
    return g === null ? !0 : g > 8;
  }
  function Dp() {
    var l, m, g, _, y, w, S, P;
    const r = ((m = (l = u.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : m.call(l, ws(!1))) || null, o = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((y = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : y.width) || 2048)), s = Math.max(1, Number(((w = r == null ? void 0 : r.descriptor) == null ? void 0 : w.height) || ((P = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: s };
  }
  function Op() {
    var j, ne, H;
    const r = u.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = un(), l = `${Ta()}:${s.width}:${s.height}`;
    if (((j = u._activePaintEraserPreviewInfo) == null ? void 0 : j.cacheKey) === l)
      return u._activePaintEraserPreviewInfo.value || null;
    const m = Kt(o), g = (m == null ? void 0 : m.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = Hs(Y, m.targetSpace, !0);
    }
    const _ = ji(s.width, s.height, { readback: !0 });
    if (!cu(_, m, { w: s.width, h: s.height })) return null;
    const y = ((H = (ne = _.ctx) == null ? void 0 : ne.getImageData(0, 0, s.width, s.height)) == null ? void 0 : H.data) || null;
    if (!y) return null;
    let w = s.width, S = s.height, P = -1, k = -1;
    for (let Y = 0; Y < s.height; Y += 1)
      for (let ae = 0; ae < s.width; ae += 1)
        y[(Y * s.width + ae) * 4 + 3] <= 8 || (ae < w && (w = ae), Y < S && (S = Y), ae > P && (P = ae), Y > k && (k = Y));
    if (P < w || k < S)
      return u._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const D = {
      surface: _,
      bounds: { minX: w, minY: S, maxX: P, maxY: k },
      key: `${l}:${w}:${S}:${P}:${k}`
    };
    return u._activePaintEraserPreviewInfo = { cacheKey: l, value: D }, u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function zi() {
    u._activePaintEraserPreviewInfo = null, u._liveEraserPreviewCanvasCache = null;
  }
  function Rp(r, o, s) {
    var l, m;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const g = r.item.bbox, _ = ((m = r.item) == null ? void 0 : m.transform) || {}, y = Number(g.u0 || 0) + Number(_.du || 0), w = Number(g.u1 || 0) + Number(_.du || 0), S = Number(g.v0 || 0) + Number(_.dv || 0), P = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((y % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(q(S, 0, 1) * s),
        maxY: Math.ceil(q(P, 0, 1) * s),
        wraps: w - y >= 1 || y < 0 || w > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = xn(r.actionGroupId, "paint"), _ = cr(r.actionGroupId, "paint", g);
      if (!_) return null;
      const y = _.centerUv.u - _.halfW, w = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, P = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((y % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(q(S, 0, 1) * s),
        maxY: Math.ceil(q(P, 0, 1) * s),
        wraps: w - y >= 1 || y < 0 || w > 1
      };
    }
    return null;
  }
  function Fp(r, o, s) {
    if (!r || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], m = l(r), g = l(o);
    return m.some((_) => g.some((y) => !(_.maxX < y.minX || y.maxX < _.minX || _.maxY < y.minY || y.maxY < _.minY)));
  }
  function Lp(r, o, s) {
    var be, Ie, je, ke, J, ue, ve;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), m = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || m < 1) return r;
    const g = Rp(o, l, m);
    if (g && !Fp(g, s.bounds, l)) return r;
    const _ = String(((Ie = o.item) == null ? void 0 : Ie.id) || o.id || ""), y = ((je = o.item) == null ? void 0 : je.transform) || {}, w = `${s.key}:${_}:${l}:${m}:${Number(y.du || 0).toFixed(6)}:${Number(y.dv || 0).toFixed(6)}:${Number(y.rot_deg || 0).toFixed(3)}:${Number(y.scale || 1).toFixed(4)}`, S = u._liveEraserPreviewCanvasCache instanceof Map ? u._liveEraserPreviewCanvasCache : u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(w)) return S.get(w);
    const P = q(Math.floor(Number(((ke = s.bounds) == null ? void 0 : ke.minX) || 0)), 0, Math.max(0, l - 1)), k = q(Math.floor(Number(((J = s.bounds) == null ? void 0 : J.minY) || 0)), 0, Math.max(0, m - 1)), D = q(Math.ceil(Number(((ue = s.bounds) == null ? void 0 : ue.maxX) || 0)), P, Math.max(0, l - 1)), j = q(Math.ceil(Number(((ve = s.bounds) == null ? void 0 : ve.maxY) || 0)), k, Math.max(0, m - 1)), ne = Math.max(1, D - P + 1), H = Math.max(1, j - k + 1), Y = ji(l, m, { readback: !0 });
    Y.ctx.clearRect(0, 0, l, m), Y.ctx.drawImage(r, 0, 0);
    const ae = Y.ctx.getImageData(P, k, ne, H);
    Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(s.surface.canvas, 0, 0), Y.ctx.restore();
    const pe = Y.ctx.getImageData(P, k, ne, H);
    let oe = !1;
    for (let Se = 0; Se < ne * H; Se += 1) {
      const Te = ae.data[Se * 4 + 3], Re = pe.data[Se * 4 + 3];
      if (Te > Re) {
        oe = !0;
        break;
      }
    }
    return oe ? (S.size > 64 && S.clear(), S.set(w, Y.canvas), Y.canvas) : (S.set(w, r), r);
  }
  function qc(r, o = null) {
    const s = Ct((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const m = Wc(r, o);
    if (!m || !(m.complete || m.width || m.naturalWidth)) return null;
    const { width: g, height: _ } = Dp(), y = (r == null ? void 0 : r.transform) || {}, w = [
      s,
      g,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      y.du,
      y.dv,
      y.rot_deg,
      y.scale,
      Vi()
    ].join(":"), S = W.get(w);
    if (S) return S;
    W.size > 64 && W.clear();
    const P = document.createElement("canvas");
    P.width = g, P.height = _;
    const k = P.getContext("2d");
    if (!k) return null;
    const D = Number(l.u0 || 0) * g, j = Number(l.v0 || 0) * _, ne = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), H = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), Y = D + ne * 0.5 + Number(y.du || 0) * g, ae = j + H * 0.5 + Number(y.dv || 0) * _, pe = Number(y.rot_deg || 0) * Tt, oe = Math.max(0.01, Number(y.scale || 1));
    for (const be of [-g, 0, g])
      k.save(), k.translate(Y + be, ae), k.rotate(pe), k.scale(oe, oe), k.drawImage(m, -ne * 0.5, -H * 0.5, ne, H), k.restore();
    return W.set(w, P), P;
  }
  function zp() {
    return gs(h, {
      selectedId: u.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function $p(r) {
    return ph(
      h,
      (o, s, l) => Gc(l || o),
      { scene: r }
    );
  }
  function Xc(r, o, s, l, m = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const g = dr(l);
    if (nu(o, s))
      return Yp(
        o,
        s,
        g && u.showPanorama ? l : null,
        `${m}_bg_gl`
      );
    const y = $a(), w = ja(y), S = u.showObjects ? Va() : $i([]), k = ea({
      stateRevision: [
        m,
        g ? ti(l) : "no_bg",
        Array.isArray(w) ? w.map((H) => `${String((H == null ? void 0 : H.assetId) || "")}:${String((H == null ? void 0 : H.revision) || "")}`).join(",") : "none",
        S.length ? S.map((H) => `${String((H == null ? void 0 : H.id) || "")}:${String((H == null ? void 0 : H.revision) || "")}:${Number((H == null ? void 0 : H.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: g && u.showPanorama ? l : null,
      backgroundRevision: g ? `${m}:${ti(l)}` : "",
      coverageDeg: Lt(h.coverage),
      scene: y,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), D = ye;
    if (!D.syncState(k)) return !1;
    const ne = D.renderToTarget(`${m}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return ne ? (r.drawImage(ne, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Rs(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await vn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const m = await l.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function Fs(r, o) {
    const s = await new Promise((y) => r.toBlob(y, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const m = await vn.fetchApi("/upload/image", { method: "POST", body: l });
    if (!m || m.status !== 200) throw new Error(`upload failed (${m == null ? void 0 : m.status})`);
    const g = await m.json(), _ = String((g == null ? void 0 : g.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((g == null ? void 0 : g.subfolder) || "panorama_stickers"),
      storage: String((g == null ? void 0 : g.type) || "input")
    };
  }
  let Fa = null, La = !1;
  function jp() {
    const r = Gf(h.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = h.painting_layer, s = si();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Jc() {
    const r = String(e.id ?? "0"), o = fo.get(r);
    if (La && o) return o;
    const s = (async () => {
      var g, _, y, w, S, P, k, D, j, ne, H, Y;
      const l = si(), m = Gf(h.painting);
      if (m.totalPaintCount <= 0 && m.totalMaskCount <= 0) {
        h.painting_layer !== null && (h.painting_layer = null, Fa = l, gn());
        return;
      }
      if (Fa !== l && !La) {
        La = !0;
        try {
          Ka();
          const ae = ws(!1), pe = ((_ = (g = u.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, ae)) || null, oe = ((y = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : y.canvas) || null, be = ((w = pe == null ? void 0 : pe.committedMask) == null ? void 0 : w.canvas) || null, Ie = Math.max(1, Number(((S = pe == null ? void 0 : pe.descriptor) == null ? void 0 : S.width) || (oe == null ? void 0 : oe.width) || (be == null ? void 0 : be.width) || 2048)), je = Math.max(1, Number(((P = pe == null ? void 0 : pe.descriptor) == null ? void 0 : P.height) || (oe == null ? void 0 : oe.height) || (be == null ? void 0 : be.height) || 1024));
          (!oe && m.totalPaintCount > 0 || !be && m.totalMaskCount > 0) && ((!u._paintLayerSyncBlankSurface || Number(((k = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== Ie || Number(((D = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== je) && (u._paintLayerSyncBlankSurface = ji(Ie, je)), u._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ie, je));
          const ke = oe || m.totalPaintCount > 0 && ((j = u._paintLayerSyncBlankSurface) == null ? void 0 : j.canvas) || null, J = be || m.totalMaskCount > 0 && ((ne = u._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!ke && !J) return;
          let ue = null, ve = null;
          const Se = [];
          if (m.totalPaintCount > 0) {
            ue = await Fs(ke, `pano_paint_${r}.png`);
            for (const Te of ae) {
              const Re = String(Te || "").trim();
              if (!Re) continue;
              const Le = ((Y = (H = u.paintEngine) == null ? void 0 : H.getGroupDisplayCanvas) == null ? void 0 : Y.call(H, Re)) || null;
              if (!Le) continue;
              const We = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ye = await Fs(Le, `pano_group_${r}_${We}.png`);
              Ye && Se.push({
                id: Re,
                actionGroupId: Re,
                image: Ye
              });
            }
          }
          m.totalMaskCount > 0 && (ve = await Fs(J, `pano_mask_${r}.png`)), l === si() && (h.painting_layer = {
            paint: ue,
            mask: ve,
            groups: Se,
            revision: l
          }, Fa = l, gn());
        } catch (ae) {
          throw ae;
        } finally {
          La = !1;
        }
      }
    })();
    return fo.set(r, s), s.finally(() => {
      fo.get(r) === s && fo.delete(r);
    }), s;
  }
  function Er() {
    if (t === "cutout") {
      const y = Vc();
      if (y) return y;
      const w = Al(
        e,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return w || qf(e, "pano_input_images", ee, () => ge()) || null;
    }
    const r = Vc();
    if (r) return r;
    const o = qf(e, "pano_input_images", ee, () => ge());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((y) => String((y == null ? void 0 : y.name) || "")) : [], l = s.includes("erp_image"), m = s.includes("bg_erp");
    let g = [];
    return i && (l || m) ? g = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : g = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Al(e, g, () => ge(), `background:${g.join("|")}`);
  }
  function dr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Vp() {
    if (!B.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (u.showPanorama) {
      const s = Er();
      r = !!s && !dr(s);
    }
    if (u.showObjects) {
      const s = Array.isArray(h.stickers) ? h.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const m = Gc(l);
        if (m && !dr(m)) {
          o = !0;
          break;
        }
      }
    }
    return r && o ? "mixed" : r ? "background" : o ? "stickers" : "";
  }
  function ai() {
    const r = new Set(
      (h.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(h.assets || {}).forEach((o) => {
      r.has(o) || (delete h.assets[o], ee.delete(o));
    });
  }
  function Ls(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(q(r.y, -1, 1))
    };
  }
  function zs(r, o = null) {
    const { lon: s, lat: l } = Ls(r), m = fr();
    let g = m.x + (s / (2 * Math.PI) + 0.5) * m.w;
    const _ = m.y + (0.5 - l / Math.PI) * m.h;
    if (o !== null) {
      for (; g - o > m.w / 2; ) g -= m.w;
      for (; g - o < -m.w / 2; ) g += m.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function za(r) {
    const o = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Hn(0, 1, 0);
    Math.abs(kn(o, s)) > 0.999 && (s = Hn(0, 0, 1));
    const l = pi(go(s, o)), m = pi(go(o, l)), g = Math.tan(q(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Tt), _ = Math.tan(q(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Tt), y = Number(r.rot_deg || r.roll_deg || 0) * Tt, w = Math.cos(y), S = Math.sin(y);
    return {
      centerDir: o,
      right: l,
      up: m,
      tanX: g,
      tanY: _,
      cr: w,
      sr: S
    };
  }
  function hr(r, o, s) {
    const l = o * r.cr - s * r.sr, m = o * r.sr + s * r.cr;
    return pi(po(po(r.centerDir, mo(r.right, l)), mo(r.up, m)));
  }
  function Zc(r) {
    const o = za(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: m }) => hr(o, l * o.tanX, m * o.tanY));
  }
  function Qc(r, o, s) {
    const l = za(r), m = (o * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return hr(l, m, g);
  }
  function eu(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: q((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Hp(r) {
    var w, S, P, k;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.scale) || 1)), m = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), g = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.du) || 0), _ = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((D) => Ea(Da(D, s, l, m), g, _));
  }
  function Up(r) {
    const o = Ct((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, m = `${o}:${u.mode}:${Vi()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (u.mode === "frame") {
      const g = Be(), _ = g ? It(g) : null;
      return `${m}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Bp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      cn(r) ? "frame" : _t(r) ? "sticker" : "item",
      o,
      u.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Ji(r)
    ].join(":");
    if (u.mode === "frame") {
      const m = Be(), g = m ? It(m) : null;
      return `${l}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Kp() {
    var o;
    const r = String(((o = h.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? u.hqFrames && u.hqFrames > 0 ? [28, 20] : u.interaction ? [12, 9] : [20, 14] : r === "high" ? u.hqFrames && u.hqFrames > 0 ? [48, 36] : u.interaction ? [20, 14] : [36, 26] : u.hqFrames && u.hqFrames > 0 ? [40, 30] : u.interaction ? [16, 12] : [28, 20];
  }
  function tu() {
    var r;
    return !!R && !!((r = ye == null ? void 0 : ye.isSupported) != null && r.call(ye));
  }
  function nu(r, o) {
    return !tu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function $a() {
    return u.showObjects ? zp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function ja(r) {
    return !u.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : $p(r);
  }
  function ru() {
    var r, o;
    return ((o = (r = u.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Gp() {
    return ru() ? `${Us()}:mask_display` : "";
  }
  function $i(r) {
    if (!u.showMask) return r;
    const o = ru();
    if (!o) return r;
    const s = Gp(), l = r.reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.zIndex) || 0)), -1), m = (Array.isArray(h.stickers) ? h.stickers : []).reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.z_index) || 0)), -1), g = Math.max(l, m);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: g + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Va() {
    var l, m;
    const r = Ss(!0), o = Op(), s = [];
    for (const g of r) {
      if ((g == null ? void 0 : g.type) === "strokeGroup") {
        const _ = String(g.actionGroupId || g.id || "");
        if (!_) continue;
        const y = ((m = (l = u.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : m.call(l, _)) || null;
        if (!y) continue;
        s.push({
          id: `paint_group:${_}`,
          source: y,
          revision: `${Us()}:${_}`,
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((g == null ? void 0 : g.type) === "rasterObject") {
        const _ = g.item || null, y = Ct((_ == null ? void 0 : _.id) || g.id || "");
        if (!y) continue;
        const w = qc(_, () => ge());
        if (!w) continue;
        const S = Lp(w, g, o), P = (_ == null ? void 0 : _.transform) || {};
        s.push({
          id: `raster:${y}`,
          source: S,
          revision: [
            si(),
            (o == null ? void 0 : o.key) || "",
            y,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return $i(s);
  }
  function Wp(r, o = "modal_bg_gl") {
    const s = $a(), l = ja(s), m = dr(r), g = m ? ti(r) : "none", _ = u.showObjects ? Va() : $i([]), y = null, w = [
      o,
      g,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      _.length ? _.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ea({
        stateRevision: w,
        backgroundSource: m ? r : null,
        backgroundRevision: m ? `${o}:${g}` : "",
        coverageDeg: Lt(h.coverage),
        scene: s,
        textures: l,
        paintSource: y,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: m || l.length > 0 || _.length > 0
    };
  }
  function $s() {
    if (!R) return;
    const r = R.getContext("webgl2");
    if (r)
      r.viewport(0, 0, R.width, R.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = R.getContext("2d");
      o && (o.clearRect(0, 0, R.width, R.height), o.fillStyle = "#070707", o.fillRect(0, 0, R.width, R.height));
    }
    B.backgroundWasVisible = !1, B.backgroundDirty = !1;
  }
  function Yp(r, o, s, l = "modal_bg_gl") {
    var S;
    if (!nu(r, o)) return !1;
    if (!B.backgroundDirty && B.backgroundWasVisible) return !0;
    const { descriptor: m, hasContent: g } = Wp(s, l);
    if (!g || !ye.syncState(m))
      return $s(), !1;
    const y = ye.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (S = R == null ? void 0 : R.getContext) == null ? void 0 : S.call(R, "2d");
    return !y || !w ? ($s(), !1) : (w.clearRect(0, 0, R.width, R.height), w.drawImage(y, 0, 0, R.width, R.height), B.backgroundWasVisible = !0, B.backgroundDirty = !1, !0);
  }
  function qp(r = !1) {
    const o = I.width, s = I.height, l = fr();
    if (A.globalAlpha = 1, A.lineWidth = 1, r || (A.fillStyle = "#070707", A.fillRect(0, 0, o, s), A.fillStyle = "#070707", A.fillRect(l.x, l.y, l.w, l.h)), Ka(), Xc(
      A,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Er(),
      "modal_unwrap"
    ), u.showGrid && !u.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let g = 0; g <= 16; g += 1) {
        const _ = l.x + l.w * g / 16;
        A.beginPath(), A.moveTo(_, l.y), A.lineTo(_, l.y + l.h), A.stroke();
      }
      for (let g = 0; g <= 8; g += 1) {
        const _ = l.y + l.h * g / 8;
        A.beginPath(), A.moveTo(l.x, _), A.lineTo(l.x + l.w, _), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(l.x, l.y + l.h / 2), A.lineTo(l.x + l.w, l.y + l.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const m = l.y + l.h * 0.57;
      A.fillText("Left", l.x + l.w * 0.25, m), A.fillText("Front", l.x + l.w * 0.5, m), A.fillText("Right", l.x + l.w * 0.75, m), A.fillText("Back", l.x + 38, m), A.fillText("Back", l.x + l.w - 38, m);
    }
  }
  function iu(r, o, s = 1) {
    let l = !1;
    A.strokeStyle = o, A.lineWidth = s, A.beginPath();
    for (const m of r) {
      const g = Li(m);
      if (!g) {
        l = !1;
        continue;
      }
      l ? A.lineTo(g.x, g.y) : (A.moveTo(g.x, g.y), l = !0);
    }
    A.stroke();
  }
  function Xp(r = !1) {
    const o = I.width, s = I.height;
    if (r || (tu() ? A.clearRect(0, 0, o, s) : (A.fillStyle = "#070707", A.fillRect(0, 0, o, s))), Ka(), Xc(
      A,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: u.viewYaw,
        pitchDeg: u.viewPitch,
        fovDeg: u.viewFov,
        coverageDeg: Lt(h.coverage)
      },
      Er(),
      "modal_pano"
    ), u.showGrid && !u.fullscreen) {
      for (let m = -180; m <= 180; m += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push(Dn(m, _));
        iu(g, "#3f3f46", m % 90 === 0 ? 1.3 : 1);
      }
      for (let m = -75; m <= 75; m += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push(Dn(_, m));
        iu(g, m === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", m === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", l.forEach((m) => {
        const g = Li(m.dir);
        g && A.fillText(m.name, g.x, g.y + 24);
      });
    }
  }
  function Jp(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const m = o || Be();
      if (!m) return [];
      const g = s || It(m);
      return Dm(r, m, g);
    }
    return uu(r, l);
  }
  function Ha(r, o = null, s = null, l = null, m = null) {
    if (!r) return null;
    if (u.mode === "unwrap") {
      const _ = uu([r], m);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const g = oi(r);
    return g ? qn(g, o, s, l) : null;
  }
  function Zp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = xn(s, r.layerKind), m = cr(s, r.layerKind, l), g = (m == null ? void 0 : m.centerUv) || Ms(s, r.layerKind, l), _ = u.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, y = [], w = u.mode === "frame" ? Be() : null, S = w ? It(w) : null;
    for (const oe of l) {
      const be = (oe == null ? void 0 : oe.geometry) || null, Ie = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], je = Jp(Ie, w, S, _).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y));
      if (!je.length) continue;
      const ke = pr(String((oe == null ? void 0 : oe.toolKind) || "pen")), J = nn[ke] || nn[Jn];
      y.push({
        points: je,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((J == null ? void 0 : J.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || r.layerKind || "paint")
      });
    }
    const P = Ha(g, null, w, S, _);
    if (!P) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, oe), oe;
    }
    const D = tp(m).map((oe) => Ha(oe, P.x, w, S, _)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (D.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, oe), oe;
    }
    const j = (oe, be) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: oe,
      b: be
    }), ne = j(D[0], D[1]), H = j(D[1], D[2]), Y = j(D[2], D[3]), ae = j(D[3], D[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...H },
        { edge: "bottom", ...Y },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: y,
      visible: !0
    };
    return u._strokeGeomCache.set(o, pe), pe;
  }
  function Qp(r, o) {
    const s = u.mode === "frame" ? Be() : null, l = s ? It(s) : null, m = eu(r), g = u.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = Ha(m, null, s, l, g), w = Hp(r).map((D) => Ha(D, (_ == null ? void 0 : _.x) ?? null, s, l, g)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(w) || w.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return u._strokeGeomCache.set(o, D), D;
    }
    const S = w.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: S.reduce((D, j) => D + Number(j.x || 0), 0) / S.length,
        y: S.reduce((D, j) => D + Number(j.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return u._strokeGeomCache.set(o, k), k;
  }
  function qn(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const pe = s || Be(), oe = l || It(pe);
      if (!pe || !oe) return null;
      const be = pe ? Hi(pe, r) : null;
      return be ? {
        x: Number(oe.x || 0) + Number(be.x || 0) * Number(oe.w || 0),
        y: Number(oe.y || 0) + Number(be.y || 0) * Number(oe.h || 0),
        z: 1
      } : null;
    }
    if (u.mode === "unwrap") return zs(r, o);
    const { right: m, up: g, fwd: _ } = Ds(), y = kn(r, m), w = kn(r, g), S = kn(r, _), P = I.width, k = I.height, D = u.viewFov * Tt, j = 2 * Math.atan(Math.tan(D / 2) * (k / Math.max(P, 1))), ne = P / 2 / Math.tan(D / 2), H = k / 2 / Math.tan(j / 2), Y = Math.max(S, 1e-4), ae = Math.max(P, k) * 2;
    return {
      x: q(P / 2 + y / Y * ne, -ae, P + ae),
      y: q(k / 2 - w / Y * H, -ae, k + ae),
      z: Y
    };
  }
  function em(r) {
    const o = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = u.mode === "frame" ? Be() : null, l = s ? It(s) : null, m = qn(o, null, s, l);
    if (!m) return { visible: !1 };
    const g = za(r), y = Zc(r).map((Ie) => qn(Ie, m.x, s, l)).filter((Ie) => Number.isFinite(Ie == null ? void 0 : Ie.x) && Number.isFinite(Ie == null ? void 0 : Ie.y));
    if (y.length < 4) return { visible: !1 };
    const w = hr(g, 0, g.tanY), S = hr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), P = qn(w, m.x, s, l);
    if (!P) return { visible: !1 };
    const k = qn(S, (P == null ? void 0 : P.x) ?? m.x, s, l), D = ((k == null ? void 0 : k.x) ?? P.x) - P.x, j = ((k == null ? void 0 : k.y) ?? P.y) - P.y, ne = Math.hypot(D, j) || 1, H = {
      x: P.x + D / ne * 30,
      y: P.y + j / ne * 30
    }, Y = qn(hr(g, 0, g.tanY), m.x, s, l), ae = qn(hr(g, g.tanX, 0), m.x, s, l), pe = qn(hr(g, 0, -g.tanY), m.x, s, l), oe = qn(hr(g, -g.tanX, 0), m.x, s, l);
    if (!Y || !ae || !pe || !oe) return { visible: !1 };
    const be = [
      {
        edge: "top",
        x: Y.x,
        y: Y.y,
        a: { x: y[0].x, y: y[0].y },
        b: { x: y[1].x, y: y[1].y }
      },
      {
        edge: "right",
        x: ae.x,
        y: ae.y,
        a: { x: y[1].x, y: y[1].y },
        b: { x: y[2].x, y: y[2].y }
      },
      {
        edge: "bottom",
        x: pe.x,
        y: pe.y,
        a: { x: y[2].x, y: y[2].y },
        b: { x: y[3].x, y: y[3].y }
      },
      {
        edge: "left",
        x: oe.x,
        y: oe.y,
        a: { x: y[3].x, y: y[3].y },
        b: { x: y[0].x, y: y[0].y }
      }
    ];
    return {
      center: { x: m.x, y: m.y },
      corners: y.map((Ie) => ({ x: Ie.x, y: Ie.y })),
      edgeMidpoints: be,
      rotateStemBase: { x: P.x, y: P.y },
      rotateHandle: H,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Ot(r) {
    if (Pt(r)) {
      const m = String(r.actionGroupId || r.id || "").trim(), g = sp(m, r.layerKind), _ = u._strokeGeomCache.get(g);
      return _ || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Zp(r, g));
    }
    if (Ut(r)) {
      const m = Up(r), g = u._strokeGeomCache.get(m);
      return g || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Qp(r, m));
    }
    const o = Bp(r), s = u._strokeGeomCache.get(o);
    if (s) return s;
    u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear();
    const l = em(r);
    return u._strokeGeomCache.set(o, l), l;
  }
  function Ua(r, o, s, l = null) {
    const m = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let y = 0, w = 0;
      o === 0 ? (y = _, w = 0) : o === 1 ? (y = 1, w = _) : o === 2 ? (y = 1 - _, w = 1) : (y = 0, w = 1 - _);
      const S = Qc(r, y, w), P = u.mode === "unwrap" ? zs(S, l) : Li(S);
      P && m.push(P);
    }
    return m;
  }
  function tm(r, o) {
    const s = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = u.mode === "unwrap" ? zs(s) : null, m = l ? l.x : null, g = u.mode === "pano" ? 28 : 20, _ = [
      Ua(r, 0, g, m),
      Ua(r, 1, g, m),
      Ua(r, 2, g, m),
      Ua(r, 3, g, m)
    ];
    A.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", A.lineWidth = o ? 2 : 1, A.beginPath();
    let y = !1;
    for (const w of _)
      for (const S of w)
        y ? A.lineTo(S.x, S.y) : (A.moveTo(S.x, S.y), y = !0);
    A.closePath(), A.stroke();
  }
  function nm() {
    const r = [...Array.isArray(h.shots) ? h.shots : []], o = [...Array.isArray(h.stickers) ? h.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function js() {
    const r = [...Array.isArray(h.shots) ? h.shots : []];
    return [...[...Array.isArray(h.stickers) ? h.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function Ba(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function rm(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const m = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, y = o ? 4.4 : 3.4, w = o ? 24 : 20;
    Ba(A, l), A.fillStyle = g, A.fill(), A.strokeStyle = m, A.lineWidth = _, A.stroke(), A.save(), A.strokeStyle = m, A.lineWidth = y, A.lineCap = "round";
    for (let D = 0; D < 4; D += 1) {
      const j = l[D], ne = l[(D + 3) % 4], H = l[(D + 1) % 4], Y = j.x - ne.x, ae = j.y - ne.y, pe = Math.hypot(Y, ae) || 1, oe = H.x - j.x, be = H.y - j.y, Ie = Math.hypot(oe, be) || 1;
      A.beginPath(), A.moveTo(j.x, j.y), A.lineTo(j.x - Y / pe * w, j.y - ae / pe * w), A.moveTo(j.x, j.y), A.lineTo(j.x + oe / Ie * w, j.y + be / Ie * w), A.stroke();
    }
    const S = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], P = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, k = o ? 12 : 9;
    S.forEach((D) => {
      const j = P.x - D.x, ne = P.y - D.y, H = Math.hypot(j, ne) || 1;
      A.beginPath(), A.moveTo(D.x, D.y), A.lineTo(D.x + j / H * k, D.y + ne / H * k), A.stroke();
    }), A.restore();
  }
  function im(r, o, s, l) {
    if (cn(r)) {
      rm(o, s, l);
      return;
    }
    if (_t(r)) {
      const m = A.globalAlpha;
      A.globalAlpha = pp(r), u.mode === "frame" ? (A.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = s ? 2 : 1, Ba(A, o.corners), A.stroke()) : tm(r, s), A.globalAlpha = m;
      return;
    }
    A.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ba(A, o.corners), A.fill(), A.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = s ? 2.8 : 1.9, Ba(A, o.corners), A.stroke();
  }
  function am(r, o, s) {
    A.fillStyle = s, o.corners.forEach((l) => {
      A.beginPath(), A.arc(l.x, l.y, 6.5, 0, Math.PI * 2), A.fill();
    }), cn(r) && (A.strokeStyle = s, A.lineCap = "round", A.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var P, k, D, j;
      const m = (((P = l.b) == null ? void 0 : P.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), g = (((D = l.b) == null ? void 0 : D.y) ?? l.y) - (((j = l.a) == null ? void 0 : j.y) ?? l.y), _ = Math.hypot(m, g) || 1, y = m / _, w = g / _, S = 10;
      A.beginPath(), A.moveTo(l.x - y * S, l.y - w * S), A.lineTo(l.x + y * S, l.y + w * S), A.stroke();
    }), A.lineCap = "butt"), Pt(r) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), A.lineTo(o.rotateHandle.x, o.rotateHandle.y), A.stroke(), A.fillStyle = s, A.beginPath(), A.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function om() {
    var y;
    const [r, o] = Kp(), s = wn(), l = s.length > 1, m = t === "cutout" ? nm() : Wn(), g = m.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${cn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== m || u._sortedItemsCache.orderKey !== g) && (u._sortedItemsCache = {
      src: m,
      orderKey: g,
      sorted: [...m]
    });
    const _ = u._sortedItemsCache.sorted;
    for (const w of _) {
      const S = !l && cp(w);
      if (u.mode === "frame" && !S || !u.showObjects && !cn(w)) continue;
      const P = _t(w), k = cn(w), D = ur(w);
      if (!P && !k)
        continue;
      const j = Ot(w);
      if (!(t !== "stickers" && !j.visible) && (im(w, j, S, D), S && j.visible)) {
        const ne = D ? "#ff4d4f" : P && Dt(w) ? "#f59e0b" : "#0070f3";
        am(w, j, ne);
      }
    }
    if (l) {
      const w = ks(s);
      if (w != null && w.visible) {
        const S = Ps(s) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let P = 1; P < w.corners.length; P += 1) A.lineTo(w.corners[P].x, w.corners[P].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = S, w.corners.forEach((P) => {
          A.beginPath(), A.arc(P.x, P.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      s.forEach((w) => {
        if (!Pt(w) && !Ut(w)) return;
        const S = Ot(w);
        if (!(S != null && S.visible)) return;
        const P = ur(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(S.corners[0].x, S.corners[0].y);
        for (let k = 1; k < S.corners.length; k += 1) A.lineTo(S.corners[k].x, S.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = P, S.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((y = u.interaction) == null ? void 0 : y.kind) === "marquee_select") {
      const w = Nu(u.interaction.start, u.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    u.hqFrames && r >= 40 && o >= 30 && (u.hqFrames -= 1, u.hqFrames > 0 && ge());
  }
  function sm(r) {
    const o = wr(r), s = q(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function au(r, o = !1) {
    const s = q(na(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function lm(r) {
    if (!G || !r) return !1;
    const o = G.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || G.clientWidth || 0)), l = Math.round(Number(o.clientHeight || G.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function cm() {
    return `obj:${Number(u.objectVisualRevision || 0)}`;
  }
  function um(r, o = {}) {
    if (!r) return "";
    const s = Er(), l = s && dr(s) ? ti(s) : "no_bg", m = sm(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      Us(),
      cm(),
      Ta(),
      l,
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "mask:1" : "mask:0",
      `${m.width}x${m.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function fm() {
    var D, j, ne, H;
    if (u.outputPreviewRect = null, N.outputPreviewToggle.visible = u.mode !== "frame" && !!Be(), t !== "cutout" || !N.cameraPreview) return;
    if (u.mode === "frame") {
      N.cameraPreview.visible = !1, N.cameraPreview.settled = !1;
      return;
    }
    const r = Be();
    if (!r) {
      N.cameraPreview.visible = !0, N.cameraPreview.ready = !1, N.cameraPreview.settled = !1, N.cameraPreview.expanded = !!u.outputPreviewExpanded, N.cameraPreview.width = 220, N.cameraPreview.height = 132, N.cameraPreview.label = "Add Frame to preview", (D = he == null ? void 0 : he.clearScene) == null || D.call(he), (j = L == null ? void 0 : L.requestRender) == null || j.call(L);
      return;
    }
    N.cameraPreview.visible = !0;
    const o = Er();
    if (!r || !he || !L) {
      N.cameraPreview.ready = !1, N.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", N.cameraPreview.expanded = !!u.outputPreviewExpanded, N.cameraPreview.settled = !1, N.cameraPreview.width = 220, N.cameraPreview.height = 132, (ne = he == null ? void 0 : he.clearScene) == null || ne.call(he), (H = L == null ? void 0 : L.requestRender) == null || H.call(L);
      return;
    }
    const s = au(r, !!u.outputPreviewExpanded);
    N.cameraPreview.width = s.width, N.cameraPreview.height = s.height, N.cameraPreview.expanded = !!u.outputPreviewExpanded;
    const l = $a(), m = ja(l), g = dr(o), _ = g ? ti(o) : "none", y = u.showObjects ? Va() : $i([]), w = ea({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((Y) => String((Y == null ? void 0 : Y.id) || "")).join(",") : "none",
        Array.isArray(m) ? m.map((Y) => `${String((Y == null ? void 0 : Y.assetId) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}`).join(",") : "none",
        y.length ? y.map((Y) => `${String((Y == null ? void 0 : Y.id) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}:${Number((Y == null ? void 0 : Y.zIndex) || 0)}`).join(",") : "paint:none",
        u.showPanorama ? "panorama:1" : "panorama:0",
        u.showObjects ? "objects:1" : "objects:0",
        u.showMask ? "showMask:1" : "showMask:0",
        Lt(h.coverage)
      ].join("|"),
      backgroundSource: g && u.showPanorama ? o : null,
      backgroundRevision: g ? `cutout_preview:${_}` : "",
      coverageDeg: Lt(h.coverage),
      scene: l,
      textures: m,
      rasterEntries: y,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(g || m.length > 0 || y.length > 0)) {
      N.cameraPreview.ready = !1, N.cameraPreview.label = "Connect ERP image", N.cameraPreview.settled = !1, he.clearScene(), L.requestRender();
      return;
    }
    if (u.showPanorama && !g && m.length === 0 && y.length === 0) {
      N.cameraPreview.ready = !1, N.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", N.cameraPreview.settled = !1, he.clearScene(), L.requestRender();
      return;
    }
    he.syncScene(w), L.setView(wr(r));
    const P = lm(s), k = P ? L.present() : !1;
    P || L.requestRender(), N.cameraPreview.ready = !0, N.cameraPreview.label = P && k ? "" : "Loading preview", N.cameraPreview.settled = P && k && B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame;
  }
  function dm(r, o, s, l = {}) {
    if (!he || !s) return !1;
    const m = Er(), g = $a(), _ = ja(g), y = dr(m), w = u.showObjects ? Va() : $i([]);
    return y || _.length > 0 || w.length > 0 ? (he.syncScene(ea({
      stateRevision: um(s, l),
      backgroundSource: y && u.showPanorama ? m : null,
      backgroundRevision: y ? `cutout_frame:${ti(m)}` : "",
      coverageDeg: Lt(h.coverage),
      scene: g,
      textures: _,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), he.renderShotToContext(r, o, s, l)) : !1;
  }
  function Vs(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return Qc(r, s, l);
  }
  function oi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return Hn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function hm(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function pm(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Bt(r, "widthScale", 1),
      pressureLike: Bt(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function mm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Hs(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", m = /* @__PURE__ */ new WeakMap();
    if (l) {
      let H = null;
      r.forEach((Y) => {
        const ae = Number((Y == null ? void 0 : Y.u) || 0), pe = Number((Y == null ? void 0 : Y.v) || 0), oe = (ae % 1 + 1) % 1, be = H == null ? oe : H + mn(oe, (H % 1 + 1) % 1);
        m.set(Y, { x: be, y: pe }), H = be;
      });
    }
    const g = (H) => !H || typeof H != "object" ? { x: 0, y: 0 } : m.get(H) || hm(H), _ = (H, Y, ae, pe = {}) => {
      const oe = l ? (Number(Y) % 1 + 1) % 1 : Number(Y), be = pm(H, oe, ae, pe);
      return m.set(be, { x: Number(Y), y: Number(ae) }), be;
    }, y = (H, Y, ae) => {
      const pe = g(H), oe = g(Y);
      return _(H, Qn(pe.x, oe.x, ae), Qn(pe.y, oe.y, ae), {
        t: Qn(Number((H == null ? void 0 : H.t) || 0), Number((Y == null ? void 0 : Y.t) || 0), ae),
        widthScale: Qn(Bt(H, "widthScale", 1), Bt(Y, "widthScale", 1), ae),
        pressureLike: Qn(Bt(H, "pressureLike", 1), Bt(Y, "pressureLike", 1), ae)
      });
    };
    if (r.length === 1) {
      const H = g(r[0]);
      return [_(r[0], H.x, H.y)];
    }
    const w = mm(o, s), S = (H, Y) => {
      const ae = [0];
      for (let ue = 1; ue < H.length; ue += 1) {
        const ve = g(H[ue - 1]), Se = g(H[ue]);
        ae.push(ae[ue - 1] + Math.hypot(Se.x - ve.x, Se.y - ve.y));
      }
      const pe = ae[ae.length - 1] || 0;
      if (pe <= 1e-8) {
        const ue = H[0], ve = g(ue);
        return [_(ue, ve.x, ve.y)];
      }
      const oe = [];
      let be = 0;
      for (let ue = 0; ue <= pe + 1e-9; ue += Y) {
        for (; be < ae.length - 2 && ae[be + 1] < ue; ) be += 1;
        const ve = ae[be], Se = ae[be + 1], Te = Math.max(1e-8, Se - ve);
        oe.push(y(H[be], H[be + 1], q((ue - ve) / Te, 0, 1)));
      }
      const Ie = H[H.length - 1], je = g(Ie), ke = oe[oe.length - 1], J = ke ? g(ke) : null;
      return (!J || Math.hypot(J.x - je.x, J.y - je.y) > Y * 0.35) && oe.push(_(Ie, je.x, je.y)), oe;
    }, P = (H) => {
      if (!Array.isArray(H) || H.length < 3) return H ? H.slice() : [];
      const Y = g(H[0]), ae = [_(H[0], Y.x, Y.y)];
      for (let be = 0; be < H.length - 1; be += 1) {
        const Ie = H[be], je = H[be + 1], ke = g(Ie), J = g(je), ue = _(
          Ie,
          ke.x * 0.75 + J.x * 0.25,
          ke.y * 0.75 + J.y * 0.25,
          {
            t: Number(Ie.t || 0) * 0.75 + Number(je.t || 0) * 0.25,
            widthScale: Bt(Ie, "widthScale", 1) * 0.75 + Bt(je, "widthScale", 1) * 0.25,
            pressureLike: Bt(Ie, "pressureLike", 1) * 0.75 + Bt(je, "pressureLike", 1) * 0.25
          }
        ), ve = _(
          Ie,
          ke.x * 0.25 + J.x * 0.75,
          ke.y * 0.25 + J.y * 0.75,
          {
            t: Number(Ie.t || 0) * 0.25 + Number(je.t || 0) * 0.75,
            widthScale: Bt(Ie, "widthScale", 1) * 0.25 + Bt(je, "widthScale", 1) * 0.75,
            pressureLike: Bt(Ie, "pressureLike", 1) * 0.25 + Bt(je, "pressureLike", 1) * 0.75
          }
        );
        ae.push(ue, ve);
      }
      const pe = H[H.length - 1], oe = g(pe);
      return ae.push(_(pe, oe.x, oe.y)), ae;
    }, k = S(r, w);
    if (k.length < 3) return k;
    const D = s ? 2 : 1;
    let j = k.slice();
    for (let H = 0; H < D; H += 1) j = P(j);
    return S(j, Math.max(w * 0.75, 55e-5));
  }
  function Bt(r, o, s = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function gm(r) {
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
  function ji(r, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const m = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return m && (m.clearRect(0, 0, l.width, l.height), m.imageSmoothingEnabled = !0), { canvas: l, ctx: m };
  }
  function Vi() {
    const r = Ga();
    return `${String(u.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function si() {
    const r = Ga();
    return `${String(u.paintStrokeRevision)}:${String(u.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function Us() {
    const r = Ta(), o = si();
    return r ? `${o}:${r}` : o;
  }
  function bm() {
    u.paintStrokeRevision += 1, u.paintCompositeRevision += 1;
  }
  function ym() {
    u.paintCompositeRevision += 1;
  }
  function vm() {
    u._sortedItemsCache = null, u._strokeGeomCache.clear();
  }
  function ou() {
    var r, o;
    u.paintEngineRevisionKey = null, (o = (r = u.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, h), u.paintEngineRevisionKey = Vi();
  }
  function su() {
    h.painting_layer !== null && (h.painting_layer = null), Fa = "";
  }
  function Rt() {
    u.objectVisualRevision = Number(u.objectVisualRevision || 0) + 1, vm(), B.backgroundDirty = !0, B.dirty = !0;
  }
  function Sn({ rebuildPaintEngine: r = !1 } = {}) {
    su(), bm(), Rt(), r && ou();
  }
  function li() {
    su(), ym(), Rt();
  }
  function Ka() {
    var l;
    const r = Ga(), o = `${r.width}x${r.height}`;
    u.paintEngineDescriptorKey !== o && (u.paintEngine = jl(r), u.paintEngineDescriptorKey = o, u.paintEngineRevisionKey = "");
    const s = Vi();
    u.paintEngineRevisionKey !== s && (u.paintEngineRevisionKey = s, (l = u.paintEngine) == null || l.rebuildCommitted(h));
  }
  function Ga() {
    const r = Math.max(1, Number((h == null ? void 0 : h.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function un() {
    return Ga();
  }
  function _m(r, o, s, l, m = null) {
    const g = gm(r), _ = Bt(o, "widthScale", 1) * Bt(o, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? m ? Math.max(0.5, g.value / Math.max(1e-6, Number(m.hFOV_deg || 90) * Tt) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function xm(r, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), m = String((o == null ? void 0 : o.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (r.globalAlpha = m === "marker" ? 0.7 * _ : 1, l === "mask") {
      r.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (m === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const y = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = g ? Math.max(0.28, Number(y.a ?? 1) * 0.88) : Math.max(0.12, Number(y.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(y.r || 0) * 255)}, ${Math.round(Number(y.g || 0) * 255)}, ${Math.round(Number(y.b || 0) * 255)}, ${w})`;
  }
  function wm(r, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function Sm(r, o, s, l, m = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    r.save(), xm(r, s, m);
    const _ = (y) => wm(r, y, g);
    if (o.length === 1) {
      _(o[0]), r.restore();
      return;
    }
    for (let y = 0; y < o.length - 1; y += 1) {
      const w = o[y], S = o[y + 1];
      if (!w || !S) continue;
      const P = Number(w.x || 0), k = Number(w.y || 0), D = Number(S.x || 0), j = Number(S.y || 0), ne = Math.max(0.5, Math.min(g, Number(w.radiusPx || 0.5))), H = Math.max(0.5, Math.min(g, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(k) || !Number.isFinite(D) || !Number.isFinite(j) || !Number.isFinite(ne) || !Number.isFinite(H)) continue;
      const Y = D - P, ae = j - k, pe = Math.hypot(Y, ae);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        _(w);
        continue;
      }
      if (pe > Math.max(l.w, l.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(ne, H)), be = Math.max(0.35, Math.min(oe * 0.4, 2.25)), Ie = Math.max(1, Math.ceil(pe / be));
      for (let je = 0; je <= Ie; je += 1) {
        const ke = je / Ie;
        _({
          x: Qn(P, D, ke),
          y: Qn(k, j, ke),
          radiusPx: Qn(ne, H, ke)
        });
      }
    }
    _(o[o.length - 1]), r.restore();
  }
  function Nm(r, o, s, l) {
    Sm(r, o, s, l, { preview: !1 });
  }
  function Mm(r, o, s, l, m) {
    var y, w, S, P;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const g = "u", _ = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const k = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(k.r || 0) * 255)}, ${Math.round(Number(k.g || 0) * 255)}, ${Math.round(Number(k.b || 0) * 255)}, ${Number(k.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((y = o[0]) == null ? void 0 : y[g]) || 0) * l.w, Number(((w = o[0]) == null ? void 0 : w[_]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      r.lineTo(Number(((S = o[k]) == null ? void 0 : S[g]) || 0) * l.w, Number(((P = o[k]) == null ? void 0 : P[_]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function lu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function km(r, o) {
    const s = lu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: _m(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function cu(r, o, s = null) {
    var y, w, S, P;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((y = r.canvas) == null ? void 0 : y.width) || 0), h: Number(((w = r.canvas) == null ? void 0 : w.height) || 0) }, m = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return Mm(r.ctx, lu(m), m, l), !0;
    const _ = km(m, l);
    return _.length ? (Nm(r.ctx, _, m, l), !0) : !1;
  }
  function Pm(r, o, s, l = 8) {
    const m = new Uint8Array(o * s), g = [], _ = new Int32Array(o * s), y = new Int32Array(o * s);
    for (let w = 0; w < s; w += 1)
      for (let S = 0; S < o; S += 1) {
        const P = w * o + S;
        if (m[P] || r[P] <= l) continue;
        let k = 0, D = 0;
        _[D] = S, y[D] = w, D += 1, m[P] = 1;
        const j = [];
        let ne = S, H = w, Y = S, ae = w;
        for (; k < D; ) {
          const pe = _[k], oe = y[k];
          k += 1, j.push({ x: pe, y: oe }), pe < ne && (ne = pe), oe < H && (H = oe), pe > Y && (Y = pe), oe > ae && (ae = oe);
          const be = [
            [(pe - 1 + o) % o, oe],
            [(pe + 1) % o, oe],
            [pe, oe - 1],
            [pe, oe + 1]
          ];
          for (const [Ie, je] of be) {
            if (je < 0 || je >= s) continue;
            const ke = je * o + Ie;
            m[ke] || r[ke] <= l || (m[ke] = 1, _[D] = Ie, y[D] = je, D += 1);
          }
        }
        g.push({ pixels: j, minX: ne, minY: H, maxX: Y, maxY: ae });
      }
    return g;
  }
  function Am(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, S) => w - S);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, m = 0;
    for (let w = 0; w < s.length; w += 1) {
      const S = s[w], k = (w === s.length - 1 ? s[0] + o : s[w + 1]) - S - 1;
      k > l && (l = k, m = w);
    }
    const g = (s[(m + 1) % s.length] + o) % o;
    let _ = 1 / 0, y = -1 / 0;
    for (const w of s) {
      const S = (w - g + o) % o;
      _ = Math.min(_, S), y = Math.max(y, S);
    }
    return {
      startX: g,
      widthPx: Math.max(1, y - _ + 1)
    };
  }
  function Cm(r, o, s = {}) {
    var S;
    const l = Number((r == null ? void 0 : r.width) || 0), m = Number((r == null ? void 0 : r.height) || 0), g = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!g || l < 1 || m < 1) return [];
    const _ = g.getImageData(0, 0, l, m), y = new Uint8Array(l * m);
    for (let P = 0; P < y.length; P += 1) y[P] = _.data[P * 4 + 3];
    return Pm(y, l, m, 8).map((P, k) => {
      const D = Am(P, l);
      if (!D) return null;
      const j = Number(D.widthPx || 0), ne = P.maxY - P.minY + 1, H = Number(D.startX || 0), Y = document.createElement("canvas");
      Y.width = j, Y.height = ne;
      const ae = Y.getContext("2d");
      if (!ae) return null;
      const pe = ae.createImageData(j, ne);
      return P.pixels.forEach(({ x: oe, y: be }) => {
        const Ie = (be * l + oe) * 4, je = (Number(oe || 0) - H + l) % l, ke = ((be - P.minY) * j + je) * 4;
        pe.data[ke + 0] = _.data[Ie + 0], pe.data[ke + 1] = _.data[Ie + 1], pe.data[ke + 2] = _.data[Ie + 2], pe.data[ke + 3] = _.data[Ie + 3];
      }), ae.putImageData(pe, 0, 0), {
        id: mi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + k * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / m,
          u1: j / l,
          v1: (P.maxY + 1) / m
        },
        rasterDataUrl: Y.toDataURL("image/png"),
        transform: {
          du: H / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Hi(r, o) {
    if (!r || !o) return null;
    const s = za(r), l = kn(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const m = kn(o, s.right) / l, g = kn(o, s.up) / l, _ = m * s.cr + g * s.sr, y = -m * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - y / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Im(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (u.mode === "unwrap") {
      const s = fr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Li(oi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function uu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (u.mode === "unwrap") {
      const l = fr();
      return r.map((m) => {
        const g = (Number(m.u || 0) % 1 + 1) % 1, _ = o == null ? g : Number(o || 0) + mn(g, o);
        return {
          x: l.x + _ * l.w,
          y: l.y + Number(m.v || 0) * l.h
        };
      });
    }
    const s = r.map((l) => Li(oi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Tm(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], m = r[(s + 1) % r.length];
      if (!l || !m || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(m.x) || !Number.isFinite(m.y) || Math.hypot(Number(m.x) - Number(l.x), Number(m.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function Em(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = oi(m), _ = Hi(o, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return Tm(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Dm(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = oi(m), _ = Hi(o, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function Om() {
    var m;
    const r = Be(), o = It(r);
    if (!r || !o) return !1;
    A.save(), A.fillStyle = "#050505", A.fillRect(0, 0, I.width, I.height), A.shadowColor = "rgba(0, 0, 0, 0.45)", A.shadowBlur = 24, A.shadowOffsetX = 0, A.shadowOffsetY = 10, A.fillStyle = "rgba(14, 14, 14, 1)", A.fillRect(o.x, o.y, o.w, o.h), A.restore(), A.save(), A.beginPath(), A.rect(o.x, o.y, o.w, o.h), A.clip();
    const s = u.interaction ? "draft" : String(((m = h.ui_settings) == null ? void 0 : m.preview_quality) || "balanced");
    return dm(A, o, r, { quality: s }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(o.x, o.y, o.w, o.h)), A.restore(), A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.12)", A.lineWidth = 1, A.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), A.restore(), !0;
  }
  function Rm() {
    var w, S;
    if (((w = u.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const r = u.interaction.stroke, o = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (u.mode === "frame") {
      const P = Be(), k = It(P);
      s = Em(o, P, k);
    } else
      s = Im(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", m = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(m.r || 0) * 255), _ = Math.round(Number(m.g || 0) * 255), y = Math.round(Number(m.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let P = 1; P < s.length; P++) A.lineTo(Number(s[P].x || 0), Number(s[P].y || 0));
    A.closePath(), l ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${g},${_},${y},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Fm() {
    u.mode === "frame" ? Om() : u.mode === "unwrap" ? qp(!1) : Xp(!1), t === "cutout" && fm(), om(), Rm(), N.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && Ue(), B.hasPresentedFrame || (B.hasPresentedFrame = !0, R.style.opacity = "1"), t === "cutout" && N.cameraPreview && (N.cameraPreview.settled = B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame && u.mode !== "frame");
    const r = Vp();
    r ? (K == null || K.removeAttribute("data-stage-ready"), K == null || K.setAttribute("data-stage-loading-kind", r)) : (K == null || K.setAttribute("data-stage-ready", ""), K == null || K.removeAttribute("data-stage-loading-kind"));
  }
  function Lm(r = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function zm() {
    e.__panoLiveStateOverride = h, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = op();
  }
  function ge(r = {}) {
    var y, w, S, P, k, D, j, ne, H, Y;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), m = String(((y = u.interaction) == null ? void 0 : y.kind) || "");
    (!o || m === "view" || m === "pan_frame" || Lm() || !!((w = u.viewTween) != null && w.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (B.backgroundDirty = !0), o && Ec() && (u.livePaintInteractionRevision += 1, B.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Es(), Ra()), zm(), s && ((P = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || P.call(S), (k = e.setDirtyCanvas) == null || k.call(e, !0, !1)), s && !o && ((j = (D = e.graph) == null ? void 0 : D.setDirtyCanvas) == null || j.call(D, !0, !0), (Y = (H = (ne = Sr) == null ? void 0 : ne.canvas) == null ? void 0 : H.setDirty) == null || Y.call(H, !0, !0)), B.dirty = !0;
  }
  function fu() {
    const r = I.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return I.width !== o || I.height !== s || R.width !== o || R.height !== s ? (I.width = o, I.height = s, R.width = o, R.height = s, B.backgroundDirty = !0, B.dirty = !0, t === "cutout" && (B.pendingStableLayoutFrames = Math.max(Number(B.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Bs(r = performance.now()) {
    var o;
    if (B.running) {
      if (B.lastTickTs = r, u.outputPreviewAnim !== u.outputPreviewAnimTo) {
        const s = Math.max(1, Number(u.outputPreviewAnimDurationMs)), l = q((r - Number(u.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? bx(l) : _x(l);
        u.outputPreviewAnim = Qn(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, g), B.dirty = !0, l >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
      }
      if ((o = u.viewTween) != null && o.active) {
        const s = u.viewTween, l = q((r - s.startTs) / s.durationMs, 0, 1), m = gx(l);
        u.viewYaw = zt(s.startYaw + s.deltaYaw * m), u.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * m, u.viewFov = s.startFov + (s.targetFov - s.startFov) * m, B.backgroundDirty = !0, B.dirty = !0, l >= 1 && (u.viewTween = null);
      }
      if (u.viewInertia.vx = Number(Ft.state.inertia.vx || 0), u.viewInertia.vy = Number(Ft.state.inertia.vy || 0), u.viewInertia.active = !!Ft.state.inertia.active, Ft.stepInertia(r) && (u.viewInertia.vx = Number(Ft.state.inertia.vx || 0), u.viewInertia.vy = Number(Ft.state.inertia.vy || 0), u.viewInertia.active = !!Ft.state.inertia.active, B.backgroundDirty = !0, B.dirty = !0), (B.dirty || r - B.lastSizeCheckTs >= 220) && (fu(), B.lastSizeCheckTs = r), B.pendingStableLayoutFrames > 0 && (B.pendingStableLayoutFrames -= 1, B.dirty = !0), B.dirty) {
        if (B.pendingStableLayoutFrames > 0) {
          B.rafId = requestAnimationFrame(Bs);
          return;
        }
        B.dirty = !1, Fm();
      }
      B.rafId = requestAnimationFrame(Bs);
    }
  }
  function $m() {
    B.running = !1, B.rafId && cancelAnimationFrame(B.rafId), B.rafId = 0;
  }
  function ft() {
    i || (u.historyController.commitActionGroup(JSON.stringify(Wf(h))), Js());
  }
  function Ks(r) {
    if (i) return;
    const o = r < 0 ? u.historyController.undo() : u.historyController.redo();
    if (Js(), !o) return;
    const s = JSON.parse(o);
    Object.keys(h).forEach((l) => delete h[l]), Object.assign(h, s), u.selectedId = t === "stickers" || t === "cutout" ? h.active.selected_sticker_id : h.active.selected_shot_id, u.selectedIds = u.selectedId ? [u.selectedId] : [], Sn(), tn(), He(), gn(), ge({ cause: "cutout_frame" });
  }
  function du() {
    var s, l;
    const r = Array.isArray((s = u.historyController) == null ? void 0 : s.entries) ? u.historyController.entries : [], o = Number((l = u.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function tn() {
    Zh();
    const r = e1({
      editor: u,
      swatches: To,
      paintColorPopOpen: we ? !we.hidden : !1,
      colorToCss: On,
      colorsApproximatelyEqual: Eo,
      rgb01ToHsv: kl,
      hsv01ToRgb: Ml,
      getBrushPresetIdForTool: pr,
      isActiveLassoTool: gp
    });
    if (Object.assign(N.paintDock, r), wp(), !r.visible) {
      we && (we.hidden = !0);
      return;
    }
    ot && (clearTimeout(ot), ot = 0), ce && (!r.colorEnabled && we && !we.hidden && (ot = window.setTimeout(() => {
      we.hidden = !0, N.paintDock.colorPopOpen = !1, ot = 0;
    }, 170)), we && (we.style.setProperty("--picker-hue-color", r.pickerHueColor), we.style.setProperty("--picker-sat", r.pickerSat), we.style.setProperty("--picker-val", r.pickerVal), we.style.setProperty("--picker-hue", r.pickerHue)), Fe && (Fe.style.left = r.pickerSvLeft, Fe.style.top = r.pickerSvTop), et && (et.style.left = r.pickerHueLeft));
  }
  function Gs() {
    const r = ct();
    r && (u.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Ji(r)
    }, He());
  }
  function He() {
    var be, Ie, je, ke;
    if (a) return;
    h.ui_settings = h.ui_settings || {};
    const r = Qv(h.ui_settings);
    if (c) {
      N.sidePanel = t1({
        coverage: h.coverage,
        uiSettings: r,
        normalizeCoverageValue: Lt
      });
      return;
    }
    const o = ct(), s = wn(), l = Oa();
    s.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (u.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Ji(o)
    });
    const m = u.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = l === "stroke" ? null : o, _ = g || m, y = !!g;
    u.panelWasEnabled = y, Es();
    let w = null;
    if (t === "stickers" || t === "cutout") {
      const J = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Wn().forEach((Se, Te) => {
        var Ye, qe;
        const Re = Dt(Se) ? String(Se.id || Lr) : String(((qe = (Ye = h.assets) == null ? void 0 : Ye[Se.asset_id]) == null ? void 0 : qe.name) || Se.asset_id || Se.id), Le = `${Te + 1}. ${Re}${Dt(Se) && ei(Se) ? " (hidden)" : ""}`, We = Lc({ item: Se, label: Le, kind: "image" });
        J.push({ id: Se.id, label: We.label, icon: We.icon, item: Se, kind: "image" });
      }) : Fc().forEach((Se) => {
        const Te = Lc(Se);
        J.push({ id: Se.item.id, label: Te.label, icon: Te.icon, item: Se.item, kind: Se.kind });
      });
      const ue = (g == null ? void 0 : g.id) || "", ve = J.find((Se) => Se.id === ue) || J[0];
      w = {
        label: "Selection",
        open: !1,
        disabled: J.length <= 1,
        currentLabel: ve.label,
        currentIcon: ve.icon || null,
        items: J.map((Se) => ({
          id: Se.id,
          label: Se.label,
          icon: Se.icon || null,
          active: Se.id === ue
        }))
      };
    }
    const S = [], P = (J, ue, ve, Se, Te) => {
      const Re = q(Number(_[J] || 0), ve, Se);
      S.push({
        key: J,
        label: ue,
        min: ve,
        max: Se,
        step: Te,
        value: Re,
        displayValue: Nx(Re),
        fillPct: q((Re - ve) / Math.max(1e-6, Se - ve) * 100, 0, 100),
        enabled: y && !i
      });
    }, k = [];
    s.length > 1 ? (k.push(`Selected objects: ${s.length}`), k.push("Multi-selection supports z-order and delete.")) : (P("yaw_deg", "Yaw", -180, 180, 0.1), P("pitch_deg", "Pitch", -90, 90, 0.1), P("hFOV_deg", "H FOV", 1, 179, 0.1), P("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? P("rot_deg", "Rotation", -180, 180, 0.1) : P("roll_deg", "Roll", -180, 180, 0.1));
    const D = Array.isArray((Ie = (be = h == null ? void 0 : h.painting) == null ? void 0 : be.paint) == null ? void 0 : Ie.strokes) ? h.painting.paint.strokes.length : 0, j = Array.isArray((ke = (je = h == null ? void 0 : h.painting) == null ? void 0 : je.mask) == null ? void 0 : ke.strokes) ? h.painting.mask.strokes.length : 0, ne = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((J) => String((J == null ? void 0 : J.name) || "")) : [], H = Jh(
      e,
      ne.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), Y = !!String((H == null ? void 0 : H.src) || "").trim() || As("pano_input_images").length > 0, ae = Array.isArray(Wn()) && Wn().length > 0 || D > 0, pe = j > 0, oe = [
      { key: "mask", label: "Mask", icon: De.circle_dashed_tool, visible: !!u.showMask, enabled: pe },
      { key: "objects", label: "Paint / Images", icon: De.image, visible: !!u.showObjects, enabled: ae },
      { key: "panorama", label: "Panorama", icon: De.globe, visible: !!u.showPanorama, enabled: Y }
    ].map((J) => ({
      ...J,
      ariaLabel: `Toggle ${J.label.toLowerCase()}`,
      tip: J.visible ? "Hide" : "Show"
    }));
    N.sidePanel = n1({
      coverage: h.coverage,
      readOnly: i,
      selectionPicker: w,
      enabled: y,
      selectedKind: l,
      selectedItems: s,
      params: S,
      notes: k,
      visibilityRows: oe,
      uiSettings: r,
      normalizeCoverageValue: Lt
    });
  }
  function Wa(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function hu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Wa(r)) return;
    const o = xo("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((_, y) => {
        const w = new Image();
        w.onload = () => _(w), w.onerror = () => y(new Error("image load failed")), w.src = s;
      });
      ee.set(o, l);
      const m = xo("st");
      h.stickers.push({
        id: m,
        asset_id: o,
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Tr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: zc()
      }), Ir(h.stickers[h.stickers.length - 1]), Ws(), ft(), He(), Ue(), ge();
      const g = (async () => {
        const _ = await Rs(r, String(r.name || o));
        (Array.isArray(h.stickers) ? h.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (h.assets[o] = _, ai(), xt(), He(), Ue(), ge());
      })();
      ho.set(o, g);
      try {
        await g;
      } finally {
        ho.delete(o);
      }
    } catch {
      delete h.assets[o], ee.delete(o);
      const l = Array.isArray(h.stickers) ? h.stickers : [], m = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
      m.length && (h.stickers = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), m.some((g) => {
        var _;
        return String((g == null ? void 0 : g.id) || "") === String(((_ = u.selection) == null ? void 0 : _.id) || "");
      }) && Ir(null), He(), Ue(), ge());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function pu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const s = (l = o.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function jm() {
    i || t !== "stickers" && t !== "cutout" || pu((r) => {
      hu(r);
    });
  }
  async function Vm(r) {
    var S;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = ct();
    if (!o || !_t(o) || Dt(o) || !Wa(r)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), m = l ? Kt(((S = h.assets) == null ? void 0 : S[l]) || null) : null, g = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, y = xo("asset"), w = URL.createObjectURL(r);
    try {
      const P = await new Promise((D, j) => {
        const ne = new Image();
        ne.onload = () => D(ne), ne.onerror = () => j(new Error("image load failed")), ne.src = w;
      });
      ee.set(y, P), o.asset_id = y, o.vFOV_deg = Tr(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Rt(), ft(), He(), Ue(), ge();
      const k = (async () => {
        const D = await Rs(r, String(r.name || y));
        (Array.isArray(h.stickers) ? h.stickers : []).some((H) => String((H == null ? void 0 : H.id) || "") === s && String((H == null ? void 0 : H.asset_id) || "") === y) && (h.assets[y] = D, ai(), xt(), He(), Ue(), ge());
      })();
      ho.set(y, k);
      try {
        await k;
      } finally {
        ho.delete(y);
      }
    } catch {
      delete h.assets[y], ee.delete(y);
      const P = (Array.isArray(h.stickers) ? h.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === s) || null;
      P && String(P.asset_id || "") === y && (l && m && (h.assets[l] = m), P.asset_id = l, P.vFOV_deg = g, P.crop = _ ? { ..._ } : null), Rt(), He(), Ue(), ge();
    } finally {
      URL.revokeObjectURL(w);
    }
  }
  function Hm() {
    if (i) return;
    const r = ct();
    !r || !_t(r) || Dt(r) || pu((o) => {
      Vm(o);
    });
  }
  async function Um() {
    if (i || t !== "stickers") return;
    const r = h.assets && typeof h.assets == "object" ? h.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const m = String((l == null ? void 0 : l.type) || "").toLowerCase(), g = String((l == null ? void 0 : l.value) || "");
      return m === "dataurl" && g.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, m] of o)
      try {
        const g = String((m == null ? void 0 : m.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((k) => k.blob()), y = String(_.type || "image/png").split("/")[1] || "png", w = String((m == null ? void 0 : m.name) || `${l}.${y}`), S = new File([_], w, { type: _.type || "image/png" }), P = await Rs(S, w);
        h.assets[l] = {
          ...P,
          w: Number((m == null ? void 0 : m.w) || 0),
          h: Number((m == null ? void 0 : m.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (xt(), ge());
  }
  function Bm() {
    if (i || t !== "cutout") return;
    const r = Be();
    if (r) {
      Ir(r), u.mode = "pano", _s(
        zt(Number(r.yaw_deg || 0)),
        q(Number(r.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), Ue(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Er(), s = dr(o), l = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (I == null ? void 0 : I.width) || 1
    )), m = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (I == null ? void 0 : I.height) || 1
    )), g = Math.max(0.1, l / m), _ = q(Number(u.viewFov || 90), 1, 179), y = q(Math.min(42, _ * 0.42), 8, 96), w = q(_r * (2 * Math.atan(Math.tan(y * Tt * 0.5) / Math.max(0.1, g))), 6, 72), S = Bh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: zt(Number(u.viewYaw || 0)),
      pitch_deg: q(Number(u.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: y,
      vFOV_deg: w,
      locked: !1
    });
    h.shots = [S], Ir(S), Ws(), u.mode = "pano", ft(), xt(), He(), Ue(), ge({ cause: "cutout_frame" });
  }
  function Km() {
    i || t === "cutout" && (h.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, h.active.selected_shot_id = null, ft(), xt(), He(), ge());
  }
  function Gm() {
    const r = Array.isArray(h.stickers) ? h.stickers : [], o = [];
    for (const s of r)
      Dt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function mu(r, o, s = "Clear") {
    return new Promise((l) => {
      N.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function Wm() {
    var s, l;
    if (i || !await mu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    h.painting = da(null), Sn();
    const o = Gm();
    t === "stickers" ? (h.stickers = o, h.assets = {}, u.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], h.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ai()) : (h.stickers = o, h.assets = {}, h.shots = [], u.selectedId = null, u.selectedIds = [], h.active.selected_sticker_id = null, h.active.selected_shot_id = null, u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, ai()), ft(), xt(), He(), Ue(), ge();
  }
  async function Ym(r) {
    var g, _, y, w;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = ui(o);
    if (!(!l.length && !(((g = u.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = u.interaction) == null ? void 0 : _.layerKind) === o) || !await mu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((y = u.interaction) == null ? void 0 : y.kind) === "draw" && ((w = u.interaction) == null ? void 0 : w.layerKind) === o) {
        const S = un();
        S && u.paintEngine.cancelActiveStroke(S), u.interaction = null;
      }
      l.length = 0, h.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (Ht().length = 0), Sn(), ft(), xt(), He(), Ue(), tn(), ge();
    }
  }
  function qm() {
    if (i) return;
    const r = ct();
    if (!r || !_t(r) || Dt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = xo("st"), o.yaw_deg = zt((o.yaw_deg || 0) + 8), o.z_index = zc(), h.stickers.push(o), h.active.selected_sticker_id = o.id, u.selectedId = o.id, u.selectedIds = [o.id], Rt(), ft(), xt(), Ue(), He(), ge();
  }
  function gu() {
    var s, l, m, g, _, y;
    if (i) return;
    const r = wn(), o = ct();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const w = new Set(r.filter((k) => Pt(k)).map((k) => String(k.actionGroupId || k.id || ""))), S = new Set(r.filter((k) => Ut(k)).map((k) => Ct(k.rasterObjectId || k.id || ""))), P = new Set(r.filter(_t).map((k) => String(k.id || "")));
        w.size > 0 && (h.painting.paint.strokes = (Array.isArray((l = (s = h.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? h.painting.paint.strokes : []).filter((k) => !w.has(String((k == null ? void 0 : k.actionGroupId) || ""))), h.painting.groups = Ht().filter((k) => !w.has(String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || ""))), Sn()), S.size > 0 && (h.painting.raster_objects = en().filter((k) => !S.has(String((k == null ? void 0 : k.id) || ""))), li()), P.size > 0 && (h.stickers = (Array.isArray(h.stickers) ? h.stickers : []).filter((k) => P.has(String((k == null ? void 0 : k.id) || "")) ? Dt(k) ? (ei(k) || (k.visible = !1), !0) : !1 : !0), ai(), Rt()), u.selectedId = null, u.selectedIds = [], ft(), xt(), He(), Ue(), ge();
        return;
      }
      if (Pt(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        h.painting.paint.strokes = (Array.isArray((g = (m = h.painting) == null ? void 0 : m.paint) == null ? void 0 : g.strokes) ? h.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== w), h.painting.groups = Ht().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== w), Sn(), u.selectedId = null, u.selectedIds = [], ft(), xt(), He(), Ue(), ge();
        return;
      }
      if (Ut(o)) {
        const w = Ct(o.rasterObjectId || o.id || "");
        h.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== w), li(), u.selectedId = null, u.selectedIds = [], ft(), xt(), He(), Ue(), ge();
        return;
      }
      if (t === "stickers" || _t(o)) {
        if (Dt(o)) {
          if (ei(o)) return;
          o.visible = !1, Rt(), ft(), xt(), He(), Ue(), ge();
          return;
        }
        h.stickers = h.stickers.filter((w) => w.id !== o.id), ai(), Rt(), u.selectedId = ((_ = h.stickers[0]) == null ? void 0 : _.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], h.active.selected_sticker_id = ((y = h.stickers[0]) == null ? void 0 : y.id) || null, ft(), xt(), He(), Ue(), ge();
        return;
      }
      Km();
    }
  }
  function Xm(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const D = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [H, Y] = D.split(":").map((ae) => Number(ae));
        if (Number.isFinite(H) && Number.isFinite(Y)) return H >= Y;
      }
      const j = Number(r.hFOV_deg || 64), ne = Number(r.vFOV_deg || 40);
      return Math.abs(j - ne) > 1e-6 ? j >= ne : na(r) >= 1;
    })();
    let [m, g] = s[String(o)] || s["1:1"];
    m >= g !== l && ([m, g] = [g, m]);
    const _ = m / g, y = q(Number(r.hFOV_deg || 64), 1, 179), w = q(Number(r.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, y * w)), P = q(S * Math.sqrt(_), 1, 179), k = q(S / Math.sqrt(_), 1, 179);
    r.hFOV_deg = P, r.vFOV_deg = k, r.aspect_id = String(o);
  }
  function Jm(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Vr(r);
  }
  function bu() {
    Jr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Zm() {
    if (i) return;
    const r = wn();
    if (!ct() || r.length === 0) return;
    bu();
    const s = Jr(), l = new Set(r.map((y) => _t(y) ? `sticker:${String(y.id || "")}` : Ut(y) ? `rasterObject:${Ct(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), m = [], g = [];
    if (s.forEach((y) => {
      var S, P;
      const w = y.type === "sticker" ? `sticker:${String(((S = y.item) == null ? void 0 : S.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((P = y.item) == null ? void 0 : P.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(w) ? m.push(y) : g.push(y);
    }), !m.length || m[m.length - 1] === s[s.length - 1]) return;
    [...g, ...m].forEach((y, w) => {
      y.type === "sticker" && y.item && (y.item.z_index = w), y.type === "strokeGroup" && y.item && (y.item.z_index = w), y.type === "rasterObject" && y.item && (y.item.z_index = w);
    }), Rt(), ft(), xt(), Ue(), ge();
  }
  function Qm() {
    if (i) return;
    const r = wn();
    if (!ct() || r.length === 0) return;
    bu();
    const s = Jr(), l = new Set(r.map((y) => _t(y) ? `sticker:${String(y.id || "")}` : Ut(y) ? `rasterObject:${Ct(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), m = [], g = [];
    if (s.forEach((y) => {
      var S, P;
      const w = y.type === "sticker" ? `sticker:${String(((S = y.item) == null ? void 0 : S.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((P = y.item) == null ? void 0 : P.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(w) ? m.push(y) : g.push(y);
    }), !m.length || m[0] === s[0]) return;
    [...m, ...g].forEach((y, w) => {
      y.type === "sticker" && y.item && (y.item.z_index = w), y.type === "strokeGroup" && y.item && (y.item.z_index = w), y.type === "rasterObject" && y.item && (y.item.z_index = w);
    }), Rt(), ft(), xt(), Ue(), ge();
  }
  function eg() {
    i || (h.projection_model = "pinhole_rectilinear", h.alpha_mode = "straight", d && (h.output_preset = Xl(d.value, Number(h.output_preset || 2048))), p && (h.coverage = Lt(p.value)), b && (h.bg_color = String(b.value || h.bg_color || "#00ff00")), gn(), e.setDirtyCanvas(!0, !0));
  }
  function gn() {
    var o;
    if (i) return;
    h.coverage = Lt(h.coverage);
    const r = JSON.stringify(h);
    v && (v.value = r, (o = v.callback) == null || o.call(v, r));
  }
  function Ya() {
    h.ui_settings = Cx(h.ui_settings), i || gn();
  }
  function xt() {
    var r;
    i || (gn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function tg() {
    i || jp() && Jc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function ng(r = {}) {
    var l, m, g, _, y, w, S, P, k, D;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((m = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || m.call(l), (_ = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (y = e.setDirtyCanvas) == null || y.call(e, !0, !1)), s && ((S = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || S.call(w, !0, !0), (D = (k = (P = Sr) == null ? void 0 : P.canvas) == null ? void 0 : k.setDirty) == null || D.call(k, !0, !0));
  }
  function Ws() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", tn(), He());
  }
  function ci(r) {
    const o = I.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * I.width,
      y: (r.clientY - o.top) / o.height * I.height
    };
  }
  function qa(r) {
    const o = I.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function yu() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function Be() {
    if (t !== "cutout") return null;
    const r = Array.isArray(h.shots) ? h.shots : [];
    if (!r.length) return null;
    const o = String(h.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function It(r = Be()) {
    var _, y, w;
    if (!r || !I) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(I.width || 0) - 48),
      h: Math.max(1, Number(I.height || 0) - 48)
    }, s = q(na(r), 0.1, 10);
    let l = o.w, m = Math.max(1, Math.round(l / s));
    m > o.h && (m = o.h, l = Math.max(1, Math.round(m * s)));
    const g = Math.max(0.1, Number(((_ = u.frameView) == null ? void 0 : _.zoom) || 1));
    return l *= g, m *= g, {
      x: Math.round(o.x + (o.w - l) * 0.5 + Number(((y = u.frameView) == null ? void 0 : y.panX) || 0)),
      y: Math.round(o.y + (o.h - m) * 0.5 + Number(((w = u.frameView) == null ? void 0 : w.panY) || 0)),
      w: Math.max(1, Math.round(l)),
      h: Math.max(1, Math.round(m))
    };
  }
  function Ys() {
    return t === "cutout" && !!Be();
  }
  function Nn(r, o = performance.now()) {
    if (u.mode === "unwrap") {
      const g = fr(), _ = (r.x - g.x) / Math.max(1, g.w), y = (r.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: q(y, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Os(r.x, r.y), { lon: l, lat: m } = Ls(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - m / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Mn(r, o, s = performance.now()) {
    const l = It(o);
    if (!l) return null;
    const m = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    };
    if (m.x < 0 || m.x > 1 || m.y < 0 || m.y > 1) return null;
    const g = Vs(o, m);
    if (!g) return null;
    const { lon: _, lat: y } = Ls(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - y / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function rg(r, o) {
    var S;
    const s = Be(), l = It(s);
    if (!s || !l) return !1;
    const m = Math.max(0.1, Number(((S = u.frameView) == null ? void 0 : S.zoom) || 1)), g = q(m * Number(o), 0.25, 12);
    if (Math.abs(g - m) < 1e-6) return !1;
    const _ = (Number(r.x) - l.x) / Math.max(1e-6, l.w), y = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    u.frameView.zoom = g;
    const w = It(s);
    return w ? (u.frameView.panX += Number(r.x) - (w.x + w.w * _), u.frameView.panY += Number(r.y) - (w.y + w.h * y), !0) : !1;
  }
  function ig(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function pr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Jn : nn[o] ? o : u.activeBrushPresetId || Jn;
  }
  function vu() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (yu() || Ys());
  }
  function _u() {
    var r;
    return vu() && ((r = u.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Xa(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), m = o !== !1, g = u.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== m || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return u.pointerPos = { x: s, y: l, inside: m }, _;
  }
  function ag() {
    var P, k;
    if (!_u()) return null;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool, s = pr(o), l = nn[s] || nn[Jn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), y = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(u.paintColor), w = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : q(Math.max(0.16, Number(y.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : q(Math.max(0.46, Number(y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: On(y, w),
      strokeStyle: On(y, S),
      x: Number(((P = u.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((k = u.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function og() {
    var D, j, ne;
    const r = ag();
    if (!Q) return;
    if (!r) {
      Q.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, l = "999px", m = 0, g = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let P = Number(r.hotspotX ?? o * 0.5), k = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = ts, s = ts, l = "0", _ = "0", y = "none", P = hx, k = px, g = wx(r.fillStyle, S, w);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const H = Math.max(1, Number(((D = r.preset) == null ? void 0 : D.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * H), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, m = Number(((ne = (j = r.preset) == null ? void 0 : j.angle) == null ? void 0 : ne.value) || 0) * _r;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    Q.style.display = "block", Q.style.width = `${Math.round(o)}px`, Q.style.height = `${Math.round(s)}px`, Q.style.borderRadius = l, Q.style.border = _, Q.style.boxShadow = y, Q.style.background = g, Q.style.backgroundRepeat = "no-repeat", Q.style.backgroundPosition = "center", Q.style.backgroundSize = "contain", Q.style.transform = `translate(${Math.round(r.x - P)}px, ${Math.round(r.y - k)}px) rotate(${m}deg)`;
  }
  function sg() {
    var pe;
    if (!te || !_e) return;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool;
    if (o === "lasso_fill") return;
    const s = pr(o), l = nn[s] || nn[Jn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), y = o === "eraser", w = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : y ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(u.paintColor), S = r === "mask" ? On(w, 0.22) : y ? "rgba(255,255,255,0.14)" : On(w, q(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), P = r === "mask" ? On(w, 0.96) : y ? "rgba(255,255,255,0.72)" : On(w, q(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let k = _ * 2, D = _ * 2, j = "999px", ne = 0, H = S;
    const Y = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const oe = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, _ * 2 * oe), D = Math.max(10, _ * 2), j = `${Math.min(8, D * 0.42)}px`, ne = Number(((pe = l == null ? void 0 : l.angle) == null ? void 0 : pe.value) || 0) * _r;
    } else o === "brush" ? H = `radial-gradient(circle at 50% 50%, ${P} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, _ * 1.8), D = k, H = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : y && (H = "rgba(255,255,255,0.12)");
    _e.style.width = `${Math.round(k)}px`, _e.style.height = `${Math.round(D)}px`, _e.style.borderRadius = j, _e.style.background = H, _e.style.border = `1px solid ${Y}`, _e.style.boxShadow = `0 0 0 1px ${ae}`, _e.style.transform = `rotate(${ne}deg)`, tt && (clearTimeout(tt), tt = 0), te.classList.remove("fade-out"), te.classList.add("show");
  }
  function Ja() {
    !te || !te.classList.contains("show") || (te.classList.add("fade-out"), tt && clearTimeout(tt), tt = window.setTimeout(() => {
      te.classList.remove("show", "fade-out"), tt = 0;
    }, 180));
  }
  function xu(r, o, s, l) {
    const m = pr(o), g = nn[m] || nn[Jn], _ = u.brushSizes[m] ?? 10, y = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), w = ig(l, y), S = s.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), P = {
      id: mi(r),
      actionGroupId: mi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: y,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((k) => ({ ...k })),
        points: S.map((k) => ({ ...k }))
      }
    };
    return $f(P, g), Number(g.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function wu(r, o, s, l) {
    const m = s.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), g = pr(o), _ = nn[g] || nn[Jn], y = {
      id: mi(r),
      actionGroupId: mi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: m.map((w) => ({ ...w }))
      }
    };
    return $f(y, _), Number(_.aspect ?? 1), Number(y.aspect ?? 1), String(y.stampKind || ""), { ...y.targetSpace }, y;
  }
  function ui(r) {
    const o = h.painting || (h.painting = da(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function lg(r, o, s = performance.now()) {
    let l;
    if (u.mode === "frame") {
      const S = Be();
      if (!S || (l = Mn(o, S, s), !l)) return !1;
    } else
      l = Nn(o, s);
    if (!l) return !1;
    const m = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, _ = m[m.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), P = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && P < 15e-4) return !1;
    }
    const y = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    m.push({ ...y }), g.push({ ...y });
    const w = un();
    if (w) {
      const S = u.paintEngine.ensureTarget(w);
      u.paintEngine.appendStrokePoint(S, Number(y.u ?? 0), Number(y.v ?? 0), r.stroke);
    }
    return !0;
  }
  function cg(r, o, s = performance.now()) {
    var _, y;
    let l;
    if (u.mode === "frame") {
      const w = Be();
      if (!w) return !1;
      l = Mn(o, w, s);
    } else
      l = Nn(o, s);
    const m = (y = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points;
    if (!l || !Array.isArray(m)) return !1;
    const g = m[m.length - 1];
    if (g) {
      const w = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (w < 15e-4 && S < 15e-4) return !1;
    }
    return m.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ug(r) {
    var oe, be, Ie, je, ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Ka();
    const s = un(), l = ji(s.width, s.height);
    if (!cu(l, o, { w: s.width, h: s.height })) return !1;
    const m = ((be = (oe = l.ctx) == null ? void 0 : oe.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!m) return !1;
    const g = new Map(Ht().map((J) => [String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim(), J ? { ...J } : null])), _ = [], y = [], w = [...en().filter((J) => String((J == null ? void 0 : J.layerKind) || "paint") !== "paint")];
    let S = !1, P = Jr().reduce((J, ue) => Math.max(J, Number((ue == null ? void 0 : ue.z_index) || 0)), -1) + 1;
    function k(J, ue, ve, Se = 8) {
      let Te = ue, Re = ve, Le = -1, We = -1;
      for (let Ye = 0; Ye < ve; Ye += 1)
        for (let qe = 0; qe < ue; qe += 1)
          J[(Ye * ue + qe) * 4 + 3] <= Se || (qe < Te && (Te = qe), Ye < Re && (Re = Ye), qe > Le && (Le = qe), Ye > We && (We = Ye));
      return Le < Te || We < Re ? null : { minX: Te, minY: Re, maxX: Le, maxY: We };
    }
    const D = k(m, s.width, s.height, 8);
    if (!D) return !1;
    function j(J, ue) {
      return !J || !ue ? !1 : !(J.maxX < ue.minX || ue.maxX < J.minX || J.maxY < ue.minY || ue.maxY < J.minY);
    }
    function ne(J, ue) {
      const ve = cr((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "", "paint", ue);
      if (!ve) return null;
      const Se = ve.centerUv.u - ve.halfW, Te = ve.centerUv.u + ve.halfW, Re = ve.centerUv.v - ve.halfH, Le = ve.centerUv.v + ve.halfH, We = s.width, Ye = s.height;
      return {
        minX: Math.floor((Se % 1 + 1) % 1 * We),
        maxX: Math.ceil((Te % 1 + 1) % 1 * We),
        minY: Math.floor(q(Re, 0, 1) * Ye),
        maxY: Math.ceil(q(Le, 0, 1) * Ye),
        wraps: Te - Se >= 1 || Se < 0 || Te > 1
      };
    }
    function H(J) {
      const ue = (J == null ? void 0 : J.bbox) || null;
      if (!ue) return null;
      const ve = (J == null ? void 0 : J.transform) || {}, Se = s.width, Te = s.height, Re = Number(ue.u0 || 0) + Number(ve.du || 0), Le = Number(ue.u1 || 0) + Number(ve.du || 0), We = Number(ue.v0 || 0) + Number(ve.dv || 0), Ye = Number(ue.v1 || 0) + Number(ve.dv || 0);
      return {
        minX: Math.floor((Re % 1 + 1) % 1 * Se),
        maxX: Math.ceil((Le % 1 + 1) % 1 * Se),
        minY: Math.floor(q(We, 0, 1) * Te),
        maxY: Math.ceil(q(Ye, 0, 1) * Te),
        wraps: Le - Re >= 1 || Re < 0 || Le > 1
      };
    }
    function Y(J) {
      return J ? J.wraps ? j(D, { minX: 0, maxX: J.maxX, minY: J.minY, maxY: J.maxY }) || j(D, { minX: J.minX, maxX: s.width - 1, minY: J.minY, maxY: J.maxY }) : j(D, J) : !0;
    }
    function ae(J) {
      if (!J) return { touched: !1, canvas: null };
      const ue = ji(s.width, s.height, { readback: !0 });
      ue.ctx.drawImage(J, 0, 0);
      const ve = ue.ctx.getImageData(0, 0, s.width, s.height);
      ue.ctx.save(), ue.ctx.globalCompositeOperation = "destination-out", ue.ctx.drawImage(l.canvas, 0, 0), ue.ctx.restore();
      const Se = ue.ctx.getImageData(0, 0, s.width, s.height);
      for (let Te = 0; Te < s.width * s.height; Te += 1) {
        if (m[Te * 4 + 3] <= 8) continue;
        const Le = ve.data[Te * 4 + 3], We = Se.data[Te * 4 + 3];
        if (Le > We)
          return { touched: !0, canvas: ue.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(J, ue, ve) {
      const Se = Number(ve == null ? void 0 : ve.z_index), Te = Cm(J, ue, ve).map((Re, Le) => ({
        ...Re,
        z_index: Number.isFinite(Se) ? Se + Le * 1e-3 : P + Le * 1e-3
      }));
      return Te.length && (P = Math.max(P, ...Te.map((Re) => Number((Re == null ? void 0 : Re.z_index) || 0))) + 1), Te;
    }
    for (const J of Ht()) {
      const ue = String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim();
      if (!ue) continue;
      const ve = xn(ue, "paint");
      if (!Y(ne(J, ve))) {
        y.push(J), _.push(...ve);
        continue;
      }
      const Se = ((je = (Ie = u.paintEngine) == null ? void 0 : Ie.getGroupTarget) == null ? void 0 : je.call(Ie, ue)) || null, Te = ((ke = Se == null ? void 0 : Se.committedPaint) == null ? void 0 : ke.canvas) || null;
      if (!Te) {
        y.push(J), _.push(...ve);
        continue;
      }
      const Re = ae(Te);
      if (!Re.touched || !Re.canvas) {
        y.push(J), _.push(...ve);
        continue;
      }
      S = !0;
      const Le = pe(Re.canvas, "paint", g.get(ue) || J || {});
      w.push(...Le);
    }
    for (const J of en().filter((ue) => String((ue == null ? void 0 : ue.layerKind) || "paint") === "paint")) {
      if (!Y(H(J))) {
        w.push(J);
        continue;
      }
      const ue = qc(J, null);
      if (!ue) {
        w.push(J);
        continue;
      }
      const ve = ae(ue);
      if (!ve.touched || !ve.canvas) {
        w.push(J);
        continue;
      }
      S = !0;
      const Se = pe(ve.canvas, "paint", J);
      w.push(...Se);
    }
    return S ? (h.painting.paint.strokes = _, h.painting.groups = y.sort((J, ue) => Number((J == null ? void 0 : J.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0)), h.painting.raster_objects = w.sort((J, ue) => Number((J == null ? void 0 : J.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0)), ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function fg(r) {
    var _, y, w, S, P;
    if ((((y = (_ = r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.rawPoints) || ((S = (w = r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : S.points) || []).length >= 1) {
      qs(r);
      const k = un();
      k && (String(((P = r.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(k) : u.paintEngine.commitActiveStroke(r.stroke, k)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, m = xu(r.layerKind, s.toolKind, [], l);
    m.actionGroupId = s.actionGroupId, r.stroke = m;
    const g = un();
    g && u.paintEngine.beginStroke(m, g);
  }
  function dg(r) {
    var _, y;
    if ((((y = (_ = r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points) || []).length >= 3) {
      qs(r);
      const w = un();
      w && u.paintEngine.commitActiveStroke(r.stroke, w), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, m = wu(r.layerKind, s.toolKind, [], l);
    m.actionGroupId = s.actionGroupId, r.stroke = m;
    const g = un();
    g && u.paintEngine.beginStroke(m, g);
  }
  function qs(r) {
    var g, _, y, w;
    const o = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!o) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Hs(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), ug(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Tc((y = r.stroke) == null ? void 0 : y.actionGroupId), ui(r.layerKind).push(r.stroke), !0);
    const m = o.rawPoints || o.points || [];
    return m.length < 1 ? !1 : (o.processedPoints = Hs(m, r.stroke.targetSpace, !0), l && Tc((w = r.stroke) == null ? void 0 : w.actionGroupId), ui(r.layerKind).push(r.stroke), !0);
  }
  function Su(r) {
    var s;
    if (t === "cutout" && u.mode === "frame") {
      const l = Be(), m = It(l);
      if (!l || !m || !(Number((r == null ? void 0 : r.x) || 0) >= Number(m.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(m.x || 0) + Number(m.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(m.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(m.y || 0) + Number(m.h || 0))) return null;
      const _ = Mn(r, l, performance.now()), y = _ ? oi(_) : null;
      if (y)
        for (const S of js()) {
          if (!_t(S)) continue;
          const P = Hi(S, y);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const k = Ot(S);
            if (k != null && k.visible) return { item: S, geom: k };
          }
        }
      const w = Ss(!1).slice().sort((S, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of w) {
        if (S.type === "strokeGroup") {
          const D = Qr(Oi("paint", S.actionGroupId || S.id || ""));
          if (!D) continue;
          const j = Ot(D);
          if (!(j != null && j.visible)) continue;
          const ne = Array.isArray(j.strokePaths) ? j.strokePaths : [];
          for (const H of ne) {
            const Y = Array.isArray(H == null ? void 0 : H.points) ? H.points : [];
            if (!Y.length) continue;
            if (H.closed && Y.length >= 3 && Zn(r, Y)) return { item: D, geom: j };
            const ae = Math.max(8, Number((H == null ? void 0 : H.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < Y.length - 1; pe += 1)
              if (Nl(r, Y[pe], Y[pe + 1]) <= ae * ae) return { item: D, geom: j };
            if (Y.length === 1 && br(r, Y[0]) <= ae * ae) return { item: D, geom: j };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const D = Zr(Ri(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!D) continue;
          const j = Ot(D);
          if (Yc(D, j, r, _)) return { item: D, geom: j };
          continue;
        }
        const P = S.item;
        if (!P || !_t(P) || !y) continue;
        const k = Hi(P, y);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const D = Ot(P);
          if (D != null && D.visible) return { item: P, geom: D };
        }
      }
      return null;
    }
    const o = [
      ...Ss(!1).slice().sort((l, m) => Number((m == null ? void 0 : m.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var m;
        return l.type === "strokeGroup" ? Qr(Oi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Zr(Ri(((m = l.item) == null ? void 0 : m.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? js().filter((l) => cn(l)) : []
    ];
    for (const l of o) {
      if (Pt(l)) {
        const g = Ot(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const y of _) {
          const w = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
          if (!w.length) continue;
          if (y.closed && w.length >= 3 && Zn(r, w)) return { item: l, geom: g };
          const S = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < w.length - 1; P += 1)
            if (Nl(r, w[P], w[P + 1]) <= S * S) return { item: l, geom: g };
          if (w.length === 1 && br(r, w[0]) <= S * S) return { item: l, geom: g };
        }
        continue;
      }
      if (Ut(l)) {
        const g = Ot(l);
        if (!(g != null && g.visible)) continue;
        if (Yc(l, g, r)) return { item: l, geom: g };
        continue;
      }
      const m = Ot(l);
      if (m.visible && Zn(r, m.corners))
        return { item: l, geom: m };
    }
    return null;
  }
  function Xs(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((g) => br(g, o) <= 121);
      if (l >= 0) {
        const g = r.corners[l], _ = g.x - r.center.x, y = g.y - r.center.y, w = _ * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: w };
      }
      const m = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const g of m) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && Zn(o, _)) return { kind: "move", cursor: "default" };
        const y = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < _.length - 1; w += 1)
          if (Nl(o, _[w], _[w + 1]) <= y * y) return { kind: "move", cursor: "default" };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((m) => br(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], g = m.x - r.center.x, _ = m.y - r.center.y, y = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: y };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((m) => br(m, o) <= 169);
      if (l) {
        const m = l.edge === "left" || l.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => br(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], m = l.x - r.center.x, g = l.y - r.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return br(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
  }
  function Nu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function hg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function pg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((m) => hg(r, m))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!Zn({ x: s, y: l }, o.corners);
  }
  function ht(r) {
    if (og(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? re("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? re("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? re("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? re(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? re("grabbing") : re("default");
      return;
    }
    if (_u()) {
      re("none");
      return;
    }
    if (u.mode === "frame" && u.primaryTool !== "cursor") {
      re("default");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      re("default");
      return;
    }
    const o = ct(), s = o ? Ot(o) : null, l = o ? ur(o) : !1, m = l ? { kind: "none", cursor: "default" } : Xs(s, r);
    if (!l && m.kind !== "none") {
      re(m.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && Su(r)) {
      re("default");
      return;
    }
    re(u.mode === "pano" ? "grab" : "default");
  }
  function Ue() {
    var m, g;
    if (!U) return;
    const r = ct(), o = wn();
    if (!r && o.length === 0 || u.interaction) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Oa(), l = r1({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? ks(o) : Ot(r),
      allLocked: Ps(o),
      selectedLocked: ur(r),
      activeAspect: Ji(r),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: Dt,
      isStickerHidden: ei,
      canRestoreSelectedToInitial: _p,
      iconSet: De
    });
    if (!l.visible) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    N.selectionMenu = {
      visible: !0,
      left: ((m = N.selectionMenu) == null ? void 0 : m.left) ?? l.left ?? 0,
      top: ((g = N.selectionMenu) == null ? void 0 : g.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var D, j, ne;
      if (!U || N.selectionMenu.visible !== !0) return;
      const _ = U.getBoundingClientRect(), y = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, w = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, S = 14;
      let P = q((Number(((D = l.anchor) == null ? void 0 : D.minX) || 0) + Number(((j = l.anchor) == null ? void 0 : j.maxX) || 0)) * 0.5 - y * 0.5, S, I.width - y - S), k = Number(((ne = l.anchor) == null ? void 0 : ne.maxY) || 0) + 18;
      if (!Number.isFinite(P) || !Number.isFinite(k) || k + w > I.height - S) {
        N.selectionMenu.visible = !1;
        return;
      }
      N.selectionMenu.left = P, N.selectionMenu.top = k;
    });
  }
  function Za() {
    Z.timer && (clearTimeout(Z.timer), Z.timer = 0), Z.target = null, N.tooltip.visible = !1, N.tooltip.text = "", N.tooltip.variant = "";
  }
  function mg(r) {
    if (!ie || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    N.tooltip.text = o, N.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var ne, H;
      if (Z.target !== s || !ie || !(s != null && s.isConnected)) return;
      const l = K.getBoundingClientRect(), m = s.getBoundingClientRect(), g = 8, _ = 12, y = Math.round(Number(((ne = ie.getBoundingClientRect()) == null ? void 0 : ne.width) || 0)) || 100, w = Math.round(Number(((H = ie.getBoundingClientRect()) == null ? void 0 : H.height) || 0)) || 24, S = !!s.closest(".pano-floating-left"), P = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let k = "", D = m.left - l.left + m.width * 0.5 - y * 0.5, j = m.top - l.top - w - _;
      if (S)
        k = "tool-rail", D = m.right - l.left + 10, j = m.top - l.top + m.height * 0.5 - w * 0.5, D = q(D, g, Math.max(g, l.width - y - g)), j = q(j, g, Math.max(g, l.height - w - g));
      else if (P) {
        k = "footer";
        const Y = s.closest(".pano-paint-footer"), ae = Y ? Y.getBoundingClientRect() : m;
        D = ae.left - l.left + ae.width * 0.5 - y * 0.5, j = ae.bottom - l.top + 5, D = q(D, g, Math.max(g, l.width - y - g)), j = Math.max(g, j);
      }
      D = q(D, g, Math.max(g, l.width - y - g)), j = Math.max(g, j), N.tooltip.left = D, N.tooltip.top = j, N.tooltip.variant = k, N.tooltip.visible = !0;
    });
  }
  const Ft = ms({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (r) => {
      u.viewYaw = zt(Number(r.yaw || 0)), u.viewPitch = q(Number(r.pitch || 0), -89.9, 89.9), u.viewFov = q(Number(r.fov || u.viewFov || 100), 35, 140);
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
        x: (r = h.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = h.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: fr,
    onInteraction: () => {
      B.backgroundDirty = !0, B.dirty = !0;
    }
  });
  I.onpointerdown = (r) => {
    const o = ci(r);
    if (Xa(o, !0), u.viewTween = null, Ft.state.inertia.active = !1, Ft.state.inertia.vx = 0, Ft.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), u.mode === "frame")
        u.interaction = { kind: "pan_frame", last: o };
      else {
        const y = u.mode === "unwrap" ? o : qa(r);
        u.interaction = { kind: "view", last: y, lastTs: performance.now() }, Ft.startDrag(y.x, y.y, r.pointerId, performance.now());
      }
      ht(o), I.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (u.mode === "pano") {
        const y = qa(r);
        u.interaction = { kind: "view", last: y, lastTs: performance.now() }, Ft.startDrag(y.x, y.y, r.pointerId, performance.now()), ht(o), I.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (we && !we.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (yu() || Ys())) {
      const y = u.primaryTool === "mask" ? "mask" : "paint", w = u.primaryTool === "mask" ? u.maskTool : u.paintTool, S = u.mode === "frame" && Ys() ? Be() : null, P = { kind: "ERP_GLOBAL" }, k = S ? Mn(o, S, performance.now()) : Nn(o, performance.now());
      if (!k) {
        ht(o);
        return;
      }
      u.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: y,
        _livePreviewToken: mi("live"),
        stroke: w === "lasso_fill" ? wu(y, w, [k], P) : xu(y, w, [k], P)
      }, zi();
      const D = un();
      if (D)
        if (u.paintEngine.beginStroke(u.interaction.stroke, D), u.interaction.kind === "paint_stroke") {
          const j = u.paintEngine.ensureTarget(D), ne = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), H = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          u.paintEngine.appendStrokePoint(j, ne, H, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, D);
      ht(o), I.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = wn(), l = ct(), m = s.length > 1 ? ks(s) : l ? Ot(l) : null;
    if (u.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      u.interaction = { kind: "marquee_select", start: o, current: o }, ht(o), I.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (m != null && m.visible)) {
      if ((s.some((w) => ur(w)) ? { kind: "none" } : Xs(m, o)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: s.map((w) => w),
          offset: { x: o.x - m.center.x, y: o.y - m.center.y },
          startCenter: { x: m.center.x, y: m.center.y },
          stickerSnapshots: s.filter((w) => _t(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var P, k;
              const S = Ot(w);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((w) => Pt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: Kt(xn(w.actionGroupId, w.layerKind)),
            frameSnapshot: Kt(cr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var P, k;
              const S = Ot(w);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ms(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: s.filter((w) => Ut(w)).map((w) => ({
            id: Ct(w.rasterObjectId || w.id || ""),
            snapshot: Kt(en().find((S) => String((S == null ? void 0 : S.id) || "") === Ct(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var P, k;
              const S = Ot(w);
              return S != null && S.visible ? { x: Number(((P = S.center) == null ? void 0 : P.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: eu(w)
          }))
        }, ht(o), I.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (m != null && m.visible)) {
      const y = ur(l) ? { kind: "none" } : Xs(m, o);
      if (y.kind === "scale") {
        u.interaction = Pt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          snapshot: Kt(xn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Kt(cr(l.actionGroupId, l.layerKind)),
          cursor: y.cursor
        } : Ut(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          snapshot: Kt(en().find((w) => String((w == null ? void 0 : w.id) || "") === Ct(l.rasterObjectId || l.id || ""))),
          cursor: y.cursor
        } : {
          kind: "scale",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor
        }, ht(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "scale_x" || y.kind === "scale_y") {
        u.interaction = {
          kind: y.kind,
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor,
          edge: y.edge
        }, ht(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "rotate") {
        u.interaction = Pt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: m.center,
          startAng: Math.atan2(o.y - m.center.y, o.x - m.center.x),
          snapshot: Kt(xn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Kt(cr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: m.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - m.center.y, o.x - m.center.x)
        }, ht(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "move") {
        if (Pt(l)) {
          const w = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? Mn(o, S, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: w,
            snapshot: Kt(xn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Kt(cr(l.actionGroupId, l.layerKind))
          }, ht(o), I.setPointerCapture(r.pointerId);
          return;
        }
        if (Ut(l)) {
          const w = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? Mn(o, S, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: w,
            snapshot: Kt(en().find((S) => String((S == null ? void 0 : S.id) || "") === Ct(l.rasterObjectId || l.id || "")))
          }, ht(o), I.setPointerCapture(r.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - m.center.x, y: o.y - m.center.y }
        }, ht(o), I.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = Su(o);
    if (g) {
      const y = u.selectedId !== g.item.id;
      if (y && u.selectedId && (ft(), gn()), Ir(g.item), t === "cutout" && y && (u.cutoutAspectOpen = !1), y && He(), Ue(), ge(), ur(g.item)) {
        ht(o);
        return;
      }
      u.interaction = {
        kind: Pt(g.item) ? "move_stroke_group" : Ut(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: o.x - g.geom.center.x, y: o.y - g.geom.center.y },
        startUv: Pt(g.item) || Ut(g.item) ? u.mode === "frame" ? (() => {
          const w = Be();
          return w ? Mn(o, w, performance.now()) : null;
        })() : Nn(o, performance.now()) : null,
        snapshot: Pt(g.item) ? Kt(xn(g.item.actionGroupId, g.item.layerKind)) : Ut(g.item) ? Kt(en().find((w) => String((w == null ? void 0 : w.id) || "") === Ct(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Pt(g.item) ? Kt(cr(g.item.actionGroupId, g.item.layerKind)) : null
      }, ht(o), I.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!u.selectedId;
    if (_ && (ft(), gn()), ii(), _ && He(), Ue(), ge(), u.mode === "pano") {
      const y = qa(r);
      u.interaction = { kind: "view", last: y, lastTs: performance.now() }, Ft.startDrag(y.x, y.y, r.pointerId, performance.now()), ht(o), I.setPointerCapture(r.pointerId);
    }
  }, I.onpointermove = (r) => {
    var l, m, g, _, y, w, S, P, k, D, j, ne, H, Y, ae, pe, oe, be, Ie, je;
    const o = ci(r);
    if (Xa(o, !0), !u.interaction) {
      ht(o);
      return;
    }
    ht(o);
    const s = u.interaction;
    if (s.kind === "paint_stroke") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let J = !1;
      ke.forEach((ue) => {
        const ve = ci(ue);
        if (u.mode === "frame") {
          const Se = Be(), Te = Se ? It(Se) : null;
          if (Te) {
            const Re = (ve.x - Te.x) / Math.max(1, Te.w), Le = (ve.y - Te.y) / Math.max(1, Te.h);
            if (!(Re >= 0 && Re <= 1 && Le >= 0 && Le <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, fg(s));
          }
        }
        lg(s, ve, performance.now()) && (J = !0);
      }), J && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let J = !1;
      if (ke.forEach((ue) => {
        const ve = ci(ue);
        if (u.mode === "frame") {
          const Se = Be(), Te = Se ? It(Se) : null;
          if (Te) {
            const Re = (ve.x - Te.x) / Math.max(1, Te.w), Le = (ve.y - Te.y) / Math.max(1, Te.h);
            if (!(Re >= 0 && Re <= 1 && Le >= 0 && Le <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, dg(s));
          }
        }
        cg(s, ve, performance.now()) && (J = !0);
      }), J) {
        const ue = un();
        ue && u.paintEngine.updateActiveStroke(s.stroke, ue), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ke = performance.now(), J = u.mode === "unwrap" ? o : qa(r);
      Ft.moveDrag(J.x, J.y, u.mode === "unwrap" ? "unwrap" : "pano", ke), s.lastTs = ke, s.last = J, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      u.frameView.panX += o.x - s.last.x, u.frameView.panY += o.y - s.last.y, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ke = o.x - s.offset.x, J = o.y - s.offset.y;
      if (u.mode === "frame" && t === "cutout") {
        const ue = Be(), ve = It(ue);
        if (!ue || !ve) return;
        const Se = {
          x: q((ke - ve.x) / Math.max(1, ve.w), 0, 1),
          y: q((J - ve.y) / Math.max(1, ve.h), 0, 1)
        }, Te = Vs(ue, Se);
        if (!Te) return;
        const Re = bo(Te);
        s.item.yaw_deg = Re.yaw, s.item.pitch_deg = Re.pitch;
      } else if (u.mode === "unwrap") {
        const ue = fr(), ve = q((ke - ue.x) / Math.max(ue.w, 1), 0, 1), Se = q((J - ue.y) / Math.max(ue.h, 1), 0, 1);
        s.item.yaw_deg = zt(ve * 360 - 180), s.item.pitch_deg = q(90 - Se * 180, -90, 90);
      } else {
        const ue = Os(ke, J), ve = bo(ue);
        s.item.yaw_deg = ve.yaw, s.item.pitch_deg = ve.pitch;
      }
      _t(s.item) && Rt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ke = u.mode === "frame" ? (() => {
        const ve = Be();
        return ve ? Mn(o, ve, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!ke || !s.startUv) return;
      const J = mn(Number(ke.u || 0), Number(s.startUv.u || 0)), ue = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Dc((l = s.item) == null ? void 0 : l.actionGroupId, J, ue, s.snapshot, (m = s.item) == null ? void 0 : m.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ke = u.mode === "frame" ? (() => {
        const ve = Be();
        return ve ? Mn(o, ve, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!ke || !s.startUv) return;
      const J = mn(Number(ke.u || 0), Number(s.startUv.u || 0)), ue = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Rc(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", J, ue, s.snapshot) && (li(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const J = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      lp(((y = s.item) == null ? void 0 : y.rasterObjectId) || ((w = s.item) == null ? void 0 : w.id) || "", J, s.snapshot) && (li(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ke = o.x - Number(((S = s.offset) == null ? void 0 : S.x) || 0), J = o.y - Number(((P = s.offset) == null ? void 0 : P.y) || 0);
      let ue = !1, ve = !1, Se = !1;
      const Te = ke - Number(((k = s.startCenter) == null ? void 0 : k.x) || ke), Re = J - Number(((D = s.startCenter) == null ? void 0 : D.y) || J);
      for (const Le of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const We = (t === "cutout" ? Ns() : Wn()).find((qe) => String((qe == null ? void 0 : qe.id) || "") === String(Le.id || ""));
        if (!We || !_t(We)) continue;
        const Ye = {
          x: Number(((j = Le.center) == null ? void 0 : j.x) || 0) + Te,
          y: Number(((ne = Le.center) == null ? void 0 : ne.y) || 0) + Re
        };
        if (u.mode === "frame" && t === "cutout") {
          const qe = Be(), Mt = It(qe);
          if (!qe || !Mt) continue;
          const Dr = {
            x: q((Ye.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: q((Ye.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, zu = Vs(qe, Dr);
          if (!zu) continue;
          const $u = bo(zu);
          We.yaw_deg = $u.yaw, We.pitch_deg = $u.pitch;
        } else if (u.mode === "unwrap") {
          const qe = fr(), Mt = q((Ye.x - qe.x) / Math.max(qe.w, 1), 0, 1), Dr = q((Ye.y - qe.y) / Math.max(qe.h, 1), 0, 1);
          We.yaw_deg = zt(Mt * 360 - 180), We.pitch_deg = q(90 - Dr * 180, -90, 90);
        } else {
          const qe = Os(Ye.x, Ye.y), Mt = bo(qe);
          We.yaw_deg = Mt.yaw, We.pitch_deg = Mt.pitch;
        }
        ue = !0;
      }
      for (const Le of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const We = {
          x: Number(((H = Le.center) == null ? void 0 : H.x) || 0) + Te,
          y: Number(((Y = Le.center) == null ? void 0 : Y.y) || 0) + Re
        }, Ye = u.mode === "frame" ? (() => {
          const Mt = Be();
          return Mt ? Mn(We, Mt, performance.now()) : null;
        })() : Nn(We, performance.now()), qe = Le.centerUv || null;
        if (Ye && qe) {
          const Mt = mn(Number(Ye.u || 0), Number(qe.u || 0)), Dr = Number(Ye.v || 0) - Number(qe.v || 0);
          Dc(Le.id, Mt, Dr, Le.snapshot, Le.layerKind, Le.frameSnapshot) && (ue = !0, ve = !0);
        }
      }
      for (const Le of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const We = {
          x: Number(((ae = Le.center) == null ? void 0 : ae.x) || 0) + Te,
          y: Number(((pe = Le.center) == null ? void 0 : pe.y) || 0) + Re
        }, Ye = u.mode === "frame" ? (() => {
          const Mt = Be();
          return Mt ? Mn(We, Mt, performance.now()) : null;
        })() : Nn(We, performance.now()), qe = Le.centerUv || null;
        if (Ye && qe) {
          const Mt = mn(Number(Ye.u || 0), Number(qe.u || 0)), Dr = Number(Ye.v || 0) - Number(qe.v || 0);
          Rc(Le.id, Mt, Dr, Le.snapshot) && (ue = !0, Se = !0);
        }
      }
      ue && (ve ? Sn({ rebuildPaintEngine: !1 }) : Se ? li() : Rt(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const J = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Oc((oe = s.item) == null ? void 0 : oe.actionGroupId, J, 0, s.snapshot, (be = s.item) == null ? void 0 : be.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ke = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * _r;
      r.shiftKey && (ke = Math.round(ke / 45) * 45), Oc((Ie = s.item) == null ? void 0 : Ie.actionGroupId, 1, ke, s.snapshot, (je = s.item) == null ? void 0 : je.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const J = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * J, 1, 179), s.item.vFOV_deg = q(s.startVFOV * J, 1, 179), s.item.aspect_id = Vr(s.item), _t(s.item) && Rt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const J = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * J, 1, 179), s.item.aspect_id = Vr(s.item), _t(s.item) && Rt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const J = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = q(s.startVFOV * J, 1, 179), s.item.aspect_id = Vr(s.item), _t(s.item) && Rt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let J = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * _r, ue = s.startRot - J;
      r.shiftKey && (ue = Math.round(ue / 45) * 45);
      const ve = _t(s.item) ? "rot_deg" : "roll_deg";
      s.item[ve] = ue, _t(s.item) && Rt(), ge({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var o, s, l, m, g, _;
    const r = u.interaction;
    if (((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      zi();
      const y = qs(u.interaction), w = !!u.interaction._hasCommittedSegments;
      if (y || w) {
        Sn();
        const S = String(((l = u.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (S) {
          const k = Ht().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === S);
          k && (k.frame = null);
        }
        const P = un();
        P && (y ? String(((m = u.interaction.stroke) == null ? void 0 : m.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(P), ou()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, P) : u.paintEngine.cancelActiveStroke(P)), ft(), gn(), He(), Ue(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const S = un();
        S && u.paintEngine.cancelActiveStroke(S);
      }
    } else if (((g = u.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const y = Nu(u.interaction.start, u.interaction.current), S = [
        ...t === "cutout" ? js().filter((P) => !cn(P)) : [...Wn()],
        ...ip(),
        ...ap()
      ].filter((P) => pg(y, Ot(P)));
      dp(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && S.length && (u.cutoutAspectOpen = !1), He(), Ue(), ge();
    } else if (u.interaction && u.interaction.kind !== "view" && u.interaction.kind !== "pan_frame") {
      let y = !1;
      (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (y = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (y = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (y = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (y = !0), y && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Sn({ rebuildPaintEngine: !0 }) : li()), ft(), gn(), e.setDirtyCanvas(!0, !0), Gs(), u.hqFrames = 1, Ue(), ge();
    }
    u.interaction = null, zi(), r && r.kind === "view" && Ft.endDrag(performance.now()), Ra(), Ue(), ht(u.pointerPos), ge();
  }, I.onpointercancel = () => {
    var r, o, s;
    if (((r = u.interaction) == null ? void 0 : r.kind) === "view" && Ft.endDrag(performance.now()), ((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      zi();
      const l = un();
      l && u.paintEngine.cancelActiveStroke(l);
    }
    u.interaction = null, zi(), Ra(), ht(u.pointerPos), ge({ localOnly: !0 });
  }, I.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, I.onmousemove = (r) => {
    const o = ci(r);
    Xa(o, !0), !u.interaction && ht(o);
  }, I.onmouseleave = () => {
    Xa(u.pointerPos, !1), ht(u.pointerPos);
  }, I.onwheel = (r) => {
    if (u.mode === "frame") {
      const o = ci(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      rg(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    u.mode === "pano" && (Ft.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, I.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Cr(!0));
  }, I.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), me.depth = 0, Cr(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((m) => Wa(m));
    s && hu(s);
  };
  const Mu = (r) => {
    t !== "stickers" && t !== "cutout" || i || vs(r) && (me.depth += 1, Cr(!0), r.preventDefault());
  }, ku = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!me.active && vs(r) && Cr(!0), me.active && r.preventDefault());
  }, Pu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !me.active) return;
    me.depth = Math.max(0, me.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (me.depth === 0 || o) && Cr(!1);
  }, Au = (r) => {
    t !== "stickers" && t !== "cutout" || i || (me.depth = 0, Cr(!1), vs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", Mu, !0), window.addEventListener("dragover", ku, !0), window.addEventListener("dragleave", Pu, !0), window.addEventListener("drop", Au, !0);
  function Js() {
    const { canUndo: r, canRedo: o } = du();
    Xi(N.toolButtons, "value", "undo", { disabled: !r }), Xi(N.toolButtons, "value", "redo", { disabled: !o });
  }
  const Cu = (r, o, s = !1) => {
    var y;
    const l = ct(), m = Oa();
    if (!l || m === "stroke") return;
    const g = (((y = N.sidePanel) == null ? void 0 : y.params) || []).find((w) => w.key === r);
    if (!g || g.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = q(_, Number(g.min), Number(g.max)), r === "yaw_deg" && (_ = zt(_)), l[r] = _, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (l.aspect_id = Vr(l)), He(), ge(), s && ft();
  };
  fe == null || fe.addEventListener("click", async (r) => {
    var l, m, g, _, y, w, S, P, k;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const D = Lt(o.getAttribute("data-coverage"));
      if (D === Lt(h.coverage)) return;
      h.coverage = D, u.coverage = D, p && (p.value = String(D)), c ? B.backgroundDirty = !0 : (gn(), ng({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), Ue(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((m = (l = N.sidePanel) == null ? void 0 : l.selectionPicker) != null && m.disabled) return;
      N.sidePanel.selectionPicker.open = !N.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      N.sidePanel.selectionPicker.open = !1;
      const D = String(o.getAttribute("data-selection-id") || "");
      let j = null;
      D && (t === "stickers" ? j = Wn().find((ne) => String((ne == null ? void 0 : ne.id) || "") === D) || null : j = ((g = Fc().find((ne) => {
        var H;
        return String(((H = ne == null ? void 0 : ne.item) == null ? void 0 : H.id) || "") === D;
      })) == null ? void 0 : g.item) || null), Ir(j || null), j && !Pt(j) && _s(
        zt(Number(j.yaw_deg || 0)),
        q(Number(j.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), Ue(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const D = ct(), j = Oa();
      if (!D || j === "stroke" || wn().length > 1) return;
      const ne = JSON.stringify(t === "cutout" && j !== "image" ? Bc(D) : Mp(D));
      try {
        await navigator.clipboard.writeText(ne), (_ = N.sidePanel) != null && _.copyStateButton && (N.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var H;
          (H = N.sidePanel) != null && H.copyStateButton && (N.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const D = String(o.getAttribute("data-visibility") || "");
      D === "panorama" ? u.showPanorama = !u.showPanorama : D === "objects" ? u.showObjects = !u.showObjects : D === "mask" && (u.showMask = !u.showMask), He(), ge();
      return;
    }
    if (s === "set-invert-x") {
      h.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Ya(), He(), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      h.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Ya(), He(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (S = N.sidePanel) != null && S.uiSettings && (N.sidePanel.uiSettings.qualityOpen = !N.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const D = String(o.getAttribute("data-quality") || "balanced");
      h.ui_settings.preview_quality = D === "draft" || D === "high" ? D : "balanced", Ya(), He(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      h.ui_settings.invert_view_x = !1, h.ui_settings.invert_view_y = !1, h.ui_settings.preview_quality = "balanced", Ya(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      di();
      return;
    }
    if (s === "cancel-close") {
      di();
      return;
    }
    s === "save-close" && (eg(), di());
  }), fe == null || fe.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Cu(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), fe == null || fe.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Cu(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Zs = () => {
    const r = !!u.showGrid;
    Xi(N.floatingButtons, "action", "toggle-grid", {
      icon: r ? De.eye : De.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Zs(), T.addEventListener("click", (r) => {
    var y, w, S, P;
    if ((w = (y = r.target) == null ? void 0 : y.matches) != null && w.call(y, "[data-confirm-overlay]")) {
      const k = (S = N.confirmDialog) == null ? void 0 : S.resolve;
      N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, k == null || k(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      u.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && u.mode === "frame" && ct() && cn(ct()) && (ii({ preservePanelValues: !0 }), He(), Ue()), Ws(), Ra(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const k = String(s.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = k, (k === "paint" || k === "mask") && ii({ preservePanelValues: !0 }), tn(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const k = String(s.getAttribute("data-tool-ui-action") || "");
        if ((k === "undo" || k === "redo") && s.disabled) return;
        k === "undo" ? Ks(-1) : k === "redo" ? Ks(1) : k === "clear" ? Wm() : k === "add" || k === "add-image" ? jm() : k === "add-or-look" && Bm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const k = String(s.getAttribute("data-paint-tool") || "pen");
        u.paintTool = k, ii({ preservePanelValues: !0 }), nn[k] && (u.activeBrushPresetId = k), tn(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ii({ preservePanelValues: !0 }), tn(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const k = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Ym(k);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const k = To.find((D) => D.id === s.getAttribute("data-paint-color-swatch"));
        if (!k) return;
        u.paintColor = fn(k.color), At(!0), tn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), we && !we.hidden ? At(!0) : pn(), tn();
        return;
      }
    }
    const l = String(((P = s == null ? void 0 : s.getAttribute) == null ? void 0 : P.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      if (ri(), $.paused) {
        V.mode = "playback", V.pendingPlaybackResume = !1, V.resumeAfterScrub = !1;
        const k = Number(N.videoTransport.duration || $.duration || 0), D = Number($.currentTime || V.editorTime || 0), j = k > 0 && D >= k - 1e-3 ? 0 : Number(V.editorTime || D || 0), ne = Math.max(dt(), 0.04);
        V.editorTime = j, Math.abs(D - j) > ne ? (V.seeking = !1, V.pendingPlaybackResume = !0, Is(j)) : $.play().catch(() => {
        });
      } else
        $.pause(), V.mode = "scrub", V.resumeAfterScrub = !1, V.pendingPlaybackResume = !1, V.editorTime = Number($.currentTime || 0), ni();
      Tn({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: Yn(),
        currentTime: V.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: V.mode
      }), ge({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement) || !N.videoTransport.hasAudio) return;
      const k = !$.muted;
      $.muted = k, !k && Number($.volume || 0) <= 0 && ($.volume = Math.max(0.01, Number(N.videoTransport.volume || 1))), Tn({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: Yn(),
        currentTime: V.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: V.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? N.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (l === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      const k = !N.videoTransport.loop;
      N.videoTransport.loop = k, $.loop = k, Tn({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: Yn(),
        currentTime: V.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: V.mode,
        hasAudio: N.videoTransport.hasAudio,
        loop: k,
        muted: $.muted,
        volume: Number($.volume ?? N.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (l === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, Ue(), ge();
        return;
      }
      if (l === "aspect-set") {
        const k = ct();
        if (!k) return;
        const D = String(s.getAttribute("data-aspect") || "1:1");
        Xm(k, D), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Gs(), ft(), xt(), Ue(), ge();
        return;
      }
      if (l === "rotate-90") {
        const k = ct();
        if (!k) return;
        Jm(k), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Gs(), ft(), xt(), Ue(), ge();
        return;
      }
      if (l === "bring-front") {
        Zm();
        return;
      }
      if (l === "send-back") {
        Qm();
        return;
      }
      if (l === "duplicate") {
        qm();
        return;
      }
      if (l === "replace-image") {
        Hm();
        return;
      }
      if (l === "toggle-lock") {
        fp();
        return;
      }
      if (l === "back-initial") {
        yp();
        return;
      }
      if (l === "toggle-visible") {
        bp();
        return;
      }
      if (l === "delete") {
        gu();
        return;
      }
    }
    if (l === "reset-view") {
      _s(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      u.showGrid = !u.showGrid, Tx(e == null ? void 0 : e.id, u.showGrid), Zs(), ge();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), yg();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const k = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = k, u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = k ? 1 : 0, u.outputPreviewAnimStartTs = performance.now(), Ou(), ge();
      return;
    }
    const m = r.target.closest("[data-paint-history-index]");
    if (!m) return;
    const g = Number(m.getAttribute("data-paint-history-index")), _ = u.customPaintHistory[g];
    _ && (u.customPaintColor = fn(_), u.paintColor = fn(_), tn());
  }), T.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!($ instanceof HTMLVideoElement)) return;
      ri();
      const g = q(Number(o.value || 0), 0, Number(N.videoTransport.duration || 0));
      V.mode = "scrub", !V.seeking && !$.paused && !$.ended && (V.resumeAfterScrub = !0, $.pause()), V.editorTime = g, Di(g), Tn({
        ready: !!$.getAttribute("src"),
        playing: !1,
        visible: Yn(),
        currentTime: g,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: "scrub"
      }), Number(X.__panoFrameIdx || 0) > 0 && (B.backgroundDirty = !0, B.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), Is(g);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!($ instanceof HTMLVideoElement)) return;
      const g = q(Number(s.value || 0), 0, 1);
      $.volume = g, $.muted = g <= 1e-4, Tn({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: Yn(),
        currentTime: V.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: V.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: $.muted,
        volume: g
      });
      return;
    }
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const g = Math.max(1, Math.min(120, Math.round(Number(l.value)))), _ = pr(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[_] = g, tn(), sg();
      return;
    }
    const m = r.target.closest("[data-paint-alpha-slider]");
    if (m) {
      const g = { ...u.customPaintColor, a: q(Number(m.value) / 100, 0, 1) };
      u.customPaintColor = fn(g), u.paintColor = fn(g), tn();
    }
  }), T.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!($ instanceof HTMLVideoElement)) return;
      V.pendingPlaybackResume = !!V.resumeAfterScrub, V.resumeAfterScrub = !1, V.pendingPlaybackResume || (V.mode = "scrub"), V.seeking || (V.pendingPlaybackResume ? (V.pendingPlaybackResume = !1, V.mode = "playback", $.play().catch(() => {
      })) : (ni(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ja();
  }), T.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ja();
  }), T.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ja();
  }), T.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Ja();
  }), T.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !T.contains(o) || Z.target !== o && (Z.target = o, Z.timer && clearTimeout(Z.timer), Z.timer = window.setTimeout(() => {
      Z.target === o && mg(o);
    }, 220));
  }), T.addEventListener("pointerout", (r) => {
    var l, m;
    const o = r.target.closest("[data-tip]");
    !o || Z.target !== o || (r.relatedTarget instanceof Element ? (m = (l = r.relatedTarget).closest) == null ? void 0 : m.call(l, "[data-tip]") : null) === o || Za();
  }), T.addEventListener("pointerdown", () => {
    Za();
  });
  const gg = (r, o) => {
    var y;
    if (!Oe) return;
    const s = Oe.getBoundingClientRect(), l = q((r - s.left) / Math.max(1, s.width), 0, 1), m = 1 - q((o - s.top) / Math.max(1, s.height), 0, 1), g = kl(u.customPaintColor), _ = { ...Ml(g.h, l, m), a: Number(((y = u.customPaintColor) == null ? void 0 : y.a) ?? 1) };
    u.customPaintColor = fn(_), u.paintColor = fn(_), tn();
  }, bg = (r) => {
    var g;
    if (!Ke) return;
    const o = Ke.getBoundingClientRect(), s = q((r - o.left) / Math.max(1, o.width), 0, 1), l = kl(u.customPaintColor), m = { ...Ml(s, l.s, l.v), a: Number(((g = u.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    u.customPaintColor = fn(m), u.paintColor = fn(m), tn();
  }, Iu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const l = (g) => {
      g.pointerId === s && o(g);
    }, m = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m);
  };
  Oe && (Oe.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Iu(r, (o) => gg(o.clientX, o.clientY));
  }), Ke && (Ke.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Iu(r, (o) => bg(o.clientX));
  }), T.addEventListener("click", (r) => {
    var m;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (m = N.confirmDialog) == null ? void 0 : m.resolve;
    N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const Tu = () => {
    const r = !!u.fullscreen;
    Xi(N.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? De.fullscreen_close : De.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Qa = (r) => {
    const o = !!r;
    u.fullscreen !== o && (u.fullscreen = o, T.classList.toggle("pano-modal-fullscreen", o), o ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Zs(), Tu(), nt(), ge());
  }, Eu = () => document.fullscreenElement === F, yg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Qa(!u.fullscreen);
        return;
      }
      Eu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = F.requestFullscreen) == null ? void 0 : r.call(F));
    } catch {
      Qa(!u.fullscreen);
    }
  }, Du = () => {
    document.fullscreenEnabled && Qa(Eu());
  };
  document.addEventListener("fullscreenchange", Du), Tu();
  const Ou = () => {
    const r = !!u.outputPreviewExpanded;
    N.outputPreviewToggle.icon = r ? De.fullscreen_close : De.fullscreen, N.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", N.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Ou();
  const Qs = e.onExecuted, el = e.onConnectionsChange;
  let tl = null, nl = null, rl = null;
  !i && t === "stickers" && (rl = (r = "sync") => {
    Kc(r);
  }, e.__panoExternalStickerSync = rl, tl = function(...o) {
    var s;
    typeof Qs == "function" && Qs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = tl, nl = function(...o) {
    var s;
    typeof el == "function" && el.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = nl), i || Bf.set(String(e.id ?? "0"), () => Jc());
  let fi = null;
  const di = async () => fi || (fi = (async () => {
    var r, o, s, l, m, g, _, y, w, S, P;
    return Bf.delete(String(e.id ?? "0")), i || gn(), document.fullscreenElement === F && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Du), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (m = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || m.call(l, !0, !0), (y = (_ = (g = Sr) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || y.call(_, !0, !0), Za(), $m(), $ instanceof HTMLVideoElement && $.pause(), Ae.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), (w = ye == null ? void 0 : ye.dispose) == null || w.call(ye), (S = L == null ? void 0 : L.unmount) == null || S.call(L), (P = he == null ? void 0 : he.dispose) == null || P.call(he), Cr(!1), window.removeEventListener("keydown", Ru, !0), window.removeEventListener("keydown", Fu, !0), window.removeEventListener("keydown", eo, !0), window.removeEventListener("keyup", eo, !0), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("dragenter", Mu, !0), window.removeEventListener("dragover", ku, !0), window.removeEventListener("dragleave", Pu, !0), window.removeEventListener("drop", Au, !0), !i && t === "stickers" && (e.onExecuted === tl && (e.onExecuted = Qs), e.onConnectionsChange === nl && (e.onConnectionsChange = el), e.__panoExternalStickerSync === rl && (e.__panoExternalStickerSync = null)), O.unmount(), z.remove(), tg(), fi = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), fi = null, !1)), fi), Ru = (r) => {
    var o, s, l, m;
    if (r.key === "Escape") {
      if (u.fullscreen && document.fullscreenElement === F) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), Qa(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), di();
    }
  }, Fu = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = r.target, y = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    y === "INPUT" || y === "TEXTAREA" || _ != null && _.isContentEditable || !ct() || (gu(), r.preventDefault(), r.stopPropagation());
  }, eo = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    u.marqueeModifier !== o && (u.marqueeModifier = o, ht(u.pointerPos));
  }, Lu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, m = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (m === "INPUT" || m === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = du();
    r.shiftKey && !_ || !r.shiftKey && !g || (Ks(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Ru, !0), window.addEventListener("keydown", Fu, !0), window.addEventListener("keydown", eo, !0), window.addEventListener("keyup", eo, !0), window.addEventListener("keydown", Lu, !0), F.addEventListener("pointerdown", (r) => {
    r.target === F && di();
  }), Ap(), !i && t === "stickers" && Kc("open"), Um(), ft(), Js(), tn(), He(), Es(), ri(), fu(), ht(u.pointerPos), ge(), B.rafId = requestAnimationFrame(Bs);
}
function Xf(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (b) => {
    var v, h;
    try {
      (v = b.__panoDomRestore) == null || v.call(b);
    } catch {
    }
    try {
      (h = b.__panoLegacyRestore) == null || h.call(b);
    } catch {
    }
    b.__panoDomPreview = null, b.__panoLegacyPreviewHooked = !1, b.__panoPreviewHooked = !1, b.__panoPreviewAttached = !1, b.__panoPreviewMountKey = null;
  };
  function c(b) {
    var M;
    const v = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === v) return;
    a(b), n === "PanoramaStickers" && zx(b), Ic(b), jx(b, es);
    const x = yn(b, es);
    if (x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const C = x.callback;
      x.callback = (N) => {
        var O;
        const z = C ? C(N) : void 0;
        return (O = b.setDirtyCanvas) == null || O.call(b, !0, !1), z;
      };
    }
    if (n === "PanoramaStickers") {
      const C = yn(b, "bg_color");
      C && (C.value == null || String(C.value).trim() === "" || String(C.value).toLowerCase() === "#000000") && (C.value = "#00ff00", (M = C.callback) == null || M.call(C, "#00ff00")), ql(b, i, () => ma(b, "stickers"));
      {
        b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = v;
        return;
      }
    }
    ql(b, i, () => ma(b, "cutout")), Ov(b, {
      buttonText: i,
      onOpen: () => ma(b, "cutout")
    }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = v;
  }
  const f = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const b = f ? f.apply(this, arguments) : void 0;
    return c(this), b;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const b = d ? d.apply(this, arguments) : void 0;
    return this.widgets && c(this), b;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const b = p ? p.apply(this, arguments) : void 0;
    return this.widgets && c(this), b;
  };
}
function Jx(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function Zx(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Ic(e), ql(e, "Open Preview", () => ma(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Dv(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => ma(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
Sr.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Xf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Xf(e, t, "PanoramaCutout", "Open Cutout Editor"), Uo(n) && Jx(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Ic(e), Uo(t) && Zx(e);
  }
});
