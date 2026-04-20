import * as xo from "../../scripts/app.js";
import { app as wr } from "../../scripts/app.js";
import { api as yn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const st = {}, yi = [], $n = () => {
}, Xf = () => !1, ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ns = (e) => e.startsWith("onUpdate:"), Yt = Object.assign, Jl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bg = Object.prototype.hasOwnProperty, Ze = (e, t) => bg.call(e, t), Fe = Array.isArray, _i = (e) => ka(e) === "[object Map]", Zf = (e) => ka(e) === "[object Set]", ju = (e) => ka(e) === "[object Date]", je = (e) => typeof e == "function", wt = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", rt = (e) => e !== null && typeof e == "object", Jf = (e) => (rt(e) || je(e)) && je(e.then) && je(e.catch), Qf = Object.prototype.toString, ka = (e) => Qf.call(e), yg = (e) => ka(e).slice(8, -1), ed = (e) => ka(e) === "[object Object]", Ql = (e) => wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, na = /* @__PURE__ */ Zl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _g = /-\w/g, Qt = rs(
  (e) => e.replace(_g, (t) => t.slice(1).toUpperCase())
), xg = /\B([A-Z])/g, Wr = rs(
  (e) => e.replace(xg, "-$1").toLowerCase()
), is = rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), rl = rs(
  (e) => e ? `on${is(e)}` : ""
), Hn = (e, t) => !Object.is(e, t), il = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, td = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, wg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let zu;
const as = () => zu || (zu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (Fe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = wt(i) ? kg(i) : Nt(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (wt(e) || rt(e))
    return e;
}
const Sg = /;(?![^(]*\))/g, Ng = /:([^]+)/, Mg = /\/\*[^]*?\*\//g;
function kg(e) {
  const t = {};
  return e.replace(Mg, "").split(Sg).forEach((n) => {
    if (n) {
      const i = n.split(Ng);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (wt(e))
    t = e;
  else if (Fe(e))
    for (let n = 0; n < e.length; n++) {
      const i = gt(e[n]);
      i && (t += i + " ");
    }
  else if (rt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cg = /* @__PURE__ */ Zl(Pg);
function nd(e) {
  return !!e || e === "";
}
function Ag(e, t) {
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
  if (n = Fe(e), i = Fe(t), n || i)
    return n && i ? Ag(e, t) : !1;
  if (n = rt(e), i = rt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f), h = t.hasOwnProperty(f);
      if (d && !h || !d && h || !ec(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rd = (e) => !!(e && e.__v_isRef === !0), Mt = (e) => wt(e) ? e : e == null ? "" : Fe(e) || rt(e) && (e.toString === Qf || !je(e.toString)) ? rd(e) ? Mt(e.value) : JSON.stringify(e, id, 2) : String(e), id = (e, t) => rd(t) ? id(e, t.value) : _i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[al(i, c) + " =>"] = a, n),
    {}
  )
} : Zf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => al(n))
} : Bn(t) ? al(t) : rt(t) && !Fe(t) && !ed(t) ? String(t) : t, al = (e, t = "") => {
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
function Ig() {
  return an;
}
let ct;
const ol = /* @__PURE__ */ new WeakSet();
class ad {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ol.has(this) && (ol.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $u(this), ld(this);
    const t = ct, n = Cn;
    ct = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      cd(this), ct = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rc(t);
      this.deps = this.depsTail = void 0, $u(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ol.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Al(this) && this.run();
  }
  get dirty() {
    return Al(this);
  }
}
let od = 0, ra, ia;
function sd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ia, ia = e;
    return;
  }
  e.next = ra, ra = e;
}
function tc() {
  od++;
}
function nc() {
  if (--od > 0)
    return;
  if (ia) {
    let t = ia;
    for (ia = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ra; ) {
    let t = ra;
    for (ra = void 0; t; ) {
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
function ld(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), rc(i), Eg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Al(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ud(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ud(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ma) || (e.globalVersion = ma, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Al(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ct, i = Cn;
  ct = e, Cn = !0;
  try {
    ld(e);
    const a = e.fn(e._value);
    (t.version === 0 || Hn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ct = n, Cn = i, cd(e), e.flags &= -3;
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
function Eg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = !0;
const fd = [];
function ir() {
  fd.push(Cn), Cn = !1;
}
function ar() {
  const e = fd.pop();
  Cn = e === void 0 ? !0 : e;
}
function $u(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ct;
    ct = void 0;
    try {
      t();
    } finally {
      ct = n;
    }
  }
}
let ma = 0;
class Dg {
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
    if (!ct || !Cn || ct === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ct)
      n = this.activeLink = new Dg(ct, this), ct.deps ? (n.prevDep = ct.depsTail, ct.depsTail.nextDep = n, ct.depsTail = n) : ct.deps = ct.depsTail = n, dd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ct.depsTail, n.nextDep = void 0, ct.depsTail.nextDep = n, ct.depsTail = n, ct.deps === n && (ct.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, ma++, this.notify(t);
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
function dd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        dd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Tl = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ Symbol(
  ""
), Il = /* @__PURE__ */ Symbol(
  ""
), ga = /* @__PURE__ */ Symbol(
  ""
);
function Kt(e, t, n) {
  if (Cn && ct) {
    let i = Tl.get(e);
    i || Tl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new ic()), a.map = i, a.key = n), a.track();
  }
}
function nr(e, t, n, i, a, c) {
  const f = Tl.get(e);
  if (!f) {
    ma++;
    return;
  }
  const d = (h) => {
    h && h.trigger();
  };
  if (tc(), t === "clear")
    f.forEach(d);
  else {
    const h = Fe(e), v = h && Ql(n);
    if (h && n === "length") {
      const y = Number(i);
      f.forEach((p, w) => {
        (w === "length" || w === ga || !Bn(w) && w >= y) && d(p);
      });
    } else
      switch ((n !== void 0 || f.has(void 0)) && d(f.get(n)), v && d(f.get(ga)), t) {
        case "add":
          h ? v && d(f.get("length")) : (d(f.get(jr)), _i(e) && d(f.get(Il)));
          break;
        case "delete":
          h || (d(f.get(jr)), _i(e) && d(f.get(Il)));
          break;
        case "set":
          _i(e) && d(f.get(jr));
          break;
      }
  }
  nc();
}
function ui(e) {
  const t = /* @__PURE__ */ Xe(e);
  return t === e ? t : (Kt(t, "iterate", ga), /* @__PURE__ */ _n(e) ? t : t.map(Tn));
}
function os(e) {
  return Kt(e = /* @__PURE__ */ Xe(e), "iterate", ga), e;
}
function On(e, t) {
  return /* @__PURE__ */ or(e) ? Mi(/* @__PURE__ */ zr(e) ? Tn(t) : t) : Tn(t);
}
const Lg = {
  __proto__: null,
  [Symbol.iterator]() {
    return sl(this, Symbol.iterator, (e) => On(this, e));
  },
  concat(...e) {
    return ui(this).concat(
      ...e.map((t) => Fe(t) ? ui(t) : t)
    );
  },
  entries() {
    return sl(this, "entries", (e) => (e[1] = On(this, e[1]), e));
  },
  every(e, t) {
    return Yn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => On(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Yn(
      this,
      "find",
      e,
      t,
      (n) => On(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Yn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yn(
      this,
      "findLast",
      e,
      t,
      (n) => On(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Yn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ll(this, "includes", e);
  },
  indexOf(...e) {
    return ll(this, "indexOf", e);
  },
  join(e) {
    return ui(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ll(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $i(this, "pop");
  },
  push(...e) {
    return $i(this, "push", e);
  },
  reduce(e, ...t) {
    return Bu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bu(this, "reduceRight", e, t);
  },
  shift() {
    return $i(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $i(this, "splice", e);
  },
  toReversed() {
    return ui(this).toReversed();
  },
  toSorted(e) {
    return ui(this).toSorted(e);
  },
  toSpliced(...e) {
    return ui(this).toSpliced(...e);
  },
  unshift(...e) {
    return $i(this, "unshift", e);
  },
  values() {
    return sl(this, "values", (e) => On(this, e));
  }
};
function sl(e, t, n) {
  const i = os(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ _n(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const Rg = Array.prototype;
function Yn(e, t, n, i, a, c) {
  const f = os(e), d = f !== e && !/* @__PURE__ */ _n(e), h = f[t];
  if (h !== Rg[t]) {
    const p = h.apply(e, c);
    return d ? Tn(p) : p;
  }
  let v = n;
  f !== e && (d ? v = function(p, w) {
    return n.call(this, On(e, p), w, e);
  } : n.length > 2 && (v = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const y = h.call(f, v, i);
  return d && a ? a(y) : y;
}
function Bu(e, t, n, i) {
  const a = os(e), c = a !== e && !/* @__PURE__ */ _n(e);
  let f = n, d = !1;
  a !== e && (c ? (d = i.length === 0, f = function(v, y, p) {
    return d && (d = !1, v = On(e, v)), n.call(this, v, On(e, y), p, e);
  }) : n.length > 3 && (f = function(v, y, p) {
    return n.call(this, v, y, p, e);
  }));
  const h = a[t](f, ...i);
  return d ? On(e, h) : h;
}
function ll(e, t, n) {
  const i = /* @__PURE__ */ Xe(e);
  Kt(i, "iterate", ga);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ sc(n[0]) ? (n[0] = /* @__PURE__ */ Xe(n[0]), i[t](...n)) : a;
}
function $i(e, t, n = []) {
  ir(), tc();
  const i = (/* @__PURE__ */ Xe(e))[t].apply(e, n);
  return nc(), ar(), i;
}
const Og = /* @__PURE__ */ Zl("__proto__,__v_isRef,__isVue"), hd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
);
function Fg(e) {
  Bn(e) || (e = String(e));
  const t = /* @__PURE__ */ Xe(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class pd {
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
      return i === (a ? c ? Wg : bd : c ? vd : gd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const f = Fe(t);
    if (!a) {
      let h;
      if (f && (h = Lg[n]))
        return h;
      if (n === "hasOwnProperty")
        return Fg;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qt(t) ? t : i
    );
    if ((Bn(n) ? hd.has(n) : Og(n)) || (a || Kt(t, "get", n), c))
      return d;
    if (/* @__PURE__ */ qt(d)) {
      const h = f && Ql(n) ? d : d.value;
      return a && rt(h) ? /* @__PURE__ */ Dl(h) : h;
    }
    return rt(d) ? a ? /* @__PURE__ */ Dl(d) : /* @__PURE__ */ ss(d) : d;
  }
}
class md extends pd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const f = Fe(t) && Ql(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ or(c);
      if (!/* @__PURE__ */ _n(i) && !/* @__PURE__ */ or(i) && (c = /* @__PURE__ */ Xe(c), i = /* @__PURE__ */ Xe(i)), !f && /* @__PURE__ */ qt(c) && !/* @__PURE__ */ qt(i))
        return v || (c.value = i), !0;
    }
    const d = f ? Number(n) < t.length : Ze(t, n), h = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ qt(t) ? t : a
    );
    return t === /* @__PURE__ */ Xe(a) && (d ? Hn(i, c) && nr(t, "set", n, i) : nr(t, "add", n, i)), h;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && nr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Bn(n) || !hd.has(n)) && Kt(t, "has", n), i;
  }
  ownKeys(t) {
    return Kt(
      t,
      "iterate",
      Fe(t) ? "length" : jr
    ), Reflect.ownKeys(t);
  }
}
class Vg extends pd {
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
const Hg = /* @__PURE__ */ new md(), jg = /* @__PURE__ */ new Vg(), zg = /* @__PURE__ */ new md(!0);
const El = (e) => e, eo = (e) => Reflect.getPrototypeOf(e);
function $g(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ Xe(a), f = _i(c), d = e === "entries" || e === Symbol.iterator && f, h = e === "keys" && f, v = a[e](...i), y = n ? El : t ? Mi : Tn;
    return !t && Kt(
      c,
      "iterate",
      h ? Il : jr
    ), Yt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = v.next();
          return w ? { value: p, done: w } : {
            value: d ? [y(p[0]), y(p[1])] : y(p),
            done: w
          };
        }
      }
    );
  };
}
function to(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bg(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Xe(c), d = /* @__PURE__ */ Xe(a);
      e || (Hn(a, d) && Kt(f, "get", a), Kt(f, "get", d));
      const { has: h } = eo(f), v = t ? El : e ? Mi : Tn;
      if (h.call(f, a))
        return v(c.get(a));
      if (h.call(f, d))
        return v(c.get(d));
      c !== f && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Kt(/* @__PURE__ */ Xe(a), "iterate", jr), a.size;
    },
    has(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Xe(c), d = /* @__PURE__ */ Xe(a);
      return e || (Hn(a, d) && Kt(f, "has", a), Kt(f, "has", d)), a === d ? c.has(a) : c.has(a) || c.has(d);
    },
    forEach(a, c) {
      const f = this, d = f.__v_raw, h = /* @__PURE__ */ Xe(d), v = t ? El : e ? Mi : Tn;
      return !e && Kt(h, "iterate", jr), d.forEach((y, p) => a.call(c, v(y), v(p), f));
    }
  };
  return Yt(
    n,
    e ? {
      add: to("add"),
      set: to("set"),
      delete: to("delete"),
      clear: to("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ Xe(this), f = eo(c), d = /* @__PURE__ */ Xe(a), h = !t && !/* @__PURE__ */ _n(a) && !/* @__PURE__ */ or(a) ? d : a;
        return f.has.call(c, h) || Hn(a, h) && f.has.call(c, a) || Hn(d, h) && f.has.call(c, d) || (c.add(h), nr(c, "add", h, h)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ _n(c) && !/* @__PURE__ */ or(c) && (c = /* @__PURE__ */ Xe(c));
        const f = /* @__PURE__ */ Xe(this), { has: d, get: h } = eo(f);
        let v = d.call(f, a);
        v || (a = /* @__PURE__ */ Xe(a), v = d.call(f, a));
        const y = h.call(f, a);
        return f.set(a, c), v ? Hn(c, y) && nr(f, "set", a, c) : nr(f, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ Xe(this), { has: f, get: d } = eo(c);
        let h = f.call(c, a);
        h || (a = /* @__PURE__ */ Xe(a), h = f.call(c, a)), d && d.call(c, a);
        const v = c.delete(a);
        return h && nr(c, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Xe(this), c = a.size !== 0, f = a.clear();
        return c && nr(
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
    n[a] = $g(a, e, t);
  }), n;
}
function ac(e, t) {
  const n = Bg(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    c
  );
}
const Ug = {
  get: /* @__PURE__ */ ac(!1, !1)
}, Kg = {
  get: /* @__PURE__ */ ac(!1, !0)
}, Gg = {
  get: /* @__PURE__ */ ac(!0, !1)
};
const gd = /* @__PURE__ */ new WeakMap(), vd = /* @__PURE__ */ new WeakMap(), bd = /* @__PURE__ */ new WeakMap(), Wg = /* @__PURE__ */ new WeakMap();
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
function Yg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qg(yg(e));
}
// @__NO_SIDE_EFFECTS__
function ss(e) {
  return /* @__PURE__ */ or(e) ? e : oc(
    e,
    !1,
    Hg,
    Ug,
    gd
  );
}
// @__NO_SIDE_EFFECTS__
function Xg(e) {
  return oc(
    e,
    !1,
    zg,
    Kg,
    vd
  );
}
// @__NO_SIDE_EFFECTS__
function Dl(e) {
  return oc(
    e,
    !0,
    jg,
    Gg,
    bd
  );
}
function oc(e, t, n, i, a) {
  if (!rt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = Yg(e);
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
function zr(e) {
  return /* @__PURE__ */ or(e) ? /* @__PURE__ */ zr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
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
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Xe(t) : e;
}
function Zg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && td(e, "__v_skip", !0), e;
}
const Tn = (e) => rt(e) ? /* @__PURE__ */ ss(e) : e, Mi = (e) => rt(e) ? /* @__PURE__ */ Dl(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return Jg(e, !1);
}
function Jg(e, t) {
  return /* @__PURE__ */ qt(e) ? e : new Qg(e, t);
}
class Qg {
  constructor(t, n) {
    this.dep = new ic(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Xe(t), this._value = n ? t : Tn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ _n(t) || /* @__PURE__ */ or(t);
    t = i ? t : /* @__PURE__ */ Xe(t), Hn(t, n) && (this._rawValue = t, this._value = i ? t : Tn(t), this.dep.trigger());
  }
}
function gi(e) {
  return /* @__PURE__ */ qt(e) ? e.value : e;
}
const e0 = {
  get: (e, t, n) => t === "__v_raw" ? e : gi(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ qt(a) && !/* @__PURE__ */ qt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function yd(e) {
  return /* @__PURE__ */ zr(e) ? e : new Proxy(e, e0);
}
class t0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ic(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ma - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ct !== this)
      return sd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ud(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function n0(e, t, n = !1) {
  let i, a;
  return je(e) ? i = e : (i = e.get, a = e.set), new t0(i, a, n);
}
const no = {}, Do = /* @__PURE__ */ new WeakMap();
let Fr;
function r0(e, t = !1, n = Fr) {
  if (n) {
    let i = Do.get(n);
    i || Do.set(n, i = []), i.push(e);
  }
}
function i0(e, t, n = st) {
  const { immediate: i, deep: a, once: c, scheduler: f, augmentJob: d, call: h } = n, v = (T) => a ? T : /* @__PURE__ */ _n(T) || a === !1 || a === 0 ? rr(T, 1) : rr(T);
  let y, p, w, N, P = !1, M = !1;
  if (/* @__PURE__ */ qt(e) ? (p = () => e.value, P = /* @__PURE__ */ _n(e)) : /* @__PURE__ */ zr(e) ? (p = () => v(e), P = !0) : Fe(e) ? (M = !0, P = e.some((T) => /* @__PURE__ */ zr(T) || /* @__PURE__ */ _n(T)), p = () => e.map((T) => {
    if (/* @__PURE__ */ qt(T))
      return T.value;
    if (/* @__PURE__ */ zr(T))
      return v(T);
    if (je(T))
      return h ? h(T, 2) : T();
  })) : je(e) ? t ? p = h ? () => h(e, 2) : e : p = () => {
    if (w) {
      ir();
      try {
        w();
      } finally {
        ar();
      }
    }
    const T = Fr;
    Fr = y;
    try {
      return h ? h(e, 3, [N]) : e(N);
    } finally {
      Fr = T;
    }
  } : p = $n, t && a) {
    const T = p, $ = a === !0 ? 1 / 0 : a;
    p = () => rr(T(), $);
  }
  const V = Ig(), R = () => {
    y.stop(), V && V.active && Jl(V.effects, y);
  };
  if (c && t) {
    const T = t;
    t = (...$) => {
      T(...$), R();
    };
  }
  let D = M ? new Array(e.length).fill(no) : no;
  const I = (T) => {
    if (!(!(y.flags & 1) || !y.dirty && !T))
      if (t) {
        const $ = y.run();
        if (a || P || (M ? $.some((X, oe) => Hn(X, D[oe])) : Hn($, D))) {
          w && w();
          const X = Fr;
          Fr = y;
          try {
            const oe = [
              $,
              // pass undefined as the old value when it's changed for the first time
              D === no ? void 0 : M && D[0] === no ? [] : D,
              N
            ];
            D = $, h ? h(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            Fr = X;
          }
        }
      } else
        y.run();
  };
  return d && d(I), y = new ad(p), y.scheduler = f ? () => f(I, !1) : I, N = (T) => r0(T, !1, y), w = y.onStop = () => {
    const T = Do.get(y);
    if (T) {
      if (h)
        h(T, 4);
      else
        for (const $ of T) $();
      Do.delete(y);
    }
  }, t ? i ? I(!0) : D = y.run() : f ? f(I.bind(null, !0), !0) : y.run(), R.pause = y.pause.bind(y), R.resume = y.resume.bind(y), R.stop = R, R;
}
function rr(e, t = 1 / 0, n) {
  if (t <= 0 || !rt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qt(e))
    rr(e.value, t, n);
  else if (Fe(e))
    for (let i = 0; i < e.length; i++)
      rr(e[i], t, n);
  else if (Zf(e) || _i(e))
    e.forEach((i) => {
      rr(i, t, n);
    });
  else if (ed(e)) {
    for (const i in e)
      rr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && rr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Pa(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    ls(a, t, n);
  }
}
function Un(e, t, n, i) {
  if (je(e)) {
    const a = Pa(e, t, n, i);
    return a && Jf(a) && a.catch((c) => {
      ls(c, t, n);
    }), a;
  }
  if (Fe(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Un(e[c], t, n, i));
    return a;
  }
}
function ls(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || st;
  if (t) {
    let d = t.parent;
    const h = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const y = d.ec;
      if (y) {
        for (let p = 0; p < y.length; p++)
          if (y[p](e, h, v) === !1)
            return;
      }
      d = d.parent;
    }
    if (c) {
      ir(), Pa(c, null, 10, [
        e,
        h,
        v
      ]), ar();
      return;
    }
  }
  a0(e, n, a, i, f);
}
function a0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Jt = [];
let Rn = -1;
const xi = [];
let br = null, hi = 0;
const _d = /* @__PURE__ */ Promise.resolve();
let Lo = null;
function lc(e) {
  const t = Lo || _d;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function o0(e) {
  let t = Rn + 1, n = Jt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Jt[i], c = va(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function cc(e) {
  if (!(e.flags & 1)) {
    const t = va(e), n = Jt[Jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= va(n) ? Jt.push(e) : Jt.splice(o0(t), 0, e), e.flags |= 1, xd();
  }
}
function xd() {
  Lo || (Lo = _d.then(Sd));
}
function s0(e) {
  Fe(e) ? xi.push(...e) : br && e.id === -1 ? br.splice(hi + 1, 0, e) : e.flags & 1 || (xi.push(e), e.flags |= 1), xd();
}
function Uu(e, t, n = Rn + 1) {
  for (; n < Jt.length; n++) {
    const i = Jt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Jt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function wd(e) {
  if (xi.length) {
    const t = [...new Set(xi)].sort(
      (n, i) => va(n) - va(i)
    );
    if (xi.length = 0, br) {
      br.push(...t);
      return;
    }
    for (br = t, hi = 0; hi < br.length; hi++) {
      const n = br[hi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    br = null, hi = 0;
  }
}
const va = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sd(e) {
  try {
    for (Rn = 0; Rn < Jt.length; Rn++) {
      const t = Jt[Rn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rn < Jt.length; Rn++) {
      const t = Jt[Rn];
      t && (t.flags &= -2);
    }
    Rn = -1, Jt.length = 0, wd(), Lo = null, (Jt.length || xi.length) && Sd();
  }
}
let hn = null, Nd = null;
function Ro(e) {
  const t = hn;
  return hn = e, Nd = e && e.type.__scopeId || null, t;
}
function l0(e, t = hn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && nf(-1);
    const c = Ro(t);
    let f;
    try {
      f = e(...a);
    } finally {
      Ro(c), i._d && nf(1);
    }
    return f;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function uc(e, t) {
  if (hn === null)
    return e;
  const n = ds(hn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, f, d, h = st] = t[a];
    c && (je(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && rr(f), i.push({
      dir: c,
      instance: n,
      value: f,
      oldValue: void 0,
      arg: d,
      modifiers: h
    }));
  }
  return e;
}
function Dr(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    c && (d.oldValue = c[f].value);
    let h = d.dir[i];
    h && (ir(), Un(h, n, 8, [
      e.el,
      d,
      e,
      t
    ]), ar());
  }
}
function c0(e, t) {
  if (Wt) {
    let n = Wt.provides;
    const i = Wt.parent && Wt.parent.provides;
    i === n && (n = Wt.provides = Object.create(i)), n[e] = t;
  }
}
function wo(e, t, n = !1) {
  const i = c1();
  if (i || Si) {
    let a = Si ? Si._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && je(t) ? t.call(i && i.proxy) : t;
  }
}
const u0 = /* @__PURE__ */ Symbol.for("v-scx"), f0 = () => wo(u0);
function wi(e, t, n) {
  return Md(e, t, n);
}
function Md(e, t, n = st) {
  const { immediate: i, deep: a, flush: c, once: f } = n, d = Yt({}, n), h = t && i || !t && c !== "post";
  let v;
  if (ya) {
    if (c === "sync") {
      const N = f0();
      v = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!h) {
      const N = () => {
      };
      return N.stop = $n, N.resume = $n, N.pause = $n, N;
    }
  }
  const y = Wt;
  d.call = (N, P, M) => Un(N, y, P, M);
  let p = !1;
  c === "post" ? d.scheduler = (N) => {
    rn(N, y && y.suspense);
  } : c !== "sync" && (p = !0, d.scheduler = (N, P) => {
    P ? N() : cc(N);
  }), d.augmentJob = (N) => {
    t && (N.flags |= 4), p && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const w = i0(e, t, d);
  return ya && (v ? v.push(w) : h && w()), w;
}
function d0(e, t, n) {
  const i = this.proxy, a = wt(e) ? e.includes(".") ? kd(i, e) : () => i[e] : e.bind(i, i);
  let c;
  je(t) ? c = t : (c = t.handler, n = t);
  const f = Ca(this), d = Md(a, c.bind(i), n);
  return f(), d;
}
function kd(e, t) {
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
function Pd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ku(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Oo = /* @__PURE__ */ new WeakMap();
function aa(e, t, n, i, a = !1) {
  if (Fe(e)) {
    e.forEach(
      (M, V) => aa(
        M,
        t && (Fe(t) ? t[V] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (oa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && aa(e, t, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? ds(i.component) : i.el, f = a ? null : c, { i: d, r: h } = e, v = t && t.r, y = d.refs === st ? d.refs = {} : d.refs, p = d.setupState, w = /* @__PURE__ */ Xe(p), N = p === st ? Xf : (M) => Ku(y, M) ? !1 : Ze(w, M), P = (M, V) => !(V && Ku(y, V));
  if (v != null && v !== h) {
    if (Gu(t), wt(v))
      y[v] = null, N(v) && (p[v] = null);
    else if (/* @__PURE__ */ qt(v)) {
      const M = t;
      P(v, M.k) && (v.value = null), M.k && (y[M.k] = null);
    }
  }
  if (je(h))
    Pa(h, d, 12, [f, y]);
  else {
    const M = wt(h), V = /* @__PURE__ */ qt(h);
    if (M || V) {
      const R = () => {
        if (e.f) {
          const D = M ? N(h) ? p[h] : y[h] : P() || !e.k ? h.value : y[e.k];
          if (a)
            Fe(D) && Jl(D, c);
          else if (Fe(D))
            D.includes(c) || D.push(c);
          else if (M)
            y[h] = [c], N(h) && (p[h] = y[h]);
          else {
            const I = [c];
            P(h, e.k) && (h.value = I), e.k && (y[e.k] = I);
          }
        } else M ? (y[h] = f, N(h) && (p[h] = f)) : V && (P(h, e.k) && (h.value = f), e.k && (y[e.k] = f));
      };
      if (f) {
        const D = () => {
          R(), Oo.delete(e);
        };
        D.id = -1, Oo.set(e, D), rn(D, n);
      } else
        Gu(e), R();
    }
  }
}
function Gu(e) {
  const t = Oo.get(e);
  t && (t.flags |= 8, Oo.delete(e));
}
as().requestIdleCallback;
as().cancelIdleCallback;
const oa = (e) => !!e.type.__asyncLoader, Cd = (e) => e.type.__isKeepAlive;
function g0(e, t) {
  Ad(e, "a", t);
}
function v0(e, t) {
  Ad(e, "da", t);
}
function Ad(e, t, n = Wt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (cs(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Cd(a.parent.vnode) && b0(i, t, n, a), a = a.parent;
  }
}
function b0(e, t, n, i) {
  const a = cs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Id(() => {
    Jl(i[t], a);
  }, n);
}
function cs(e, t, n = Wt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
      ir();
      const d = Ca(n), h = Un(t, n, e, f);
      return d(), ar(), h;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const sr = (e) => (t, n = Wt) => {
  (!ya || e === "sp") && cs(e, (...i) => t(...i), n);
}, y0 = sr("bm"), Td = sr("m"), _0 = sr(
  "bu"
), x0 = sr("u"), dc = sr(
  "bum"
), Id = sr("um"), w0 = sr(
  "sp"
), S0 = sr("rtg"), N0 = sr("rtc");
function M0(e, t = Wt) {
  cs("ec", e, t);
}
const k0 = "components", Ed = /* @__PURE__ */ Symbol.for("v-ndc");
function P0(e) {
  return wt(e) ? C0(k0, e, !1) || e : e || Ed;
}
function C0(e, t, n = !0, i = !1) {
  const a = hn || Wt;
  if (a) {
    const c = a.type;
    {
      const d = p1(
        c,
        !1
      );
      if (d && (d === t || d === Qt(t) || d === is(Qt(t))))
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
  return e && (e[t] || e[Qt(t)] || e[is(Qt(t))]);
}
function Gt(e, t, n, i) {
  let a;
  const c = n, f = Fe(e);
  if (f || wt(e)) {
    const d = f && /* @__PURE__ */ zr(e);
    let h = !1, v = !1;
    d && (h = !/* @__PURE__ */ _n(e), v = /* @__PURE__ */ or(e), e = os(e)), a = new Array(e.length);
    for (let y = 0, p = e.length; y < p; y++)
      a[y] = t(
        h ? v ? Mi(Tn(e[y])) : Tn(e[y]) : e[y],
        y,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, c);
  } else if (rt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, h) => t(d, h, void 0, c)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let h = 0, v = d.length; h < v; h++) {
        const y = d[h];
        a[h] = t(e[y], y, h, c);
      }
    }
  else
    a = [];
  return a;
}
const Ll = (e) => e ? eh(e) ? ds(e) : Ll(e.parent) : null, sa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ll(e.parent),
    $root: (e) => Ll(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ld(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lc.bind(e.proxy)),
    $watch: (e) => d0.bind(e)
  })
), cl = (e, t) => e !== st && !e.__isScriptSetup && Ze(e, t), A0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: c, accessCache: f, type: d, appContext: h } = e;
    if (t[0] !== "$") {
      const w = f[t];
      if (w !== void 0)
        switch (w) {
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
        if (cl(i, t))
          return f[t] = 1, i[t];
        if (a !== st && Ze(a, t))
          return f[t] = 2, a[t];
        if (Ze(c, t))
          return f[t] = 3, c[t];
        if (n !== st && Ze(n, t))
          return f[t] = 4, n[t];
        Rl && (f[t] = 0);
      }
    }
    const v = sa[t];
    let y, p;
    if (v)
      return t === "$attrs" && Kt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = d.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== st && Ze(n, t))
      return f[t] = 4, n[t];
    if (
      // global properties
      p = h.config.globalProperties, Ze(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: c } = e;
    return cl(a, t) ? (a[t] = n, !0) : i !== st && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: f }
  }, d) {
    let h;
    return !!(n[d] || e !== st && d[0] !== "$" && Ze(e, d) || cl(t, d) || Ze(c, d) || Ze(i, d) || Ze(sa, d) || Ze(a.config.globalProperties, d) || (h = f.__cssModules) && h[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qu(e) {
  return Fe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Rl = !0;
function T0(e) {
  const t = Ld(e), n = e.proxy, i = e.ctx;
  Rl = !1, t.beforeCreate && Yu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: f,
    watch: d,
    provide: h,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: p,
    mounted: w,
    beforeUpdate: N,
    updated: P,
    activated: M,
    deactivated: V,
    beforeDestroy: R,
    beforeUnmount: D,
    destroyed: I,
    unmounted: T,
    render: $,
    renderTracked: X,
    renderTriggered: oe,
    errorCaptured: ie,
    serverPrefetch: xe,
    // public API
    expose: A,
    inheritAttrs: be,
    // assets
    components: he,
    directives: fe,
    filters: H
  } = t;
  if (v && I0(v, i, null), f)
    for (const ne in f) {
      const K = f[ne];
      je(K) && (i[ne] = K.bind(n));
    }
  if (a) {
    const ne = a.call(n, n);
    rt(ne) && (e.data = /* @__PURE__ */ ss(ne));
  }
  if (Rl = !0, c)
    for (const ne in c) {
      const K = c[ne], le = je(K) ? K.bind(n, n) : je(K.get) ? K.get.bind(n, n) : $n, we = !je(K) && je(K.set) ? K.set.bind(n) : $n, Ee = Pt({
        get: le,
        set: we
      });
      Object.defineProperty(i, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (Re) => Ee.value = Re
      });
    }
  if (d)
    for (const ne in d)
      Dd(d[ne], i, n, ne);
  if (h) {
    const ne = je(h) ? h.call(n) : h;
    Reflect.ownKeys(ne).forEach((K) => {
      c0(K, ne[K]);
    });
  }
  y && Yu(y, e, "c");
  function B(ne, K) {
    Fe(K) ? K.forEach((le) => ne(le.bind(n))) : K && ne(K.bind(n));
  }
  if (B(y0, p), B(Td, w), B(_0, N), B(x0, P), B(g0, M), B(v0, V), B(M0, ie), B(N0, X), B(S0, oe), B(dc, D), B(Id, T), B(w0, xe), Fe(A))
    if (A.length) {
      const ne = e.exposed || (e.exposed = {});
      A.forEach((K) => {
        Object.defineProperty(ne, K, {
          get: () => n[K],
          set: (le) => n[K] = le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === $n && (e.render = $), be != null && (e.inheritAttrs = be), he && (e.components = he), fe && (e.directives = fe), xe && Pd(e);
}
function I0(e, t, n = $n) {
  Fe(e) && (e = Ol(e));
  for (const i in e) {
    const a = e[i];
    let c;
    rt(a) ? "default" in a ? c = wo(
      a.from || i,
      a.default,
      !0
    ) : c = wo(a.from || i) : c = wo(a), /* @__PURE__ */ qt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (f) => c.value = f
    }) : t[i] = c;
  }
}
function Yu(e, t, n) {
  Un(
    Fe(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dd(e, t, n, i) {
  let a = i.includes(".") ? kd(n, i) : () => n[i];
  if (wt(e)) {
    const c = t[e];
    je(c) && wi(a, c);
  } else if (je(e))
    wi(a, e.bind(n));
  else if (rt(e))
    if (Fe(e))
      e.forEach((c) => Dd(c, t, n, i));
    else {
      const c = je(e.handler) ? e.handler.bind(n) : t[e.handler];
      je(c) && wi(a, c, e);
    }
}
function Ld(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: f }
  } = e.appContext, d = c.get(t);
  let h;
  return d ? h = d : !a.length && !n && !i ? h = t : (h = {}, a.length && a.forEach(
    (v) => Fo(h, v, f, !0)
  ), Fo(h, t, f)), rt(t) && c.set(t, h), h;
}
function Fo(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && Fo(e, c, n, !0), a && a.forEach(
    (f) => Fo(e, f, n, !0)
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
  props: Zu,
  emits: Zu,
  // objects
  methods: Zi,
  computed: Zi,
  // lifecycle
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  // assets
  components: Zi,
  directives: Zi,
  // watch
  watch: L0,
  // provide / inject
  provide: Xu,
  inject: D0
};
function Xu(e, t) {
  return t ? e ? function() {
    return Yt(
      je(e) ? e.call(this, this) : e,
      je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function D0(e, t) {
  return Zi(Ol(e), Ol(t));
}
function Ol(e) {
  if (Fe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zi(e, t) {
  return e ? Yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zu(e, t) {
  return e ? Fe(e) && Fe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Yt(
    /* @__PURE__ */ Object.create(null),
    qu(e),
    qu(t ?? {})
  ) : t;
}
function L0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Yt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Zt(e[i], t[i]);
  return n;
}
function Rd() {
  return {
    app: null,
    config: {
      isNativeTag: Xf,
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
function O0(e, t) {
  return function(i, a = null) {
    je(i) || (i = Yt({}, i)), a != null && !rt(a) && (a = null);
    const c = Rd(), f = /* @__PURE__ */ new WeakSet(), d = [];
    let h = !1;
    const v = c.app = {
      _uid: R0++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: g1,
      get config() {
        return c.config;
      },
      set config(y) {
      },
      use(y, ...p) {
        return f.has(y) || (y && je(y.install) ? (f.add(y), y.install(v, ...p)) : je(y) && (f.add(y), y(v, ...p))), v;
      },
      mixin(y) {
        return c.mixins.includes(y) || c.mixins.push(y), v;
      },
      component(y, p) {
        return p ? (c.components[y] = p, v) : c.components[y];
      },
      directive(y, p) {
        return p ? (c.directives[y] = p, v) : c.directives[y];
      },
      mount(y, p, w) {
        if (!h) {
          const N = v._ceVNode || xt(i, a);
          return N.appContext = c, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(N, y, w), h = !0, v._container = y, y.__vue_app__ = v, ds(N.component);
        }
      },
      onUnmount(y) {
        d.push(y);
      },
      unmount() {
        h && (Un(
          d,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, p) {
        return c.provides[y] = p, v;
      },
      runWithContext(y) {
        const p = Si;
        Si = v;
        try {
          return y();
        } finally {
          Si = p;
        }
      }
    };
    return v;
  };
}
let Si = null;
const F0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Wr(t)}Modifiers`];
function V0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || st;
  let a = n;
  const c = t.startsWith("update:"), f = c && F0(i, t.slice(7));
  f && (f.trim && (a = n.map((y) => wt(y) ? y.trim() : y)), f.number && (a = n.map(wg)));
  let d, h = i[d = rl(t)] || // also try camelCase event handler (#2249)
  i[d = rl(Qt(t))];
  !h && c && (h = i[d = rl(Wr(t))]), h && Un(
    h,
    e,
    6,
    a
  );
  const v = i[d + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Un(
      v,
      e,
      6,
      a
    );
  }
}
const H0 = /* @__PURE__ */ new WeakMap();
function Od(e, t, n = !1) {
  const i = n ? H0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let f = {}, d = !1;
  if (!je(e)) {
    const h = (v) => {
      const y = Od(v, t, !0);
      y && (d = !0, Yt(f, y));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !c && !d ? (rt(e) && i.set(e, null), null) : (Fe(c) ? c.forEach((h) => f[h] = null) : Yt(f, c), rt(e) && i.set(e, f), f);
}
function us(e, t) {
  return !e || !ts(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Wr(t)) || Ze(e, t));
}
function Ju(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: f,
    attrs: d,
    emit: h,
    render: v,
    renderCache: y,
    props: p,
    data: w,
    setupState: N,
    ctx: P,
    inheritAttrs: M
  } = e, V = Ro(e);
  let R, D;
  try {
    if (n.shapeFlag & 4) {
      const T = a || i, $ = T;
      R = Fn(
        v.call(
          $,
          T,
          y,
          p,
          N,
          w,
          P
        )
      ), D = d;
    } else {
      const T = t;
      R = Fn(
        T.length > 1 ? T(
          p,
          { attrs: d, slots: f, emit: h }
        ) : T(
          p,
          null
        )
      ), D = t.props ? d : j0(d);
    }
  } catch (T) {
    la.length = 0, ls(T, e, 1), R = xt(Mr);
  }
  let I = R;
  if (D && M !== !1) {
    const T = Object.keys(D), { shapeFlag: $ } = I;
    T.length && $ & 7 && (c && T.some(ns) && (D = z0(
      D,
      c
    )), I = ki(I, D, !1, !0));
  }
  return n.dirs && (I = ki(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && fc(I, n.transition), R = I, Ro(V), R;
}
const j0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ts(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, z0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!ns(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function $0(e, t, n) {
  const { props: i, children: a, component: c } = e, { props: f, children: d, patchFlag: h } = t, v = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return i ? Qu(i, f, v) : !!f;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let p = 0; p < y.length; p++) {
        const w = y[p];
        if (Fd(f, i, w) && !us(v, w))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === f ? !1 : i ? f ? Qu(i, f, v) : !0 : !!f;
  return !1;
}
function Qu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if (Fd(t, e, c) && !us(n, c))
      return !0;
  }
  return !1;
}
function Fd(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && rt(i) && rt(a) ? !ec(i, a) : i !== a;
}
function B0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Vd = {}, Hd = () => Object.create(Vd), jd = (e) => Object.getPrototypeOf(e) === Vd;
function U0(e, t, n, i = !1) {
  const a = {}, c = Hd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zd(e, t, a, c);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Xg(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function K0(e, t, n, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: f }
  } = e, d = /* @__PURE__ */ Xe(a), [h] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const y = e.vnode.dynamicProps;
      for (let p = 0; p < y.length; p++) {
        let w = y[p];
        if (us(e.emitsOptions, w))
          continue;
        const N = t[w];
        if (h)
          if (Ze(c, w))
            N !== c[w] && (c[w] = N, v = !0);
          else {
            const P = Qt(w);
            a[P] = Fl(
              h,
              d,
              P,
              N,
              e,
              !1
            );
          }
        else
          N !== c[w] && (c[w] = N, v = !0);
      }
    }
  } else {
    zd(e, t, a, c) && (v = !0);
    let y;
    for (const p in d)
      (!t || // for camelCase
      !Ze(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Wr(p)) === p || !Ze(t, y))) && (h ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[y] !== void 0) && (a[p] = Fl(
        h,
        d,
        p,
        void 0,
        e,
        !0
      )) : delete a[p]);
    if (c !== d)
      for (const p in c)
        (!t || !Ze(t, p)) && (delete c[p], v = !0);
  }
  v && nr(e.attrs, "set", "");
}
function zd(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let f = !1, d;
  if (t)
    for (let h in t) {
      if (na(h))
        continue;
      const v = t[h];
      let y;
      a && Ze(a, y = Qt(h)) ? !c || !c.includes(y) ? n[y] = v : (d || (d = {}))[y] = v : us(e.emitsOptions, h) || (!(h in i) || v !== i[h]) && (i[h] = v, f = !0);
    }
  if (c) {
    const h = /* @__PURE__ */ Xe(n), v = d || st;
    for (let y = 0; y < c.length; y++) {
      const p = c[y];
      n[p] = Fl(
        a,
        h,
        p,
        v[p],
        e,
        !Ze(v, p)
      );
    }
  }
  return f;
}
function Fl(e, t, n, i, a, c) {
  const f = e[n];
  if (f != null) {
    const d = Ze(f, "default");
    if (d && i === void 0) {
      const h = f.default;
      if (f.type !== Function && !f.skipFactory && je(h)) {
        const { propsDefaults: v } = a;
        if (n in v)
          i = v[n];
        else {
          const y = Ca(a);
          i = v[n] = h.call(
            null,
            t
          ), y();
        }
      } else
        i = h;
      a.ce && a.ce._setProp(n, i);
    }
    f[
      0
      /* shouldCast */
    ] && (c && !d ? i = !1 : f[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Wr(n)) && (i = !0));
  }
  return i;
}
const G0 = /* @__PURE__ */ new WeakMap();
function $d(e, t, n = !1) {
  const i = n ? G0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, f = {}, d = [];
  let h = !1;
  if (!je(e)) {
    const y = (p) => {
      h = !0;
      const [w, N] = $d(p, t, !0);
      Yt(f, w), N && d.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!c && !h)
    return rt(e) && i.set(e, yi), yi;
  if (Fe(c))
    for (let y = 0; y < c.length; y++) {
      const p = Qt(c[y]);
      ef(p) && (f[p] = st);
    }
  else if (c)
    for (const y in c) {
      const p = Qt(y);
      if (ef(p)) {
        const w = c[y], N = f[p] = Fe(w) || je(w) ? { type: w } : Yt({}, w), P = N.type;
        let M = !1, V = !0;
        if (Fe(P))
          for (let R = 0; R < P.length; ++R) {
            const D = P[R], I = je(D) && D.name;
            if (I === "Boolean") {
              M = !0;
              break;
            } else I === "String" && (V = !1);
          }
        else
          M = je(P) && P.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = M, N[
          1
          /* shouldCastTrue */
        ] = V, (M || Ze(N, "default")) && d.push(p);
      }
    }
  const v = [f, d];
  return rt(e) && i.set(e, v), v;
}
function ef(e) {
  return e[0] !== "$" && !na(e);
}
const hc = (e) => e === "_" || e === "_ctx" || e === "$stable", pc = (e) => Fe(e) ? e.map(Fn) : [Fn(e)], W0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = l0((...a) => pc(t(...a)), n);
  return i._c = !1, i;
}, Bd = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (hc(a)) continue;
    const c = e[a];
    if (je(c))
      t[a] = W0(a, c, i);
    else if (c != null) {
      const f = pc(c);
      t[a] = () => f;
    }
  }
}, Ud = (e, t) => {
  const n = pc(t);
  e.slots.default = () => n;
}, Kd = (e, t, n) => {
  for (const i in t)
    (n || !hc(i)) && (e[i] = t[i]);
}, q0 = (e, t, n) => {
  const i = e.slots = Hd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Kd(i, t, n), n && td(i, "_", a, !0)) : Bd(t, i);
  } else t && Ud(e, t);
}, Y0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, f = st;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? c = !1 : Kd(a, t, n) : (c = !t.$stable, Bd(t, a)), f = t;
  } else t && (Ud(e, t), f = { default: 1 });
  if (c)
    for (const d in a)
      !hc(d) && f[d] == null && delete a[d];
}, rn = e1;
function X0(e) {
  return Z0(e);
}
function Z0(e, t) {
  const n = as();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: c,
    createElement: f,
    createText: d,
    createComment: h,
    setText: v,
    setElementText: y,
    parentNode: p,
    nextSibling: w,
    setScopeId: N = $n,
    insertStaticContent: P
  } = e, M = (u, O, Q, de = null, E = null, G = null, Y = void 0, U = null, te = !!O.dynamicChildren) => {
    if (u === O)
      return;
    u && !Bi(u, O) && (de = Ht(u), Re(u, E, G, !0), u = null), O.patchFlag === -2 && (te = !1, O.dynamicChildren = null);
    const { type: J, ref: me, shapeFlag: j } = O;
    switch (J) {
      case fs:
        V(u, O, Q, de);
        break;
      case Mr:
        R(u, O, Q, de);
        break;
      case So:
        u == null && D(O, Q, de, Y);
        break;
      case et:
        he(
          u,
          O,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te
        );
        break;
      default:
        j & 1 ? $(
          u,
          O,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te
        ) : j & 6 ? fe(
          u,
          O,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te
        ) : (j & 64 || j & 128) && J.process(
          u,
          O,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te,
          sn
        );
    }
    me != null && E ? aa(me, u && u.ref, G, O || u, !O) : me == null && u && u.ref != null && aa(u.ref, null, G, u, !0);
  }, V = (u, O, Q, de) => {
    if (u == null)
      i(
        O.el = d(O.children),
        Q,
        de
      );
    else {
      const E = O.el = u.el;
      O.children !== u.children && v(E, O.children);
    }
  }, R = (u, O, Q, de) => {
    u == null ? i(
      O.el = h(O.children || ""),
      Q,
      de
    ) : O.el = u.el;
  }, D = (u, O, Q, de) => {
    [u.el, u.anchor] = P(
      u.children,
      O,
      Q,
      de,
      u.el,
      u.anchor
    );
  }, I = ({ el: u, anchor: O }, Q, de) => {
    let E;
    for (; u && u !== O; )
      E = w(u), i(u, Q, de), u = E;
    i(O, Q, de);
  }, T = ({ el: u, anchor: O }) => {
    let Q;
    for (; u && u !== O; )
      Q = w(u), a(u), u = Q;
    a(O);
  }, $ = (u, O, Q, de, E, G, Y, U, te) => {
    if (O.type === "svg" ? Y = "svg" : O.type === "math" && (Y = "mathml"), u == null)
      X(
        O,
        Q,
        de,
        E,
        G,
        Y,
        U,
        te
      );
    else {
      const J = u.el && u.el._isVueCE ? u.el : null;
      try {
        J && J._beginPatch(), xe(
          u,
          O,
          E,
          G,
          Y,
          U,
          te
        );
      } finally {
        J && J._endPatch();
      }
    }
  }, X = (u, O, Q, de, E, G, Y, U) => {
    let te, J;
    const { props: me, shapeFlag: j, transition: _e, dirs: Ne } = u;
    if (te = u.el = f(
      u.type,
      G,
      me && me.is,
      me
    ), j & 8 ? y(te, u.children) : j & 16 && ie(
      u.children,
      te,
      null,
      de,
      E,
      ul(u, G),
      Y,
      U
    ), Ne && Dr(u, null, de, "created"), oe(te, u, u.scopeId, Y, de), me) {
      for (const Te in me)
        Te !== "value" && !na(Te) && c(te, Te, null, me[Te], G, de);
      "value" in me && c(te, "value", null, me.value, G), (J = me.onVnodeBeforeMount) && In(J, de, u);
    }
    Ne && Dr(u, null, de, "beforeMount");
    const ke = J0(E, _e);
    ke && _e.beforeEnter(te), i(te, O, Q), ((J = me && me.onVnodeMounted) || ke || Ne) && rn(() => {
      try {
        J && In(J, de, u), ke && _e.enter(te), Ne && Dr(u, null, de, "mounted");
      } finally {
      }
    }, E);
  }, oe = (u, O, Q, de, E) => {
    if (Q && N(u, Q), de)
      for (let G = 0; G < de.length; G++)
        N(u, de[G]);
    if (E) {
      let G = E.subTree;
      if (O === G || Yd(G.type) && (G.ssContent === O || G.ssFallback === O)) {
        const Y = E.vnode;
        oe(
          u,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          E.parent
        );
      }
    }
  }, ie = (u, O, Q, de, E, G, Y, U, te = 0) => {
    for (let J = te; J < u.length; J++) {
      const me = u[J] = U ? tr(u[J]) : Fn(u[J]);
      M(
        null,
        me,
        O,
        Q,
        de,
        E,
        G,
        Y,
        U
      );
    }
  }, xe = (u, O, Q, de, E, G, Y) => {
    const U = O.el = u.el;
    let { patchFlag: te, dynamicChildren: J, dirs: me } = O;
    te |= u.patchFlag & 16;
    const j = u.props || st, _e = O.props || st;
    let Ne;
    if (Q && Lr(Q, !1), (Ne = _e.onVnodeBeforeUpdate) && In(Ne, Q, O, u), me && Dr(O, u, Q, "beforeUpdate"), Q && Lr(Q, !0), (j.innerHTML && _e.innerHTML == null || j.textContent && _e.textContent == null) && y(U, ""), J ? A(
      u.dynamicChildren,
      J,
      U,
      Q,
      de,
      ul(O, E),
      G
    ) : Y || K(
      u,
      O,
      U,
      null,
      Q,
      de,
      ul(O, E),
      G,
      !1
    ), te > 0) {
      if (te & 16)
        be(U, j, _e, Q, E);
      else if (te & 2 && j.class !== _e.class && c(U, "class", null, _e.class, E), te & 4 && c(U, "style", j.style, _e.style, E), te & 8) {
        const ke = O.dynamicProps;
        for (let Te = 0; Te < ke.length; Te++) {
          const Ve = ke[Te], at = j[Ve], ft = _e[Ve];
          (ft !== at || Ve === "value") && c(U, Ve, at, ft, E, Q);
        }
      }
      te & 1 && u.children !== O.children && y(U, O.children);
    } else !Y && J == null && be(U, j, _e, Q, E);
    ((Ne = _e.onVnodeUpdated) || me) && rn(() => {
      Ne && In(Ne, Q, O, u), me && Dr(O, u, Q, "updated");
    }, de);
  }, A = (u, O, Q, de, E, G, Y) => {
    for (let U = 0; U < O.length; U++) {
      const te = u[U], J = O[U], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bi(te, J) || // - In the case of a component, it could contain anything.
        te.shapeFlag & 198) ? p(te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      M(
        te,
        J,
        me,
        null,
        de,
        E,
        G,
        Y,
        !0
      );
    }
  }, be = (u, O, Q, de, E) => {
    if (O !== Q) {
      if (O !== st)
        for (const G in O)
          !na(G) && !(G in Q) && c(
            u,
            G,
            O[G],
            null,
            E,
            de
          );
      for (const G in Q) {
        if (na(G)) continue;
        const Y = Q[G], U = O[G];
        Y !== U && G !== "value" && c(u, G, U, Y, E, de);
      }
      "value" in Q && c(u, "value", O.value, Q.value, E);
    }
  }, he = (u, O, Q, de, E, G, Y, U, te) => {
    const J = O.el = u ? u.el : d(""), me = O.anchor = u ? u.anchor : d("");
    let { patchFlag: j, dynamicChildren: _e, slotScopeIds: Ne } = O;
    Ne && (U = U ? U.concat(Ne) : Ne), u == null ? (i(J, Q, de), i(me, Q, de), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      Q,
      me,
      E,
      G,
      Y,
      U,
      te
    )) : j > 0 && j & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === _e.length ? (A(
      u.dynamicChildren,
      _e,
      Q,
      E,
      G,
      Y,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || E && O === E.subTree) && Gd(
      u,
      O,
      !0
      /* shallow */
    )) : K(
      u,
      O,
      Q,
      me,
      E,
      G,
      Y,
      U,
      te
    );
  }, fe = (u, O, Q, de, E, G, Y, U, te) => {
    O.slotScopeIds = U, u == null ? O.shapeFlag & 512 ? E.ctx.activate(
      O,
      Q,
      de,
      Y,
      te
    ) : H(
      O,
      Q,
      de,
      E,
      G,
      Y,
      te
    ) : se(u, O, te);
  }, H = (u, O, Q, de, E, G, Y) => {
    const U = u.component = l1(
      u,
      de,
      E
    );
    if (Cd(u) && (U.ctx.renderer = sn), u1(U, !1, Y), U.asyncDep) {
      if (E && E.registerDep(U, B, Y), !u.el) {
        const te = U.subTree = xt(Mr);
        R(null, te, O, Q), u.placeholder = te.el;
      }
    } else
      B(
        U,
        u,
        O,
        Q,
        E,
        G,
        Y
      );
  }, se = (u, O, Q) => {
    const de = O.component = u.component;
    if ($0(u, O, Q))
      if (de.asyncDep && !de.asyncResolved) {
        ne(de, O, Q);
        return;
      } else
        de.next = O, de.update();
    else
      O.el = u.el, de.vnode = O;
  }, B = (u, O, Q, de, E, G, Y) => {
    const U = () => {
      if (u.isMounted) {
        let { next: j, bu: _e, u: Ne, parent: ke, vnode: Te } = u;
        {
          const qe = Wd(u);
          if (qe) {
            j && (j.el = Te.el, ne(u, j, Y)), qe.asyncDep.then(() => {
              rn(() => {
                u.isUnmounted || J();
              }, E);
            });
            return;
          }
        }
        let Ve = j, at;
        Lr(u, !1), j ? (j.el = Te.el, ne(u, j, Y)) : j = Te, _e && il(_e), (at = j.props && j.props.onVnodeBeforeUpdate) && In(at, ke, j, Te), Lr(u, !0);
        const ft = Ju(u), Ce = u.subTree;
        u.subTree = ft, M(
          Ce,
          ft,
          // parent may have changed if it's in a teleport
          p(Ce.el),
          // anchor may have changed if it's in a fragment
          Ht(Ce),
          u,
          E,
          G
        ), j.el = ft.el, Ve === null && B0(u, ft.el), Ne && rn(Ne, E), (at = j.props && j.props.onVnodeUpdated) && rn(
          () => In(at, ke, j, Te),
          E
        );
      } else {
        let j;
        const { el: _e, props: Ne } = O, { bm: ke, m: Te, parent: Ve, root: at, type: ft } = u, Ce = oa(O);
        Lr(u, !1), ke && il(ke), !Ce && (j = Ne && Ne.onVnodeBeforeMount) && In(j, Ve, O), Lr(u, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            ft,
            u.parent ? u.parent.type : void 0
          );
          const qe = u.subTree = Ju(u);
          M(
            null,
            qe,
            Q,
            de,
            u,
            E,
            G
          ), O.el = qe.el;
        }
        if (Te && rn(Te, E), !Ce && (j = Ne && Ne.onVnodeMounted)) {
          const qe = O;
          rn(
            () => In(j, Ve, qe),
            E
          );
        }
        (O.shapeFlag & 256 || Ve && oa(Ve.vnode) && Ve.vnode.shapeFlag & 256) && u.a && rn(u.a, E), u.isMounted = !0, O = Q = de = null;
      }
    };
    u.scope.on();
    const te = u.effect = new ad(U);
    u.scope.off();
    const J = u.update = te.run.bind(te), me = u.job = te.runIfDirty.bind(te);
    me.i = u, me.id = u.uid, te.scheduler = () => cc(me), Lr(u, !0), J();
  }, ne = (u, O, Q) => {
    O.component = u;
    const de = u.vnode.props;
    u.vnode = O, u.next = null, K0(u, O.props, de, Q), Y0(u, O.children, Q), ir(), Uu(u), ar();
  }, K = (u, O, Q, de, E, G, Y, U, te = !1) => {
    const J = u && u.children, me = u ? u.shapeFlag : 0, j = O.children, { patchFlag: _e, shapeFlag: Ne } = O;
    if (_e > 0) {
      if (_e & 128) {
        we(
          J,
          j,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te
        );
        return;
      } else if (_e & 256) {
        le(
          J,
          j,
          Q,
          de,
          E,
          G,
          Y,
          U,
          te
        );
        return;
      }
    }
    Ne & 8 ? (me & 16 && it(J, E, G), j !== J && y(Q, j)) : me & 16 ? Ne & 16 ? we(
      J,
      j,
      Q,
      de,
      E,
      G,
      Y,
      U,
      te
    ) : it(J, E, G, !0) : (me & 8 && y(Q, ""), Ne & 16 && ie(
      j,
      Q,
      de,
      E,
      G,
      Y,
      U,
      te
    ));
  }, le = (u, O, Q, de, E, G, Y, U, te) => {
    u = u || yi, O = O || yi;
    const J = u.length, me = O.length, j = Math.min(J, me);
    let _e;
    for (_e = 0; _e < j; _e++) {
      const Ne = O[_e] = te ? tr(O[_e]) : Fn(O[_e]);
      M(
        u[_e],
        Ne,
        Q,
        null,
        E,
        G,
        Y,
        U,
        te
      );
    }
    J > me ? it(
      u,
      E,
      G,
      !0,
      !1,
      j
    ) : ie(
      O,
      Q,
      de,
      E,
      G,
      Y,
      U,
      te,
      j
    );
  }, we = (u, O, Q, de, E, G, Y, U, te) => {
    let J = 0;
    const me = O.length;
    let j = u.length - 1, _e = me - 1;
    for (; J <= j && J <= _e; ) {
      const Ne = u[J], ke = O[J] = te ? tr(O[J]) : Fn(O[J]);
      if (Bi(Ne, ke))
        M(
          Ne,
          ke,
          Q,
          null,
          E,
          G,
          Y,
          U,
          te
        );
      else
        break;
      J++;
    }
    for (; J <= j && J <= _e; ) {
      const Ne = u[j], ke = O[_e] = te ? tr(O[_e]) : Fn(O[_e]);
      if (Bi(Ne, ke))
        M(
          Ne,
          ke,
          Q,
          null,
          E,
          G,
          Y,
          U,
          te
        );
      else
        break;
      j--, _e--;
    }
    if (J > j) {
      if (J <= _e) {
        const Ne = _e + 1, ke = Ne < me ? O[Ne].el : de;
        for (; J <= _e; )
          M(
            null,
            O[J] = te ? tr(O[J]) : Fn(O[J]),
            Q,
            ke,
            E,
            G,
            Y,
            U,
            te
          ), J++;
      }
    } else if (J > _e)
      for (; J <= j; )
        Re(u[J], E, G, !0), J++;
    else {
      const Ne = J, ke = J, Te = /* @__PURE__ */ new Map();
      for (J = ke; J <= _e; J++) {
        const jt = O[J] = te ? tr(O[J]) : Fn(O[J]);
        jt.key != null && Te.set(jt.key, J);
      }
      let Ve, at = 0;
      const ft = _e - ke + 1;
      let Ce = !1, qe = 0;
      const ln = new Array(ft);
      for (J = 0; J < ft; J++) ln[J] = 0;
      for (J = Ne; J <= j; J++) {
        const jt = u[J];
        if (at >= ft) {
          Re(jt, E, G, !0);
          continue;
        }
        let cn;
        if (jt.key != null)
          cn = Te.get(jt.key);
        else
          for (Ve = ke; Ve <= _e; Ve++)
            if (ln[Ve - ke] === 0 && Bi(jt, O[Ve])) {
              cn = Ve;
              break;
            }
        cn === void 0 ? Re(jt, E, G, !0) : (ln[cn - ke] = J + 1, cn >= qe ? qe = cn : Ce = !0, M(
          jt,
          O[cn],
          Q,
          null,
          E,
          G,
          Y,
          U,
          te
        ), at++);
      }
      const vt = Ce ? Q0(ln) : yi;
      for (Ve = vt.length - 1, J = ft - 1; J >= 0; J--) {
        const jt = ke + J, cn = O[jt], Aa = O[jt + 1], Ei = jt + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Aa.el || qd(Aa)
        ) : de;
        ln[J] === 0 ? M(
          null,
          cn,
          Q,
          Ei,
          E,
          G,
          Y,
          U,
          te
        ) : Ce && (Ve < 0 || J !== vt[Ve] ? Ee(cn, Q, Ei, 2) : Ve--);
      }
    }
  }, Ee = (u, O, Q, de, E = null) => {
    const { el: G, type: Y, transition: U, children: te, shapeFlag: J } = u;
    if (J & 6) {
      Ee(u.component.subTree, O, Q, de);
      return;
    }
    if (J & 128) {
      u.suspense.move(O, Q, de);
      return;
    }
    if (J & 64) {
      Y.move(u, O, Q, sn);
      return;
    }
    if (Y === et) {
      i(G, O, Q);
      for (let j = 0; j < te.length; j++)
        Ee(te[j], O, Q, de);
      i(u.anchor, O, Q);
      return;
    }
    if (Y === So) {
      I(u, O, Q);
      return;
    }
    if (de !== 2 && J & 1 && U)
      if (de === 0)
        U.beforeEnter(G), i(G, O, Q), rn(() => U.enter(G), E);
      else {
        const { leave: j, delayLeave: _e, afterLeave: Ne } = U, ke = () => {
          u.ctx.isUnmounted ? a(G) : i(G, O, Q);
        }, Te = () => {
          G._isLeaving && G[m0](
            !0
            /* cancelled */
          ), j(G, () => {
            ke(), Ne && Ne();
          });
        };
        _e ? _e(G, ke, Te) : Te();
      }
    else
      i(G, O, Q);
  }, Re = (u, O, Q, de = !1, E = !1) => {
    const {
      type: G,
      props: Y,
      ref: U,
      children: te,
      dynamicChildren: J,
      shapeFlag: me,
      patchFlag: j,
      dirs: _e,
      cacheIndex: Ne,
      memo: ke
    } = u;
    if (j === -2 && (E = !1), U != null && (ir(), aa(U, null, Q, u, !0), ar()), Ne != null && (O.renderCache[Ne] = void 0), me & 256) {
      O.ctx.deactivate(u);
      return;
    }
    const Te = me & 1 && _e, Ve = !oa(u);
    let at;
    if (Ve && (at = Y && Y.onVnodeBeforeUnmount) && In(at, O, u), me & 6)
      Qe(u.component, Q, de);
    else {
      if (me & 128) {
        u.suspense.unmount(Q, de);
        return;
      }
      Te && Dr(u, null, O, "beforeUnmount"), me & 64 ? u.type.remove(
        u,
        O,
        Q,
        sn,
        de
      ) : J && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !J.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== et || j > 0 && j & 64) ? it(
        J,
        O,
        Q,
        !1,
        !0
      ) : (G === et && j & 384 || !E && me & 16) && it(te, O, Q), de && Ke(u);
    }
    const ft = ke != null && Ne == null;
    (Ve && (at = Y && Y.onVnodeUnmounted) || Te || ft) && rn(() => {
      at && In(at, O, u), Te && Dr(u, null, O, "unmounted"), ft && (u.el = null);
    }, Q);
  }, Ke = (u) => {
    const { type: O, el: Q, anchor: de, transition: E } = u;
    if (O === et) {
      Je(Q, de);
      return;
    }
    if (O === So) {
      T(u);
      return;
    }
    const G = () => {
      a(Q), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: Y, delayLeave: U } = E, te = () => Y(Q, G);
      U ? U(u.el, G, te) : te();
    } else
      G();
  }, Je = (u, O) => {
    let Q;
    for (; u !== O; )
      Q = w(u), a(u), u = Q;
    a(O);
  }, Qe = (u, O, Q) => {
    const { bum: de, scope: E, job: G, subTree: Y, um: U, m: te, a: J } = u;
    tf(te), tf(J), de && il(de), E.stop(), G && (G.flags |= 8, Re(Y, u, O, Q)), U && rn(U, O), rn(() => {
      u.isUnmounted = !0;
    }, O);
  }, it = (u, O, Q, de = !1, E = !1, G = 0) => {
    for (let Y = G; Y < u.length; Y++)
      Re(u[Y], O, Q, de, E);
  }, Ht = (u) => {
    if (u.shapeFlag & 6)
      return Ht(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const O = w(u.anchor || u.el), Q = O && O[h0];
    return Q ? w(Q) : O;
  };
  let Ct = !1;
  const mn = (u, O, Q) => {
    let de;
    u == null ? O._vnode && (Re(O._vnode, null, null, !0), de = O._vnode.component) : M(
      O._vnode || null,
      u,
      O,
      null,
      null,
      null,
      Q
    ), O._vnode = u, Ct || (Ct = !0, Uu(de), wd(), Ct = !1);
  }, sn = {
    p: M,
    um: Re,
    m: Ee,
    r: Ke,
    mt: H,
    mc: ie,
    pc: K,
    pbc: A,
    n: Ht,
    o: e
  };
  return {
    render: mn,
    hydrate: void 0,
    createApp: O0(mn)
  };
}
function ul({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function J0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gd(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Fe(i) && Fe(a))
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let d = a[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[c] = tr(a[c]), d.el = f.el), !n && d.patchFlag !== -2 && Gd(f, d)), d.type === fs && (d.patchFlag === -1 && (d = a[c] = tr(d)), d.el = f.el), d.type === Mr && !d.el && (d.el = f.el);
    }
}
function Q0(e) {
  const t = e.slice(), n = [0];
  let i, a, c, f, d;
  const h = e.length;
  for (i = 0; i < h; i++) {
    const v = e[i];
    if (v !== 0) {
      if (a = n[n.length - 1], e[a] < v) {
        t[i] = a, n.push(i);
        continue;
      }
      for (c = 0, f = n.length - 1; c < f; )
        d = c + f >> 1, e[n[d]] < v ? c = d + 1 : f = d;
      v < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, f = n[c - 1]; c-- > 0; )
    n[c] = f, f = t[f];
  return n;
}
function Wd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wd(t);
}
function tf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function qd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? qd(t.subTree) : null;
}
const Yd = (e) => e.__isSuspense;
function e1(e, t) {
  t && t.pendingBranch ? Fe(e) ? t.effects.push(...e) : t.effects.push(e) : s0(e);
}
const et = /* @__PURE__ */ Symbol.for("v-fgt"), fs = /* @__PURE__ */ Symbol.for("v-txt"), Mr = /* @__PURE__ */ Symbol.for("v-cmt"), So = /* @__PURE__ */ Symbol.for("v-stc"), la = [];
let pn = null;
function Pe(e = !1) {
  la.push(pn = e ? null : []);
}
function t1() {
  la.pop(), pn = la[la.length - 1] || null;
}
let ba = 1;
function nf(e, t = !1) {
  ba += e, e < 0 && pn && t && (pn.hasOnce = !0);
}
function Xd(e) {
  return e.dynamicChildren = ba > 0 ? pn || yi : null, t1(), ba > 0 && pn && pn.push(e), e;
}
function Ie(e, t, n, i, a, c) {
  return Xd(
    ue(
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
function Ii(e, t, n, i, a) {
  return Xd(
    xt(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Zd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jd = ({ key: e }) => e ?? null, No = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? wt(e) || /* @__PURE__ */ qt(e) || je(e) ? { i: hn, r: e, k: t, f: !!n } : e : null);
function ue(e, t = null, n = null, i = 0, a = null, c = e === et ? 0 : 1, f = !1, d = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jd(t),
    ref: t && No(t),
    scopeId: Nd,
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
    ctx: hn
  };
  return d ? (mc(h, n), c & 128 && e.normalize(h)) : n && (h.shapeFlag |= wt(n) ? 8 : 16), ba > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && pn.push(h), h;
}
const xt = n1;
function n1(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === Ed) && (e = Mr), Zd(e)) {
    const d = ki(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mc(d, n), ba > 0 && !c && pn && (d.shapeFlag & 6 ? pn[pn.indexOf(e)] = d : pn.push(d)), d.patchFlag = -2, d;
  }
  if (m1(e) && (e = e.__vccOpts), t) {
    t = r1(t);
    let { class: d, style: h } = t;
    d && !wt(d) && (t.class = gt(d)), rt(h) && (/* @__PURE__ */ sc(h) && !Fe(h) && (h = Yt({}, h)), t.style = Nt(h));
  }
  const f = wt(e) ? 1 : Yd(e) ? 128 : p0(e) ? 64 : rt(e) ? 4 : je(e) ? 2 : 0;
  return ue(
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
function r1(e) {
  return e ? /* @__PURE__ */ sc(e) || jd(e) ? Yt({}, e) : e : null;
}
function ki(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: f, children: d, transition: h } = e, v = t ? Qd(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Jd(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Fe(c) ? c.concat(No(t)) : [c, No(t)] : No(t)
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
    patchFlag: t && e.type !== et ? f === -1 ? 16 : f | 16 : f,
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
    ssContent: e.ssContent && ki(e.ssContent),
    ssFallback: e.ssFallback && ki(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && i && fc(
    y,
    h.clone(y)
  ), y;
}
function i1(e = " ", t = 0) {
  return xt(fs, null, e, t);
}
function a1(e, t) {
  const n = xt(So, null, e);
  return n.staticCount = t, n;
}
function on(e = "", t = !1) {
  return t ? (Pe(), Ii(Mr, null, e)) : xt(Mr, null, e);
}
function Fn(e) {
  return e == null || typeof e == "boolean" ? xt(Mr) : Fe(e) ? xt(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zd(e) ? tr(e) : xt(fs, null, String(e));
}
function tr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ki(e);
}
function mc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Fe(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), mc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !jd(t) ? t._ctx = hn : a === 3 && hn && (hn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else je(t) ? (t = { default: t, _ctx: hn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [i1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = gt([t.class, i.class]));
      else if (a === "style")
        t.style = Nt([t.style, i.style]);
      else if (ts(a)) {
        const c = t[a], f = i[a];
        f && c !== f && !(Fe(c) && c.includes(f)) ? t[a] = c ? [].concat(c, f) : f : f == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ns(a) && (t[a] = f);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function In(e, t, n, i = null) {
  Un(e, t, 7, [
    n,
    i
  ]);
}
const o1 = Rd();
let s1 = 0;
function l1(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || o1, c = {
    uid: s1++,
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
    propsOptions: $d(i, a),
    emitsOptions: Od(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: st,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: st,
    data: st,
    props: st,
    attrs: st,
    slots: st,
    refs: st,
    setupState: st,
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = V0.bind(null, c), e.ce && e.ce(c), c;
}
let Wt = null;
const c1 = () => Wt || hn;
let Vo, Vl;
{
  const e = as(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
    };
  };
  Vo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Wt = n
  ), Vl = t(
    "__VUE_SSR_SETTERS__",
    (n) => ya = n
  );
}
const Ca = (e) => {
  const t = Wt;
  return Vo(e), e.scope.on(), () => {
    e.scope.off(), Vo(t);
  };
}, rf = () => {
  Wt && Wt.scope.off(), Vo(null);
};
function eh(e) {
  return e.vnode.shapeFlag & 4;
}
let ya = !1;
function u1(e, t = !1, n = !1) {
  t && Vl(t);
  const { props: i, children: a } = e.vnode, c = eh(e);
  U0(e, i, c, t), q0(e, a, n || t);
  const f = c ? f1(e, t) : void 0;
  return t && Vl(!1), f;
}
function f1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, A0);
  const { setup: i } = n;
  if (i) {
    ir();
    const a = e.setupContext = i.length > 1 ? h1(e) : null, c = Ca(e), f = Pa(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Jf(f);
    if (ar(), c(), (d || e.sp) && !oa(e) && Pd(e), d) {
      if (f.then(rf, rf), t)
        return f.then((h) => {
          af(e, h);
        }).catch((h) => {
          ls(h, e, 0);
        });
      e.asyncDep = f;
    } else
      af(e, f);
  } else
    th(e);
}
function af(e, t, n) {
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : rt(t) && (e.setupState = yd(t)), th(e);
}
function th(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || $n);
  {
    const a = Ca(e);
    ir();
    try {
      T0(e);
    } finally {
      ar(), a();
    }
  }
}
const d1 = {
  get(e, t) {
    return Kt(e, "get", ""), e[t];
  }
};
function h1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, d1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ds(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yd(Zg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in sa)
        return sa[n](e);
    },
    has(t, n) {
      return n in t || n in sa;
    }
  })) : e.proxy;
}
function p1(e, t = !0) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function m1(e) {
  return je(e) && "__vccOpts" in e;
}
const Pt = (e, t) => /* @__PURE__ */ n0(e, t, ya), g1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hl;
const of = typeof window < "u" && window.trustedTypes;
if (of)
  try {
    Hl = /* @__PURE__ */ of.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nh = Hl ? (e) => Hl.createHTML(e) : (e) => e, v1 = "http://www.w3.org/2000/svg", b1 = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, sf = Qn && /* @__PURE__ */ Qn.createElement("template"), y1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Qn.createElementNS(v1, e) : t === "mathml" ? Qn.createElementNS(b1, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Qn.createTextNode(e),
  createComment: (e) => Qn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qn.querySelector(e),
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
      sf.innerHTML = nh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = sf.content;
      if (i === "svg" || i === "mathml") {
        const h = d.firstChild;
        for (; h.firstChild; )
          d.appendChild(h.firstChild);
        d.removeChild(h);
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
}, _1 = /* @__PURE__ */ Symbol("_vtc");
function x1(e, t, n) {
  const i = e[_1];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ho = /* @__PURE__ */ Symbol("_vod"), rh = /* @__PURE__ */ Symbol("_vsh"), gc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ho] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ui(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ui(e, !0), i.enter(e)) : i.leave(e, () => {
      Ui(e, !1);
    }) : Ui(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ui(e, t);
  }
};
function Ui(e, t) {
  e.style.display = t ? e[Ho] : "none", e[rh] = !t;
}
const w1 = /* @__PURE__ */ Symbol(""), S1 = /(?:^|;)\s*display\s*:/;
function N1(e, t, n) {
  const i = e.style, a = wt(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (wt(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          n[d] == null && Mo(i, d, "");
        }
      else
        for (const f in t)
          n[f] == null && Mo(i, f, "");
    for (const f in n)
      f === "display" && (c = !0), Mo(i, f, n[f]);
  } else if (a) {
    if (t !== n) {
      const f = i[w1];
      f && (n += ";" + f), i.cssText = n, c = S1.test(n);
    }
  } else t && e.removeAttribute("style");
  Ho in e && (e[Ho] = c ? i.display : "", e[rh] && (i.display = "none"));
}
const lf = /\s*!important$/;
function Mo(e, t, n) {
  if (Fe(n))
    n.forEach((i) => Mo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = M1(e, t);
    lf.test(n) ? e.setProperty(
      Wr(i),
      n.replace(lf, ""),
      "important"
    ) : e[i] = n;
  }
}
const cf = ["Webkit", "Moz", "ms"], fl = {};
function M1(e, t) {
  const n = fl[t];
  if (n)
    return n;
  let i = Qt(t);
  if (i !== "filter" && i in e)
    return fl[t] = i;
  i = is(i);
  for (let a = 0; a < cf.length; a++) {
    const c = cf[a] + i;
    if (c in e)
      return fl[t] = c;
  }
  return t;
}
const uf = "http://www.w3.org/1999/xlink";
function ff(e, t, n, i, a, c = Cg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(uf, t.slice(6, t.length)) : e.setAttributeNS(uf, t, n) : n == null || c && !nd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : Bn(n) ? String(n) : n
  );
}
function df(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nh(n) : n);
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = nd(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function k1(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function P1(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const hf = /* @__PURE__ */ Symbol("_vei");
function C1(e, t, n, i, a = null) {
  const c = e[hf] || (e[hf] = {}), f = c[t];
  if (i && f)
    f.value = i;
  else {
    const [d, h] = A1(t);
    if (i) {
      const v = c[t] = E1(
        i,
        a
      );
      k1(e, d, v, h);
    } else f && (P1(e, d, f, h), c[t] = void 0);
  }
}
const pf = /(?:Once|Passive|Capture)$/;
function A1(e) {
  let t;
  if (pf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(pf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wr(e.slice(2)), t];
}
let dl = 0;
const T1 = /* @__PURE__ */ Promise.resolve(), I1 = () => dl || (T1.then(() => dl = 0), dl = Date.now());
function E1(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Un(
      D1(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = I1(), n;
}
function D1(e, t) {
  if (Fe(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, L1 = (e, t, n, i, a, c) => {
  const f = a === "svg";
  t === "class" ? x1(e, i, f) : t === "style" ? N1(e, n, i) : ts(t) ? ns(t) || C1(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : R1(e, t, i, f)) ? (df(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, i, f, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (O1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !wt(i))) ? df(e, Qt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ff(e, t, i, f));
};
function R1(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && je(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return mf(t) && wt(n) ? !1 : t in e;
}
function O1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Qt(t);
  return Array.isArray(n) ? n.some((a) => Qt(a) === i) : Object.keys(n).some((a) => Qt(a) === i);
}
const F1 = ["ctrl", "shift", "alt", "meta"], V1 = {
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
  exact: (e, t) => F1.some((n) => e[`${n}Key`] && !t.includes(n))
}, ih = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let f = 0; f < t.length; f++) {
      const d = V1[t[f]];
      if (d && d(a, t)) return;
    }
    return e(a, ...c);
  }));
}, H1 = /* @__PURE__ */ Yt({ patchProp: L1 }, y1);
let gf;
function j1() {
  return gf || (gf = X0(H1));
}
const z1 = ((...e) => {
  const t = j1().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = B1(i);
    if (!a) return;
    const c = t._component;
    !je(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = n(a, !1, $1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
});
function $1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function B1(e) {
  return wt(e) ? document.querySelector(e) : e;
}
const mt = Math.PI / 180, ah = Math.PI * 2, U1 = 2048;
function ot(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function kr(e, t, n) {
  return { x: e, y: t, z: n };
}
function jo(e, t) {
  return kr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function vi(e, t) {
  return kr(e.x * t, e.y * t, e.z * t);
}
function ko(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function vf(e, t) {
  return kr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ji(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return kr(e.x / t, e.y / t, e.z / t);
}
function K1(e, t) {
  const n = Number(e || 0) * mt, i = Number(t || 0) * mt, a = Math.cos(i);
  return kr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Po(e, t, n = 0) {
  const i = K1(e, t);
  let a = kr(0, 1, 0);
  Math.abs(ko(i, a)) > 0.999 && (a = kr(0, 0, 1));
  let c = Ji(vf(a, i)), f = Ji(vf(i, c));
  const d = Number(n || 0) * mt, h = Math.cos(d), v = Math.sin(d), y = jo(vi(c, h), vi(f, v)), p = jo(vi(c, -v), vi(f, h));
  return c = Ji(y), f = Ji(p), { fwd: i, right: c, up: f };
}
function G1(e, t) {
  const n = (Number(e || 0) - 0.5) * ah, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return kr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function bf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), f = Math.max(512, U1), d = Math.min(1, f / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function yf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function hl(e, t, n) {
  const i = yf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = yf(e, e.FRAGMENT_SHADER, n);
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
const pl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, W1 = `#version 300 es
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
}`, q1 = `#version 300 es
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
}`, Y1 = `#version 300 es
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
function Ki(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(ot(i, 1, 179) * mt * 0.5) * (n / Math.max(t, 1))) / mt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: ot(i, 1, 179),
    vFovDeg: ot(a, 0.1, 179)
  };
}
function X1(e) {
  const t = Po(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(ot(Number(e.hFovDeg), 0.1, 179) * 0.5 * mt),
    tanY: Math.tan(ot(Number(e.vFovDeg), 0.1, 179) * 0.5 * mt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ot(Number(e.opacity ?? 1), 0, 1)
  };
}
function Z1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, c = null, f = null, d = null, h = null, v = null, y = null, p = null, w = null, N = !1, P = bf(1, 1, 1), M = null, V = null, R = null, D = null, I = null;
  const T = /* @__PURE__ */ new Map();
  let $ = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, X = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, oe = {
    paint: !1,
    mask: !1
  };
  function ie(E = null, G = null) {
    const Y = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Y), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), Y;
  }
  function xe() {
    if (N) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = hl(n, pl, W1), a = hl(n, pl, q1), c = hl(n, pl, Y1), M = {
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
      }, R = {
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
      ]), n.STATIC_DRAW), d = ie(n.REPEAT, n.CLAMP_TO_EDGE), h = ie(n.REPEAT, n.CLAMP_TO_EDGE), v = ie(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function A() {
    var E;
    if (n) {
      try {
        f && n.deleteBuffer(f), d && n.deleteTexture(d), h && n.deleteTexture(h), v && n.deleteTexture(v), T.forEach((G) => {
          we(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, f = null, d = null, h = null, v = null, T.clear(), y = null, p = null, w = null, X = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, oe = {
        paint: !1,
        mask: !1
      }, D = null, I = null, N = !1;
    }
  }
  function be(E, G, Y = 1) {
    P = bf(E, G, Y), (t.width !== P.width || t.height !== P.height) && (t.width = P.width, t.height = P.height);
  }
  function he(E) {
    E === "background" ? y = null : E === "paint" ? p = null : w = null, X[E] && (X[E].width = 0, X[E].height = 0);
  }
  function fe() {
    oe.paint = !1, oe.mask = !1;
  }
  function H(E) {
    fe(), E === "paint" ? oe.paint = !0 : E === "mask" && (oe.mask = !0);
  }
  function se(E, G, Y = [], U = { width: 0, height: 0 }, te = !1) {
    if (!n || !E || !G) return !1;
    const J = Number(G.width || G.videoWidth || G.naturalWidth || 0), me = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(J > 1) || !(me > 1)) return !1;
    const j = Array.isArray(Y) ? Y.filter((_e) => _e && _e.w > 0 && _e.h > 0) : [];
    if (!j.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, te ? 1 : 0), U.width !== J || U.height !== me)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), U.width = J, U.height = me, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (D || (D = document.createElement("canvas"), I = D.getContext("2d")), !I)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const _e of j) {
      const Ne = Math.max(0, Math.floor(Number(_e.x || 0))), ke = Math.max(0, Math.floor(Number(_e.y || 0))), Te = Math.min(J - Ne, Math.ceil(Number(_e.w || 0))), Ve = Math.min(me - ke, Math.ceil(Number(_e.h || 0)));
      if (!(Te <= 0 || Ve <= 0)) {
        if (D.width !== Te || D.height !== Ve) {
          if (D.width = Te, D.height = Ve, I = D.getContext("2d"), !I)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          I.clearRect(0, 0, Te, Ve);
        I.drawImage(G, Ne, ke, Te, Ve, 0, 0, Te, Ve), n.texSubImage2D(n.TEXTURE_2D, 0, Ne, ke, n.RGBA, n.UNSIGNED_BYTE, D);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function B(E, G, Y, U, te = null, J = !1) {
    if (!xe()) return !1;
    if (!Y)
      return he(E), !1;
    const me = String(U ?? ""), j = E === "background" ? y : E === "paint" ? p : w, _e = X[E], Ne = Number(Y.width || Y.videoWidth || Y.naturalWidth || 0), ke = Number(Y.height || Y.videoHeight || Y.naturalHeight || 0), Te = _e.width !== Ne || _e.height !== ke;
    if (j === me && !Te && !(Array.isArray(te) && te.length)) return !0;
    if (!(Ne > 0) || !(ke > 0))
      return he(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, J ? 1 : 0), !(Array.isArray(te) && te.length ? se(G, Y, te, _e, J) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he(E), !1;
      _e.width = Ne, _e.height = ke;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? y = me : E === "paint" ? p = me : w = me, !0;
  }
  function ne(E, G) {
    return B("background", d, E, G, null, !0);
  }
  function K(E, G, Y = null) {
    return B("paint", h, E, G, Y, !0);
  }
  function le(E, G, Y = null) {
    return B("mask", v, E, G, Y, !0);
  }
  function we(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function Ee(E = /* @__PURE__ */ new Set()) {
    T.forEach((G, Y) => {
      E.has(Y) || (we(G), T.delete(Y));
    });
  }
  function Re(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const G = String(E.assetId), Y = String(E.revision ?? ""), U = E.source, te = Number(U.width || U.naturalWidth || U.videoWidth || 0), J = Number(U.height || U.naturalHeight || U.videoHeight || 0);
    if (te <= 0 || J <= 0) return null;
    let me = T.get(G);
    if (me || (me = {
      texture: ie(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(G, me)), me.revision !== Y || me.width !== te || me.height !== J) {
      if (n.bindTexture(n.TEXTURE_2D, me.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), me.revision = Y, me.width = te, me.height = J;
    }
    return me.texture;
  }
  function Ke(E = []) {
    if (!xe()) return !1;
    const G = /* @__PURE__ */ new Set();
    return E.forEach((Y) => {
      !(Y != null && Y.assetId) || !(Y != null && Y.source) || (G.add(String(Y.assetId)), Re(Y));
    }), Ee(G), !0;
  }
  function Je() {
    return xe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Qe(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, f), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function it(E, G = {}) {
    if (!y) return null;
    n.disable(n.BLEND), Qe(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(M.background, 0), n.uniform2f(M.viewport, Math.max(1, P.width), Math.max(1, P.height)), n.uniform1i(M.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const Y = Ki(E, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(M.yaw, Number(Y.yawDeg || 0) * mt), n.uniform1f(M.pitch, Number(Y.pitchDeg || 0) * mt), n.uniform1f(M.roll, Number(Y.rollDeg || 0) * mt), n.uniform1f(M.hFov, ot(Number(Y.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(M.vFov, ot(Number(Y.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(M.opacity, ot(Number(G.backgroundOpacity ?? 1), 0, 1));
    const U = Number((E == null ? void 0 : E.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(M.coverage, U), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Ht(E, G = {}) {
    const Y = oe.paint && p != null, U = oe.mask && w != null;
    if (!Y && !U) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Qe(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, v), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const te = Ki(E, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(te.yawDeg || 0) * mt), n.uniform1f(V.pitch, Number(te.pitchDeg || 0) * mt), n.uniform1f(V.roll, Number(te.rollDeg || 0) * mt), n.uniform1f(V.hFov, ot(Number(te.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(V.vFov, ot(Number(te.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(V.paintOpacity, ot(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, ot(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, Y ? 1 : 0), n.uniform1i(V.hasMask, U ? 1 : 0), n.uniform1i(V.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Ct(E, G) {
    var _e, Ne, ke, Te, Ve, at, ft;
    const Y = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!Y.length) {
      fe(), Ee(/* @__PURE__ */ new Set());
      return;
    }
    const U = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, te = Ki(G, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, J = Po(te.yawDeg, te.pitchDeg, te.rollDeg), me = Y.slice().sort((Ce, qe) => Number((Ce == null ? void 0 : Ce.zIndex) || 0) - Number((qe == null ? void 0 : qe.zIndex) || 0)), j = /* @__PURE__ */ new Set();
    fe();
    for (const Ce of me)
      if (!(!Ce || Ce.visible === !1)) {
        if (Ce.type === "sticker") {
          const qe = String(((_e = Ce == null ? void 0 : Ce.params) == null ? void 0 : _e.assetId) || (Ce == null ? void 0 : Ce.id) || "");
          if (!qe) continue;
          j.add(qe);
          const ln = Re({
            assetId: qe,
            source: Ce.source,
            revision: Ce.revision
          });
          if (!ln) continue;
          const vt = X1({
            yawDeg: ((Ne = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ne.yawDeg) || 0,
            pitchDeg: ((ke = Ce == null ? void 0 : Ce.transform) == null ? void 0 : ke.pitchDeg) || 0,
            rollDeg: ((Te = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Te.rollDeg) || 0,
            hFovDeg: ((Ve = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ve.hFovDeg) || 30,
            vFovDeg: ((at = Ce == null ? void 0 : Ce.transform) == null ? void 0 : at.vFovDeg) || 30,
            crop: ((ft = Ce == null ? void 0 : Ce.params) == null ? void 0 : ft.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ce == null ? void 0 : Ce.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Qe(c), n.uniform1i(R.texture, 0), n.uniform1i(R.mode, U), n.uniform3f(R.viewRight, J.right.x, J.right.y, J.right.z), n.uniform3f(R.viewUp, J.up.x, J.up.y, J.up.z), n.uniform3f(R.viewFwd, J.fwd.x, J.fwd.y, J.fwd.z), n.uniform1f(R.viewHfov, ot(Number(te.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(R.viewVfov, ot(Number(te.vFovDeg || 60), 0.1, 179) * mt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, ln), n.uniform3f(R.stickerRight, vt.right.x, vt.right.y, vt.right.z), n.uniform3f(R.stickerUp, vt.up.x, vt.up.y, vt.up.z), n.uniform3f(R.stickerFwd, vt.fwd.x, vt.fwd.y, vt.fwd.z), n.uniform1f(R.stickerTanX, Math.max(1e-6, vt.tanX)), n.uniform1f(R.stickerTanY, Math.max(1e-6, vt.tanY)), n.uniform4f(
            R.crop,
            ot(Number(vt.crop.x0 ?? 0), 0, 1),
            ot(Number(vt.crop.y0 ?? 0), 0, 1),
            ot(Number(vt.crop.x1 ?? 1), 0, 1),
            ot(Number(vt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(R.opacity, vt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ce.type === "paint" || Ce.type === "raster") {
          if (!K(Ce.source, Ce.revision ?? "")) continue;
          H("paint"), Ht(G, {
            paintOpacity: Number(Ce.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ce.type === "mask") {
          if (!le(Ce.source, Ce.revision ?? "")) continue;
          H("mask"), Ht(G, {
            paintOpacity: 0,
            maskOpacity: Number(Ce.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Ee(j), fe();
  }
  function mn(E) {
    return !Je() || !y ? null : (it({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function sn(E) {
    return !Je() || !y ? null : (it({ mode: "unwrap" }, E), t);
  }
  function Kn(E) {
    return !Je() || !y ? null : (it({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function u(E = {}) {
    if (!xe() || (be(E.width, E.height, E.dpr || 1), !Je())) return null;
    const G = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), Y = Object.prototype.hasOwnProperty.call(E, "paintSource"), U = Object.prototype.hasOwnProperty.call(E, "maskSource"), te = Object.prototype.hasOwnProperty.call(E, "textures"), J = Object.prototype.hasOwnProperty.call(E, "scene");
    return G && ne(E.backgroundSource, E.backgroundRevision ?? ""), Y && K(E.paintSource, E.paintRevision ?? ""), U && le(E.maskSource, E.maskRevision ?? ""), te && (Ke(E.textures || []), $.textures = E.textures || []), J && ($.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && ($.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && ($.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && ($.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && ($.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), y && it(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? $.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || $.coverageDeg || 360) === 180 ? 180 : 360
    }), Ct(
      $.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function O(E = {}) {
    return xe() ? !!u({
      ...E,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(E.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function Q(E, G, Y) {
    const U = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || P.sourceWidth || P.width || 1)), te = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || P.sourceHeight || P.height || 1)), J = Number(G), me = Number(Y);
    if (!Number.isFinite(J) || !Number.isFinite(me)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (J / U % 1 + 1) % 1, v: ot(me / te, 0, 1) };
    const j = Ki(E, U, te);
    if (!j) return null;
    const _e = Po(j.yawDeg, j.pitchDeg, j.rollDeg), Ne = (J - U * 0.5) / (U * 0.5) * Math.tan(ot(j.hFovDeg, 1, 179) * mt * 0.5), ke = (te * 0.5 - me) / (te * 0.5) * Math.tan(ot(j.vFovDeg, 0.1, 179) * mt * 0.5), Te = Ji(jo(jo(vi(_e.right, Ne), vi(_e.up, ke)), _e.fwd));
    return {
      u: (Math.atan2(Te.x, Te.z) / ah + 0.5 + 1) % 1,
      v: ot(0.5 - Math.asin(ot(Te.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function de(E, G, Y) {
    const U = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || P.sourceWidth || P.width || 1)), te = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || P.sourceHeight || P.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(G || 0) % 1 + 1) % 1 * U,
        y: ot(Number(Y || 0), 0, 1) * te,
        visible: !0
      };
    const J = Ki(E, U, te);
    if (!J)
      return { x: U * 0.5, y: te * 0.5, visible: !1 };
    const me = Po(J.yawDeg, J.pitchDeg, J.rollDeg), j = G1(G, Y), _e = ko(j, me.right), Ne = ko(j, me.up), ke = ko(j, me.fwd);
    if (ke <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Te = U * 0.5 + _e / ke * (U * 0.5 / Math.tan(ot(J.hFovDeg, 1, 179) * mt * 0.5)), Ve = te * 0.5 - Ne / ke * (te * 0.5 / Math.tan(ot(J.vFovDeg, 0.1, 179) * mt * 0.5));
    return { x: Te, y: Ve, visible: Te >= 0 && Te <= U && Ve >= 0 && Ve <= te };
  }
  return {
    init: xe,
    dispose: A,
    setViewport: be,
    setBackgroundErp: ne,
    setPaintErp: K,
    setMaskErp: le,
    renderPanorama: mn,
    renderUnwrap: sn,
    renderCutout: Kn,
    renderScene: u,
    syncState: O,
    screenToErpUv: Q,
    erpUvToScreen: de,
    getCanvas() {
      return t;
    },
    isSupported() {
      return xe();
    },
    getViewport() {
      return { ...P };
    }
  };
}
function _f(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function J1() {
  const e = /* @__PURE__ */ new Map();
  function t(f) {
    return f != null ? String(f) : "default";
  }
  function n(f, d, h) {
    const v = t(f);
    let y = e.get(v) || null;
    if (!y) {
      const N = document.createElement("canvas"), P = N.getContext("2d");
      if (!P) return null;
      y = {
        id: v,
        canvas: N,
        ctx: P,
        width: 0,
        height: 0
      }, e.set(v, y);
    }
    const p = _f(d), w = _f(h);
    return y.width !== p && (y.canvas.width = p, y.width = p), y.height !== w && (y.canvas.height = w, y.height = w), y;
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
const Q1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), ev = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function oh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function tv(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function nv(e = {}) {
  const t = ev.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? oh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function rv(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Q1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? oh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: tv(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function iv(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => rv(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), f = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== f ? c - f : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Pi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: nv((e == null ? void 0 : e.background) || {}),
    objectPass: iv((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function av(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function vc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? av(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function ov(e, t, n = {}) {
  return e ? vc({
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
function sv(e, t, n = {}) {
  return e ? vc({
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
function lv(e, t, n = {}) {
  return e ? vc({
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
function sh(e = {}) {
  const t = [], n = ov(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = sv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, f) => {
    const d = lv(
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
    const d = Number((c == null ? void 0 : c.zIndex) || 0), h = Number((f == null ? void 0 : f.zIndex) || 0);
    return d !== h ? d - h : String((c == null ? void 0 : c.id) || "").localeCompare(String((f == null ? void 0 : f.id) || ""));
  });
}
function bc(e, t) {
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
function hs(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], f = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Pi({
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
      objects: bc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Qi(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = bc(t, n), a = sh({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Pi({
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
function cv(e = {}) {
  var c, f, d, h, v, y, p, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const N = Pi(e), P = Array.isArray((c = N.objectPass) == null ? void 0 : c.objects) ? N.objectPass.objects : [], M = {
      stickers: P.filter((I) => I.type === "sticker").map((I) => {
        var T, $, X, oe, ie, xe, A, be, he, fe, H, se, B;
        return {
          id: I.id,
          assetId: String(((T = I == null ? void 0 : I.params) == null ? void 0 : T.assetId) || (($ = I == null ? void 0 : I.params) == null ? void 0 : $.asset_id) || (I == null ? void 0 : I.id) || ""),
          yawDeg: Number(((X = I == null ? void 0 : I.transform) == null ? void 0 : X.yawDeg) ?? ((oe = I == null ? void 0 : I.params) == null ? void 0 : oe.yawDeg) ?? 0),
          pitchDeg: Number(((ie = I == null ? void 0 : I.transform) == null ? void 0 : ie.pitchDeg) ?? ((xe = I == null ? void 0 : I.params) == null ? void 0 : xe.pitchDeg) ?? 0),
          rollDeg: Number(((A = I == null ? void 0 : I.transform) == null ? void 0 : A.rollDeg) ?? ((be = I == null ? void 0 : I.params) == null ? void 0 : be.rollDeg) ?? 0),
          hFovDeg: Number(((he = I == null ? void 0 : I.transform) == null ? void 0 : he.hFovDeg) ?? ((fe = I == null ? void 0 : I.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number(((H = I == null ? void 0 : I.transform) == null ? void 0 : H.vFovDeg) ?? ((se = I == null ? void 0 : I.params) == null ? void 0 : se.vFovDeg) ?? 30),
          crop: ((B = I == null ? void 0 : I.params) == null ? void 0 : B.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((I == null ? void 0 : I.opacity) ?? 1),
          visible: (I == null ? void 0 : I.visible) !== !1,
          zIndex: Number((I == null ? void 0 : I.zIndex) ?? 0)
        };
      }),
      selectedId: ((f = N.objectPass) == null ? void 0 : f.selectedId) ?? null,
      hoveredId: ((d = N.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, V = P.filter((I) => I.type === "sticker").map((I) => {
      var T, $;
      return {
        assetId: String(((T = I == null ? void 0 : I.params) == null ? void 0 : T.assetId) || (($ = I == null ? void 0 : I.params) == null ? void 0 : $.asset_id) || (I == null ? void 0 : I.id) || ""),
        source: I.source || null,
        revision: String((I == null ? void 0 : I.revision) || "")
      };
    }).filter((I) => I.assetId && I.source), R = P.find((I) => I.type === "paint") || null, D = P.find((I) => I.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = N.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((v = N.background) == null ? void 0 : v.revision) || ""),
      coverageDeg: Number(((y = N.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (R == null ? void 0 : R.source) || null,
      paintRevision: String((R == null ? void 0 : R.revision) || ""),
      maskSource: (D == null ? void 0 : D.source) || null,
      maskRevision: String((D == null ? void 0 : D.revision) || ""),
      textures: V,
      scene: M,
      objectPass: N.objectPass,
      backgroundOpacity: Number(((p = N.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Pi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...bc(t, n),
        ...sh({
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
function uv(e) {
  let t = null;
  function n(c = {}) {
    const f = cv(c);
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
function Ur(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => Z1(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => J1(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => uv(V), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, f = n();
  let d = null;
  const h = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const R = { ...V }, D = a.syncState(R);
        return D && (d = R, D);
      }
      return d = { ...V }, !0;
    }
  });
  function v(V = {}) {
    return h.sync(V);
  }
  function y(V = {}, R = {}) {
    return d ? a.renderScene({
      ...d,
      view: V,
      width: R.width,
      height: R.height,
      dpr: R.dpr,
      backgroundOpacity: R.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: R.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function p(V, R, D = {}, I = {}) {
    if (!R) return !1;
    const T = y(D, {
      ...I,
      width: R.w,
      height: R.h
    });
    return T ? V ? (V.canvas && T === V.canvas || V.drawImage(T, R.x, R.y, R.w, R.h), !0) : !!c && T === c : !1;
  }
  function w(V, R = {}, D = {}) {
    const I = Number(D.width || 0), T = Number(D.height || 0);
    if (!(I > 0) || !(T > 0)) return null;
    const $ = f.ensureTarget(V, I, T);
    if (!$) return null;
    const X = y(R, {
      ...D,
      width: I,
      height: T
    });
    return X ? ($.ctx.clearRect(0, 0, $.canvas.width, $.canvas.height), $.ctx.drawImage(X, 0, 0, $.canvas.width, $.canvas.height), $.canvas) : null;
  }
  function N(V) {
    f.clearTarget(V);
  }
  function P() {
    var V;
    f.dispose(), (V = a.dispose) == null || V.call(a), d = null;
  }
  function M() {
    d = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: v,
    renderView: y,
    renderToContext: p,
    renderToTarget: w,
    clearTarget: N,
    snapshotState: h.snapshot,
    clearState: M,
    dispose: P
  };
}
function pi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function fv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function xf(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const c = n.getImageData(0, 0, i, a).data;
  let f = i, d = a, h = -1, v = -1;
  for (let p = 0; p < a; p += 1)
    for (let w = 0; w < i; w += 1)
      c[(p * i + w) * 4 + 3] <= t || (w < f && (f = w), p < d && (d = p), w > h && (h = w), p > v && (v = p));
  return h < f || v < d ? null : {
    minX: f,
    minY: d,
    maxX: h,
    maxY: v,
    width: h - f + 1,
    height: v - d + 1,
    aspect: Number(((h - f + 1) / Math.max(1, v - d + 1)).toFixed(4))
  };
}
function yc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function er(e, t, n) {
  if (!e) return pi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function ht(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let ml = null, gl = null, wf = null, Sf = null, _t = null, Gi = null, Xt = null, mr = null;
function dv() {
  if (gl) return gl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), gl = n, n;
}
function vl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  ml = er(ml, n, i);
  const a = ml;
  ht(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Sf !== a.ctx && (wf = a.ctx.createPattern(dv(), "repeat"), Sf = a.ctx), a.ctx.fillStyle = wf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function hv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function pv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function mv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function gv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const pt = /* @__PURE__ */ new Map(), _c = 128;
function vv(e, t, n, i, a, c) {
  const f = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), h = `${f}:${d.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (pt.has(h)) {
    const D = pt.get(h);
    return pt.delete(h), pt.set(h, D), D;
  }
  pt.size >= _c && pt.delete(pt.keys().next().value);
  const v = f * 2 + 2, y = f + 1, p = yc(v, v), w = p.getContext("2d"), N = d * f, P = f + 1, M = `rgba(${n},${i},${a},${c})`, V = `rgba(${n},${i},${a},0)`, R = w.createRadialGradient(y, y, N, y, y, P);
  return R.addColorStop(0, M), R.addColorStop(1, V), w.fillStyle = R, w.fillRect(0, 0, v, v), pt.set(h, p), p;
}
function bv(e, t, n, i, a, c, f) {
  const { r: d, g: h, b: v, a: y } = i, p = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, a), P = Math.max(0, Math.min(0.99, c)), M = Math.max(0, Math.min(1, f ?? 0)), V = `chisel:${p}:${w}:${n.toFixed(2)}:${d}:${h}:${v}:${y.toFixed(3)}:${N.toFixed(2)}:${P.toFixed(2)}:${M.toFixed(2)}`;
  if (pt.has(V)) {
    const ie = pt.get(V);
    return pt.delete(V), pt.set(V, ie), ie;
  }
  pt.size >= _c && pt.delete(pt.keys().next().value);
  const R = yc(p, w), D = R.getContext("2d"), I = D.createImageData(p, w), T = I.data, $ = Math.max(0, e - t), X = Math.max(0, Math.min(1, n)), oe = 1 + N;
  for (let ie = 0; ie < w; ie++)
    for (let xe = 0; xe < p; xe++) {
      const A = xe + 0.5 - e, be = ie + 0.5 - t, he = Math.max(Math.abs(A) - $, 0), H = Math.hypot(he, be) / t;
      if (H >= 1) continue;
      const se = H <= X ? 1 : Math.max(0, (1 - H) / Math.max(1e-4, 1 - X)), B = 1 - H, ne = 1 + N * (1 - B) * (1 - B), K = 1 - P * B * B, le = ne * K / oe;
      let we = 1;
      if (M > 0) {
        const Ke = Math.floor((be + t) / 1.5), Je = Math.floor((A + e) / 8), Qe = $r(Ni(Ke * 41 + 500, Je * 19 + 300));
        we = 1 - M * 0.42 * Qe;
      }
      const Ee = Math.round(255 * Math.min(1, y * se * le * we));
      if (Ee <= 0) continue;
      const Re = (ie * p + xe) * 4;
      T[Re] = d, T[Re + 1] = h, T[Re + 2] = v, T[Re + 3] = Ee;
    }
  return D.putImageData(I, 0, 0), pt.set(V, R), R;
}
function Ni(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function $r(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function yv(e, t, n, i, a, c, f) {
  const d = e + 0.5 - n, h = t + 0.5 - i, v = Math.max(0, n - i), y = Math.max(Math.abs(d) - v, 0), p = Math.hypot(y, h) / i;
  if (p >= 1) return 0;
  const w = $r(Ni(e * 17 + 3, t * 13 + 7)), N = p + c * 0.22 * (w - 0.5);
  if (N >= 1) return 0;
  const P = N <= a ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - a)), M = _v(e, t, d, h, n, i), V = c * 0.55;
  if (M < V) return 0;
  const D = 0.45 + 0.55 * ((M - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, f * P * D));
}
function _v(e, t, n, i, a, c) {
  const f = Math.floor((n + a) / 3), d = Math.floor((i + c) / 2), h = $r(Ni(f * 13 + 700, d * 17 + 400)), v = Math.floor((n + a) / 1.5), y = Math.floor((i + c) / 1.5), p = $r(Ni(v * 23 + 800, y * 29 + 500)), w = $r(Ni(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + p * 0.3 + w * 0.15;
}
function xv(e, t, n, i, a) {
  const { r: c, g: f, b: d, a: h } = i, v = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, Math.min(1, a)), w = `crayon:${v}:${y}:${n.toFixed(2)}:${c}:${f}:${d}:${h.toFixed(3)}:${p.toFixed(2)}`;
  if (pt.has(w)) {
    const D = pt.get(w);
    return pt.delete(w), pt.set(w, D), D;
  }
  pt.size >= _c && pt.delete(pt.keys().next().value);
  const N = yc(v, y), P = N.getContext("2d"), M = P.createImageData(v, y), V = M.data, R = Math.max(0, Math.min(1, n));
  for (let D = 0; D < y; D++)
    for (let I = 0; I < v; I++) {
      const T = yv(I, D, e, t, R, p, h);
      if (T <= 0) continue;
      const $ = (D * v + I) * 4;
      V[$] = c, V[$ + 1] = f, V[$ + 2] = d, V[$ + 3] = T;
    }
  return P.putImageData(M, 0, 0), pt.set(w, N), N;
}
function lh(e, t, n) {
  var M, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = mv(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), f = wv(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((M = t == null ? void 0 : t.angle) == null ? void 0 : M.value) ?? 0), v = gv(t, a), y = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", w = t == null ? void 0 : t.scatter, N = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let P;
  if (i === "chisel") {
    const R = a * d, D = a, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    P = bv(R, D, c, f, I, T, $);
  } else if (i === "crayon") {
    const R = a * d, D = a, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    P = xv(R, D, c, f, I);
  } else
    P = vv(a, c, f.r, f.g, f.b, f.a);
  return { ctx: e, stampTex: P, radiusPx: a, spacingPx: v, desc: n, aspect: d, angle: h, stampKind: i, scatter: N, latitudeCorrection: p };
}
function wv(e) {
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
function Sv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Nf(e, t, n, i, a) {
  const c = e.angle, f = e.desc.width;
  function d(v, y) {
    c === 0 ? e.ctx.drawImage(e.stampTex, v - a, y - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(v, y), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const h = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - h < 0 && d(t + f, n), t + h > f && d(t - f, n);
}
function xc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: v, count: y } = e.scatter, p = v * e.radiusPx * a, w = Ni(t, n);
    for (let N = 0; N < y; N++) {
      const P = $r(w + N * 2) * Math.PI * 2, M = Math.sqrt($r(w + N * 2 + 1)) * p, V = t + Math.cos(P) * M, R = n + Math.sin(P) * M, D = Math.max(0.5, e.radiusPx * a * 0.48), I = (0.5 - R / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, $ = D * e.aspect * T;
      Nf(e, V, R, D, $);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), f = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(f)) : 1, h = c * e.aspect * d;
  Nf(e, t, n, c, h);
}
function Mf(e, t, n) {
  const i = pv(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, f = lh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let w = 0; w < i.length; w++) {
    let N = Number(i[w].u || 0) * a;
    const P = Number(i[w].v || 0) * c;
    w > 0 && Math.abs(N - d[w - 1].x) > a * 0.5 && (N += N < d[w - 1].x ? a : -a), d.push({ x: N, y: P });
  }
  if (xc(f, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let h = d[0], v = d[0], y = d[0], p = 0;
  for (let w = 1; w < d.length; w++) {
    const N = d[w], P = { x: (v.x + N.x) * 0.5, y: (v.y + N.y) * 0.5 };
    w === 1 ? p = _a(f, y.x, y.y, P.x, P.y, p) : p = zo(f, h, y, P, N, p), h = v, v = N, y = P;
  }
  d.length === 2 ? _a(f, y.x, y.y, v.x, v.y, p) : zo(f, h, y, v, v, p), e.restore();
}
function Co(e, t, n) {
  var p;
  const i = Array.isArray((p = t == null ? void 0 : t.geometry) == null ? void 0 : p.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, f = Sv(t), d = [];
  let h = 1 / 0, v = -1 / 0;
  for (let w = 0; w < i.length; w++) {
    const N = hv(i[w]);
    let P = Number(N.x || 0) * a;
    w > 0 && Math.abs(P - d[w - 1].x) > a * 0.5 && (P += P < d[w - 1].x ? a : -a), d.push({ x: P, y: Number(N.y || 0) * c }), P < h && (h = P), P > v && (v = P);
  }
  function y(w) {
    e.beginPath(), e.moveTo(d[0].x + w, d[0].y);
    for (let N = 1; N < d.length; N++) e.lineTo(d[N].x + w, d[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = f, y(0), h < 0 && y(a), v > a && y(-a), e.restore();
}
function ro(e, t, n) {
  var f;
  if (String(((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.geometryKind) || "") === "lasso_fill") {
    Co(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? Mf(e, t, n) : (Gi = er(Gi, n.width, n.height), ht(Gi), Mf(Gi.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(Gi.canvas, 0, 0), e.restore());
}
function Rr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function _a(e, t, n, i, a, c) {
  const f = i - t, d = a - n, h = Math.hypot(f, d);
  if (h < 1e-9) return c;
  let v = e.spacingPx - c;
  for (; v <= h; ) {
    const y = v / h;
    xc(e, t + f * y, n + d * y, 1), v += e.spacingPx;
  }
  return h - v + e.spacingPx;
}
function zo(e, t, n, i, a, c) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, y = 0, p = d, w = p + h, N = w + v, P = w - p, M = 16;
  let V = c, R = n.x, D = n.y;
  for (let I = 1; I <= M; I++) {
    const T = p + P * I / M, $ = ((p - T) * t.x + (T - y) * n.x) / (p - y), X = ((p - T) * t.y + (T - y) * n.y) / (p - y), oe = ((w - T) * n.x + (T - p) * i.x) / (w - p), ie = ((w - T) * n.y + (T - p) * i.y) / (w - p), xe = ((N - T) * i.x + (T - w) * a.x) / (N - w), A = ((N - T) * i.y + (T - w) * a.y) / (N - w), be = ((w - T) * $ + (T - y) * oe) / (w - y), he = ((w - T) * X + (T - y) * ie) / (w - y), fe = ((N - T) * oe + (T - p) * xe) / (N - p), H = ((N - T) * ie + (T - p) * A) / (N - p), se = ((w - T) * be + (T - p) * fe) / (w - p), B = ((w - T) * he + (T - p) * H) / (w - p);
    V = _a(e, R, D, se, B, V), R = se, D = B;
  }
  return V;
}
function Nv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, f = c.width, d = n * c.height, h = e.activeStroke;
  let v = t * f;
  if (h && Math.abs(v - h.prev.x) > f * 0.5 && (v += v < h.prev.x ? f : -f), !h) {
    const N = lh(a, i, c), P = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), M = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", R = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", xc(N, v, d, 1), e.activeStroke = {
      pprev: { x: v, y: d },
      prev: { x: v, y: d },
      lastMidX: v,
      lastMidY: d,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: P,
      velocityWidthFactor: M,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: R,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (h.prev.x + v) * 0.5, p = (h.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: h.stampTex,
    radiusPx: h.radiusPx,
    spacingPx: h.spacingPx,
    desc: c,
    aspect: h.aspect,
    angle: h.angle,
    stampKind: h.stampKind,
    scatter: h.scatter,
    latitudeCorrection: h.latitudeCorrection
  };
  h.pointCount === 1 ? h.distSinceStamp = _a(w, h.lastMidX, h.lastMidY, y, p, h.distSinceStamp) : h.distSinceStamp = zo(
    w,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: y, y: p },
    { x: v, y: d },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: v, y: d }, h.lastMidX = y, h.lastMidY = p, h.pointCount++, e.displayDirty = !0;
}
function jl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = pi(t, n), f = {
    descriptor: i,
    committedMask: pi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: pi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = pi(t, n);
  let v = null, y = "", p = null;
  function w(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: pi(t, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(A) {
    let be = a.get(A);
    return be || (be = w(A), a.set(A, be)), be;
  }
  function P(A) {
    return y === "mask" ? f : v ? N(v) : d;
  }
  function M(A) {
    var B;
    const be = !p || p.length !== A.length || A.some((ne, K) => ne !== p[K]), he = y === "paint" && ((B = v ? a.get(v) : d) == null ? void 0 : B.activeStroke) || null;
    let fe = f.displayDirty || d.displayDirty || be;
    for (const ne of A) {
      const K = a.get(ne);
      if (K != null && K.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (he && (fe = !0), !fe) return;
    f.displayDirty = !1, d.displayDirty = !1;
    for (const ne of A) {
      const K = a.get(ne);
      K && (K.displayDirty = !1);
    }
    p = [...A];
    const H = h.ctx;
    ht(h);
    const se = !!(he != null && he.isEraser);
    for (const ne of A) {
      const K = a.get(ne);
      if (!K) continue;
      const we = v === K.actionGroupId && y === "paint" ? K.activeStroke : null;
      if (se)
        _t = er(_t, t, n), ht(_t), _t.ctx.drawImage(K.committedPaint.canvas, 0, 0), Rr(_t.ctx, c.canvas), H.drawImage(_t.canvas, 0, 0);
      else if (H.drawImage(K.committedPaint.canvas, 0, 0), we) {
        const Ee = K.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
        H.save(), H.globalAlpha = Ee, H.drawImage(c.canvas, 0, 0), H.restore();
      }
    }
  }
  function V(A) {
    var he, fe, H, se, B;
    for (const ne of a.values())
      ht(ne.committedPaint), ht(ne.currentStroke), ne.activeStroke = null, ne.displayDirty = !0;
    ht(f.committedMask), ht(f.currentStroke), f.activeStroke = null, f.displayDirty = !0, d.displayDirty = !0, p = null;
    const be = [
      ...Array.isArray((fe = (he = A == null ? void 0 : A.painting) == null ? void 0 : he.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((se = (H = A == null ? void 0 : A.painting) == null ? void 0 : H.mask) == null ? void 0 : se.strokes) ? A.painting.mask.strokes : []
    ];
    for (const ne of be) {
      if (((B = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : B.kind) !== "ERP_GLOBAL") continue;
      const K = String((ne == null ? void 0 : ne.layerKind) || "paint"), we = String((ne == null ? void 0 : ne.toolKind) || "pen") === "eraser";
      if (K === "mask") {
        const Ee = f.descriptor;
        we ? (_t = er(_t, Ee.width, Ee.height), ht(_t), ro(_t.ctx, ne, Ee), Rr(f.committedMask.ctx, _t.canvas)) : ro(f.committedMask.ctx, ne, Ee);
        continue;
      }
      if (we) {
        _t = er(_t, i.width, i.height), ht(_t), ro(_t.ctx, ne, i);
        for (const Ee of a.values())
          Rr(Ee.committedPaint.ctx, _t.canvas), Ee.displayDirty = !0;
      } else {
        const Ee = String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), Re = N(Ee), Ke = Re.descriptor;
        ro(Re.committedPaint.ctx, ne, Ke), Re.displayDirty = !0;
      }
    }
    M([...a.keys()]);
  }
  function R(A, be) {
    y = String((A == null ? void 0 : A.layerKind) || "");
    const he = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (y === "mask")
      v = null, ht(f.currentStroke), f.activeStroke = null, f.displayDirty = !0;
    else {
      const fe = he ? d : N(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      v = he ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), ht(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function D(A, be) {
    var K;
    const he = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", H = he === "mask" ? f : fe ? d : N(String((A == null ? void 0 : A.actionGroupId) || v || "__default__")), se = H.activeStroke, B = H.descriptor;
    if (se && se.pointCount > 1) {
      const le = H.currentStroke.ctx;
      le.globalCompositeOperation = "source-over";
      const we = {
        ctx: le,
        stampTex: se.stampTex,
        radiusPx: se.radiusPx,
        spacingPx: se.spacingPx,
        desc: B,
        aspect: se.aspect,
        angle: se.angle,
        stampKind: se.stampKind,
        scatter: se.scatter,
        latitudeCorrection: se.latitudeCorrection
      };
      se.pointCount === 2 ? _a(we, se.lastMidX, se.lastMidY, se.prev.x, se.prev.y, se.distSinceStamp) : zo(we, se.pprev, { x: se.lastMidX, y: se.lastMidY }, se.prev, se.prev, se.distSinceStamp);
    }
    H.lassoPreviewActive && (ht(H.currentStroke), Co(H.currentStroke.ctx, A, B), H.lassoPreviewActive = !1);
    const ne = he === "mask" ? f.committedMask : H.committedPaint;
    if (fe && he === "paint")
      for (const le of a.values())
        Rr(le.committedPaint.ctx, H.currentStroke.canvas), le.displayDirty = !0;
    else if (fe)
      Rr(ne.ctx, H.currentStroke.canvas);
    else {
      const le = Math.max(0, Math.min(1, (se == null ? void 0 : se.strokeOpacity) ?? 1));
      ne.ctx.save(), ne.ctx.globalAlpha = le, ne.ctx.drawImage(H.currentStroke.canvas, 0, 0), ne.ctx.restore();
    }
    fv() && (String((A == null ? void 0 : A.toolKind) || ""), String((B == null ? void 0 : B.kind) || ""), Number((B == null ? void 0 : B.width) || 0), Number((B == null ? void 0 : B.height) || 0), String(((K = A == null ? void 0 : A.targetSpace) == null ? void 0 : K.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), xf(H.currentStroke.canvas), xf(ne.canvas), void 0), ht(H.currentStroke), H.activeStroke = null, H.displayDirty = !0, v = null, y = "", M([...a.keys()]);
  }
  function I(A) {
    if (y === "mask")
      ht(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y === "paint" && !v)
      ht(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (v) {
      const be = a.get(v);
      be && (ht(be.currentStroke), be.activeStroke = null, be.lassoPreviewActive = !1, be.displayDirty = !0);
    }
    v = null, y = "", M([...a.keys()]);
  }
  function T(A, be) {
    var fe;
    if (y = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        ht(f.currentStroke), Co(f.currentStroke.ctx, A, f.descriptor), f.lassoPreviewActive = !0, f.displayDirty = !0;
      else {
        const H = String((A == null ? void 0 : A.toolKind) || "") === "eraser", se = H ? d : N(String((A == null ? void 0 : A.actionGroupId) || v || "__default__"));
        v = H ? "" : String((A == null ? void 0 : A.actionGroupId) || v || "__default__"), ht(se.currentStroke), Co(se.currentStroke.ctx, A, se.descriptor), se.lassoPreviewActive = !0, se.displayDirty = !0;
      }
      M([...a.keys()]);
    }
  }
  function $(A) {
    return M(A ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: f.committedMask,
      descriptor: i
    };
  }
  function X(A) {
    return a.get(String(A)) ?? null;
  }
  function oe() {
    return [...a.keys()];
  }
  function ie(A) {
    var B;
    const be = a.get(String(A));
    if (!be) return null;
    const he = y === "paint" && v === be.actionGroupId, fe = y === "paint" && ((B = v ? a.get(v) : d) == null ? void 0 : B.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return Xt = er(Xt, t, n), ht(Xt), Xt.ctx.drawImage(be.committedPaint.canvas, 0, 0), Rr(Xt.ctx, c.canvas), Xt.canvas;
    const H = he ? be.activeStroke : null;
    if (!H) return be.committedPaint.canvas;
    Xt = er(Xt, t, n), ht(Xt), Xt.ctx.drawImage(be.committedPaint.canvas, 0, 0);
    const se = be.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, H.strokeOpacity ?? 1));
    return Xt.ctx.save(), Xt.ctx.globalAlpha = se, Xt.ctx.drawImage(c.canvas, 0, 0), Xt.ctx.restore(), Xt.canvas;
  }
  function xe() {
    return mr = er(mr, t, n), ht(mr), vl(mr.ctx, f.committedMask.canvas), y === "mask" && f.activeStroke && (f.activeStroke.isEraser ? (_t = er(_t, t, n), ht(_t), _t.ctx.drawImage(f.committedMask.canvas, 0, 0), Rr(_t.ctx, c.canvas), ht(mr), vl(mr.ctx, _t.canvas)) : vl(mr.ctx, c.canvas)), mr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: R,
    appendStrokePoint: Nv,
    updateActiveStroke: T,
    commitActiveStroke: D,
    cancelActiveStroke: I,
    getErpTarget: $,
    ensureTarget: P,
    getGroupTarget: X,
    getGroupDisplayCanvas: ie,
    getMaskDisplayCanvas: xe,
    getAllGroupIds: oe
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function bl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Vt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Mv(e, t) {
  let n = Vt(t) - Vt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const zl = Math.PI / 180, $l = 0.12, ch = 3, wc = 35, Sc = 140, bi = 100, kv = 0.4, Pv = 0.6, uh = 5.5, fh = 20, Bl = 0.8;
function Cv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = q(Number(e || bi), 1, 179) * zl;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / zl;
}
function Av(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function ps(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: bi })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), f = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(R, D = null) {
    d && d(R, D);
  }
  function y(R, D, I = null, T = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(R || 0), h.drag.lastY = Number(D || 0), h.drag.lastTs = Number(T || performance.now()), h.drag.pointerId = I, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], v("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: I }), !0;
  }
  function p(R, D, I = "pano", T = performance.now()) {
    if (!h.drag.active) return !1;
    const $ = Number(T || performance.now()), X = Number(R), oe = Number(D), ie = X - h.drag.lastX, xe = oe - h.drag.lastY;
    h.drag.lastX = X, h.drag.lastY = oe, h.drag.lastTs = $;
    const A = i() || { x: 1, y: 1 }, be = Number(A.x || 1), he = Number(A.y || 1), fe = { ...t() };
    let H = 0, se = 0;
    if (I === "unwrap") {
      const ne = a() || { w: 1, h: 1 }, K = Math.max(1, Number(ne.w || 1)), le = Math.max(1, Number(ne.h || 1)), we = ie / K, Ee = xe / le;
      H = -we * 360 * be, se = Ee * 180 * he;
    } else {
      const ne = c() || { w: 0, h: 0 }, K = Math.max(1, Number(ne.w || 0)), le = Math.max(1, Number(ne.h || 0));
      if (K > 1 && le > 1) {
        const we = q(Number(fe.fov || bi), 1, 179), Ee = q(Cv(we, K, le), 0.1, 179);
        H = -(ie / K) * we * be, se = xe / le * Ee * he;
      } else
        H = -ie * $l * be, se = xe * $l * he;
    }
    fe.yaw = Vt(Number(fe.yaw || 0) + H), fe.pitch = q(Number(fe.pitch || 0) + se, -89.9, 89.9), n(fe), h.velHistory.push({ ts: $, yaw: fe.yaw, pitch: fe.pitch });
    let B = 0;
    for (; B < h.velHistory.length - 1 && h.velHistory[B].ts < $ - 100; ) B++;
    return B > 0 && h.velHistory.splice(0, B), h.inertia.active = !1, h.inertia.lastTs = $, f(), v("drag", { phase: "move", dx: ie, dy: xe, dYaw: H, dPitch: se }), !0;
  }
  function w(R = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const D = Number(R || performance.now());
    h.drag.lastTs = D;
    const I = h.velHistory.filter(($) => D - $.ts <= 80);
    if (I.length >= 2) {
      const $ = I[0], X = I.at(-1), oe = Math.max(1e-3, (X.ts - $.ts) / 1e3);
      let ie = X.yaw - $.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), h.inertia.vx = ie / oe, h.inertia.vy = (X.pitch - $.pitch) / oe;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const T = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = T > fh, h.inertia.lastTs = D, v("drag", { phase: "end", speed: T, inertiaActive: h.inertia.active }), !0;
  }
  function N(R = performance.now()) {
    if (!h.inertia.active) return !1;
    const D = Number(R || performance.now()), I = Math.max(1e-3, (D - (h.inertia.lastTs || D)) / 1e3);
    h.inertia.lastTs = D;
    const T = { ...t() };
    T.yaw = Vt(Number(T.yaw || 0) + h.inertia.vx * I), T.pitch = q(Number(T.pitch || 0) + h.inertia.vy * I, -89.9, 89.9);
    const $ = Math.exp(-uh * I);
    return h.inertia.vx *= $, h.inertia.vy *= $, Math.abs(h.inertia.vx) < Bl && Math.abs(h.inertia.vy) < Bl && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(T), f(), h.inertia.active;
  }
  function P(R) {
    const D = Math.sign(Number(R || 0));
    if (!D) return !1;
    const I = { ...t() }, T = Number(I.fov || bi);
    return I.fov = q(T + D * ch, wc, Sc), n(I), f(), v("wheel", { deltaSign: D, fovBefore: T, fovAfter: I.fov }), !0;
  }
  function M(R) {
    return P(Math.sign(Av(R)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: bi }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, f();
  }
  return {
    state: h,
    startDrag: y,
    moveDrag: p,
    endDrag: w,
    stepInertia: N,
    applyWheel: P,
    applyWheelEvent: M,
    resetView: V
  };
}
const Tv = {
  dragSensitivity: $l,
  wheelStep: ch,
  fovMin: wc,
  fovMax: Sc,
  initialFov: bi,
  inertiaBlendOld: kv,
  inertiaBlendInst: Pv,
  inertiaDamping: uh,
  inertiaStartSpeed: fh,
  inertiaStopSpeed: Bl,
  rad2deg: 1 / zl
};
function $o(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const kf = Math.PI / 180;
function Wi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Iv(e) {
  const t = e || {}, n = Wi(t.yaw_deg, 0), i = Wi(t.pitch_deg, 0), a = Wi(t.roll_deg ?? t.rot_deg, 0), c = bl(Wi(t.hFOV_deg, 90), 1, 179), f = bl(Wi(t.vFOV_deg, 60), 1, 179), d = Math.tan(c * kf * 0.5) / Math.max(1e-6, Math.tan(f * kf * 0.5)), h = bl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: f,
    aspect: h
  };
}
const dh = 0.28;
function Ev(e) {
  const t = e && typeof e == "object" ? e : {}, n = q(Number(t.x0 ?? 0), 0, 1), i = q(Number(t.y0 ?? 0), 0, 1), a = q(Number(t.x1 ?? 1), 0, 1), c = q(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Dv(e, t = {}) {
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
    crop: Ev(e.crop),
    opacity: d ? dh : q(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function ms(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((f) => Dv(f, { includeHidden: i })).filter((f) => f && (i || f.visible !== !1)).sort((f, d) => Number(f.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function hh(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || ms(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], f = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var P;
    const h = String((d == null ? void 0 : d.assetId) || "").trim(), v = h || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!v || f.has(v)) return;
    const y = h ? a[h] : null, p = t(v, y, d);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const w = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), N = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || w <= 0 || N <= 0 || (f.add(v), c.push({
      assetId: v,
      source: p,
      revision: String(((P = n.revisionFor) == null ? void 0 : P.call(n, v, y, p)) ?? [
        v,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
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
function Lv(e, t = 360) {
  return Nc(e, t);
}
function xr(e) {
  const t = Iv(e || {});
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
const { app: nt } = xo;
function Bo() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (xo == null ? void 0 : xo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Pr = Math.PI / 180, Rv = wc, Ov = Sc, xa = { Nu: 14, Nv: 9 }, Fv = { Nu: 24, Nv: 14 }, Vv = 10, Pf = 0.16, Hv = 3, jv = 220, zv = "pano_suite.ui_settings.v1", $v = 120;
function Bv() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(zv)) || "").trim();
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
function ph() {
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
function mh() {
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
function io(e, t, n = {}) {
  var p;
  if (!ph()) return;
  const i = e.__panoDomPreview, a = i == null ? void 0 : i.widget, c = i == null ? void 0 : i.root, f = (p = c == null ? void 0 : c.querySelector) == null ? void 0 : p.call(c, "div"), d = i == null ? void 0 : i.canvas, h = c == null ? void 0 : c.parentElement, v = h == null ? void 0 : h.parentElement, y = (w) => {
    var P;
    if (!w) return null;
    const N = (P = w.getBoundingClientRect) == null ? void 0 : P.call(w);
    return {
      tag: w.tagName.toLowerCase(),
      cw: w.clientWidth,
      ch: w.clientHeight,
      ow: w.offsetWidth,
      oh: w.offsetHeight,
      rect: N ? { w: Math.round(N.width), h: Math.round(N.height), top: Math.round(N.top) } : null,
      styleH: w.style.height,
      styleW: w.style.width
    };
  };
  d && (d.width, d.height), An(e), `${t}`, {
    ...n,
    widgetCompute: a != null && a.__lastComputeSize,
    dom: (y(c), y(f), y(d), y(h), y(v))
  };
}
function An(e) {
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
function gh(e) {
  const t = An(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function vh(e, t, n) {
  gh(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Ul(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Sr(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function bh(e) {
  return $o(Sr(e));
}
function Br(e = null) {
  var c, f;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((f = (c = nt == null ? void 0 : nt.canvas) == null ? void 0 : c.constructor) == null ? void 0 : f.name) || "");
  return [t, i, n, a].join("|");
}
function yh(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Br(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Br(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Br(t)
  };
}
const ca = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Br(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Br(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, _h(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function _h(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : yh(i, e).chosenPath, c = Ul(e);
      this.activeBackend = c;
      const f = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (c === a && c !== "none" && f === i && d === h) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Nr(e, { keepMonitor: i === "stickers" }), kb(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Ul(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Nr(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Nr(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Uo(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Nr(e, t = {}) {
  var i, a, c, f, d;
  if (!e) return;
  Ci.unregister(e), Uo(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((h) => {
      if (h === (n == null ? void 0 : n.widget)) return !1;
      const v = String((h == null ? void 0 : h.name) || ""), y = String((h == null ? void 0 : h.type) || ""), p = Bo();
      return !(v === p || y === p || v === "pano_preview" || y === "pano_preview" || v === "preview" && y === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ca.unregister(e);
}
function Kr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Cf(e, t) {
  return Kr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ao(e, t) {
  return Kr(e.x * t, e.y * t, e.z * t);
}
function yl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Af(e, t) {
  return Kr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function oo(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Kr(e.x / t, e.y / t, e.z / t);
}
function Vr(e, t) {
  const n = e * Pr, i = t * Pr, a = Math.cos(i);
  return Kr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function gs(e, t, n = 0) {
  const i = Vr(e, t), a = Kr(0, 1, 0);
  let c = Af(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Kr(1, 0, 0)), c = oo(c);
  let f = oo(Af(i, c));
  const d = n * Pr, h = Math.cos(d), v = Math.sin(d), y = Cf(ao(c, h), ao(f, v)), p = Cf(ao(c, -v), ao(f, h));
  return { fwd: i, right: oo(y), up: oo(p) };
}
function Uv(e, t = "#00ff00") {
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
function Kv(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = wa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Mc(e) {
  var d, h;
  const t = Kv(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = wa(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((h = wa(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const f = Uv(t, i);
  return f.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: f }, f;
}
function wa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Tf(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function xh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Gv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function wh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Sh(e, t, n = null) {
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
  return !i && n != null && (i = Gv(e == null ? void 0 : e.graph, n)), i;
}
function Wv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function vs(e, t = []) {
  const n = Wv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function If(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Ko(e, t) {
  const n = If(e), i = If(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function qv(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = vs(e, t).map((v) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(v))).filter((v) => v >= 0), c = n.map((v, y) => ({ input: v, idx: y })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), f = [.../* @__PURE__ */ new Set([...a, ...c])], d = [];
  for (const v of f) {
    const y = Sh(e, v);
    if ((y == null ? void 0 : y.id) != null) {
      d.push(String(y.id));
      continue;
    }
    const p = (h = n[v]) == null ? void 0 : h.link;
    if (p == null) continue;
    const w = xh(e == null ? void 0 : e.graph, p), { originId: N } = wh(w);
    N != null && d.push(String(N));
  }
  return [...new Set(d)];
}
const Ci = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = yn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var v, y, p, w, N;
        if (!c) return;
        const f = Ko(i, c == null ? void 0 : c.id);
        qv(c, ["erp_image", "bg_erp"]).some((P) => Ko(i, P)), !(String(c.__panoPreviewMode || "") === "cutout" && !f) && (Sa(c), (y = (v = c.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (p = c.setDirtyCanvas) == null || p.call(c, !0, !0), (N = (w = c.graph) == null ? void 0 : w.setDirtyCanvas) == null || N.call(w, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, yn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = yn) != null && e.removeEventListener) || (yn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Go(e) {
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
  return typeof ((c = yn) == null ? void 0 : c.apiURL) == "function" ? yn.apiURL(a) : a;
}
function Yv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Xv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function Zv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Nh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Yv(t)) return [t];
  const { filename: n, subfolder: i } = Xv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Go({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Zv([...a, t]);
}
function Jv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Go({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Wo(e) {
  const t = nt == null ? void 0 : nt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (Ko(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const f of c)
      if (Ko(f, a)) return t[f];
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
      return Go({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Pn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Go(e);
}
function Qv(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Mh(e) {
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
function eb(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((f) => t.push(f));
  }, a = (c, f = 0) => {
    !c || f > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, f + 1), a(c.ui, f + 1), a(c.data, f + 1), a(c.result, f + 1));
  };
  return a(e, 0), t;
}
function kh(e, t) {
  try {
    const n = eb(t);
    let i = "";
    for (const a of n)
      if (i = Pn(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), kc(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function tb(e, t = null) {
  var R, D;
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = Wo(n), a = [
    (R = i == null ? void 0 : i.ui) == null ? void 0 : R.pano_videos,
    i == null ? void 0 : i.pano_videos,
    (D = i == null ? void 0 : i.ui) == null ? void 0 : D.images,
    i == null ? void 0 : i.images
  ];
  let c = "";
  for (const I of a)
    if (Array.isArray(I)) {
      for (const T of I) {
        const $ = Pn(T);
        if ($ && (/\.mp4(\?|$)/i.test($) || String((T == null ? void 0 : T.format) || "").toLowerCase() === "video/mp4")) {
          c = $;
          break;
        }
      }
      if (c) break;
    }
  if (!c) return null;
  const f = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = kc(c, f);
  e.__panoOwnOutputVideoCache || (e.__panoOwnOutputVideoCache = { src: "", video: null });
  const h = e.__panoOwnOutputVideoCache;
  if (h.video && h.src === d) return h.video;
  const v = document.createElement("video");
  v.muted = !0, v.loop = !0, v.playsInline = !0, v.crossOrigin = "anonymous";
  let y = 0;
  const p = typeof v.requestVideoFrameCallback == "function", w = () => {
    !p || y || v.paused || v.ended || (y = v.requestVideoFrameCallback(() => {
      y = 0, t == null || t(), w();
    }));
  }, N = () => {
    t == null || t(), v.play().then(() => {
      w();
    }).catch(() => {
    });
  }, P = () => t == null ? void 0 : t(), M = () => {
    t == null || t(), w();
  }, V = () => {
    t == null || t();
  };
  return v.addEventListener("loadedmetadata", N, { once: !0 }), v.addEventListener("canplay", N, { once: !0 }), p || v.addEventListener("timeupdate", P), v.addEventListener("play", M), v.addEventListener("pause", V), v.src = d, v.load(), h.src = d, h.video = v, v;
}
function nb(e, t = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = String((e == null ? void 0 : e.__panoOwnOutputSrc) || "").trim(), a = Wo(n), c = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], f = Array.isArray(e == null ? void 0 : e.imgs) ? e.imgs : [], d = i ? [i, ...c, ...f] : [...c, ...f];
  let h = "";
  for (const R of d)
    if (h = Pn(R), h) break;
  if (!h) return null;
  const v = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), p = Nh(h).map((R) => kc(R, v));
  if (!p.length) return null;
  const w = `${h}|rev:${v}`;
  e.__panoOwnOutputImageCache || (e.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const N = e.__panoOwnOutputImageCache;
  if (N.img && N.src === w) return N.img;
  if (N.pendingImg && N.pendingSrc === w)
    return N.img && (N.img.complete || N.img.naturalWidth || N.img.width) ? N.img : N.pendingImg;
  const P = new Image();
  let M = -1;
  const V = () => {
    if (M += 1, M >= p.length) {
      e.__panoOwnOutputImageCache === N && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    P.src = p[M];
  };
  return P.onload = () => {
    var R;
    e.__panoOwnOutputImageCache === N && N.pendingImg === P && N.pendingSrc === w && (N.src = w, N.img = P, N.pendingSrc = "", N.pendingImg = null), t == null || t(), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, P.onerror = () => {
    if (M + 1 >= p.length) {
      e.__panoOwnOutputImageCache === N && N.pendingImg === P && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    V();
  }, N.pendingSrc = w, N.pendingImg = P, V(), N.img && (N.img.complete || N.img.naturalWidth || N.img.width) ? N.img : P;
}
function rb(e, t = []) {
  var v, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = vs(e, t).map((p) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(p))).filter((p) => p >= 0), c = n.map((p, w) => ({ input: p, idx: w })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), f = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const p of f) {
    const w = n[p], N = w == null ? void 0 : w.link;
    if (N == null) continue;
    const P = xh(e.graph, N), { originId: M, originSlot: V } = wh(P);
    if (M == null) continue;
    const R = Sh(e, p, M);
    if (!R) continue;
    const D = Number(V || 0), I = Wo((R == null ? void 0 : R.id) ?? M), T = Array.isArray(I == null ? void 0 : I.images) ? I.images : [];
    if (T.length) {
      const ie = [];
      D >= 0 && D < T.length && ie.push(T[D]), ie.push(...T);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (nt == null ? void 0 : nt.getNodeImageUrls) == "function" ? nt.getNodeImageUrls(R) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const ie = [];
      D >= 0 && D < $.length && ie.push($[D]), ie.push(...$);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const X = Array.isArray(R == null ? void 0 : R.imgs) ? R.imgs : [];
    if (X.length) {
      const ie = [];
      D >= 0 && D < X.length && ie.push(X[D]), ie.push(...X);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const oe = (v = R == null ? void 0 : R.widgets) == null ? void 0 : v.find((ie) => String((ie == null ? void 0 : ie.name) || "").toLowerCase() === "image");
    if (oe) {
      let ie = Pn(oe.value);
      if (ie && !ie.includes("/") && !ie.includes(":") && (R.comfyClass === "LoadImage" || R.type === "LoadImage") && (ie = yn.apiURL(`/view?filename=${encodeURIComponent(ie)}&type=input&subfolder=`)), ie)
        return String((w == null ? void 0 : w.name) || ""), { src: ie, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const d = Wo(e == null ? void 0 : e.id), h = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && h.push(...d.pano_input_images), Array.isArray((y = d == null ? void 0 : d.ui) == null ? void 0 : y.pano_input_images) && h.push(...d.ui.pano_input_images), h.length > 0)
    for (const p of h) {
      const w = Pn(p);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function ib(e, t = [], n = {}) {
  const i = rb(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = Nh(a);
  if (!c.length) return null;
  const f = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", h = e.__panoLinkedInputImageCache.get(d);
  if (h && h.srcRaw === a && h.img) return h.img;
  if (h && h.pendingSrcRaw === a && h.pendingImg)
    return f && h.img && (h.img.complete || h.img.naturalWidth || h.img.width) ? h.img : h.pendingImg;
  const v = new Image(), y = h || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = a, y.pendingResolvedSrc = "", y.pendingImg = v, e.__panoLinkedInputImageCache.set(d, y);
  let p = -1;
  const w = () => {
    var P, M, V, R;
    if (p += 1, p >= c.length) {
      if (((M = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : M.call(P, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const N = c[p];
    y.pendingResolvedSrc = N, v.src = N;
  };
  return v.onload = () => {
    var N, P, M;
    ((P = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : P.call(N, d)) === y && y.pendingImg === v && (y.srcRaw = a, y.resolvedSrc = String(y.pendingResolvedSrc || v.src || ""), y.img = v, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || v.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0);
  }, v.onerror = (N) => {
    var P, M, V, R;
    if (p + 1 < c.length) {
      w();
      return;
    }
    if (((M = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : M.call(P, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (R = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || R.call(V, d);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, w(), f && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : v;
}
function qo(e, t = [], n = null, i = {}) {
  const a = ib(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Sa(e) {
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
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < $v ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Yo(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), f = n / a, d = i / c, h = Math.min(f, d);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function Ph(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), f = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || f <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), v = Math.max(Math.round(34 * n), d + Math.round(14 * n)), y = i + (c - h) * 0.5, p = a + (f - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, p, h, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + h * 0.5, p + v * 0.5 + 0.5), e.restore();
}
function so(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function ab(e) {
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
  let d = a, h = a / f;
  return h > c && (h = c, d = c * f), {
    x: n + (a - d) * 0.5,
    y: i + (c - h) * 0.5,
    w: d,
    h
  };
}
function ob(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const f = Ch(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, f.x, f.y, f.w, f.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(f.x, f.y, f.w, f.h)), e.restore(), !0;
}
function sb(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var d;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let f = 22;
    try {
      const h = typeof c.computeSize == "function" ? c.computeSize(((d = An(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(h) && Number.isFinite(Number(h[1])) && (f = Number(h[1]));
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
function Ao(e) {
  const n = sb(e) + 2, i = 8, a = An(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), f = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return f < 40 || c < 80 ? null : { x: i, y: n, w: c, h: f };
}
function Ah(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Jv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const f = e.__panoPreviewImageCache.get(i);
  if (f && f.src === a) return f.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var h, v, y;
    (v = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || v.call(h), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function lb(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, f) => Number((c == null ? void 0 : c.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Kl(e, t) {
  return ms(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Gl(e, t, n) {
  return hh(t, (i, a) => Ah(e, i, a), { scene: n });
}
function cb(e, t) {
  var f;
  const n = Eh(e, t);
  if (!n) return [];
  const i = Dh(t), a = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], c = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const h = n.getGroupDisplayCanvas(d);
    return h ? {
      id: `paint_group:${d}`,
      source: h,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(c.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function ub(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, f = (d) => {
    const h = d.x - a, v = d.y - c, y = Math.hypot(h, v) || 1;
    return { x: d.x + h / y * i, y: d.y + v / y * i };
  };
  return [f(e), f(t), f(n)];
}
function Df(e, t, n, i, a, c, f, d) {
  const h = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(h) < 1e-6) return;
  const [v, y, p] = ub(c, f, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(v.x, v.y), e.lineTo(y.x, y.y), e.lineTo(p.x, p.y), e.closePath(), e.clip();
  const w = (c.x * (i.y - a.y) + f.x * (a.y - n.y) + d.x * (n.y - i.y)) / h, N = (c.x * (a.x - i.x) + f.x * (n.x - a.x) + d.x * (i.x - n.x)) / h, P = (c.x * (i.x * a.y - a.x * i.y) + f.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / h, M = (c.y * (i.y - a.y) + f.y * (a.y - n.y) + d.y * (n.y - i.y)) / h, V = (c.y * (a.x - i.x) + f.y * (n.x - a.x) + d.y * (i.x - n.x)) / h, R = (c.y * (i.x * a.y - a.x * i.y) + f.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / h;
  e.transform(w, M, N, V, P, R), e.drawImage(t, 0, 0), e.restore();
}
function Th(e, t, n, i) {
  const a = yl(e, t.right), c = yl(e, t.up), f = yl(e, t.fwd);
  if (f <= 1e-4) return null;
  const d = c / f / i, h = a / f / i;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Ih(e, t, n, i, a, c, f, d = 12, h = 9) {
  var H;
  const v = q(Number(f.hFOV_deg || 30), 1, 179) * Pr, y = q(Number(f.vFOV_deg || 30), 1, 179) * Pr, p = Math.tan(v * 0.5), w = Math.tan(y * 0.5), N = f.crop || {}, P = q(Number(N.x0 ?? 0), 0, 1), M = q(Number(N.y0 ?? 0), 0, 1), V = q(Number(N.x1 ?? 1), 0, 1), R = q(Number(N.y1 ?? 1), 0, 1), D = Math.max(1e-4, V - P), I = Math.max(1e-4, R - M), T = gs(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0), Number(f.rot_deg || f.roll_deg || 0)), $ = [], X = [], oe = [], ie = [];
  for (let se = 0; se <= h; se++) {
    const B = se / h, K = (1 - (M + B * I) * 2) * w;
    for (let le = 0; le <= d; le++) {
      const we = le / d, Re = ((P + we * D) * 2 - 1) * p, Ke = T.fwd.x + T.right.x * Re + T.up.x * K, Je = T.fwd.y + T.right.y * Re + T.up.y * K, Qe = T.fwd.z + T.right.z * Re + T.up.z * K, it = Math.hypot(Ke, Je, Qe) || 1e-8, Ht = Ke / it, Ct = Je / it, mn = Qe / it, sn = Ht * i.right.x + Ct * i.right.y + mn * i.right.z, Kn = Ht * i.up.x + Ct * i.up.y + mn * i.up.z, u = Ht * i.fwd.x + Ct * i.fwd.y + mn * i.fwd.z;
      if (u <= 1e-4)
        $[se] || ($[se] = []), X[se] || (X[se] = []), $[se][le] = null, X[se][le] = null;
      else {
        const O = Kn / u / a, Q = sn / u / a;
        $[se] || ($[se] = []), X[se] || (X[se] = []), $[se][le] = n.x + n.w * 0.5 + Q * n.h * 0.5, X[se][le] = n.y + n.h * 0.5 - O * n.h * 0.5;
      }
      oe[se] || (oe[se] = []), ie[se] || (ie[se] = []), oe[se][le] = we, ie[se][le] = B;
    }
  }
  const xe = (H = c.assets) == null ? void 0 : H[f.asset_id], A = Ah(t, f.asset_id, xe);
  if (!A || !A.complete || !A.naturalWidth) return;
  const be = Number(A.naturalWidth || A.width || 1), he = Number(A.naturalHeight || A.height || 1), fe = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let se = 0; se < h; se++)
    for (let B = 0; B < d; B++) {
      const ne = $[se][B], K = X[se][B], le = $[se][B + 1], we = X[se][B + 1], Ee = $[se + 1][B], Re = X[se + 1][B], Ke = $[se + 1][B + 1], Je = X[se + 1][B + 1];
      if (ne === null || le === null || Ee === null || Ke === null) continue;
      const Qe = oe[se][B] * be, it = ie[se][B] * he, Ht = oe[se][B + 1] * be, Ct = ie[se][B + 1] * he, mn = oe[se + 1][B] * be, sn = ie[se + 1][B] * he, Kn = oe[se + 1][B + 1] * be, u = ie[se + 1][B + 1] * he;
      Df(e, A, { x: Qe, y: it }, { x: Ht, y: Ct }, { x: Kn, y: u }, { x: ne, y: K }, { x: le, y: we }, { x: Ke, y: Je }), Df(e, A, { x: Qe, y: it }, { x: Kn, y: u }, { x: mn, y: sn }, { x: ne, y: K }, { x: Ke, y: Je }, { x: Ee, y: Re });
    }
}
function fb(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Mc(e), a = Ao(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = gs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), f = Math.tan(Number(e.__panoPreviewView.fov || 100) * Pr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = qo(
    e,
    vs(e, ["erp_image", "bg_erp"]),
    () => {
      var T, $, X;
      ($ = (T = e.__panoDomPreview) == null ? void 0 : T.requestDraw) == null || $.call(T), (X = e.setDirtyCanvas) == null || X.call(e, !0, !1);
    }
  ), h = !!(d && d.complete && (d.naturalWidth || d.width)), v = Ac(e), y = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = v || y, w = xa, N = Kl(e, i), P = Gl(e, i, N), M = Nc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Ur()), h) {
    const T = hs({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(P) ? P.map((oe) => `${String((oe == null ? void 0 : oe.assetId) || "")}:${String((oe == null ? void 0 : oe.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: N,
      textures: P,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), X = e.__panoRuntimeCore.syncState(T) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", M, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!X, X && t.drawImage(X, a.x, a.y, a.w, a.h);
  }
  const R = p ? 8 : 12, D = p ? 6 : 9, I = lb(e, i);
  if (!h || I.length === 0) {
    const T = Yo(t == null ? void 0 : t.canvas, a);
    Rh(t, a, c, f, T);
  }
  !V && h && Xo(e, t, a, c, f, d, w), !V && I.length > 0 && I.forEach((T) => Ih(t, e, a, c, f, i, T, R, D)), t.restore();
}
function db(e, t, n, i, a = "preview_scene", c = "") {
  const f = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return hs({
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
function _l(e, t, n, i) {
  var c, f, d, h, v, y;
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
      const p = i.convertEventToCanvasOffset(t);
      if (Array.isArray(p) && p.length >= 2)
        return {
          x: Number(p[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(p[1]) - Number(((h = e == null ? void 0 : e.pos) == null ? void 0 : h[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const a = pb(e, t, i);
  return a || null;
}
function hb(e, t) {
  var p, w;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a), f = (t == null ? void 0 : t.ds) || ((w = nt == null ? void 0 : nt.canvas) == null ? void 0 : w.ds);
  if (!c || !f) return null;
  const d = Number(f.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const h = Array.isArray(f.offset) ? f.offset : [0, 0], v = (n - Number(c.left || 0)) / d - Number(h[0] || 0), y = (i - Number(c.top || 0)) / d - Number(h[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(y) ? null : { x: v, y };
}
function pb(e, t, n) {
  var a, c;
  const i = hb(t, n || (nt == null ? void 0 : nt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Lf(e) {
  return Number(e == null ? void 0 : e.button) === 0 && String((e == null ? void 0 : e.type) || "").toLowerCase().includes("down") ? !0 : String((e == null ? void 0 : e.type) || "").toLowerCase() === "mouseup" ? !1 : typeof (e == null ? void 0 : e.buttons) == "number" ? (e.buttons & 1) === 1 : typeof (e == null ? void 0 : e.which) == "number" ? e.which === 1 : typeof (e == null ? void 0 : e.button) == "number" ? e.button === 0 : !1;
}
function lo(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), An(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", vh(e, 320, 180), jn(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, N;
    const p = t ? t.apply(this, arguments) : void 0;
    try {
      const P = arguments[0];
      P && !((w = this.flags) != null && w.collapsed) && (i.stepInertia(performance.now()) && ((N = this.setDirtyCanvas) == null || N.call(this, !0, !1)), fb(this, P, i));
    } catch {
    }
    return p;
  }, e.onResize = function() {
    var w;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ai(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), jh(this, 220, null), p;
  };
  const i = ps({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (p) => {
      e.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = Ao(e);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      Cc(e), (p = e.setDirtyCanvas) == null || p.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(p, w, N) {
    var P;
    try {
      if (!((P = this.flags) != null && P.collapsed)) {
        const M = _l(this, p, w, N) || { x: 0, y: 0 }, V = An(this), R = Number((V == null ? void 0 : V[0]) || 0), D = Number((V == null ? void 0 : V[1]) || 0);
        if (M.x >= R - 20 && M.y >= D - 20)
          return a ? a.apply(this, arguments) : void 0;
        const T = Ao(this);
        if (Tf(M.x, M.y, T))
          return (p == null ? void 0 : p.button) === 0 && i.startDrag(M.x, M.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(p, w, N) {
    try {
      const P = _l(this, p, w, N);
      if (i.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return i.endDrag(), !0;
        const M = P || i.state.drag;
        return i.moveDrag(M.x, M.y, "pano"), !0;
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
    const p = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), p;
  };
  const h = e.onMouseWheel;
  e.onMouseWheel = function(p, w, N) {
    var P, M;
    try {
      if ((P = this.flags) != null && P.collapsed) return h ? h.apply(this, arguments) : void 0;
      const V = _l(this, p, w, N), R = Ao(this);
      if (!V || !Tf(V.x, V.y, R)) return h ? h.apply(this, arguments) : void 0;
      const D = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return i.applyWheel(Math.sign(D)) && ((M = this.setDirtyCanvas) == null || M.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return h ? h.apply(this, arguments) : void 0;
    }
  };
  const v = e.onRemoved, y = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = f, e.onMouseLeave = d, e.onMouseWheel = h, e.onRemoved = v, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = y, e.onRemoved = function() {
    return y(), ca.unregister(this), Ci.unregister(this), v ? v.apply(this, arguments) : void 0;
  };
}
function mb(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Eh(e, t) {
  var v, y, p, w, N, P, M, V, R, D, I, T;
  const n = (y = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : y.strokes, i = (w = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const f = mb(e, t), d = `${f.width}x${f.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = jl(f), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: i || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.raster_objects) || null
  };
  return (((M = e.__panoPreviewPaintRevision) == null ? void 0 : M.paint) !== h.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== h.mask || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== h.groups || ((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Dh(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function gb(e, t) {
  const n = Eh(e, t);
  if (!n) return null;
  const i = Dh(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function vb(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = Pn(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = e.__panoPaintingLayerImageCache;
  if (c.img && c.src === a) return c.img;
  const f = new Image();
  return f.onload = () => {
    var h;
    n == null || n(), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0);
  }, f.onerror = () => {
    var h;
    ((h = e.__panoPaintingLayerImageCache) == null ? void 0 : h.img) === f && (e.__panoPaintingLayerImageCache = { src: "", img: null });
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
    const d = vb(e, t, () => {
      var h, v;
      return (v = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null ? void 0 : v.call(h);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = gb(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function bb(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Lh(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function yb(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const f = bb(n);
  if (f.width === i && f.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const h = Lh(e, c, f.width, f.height).getContext("2d", { willReadFrequently: !0 });
  if (!h) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    h.clearRect(0, 0, f.width, f.height), h.drawImage(n, 0, 0, f.width, f.height);
    const v = h.getImageData(0, 0, f.width, f.height).data, y = t.getImageData(0, 0, i, a), p = y.data, w = Math.max(0, f.width - 1), N = Math.max(0, f.height - 1);
    for (let P = 0; P < a; P += 1) {
      const M = (P + 0.5) * f.height / a - 0.5, V = q(Math.floor(M), 0, N), R = q(V + 1, 0, N), D = q(M - V, 0, 1);
      for (let I = 0; I < i; I += 1) {
        const T = (I + 0.5) * f.width / i - 0.5, $ = q(Math.floor(T), 0, w), X = q($ + 1, 0, w), oe = q(T - $, 0, 1);
        let ie = 0, xe = 0, A = 0, be = 0;
        const he = (se, B, ne) => {
          const K = (B * f.width + se) * 4, le = (v[K + 3] || 0) / 255;
          ie += le * ne, xe += (v[K] || 0) / 255 * le * ne, A += (v[K + 1] || 0) / 255 * le * ne, be += (v[K + 2] || 0) / 255 * le * ne;
        };
        if (he($, V, (1 - oe) * (1 - D)), he(X, V, oe * (1 - D)), he($, R, (1 - oe) * D), he(X, R, oe * D), ie <= 1e-6) continue;
        const fe = (P * i + I) * 4, H = 1 - ie;
        p[fe] = Math.round(q((xe + p[fe] / 255 * H) * 255, 0, 255)), p[fe + 1] = Math.round(q((A + p[fe + 1] / 255 * H) * 255, 0, 255)), p[fe + 2] = Math.round(q((be + p[fe + 2] / 255 * H) * 255, 0, 255)), p[fe + 3] = 255;
      }
    }
    t.putImageData(y, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function Of(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let h = e.__panoPreviewBgPaint;
  if (!h || h.__revKey !== d || h.width !== a || h.height !== c) {
    (!h || h.width !== a || h.height !== c) && (h = document.createElement("canvas"), h.width = a, h.height = c, e.__panoPreviewBgPaint = h);
    const v = h.getContext("2d");
    v.clearRect(0, 0, a, c), v.drawImage(t, 0, 0, a, c), yb(e, v, n, a, c, "__panoPreviewOverlayScratch"), h.__revKey = d;
  }
  return h;
}
function _b(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Pc(e, a);
  const c = Mc(e), f = t.parentElement, d = 1, h = Math.max(1, Number((f == null ? void 0 : f.clientWidth) || t.clientWidth || 0)), v = Math.max(1, Number((f == null ? void 0 : f.clientHeight) || t.clientHeight || 0)), y = Math.max(64, Math.round(h * d)), p = Math.max(64, Math.round(v * d)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const N = ab(c), P = qo(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ie, xe;
          return (xe = (ie = e.__panoDomPreview) == null ? void 0 : ie.requestDraw) == null ? void 0 : xe.call(ie);
        },
        { preserveReadyWhilePending: !1 }
      ), M = !!(P && P.complete && (P.naturalWidth || P.width));
      (t.width !== y || t.height !== p) && (t.width = y, t.height = p);
      const V = { x: 0, y: 0, w: y, h: p }, R = M ? q(Number((P.naturalWidth || P.width) / Math.max(1, Number(P.naturalHeight || P.height || 1))), 0.05, 20) : 1, D = N ? xr(N) : null, I = q(Number((D == null ? void 0 : D.aspect) || R || 1), 0.05, 20), T = Ch(V, I);
      Yo(t, V), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, y, p);
      let $ = "none", X = "Open editor and add frame", oe = "";
      if (oe = String((P == null ? void 0 : P.src) || ""), N)
        if (P && !M)
          $ = "loading";
        else if (M) {
          const ie = Kl(e, c), xe = Gl(e, c, ie), A = cb(e, c), be = Qi({
            stateRevision: [
              "runtime_cutout_scene",
              String(P.currentSrc || P.src || ""),
              Number(P.naturalWidth || P.width || 0),
              Number(P.naturalHeight || P.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((N == null ? void 0 : N.id) || ""),
              Array.isArray(xe) ? xe.map((fe) => `${String((fe == null ? void 0 : fe.assetId) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}`).join(",") : "",
              Array.isArray(A) ? A.map((fe) => `${String((fe == null ? void 0 : fe.id) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}:${Number((fe == null ? void 0 : fe.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: P,
            backgroundRevision: String(P.currentSrc || P.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: ie,
            textures: xe,
            rasterEntries: A,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Ur()), e.__panoRuntimeCore.syncState(be), e.__panoRuntimeCore.renderToContext(
            w,
            T,
            xr(N),
            { width: T.w, height: T.h, dpr: 1 }
          ) || ($ = "empty", X = "Open editor or run node");
        } else
          $ = "empty", X = "Connect ERP image";
      else {
        if (M) {
          const ie = Rf(e, c), xe = ie != null && ie.source ? Of(e, P, ie.source, ie.revision || "") : P;
          ob(w, xe, V, 0.44);
        }
        $ = "empty", X = "Open editor and add frame";
      }
      $ === "loading" ? (so(e, !1), gr(e, !0, oe)) : $ === "empty" ? (so(e, !0, X), gr(e, !1, "")) : (so(e, !1), gr(e, !1, ""));
    } else {
      so(e, !1), (t.width !== y || t.height !== p) && (t.width = y, t.height = p);
      const N = { x: 0, y: 0, w: y, h: p }, P = Yo(t, N);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, y, p), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const M = gs(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * Pr * 0.5), R = qo(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var he, fe;
          return (fe = (he = e.__panoDomPreview) == null ? void 0 : he.requestDraw) == null ? void 0 : fe.call(he);
        }
      ), D = !!(R && R.complete && (R.naturalWidth || R.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, y, p);
      const I = Kl(e, c), T = Gl(e, c, I), $ = Nc(e.__panoPreviewView, c == null ? void 0 : c.coverage), X = Rf(e, c), oe = (X == null ? void 0 : X.source) || null, ie = D && oe ? Of(e, R, oe, (X == null ? void 0 : X.revision) || "") : R, xe = ie !== R ? String(ie.__revKey || "") : R ? [
        String(R.currentSrc || R.src || ""),
        Number(R.naturalWidth || R.width || 0),
        Number(R.naturalHeight || R.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Ur());
      let A = !1;
      if (D) {
        const fe = e.__panoDomRuntimeCore.syncState(
          db(ie, c, I, T, "runtime_dom_scene", xe)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", $, {
          width: N.w,
          height: N.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        fe && (w.drawImage(fe, N.x, N.y, N.w, N.h), A = !0);
      }
      const be = I.stickers;
      if (D && A)
        gr(e, !1, "");
      else if (D)
        Xo(e, w, N, M, V, ie, xa), gr(e, !1, "");
      else if (oe)
        Xo(e, w, N, M, V, oe, xa), gr(e, !!R && !D, String((R == null ? void 0 : R.src) || ""));
      else {
        const he = !!R && !D;
        gr(e, he, String((R == null ? void 0 : R.src) || "")), he && Ph(w, N, P);
      }
      if ((!D || be.length === 0) && Rh(w, N, M, V, P), !A && be.length > 0) {
        const he = Ac(e), fe = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, H = he || fe, se = H ? 8 : 12, B = H ? 6 : 9;
        be.forEach((ne) => Ih(w, e, N, M, V, c, ne, se, B));
      } else if (!R || !D) {
        const he = Math.max(14, Math.round(16 * P));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${he}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", y * 0.5, p * 0.5 + 24 * P);
      }
    }
}
function Xo(e, t, n, i, a, c, f = Fv) {
  const d = Mc(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Ur());
  const v = Mh(c), y = hs({
    stateRevision: [
      "runtime_bg_only",
      v,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: v,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(y)) return;
  const w = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(h.yaw || 0),
    pitchDeg: Number(h.pitch || 0),
    fovDeg: Number(h.fov || 100),
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  w && t.drawImage(w, n.x, n.y, n.w, n.h);
}
function Ff(e, t, n, i, a, c, f = 1) {
  let d = !1;
  e.strokeStyle = c, e.lineWidth = f, e.beginPath();
  for (const h of t) {
    const v = Th(h, n, i, a);
    if (!v) {
      d = !1;
      continue;
    }
    d ? e.lineTo(v.x, v.y) : (e.moveTo(v.x, v.y), d = !0);
  }
  e.stroke();
}
function Rh(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", f = "rgba(250, 250, 250, 0.35)";
  for (let v = -75; v <= 75; v += 15) {
    const y = [];
    for (let p = -180; p <= 180; p += 15) y.push(Vr(p, v));
    Ff(e, y, n, t, i, v === 0 ? f : c, v === 0 ? 1.5 : 1);
  }
  for (let v = -180; v <= 180; v += 45) {
    const y = [];
    for (let p = -89; p <= 89; p += 15) y.push(Vr(v, p));
    Ff(e, y, n, t, i, v % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, v % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Vr(0, 0) },
    { name: "Right", dir: Vr(90, 0) },
    { name: "Back", dir: Vr(180, 0) },
    { name: "Left", dir: Vr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((v) => {
    const y = Th(v.dir, n, t, i);
    y && e.fillText(v.name, y.x, y.y + 20 * a);
  }), e.restore();
}
function Oh(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Cc(e) {
  const t = Oh(e);
  t.dragging = !1, t.hqFrames = Vv;
}
function Ai(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Ac(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function xb(e, t = performance.now()) {
  const n = Oh(e);
  if (n.lastFrameTs > 0) {
    const i = Math.max(1, t - n.lastFrameTs);
    n.frameEmaMs <= 0 ? n.frameEmaMs = i : n.frameEmaMs = n.frameEmaMs * (1 - Pf) + i * Pf;
  }
  return n.lastFrameTs = t, n.frameEmaMs;
}
function wb(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Sb(e, t, n = 20) {
  var f;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (f = t.getBoundingClientRect) == null ? void 0 : f.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
}
function Vn(e, t) {
  return Sb(e, t) ? !1 : (wb(e), !0);
}
function Fh() {
  var n;
  const e = (n = nt == null ? void 0 : nt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Vh(e) {
  var n;
  if (!e) return;
  const t = (n = nt == null ? void 0 : nt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Nb(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !gh(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function Hh(e, t = 0, n = null, i = 1200) {
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
      e.__panoUserResized = !0, Ai(e, 150), t == null || t(), jh(e, 180, t);
    }
  };
}
function jh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function jn(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function ea(e) {
  return e.__panoStandaloneView || (e.__panoStandaloneView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoStandaloneView;
}
function ua(e) {
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
    var y, p, w;
    const c = n ? n.apply(this, arguments) : void 0;
    if (!a || (y = this.flags) != null && y.collapsed) return c;
    const f = 8, d = 44, h = Math.max(120, Number(((p = this.size) == null ? void 0 : p[0]) || 320) - 16), v = Math.max(70, Number(((w = this.size) == null ? void 0 : w[1]) || 240) - 52);
    return a.save(), a.fillStyle = "rgba(20,20,24,0.94)", a.strokeStyle = "rgba(78,78,86,0.95)", a.lineWidth = 1, a.beginPath(), a.roundRect(f, d, h, v, 8), a.fill(), a.stroke(), a.fillStyle = "rgba(236,236,242,0.92)", a.font = "600 12px Plus Jakarta Sans, Geist, sans-serif", a.textAlign = "center", a.textBaseline = "middle", a.fillText(String(t), f + h * 0.5, d + v * 0.5), a.restore(), c;
  }, e.__panoStandaloneUnavailableRestore = () => {
    e.onDrawForeground = n, e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }, e.__panoStandaloneUnavailable = !0, (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
}
function Mb(e, t, n, i = "erp_image", a = xa) {
  var I, T, $;
  Pc(e, "standalone");
  const c = Yo(t == null ? void 0 : t.canvas, n), f = ea(e), d = gs(Number(f.yaw || 0), Number(f.pitch || 0), 0), h = Math.tan(Number(f.fov || 100) * Pr * 0.5), v = vs(e, [i, "erp_image", "bg_erp"]), p = bh(e) ? tb(e, () => {
    var X, oe;
    return (oe = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : oe.call(X);
  }) || nb(e, () => {
    var X, oe;
    return (oe = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : oe.call(X);
  }) : qo(
    e,
    v,
    () => {
      var X, oe;
      return (oe = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : oe.call(X);
    }
  ), w = Qv(p), N = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || ""), P = Number((($ = (T = (I = e == null ? void 0 : e.widgets) == null ? void 0 : I.find) == null ? void 0 : T.call(I, (X) => (X == null ? void 0 : X.name) === "coverage")) == null ? void 0 : $.value) || 360) === 180 ? 180 : 360, M = Mh(p), V = String(e.__panoStandaloneLastFrameSrc || ""), R = !!e.__panoStandaloneLastFrameCanvas && !!N && N === V;
  if (e.__panoStandaloneCore || (e.__panoStandaloneCore = Ur()), w) {
    const X = hs({
      stateRevision: [
        "standalone_preview_scene",
        M,
        P
      ].join("|"),
      backgroundSource: p,
      backgroundRevision: M,
      coverageDeg: P,
      scene: ms(null, {}),
      textures: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), ie = e.__panoStandaloneCore.syncState(X) ? e.__panoStandaloneCore.renderToTarget("preview_node", Lv(f, P), {
      width: n.w,
      height: n.h,
      dpr: window.devicePixelRatio || 1
    }) : null, xe = !!ie;
    if (ie) {
      t.drawImage(ie, n.x, n.y, n.w, n.h);
      const be = Lh(e, "__panoStandaloneLastFrameCanvas", n.w, n.h).getContext("2d");
      be && (be.clearRect(0, 0, n.w, n.h), be.drawImage(ie, 0, 0, n.w, n.h), e.__panoStandaloneLastFrameSrc = N);
    }
    xe || (R ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h), Xo(e, t, n, d, h, p, a)));
  } else
    R ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h));
  gr(e, !!p && !w, N) && Ph(t, n, c);
}
function kb(e, t = {}) {
  var ne;
  const n = t.__allowStandalone === !0, i = bh(e);
  if (i && !n) {
    Sr(e);
    return;
  }
  i && Nb(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ci.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, f = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ca.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), h = a ? yh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Br(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (h.chosenPath = d, h.reason = "controller_target_backend");
  const v = a ? h.chosenPath : "dom", y = h.signature || Br(e);
  if (Number(e.__panoRebindGeneration || 0), Ul(e), e == null || e.id, e.__panoPreviewMode, h.reason, h.frontendVersionRaw, e.addDOMWidget, An(e), e.__panoFrontendSig = y, e.__panoStickersPath = v, a && ca.register(e), a && v === "legacy_draw") {
    if (c) return;
    Nr(e, { keepMonitor: !0 }), lo(e);
    return;
  }
  if ((ne = e.__panoDomPreview) != null && ne.widget) return;
  if (e.__panoLegacyPreviewHooked && Nr(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && lo(e);
    return;
  }
  const p = t.noPreview === !0, w = a || p ? 0 : 56, N = document.createElement("div");
  if (mh(), N.className = "pano-node-preview-dom", N.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && N.classList.add("pano-node-preview--no-preview"), N.setAttribute("data-capture-wheel", "true"), N.setAttribute("tabindex", "-1"), N.style.cssText = [
    "width:100%",
    p ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), p) {
    const K = e.addDOMWidget(Bo(), "preview", N, Wl(e, null));
    jn(e), e.__panoDomPreview = { widget: K, root: N, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const P = document.createElement("div");
  P.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const M = document.createElement("canvas");
  M.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", P.appendChild(M), P.appendChild(V), N.appendChild(P), vh(e, 120, 120), jn(e);
  let R = null;
  try {
    Hh(e, w, () => {
      var K, le;
      return (le = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : le.call(K);
    }), R = e.addDOMWidget(
      Bo(),
      "preview",
      N,
      Wl(e, () => {
        var K, le;
        return (le = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : le.call(K);
      }, w)
    );
  } catch {
    a && lo(e);
    return;
  }
  const D = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, I = () => {
    D.needsDraw = !0, D.raf || (D.raf = requestAnimationFrame(X));
  }, T = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Ai(e, 150), I();
  }) : null;
  T == null || T.observe(P);
  const $ = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const K = 3, le = (we) => {
      requestAnimationFrame(() => {
        var Re;
        const Ee = !!(N != null && N.isConnected && (P != null && P.isConnected) && (M != null && M.isConnected) && Number(P.clientHeight || 0) > 0 && Number(M.clientHeight || 0) > 0);
        if (!Ee && we < K) {
          le(we + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((P == null ? void 0 : P.clientHeight) || 0), Number((M == null ? void 0 : M.clientHeight) || 0), !Ee) {
          if (c) {
            e.__panoPreviewMode, Number((P == null ? void 0 : P.clientHeight) || 0), Number((M == null ? void 0 : M.clientHeight) || 0);
            return;
          }
          Nr(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", lo(e), (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !0);
        }
      });
    };
    le(1);
  }, X = (K) => {
    var we, Ee, Re;
    D.raf = 0;
    const le = oe.stepInertia(K);
    (D.needsDraw || le) && (D.needsDraw = !1, (we = e.flags) != null && we.collapsed || _b(e, M, null, oe), (Ee = e.setDirtyCanvas) == null || Ee.call(e, !0, !1)), (le || D.needsDraw) && (D.raf = requestAnimationFrame(X)), ph() && (!e.__panoDebugLastTs || K - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = K, e.__panoPreviewMode, An(e), qi(N), qi(P), qi(M), qi(N.parentElement), qi((Re = N.parentElement) == null ? void 0 : Re.parentElement), Number(M.width || 0), Number(M.height || 0), void 0);
  }, oe = ps({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (K) => {
      e.__panoPreviewView = K;
    },
    onInteraction: () => {
      I();
    }
  });
  M.addEventListener("pointerdown", (K) => {
    var le, we;
    Vn(K, P) && f && K.button === 0 && ((le = N.focus) == null || le.call(N), (we = M.setPointerCapture) == null || we.call(M, K.pointerId), M.style.cursor = "grabbing", oe.startDrag(K.clientX, K.clientY, K.pointerId));
  }), M.addEventListener("pointermove", (K) => {
    !f || !oe.state.drag.active || (Vn(K, P), oe.moveDrag(K.clientX, K.clientY, "pano"));
  });
  const ie = (K) => {
    var le;
    !f || !oe.state.drag.active || (Vn(K, P), (le = M.releasePointerCapture) == null || le.call(M, K.pointerId), M.style.cursor = "grab", oe.endDrag(), Cc(e), I());
  };
  M.addEventListener("pointerup", ie), M.addEventListener("pointercancel", ie), M.addEventListener("pointerleave", (K) => {
    oe.state.drag.active && ie(K);
  });
  const xe = (K) => {
    var we, Ee, Re;
    if (!Vn(K, P) || !f) return;
    const le = Fh();
    oe.applyWheelEvent(K) && I(), (we = K.preventDefault) == null || we.call(K), (Ee = K.stopPropagation) == null || Ee.call(K), (Re = K.stopImmediatePropagation) == null || Re.call(K), requestAnimationFrame(() => {
      var Ke, Je;
      Vh(le), (Je = (Ke = nt == null ? void 0 : nt.canvas) == null ? void 0 : Ke.setDirty) == null || Je.call(Ke, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((K) => {
    P.addEventListener(K, xe, { passive: !1, capture: !0 }), M.addEventListener(K, xe, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((K) => {
    M.addEventListener(K, (le) => Vn(le, P)), P.addEventListener(K, (le) => Vn(le, P));
  });
  const A = wa(e, "state_json");
  if (A && !A.__panoPreviewPatchedCb) {
    A.__panoPreviewPatchedCb = !0;
    const K = A.callback;
    A.callback = (le) => {
      const we = K ? K(le) : void 0;
      return I(), we;
    };
  }
  const be = wa(e, "bg_color");
  if (be && !be.__panoPreviewPatchedCb) {
    be.__panoPreviewPatchedCb = !0;
    const K = be.callback;
    be.callback = (le) => {
      const we = K ? K(le) : void 0;
      return I(), we;
    };
  }
  const he = e.onRemoved, fe = e.onResize, H = e.onExecuted;
  e.onExecuted = function(K) {
    kh(e, K), Sa(e), jn(e), I();
    const le = H ? H.apply(this, arguments) : void 0;
    return jn(e), le;
  };
  const se = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return Sa(e), jn(e), I(), se ? se.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var le;
    const K = fe ? fe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ai(this, 150), I(), (le = this.setDirtyCanvas) == null || le.call(this, !0, !1), K;
  }, e.onRemoved = function() {
    return B(), ca.unregister(this), Ci.unregister(this), he ? he.apply(this, arguments) : void 0;
  };
  const B = () => {
    var K;
    D.raf && cancelAnimationFrame(D.raf), (K = T == null ? void 0 : T.disconnect) == null || K.call(T), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, e.onRemoved = he;
  };
  e.__panoDomRestore = B, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: R, root: N, canvas: M, requestDraw: I, state: D, emptyHintEl: V }, $(), I();
}
function Vf(e, t = {}) {
  _h(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Pb(e) {
  var h;
  const t = e == null ? void 0 : e.root, n = (h = t == null ? void 0 : t.querySelector) == null ? void 0 : h.call(t, "div"), i = e == null ? void 0 : e.canvas;
  if (!t || !i || !t.isConnected || !i.isConnected) return !1;
  const a = Number(i.clientWidth || 0), c = Number(i.clientHeight || 0);
  if (a > 0 && c > 0) return !0;
  const f = Number(t.clientWidth || 0), d = Number(t.clientHeight || 0);
  if (f > 0 && d > 0) return !0;
  if (n) {
    const v = Number(n.clientWidth || 0), y = Number(n.clientHeight || 0);
    if (v > 0 && y > 0) return !0;
  }
  return !1;
}
function Cb(e, t = {}, n = null) {
  var d;
  let i = !1;
  try {
    i = Tb(e, {
      ...t,
      __noAutoFallback: !0,
      __skipRouteLog: !0
    }) === !0;
  } catch {
    i = !1;
  }
  if (!i || !((d = e.__panoDomPreview) != null && d.widget))
    return Zo(e, "Preview mount failed"), Sr(e), !0;
  Uo(e);
  const a = { cancelled: !1, frame: 0, timeoutId: 0 };
  e.__panoDomMountProbe = a;
  const c = (h) => {
    var v, y, p;
    a.cancelled || (a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, Zo(e, "Preview mount failed"), (y = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0), n && (e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n), Sr(e), void 0);
  }, f = () => {
    var y, p, w, N, P, M, V, R, D, I;
    if (a.cancelled) return;
    const h = e.__panoDomPreview;
    Number(((y = h == null ? void 0 : h.root) == null ? void 0 : y.clientWidth) || 0), Number(((p = h == null ? void 0 : h.root) == null ? void 0 : p.clientHeight) || 0);
    const v = (N = (w = h == null ? void 0 : h.root) == null ? void 0 : w.querySelector) == null ? void 0 : N.call(w, "div");
    if (Number((v == null ? void 0 : v.clientWidth) || 0), Number((v == null ? void 0 : v.clientHeight) || 0), Number(((P = h == null ? void 0 : h.canvas) == null ? void 0 : P.clientWidth) || 0), Number(((M = h == null ? void 0 : h.canvas) == null ? void 0 : M.clientHeight) || 0), a.frame, h != null && h.widget, (V = h == null ? void 0 : h.root) != null && V.isConnected && ((R = h == null ? void 0 : h.canvas) != null && R.isConnected), !(h != null && h.widget) || !((D = h.root) != null && D.isConnected) || !((I = h.canvas) != null && I.isConnected)) {
      c();
      return;
    }
    if (Pb(h)) {
      a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, ua(e), Sr(e);
      return;
    }
    if (a.frame += 1, a.frame >= Hv) {
      c();
      return;
    }
    requestAnimationFrame(f);
  };
  return a.timeoutId = setTimeout(() => {
    c();
  }, jv), requestAnimationFrame(f), !0;
}
function Ab(e, t = {}) {
  var i, a;
  const n = `standalone_unified|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (!(e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n)) {
    if (Sr(e), e == null || e.id, An(e), Number(((i = An(e)) == null ? void 0 : i[0]) || 0), Number(((a = An(e)) == null ? void 0 : a[1]) || 0), e == null || e.addDOMWidget, Nr(e, { keepMonitor: !1, reason: "attach_standalone_unified_begin" }), ua(e), typeof (e == null ? void 0 : e.addDOMWidget) == "function" && Cb(e, t, n)) {
      e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n;
      return;
    }
    Zo(e, "Preview mount failed"), e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, Sr(e);
  }
}
function Tb(e, t = {}) {
  var a, c;
  const n = `standalone_dom|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n && ((a = e.__panoDomPreview) != null && a.widget)) return !0;
  Nr(e, { keepMonitor: !1, reason: "attach_standalone_dom_begin" }), ua(e), e.__panoPreviewMode = "standalone_dom", e.__panoPreviewButtonText = String(t.buttonText || "Open Preview"), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, Ci.register(e), t.__skipRouteLog !== !0 && (Sr(e), void 0);
  const i = String(t.imageInputName || "erp_image");
  mh();
  try {
    if (typeof e.addDOMWidget != "function") throw new Error("addDOMWidget unavailable");
    if ((c = e.__panoDomPreview) != null && c.widget) return !0;
    const f = document.createElement("div");
    f.className = "pano-node-preview-dom pano-node-preview--stickers", f.style.cssText = "width:100%;height:100%;position:relative;display:block;min-height:56px;overflow:hidden;", f.setAttribute("data-capture-wheel", "true"), f.setAttribute("tabindex", "-1");
    const d = document.createElement("div");
    d.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const h = document.createElement("canvas");
    h.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;", d.appendChild(h), f.appendChild(d), Hh(e, 56, () => {
      var B, ne;
      return (ne = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ne.call(B);
    });
    const v = e.addDOMWidget(
      Bo(),
      "preview",
      f,
      Wl(e, () => {
        var B, ne;
        return (ne = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ne.call(B);
      }, 56)
    );
    v && (v.serialize = !1), jn(e), e.__panoBindSeq = Number(e.__panoBindSeq || 0) + 1;
    const y = e.__panoBindSeq;
    e == null || e.id;
    const p = { raf: 0, needsDraw: !0, dragging: !1, pointerId: null }, w = { listeners: 0, raf: 0, widget: 0 }, N = ps({
      getView: () => ea(e),
      setView: (B) => {
        const ne = ea(e);
        ne.yaw = Vt(Number(B.yaw || 0)), ne.pitch = q(Number(B.pitch || 0), -89.9, 89.9), ne.fov = q(Number(B.fov || 100), Rv, Ov);
      },
      getViewportSize: () => {
        const B = h.getBoundingClientRect();
        return {
          w: Math.max(1, Number(B.width || h.clientWidth || 0)),
          h: Math.max(1, Number(B.height || h.clientHeight || 0))
        };
      },
      getInvert: () => {
        const B = Bv();
        return {
          x: B.invert_view_x ? -1 : 1,
          y: B.invert_view_y ? -1 : 1
        };
      },
      onInteraction: () => {
        Cc(e);
      },
      onDebug: (B, ne) => {
      }
    });
    e.__panoStandaloneController = N;
    let P = null;
    const M = (B) => {
      var ne, K, le;
      (ne = B.preventDefault) == null || ne.call(B), (K = B.stopPropagation) == null || K.call(B), (le = B.stopImmediatePropagation) == null || le.call(B);
    }, V = () => {
      P && P();
      const B = (le) => {
        if (p.dragging) {
          if (!Lf(le)) {
            oe(le, (le == null ? void 0 : le.type) || "pointermove_buttons_released");
            return;
          }
          N.moveDrag(le.clientX, le.clientY, "pano", performance.now()), R(), M(le);
        }
      }, ne = (le) => {
        p.dragging && (oe(le, (le == null ? void 0 : le.type) || "pointerup"), M(le));
      }, K = (le) => {
        p.dragging && (oe(le, (le == null ? void 0 : le.type) || "pointercancel"), M(le));
      };
      window.addEventListener("pointermove", B, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", K, !0), w.listeners += 3, P = () => {
        window.removeEventListener("pointermove", B, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", K, !0), w.listeners = Math.max(0, w.listeners - 3), P = null;
      };
    }, R = () => {
      p.needsDraw = !0, p.raf || (p.raf = requestAnimationFrame(T));
    }, D = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
      Ai(e, 150), R();
    }) : null;
    D == null || D.observe(d);
    let I = 0;
    const T = (B = performance.now()) => {
      var Ct;
      p.raf = 0, I++, I <= 20 && io(e, `tick.${I}`);
      const ne = N.stepInertia(B), K = Ac(e, B), le = ne || K;
      if (xb(e, B), !p.needsDraw && !le && I > 20) return;
      p.needsDraw = !1;
      const we = 1, Ee = Number(h.clientWidth || 0), Re = Number(h.clientHeight || 0);
      e.__panoBootMinHeightActive && Ee > 0 && Re > 0 && (e.__panoBootMinHeightActive = !1);
      const Ke = Math.max(64, Math.round(Ee * we)), Je = Math.max(64, Math.round(Re * we));
      (I <= 20 || Ke !== h.width || Je !== h.height) && io(e, "tick.resize", { w: Ke, h: Je, cw: h.clientWidth, ch: h.clientHeight }), (h.width !== Ke || h.height !== Je) && (h.width = Ke, h.height = Je);
      const Qe = h.getContext("2d");
      if (!Qe) return;
      Mb(e, Qe, { x: 0, y: 0, w: Ke, h: Je }, i, xa), (Ct = e.setDirtyCanvas) == null || Ct.call(e, !0, !1), (p.needsDraw || le) && (p.raf = requestAnimationFrame(T));
    }, $ = (B) => {
      var ne, K, le;
      Vn(B, d) && B.button === 0 && ((ne = f.focus) == null || ne.call(f), (K = h.setPointerCapture) == null || K.call(h, B.pointerId), p.pointerId = B.pointerId, p.dragging = !0, h.style.cursor = "grabbing", N.startDrag(B.clientX, B.clientY, B.pointerId, performance.now()), (le = h.hasPointerCapture) == null || le.call(h, B.pointerId), V(), R());
    }, X = (B) => {
      if (p.dragging) {
        if (Vn(B, d), !Lf(B)) {
          oe(B);
          return;
        }
        N.moveDrag(B.clientX, B.clientY, "pano", performance.now()), R();
      }
    }, oe = (B, ne = "pointerup") => {
      p.dragging && (Vn(B, d), p.dragging = !1, p.pointerId = null, h.style.cursor = "grab", N.endDrag(performance.now()), P == null || P(), R());
    }, ie = (B) => oe(B, (B == null ? void 0 : B.type) || "pointerup"), xe = () => {
      p.dragging && (p.dragging = !1, p.pointerId = null, h.style.cursor = "grab", N.endDrag(performance.now()), P == null || P(), R());
    }, A = (B) => {
      var Re, Ke, Je;
      if (!Vn(B, d)) return;
      const ne = Fh(), K = document.activeElement, le = Number(ea(e).fov || 100), we = N.applyWheelEvent(B), Ee = Number(ea(e).fov || 100);
      Number(B.deltaY || 0), we && R(), (Re = B.preventDefault) == null || Re.call(B), (Ke = B.stopPropagation) == null || Ke.call(B), (Je = B.stopImmediatePropagation) == null || Je.call(B), requestAnimationFrame(() => {
        var Qe, it;
        Vh(ne), (it = (Qe = nt == null ? void 0 : nt.canvas) == null ? void 0 : Qe.setDirty) == null || it.call(Qe, !0, !0);
      });
    };
    h.addEventListener("pointerdown", $), h.addEventListener("pointermove", X), h.addEventListener("pointerup", ie), h.addEventListener("pointercancel", ie), h.addEventListener("lostpointercapture", xe), h.addEventListener("wheel", A, { passive: !1, capture: !0 }), d.addEventListener("wheel", A, { passive: !1, capture: !0 }), w.listeners += 7;
    const be = ["contextmenu", "click", "dblclick"];
    be.forEach((B) => {
      d.addEventListener(B, M, { capture: !0 }), h.addEventListener(B, M, { capture: !0 }), w.listeners += 2;
    });
    const he = e.onRemoved, fe = e.onResize, H = e.onExecuted, se = e.onConnectionsChange;
    return e.onExecuted = function(B) {
      io(e, "onExecuted"), kh(e, B), Sa(e), jn(e), R();
      const ne = H ? H.apply(this, arguments) : void 0;
      return jn(e), ne;
    }, e.onConnectionsChange = function() {
      return io(e, "onConnectionsChange"), Sa(e), jn(e), R(), se ? se.apply(this, arguments) : void 0;
    }, e.onResize = function() {
      var ne;
      const B = fe ? fe.apply(this, arguments) : void 0;
      return this.__panoUserResized = !0, Ai(this, 150), R(), (ne = this.setDirtyCanvas) == null || ne.call(this, !0, !1), B;
    }, e.onRemoved = function() {
      var B, ne, K;
      return (ne = (B = e.__panoStandaloneModal) == null ? void 0 : B.dispose) == null || ne.call(B), e.__panoStandaloneModal = null, Uo(e), p.raf && (cancelAnimationFrame(p.raf), w.raf += 1), P == null || P(), h.removeEventListener("pointerdown", $), h.removeEventListener("pointermove", X), h.removeEventListener("pointerup", ie), h.removeEventListener("pointercancel", ie), h.removeEventListener("lostpointercapture", xe), h.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), be.forEach((le) => {
        d.removeEventListener(le, M, !0), h.removeEventListener(le, M, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), Ef(e, v) && (w.widget += 1), (K = D == null ? void 0 : D.disconnect) == null || K.call(D), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, Ci.unregister(e), { ...w }, e.onRemoved = he, he ? he.apply(this, arguments) : void 0;
    }, e.__panoDomRestore = () => {
      var B, ne;
      (ne = (B = e.__panoStandaloneModal) == null ? void 0 : B.dispose) == null || ne.call(B), e.__panoStandaloneModal = null, Uo(e), p.raf && (cancelAnimationFrame(p.raf), w.raf += 1), P == null || P(), h.removeEventListener("pointerdown", $), h.removeEventListener("pointermove", X), h.removeEventListener("pointerup", ie), h.removeEventListener("pointercancel", ie), h.removeEventListener("lostpointercapture", xe), h.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), be.forEach((K) => {
        d.removeEventListener(K, M, !0), h.removeEventListener(K, M, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), Ef(e, v) && (w.widget += 1), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, e.onRemoved = he, { ...w }, ua(e);
    }, e.__panoPreviewHooked = !0, e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, e.__panoDomPreview = { widget: v, root: f, canvas: h, requestDraw: R, state: p }, R(), !0;
  } catch {
    return t.__noAutoFallback === !0 ? (Zo(e, "Node 2.0 preview unavailable"), !1) : (ua(e), !1);
  }
}
function Ib(e, t = {}) {
  Ab(e, t);
}
function Eb(e, t, n) {
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
function zh(e) {
  return !!(e != null && e.prototype);
}
function ql(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Db(e, t = {}) {
  zh(e) || Ib(e, {
    ...t,
    onOpen: ql(e, t.onOpen)
  });
}
function Lb(e, t = {}) {
  if (!zh(e)) {
    Vf(e, {
      ...t,
      onOpen: ql(e, t.onOpen)
    });
    return;
  }
  Eb(e, "cutout_preview", (n) => {
    Vf(n, {
      ...t,
      onOpen: ql(n, t.onOpen)
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
}, Xn = "pen";
function Hf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Rb(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), f = Math.max(1, Number(n || 8));
  function d(v) {
    if (i.splice(0, i.length), a = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((p) => {
      i.push(String(p || ""));
    }), !i.length)) return;
    const y = Number(v.index);
    Number.isInteger(y) ? y === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, y)) : a = i.length - 1;
  }
  function h(v) {
    i[a] !== v && (i.splice(a + 1), i.push(v), i.length > c && i.shift(), a = i.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(v) {
      h(String(v || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const v = a - 1;
      return v < 0 || v >= i.length ? null : (a = v, i[a]);
    },
    redo() {
      const v = a + 1;
      return v < 0 || v >= i.length ? null : (a = v, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const v = i.length, y = Math.max(0, v - f), p = a >= 0 ? Math.max(0, Math.min(a, y)) : y, w = i.slice(p, p + f), N = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - p));
      return {
        version: 1,
        entries: w,
        index: N
      };
    },
    hydrate: d
  };
}
function tt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Ob() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Fb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const c = tt(i.z_index ?? i.zIndex, t.length);
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
function Vb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Hb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = tt(e.t, 0), i = tt(e.widthScale, null), a = tt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const c = tt(e.u, null), f = tt(e.v, null);
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
    const c = tt(e.u, null), f = tt(e.v, null);
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
function co(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = Hb(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function jb(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const h = co(e.points, t, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = co(e.points, t, 1);
  if (!c) return null;
  const f = co(e.rawPoints, t, 1), d = co(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: f || c.map((h) => ({ ...h })),
    processedPoints: d || c.map((h) => ({ ...h }))
  };
}
function zb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Vb(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = jb(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const c = tt(e.size, null), f = tt(e.opacity, null);
  if (c == null || f == null) return null;
  const d = String(e.id || "").trim(), h = String(e.actionGroupId || "").trim();
  if (!d || !h) return null;
  const v = tt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let p = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, tt(w.r, 0))),
      g: Math.max(0, Math.min(1, tt(w.g, 0))),
      b: Math.max(0, Math.min(1, tt(w.b, 0))),
      a: Math.max(0, Math.min(1, tt(w.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: h,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, f)),
    hardness: tt(e.hardness, null),
    flow: tt(e.flow, null),
    spacing: tt(e.spacing, null),
    createdAt: Math.trunc(tt(e.createdAt, 0)),
    color: p,
    radiusModel: y,
    radiusValue: v == null ? null : Math.max(0, v),
    geometry: a
  };
}
function jf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = zb(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function $b(e) {
  if (!e || typeof e != "object") return null;
  const t = tt(e.u0, null), n = tt(e.v0, null), i = tt(e.u1, null), a = tt(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const c = (d) => Math.max(0, Math.min(1, d)), f = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return f.u1 <= f.u0 || f.v1 <= f.v0 ? null : f;
}
function Bb(e) {
  const t = e || {};
  return {
    du: tt(t.du, 0) ?? 0,
    dv: tt(t.dv, 0) ?? 0,
    rot_deg: tt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, tt(t.scale, 1) ?? 1)
  };
}
function Ub(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const c = $b(e.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, tt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: Bb(e.transform)
  } : null;
}
function Kb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Ub(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function fa(e) {
  const t = Ob();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Fb(e.groups),
    paint: jf(e.paint, "paint"),
    mask: jf(e.mask, "mask"),
    raster_objects: Kb(e.raster_objects)
  };
}
function zf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Gb(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function $f(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = Gb((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Wb(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Pi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: zf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, f) => $f(c, f)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = zf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, f) => $f(c, f)).filter(Boolean);
  return Pi({
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
function Na(e = {}) {
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
function Jo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function qb(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Ur((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(p) {
    var w;
    return JSON.stringify({
      stateRevision: (p == null ? void 0 : p.stateRevision) || "",
      background: (p == null ? void 0 : p.background) || null,
      objects: Array.isArray((w = p == null ? void 0 : p.objectPass) == null ? void 0 : w.objects) ? p.objectPass.objects.map((N) => ({
        id: (N == null ? void 0 : N.id) || "",
        type: (N == null ? void 0 : N.type) || "",
        revision: (N == null ? void 0 : N.revision) || "",
        visible: (N == null ? void 0 : N.visible) !== !1,
        opacity: Number((N == null ? void 0 : N.opacity) ?? 1),
        zIndex: Number((N == null ? void 0 : N.zIndex) ?? 0),
        transform: (N == null ? void 0 : N.transform) || null,
        params: (N == null ? void 0 : N.params) || null
      })) : [],
      overlay: (p == null ? void 0 : p.overlay) || {}
    });
  }
  function f(p = {}) {
    const w = Wb(p), N = c(w);
    return a === N || !n.syncState(w) ? !1 : (i = w, a = N, !0);
  }
  function d(p = {}, w = {}) {
    if (!i) return null;
    const N = Na(p), P = Jo(w);
    return n.renderToTarget(t, N, P);
  }
  function h(p, w, N = {}, P = {}) {
    if (!p || !w || !i) return !1;
    const M = Na(N), V = Jo({
      ...P,
      width: Number((w == null ? void 0 : w.w) || (P == null ? void 0 : P.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (P == null ? void 0 : P.height) || 1)
    });
    return n.renderToContext(p, w, M, V);
  }
  function v() {
    var p;
    i = null, a = "", (p = n.clearState) == null || p.call(n);
  }
  function y() {
    var p;
    v(), (p = n.dispose) == null || p.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: f,
    renderFrame: d,
    renderToContext: h,
    snapshotScene: () => i,
    clearScene: v,
    dispose: y
  };
}
function Yb(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Xb(e, t = {}) {
  var h, v;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = Na((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((v = t == null ? void 0 : t.view) == null ? void 0 : v.output) || null, a = Jo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const f = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Yb(c, f, d);
}
function Zb(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = Na((n == null ? void 0 : n.view) || {}), f = !1, d = 0;
  function h() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), N = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), P = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), M = Jo({ width: w, height: N, dpr: P });
    return i.width = Math.max(1, Math.round(M.width * M.dpr)), i.height = Math.max(1, Math.round(M.height * M.dpr)), i.style.width = `${M.width}px`, i.style.height = `${M.height}px`, M;
  }
  function v() {
    if (f || !a) return !1;
    const w = h();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...w, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function y() {
    f || d || (d = requestAnimationFrame(() => {
      d = 0, v();
    }));
  }
  const p = typeof ResizeObserver == "function" ? new ResizeObserver(() => y()) : null;
  return p == null || p.observe(t), y(), {
    canvas: i,
    setView(w) {
      c = Na(w || {}), y();
    },
    getView() {
      return { ...c };
    },
    present: v,
    requestRender: y,
    unmount() {
      f = !0, d && cancelAnimationFrame(d), p == null || p.disconnect(), i.remove();
    }
  };
}
function Jb(e = {}) {
  const t = qb({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(xr(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, xr(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? xr(i.shot) : i == null ? void 0 : i.view;
      return Zb(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: xr(n.shot) } : n;
      return Xb(t, i);
    }
  };
}
function Yi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Qb(e = {}) {
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
function ey({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: f,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: h
}) {
  var I, T;
  const v = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: v,
    activePane: v ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: v ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, ($, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return y;
  const p = ((I = t.find(($) => a(e.paintColor, $.color))) == null ? void 0 : I.id) || "", w = !p, N = c(e.customPaintColor), P = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), M = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[M] ?? 10, R = h(), D = Array.from({ length: 8 }, ($, X) => e.customPaintHistory[X] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: p,
    customColorActive: w,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...f(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: P,
    alphaText: `${P}%`,
    historyEntries: D.map(($, X) => ({
      index: X,
      color: $ ? { cssColor: i($, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: R,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function ty({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function ny({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: f,
  notes: d,
  visibilityRows: h,
  uiSettings: v,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: f,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: h,
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function ry({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: h,
  isExternalSticker: v,
  isStickerHidden: y,
  canRestoreSelectedToInitial: p,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let N = [];
  if (n.length > 1)
    N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (i === "stroke")
    N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (N = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], v(t) || (N.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), N.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), v(t)) {
      const I = p(), T = y(t);
      N.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: I ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !I
      }), N.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? w.eye : w.eye_dashed
      });
    }
    N.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed }), v(t) || N.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    N = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!h,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((I) => ({ value: I, label: I, active: d === I }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const P = a.corners.map((I) => I.x), M = a.corners.map((I) => I.y), V = Math.min(...P), R = Math.max(...P), D = Math.max(...M);
  return {
    visible: !0,
    left: (V + R) * 0.5,
    top: D + 18,
    items: N,
    anchor: { minX: V, maxX: R, maxY: D }
  };
}
const Ue = {
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  // View toggle
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  play: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.25 3.58c0-.79.86-1.27 1.52-.86l5.17 3.17a1 1 0 0 1 0 1.7L6.77 10.76c-.66.4-1.52-.07-1.52-.86V3.58Z' fill='currentColor'/></svg>",
  pause: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 3.25v9.5M10.5 3.25v9.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='1.8'/></svg>",
  volume: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><path d='M11 5L6 9H2v6h4l5 4V5z'/></svg>",
  volume2: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><path d='M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'/></svg>",
  volume_muted: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><path d='M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6'/></svg>",
  loop: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M12.25 5.25h-6a2.5 2.5 0 0 0-2.5 2.5v.25'/><path d='m10.5 3.5 1.75 1.75L10.5 7'/><path d='M3.75 10.75h6a2.5 2.5 0 0 0 2.5-2.5V8'/><path d='m5.5 12.5-1.75-1.75L5.5 9'/></svg>",
  // Left toolbar
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  // Floating right
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, Ti = {
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
    const t = e, n = Pt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Pe(), Ii(P0(e.tag), Qd({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, iy = { class: "pano-floating-right" }, ay = ["data-settled"], oy = ["data-ready", "data-settled"], sy = ["aria-label", "data-tip", "innerHTML"], ly = {
  key: 1,
  class: "pano-camera-preview-label"
}, cy = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Ie(et, null, [
      ue("div", iy, [
        (Pe(!0), Ie(et, null, Gt(e.buttons, (i) => (Pe(), Ii(Ti, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      uc(ue("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ue("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Nt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ue("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Pe(), Ie("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, sy)) : on("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Pe(), Ie("div", ly, Mt(e.preview.label || "Preview unavailable"), 1)) : on("", !0)
        ], 14, oy)
      ], 8, ay), [
        [gc, e.preview.visible]
      ])
    ], 64));
  }
}, uy = ["aria-label"], fy = { class: "pano-canvas-confirm-title" }, dy = { class: "pano-canvas-confirm-text" }, hy = { class: "pano-canvas-confirm-actions" }, py = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, my = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Eo(null), i = /* @__PURE__ */ Eo(null);
    let a = null;
    function c() {
      const p = i.value;
      return p ? Array.from(p.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function f(p) {
      const w = i.value;
      if (!w) return;
      const N = w.querySelector(`[data-action='${p}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function d() {
      var M;
      const p = i.value;
      if (!p) return;
      const w = p.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const P = c()[0] || p;
      (M = P == null ? void 0 : P.focus) == null || M.call(P);
    }
    function h() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function v(p) {
      var R;
      if (p.defaultPrevented) return;
      if (p.key === "Escape") {
        p.preventDefault(), p.stopPropagation(), f("confirm-cancel");
        return;
      }
      if (p.key !== "Tab") return;
      const w = c(), N = i.value;
      if (!w.length) {
        p.preventDefault(), (R = N == null ? void 0 : N.focus) == null || R.call(N);
        return;
      }
      const P = w[0], M = w[w.length - 1], V = document.activeElement;
      if (p.shiftKey) {
        (V === P || V === N || !(N != null && N.contains(V))) && (p.preventDefault(), M.focus());
        return;
      }
      (V === M || !(N != null && N.contains(V))) && (p.preventDefault(), P.focus());
    }
    function y(p) {
      p.target === n.value && f("confirm-cancel");
    }
    return wi(() => t.model.visible, (p, w) => {
      if (p) {
        a = document.activeElement, lc(() => {
          d();
        });
        return;
      }
      w && h();
    }, { immediate: !0 }), dc(() => {
      h();
    }), (p, w) => e.model.visible === !0 ? (Pe(), Ie("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: ih(y, ["self"])
    }, [
      ue("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        ue("div", fy, Mt(e.model.title), 1),
        ue("div", dy, Mt(e.model.text), 1),
        ue("div", hy, [
          w[0] || (w[0] = ue("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ue("button", py, Mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, uy)
    ], 512)) : on("", !0);
  }
}, gy = ["data-paint-pane"], vy = ["hidden"], by = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], yy = ["aria-pressed", "disabled"], _y = ["hidden"], xy = { class: "pano-paint-color-pop-head" }, wy = { class: "pano-paint-color-field" }, Sy = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Ny = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, My = { class: "pano-paint-color-field" }, ky = { class: "pano-paint-alpha-wrap" }, Py = ["value"], Cy = { "data-paint-alpha-value": "" }, Ay = ["hidden"], Ty = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Iy = ["data-paint-history-index", "aria-label", "disabled"], Ey = ["data-paint-footer"], Dy = ["data-paint-group"], Ly = ["hidden"], Ry = ["value", "disabled"], Oy = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Fy = ["hidden"], Vy = {
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
    return (i, a) => (Pe(), Ie("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Pe(!0), Ie(et, null, Gt(e.panes, (c) => {
        var f;
        return Pe(), Ie("div", {
          key: c.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Pe(), Ie("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Pe(!0), Ie(et, null, Gt(e.paintSwatches, (d) => (Pe(), Ie("button", {
              key: d.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: Nt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, by))), 128)),
            ue("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Nt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, yy),
            ue("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Nt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ue("div", xy, [
                ue("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Nt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ue("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ue("div", wy, [
                ue("div", Sy, [
                  ue("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Nt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ue("div", Ny, [
                  ue("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Nt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ue("label", My, [
                a[1] || (a[1] = ue("span", null, "Opacity", -1)),
                ue("div", ky, [
                  ue("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Py),
                  ue("span", Cy, Mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ue("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ue("div", Ty, [
                  (Pe(!0), Ie(et, null, Gt(e.state.historyEntries || [], (d) => (Pe(), Ie("button", {
                    key: d.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: Nt(n(d.color))
                  }, null, 14, Iy))), 128))
                ])
              ], 8, Ay)
            ], 12, _y)
          ], 10, vy)) : on("", !0),
          ue("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            ue("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Pe(!0), Ie(et, null, Gt(c.tools, (d) => {
                var h;
                return Pe(), Ii(Ti, {
                  key: `${c.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[c.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Dy),
            ue("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ue("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Nt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Ry),
              ue("span", Oy, Mt(e.state.sizeText || "10"), 1)
            ], 10, Ly),
            ue("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((f = e.state.clearVisible) == null ? void 0 : f[c.key]) ?? !c.clearHidden)
            }, [
              xt(Ti, {
                icon: gi(Ue).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Fy)
          ], 8, Ey)
        ], 10, gy);
      }), 128))
    ], 2));
  }
}, Hy = {
  key: 0,
  class: "pano-cutout-menu"
}, jy = ["innerHTML"], zy = ["data-aspect"], $y = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], By = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Ie("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Nt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Pe(!0), Ie(et, null, Gt(e.model.items || [], (i) => (Pe(), Ie(et, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Pe(), Ie("div", Hy, [
          ue("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: i.icon
          }, null, 8, jy),
          ue("div", {
            class: gt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Pe(!0), Ie(et, null, Gt(i.choices || [], (a) => (Pe(), Ie("button", {
              key: a.value,
              class: gt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, Mt(a.label), 11, zy))), 128))
          ], 2)
        ])) : (Pe(), Ie("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0,
          innerHTML: i.icon
        }, null, 8, $y))
      ], 64))), 128))
    ], 4));
  }
}, Uy = {
  class: "pano-side",
  "data-side": ""
}, Ky = { class: "pano-side-head" }, Gy = ["innerHTML"], Wy = {
  key: 0,
  class: "pano-side-scroll"
}, qy = { class: "pano-inspector" }, Yy = { class: "pano-ui-row pano-coverage-row" }, Xy = ["data-selected"], Zy = ["aria-pressed", "disabled"], Jy = ["aria-pressed", "disabled"], Qy = {
  key: 0,
  class: "pano-section-title"
}, e_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, t_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, n_ = ["disabled"], r_ = ["innerHTML"], i_ = ["hidden"], a_ = ["data-selection-id", "innerHTML"], o_ = {
  key: 2,
  class: "pano-state-actions"
}, s_ = ["disabled"], l_ = ["innerHTML"], c_ = ["data-key"], u_ = ["min", "max", "step", "value", "disabled", "data-param-key"], f_ = ["min", "max", "step", "value", "disabled", "data-param-key"], d_ = { class: "pano-visibility-section" }, h_ = { class: "pano-visibility-stack" }, p_ = ["data-visibility-row"], m_ = { class: "pano-visibility-name" }, g_ = ["innerHTML"], v_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], b_ = ["open"], y_ = ["innerHTML"], __ = { class: "pano-ui-settings-body" }, x_ = { class: "pano-ui-row" }, w_ = ["data-selected"], S_ = ["aria-pressed"], N_ = ["aria-pressed"], M_ = { class: "pano-ui-row" }, k_ = ["data-selected"], P_ = ["aria-pressed"], C_ = ["aria-pressed"], A_ = { class: "pano-ui-row" }, T_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, I_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, E_ = { class: "pano-picker-label" }, D_ = ["hidden"], L_ = ["data-quality"], R_ = {
  key: 1,
  class: "pano-side-footer"
}, O_ = ["data-action"], F_ = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e;
    function n(d) {
      return String(d || "").replace(/[&<>"']/g, (h) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[h]);
    }
    const i = Pt(() => `<span class="pano-side-title-icon" aria-hidden="true">${Ue.globe}</span><span>${n(t.nodeTitle)}</span>`), a = Pt(() => {
      const d = t.model;
      return !d || typeof d != "object" ? !1 : Object.keys(d).length > 0 && !!d.coverage;
    });
    function c(d) {
      return { "--v": `${Number((d == null ? void 0 : d.fillPct) || 0)}%` };
    }
    function f(d, h) {
      return (h == null ? void 0 : h.paramsDisabled) === !0 || (d == null ? void 0 : d.enabled) === !1;
    }
    return (d, h) => {
      var v, y, p, w, N;
      return Pe(), Ie("div", Uy, [
        ue("div", Ky, [
          ue("div", {
            class: "pano-side-title",
            innerHTML: i.value
          }, null, 8, Gy),
          h[0] || (h[0] = ue("div", { class: "pano-side-actions" }, null, -1))
        ]),
        h[13] || (h[13] = ue("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Pe(), Ie("div", Wy, [
          ue("div", qy, [
            h[12] || (h[12] = ue("div", { class: "pano-section-title" }, [
              ue("span", null, "Scene")
            ], -1)),
            ue("div", Yy, [
              h[1] || (h[1] = ue("label", null, "Coverage", -1)),
              ue("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                ue("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, Zy),
                ue("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, Jy)
              ], 8, Xy)
            ]),
            e.model.transformTitle !== !1 ? (Pe(), Ie("div", Qy, [...h[2] || (h[2] = [
              ue("span", null, "Transform", -1)
            ])])) : on("", !0),
            e.model.selectionPicker ? (Pe(), Ie("div", e_, [
              ue("label", null, Mt(e.model.selectionPicker.label), 1),
              ue("div", t_, [
                ue("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ue("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, r_),
                  h[3] || (h[3] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, n_),
                ue("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Pe(!0), Ie(et, null, Gt(e.model.selectionPicker.items || [], (P) => (Pe(), Ie("button", {
                    key: P.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: P.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": P.id,
                    innerHTML: P.labelHtml
                  }, null, 10, a_))), 128))
                ], 8, i_)
              ])
            ])) : on("", !0),
            e.model.copyStateButton ? (Pe(), Ie("div", o_, [
              ue("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                ue("span", {
                  innerHTML: gi(Ue).copy
                }, null, 8, l_),
                ue("span", null, Mt(e.model.copyStateButton.label), 1)
              ], 8, s_)
            ])) : on("", !0),
            ue("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Pe(!0), Ie(et, { key: 0 }, Gt(e.model.notes, (P) => (Pe(), Ie("div", {
                key: P,
                class: "pano-param-note"
              }, Mt(P), 1))), 128)) : (Pe(!0), Ie(et, { key: 1 }, Gt(e.model.params || [], (P) => (Pe(), Ie("div", {
                key: P.key,
                class: "pano-field",
                "data-key": P.key
              }, [
                ue("label", null, Mt(P.label), 1),
                ue("input", {
                  type: "range",
                  min: P.min,
                  max: P.max,
                  step: P.step,
                  value: P.value,
                  disabled: f(P, e.model),
                  style: Nt(c(P)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": P.key
                }, null, 12, u_),
                ue("input", {
                  type: "number",
                  min: P.min,
                  max: P.max,
                  step: P.step,
                  value: P.displayValue,
                  disabled: f(P, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": P.key
                }, null, 8, f_)
              ], 8, c_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Pe(), Ie(et, { key: 3 }, [
              h[5] || (h[5] = ue("div", { class: "pano-divider" }, null, -1)),
              ue("div", d_, [
                h[4] || (h[4] = ue("div", { class: "pano-section-title" }, [
                  ue("span", null, "Layers")
                ], -1)),
                ue("div", h_, [
                  (Pe(!0), Ie(et, null, Gt(e.model.visibilityRows, (P) => (Pe(), Ie("div", {
                    key: P.key,
                    class: gt(["pano-visibility-row", { "is-hidden": P.visible === !1, "is-disabled": P.enabled === !1 }]),
                    "data-visibility-row": P.key
                  }, [
                    ue("span", m_, [
                      ue("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: P.icon
                      }, null, 8, g_),
                      ue("span", null, Mt(P.label), 1)
                    ]),
                    ue("button", {
                      class: gt(["pano-visibility-toggle", { active: P.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": P.key,
                      "aria-label": P.ariaLabel,
                      "aria-pressed": P.visible === !0 ? "true" : "false",
                      "data-tip": P.tip,
                      disabled: P.enabled === !1,
                      innerHTML: P.visible === !0 ? gi(Ue).eye : gi(Ue).eye_dashed
                    }, null, 10, v_)
                  ], 10, p_))), 128))
                ])
              ])
            ], 64)) : on("", !0),
            e.model.uiSettings ? (Pe(), Ie("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ue("summary", null, [
                h[6] || (h[6] = ue("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ue("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: gi(Ue).chevron
                }, null, 8, y_)
              ]),
              ue("div", __, [
                ue("div", x_, [
                  h[7] || (h[7] = ue("label", null, "Drag X", -1)),
                  ue("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, S_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, N_)
                  ], 8, w_)
                ]),
                ue("div", M_, [
                  h[8] || (h[8] = ue("label", null, "Drag Y", -1)),
                  ue("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, P_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, C_)
                  ], 8, k_)
                ]),
                ue("div", A_, [
                  h[10] || (h[10] = ue("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ue("div", T_, [
                    ue("button", I_, [
                      ue("span", E_, Mt(e.model.uiSettings.qualityLabel), 1),
                      h[9] || (h[9] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ue("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Pe(!0), Ie(et, null, Gt(e.model.uiSettings.qualityOptions || [], (P) => (Pe(), Ie("button", {
                        key: P.value,
                        type: "button",
                        class: gt(["pano-picker-item", { active: P.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": P.value
                      }, Mt(P.label), 11, L_))), 128))
                    ], 8, D_)
                  ])
                ]),
                h[11] || (h[11] = ue("div", { class: "pano-ui-row" }, [
                  ue("span"),
                  ue("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, b_)) : on("", !0)
          ])
        ])) : on("", !0),
        (e.model.footerButtons || []).length ? (Pe(), Ie("div", R_, [
          (Pe(!0), Ie(et, null, Gt(e.model.footerButtons, (P) => (Pe(), Ie("button", {
            key: P.action,
            class: gt(["pano-btn", { "pano-btn-primary": P.primary === !0 }]),
            type: "button",
            "data-action": P.action
          }, Mt(P.label), 11, O_))), 128))
        ])) : on("", !0)
      ]);
    };
  }
}, V_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Ie("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: Nt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, Mt(e.model.text || ""), 7));
  }
}, H_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, j_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Pe(), Ie("div", H_, [
      (Pe(!0), Ie(et, null, Gt(e.buttons, (i) => uc((Pe(), Ii(Ti, {
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
}, z_ = ["data-video-ready"], $_ = { class: "pano-video-transport-shell" }, B_ = { class: "pano-video-controls-left" }, U_ = { class: "pano-video-filmstrip" }, K_ = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, G_ = ["src", "onLoad"], W_ = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, q_ = ["max", "value", "disabled"], Y_ = { class: "pano-video-controls-right" }, X_ = ["data-has-audio"], Z_ = { class: "pano-video-volume-pop" }, J_ = ["value", "disabled"], Q_ = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = Pt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause" : "Play";
    }), i = Pt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? "Pause video" : "Play video";
    }), a = Pt(() => {
      var D;
      return ((D = t.state) == null ? void 0 : D.playing) === !0 ? Ue.pause : Ue.play;
    }), c = Pt(() => {
      var D, I;
      return ((D = t.state) == null ? void 0 : D.muted) === !0 || Number(((I = t.state) == null ? void 0 : I.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), f = Pt(() => {
      var D, I, T;
      return ((D = t.state) == null ? void 0 : D.hasAudio) !== !0 ? Ue.volume : ((I = t.state) == null ? void 0 : I.muted) === !0 || Number(((T = t.state) == null ? void 0 : T.volume) ?? 1) <= 0 ? Ue.volume_muted : Ue.volume2;
    }), d = Pt(() => {
      var D;
      return Math.max(0, Math.min(100, Number(((D = t.state) == null ? void 0 : D.progressPct) || 0)));
    }), h = Pt(() => ({ left: `${d.value}%` })), v = Pt(() => {
      var $, X;
      const D = ($ = t.state) == null ? void 0 : $.volumePct, I = Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) * 100, T = Number(D ?? I ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, T))}%`
      };
    }), y = Pt(() => {
      var T, $;
      const I = [
        String(((T = t.state) == null ? void 0 : T.currentTimeLabel) || "0:00"),
        String((($ = t.state) == null ? void 0 : $.durationLabel) || "0:00")
      ].reduce((X, oe) => Math.max(X, oe.length), 4);
      return `${Math.max(4, I)}ch`;
    }), p = Pt(() => ({ "--pano-video-time-ch": y.value })), w = Pt(() => {
      var T, $;
      const D = Array.isArray((T = t.state) == null ? void 0 : T.thumbnails) ? t.state.thumbnails : [];
      if (D.length) return D;
      const I = Math.max(7, Number((($ = t.state) == null ? void 0 : $.thumbnailCount) || 9));
      return Array.from({ length: I }, (X, oe) => ({
        id: `placeholder-${oe}`,
        src: "",
        label: ""
      }));
    }), N = /* @__PURE__ */ Eo(/* @__PURE__ */ new Set()), P = (D) => String((D == null ? void 0 : D.id) || (D == null ? void 0 : D.src) || (D == null ? void 0 : D.label) || ""), M = (D) => N.value.has(P(D)), V = (D) => {
      const I = new Set(N.value);
      I.add(P(D)), N.value = I;
    };
    wi(w, (D) => {
      const I = new Set(D.map(P)), T = /* @__PURE__ */ new Set();
      for (const $ of N.value)
        I.has($) && T.add($);
      N.value = T;
    }, { immediate: !0 });
    const R = Pt(() => {
      var D;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((D = t.state) == null ? void 0 : D.shellMaxWidthPx) || 640))}px`
      };
    });
    return (D, I) => (Pe(), Ie("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Nt(R.value)
    }, [
      I[1] || (I[1] = ue("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ue("div", $_, [
        ue("div", B_, [
          xt(Ti, {
            "extra-class": "pano-video-control",
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ue("div", {
            class: "pano-video-time pano-video-time-start",
            style: Nt(p.value)
          }, Mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ue("div", U_, [
          ue("div", K_, [
            (Pe(!0), Ie(et, null, Gt(w.value, (T) => (Pe(), Ie("div", {
              key: P(T),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !T.src,
                "is-loaded": T.src && M(T)
              }])
            }, [
              T.src ? (Pe(), Ie("img", {
                key: 0,
                src: T.src,
                alt: "",
                draggable: "false",
                onLoad: ($) => V(T)
              }, null, 40, G_)) : (Pe(), Ie("span", W_))
            ], 2))), 128))
          ]),
          ue("div", {
            class: "pano-video-playhead",
            style: Nt(h.value),
            "aria-hidden": "true"
          }, [...I[0] || (I[0] = [
            ue("span", { class: "pano-video-playhead-line" }, null, -1),
            ue("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ue("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, q_)
        ]),
        ue("div", Y_, [
          ue("div", {
            class: "pano-video-time pano-video-time-end",
            style: Nt(p.value)
          }, Mt(e.state.durationLabel || "0:00"), 5),
          ue("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ue("div", Z_, [
              ue("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Nt(v.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, J_)
            ]),
            xt(Ti, {
              "extra-class": "pano-video-control",
              icon: f.value,
              label: c.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, X_)
        ])
      ])
    ], 14, z_));
  }
}, ex = { class: "pano-floating-top" }, tx = ["data-selected", "data-view-count"], nx = ["data-view", "aria-pressed", "aria-label", "disabled"], rx = ["innerHTML"], ix = { class: "label" }, ax = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Pe(), Ie("div", ex, [
        ue("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Pe(!0), Ie(et, null, Gt(e.buttons, (a) => uc((Pe(), Ie("button", {
            key: a.key,
            class: gt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ue("span", {
              innerHTML: a.icon
            }, null, 8, rx),
            ue("span", ix, Mt(a.label), 1)
          ], 10, nx)), [
            [gc, a.visible !== !1]
          ])), 128))
        ], 8, tx)
      ]);
    };
  }
};
function $h(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ue.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ue.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ue.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ue.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ue.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ue.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ue.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ue.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ue.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ue.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ue.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ue.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ue.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ue.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ue.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ue.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ue.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ue.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ue.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ue.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ue.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ue.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ue.lasso_tool }
        ]
      }
    ]
  };
}
const ox = ["aria-label"], sx = { class: "pano-stage-wrap" }, lx = {
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
    const d = /* @__PURE__ */ Eo(null), h = Pt(() => n.readOnly === !0), v = Pt(() => n.shellPreset || $h(n.type)), y = Pt(() => {
      var I;
      const D = Array.isArray((I = v.value) == null ? void 0 : I.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return h.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ue.fullscreen
      }), D;
    });
    function p() {
      const D = d.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((I) => I instanceof HTMLElement ? !I.hidden && I.tabIndex >= 0 && I.offsetParent !== null : !1) : [];
    }
    function w() {
      var T;
      const I = p()[0] || d.value;
      (T = I == null ? void 0 : I.focus) == null || T.call(I);
    }
    function N() {
      var D;
      f != null && f.isConnected && ((D = f.focus) == null || D.call(f)), f = null;
    }
    function P(D) {
      var I, T, $, X;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const oe = p();
          if (!oe.length) {
            D.preventDefault(), (T = (I = d.value) == null ? void 0 : I.focus) == null || T.call(I);
            return;
          }
          const ie = oe[0], xe = oe[oe.length - 1], A = document.activeElement;
          if (D.shiftKey) {
            (A === ie || A === d.value || !(($ = d.value) != null && $.contains(A))) && (D.preventDefault(), xe.focus());
            return;
          }
          (A === xe || !((X = d.value) != null && X.contains(A))) && (D.preventDefault(), ie.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function M() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function V() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function R(D) {
      document.removeEventListener("keydown", P), D ? (f || (f = document.activeElement), M(), document.addEventListener("keydown", P), lc(() => {
        w();
      })) : (V(), N());
    }
    return Td(() => {
      R(n.open);
    }), dc(() => {
      V(), document.removeEventListener("keydown", P), N();
    }), wi(() => n.open, (D) => {
      R(D);
    }), (D, I) => e.open ? (Pe(), Ie("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: I[0] || (I[0] = ih((T) => i("close"), ["self"]))
    }, [
      ue("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ue("div", sx, [
          I[1] || (I[1] = a1('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          h.value ? on("", !0) : (Pe(), Ie(et, { key: 0 }, [
            xt(j_, {
              buttons: e.uiState.toolButtons || v.value.toolButtons || []
            }, null, 8, ["buttons"]),
            xt(Vy, {
              "paint-swatches": e.paintSwatches,
              panes: v.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          xt(Q_, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          xt(ax, {
            buttons: e.uiState.viewButtons || v.value.viewButtons || []
          }, null, 8, ["buttons"]),
          xt(cy, {
            buttons: e.uiState.floatingButtons || y.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          xt(By, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          xt(V_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          xt(my, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? on("", !0) : (Pe(), Ii(F_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, ox)
    ])) : on("", !0);
  }
}, Qo = "state_json", Or = "sticker_image_1", xl = "external_image", wl = "pano_sticker_input_images", To = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], It = Math.PI / 180, yr = 180 / Math.PI, es = 24, cx = 4, ux = 4, uo = /* @__PURE__ */ new Map(), Bf = /* @__PURE__ */ new Map(), fo = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), fx = 12, Ot = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Source: vercel.com/geist/icons
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function Ft(e) {
  return Number(e) === 180 ? 180 : 360;
}
function dx(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function hx(e) {
  return 1 - Math.pow(1 - e, 3);
}
function px(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = _r.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (_r.delete(t), _r.set(t, n), n);
}
function mx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (_r.delete(n), _r.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); _r.size > fx; ) {
      const a = _r.keys().next().value;
      if (!a) break;
      _r.delete(a);
    }
}
function gx(e) {
  return e * e * e;
}
function zn(e, t, n) {
  return { x: e, y: t, z: n };
}
function ho(e, t) {
  return zn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function po(e, t) {
  return zn(e.x * t, e.y * t, e.z * t);
}
function kn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function mo(e, t) {
  return zn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function fi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return zn(e.x / t, e.y / t, e.z / t);
}
function En(e, t) {
  const n = e * It, i = t * It, a = Math.cos(i);
  return zn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function go(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * yr),
    pitch: q(Math.asin(q(e.y, -1, 1)) * yr, -90, 90)
  };
}
function Zn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, f = t[i].y, d = t[a].x, h = t[a].y;
    f > e.y != h > e.y && e.x < (d - c) * (e.y - f) / (h - f || 1e-6) + c && (n = !n);
  }
  return n;
}
function vr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Sl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), f = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return vr(e, t);
  const h = q((c * i + f * a) / d, 0, 1), v = Number(t.x || 0) + i * h, y = Number(t.y || 0) + a * h, p = Number(e.x || 0) - v, w = Number(e.y || 0) - y;
  return p * p + w * w;
}
function Jn(e, t, n) {
  return e + (t - e) * n;
}
function Dn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function vx(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let vo = { fillStyle: "", url: "" };
function bx(e, t, n) {
  if (vo.url && vo.fillStyle === String(e || ""))
    return vo.url;
  const i = vx(`
<svg xmlns="http://www.w3.org/2000/svg" width="${es}" height="${es}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return vo = { fillStyle: String(e || ""), url: i }, i;
}
function Io(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function dn(e) {
  return {
    r: q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Ut(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function yx(e) {
  return To.some((t) => Io(e, t.color));
}
function Nl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = q(Number(t), 0, 1), c = q(Number(n), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const f = Math.floor(i * 6), d = i * 6 - f, h = c * (1 - a), v = c * (1 - d * a), y = c * (1 - (1 - d) * a);
  switch (f % 6) {
    case 0:
      return { r: c, g: y, b: h };
    case 1:
      return { r: v, g: c, b: h };
    case 2:
      return { r: h, g: c, b: y };
    case 3:
      return { r: h, g: v, b: c };
    case 4:
      return { r: y, g: h, b: c };
    default:
      return { r: c, g: h, b: v };
  }
}
function Ml(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), f = a - c;
  let d = 0;
  f > 1e-6 && (a === t ? d = ((n - i) / f + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / f + 2) / 6 : d = ((t - n) / f + 4) / 6);
  const h = a <= 1e-6 ? 0 : f / a;
  return { h: d, s: h, v: a };
}
function _x(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Uf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function xx(e, t) {
  const n = Uf(e, 1), i = Uf(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), f = Math.max(1, Math.round(i * a)), d = (p, w) => w ? d(w, p % w) : p, h = d(c, f) || 1, v = Math.max(1, Math.round(c / h)), y = Math.max(1, Math.round(f / h));
  return `${v}:${y}`;
}
function ta(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * It, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * It;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function wx(e) {
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
function Hr(e) {
  const t = ta(e);
  return wx(t) || xx(t, 1);
}
function Bh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Hr(t), t;
}
function Xi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Hr(e);
}
let bo = null;
function Sx() {
  return bo || (bo = new Promise((e) => {
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
  }), bo);
}
const Uh = "pano_suite.ui_settings.v1", Kh = "pano_suite.node_grid_visibility.v1";
let mi = null, Ln = null, yo = { text: null, parsed: null };
function da(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Nx() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Uh)) || "").trim();
    if (!t) return mi ? da(mi) : null;
    const n = JSON.parse(t), i = da(n);
    return mi = i, i;
  } catch {
    return mi ? da(mi) : null;
  }
}
function Mx(e) {
  var n;
  const t = da(e);
  mi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Uh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Gh() {
  var e;
  if (Ln && typeof Ln == "object")
    return Ln;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Kh)) || "").trim();
    if (!t)
      return Ln = {}, Ln;
    const n = JSON.parse(t);
    return Ln = n && typeof n == "object" ? n : {}, Ln;
  } catch {
    return Ln = {}, Ln;
  }
}
function kx(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Gh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Px(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Gh();
  i[n] = !!t, Ln = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Kh, JSON.stringify(i));
  } catch {
  }
}
function Cx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Ax(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Tx(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Kf(e) {
  const { paintCount: t, maskCount: n } = Tx(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Gf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Ix(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Bh(t)) : [];
}
function Ex(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Nx(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ft(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: fa(null),
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
    if (yo.text === f ? d = yo.parsed : (d = JSON.parse(f), yo = { text: f, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return c;
    const h = {
      ...c,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Cx(d.assets),
      stickers: Ax(d.stickers),
      shots: Ix(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: fa(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var y;
          const v = String(((y = d.ui_settings) == null ? void 0 : y.preview_quality) || "balanced");
          return v === "draft" || v === "balanced" || v === "high" ? v : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...c.active }
    };
    return a && (h.ui_settings = da({ ...h.ui_settings, ...a })), h.output_preset = Xl(t, Number(h.output_preset || c.output_preset)), h.bg_color = String(n || h.bg_color || c.bg_color), h.coverage = Ft(i), delete h.editor_history, h;
  } catch {
    return yo = { text: f, parsed: null }, c;
  }
}
function bn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Tc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = bn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, f, d, h, v, y, p, w, N, P;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (h = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || h.call(d), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), (p = (y = e.graph) == null ? void 0 : y.setDirtyCanvas) == null || p.call(y, !0, !0), (P = (N = (w = wr) == null ? void 0 : w.canvas) == null ? void 0 : N.setDirty) == null || P.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Dx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Wf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Lx(e) {
  var N, P, M, V, R;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = bn(e, "coverage"), n = bn(e, "bg_color"), i = bn(e, Qo), a = bn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), f = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && Dx(c) && (Wf(f) || f === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let v = "360";
  if (Wf(f))
    try {
      const D = JSON.parse(f);
      v = String(Ft(D == null ? void 0 : D.coverage));
    } catch {
      v = "360";
    }
  const y = c, p = f, w = d;
  t.value = v, (N = t.callback) == null || N.call(t, v), n.value = y, (P = n.callback) == null || P.call(n, y), i.value = p, (M = i.callback) == null || M.call(i, p), a && (a.value = w, (V = a.callback) == null || V.call(a, w)), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function kl(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Rx(e, t) {
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
function Ox(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, f;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (f = i.parentEl) != null && f.style && (i.parentEl.style.display = "none")));
  });
}
function Yl(e, t, n) {
  var c, f;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (f = a.parentEl) != null && f.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function _o(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Xl(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Wh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Fx(e, t) {
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
function Vx(e, t, n = null) {
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
  return !i && n != null && (i = Fx(e == null ? void 0 : e.graph, n)), i;
}
function Ma(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = yn) == null ? void 0 : a.apiURL) == "function" ? yn.apiURL(i) : i;
}
function Hx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function jx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function zx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Yh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Hx(t)) return [t];
  const { filename: n, subfolder: i } = jx(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Ma({
    filename: n,
    subfolder: i,
    type: c
  }));
  return zx([...a, t]);
}
function $x(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ma({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ha(e) {
  var i;
  const t = (i = wr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function Gr(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Gr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Ma({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Gr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ma(e);
}
function Bx(e, t = -1) {
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
    const a = Gr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function qf(e, t, n, i = null) {
  var p;
  const a = ha(e == null ? void 0 : e.id), c = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], f = Array.isArray(c) && c.length ? c[0] : null, d = Gr(f);
  if (!d) return null;
  const h = `__ui__${t}`, v = n.get(h);
  if (v && v.__panoSrc === d) return v;
  const y = new Image();
  return y.__panoSrc = d, y.onload = () => {
    typeof i == "function" && i(y);
  }, y.src = d, n.set(h, y), y;
}
function Ux(e, t) {
  var D, I;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((T) => String((T == null ? void 0 : T.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[a], f = c == null ? void 0 : c.link;
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const d = Wh(e.graph, f), { originId: h, originSlot: v } = qh(d);
  if (h == null) return { src: "", sourceType: "", inputName: n };
  const y = Vx(e, a, h), p = Number(v || 0);
  if (!y) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((D = wr) == null ? void 0 : D.getNodeImageUrls) == "function" ? wr.getNodeImageUrls(y) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const T = [];
    p >= 0 && p < w.length && T.push(w[p]), T.push(...w);
    const $ = Pl(T);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "appNodeImageUrls", inputName: n };
  }
  const N = ha((y == null ? void 0 : y.id) ?? h), P = Bx(N, p), M = Pl(P);
  if (M.length) return { src: M[0], srcCandidates: M, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(y == null ? void 0 : y.imgs) ? y.imgs : [];
  if (V.length) {
    const T = [];
    p >= 0 && p < V.length && T.push(V[p]), T.push(...V);
    const $ = Pl(T);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "nodeImgs", inputName: n };
  }
  const R = (I = y == null ? void 0 : y.widgets) == null ? void 0 : I.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
  if (R) {
    let T = Gr(R.value);
    if (T && !T.includes("/") && !T.includes(":") && (y.comfyClass === "LoadImage" || y.type === "LoadImage") && (T = yn.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`)), T) return { src: T, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Kx(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const c = Yh(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = String(t || "image"), d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  const h = new Image(), v = { srcRaw: a, resolvedSrc: "", img: h };
  e.__panoLinkedInputImageCache.set(f, v);
  let y = -1;
  const p = () => {
    var N, P;
    if (y += 1, y >= c.length) {
      try {
        (P = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, f);
      } catch {
      }
      return;
    }
    const w = c[y];
    v.resolvedSrc = w, h.src = w;
  };
  return h.onload = () => {
    var w;
    i == null || i(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, h.onerror = () => {
    var w, N;
    if (y + 1 < c.length) {
      p();
      return;
    }
    try {
      (N = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || N.call(w, f);
    } catch {
    }
  }, p(), h;
}
function Gx(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((P) => String(P || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), f = a.join(`
`), d = e.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === f && d.img) return d.img;
  const h = [], v = /* @__PURE__ */ new Set();
  if (a.forEach((P) => {
    Yh(P).forEach((M) => {
      const V = String(M || "").trim();
      !V || v.has(V) || (v.add(V), h.push(V));
    });
  }), !h.length) return null;
  const y = new Image(), p = { srcRaw: f, resolvedSrc: "", img: y };
  e.__panoLinkedInputImageCache.set(c, p);
  let w = -1;
  const N = () => {
    var M, V;
    if (w += 1, w >= h.length) {
      try {
        (V = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || V.call(M, c);
      } catch {
      }
      return;
    }
    const P = h[w];
    p.resolvedSrc = P, y.src = P;
  };
  return y.onload = () => {
    var P;
    i == null || i(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, y.onerror = () => {
    var P, M;
    if (w + 1 < h.length) {
      N();
      return;
    }
    try {
      (M = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || M.call(P, c);
    } catch {
    }
  }, N(), y;
}
function Xh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = Ux(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Cl(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = Xh(e, a), f = String(i || a.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return Gx(e, f, d, n);
  const h = String((c == null ? void 0 : c.src) || "").trim();
  return h ? Kx(e, f, h, n) : null;
}
async function pa(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, f = Rx(e, t);
  await Sx();
  const d = bn(e, "output_preset"), h = bn(e, "coverage"), v = bn(e, "bg_color"), y = bn(e, Qo), p = Ex(
    String((y == null ? void 0 : y.value) || ""),
    Xl(d == null ? void 0 : d.value, 2048),
    String((v == null ? void 0 : v.value) || "#00ff00"),
    Ft(h == null ? void 0 : h.value)
  );
  e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = 0, t === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(p.shots) ? p.shots : [], o = String(((s = p == null ? void 0 : p.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, N = w ? au(w, !1) : { width: 220, height: 132 }, P = $h(t), M = /* @__PURE__ */ ss({
    viewButtons: (P.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (P.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(P.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ot.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Ot.fullscreen,
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
      customColorCss: Dn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Dn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: N.width,
      height: N.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const R = z1(lx, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: f,
    shellPreset: P,
    paintSwatches: To.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Dn(r.color, 1)
    })),
    uiState: M,
    onClose: () => {
      ci();
    }
  });
  try {
    R.mount(V);
  } catch (r) {
    try {
      R.unmount();
    } catch {
    }
    throw V.remove(), r;
  }
  const D = V.querySelector(".pano-modal-overlay"), I = V.querySelector(".pano-modal"), T = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), $ = I == null ? void 0 : I.querySelector("[data-stage-background]"), X = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!D || !I || !T || !$ || !X)
    throw R.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const oe = document.createElement("div");
  oe.setAttribute("aria-hidden", "true"), oe.style.position = "absolute", oe.style.left = "0", oe.style.top = "0", oe.style.pointerEvents = "none", oe.style.zIndex = "12", oe.style.display = "none", oe.style.willChange = "transform,width,height,background,border-radius", X == null || X.appendChild(oe);
  const ie = document.createElement("div");
  ie.className = "pano-paint-size-preview", ie.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", ie.appendChild(xe), X == null || X.appendChild(ie);
  const A = T.getContext("2d"), be = Ur(), he = t === "cutout" ? Jb({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, fe = I.querySelector("[data-side]"), H = I.querySelector("[data-video-element]"), se = I.querySelector(".pano-floating-right"), B = I.querySelector("[data-selection-menu]"), ne = I.querySelector("[data-tooltip]"), K = I.querySelector("[data-camera-preview-host]"), le = I.querySelector("[data-paint-color-row]"), we = I.querySelector("[data-paint-color-pop]"), Ee = I.querySelector("[data-paint-color-sv]"), Re = I.querySelector("[data-paint-color-sv-cursor]"), Ke = I.querySelector("[data-paint-hue-strip]"), Je = I.querySelector("[data-paint-hue-handle]");
  let Qe = 0, it = 0;
  X == null || X.removeAttribute("data-stage-ready"), X == null || X.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", $.style.opacity = "0", a && (fe == null || fe.remove(), I.classList.add("pano-modal-readonly"));
  const Ht = () => {
    if (!u.customPaintSessionStart) return;
    if (Io(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (yx(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const r = [
      dn(u.customPaintColor),
      ...u.customPaintHistory.filter((o) => !Io(o, u.customPaintColor))
    ];
    u.customPaintHistory = r.slice(0, 8), u.customPaintSessionStart = null;
  }, Ct = (r = !1) => {
    !we || we.hidden || (r ? Ht() : u.customPaintSessionStart = null, we.hidden = !0, M.paintDock.colorPopOpen = !1);
  }, mn = () => {
    we && (we.hidden && (u.customPaintSessionStart = dn(u.customPaintColor)), we.hidden = !1, M.paintDock.colorPopOpen = !0);
  };
  I.addEventListener("pointerdown", (r) => {
    Za(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Ct(!0), t === "cutout" && u.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, $e(), ge())));
  });
  const sn = t === "stickers" ? p.active.selected_sticker_id : p.active.selected_shot_id, Kn = JSON.stringify(Gf(p)), u = {
    mode: "pano",
    selectedId: sn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ft(p.coverage),
    historyController: Rb(80, { entries: [Kn], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Xn,
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
    showGrid: kx(e == null ? void 0 : e.id, !0),
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
  }, O = he && K ? he.mount(K, { shot: null }) : null;
  t === "stickers" && (u.selectedId = null, p.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Y = document.createElement("canvas");
  Y.__panoFrameIdx = 0;
  const U = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, te = (r) => {
    const o = String(r || "default");
    T.style.cursor !== o && (T.style.cursor = o);
  }, J = {
    timer: 0,
    target: null
  }, me = {
    active: !1,
    depth: 0
  }, j = {
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
  }, _e = 4, Ne = 9, ke = [];
  let Te = 0;
  const Ve = () => {
    var x, S;
    const r = (x = X == null ? void 0 : X.getBoundingClientRect) == null ? void 0 : x.call(X), o = (S = se == null ? void 0 : se.getBoundingClientRect) == null ? void 0 : S.call(se), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, _ = l > 0 ? l + 14 + 12 : 72, b = Math.max(280, Math.floor(s - _ * 2));
    M.videoTransport.shellMaxWidthPx = b;
  }, at = () => {
    Te || (Te = window.requestAnimationFrame(() => {
      Te = 0, Ve();
    }));
  }, ft = () => {
    const r = Math.max(1, Number(M.videoTransport.fps || 24));
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
    return !!M.videoTransport.hasAudio;
  }, qe = typeof ResizeObserver < "u" ? new ResizeObserver(() => at()) : null;
  qe == null || qe.observe(X), se && (qe == null || qe.observe(se)), ke.push(() => {
    var r;
    Te && (window.cancelAnimationFrame(Te), Te = 0), (r = qe == null ? void 0 : qe.disconnect) == null || r.call(qe);
  }), at();
  const ln = () => {
    j.thumbnailJobId += 1, j.thumbnailSrc = "", M.videoTransport.thumbnails = [], M.videoTransport.thumbnailCount = Ne;
  }, vt = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      ln();
      return;
    }
    const m = px(l);
    if (m) {
      j.thumbnailSrc = l, M.videoTransport.thumbnails = m.thumbnails, M.videoTransport.thumbnailCount = m.thumbnailCount;
      return;
    }
    if (j.thumbnailSrc === l && Array.isArray(M.videoTransport.thumbnails) && M.videoTransport.thumbnails.length)
      return;
    const g = ++j.thumbnailJobId;
    j.thumbnailSrc = l, M.videoTransport.thumbnails = [], M.videoTransport.thumbnailCount = Ne;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((re) => {
      let pe = !1;
      const ae = (ve) => {
        pe || (pe = !0, re(ve));
      };
      _.addEventListener("loadedmetadata", () => ae(!0), { once: !0 }), _.addEventListener("canplay", () => ae(!0), { once: !0 }), _.addEventListener("error", () => ae(!1), { once: !0 }), _.src = l, _.load();
    }) || j.thumbnailJobId !== g) return;
    const x = Math.max(1, Number(_.videoWidth || 0)), S = Math.max(1, Number(_.videoHeight || 0));
    if (x < 1 || S < 1) return;
    const C = Math.max(0, Number(_.duration || o || 0)), k = document.createElement("canvas"), L = 46, F = Math.max(72, Math.round(x / S * L));
    k.width = F, k.height = L;
    const ee = k.getContext("2d");
    if (!ee) return;
    const z = [], W = (re) => new Promise((pe) => {
      let ae = !1;
      const ve = () => {
        ae || (ae = !0, pe());
      };
      _.addEventListener("seeked", ve, { once: !0 }), _.addEventListener("error", ve, { once: !0 });
      try {
        _.currentTime = re;
      } catch {
        ve();
      }
    });
    for (let re = 0; re < Ne; re += 1) {
      if (j.thumbnailJobId !== g) return;
      const pe = re / (Ne - 1), ae = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), C * pe)) : 0;
      if (await W(ae), j.thumbnailJobId !== g) return;
      ee.clearRect(0, 0, F, L), ee.drawImage(_, 0, 0, F, L), z.push({
        id: `thumb-${re}`,
        src: k.toDataURL("image/jpeg", 0.72),
        time: ae,
        label: Cs(ae)
      });
    }
    j.thumbnailJobId === g && (M.videoTransport.thumbnails = z, M.videoTransport.thumbnailCount = z.length || Ne, mx(l, {
      thumbnails: z,
      thumbnailCount: z.length || Ne,
      duration: C,
      fps: s
    }));
  }, jt = (r) => {
    const o = Math.max(1, Number(M.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, cn = (r) => {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return null;
    const o = Number(H.videoWidth || 0), s = Number(H.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const m = l.getContext("2d");
    if (!m) return null;
    for (m.drawImage(H, 0, 0, o, s), j.frameCache.set(r, l), j.frameCacheOrder = j.frameCacheOrder.filter((g) => g !== r), j.frameCacheOrder.push(r); j.frameCacheOrder.length > _e; ) {
      const g = j.frameCacheOrder.shift();
      g != null && j.frameCache.delete(g);
    }
    return l;
  }, Aa = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (Y.width !== s || Y.height !== l) && (Y.width = s, Y.height = l);
    const m = Y.getContext("2d");
    return m ? (m.clearRect(0, 0, s, l), m.drawImage(r, 0, 0, s, l), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, o != null && (j.presentedTime = Number(o || 0)), !0) : !1;
  }, Ei = (r) => {
    const o = jt(r), s = j.frameCache.get(o) || null;
    return s ? (j.currentFrameNumber = o, Aa(s, r)) : !1;
  };
  if (ke.push(() => {
    ln();
  }), H instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof H.requestVideoFrameCallback != "function" || H.__panoFramePumpActive) return;
      H.__panoFramePumpActive = !0;
      const b = (x, S) => {
        H.__panoFramePumpActive = !1;
        const C = Number((S == null ? void 0 : S.mediaTime) ?? H.currentTime ?? 0), k = jt(C), L = ft();
        j.mode === "scrub" ? Math.abs(C - Number(j.editorTime || 0)) <= L && (cn(k), Ei(j.editorTime), U.backgroundDirty = !0, U.dirty = !0, Wn({
          ready: !0,
          playing: !1,
          visible: ur(),
          currentTime: j.editorTime,
          duration: M.videoTransport.duration,
          frameCount: M.videoTransport.frameCount,
          fps: M.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (j.editorTime = C, j.presentedTime = C, j.requestedTime = null, j.currentFrameNumber = k, cn(k), j.frameCounter += 1, H.dataset.panoFrameIdx = String(j.frameCounter), U.backgroundDirty = !0, U.dirty = !0, Wn({
          ready: !0,
          playing: !H.paused && !H.ended,
          visible: ur(),
          currentTime: C,
          duration: M.videoTransport.duration,
          frameCount: M.videoTransport.frameCount,
          fps: M.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), U.running && (!H.paused || j.mode === "scrub") && r();
      };
      try {
        H.requestVideoFrameCallback(b);
      } catch {
        H.__panoFramePumpActive = !1;
      }
    }, o = () => {
      j.pendingPlaybackResume && (j.pendingPlaybackResume = !1, j.mode = "playback", j.requestedTime = null, Qr() && (U.backgroundDirty = !0, U.dirty = !0), H.play().catch(() => {
      }));
    }, s = () => {
      j.editorTime = Number(H.currentTime || 0), Number(H.readyState || 0) >= 2 && Qr() && (U.backgroundDirty = !0, U.dirty = !0), ei(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, l = () => {
      j.mode = "playback", j.seeking = !1, j.requestedTime = null, ei(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      j.mode === "playback" && Qr() && (U.backgroundDirty = !0, U.dirty = !0), ei(), ge({ cause: "frame_view", localOnly: !0 });
    }, g = () => {
      Wn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: j.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? M.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const b = j.seeking || j.pendingPlaybackResume || j.mode === "scrub";
      if (j.seeking = !1, !b) {
        j.requestedTime = null, r();
        return;
      }
      const x = Number(j.requestedTime ?? j.editorTime ?? 0), S = Number(H.currentTime || 0);
      if (Math.abs(S - x) > ft()) {
        As(x);
        return;
      }
      j.mode === "scrub" && (Qr(), U.backgroundDirty = !0, U.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), j.requestedTime = null, o(), r();
    };
    H.addEventListener("loadedmetadata", s), H.addEventListener("loadeddata", s), H.addEventListener("canplay", s), H.addEventListener("play", l), H.addEventListener("pause", m), H.addEventListener("volumechange", g), H.addEventListener("seeked", _), ke.push(() => H.removeEventListener("loadedmetadata", s)), ke.push(() => H.removeEventListener("loadeddata", s)), ke.push(() => H.removeEventListener("canplay", s)), ke.push(() => H.removeEventListener("play", l)), ke.push(() => H.removeEventListener("pause", m)), ke.push(() => H.removeEventListener("volumechange", g)), ke.push(() => H.removeEventListener("seeked", _));
  }
  function Zh() {
    M.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === u.primaryTool : s ? r.key === u.paintTool : l ? r.key === u.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function bs(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => Ga(s)) : !1;
  }
  function Cr(r) {
    const o = !!r;
    me.active !== o && (me.active = o, X.classList.toggle("drop-active", o));
  }
  function ys(r, o, s = u.viewFov, l = 140, m = 620) {
    const g = Mv(u.viewYaw, r), _ = o - u.viewPitch, b = s - u.viewFov, x = Math.hypot(g, _) + Math.abs(b) * 0.6, S = Math.round(q(l + x * 2.2, l, m));
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
  function Gn() {
    return t === "stickers" ? p.stickers : p.shots;
  }
  function zt() {
    const r = p.painting || (p.painting = fa(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Jh(r = "paint") {
    var m, g;
    const o = Array.isArray((g = (m = p.painting) == null ? void 0 : m[r]) == null ? void 0 : g.strokes) ? p.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function Qh() {
    return Jh("paint");
  }
  function Di(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Li(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function At(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Ri(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function _s() {
    var o;
    let r = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of zt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = p.painting) == null ? void 0 : o.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Ic(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = zt();
    let m = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return m ? o != null && (m.z_index = Math.max(0, Number(o || 0))) : (m = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? _s() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(m)), m;
  }
  function ep(r) {
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
  function tp() {
    const r = new Set(Qh()), s = zt().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: _s(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, m) => Number((l == null ? void 0 : l.z_index) || 0) - Number((m == null ? void 0 : m.z_index) || 0)), p.painting.groups = s, s;
  }
  function np(r, o, s) {
    var z;
    const l = (W) => (Number(W || 0) % 1 + 1) % 1, m = [];
    for (const W of s) {
      const re = W == null ? void 0 : W.geometry, pe = (re == null ? void 0 : re.geometryKind) === "lasso_fill" ? re == null ? void 0 : re.points : (re == null ? void 0 : re.processedPoints) || (re == null ? void 0 : re.rawPoints) || (re == null ? void 0 : re.points) || [];
      Array.isArray(pe) && m.push(...pe);
    }
    if (!m.length) return null;
    const g = l(((z = m[0]) == null ? void 0 : z.u) || 0);
    let _ = 0, b = 0;
    m.forEach((W) => {
      const re = l((W == null ? void 0 : W.u) || 0);
      _ += g + gn(re, g), b += Number((W == null ? void 0 : W.v) || 0);
    });
    const x = (_ / m.length % 1 + 1) % 1;
    let S = 1 / 0, C = -1 / 0, k = 1 / 0, L = -1 / 0;
    m.forEach((W) => {
      const re = l((W == null ? void 0 : W.u) || 0), pe = gn(re, x);
      S = Math.min(S, pe), C = Math.max(C, pe);
      const ae = Number((W == null ? void 0 : W.v) || 0);
      k = Math.min(k, ae), L = Math.max(L, ae);
    });
    const F = s.reduce((W, re) => {
      const pe = pr(String((re == null ? void 0 : re.toolKind) || "pen")), ae = nn[pe] || nn[Xn], ve = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ae == null ? void 0 : ae.sizeScale) ?? 1));
      return Math.max(W, ve);
    }, 0), ee = Math.max(35e-4, F / 2048);
    return {
      centerUv: { u: ((x + (S + C) * 0.5) % 1 + 1) % 1, v: q((k + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - S) * 0.5 + ee,
      halfH: (L - k) * 0.5 + ee,
      uvPad: ee
    };
  }
  function lr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const m = zt().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!m) return null;
    const g = s || xn(l, o);
    return m.frame = np(l, o, g), m.frame;
  }
  function qr() {
    var l;
    const r = (Array.isArray(p.stickers) ? p.stickers : []).map((m) => ({
      type: "sticker",
      id: String((m == null ? void 0 : m.id) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    })), o = tp().map((m) => ({
      type: "strokeGroup",
      id: String((m == null ? void 0 : m.id) || (m == null ? void 0 : m.actionGroupId) || ""),
      actionGroupId: String((m == null ? void 0 : m.actionGroupId) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    })), s = (Array.isArray((l = p.painting) == null ? void 0 : l.raster_objects) ? p.painting.raster_objects : []).filter((m) => String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => ({
      type: "rasterObject",
      id: String((m == null ? void 0 : m.id) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    }));
    return [...r, ...o, ...s].sort((m, g) => Number(m.z_index || 0) - Number(g.z_index || 0));
  }
  function xs(r = !0) {
    var s, l, m, g, _, b;
    const o = qr().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((l = (s = u.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((g = (m = u.interaction) == null ? void 0 : m.stroke) == null ? void 0 : g.layerKind) || "").trim(), C = String(((b = (_ = u.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      x && S === "paint" && C !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function ws(r = !0) {
    var b, x, S, C, k, L;
    const o = qr();
    if (!r) return o;
    const s = String(((x = (b = u.interaction) == null ? void 0 : b.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((C = (S = u.interaction) == null ? void 0 : S.stroke) == null ? void 0 : C.layerKind) || "").trim(), m = String(((L = (k = u.interaction) == null ? void 0 : k.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!s || l !== "paint" || m === "eraser" || o.some((F) => F.type === "strokeGroup" && String(F.actionGroupId || "") === s))
      return o;
    const g = lt();
    let _ = o.reduce((F, ee) => Math.max(F, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    return g && kt(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((F, ee) => Number((F == null ? void 0 : F.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0));
  }
  function rp() {
    return zt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => Xr(Di("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ip() {
    var r;
    return (Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => Yr(Li((o == null ? void 0 : o.id) || ""))).filter(Boolean);
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
  function ap() {
    var o, s, l, m;
    let r = null;
    try {
      const g = xs(), _ = ((m = (l = (s = (o = u.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, g)) == null ? void 0 : l.displayPaint) == null ? void 0 : m.canvas) || null;
      _ && (r = {
        source: _,
        revision: `${ii()}:${Ta()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Ta() {
    var m, g, _, b, x, S, C;
    const r = u.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Ec(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null, L = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), F = ((_ = k == null ? void 0 : k.rawPoints) == null ? void 0 : _.length) ?? ((b = k == null ? void 0 : k.points) == null ? void 0 : b.length) ?? 0, ee = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${L || "paint"}_${o}_live${ee}_${F}_${u.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((C = r == null ? void 0 : r.item) == null ? void 0 : C.id) || "");
    return `_${o}_${s || l || "active"}_${u.livePaintInteractionRevision}`;
  }
  function Ss() {
    const r = Array.isArray(p.shots) ? p.shots : [], o = Array.isArray(p.stickers) ? p.stickers : [];
    return [...r, ...o];
  }
  function un(r) {
    return !!r && Array.isArray(p.shots) && p.shots.includes(r);
  }
  function bt(r) {
    return !!r && Array.isArray(p.stickers) && p.stickers.includes(r);
  }
  function en() {
    var r;
    return Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : [];
  }
  function Yr(r) {
    const o = At(r);
    if (!o) return null;
    const s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Li(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function $t(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = At(r.rasterObjectId || r.id || "");
    return !!o && !!Yr(Li(o));
  }
  function Xr(r) {
    const o = Ri(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = zt().find((m) => String((m == null ? void 0 : m.id) || (m == null ? void 0 : m.actionGroupId) || "") === s || String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Di("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function kt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!Xr(Di(s, o));
  }
  function xn(r, o = null) {
    const s = Ri(r, o), l = String(s.actionGroupId || "").trim();
    return l ? si(s.layerKind).filter((m) => String((m == null ? void 0 : m.actionGroupId) || "").trim() === l) : [];
  }
  function op(r, o = "paint") {
    var g, _, b;
    const s = String(r || "").trim(), m = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${u.mode}:${ji()}`;
    if (u.mode === "frame") {
      const x = Be(), S = String((x == null ? void 0 : x.id) || ""), C = x ? Tt(x) : null;
      return `${m}:frame:${S}:${Math.round(Number((C == null ? void 0 : C.x) || 0))}:${Math.round(Number((C == null ? void 0 : C.y) || 0))}:${Math.round(Number((C == null ? void 0 : C.w) || 0))}:${Math.round(Number((C == null ? void 0 : C.h) || 0))}:${Math.round(Number(((g = u.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = u.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = u.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Ia(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: q(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function gn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Ns(r, o = null, s = null) {
    var S;
    const l = Ri(r, o), m = Array.isArray(s) ? s : xn(l.actionGroupId, l.layerKind), g = [];
    if (m.forEach((C) => {
      const k = (C == null ? void 0 : C.geometry) || null, L = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(L) && g.push(...L);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = g[0]) == null ? void 0 : S.u) || 0);
    let b = 0, x = 0;
    return g.forEach((C) => {
      b += _ + gn(Number((C == null ? void 0 : C.u) || 0), _), x += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (b / g.length % 1 + 1) % 1,
      v: q(x / g.length, 0, 1)
    };
  }
  function Ea(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(r.u || 0), m), b = Number(r.v || 0) - g, x = Number(l || 0) * It, S = Math.cos(x), C = Math.sin(x), k = Math.max(0.02, Number(s || 1)), L = (_ * S - b * C) * k, F = (_ * C + b * S) * k;
    return {
      ...r,
      u: ((m + L) % 1 + 1) % 1,
      v: q(g + F, 0, 1)
    };
  }
  function Dc(r, o, s, l = null, m = null, g = null) {
    const _ = Ri(r, m), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = si(_.layerKind), S = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let C = !1;
    if (x.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b) return;
      const L = (S == null ? void 0 : S.get(String((k == null ? void 0 : k.id) || ""))) || k, F = k == null ? void 0 : k.geometry, ee = L == null ? void 0 : L.geometry;
      !F || !ee || (Array.isArray(ee.points) && (F.points = ee.points.map((z) => Ia(z, o, s)), C = !0), Array.isArray(ee.rawPoints) && (F.rawPoints = ee.rawPoints.map((z) => Ia(z, o, s)), C = !0), Array.isArray(ee.processedPoints) && (F.processedPoints = ee.processedPoints.map((z) => Ia(z, o, s)), C = !0));
    }), C && g) {
      const k = zt().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      k && (k.frame = null);
    }
    return C;
  }
  function Lc(r, o = 1, s = 0, l = null, m = null, g = null) {
    const _ = Ri(r, m), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = si(_.layerKind), S = Array.isArray(l) ? l : xn(b, _.layerKind), C = Array.isArray(S) ? new Map(S.map((F) => [String((F == null ? void 0 : F.id) || ""), F])) : null, k = (g == null ? void 0 : g.centerUv) ?? Ns(b, _.layerKind, S);
    let L = !1;
    if (x.forEach((F) => {
      if (String((F == null ? void 0 : F.actionGroupId) || "").trim() !== b) return;
      const ee = (C == null ? void 0 : C.get(String((F == null ? void 0 : F.id) || ""))) || F, z = F == null ? void 0 : F.geometry, W = ee == null ? void 0 : ee.geometry;
      !z || !W || (Array.isArray(W.points) && (z.points = W.points.map((re) => Ea(re, k, o, s)), L = !0), Array.isArray(W.rawPoints) && (z.rawPoints = W.rawPoints.map((re) => Ea(re, k, o, s)), L = !0), Array.isArray(W.processedPoints) && (z.processedPoints = W.processedPoints.map((re) => Ea(re, k, o, s)), L = !0));
    }), L && g) {
      const F = zt().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === b);
      F && (F.frame = null);
    }
    return L;
  }
  function Rc(r, o, s, l = null) {
    const m = At(r);
    if (!m) return !1;
    const g = en().find((C) => String((C == null ? void 0 : C.id) || "").trim() === m);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, b = (_ == null ? void 0 : _.transform) || {}, x = Number(b.du || 0) + Number(o || 0), S = q(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = x, g.transform.dv = S, !0;
  }
  function sp(r, o = 1, s = null) {
    const l = At(r);
    if (!l) return !1;
    const m = en().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!m) return !1;
    const g = s && typeof s == "object" ? s : m, _ = (g == null ? void 0 : g.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), x = q(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.scale = x, !0;
  }
  function lt() {
    const r = String(u.selectedId || "");
    if (!r) return null;
    const o = Xr(r);
    if (o) return o;
    const s = Yr(r);
    return s || (t === "cutout" ? Ss().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Gn().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function wn() {
    const r = Array.isArray(u.selectedIds) && u.selectedIds.length ? u.selectedIds : u.selectedId ? [u.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const m = String(l || "").trim();
      if (!m || s.has(m)) return;
      s.add(m);
      const g = m === String(u.selectedId || "") ? lt() : Xr(m) || Yr(m) || (t === "cutout" ? Ss().find((_) => String((_ == null ? void 0 : _.id) || "") === m) : Gn().find((_) => String((_ == null ? void 0 : _.id) || "") === m));
      g && o.push(g);
    }), o;
  }
  function Ms(r = null) {
    const o = Array.isArray(r) ? r : wn();
    if (!o || o.length < 2) return null;
    const s = o.map((S) => Dt(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), m = s.flatMap((S) => S.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), g = Math.min(...l), _ = Math.max(...l), b = Math.min(...m), x = Math.max(...m);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + _) * 0.5, y: (b + x) * 0.5 },
      corners: [
        { x: g, y: b },
        { x: _, y: b },
        { x: _, y: x },
        { x: g, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + _) * 0.5, y: b, a: { x: g, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + x) * 0.5, a: { x: _, y: b }, b: { x: _, y: x } },
        { edge: "bottom", x: (g + _) * 0.5, y: x, a: { x: _, y: x }, b: { x: g, y: x } },
        { edge: "left", x: g, y: (b + x) * 0.5, a: { x: g, y: x }, b: { x: g, y: b } }
      ],
      rotateStemBase: { x: (g + _) * 0.5, y: b },
      rotateHandle: { x: (g + _) * 0.5, y: b - 30 }
    };
  }
  function lp(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(u.selectedIds) && u.selectedIds.includes(o);
  }
  function Da() {
    const r = lt();
    return r ? kt(r) || $t(r) ? "stroke" : un(r) ? "frame" : "image" : null;
  }
  function cr(r) {
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = zt().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if ($t(r)) {
      const o = At(r.rasterObjectId || r.id || ""), s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function ks(r = null) {
    const o = Array.isArray(r) ? r : wn();
    return o.length > 0 && o.every((s) => cr(s));
  }
  function cp(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), m = zt().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    if ($t(r)) {
      const l = At(r.rasterObjectId || r.id || ""), m = en().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function up() {
    if (i) return;
    const r = wn();
    if (!r.length) return;
    const o = !ks(r);
    let s = !1;
    r.forEach((l) => {
      cp(l, o) && (s = !0);
    }), s && (ut(), yt(), $e(), ge());
  }
  function Ar(r) {
    u.selectedId = (r == null ? void 0 : r.id) || null, u.selectedIds = r != null && r.id ? [r.id] : [], r && bt(r) ? p.active.selected_sticker_id = r.id || null : p.active.selected_sticker_id = null, r && un(r) ? p.active.selected_shot_id = r.id || null : r ? un(r) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function fp(r, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), u.selectedIds = s;
    const m = String(o || "").trim();
    u.selectedId = m && s.includes(m) ? m : s[s.length - 1] || null;
    const g = lt();
    p.active.selected_sticker_id = g && bt(g) && g.id || null, g && un(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function Oc() {
    const r = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const m = Et(s) ? String(s.id || Or) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: m
      };
    });
    return [...r, ...o];
  }
  function dp(r) {
    return r === "frame" ? Ot.camera : r === "stroke" ? Ot.paintbrush_vertical_tool : Ot.image;
  }
  function Fc(r) {
    return !r || !r.item ? kl(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${dp(r.kind)}</span><span>${kl(String(r.label || ""))}</span>`;
  }
  function Vc() {
    return _s();
  }
  function Et(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Or || String(r.source_kind || "") === xl;
  }
  function Zr(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function hp(r) {
    return Et(r) && Zr(r) ? dh : 1;
  }
  function pp() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function mp() {
    return String(pp() || "") === "lasso_fill";
  }
  function gp() {
    if (i) return;
    const r = lt();
    !r || !Et(r) || (r.visible = Zr(r), Lt(), ut(), yt(), ze(), $e(), ge());
  }
  function vp() {
    if (i || t !== "stickers") return;
    const r = lt();
    if (!r || !Et(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ts(wl, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Tr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), ut(), yt(), ze(), $e(), ge();
  }
  function bp(r) {
    if (!r || !Et(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Ts(wl, () => {
      ge();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Tr(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function yp() {
    const r = lt();
    if (!r || !Et(r)) return !1;
    const o = bp(r);
    if (!o) return !1;
    const s = (l, m) => Math.abs(Number(l || 0) - Number(m || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Ps(r) {
    var s;
    const o = ha(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function Hc(r) {
    const o = ha(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function jc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return $o(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function _p() {
    const { metaKey: r } = jc(), o = Hc(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function Jr(r) {
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
  function Wn(r = {}) {
    const o = Number(r.currentTime ?? j.editorTime ?? 0), s = Number(r.duration ?? M.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!M.videoTransport.ready, m = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!M.videoTransport.playing, g = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!M.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(H instanceof HTMLVideoElement ? H.muted : M.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : H instanceof HTMLVideoElement ? H.volume : M.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Ce(H);
    Object.assign(M.videoTransport, {
      ready: l,
      playing: m,
      visible: g,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Cs(o),
      durationLabel: Cs(s),
      frameCount: Math.max(0, Number(r.frameCount ?? M.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? M.videoTransport.fps ?? 24)),
      mode: String(r.mode || j.mode || "playback"),
      hasAudio: x,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : M.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? M.videoTransport.thumbnailCount ?? Ne))
    });
  }
  function ur() {
    return !!(H instanceof HTMLVideoElement && H.getAttribute("src") && u.primaryTool !== "paint" && u.primaryTool !== "mask");
  }
  function xp() {
    Wn({
      visible: ur()
    });
  }
  function Qr() {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return !1;
    const r = Number(H.videoWidth || 0), o = Number(H.videoHeight || 0);
    (Y.width !== r || Y.height !== o) && (Y.width = r, Y.height = o);
    const s = Y.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(H, 0, 0, r, o), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, j.presentedTime = Number(j.editorTime || H.currentTime || 0), !0) : !1;
  }
  function zc() {
    return j.mode === "scrub" && Number(Y.width || 0) > 0 && Number(Y.height || 0) > 0 && Number(Y.__panoFrameIdx || 0) > 0 ? Y : H instanceof HTMLVideoElement && Number(H.videoWidth || 0) > 0 && Number(H.videoHeight || 0) > 0 && Number(H.readyState || 0) >= 2 ? H : null;
  }
  function As(r) {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (j.requestedTime = o, !j.seeking && !(Math.abs(Number(H.currentTime || 0) - o) <= 5e-4)) {
      j.seeking = !0;
      try {
        H.currentTime = o;
      } catch {
        j.seeking = !1;
      }
    }
  }
  function ei() {
    if (!(H instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = jc(), o = Ps(r)[0] || null, s = o && typeof o == "object" ? Ma(o) : Gr(o), l = _p(), m = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), g = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), _ = Number((l == null ? void 0 : l.duration) || (m > 0 ? m / g : 0)), b = !!(l != null && l.has_audio) || Ce(H);
    return s && H.dataset.panoSrc !== s ? (H.pause(), H.dataset.panoSrc = s, H.dataset.panoFrameIdx = "0", H.loop = !0, H.muted = !!M.videoTransport.muted, H.volume = Math.max(0, Math.min(1, Number(M.videoTransport.volume ?? 1))), H.src = s, H.load(), vt(s, _, g)) : !s && H.getAttribute("src") && (H.pause(), H.removeAttribute("src"), H.load(), ln()), s && (!Array.isArray(M.videoTransport.thumbnails) || M.videoTransport.thumbnails.length === 0) && vt(s, _, g), s || ln(), Wn({
      ready: !!s,
      playing: !H.paused && !H.ended,
      visible: !!s && u.primaryTool !== "paint" && u.primaryTool !== "mask",
      currentTime: j.editorTime,
      duration: _,
      frameCount: m,
      fps: g,
      mode: j.mode,
      hasAudio: b,
      muted: !!H.muted,
      volume: Number(H.volume ?? M.videoTransport.volume ?? 1),
      thumbnailCount: M.videoTransport.thumbnailCount
    }), s || null;
  }
  function wp(r, o = null) {
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
    const s = Ps(r), l = Array.isArray(s) && s.length ? s[0] : null, m = Gr(l);
    if (!m) return null;
    const g = `__ui__${r}`, _ = Q.get(g);
    if (_ && _.__panoSrc === m) return _;
    const b = new Image();
    return b.__panoSrc = m, b.onload = () => {
      typeof o == "function" ? o(b) : ge();
    }, b.src = m, Q.set(g, b), b;
  }
  function $c(r = null) {
    const o = Cl(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Ts(wl, r);
  }
  function Bc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Tr(r, o, s) {
    const l = Math.max(1, Number(o || 1)), m = Math.max(1, Number(s || 1)), g = q(Number(r || 30), 0.1, 179) * It, _ = 2 * Math.atan(Math.tan(g * 0.5) * (m / l));
    return q(_ * yr, 0.1, 179);
  }
  function Sp(r) {
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
      const _ = Number(g.yaw_deg), b = Number(g.pitch_deg), x = Number(g.roll_deg), S = Number(g.hFOV_deg);
      if (![_, b, x, S].every((F) => Number.isFinite(F))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const k = {
        yaw_deg: C,
        pitch_deg: q(b, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: q(S, 0.1, 179)
      }, L = Number(s.source_aspect);
      return Number.isFinite(L) && L > 0 && (k.source_aspect = L), k;
    } catch {
      return null;
    }
  }
  function Uc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = ta(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Np(r) {
    var b;
    if (!r || typeof r != "object") return Uc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(m) && Number.isFinite(g)) {
      const x = q(m, 0.1, 179) * It, S = q(g, 0.1, 179) * It, C = Math.tan(S * 0.5);
      if (Math.abs(C) > 1e-6) {
        const k = Math.tan(x * 0.5) / C;
        Number.isFinite(k) && k > 0 && (_ = k);
      }
    }
    if (r != null && r.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[r.asset_id])) {
      const x = p.assets[r.asset_id], S = Number((x == null ? void 0 : x.w) || 0), C = Number((x == null ? void 0 : x.h) || 0);
      S > 0 && C > 0 && (_ = S / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Mp(r) {
    var l, m, g, _, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = Wh(e.graph, s), { originId: S, originSlot: C } = qh(x), k = ha(S), L = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (m = k == null ? void 0 : k.data) == null ? void 0 : m.result,
        (g = k == null ? void 0 : k.ui) == null ? void 0 : g.output,
        (_ = k == null ? void 0 : k.ui) == null ? void 0 : _.result
      ];
      for (const F of L) {
        if (!Array.isArray(F)) continue;
        const ee = Number(C || 0), z = F[ee];
        if (typeof z == "string" && z.trim()) return z;
      }
    }
    return String(((b = bn(e, r)) == null ? void 0 : b.value) || "");
  }
  function kp(r, o, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : Sp(o);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Tr(l.hFOV_deg, _, b),
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
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((F) => String((F == null ? void 0 : F.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = $c(() => {
      var F;
      (F = e.__panoExternalStickerSync) == null || F.call(e, "image-loaded");
    }), m = wp(Hc("pano_sticker_input_pose"), null), g = Mp("sticker_state"), _ = Bc(m && typeof m == "object" ? JSON.stringify(m) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], x = b.findIndex((F) => String((F == null ? void 0 : F.id) || "") === Or);
    if (s == null) {
      x >= 0 && (b.splice(x, 1), u.selectedId === Or && (u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null), yt(), ze(), $e(), ge());
      return;
    }
    const S = b.reduce((F, ee) => Math.max(F, Number((ee == null ? void 0 : ee.z_index) || 0)), -1);
    let C = x >= 0 ? b[x] : null;
    const k = !C || Number(C.source_link_id ?? -1) !== Number(s) || String(C.source_state_hash || "") !== _;
    C || (C = {
      id: Or,
      source_kind: xl
    }, b.push(C)), C.id = Or, C.source_kind = xl, C.source_link_id = Number(s), C.source_state_hash = _, C.visible = C.visible !== !1;
    let L = !1;
    if (k) {
      const F = kp(m, g, l);
      Object.assign(C, F, {
        initial_pose: { ...F },
        visible: !0,
        z_index: S + 1
      }), L = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const F = Tr(
        Number(C.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(C.vFOV_deg || 0) - F) > 1e-6 && (C.vFOV_deg = F, L = !0);
    }
    L && (yt(), ze(), $e()), ge();
  }
  function ti(r = {}) {
    const s = r.preservePanelValues !== !1 ? lt() : null;
    s && (u.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Xi(s)
    }), u.selectedId = null, u.selectedIds = [], u.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Pp() {
    if (t !== "cutout") return;
    const r = Be();
    r && Ar(r);
  }
  function Is() {
    if (t !== "cutout") return;
    const r = Be();
    Yi(M.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Ot.camera : Ot.plus_circle
    });
  }
  function La() {
    const r = !!Be();
    u.mode === "frame" && !r && (u.mode = "pano"), u.outputPreviewRect = null, M.viewButtons.forEach((o) => {
      const s = o.key === u.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), M.outputPreviewToggle.visible = t === "cutout" && !!Be(), t === "cutout" && M.cameraPreview && (M.cameraPreview.visible = !0, M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.settled = M.cameraPreview.settled === !0 && U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame), yu() ? dt(u.pointerPos) : te(u.mode === "pano" ? "grab" : "default");
  }
  function Cp() {
    const o = Jc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Es() {
    const r = En(u.viewYaw, u.viewPitch);
    let o = zn(0, 1, 0);
    Math.abs(kn(r, o)) > 0.999 && (o = zn(0, 0, 1));
    const s = fi(mo(o, r)), l = fi(mo(r, s));
    return { right: s, up: l, fwd: r };
  }
  function Oi(r) {
    const { right: o, up: s, fwd: l } = Es(), m = kn(r, o), g = kn(r, s), _ = kn(r, l);
    if (_ <= 1e-5) return null;
    const b = T.width, x = T.height, S = u.viewFov * It, C = 2 * Math.atan(Math.tan(S / 2) * (x / b)), k = b / 2 / Math.tan(S / 2), L = x / 2 / Math.tan(C / 2);
    return {
      x: b / 2 + m / _ * k,
      y: x / 2 - g / _ * L,
      z: _
    };
  }
  function Ds(r, o) {
    const { right: s, up: l, fwd: m } = Es(), g = T.width, _ = T.height, b = u.viewFov * It, x = 2 * Math.atan(Math.tan(b / 2) * (_ / g)), S = (r - g / 2) / (g / 2) * Math.tan(b / 2), C = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), k = ho(ho(po(s, S), po(l, C)), m);
    return fi(k);
  }
  function fr() {
    const r = T.width, o = T.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const b = o, x = b * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: b };
    }
    const m = r, g = m / s;
    return { x: 0, y: (o - g) * 0.5, w: m, h: g };
  }
  function Gc(r) {
    var _;
    if (r && typeof r == "object" && (Et(r) || r.external === !0))
      return $c(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Q.get(o);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[o], m = $x(l);
    if (!m) return null;
    const g = new Image();
    return g.onload = () => ge(), g.src = m, Q.set(o, g), g;
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
  function Ap(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = E.get(o);
    if (s) return s.ready ? s : null;
    const l = Wc(r, () => {
      const C = E.get(o);
      C && (C.ready = !1), ge({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const m = Number(l.naturalWidth || l.width || 0), g = Number(l.naturalHeight || l.height || 0);
    if (m < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = m, _.height = g;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, m, g), b.drawImage(l, 0, 0, m, g);
    const x = b.getImageData(0, 0, m, g).data, S = { canvas: _, width: m, height: g, alpha: x, ready: !0 };
    return E.set(o, S), S;
  }
  function Tp(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = gn(Number(r.u || 0), m), b = Number(r.v || 0) - g, x = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * It, C = Math.cos(S), k = Math.sin(S), L = _ / x, F = b / x, ee = L * C + F * k, z = -L * k + F * C;
    return {
      ...r,
      u: ((m + ee) % 1 + 1) % 1,
      v: g + z
    };
  }
  function Ip(r, o) {
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
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(x > 1e-6)) return null;
    const S = gn(Number(_.u || 0), Number(s.u0 || 0)) / b, C = (Number(_.v || 0) - Number(s.v0 || 0)) / x;
    if (S < 0 || S > 1 || C < 0 || C > 1) return 0;
    const k = Ap(r);
    if (!k) return null;
    const L = q(Math.floor(S * k.width), 0, k.width - 1), F = q(Math.floor(C * k.height), 0, k.height - 1);
    return Number(k.alpha[(F * k.width + L) * 4 + 3] || 0);
  }
  function qc(r, o, s, l = null) {
    if (!(o != null && o.visible) || !Zn(s, o.corners)) return !1;
    const m = l || Nn(s, performance.now()), g = Ip(r, m);
    return g === null ? !0 : g > 8;
  }
  function Ep() {
    var l, m, g, _, b, x, S, C;
    const r = ((m = (l = u.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : m.call(l, xs(!1))) || null, o = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((b = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((C = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : C.height) || 1024));
    return { width: o, height: s };
  }
  function Dp() {
    var F, ee, z;
    const r = u.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = fn(), l = `${Ta()}:${s.width}:${s.height}`;
    if (((F = u._activePaintEraserPreviewInfo) == null ? void 0 : F.cacheKey) === l)
      return u._activePaintEraserPreviewInfo.value || null;
    const m = Ut(o), g = (m == null ? void 0 : m.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const W = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = zs(W, m.targetSpace, !0);
    }
    const _ = Hi(s.width, s.height, { readback: !0 });
    if (!cu(_, m, { w: s.width, h: s.height })) return null;
    const b = ((z = (ee = _.ctx) == null ? void 0 : ee.getImageData(0, 0, s.width, s.height)) == null ? void 0 : z.data) || null;
    if (!b) return null;
    let x = s.width, S = s.height, C = -1, k = -1;
    for (let W = 0; W < s.height; W += 1)
      for (let re = 0; re < s.width; re += 1)
        b[(W * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), W < S && (S = W), re > C && (C = re), W > k && (k = W));
    if (C < x || k < S)
      return u._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const L = {
      surface: _,
      bounds: { minX: x, minY: S, maxX: C, maxY: k },
      key: `${l}:${x}:${S}:${C}:${k}`
    };
    return u._activePaintEraserPreviewInfo = { cacheKey: l, value: L }, u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Fi() {
    u._activePaintEraserPreviewInfo = null, u._liveEraserPreviewCanvasCache = null;
  }
  function Lp(r, o, s) {
    var l, m;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const g = r.item.bbox, _ = ((m = r.item) == null ? void 0 : m.transform) || {}, b = Number(g.u0 || 0) + Number(_.du || 0), x = Number(g.u1 || 0) + Number(_.du || 0), S = Number(g.v0 || 0) + Number(_.dv || 0), C = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(q(S, 0, 1) * s),
        maxY: Math.ceil(q(C, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = xn(r.actionGroupId, "paint"), _ = lr(r.actionGroupId, "paint", g);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(q(S, 0, 1) * s),
        maxY: Math.ceil(q(C, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    return null;
  }
  function Rp(r, o, s) {
    if (!r || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], m = l(r), g = l(o);
    return m.some((_) => g.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Op(r, o, s) {
    var ve, Ae, He, Me, Z, ce, ye;
    if (!r || !o || !((ve = s == null ? void 0 : s.surface) != null && ve.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), m = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || m < 1) return r;
    const g = Lp(o, l, m);
    if (g && !Rp(g, s.bounds, l)) return r;
    const _ = String(((Ae = o.item) == null ? void 0 : Ae.id) || o.id || ""), b = ((He = o.item) == null ? void 0 : He.transform) || {}, x = `${s.key}:${_}:${l}:${m}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = u._liveEraserPreviewCanvasCache instanceof Map ? u._liveEraserPreviewCanvasCache : u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(x)) return S.get(x);
    const C = q(Math.floor(Number(((Me = s.bounds) == null ? void 0 : Me.minX) || 0)), 0, Math.max(0, l - 1)), k = q(Math.floor(Number(((Z = s.bounds) == null ? void 0 : Z.minY) || 0)), 0, Math.max(0, m - 1)), L = q(Math.ceil(Number(((ce = s.bounds) == null ? void 0 : ce.maxX) || 0)), C, Math.max(0, l - 1)), F = q(Math.ceil(Number(((ye = s.bounds) == null ? void 0 : ye.maxY) || 0)), k, Math.max(0, m - 1)), ee = Math.max(1, L - C + 1), z = Math.max(1, F - k + 1), W = Hi(l, m, { readback: !0 });
    W.ctx.clearRect(0, 0, l, m), W.ctx.drawImage(r, 0, 0);
    const re = W.ctx.getImageData(C, k, ee, z);
    W.ctx.save(), W.ctx.globalCompositeOperation = "destination-out", W.ctx.drawImage(s.surface.canvas, 0, 0), W.ctx.restore();
    const pe = W.ctx.getImageData(C, k, ee, z);
    let ae = !1;
    for (let Se = 0; Se < ee * z; Se += 1) {
      const De = re.data[Se * 4 + 3], Le = pe.data[Se * 4 + 3];
      if (De > Le) {
        ae = !0;
        break;
      }
    }
    return ae ? (S.size > 64 && S.clear(), S.set(x, W.canvas), W.canvas) : (S.set(x, r), r);
  }
  function Yc(r, o = null) {
    const s = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const m = Wc(r, o);
    if (!m || !(m.complete || m.width || m.naturalWidth)) return null;
    const { width: g, height: _ } = Ep(), b = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      g,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      ji()
    ].join(":"), S = G.get(x);
    if (S) return S;
    G.size > 64 && G.clear();
    const C = document.createElement("canvas");
    C.width = g, C.height = _;
    const k = C.getContext("2d");
    if (!k) return null;
    const L = Number(l.u0 || 0) * g, F = Number(l.v0 || 0) * _, ee = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), z = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), W = L + ee * 0.5 + Number(b.du || 0) * g, re = F + z * 0.5 + Number(b.dv || 0) * _, pe = Number(b.rot_deg || 0) * It, ae = Math.max(0.01, Number(b.scale || 1));
    for (const ve of [-g, 0, g])
      k.save(), k.translate(W + ve, re), k.rotate(pe), k.scale(ae, ae), k.drawImage(m, -ee * 0.5, -z * 0.5, ee, z), k.restore();
    return G.set(x, C), C;
  }
  function Fp() {
    return ms(p, {
      selectedId: u.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Vp(r) {
    return hh(
      p,
      (o, s, l) => Gc(l || o),
      { scene: r }
    );
  }
  function Xc(r, o, s, l, m = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const g = dr(l);
    if (nu(o, s))
      return Wp(
        o,
        s,
        g && u.showPanorama ? l : null,
        `${m}_bg_gl`
      );
    const b = Va(), x = Ha(b), S = u.showObjects ? ja() : Vi([]), k = Qi({
      stateRevision: [
        m,
        g ? Jr(l) : "no_bg",
        Array.isArray(x) ? x.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        S.length ? S.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: g && u.showPanorama ? l : null,
      backgroundRevision: g ? `${m}:${Jr(l)}` : "",
      coverageDeg: Ft(p.coverage),
      scene: b,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = be;
    if (!L.syncState(k)) return !1;
    const ee = L.renderToTarget(`${m}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return ee ? (r.drawImage(ee, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Ls(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await yn.fetchApi("/upload/image", { method: "POST", body: s });
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
  async function Rs(r, o) {
    const s = await new Promise((b) => r.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const m = await yn.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Ra = null, Oa = !1;
  function Hp() {
    const r = Kf(p.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, s = ii();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Zc() {
    const r = String(e.id ?? "0"), o = uo.get(r);
    if (Oa && o) return o;
    const s = (async () => {
      var g, _, b, x, S, C, k, L, F, ee, z, W;
      const l = ii(), m = Kf(p.painting);
      if (m.totalPaintCount <= 0 && m.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ra = l, vn());
        return;
      }
      if (Ra !== l && !Oa) {
        Oa = !0;
        try {
          Ua();
          const re = xs(!1), pe = ((_ = (g = u.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, re)) || null, ae = ((b = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : b.canvas) || null, ve = ((x = pe == null ? void 0 : pe.committedMask) == null ? void 0 : x.canvas) || null, Ae = Math.max(1, Number(((S = pe == null ? void 0 : pe.descriptor) == null ? void 0 : S.width) || (ae == null ? void 0 : ae.width) || (ve == null ? void 0 : ve.width) || 2048)), He = Math.max(1, Number(((C = pe == null ? void 0 : pe.descriptor) == null ? void 0 : C.height) || (ae == null ? void 0 : ae.height) || (ve == null ? void 0 : ve.height) || 1024));
          (!ae && m.totalPaintCount > 0 || !ve && m.totalMaskCount > 0) && ((!u._paintLayerSyncBlankSurface || Number(((k = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== Ae || Number(((L = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== He) && (u._paintLayerSyncBlankSurface = Hi(Ae, He)), u._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ae, He));
          const Me = ae || m.totalPaintCount > 0 && ((F = u._paintLayerSyncBlankSurface) == null ? void 0 : F.canvas) || null, Z = ve || m.totalMaskCount > 0 && ((ee = u._paintLayerSyncBlankSurface) == null ? void 0 : ee.canvas) || null;
          if (!Me && !Z) return;
          let ce = null, ye = null;
          const Se = [];
          if (m.totalPaintCount > 0) {
            ce = await Rs(Me, `pano_paint_${r}.png`);
            for (const De of re) {
              const Le = String(De || "").trim();
              if (!Le) continue;
              const Oe = ((W = (z = u.paintEngine) == null ? void 0 : z.getGroupDisplayCanvas) == null ? void 0 : W.call(z, Le)) || null;
              if (!Oe) continue;
              const Ge = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), We = await Rs(Oe, `pano_group_${r}_${Ge}.png`);
              We && Se.push({
                id: Le,
                actionGroupId: Le,
                image: We
              });
            }
          }
          m.totalMaskCount > 0 && (ye = await Rs(Z, `pano_mask_${r}.png`)), l === ii() && (p.painting_layer = {
            paint: ce,
            mask: ye,
            groups: Se,
            revision: l
          }, Ra = l, vn());
        } catch (re) {
          throw re;
        } finally {
          Oa = !1;
        }
      }
    })();
    return uo.set(r, s), s.finally(() => {
      uo.get(r) === s && uo.delete(r);
    }), s;
  }
  function Ir() {
    if (t === "cutout") {
      const b = zc();
      if (b) return b;
      const x = Cl(
        e,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return x || qf(e, "pano_input_images", Q, () => ge()) || null;
    }
    const r = zc();
    if (r) return r;
    const o = qf(e, "pano_input_images", Q, () => ge());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], l = s.includes("erp_image"), m = s.includes("bg_erp");
    let g = [];
    return i && (l || m) ? g = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : g = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Cl(e, g, () => ge(), `background:${g.join("|")}`);
  }
  function dr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function jp() {
    if (!U.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (u.showPanorama) {
      const s = Ir();
      r = !!s && !dr(s);
    }
    if (u.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
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
  function ni() {
    const r = new Set(
      (p.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(p.assets || {}).forEach((o) => {
      r.has(o) || (delete p.assets[o], Q.delete(o));
    });
  }
  function Os(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(q(r.y, -1, 1))
    };
  }
  function Fs(r, o = null) {
    const { lon: s, lat: l } = Os(r), m = fr();
    let g = m.x + (s / (2 * Math.PI) + 0.5) * m.w;
    const _ = m.y + (0.5 - l / Math.PI) * m.h;
    if (o !== null) {
      for (; g - o > m.w / 2; ) g -= m.w;
      for (; g - o < -m.w / 2; ) g += m.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Fa(r) {
    const o = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = zn(0, 1, 0);
    Math.abs(kn(o, s)) > 0.999 && (s = zn(0, 0, 1));
    const l = fi(mo(s, o)), m = fi(mo(o, l)), g = Math.tan(q(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * It), _ = Math.tan(q(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * It), b = Number(r.rot_deg || r.roll_deg || 0) * It, x = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: m,
      tanX: g,
      tanY: _,
      cr: x,
      sr: S
    };
  }
  function hr(r, o, s) {
    const l = o * r.cr - s * r.sr, m = o * r.sr + s * r.cr;
    return fi(ho(ho(r.centerDir, po(r.right, l)), po(r.up, m)));
  }
  function Jc(r) {
    const o = Fa(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: m }) => hr(o, l * o.tanX, m * o.tanY));
  }
  function Qc(r, o, s) {
    const l = Fa(r), m = (o * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return hr(l, m, g);
  }
  function eu(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: q((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function zp(r) {
    var x, S, C, k;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), m = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), g = Number(((C = r == null ? void 0 : r.transform) == null ? void 0 : C.du) || 0), _ = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((L) => Ia(Ea(L, s, l, m), g, _));
  }
  function $p(r) {
    const o = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, m = `${o}:${u.mode}:${ji()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (u.mode === "frame") {
      const g = Be(), _ = g ? Tt(g) : null;
      return `${m}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Bp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      un(r) ? "frame" : bt(r) ? "sticker" : "item",
      o,
      u.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Xi(r)
    ].join(":");
    if (u.mode === "frame") {
      const m = Be(), g = m ? Tt(m) : null;
      return `${l}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Up() {
    var o;
    const r = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? u.hqFrames && u.hqFrames > 0 ? [28, 20] : u.interaction ? [12, 9] : [20, 14] : r === "high" ? u.hqFrames && u.hqFrames > 0 ? [48, 36] : u.interaction ? [20, 14] : [36, 26] : u.hqFrames && u.hqFrames > 0 ? [40, 30] : u.interaction ? [16, 12] : [28, 20];
  }
  function tu() {
    var r;
    return !!$ && !!((r = be == null ? void 0 : be.isSupported) != null && r.call(be));
  }
  function nu(r, o) {
    return !tu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((T == null ? void 0 : T.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((T == null ? void 0 : T.height) || 0));
  }
  function Va() {
    return u.showObjects ? Fp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ha(r) {
    return !u.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Vp(r);
  }
  function ru() {
    var r, o;
    return ((o = (r = u.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Kp() {
    return ru() ? `${$s()}:mask_display` : "";
  }
  function Vi(r) {
    if (!u.showMask) return r;
    const o = ru();
    if (!o) return r;
    const s = Kp(), l = r.reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.zIndex) || 0)), -1), m = (Array.isArray(p.stickers) ? p.stickers : []).reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.z_index) || 0)), -1), g = Math.max(l, m);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: g + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function ja() {
    var l, m;
    const r = ws(!0), o = Dp(), s = [];
    for (const g of r) {
      if ((g == null ? void 0 : g.type) === "strokeGroup") {
        const _ = String(g.actionGroupId || g.id || "");
        if (!_) continue;
        const b = ((m = (l = u.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : m.call(l, _)) || null;
        if (!b) continue;
        s.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${$s()}:${_}`,
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((g == null ? void 0 : g.type) === "rasterObject") {
        const _ = g.item || null, b = At((_ == null ? void 0 : _.id) || g.id || "");
        if (!b) continue;
        const x = Yc(_, () => ge());
        if (!x) continue;
        const S = Op(x, g, o), C = (_ == null ? void 0 : _.transform) || {};
        s.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            ii(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(C.du || 0).toFixed(6),
            Number(C.dv || 0).toFixed(6),
            Number(C.rot_deg || 0).toFixed(3),
            Number(C.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return Vi(s);
  }
  function Gp(r, o = "modal_bg_gl") {
    const s = Va(), l = Ha(s), m = dr(r), g = m ? Jr(r) : "none", _ = u.showObjects ? ja() : Vi([]), b = null, x = [
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
      descriptor: Qi({
        stateRevision: x,
        backgroundSource: m ? r : null,
        backgroundRevision: m ? `${o}:${g}` : "",
        coverageDeg: Ft(p.coverage),
        scene: s,
        textures: l,
        paintSource: b,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: m || l.length > 0 || _.length > 0
    };
  }
  function Vs() {
    if (!$) return;
    const r = $.getContext("webgl2");
    if (r)
      r.viewport(0, 0, $.width, $.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = $.getContext("2d");
      o && (o.clearRect(0, 0, $.width, $.height), o.fillStyle = "#070707", o.fillRect(0, 0, $.width, $.height));
    }
    U.backgroundWasVisible = !1, U.backgroundDirty = !1;
  }
  function Wp(r, o, s, l = "modal_bg_gl") {
    var S;
    if (!nu(r, o)) return !1;
    if (!U.backgroundDirty && U.backgroundWasVisible) return !0;
    const { descriptor: m, hasContent: g } = Gp(s, l);
    if (!g || !be.syncState(m))
      return Vs(), !1;
    const b = be.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (S = $ == null ? void 0 : $.getContext) == null ? void 0 : S.call($, "2d");
    return !b || !x ? (Vs(), !1) : (x.clearRect(0, 0, $.width, $.height), x.drawImage(b, 0, 0, $.width, $.height), U.backgroundWasVisible = !0, U.backgroundDirty = !1, !0);
  }
  function qp(r = !1) {
    const o = T.width, s = T.height, l = fr();
    if (A.globalAlpha = 1, A.lineWidth = 1, r || (A.fillStyle = "#070707", A.fillRect(0, 0, o, s), A.fillStyle = "#070707", A.fillRect(l.x, l.y, l.w, l.h)), Ua(), Xc(
      A,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Ir(),
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
      const g = Oi(m);
      if (!g) {
        l = !1;
        continue;
      }
      l ? A.lineTo(g.x, g.y) : (A.moveTo(g.x, g.y), l = !0);
    }
    A.stroke();
  }
  function Yp(r = !1) {
    const o = T.width, s = T.height;
    if (r || (tu() ? A.clearRect(0, 0, o, s) : (A.fillStyle = "#070707", A.fillRect(0, 0, o, s))), Ua(), Xc(
      A,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: u.viewYaw,
        pitchDeg: u.viewPitch,
        fovDeg: u.viewFov,
        coverageDeg: Ft(p.coverage)
      },
      Ir(),
      "modal_pano"
    ), u.showGrid && !u.fullscreen) {
      for (let m = -180; m <= 180; m += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push(En(m, _));
        iu(g, "#3f3f46", m % 90 === 0 ? 1.3 : 1);
      }
      for (let m = -75; m <= 75; m += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push(En(_, m));
        iu(g, m === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", m === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: En(-90, 0) },
        { name: "Front", dir: En(0, 0) },
        { name: "Right", dir: En(90, 0) },
        { name: "Back", dir: En(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", l.forEach((m) => {
        const g = Oi(m.dir);
        g && A.fillText(m.name, g.x, g.y + 24);
      });
    }
  }
  function Xp(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const m = o || Be();
      if (!m) return [];
      const g = s || Tt(m);
      return Em(r, m, g);
    }
    return uu(r, l);
  }
  function za(r, o = null, s = null, l = null, m = null) {
    if (!r) return null;
    if (u.mode === "unwrap") {
      const _ = uu([r], m);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const g = ri(r);
    return g ? qn(g, o, s, l) : null;
  }
  function Zp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = xn(s, r.layerKind), m = lr(s, r.layerKind, l), g = (m == null ? void 0 : m.centerUv) || Ns(s, r.layerKind, l), _ = u.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, b = [], x = u.mode === "frame" ? Be() : null, S = x ? Tt(x) : null;
    for (const ae of l) {
      const ve = (ae == null ? void 0 : ae.geometry) || null, Ae = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], He = Xp(Ae, x, S, _).filter((ce) => Number.isFinite(ce == null ? void 0 : ce.x) && Number.isFinite(ce == null ? void 0 : ce.y));
      if (!He.length) continue;
      const Me = pr(String((ae == null ? void 0 : ae.toolKind) || "pen")), Z = nn[Me] || nn[Xn];
      b.push({
        points: He,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ae == null ? void 0 : ae.size) || 10) * Math.max(0.1, Number((Z == null ? void 0 : Z.sizeScale) ?? 1)) + 10),
        layerKind: String((ae == null ? void 0 : ae.layerKind) || r.layerKind || "paint")
      });
    }
    const C = za(g, null, x, S, _);
    if (!C) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ae), ae;
    }
    const L = ep(m).map((ae) => za(ae, C.x, x, S, _)).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y)).map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) }));
    if (L.length < 4) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ae), ae;
    }
    const F = (ae, ve) => ({
      x: (Number((ae == null ? void 0 : ae.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ae == null ? void 0 : ae.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ae,
      b: ve
    }), ee = F(L[0], L[1]), z = F(L[1], L[2]), W = F(L[2], L[3]), re = F(L[3], L[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...ee },
        { edge: "right", ...z },
        { edge: "bottom", ...W },
        { edge: "left", ...re }
      ],
      rotateStemBase: { x: ee.x, y: ee.y },
      rotateHandle: { x: ee.x, y: ee.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return u._strokeGeomCache.set(o, pe), pe;
  }
  function Jp(r, o) {
    const s = u.mode === "frame" ? Be() : null, l = s ? Tt(s) : null, m = eu(r), g = u.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = za(m, null, s, l, g), x = zp(r).map((L) => za(L, (_ == null ? void 0 : _.x) ?? null, s, l, g)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(x) || x.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return u._strokeGeomCache.set(o, L), L;
    }
    const S = x.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: S.reduce((L, F) => L + Number(F.x || 0), 0) / S.length,
        y: S.reduce((L, F) => L + Number(F.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return u._strokeGeomCache.set(o, k), k;
  }
  function qn(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const pe = s || Be(), ae = l || Tt(pe);
      if (!pe || !ae) return null;
      const ve = pe ? zi(pe, r) : null;
      return ve ? {
        x: Number(ae.x || 0) + Number(ve.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(ve.y || 0) * Number(ae.h || 0),
        z: 1
      } : null;
    }
    if (u.mode === "unwrap") return Fs(r, o);
    const { right: m, up: g, fwd: _ } = Es(), b = kn(r, m), x = kn(r, g), S = kn(r, _), C = T.width, k = T.height, L = u.viewFov * It, F = 2 * Math.atan(Math.tan(L / 2) * (k / Math.max(C, 1))), ee = C / 2 / Math.tan(L / 2), z = k / 2 / Math.tan(F / 2), W = Math.max(S, 1e-4), re = Math.max(C, k) * 2;
    return {
      x: q(C / 2 + b / W * ee, -re, C + re),
      y: q(k / 2 - x / W * z, -re, k + re),
      z: W
    };
  }
  function Qp(r) {
    const o = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = u.mode === "frame" ? Be() : null, l = s ? Tt(s) : null, m = qn(o, null, s, l);
    if (!m) return { visible: !1 };
    const g = Fa(r), b = Jc(r).map((Ae) => qn(Ae, m.x, s, l)).filter((Ae) => Number.isFinite(Ae == null ? void 0 : Ae.x) && Number.isFinite(Ae == null ? void 0 : Ae.y));
    if (b.length < 4) return { visible: !1 };
    const x = hr(g, 0, g.tanY), S = hr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), C = qn(x, m.x, s, l);
    if (!C) return { visible: !1 };
    const k = qn(S, (C == null ? void 0 : C.x) ?? m.x, s, l), L = ((k == null ? void 0 : k.x) ?? C.x) - C.x, F = ((k == null ? void 0 : k.y) ?? C.y) - C.y, ee = Math.hypot(L, F) || 1, z = {
      x: C.x + L / ee * 30,
      y: C.y + F / ee * 30
    }, W = qn(hr(g, 0, g.tanY), m.x, s, l), re = qn(hr(g, g.tanX, 0), m.x, s, l), pe = qn(hr(g, 0, -g.tanY), m.x, s, l), ae = qn(hr(g, -g.tanX, 0), m.x, s, l);
    if (!W || !re || !pe || !ae) return { visible: !1 };
    const ve = [
      {
        edge: "top",
        x: W.x,
        y: W.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: re.x,
        y: re.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: pe.x,
        y: pe.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: ae.x,
        y: ae.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: m.x, y: m.y },
      corners: b.map((Ae) => ({ x: Ae.x, y: Ae.y })),
      edgeMidpoints: ve,
      rotateStemBase: { x: C.x, y: C.y },
      rotateHandle: z,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Dt(r) {
    if (kt(r)) {
      const m = String(r.actionGroupId || r.id || "").trim(), g = op(m, r.layerKind), _ = u._strokeGeomCache.get(g);
      return _ || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Zp(r, g));
    }
    if ($t(r)) {
      const m = $p(r), g = u._strokeGeomCache.get(m);
      return g || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Jp(r, m));
    }
    const o = Bp(r), s = u._strokeGeomCache.get(o);
    if (s) return s;
    u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear();
    const l = Qp(r);
    return u._strokeGeomCache.set(o, l), l;
  }
  function $a(r, o, s, l = null) {
    const m = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let b = 0, x = 0;
      o === 0 ? (b = _, x = 0) : o === 1 ? (b = 1, x = _) : o === 2 ? (b = 1 - _, x = 1) : (b = 0, x = 1 - _);
      const S = Qc(r, b, x), C = u.mode === "unwrap" ? Fs(S, l) : Oi(S);
      C && m.push(C);
    }
    return m;
  }
  function em(r, o) {
    const s = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = u.mode === "unwrap" ? Fs(s) : null, m = l ? l.x : null, g = u.mode === "pano" ? 28 : 20, _ = [
      $a(r, 0, g, m),
      $a(r, 1, g, m),
      $a(r, 2, g, m),
      $a(r, 3, g, m)
    ];
    A.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", A.lineWidth = o ? 2 : 1, A.beginPath();
    let b = !1;
    for (const x of _)
      for (const S of x)
        b ? A.lineTo(S.x, S.y) : (A.moveTo(S.x, S.y), b = !0);
    A.closePath(), A.stroke();
  }
  function tm() {
    const r = [...Array.isArray(p.shots) ? p.shots : []], o = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function Hs() {
    const r = [...Array.isArray(p.shots) ? p.shots : []];
    return [...[...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function Ba(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function nm(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const m = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, x = o ? 24 : 20;
    Ba(A, l), A.fillStyle = g, A.fill(), A.strokeStyle = m, A.lineWidth = _, A.stroke(), A.save(), A.strokeStyle = m, A.lineWidth = b, A.lineCap = "round";
    for (let L = 0; L < 4; L += 1) {
      const F = l[L], ee = l[(L + 3) % 4], z = l[(L + 1) % 4], W = F.x - ee.x, re = F.y - ee.y, pe = Math.hypot(W, re) || 1, ae = z.x - F.x, ve = z.y - F.y, Ae = Math.hypot(ae, ve) || 1;
      A.beginPath(), A.moveTo(F.x, F.y), A.lineTo(F.x - W / pe * x, F.y - re / pe * x), A.moveTo(F.x, F.y), A.lineTo(F.x + ae / Ae * x, F.y + ve / Ae * x), A.stroke();
    }
    const S = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], C = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, k = o ? 12 : 9;
    S.forEach((L) => {
      const F = C.x - L.x, ee = C.y - L.y, z = Math.hypot(F, ee) || 1;
      A.beginPath(), A.moveTo(L.x, L.y), A.lineTo(L.x + F / z * k, L.y + ee / z * k), A.stroke();
    }), A.restore();
  }
  function rm(r, o, s, l) {
    if (un(r)) {
      nm(o, s, l);
      return;
    }
    if (bt(r)) {
      const m = A.globalAlpha;
      A.globalAlpha = hp(r), u.mode === "frame" ? (A.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = s ? 2 : 1, Ba(A, o.corners), A.stroke()) : em(r, s), A.globalAlpha = m;
      return;
    }
    A.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ba(A, o.corners), A.fill(), A.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = s ? 2.8 : 1.9, Ba(A, o.corners), A.stroke();
  }
  function im(r, o, s) {
    A.fillStyle = s, o.corners.forEach((l) => {
      A.beginPath(), A.arc(l.x, l.y, 6.5, 0, Math.PI * 2), A.fill();
    }), un(r) && (A.strokeStyle = s, A.lineCap = "round", A.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var C, k, L, F;
      const m = (((C = l.b) == null ? void 0 : C.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), g = (((L = l.b) == null ? void 0 : L.y) ?? l.y) - (((F = l.a) == null ? void 0 : F.y) ?? l.y), _ = Math.hypot(m, g) || 1, b = m / _, x = g / _, S = 10;
      A.beginPath(), A.moveTo(l.x - b * S, l.y - x * S), A.lineTo(l.x + b * S, l.y + x * S), A.stroke();
    }), A.lineCap = "butt"), kt(r) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), A.lineTo(o.rotateHandle.x, o.rotateHandle.y), A.stroke(), A.fillStyle = s, A.beginPath(), A.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function am() {
    var b;
    const [r, o] = Up(), s = wn(), l = s.length > 1, m = t === "cutout" ? tm() : Gn(), g = m.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${un(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== m || u._sortedItemsCache.orderKey !== g) && (u._sortedItemsCache = {
      src: m,
      orderKey: g,
      sorted: [...m]
    });
    const _ = u._sortedItemsCache.sorted;
    for (const x of _) {
      const S = !l && lp(x);
      if (u.mode === "frame" && !S || !u.showObjects && !un(x)) continue;
      const C = bt(x), k = un(x), L = cr(x);
      if (!C && !k)
        continue;
      const F = Dt(x);
      if (!(t !== "stickers" && !F.visible) && (rm(x, F, S, L), S && F.visible)) {
        const ee = L ? "#ff4d4f" : C && Et(x) ? "#f59e0b" : "#0070f3";
        im(x, F, ee);
      }
    }
    if (l) {
      const x = Ms(s);
      if (x != null && x.visible) {
        const S = ks(s) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(x.corners[0].x, x.corners[0].y);
        for (let C = 1; C < x.corners.length; C += 1) A.lineTo(x.corners[C].x, x.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = S, x.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      s.forEach((x) => {
        if (!kt(x) && !$t(x)) return;
        const S = Dt(x);
        if (!(S != null && S.visible)) return;
        const C = cr(x) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(S.corners[0].x, S.corners[0].y);
        for (let k = 1; k < S.corners.length; k += 1) A.lineTo(S.corners[k].x, S.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, S.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((b = u.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const x = Nu(u.interaction.start, u.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), A.fill(), A.stroke(), A.restore();
    }
    u.hqFrames && r >= 40 && o >= 30 && (u.hqFrames -= 1, u.hqFrames > 0 && ge());
  }
  function om(r) {
    const o = xr(r), s = q(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function au(r, o = !1) {
    const s = q(ta(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function sm(r) {
    if (!K || !r) return !1;
    const o = K.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || K.clientWidth || 0)), l = Math.round(Number(o.clientHeight || K.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function lm() {
    return `obj:${Number(u.objectVisualRevision || 0)}`;
  }
  function cm(r, o = {}) {
    if (!r) return "";
    const s = Ir(), l = s && dr(s) ? Jr(s) : "no_bg", m = om(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      $s(),
      lm(),
      Ta(),
      l,
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "mask:1" : "mask:0",
      `${m.width}x${m.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function um() {
    var L, F, ee, z;
    if (u.outputPreviewRect = null, M.outputPreviewToggle.visible = u.mode !== "frame" && !!Be(), t !== "cutout" || !M.cameraPreview) return;
    if (u.mode === "frame") {
      M.cameraPreview.visible = !1, M.cameraPreview.settled = !1;
      return;
    }
    const r = Be();
    if (!r) {
      M.cameraPreview.visible = !0, M.cameraPreview.ready = !1, M.cameraPreview.settled = !1, M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.width = 220, M.cameraPreview.height = 132, M.cameraPreview.label = "Add Frame to preview", (L = he == null ? void 0 : he.clearScene) == null || L.call(he), (F = O == null ? void 0 : O.requestRender) == null || F.call(O);
      return;
    }
    M.cameraPreview.visible = !0;
    const o = Ir();
    if (!r || !he || !O) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.settled = !1, M.cameraPreview.width = 220, M.cameraPreview.height = 132, (ee = he == null ? void 0 : he.clearScene) == null || ee.call(he), (z = O == null ? void 0 : O.requestRender) == null || z.call(O);
      return;
    }
    const s = au(r, !!u.outputPreviewExpanded);
    M.cameraPreview.width = s.width, M.cameraPreview.height = s.height, M.cameraPreview.expanded = !!u.outputPreviewExpanded;
    const l = Va(), m = Ha(l), g = dr(o), _ = g ? Jr(o) : "none", b = u.showObjects ? ja() : Vi([]), x = Qi({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((W) => String((W == null ? void 0 : W.id) || "")).join(",") : "none",
        Array.isArray(m) ? m.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "none",
        b.length ? b.map((W) => `${String((W == null ? void 0 : W.id) || "")}:${String((W == null ? void 0 : W.revision) || "")}:${Number((W == null ? void 0 : W.zIndex) || 0)}`).join(",") : "paint:none",
        u.showPanorama ? "panorama:1" : "panorama:0",
        u.showObjects ? "objects:1" : "objects:0",
        u.showMask ? "showMask:1" : "showMask:0",
        Ft(p.coverage)
      ].join("|"),
      backgroundSource: g && u.showPanorama ? o : null,
      backgroundRevision: g ? `cutout_preview:${_}` : "",
      coverageDeg: Ft(p.coverage),
      scene: l,
      textures: m,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(g || m.length > 0 || b.length > 0)) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = "Connect ERP image", M.cameraPreview.settled = !1, he.clearScene(), O.requestRender();
      return;
    }
    if (u.showPanorama && !g && m.length === 0 && b.length === 0) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", M.cameraPreview.settled = !1, he.clearScene(), O.requestRender();
      return;
    }
    he.syncScene(x), O.setView(xr(r));
    const C = sm(s), k = C ? O.present() : !1;
    C || O.requestRender(), M.cameraPreview.ready = !0, M.cameraPreview.label = C && k ? "" : "Loading preview", M.cameraPreview.settled = C && k && U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame;
  }
  function fm(r, o, s, l = {}) {
    if (!he || !s) return !1;
    const m = Ir(), g = Va(), _ = Ha(g), b = dr(m), x = u.showObjects ? ja() : Vi([]);
    return b || _.length > 0 || x.length > 0 ? (he.syncScene(Qi({
      stateRevision: cm(s, l),
      backgroundSource: b && u.showPanorama ? m : null,
      backgroundRevision: b ? `cutout_frame:${Jr(m)}` : "",
      coverageDeg: Ft(p.coverage),
      scene: g,
      textures: _,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), he.renderShotToContext(r, o, s, l)) : !1;
  }
  function js(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return Qc(r, s, l);
  }
  function ri(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return zn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function dm(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function hm(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Bt(r, "widthScale", 1),
      pressureLike: Bt(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function pm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function zs(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", m = /* @__PURE__ */ new WeakMap();
    if (l) {
      let z = null;
      r.forEach((W) => {
        const re = Number((W == null ? void 0 : W.u) || 0), pe = Number((W == null ? void 0 : W.v) || 0), ae = (re % 1 + 1) % 1, ve = z == null ? ae : z + gn(ae, (z % 1 + 1) % 1);
        m.set(W, { x: ve, y: pe }), z = ve;
      });
    }
    const g = (z) => !z || typeof z != "object" ? { x: 0, y: 0 } : m.get(z) || dm(z), _ = (z, W, re, pe = {}) => {
      const ae = l ? (Number(W) % 1 + 1) % 1 : Number(W), ve = hm(z, ae, re, pe);
      return m.set(ve, { x: Number(W), y: Number(re) }), ve;
    }, b = (z, W, re) => {
      const pe = g(z), ae = g(W);
      return _(z, Jn(pe.x, ae.x, re), Jn(pe.y, ae.y, re), {
        t: Jn(Number((z == null ? void 0 : z.t) || 0), Number((W == null ? void 0 : W.t) || 0), re),
        widthScale: Jn(Bt(z, "widthScale", 1), Bt(W, "widthScale", 1), re),
        pressureLike: Jn(Bt(z, "pressureLike", 1), Bt(W, "pressureLike", 1), re)
      });
    };
    if (r.length === 1) {
      const z = g(r[0]);
      return [_(r[0], z.x, z.y)];
    }
    const x = pm(o, s), S = (z, W) => {
      const re = [0];
      for (let ce = 1; ce < z.length; ce += 1) {
        const ye = g(z[ce - 1]), Se = g(z[ce]);
        re.push(re[ce - 1] + Math.hypot(Se.x - ye.x, Se.y - ye.y));
      }
      const pe = re[re.length - 1] || 0;
      if (pe <= 1e-8) {
        const ce = z[0], ye = g(ce);
        return [_(ce, ye.x, ye.y)];
      }
      const ae = [];
      let ve = 0;
      for (let ce = 0; ce <= pe + 1e-9; ce += W) {
        for (; ve < re.length - 2 && re[ve + 1] < ce; ) ve += 1;
        const ye = re[ve], Se = re[ve + 1], De = Math.max(1e-8, Se - ye);
        ae.push(b(z[ve], z[ve + 1], q((ce - ye) / De, 0, 1)));
      }
      const Ae = z[z.length - 1], He = g(Ae), Me = ae[ae.length - 1], Z = Me ? g(Me) : null;
      return (!Z || Math.hypot(Z.x - He.x, Z.y - He.y) > W * 0.35) && ae.push(_(Ae, He.x, He.y)), ae;
    }, C = (z) => {
      if (!Array.isArray(z) || z.length < 3) return z ? z.slice() : [];
      const W = g(z[0]), re = [_(z[0], W.x, W.y)];
      for (let ve = 0; ve < z.length - 1; ve += 1) {
        const Ae = z[ve], He = z[ve + 1], Me = g(Ae), Z = g(He), ce = _(
          Ae,
          Me.x * 0.75 + Z.x * 0.25,
          Me.y * 0.75 + Z.y * 0.25,
          {
            t: Number(Ae.t || 0) * 0.75 + Number(He.t || 0) * 0.25,
            widthScale: Bt(Ae, "widthScale", 1) * 0.75 + Bt(He, "widthScale", 1) * 0.25,
            pressureLike: Bt(Ae, "pressureLike", 1) * 0.75 + Bt(He, "pressureLike", 1) * 0.25
          }
        ), ye = _(
          Ae,
          Me.x * 0.25 + Z.x * 0.75,
          Me.y * 0.25 + Z.y * 0.75,
          {
            t: Number(Ae.t || 0) * 0.25 + Number(He.t || 0) * 0.75,
            widthScale: Bt(Ae, "widthScale", 1) * 0.25 + Bt(He, "widthScale", 1) * 0.75,
            pressureLike: Bt(Ae, "pressureLike", 1) * 0.25 + Bt(He, "pressureLike", 1) * 0.75
          }
        );
        re.push(ce, ye);
      }
      const pe = z[z.length - 1], ae = g(pe);
      return re.push(_(pe, ae.x, ae.y)), re;
    }, k = S(r, x);
    if (k.length < 3) return k;
    const L = s ? 2 : 1;
    let F = k.slice();
    for (let z = 0; z < L; z += 1) F = C(F);
    return S(F, Math.max(x * 0.75, 55e-5));
  }
  function Bt(r, o, s = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function mm(r) {
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
  function Hi(r, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const m = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return m && (m.clearRect(0, 0, l.width, l.height), m.imageSmoothingEnabled = !0), { canvas: l, ctx: m };
  }
  function ji() {
    const r = Ka();
    return `${String(u.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function ii() {
    const r = Ka();
    return `${String(u.paintStrokeRevision)}:${String(u.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function $s() {
    const r = Ta(), o = ii();
    return r ? `${o}:${r}` : o;
  }
  function gm() {
    u.paintStrokeRevision += 1, u.paintCompositeRevision += 1;
  }
  function vm() {
    u.paintCompositeRevision += 1;
  }
  function bm() {
    u._sortedItemsCache = null, u._strokeGeomCache.clear();
  }
  function ou() {
    var r, o;
    u.paintEngineRevisionKey = null, (o = (r = u.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, p), u.paintEngineRevisionKey = ji();
  }
  function su() {
    p.painting_layer !== null && (p.painting_layer = null), Ra = "";
  }
  function Lt() {
    u.objectVisualRevision = Number(u.objectVisualRevision || 0) + 1, bm(), U.backgroundDirty = !0, U.dirty = !0;
  }
  function Sn({ rebuildPaintEngine: r = !1 } = {}) {
    su(), gm(), Lt(), r && ou();
  }
  function ai() {
    su(), vm(), Lt();
  }
  function Ua() {
    var l;
    const r = Ka(), o = `${r.width}x${r.height}`;
    u.paintEngineDescriptorKey !== o && (u.paintEngine = jl(r), u.paintEngineDescriptorKey = o, u.paintEngineRevisionKey = "");
    const s = ji();
    u.paintEngineRevisionKey !== s && (u.paintEngineRevisionKey = s, (l = u.paintEngine) == null || l.rebuildCommitted(p));
  }
  function Ka() {
    const r = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function fn() {
    return Ka();
  }
  function ym(r, o, s, l, m = null) {
    const g = mm(r), _ = Bt(o, "widthScale", 1) * Bt(o, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? m ? Math.max(0.5, g.value / Math.max(1e-6, Number(m.hFOV_deg || 90) * It) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function _m(r, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), m = String((o == null ? void 0 : o.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (r.globalAlpha = m === "marker" ? 0.7 * _ : 1, l === "mask") {
      r.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (m === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = g ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${x})`;
  }
  function xm(r, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function wm(r, o, s, l, m = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    r.save(), _m(r, s, m);
    const _ = (b) => xm(r, b, g);
    if (o.length === 1) {
      _(o[0]), r.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const x = o[b], S = o[b + 1];
      if (!x || !S) continue;
      const C = Number(x.x || 0), k = Number(x.y || 0), L = Number(S.x || 0), F = Number(S.y || 0), ee = Math.max(0.5, Math.min(g, Number(x.radiusPx || 0.5))), z = Math.max(0.5, Math.min(g, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(k) || !Number.isFinite(L) || !Number.isFinite(F) || !Number.isFinite(ee) || !Number.isFinite(z)) continue;
      const W = L - C, re = F - k, pe = Math.hypot(W, re);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        _(x);
        continue;
      }
      if (pe > Math.max(l.w, l.h) * 0.5) continue;
      const ae = Math.max(0.5, Math.min(ee, z)), ve = Math.max(0.35, Math.min(ae * 0.4, 2.25)), Ae = Math.max(1, Math.ceil(pe / ve));
      for (let He = 0; He <= Ae; He += 1) {
        const Me = He / Ae;
        _({
          x: Jn(C, L, Me),
          y: Jn(k, F, Me),
          radiusPx: Jn(ee, z, Me)
        });
      }
    }
    _(o[o.length - 1]), r.restore();
  }
  function Sm(r, o, s, l) {
    wm(r, o, s, l, { preview: !1 });
  }
  function Nm(r, o, s, l, m) {
    var b, x, S, C;
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
    r.beginPath(), r.moveTo(Number(((b = o[0]) == null ? void 0 : b[g]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      r.lineTo(Number(((S = o[k]) == null ? void 0 : S[g]) || 0) * l.w, Number(((C = o[k]) == null ? void 0 : C[_]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function lu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function Mm(r, o) {
    const s = lu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ym(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function cu(r, o, s = null) {
    var b, x, S, C;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((b = r.canvas) == null ? void 0 : b.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, m = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((C = o == null ? void 0 : o.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return Nm(r.ctx, lu(m), m, l), !0;
    const _ = Mm(m, l);
    return _.length ? (Sm(r.ctx, _, m, l), !0) : !1;
  }
  function km(r, o, s, l = 8) {
    const m = new Uint8Array(o * s), g = [], _ = new Int32Array(o * s), b = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let S = 0; S < o; S += 1) {
        const C = x * o + S;
        if (m[C] || r[C] <= l) continue;
        let k = 0, L = 0;
        _[L] = S, b[L] = x, L += 1, m[C] = 1;
        const F = [];
        let ee = S, z = x, W = S, re = x;
        for (; k < L; ) {
          const pe = _[k], ae = b[k];
          k += 1, F.push({ x: pe, y: ae }), pe < ee && (ee = pe), ae < z && (z = ae), pe > W && (W = pe), ae > re && (re = ae);
          const ve = [
            [(pe - 1 + o) % o, ae],
            [(pe + 1) % o, ae],
            [pe, ae - 1],
            [pe, ae + 1]
          ];
          for (const [Ae, He] of ve) {
            if (He < 0 || He >= s) continue;
            const Me = He * o + Ae;
            m[Me] || r[Me] <= l || (m[Me] = 1, _[L] = Ae, b[L] = He, L += 1);
          }
        }
        g.push({ pixels: F, minX: ee, minY: z, maxX: W, maxY: re });
      }
    return g;
  }
  function Pm(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, S) => x - S);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, m = 0;
    for (let x = 0; x < s.length; x += 1) {
      const S = s[x], k = (x === s.length - 1 ? s[0] + o : s[x + 1]) - S - 1;
      k > l && (l = k, m = x);
    }
    const g = (s[(m + 1) % s.length] + o) % o;
    let _ = 1 / 0, b = -1 / 0;
    for (const x of s) {
      const S = (x - g + o) % o;
      _ = Math.min(_, S), b = Math.max(b, S);
    }
    return {
      startX: g,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function Cm(r, o, s = {}) {
    var S;
    const l = Number((r == null ? void 0 : r.width) || 0), m = Number((r == null ? void 0 : r.height) || 0), g = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!g || l < 1 || m < 1) return [];
    const _ = g.getImageData(0, 0, l, m), b = new Uint8Array(l * m);
    for (let C = 0; C < b.length; C += 1) b[C] = _.data[C * 4 + 3];
    return km(b, l, m, 8).map((C, k) => {
      const L = Pm(C, l);
      if (!L) return null;
      const F = Number(L.widthPx || 0), ee = C.maxY - C.minY + 1, z = Number(L.startX || 0), W = document.createElement("canvas");
      W.width = F, W.height = ee;
      const re = W.getContext("2d");
      if (!re) return null;
      const pe = re.createImageData(F, ee);
      return C.pixels.forEach(({ x: ae, y: ve }) => {
        const Ae = (ve * l + ae) * 4, He = (Number(ae || 0) - z + l) % l, Me = ((ve - C.minY) * F + He) * 4;
        pe.data[Me + 0] = _.data[Ae + 0], pe.data[Me + 1] = _.data[Ae + 1], pe.data[Me + 2] = _.data[Ae + 2], pe.data[Me + 3] = _.data[Ae + 3];
      }), re.putImageData(pe, 0, 0), {
        id: di("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + k * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / m,
          u1: F / l,
          v1: (C.maxY + 1) / m
        },
        rasterDataUrl: W.toDataURL("image/png"),
        transform: {
          du: z / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function zi(r, o) {
    if (!r || !o) return null;
    const s = Fa(r), l = kn(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const m = kn(o, s.right) / l, g = kn(o, s.up) / l, _ = m * s.cr + g * s.sr, b = -m * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Am(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (u.mode === "unwrap") {
      const s = fr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Oi(ri(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function uu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (u.mode === "unwrap") {
      const l = fr();
      return r.map((m) => {
        const g = (Number(m.u || 0) % 1 + 1) % 1, _ = o == null ? g : Number(o || 0) + gn(g, o);
        return {
          x: l.x + _ * l.w,
          y: l.y + Number(m.v || 0) * l.h
        };
      });
    }
    const s = r.map((l) => Oi(ri(l))).filter(Boolean);
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
  function Im(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = ri(m), _ = zi(o, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return Tm(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Em(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = ri(m), _ = zi(o, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function Dm() {
    var m;
    const r = Be(), o = Tt(r);
    if (!r || !o) return !1;
    A.save(), A.fillStyle = "#050505", A.fillRect(0, 0, T.width, T.height), A.shadowColor = "rgba(0, 0, 0, 0.45)", A.shadowBlur = 24, A.shadowOffsetX = 0, A.shadowOffsetY = 10, A.fillStyle = "rgba(14, 14, 14, 1)", A.fillRect(o.x, o.y, o.w, o.h), A.restore(), A.save(), A.beginPath(), A.rect(o.x, o.y, o.w, o.h), A.clip();
    const s = u.interaction ? "draft" : String(((m = p.ui_settings) == null ? void 0 : m.preview_quality) || "balanced");
    return fm(A, o, r, { quality: s }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(o.x, o.y, o.w, o.h)), A.restore(), A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.12)", A.lineWidth = 1, A.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), A.restore(), !0;
  }
  function Lm() {
    var x, S;
    if (((x = u.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = u.interaction.stroke, o = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (u.mode === "frame") {
      const C = Be(), k = Tt(C);
      s = Im(o, C, k);
    } else
      s = Am(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", m = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(m.r || 0) * 255), _ = Math.round(Number(m.g || 0) * 255), b = Math.round(Number(m.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let C = 1; C < s.length; C++) A.lineTo(Number(s[C].x || 0), Number(s[C].y || 0));
    A.closePath(), l ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${g},${_},${b},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Rm() {
    u.mode === "frame" ? Dm() : u.mode === "unwrap" ? qp(!1) : Yp(!1), t === "cutout" && um(), am(), Lm(), M.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && $e(), U.hasPresentedFrame || (U.hasPresentedFrame = !0, $.style.opacity = "1"), t === "cutout" && M.cameraPreview && (M.cameraPreview.settled = U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame && u.mode !== "frame");
    const r = jp();
    r ? (X == null || X.removeAttribute("data-stage-ready"), X == null || X.setAttribute("data-stage-loading-kind", r)) : (X == null || X.setAttribute("data-stage-ready", ""), X == null || X.removeAttribute("data-stage-loading-kind"));
  }
  function Om(r = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Fm() {
    e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = ap();
  }
  function ge(r = {}) {
    var b, x, S, C, k, L, F, ee, z, W;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), m = String(((b = u.interaction) == null ? void 0 : b.kind) || "");
    (!o || m === "view" || m === "pan_frame" || Om() || !!((x = u.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (U.backgroundDirty = !0), o && Ec() && (u.livePaintInteractionRevision += 1, U.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Is(), La()), Fm(), s && ((C = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || C.call(S), (k = e.setDirtyCanvas) == null || k.call(e, !0, !1)), s && !o && ((F = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || F.call(L, !0, !0), (W = (z = (ee = wr) == null ? void 0 : ee.canvas) == null ? void 0 : z.setDirty) == null || W.call(z, !0, !0)), U.dirty = !0;
  }
  function fu() {
    const r = T.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return T.width !== o || T.height !== s || $.width !== o || $.height !== s ? (T.width = o, T.height = s, $.width = o, $.height = s, U.backgroundDirty = !0, U.dirty = !0, t === "cutout" && (U.pendingStableLayoutFrames = Math.max(Number(U.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Bs(r = performance.now()) {
    var o;
    if (U.running) {
      if (U.lastTickTs = r, u.outputPreviewAnim !== u.outputPreviewAnimTo) {
        const s = Math.max(1, Number(u.outputPreviewAnimDurationMs)), l = q((r - Number(u.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? hx(l) : gx(l);
        u.outputPreviewAnim = Jn(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, g), U.dirty = !0, l >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
      }
      if ((o = u.viewTween) != null && o.active) {
        const s = u.viewTween, l = q((r - s.startTs) / s.durationMs, 0, 1), m = dx(l);
        u.viewYaw = Vt(s.startYaw + s.deltaYaw * m), u.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * m, u.viewFov = s.startFov + (s.targetFov - s.startFov) * m, U.backgroundDirty = !0, U.dirty = !0, l >= 1 && (u.viewTween = null);
      }
      if (u.viewInertia.vx = Number(Rt.state.inertia.vx || 0), u.viewInertia.vy = Number(Rt.state.inertia.vy || 0), u.viewInertia.active = !!Rt.state.inertia.active, Rt.stepInertia(r) && (u.viewInertia.vx = Number(Rt.state.inertia.vx || 0), u.viewInertia.vy = Number(Rt.state.inertia.vy || 0), u.viewInertia.active = !!Rt.state.inertia.active, U.backgroundDirty = !0, U.dirty = !0), (U.dirty || r - U.lastSizeCheckTs >= 220) && (fu(), U.lastSizeCheckTs = r), U.pendingStableLayoutFrames > 0 && (U.pendingStableLayoutFrames -= 1, U.dirty = !0), U.dirty) {
        if (U.pendingStableLayoutFrames > 0) {
          U.rafId = requestAnimationFrame(Bs);
          return;
        }
        U.dirty = !1, Rm();
      }
      U.rafId = requestAnimationFrame(Bs);
    }
  }
  function Vm() {
    U.running = !1, U.rafId && cancelAnimationFrame(U.rafId), U.rafId = 0;
  }
  function ut() {
    i || (u.historyController.commitActionGroup(JSON.stringify(Gf(p))), Xs());
  }
  function Us(r) {
    if (i) return;
    const o = r < 0 ? u.historyController.undo() : u.historyController.redo();
    if (Xs(), !o) return;
    const s = JSON.parse(o);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), u.selectedId = t === "stickers" || t === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, u.selectedIds = u.selectedId ? [u.selectedId] : [], Sn(), tn(), ze(), vn(), ge({ cause: "cutout_frame" });
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
    const r = ey({
      editor: u,
      swatches: To,
      paintColorPopOpen: we ? !we.hidden : !1,
      colorToCss: Dn,
      colorsApproximatelyEqual: Io,
      rgb01ToHsv: Ml,
      hsv01ToRgb: Nl,
      getBrushPresetIdForTool: pr,
      isActiveLassoTool: mp
    });
    if (Object.assign(M.paintDock, r), xp(), !r.visible) {
      we && (we.hidden = !0);
      return;
    }
    it && (clearTimeout(it), it = 0), le && (!r.colorEnabled && we && !we.hidden && (it = window.setTimeout(() => {
      we.hidden = !0, M.paintDock.colorPopOpen = !1, it = 0;
    }, 170)), we && (we.style.setProperty("--picker-hue-color", r.pickerHueColor), we.style.setProperty("--picker-sat", r.pickerSat), we.style.setProperty("--picker-val", r.pickerVal), we.style.setProperty("--picker-hue", r.pickerHue)), Re && (Re.style.left = r.pickerSvLeft, Re.style.top = r.pickerSvTop), Je && (Je.style.left = r.pickerHueLeft));
  }
  function Ks() {
    const r = lt();
    r && (u.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Xi(r)
    }, ze());
  }
  function ze() {
    var ve, Ae, He, Me;
    if (a) return;
    p.ui_settings = p.ui_settings || {};
    const r = Qb(p.ui_settings);
    if (c) {
      M.sidePanel = ty({
        coverage: p.coverage,
        uiSettings: r,
        normalizeCoverageValue: Ft
      });
      return;
    }
    const o = lt(), s = wn(), l = Da();
    s.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (u.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Xi(o)
    });
    const m = u.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = l === "stroke" ? null : o, _ = g || m, b = !!g;
    u.panelWasEnabled = b, Is();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const Z = [{ id: "", labelHtml: kl(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? Gn().forEach((Se, De) => {
        var Ge, We;
        const Le = Et(Se) ? String(Se.id || Or) : String(((We = (Ge = p.assets) == null ? void 0 : Ge[Se.asset_id]) == null ? void 0 : We.name) || Se.asset_id || Se.id), Oe = `${De + 1}. ${Le}${Et(Se) && Zr(Se) ? " (hidden)" : ""}`;
        Z.push({ id: Se.id, labelHtml: Fc({ item: Se, label: Oe, kind: "image" }), item: Se, kind: "image" });
      }) : Oc().forEach((Se) => {
        Z.push({ id: Se.item.id, labelHtml: Fc(Se), item: Se.item, kind: Se.kind });
      });
      const ce = (g == null ? void 0 : g.id) || "", ye = Z.find((Se) => Se.id === ce) || Z[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: Z.length <= 1,
        currentLabelHtml: ye.labelHtml,
        items: Z.map((Se) => ({ id: Se.id, labelHtml: Se.labelHtml, active: Se.id === ce }))
      };
    }
    const S = [], C = (Z, ce, ye, Se, De) => {
      const Le = q(Number(_[Z] || 0), ye, Se);
      S.push({
        key: Z,
        label: ce,
        min: ye,
        max: Se,
        step: De,
        value: Le,
        displayValue: _x(Le),
        fillPct: q((Le - ye) / Math.max(1e-6, Se - ye) * 100, 0, 100),
        enabled: b && !i
      });
    }, k = [];
    s.length > 1 ? (k.push(`Selected objects: ${s.length}`), k.push("Multi-selection supports z-order and delete.")) : (C("yaw_deg", "Yaw", -180, 180, 0.1), C("pitch_deg", "Pitch", -90, 90, 0.1), C("hFOV_deg", "H FOV", 1, 179, 0.1), C("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? C("rot_deg", "Rotation", -180, 180, 0.1) : C("roll_deg", "Roll", -180, 180, 0.1));
    const L = Array.isArray((Ae = (ve = p == null ? void 0 : p.painting) == null ? void 0 : ve.paint) == null ? void 0 : Ae.strokes) ? p.painting.paint.strokes.length : 0, F = Array.isArray((Me = (He = p == null ? void 0 : p.painting) == null ? void 0 : He.mask) == null ? void 0 : Me.strokes) ? p.painting.mask.strokes.length : 0, ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((Z) => String((Z == null ? void 0 : Z.name) || "")) : [], z = Xh(
      e,
      ee.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), W = !!String((z == null ? void 0 : z.src) || "").trim() || Ps("pano_input_images").length > 0, re = Array.isArray(Gn()) && Gn().length > 0 || L > 0, pe = F > 0, ae = [
      { key: "mask", label: "Mask", icon: Ot.circle_dashed_tool, visible: !!u.showMask, enabled: pe },
      { key: "objects", label: "Paint / Images", icon: Ot.image, visible: !!u.showObjects, enabled: re },
      { key: "panorama", label: "Panorama", icon: Ot.globe, visible: !!u.showPanorama, enabled: W }
    ].map((Z) => ({
      ...Z,
      ariaLabel: `Toggle ${Z.label.toLowerCase()}`,
      tip: Z.visible ? "Hide" : "Show"
    }));
    M.sidePanel = ny({
      coverage: p.coverage,
      readOnly: i,
      selectionPicker: x,
      enabled: b,
      selectedKind: l,
      selectedItems: s,
      params: S,
      notes: k,
      visibilityRows: ae,
      uiSettings: r,
      normalizeCoverageValue: Ft
    });
  }
  function Ga(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function hu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Ga(r)) return;
    const o = _o("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((_, b) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => b(new Error("image load failed")), x.src = s;
      });
      Q.set(o, l);
      const m = _o("st");
      p.stickers.push({
        id: m,
        asset_id: o,
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Tr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Vc()
      }), Ar(p.stickers[p.stickers.length - 1]), Gs(), ut(), ze(), $e(), ge();
      const g = (async () => {
        const _ = await Ls(r, String(r.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (p.assets[o] = _, ni(), yt(), ze(), $e(), ge());
      })();
      fo.set(o, g);
      try {
        await g;
      } finally {
        fo.delete(o);
      }
    } catch {
      delete p.assets[o], Q.delete(o);
      const l = Array.isArray(p.stickers) ? p.stickers : [], m = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
      m.length && (p.stickers = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), m.some((g) => {
        var _;
        return String((g == null ? void 0 : g.id) || "") === String(((_ = u.selection) == null ? void 0 : _.id) || "");
      }) && Ar(null), ze(), $e(), ge());
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
  function Hm() {
    i || t !== "stickers" && t !== "cutout" || pu((r) => {
      hu(r);
    });
  }
  async function jm(r) {
    var S;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = lt();
    if (!o || !bt(o) || Et(o) || !Ga(r)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), m = l ? Ut(((S = p.assets) == null ? void 0 : S[l]) || null) : null, g = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = _o("asset"), x = URL.createObjectURL(r);
    try {
      const C = await new Promise((L, F) => {
        const ee = new Image();
        ee.onload = () => L(ee), ee.onerror = () => F(new Error("image load failed")), ee.src = x;
      });
      Q.set(b, C), o.asset_id = b, o.vFOV_deg = Tr(
        Number(o.hFOV_deg || 30),
        Number(C.naturalWidth || C.width || 1),
        Number(C.naturalHeight || C.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Lt(), ut(), ze(), $e(), ge();
      const k = (async () => {
        const L = await Ls(r, String(r.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((z) => String((z == null ? void 0 : z.id) || "") === s && String((z == null ? void 0 : z.asset_id) || "") === b) && (p.assets[b] = L, ni(), yt(), ze(), $e(), ge());
      })();
      fo.set(b, k);
      try {
        await k;
      } finally {
        fo.delete(b);
      }
    } catch {
      delete p.assets[b], Q.delete(b);
      const C = (Array.isArray(p.stickers) ? p.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === s) || null;
      C && String(C.asset_id || "") === b && (l && m && (p.assets[l] = m), C.asset_id = l, C.vFOV_deg = g, C.crop = _ ? { ..._ } : null), Lt(), ze(), $e(), ge();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function zm() {
    if (i) return;
    const r = lt();
    !r || !bt(r) || Et(r) || pu((o) => {
      jm(o);
    });
  }
  async function $m() {
    if (i || t !== "stickers") return;
    const r = p.assets && typeof p.assets == "object" ? p.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const m = String((l == null ? void 0 : l.type) || "").toLowerCase(), g = String((l == null ? void 0 : l.value) || "");
      return m === "dataurl" && g.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, m] of o)
      try {
        const g = String((m == null ? void 0 : m.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((k) => k.blob()), b = String(_.type || "image/png").split("/")[1] || "png", x = String((m == null ? void 0 : m.name) || `${l}.${b}`), S = new File([_], x, { type: _.type || "image/png" }), C = await Ls(S, x);
        p.assets[l] = {
          ...C,
          w: Number((m == null ? void 0 : m.w) || 0),
          h: Number((m == null ? void 0 : m.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (yt(), ge());
  }
  function Bm() {
    if (i || t !== "cutout") return;
    const r = Be();
    if (r) {
      Ar(r), u.mode = "pano", ys(
        Vt(Number(r.yaw_deg || 0)),
        q(Number(r.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), ze(), $e(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Ir(), s = dr(o), l = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (T == null ? void 0 : T.width) || 1
    )), m = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (T == null ? void 0 : T.height) || 1
    )), g = Math.max(0.1, l / m), _ = q(Number(u.viewFov || 90), 1, 179), b = q(Math.min(42, _ * 0.42), 8, 96), x = q(yr * (2 * Math.atan(Math.tan(b * It * 0.5) / Math.max(0.1, g))), 6, 72), S = Bh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Vt(Number(u.viewYaw || 0)),
      pitch_deg: q(Number(u.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: b,
      vFOV_deg: x,
      locked: !1
    });
    p.shots = [S], Ar(S), Gs(), u.mode = "pano", ut(), yt(), ze(), $e(), ge({ cause: "cutout_frame" });
  }
  function Um() {
    i || t === "cutout" && (p.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, p.active.selected_shot_id = null, ut(), yt(), ze(), ge());
  }
  function Km() {
    const r = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const s of r)
      Et(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function mu(r, o, s = "Clear") {
    return new Promise((l) => {
      M.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function Gm() {
    var s, l;
    if (i || !await mu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = fa(null), Sn();
    const o = Km();
    t === "stickers" ? (p.stickers = o, p.assets = {}, u.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ni()) : (p.stickers = o, p.assets = {}, p.shots = [], u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, ni()), ut(), yt(), ze(), $e(), ge();
  }
  async function Wm(r) {
    var g, _, b, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = si(o);
    if (!(!l.length && !(((g = u.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = u.interaction) == null ? void 0 : _.layerKind) === o) || !await mu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = u.interaction) == null ? void 0 : b.kind) === "draw" && ((x = u.interaction) == null ? void 0 : x.layerKind) === o) {
        const S = fn();
        S && u.paintEngine.cancelActiveStroke(S), u.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (zt().length = 0), Sn(), ut(), yt(), ze(), $e(), tn(), ge();
    }
  }
  function qm() {
    if (i) return;
    const r = lt();
    if (!r || !bt(r) || Et(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = _o("st"), o.yaw_deg = Vt((o.yaw_deg || 0) + 8), o.z_index = Vc(), p.stickers.push(o), p.active.selected_sticker_id = o.id, u.selectedId = o.id, u.selectedIds = [o.id], Lt(), ut(), yt(), $e(), ze(), ge();
  }
  function gu() {
    var s, l, m, g, _, b;
    if (i) return;
    const r = wn(), o = lt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((k) => kt(k)).map((k) => String(k.actionGroupId || k.id || ""))), S = new Set(r.filter((k) => $t(k)).map((k) => At(k.rasterObjectId || k.id || ""))), C = new Set(r.filter(bt).map((k) => String(k.id || "")));
        x.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((k) => !x.has(String((k == null ? void 0 : k.actionGroupId) || ""))), p.painting.groups = zt().filter((k) => !x.has(String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || ""))), Sn()), S.size > 0 && (p.painting.raster_objects = en().filter((k) => !S.has(String((k == null ? void 0 : k.id) || ""))), ai()), C.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((k) => C.has(String((k == null ? void 0 : k.id) || "")) ? Et(k) ? (Zr(k) || (k.visible = !1), !0) : !1 : !0), ni(), Lt()), u.selectedId = null, u.selectedIds = [], ut(), yt(), ze(), $e(), ge();
        return;
      }
      if (kt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (m = p.painting) == null ? void 0 : m.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== x), p.painting.groups = zt().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== x), Sn(), u.selectedId = null, u.selectedIds = [], ut(), yt(), ze(), $e(), ge();
        return;
      }
      if ($t(o)) {
        const x = At(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = en().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== x), ai(), u.selectedId = null, u.selectedIds = [], ut(), yt(), ze(), $e(), ge();
        return;
      }
      if (t === "stickers" || bt(o)) {
        if (Et(o)) {
          if (Zr(o)) return;
          o.visible = !1, Lt(), ut(), yt(), ze(), $e(), ge();
          return;
        }
        p.stickers = p.stickers.filter((x) => x.id !== o.id), ni(), Lt(), u.selectedId = ((_ = p.stickers[0]) == null ? void 0 : _.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, ut(), yt(), ze(), $e(), ge();
        return;
      }
      Um();
    }
  }
  function Ym(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const L = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(L)) {
        const [z, W] = L.split(":").map((re) => Number(re));
        if (Number.isFinite(z) && Number.isFinite(W)) return z >= W;
      }
      const F = Number(r.hFOV_deg || 64), ee = Number(r.vFOV_deg || 40);
      return Math.abs(F - ee) > 1e-6 ? F >= ee : ta(r) >= 1;
    })();
    let [m, g] = s[String(o)] || s["1:1"];
    m >= g !== l && ([m, g] = [g, m]);
    const _ = m / g, b = q(Number(r.hFOV_deg || 64), 1, 179), x = q(Number(r.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * x)), C = q(S * Math.sqrt(_), 1, 179), k = q(S / Math.sqrt(_), 1, 179);
    r.hFOV_deg = C, r.vFOV_deg = k, r.aspect_id = String(o);
  }
  function Xm(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Hr(r);
  }
  function vu() {
    qr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Zm() {
    if (i) return;
    const r = wn();
    if (!lt() || r.length === 0) return;
    vu();
    const s = qr(), l = new Set(r.map((b) => bt(b) ? `sticker:${String(b.id || "")}` : $t(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), m = [], g = [];
    if (s.forEach((b) => {
      var S, C;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? m.push(b) : g.push(b);
    }), !m.length || m[m.length - 1] === s[s.length - 1]) return;
    [...g, ...m].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Lt(), ut(), yt(), $e(), ge();
  }
  function Jm() {
    if (i) return;
    const r = wn();
    if (!lt() || r.length === 0) return;
    vu();
    const s = qr(), l = new Set(r.map((b) => bt(b) ? `sticker:${String(b.id || "")}` : $t(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), m = [], g = [];
    if (s.forEach((b) => {
      var S, C;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? m.push(b) : g.push(b);
    }), !m.length || m[0] === s[0]) return;
    [...m, ...g].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Lt(), ut(), yt(), $e(), ge();
  }
  function Qm() {
    i || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", d && (p.output_preset = Xl(d.value, Number(p.output_preset || 2048))), h && (p.coverage = Ft(h.value)), v && (p.bg_color = String(v.value || p.bg_color || "#00ff00")), vn(), e.setDirtyCanvas(!0, !0));
  }
  function vn() {
    var o;
    if (i) return;
    p.coverage = Ft(p.coverage);
    const r = JSON.stringify(p);
    y && (y.value = r, (o = y.callback) == null || o.call(y, r));
  }
  function Wa() {
    p.ui_settings = Mx(p.ui_settings), i || vn();
  }
  function yt() {
    var r;
    i || (vn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function eg() {
    i || Hp() && Zc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function tg(r = {}) {
    var l, m, g, _, b, x, S, C, k, L;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((m = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || m.call(l), (_ = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), s && ((S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (L = (k = (C = wr) == null ? void 0 : C.canvas) == null ? void 0 : k.setDirty) == null || L.call(k, !0, !0));
  }
  function Gs() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", tn(), ze());
  }
  function oi(r) {
    const o = T.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * T.width,
      y: (r.clientY - o.top) / o.height * T.height
    };
  }
  function qa(r) {
    const o = T.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function bu() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function Be() {
    if (t !== "cutout") return null;
    const r = Array.isArray(p.shots) ? p.shots : [];
    if (!r.length) return null;
    const o = String(p.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Tt(r = Be()) {
    var _, b, x;
    if (!r || !T) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(T.width || 0) - 48),
      h: Math.max(1, Number(T.height || 0) - 48)
    }, s = q(ta(r), 0.1, 10);
    let l = o.w, m = Math.max(1, Math.round(l / s));
    m > o.h && (m = o.h, l = Math.max(1, Math.round(m * s)));
    const g = Math.max(0.1, Number(((_ = u.frameView) == null ? void 0 : _.zoom) || 1));
    return l *= g, m *= g, {
      x: Math.round(o.x + (o.w - l) * 0.5 + Number(((b = u.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - m) * 0.5 + Number(((x = u.frameView) == null ? void 0 : x.panY) || 0)),
      w: Math.max(1, Math.round(l)),
      h: Math.max(1, Math.round(m))
    };
  }
  function Ws() {
    return t === "cutout" && !!Be();
  }
  function Nn(r, o = performance.now()) {
    if (u.mode === "unwrap") {
      const g = fr(), _ = (r.x - g.x) / Math.max(1, g.w), b = (r.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: q(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Ds(r.x, r.y), { lon: l, lat: m } = Os(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - m / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Mn(r, o, s = performance.now()) {
    const l = Tt(o);
    if (!l) return null;
    const m = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    };
    if (m.x < 0 || m.x > 1 || m.y < 0 || m.y > 1) return null;
    const g = js(o, m);
    if (!g) return null;
    const { lon: _, lat: b } = Os(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function ng(r, o) {
    var S;
    const s = Be(), l = Tt(s);
    if (!s || !l) return !1;
    const m = Math.max(0.1, Number(((S = u.frameView) == null ? void 0 : S.zoom) || 1)), g = q(m * Number(o), 0.25, 12);
    if (Math.abs(g - m) < 1e-6) return !1;
    const _ = (Number(r.x) - l.x) / Math.max(1e-6, l.w), b = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    u.frameView.zoom = g;
    const x = Tt(s);
    return x ? (u.frameView.panX += Number(r.x) - (x.x + x.w * _), u.frameView.panY += Number(r.y) - (x.y + x.h * b), !0) : !1;
  }
  function rg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function pr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Xn : nn[o] ? o : u.activeBrushPresetId || Xn;
  }
  function yu() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (bu() || Ws());
  }
  function _u() {
    var r;
    return yu() && ((r = u.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Ya(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), m = o !== !1, g = u.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== m || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return u.pointerPos = { x: s, y: l, inside: m }, _;
  }
  function ig() {
    var C, k;
    if (!_u()) return null;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool, s = pr(o), l = nn[s] || nn[Xn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), b = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : dn(u.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : q(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : q(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: Dn(b, x),
      strokeStyle: Dn(b, S),
      x: Number(((C = u.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((k = u.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function ag() {
    var L, F, ee;
    const r = ig();
    if (!oe) return;
    if (!r) {
      oe.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, l = "999px", m = 0, g = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let C = Number(r.hotspotX ?? o * 0.5), k = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = es, s = es, l = "0", _ = "0", b = "none", C = cx, k = ux, g = bx(r.fillStyle, S, x);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const z = Math.max(1, Number(((L = r.preset) == null ? void 0 : L.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * z), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, m = Number(((ee = (F = r.preset) == null ? void 0 : F.angle) == null ? void 0 : ee.value) || 0) * yr;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    oe.style.display = "block", oe.style.width = `${Math.round(o)}px`, oe.style.height = `${Math.round(s)}px`, oe.style.borderRadius = l, oe.style.border = _, oe.style.boxShadow = b, oe.style.background = g, oe.style.backgroundRepeat = "no-repeat", oe.style.backgroundPosition = "center", oe.style.backgroundSize = "contain", oe.style.transform = `translate(${Math.round(r.x - C)}px, ${Math.round(r.y - k)}px) rotate(${m}deg)`;
  }
  function og() {
    var pe;
    if (!ie || !xe) return;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool;
    if (o === "lasso_fill") return;
    const s = pr(o), l = nn[s] || nn[Xn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), b = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : dn(u.paintColor), S = r === "mask" ? Dn(x, 0.22) : b ? "rgba(255,255,255,0.14)" : Dn(x, q(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), C = r === "mask" ? Dn(x, 0.96) : b ? "rgba(255,255,255,0.72)" : Dn(x, q(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let k = _ * 2, L = _ * 2, F = "999px", ee = 0, z = S;
    const W = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ae = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, _ * 2 * ae), L = Math.max(10, _ * 2), F = `${Math.min(8, L * 0.42)}px`, ee = Number(((pe = l == null ? void 0 : l.angle) == null ? void 0 : pe.value) || 0) * yr;
    } else o === "brush" ? z = `radial-gradient(circle at 50% 50%, ${C} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, _ * 1.8), L = k, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : b && (z = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(k)}px`, xe.style.height = `${Math.round(L)}px`, xe.style.borderRadius = F, xe.style.background = z, xe.style.border = `1px solid ${W}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${ee}deg)`, Qe && (clearTimeout(Qe), Qe = 0), ie.classList.remove("fade-out"), ie.classList.add("show");
  }
  function Xa() {
    !ie || !ie.classList.contains("show") || (ie.classList.add("fade-out"), Qe && clearTimeout(Qe), Qe = window.setTimeout(() => {
      ie.classList.remove("show", "fade-out"), Qe = 0;
    }, 180));
  }
  function xu(r, o, s, l) {
    const m = pr(o), g = nn[m] || nn[Xn], _ = u.brushSizes[m] ?? 10, b = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), x = rg(l, b), S = s.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), C = {
      id: di(r),
      actionGroupId: di("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((k) => ({ ...k })),
        points: S.map((k) => ({ ...k }))
      }
    };
    return Hf(C, g), Number(g.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function wu(r, o, s, l) {
    const m = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), g = pr(o), _ = nn[g] || nn[Xn], b = {
      id: di(r),
      actionGroupId: di("ag"),
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
        points: m.map((x) => ({ ...x }))
      }
    };
    return Hf(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function si(r) {
    const o = p.painting || (p.painting = fa(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function sg(r, o, s = performance.now()) {
    let l;
    if (u.mode === "frame") {
      const S = Be();
      if (!S || (l = Mn(o, S, s), !l)) return !1;
    } else
      l = Nn(o, s);
    if (!l) return !1;
    const m = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, _ = m[m.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && C < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    m.push({ ...b }), g.push({ ...b });
    const x = fn();
    if (x) {
      const S = u.paintEngine.ensureTarget(x);
      u.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), r.stroke);
    }
    return !0;
  }
  function lg(r, o, s = performance.now()) {
    var _, b;
    let l;
    if (u.mode === "frame") {
      const x = Be();
      if (!x) return !1;
      l = Mn(o, x, s);
    } else
      l = Nn(o, s);
    const m = (b = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(m)) return !1;
    const g = m[m.length - 1];
    if (g) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (x < 15e-4 && S < 15e-4) return !1;
    }
    return m.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function cg(r) {
    var ae, ve, Ae, He, Me;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Ua();
    const s = fn(), l = Hi(s.width, s.height);
    if (!cu(l, o, { w: s.width, h: s.height })) return !1;
    const m = ((ve = (ae = l.ctx) == null ? void 0 : ae.getImageData(0, 0, s.width, s.height)) == null ? void 0 : ve.data) || null;
    if (!m) return !1;
    const g = new Map(zt().map((Z) => [String((Z == null ? void 0 : Z.actionGroupId) || (Z == null ? void 0 : Z.id) || "").trim(), Z ? { ...Z } : null])), _ = [], b = [], x = [...en().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") !== "paint")];
    let S = !1, C = qr().reduce((Z, ce) => Math.max(Z, Number((ce == null ? void 0 : ce.z_index) || 0)), -1) + 1;
    function k(Z, ce, ye, Se = 8) {
      let De = ce, Le = ye, Oe = -1, Ge = -1;
      for (let We = 0; We < ye; We += 1)
        for (let Ye = 0; Ye < ce; Ye += 1)
          Z[(We * ce + Ye) * 4 + 3] <= Se || (Ye < De && (De = Ye), We < Le && (Le = We), Ye > Oe && (Oe = Ye), We > Ge && (Ge = We));
      return Oe < De || Ge < Le ? null : { minX: De, minY: Le, maxX: Oe, maxY: Ge };
    }
    const L = k(m, s.width, s.height, 8);
    if (!L) return !1;
    function F(Z, ce) {
      return !Z || !ce ? !1 : !(Z.maxX < ce.minX || ce.maxX < Z.minX || Z.maxY < ce.minY || ce.maxY < Z.minY);
    }
    function ee(Z, ce) {
      const ye = lr((Z == null ? void 0 : Z.actionGroupId) || (Z == null ? void 0 : Z.id) || "", "paint", ce);
      if (!ye) return null;
      const Se = ye.centerUv.u - ye.halfW, De = ye.centerUv.u + ye.halfW, Le = ye.centerUv.v - ye.halfH, Oe = ye.centerUv.v + ye.halfH, Ge = s.width, We = s.height;
      return {
        minX: Math.floor((Se % 1 + 1) % 1 * Ge),
        maxX: Math.ceil((De % 1 + 1) % 1 * Ge),
        minY: Math.floor(q(Le, 0, 1) * We),
        maxY: Math.ceil(q(Oe, 0, 1) * We),
        wraps: De - Se >= 1 || Se < 0 || De > 1
      };
    }
    function z(Z) {
      const ce = (Z == null ? void 0 : Z.bbox) || null;
      if (!ce) return null;
      const ye = (Z == null ? void 0 : Z.transform) || {}, Se = s.width, De = s.height, Le = Number(ce.u0 || 0) + Number(ye.du || 0), Oe = Number(ce.u1 || 0) + Number(ye.du || 0), Ge = Number(ce.v0 || 0) + Number(ye.dv || 0), We = Number(ce.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Se),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * Se),
        minY: Math.floor(q(Ge, 0, 1) * De),
        maxY: Math.ceil(q(We, 0, 1) * De),
        wraps: Oe - Le >= 1 || Le < 0 || Oe > 1
      };
    }
    function W(Z) {
      return Z ? Z.wraps ? F(L, { minX: 0, maxX: Z.maxX, minY: Z.minY, maxY: Z.maxY }) || F(L, { minX: Z.minX, maxX: s.width - 1, minY: Z.minY, maxY: Z.maxY }) : F(L, Z) : !0;
    }
    function re(Z) {
      if (!Z) return { touched: !1, canvas: null };
      const ce = Hi(s.width, s.height, { readback: !0 });
      ce.ctx.drawImage(Z, 0, 0);
      const ye = ce.ctx.getImageData(0, 0, s.width, s.height);
      ce.ctx.save(), ce.ctx.globalCompositeOperation = "destination-out", ce.ctx.drawImage(l.canvas, 0, 0), ce.ctx.restore();
      const Se = ce.ctx.getImageData(0, 0, s.width, s.height);
      for (let De = 0; De < s.width * s.height; De += 1) {
        if (m[De * 4 + 3] <= 8) continue;
        const Oe = ye.data[De * 4 + 3], Ge = Se.data[De * 4 + 3];
        if (Oe > Ge)
          return { touched: !0, canvas: ce.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(Z, ce, ye) {
      const Se = Number(ye == null ? void 0 : ye.z_index), De = Cm(Z, ce, ye).map((Le, Oe) => ({
        ...Le,
        z_index: Number.isFinite(Se) ? Se + Oe * 1e-3 : C + Oe * 1e-3
      }));
      return De.length && (C = Math.max(C, ...De.map((Le) => Number((Le == null ? void 0 : Le.z_index) || 0))) + 1), De;
    }
    for (const Z of zt()) {
      const ce = String((Z == null ? void 0 : Z.actionGroupId) || (Z == null ? void 0 : Z.id) || "").trim();
      if (!ce) continue;
      const ye = xn(ce, "paint");
      if (!W(ee(Z, ye))) {
        b.push(Z), _.push(...ye);
        continue;
      }
      const Se = ((He = (Ae = u.paintEngine) == null ? void 0 : Ae.getGroupTarget) == null ? void 0 : He.call(Ae, ce)) || null, De = ((Me = Se == null ? void 0 : Se.committedPaint) == null ? void 0 : Me.canvas) || null;
      if (!De) {
        b.push(Z), _.push(...ye);
        continue;
      }
      const Le = re(De);
      if (!Le.touched || !Le.canvas) {
        b.push(Z), _.push(...ye);
        continue;
      }
      S = !0;
      const Oe = pe(Le.canvas, "paint", g.get(ce) || Z || {});
      x.push(...Oe);
    }
    for (const Z of en().filter((ce) => String((ce == null ? void 0 : ce.layerKind) || "paint") === "paint")) {
      if (!W(z(Z))) {
        x.push(Z);
        continue;
      }
      const ce = Yc(Z, null);
      if (!ce) {
        x.push(Z);
        continue;
      }
      const ye = re(ce);
      if (!ye.touched || !ye.canvas) {
        x.push(Z);
        continue;
      }
      S = !0;
      const Se = pe(ye.canvas, "paint", Z);
      x.push(...Se);
    }
    return S ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((Z, ce) => Number((Z == null ? void 0 : Z.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0)), p.painting.raster_objects = x.sort((Z, ce) => Number((Z == null ? void 0 : Z.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0)), ti({ preservePanelValues: !1 }), !0) : !1;
  }
  function ug(r) {
    var _, b, x, S, C;
    if ((((b = (_ = r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.rawPoints) || ((S = (x = r.stroke) == null ? void 0 : x.geometry) == null ? void 0 : S.points) || []).length >= 1) {
      qs(r);
      const k = fn();
      k && (String(((C = r.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(k) : u.paintEngine.commitActiveStroke(r.stroke, k)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, m = xu(r.layerKind, s.toolKind, [], l);
    m.actionGroupId = s.actionGroupId, r.stroke = m;
    const g = fn();
    g && u.paintEngine.beginStroke(m, g);
  }
  function fg(r) {
    var _, b;
    if ((((b = (_ = r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      qs(r);
      const x = fn();
      x && u.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, m = wu(r.layerKind, s.toolKind, [], l);
    m.actionGroupId = s.actionGroupId, r.stroke = m;
    const g = fn();
    g && u.paintEngine.beginStroke(m, g);
  }
  function qs(r) {
    var g, _, b, x;
    const o = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!o) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = zs(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), cg(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Ic((b = r.stroke) == null ? void 0 : b.actionGroupId), si(r.layerKind).push(r.stroke), !0);
    const m = o.rawPoints || o.points || [];
    return m.length < 1 ? !1 : (o.processedPoints = zs(m, r.stroke.targetSpace, !0), l && Ic((x = r.stroke) == null ? void 0 : x.actionGroupId), si(r.layerKind).push(r.stroke), !0);
  }
  function Su(r) {
    var s;
    if (t === "cutout" && u.mode === "frame") {
      const l = Be(), m = Tt(l);
      if (!l || !m || !(Number((r == null ? void 0 : r.x) || 0) >= Number(m.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(m.x || 0) + Number(m.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(m.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(m.y || 0) + Number(m.h || 0))) return null;
      const _ = Mn(r, l, performance.now()), b = _ ? ri(_) : null;
      if (b)
        for (const S of Hs()) {
          if (!bt(S)) continue;
          const C = zi(S, b);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const k = Dt(S);
            if (k != null && k.visible) return { item: S, geom: k };
          }
        }
      const x = ws(!1).slice().sort((S, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of x) {
        if (S.type === "strokeGroup") {
          const L = Xr(Di("paint", S.actionGroupId || S.id || ""));
          if (!L) continue;
          const F = Dt(L);
          if (!(F != null && F.visible)) continue;
          const ee = Array.isArray(F.strokePaths) ? F.strokePaths : [];
          for (const z of ee) {
            const W = Array.isArray(z == null ? void 0 : z.points) ? z.points : [];
            if (!W.length) continue;
            if (z.closed && W.length >= 3 && Zn(r, W)) return { item: L, geom: F };
            const re = Math.max(8, Number((z == null ? void 0 : z.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < W.length - 1; pe += 1)
              if (Sl(r, W[pe], W[pe + 1]) <= re * re) return { item: L, geom: F };
            if (W.length === 1 && vr(r, W[0]) <= re * re) return { item: L, geom: F };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const L = Yr(Li(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!L) continue;
          const F = Dt(L);
          if (qc(L, F, r, _)) return { item: L, geom: F };
          continue;
        }
        const C = S.item;
        if (!C || !bt(C) || !b) continue;
        const k = zi(C, b);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const L = Dt(C);
          if (L != null && L.visible) return { item: C, geom: L };
        }
      }
      return null;
    }
    const o = [
      ...ws(!1).slice().sort((l, m) => Number((m == null ? void 0 : m.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var m;
        return l.type === "strokeGroup" ? Xr(Di("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Yr(Li(((m = l.item) == null ? void 0 : m.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? Hs().filter((l) => un(l)) : []
    ];
    for (const l of o) {
      if (kt(l)) {
        const g = Dt(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of _) {
          const x = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!x.length) continue;
          if (b.closed && x.length >= 3 && Zn(r, x)) return { item: l, geom: g };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < x.length - 1; C += 1)
            if (Sl(r, x[C], x[C + 1]) <= S * S) return { item: l, geom: g };
          if (x.length === 1 && vr(r, x[0]) <= S * S) return { item: l, geom: g };
        }
        continue;
      }
      if ($t(l)) {
        const g = Dt(l);
        if (!(g != null && g.visible)) continue;
        if (qc(l, g, r)) return { item: l, geom: g };
        continue;
      }
      const m = Dt(l);
      if (m.visible && Zn(r, m.corners))
        return { item: l, geom: m };
    }
    return null;
  }
  function Ys(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((g) => vr(g, o) <= 121);
      if (l >= 0) {
        const g = r.corners[l], _ = g.x - r.center.x, b = g.y - r.center.y, x = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: x };
      }
      const m = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const g of m) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && Zn(o, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < _.length - 1; x += 1)
          if (Sl(o, _[x], _[x + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((m) => vr(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], g = m.x - r.center.x, _ = m.y - r.center.y, b = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((m) => vr(m, o) <= 169);
      if (l) {
        const m = l.edge === "left" || l.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => vr(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], m = l.x - r.center.x, g = l.y - r.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return vr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
  }
  function Nu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function dg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function hg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((m) => dg(r, m))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!Zn({ x: s, y: l }, o.corners);
  }
  function dt(r) {
    if (ag(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? te("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? te("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? te("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? te(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? te("grabbing") : te("default");
      return;
    }
    if (_u()) {
      te("none");
      return;
    }
    if (u.mode === "frame" && u.primaryTool !== "cursor") {
      te("default");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      te("default");
      return;
    }
    const o = lt(), s = o ? Dt(o) : null, l = o ? cr(o) : !1, m = l ? { kind: "none", cursor: "default" } : Ys(s, r);
    if (!l && m.kind !== "none") {
      te(m.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && Su(r)) {
      te("default");
      return;
    }
    te(u.mode === "pano" ? "grab" : "default");
  }
  function $e() {
    var m, g;
    if (!B) return;
    const r = lt(), o = wn();
    if (!r && o.length === 0 || u.interaction) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Da(), l = ry({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Ms(o) : Dt(r),
      allLocked: ks(o),
      selectedLocked: cr(r),
      activeAspect: Xi(r),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: Et,
      isStickerHidden: Zr,
      canRestoreSelectedToInitial: yp,
      iconSet: Ot
    });
    if (!l.visible) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    M.selectionMenu = {
      visible: !0,
      left: ((m = M.selectionMenu) == null ? void 0 : m.left) ?? l.left ?? 0,
      top: ((g = M.selectionMenu) == null ? void 0 : g.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var L, F, ee;
      if (!B || M.selectionMenu.visible !== !0) return;
      const _ = B.getBoundingClientRect(), b = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, x = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, S = 14;
      let C = q((Number(((L = l.anchor) == null ? void 0 : L.minX) || 0) + Number(((F = l.anchor) == null ? void 0 : F.maxX) || 0)) * 0.5 - b * 0.5, S, T.width - b - S), k = Number(((ee = l.anchor) == null ? void 0 : ee.maxY) || 0) + 18;
      if (!Number.isFinite(C) || !Number.isFinite(k) || k + x > T.height - S) {
        M.selectionMenu.visible = !1;
        return;
      }
      M.selectionMenu.left = C, M.selectionMenu.top = k;
    });
  }
  function Za() {
    J.timer && (clearTimeout(J.timer), J.timer = 0), J.target = null, M.tooltip.visible = !1, M.tooltip.text = "", M.tooltip.variant = "";
  }
  function pg(r) {
    if (!ne || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    M.tooltip.text = o, M.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var ee, z;
      if (J.target !== s || !ne || !(s != null && s.isConnected)) return;
      const l = X.getBoundingClientRect(), m = s.getBoundingClientRect(), g = 8, _ = 12, b = Math.round(Number(((ee = ne.getBoundingClientRect()) == null ? void 0 : ee.width) || 0)) || 100, x = Math.round(Number(((z = ne.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, S = !!s.closest(".pano-floating-left"), C = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let k = "", L = m.left - l.left + m.width * 0.5 - b * 0.5, F = m.top - l.top - x - _;
      if (S)
        k = "tool-rail", L = m.right - l.left + 10, F = m.top - l.top + m.height * 0.5 - x * 0.5, L = q(L, g, Math.max(g, l.width - b - g)), F = q(F, g, Math.max(g, l.height - x - g));
      else if (C) {
        k = "footer";
        const W = s.closest(".pano-paint-footer"), re = W ? W.getBoundingClientRect() : m;
        L = re.left - l.left + re.width * 0.5 - b * 0.5, F = re.bottom - l.top + 5, L = q(L, g, Math.max(g, l.width - b - g)), F = Math.max(g, F);
      }
      L = q(L, g, Math.max(g, l.width - b - g)), F = Math.max(g, F), M.tooltip.left = L, M.tooltip.top = F, M.tooltip.variant = k, M.tooltip.visible = !0;
    });
  }
  const Rt = ps({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (r) => {
      u.viewYaw = Vt(Number(r.yaw || 0)), u.viewPitch = q(Number(r.pitch || 0), -89.9, 89.9), u.viewFov = q(Number(r.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || T.clientWidth || 0)),
        h: Math.max(1, Number(r.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = p.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = p.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: fr,
    onInteraction: () => {
      U.backgroundDirty = !0, U.dirty = !0;
    }
  });
  T.onpointerdown = (r) => {
    const o = oi(r);
    if (Ya(o, !0), u.viewTween = null, Rt.state.inertia.active = !1, Rt.state.inertia.vx = 0, Rt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), u.mode === "frame")
        u.interaction = { kind: "pan_frame", last: o };
      else {
        const b = u.mode === "unwrap" ? o : qa(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Rt.startDrag(b.x, b.y, r.pointerId, performance.now());
      }
      dt(o), T.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (u.mode === "pano") {
        const b = qa(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Rt.startDrag(b.x, b.y, r.pointerId, performance.now()), dt(o), T.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (we && !we.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (bu() || Ws())) {
      const b = u.primaryTool === "mask" ? "mask" : "paint", x = u.primaryTool === "mask" ? u.maskTool : u.paintTool, S = u.mode === "frame" && Ws() ? Be() : null, C = { kind: "ERP_GLOBAL" }, k = S ? Mn(o, S, performance.now()) : Nn(o, performance.now());
      if (!k) {
        dt(o);
        return;
      }
      u.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: di("live"),
        stroke: x === "lasso_fill" ? wu(b, x, [k], C) : xu(b, x, [k], C)
      }, Fi();
      const L = fn();
      if (L)
        if (u.paintEngine.beginStroke(u.interaction.stroke, L), u.interaction.kind === "paint_stroke") {
          const F = u.paintEngine.ensureTarget(L), ee = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), z = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          u.paintEngine.appendStrokePoint(F, ee, z, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, L);
      dt(o), T.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = wn(), l = lt(), m = s.length > 1 ? Ms(s) : l ? Dt(l) : null;
    if (u.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      u.interaction = { kind: "marquee_select", start: o, current: o }, dt(o), T.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (m != null && m.visible)) {
      if ((s.some((x) => cr(x)) ? { kind: "none" } : Ys(m, o)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - m.center.x, y: o.y - m.center.y },
          startCenter: { x: m.center.x, y: m.center.y },
          stickerSnapshots: s.filter((x) => bt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var C, k;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((C = S.center) == null ? void 0 : C.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => kt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Ut(xn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Ut(lr(x.actionGroupId, x.layerKind)),
            center: (() => {
              var C, k;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((C = S.center) == null ? void 0 : C.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ns(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => $t(x)).map((x) => ({
            id: At(x.rasterObjectId || x.id || ""),
            snapshot: Ut(en().find((S) => String((S == null ? void 0 : S.id) || "") === At(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var C, k;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((C = S.center) == null ? void 0 : C.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: eu(x)
          }))
        }, dt(o), T.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (m != null && m.visible)) {
      const b = cr(l) ? { kind: "none" } : Ys(m, o);
      if (b.kind === "scale") {
        u.interaction = kt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          snapshot: Ut(xn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ut(lr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : $t(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          snapshot: Ut(en().find((x) => String((x == null ? void 0 : x.id) || "") === At(l.rasterObjectId || l.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, dt(o), T.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        u.interaction = {
          kind: b.kind,
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, dt(o), T.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        u.interaction = kt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: m.center,
          startAng: Math.atan2(o.y - m.center.y, o.x - m.center.x),
          snapshot: Ut(xn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ut(lr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: m.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - m.center.y, o.x - m.center.x)
        }, dt(o), T.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (kt(l)) {
          const x = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? Mn(o, S, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: Ut(xn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ut(lr(l.actionGroupId, l.layerKind))
          }, dt(o), T.setPointerCapture(r.pointerId);
          return;
        }
        if ($t(l)) {
          const x = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? Mn(o, S, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: Ut(en().find((S) => String((S == null ? void 0 : S.id) || "") === At(l.rasterObjectId || l.id || "")))
          }, dt(o), T.setPointerCapture(r.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - m.center.x, y: o.y - m.center.y }
        }, dt(o), T.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = Su(o);
    if (g) {
      const b = u.selectedId !== g.item.id;
      if (b && u.selectedId && (ut(), vn()), Ar(g.item), t === "cutout" && b && (u.cutoutAspectOpen = !1), b && ze(), $e(), ge(), cr(g.item)) {
        dt(o);
        return;
      }
      u.interaction = {
        kind: kt(g.item) ? "move_stroke_group" : $t(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: o.x - g.geom.center.x, y: o.y - g.geom.center.y },
        startUv: kt(g.item) || $t(g.item) ? u.mode === "frame" ? (() => {
          const x = Be();
          return x ? Mn(o, x, performance.now()) : null;
        })() : Nn(o, performance.now()) : null,
        snapshot: kt(g.item) ? Ut(xn(g.item.actionGroupId, g.item.layerKind)) : $t(g.item) ? Ut(en().find((x) => String((x == null ? void 0 : x.id) || "") === At(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: kt(g.item) ? Ut(lr(g.item.actionGroupId, g.item.layerKind)) : null
      }, dt(o), T.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!u.selectedId;
    if (_ && (ut(), vn()), ti(), _ && ze(), $e(), ge(), u.mode === "pano") {
      const b = qa(r);
      u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Rt.startDrag(b.x, b.y, r.pointerId, performance.now()), dt(o), T.setPointerCapture(r.pointerId);
    }
  }, T.onpointermove = (r) => {
    var l, m, g, _, b, x, S, C, k, L, F, ee, z, W, re, pe, ae, ve, Ae, He;
    const o = oi(r);
    if (Ya(o, !0), !u.interaction) {
      dt(o);
      return;
    }
    dt(o);
    const s = u.interaction;
    if (s.kind === "paint_stroke") {
      const Me = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let Z = !1;
      Me.forEach((ce) => {
        const ye = oi(ce);
        if (u.mode === "frame") {
          const Se = Be(), De = Se ? Tt(Se) : null;
          if (De) {
            const Le = (ye.x - De.x) / Math.max(1, De.w), Oe = (ye.y - De.y) / Math.max(1, De.h);
            if (!(Le >= 0 && Le <= 1 && Oe >= 0 && Oe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, ug(s));
          }
        }
        sg(s, ye, performance.now()) && (Z = !0);
      }), Z && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Me = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let Z = !1;
      if (Me.forEach((ce) => {
        const ye = oi(ce);
        if (u.mode === "frame") {
          const Se = Be(), De = Se ? Tt(Se) : null;
          if (De) {
            const Le = (ye.x - De.x) / Math.max(1, De.w), Oe = (ye.y - De.y) / Math.max(1, De.h);
            if (!(Le >= 0 && Le <= 1 && Oe >= 0 && Oe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, fg(s));
          }
        }
        lg(s, ye, performance.now()) && (Z = !0);
      }), Z) {
        const ce = fn();
        ce && u.paintEngine.updateActiveStroke(s.stroke, ce), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Me = performance.now(), Z = u.mode === "unwrap" ? o : qa(r);
      Rt.moveDrag(Z.x, Z.y, u.mode === "unwrap" ? "unwrap" : "pano", Me), s.lastTs = Me, s.last = Z, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      u.frameView.panX += o.x - s.last.x, u.frameView.panY += o.y - s.last.y, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const Me = o.x - s.offset.x, Z = o.y - s.offset.y;
      if (u.mode === "frame" && t === "cutout") {
        const ce = Be(), ye = Tt(ce);
        if (!ce || !ye) return;
        const Se = {
          x: q((Me - ye.x) / Math.max(1, ye.w), 0, 1),
          y: q((Z - ye.y) / Math.max(1, ye.h), 0, 1)
        }, De = js(ce, Se);
        if (!De) return;
        const Le = go(De);
        s.item.yaw_deg = Le.yaw, s.item.pitch_deg = Le.pitch;
      } else if (u.mode === "unwrap") {
        const ce = fr(), ye = q((Me - ce.x) / Math.max(ce.w, 1), 0, 1), Se = q((Z - ce.y) / Math.max(ce.h, 1), 0, 1);
        s.item.yaw_deg = Vt(ye * 360 - 180), s.item.pitch_deg = q(90 - Se * 180, -90, 90);
      } else {
        const ce = Ds(Me, Z), ye = go(ce);
        s.item.yaw_deg = ye.yaw, s.item.pitch_deg = ye.pitch;
      }
      bt(s.item) && Lt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Me = u.mode === "frame" ? (() => {
        const ye = Be();
        return ye ? Mn(o, ye, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Me || !s.startUv) return;
      const Z = gn(Number(Me.u || 0), Number(s.startUv.u || 0)), ce = Number(Me.v || 0) - Number(s.startUv.v || 0);
      Dc((l = s.item) == null ? void 0 : l.actionGroupId, Z, ce, s.snapshot, (m = s.item) == null ? void 0 : m.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Me = u.mode === "frame" ? (() => {
        const ye = Be();
        return ye ? Mn(o, ye, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Me || !s.startUv) return;
      const Z = gn(Number(Me.u || 0), Number(s.startUv.u || 0)), ce = Number(Me.v || 0) - Number(s.startUv.v || 0);
      Rc(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", Z, ce, s.snapshot) && (ai(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const Z = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      sp(((b = s.item) == null ? void 0 : b.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", Z, s.snapshot) && (ai(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Me = o.x - Number(((S = s.offset) == null ? void 0 : S.x) || 0), Z = o.y - Number(((C = s.offset) == null ? void 0 : C.y) || 0);
      let ce = !1, ye = !1, Se = !1;
      const De = Me - Number(((k = s.startCenter) == null ? void 0 : k.x) || Me), Le = Z - Number(((L = s.startCenter) == null ? void 0 : L.y) || Z);
      for (const Oe of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ge = (t === "cutout" ? Ss() : Gn()).find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === String(Oe.id || ""));
        if (!Ge || !bt(Ge)) continue;
        const We = {
          x: Number(((F = Oe.center) == null ? void 0 : F.x) || 0) + De,
          y: Number(((ee = Oe.center) == null ? void 0 : ee.y) || 0) + Le
        };
        if (u.mode === "frame" && t === "cutout") {
          const Ye = Be(), St = Tt(Ye);
          if (!Ye || !St) continue;
          const Er = {
            x: q((We.x - St.x) / Math.max(1, St.w), 0, 1),
            y: q((We.y - St.y) / Math.max(1, St.h), 0, 1)
          }, Vu = js(Ye, Er);
          if (!Vu) continue;
          const Hu = go(Vu);
          Ge.yaw_deg = Hu.yaw, Ge.pitch_deg = Hu.pitch;
        } else if (u.mode === "unwrap") {
          const Ye = fr(), St = q((We.x - Ye.x) / Math.max(Ye.w, 1), 0, 1), Er = q((We.y - Ye.y) / Math.max(Ye.h, 1), 0, 1);
          Ge.yaw_deg = Vt(St * 360 - 180), Ge.pitch_deg = q(90 - Er * 180, -90, 90);
        } else {
          const Ye = Ds(We.x, We.y), St = go(Ye);
          Ge.yaw_deg = St.yaw, Ge.pitch_deg = St.pitch;
        }
        ce = !0;
      }
      for (const Oe of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ge = {
          x: Number(((z = Oe.center) == null ? void 0 : z.x) || 0) + De,
          y: Number(((W = Oe.center) == null ? void 0 : W.y) || 0) + Le
        }, We = u.mode === "frame" ? (() => {
          const St = Be();
          return St ? Mn(Ge, St, performance.now()) : null;
        })() : Nn(Ge, performance.now()), Ye = Oe.centerUv || null;
        if (We && Ye) {
          const St = gn(Number(We.u || 0), Number(Ye.u || 0)), Er = Number(We.v || 0) - Number(Ye.v || 0);
          Dc(Oe.id, St, Er, Oe.snapshot, Oe.layerKind, Oe.frameSnapshot) && (ce = !0, ye = !0);
        }
      }
      for (const Oe of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ge = {
          x: Number(((re = Oe.center) == null ? void 0 : re.x) || 0) + De,
          y: Number(((pe = Oe.center) == null ? void 0 : pe.y) || 0) + Le
        }, We = u.mode === "frame" ? (() => {
          const St = Be();
          return St ? Mn(Ge, St, performance.now()) : null;
        })() : Nn(Ge, performance.now()), Ye = Oe.centerUv || null;
        if (We && Ye) {
          const St = gn(Number(We.u || 0), Number(Ye.u || 0)), Er = Number(We.v || 0) - Number(Ye.v || 0);
          Rc(Oe.id, St, Er, Oe.snapshot) && (ce = !0, Se = !0);
        }
      }
      ce && (ye ? Sn({ rebuildPaintEngine: !1 }) : Se ? ai() : Lt(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const Z = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Lc((ae = s.item) == null ? void 0 : ae.actionGroupId, Z, 0, s.snapshot, (ve = s.item) == null ? void 0 : ve.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Me = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * yr;
      r.shiftKey && (Me = Math.round(Me / 45) * 45), Lc((Ae = s.item) == null ? void 0 : Ae.actionGroupId, 1, Me, s.snapshot, (He = s.item) == null ? void 0 : He.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const Z = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * Z, 1, 179), s.item.vFOV_deg = q(s.startVFOV * Z, 1, 179), s.item.aspect_id = Hr(s.item), bt(s.item) && Lt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const Z = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * Z, 1, 179), s.item.aspect_id = Hr(s.item), bt(s.item) && Lt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const Z = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = q(s.startVFOV * Z, 1, 179), s.item.aspect_id = Hr(s.item), bt(s.item) && Lt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let Z = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * yr, ce = s.startRot - Z;
      r.shiftKey && (ce = Math.round(ce / 45) * 45);
      const ye = bt(s.item) ? "rot_deg" : "roll_deg";
      s.item[ye] = ce, bt(s.item) && Lt(), ge({ localOnly: !0 });
    }
  }, T.onpointerup = () => {
    var o, s, l, m, g, _;
    const r = u.interaction;
    if (((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Fi();
      const b = qs(u.interaction), x = !!u.interaction._hasCommittedSegments;
      if (b || x) {
        Sn();
        const S = String(((l = u.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (S) {
          const k = zt().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === S);
          k && (k.frame = null);
        }
        const C = fn();
        C && (b ? String(((m = u.interaction.stroke) == null ? void 0 : m.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(C), ou()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, C) : u.paintEngine.cancelActiveStroke(C)), ut(), vn(), ze(), $e(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const S = fn();
        S && u.paintEngine.cancelActiveStroke(S);
      }
    } else if (((g = u.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = Nu(u.interaction.start, u.interaction.current), S = [
        ...t === "cutout" ? Hs().filter((C) => !un(C)) : [...Gn()],
        ...rp(),
        ...ip()
      ].filter((C) => hg(b, Dt(C)));
      fp(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && S.length && (u.cutoutAspectOpen = !1), ze(), $e(), ge();
    } else if (u.interaction && u.interaction.kind !== "view" && u.interaction.kind !== "pan_frame") {
      let b = !1;
      (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (b = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Sn({ rebuildPaintEngine: !0 }) : ai()), ut(), vn(), e.setDirtyCanvas(!0, !0), Ks(), u.hqFrames = 1, $e(), ge();
    }
    u.interaction = null, Fi(), r && r.kind === "view" && Rt.endDrag(performance.now()), La(), $e(), dt(u.pointerPos), ge();
  }, T.onpointercancel = () => {
    var r, o, s;
    if (((r = u.interaction) == null ? void 0 : r.kind) === "view" && Rt.endDrag(performance.now()), ((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Fi();
      const l = fn();
      l && u.paintEngine.cancelActiveStroke(l);
    }
    u.interaction = null, Fi(), La(), dt(u.pointerPos), ge({ localOnly: !0 });
  }, T.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, T.onmousemove = (r) => {
    const o = oi(r);
    Ya(o, !0), !u.interaction && dt(o);
  }, T.onmouseleave = () => {
    Ya(u.pointerPos, !1), dt(u.pointerPos);
  }, T.onwheel = (r) => {
    if (u.mode === "frame") {
      const o = oi(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      ng(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    u.mode === "pano" && (Rt.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, T.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Cr(!0));
  }, T.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), me.depth = 0, Cr(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((m) => Ga(m));
    s && hu(s);
  };
  const Mu = (r) => {
    t !== "stickers" && t !== "cutout" || i || bs(r) && (me.depth += 1, Cr(!0), r.preventDefault());
  }, ku = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!me.active && bs(r) && Cr(!0), me.active && r.preventDefault());
  }, Pu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !me.active) return;
    me.depth = Math.max(0, me.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (me.depth === 0 || o) && Cr(!1);
  }, Cu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (me.depth = 0, Cr(!1), bs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", Mu, !0), window.addEventListener("dragover", ku, !0), window.addEventListener("dragleave", Pu, !0), window.addEventListener("drop", Cu, !0);
  function Xs() {
    const { canUndo: r, canRedo: o } = du();
    Yi(M.toolButtons, "value", "undo", { disabled: !r }), Yi(M.toolButtons, "value", "redo", { disabled: !o });
  }
  const Au = (r, o, s = !1) => {
    var b;
    const l = lt(), m = Da();
    if (!l || m === "stroke") return;
    const g = (((b = M.sidePanel) == null ? void 0 : b.params) || []).find((x) => x.key === r);
    if (!g || g.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = q(_, Number(g.min), Number(g.max)), r === "yaw_deg" && (_ = Vt(_)), l[r] = _, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (l.aspect_id = Hr(l)), ze(), ge(), s && ut();
  };
  fe == null || fe.addEventListener("click", async (r) => {
    var l, m, g, _, b, x, S, C, k;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const L = Ft(o.getAttribute("data-coverage"));
      if (L === Ft(p.coverage)) return;
      p.coverage = L, u.coverage = L, h && (h.value = String(L)), c ? U.backgroundDirty = !0 : (vn(), tg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), $e(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((m = (l = M.sidePanel) == null ? void 0 : l.selectionPicker) != null && m.disabled) return;
      M.sidePanel.selectionPicker.open = !M.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      M.sidePanel.selectionPicker.open = !1;
      const L = String(o.getAttribute("data-selection-id") || "");
      let F = null;
      L && (t === "stickers" ? F = Gn().find((ee) => String((ee == null ? void 0 : ee.id) || "") === L) || null : F = ((g = Oc().find((ee) => {
        var z;
        return String(((z = ee == null ? void 0 : ee.item) == null ? void 0 : z.id) || "") === L;
      })) == null ? void 0 : g.item) || null), Ar(F || null), F && !kt(F) && ys(
        Vt(Number(F.yaw_deg || 0)),
        q(Number(F.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), ze(), $e(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const L = lt(), F = Da();
      if (!L || F === "stroke" || wn().length > 1) return;
      const ee = JSON.stringify(t === "cutout" && F !== "image" ? Uc(L) : Np(L));
      try {
        await navigator.clipboard.writeText(ee), (_ = M.sidePanel) != null && _.copyStateButton && (M.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var z;
          (z = M.sidePanel) != null && z.copyStateButton && (M.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const L = String(o.getAttribute("data-visibility") || "");
      L === "panorama" ? u.showPanorama = !u.showPanorama : L === "objects" ? u.showObjects = !u.showObjects : L === "mask" && (u.showMask = !u.showMask), ze(), ge();
      return;
    }
    if (s === "set-invert-x") {
      p.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Wa(), ze(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      p.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Wa(), ze(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (S = M.sidePanel) != null && S.uiSettings && (M.sidePanel.uiSettings.qualityOpen = !M.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const L = String(o.getAttribute("data-quality") || "balanced");
      p.ui_settings.preview_quality = L === "draft" || L === "high" ? L : "balanced", Wa(), ze(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Wa(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      ci();
      return;
    }
    if (s === "cancel-close") {
      ci();
      return;
    }
    s === "save-close" && (Qm(), ci());
  }), fe == null || fe.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Au(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), fe == null || fe.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Au(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Zs = () => {
    const r = !!u.showGrid;
    Yi(M.floatingButtons, "action", "toggle-grid", {
      icon: r ? Ot.eye : Ot.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Zs(), I.addEventListener("click", (r) => {
    var b, x, S, C;
    if ((x = (b = r.target) == null ? void 0 : b.matches) != null && x.call(b, "[data-confirm-overlay]")) {
      const k = (S = M.confirmDialog) == null ? void 0 : S.resolve;
      M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, k == null || k(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      u.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && u.mode === "frame" && lt() && un(lt()) && (ti({ preservePanelValues: !0 }), ze(), $e()), Gs(), La(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const k = String(s.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = k, (k === "paint" || k === "mask") && ti({ preservePanelValues: !0 }), tn(), ze(), $e(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const k = String(s.getAttribute("data-tool-ui-action") || "");
        if ((k === "undo" || k === "redo") && s.disabled) return;
        k === "undo" ? Us(-1) : k === "redo" ? Us(1) : k === "clear" ? Gm() : k === "add" || k === "add-image" ? Hm() : k === "add-or-look" && Bm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const k = String(s.getAttribute("data-paint-tool") || "pen");
        u.paintTool = k, ti({ preservePanelValues: !0 }), nn[k] && (u.activeBrushPresetId = k), tn(), ze(), $e(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ti({ preservePanelValues: !0 }), tn(), ze(), $e(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const k = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Wm(k);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const k = To.find((L) => L.id === s.getAttribute("data-paint-color-swatch"));
        if (!k) return;
        u.paintColor = dn(k.color), Ct(!0), tn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), we && !we.hidden ? Ct(!0) : mn(), tn();
        return;
      }
    }
    const l = String(((C = s == null ? void 0 : s.getAttribute) == null ? void 0 : C.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      if (ei(), H.paused) {
        j.mode = "playback", j.pendingPlaybackResume = !1, j.resumeAfterScrub = !1;
        const k = Number(M.videoTransport.duration || H.duration || 0), L = Number(H.currentTime || j.editorTime || 0), F = k > 0 && L >= k - 1e-3 ? 0 : Number(j.editorTime || L || 0), ee = Math.max(ft(), 0.04);
        j.editorTime = F, Math.abs(L - F) > ee ? (j.seeking = !1, j.pendingPlaybackResume = !0, As(F)) : H.play().catch(() => {
        });
      } else
        H.pause(), j.mode = "scrub", j.resumeAfterScrub = !1, j.pendingPlaybackResume = !1, j.editorTime = Number(H.currentTime || 0), Qr();
      Wn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: j.mode
      }), ge({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement) || !M.videoTransport.hasAudio) return;
      const k = !H.muted;
      H.muted = k, !k && Number(H.volume || 0) <= 0 && (H.volume = Math.max(0.01, Number(M.videoTransport.volume || 1))), Wn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: j.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? M.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (l === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, $e(), ge();
        return;
      }
      if (l === "aspect-set") {
        const k = lt();
        if (!k) return;
        const L = String(s.getAttribute("data-aspect") || "1:1");
        Ym(k, L), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Ks(), ut(), yt(), $e(), ge();
        return;
      }
      if (l === "rotate-90") {
        const k = lt();
        if (!k) return;
        Xm(k), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Ks(), ut(), yt(), $e(), ge();
        return;
      }
      if (l === "bring-front") {
        Zm();
        return;
      }
      if (l === "send-back") {
        Jm();
        return;
      }
      if (l === "duplicate") {
        qm();
        return;
      }
      if (l === "replace-image") {
        zm();
        return;
      }
      if (l === "toggle-lock") {
        up();
        return;
      }
      if (l === "back-initial") {
        vp();
        return;
      }
      if (l === "toggle-visible") {
        gp();
        return;
      }
      if (l === "delete") {
        gu();
        return;
      }
    }
    if (l === "reset-view") {
      ys(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      u.showGrid = !u.showGrid, Px(e == null ? void 0 : e.id, u.showGrid), Zs(), ge();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), vg();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const k = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = k, u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = k ? 1 : 0, u.outputPreviewAnimStartTs = performance.now(), Lu(), ge();
      return;
    }
    const m = r.target.closest("[data-paint-history-index]");
    if (!m) return;
    const g = Number(m.getAttribute("data-paint-history-index")), _ = u.customPaintHistory[g];
    _ && (u.customPaintColor = dn(_), u.paintColor = dn(_), tn());
  }), I.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(H instanceof HTMLVideoElement)) return;
      ei();
      const g = q(Number(o.value || 0), 0, Number(M.videoTransport.duration || 0));
      j.mode = "scrub", !j.seeking && !H.paused && !H.ended && (j.resumeAfterScrub = !0, H.pause()), j.editorTime = g, Ei(g), Wn({
        ready: !!H.getAttribute("src"),
        playing: !1,
        visible: ur(),
        currentTime: g,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: "scrub"
      }), Number(Y.__panoFrameIdx || 0) > 0 && (U.backgroundDirty = !0, U.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), As(g);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(H instanceof HTMLVideoElement)) return;
      const g = q(Number(s.value || 0), 0, 1);
      H.volume = g, H.muted = g <= 1e-4, Wn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: j.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: H.muted,
        volume: g
      });
      return;
    }
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const g = Math.max(1, Math.min(120, Math.round(Number(l.value)))), _ = pr(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[_] = g, tn(), og();
      return;
    }
    const m = r.target.closest("[data-paint-alpha-slider]");
    if (m) {
      const g = { ...u.customPaintColor, a: q(Number(m.value) / 100, 0, 1) };
      u.customPaintColor = dn(g), u.paintColor = dn(g), tn();
    }
  }), I.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(H instanceof HTMLVideoElement)) return;
      j.pendingPlaybackResume = !!j.resumeAfterScrub, j.resumeAfterScrub = !1, j.pendingPlaybackResume || (j.mode = "scrub"), j.seeking || (j.pendingPlaybackResume ? (j.pendingPlaybackResume = !1, j.mode = "playback", H.play().catch(() => {
      })) : (Qr(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Xa();
  }), I.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Xa();
  }), I.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Xa();
  }), I.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Xa();
  }), I.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !I.contains(o) || J.target !== o && (J.target = o, J.timer && clearTimeout(J.timer), J.timer = window.setTimeout(() => {
      J.target === o && pg(o);
    }, 220));
  }), I.addEventListener("pointerout", (r) => {
    var l, m;
    const o = r.target.closest("[data-tip]");
    !o || J.target !== o || (r.relatedTarget instanceof Element ? (m = (l = r.relatedTarget).closest) == null ? void 0 : m.call(l, "[data-tip]") : null) === o || Za();
  }), I.addEventListener("pointerdown", () => {
    Za();
  });
  const mg = (r, o) => {
    var b;
    if (!Ee) return;
    const s = Ee.getBoundingClientRect(), l = q((r - s.left) / Math.max(1, s.width), 0, 1), m = 1 - q((o - s.top) / Math.max(1, s.height), 0, 1), g = Ml(u.customPaintColor), _ = { ...Nl(g.h, l, m), a: Number(((b = u.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    u.customPaintColor = dn(_), u.paintColor = dn(_), tn();
  }, gg = (r) => {
    var g;
    if (!Ke) return;
    const o = Ke.getBoundingClientRect(), s = q((r - o.left) / Math.max(1, o.width), 0, 1), l = Ml(u.customPaintColor), m = { ...Nl(s, l.s, l.v), a: Number(((g = u.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    u.customPaintColor = dn(m), u.paintColor = dn(m), tn();
  }, Tu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const l = (g) => {
      g.pointerId === s && o(g);
    }, m = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m);
  };
  Ee && (Ee.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Tu(r, (o) => mg(o.clientX, o.clientY));
  }), Ke && (Ke.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Tu(r, (o) => gg(o.clientX));
  }), I.addEventListener("click", (r) => {
    var m;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (m = M.confirmDialog) == null ? void 0 : m.resolve;
    M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const Iu = () => {
    const r = !!u.fullscreen;
    Yi(M.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Ot.fullscreen_close : Ot.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ja = (r) => {
    const o = !!r;
    u.fullscreen !== o && (u.fullscreen = o, I.classList.toggle("pano-modal-fullscreen", o), o ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Zs(), Iu(), ge());
  }, Eu = () => document.fullscreenElement === D, vg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Ja(!u.fullscreen);
        return;
      }
      Eu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = D.requestFullscreen) == null ? void 0 : r.call(D));
    } catch {
      Ja(!u.fullscreen);
    }
  }, Du = () => {
    document.fullscreenEnabled && Ja(Eu());
  };
  document.addEventListener("fullscreenchange", Du), Iu();
  const Lu = () => {
    const r = !!u.outputPreviewExpanded;
    M.outputPreviewToggle.icon = r ? Ot.fullscreen_close : Ot.fullscreen, M.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", M.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Lu();
  const Js = e.onExecuted, Qs = e.onConnectionsChange;
  let el = null, tl = null, nl = null;
  !i && t === "stickers" && (nl = (r = "sync") => {
    Kc(r);
  }, e.__panoExternalStickerSync = nl, el = function(...o) {
    var s;
    typeof Js == "function" && Js.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = el, tl = function(...o) {
    var s;
    typeof Qs == "function" && Qs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = tl), i || Bf.set(String(e.id ?? "0"), () => Zc());
  let li = null;
  const ci = async () => li || (li = (async () => {
    var r, o, s, l, m, g, _, b, x, S, C;
    return Bf.delete(String(e.id ?? "0")), i || vn(), document.fullscreenElement === D && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Du), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (m = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || m.call(l, !0, !0), (b = (_ = (g = wr) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), Za(), Vm(), H instanceof HTMLVideoElement && H.pause(), ke.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), (x = be == null ? void 0 : be.dispose) == null || x.call(be), (S = O == null ? void 0 : O.unmount) == null || S.call(O), (C = he == null ? void 0 : he.dispose) == null || C.call(he), Cr(!1), window.removeEventListener("keydown", Ru, !0), window.removeEventListener("keydown", Ou, !0), window.removeEventListener("keydown", Qa, !0), window.removeEventListener("keyup", Qa, !0), window.removeEventListener("keydown", Fu, !0), window.removeEventListener("dragenter", Mu, !0), window.removeEventListener("dragover", ku, !0), window.removeEventListener("dragleave", Pu, !0), window.removeEventListener("drop", Cu, !0), !i && t === "stickers" && (e.onExecuted === el && (e.onExecuted = Js), e.onConnectionsChange === tl && (e.onConnectionsChange = Qs), e.__panoExternalStickerSync === nl && (e.__panoExternalStickerSync = null)), R.unmount(), V.remove(), eg(), li = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), li = null, !1)), li), Ru = (r) => {
    var o, s, l, m;
    if (r.key === "Escape") {
      if (u.fullscreen && document.fullscreenElement === D) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), Ja(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), ci();
    }
  }, Ou = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = r.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !lt() || (gu(), r.preventDefault(), r.stopPropagation());
  }, Qa = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    u.marqueeModifier !== o && (u.marqueeModifier = o, dt(u.pointerPos));
  }, Fu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, m = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (m === "INPUT" || m === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = du();
    r.shiftKey && !_ || !r.shiftKey && !g || (Us(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Ru, !0), window.addEventListener("keydown", Ou, !0), window.addEventListener("keydown", Qa, !0), window.addEventListener("keyup", Qa, !0), window.addEventListener("keydown", Fu, !0), D.addEventListener("pointerdown", (r) => {
    r.target === D && ci();
  }), Pp(), !i && t === "stickers" && Kc("open"), $m(), ut(), Xs(), tn(), ze(), Is(), ei(), fu(), dt(u.pointerPos), ge(), U.rafId = requestAnimationFrame(Bs);
}
function Yf(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (v) => {
    var y, p;
    try {
      (y = v.__panoDomRestore) == null || y.call(v);
    } catch {
    }
    try {
      (p = v.__panoLegacyRestore) == null || p.call(v);
    } catch {
    }
    v.__panoDomPreview = null, v.__panoLegacyPreviewHooked = !1, v.__panoPreviewHooked = !1, v.__panoPreviewAttached = !1, v.__panoPreviewMountKey = null;
  };
  function c(v) {
    var N;
    const y = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === y) return;
    a(v), n === "PanoramaStickers" && Lx(v), Tc(v), Ox(v, Qo);
    const w = bn(v, Qo);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const P = w.callback;
      w.callback = (M) => {
        var R;
        const V = P ? P(M) : void 0;
        return (R = v.setDirtyCanvas) == null || R.call(v, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      const P = bn(v, "bg_color");
      P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (N = P.callback) == null || N.call(P, "#00ff00")), Yl(v, i, () => pa(v, "stickers"));
      {
        v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = y;
        return;
      }
    }
    Yl(v, i, () => pa(v, "cutout")), Lb(v, {
      buttonText: i,
      onOpen: () => pa(v, "cutout")
    }), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = y;
  }
  const f = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const v = f ? f.apply(this, arguments) : void 0;
    return c(this), v;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const v = d ? d.apply(this, arguments) : void 0;
    return this.widgets && c(this), v;
  };
  const h = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const v = h ? h.apply(this, arguments) : void 0;
    return this.widgets && c(this), v;
  };
}
function Wx(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function qx(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Tc(e), Yl(e, "Open Preview", () => pa(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Db(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => pa(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
wr.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Yf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Yf(e, t, "PanoramaCutout", "Open Cutout Editor"), $o(n) && Wx(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Tc(e), $o(t) && qx(e);
  }
});
