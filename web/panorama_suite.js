import * as _o from "../../scripts/app.js";
import { app as xr } from "../../scripts/app.js";
import { api as bn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const st = {}, bi = [], zn = () => {
}, Uf = () => !1, Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), es = (e) => e.startsWith("onUpdate:"), Yt = Object.assign, Xl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pg = Object.prototype.hasOwnProperty, Ze = (e, t) => pg.call(e, t), Le = Array.isArray, yi = (e) => Ma(e) === "[object Map]", Gf = (e) => Ma(e) === "[object Set]", Lu = (e) => Ma(e) === "[object Date]", Ve = (e) => typeof e == "function", wt = (e) => typeof e == "string", $n = (e) => typeof e == "symbol", rt = (e) => e !== null && typeof e == "object", Kf = (e) => (rt(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), Wf = Object.prototype.toString, Ma = (e) => Wf.call(e), mg = (e) => Ma(e).slice(8, -1), qf = (e) => Ma(e) === "[object Object]", Zl = (e) => wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ea = /* @__PURE__ */ Yl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ts = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gg = /-\w/g, Qt = ts(
  (e) => e.replace(gg, (t) => t.slice(1).toUpperCase())
), vg = /\B([A-Z])/g, Gr = ts(
  (e) => e.replace(vg, "-$1").toLowerCase()
), ns = ts((e) => e.charAt(0).toUpperCase() + e.slice(1)), tl = ts(
  (e) => e ? `on${ns(e)}` : ""
), Vn = (e, t) => !Object.is(e, t), nl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, bg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ru;
const rs = () => Ru || (Ru = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = wt(i) ? wg(i) : Nt(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (wt(e) || rt(e))
    return e;
}
const yg = /;(?![^(]*\))/g, _g = /:([^]+)/, xg = /\/\*[^]*?\*\//g;
function wg(e) {
  const t = {};
  return e.replace(xg, "").split(yg).forEach((n) => {
    if (n) {
      const i = n.split(_g);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (wt(e))
    t = e;
  else if (Le(e))
    for (let n = 0; n < e.length; n++) {
      const i = gt(e[n]);
      i && (t += i + " ");
    }
  else if (rt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Sg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ng = /* @__PURE__ */ Yl(Sg);
function Xf(e) {
  return !!e || e === "";
}
function Mg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Jl(e[i], t[i]);
  return n;
}
function Jl(e, t) {
  if (e === t) return !0;
  let n = Lu(e), i = Lu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = $n(e), i = $n(t), n || i)
    return e === t;
  if (n = Le(e), i = Le(t), n || i)
    return n && i ? Mg(e, t) : !1;
  if (n = rt(e), i = rt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f), h = t.hasOwnProperty(f);
      if (d && !h || !d && h || !Jl(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Zf = (e) => !!(e && e.__v_isRef === !0), Mt = (e) => wt(e) ? e : e == null ? "" : Le(e) || rt(e) && (e.toString === Wf || !Ve(e.toString)) ? Zf(e) ? Mt(e.value) : JSON.stringify(e, Jf, 2) : String(e), Jf = (e, t) => Zf(t) ? Jf(e, t.value) : yi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[rl(i, c) + " =>"] = a, n),
    {}
  )
} : Gf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rl(n))
} : $n(t) ? rl(t) : rt(t) && !Le(t) && !qf(t) ? String(t) : t, rl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class kg {
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
function Pg() {
  return an;
}
let ct;
const il = /* @__PURE__ */ new WeakSet();
class Qf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, il.has(this) && (il.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || td(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ou(this), nd(this);
    const t = ct, n = Cn;
    ct = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      rd(this), ct = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        tc(t);
      this.deps = this.depsTail = void 0, Ou(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? il.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kl(this) && this.run();
  }
  get dirty() {
    return kl(this);
  }
}
let ed = 0, ta, na;
function td(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = na, na = e;
    return;
  }
  e.next = ta, ta = e;
}
function Ql() {
  ed++;
}
function ec() {
  if (--ed > 0)
    return;
  if (na) {
    let t = na;
    for (na = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ta; ) {
    let t = ta;
    for (ta = void 0; t; ) {
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
function nd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function rd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), tc(i), Cg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function kl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (id(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function id(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pa) || (e.globalVersion = pa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !kl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ct, i = Cn;
  ct = e, Cn = !0;
  try {
    nd(e);
    const a = e.fn(e._value);
    (t.version === 0 || Vn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ct = n, Cn = i, rd(e), e.flags &= -3;
  }
}
function tc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      tc(c, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = !0;
const ad = [];
function ir() {
  ad.push(Cn), Cn = !1;
}
function ar() {
  const e = ad.pop();
  Cn = e === void 0 ? !0 : e;
}
function Ou(e) {
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
let pa = 0;
class Ag {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ct || !Cn || ct === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ct)
      n = this.activeLink = new Ag(ct, this), ct.deps ? (n.prevDep = ct.depsTail, ct.depsTail.nextDep = n, ct.depsTail = n) : ct.deps = ct.depsTail = n, od(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ct.depsTail, n.nextDep = void 0, ct.depsTail.nextDep = n, ct.depsTail = n, ct.deps === n && (ct.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, pa++, this.notify(t);
  }
  notify(t) {
    Ql();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ec();
    }
  }
}
function od(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        od(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Pl = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ Symbol(
  ""
), Cl = /* @__PURE__ */ Symbol(
  ""
), ma = /* @__PURE__ */ Symbol(
  ""
);
function Gt(e, t, n) {
  if (Cn && ct) {
    let i = Pl.get(e);
    i || Pl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new nc()), a.map = i, a.key = n), a.track();
  }
}
function nr(e, t, n, i, a, c) {
  const f = Pl.get(e);
  if (!f) {
    pa++;
    return;
  }
  const d = (h) => {
    h && h.trigger();
  };
  if (Ql(), t === "clear")
    f.forEach(d);
  else {
    const h = Le(e), v = h && Zl(n);
    if (h && n === "length") {
      const y = Number(i);
      f.forEach((p, w) => {
        (w === "length" || w === ma || !$n(w) && w >= y) && d(p);
      });
    } else
      switch ((n !== void 0 || f.has(void 0)) && d(f.get(n)), v && d(f.get(ma)), t) {
        case "add":
          h ? v && d(f.get("length")) : (d(f.get(Vr)), yi(e) && d(f.get(Cl)));
          break;
        case "delete":
          h || (d(f.get(Vr)), yi(e) && d(f.get(Cl)));
          break;
        case "set":
          yi(e) && d(f.get(Vr));
          break;
      }
  }
  ec();
}
function ci(e) {
  const t = /* @__PURE__ */ Xe(e);
  return t === e ? t : (Gt(t, "iterate", ma), /* @__PURE__ */ yn(e) ? t : t.map(An));
}
function is(e) {
  return Gt(e = /* @__PURE__ */ Xe(e), "iterate", ma), e;
}
function Rn(e, t) {
  return /* @__PURE__ */ or(e) ? Si(/* @__PURE__ */ Hr(e) ? An(t) : t) : An(t);
}
const Ig = {
  __proto__: null,
  [Symbol.iterator]() {
    return al(this, Symbol.iterator, (e) => Rn(this, e));
  },
  concat(...e) {
    return ci(this).concat(
      ...e.map((t) => Le(t) ? ci(t) : t)
    );
  },
  entries() {
    return al(this, "entries", (e) => (e[1] = Rn(this, e[1]), e));
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
      (n) => n.map((i) => Rn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Yn(
      this,
      "find",
      e,
      t,
      (n) => Rn(this, n),
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
      (n) => Rn(this, n),
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
    return ol(this, "includes", e);
  },
  indexOf(...e) {
    return ol(this, "indexOf", e);
  },
  join(e) {
    return ci(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ol(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ji(this, "pop");
  },
  push(...e) {
    return ji(this, "push", e);
  },
  reduce(e, ...t) {
    return Fu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Fu(this, "reduceRight", e, t);
  },
  shift() {
    return ji(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ji(this, "splice", e);
  },
  toReversed() {
    return ci(this).toReversed();
  },
  toSorted(e) {
    return ci(this).toSorted(e);
  },
  toSpliced(...e) {
    return ci(this).toSpliced(...e);
  },
  unshift(...e) {
    return ji(this, "unshift", e);
  },
  values() {
    return al(this, "values", (e) => Rn(this, e));
  }
};
function al(e, t, n) {
  const i = is(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const Tg = Array.prototype;
function Yn(e, t, n, i, a, c) {
  const f = is(e), d = f !== e && !/* @__PURE__ */ yn(e), h = f[t];
  if (h !== Tg[t]) {
    const p = h.apply(e, c);
    return d ? An(p) : p;
  }
  let v = n;
  f !== e && (d ? v = function(p, w) {
    return n.call(this, Rn(e, p), w, e);
  } : n.length > 2 && (v = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const y = h.call(f, v, i);
  return d && a ? a(y) : y;
}
function Fu(e, t, n, i) {
  const a = is(e), c = a !== e && !/* @__PURE__ */ yn(e);
  let f = n, d = !1;
  a !== e && (c ? (d = i.length === 0, f = function(v, y, p) {
    return d && (d = !1, v = Rn(e, v)), n.call(this, v, Rn(e, y), p, e);
  }) : n.length > 3 && (f = function(v, y, p) {
    return n.call(this, v, y, p, e);
  }));
  const h = a[t](f, ...i);
  return d ? Rn(e, h) : h;
}
function ol(e, t, n) {
  const i = /* @__PURE__ */ Xe(e);
  Gt(i, "iterate", ma);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ ac(n[0]) ? (n[0] = /* @__PURE__ */ Xe(n[0]), i[t](...n)) : a;
}
function ji(e, t, n = []) {
  ir(), Ql();
  const i = (/* @__PURE__ */ Xe(e))[t].apply(e, n);
  return ec(), ar(), i;
}
const Eg = /* @__PURE__ */ Yl("__proto__,__v_isRef,__isVue"), sd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($n)
);
function Dg(e) {
  $n(e) || (e = String(e));
  const t = /* @__PURE__ */ Xe(this);
  return Gt(t, "has", e), t.hasOwnProperty(e);
}
class ld {
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
      return i === (a ? c ? Bg : dd : c ? fd : ud).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const f = Le(t);
    if (!a) {
      let h;
      if (f && (h = Ig[n]))
        return h;
      if (n === "hasOwnProperty")
        return Dg;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qt(t) ? t : i
    );
    if (($n(n) ? sd.has(n) : Eg(n)) || (a || Gt(t, "get", n), c))
      return d;
    if (/* @__PURE__ */ qt(d)) {
      const h = f && Zl(n) ? d : d.value;
      return a && rt(h) ? /* @__PURE__ */ Il(h) : h;
    }
    return rt(d) ? a ? /* @__PURE__ */ Il(d) : /* @__PURE__ */ as(d) : d;
  }
}
class cd extends ld {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const f = Le(t) && Zl(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ or(c);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ or(i) && (c = /* @__PURE__ */ Xe(c), i = /* @__PURE__ */ Xe(i)), !f && /* @__PURE__ */ qt(c) && !/* @__PURE__ */ qt(i))
        return v || (c.value = i), !0;
    }
    const d = f ? Number(n) < t.length : Ze(t, n), h = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ qt(t) ? t : a
    );
    return t === /* @__PURE__ */ Xe(a) && (d ? Vn(i, c) && nr(t, "set", n, i) : nr(t, "add", n, i)), h;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && nr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!$n(n) || !sd.has(n)) && Gt(t, "has", n), i;
  }
  ownKeys(t) {
    return Gt(
      t,
      "iterate",
      Le(t) ? "length" : Vr
    ), Reflect.ownKeys(t);
  }
}
class Lg extends ld {
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
const Rg = /* @__PURE__ */ new cd(), Og = /* @__PURE__ */ new Lg(), Fg = /* @__PURE__ */ new cd(!0);
const Al = (e) => e, Qa = (e) => Reflect.getPrototypeOf(e);
function Vg(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ Xe(a), f = yi(c), d = e === "entries" || e === Symbol.iterator && f, h = e === "keys" && f, v = a[e](...i), y = n ? Al : t ? Si : An;
    return !t && Gt(
      c,
      "iterate",
      h ? Cl : Vr
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
function eo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hg(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Xe(c), d = /* @__PURE__ */ Xe(a);
      e || (Vn(a, d) && Gt(f, "get", a), Gt(f, "get", d));
      const { has: h } = Qa(f), v = t ? Al : e ? Si : An;
      if (h.call(f, a))
        return v(c.get(a));
      if (h.call(f, d))
        return v(c.get(d));
      c !== f && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Gt(/* @__PURE__ */ Xe(a), "iterate", Vr), a.size;
    },
    has(a) {
      const c = this.__v_raw, f = /* @__PURE__ */ Xe(c), d = /* @__PURE__ */ Xe(a);
      return e || (Vn(a, d) && Gt(f, "has", a), Gt(f, "has", d)), a === d ? c.has(a) : c.has(a) || c.has(d);
    },
    forEach(a, c) {
      const f = this, d = f.__v_raw, h = /* @__PURE__ */ Xe(d), v = t ? Al : e ? Si : An;
      return !e && Gt(h, "iterate", Vr), d.forEach((y, p) => a.call(c, v(y), v(p), f));
    }
  };
  return Yt(
    n,
    e ? {
      add: eo("add"),
      set: eo("set"),
      delete: eo("delete"),
      clear: eo("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ Xe(this), f = Qa(c), d = /* @__PURE__ */ Xe(a), h = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ or(a) ? d : a;
        return f.has.call(c, h) || Vn(a, h) && f.has.call(c, a) || Vn(d, h) && f.has.call(c, d) || (c.add(h), nr(c, "add", h, h)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ yn(c) && !/* @__PURE__ */ or(c) && (c = /* @__PURE__ */ Xe(c));
        const f = /* @__PURE__ */ Xe(this), { has: d, get: h } = Qa(f);
        let v = d.call(f, a);
        v || (a = /* @__PURE__ */ Xe(a), v = d.call(f, a));
        const y = h.call(f, a);
        return f.set(a, c), v ? Vn(c, y) && nr(f, "set", a, c) : nr(f, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ Xe(this), { has: f, get: d } = Qa(c);
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
    n[a] = Vg(a, e, t);
  }), n;
}
function rc(e, t) {
  const n = Hg(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    c
  );
}
const jg = {
  get: /* @__PURE__ */ rc(!1, !1)
}, zg = {
  get: /* @__PURE__ */ rc(!1, !0)
}, $g = {
  get: /* @__PURE__ */ rc(!0, !1)
};
const ud = /* @__PURE__ */ new WeakMap(), fd = /* @__PURE__ */ new WeakMap(), dd = /* @__PURE__ */ new WeakMap(), Bg = /* @__PURE__ */ new WeakMap();
function Ug(e) {
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
function Gg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ug(mg(e));
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return /* @__PURE__ */ or(e) ? e : ic(
    e,
    !1,
    Rg,
    jg,
    ud
  );
}
// @__NO_SIDE_EFFECTS__
function Kg(e) {
  return ic(
    e,
    !1,
    Fg,
    zg,
    fd
  );
}
// @__NO_SIDE_EFFECTS__
function Il(e) {
  return ic(
    e,
    !0,
    Og,
    $g,
    dd
  );
}
function ic(e, t, n, i, a) {
  if (!rt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = Gg(e);
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
function Hr(e) {
  return /* @__PURE__ */ or(e) ? /* @__PURE__ */ Hr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ac(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Xe(t) : e;
}
function Wg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Yf(e, "__v_skip", !0), e;
}
const An = (e) => rt(e) ? /* @__PURE__ */ as(e) : e, Si = (e) => rt(e) ? /* @__PURE__ */ Il(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Tl(e) {
  return qg(e, !1);
}
function qg(e, t) {
  return /* @__PURE__ */ qt(e) ? e : new Yg(e, t);
}
class Yg {
  constructor(t, n) {
    this.dep = new nc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Xe(t), this._value = n ? t : An(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ or(t);
    t = i ? t : /* @__PURE__ */ Xe(t), Vn(t, n) && (this._rawValue = t, this._value = i ? t : An(t), this.dep.trigger());
  }
}
function mi(e) {
  return /* @__PURE__ */ qt(e) ? e.value : e;
}
const Xg = {
  get: (e, t, n) => t === "__v_raw" ? e : mi(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ qt(a) && !/* @__PURE__ */ qt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function hd(e) {
  return /* @__PURE__ */ Hr(e) ? e : new Proxy(e, Xg);
}
class Zg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new nc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ct !== this)
      return td(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return id(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Jg(e, t, n = !1) {
  let i, a;
  return Ve(e) ? i = e : (i = e.get, a = e.set), new Zg(i, a, n);
}
const to = {}, To = /* @__PURE__ */ new WeakMap();
let Rr;
function Qg(e, t = !1, n = Rr) {
  if (n) {
    let i = To.get(n);
    i || To.set(n, i = []), i.push(e);
  }
}
function e0(e, t, n = st) {
  const { immediate: i, deep: a, once: c, scheduler: f, augmentJob: d, call: h } = n, v = (I) => a ? I : /* @__PURE__ */ yn(I) || a === !1 || a === 0 ? rr(I, 1) : rr(I);
  let y, p, w, N, k = !1, S = !1;
  if (/* @__PURE__ */ qt(e) ? (p = () => e.value, k = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ Hr(e) ? (p = () => v(e), k = !0) : Le(e) ? (S = !0, k = e.some((I) => /* @__PURE__ */ Hr(I) || /* @__PURE__ */ yn(I)), p = () => e.map((I) => {
    if (/* @__PURE__ */ qt(I))
      return I.value;
    if (/* @__PURE__ */ Hr(I))
      return v(I);
    if (Ve(I))
      return h ? h(I, 2) : I();
  })) : Ve(e) ? t ? p = h ? () => h(e, 2) : e : p = () => {
    if (w) {
      ir();
      try {
        w();
      } finally {
        ar();
      }
    }
    const I = Rr;
    Rr = y;
    try {
      return h ? h(e, 3, [N]) : e(N);
    } finally {
      Rr = I;
    }
  } : p = zn, t && a) {
    const I = p, U = a === !0 ? 1 / 0 : a;
    p = () => rr(I(), U);
  }
  const O = Pg(), L = () => {
    y.stop(), O && O.active && Xl(O.effects, y);
  };
  if (c && t) {
    const I = t;
    t = (...U) => {
      I(...U), L();
    };
  }
  let R = S ? new Array(e.length).fill(to) : to;
  const T = (I) => {
    if (!(!(y.flags & 1) || !y.dirty && !I))
      if (t) {
        const U = y.run();
        if (a || k || (S ? U.some((J, oe) => Vn(J, R[oe])) : Vn(U, R))) {
          w && w();
          const J = Rr;
          Rr = y;
          try {
            const oe = [
              U,
              // pass undefined as the old value when it's changed for the first time
              R === to ? void 0 : S && R[0] === to ? [] : R,
              N
            ];
            R = U, h ? h(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            Rr = J;
          }
        }
      } else
        y.run();
  };
  return d && d(T), y = new Qf(p), y.scheduler = f ? () => f(T, !1) : T, N = (I) => Qg(I, !1, y), w = y.onStop = () => {
    const I = To.get(y);
    if (I) {
      if (h)
        h(I, 4);
      else
        for (const U of I) U();
      To.delete(y);
    }
  }, t ? i ? T(!0) : R = y.run() : f ? f(T.bind(null, !0), !0) : y.run(), L.pause = y.pause.bind(y), L.resume = y.resume.bind(y), L.stop = L, L;
}
function rr(e, t = 1 / 0, n) {
  if (t <= 0 || !rt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qt(e))
    rr(e.value, t, n);
  else if (Le(e))
    for (let i = 0; i < e.length; i++)
      rr(e[i], t, n);
  else if (Gf(e) || yi(e))
    e.forEach((i) => {
      rr(i, t, n);
    });
  else if (qf(e)) {
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
function ka(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    os(a, t, n);
  }
}
function Bn(e, t, n, i) {
  if (Ve(e)) {
    const a = ka(e, t, n, i);
    return a && Kf(a) && a.catch((c) => {
      os(c, t, n);
    }), a;
  }
  if (Le(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Bn(e[c], t, n, i));
    return a;
  }
}
function os(e, t, n, i = !0) {
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
      ir(), ka(c, null, 10, [
        e,
        h,
        v
      ]), ar();
      return;
    }
  }
  t0(e, n, a, i, f);
}
function t0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Jt = [];
let Ln = -1;
const _i = [];
let vr = null, di = 0;
const pd = /* @__PURE__ */ Promise.resolve();
let Eo = null;
function oc(e) {
  const t = Eo || pd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function n0(e) {
  let t = Ln + 1, n = Jt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Jt[i], c = ga(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function sc(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), n = Jt[Jt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ga(n) ? Jt.push(e) : Jt.splice(n0(t), 0, e), e.flags |= 1, md();
  }
}
function md() {
  Eo || (Eo = pd.then(vd));
}
function r0(e) {
  Le(e) ? _i.push(...e) : vr && e.id === -1 ? vr.splice(di + 1, 0, e) : e.flags & 1 || (_i.push(e), e.flags |= 1), md();
}
function Vu(e, t, n = Ln + 1) {
  for (; n < Jt.length; n++) {
    const i = Jt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Jt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function gd(e) {
  if (_i.length) {
    const t = [...new Set(_i)].sort(
      (n, i) => ga(n) - ga(i)
    );
    if (_i.length = 0, vr) {
      vr.push(...t);
      return;
    }
    for (vr = t, di = 0; di < vr.length; di++) {
      const n = vr[di];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vr = null, di = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vd(e) {
  try {
    for (Ln = 0; Ln < Jt.length; Ln++) {
      const t = Jt[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ka(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < Jt.length; Ln++) {
      const t = Jt[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, Jt.length = 0, gd(), Eo = null, (Jt.length || _i.length) && vd();
  }
}
let dn = null, bd = null;
function Do(e) {
  const t = dn;
  return dn = e, bd = e && e.type.__scopeId || null, t;
}
function i0(e, t = dn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Xu(-1);
    const c = Do(t);
    let f;
    try {
      f = e(...a);
    } finally {
      Do(c), i._d && Xu(1);
    }
    return f;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function lc(e, t) {
  if (dn === null)
    return e;
  const n = us(dn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, f, d, h = st] = t[a];
    c && (Ve(c) && (c = {
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
function Tr(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    c && (d.oldValue = c[f].value);
    let h = d.dir[i];
    h && (ir(), Bn(h, n, 8, [
      e.el,
      d,
      e,
      t
    ]), ar());
  }
}
function a0(e, t) {
  if (Wt) {
    let n = Wt.provides;
    const i = Wt.parent && Wt.parent.provides;
    i === n && (n = Wt.provides = Object.create(i)), n[e] = t;
  }
}
function xo(e, t, n = !1) {
  const i = a1();
  if (i || xi) {
    let a = xi ? xi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ve(t) ? t.call(i && i.proxy) : t;
  }
}
const o0 = /* @__PURE__ */ Symbol.for("v-scx"), s0 = () => xo(o0);
function ra(e, t, n) {
  return yd(e, t, n);
}
function yd(e, t, n = st) {
  const { immediate: i, deep: a, flush: c, once: f } = n, d = Yt({}, n), h = t && i || !t && c !== "post";
  let v;
  if (ba) {
    if (c === "sync") {
      const N = s0();
      v = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!h) {
      const N = () => {
      };
      return N.stop = zn, N.resume = zn, N.pause = zn, N;
    }
  }
  const y = Wt;
  d.call = (N, k, S) => Bn(N, y, k, S);
  let p = !1;
  c === "post" ? d.scheduler = (N) => {
    rn(N, y && y.suspense);
  } : c !== "sync" && (p = !0, d.scheduler = (N, k) => {
    k ? N() : sc(N);
  }), d.augmentJob = (N) => {
    t && (N.flags |= 4), p && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const w = e0(e, t, d);
  return ba && (v ? v.push(w) : h && w()), w;
}
function l0(e, t, n) {
  const i = this.proxy, a = wt(e) ? e.includes(".") ? _d(i, e) : () => i[e] : e.bind(i, i);
  let c;
  Ve(t) ? c = t : (c = t.handler, n = t);
  const f = Pa(this), d = yd(a, c.bind(i), n);
  return f(), d;
}
function _d(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const c0 = /* @__PURE__ */ Symbol("_vte"), u0 = (e) => e.__isTeleport, f0 = /* @__PURE__ */ Symbol("_leaveCb");
function cc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Hu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Lo = /* @__PURE__ */ new WeakMap();
function ia(e, t, n, i, a = !1) {
  if (Le(e)) {
    e.forEach(
      (S, O) => ia(
        S,
        t && (Le(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (aa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ia(e, t, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? us(i.component) : i.el, f = a ? null : c, { i: d, r: h } = e, v = t && t.r, y = d.refs === st ? d.refs = {} : d.refs, p = d.setupState, w = /* @__PURE__ */ Xe(p), N = p === st ? Uf : (S) => Hu(y, S) ? !1 : Ze(w, S), k = (S, O) => !(O && Hu(y, O));
  if (v != null && v !== h) {
    if (ju(t), wt(v))
      y[v] = null, N(v) && (p[v] = null);
    else if (/* @__PURE__ */ qt(v)) {
      const S = t;
      k(v, S.k) && (v.value = null), S.k && (y[S.k] = null);
    }
  }
  if (Ve(h))
    ka(h, d, 12, [f, y]);
  else {
    const S = wt(h), O = /* @__PURE__ */ qt(h);
    if (S || O) {
      const L = () => {
        if (e.f) {
          const R = S ? N(h) ? p[h] : y[h] : k() || !e.k ? h.value : y[e.k];
          if (a)
            Le(R) && Xl(R, c);
          else if (Le(R))
            R.includes(c) || R.push(c);
          else if (S)
            y[h] = [c], N(h) && (p[h] = y[h]);
          else {
            const T = [c];
            k(h, e.k) && (h.value = T), e.k && (y[e.k] = T);
          }
        } else S ? (y[h] = f, N(h) && (p[h] = f)) : O && (k(h, e.k) && (h.value = f), e.k && (y[e.k] = f));
      };
      if (f) {
        const R = () => {
          L(), Lo.delete(e);
        };
        R.id = -1, Lo.set(e, R), rn(R, n);
      } else
        ju(e), L();
    }
  }
}
function ju(e) {
  const t = Lo.get(e);
  t && (t.flags |= 8, Lo.delete(e));
}
rs().requestIdleCallback;
rs().cancelIdleCallback;
const aa = (e) => !!e.type.__asyncLoader, wd = (e) => e.type.__isKeepAlive;
function d0(e, t) {
  Sd(e, "a", t);
}
function h0(e, t) {
  Sd(e, "da", t);
}
function Sd(e, t, n = Wt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ss(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      wd(a.parent.vnode) && p0(i, t, n, a), a = a.parent;
  }
}
function p0(e, t, n, i) {
  const a = ss(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Md(() => {
    Xl(i[t], a);
  }, n);
}
function ss(e, t, n = Wt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
      ir();
      const d = Pa(n), h = Bn(t, n, e, f);
      return d(), ar(), h;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const sr = (e) => (t, n = Wt) => {
  (!ba || e === "sp") && ss(e, (...i) => t(...i), n);
}, m0 = sr("bm"), Nd = sr("m"), g0 = sr(
  "bu"
), v0 = sr("u"), uc = sr(
  "bum"
), Md = sr("um"), b0 = sr(
  "sp"
), y0 = sr("rtg"), _0 = sr("rtc");
function x0(e, t = Wt) {
  ss("ec", e, t);
}
const w0 = "components", kd = /* @__PURE__ */ Symbol.for("v-ndc");
function S0(e) {
  return wt(e) ? N0(w0, e, !1) || e : e || kd;
}
function N0(e, t, n = !0, i = !1) {
  const a = dn || Wt;
  if (a) {
    const c = a.type;
    {
      const d = u1(
        c,
        !1
      );
      if (d && (d === t || d === Qt(t) || d === ns(Qt(t))))
        return c;
    }
    const f = (
      // local registration
      // check instance[type] first which is resolved for options API
      zu(a[e] || c[e], t) || // global registration
      zu(a.appContext[e], t)
    );
    return !f && i ? c : f;
  }
}
function zu(e, t) {
  return e && (e[t] || e[Qt(t)] || e[ns(Qt(t))]);
}
function Kt(e, t, n, i) {
  let a;
  const c = n, f = Le(e);
  if (f || wt(e)) {
    const d = f && /* @__PURE__ */ Hr(e);
    let h = !1, v = !1;
    d && (h = !/* @__PURE__ */ yn(e), v = /* @__PURE__ */ or(e), e = is(e)), a = new Array(e.length);
    for (let y = 0, p = e.length; y < p; y++)
      a[y] = t(
        h ? v ? Si(An(e[y])) : An(e[y]) : e[y],
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
const El = (e) => e ? qd(e) ? us(e) : El(e.parent) : null, oa = (
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
    $parent: (e) => El(e.parent),
    $root: (e) => El(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      sc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = oc.bind(e.proxy)),
    $watch: (e) => l0.bind(e)
  })
), sl = (e, t) => e !== st && !e.__isScriptSetup && Ze(e, t), M0 = {
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
        if (sl(i, t))
          return f[t] = 1, i[t];
        if (a !== st && Ze(a, t))
          return f[t] = 2, a[t];
        if (Ze(c, t))
          return f[t] = 3, c[t];
        if (n !== st && Ze(n, t))
          return f[t] = 4, n[t];
        Dl && (f[t] = 0);
      }
    }
    const v = oa[t];
    let y, p;
    if (v)
      return t === "$attrs" && Gt(e.attrs, "get", ""), v(e);
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
    return sl(a, t) ? (a[t] = n, !0) : i !== st && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: f }
  }, d) {
    let h;
    return !!(n[d] || e !== st && d[0] !== "$" && Ze(e, d) || sl(t, d) || Ze(c, d) || Ze(i, d) || Ze(oa, d) || Ze(a.config.globalProperties, d) || (h = f.__cssModules) && h[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function $u(e) {
  return Le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Dl = !0;
function k0(e) {
  const t = Cd(e), n = e.proxy, i = e.ctx;
  Dl = !1, t.beforeCreate && Bu(t.beforeCreate, e, "bc");
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
    updated: k,
    activated: S,
    deactivated: O,
    beforeDestroy: L,
    beforeUnmount: R,
    destroyed: T,
    unmounted: I,
    render: U,
    renderTracked: J,
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
  if (v && P0(v, i, null), f)
    for (const ne in f) {
      const G = f[ne];
      Ve(G) && (i[ne] = G.bind(n));
    }
  if (a) {
    const ne = a.call(n, n);
    rt(ne) && (e.data = /* @__PURE__ */ as(ne));
  }
  if (Dl = !0, c)
    for (const ne in c) {
      const G = c[ne], le = Ve(G) ? G.bind(n, n) : Ve(G.get) ? G.get.bind(n, n) : zn, we = !Ve(G) && Ve(G.set) ? G.set.bind(n) : zn, Ee = Pt({
        get: le,
        set: we
      });
      Object.defineProperty(i, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (De) => Ee.value = De
      });
    }
  if (d)
    for (const ne in d)
      Pd(d[ne], i, n, ne);
  if (h) {
    const ne = Ve(h) ? h.call(n) : h;
    Reflect.ownKeys(ne).forEach((G) => {
      a0(G, ne[G]);
    });
  }
  y && Bu(y, e, "c");
  function $(ne, G) {
    Le(G) ? G.forEach((le) => ne(le.bind(n))) : G && ne(G.bind(n));
  }
  if ($(m0, p), $(Nd, w), $(g0, N), $(v0, k), $(d0, S), $(h0, O), $(x0, ie), $(_0, J), $(y0, oe), $(uc, R), $(Md, I), $(b0, xe), Le(A))
    if (A.length) {
      const ne = e.exposed || (e.exposed = {});
      A.forEach((G) => {
        Object.defineProperty(ne, G, {
          get: () => n[G],
          set: (le) => n[G] = le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === zn && (e.render = U), be != null && (e.inheritAttrs = be), he && (e.components = he), fe && (e.directives = fe), xe && xd(e);
}
function P0(e, t, n = zn) {
  Le(e) && (e = Ll(e));
  for (const i in e) {
    const a = e[i];
    let c;
    rt(a) ? "default" in a ? c = xo(
      a.from || i,
      a.default,
      !0
    ) : c = xo(a.from || i) : c = xo(a), /* @__PURE__ */ qt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (f) => c.value = f
    }) : t[i] = c;
  }
}
function Bu(e, t, n) {
  Bn(
    Le(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pd(e, t, n, i) {
  let a = i.includes(".") ? _d(n, i) : () => n[i];
  if (wt(e)) {
    const c = t[e];
    Ve(c) && ra(a, c);
  } else if (Ve(e))
    ra(a, e.bind(n));
  else if (rt(e))
    if (Le(e))
      e.forEach((c) => Pd(c, t, n, i));
    else {
      const c = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ve(c) && ra(a, c, e);
    }
}
function Cd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: f }
  } = e.appContext, d = c.get(t);
  let h;
  return d ? h = d : !a.length && !n && !i ? h = t : (h = {}, a.length && a.forEach(
    (v) => Ro(h, v, f, !0)
  ), Ro(h, t, f)), rt(t) && c.set(t, h), h;
}
function Ro(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && Ro(e, c, n, !0), a && a.forEach(
    (f) => Ro(e, f, n, !0)
  );
  for (const f in t)
    if (!(i && f === "expose")) {
      const d = C0[f] || n && n[f];
      e[f] = d ? d(e[f], t[f]) : t[f];
    }
  return e;
}
const C0 = {
  data: Uu,
  props: Gu,
  emits: Gu,
  // objects
  methods: Yi,
  computed: Yi,
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
  components: Yi,
  directives: Yi,
  // watch
  watch: I0,
  // provide / inject
  provide: Uu,
  inject: A0
};
function Uu(e, t) {
  return t ? e ? function() {
    return Yt(
      Ve(e) ? e.call(this, this) : e,
      Ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function A0(e, t) {
  return Yi(Ll(e), Ll(t));
}
function Ll(e) {
  if (Le(e)) {
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
function Yi(e, t) {
  return e ? Yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gu(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Yt(
    /* @__PURE__ */ Object.create(null),
    $u(e),
    $u(t ?? {})
  ) : t;
}
function I0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Yt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Zt(e[i], t[i]);
  return n;
}
function Ad() {
  return {
    app: null,
    config: {
      isNativeTag: Uf,
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
let T0 = 0;
function E0(e, t) {
  return function(i, a = null) {
    Ve(i) || (i = Yt({}, i)), a != null && !rt(a) && (a = null);
    const c = Ad(), f = /* @__PURE__ */ new WeakSet(), d = [];
    let h = !1;
    const v = c.app = {
      _uid: T0++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: d1,
      get config() {
        return c.config;
      },
      set config(y) {
      },
      use(y, ...p) {
        return f.has(y) || (y && Ve(y.install) ? (f.add(y), y.install(v, ...p)) : Ve(y) && (f.add(y), y(v, ...p))), v;
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
          return N.appContext = c, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(N, y, w), h = !0, v._container = y, y.__vue_app__ = v, us(N.component);
        }
      },
      onUnmount(y) {
        d.push(y);
      },
      unmount() {
        h && (Bn(
          d,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, p) {
        return c.provides[y] = p, v;
      },
      runWithContext(y) {
        const p = xi;
        xi = v;
        try {
          return y();
        } finally {
          xi = p;
        }
      }
    };
    return v;
  };
}
let xi = null;
const D0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Gr(t)}Modifiers`];
function L0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || st;
  let a = n;
  const c = t.startsWith("update:"), f = c && D0(i, t.slice(7));
  f && (f.trim && (a = n.map((y) => wt(y) ? y.trim() : y)), f.number && (a = n.map(bg)));
  let d, h = i[d = tl(t)] || // also try camelCase event handler (#2249)
  i[d = tl(Qt(t))];
  !h && c && (h = i[d = tl(Gr(t))]), h && Bn(
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
    e.emitted[d] = !0, Bn(
      v,
      e,
      6,
      a
    );
  }
}
const R0 = /* @__PURE__ */ new WeakMap();
function Id(e, t, n = !1) {
  const i = n ? R0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let f = {}, d = !1;
  if (!Ve(e)) {
    const h = (v) => {
      const y = Id(v, t, !0);
      y && (d = !0, Yt(f, y));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !c && !d ? (rt(e) && i.set(e, null), null) : (Le(c) ? c.forEach((h) => f[h] = null) : Yt(f, c), rt(e) && i.set(e, f), f);
}
function ls(e, t) {
  return !e || !Qo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Gr(t)) || Ze(e, t));
}
function Ku(e) {
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
    ctx: k,
    inheritAttrs: S
  } = e, O = Do(e);
  let L, R;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, U = I;
      L = On(
        v.call(
          U,
          I,
          y,
          p,
          N,
          w,
          k
        )
      ), R = d;
    } else {
      const I = t;
      L = On(
        I.length > 1 ? I(
          p,
          { attrs: d, slots: f, emit: h }
        ) : I(
          p,
          null
        )
      ), R = t.props ? d : O0(d);
    }
  } catch (I) {
    sa.length = 0, os(I, e, 1), L = xt(Nr);
  }
  let T = L;
  if (R && S !== !1) {
    const I = Object.keys(R), { shapeFlag: U } = T;
    I.length && U & 7 && (c && I.some(es) && (R = F0(
      R,
      c
    )), T = Ni(T, R, !1, !0));
  }
  return n.dirs && (T = Ni(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && cc(T, n.transition), L = T, Do(O), L;
}
const O0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, F0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!es(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function V0(e, t, n) {
  const { props: i, children: a, component: c } = e, { props: f, children: d, patchFlag: h } = t, v = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return i ? Wu(i, f, v) : !!f;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let p = 0; p < y.length; p++) {
        const w = y[p];
        if (Td(f, i, w) && !ls(v, w))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === f ? !1 : i ? f ? Wu(i, f, v) : !0 : !!f;
  return !1;
}
function Wu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if (Td(t, e, c) && !ls(n, c))
      return !0;
  }
  return !1;
}
function Td(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && rt(i) && rt(a) ? !Jl(i, a) : i !== a;
}
function H0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ed = {}, Dd = () => Object.create(Ed), Ld = (e) => Object.getPrototypeOf(e) === Ed;
function j0(e, t, n, i = !1) {
  const a = {}, c = Dd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rd(e, t, a, c);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Kg(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function z0(e, t, n, i) {
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
        if (ls(e.emitsOptions, w))
          continue;
        const N = t[w];
        if (h)
          if (Ze(c, w))
            N !== c[w] && (c[w] = N, v = !0);
          else {
            const k = Qt(w);
            a[k] = Rl(
              h,
              d,
              k,
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
    Rd(e, t, a, c) && (v = !0);
    let y;
    for (const p in d)
      (!t || // for camelCase
      !Ze(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Gr(p)) === p || !Ze(t, y))) && (h ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[y] !== void 0) && (a[p] = Rl(
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
function Rd(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let f = !1, d;
  if (t)
    for (let h in t) {
      if (ea(h))
        continue;
      const v = t[h];
      let y;
      a && Ze(a, y = Qt(h)) ? !c || !c.includes(y) ? n[y] = v : (d || (d = {}))[y] = v : ls(e.emitsOptions, h) || (!(h in i) || v !== i[h]) && (i[h] = v, f = !0);
    }
  if (c) {
    const h = /* @__PURE__ */ Xe(n), v = d || st;
    for (let y = 0; y < c.length; y++) {
      const p = c[y];
      n[p] = Rl(
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
function Rl(e, t, n, i, a, c) {
  const f = e[n];
  if (f != null) {
    const d = Ze(f, "default");
    if (d && i === void 0) {
      const h = f.default;
      if (f.type !== Function && !f.skipFactory && Ve(h)) {
        const { propsDefaults: v } = a;
        if (n in v)
          i = v[n];
        else {
          const y = Pa(a);
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
    ] && (i === "" || i === Gr(n)) && (i = !0));
  }
  return i;
}
const $0 = /* @__PURE__ */ new WeakMap();
function Od(e, t, n = !1) {
  const i = n ? $0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, f = {}, d = [];
  let h = !1;
  if (!Ve(e)) {
    const y = (p) => {
      h = !0;
      const [w, N] = Od(p, t, !0);
      Yt(f, w), N && d.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!c && !h)
    return rt(e) && i.set(e, bi), bi;
  if (Le(c))
    for (let y = 0; y < c.length; y++) {
      const p = Qt(c[y]);
      qu(p) && (f[p] = st);
    }
  else if (c)
    for (const y in c) {
      const p = Qt(y);
      if (qu(p)) {
        const w = c[y], N = f[p] = Le(w) || Ve(w) ? { type: w } : Yt({}, w), k = N.type;
        let S = !1, O = !0;
        if (Le(k))
          for (let L = 0; L < k.length; ++L) {
            const R = k[L], T = Ve(R) && R.name;
            if (T === "Boolean") {
              S = !0;
              break;
            } else T === "String" && (O = !1);
          }
        else
          S = Ve(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = S, N[
          1
          /* shouldCastTrue */
        ] = O, (S || Ze(N, "default")) && d.push(p);
      }
    }
  const v = [f, d];
  return rt(e) && i.set(e, v), v;
}
function qu(e) {
  return e[0] !== "$" && !ea(e);
}
const fc = (e) => e === "_" || e === "_ctx" || e === "$stable", dc = (e) => Le(e) ? e.map(On) : [On(e)], B0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = i0((...a) => dc(t(...a)), n);
  return i._c = !1, i;
}, Fd = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (fc(a)) continue;
    const c = e[a];
    if (Ve(c))
      t[a] = B0(a, c, i);
    else if (c != null) {
      const f = dc(c);
      t[a] = () => f;
    }
  }
}, Vd = (e, t) => {
  const n = dc(t);
  e.slots.default = () => n;
}, Hd = (e, t, n) => {
  for (const i in t)
    (n || !fc(i)) && (e[i] = t[i]);
}, U0 = (e, t, n) => {
  const i = e.slots = Dd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Hd(i, t, n), n && Yf(i, "_", a, !0)) : Fd(t, i);
  } else t && Vd(e, t);
}, G0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, f = st;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? c = !1 : Hd(a, t, n) : (c = !t.$stable, Fd(t, a)), f = t;
  } else t && (Vd(e, t), f = { default: 1 });
  if (c)
    for (const d in a)
      !fc(d) && f[d] == null && delete a[d];
}, rn = X0;
function K0(e) {
  return W0(e);
}
function W0(e, t) {
  const n = rs();
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
    setScopeId: N = zn,
    insertStaticContent: k
  } = e, S = (u, F, Q, de = null, E = null, K = null, Y = void 0, B = null, te = !!F.dynamicChildren) => {
    if (u === F)
      return;
    u && !zi(u, F) && (de = Vt(u), De(u, E, K, !0), u = null), F.patchFlag === -2 && (te = !1, F.dynamicChildren = null);
    const { type: Z, ref: me, shapeFlag: j } = F;
    switch (Z) {
      case cs:
        O(u, F, Q, de);
        break;
      case Nr:
        L(u, F, Q, de);
        break;
      case wo:
        u == null && R(F, Q, de, Y);
        break;
      case et:
        he(
          u,
          F,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te
        );
        break;
      default:
        j & 1 ? U(
          u,
          F,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te
        ) : j & 6 ? fe(
          u,
          F,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te
        ) : (j & 64 || j & 128) && Z.process(
          u,
          F,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te,
          sn
        );
    }
    me != null && E ? ia(me, u && u.ref, K, F || u, !F) : me == null && u && u.ref != null && ia(u.ref, null, K, u, !0);
  }, O = (u, F, Q, de) => {
    if (u == null)
      i(
        F.el = d(F.children),
        Q,
        de
      );
    else {
      const E = F.el = u.el;
      F.children !== u.children && v(E, F.children);
    }
  }, L = (u, F, Q, de) => {
    u == null ? i(
      F.el = h(F.children || ""),
      Q,
      de
    ) : F.el = u.el;
  }, R = (u, F, Q, de) => {
    [u.el, u.anchor] = k(
      u.children,
      F,
      Q,
      de,
      u.el,
      u.anchor
    );
  }, T = ({ el: u, anchor: F }, Q, de) => {
    let E;
    for (; u && u !== F; )
      E = w(u), i(u, Q, de), u = E;
    i(F, Q, de);
  }, I = ({ el: u, anchor: F }) => {
    let Q;
    for (; u && u !== F; )
      Q = w(u), a(u), u = Q;
    a(F);
  }, U = (u, F, Q, de, E, K, Y, B, te) => {
    if (F.type === "svg" ? Y = "svg" : F.type === "math" && (Y = "mathml"), u == null)
      J(
        F,
        Q,
        de,
        E,
        K,
        Y,
        B,
        te
      );
    else {
      const Z = u.el && u.el._isVueCE ? u.el : null;
      try {
        Z && Z._beginPatch(), xe(
          u,
          F,
          E,
          K,
          Y,
          B,
          te
        );
      } finally {
        Z && Z._endPatch();
      }
    }
  }, J = (u, F, Q, de, E, K, Y, B) => {
    let te, Z;
    const { props: me, shapeFlag: j, transition: _e, dirs: Se } = u;
    if (te = u.el = f(
      u.type,
      K,
      me && me.is,
      me
    ), j & 8 ? y(te, u.children) : j & 16 && ie(
      u.children,
      te,
      null,
      de,
      E,
      ll(u, K),
      Y,
      B
    ), Se && Tr(u, null, de, "created"), oe(te, u, u.scopeId, Y, de), me) {
      for (const Ie in me)
        Ie !== "value" && !ea(Ie) && c(te, Ie, null, me[Ie], K, de);
      "value" in me && c(te, "value", null, me.value, K), (Z = me.onVnodeBeforeMount) && In(Z, de, u);
    }
    Se && Tr(u, null, de, "beforeMount");
    const ke = q0(E, _e);
    ke && _e.beforeEnter(te), i(te, F, Q), ((Z = me && me.onVnodeMounted) || ke || Se) && rn(() => {
      try {
        Z && In(Z, de, u), ke && _e.enter(te), Se && Tr(u, null, de, "mounted");
      } finally {
      }
    }, E);
  }, oe = (u, F, Q, de, E) => {
    if (Q && N(u, Q), de)
      for (let K = 0; K < de.length; K++)
        N(u, de[K]);
    if (E) {
      let K = E.subTree;
      if (F === K || Bd(K.type) && (K.ssContent === F || K.ssFallback === F)) {
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
  }, ie = (u, F, Q, de, E, K, Y, B, te = 0) => {
    for (let Z = te; Z < u.length; Z++) {
      const me = u[Z] = B ? tr(u[Z]) : On(u[Z]);
      S(
        null,
        me,
        F,
        Q,
        de,
        E,
        K,
        Y,
        B
      );
    }
  }, xe = (u, F, Q, de, E, K, Y) => {
    const B = F.el = u.el;
    let { patchFlag: te, dynamicChildren: Z, dirs: me } = F;
    te |= u.patchFlag & 16;
    const j = u.props || st, _e = F.props || st;
    let Se;
    if (Q && Er(Q, !1), (Se = _e.onVnodeBeforeUpdate) && In(Se, Q, F, u), me && Tr(F, u, Q, "beforeUpdate"), Q && Er(Q, !0), (j.innerHTML && _e.innerHTML == null || j.textContent && _e.textContent == null) && y(B, ""), Z ? A(
      u.dynamicChildren,
      Z,
      B,
      Q,
      de,
      ll(F, E),
      K
    ) : Y || G(
      u,
      F,
      B,
      null,
      Q,
      de,
      ll(F, E),
      K,
      !1
    ), te > 0) {
      if (te & 16)
        be(B, j, _e, Q, E);
      else if (te & 2 && j.class !== _e.class && c(B, "class", null, _e.class, E), te & 4 && c(B, "style", j.style, _e.style, E), te & 8) {
        const ke = F.dynamicProps;
        for (let Ie = 0; Ie < ke.length; Ie++) {
          const Re = ke[Ie], at = j[Re], ft = _e[Re];
          (ft !== at || Re === "value") && c(B, Re, at, ft, E, Q);
        }
      }
      te & 1 && u.children !== F.children && y(B, F.children);
    } else !Y && Z == null && be(B, j, _e, Q, E);
    ((Se = _e.onVnodeUpdated) || me) && rn(() => {
      Se && In(Se, Q, F, u), me && Tr(F, u, Q, "updated");
    }, de);
  }, A = (u, F, Q, de, E, K, Y) => {
    for (let B = 0; B < F.length; B++) {
      const te = u[B], Z = F[B], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zi(te, Z) || // - In the case of a component, it could contain anything.
        te.shapeFlag & 198) ? p(te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      S(
        te,
        Z,
        me,
        null,
        de,
        E,
        K,
        Y,
        !0
      );
    }
  }, be = (u, F, Q, de, E) => {
    if (F !== Q) {
      if (F !== st)
        for (const K in F)
          !ea(K) && !(K in Q) && c(
            u,
            K,
            F[K],
            null,
            E,
            de
          );
      for (const K in Q) {
        if (ea(K)) continue;
        const Y = Q[K], B = F[K];
        Y !== B && K !== "value" && c(u, K, B, Y, E, de);
      }
      "value" in Q && c(u, "value", F.value, Q.value, E);
    }
  }, he = (u, F, Q, de, E, K, Y, B, te) => {
    const Z = F.el = u ? u.el : d(""), me = F.anchor = u ? u.anchor : d("");
    let { patchFlag: j, dynamicChildren: _e, slotScopeIds: Se } = F;
    Se && (B = B ? B.concat(Se) : Se), u == null ? (i(Z, Q, de), i(me, Q, de), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      Q,
      me,
      E,
      K,
      Y,
      B,
      te
    )) : j > 0 && j & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === _e.length ? (A(
      u.dynamicChildren,
      _e,
      Q,
      E,
      K,
      Y,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || E && F === E.subTree) && jd(
      u,
      F,
      !0
      /* shallow */
    )) : G(
      u,
      F,
      Q,
      me,
      E,
      K,
      Y,
      B,
      te
    );
  }, fe = (u, F, Q, de, E, K, Y, B, te) => {
    F.slotScopeIds = B, u == null ? F.shapeFlag & 512 ? E.ctx.activate(
      F,
      Q,
      de,
      Y,
      te
    ) : H(
      F,
      Q,
      de,
      E,
      K,
      Y,
      te
    ) : se(u, F, te);
  }, H = (u, F, Q, de, E, K, Y) => {
    const B = u.component = i1(
      u,
      de,
      E
    );
    if (wd(u) && (B.ctx.renderer = sn), o1(B, !1, Y), B.asyncDep) {
      if (E && E.registerDep(B, $, Y), !u.el) {
        const te = B.subTree = xt(Nr);
        L(null, te, F, Q), u.placeholder = te.el;
      }
    } else
      $(
        B,
        u,
        F,
        Q,
        E,
        K,
        Y
      );
  }, se = (u, F, Q) => {
    const de = F.component = u.component;
    if (V0(u, F, Q))
      if (de.asyncDep && !de.asyncResolved) {
        ne(de, F, Q);
        return;
      } else
        de.next = F, de.update();
    else
      F.el = u.el, de.vnode = F;
  }, $ = (u, F, Q, de, E, K, Y) => {
    const B = () => {
      if (u.isMounted) {
        let { next: j, bu: _e, u: Se, parent: ke, vnode: Ie } = u;
        {
          const qe = zd(u);
          if (qe) {
            j && (j.el = Ie.el, ne(u, j, Y)), qe.asyncDep.then(() => {
              rn(() => {
                u.isUnmounted || Z();
              }, E);
            });
            return;
          }
        }
        let Re = j, at;
        Er(u, !1), j ? (j.el = Ie.el, ne(u, j, Y)) : j = Ie, _e && nl(_e), (at = j.props && j.props.onVnodeBeforeUpdate) && In(at, ke, j, Ie), Er(u, !0);
        const ft = Ku(u), Ce = u.subTree;
        u.subTree = ft, S(
          Ce,
          ft,
          // parent may have changed if it's in a teleport
          p(Ce.el),
          // anchor may have changed if it's in a fragment
          Vt(Ce),
          u,
          E,
          K
        ), j.el = ft.el, Re === null && H0(u, ft.el), Se && rn(Se, E), (at = j.props && j.props.onVnodeUpdated) && rn(
          () => In(at, ke, j, Ie),
          E
        );
      } else {
        let j;
        const { el: _e, props: Se } = F, { bm: ke, m: Ie, parent: Re, root: at, type: ft } = u, Ce = aa(F);
        Er(u, !1), ke && nl(ke), !Ce && (j = Se && Se.onVnodeBeforeMount) && In(j, Re, F), Er(u, !0);
        {
          at.ce && at.ce._hasShadowRoot() && at.ce._injectChildStyle(
            ft,
            u.parent ? u.parent.type : void 0
          );
          const qe = u.subTree = Ku(u);
          S(
            null,
            qe,
            Q,
            de,
            u,
            E,
            K
          ), F.el = qe.el;
        }
        if (Ie && rn(Ie, E), !Ce && (j = Se && Se.onVnodeMounted)) {
          const qe = F;
          rn(
            () => In(j, Re, qe),
            E
          );
        }
        (F.shapeFlag & 256 || Re && aa(Re.vnode) && Re.vnode.shapeFlag & 256) && u.a && rn(u.a, E), u.isMounted = !0, F = Q = de = null;
      }
    };
    u.scope.on();
    const te = u.effect = new Qf(B);
    u.scope.off();
    const Z = u.update = te.run.bind(te), me = u.job = te.runIfDirty.bind(te);
    me.i = u, me.id = u.uid, te.scheduler = () => sc(me), Er(u, !0), Z();
  }, ne = (u, F, Q) => {
    F.component = u;
    const de = u.vnode.props;
    u.vnode = F, u.next = null, z0(u, F.props, de, Q), G0(u, F.children, Q), ir(), Vu(u), ar();
  }, G = (u, F, Q, de, E, K, Y, B, te = !1) => {
    const Z = u && u.children, me = u ? u.shapeFlag : 0, j = F.children, { patchFlag: _e, shapeFlag: Se } = F;
    if (_e > 0) {
      if (_e & 128) {
        we(
          Z,
          j,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te
        );
        return;
      } else if (_e & 256) {
        le(
          Z,
          j,
          Q,
          de,
          E,
          K,
          Y,
          B,
          te
        );
        return;
      }
    }
    Se & 8 ? (me & 16 && it(Z, E, K), j !== Z && y(Q, j)) : me & 16 ? Se & 16 ? we(
      Z,
      j,
      Q,
      de,
      E,
      K,
      Y,
      B,
      te
    ) : it(Z, E, K, !0) : (me & 8 && y(Q, ""), Se & 16 && ie(
      j,
      Q,
      de,
      E,
      K,
      Y,
      B,
      te
    ));
  }, le = (u, F, Q, de, E, K, Y, B, te) => {
    u = u || bi, F = F || bi;
    const Z = u.length, me = F.length, j = Math.min(Z, me);
    let _e;
    for (_e = 0; _e < j; _e++) {
      const Se = F[_e] = te ? tr(F[_e]) : On(F[_e]);
      S(
        u[_e],
        Se,
        Q,
        null,
        E,
        K,
        Y,
        B,
        te
      );
    }
    Z > me ? it(
      u,
      E,
      K,
      !0,
      !1,
      j
    ) : ie(
      F,
      Q,
      de,
      E,
      K,
      Y,
      B,
      te,
      j
    );
  }, we = (u, F, Q, de, E, K, Y, B, te) => {
    let Z = 0;
    const me = F.length;
    let j = u.length - 1, _e = me - 1;
    for (; Z <= j && Z <= _e; ) {
      const Se = u[Z], ke = F[Z] = te ? tr(F[Z]) : On(F[Z]);
      if (zi(Se, ke))
        S(
          Se,
          ke,
          Q,
          null,
          E,
          K,
          Y,
          B,
          te
        );
      else
        break;
      Z++;
    }
    for (; Z <= j && Z <= _e; ) {
      const Se = u[j], ke = F[_e] = te ? tr(F[_e]) : On(F[_e]);
      if (zi(Se, ke))
        S(
          Se,
          ke,
          Q,
          null,
          E,
          K,
          Y,
          B,
          te
        );
      else
        break;
      j--, _e--;
    }
    if (Z > j) {
      if (Z <= _e) {
        const Se = _e + 1, ke = Se < me ? F[Se].el : de;
        for (; Z <= _e; )
          S(
            null,
            F[Z] = te ? tr(F[Z]) : On(F[Z]),
            Q,
            ke,
            E,
            K,
            Y,
            B,
            te
          ), Z++;
      }
    } else if (Z > _e)
      for (; Z <= j; )
        De(u[Z], E, K, !0), Z++;
    else {
      const Se = Z, ke = Z, Ie = /* @__PURE__ */ new Map();
      for (Z = ke; Z <= _e; Z++) {
        const Ht = F[Z] = te ? tr(F[Z]) : On(F[Z]);
        Ht.key != null && Ie.set(Ht.key, Z);
      }
      let Re, at = 0;
      const ft = _e - ke + 1;
      let Ce = !1, qe = 0;
      const ln = new Array(ft);
      for (Z = 0; Z < ft; Z++) ln[Z] = 0;
      for (Z = Se; Z <= j; Z++) {
        const Ht = u[Z];
        if (at >= ft) {
          De(Ht, E, K, !0);
          continue;
        }
        let cn;
        if (Ht.key != null)
          cn = Ie.get(Ht.key);
        else
          for (Re = ke; Re <= _e; Re++)
            if (ln[Re - ke] === 0 && zi(Ht, F[Re])) {
              cn = Re;
              break;
            }
        cn === void 0 ? De(Ht, E, K, !0) : (ln[cn - ke] = Z + 1, cn >= qe ? qe = cn : Ce = !0, S(
          Ht,
          F[cn],
          Q,
          null,
          E,
          K,
          Y,
          B,
          te
        ), at++);
      }
      const vt = Ce ? Y0(ln) : bi;
      for (Re = vt.length - 1, Z = ft - 1; Z >= 0; Z--) {
        const Ht = ke + Z, cn = F[Ht], Ca = F[Ht + 1], Ii = Ht + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ca.el || $d(Ca)
        ) : de;
        ln[Z] === 0 ? S(
          null,
          cn,
          Q,
          Ii,
          E,
          K,
          Y,
          B,
          te
        ) : Ce && (Re < 0 || Z !== vt[Re] ? Ee(cn, Q, Ii, 2) : Re--);
      }
    }
  }, Ee = (u, F, Q, de, E = null) => {
    const { el: K, type: Y, transition: B, children: te, shapeFlag: Z } = u;
    if (Z & 6) {
      Ee(u.component.subTree, F, Q, de);
      return;
    }
    if (Z & 128) {
      u.suspense.move(F, Q, de);
      return;
    }
    if (Z & 64) {
      Y.move(u, F, Q, sn);
      return;
    }
    if (Y === et) {
      i(K, F, Q);
      for (let j = 0; j < te.length; j++)
        Ee(te[j], F, Q, de);
      i(u.anchor, F, Q);
      return;
    }
    if (Y === wo) {
      T(u, F, Q);
      return;
    }
    if (de !== 2 && Z & 1 && B)
      if (de === 0)
        B.beforeEnter(K), i(K, F, Q), rn(() => B.enter(K), E);
      else {
        const { leave: j, delayLeave: _e, afterLeave: Se } = B, ke = () => {
          u.ctx.isUnmounted ? a(K) : i(K, F, Q);
        }, Ie = () => {
          K._isLeaving && K[f0](
            !0
            /* cancelled */
          ), j(K, () => {
            ke(), Se && Se();
          });
        };
        _e ? _e(K, ke, Ie) : Ie();
      }
    else
      i(K, F, Q);
  }, De = (u, F, Q, de = !1, E = !1) => {
    const {
      type: K,
      props: Y,
      ref: B,
      children: te,
      dynamicChildren: Z,
      shapeFlag: me,
      patchFlag: j,
      dirs: _e,
      cacheIndex: Se,
      memo: ke
    } = u;
    if (j === -2 && (E = !1), B != null && (ir(), ia(B, null, Q, u, !0), ar()), Se != null && (F.renderCache[Se] = void 0), me & 256) {
      F.ctx.deactivate(u);
      return;
    }
    const Ie = me & 1 && _e, Re = !aa(u);
    let at;
    if (Re && (at = Y && Y.onVnodeBeforeUnmount) && In(at, F, u), me & 6)
      Qe(u.component, Q, de);
    else {
      if (me & 128) {
        u.suspense.unmount(Q, de);
        return;
      }
      Ie && Tr(u, null, F, "beforeUnmount"), me & 64 ? u.type.remove(
        u,
        F,
        Q,
        sn,
        de
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== et || j > 0 && j & 64) ? it(
        Z,
        F,
        Q,
        !1,
        !0
      ) : (K === et && j & 384 || !E && me & 16) && it(te, F, Q), de && Ue(u);
    }
    const ft = ke != null && Se == null;
    (Re && (at = Y && Y.onVnodeUnmounted) || Ie || ft) && rn(() => {
      at && In(at, F, u), Ie && Tr(u, null, F, "unmounted"), ft && (u.el = null);
    }, Q);
  }, Ue = (u) => {
    const { type: F, el: Q, anchor: de, transition: E } = u;
    if (F === et) {
      Je(Q, de);
      return;
    }
    if (F === wo) {
      I(u);
      return;
    }
    const K = () => {
      a(Q), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: Y, delayLeave: B } = E, te = () => Y(Q, K);
      B ? B(u.el, K, te) : te();
    } else
      K();
  }, Je = (u, F) => {
    let Q;
    for (; u !== F; )
      Q = w(u), a(u), u = Q;
    a(F);
  }, Qe = (u, F, Q) => {
    const { bum: de, scope: E, job: K, subTree: Y, um: B, m: te, a: Z } = u;
    Yu(te), Yu(Z), de && nl(de), E.stop(), K && (K.flags |= 8, De(Y, u, F, Q)), B && rn(B, F), rn(() => {
      u.isUnmounted = !0;
    }, F);
  }, it = (u, F, Q, de = !1, E = !1, K = 0) => {
    for (let Y = K; Y < u.length; Y++)
      De(u[Y], F, Q, de, E);
  }, Vt = (u) => {
    if (u.shapeFlag & 6)
      return Vt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const F = w(u.anchor || u.el), Q = F && F[c0];
    return Q ? w(Q) : F;
  };
  let Ct = !1;
  const pn = (u, F, Q) => {
    let de;
    u == null ? F._vnode && (De(F._vnode, null, null, !0), de = F._vnode.component) : S(
      F._vnode || null,
      u,
      F,
      null,
      null,
      null,
      Q
    ), F._vnode = u, Ct || (Ct = !0, Vu(de), gd(), Ct = !1);
  }, sn = {
    p: S,
    um: De,
    m: Ee,
    r: Ue,
    mt: H,
    mc: ie,
    pc: G,
    pbc: A,
    n: Vt,
    o: e
  };
  return {
    render: pn,
    hydrate: void 0,
    createApp: E0(pn)
  };
}
function ll({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Er({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function q0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jd(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Le(i) && Le(a))
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let d = a[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[c] = tr(a[c]), d.el = f.el), !n && d.patchFlag !== -2 && jd(f, d)), d.type === cs && (d.patchFlag === -1 && (d = a[c] = tr(d)), d.el = f.el), d.type === Nr && !d.el && (d.el = f.el);
    }
}
function Y0(e) {
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
function zd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : zd(t);
}
function Yu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $d(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $d(t.subTree) : null;
}
const Bd = (e) => e.__isSuspense;
function X0(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : r0(e);
}
const et = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), Nr = /* @__PURE__ */ Symbol.for("v-cmt"), wo = /* @__PURE__ */ Symbol.for("v-stc"), sa = [];
let hn = null;
function Pe(e = !1) {
  sa.push(hn = e ? null : []);
}
function Z0() {
  sa.pop(), hn = sa[sa.length - 1] || null;
}
let va = 1;
function Xu(e, t = !1) {
  va += e, e < 0 && hn && t && (hn.hasOnce = !0);
}
function Ud(e) {
  return e.dynamicChildren = va > 0 ? hn || bi : null, Z0(), va > 0 && hn && hn.push(e), e;
}
function Te(e, t, n, i, a, c) {
  return Ud(
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
function Ai(e, t, n, i, a) {
  return Ud(
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
function Gd(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Kd = ({ key: e }) => e ?? null, So = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? wt(e) || /* @__PURE__ */ qt(e) || Ve(e) ? { i: dn, r: e, k: t, f: !!n } : e : null);
function ue(e, t = null, n = null, i = 0, a = null, c = e === et ? 0 : 1, f = !1, d = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kd(t),
    ref: t && So(t),
    scopeId: bd,
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
  return d ? (hc(h, n), c & 128 && e.normalize(h)) : n && (h.shapeFlag |= wt(n) ? 8 : 16), va > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && hn.push(h), h;
}
const xt = J0;
function J0(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === kd) && (e = Nr), Gd(e)) {
    const d = Ni(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hc(d, n), va > 0 && !c && hn && (d.shapeFlag & 6 ? hn[hn.indexOf(e)] = d : hn.push(d)), d.patchFlag = -2, d;
  }
  if (f1(e) && (e = e.__vccOpts), t) {
    t = Q0(t);
    let { class: d, style: h } = t;
    d && !wt(d) && (t.class = gt(d)), rt(h) && (/* @__PURE__ */ ac(h) && !Le(h) && (h = Yt({}, h)), t.style = Nt(h));
  }
  const f = wt(e) ? 1 : Bd(e) ? 128 : u0(e) ? 64 : rt(e) ? 4 : Ve(e) ? 2 : 0;
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
function Q0(e) {
  return e ? /* @__PURE__ */ ac(e) || Ld(e) ? Yt({}, e) : e : null;
}
function Ni(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: f, children: d, transition: h } = e, v = t ? Wd(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Kd(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Le(c) ? c.concat(So(t)) : [c, So(t)] : So(t)
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
    ssContent: e.ssContent && Ni(e.ssContent),
    ssFallback: e.ssFallback && Ni(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && i && cc(
    y,
    h.clone(y)
  ), y;
}
function e1(e = " ", t = 0) {
  return xt(cs, null, e, t);
}
function t1(e, t) {
  const n = xt(wo, null, e);
  return n.staticCount = t, n;
}
function on(e = "", t = !1) {
  return t ? (Pe(), Ai(Nr, null, e)) : xt(Nr, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? xt(Nr) : Le(e) ? xt(
    et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gd(e) ? tr(e) : xt(cs, null, String(e));
}
function tr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ni(e);
}
function hc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), hc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Ld(t) ? t._ctx = dn : a === 3 && dn && (dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ve(t) ? (t = { default: t, _ctx: dn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [e1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = gt([t.class, i.class]));
      else if (a === "style")
        t.style = Nt([t.style, i.style]);
      else if (Qo(a)) {
        const c = t[a], f = i[a];
        f && c !== f && !(Le(c) && c.includes(f)) ? t[a] = c ? [].concat(c, f) : f : f == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !es(a) && (t[a] = f);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function In(e, t, n, i = null) {
  Bn(e, t, 7, [
    n,
    i
  ]);
}
const n1 = Ad();
let r1 = 0;
function i1(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || n1, c = {
    uid: r1++,
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
    scope: new kg(
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
    propsOptions: Od(i, a),
    emitsOptions: Id(i, a),
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = L0.bind(null, c), e.ce && e.ce(c), c;
}
let Wt = null;
const a1 = () => Wt || dn;
let Oo, Ol;
{
  const e = rs(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
    };
  };
  Oo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Wt = n
  ), Ol = t(
    "__VUE_SSR_SETTERS__",
    (n) => ba = n
  );
}
const Pa = (e) => {
  const t = Wt;
  return Oo(e), e.scope.on(), () => {
    e.scope.off(), Oo(t);
  };
}, Zu = () => {
  Wt && Wt.scope.off(), Oo(null);
};
function qd(e) {
  return e.vnode.shapeFlag & 4;
}
let ba = !1;
function o1(e, t = !1, n = !1) {
  t && Ol(t);
  const { props: i, children: a } = e.vnode, c = qd(e);
  j0(e, i, c, t), U0(e, a, n || t);
  const f = c ? s1(e, t) : void 0;
  return t && Ol(!1), f;
}
function s1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, M0);
  const { setup: i } = n;
  if (i) {
    ir();
    const a = e.setupContext = i.length > 1 ? c1(e) : null, c = Pa(e), f = ka(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Kf(f);
    if (ar(), c(), (d || e.sp) && !aa(e) && xd(e), d) {
      if (f.then(Zu, Zu), t)
        return f.then((h) => {
          Ju(e, h);
        }).catch((h) => {
          os(h, e, 0);
        });
      e.asyncDep = f;
    } else
      Ju(e, f);
  } else
    Yd(e);
}
function Ju(e, t, n) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : rt(t) && (e.setupState = hd(t)), Yd(e);
}
function Yd(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || zn);
  {
    const a = Pa(e);
    ir();
    try {
      k0(e);
    } finally {
      ar(), a();
    }
  }
}
const l1 = {
  get(e, t) {
    return Gt(e, "get", ""), e[t];
  }
};
function c1(e) {
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
function us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hd(Wg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in oa)
        return oa[n](e);
    },
    has(t, n) {
      return n in t || n in oa;
    }
  })) : e.proxy;
}
function u1(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function f1(e) {
  return Ve(e) && "__vccOpts" in e;
}
const Pt = (e, t) => /* @__PURE__ */ Jg(e, t, ba), d1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fl;
const Qu = typeof window < "u" && window.trustedTypes;
if (Qu)
  try {
    Fl = /* @__PURE__ */ Qu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xd = Fl ? (e) => Fl.createHTML(e) : (e) => e, h1 = "http://www.w3.org/2000/svg", p1 = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, ef = Qn && /* @__PURE__ */ Qn.createElement("template"), m1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Qn.createElementNS(h1, e) : t === "mathml" ? Qn.createElementNS(p1, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
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
      ef.innerHTML = Xd(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = ef.content;
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
}, g1 = /* @__PURE__ */ Symbol("_vtc");
function v1(e, t, n) {
  const i = e[g1];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fo = /* @__PURE__ */ Symbol("_vod"), Zd = /* @__PURE__ */ Symbol("_vsh"), pc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $i(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), $i(e, !0), i.enter(e)) : i.leave(e, () => {
      $i(e, !1);
    }) : $i(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $i(e, t);
  }
};
function $i(e, t) {
  e.style.display = t ? e[Fo] : "none", e[Zd] = !t;
}
const b1 = /* @__PURE__ */ Symbol(""), y1 = /(?:^|;)\s*display\s*:/;
function _1(e, t, n) {
  const i = e.style, a = wt(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (wt(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          n[d] == null && No(i, d, "");
        }
      else
        for (const f in t)
          n[f] == null && No(i, f, "");
    for (const f in n)
      f === "display" && (c = !0), No(i, f, n[f]);
  } else if (a) {
    if (t !== n) {
      const f = i[b1];
      f && (n += ";" + f), i.cssText = n, c = y1.test(n);
    }
  } else t && e.removeAttribute("style");
  Fo in e && (e[Fo] = c ? i.display : "", e[Zd] && (i.display = "none"));
}
const tf = /\s*!important$/;
function No(e, t, n) {
  if (Le(n))
    n.forEach((i) => No(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = x1(e, t);
    tf.test(n) ? e.setProperty(
      Gr(i),
      n.replace(tf, ""),
      "important"
    ) : e[i] = n;
  }
}
const nf = ["Webkit", "Moz", "ms"], cl = {};
function x1(e, t) {
  const n = cl[t];
  if (n)
    return n;
  let i = Qt(t);
  if (i !== "filter" && i in e)
    return cl[t] = i;
  i = ns(i);
  for (let a = 0; a < nf.length; a++) {
    const c = nf[a] + i;
    if (c in e)
      return cl[t] = c;
  }
  return t;
}
const rf = "http://www.w3.org/1999/xlink";
function af(e, t, n, i, a, c = Ng(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rf, t.slice(6, t.length)) : e.setAttributeNS(rf, t, n) : n == null || c && !Xf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : $n(n) ? String(n) : n
  );
}
function of(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xd(n) : n);
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
    d === "boolean" ? n = Xf(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function w1(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function S1(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const sf = /* @__PURE__ */ Symbol("_vei");
function N1(e, t, n, i, a = null) {
  const c = e[sf] || (e[sf] = {}), f = c[t];
  if (i && f)
    f.value = i;
  else {
    const [d, h] = M1(t);
    if (i) {
      const v = c[t] = C1(
        i,
        a
      );
      w1(e, d, v, h);
    } else f && (S1(e, d, f, h), c[t] = void 0);
  }
}
const lf = /(?:Once|Passive|Capture)$/;
function M1(e) {
  let t;
  if (lf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(lf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Gr(e.slice(2)), t];
}
let ul = 0;
const k1 = /* @__PURE__ */ Promise.resolve(), P1 = () => ul || (k1.then(() => ul = 0), ul = Date.now());
function C1(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Bn(
      A1(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = P1(), n;
}
function A1(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const cf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, I1 = (e, t, n, i, a, c) => {
  const f = a === "svg";
  t === "class" ? v1(e, i, f) : t === "style" ? _1(e, n, i) : Qo(t) ? es(t) || N1(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : T1(e, t, i, f)) ? (of(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && af(e, t, i, f, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (E1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !wt(i))) ? of(e, Qt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), af(e, t, i, f));
};
function T1(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && cf(t) && Ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return cf(t) && wt(n) ? !1 : t in e;
}
function E1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Qt(t);
  return Array.isArray(n) ? n.some((a) => Qt(a) === i) : Object.keys(n).some((a) => Qt(a) === i);
}
const D1 = ["ctrl", "shift", "alt", "meta"], L1 = {
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
}, Jd = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let f = 0; f < t.length; f++) {
      const d = L1[t[f]];
      if (d && d(a, t)) return;
    }
    return e(a, ...c);
  }));
}, R1 = /* @__PURE__ */ Yt({ patchProp: I1 }, m1);
let uf;
function O1() {
  return uf || (uf = K0(R1));
}
const F1 = ((...e) => {
  const t = O1().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = H1(i);
    if (!a) return;
    const c = t._component;
    !Ve(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = n(a, !1, V1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
});
function V1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function H1(e) {
  return wt(e) ? document.querySelector(e) : e;
}
const mt = Math.PI / 180, Qd = Math.PI * 2, j1 = 2048;
function ot(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Mr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Vo(e, t) {
  return Mr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function gi(e, t) {
  return Mr(e.x * t, e.y * t, e.z * t);
}
function Mo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ff(e, t) {
  return Mr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Xi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Mr(e.x / t, e.y / t, e.z / t);
}
function z1(e, t) {
  const n = Number(e || 0) * mt, i = Number(t || 0) * mt, a = Math.cos(i);
  return Mr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function ko(e, t, n = 0) {
  const i = z1(e, t);
  let a = Mr(0, 1, 0);
  Math.abs(Mo(i, a)) > 0.999 && (a = Mr(0, 0, 1));
  let c = Xi(ff(a, i)), f = Xi(ff(i, c));
  const d = Number(n || 0) * mt, h = Math.cos(d), v = Math.sin(d), y = Vo(gi(c, h), gi(f, v)), p = Vo(gi(c, -v), gi(f, h));
  return c = Xi(y), f = Xi(p), { fwd: i, right: c, up: f };
}
function $1(e, t) {
  const n = (Number(e || 0) - 0.5) * Qd, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Mr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function df(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), f = Math.max(512, j1), d = Math.min(1, f / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function hf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function fl(e, t, n) {
  const i = hf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = hf(e, e.FRAGMENT_SHADER, n);
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
const dl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, B1 = `#version 300 es
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
function Bi(e, t, n) {
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
function K1(e) {
  const t = ko(
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
function W1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, c = null, f = null, d = null, h = null, v = null, y = null, p = null, w = null, N = !1, k = df(1, 1, 1), S = null, O = null, L = null, R = null, T = null;
  const I = /* @__PURE__ */ new Map();
  let U = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, J = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, oe = {
    paint: !1,
    mask: !1
  };
  function ie(E = null, K = null) {
    const Y = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Y), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, K ?? n.CLAMP_TO_EDGE), Y;
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
      }), n ? (i = fl(n, dl, B1), a = fl(n, dl, U1), c = fl(n, dl, G1), S = {
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
      }, O = {
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
        f && n.deleteBuffer(f), d && n.deleteTexture(d), h && n.deleteTexture(h), v && n.deleteTexture(v), I.forEach((K) => {
          we(K);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, f = null, d = null, h = null, v = null, I.clear(), y = null, p = null, w = null, J = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, oe = {
        paint: !1,
        mask: !1
      }, R = null, T = null, N = !1;
    }
  }
  function be(E, K, Y = 1) {
    k = df(E, K, Y), (t.width !== k.width || t.height !== k.height) && (t.width = k.width, t.height = k.height);
  }
  function he(E) {
    E === "background" ? y = null : E === "paint" ? p = null : w = null, J[E] && (J[E].width = 0, J[E].height = 0);
  }
  function fe() {
    oe.paint = !1, oe.mask = !1;
  }
  function H(E) {
    fe(), E === "paint" ? oe.paint = !0 : E === "mask" && (oe.mask = !0);
  }
  function se(E, K, Y = [], B = { width: 0, height: 0 }, te = !1) {
    if (!n || !E || !K) return !1;
    const Z = Number(K.width || K.videoWidth || K.naturalWidth || 0), me = Number(K.height || K.videoHeight || K.naturalHeight || 0);
    if (!(Z > 1) || !(me > 1)) return !1;
    const j = Array.isArray(Y) ? Y.filter((_e) => _e && _e.w > 0 && _e.h > 0) : [];
    if (!j.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, te ? 1 : 0), B.width !== Z || B.height !== me)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), B.width = Z, B.height = me, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (R || (R = document.createElement("canvas"), T = R.getContext("2d")), !T)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const _e of j) {
      const Se = Math.max(0, Math.floor(Number(_e.x || 0))), ke = Math.max(0, Math.floor(Number(_e.y || 0))), Ie = Math.min(Z - Se, Math.ceil(Number(_e.w || 0))), Re = Math.min(me - ke, Math.ceil(Number(_e.h || 0)));
      if (!(Ie <= 0 || Re <= 0)) {
        if (R.width !== Ie || R.height !== Re) {
          if (R.width = Ie, R.height = Re, T = R.getContext("2d"), !T)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          T.clearRect(0, 0, Ie, Re);
        T.drawImage(K, Se, ke, Ie, Re, 0, 0, Ie, Re), n.texSubImage2D(n.TEXTURE_2D, 0, Se, ke, n.RGBA, n.UNSIGNED_BYTE, R);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function $(E, K, Y, B, te = null, Z = !1) {
    if (!xe()) return !1;
    if (!Y)
      return he(E), !1;
    const me = String(B ?? ""), j = E === "background" ? y : E === "paint" ? p : w, _e = J[E], Se = Number(Y.width || Y.videoWidth || Y.naturalWidth || 0), ke = Number(Y.height || Y.videoHeight || Y.naturalHeight || 0), Ie = _e.width !== Se || _e.height !== ke;
    if (j === me && !Ie && !(Array.isArray(te) && te.length)) return !0;
    if (!(Se > 0) || !(ke > 0))
      return he(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z ? 1 : 0), !(Array.isArray(te) && te.length ? se(K, Y, te, _e, Z) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he(E), !1;
      _e.width = Se, _e.height = ke;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? y = me : E === "paint" ? p = me : w = me, !0;
  }
  function ne(E, K) {
    return $("background", d, E, K, null, !0);
  }
  function G(E, K, Y = null) {
    return $("paint", h, E, K, Y, !0);
  }
  function le(E, K, Y = null) {
    return $("mask", v, E, K, Y, !0);
  }
  function we(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function Ee(E = /* @__PURE__ */ new Set()) {
    I.forEach((K, Y) => {
      E.has(Y) || (we(K), I.delete(Y));
    });
  }
  function De(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const K = String(E.assetId), Y = String(E.revision ?? ""), B = E.source, te = Number(B.width || B.naturalWidth || B.videoWidth || 0), Z = Number(B.height || B.naturalHeight || B.videoHeight || 0);
    if (te <= 0 || Z <= 0) return null;
    let me = I.get(K);
    if (me || (me = {
      texture: ie(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set(K, me)), me.revision !== Y || me.width !== te || me.height !== Z) {
      if (n.bindTexture(n.TEXTURE_2D, me.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, B), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), me.revision = Y, me.width = te, me.height = Z;
    }
    return me.texture;
  }
  function Ue(E = []) {
    if (!xe()) return !1;
    const K = /* @__PURE__ */ new Set();
    return E.forEach((Y) => {
      !(Y != null && Y.assetId) || !(Y != null && Y.source) || (K.add(String(Y.assetId)), De(Y));
    }), Ee(K), !0;
  }
  function Je() {
    return xe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Qe(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, f), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function it(E, K = {}) {
    if (!y) return null;
    n.disable(n.BLEND), Qe(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(S.background, 0), n.uniform2f(S.viewport, Math.max(1, k.width), Math.max(1, k.height)), n.uniform1i(S.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const Y = Bi(E, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(S.yaw, Number(Y.yawDeg || 0) * mt), n.uniform1f(S.pitch, Number(Y.pitchDeg || 0) * mt), n.uniform1f(S.roll, Number(Y.rollDeg || 0) * mt), n.uniform1f(S.hFov, ot(Number(Y.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(S.vFov, ot(Number(Y.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(S.opacity, ot(Number(K.backgroundOpacity ?? 1), 0, 1));
    const B = Number((E == null ? void 0 : E.coverageDeg) || (K == null ? void 0 : K.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(S.coverage, B), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Vt(E, K = {}) {
    const Y = oe.paint && p != null, B = oe.mask && w != null;
    if (!Y && !B) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Qe(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(O.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, v), n.uniform1i(O.mask, 1), n.uniform1i(O.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const te = Bi(E, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(O.yaw, Number(te.yawDeg || 0) * mt), n.uniform1f(O.pitch, Number(te.pitchDeg || 0) * mt), n.uniform1f(O.roll, Number(te.rollDeg || 0) * mt), n.uniform1f(O.hFov, ot(Number(te.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(O.vFov, ot(Number(te.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(O.paintOpacity, ot(Number(K.paintOpacity ?? 1), 0, 1)), n.uniform1f(O.maskOpacity, ot(Number(K.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(O.hasPaint, Y ? 1 : 0), n.uniform1i(O.hasMask, B ? 1 : 0), n.uniform1i(O.showMaskTint, K.showMaskTint === !1 ? 0 : 1), n.uniform3f(O.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Ct(E, K) {
    var _e, Se, ke, Ie, Re, at, ft;
    const Y = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!Y.length) {
      fe(), Ee(/* @__PURE__ */ new Set());
      return;
    }
    const B = (K == null ? void 0 : K.mode) === "unwrap" ? 0 : (K == null ? void 0 : K.mode) === "cutout" ? 2 : 1, te = Bi(K, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Z = ko(te.yawDeg, te.pitchDeg, te.rollDeg), me = Y.slice().sort((Ce, qe) => Number((Ce == null ? void 0 : Ce.zIndex) || 0) - Number((qe == null ? void 0 : qe.zIndex) || 0)), j = /* @__PURE__ */ new Set();
    fe();
    for (const Ce of me)
      if (!(!Ce || Ce.visible === !1)) {
        if (Ce.type === "sticker") {
          const qe = String(((_e = Ce == null ? void 0 : Ce.params) == null ? void 0 : _e.assetId) || (Ce == null ? void 0 : Ce.id) || "");
          if (!qe) continue;
          j.add(qe);
          const ln = De({
            assetId: qe,
            source: Ce.source,
            revision: Ce.revision
          });
          if (!ln) continue;
          const vt = K1({
            yawDeg: ((Se = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Se.yawDeg) || 0,
            pitchDeg: ((ke = Ce == null ? void 0 : Ce.transform) == null ? void 0 : ke.pitchDeg) || 0,
            rollDeg: ((Ie = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ie.rollDeg) || 0,
            hFovDeg: ((Re = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Re.hFovDeg) || 30,
            vFovDeg: ((at = Ce == null ? void 0 : Ce.transform) == null ? void 0 : at.vFovDeg) || 30,
            crop: ((ft = Ce == null ? void 0 : Ce.params) == null ? void 0 : ft.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ce == null ? void 0 : Ce.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Qe(c), n.uniform1i(L.texture, 0), n.uniform1i(L.mode, B), n.uniform3f(L.viewRight, Z.right.x, Z.right.y, Z.right.z), n.uniform3f(L.viewUp, Z.up.x, Z.up.y, Z.up.z), n.uniform3f(L.viewFwd, Z.fwd.x, Z.fwd.y, Z.fwd.z), n.uniform1f(L.viewHfov, ot(Number(te.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(L.viewVfov, ot(Number(te.vFovDeg || 60), 0.1, 179) * mt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, ln), n.uniform3f(L.stickerRight, vt.right.x, vt.right.y, vt.right.z), n.uniform3f(L.stickerUp, vt.up.x, vt.up.y, vt.up.z), n.uniform3f(L.stickerFwd, vt.fwd.x, vt.fwd.y, vt.fwd.z), n.uniform1f(L.stickerTanX, Math.max(1e-6, vt.tanX)), n.uniform1f(L.stickerTanY, Math.max(1e-6, vt.tanY)), n.uniform4f(
            L.crop,
            ot(Number(vt.crop.x0 ?? 0), 0, 1),
            ot(Number(vt.crop.y0 ?? 0), 0, 1),
            ot(Number(vt.crop.x1 ?? 1), 0, 1),
            ot(Number(vt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(L.opacity, vt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ce.type === "paint" || Ce.type === "raster") {
          if (!G(Ce.source, Ce.revision ?? "")) continue;
          H("paint"), Vt(K, {
            paintOpacity: Number(Ce.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ce.type === "mask") {
          if (!le(Ce.source, Ce.revision ?? "")) continue;
          H("mask"), Vt(K, {
            paintOpacity: 0,
            maskOpacity: Number(Ce.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Ee(j), fe();
  }
  function pn(E) {
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
  function Un(E) {
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
    const K = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), Y = Object.prototype.hasOwnProperty.call(E, "paintSource"), B = Object.prototype.hasOwnProperty.call(E, "maskSource"), te = Object.prototype.hasOwnProperty.call(E, "textures"), Z = Object.prototype.hasOwnProperty.call(E, "scene");
    return K && ne(E.backgroundSource, E.backgroundRevision ?? ""), Y && G(E.paintSource, E.paintRevision ?? ""), B && le(E.maskSource, E.maskRevision ?? ""), te && (Ue(E.textures || []), U.textures = E.textures || []), Z && (U.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (U.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (U.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (U.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (U.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), y && it(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? U.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || U.coverageDeg || 360) === 180 ? 180 : 360
    }), Ct(
      U.objectPass || { objects: [] },
      E.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function F(E = {}) {
    return xe() ? !!u({
      ...E,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(E.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function Q(E, K, Y) {
    const B = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || k.sourceWidth || k.width || 1)), te = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || k.sourceHeight || k.height || 1)), Z = Number(K), me = Number(Y);
    if (!Number.isFinite(Z) || !Number.isFinite(me)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (Z / B % 1 + 1) % 1, v: ot(me / te, 0, 1) };
    const j = Bi(E, B, te);
    if (!j) return null;
    const _e = ko(j.yawDeg, j.pitchDeg, j.rollDeg), Se = (Z - B * 0.5) / (B * 0.5) * Math.tan(ot(j.hFovDeg, 1, 179) * mt * 0.5), ke = (te * 0.5 - me) / (te * 0.5) * Math.tan(ot(j.vFovDeg, 0.1, 179) * mt * 0.5), Ie = Xi(Vo(Vo(gi(_e.right, Se), gi(_e.up, ke)), _e.fwd));
    return {
      u: (Math.atan2(Ie.x, Ie.z) / Qd + 0.5 + 1) % 1,
      v: ot(0.5 - Math.asin(ot(Ie.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function de(E, K, Y) {
    const B = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || k.sourceWidth || k.width || 1)), te = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || k.sourceHeight || k.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(K || 0) % 1 + 1) % 1 * B,
        y: ot(Number(Y || 0), 0, 1) * te,
        visible: !0
      };
    const Z = Bi(E, B, te);
    if (!Z)
      return { x: B * 0.5, y: te * 0.5, visible: !1 };
    const me = ko(Z.yawDeg, Z.pitchDeg, Z.rollDeg), j = $1(K, Y), _e = Mo(j, me.right), Se = Mo(j, me.up), ke = Mo(j, me.fwd);
    if (ke <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ie = B * 0.5 + _e / ke * (B * 0.5 / Math.tan(ot(Z.hFovDeg, 1, 179) * mt * 0.5)), Re = te * 0.5 - Se / ke * (te * 0.5 / Math.tan(ot(Z.vFovDeg, 0.1, 179) * mt * 0.5));
    return { x: Ie, y: Re, visible: Ie >= 0 && Ie <= B && Re >= 0 && Re <= te };
  }
  return {
    init: xe,
    dispose: A,
    setViewport: be,
    setBackgroundErp: ne,
    setPaintErp: G,
    setMaskErp: le,
    renderPanorama: pn,
    renderUnwrap: sn,
    renderCutout: Un,
    renderScene: u,
    syncState: F,
    screenToErpUv: Q,
    erpUvToScreen: de,
    getCanvas() {
      return t;
    },
    isSupported() {
      return xe();
    },
    getViewport() {
      return { ...k };
    }
  };
}
function pf(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function q1() {
  const e = /* @__PURE__ */ new Map();
  function t(f) {
    return f != null ? String(f) : "default";
  }
  function n(f, d, h) {
    const v = t(f);
    let y = e.get(v) || null;
    if (!y) {
      const N = document.createElement("canvas"), k = N.getContext("2d");
      if (!k) return null;
      y = {
        id: v,
        canvas: N,
        ctx: k,
        width: 0,
        height: 0
      }, e.set(v, y);
    }
    const p = pf(d), w = pf(h);
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
const Y1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), X1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function eh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Z1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function J1(e = {}) {
  const t = X1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? eh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Q1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Y1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? eh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Z1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function ev(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Q1(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), f = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== f ? c - f : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Mi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: J1((e == null ? void 0 : e.background) || {}),
    objectPass: ev((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function tv(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function mc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? tv(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function nv(e, t, n = {}) {
  return e ? mc({
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
function rv(e, t, n = {}) {
  return e ? mc({
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
function iv(e, t, n = {}) {
  return e ? mc({
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
function th(e = {}) {
  const t = [], n = nv(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = rv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, f) => {
    const d = iv(
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
function gc(e, t) {
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
function fs(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], f = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Mi({
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
      objects: gc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Zi(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = gc(t, n), a = th({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Mi({
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
function av(e = {}) {
  var c, f, d, h, v, y, p, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const N = Mi(e), k = Array.isArray((c = N.objectPass) == null ? void 0 : c.objects) ? N.objectPass.objects : [], S = {
      stickers: k.filter((T) => T.type === "sticker").map((T) => {
        var I, U, J, oe, ie, xe, A, be, he, fe, H, se, $;
        return {
          id: T.id,
          assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((U = T == null ? void 0 : T.params) == null ? void 0 : U.asset_id) || (T == null ? void 0 : T.id) || ""),
          yawDeg: Number(((J = T == null ? void 0 : T.transform) == null ? void 0 : J.yawDeg) ?? ((oe = T == null ? void 0 : T.params) == null ? void 0 : oe.yawDeg) ?? 0),
          pitchDeg: Number(((ie = T == null ? void 0 : T.transform) == null ? void 0 : ie.pitchDeg) ?? ((xe = T == null ? void 0 : T.params) == null ? void 0 : xe.pitchDeg) ?? 0),
          rollDeg: Number(((A = T == null ? void 0 : T.transform) == null ? void 0 : A.rollDeg) ?? ((be = T == null ? void 0 : T.params) == null ? void 0 : be.rollDeg) ?? 0),
          hFovDeg: Number(((he = T == null ? void 0 : T.transform) == null ? void 0 : he.hFovDeg) ?? ((fe = T == null ? void 0 : T.params) == null ? void 0 : fe.hFovDeg) ?? 30),
          vFovDeg: Number(((H = T == null ? void 0 : T.transform) == null ? void 0 : H.vFovDeg) ?? ((se = T == null ? void 0 : T.params) == null ? void 0 : se.vFovDeg) ?? 30),
          crop: (($ = T == null ? void 0 : T.params) == null ? void 0 : $.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((T == null ? void 0 : T.opacity) ?? 1),
          visible: (T == null ? void 0 : T.visible) !== !1,
          zIndex: Number((T == null ? void 0 : T.zIndex) ?? 0)
        };
      }),
      selectedId: ((f = N.objectPass) == null ? void 0 : f.selectedId) ?? null,
      hoveredId: ((d = N.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, O = k.filter((T) => T.type === "sticker").map((T) => {
      var I, U;
      return {
        assetId: String(((I = T == null ? void 0 : T.params) == null ? void 0 : I.assetId) || ((U = T == null ? void 0 : T.params) == null ? void 0 : U.asset_id) || (T == null ? void 0 : T.id) || ""),
        source: T.source || null,
        revision: String((T == null ? void 0 : T.revision) || "")
      };
    }).filter((T) => T.assetId && T.source), L = k.find((T) => T.type === "paint") || null, R = k.find((T) => T.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = N.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((v = N.background) == null ? void 0 : v.revision) || ""),
      coverageDeg: Number(((y = N.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (L == null ? void 0 : L.source) || null,
      paintRevision: String((L == null ? void 0 : L.revision) || ""),
      maskSource: (R == null ? void 0 : R.source) || null,
      maskRevision: String((R == null ? void 0 : R.revision) || ""),
      textures: O,
      scene: S,
      objectPass: N.objectPass,
      backgroundOpacity: Number(((p = N.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Mi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...gc(t, n),
        ...th({
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
function ov(e) {
  let t = null;
  function n(c = {}) {
    const f = av(c);
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
function $r(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (O) => W1(O), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => q1(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (O) => ov(O), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, f = n();
  let d = null;
  const h = i({
    syncState(O = {}) {
      if (typeof a.syncState == "function") {
        const L = { ...O }, R = a.syncState(L);
        return R && (d = L, R);
      }
      return d = { ...O }, !0;
    }
  });
  function v(O = {}) {
    return h.sync(O);
  }
  function y(O = {}, L = {}) {
    return d ? a.renderScene({
      ...d,
      view: O,
      width: L.width,
      height: L.height,
      dpr: L.dpr,
      backgroundOpacity: L.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: L.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function p(O, L, R = {}, T = {}) {
    if (!L) return !1;
    const I = y(R, {
      ...T,
      width: L.w,
      height: L.h
    });
    return I ? O ? (O.canvas && I === O.canvas || O.drawImage(I, L.x, L.y, L.w, L.h), !0) : !!c && I === c : !1;
  }
  function w(O, L = {}, R = {}) {
    const T = Number(R.width || 0), I = Number(R.height || 0);
    if (!(T > 0) || !(I > 0)) return null;
    const U = f.ensureTarget(O, T, I);
    if (!U) return null;
    const J = y(L, {
      ...R,
      width: T,
      height: I
    });
    return J ? (U.ctx.clearRect(0, 0, U.canvas.width, U.canvas.height), U.ctx.drawImage(J, 0, 0, U.canvas.width, U.canvas.height), U.canvas) : null;
  }
  function N(O) {
    f.clearTarget(O);
  }
  function k() {
    var O;
    f.dispose(), (O = a.dispose) == null || O.call(a), d = null;
  }
  function S() {
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
    clearState: S,
    dispose: k
  };
}
function hi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function sv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function mf(e, t = 8) {
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
function vc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function er(e, t, n) {
  if (!e) return hi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let hl = null, pl = null, gf = null, vf = null, _t = null, Ui = null, Xt = null, pr = null;
function lv() {
  if (pl) return pl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), pl = n, n;
}
function ml(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  hl = er(hl, n, i);
  const a = hl;
  dt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", vf !== a.ctx && (gf = a.ctx.createPattern(lv(), "repeat"), vf = a.ctx), a.ctx.fillStyle = gf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function cv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function uv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function fv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function dv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const ht = /* @__PURE__ */ new Map(), bc = 128;
function hv(e, t, n, i, a, c) {
  const f = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), h = `${f}:${d.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (ht.has(h)) {
    const R = ht.get(h);
    return ht.delete(h), ht.set(h, R), R;
  }
  ht.size >= bc && ht.delete(ht.keys().next().value);
  const v = f * 2 + 2, y = f + 1, p = vc(v, v), w = p.getContext("2d"), N = d * f, k = f + 1, S = `rgba(${n},${i},${a},${c})`, O = `rgba(${n},${i},${a},0)`, L = w.createRadialGradient(y, y, N, y, y, k);
  return L.addColorStop(0, S), L.addColorStop(1, O), w.fillStyle = L, w.fillRect(0, 0, v, v), ht.set(h, p), p;
}
function pv(e, t, n, i, a, c, f) {
  const { r: d, g: h, b: v, a: y } = i, p = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, a), k = Math.max(0, Math.min(0.99, c)), S = Math.max(0, Math.min(1, f ?? 0)), O = `chisel:${p}:${w}:${n.toFixed(2)}:${d}:${h}:${v}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${S.toFixed(2)}`;
  if (ht.has(O)) {
    const ie = ht.get(O);
    return ht.delete(O), ht.set(O, ie), ie;
  }
  ht.size >= bc && ht.delete(ht.keys().next().value);
  const L = vc(p, w), R = L.getContext("2d"), T = R.createImageData(p, w), I = T.data, U = Math.max(0, e - t), J = Math.max(0, Math.min(1, n)), oe = 1 + N;
  for (let ie = 0; ie < w; ie++)
    for (let xe = 0; xe < p; xe++) {
      const A = xe + 0.5 - e, be = ie + 0.5 - t, he = Math.max(Math.abs(A) - U, 0), H = Math.hypot(he, be) / t;
      if (H >= 1) continue;
      const se = H <= J ? 1 : Math.max(0, (1 - H) / Math.max(1e-4, 1 - J)), $ = 1 - H, ne = 1 + N * (1 - $) * (1 - $), G = 1 - k * $ * $, le = ne * G / oe;
      let we = 1;
      if (S > 0) {
        const Ue = Math.floor((be + t) / 1.5), Je = Math.floor((A + e) / 8), Qe = jr(wi(Ue * 41 + 500, Je * 19 + 300));
        we = 1 - S * 0.42 * Qe;
      }
      const Ee = Math.round(255 * Math.min(1, y * se * le * we));
      if (Ee <= 0) continue;
      const De = (ie * p + xe) * 4;
      I[De] = d, I[De + 1] = h, I[De + 2] = v, I[De + 3] = Ee;
    }
  return R.putImageData(T, 0, 0), ht.set(O, L), L;
}
function wi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function jr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function mv(e, t, n, i, a, c, f) {
  const d = e + 0.5 - n, h = t + 0.5 - i, v = Math.max(0, n - i), y = Math.max(Math.abs(d) - v, 0), p = Math.hypot(y, h) / i;
  if (p >= 1) return 0;
  const w = jr(wi(e * 17 + 3, t * 13 + 7)), N = p + c * 0.22 * (w - 0.5);
  if (N >= 1) return 0;
  const k = N <= a ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - a)), S = gv(e, t, d, h, n, i), O = c * 0.55;
  if (S < O) return 0;
  const R = 0.45 + 0.55 * ((S - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, f * k * R));
}
function gv(e, t, n, i, a, c) {
  const f = Math.floor((n + a) / 3), d = Math.floor((i + c) / 2), h = jr(wi(f * 13 + 700, d * 17 + 400)), v = Math.floor((n + a) / 1.5), y = Math.floor((i + c) / 1.5), p = jr(wi(v * 23 + 800, y * 29 + 500)), w = jr(wi(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + p * 0.3 + w * 0.15;
}
function vv(e, t, n, i, a) {
  const { r: c, g: f, b: d, a: h } = i, v = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, Math.min(1, a)), w = `crayon:${v}:${y}:${n.toFixed(2)}:${c}:${f}:${d}:${h.toFixed(3)}:${p.toFixed(2)}`;
  if (ht.has(w)) {
    const R = ht.get(w);
    return ht.delete(w), ht.set(w, R), R;
  }
  ht.size >= bc && ht.delete(ht.keys().next().value);
  const N = vc(v, y), k = N.getContext("2d"), S = k.createImageData(v, y), O = S.data, L = Math.max(0, Math.min(1, n));
  for (let R = 0; R < y; R++)
    for (let T = 0; T < v; T++) {
      const I = mv(T, R, e, t, L, p, h);
      if (I <= 0) continue;
      const U = (R * v + T) * 4;
      O[U] = c, O[U + 1] = f, O[U + 2] = d, O[U + 3] = I;
    }
  return k.putImageData(S, 0, 0), ht.set(w, N), N;
}
function nh(e, t, n) {
  var S, O;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = fv(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), f = bv(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((S = t == null ? void 0 : t.angle) == null ? void 0 : S.value) ?? 0), v = dv(t, a), y = String(((O = t == null ? void 0 : t.targetSpace) == null ? void 0 : O.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", w = t == null ? void 0 : t.scatter, N = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let k;
  if (i === "chisel") {
    const L = a * d, R = a, T = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), U = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = pv(L, R, c, f, T, I, U);
  } else if (i === "crayon") {
    const L = a * d, R = a, T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = vv(L, R, c, f, T);
  } else
    k = hv(a, c, f.r, f.g, f.b, f.a);
  return { ctx: e, stampTex: k, radiusPx: a, spacingPx: v, desc: n, aspect: d, angle: h, stampKind: i, scatter: N, latitudeCorrection: p };
}
function bv(e) {
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
function yv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function bf(e, t, n, i, a) {
  const c = e.angle, f = e.desc.width;
  function d(v, y) {
    c === 0 ? e.ctx.drawImage(e.stampTex, v - a, y - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(v, y), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const h = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - h < 0 && d(t + f, n), t + h > f && d(t - f, n);
}
function yc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: v, count: y } = e.scatter, p = v * e.radiusPx * a, w = wi(t, n);
    for (let N = 0; N < y; N++) {
      const k = jr(w + N * 2) * Math.PI * 2, S = Math.sqrt(jr(w + N * 2 + 1)) * p, O = t + Math.cos(k) * S, L = n + Math.sin(k) * S, R = Math.max(0.5, e.radiusPx * a * 0.48), T = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(T)) : 1, U = R * e.aspect * I;
      bf(e, O, L, R, U);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), f = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(f)) : 1, h = c * e.aspect * d;
  bf(e, t, n, c, h);
}
function yf(e, t, n) {
  const i = uv(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, f = nh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let w = 0; w < i.length; w++) {
    let N = Number(i[w].u || 0) * a;
    const k = Number(i[w].v || 0) * c;
    w > 0 && Math.abs(N - d[w - 1].x) > a * 0.5 && (N += N < d[w - 1].x ? a : -a), d.push({ x: N, y: k });
  }
  if (yc(f, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let h = d[0], v = d[0], y = d[0], p = 0;
  for (let w = 1; w < d.length; w++) {
    const N = d[w], k = { x: (v.x + N.x) * 0.5, y: (v.y + N.y) * 0.5 };
    w === 1 ? p = ya(f, y.x, y.y, k.x, k.y, p) : p = Ho(f, h, y, k, N, p), h = v, v = N, y = k;
  }
  d.length === 2 ? ya(f, y.x, y.y, v.x, v.y, p) : Ho(f, h, y, v, v, p), e.restore();
}
function Po(e, t, n) {
  var p;
  const i = Array.isArray((p = t == null ? void 0 : t.geometry) == null ? void 0 : p.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, f = yv(t), d = [];
  let h = 1 / 0, v = -1 / 0;
  for (let w = 0; w < i.length; w++) {
    const N = cv(i[w]);
    let k = Number(N.x || 0) * a;
    w > 0 && Math.abs(k - d[w - 1].x) > a * 0.5 && (k += k < d[w - 1].x ? a : -a), d.push({ x: k, y: Number(N.y || 0) * c }), k < h && (h = k), k > v && (v = k);
  }
  function y(w) {
    e.beginPath(), e.moveTo(d[0].x + w, d[0].y);
    for (let N = 1; N < d.length; N++) e.lineTo(d[N].x + w, d[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = f, y(0), h < 0 && y(a), v > a && y(-a), e.restore();
}
function no(e, t, n) {
  var f;
  if (String(((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.geometryKind) || "") === "lasso_fill") {
    Po(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? yf(e, t, n) : (Ui = er(Ui, n.width, n.height), dt(Ui), yf(Ui.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(Ui.canvas, 0, 0), e.restore());
}
function Dr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ya(e, t, n, i, a, c) {
  const f = i - t, d = a - n, h = Math.hypot(f, d);
  if (h < 1e-9) return c;
  let v = e.spacingPx - c;
  for (; v <= h; ) {
    const y = v / h;
    yc(e, t + f * y, n + d * y, 1), v += e.spacingPx;
  }
  return h - v + e.spacingPx;
}
function Ho(e, t, n, i, a, c) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, y = 0, p = d, w = p + h, N = w + v, k = w - p, S = 16;
  let O = c, L = n.x, R = n.y;
  for (let T = 1; T <= S; T++) {
    const I = p + k * T / S, U = ((p - I) * t.x + (I - y) * n.x) / (p - y), J = ((p - I) * t.y + (I - y) * n.y) / (p - y), oe = ((w - I) * n.x + (I - p) * i.x) / (w - p), ie = ((w - I) * n.y + (I - p) * i.y) / (w - p), xe = ((N - I) * i.x + (I - w) * a.x) / (N - w), A = ((N - I) * i.y + (I - w) * a.y) / (N - w), be = ((w - I) * U + (I - y) * oe) / (w - y), he = ((w - I) * J + (I - y) * ie) / (w - y), fe = ((N - I) * oe + (I - p) * xe) / (N - p), H = ((N - I) * ie + (I - p) * A) / (N - p), se = ((w - I) * be + (I - p) * fe) / (w - p), $ = ((w - I) * he + (I - p) * H) / (w - p);
    O = ya(e, L, R, se, $, O), L = se, R = $;
  }
  return O;
}
function _v(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, f = c.width, d = n * c.height, h = e.activeStroke;
  let v = t * f;
  if (h && Math.abs(v - h.prev.x) > f * 0.5 && (v += v < h.prev.x ? f : -f), !h) {
    const N = nh(a, i, c), k = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), S = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), O = String((i == null ? void 0 : i.toolKind) || "") === "eraser", L = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", yc(N, v, d, 1), e.activeStroke = {
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
      strokeOpacity: k,
      velocityWidthFactor: S,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: L,
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
  h.pointCount === 1 ? h.distSinceStamp = ya(w, h.lastMidX, h.lastMidY, y, p, h.distSinceStamp) : h.distSinceStamp = Ho(
    w,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: y, y: p },
    { x: v, y: d },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: v, y: d }, h.lastMidX = y, h.lastMidY = p, h.pointCount++, e.displayDirty = !0;
}
function Vl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = hi(t, n), f = {
    descriptor: i,
    committedMask: hi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: hi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = hi(t, n);
  let v = null, y = "", p = null;
  function w(A) {
    return {
      actionGroupId: A,
      descriptor: i,
      committedPaint: hi(t, n),
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
  function k(A) {
    return y === "mask" ? f : v ? N(v) : d;
  }
  function S(A) {
    var $;
    const be = !p || p.length !== A.length || A.some((ne, G) => ne !== p[G]), he = y === "paint" && (($ = v ? a.get(v) : d) == null ? void 0 : $.activeStroke) || null;
    let fe = f.displayDirty || d.displayDirty || be;
    for (const ne of A) {
      const G = a.get(ne);
      if (G != null && G.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (he && (fe = !0), !fe) return;
    f.displayDirty = !1, d.displayDirty = !1;
    for (const ne of A) {
      const G = a.get(ne);
      G && (G.displayDirty = !1);
    }
    p = [...A];
    const H = h.ctx;
    dt(h);
    const se = !!(he != null && he.isEraser);
    for (const ne of A) {
      const G = a.get(ne);
      if (!G) continue;
      const we = v === G.actionGroupId && y === "paint" ? G.activeStroke : null;
      if (se)
        _t = er(_t, t, n), dt(_t), _t.ctx.drawImage(G.committedPaint.canvas, 0, 0), Dr(_t.ctx, c.canvas), H.drawImage(_t.canvas, 0, 0);
      else if (H.drawImage(G.committedPaint.canvas, 0, 0), we) {
        const Ee = G.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
        H.save(), H.globalAlpha = Ee, H.drawImage(c.canvas, 0, 0), H.restore();
      }
    }
  }
  function O(A) {
    var he, fe, H, se, $;
    for (const ne of a.values())
      dt(ne.committedPaint), dt(ne.currentStroke), ne.activeStroke = null, ne.displayDirty = !0;
    dt(f.committedMask), dt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0, d.displayDirty = !0, p = null;
    const be = [
      ...Array.isArray((fe = (he = A == null ? void 0 : A.painting) == null ? void 0 : he.paint) == null ? void 0 : fe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((se = (H = A == null ? void 0 : A.painting) == null ? void 0 : H.mask) == null ? void 0 : se.strokes) ? A.painting.mask.strokes : []
    ];
    for (const ne of be) {
      if ((($ = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : $.kind) !== "ERP_GLOBAL") continue;
      const G = String((ne == null ? void 0 : ne.layerKind) || "paint"), we = String((ne == null ? void 0 : ne.toolKind) || "pen") === "eraser";
      if (G === "mask") {
        const Ee = f.descriptor;
        we ? (_t = er(_t, Ee.width, Ee.height), dt(_t), no(_t.ctx, ne, Ee), Dr(f.committedMask.ctx, _t.canvas)) : no(f.committedMask.ctx, ne, Ee);
        continue;
      }
      if (we) {
        _t = er(_t, i.width, i.height), dt(_t), no(_t.ctx, ne, i);
        for (const Ee of a.values())
          Dr(Ee.committedPaint.ctx, _t.canvas), Ee.displayDirty = !0;
      } else {
        const Ee = String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), De = N(Ee), Ue = De.descriptor;
        no(De.committedPaint.ctx, ne, Ue), De.displayDirty = !0;
      }
    }
    S([...a.keys()]);
  }
  function L(A, be) {
    y = String((A == null ? void 0 : A.layerKind) || "");
    const he = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (y === "mask")
      v = null, dt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0;
    else {
      const fe = he ? d : N(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      v = he ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), dt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function R(A, be) {
    var G;
    const he = String((A == null ? void 0 : A.layerKind) || "paint"), fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", H = he === "mask" ? f : fe ? d : N(String((A == null ? void 0 : A.actionGroupId) || v || "__default__")), se = H.activeStroke, $ = H.descriptor;
    if (se && se.pointCount > 1) {
      const le = H.currentStroke.ctx;
      le.globalCompositeOperation = "source-over";
      const we = {
        ctx: le,
        stampTex: se.stampTex,
        radiusPx: se.radiusPx,
        spacingPx: se.spacingPx,
        desc: $,
        aspect: se.aspect,
        angle: se.angle,
        stampKind: se.stampKind,
        scatter: se.scatter,
        latitudeCorrection: se.latitudeCorrection
      };
      se.pointCount === 2 ? ya(we, se.lastMidX, se.lastMidY, se.prev.x, se.prev.y, se.distSinceStamp) : Ho(we, se.pprev, { x: se.lastMidX, y: se.lastMidY }, se.prev, se.prev, se.distSinceStamp);
    }
    H.lassoPreviewActive && (dt(H.currentStroke), Po(H.currentStroke.ctx, A, $), H.lassoPreviewActive = !1);
    const ne = he === "mask" ? f.committedMask : H.committedPaint;
    if (fe && he === "paint")
      for (const le of a.values())
        Dr(le.committedPaint.ctx, H.currentStroke.canvas), le.displayDirty = !0;
    else if (fe)
      Dr(ne.ctx, H.currentStroke.canvas);
    else {
      const le = Math.max(0, Math.min(1, (se == null ? void 0 : se.strokeOpacity) ?? 1));
      ne.ctx.save(), ne.ctx.globalAlpha = le, ne.ctx.drawImage(H.currentStroke.canvas, 0, 0), ne.ctx.restore();
    }
    sv() && (String((A == null ? void 0 : A.toolKind) || ""), String(($ == null ? void 0 : $.kind) || ""), Number(($ == null ? void 0 : $.width) || 0), Number(($ == null ? void 0 : $.height) || 0), String(((G = A == null ? void 0 : A.targetSpace) == null ? void 0 : G.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), mf(H.currentStroke.canvas), mf(ne.canvas), void 0), dt(H.currentStroke), H.activeStroke = null, H.displayDirty = !0, v = null, y = "", S([...a.keys()]);
  }
  function T(A) {
    if (y === "mask")
      dt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y === "paint" && !v)
      dt(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (v) {
      const be = a.get(v);
      be && (dt(be.currentStroke), be.activeStroke = null, be.lassoPreviewActive = !1, be.displayDirty = !0);
    }
    v = null, y = "", S([...a.keys()]);
  }
  function I(A, be) {
    var fe;
    if (y = String((A == null ? void 0 : A.layerKind) || ""), String(((fe = A == null ? void 0 : A.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        dt(f.currentStroke), Po(f.currentStroke.ctx, A, f.descriptor), f.lassoPreviewActive = !0, f.displayDirty = !0;
      else {
        const H = String((A == null ? void 0 : A.toolKind) || "") === "eraser", se = H ? d : N(String((A == null ? void 0 : A.actionGroupId) || v || "__default__"));
        v = H ? "" : String((A == null ? void 0 : A.actionGroupId) || v || "__default__"), dt(se.currentStroke), Po(se.currentStroke.ctx, A, se.descriptor), se.lassoPreviewActive = !0, se.displayDirty = !0;
      }
      S([...a.keys()]);
    }
  }
  function U(A) {
    return S(A ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: f.committedMask,
      descriptor: i
    };
  }
  function J(A) {
    return a.get(String(A)) ?? null;
  }
  function oe() {
    return [...a.keys()];
  }
  function ie(A) {
    var $;
    const be = a.get(String(A));
    if (!be) return null;
    const he = y === "paint" && v === be.actionGroupId, fe = y === "paint" && (($ = v ? a.get(v) : d) == null ? void 0 : $.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return Xt = er(Xt, t, n), dt(Xt), Xt.ctx.drawImage(be.committedPaint.canvas, 0, 0), Dr(Xt.ctx, c.canvas), Xt.canvas;
    const H = he ? be.activeStroke : null;
    if (!H) return be.committedPaint.canvas;
    Xt = er(Xt, t, n), dt(Xt), Xt.ctx.drawImage(be.committedPaint.canvas, 0, 0);
    const se = be.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, H.strokeOpacity ?? 1));
    return Xt.ctx.save(), Xt.ctx.globalAlpha = se, Xt.ctx.drawImage(c.canvas, 0, 0), Xt.ctx.restore(), Xt.canvas;
  }
  function xe() {
    return pr = er(pr, t, n), dt(pr), ml(pr.ctx, f.committedMask.canvas), y === "mask" && f.activeStroke && (f.activeStroke.isEraser ? (_t = er(_t, t, n), dt(_t), _t.ctx.drawImage(f.committedMask.canvas, 0, 0), Dr(_t.ctx, c.canvas), dt(pr), ml(pr.ctx, _t.canvas)) : ml(pr.ctx, c.canvas)), pr.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: L,
    appendStrokePoint: _v,
    updateActiveStroke: I,
    commitActiveStroke: R,
    cancelActiveStroke: T,
    getErpTarget: U,
    ensureTarget: k,
    getGroupTarget: J,
    getGroupDisplayCanvas: ie,
    getMaskDisplayCanvas: xe,
    getAllGroupIds: oe
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function gl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Ft(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function xv(e, t) {
  let n = Ft(t) - Ft(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Hl = Math.PI / 180, jl = 0.12, rh = 3, _c = 35, xc = 140, vi = 100, wv = 0.4, Sv = 0.6, ih = 5.5, ah = 20, zl = 0.8;
function Nv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = q(Number(e || vi), 1, 179) * Hl;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / Hl;
}
function Mv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function ds(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: vi })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), f = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(L, R = null) {
    d && d(L, R);
  }
  function y(L, R, T = null, I = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(L || 0), h.drag.lastY = Number(R || 0), h.drag.lastTs = Number(I || performance.now()), h.drag.pointerId = T, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], v("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: T }), !0;
  }
  function p(L, R, T = "pano", I = performance.now()) {
    if (!h.drag.active) return !1;
    const U = Number(I || performance.now()), J = Number(L), oe = Number(R), ie = J - h.drag.lastX, xe = oe - h.drag.lastY;
    h.drag.lastX = J, h.drag.lastY = oe, h.drag.lastTs = U;
    const A = i() || { x: 1, y: 1 }, be = Number(A.x || 1), he = Number(A.y || 1), fe = { ...t() };
    let H = 0, se = 0;
    if (T === "unwrap") {
      const ne = a() || { w: 1, h: 1 }, G = Math.max(1, Number(ne.w || 1)), le = Math.max(1, Number(ne.h || 1)), we = ie / G, Ee = xe / le;
      H = -we * 360 * be, se = Ee * 180 * he;
    } else {
      const ne = c() || { w: 0, h: 0 }, G = Math.max(1, Number(ne.w || 0)), le = Math.max(1, Number(ne.h || 0));
      if (G > 1 && le > 1) {
        const we = q(Number(fe.fov || vi), 1, 179), Ee = q(Nv(we, G, le), 0.1, 179);
        H = -(ie / G) * we * be, se = xe / le * Ee * he;
      } else
        H = -ie * jl * be, se = xe * jl * he;
    }
    fe.yaw = Ft(Number(fe.yaw || 0) + H), fe.pitch = q(Number(fe.pitch || 0) + se, -89.9, 89.9), n(fe), h.velHistory.push({ ts: U, yaw: fe.yaw, pitch: fe.pitch });
    let $ = 0;
    for (; $ < h.velHistory.length - 1 && h.velHistory[$].ts < U - 100; ) $++;
    return $ > 0 && h.velHistory.splice(0, $), h.inertia.active = !1, h.inertia.lastTs = U, f(), v("drag", { phase: "move", dx: ie, dy: xe, dYaw: H, dPitch: se }), !0;
  }
  function w(L = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const R = Number(L || performance.now());
    h.drag.lastTs = R;
    const T = h.velHistory.filter((U) => R - U.ts <= 80);
    if (T.length >= 2) {
      const U = T[0], J = T.at(-1), oe = Math.max(1e-3, (J.ts - U.ts) / 1e3);
      let ie = J.yaw - U.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), h.inertia.vx = ie / oe, h.inertia.vy = (J.pitch - U.pitch) / oe;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const I = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = I > ah, h.inertia.lastTs = R, v("drag", { phase: "end", speed: I, inertiaActive: h.inertia.active }), !0;
  }
  function N(L = performance.now()) {
    if (!h.inertia.active) return !1;
    const R = Number(L || performance.now()), T = Math.max(1e-3, (R - (h.inertia.lastTs || R)) / 1e3);
    h.inertia.lastTs = R;
    const I = { ...t() };
    I.yaw = Ft(Number(I.yaw || 0) + h.inertia.vx * T), I.pitch = q(Number(I.pitch || 0) + h.inertia.vy * T, -89.9, 89.9);
    const U = Math.exp(-ih * T);
    return h.inertia.vx *= U, h.inertia.vy *= U, Math.abs(h.inertia.vx) < zl && Math.abs(h.inertia.vy) < zl && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(I), f(), h.inertia.active;
  }
  function k(L) {
    const R = Math.sign(Number(L || 0));
    if (!R) return !1;
    const T = { ...t() }, I = Number(T.fov || vi);
    return T.fov = q(I + R * rh, _c, xc), n(T), f(), v("wheel", { deltaSign: R, fovBefore: I, fovAfter: T.fov }), !0;
  }
  function S(L) {
    return k(Math.sign(Mv(L)));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: vi }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, f();
  }
  return {
    state: h,
    startDrag: y,
    moveDrag: p,
    endDrag: w,
    stepInertia: N,
    applyWheel: k,
    applyWheelEvent: S,
    resetView: O
  };
}
const kv = {
  dragSensitivity: jl,
  wheelStep: rh,
  fovMin: _c,
  fovMax: xc,
  initialFov: vi,
  inertiaBlendOld: wv,
  inertiaBlendInst: Sv,
  inertiaDamping: ih,
  inertiaStartSpeed: ah,
  inertiaStopSpeed: zl,
  rad2deg: 1 / Hl
};
function jo(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const _f = Math.PI / 180;
function Gi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Pv(e) {
  const t = e || {}, n = Gi(t.yaw_deg, 0), i = Gi(t.pitch_deg, 0), a = Gi(t.roll_deg ?? t.rot_deg, 0), c = gl(Gi(t.hFOV_deg, 90), 1, 179), f = gl(Gi(t.vFOV_deg, 60), 1, 179), d = Math.tan(c * _f * 0.5) / Math.max(1e-6, Math.tan(f * _f * 0.5)), h = gl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: f,
    aspect: h
  };
}
const oh = 0.28;
function Cv(e) {
  const t = e && typeof e == "object" ? e : {}, n = q(Number(t.x0 ?? 0), 0, 1), i = q(Number(t.y0 ?? 0), 0, 1), a = q(Number(t.x1 ?? 1), 0, 1), c = q(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Av(e, t = {}) {
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
    crop: Cv(e.crop),
    opacity: d ? oh : q(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function hs(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((f) => Av(f, { includeHidden: i })).filter((f) => f && (i || f.visible !== !1)).sort((f, d) => Number(f.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function sh(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || hs(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], f = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var k;
    const h = String((d == null ? void 0 : d.assetId) || "").trim(), v = h || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!v || f.has(v)) return;
    const y = h ? a[h] : null, p = t(v, y, d);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const w = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), N = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || w <= 0 || N <= 0 || (f.add(v), c.push({
      assetId: v,
      source: p,
      revision: String(((k = n.revisionFor) == null ? void 0 : k.call(n, v, y, p)) ?? [
        v,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), c;
}
function wc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: q(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Iv(e, t = 360) {
  return wc(e, t);
}
function _r(e) {
  const t = Pv(e || {});
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
const { app: nt } = _o;
function zo() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (_o == null ? void 0 : _o.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const kr = Math.PI / 180, Tv = _c, Ev = xc, _a = { Nu: 14, Nv: 9 }, Dv = { Nu: 24, Nv: 14 }, Lv = 10, xf = 0.16, Rv = 3, Ov = 220, Fv = "pano_suite.ui_settings.v1", Vv = 120;
function Hv() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Fv)) || "").trim();
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
function lh() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ki(e) {
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
function ch() {
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
function ro(e, t, n = {}) {
  var p;
  if (!lh()) return;
  const i = e.__panoDomPreview, a = i == null ? void 0 : i.widget, c = i == null ? void 0 : i.root, f = (p = c == null ? void 0 : c.querySelector) == null ? void 0 : p.call(c, "div"), d = i == null ? void 0 : i.canvas, h = c == null ? void 0 : c.parentElement, v = h == null ? void 0 : h.parentElement, y = (w) => {
    var k;
    if (!w) return null;
    const N = (k = w.getBoundingClientRect) == null ? void 0 : k.call(w);
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
  d && (d.width, d.height), _n(e), `${t}`, {
    ...n,
    widgetCompute: a != null && a.__lastComputeSize,
    dom: (y(c), y(f), y(d), y(h), y(v))
  };
}
function _n(e) {
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
function jv(e) {
  const t = _n(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function uh(e, t, n) {
  jv(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function $l(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function wr(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function fh(e) {
  return jo(wr(e));
}
function zr(e = null) {
  var c, f;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((f = (c = nt == null ? void 0 : nt.canvas) == null ? void 0 : c.constructor) == null ? void 0 : f.name) || "");
  return [t, i, n, a].join("|");
}
function dh(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: zr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: zr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: zr(t)
  };
}
const la = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = zr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = zr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, hh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function hh(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : dh(i, e).chosenPath, c = $l(e);
      this.activeBackend = c;
      const f = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (c === a && c !== "none" && f === i && d === h) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Sr(e, { keepMonitor: i === "stickers" }), wb(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = $l(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Sr(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Sr(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function $o(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Sr(e, t = {}) {
  var i, a, c, f, d;
  if (!e) return;
  ki.unregister(e), $o(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const v = String((h == null ? void 0 : h.name) || ""), y = String((h == null ? void 0 : h.type) || ""), p = zo();
      return !(v === p || y === p || v === "pano_preview" || y === "pano_preview" || v === "preview" && y === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || la.unregister(e);
}
function Br(e, t, n) {
  return { x: e, y: t, z: n };
}
function wf(e, t) {
  return Br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function io(e, t) {
  return Br(e.x * t, e.y * t, e.z * t);
}
function vl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Sf(e, t) {
  return Br(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ao(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Br(e.x / t, e.y / t, e.z / t);
}
function Or(e, t) {
  const n = e * kr, i = t * kr, a = Math.cos(i);
  return Br(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function ps(e, t, n = 0) {
  const i = Or(e, t), a = Br(0, 1, 0);
  let c = Sf(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Br(1, 0, 0)), c = ao(c);
  let f = ao(Sf(i, c));
  const d = n * kr, h = Math.cos(d), v = Math.sin(d), y = wf(io(c, h), io(f, v)), p = wf(io(c, -v), io(f, h));
  return { fwd: i, right: ao(y), up: ao(p) };
}
function zv(e, t = "#00ff00") {
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
function $v(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = xa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Sc(e) {
  var d, h;
  const t = $v(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = xa(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((h = xa(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const f = zv(t, i);
  return f.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: f }, f;
}
function xa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Nf(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function ph(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Bv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function mh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function gh(e, t, n = null) {
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
  return !i && n != null && (i = Bv(e == null ? void 0 : e.graph, n)), i;
}
function Uv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function ms(e, t = []) {
  const n = Uv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function Mf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Bo(e, t) {
  const n = Mf(e), i = Mf(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Gv(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = ms(e, t).map((v) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(v))).filter((v) => v >= 0), c = n.map((v, y) => ({ input: v, idx: y })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), f = [.../* @__PURE__ */ new Set([...a, ...c])], d = [];
  for (const v of f) {
    const y = gh(e, v);
    if ((y == null ? void 0 : y.id) != null) {
      d.push(String(y.id));
      continue;
    }
    const p = (h = n[v]) == null ? void 0 : h.link;
    if (p == null) continue;
    const w = ph(e == null ? void 0 : e.graph, p), { originId: N } = mh(w);
    N != null && d.push(String(N));
  }
  return [...new Set(d)];
}
const ki = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = bn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var v, y, p, w, N;
        if (!c) return;
        const f = Bo(i, c == null ? void 0 : c.id);
        Gv(c, ["erp_image", "bg_erp"]).some((k) => Bo(i, k)), !(String(c.__panoPreviewMode || "") === "cutout" && !f) && (wa(c), (y = (v = c.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (p = c.setDirtyCanvas) == null || p.call(c, !0, !0), (N = (w = c.graph) == null ? void 0 : w.setDirtyCanvas) == null || N.call(w, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, bn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = bn) != null && e.removeEventListener) || (bn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Uo(e) {
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
  return typeof ((c = bn) == null ? void 0 : c.apiURL) == "function" ? bn.apiURL(a) : a;
}
function Kv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Wv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function qv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function vh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Kv(t)) return [t];
  const { filename: n, subfolder: i } = Wv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Uo({
    filename: n,
    subfolder: i,
    type: c
  }));
  return qv([...a, t]);
}
function Yv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Uo({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Go(e) {
  const t = nt == null ? void 0 : nt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (Bo(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const f of c)
      if (Bo(f, a)) return t[f];
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
      return Uo({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Pn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Uo(e);
}
function Xv(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function bh(e) {
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
function Nc(e, t) {
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
function Zv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((f) => t.push(f));
  }, a = (c, f = 0) => {
    !c || f > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, f + 1), a(c.ui, f + 1), a(c.data, f + 1), a(c.result, f + 1));
  };
  return a(e, 0), t;
}
function yh(e, t) {
  try {
    const n = Zv(t);
    let i = "";
    for (const a of n)
      if (i = Pn(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Nc(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Jv(e, t = null) {
  var L, R;
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = Go(n), a = [
    (L = i == null ? void 0 : i.ui) == null ? void 0 : L.pano_videos,
    i == null ? void 0 : i.pano_videos,
    (R = i == null ? void 0 : i.ui) == null ? void 0 : R.images,
    i == null ? void 0 : i.images
  ];
  let c = "";
  for (const T of a)
    if (Array.isArray(T)) {
      for (const I of T) {
        const U = Pn(I);
        if (U && (/\.mp4(\?|$)/i.test(U) || String((I == null ? void 0 : I.format) || "").toLowerCase() === "video/mp4")) {
          c = U;
          break;
        }
      }
      if (c) break;
    }
  if (!c) return null;
  const f = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = Nc(c, f);
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
  }, k = () => t == null ? void 0 : t(), S = () => {
    t == null || t(), w();
  }, O = () => {
    t == null || t();
  };
  return v.addEventListener("loadedmetadata", N, { once: !0 }), v.addEventListener("canplay", N, { once: !0 }), p || v.addEventListener("timeupdate", k), v.addEventListener("play", S), v.addEventListener("pause", O), v.src = d, v.load(), h.src = d, h.video = v, v;
}
function Qv(e, t = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  const i = String((e == null ? void 0 : e.__panoOwnOutputSrc) || "").trim(), a = Go(n), c = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], f = Array.isArray(e == null ? void 0 : e.imgs) ? e.imgs : [], d = i ? [i, ...c, ...f] : [...c, ...f];
  let h = "";
  for (const L of d)
    if (h = Pn(L), h) break;
  if (!h) return null;
  const v = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), p = vh(h).map((L) => Nc(L, v));
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
  const k = new Image();
  let S = -1;
  const O = () => {
    if (S += 1, S >= p.length) {
      e.__panoOwnOutputImageCache === N && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    k.src = p[S];
  };
  return k.onload = () => {
    var L;
    e.__panoOwnOutputImageCache === N && N.pendingImg === k && N.pendingSrc === w && (N.src = w, N.img = k, N.pendingSrc = "", N.pendingImg = null), t == null || t(), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0);
  }, k.onerror = () => {
    if (S + 1 >= p.length) {
      e.__panoOwnOutputImageCache === N && N.pendingImg === k && (N.pendingSrc = "", N.pendingImg = null);
      return;
    }
    O();
  }, N.pendingSrc = w, N.pendingImg = k, O(), N.img && (N.img.complete || N.img.naturalWidth || N.img.width) ? N.img : k;
}
function eb(e, t = []) {
  var v, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = ms(e, t).map((p) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(p))).filter((p) => p >= 0), c = n.map((p, w) => ({ input: p, idx: w })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), f = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const p of f) {
    const w = n[p], N = w == null ? void 0 : w.link;
    if (N == null) continue;
    const k = ph(e.graph, N), { originId: S, originSlot: O } = mh(k);
    if (S == null) continue;
    const L = gh(e, p, S);
    if (!L) continue;
    const R = Number(O || 0), T = Go((L == null ? void 0 : L.id) ?? S), I = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
    if (I.length) {
      const ie = [];
      R >= 0 && R < I.length && ie.push(I[R]), ie.push(...I);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let U = [];
    try {
      U = typeof (nt == null ? void 0 : nt.getNodeImageUrls) == "function" ? nt.getNodeImageUrls(L) || [] : [];
    } catch {
      U = [];
    }
    if (Array.isArray(U) && U.length) {
      const ie = [];
      R >= 0 && R < U.length && ie.push(U[R]), ie.push(...U);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const J = Array.isArray(L == null ? void 0 : L.imgs) ? L.imgs : [];
    if (J.length) {
      const ie = [];
      R >= 0 && R < J.length && ie.push(J[R]), ie.push(...J);
      for (const xe of ie) {
        const A = Pn(xe);
        if (A)
          return String((w == null ? void 0 : w.name) || ""), { src: A, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const oe = (v = L == null ? void 0 : L.widgets) == null ? void 0 : v.find((ie) => String((ie == null ? void 0 : ie.name) || "").toLowerCase() === "image");
    if (oe) {
      let ie = Pn(oe.value);
      if (ie && !ie.includes("/") && !ie.includes(":") && (L.comfyClass === "LoadImage" || L.type === "LoadImage") && (ie = bn.apiURL(`/view?filename=${encodeURIComponent(ie)}&type=input&subfolder=`)), ie)
        return String((w == null ? void 0 : w.name) || ""), { src: ie, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const d = Go(e == null ? void 0 : e.id), h = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && h.push(...d.pano_input_images), Array.isArray((y = d == null ? void 0 : d.ui) == null ? void 0 : y.pano_input_images) && h.push(...d.ui.pano_input_images), h.length > 0)
    for (const p of h) {
      const w = Pn(p);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function tb(e, t = [], n = {}) {
  const i = eb(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = vh(a);
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
    var k, S, O, L;
    if (p += 1, p >= c.length) {
      if (((S = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : S.call(k, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (L = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || L.call(O, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const N = c[p];
    y.pendingResolvedSrc = N, v.src = N;
  };
  return v.onload = () => {
    var N, k, S;
    ((k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : k.call(N, d)) === y && y.pendingImg === v && (y.srcRaw = a, y.resolvedSrc = String(y.pendingResolvedSrc || v.src || ""), y.img = v, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || v.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, v.onerror = (N) => {
    var k, S, O, L;
    if (p + 1 < c.length) {
      w();
      return;
    }
    if (((S = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : S.call(k, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (L = (O = e.__panoLinkedInputImageCache) == null ? void 0 : O.delete) == null || L.call(O, d);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, w(), f && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : v;
}
function Ko(e, t = [], n = null, i = {}) {
  const a = tb(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function wa(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function Mc(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function mr(e, t, n = "") {
  const i = Mc(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Vv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Wo(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), f = n / a, d = i / c, h = Math.min(f, d);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function _h(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), f = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || f <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), v = Math.max(Math.round(34 * n), d + Math.round(14 * n)), y = i + (c - h) * 0.5, p = a + (f - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, p, h, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + h * 0.5, p + v * 0.5 + 0.5), e.restore();
}
function oo(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function nb(e) {
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
function xh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), f = Number(t) > 0 ? Number(t) : 1;
  let d = a, h = a / f;
  return h > c && (h = c, d = c * f), {
    x: n + (a - d) * 0.5,
    y: i + (c - h) * 0.5,
    w: d,
    h
  };
}
function rb(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const f = xh(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, f.x, f.y, f.w, f.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(f.x, f.y, f.w, f.h)), e.restore(), !0;
}
function ib(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var d;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let f = 22;
    try {
      const h = typeof c.computeSize == "function" ? c.computeSize(((d = _n(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(h) && Number.isFinite(Number(h[1])) && (f = Number(h[1]));
    } catch {
      f = 22;
    }
    a += f;
  }), a;
}
function kf(e, t) {
  if (!e || !t || !Array.isArray(e.widgets)) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Co(e) {
  const n = ib(e) + 2, i = 8, a = _n(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), f = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return f < 40 || c < 80 ? null : { x: i, y: n, w: c, h: f };
}
function wh(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Yv(n);
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
function ab(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, f) => Number((c == null ? void 0 : c.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Bl(e, t) {
  return hs(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Ul(e, t, n) {
  return sh(t, (i, a) => wh(e, i, a), { scene: n });
}
function ob(e, t) {
  var f;
  const n = Mh(e, t);
  if (!n) return [];
  const i = kh(t), a = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], c = new Map(
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
function sb(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, f = (d) => {
    const h = d.x - a, v = d.y - c, y = Math.hypot(h, v) || 1;
    return { x: d.x + h / y * i, y: d.y + v / y * i };
  };
  return [f(e), f(t), f(n)];
}
function Pf(e, t, n, i, a, c, f, d) {
  const h = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(h) < 1e-6) return;
  const [v, y, p] = sb(c, f, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(v.x, v.y), e.lineTo(y.x, y.y), e.lineTo(p.x, p.y), e.closePath(), e.clip();
  const w = (c.x * (i.y - a.y) + f.x * (a.y - n.y) + d.x * (n.y - i.y)) / h, N = (c.x * (a.x - i.x) + f.x * (n.x - a.x) + d.x * (i.x - n.x)) / h, k = (c.x * (i.x * a.y - a.x * i.y) + f.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / h, S = (c.y * (i.y - a.y) + f.y * (a.y - n.y) + d.y * (n.y - i.y)) / h, O = (c.y * (a.x - i.x) + f.y * (n.x - a.x) + d.y * (i.x - n.x)) / h, L = (c.y * (i.x * a.y - a.x * i.y) + f.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / h;
  e.transform(w, S, N, O, k, L), e.drawImage(t, 0, 0), e.restore();
}
function Sh(e, t, n, i) {
  const a = vl(e, t.right), c = vl(e, t.up), f = vl(e, t.fwd);
  if (f <= 1e-4) return null;
  const d = c / f / i, h = a / f / i;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Nh(e, t, n, i, a, c, f, d = 12, h = 9) {
  var H;
  const v = q(Number(f.hFOV_deg || 30), 1, 179) * kr, y = q(Number(f.vFOV_deg || 30), 1, 179) * kr, p = Math.tan(v * 0.5), w = Math.tan(y * 0.5), N = f.crop || {}, k = q(Number(N.x0 ?? 0), 0, 1), S = q(Number(N.y0 ?? 0), 0, 1), O = q(Number(N.x1 ?? 1), 0, 1), L = q(Number(N.y1 ?? 1), 0, 1), R = Math.max(1e-4, O - k), T = Math.max(1e-4, L - S), I = ps(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0), Number(f.rot_deg || f.roll_deg || 0)), U = [], J = [], oe = [], ie = [];
  for (let se = 0; se <= h; se++) {
    const $ = se / h, G = (1 - (S + $ * T) * 2) * w;
    for (let le = 0; le <= d; le++) {
      const we = le / d, De = ((k + we * R) * 2 - 1) * p, Ue = I.fwd.x + I.right.x * De + I.up.x * G, Je = I.fwd.y + I.right.y * De + I.up.y * G, Qe = I.fwd.z + I.right.z * De + I.up.z * G, it = Math.hypot(Ue, Je, Qe) || 1e-8, Vt = Ue / it, Ct = Je / it, pn = Qe / it, sn = Vt * i.right.x + Ct * i.right.y + pn * i.right.z, Un = Vt * i.up.x + Ct * i.up.y + pn * i.up.z, u = Vt * i.fwd.x + Ct * i.fwd.y + pn * i.fwd.z;
      if (u <= 1e-4)
        U[se] || (U[se] = []), J[se] || (J[se] = []), U[se][le] = null, J[se][le] = null;
      else {
        const F = Un / u / a, Q = sn / u / a;
        U[se] || (U[se] = []), J[se] || (J[se] = []), U[se][le] = n.x + n.w * 0.5 + Q * n.h * 0.5, J[se][le] = n.y + n.h * 0.5 - F * n.h * 0.5;
      }
      oe[se] || (oe[se] = []), ie[se] || (ie[se] = []), oe[se][le] = we, ie[se][le] = $;
    }
  }
  const xe = (H = c.assets) == null ? void 0 : H[f.asset_id], A = wh(t, f.asset_id, xe);
  if (!A || !A.complete || !A.naturalWidth) return;
  const be = Number(A.naturalWidth || A.width || 1), he = Number(A.naturalHeight || A.height || 1), fe = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = fe;
  for (let se = 0; se < h; se++)
    for (let $ = 0; $ < d; $++) {
      const ne = U[se][$], G = J[se][$], le = U[se][$ + 1], we = J[se][$ + 1], Ee = U[se + 1][$], De = J[se + 1][$], Ue = U[se + 1][$ + 1], Je = J[se + 1][$ + 1];
      if (ne === null || le === null || Ee === null || Ue === null) continue;
      const Qe = oe[se][$] * be, it = ie[se][$] * he, Vt = oe[se][$ + 1] * be, Ct = ie[se][$ + 1] * he, pn = oe[se + 1][$] * be, sn = ie[se + 1][$] * he, Un = oe[se + 1][$ + 1] * be, u = ie[se + 1][$ + 1] * he;
      Pf(e, A, { x: Qe, y: it }, { x: Vt, y: Ct }, { x: Un, y: u }, { x: ne, y: G }, { x: le, y: we }, { x: Ue, y: Je }), Pf(e, A, { x: Qe, y: it }, { x: Un, y: u }, { x: pn, y: sn }, { x: ne, y: G }, { x: Ue, y: Je }, { x: Ee, y: De });
    }
}
function lb(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Sc(e), a = Co(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = ps(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), f = Math.tan(Number(e.__panoPreviewView.fov || 100) * kr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = Ko(
    e,
    ms(e, ["erp_image", "bg_erp"]),
    () => {
      var I, U, J;
      (U = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null || U.call(I), (J = e.setDirtyCanvas) == null || J.call(e, !0, !1);
    }
  ), h = !!(d && d.complete && (d.naturalWidth || d.width)), v = Pc(e), y = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = v || y, w = _a, N = Bl(e, i), k = Ul(e, i, N), S = wc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let O = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = $r()), h) {
    const I = fs({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(k) ? k.map((oe) => `${String((oe == null ? void 0 : oe.assetId) || "")}:${String((oe == null ? void 0 : oe.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: N,
      textures: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), J = e.__panoRuntimeCore.syncState(I) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", S, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    O = !!J, J && t.drawImage(J, a.x, a.y, a.w, a.h);
  }
  const L = p ? 8 : 12, R = p ? 6 : 9, T = ab(e, i);
  if (!h || T.length === 0) {
    const I = Wo(t == null ? void 0 : t.canvas, a);
    Ch(t, a, c, f, I);
  }
  !O && h && qo(e, t, a, c, f, d, w), !O && T.length > 0 && T.forEach((I) => Nh(t, e, a, c, f, i, I, L, R)), t.restore();
}
function cb(e, t, n, i, a = "preview_scene", c = "") {
  const f = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return fs({
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
function bl(e, t, n, i) {
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
  const a = fb(e, t, i);
  return a || null;
}
function ub(e, t) {
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
function fb(e, t, n) {
  var a, c;
  const i = ub(t, n || (nt == null ? void 0 : nt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Cf(e) {
  return Number(e == null ? void 0 : e.button) === 0 && String((e == null ? void 0 : e.type) || "").toLowerCase().includes("down") ? !0 : String((e == null ? void 0 : e.type) || "").toLowerCase() === "mouseup" ? !1 : typeof (e == null ? void 0 : e.buttons) == "number" ? (e.buttons & 1) === 1 : typeof (e == null ? void 0 : e.which) == "number" ? e.which === 1 : typeof (e == null ? void 0 : e.button) == "number" ? e.button === 0 : !1;
}
function so(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), _n(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", uh(e, 320, 180), Hn(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, N;
    const p = t ? t.apply(this, arguments) : void 0;
    try {
      const k = arguments[0];
      k && !((w = this.flags) != null && w.collapsed) && (i.stepInertia(performance.now()) && ((N = this.setDirtyCanvas) == null || N.call(this, !0, !1)), lb(this, k, i));
    } catch {
    }
    return p;
  }, e.onResize = function() {
    var w;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Pi(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), Lh(this, 220, null), p;
  };
  const i = ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (p) => {
      e.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = Co(e);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      kc(e), (p = e.setDirtyCanvas) == null || p.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(p, w, N) {
    var k;
    try {
      if (!((k = this.flags) != null && k.collapsed)) {
        const S = bl(this, p, w, N) || { x: 0, y: 0 }, O = _n(this), L = Number((O == null ? void 0 : O[0]) || 0), R = Number((O == null ? void 0 : O[1]) || 0);
        if (S.x >= L - 20 && S.y >= R - 20)
          return a ? a.apply(this, arguments) : void 0;
        const I = Co(this);
        if (Nf(S.x, S.y, I))
          return (p == null ? void 0 : p.button) === 0 && i.startDrag(S.x, S.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(p, w, N) {
    try {
      const k = bl(this, p, w, N);
      if (i.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return i.endDrag(), !0;
        const S = k || i.state.drag;
        return i.moveDrag(S.x, S.y, "pano"), !0;
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
    var k, S;
    try {
      if ((k = this.flags) != null && k.collapsed) return h ? h.apply(this, arguments) : void 0;
      const O = bl(this, p, w, N), L = Co(this);
      if (!O || !Nf(O.x, O.y, L)) return h ? h.apply(this, arguments) : void 0;
      const R = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return i.applyWheel(Math.sign(R)) && ((S = this.setDirtyCanvas) == null || S.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return h ? h.apply(this, arguments) : void 0;
    }
  };
  const v = e.onRemoved, y = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = f, e.onMouseLeave = d, e.onMouseWheel = h, e.onRemoved = v, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = y, e.onRemoved = function() {
    return y(), la.unregister(this), ki.unregister(this), v ? v.apply(this, arguments) : void 0;
  };
}
function db(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Mh(e, t) {
  var v, y, p, w, N, k, S, O, L, R, T, I;
  const n = (y = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : y.strokes, i = (w = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const f = db(e, t), d = `${f.width}x${f.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = Vl(f), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: i || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.paint) !== h.paint || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== h.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== h.groups || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function kh(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function hb(e, t) {
  const n = Mh(e, t);
  if (!n) return null;
  const i = kh(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function pb(e, t, n = null) {
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
function Af(e, t) {
  var c, f;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = pb(e, t, () => {
      var h, v;
      return (v = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null ? void 0 : v.call(h);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = hb(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function mb(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Ph(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function gb(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const f = mb(n);
  if (f.width === i && f.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const h = Ph(e, c, f.width, f.height).getContext("2d", { willReadFrequently: !0 });
  if (!h) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    h.clearRect(0, 0, f.width, f.height), h.drawImage(n, 0, 0, f.width, f.height);
    const v = h.getImageData(0, 0, f.width, f.height).data, y = t.getImageData(0, 0, i, a), p = y.data, w = Math.max(0, f.width - 1), N = Math.max(0, f.height - 1);
    for (let k = 0; k < a; k += 1) {
      const S = (k + 0.5) * f.height / a - 0.5, O = q(Math.floor(S), 0, N), L = q(O + 1, 0, N), R = q(S - O, 0, 1);
      for (let T = 0; T < i; T += 1) {
        const I = (T + 0.5) * f.width / i - 0.5, U = q(Math.floor(I), 0, w), J = q(U + 1, 0, w), oe = q(I - U, 0, 1);
        let ie = 0, xe = 0, A = 0, be = 0;
        const he = (se, $, ne) => {
          const G = ($ * f.width + se) * 4, le = (v[G + 3] || 0) / 255;
          ie += le * ne, xe += (v[G] || 0) / 255 * le * ne, A += (v[G + 1] || 0) / 255 * le * ne, be += (v[G + 2] || 0) / 255 * le * ne;
        };
        if (he(U, O, (1 - oe) * (1 - R)), he(J, O, oe * (1 - R)), he(U, L, (1 - oe) * R), he(J, L, oe * R), ie <= 1e-6) continue;
        const fe = (k * i + T) * 4, H = 1 - ie;
        p[fe] = Math.round(q((xe + p[fe] / 255 * H) * 255, 0, 255)), p[fe + 1] = Math.round(q((A + p[fe + 1] / 255 * H) * 255, 0, 255)), p[fe + 2] = Math.round(q((be + p[fe + 2] / 255 * H) * 255, 0, 255)), p[fe + 3] = 255;
      }
    }
    t.putImageData(y, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function If(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let h = e.__panoPreviewBgPaint;
  if (!h || h.__revKey !== d || h.width !== a || h.height !== c) {
    (!h || h.width !== a || h.height !== c) && (h = document.createElement("canvas"), h.width = a, h.height = c, e.__panoPreviewBgPaint = h);
    const v = h.getContext("2d");
    v.clearRect(0, 0, a, c), v.drawImage(t, 0, 0, a, c), gb(e, v, n, a, c, "__panoPreviewOverlayScratch"), h.__revKey = d;
  }
  return h;
}
function vb(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Mc(e, a);
  const c = Sc(e), f = t.parentElement, d = 1, h = Math.max(1, Number((f == null ? void 0 : f.clientWidth) || t.clientWidth || 0)), v = Math.max(1, Number((f == null ? void 0 : f.clientHeight) || t.clientHeight || 0)), y = Math.max(64, Math.round(h * d)), p = Math.max(64, Math.round(v * d)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const N = nb(c), k = Ko(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ie, xe;
          return (xe = (ie = e.__panoDomPreview) == null ? void 0 : ie.requestDraw) == null ? void 0 : xe.call(ie);
        },
        { preserveReadyWhilePending: !1 }
      ), S = !!(k && k.complete && (k.naturalWidth || k.width));
      (t.width !== y || t.height !== p) && (t.width = y, t.height = p);
      const O = { x: 0, y: 0, w: y, h: p }, L = S ? q(Number((k.naturalWidth || k.width) / Math.max(1, Number(k.naturalHeight || k.height || 1))), 0.05, 20) : 1, R = N ? _r(N) : null, T = q(Number((R == null ? void 0 : R.aspect) || L || 1), 0.05, 20), I = xh(O, T);
      Wo(t, O), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, y, p);
      let U = "none", J = "Open editor and add frame", oe = "";
      if (oe = String((k == null ? void 0 : k.src) || ""), N)
        if (k && !S)
          U = "loading";
        else if (S) {
          const ie = Bl(e, c), xe = Ul(e, c, ie), A = ob(e, c), be = Zi({
            stateRevision: [
              "runtime_cutout_scene",
              String(k.currentSrc || k.src || ""),
              Number(k.naturalWidth || k.width || 0),
              Number(k.naturalHeight || k.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((N == null ? void 0 : N.id) || ""),
              Array.isArray(xe) ? xe.map((fe) => `${String((fe == null ? void 0 : fe.assetId) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}`).join(",") : "",
              Array.isArray(A) ? A.map((fe) => `${String((fe == null ? void 0 : fe.id) || "")}:${String((fe == null ? void 0 : fe.revision) || "")}:${Number((fe == null ? void 0 : fe.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: k,
            backgroundRevision: String(k.currentSrc || k.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: ie,
            textures: xe,
            rasterEntries: A,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = $r()), e.__panoRuntimeCore.syncState(be), e.__panoRuntimeCore.renderToContext(
            w,
            I,
            _r(N),
            { width: I.w, height: I.h, dpr: 1 }
          ) || (U = "empty", J = "Open editor or run node");
        } else
          U = "empty", J = "Connect ERP image";
      else {
        if (S) {
          const ie = Af(e, c), xe = ie != null && ie.source ? If(e, k, ie.source, ie.revision || "") : k;
          rb(w, xe, O, 0.44);
        }
        U = "empty", J = "Open editor and add frame";
      }
      U === "loading" ? (oo(e, !1), mr(e, !0, oe)) : U === "empty" ? (oo(e, !0, J), mr(e, !1, "")) : (oo(e, !1), mr(e, !1, ""));
    } else {
      oo(e, !1), (t.width !== y || t.height !== p) && (t.width = y, t.height = p);
      const N = { x: 0, y: 0, w: y, h: p }, k = Wo(t, N);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, y, p), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const S = ps(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), O = Math.tan(Number(e.__panoPreviewView.fov || 100) * kr * 0.5), L = Ko(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var he, fe;
          return (fe = (he = e.__panoDomPreview) == null ? void 0 : he.requestDraw) == null ? void 0 : fe.call(he);
        }
      ), R = !!(L && L.complete && (L.naturalWidth || L.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, y, p);
      const T = Bl(e, c), I = Ul(e, c, T), U = wc(e.__panoPreviewView, c == null ? void 0 : c.coverage), J = Af(e, c), oe = (J == null ? void 0 : J.source) || null, ie = R && oe ? If(e, L, oe, (J == null ? void 0 : J.revision) || "") : L, xe = ie !== L ? String(ie.__revKey || "") : L ? [
        String(L.currentSrc || L.src || ""),
        Number(L.naturalWidth || L.width || 0),
        Number(L.naturalHeight || L.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = $r());
      let A = !1;
      if (R) {
        const fe = e.__panoDomRuntimeCore.syncState(
          cb(ie, c, T, I, "runtime_dom_scene", xe)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", U, {
          width: N.w,
          height: N.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        fe && (w.drawImage(fe, N.x, N.y, N.w, N.h), A = !0);
      }
      const be = T.stickers;
      if (R && A)
        mr(e, !1, "");
      else if (R)
        qo(e, w, N, S, O, ie, _a), mr(e, !1, "");
      else if (oe)
        qo(e, w, N, S, O, oe, _a), mr(e, !!L && !R, String((L == null ? void 0 : L.src) || ""));
      else {
        const he = !!L && !R;
        mr(e, he, String((L == null ? void 0 : L.src) || "")), he && _h(w, N, k);
      }
      if ((!R || be.length === 0) && Ch(w, N, S, O, k), !A && be.length > 0) {
        const he = Pc(e), fe = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, H = he || fe, se = H ? 8 : 12, $ = H ? 6 : 9;
        be.forEach((ne) => Nh(w, e, N, S, O, c, ne, se, $));
      } else if (!L || !R) {
        const he = Math.max(14, Math.round(16 * k));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${he}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", y * 0.5, p * 0.5 + 24 * k);
      }
    }
}
function qo(e, t, n, i, a, c, f = Dv) {
  const d = Sc(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = $r());
  const v = bh(c), y = fs({
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
function Tf(e, t, n, i, a, c, f = 1) {
  let d = !1;
  e.strokeStyle = c, e.lineWidth = f, e.beginPath();
  for (const h of t) {
    const v = Sh(h, n, i, a);
    if (!v) {
      d = !1;
      continue;
    }
    d ? e.lineTo(v.x, v.y) : (e.moveTo(v.x, v.y), d = !0);
  }
  e.stroke();
}
function Ch(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", f = "rgba(250, 250, 250, 0.35)";
  for (let v = -75; v <= 75; v += 15) {
    const y = [];
    for (let p = -180; p <= 180; p += 15) y.push(Or(p, v));
    Tf(e, y, n, t, i, v === 0 ? f : c, v === 0 ? 1.5 : 1);
  }
  for (let v = -180; v <= 180; v += 45) {
    const y = [];
    for (let p = -89; p <= 89; p += 15) y.push(Or(v, p));
    Tf(e, y, n, t, i, v % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, v % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Or(0, 0) },
    { name: "Right", dir: Or(90, 0) },
    { name: "Back", dir: Or(180, 0) },
    { name: "Left", dir: Or(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((v) => {
    const y = Sh(v.dir, n, t, i);
    y && e.fillText(v.name, y.x, y.y + 20 * a);
  }), e.restore();
}
function Ah(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function kc(e) {
  const t = Ah(e);
  t.dragging = !1, t.hqFrames = Lv;
}
function Pi(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Pc(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function bb(e, t = performance.now()) {
  const n = Ah(e);
  if (n.lastFrameTs > 0) {
    const i = Math.max(1, t - n.lastFrameTs);
    n.frameEmaMs <= 0 ? n.frameEmaMs = i : n.frameEmaMs = n.frameEmaMs * (1 - xf) + i * xf;
  }
  return n.lastFrameTs = t, n.frameEmaMs;
}
function yb(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function _b(e, t, n = 20) {
  var f;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (f = t.getBoundingClientRect) == null ? void 0 : f.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
}
function Fn(e, t) {
  return _b(e, t) ? !1 : (yb(e), !0);
}
function Ih() {
  var n;
  const e = (n = nt == null ? void 0 : nt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Th(e) {
  var n;
  if (!e) return;
  const t = (n = nt == null ? void 0 : nt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Eh(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0) return;
  const i = _n(e), a = Number((i == null ? void 0 : i[0]) || 0), c = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(c) || a >= t && c >= n) return;
  const f = [Math.max(t, a), Math.max(n, c)];
  try {
    typeof e.setSize == "function" ? e.setSize(f) : e.size = f, e.__panoStandaloneBootSized = !0;
  } catch (d) {
    String((d == null ? void 0 : d.message) || d || "unknown");
  }
}
function Dh(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var c, f;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Gl(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, Pi(e, 150), t == null || t(), Lh(e, 180, t);
    }
  };
}
function Lh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Hn(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Ji(e) {
  return e.__panoStandaloneView || (e.__panoStandaloneView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoStandaloneView;
}
function ca(e) {
  if (e) {
    if (typeof e.__panoStandaloneUnavailableRestore == "function")
      try {
        e.__panoStandaloneUnavailableRestore();
      } catch {
      }
    e.__panoStandaloneUnavailableRestore = null, e.__panoStandaloneUnavailable = !1;
  }
}
function Yo(e, t = "Node 2.0 preview unavailable") {
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
function xb(e, t, n, i = "erp_image", a = _a) {
  var T, I, U;
  Mc(e, "standalone");
  const c = Wo(t == null ? void 0 : t.canvas, n), f = Ji(e), d = ps(Number(f.yaw || 0), Number(f.pitch || 0), 0), h = Math.tan(Number(f.fov || 100) * kr * 0.5), v = ms(e, [i, "erp_image", "bg_erp"]), p = fh(e) ? Jv(e, () => {
    var J, oe;
    return (oe = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : oe.call(J);
  }) || Qv(e, () => {
    var J, oe;
    return (oe = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : oe.call(J);
  }) : Ko(
    e,
    v,
    () => {
      var J, oe;
      return (oe = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : oe.call(J);
    }
  ), w = Xv(p), N = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || ""), k = Number(((U = (I = (T = e == null ? void 0 : e.widgets) == null ? void 0 : T.find) == null ? void 0 : I.call(T, (J) => (J == null ? void 0 : J.name) === "coverage")) == null ? void 0 : U.value) || 360) === 180 ? 180 : 360, S = bh(p), O = String(e.__panoStandaloneLastFrameSrc || ""), L = !!e.__panoStandaloneLastFrameCanvas && !!N && N === O;
  if (e.__panoStandaloneCore || (e.__panoStandaloneCore = $r()), w) {
    const J = fs({
      stateRevision: [
        "standalone_preview_scene",
        S,
        k
      ].join("|"),
      backgroundSource: p,
      backgroundRevision: S,
      coverageDeg: k,
      scene: hs(null, {}),
      textures: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), ie = e.__panoStandaloneCore.syncState(J) ? e.__panoStandaloneCore.renderToTarget("preview_node", Iv(f, k), {
      width: n.w,
      height: n.h,
      dpr: window.devicePixelRatio || 1
    }) : null, xe = !!ie;
    if (ie) {
      t.drawImage(ie, n.x, n.y, n.w, n.h);
      const be = Ph(e, "__panoStandaloneLastFrameCanvas", n.w, n.h).getContext("2d");
      be && (be.clearRect(0, 0, n.w, n.h), be.drawImage(ie, 0, 0, n.w, n.h), e.__panoStandaloneLastFrameSrc = N);
    }
    xe || (L ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h), qo(e, t, n, d, h, p, a)));
  } else
    L ? t.drawImage(e.__panoStandaloneLastFrameCanvas, n.x, n.y, n.w, n.h) : (t.fillStyle = "#070707", t.fillRect(n.x, n.y, n.w, n.h));
  mr(e, !!p && !w, N) && _h(t, n, c);
}
function wb(e, t = {}) {
  var ne;
  const n = t.__allowStandalone === !0, i = fh(e);
  if (i && !n) {
    wr(e);
    return;
  }
  i && Eh(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", ki.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, f = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || la.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), h = a ? dh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: zr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (h.chosenPath = d, h.reason = "controller_target_backend");
  const v = a ? h.chosenPath : "dom", y = h.signature || zr(e);
  if (Number(e.__panoRebindGeneration || 0), $l(e), e == null || e.id, e.__panoPreviewMode, h.reason, h.frontendVersionRaw, e.addDOMWidget, _n(e), e.__panoFrontendSig = y, e.__panoStickersPath = v, a && la.register(e), a && v === "legacy_draw") {
    if (c) return;
    Sr(e, { keepMonitor: !0 }), so(e);
    return;
  }
  if ((ne = e.__panoDomPreview) != null && ne.widget) return;
  if (e.__panoLegacyPreviewHooked && Sr(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && so(e);
    return;
  }
  const p = t.noPreview === !0, w = a || p ? 0 : 56, N = document.createElement("div");
  if (ch(), N.className = "pano-node-preview-dom", N.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && N.classList.add("pano-node-preview--no-preview"), N.setAttribute("data-capture-wheel", "true"), N.setAttribute("tabindex", "-1"), N.style.cssText = [
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
    const G = e.addDOMWidget(zo(), "preview", N, Gl(e, null));
    Hn(e), e.__panoDomPreview = { widget: G, root: N, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const k = document.createElement("div");
  k.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const S = document.createElement("canvas");
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
  ].join(";"), O.textContent = "Open editor and add frame", k.appendChild(S), k.appendChild(O), N.appendChild(k), uh(e, 120, 120), Hn(e);
  let L = null;
  try {
    Dh(e, w, () => {
      var G, le;
      return (le = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : le.call(G);
    }), L = e.addDOMWidget(
      zo(),
      "preview",
      N,
      Gl(e, () => {
        var G, le;
        return (le = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : le.call(G);
      }, w)
    );
  } catch {
    a && so(e);
    return;
  }
  const R = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    R.needsDraw = !0, R.raf || (R.raf = requestAnimationFrame(J));
  }, I = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Pi(e, 150), T();
  }) : null;
  I == null || I.observe(k);
  const U = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const G = 3, le = (we) => {
      requestAnimationFrame(() => {
        var De;
        const Ee = !!(N != null && N.isConnected && (k != null && k.isConnected) && (S != null && S.isConnected) && Number(k.clientHeight || 0) > 0 && Number(S.clientHeight || 0) > 0);
        if (!Ee && we < G) {
          le(we + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((k == null ? void 0 : k.clientHeight) || 0), Number((S == null ? void 0 : S.clientHeight) || 0), !Ee) {
          if (c) {
            e.__panoPreviewMode, Number((k == null ? void 0 : k.clientHeight) || 0), Number((S == null ? void 0 : S.clientHeight) || 0);
            return;
          }
          Sr(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", so(e), (De = e.setDirtyCanvas) == null || De.call(e, !0, !0);
        }
      });
    };
    le(1);
  }, J = (G) => {
    var we, Ee, De;
    R.raf = 0;
    const le = oe.stepInertia(G);
    (R.needsDraw || le) && (R.needsDraw = !1, (we = e.flags) != null && we.collapsed || vb(e, S, null, oe), (Ee = e.setDirtyCanvas) == null || Ee.call(e, !0, !1)), (le || R.needsDraw) && (R.raf = requestAnimationFrame(J)), lh() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, _n(e), Ki(N), Ki(k), Ki(S), Ki(N.parentElement), Ki((De = N.parentElement) == null ? void 0 : De.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, oe = ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    onInteraction: () => {
      T();
    }
  });
  S.addEventListener("pointerdown", (G) => {
    var le, we;
    Fn(G, k) && f && G.button === 0 && ((le = N.focus) == null || le.call(N), (we = S.setPointerCapture) == null || we.call(S, G.pointerId), S.style.cursor = "grabbing", oe.startDrag(G.clientX, G.clientY, G.pointerId));
  }), S.addEventListener("pointermove", (G) => {
    !f || !oe.state.drag.active || (Fn(G, k), oe.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const ie = (G) => {
    var le;
    !f || !oe.state.drag.active || (Fn(G, k), (le = S.releasePointerCapture) == null || le.call(S, G.pointerId), S.style.cursor = "grab", oe.endDrag(), kc(e), T());
  };
  S.addEventListener("pointerup", ie), S.addEventListener("pointercancel", ie), S.addEventListener("pointerleave", (G) => {
    oe.state.drag.active && ie(G);
  });
  const xe = (G) => {
    var we, Ee, De;
    if (!Fn(G, k) || !f) return;
    const le = Ih();
    oe.applyWheelEvent(G) && T(), (we = G.preventDefault) == null || we.call(G), (Ee = G.stopPropagation) == null || Ee.call(G), (De = G.stopImmediatePropagation) == null || De.call(G), requestAnimationFrame(() => {
      var Ue, Je;
      Th(le), (Je = (Ue = nt == null ? void 0 : nt.canvas) == null ? void 0 : Ue.setDirty) == null || Je.call(Ue, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    k.addEventListener(G, xe, { passive: !1, capture: !0 }), S.addEventListener(G, xe, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    S.addEventListener(G, (le) => Fn(le, k)), k.addEventListener(G, (le) => Fn(le, k));
  });
  const A = xa(e, "state_json");
  if (A && !A.__panoPreviewPatchedCb) {
    A.__panoPreviewPatchedCb = !0;
    const G = A.callback;
    A.callback = (le) => {
      const we = G ? G(le) : void 0;
      return T(), we;
    };
  }
  const be = xa(e, "bg_color");
  if (be && !be.__panoPreviewPatchedCb) {
    be.__panoPreviewPatchedCb = !0;
    const G = be.callback;
    be.callback = (le) => {
      const we = G ? G(le) : void 0;
      return T(), we;
    };
  }
  const he = e.onRemoved, fe = e.onResize, H = e.onExecuted;
  e.onExecuted = function(G) {
    yh(e, G), wa(e), Hn(e), T();
    const le = H ? H.apply(this, arguments) : void 0;
    return Hn(e), le;
  };
  const se = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return wa(e), Hn(e), T(), se ? se.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var le;
    const G = fe ? fe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Pi(this, 150), T(), (le = this.setDirtyCanvas) == null || le.call(this, !0, !1), G;
  }, e.onRemoved = function() {
    return $(), la.unregister(this), ki.unregister(this), he ? he.apply(this, arguments) : void 0;
  };
  const $ = () => {
    var G;
    R.raf && cancelAnimationFrame(R.raf), (G = I == null ? void 0 : I.disconnect) == null || G.call(I), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, e.onRemoved = he;
  };
  e.__panoDomRestore = $, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: L, root: N, canvas: S, requestDraw: T, state: R, emptyHintEl: O }, U(), T();
}
function Ef(e, t = {}) {
  hh(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Sb(e) {
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
function Nb(e, t = {}, n = null) {
  var d;
  let i = !1;
  try {
    i = kb(e, {
      ...t,
      __noAutoFallback: !0,
      __skipRouteLog: !0
    }) === !0;
  } catch {
    i = !1;
  }
  if (!i || !((d = e.__panoDomPreview) != null && d.widget))
    return Yo(e, "Preview mount failed"), wr(e), !0;
  $o(e);
  const a = { cancelled: !1, frame: 0, timeoutId: 0 };
  e.__panoDomMountProbe = a;
  const c = (h) => {
    var v, y, p;
    a.cancelled || (a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, Yo(e, "Preview mount failed"), (y = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0), n && (e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n), wr(e), void 0);
  }, f = () => {
    var y, p, w, N, k, S, O, L, R, T;
    if (a.cancelled) return;
    const h = e.__panoDomPreview;
    Number(((y = h == null ? void 0 : h.root) == null ? void 0 : y.clientWidth) || 0), Number(((p = h == null ? void 0 : h.root) == null ? void 0 : p.clientHeight) || 0);
    const v = (N = (w = h == null ? void 0 : h.root) == null ? void 0 : w.querySelector) == null ? void 0 : N.call(w, "div");
    if (Number((v == null ? void 0 : v.clientWidth) || 0), Number((v == null ? void 0 : v.clientHeight) || 0), Number(((k = h == null ? void 0 : h.canvas) == null ? void 0 : k.clientWidth) || 0), Number(((S = h == null ? void 0 : h.canvas) == null ? void 0 : S.clientHeight) || 0), a.frame, h != null && h.widget, (O = h == null ? void 0 : h.root) != null && O.isConnected && ((L = h == null ? void 0 : h.canvas) != null && L.isConnected), !(h != null && h.widget) || !((R = h.root) != null && R.isConnected) || !((T = h.canvas) != null && T.isConnected)) {
      c();
      return;
    }
    if (Sb(h)) {
      a.cancelled = !0, a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = 0), e.__panoDomMountProbe = null, ca(e), wr(e);
      return;
    }
    if (a.frame += 1, a.frame >= Rv) {
      c();
      return;
    }
    requestAnimationFrame(f);
  };
  return a.timeoutId = setTimeout(() => {
    c();
  }, Ov), requestAnimationFrame(f), !0;
}
function Mb(e, t = {}) {
  var i, a;
  Eh(e);
  const n = `standalone_unified|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (!(e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n)) {
    if (wr(e), e == null || e.id, _n(e), Number(((i = _n(e)) == null ? void 0 : i[0]) || 0), Number(((a = _n(e)) == null ? void 0 : a[1]) || 0), e == null || e.addDOMWidget, Sr(e, { keepMonitor: !1, reason: "attach_standalone_unified_begin" }), ca(e), typeof (e == null ? void 0 : e.addDOMWidget) == "function" && Nb(e, t, n)) {
      e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n;
      return;
    }
    Yo(e, "Preview mount failed"), e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, wr(e);
  }
}
function kb(e, t = {}) {
  var a, c;
  const n = `standalone_dom|${String(t.imageInputName || "erp_image")}|${String(t.buttonText || "Open Preview")}`;
  if (e.__panoPreviewAttached === !0 && e.__panoPreviewMountKey === n && ((a = e.__panoDomPreview) != null && a.widget)) return !0;
  Sr(e, { keepMonitor: !1, reason: "attach_standalone_dom_begin" }), ca(e), e.__panoPreviewMode = "standalone_dom", e.__panoPreviewButtonText = String(t.buttonText || "Open Preview"), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, ki.register(e), t.__skipRouteLog !== !0 && (wr(e), void 0);
  const i = String(t.imageInputName || "erp_image");
  ch();
  try {
    if (typeof e.addDOMWidget != "function") throw new Error("addDOMWidget unavailable");
    if ((c = e.__panoDomPreview) != null && c.widget) return !0;
    const f = document.createElement("div");
    f.className = "pano-node-preview-dom pano-node-preview--stickers", f.style.cssText = "width:100%;height:100%;position:relative;display:block;min-height:56px;overflow:hidden;", f.setAttribute("data-capture-wheel", "true"), f.setAttribute("tabindex", "-1");
    const d = document.createElement("div");
    d.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const h = document.createElement("canvas");
    h.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;", d.appendChild(h), f.appendChild(d), Dh(e, 56, () => {
      var $, ne;
      return (ne = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : ne.call($);
    });
    const v = e.addDOMWidget(
      zo(),
      "preview",
      f,
      Gl(e, () => {
        var $, ne;
        return (ne = ($ = e.__panoDomPreview) == null ? void 0 : $.requestDraw) == null ? void 0 : ne.call($);
      }, 56)
    );
    v && (v.serialize = !1), Hn(e), e.__panoBindSeq = Number(e.__panoBindSeq || 0) + 1;
    const y = e.__panoBindSeq;
    e == null || e.id;
    const p = { raf: 0, needsDraw: !0, dragging: !1, pointerId: null }, w = { listeners: 0, raf: 0, widget: 0 }, N = ds({
      getView: () => Ji(e),
      setView: ($) => {
        const ne = Ji(e);
        ne.yaw = Ft(Number($.yaw || 0)), ne.pitch = q(Number($.pitch || 0), -89.9, 89.9), ne.fov = q(Number($.fov || 100), Tv, Ev);
      },
      getViewportSize: () => {
        const $ = h.getBoundingClientRect();
        return {
          w: Math.max(1, Number($.width || h.clientWidth || 0)),
          h: Math.max(1, Number($.height || h.clientHeight || 0))
        };
      },
      getInvert: () => {
        const $ = Hv();
        return {
          x: $.invert_view_x ? -1 : 1,
          y: $.invert_view_y ? -1 : 1
        };
      },
      onInteraction: () => {
        kc(e);
      },
      onDebug: ($, ne) => {
      }
    });
    e.__panoStandaloneController = N;
    let k = null;
    const S = ($) => {
      var ne, G, le;
      (ne = $.preventDefault) == null || ne.call($), (G = $.stopPropagation) == null || G.call($), (le = $.stopImmediatePropagation) == null || le.call($);
    }, O = () => {
      k && k();
      const $ = (le) => {
        if (p.dragging) {
          if (!Cf(le)) {
            oe(le, (le == null ? void 0 : le.type) || "pointermove_buttons_released");
            return;
          }
          N.moveDrag(le.clientX, le.clientY, "pano", performance.now()), L(), S(le);
        }
      }, ne = (le) => {
        p.dragging && (oe(le, (le == null ? void 0 : le.type) || "pointerup"), S(le));
      }, G = (le) => {
        p.dragging && (oe(le, (le == null ? void 0 : le.type) || "pointercancel"), S(le));
      };
      window.addEventListener("pointermove", $, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", G, !0), w.listeners += 3, k = () => {
        window.removeEventListener("pointermove", $, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", G, !0), w.listeners = Math.max(0, w.listeners - 3), k = null;
      };
    }, L = () => {
      p.needsDraw = !0, p.raf || (p.raf = requestAnimationFrame(I));
    }, R = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
      Pi(e, 150), L();
    }) : null;
    R == null || R.observe(d);
    let T = 0;
    const I = ($ = performance.now()) => {
      var Ct;
      p.raf = 0, T++, T <= 20 && ro(e, `tick.${T}`);
      const ne = N.stepInertia($), G = Pc(e, $), le = ne || G;
      if (bb(e, $), !p.needsDraw && !le && T > 20) return;
      p.needsDraw = !1;
      const we = 1, Ee = Number(h.clientWidth || 0), De = Number(h.clientHeight || 0);
      e.__panoBootMinHeightActive && Ee > 0 && De > 0 && (e.__panoBootMinHeightActive = !1);
      const Ue = Math.max(64, Math.round(Ee * we)), Je = Math.max(64, Math.round(De * we));
      (T <= 20 || Ue !== h.width || Je !== h.height) && ro(e, "tick.resize", { w: Ue, h: Je, cw: h.clientWidth, ch: h.clientHeight }), (h.width !== Ue || h.height !== Je) && (h.width = Ue, h.height = Je);
      const Qe = h.getContext("2d");
      if (!Qe) return;
      xb(e, Qe, { x: 0, y: 0, w: Ue, h: Je }, i, _a), (Ct = e.setDirtyCanvas) == null || Ct.call(e, !0, !1), (p.needsDraw || le) && (p.raf = requestAnimationFrame(I));
    }, U = ($) => {
      var ne, G, le;
      Fn($, d) && $.button === 0 && ((ne = f.focus) == null || ne.call(f), (G = h.setPointerCapture) == null || G.call(h, $.pointerId), p.pointerId = $.pointerId, p.dragging = !0, h.style.cursor = "grabbing", N.startDrag($.clientX, $.clientY, $.pointerId, performance.now()), (le = h.hasPointerCapture) == null || le.call(h, $.pointerId), O(), L());
    }, J = ($) => {
      if (p.dragging) {
        if (Fn($, d), !Cf($)) {
          oe($);
          return;
        }
        N.moveDrag($.clientX, $.clientY, "pano", performance.now()), L();
      }
    }, oe = ($, ne = "pointerup") => {
      p.dragging && (Fn($, d), p.dragging = !1, p.pointerId = null, h.style.cursor = "grab", N.endDrag(performance.now()), k == null || k(), L());
    }, ie = ($) => oe($, ($ == null ? void 0 : $.type) || "pointerup"), xe = () => {
      p.dragging && (p.dragging = !1, p.pointerId = null, h.style.cursor = "grab", N.endDrag(performance.now()), k == null || k(), L());
    }, A = ($) => {
      var De, Ue, Je;
      if (!Fn($, d)) return;
      const ne = Ih(), G = document.activeElement, le = Number(Ji(e).fov || 100), we = N.applyWheelEvent($), Ee = Number(Ji(e).fov || 100);
      Number($.deltaY || 0), we && L(), (De = $.preventDefault) == null || De.call($), (Ue = $.stopPropagation) == null || Ue.call($), (Je = $.stopImmediatePropagation) == null || Je.call($), requestAnimationFrame(() => {
        var Qe, it;
        Th(ne), (it = (Qe = nt == null ? void 0 : nt.canvas) == null ? void 0 : Qe.setDirty) == null || it.call(Qe, !0, !0);
      });
    };
    h.addEventListener("pointerdown", U), h.addEventListener("pointermove", J), h.addEventListener("pointerup", ie), h.addEventListener("pointercancel", ie), h.addEventListener("lostpointercapture", xe), h.addEventListener("wheel", A, { passive: !1, capture: !0 }), d.addEventListener("wheel", A, { passive: !1, capture: !0 }), w.listeners += 7;
    const be = ["contextmenu", "click", "dblclick"];
    be.forEach(($) => {
      d.addEventListener($, S, { capture: !0 }), h.addEventListener($, S, { capture: !0 }), w.listeners += 2;
    });
    const he = e.onRemoved, fe = e.onResize, H = e.onExecuted, se = e.onConnectionsChange;
    return e.onExecuted = function($) {
      ro(e, "onExecuted"), yh(e, $), wa(e), Hn(e), L();
      const ne = H ? H.apply(this, arguments) : void 0;
      return Hn(e), ne;
    }, e.onConnectionsChange = function() {
      return ro(e, "onConnectionsChange"), wa(e), Hn(e), L(), se ? se.apply(this, arguments) : void 0;
    }, e.onResize = function() {
      var ne;
      const $ = fe ? fe.apply(this, arguments) : void 0;
      return this.__panoUserResized = !0, Pi(this, 150), L(), (ne = this.setDirtyCanvas) == null || ne.call(this, !0, !1), $;
    }, e.onRemoved = function() {
      var $, ne, G;
      return (ne = ($ = e.__panoStandaloneModal) == null ? void 0 : $.dispose) == null || ne.call($), e.__panoStandaloneModal = null, $o(e), p.raf && (cancelAnimationFrame(p.raf), w.raf += 1), k == null || k(), h.removeEventListener("pointerdown", U), h.removeEventListener("pointermove", J), h.removeEventListener("pointerup", ie), h.removeEventListener("pointercancel", ie), h.removeEventListener("lostpointercapture", xe), h.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), be.forEach((le) => {
        d.removeEventListener(le, S, !0), h.removeEventListener(le, S, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), kf(e, v) && (w.widget += 1), (G = R == null ? void 0 : R.disconnect) == null || G.call(R), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, ki.unregister(e), { ...w }, e.onRemoved = he, he ? he.apply(this, arguments) : void 0;
    }, e.__panoDomRestore = () => {
      var $, ne;
      (ne = ($ = e.__panoStandaloneModal) == null ? void 0 : $.dispose) == null || ne.call($), e.__panoStandaloneModal = null, $o(e), p.raf && (cancelAnimationFrame(p.raf), w.raf += 1), k == null || k(), h.removeEventListener("pointerdown", U), h.removeEventListener("pointermove", J), h.removeEventListener("pointerup", ie), h.removeEventListener("pointercancel", ie), h.removeEventListener("lostpointercapture", xe), h.removeEventListener("wheel", A, !0), d.removeEventListener("wheel", A, !0), w.listeners = Math.max(0, w.listeners - 7), be.forEach((G) => {
        d.removeEventListener(G, S, !0), h.removeEventListener(G, S, !0), w.listeners = Math.max(0, w.listeners - 2);
      }), kf(e, v) && (w.widget += 1), e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoDomPreview = null, e.__panoDomRestore = null, e.__panoStandaloneController = null, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null, e.onResize = fe, e.onExecuted = H, e.onConnectionsChange = se, e.onRemoved = he, { ...w }, ca(e);
    }, e.__panoPreviewHooked = !0, e.__panoPreviewAttached = !0, e.__panoPreviewMountKey = n, e.__panoDomPreview = { widget: v, root: f, canvas: h, requestDraw: L, state: p }, L(), !0;
  } catch {
    return t.__noAutoFallback === !0 ? (Yo(e, "Node 2.0 preview unavailable"), !1) : (ca(e), !1);
  }
}
function Pb(e, t = {}) {
  Mb(e, t);
}
function Cb(e, t, n) {
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
function Rh(e) {
  return !!(e != null && e.prototype);
}
function Kl(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Ab(e, t = {}) {
  Rh(e) || Pb(e, {
    ...t,
    onOpen: Kl(e, t.onOpen)
  });
}
function Ib(e, t = {}) {
  if (!Rh(e)) {
    Ef(e, {
      ...t,
      onOpen: Kl(e, t.onOpen)
    });
    return;
  }
  Cb(e, "cutout_preview", (n) => {
    Ef(n, {
      ...t,
      onOpen: Kl(n, t.onOpen)
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
function Df(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Tb(e = 80, t = null, n = 8) {
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
function Eb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Db(e) {
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
function Lb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Rb(e, t) {
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
function lo(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = Rb(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function Ob(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const h = lo(e.points, t, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = lo(e.points, t, 1);
  if (!c) return null;
  const f = lo(e.rawPoints, t, 1), d = lo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: f || c.map((h) => ({ ...h })),
    processedPoints: d || c.map((h) => ({ ...h }))
  };
}
function Fb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Lb(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = Ob(e.geometry, n, i, t === "paint");
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
function Lf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = Fb(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function Vb(e) {
  if (!e || typeof e != "object") return null;
  const t = tt(e.u0, null), n = tt(e.v0, null), i = tt(e.u1, null), a = tt(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const c = (d) => Math.max(0, Math.min(1, d)), f = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return f.u1 <= f.u0 || f.v1 <= f.v0 ? null : f;
}
function Hb(e) {
  const t = e || {};
  return {
    du: tt(t.du, 0) ?? 0,
    dv: tt(t.dv, 0) ?? 0,
    rot_deg: tt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, tt(t.scale, 1) ?? 1)
  };
}
function jb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const c = Vb(e.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, tt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: Hb(e.transform)
  } : null;
}
function zb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = jb(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ua(e) {
  const t = Eb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Db(e.groups),
    paint: Lf(e.paint, "paint"),
    mask: Lf(e.mask, "mask"),
    raster_objects: zb(e.raster_objects)
  };
}
function Rf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function $b(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: q(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: q(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Of(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = $b((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Bb(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Mi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Rf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, f) => Of(c, f)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Rf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, f) => Of(c, f)).filter(Boolean);
  return Mi({
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
function Sa(e = {}) {
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
function Xo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Ub(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || $r((e == null ? void 0 : e.coreOptions) || {});
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
    const w = Bb(p), N = c(w);
    return a === N || !n.syncState(w) ? !1 : (i = w, a = N, !0);
  }
  function d(p = {}, w = {}) {
    if (!i) return null;
    const N = Sa(p), k = Xo(w);
    return n.renderToTarget(t, N, k);
  }
  function h(p, w, N = {}, k = {}) {
    if (!p || !w || !i) return !1;
    const S = Sa(N), O = Xo({
      ...k,
      width: Number((w == null ? void 0 : w.w) || (k == null ? void 0 : k.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (k == null ? void 0 : k.height) || 1)
    });
    return n.renderToContext(p, w, S, O);
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
function Gb(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Kb(e, t = {}) {
  var h, v;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = Sa((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((v = t == null ? void 0 : t.view) == null ? void 0 : v.output) || null, a = Xo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const f = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Gb(c, f, d);
}
function Wb(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = Sa((n == null ? void 0 : n.view) || {}), f = !1, d = 0;
  function h() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), N = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), k = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), S = Xo({ width: w, height: N, dpr: k });
    return i.width = Math.max(1, Math.round(S.width * S.dpr)), i.height = Math.max(1, Math.round(S.height * S.dpr)), i.style.width = `${S.width}px`, i.style.height = `${S.height}px`, S;
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
      c = Sa(w || {}), y();
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
function qb(e = {}) {
  const t = Ub({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(_r(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, _r(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? _r(i.shot) : i == null ? void 0 : i.view;
      return Wb(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: _r(n.shot) } : n;
      return Kb(t, i);
    }
  };
}
function Wi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Yb(e = {}) {
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
function Xb({
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
  var T, I;
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
    historyEntries: Array.from({ length: 8 }, (U, J) => ({ index: J, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return y;
  const p = ((T = t.find((U) => a(e.paintColor, U.color))) == null ? void 0 : T.id) || "", w = !p, N = c(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), S = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), O = e.brushSizes[S] ?? 10, L = h(), R = Array.from({ length: 8 }, (U, J) => e.customPaintHistory[J] || null);
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
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: R.map((U, J) => ({
      index: J,
      color: U ? { cssColor: i(U, 1) } : null
    })),
    sizeValue: O,
    sizeText: String(O),
    sizeFill: `${Math.max(0, Math.min(100, (O - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Zb({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function Jb({
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
function Qb({
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
      const T = p(), I = y(t);
      N.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: T ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !T
      }), N.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: I ? "Show" : "Hide",
        tip: I ? "Show input image" : "Hide input image",
        icon: I ? w.eye : w.eye_dashed
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
        choices: ["1:1", "4:3", "3:2", "16:9"].map((T) => ({ value: T, label: T, active: d === T }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const k = a.corners.map((T) => T.x), S = a.corners.map((T) => T.y), O = Math.min(...k), L = Math.max(...k), R = Math.max(...S);
  return {
    visible: !0,
    left: (O + L) * 0.5,
    top: R + 18,
    items: N,
    anchor: { minX: O, maxX: L, maxY: R }
  };
}
const Be = {
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
}, Ci = {
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
    return (i, a) => (Pe(), Ai(S0(e.tag), Wd({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value, { innerHTML: e.icon }), null, 16, ["class", "innerHTML"]));
  }
}, ey = { class: "pano-floating-right" }, ty = ["data-settled"], ny = ["data-ready", "data-settled"], ry = ["aria-label", "data-tip", "innerHTML"], iy = {
  key: 1,
  class: "pano-camera-preview-label"
}, ay = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Te(et, null, [
      ue("div", ey, [
        (Pe(!0), Te(et, null, Kt(e.buttons, (i) => (Pe(), Ai(Ci, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      lc(ue("div", {
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
          e.previewToggle.visible ? (Pe(), Te("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview",
            innerHTML: e.previewToggle.icon
          }, null, 8, ry)) : on("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Pe(), Te("div", iy, Mt(e.preview.label || "Preview unavailable"), 1)) : on("", !0)
        ], 14, ny)
      ], 8, ty), [
        [pc, e.preview.visible]
      ])
    ], 64));
  }
}, oy = ["aria-label"], sy = { class: "pano-canvas-confirm-title" }, ly = { class: "pano-canvas-confirm-text" }, cy = { class: "pano-canvas-confirm-actions" }, uy = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, fy = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Tl(null), i = /* @__PURE__ */ Tl(null);
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
      var S;
      const p = i.value;
      if (!p) return;
      const w = p.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const k = c()[0] || p;
      (S = k == null ? void 0 : k.focus) == null || S.call(k);
    }
    function h() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function v(p) {
      var L;
      if (p.defaultPrevented) return;
      if (p.key === "Escape") {
        p.preventDefault(), p.stopPropagation(), f("confirm-cancel");
        return;
      }
      if (p.key !== "Tab") return;
      const w = c(), N = i.value;
      if (!w.length) {
        p.preventDefault(), (L = N == null ? void 0 : N.focus) == null || L.call(N);
        return;
      }
      const k = w[0], S = w[w.length - 1], O = document.activeElement;
      if (p.shiftKey) {
        (O === k || O === N || !(N != null && N.contains(O))) && (p.preventDefault(), S.focus());
        return;
      }
      (O === S || !(N != null && N.contains(O))) && (p.preventDefault(), k.focus());
    }
    function y(p) {
      p.target === n.value && f("confirm-cancel");
    }
    return ra(() => t.model.visible, (p, w) => {
      if (p) {
        a = document.activeElement, oc(() => {
          d();
        });
        return;
      }
      w && h();
    }, { immediate: !0 }), uc(() => {
      h();
    }), (p, w) => e.model.visible === !0 ? (Pe(), Te("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Jd(y, ["self"])
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
        ue("div", sy, Mt(e.model.title), 1),
        ue("div", ly, Mt(e.model.text), 1),
        ue("div", cy, [
          w[0] || (w[0] = ue("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ue("button", uy, Mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, oy)
    ], 512)) : on("", !0);
  }
}, dy = ["data-paint-pane"], hy = ["hidden"], py = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], my = ["aria-pressed", "disabled"], gy = ["hidden"], vy = { class: "pano-paint-color-pop-head" }, by = { class: "pano-paint-color-field" }, yy = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, _y = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, xy = { class: "pano-paint-color-field" }, wy = { class: "pano-paint-alpha-wrap" }, Sy = ["value"], Ny = { "data-paint-alpha-value": "" }, My = ["hidden"], ky = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Py = ["data-paint-history-index", "aria-label", "disabled"], Cy = ["data-paint-footer"], Ay = ["data-paint-group"], Iy = ["hidden"], Ty = ["value", "disabled"], Ey = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Dy = ["hidden"], Ly = {
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
    return (i, a) => (Pe(), Te("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Pe(!0), Te(et, null, Kt(e.panes, (c) => {
        var f;
        return Pe(), Te("div", {
          key: c.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Pe(), Te("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Pe(!0), Te(et, null, Kt(e.paintSwatches, (d) => (Pe(), Te("button", {
              key: d.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: Nt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, py))), 128)),
            ue("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Nt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, my),
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
              ue("div", vy, [
                ue("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Nt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ue("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ue("div", by, [
                ue("div", yy, [
                  ue("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Nt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ue("div", _y, [
                  ue("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Nt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ue("label", xy, [
                a[1] || (a[1] = ue("span", null, "Opacity", -1)),
                ue("div", wy, [
                  ue("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Sy),
                  ue("span", Ny, Mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ue("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ue("div", ky, [
                  (Pe(!0), Te(et, null, Kt(e.state.historyEntries || [], (d) => (Pe(), Te("button", {
                    key: d.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: Nt(n(d.color))
                  }, null, 14, Py))), 128))
                ])
              ], 8, My)
            ], 12, gy)
          ], 10, hy)) : on("", !0),
          ue("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            ue("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Pe(!0), Te(et, null, Kt(c.tools, (d) => {
                var h;
                return Pe(), Ai(Ci, {
                  key: `${c.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[c.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Ay),
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
              }, null, 12, Ty),
              ue("span", Ey, Mt(e.state.sizeText || "10"), 1)
            ], 10, Iy),
            ue("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((f = e.state.clearVisible) == null ? void 0 : f[c.key]) ?? !c.clearHidden)
            }, [
              xt(Ci, {
                icon: mi(Be).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Dy)
          ], 8, Cy)
        ], 10, dy);
      }), 128))
    ], 2));
  }
}, Ry = {
  key: 0,
  class: "pano-cutout-menu"
}, Oy = ["innerHTML"], Fy = ["data-aspect"], Vy = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], Hy = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Te("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Nt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Pe(!0), Te(et, null, Kt(e.model.items || [], (i) => (Pe(), Te(et, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Pe(), Te("div", Ry, [
          ue("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: i.icon
          }, null, 8, Oy),
          ue("div", {
            class: gt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Pe(!0), Te(et, null, Kt(i.choices || [], (a) => (Pe(), Te("button", {
              key: a.value,
              class: gt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, Mt(a.label), 11, Fy))), 128))
          ], 2)
        ])) : (Pe(), Te("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0,
          innerHTML: i.icon
        }, null, 8, Vy))
      ], 64))), 128))
    ], 4));
  }
}, jy = {
  class: "pano-side",
  "data-side": ""
}, zy = { class: "pano-side-head" }, $y = ["innerHTML"], By = {
  key: 0,
  class: "pano-side-scroll"
}, Uy = { class: "pano-inspector" }, Gy = { class: "pano-ui-row pano-coverage-row" }, Ky = ["data-selected"], Wy = ["aria-pressed", "disabled"], qy = ["aria-pressed", "disabled"], Yy = {
  key: 0,
  class: "pano-section-title"
}, Xy = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Zy = {
  class: "pano-picker",
  "data-picker": "selection"
}, Jy = ["disabled"], Qy = ["innerHTML"], e_ = ["hidden"], t_ = ["data-selection-id", "innerHTML"], n_ = {
  key: 2,
  class: "pano-state-actions"
}, r_ = ["disabled"], i_ = ["innerHTML"], a_ = ["data-key"], o_ = ["min", "max", "step", "value", "disabled", "data-param-key"], s_ = ["min", "max", "step", "value", "disabled", "data-param-key"], l_ = { class: "pano-visibility-section" }, c_ = { class: "pano-visibility-stack" }, u_ = ["data-visibility-row"], f_ = { class: "pano-visibility-name" }, d_ = ["innerHTML"], h_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], p_ = ["open"], m_ = ["innerHTML"], g_ = { class: "pano-ui-settings-body" }, v_ = { class: "pano-ui-row" }, b_ = ["data-selected"], y_ = ["aria-pressed"], __ = ["aria-pressed"], x_ = { class: "pano-ui-row" }, w_ = ["data-selected"], S_ = ["aria-pressed"], N_ = ["aria-pressed"], M_ = { class: "pano-ui-row" }, k_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, P_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, C_ = { class: "pano-picker-label" }, A_ = ["hidden"], I_ = ["data-quality"], T_ = {
  key: 1,
  class: "pano-side-footer"
}, E_ = ["data-action"], D_ = {
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
    const i = Pt(() => `<span class="pano-side-title-icon" aria-hidden="true">${Be.globe}</span><span>${n(t.nodeTitle)}</span>`), a = Pt(() => {
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
      return Pe(), Te("div", jy, [
        ue("div", zy, [
          ue("div", {
            class: "pano-side-title",
            innerHTML: i.value
          }, null, 8, $y),
          h[0] || (h[0] = ue("div", { class: "pano-side-actions" }, null, -1))
        ]),
        h[13] || (h[13] = ue("div", { class: "pano-divider" }, null, -1)),
        a.value ? (Pe(), Te("div", By, [
          ue("div", Uy, [
            h[12] || (h[12] = ue("div", { class: "pano-section-title" }, [
              ue("span", null, "Scene")
            ], -1)),
            ue("div", Gy, [
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
                }, "360", 8, Wy),
                ue("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, qy)
              ], 8, Ky)
            ]),
            e.model.transformTitle !== !1 ? (Pe(), Te("div", Yy, [...h[2] || (h[2] = [
              ue("span", null, "Transform", -1)
            ])])) : on("", !0),
            e.model.selectionPicker ? (Pe(), Te("div", Xy, [
              ue("label", null, Mt(e.model.selectionPicker.label), 1),
              ue("div", Zy, [
                ue("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ue("span", {
                    class: "pano-picker-label",
                    innerHTML: e.model.selectionPicker.currentLabelHtml
                  }, null, 8, Qy),
                  h[3] || (h[3] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Jy),
                ue("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Pe(!0), Te(et, null, Kt(e.model.selectionPicker.items || [], (k) => (Pe(), Te("button", {
                    key: k.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id,
                    innerHTML: k.labelHtml
                  }, null, 10, t_))), 128))
                ], 8, e_)
              ])
            ])) : on("", !0),
            e.model.copyStateButton ? (Pe(), Te("div", n_, [
              ue("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                ue("span", {
                  innerHTML: mi(Be).copy
                }, null, 8, i_),
                ue("span", null, Mt(e.model.copyStateButton.label), 1)
              ], 8, r_)
            ])) : on("", !0),
            ue("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Pe(!0), Te(et, { key: 0 }, Kt(e.model.notes, (k) => (Pe(), Te("div", {
                key: k,
                class: "pano-param-note"
              }, Mt(k), 1))), 128)) : (Pe(!0), Te(et, { key: 1 }, Kt(e.model.params || [], (k) => (Pe(), Te("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                ue("label", null, Mt(k.label), 1),
                ue("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: f(k, e.model),
                  style: Nt(c(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, o_),
                ue("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: f(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, s_)
              ], 8, a_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Pe(), Te(et, { key: 3 }, [
              h[5] || (h[5] = ue("div", { class: "pano-divider" }, null, -1)),
              ue("div", l_, [
                h[4] || (h[4] = ue("div", { class: "pano-section-title" }, [
                  ue("span", null, "Layers")
                ], -1)),
                ue("div", c_, [
                  (Pe(!0), Te(et, null, Kt(e.model.visibilityRows, (k) => (Pe(), Te("div", {
                    key: k.key,
                    class: gt(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    ue("span", f_, [
                      ue("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: k.icon
                      }, null, 8, d_),
                      ue("span", null, Mt(k.label), 1)
                    ]),
                    ue("button", {
                      class: gt(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1,
                      innerHTML: k.visible === !0 ? mi(Be).eye : mi(Be).eye_dashed
                    }, null, 10, h_)
                  ], 10, u_))), 128))
                ])
              ])
            ], 64)) : on("", !0),
            e.model.uiSettings ? (Pe(), Te("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ue("summary", null, [
                h[6] || (h[6] = ue("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ue("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: mi(Be).chevron
                }, null, 8, m_)
              ]),
              ue("div", g_, [
                ue("div", v_, [
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
                    }, "Normal", 8, y_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, __)
                  ], 8, b_)
                ]),
                ue("div", x_, [
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
                    }, "Normal", 8, S_),
                    ue("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, N_)
                  ], 8, w_)
                ]),
                ue("div", M_, [
                  h[10] || (h[10] = ue("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ue("div", k_, [
                    ue("button", P_, [
                      ue("span", C_, Mt(e.model.uiSettings.qualityLabel), 1),
                      h[9] || (h[9] = ue("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ue("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Pe(!0), Te(et, null, Kt(e.model.uiSettings.qualityOptions || [], (k) => (Pe(), Te("button", {
                        key: k.value,
                        type: "button",
                        class: gt(["pano-picker-item", { active: k.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": k.value
                      }, Mt(k.label), 11, I_))), 128))
                    ], 8, A_)
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
            ], 8, p_)) : on("", !0)
          ])
        ])) : on("", !0),
        (e.model.footerButtons || []).length ? (Pe(), Te("div", T_, [
          (Pe(!0), Te(et, null, Kt(e.model.footerButtons, (k) => (Pe(), Te("button", {
            key: k.action,
            class: gt(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, Mt(k.label), 11, E_))), 128))
        ])) : on("", !0)
      ]);
    };
  }
}, L_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Pe(), Te("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: Nt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, Mt(e.model.text || ""), 7));
  }
}, R_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, O_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Pe(), Te("div", R_, [
      (Pe(!0), Te(et, null, Kt(e.buttons, (i) => lc((Pe(), Ai(Ci, {
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
        [pc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, F_ = ["data-video-ready"], V_ = { class: "pano-video-transport-shell" }, H_ = { class: "pano-video-controls-left" }, j_ = { class: "pano-video-filmstrip" }, z_ = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, $_ = ["src"], B_ = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, U_ = ["max", "value", "disabled"], G_ = { class: "pano-video-controls-right" }, K_ = ["data-has-audio"], W_ = {
  class: "pano-video-volume-pop",
  "aria-hidden": "true"
}, q_ = ["value", "disabled"], Y_ = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = Pt(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? "Pause" : "Play";
    }), i = Pt(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? "Pause video" : "Play video";
    }), a = Pt(() => {
      var k;
      return ((k = t.state) == null ? void 0 : k.playing) === !0 ? Be.pause : Be.play;
    }), c = Pt(() => {
      var k, S;
      return ((k = t.state) == null ? void 0 : k.muted) === !0 || Number(((S = t.state) == null ? void 0 : S.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), f = Pt(() => {
      var k, S, O;
      return ((k = t.state) == null ? void 0 : k.hasAudio) !== !0 ? Be.volume : ((S = t.state) == null ? void 0 : S.muted) === !0 || Number(((O = t.state) == null ? void 0 : O.volume) ?? 1) <= 0 ? Be.volume_muted : Be.volume2;
    }), d = Pt(() => {
      var k;
      return Math.max(0, Math.min(100, Number(((k = t.state) == null ? void 0 : k.progressPct) || 0)));
    }), h = Pt(() => ({ left: `${d.value}%` })), v = Pt(() => {
      var L, R;
      const k = (L = t.state) == null ? void 0 : L.volumePct, S = Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) * 100, O = Number(k ?? S ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, O))}%`
      };
    }), y = Pt(() => {
      var O, L;
      const S = [
        String(((O = t.state) == null ? void 0 : O.currentTimeLabel) || "0:00"),
        String(((L = t.state) == null ? void 0 : L.durationLabel) || "0:00")
      ].reduce((R, T) => Math.max(R, T.length), 4);
      return `${Math.max(4, S)}ch`;
    }), p = Pt(() => ({ "--pano-video-time-ch": y.value })), w = Pt(() => {
      var O, L;
      const k = Array.isArray((O = t.state) == null ? void 0 : O.thumbnails) ? t.state.thumbnails : [];
      if (k.length) return k;
      const S = Math.max(7, Number(((L = t.state) == null ? void 0 : L.thumbnailCount) || 9));
      return Array.from({ length: S }, (R, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), N = Pt(() => {
      var k;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((k = t.state) == null ? void 0 : k.shellMaxWidthPx) || 640))}px`
      };
    });
    return (k, S) => (Pe(), Te("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Nt(N.value)
    }, [
      S[1] || (S[1] = ue("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ue("div", V_, [
        ue("div", H_, [
          xt(Ci, {
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
        ue("div", j_, [
          ue("div", z_, [
            (Pe(!0), Te(et, null, Kt(w.value, (O) => (Pe(), Te("div", {
              key: O.id || O.src || O.label,
              class: gt(["pano-video-thumb", { "is-placeholder": !O.src }])
            }, [
              O.src ? (Pe(), Te("img", {
                key: 0,
                src: O.src,
                alt: "",
                draggable: "false"
              }, null, 8, $_)) : (Pe(), Te("span", B_))
            ], 2))), 128))
          ]),
          ue("div", {
            class: "pano-video-playhead",
            style: Nt(h.value),
            "aria-hidden": "true"
          }, [...S[0] || (S[0] = [
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
          }, null, 8, U_)
        ]),
        ue("div", G_, [
          ue("div", {
            class: "pano-video-time pano-video-time-end",
            style: Nt(p.value)
          }, Mt(e.state.durationLabel || "0:00"), 5),
          ue("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ue("div", W_, [
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
              }, null, 12, q_)
            ]),
            xt(Ci, {
              "extra-class": "pano-video-control",
              icon: f.value,
              label: c.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, K_)
        ])
      ])
    ], 14, F_));
  }
}, X_ = { class: "pano-floating-top" }, Z_ = ["data-selected", "data-view-count"], J_ = ["data-view", "aria-pressed", "aria-label", "disabled"], Q_ = ["innerHTML"], ex = { class: "label" }, tx = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Pe(), Te("div", X_, [
        ue("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Pe(!0), Te(et, null, Kt(e.buttons, (a) => lc((Pe(), Te("button", {
            key: a.key,
            class: gt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ue("span", {
              innerHTML: a.icon
            }, null, 8, Q_),
            ue("span", ex, Mt(a.label), 1)
          ], 10, J_)), [
            [pc, a.visible !== !1]
          ])), 128))
        ], 8, Z_)
      ]);
    };
  }
};
function Oh(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Be.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Be.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Be.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Be.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Be.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Be.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Be.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Be.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Be.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Be.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Be.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Be.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Be.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Be.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Be.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Be.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Be.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Be.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Be.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Be.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Be.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Be.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Be.lasso_tool }
        ]
      }
    ]
  };
}
const nx = ["aria-label"], rx = { class: "pano-stage-wrap" }, ix = {
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
    const d = /* @__PURE__ */ Tl(null), h = Pt(() => n.readOnly === !0), v = Pt(() => n.shellPreset || Oh(n.type)), y = Pt(() => {
      var T;
      const R = Array.isArray((T = v.value) == null ? void 0 : T.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return h.value && R.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Be.fullscreen
      }), R;
    });
    function p() {
      const R = d.value;
      return R ? Array.from(R.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function w() {
      var I;
      const T = p()[0] || d.value;
      (I = T == null ? void 0 : T.focus) == null || I.call(T);
    }
    function N() {
      var R;
      f != null && f.isConnected && ((R = f.focus) == null || R.call(f)), f = null;
    }
    function k(R) {
      var T, I, U, J;
      if (!R.defaultPrevented) {
        if (R.key === "Tab") {
          const oe = p();
          if (!oe.length) {
            R.preventDefault(), (I = (T = d.value) == null ? void 0 : T.focus) == null || I.call(T);
            return;
          }
          const ie = oe[0], xe = oe[oe.length - 1], A = document.activeElement;
          if (R.shiftKey) {
            (A === ie || A === d.value || !((U = d.value) != null && U.contains(A))) && (R.preventDefault(), xe.focus());
            return;
          }
          (A === xe || !((J = d.value) != null && J.contains(A))) && (R.preventDefault(), ie.focus());
          return;
        }
        R.key === "Escape" && i("close");
      }
    }
    function S() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function O() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function L(R) {
      document.removeEventListener("keydown", k), R ? (f || (f = document.activeElement), S(), document.addEventListener("keydown", k), oc(() => {
        w();
      })) : (O(), N());
    }
    return Nd(() => {
      L(n.open);
    }), uc(() => {
      O(), document.removeEventListener("keydown", k), N();
    }), ra(() => n.open, (R) => {
      L(R);
    }), (R, T) => e.open ? (Pe(), Te("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[0] || (T[0] = Jd((I) => i("close"), ["self"]))
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
        ue("div", rx, [
          T[1] || (T[1] = t1('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          h.value ? on("", !0) : (Pe(), Te(et, { key: 0 }, [
            xt(O_, {
              buttons: e.uiState.toolButtons || v.value.toolButtons || []
            }, null, 8, ["buttons"]),
            xt(Ly, {
              "paint-swatches": e.paintSwatches,
              panes: v.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          xt(Y_, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          xt(tx, {
            buttons: e.uiState.viewButtons || v.value.viewButtons || []
          }, null, 8, ["buttons"]),
          xt(ay, {
            buttons: e.uiState.floatingButtons || y.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          xt(Hy, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          xt(L_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          xt(fy, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? on("", !0) : (Pe(), Ai(D_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, nx)
    ])) : on("", !0);
  }
}, Zo = "state_json", Lr = "sticker_image_1", yl = "external_image", _l = "pano_sticker_input_images", Ao = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], It = Math.PI / 180, br = 180 / Math.PI, Jo = 24, ax = 4, ox = 4, co = /* @__PURE__ */ new Map(), Ff = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), sx = 12, Rt = {
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
function Ot(e) {
  return Number(e) === 180 ? 180 : 360;
}
function lx(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function cx(e) {
  return 1 - Math.pow(1 - e, 3);
}
function ux(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = yr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (yr.delete(t), yr.set(t, n), n);
}
function fx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (yr.delete(n), yr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); yr.size > sx; ) {
      const a = yr.keys().next().value;
      if (!a) break;
      yr.delete(a);
    }
}
function dx(e) {
  return e * e * e;
}
function jn(e, t, n) {
  return { x: e, y: t, z: n };
}
function fo(e, t) {
  return jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ho(e, t) {
  return jn(e.x * t, e.y * t, e.z * t);
}
function kn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function po(e, t) {
  return jn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ui(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const n = e * It, i = t * It, a = Math.cos(i);
  return jn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function mo(e) {
  return {
    yaw: Ft(Math.atan2(e.x, e.z) * br),
    pitch: q(Math.asin(q(e.y, -1, 1)) * br, -90, 90)
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
function gr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function xl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), f = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return gr(e, t);
  const h = q((c * i + f * a) / d, 0, 1), v = Number(t.x || 0) + i * h, y = Number(t.y || 0) + a * h, p = Number(e.x || 0) - v, w = Number(e.y || 0) - y;
  return p * p + w * w;
}
function Jn(e, t, n) {
  return e + (t - e) * n;
}
function En(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function hx(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let go = { fillStyle: "", url: "" };
function px(e, t, n) {
  if (go.url && go.fillStyle === String(e || ""))
    return go.url;
  const i = hx(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Jo}" height="${Jo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return go = { fillStyle: String(e || ""), url: i }, i;
}
function Io(e, t, n = 0.015) {
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
function Ut(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function mx(e) {
  return Ao.some((t) => Io(e, t.color));
}
function wl(e, t, n) {
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
function Sl(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), f = a - c;
  let d = 0;
  f > 1e-6 && (a === t ? d = ((n - i) / f + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / f + 2) / 6 : d = ((t - n) / f + 4) / 6);
  const h = a <= 1e-6 ? 0 : f / a;
  return { h: d, s: h, v: a };
}
function gx(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Vf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function vx(e, t) {
  const n = Vf(e, 1), i = Vf(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), f = Math.max(1, Math.round(i * a)), d = (p, w) => w ? d(w, p % w) : p, h = d(c, f) || 1, v = Math.max(1, Math.round(c / h)), y = Math.max(1, Math.round(f / h));
  return `${v}:${y}`;
}
function Qi(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * It, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * It;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function bx(e) {
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
function Fr(e) {
  const t = Qi(e);
  return bx(t) || vx(t, 1);
}
function Fh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fr(t), t;
}
function qi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fr(e);
}
let vo = null;
function yx() {
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
const Vh = "pano_suite.ui_settings.v1", Hh = "pano_suite.node_grid_visibility.v1";
let pi = null, Dn = null, bo = { text: null, parsed: null };
function fa(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function _x() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Vh)) || "").trim();
    if (!t) return pi ? fa(pi) : null;
    const n = JSON.parse(t), i = fa(n);
    return pi = i, i;
  } catch {
    return pi ? fa(pi) : null;
  }
}
function xx(e) {
  var n;
  const t = fa(e);
  pi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Vh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function jh() {
  var e;
  if (Dn && typeof Dn == "object")
    return Dn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Hh)) || "").trim();
    if (!t)
      return Dn = {}, Dn;
    const n = JSON.parse(t);
    return Dn = n && typeof n == "object" ? n : {}, Dn;
  } catch {
    return Dn = {}, Dn;
  }
}
function wx(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = jh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Sx(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = jh();
  i[n] = !!t, Dn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Hh, JSON.stringify(i));
  } catch {
  }
}
function Nx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Mx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function kx(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Hf(e) {
  const { paintCount: t, maskCount: n } = kx(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function fi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function jf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Px(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Fh(t)) : [];
}
function Cx(e, t = 2048, n = "#00ff00", i = 360) {
  const a = _x(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ot(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: ua(null),
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
    if (bo.text === f ? d = bo.parsed : (d = JSON.parse(f), bo = { text: f, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return c;
    const h = {
      ...c,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Nx(d.assets),
      stickers: Mx(d.stickers),
      shots: Px(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ua(d.painting),
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
    return a && (h.ui_settings = fa({ ...h.ui_settings, ...a })), h.output_preset = ql(t, Number(h.output_preset || c.output_preset)), h.bg_color = String(n || h.bg_color || c.bg_color), h.coverage = Ot(i), delete h.editor_history, h;
  } catch {
    return bo = { text: f, parsed: null }, c;
  }
}
function vn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Cc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = vn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, f, d, h, v, y, p, w, N, k;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (h = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || h.call(d), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), (p = (y = e.graph) == null ? void 0 : y.setDirtyCanvas) == null || p.call(y, !0, !0), (k = (N = (w = xr) == null ? void 0 : w.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Ax(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function zf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Ix(e) {
  var N, k, S, O, L;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = vn(e, "coverage"), n = vn(e, "bg_color"), i = vn(e, Zo), a = vn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), f = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && Ax(c) && (zf(f) || f === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let v = "360";
  if (zf(f))
    try {
      const R = JSON.parse(f);
      v = String(Ot(R == null ? void 0 : R.coverage));
    } catch {
      v = "360";
    }
  const y = c, p = f, w = d;
  t.value = v, (N = t.callback) == null || N.call(t, v), n.value = y, (k = n.callback) == null || k.call(n, y), i.value = p, (S = i.callback) == null || S.call(i, p), a && (a.value = w, (O = a.callback) == null || O.call(a, w)), (L = e.setDirtyCanvas) == null || L.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function Nl(e) {
  return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Tx(e, t) {
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
function Ex(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, f;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (f = i.parentEl) != null && f.style && (i.parentEl.style.display = "none")));
  });
}
function Wl(e, t, n) {
  var c, f;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (f = a.parentEl) != null && f.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ql(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function zh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Dx(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function $h(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Lx(e, t, n = null) {
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
  return !i && n != null && (i = Dx(e == null ? void 0 : e.graph, n)), i;
}
function Na(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = bn) == null ? void 0 : a.apiURL) == "function" ? bn.apiURL(i) : i;
}
function Rx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Ox(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function Fx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Bh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Rx(t)) return [t];
  const { filename: n, subfolder: i } = Ox(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Na({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Fx([...a, t]);
}
function Vx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Na({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function da(e) {
  var i;
  const t = (i = xr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function Ur(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ur(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Na({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Ur(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Na(e);
}
function Hx(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (t >= 0 && t < c.length && i.push(c[t]), i.push(...c));
  return i;
}
function Ml(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = Ur(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function jx(e, t, n, i = null) {
  var p;
  const a = da(e == null ? void 0 : e.id), c = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], f = Array.isArray(c) && c.length ? c[0] : null, d = Ur(f);
  if (!d) return null;
  const h = `__ui__${t}`, v = n.get(h);
  if (v && v.__panoSrc === d) return v;
  const y = new Image();
  return y.__panoSrc = d, y.onload = () => {
    typeof i == "function" && i(y);
  }, y.src = d, n.set(h, y), y;
}
function zx(e, t) {
  var R, T;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((I) => String((I == null ? void 0 : I.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[a], f = c == null ? void 0 : c.link;
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const d = zh(e.graph, f), { originId: h, originSlot: v } = $h(d);
  if (h == null) return { src: "", sourceType: "", inputName: n };
  const y = Lx(e, a, h), p = Number(v || 0);
  if (!y) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((R = xr) == null ? void 0 : R.getNodeImageUrls) == "function" ? xr.getNodeImageUrls(y) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const I = [];
    p >= 0 && p < w.length && I.push(w[p]), I.push(...w);
    const U = Ml(I);
    if (U.length) return { src: U[0], srcCandidates: U, sourceType: "appNodeImageUrls", inputName: n };
  }
  const N = da((y == null ? void 0 : y.id) ?? h), k = Hx(N, p), S = Ml(k);
  if (S.length) return { src: S[0], srcCandidates: S, sourceType: "nodeOutputs", inputName: n };
  const O = Array.isArray(y == null ? void 0 : y.imgs) ? y.imgs : [];
  if (O.length) {
    const I = [];
    p >= 0 && p < O.length && I.push(O[p]), I.push(...O);
    const U = Ml(I);
    if (U.length) return { src: U[0], srcCandidates: U, sourceType: "nodeImgs", inputName: n };
  }
  const L = (T = y == null ? void 0 : y.widgets) == null ? void 0 : T.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image");
  if (L) {
    let I = Ur(L.value);
    if (I && !I.includes("/") && !I.includes(":") && (y.comfyClass === "LoadImage" || y.type === "LoadImage") && (I = bn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`)), I) return { src: I, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function $x(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const c = Bh(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = String(t || "image"), d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  const h = new Image(), v = { srcRaw: a, resolvedSrc: "", img: h };
  e.__panoLinkedInputImageCache.set(f, v);
  let y = -1;
  const p = () => {
    var N, k;
    if (y += 1, y >= c.length) {
      try {
        (k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || k.call(N, f);
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
function Bx(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((k) => String(k || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), f = a.join(`
`), d = e.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === f && d.img) return d.img;
  const h = [], v = /* @__PURE__ */ new Set();
  if (a.forEach((k) => {
    Bh(k).forEach((S) => {
      const O = String(S || "").trim();
      !O || v.has(O) || (v.add(O), h.push(O));
    });
  }), !h.length) return null;
  const y = new Image(), p = { srcRaw: f, resolvedSrc: "", img: y };
  e.__panoLinkedInputImageCache.set(c, p);
  let w = -1;
  const N = () => {
    var S, O;
    if (w += 1, w >= h.length) {
      try {
        (O = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || O.call(S, c);
      } catch {
      }
      return;
    }
    const k = h[w];
    p.resolvedSrc = k, y.src = k;
  };
  return y.onload = () => {
    var k;
    i == null || i(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
  }, y.onerror = () => {
    var k, S;
    if (w + 1 < h.length) {
      N();
      return;
    }
    try {
      (S = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || S.call(k, c);
    } catch {
    }
  }, N(), y;
}
function Uh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = zx(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function $f(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = Uh(e, a), f = String(i || a.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return Bx(e, f, d, n);
  const h = String((c == null ? void 0 : c.src) || "").trim();
  return h ? $x(e, f, h, n) : null;
}
async function ha(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, f = Tx(e, t);
  await yx();
  const d = vn(e, "output_preset"), h = vn(e, "coverage"), v = vn(e, "bg_color"), y = vn(e, Zo), p = Cx(
    String((y == null ? void 0 : y.value) || ""),
    ql(d == null ? void 0 : d.value, 2048),
    String((v == null ? void 0 : v.value) || "#00ff00"),
    Ot(h == null ? void 0 : h.value)
  );
  e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = 0, t === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(p.shots) ? p.shots : [], o = String(((s = p == null ? void 0 : p.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, N = w ? nu(w, !1) : { width: 220, height: 132 }, k = Oh(t), S = /* @__PURE__ */ as({
    viewButtons: (k.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (k.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(k.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Rt.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Rt.fullscreen,
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
      customColorCss: En({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: En({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
  }), O = document.createElement("div");
  document.body.appendChild(O);
  const L = F1(ix, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: f,
    shellPreset: k,
    paintSwatches: Ao.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: En(r.color, 1)
    })),
    uiState: S,
    onClose: () => {
      li();
    }
  });
  try {
    L.mount(O);
  } catch (r) {
    try {
      L.unmount();
    } catch {
    }
    throw O.remove(), r;
  }
  const R = O.querySelector(".pano-modal-overlay"), T = O.querySelector(".pano-modal"), I = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), U = T == null ? void 0 : T.querySelector("[data-stage-background]"), J = T == null ? void 0 : T.querySelector(".pano-stage-wrap");
  if (!R || !T || !I || !U || !J)
    throw L.unmount(), O.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const oe = document.createElement("div");
  oe.setAttribute("aria-hidden", "true"), oe.style.position = "absolute", oe.style.left = "0", oe.style.top = "0", oe.style.pointerEvents = "none", oe.style.zIndex = "12", oe.style.display = "none", oe.style.willChange = "transform,width,height,background,border-radius", J == null || J.appendChild(oe);
  const ie = document.createElement("div");
  ie.className = "pano-paint-size-preview", ie.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", ie.appendChild(xe), J == null || J.appendChild(ie);
  const A = I.getContext("2d"), be = $r(), he = t === "cutout" ? qb({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, fe = T.querySelector("[data-side]"), H = T.querySelector("[data-video-element]"), se = T.querySelector(".pano-floating-right"), $ = T.querySelector("[data-selection-menu]"), ne = T.querySelector("[data-tooltip]"), G = T.querySelector("[data-camera-preview-host]"), le = T.querySelector("[data-paint-color-row]"), we = T.querySelector("[data-paint-color-pop]"), Ee = T.querySelector("[data-paint-color-sv]"), De = T.querySelector("[data-paint-color-sv-cursor]"), Ue = T.querySelector("[data-paint-hue-strip]"), Je = T.querySelector("[data-paint-hue-handle]");
  let Qe = 0, it = 0;
  J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", U.style.opacity = "0", a && (fe == null || fe.remove(), T.classList.add("pano-modal-readonly"));
  const Vt = () => {
    if (!u.customPaintSessionStart) return;
    if (Io(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (mx(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const r = [
      fn(u.customPaintColor),
      ...u.customPaintHistory.filter((o) => !Io(o, u.customPaintColor))
    ];
    u.customPaintHistory = r.slice(0, 8), u.customPaintSessionStart = null;
  }, Ct = (r = !1) => {
    !we || we.hidden || (r ? Vt() : u.customPaintSessionStart = null, we.hidden = !0, S.paintDock.colorPopOpen = !1);
  }, pn = () => {
    we && (we.hidden && (u.customPaintSessionStart = fn(u.customPaintColor)), we.hidden = !1, S.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (r) => {
    Xa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Ct(!0), t === "cutout" && u.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, ze(), ge())));
  });
  const sn = t === "stickers" ? p.active.selected_sticker_id : p.active.selected_shot_id, Un = JSON.stringify(jf(p)), u = {
    mode: "pano",
    selectedId: sn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ot(p.coverage),
    historyController: Tb(80, { entries: [Un], index: 0 }),
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
    showGrid: wx(e == null ? void 0 : e.id, !0),
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
    paintEngine: Vl(),
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
  }, F = he && G ? he.mount(G, { shot: null }) : null;
  t === "stickers" && (u.selectedId = null, p.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Y = document.createElement("canvas");
  Y.__panoFrameIdx = 0;
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
  }, te = (r) => {
    const o = String(r || "default");
    I.style.cursor !== o && (I.style.cursor = o);
  }, Z = {
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
  }, _e = 4, Se = 9, ke = [];
  let Ie = 0;
  const Re = () => {
    var x, M;
    const r = (x = J == null ? void 0 : J.getBoundingClientRect) == null ? void 0 : x.call(J), o = (M = se == null ? void 0 : se.getBoundingClientRect) == null ? void 0 : M.call(se), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, _ = l > 0 ? l + 14 + 12 : 72, b = Math.max(280, Math.floor(s - _ * 2));
    S.videoTransport.shellMaxWidthPx = b;
  }, at = () => {
    Ie || (Ie = window.requestAnimationFrame(() => {
      Ie = 0, Re();
    }));
  }, ft = () => {
    const r = Math.max(1, Number(S.videoTransport.fps || 24));
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
    return !!S.videoTransport.hasAudio;
  }, qe = typeof ResizeObserver < "u" ? new ResizeObserver(() => at()) : null;
  qe == null || qe.observe(J), se && (qe == null || qe.observe(se)), ke.push(() => {
    var r;
    Ie && (window.cancelAnimationFrame(Ie), Ie = 0), (r = qe == null ? void 0 : qe.disconnect) == null || r.call(qe);
  }), at();
  const ln = () => {
    j.thumbnailJobId += 1, j.thumbnailSrc = "", S.videoTransport.thumbnails = [], S.videoTransport.thumbnailCount = Se;
  }, vt = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      ln();
      return;
    }
    const m = ux(l);
    if (m) {
      j.thumbnailSrc = l, S.videoTransport.thumbnails = m.thumbnails, S.videoTransport.thumbnailCount = m.thumbnailCount;
      return;
    }
    if (j.thumbnailSrc === l && Array.isArray(S.videoTransport.thumbnails) && S.videoTransport.thumbnails.length)
      return;
    const g = ++j.thumbnailJobId;
    j.thumbnailSrc = l, S.videoTransport.thumbnails = [], S.videoTransport.thumbnailCount = Se;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((re) => {
      let pe = !1;
      const ae = (ve) => {
        pe || (pe = !0, re(ve));
      };
      _.addEventListener("loadedmetadata", () => ae(!0), { once: !0 }), _.addEventListener("canplay", () => ae(!0), { once: !0 }), _.addEventListener("error", () => ae(!1), { once: !0 }), _.src = l, _.load();
    }) || j.thumbnailJobId !== g) return;
    const x = Math.max(1, Number(_.videoWidth || 0)), M = Math.max(1, Number(_.videoHeight || 0));
    if (x < 1 || M < 1) return;
    const C = Math.max(0, Number(_.duration || o || 0)), P = document.createElement("canvas"), D = 46, V = Math.max(72, Math.round(x / M * D));
    P.width = V, P.height = D;
    const ee = P.getContext("2d");
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
    for (let re = 0; re < Se; re += 1) {
      if (j.thumbnailJobId !== g) return;
      const pe = re / (Se - 1), ae = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), C * pe)) : 0;
      if (await W(ae), j.thumbnailJobId !== g) return;
      ee.clearRect(0, 0, V, D), ee.drawImage(_, 0, 0, V, D), z.push({
        id: `thumb-${re}`,
        src: P.toDataURL("image/jpeg", 0.72),
        time: ae,
        label: ks(ae)
      });
    }
    j.thumbnailJobId === g && (S.videoTransport.thumbnails = z, S.videoTransport.thumbnailCount = z.length || Se, fx(l, {
      thumbnails: z,
      thumbnailCount: z.length || Se,
      duration: C,
      fps: s
    }));
  }, Ht = (r) => {
    const o = Math.max(1, Number(S.videoTransport.fps || 24));
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
  }, Ca = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (Y.width !== s || Y.height !== l) && (Y.width = s, Y.height = l);
    const m = Y.getContext("2d");
    return m ? (m.clearRect(0, 0, s, l), m.drawImage(r, 0, 0, s, l), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, o != null && (j.presentedTime = Number(o || 0)), !0) : !1;
  }, Ii = (r) => {
    const o = Ht(r), s = j.frameCache.get(o) || null;
    return s ? (j.currentFrameNumber = o, Ca(s, r)) : !1;
  };
  if (ke.push(() => {
    ln();
  }), H instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof H.requestVideoFrameCallback != "function" || H.__panoFramePumpActive) return;
      H.__panoFramePumpActive = !0;
      const b = (x, M) => {
        H.__panoFramePumpActive = !1;
        const C = Number((M == null ? void 0 : M.mediaTime) ?? H.currentTime ?? 0), P = Ht(C), D = ft();
        j.mode === "scrub" ? Math.abs(C - Number(j.editorTime || 0)) <= D && (cn(P), Ii(j.editorTime), B.backgroundDirty = !0, B.dirty = !0, Kn({
          ready: !0,
          playing: !1,
          visible: ur(),
          currentTime: j.editorTime,
          duration: S.videoTransport.duration,
          frameCount: S.videoTransport.frameCount,
          fps: S.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (j.editorTime = C, j.presentedTime = C, j.requestedTime = null, j.currentFrameNumber = P, cn(P), j.frameCounter += 1, H.dataset.panoFrameIdx = String(j.frameCounter), B.backgroundDirty = !0, B.dirty = !0, Kn({
          ready: !0,
          playing: !H.paused && !H.ended,
          visible: ur(),
          currentTime: C,
          duration: S.videoTransport.duration,
          frameCount: S.videoTransport.frameCount,
          fps: S.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), B.running && (!H.paused || j.mode === "scrub") && r();
      };
      try {
        H.requestVideoFrameCallback(b);
      } catch {
        H.__panoFramePumpActive = !1;
      }
    }, o = () => {
      j.pendingPlaybackResume && (j.pendingPlaybackResume = !1, j.mode = "playback", j.requestedTime = null, Xr() && (B.backgroundDirty = !0, B.dirty = !0), H.play().catch(() => {
      }));
    }, s = () => {
      j.editorTime = Number(H.currentTime || 0), Number(H.readyState || 0) >= 2 && Xr() && (B.backgroundDirty = !0, B.dirty = !0), Zr(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, l = () => {
      j.mode = "playback", j.seeking = !1, j.requestedTime = null, Zr(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      j.mode === "playback" && Xr() && (B.backgroundDirty = !0, B.dirty = !0), Zr(), ge({ cause: "frame_view", localOnly: !0 });
    }, g = () => {
      Kn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: S.videoTransport.duration,
        frameCount: S.videoTransport.frameCount,
        fps: S.videoTransport.fps,
        mode: j.mode,
        hasAudio: S.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? S.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const b = j.seeking || j.pendingPlaybackResume || j.mode === "scrub";
      if (j.seeking = !1, !b) {
        j.requestedTime = null, r();
        return;
      }
      const x = Number(j.requestedTime ?? j.editorTime ?? 0), M = Number(H.currentTime || 0);
      if (Math.abs(M - x) > ft()) {
        Ps(x);
        return;
      }
      j.mode === "scrub" && (Xr(), B.backgroundDirty = !0, B.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), j.requestedTime = null, o(), r();
    };
    H.addEventListener("loadedmetadata", s), H.addEventListener("loadeddata", s), H.addEventListener("canplay", s), H.addEventListener("play", l), H.addEventListener("pause", m), H.addEventListener("volumechange", g), H.addEventListener("seeked", _), ke.push(() => H.removeEventListener("loadedmetadata", s)), ke.push(() => H.removeEventListener("loadeddata", s)), ke.push(() => H.removeEventListener("canplay", s)), ke.push(() => H.removeEventListener("play", l)), ke.push(() => H.removeEventListener("pause", m)), ke.push(() => H.removeEventListener("volumechange", g)), ke.push(() => H.removeEventListener("seeked", _));
  }
  function Gh() {
    S.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === u.primaryTool : s ? r.key === u.paintTool : l ? r.key === u.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function gs(r) {
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
  function Pr(r) {
    const o = !!r;
    me.active !== o && (me.active = o, J.classList.toggle("drop-active", o));
  }
  function vs(r, o, s = u.viewFov, l = 140, m = 620) {
    const g = xv(u.viewYaw, r), _ = o - u.viewPitch, b = s - u.viewFov, x = Math.hypot(g, _) + Math.abs(b) * 0.6, M = Math.round(q(l + x * 2.2, l, m));
    u.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: u.viewYaw,
      startPitch: u.viewPitch,
      startFov: u.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: g
    }, u.viewInertia.active = !1, u.viewInertia.vx = 0, u.viewInertia.vy = 0, ge();
  }
  Sp();
  function Gn() {
    return t === "stickers" ? p.stickers : p.shots;
  }
  function jt() {
    const r = p.painting || (p.painting = ua(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Kh(r = "paint") {
    var m, g;
    const o = Array.isArray((g = (m = p.painting) == null ? void 0 : m[r]) == null ? void 0 : g.strokes) ? p.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function Wh() {
    return Kh("paint");
  }
  function Ti(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Ei(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function At(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Di(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function bs() {
    var o;
    let r = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of jt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = p.painting) == null ? void 0 : o.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Ac(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = jt();
    let m = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return m ? o != null && (m.z_index = Math.max(0, Number(o || 0))) : (m = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? bs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(m)), m;
  }
  function qh(r) {
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
  function Yh() {
    const r = new Set(Wh()), s = jt().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: bs(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, m) => Number((l == null ? void 0 : l.z_index) || 0) - Number((m == null ? void 0 : m.z_index) || 0)), p.painting.groups = s, s;
  }
  function Xh(r, o, s) {
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
      _ += g + mn(re, g), b += Number((W == null ? void 0 : W.v) || 0);
    });
    const x = (_ / m.length % 1 + 1) % 1;
    let M = 1 / 0, C = -1 / 0, P = 1 / 0, D = -1 / 0;
    m.forEach((W) => {
      const re = l((W == null ? void 0 : W.u) || 0), pe = mn(re, x);
      M = Math.min(M, pe), C = Math.max(C, pe);
      const ae = Number((W == null ? void 0 : W.v) || 0);
      P = Math.min(P, ae), D = Math.max(D, ae);
    });
    const V = s.reduce((W, re) => {
      const pe = hr(String((re == null ? void 0 : re.toolKind) || "pen")), ae = nn[pe] || nn[Xn], ve = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ae == null ? void 0 : ae.sizeScale) ?? 1));
      return Math.max(W, ve);
    }, 0), ee = Math.max(35e-4, V / 2048);
    return {
      centerUv: { u: ((x + (M + C) * 0.5) % 1 + 1) % 1, v: q((P + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - M) * 0.5 + ee,
      halfH: (D - P) * 0.5 + ee,
      uvPad: ee
    };
  }
  function lr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const m = jt().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!m) return null;
    const g = s || xn(l, o);
    return m.frame = Xh(l, o, g), m.frame;
  }
  function Kr() {
    var l;
    const r = (Array.isArray(p.stickers) ? p.stickers : []).map((m) => ({
      type: "sticker",
      id: String((m == null ? void 0 : m.id) || ""),
      z_index: Number((m == null ? void 0 : m.z_index) || 0),
      item: m
    })), o = Yh().map((m) => ({
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
  function ys(r = !0) {
    var s, l, m, g, _, b;
    const o = Kr().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((l = (s = u.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), M = String(((g = (m = u.interaction) == null ? void 0 : m.stroke) == null ? void 0 : g.layerKind) || "").trim(), C = String(((b = (_ = u.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      x && M === "paint" && C !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function _s(r = !0) {
    var b, x, M, C, P, D;
    const o = Kr();
    if (!r) return o;
    const s = String(((x = (b = u.interaction) == null ? void 0 : b.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((C = (M = u.interaction) == null ? void 0 : M.stroke) == null ? void 0 : C.layerKind) || "").trim(), m = String(((D = (P = u.interaction) == null ? void 0 : P.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!s || l !== "paint" || m === "eraser" || o.some((V) => V.type === "strokeGroup" && String(V.actionGroupId || "") === s))
      return o;
    const g = lt();
    let _ = o.reduce((V, ee) => Math.max(V, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    return g && kt(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((V, ee) => Number((V == null ? void 0 : V.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0));
  }
  function Zh() {
    return jt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => qr(Ti("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Jh() {
    var r;
    return (Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => Wr(Ei((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Ic(r = u.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Qh() {
    var o, s, l, m;
    let r = null;
    try {
      const g = ys(), _ = ((m = (l = (s = (o = u.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, g)) == null ? void 0 : l.displayPaint) == null ? void 0 : m.canvas) || null;
      _ && (r = {
        source: _,
        revision: `${ri()}:${Aa()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Aa() {
    var m, g, _, b, x, M, C;
    const r = u.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Ic(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const P = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null, D = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), V = ((_ = P == null ? void 0 : P.rawPoints) == null ? void 0 : _.length) ?? ((b = P == null ? void 0 : P.points) == null ? void 0 : b.length) ?? 0, ee = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${D || "paint"}_${o}_live${ee}_${V}_${u.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((M = r == null ? void 0 : r.item) == null ? void 0 : M.rasterObjectId) || ((C = r == null ? void 0 : r.item) == null ? void 0 : C.id) || "");
    return `_${o}_${s || l || "active"}_${u.livePaintInteractionRevision}`;
  }
  function xs() {
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
  function Wr(r) {
    const o = At(r);
    if (!o) return null;
    const s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ei(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function zt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = At(r.rasterObjectId || r.id || "");
    return !!o && !!Wr(Ei(o));
  }
  function qr(r) {
    const o = Di(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = jt().find((m) => String((m == null ? void 0 : m.id) || (m == null ? void 0 : m.actionGroupId) || "") === s || String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Ti("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function kt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!qr(Ti(s, o));
  }
  function xn(r, o = null) {
    const s = Di(r, o), l = String(s.actionGroupId || "").trim();
    return l ? oi(s.layerKind).filter((m) => String((m == null ? void 0 : m.actionGroupId) || "").trim() === l) : [];
  }
  function ep(r, o = "paint") {
    var g, _, b;
    const s = String(r || "").trim(), m = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${u.mode}:${Vi()}`;
    if (u.mode === "frame") {
      const x = Ge(), M = String((x == null ? void 0 : x.id) || ""), C = x ? Bt(x) : null;
      return `${m}:frame:${M}:${Math.round(Number((C == null ? void 0 : C.x) || 0))}:${Math.round(Number((C == null ? void 0 : C.y) || 0))}:${Math.round(Number((C == null ? void 0 : C.w) || 0))}:${Math.round(Number((C == null ? void 0 : C.h) || 0))}:${Math.round(Number(((g = u.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = u.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = u.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Ia(r, o, s) {
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
  function ws(r, o = null, s = null) {
    var M;
    const l = Di(r, o), m = Array.isArray(s) ? s : xn(l.actionGroupId, l.layerKind), g = [];
    if (m.forEach((C) => {
      const P = (C == null ? void 0 : C.geometry) || null, D = (P == null ? void 0 : P.geometryKind) === "lasso_fill" ? P == null ? void 0 : P.points : (P == null ? void 0 : P.processedPoints) || (P == null ? void 0 : P.rawPoints) || (P == null ? void 0 : P.points) || [];
      Array.isArray(D) && g.push(...D);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((M = g[0]) == null ? void 0 : M.u) || 0);
    let b = 0, x = 0;
    return g.forEach((C) => {
      b += _ + mn(Number((C == null ? void 0 : C.u) || 0), _), x += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (b / g.length % 1 + 1) % 1,
      v: q(x / g.length, 0, 1)
    };
  }
  function Ta(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = mn(Number(r.u || 0), m), b = Number(r.v || 0) - g, x = Number(l || 0) * It, M = Math.cos(x), C = Math.sin(x), P = Math.max(0.02, Number(s || 1)), D = (_ * M - b * C) * P, V = (_ * C + b * M) * P;
    return {
      ...r,
      u: ((m + D) % 1 + 1) % 1,
      v: q(g + V, 0, 1)
    };
  }
  function Tc(r, o, s, l = null, m = null, g = null) {
    const _ = Di(r, m), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = oi(_.layerKind), M = Array.isArray(l) ? new Map(l.map((P) => [String((P == null ? void 0 : P.id) || ""), P])) : null;
    let C = !1;
    if (x.forEach((P) => {
      if (String((P == null ? void 0 : P.actionGroupId) || "").trim() !== b) return;
      const D = (M == null ? void 0 : M.get(String((P == null ? void 0 : P.id) || ""))) || P, V = P == null ? void 0 : P.geometry, ee = D == null ? void 0 : D.geometry;
      !V || !ee || (Array.isArray(ee.points) && (V.points = ee.points.map((z) => Ia(z, o, s)), C = !0), Array.isArray(ee.rawPoints) && (V.rawPoints = ee.rawPoints.map((z) => Ia(z, o, s)), C = !0), Array.isArray(ee.processedPoints) && (V.processedPoints = ee.processedPoints.map((z) => Ia(z, o, s)), C = !0));
    }), C && g) {
      const P = jt().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === b);
      P && (P.frame = null);
    }
    return C;
  }
  function Ec(r, o = 1, s = 0, l = null, m = null, g = null) {
    const _ = Di(r, m), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const x = oi(_.layerKind), M = Array.isArray(l) ? l : xn(b, _.layerKind), C = Array.isArray(M) ? new Map(M.map((V) => [String((V == null ? void 0 : V.id) || ""), V])) : null, P = (g == null ? void 0 : g.centerUv) ?? ws(b, _.layerKind, M);
    let D = !1;
    if (x.forEach((V) => {
      if (String((V == null ? void 0 : V.actionGroupId) || "").trim() !== b) return;
      const ee = (C == null ? void 0 : C.get(String((V == null ? void 0 : V.id) || ""))) || V, z = V == null ? void 0 : V.geometry, W = ee == null ? void 0 : ee.geometry;
      !z || !W || (Array.isArray(W.points) && (z.points = W.points.map((re) => Ta(re, P, o, s)), D = !0), Array.isArray(W.rawPoints) && (z.rawPoints = W.rawPoints.map((re) => Ta(re, P, o, s)), D = !0), Array.isArray(W.processedPoints) && (z.processedPoints = W.processedPoints.map((re) => Ta(re, P, o, s)), D = !0));
    }), D && g) {
      const V = jt().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === b);
      V && (V.frame = null);
    }
    return D;
  }
  function Dc(r, o, s, l = null) {
    const m = At(r);
    if (!m) return !1;
    const g = en().find((C) => String((C == null ? void 0 : C.id) || "").trim() === m);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, b = (_ == null ? void 0 : _.transform) || {}, x = Number(b.du || 0) + Number(o || 0), M = q(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = x, g.transform.dv = M, !0;
  }
  function tp(r, o = 1, s = null) {
    const l = At(r);
    if (!l) return !1;
    const m = en().find((M) => String((M == null ? void 0 : M.id) || "").trim() === l);
    if (!m) return !1;
    const g = s && typeof s == "object" ? s : m, _ = (g == null ? void 0 : g.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), x = q(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.scale = x, !0;
  }
  function lt() {
    const r = String(u.selectedId || "");
    if (!r) return null;
    const o = qr(r);
    if (o) return o;
    const s = Wr(r);
    return s || (t === "cutout" ? xs().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Gn().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function wn() {
    const r = Array.isArray(u.selectedIds) && u.selectedIds.length ? u.selectedIds : u.selectedId ? [u.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const m = String(l || "").trim();
      if (!m || s.has(m)) return;
      s.add(m);
      const g = m === String(u.selectedId || "") ? lt() : qr(m) || Wr(m) || (t === "cutout" ? xs().find((_) => String((_ == null ? void 0 : _.id) || "") === m) : Gn().find((_) => String((_ == null ? void 0 : _.id) || "") === m));
      g && o.push(g);
    }), o;
  }
  function Ss(r = null) {
    const o = Array.isArray(r) ? r : wn();
    if (!o || o.length < 2) return null;
    const s = o.map((M) => Et(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((M) => M.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), m = s.flatMap((M) => M.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), g = Math.min(...l), _ = Math.max(...l), b = Math.min(...m), x = Math.max(...m);
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
  function np(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(u.selectedIds) && u.selectedIds.includes(o);
  }
  function Ea() {
    const r = lt();
    return r ? kt(r) || zt(r) ? "stroke" : un(r) ? "frame" : "image" : null;
  }
  function cr(r) {
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = jt().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (zt(r)) {
      const o = At(r.rasterObjectId || r.id || ""), s = en().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Ns(r = null) {
    const o = Array.isArray(r) ? r : wn();
    return o.length > 0 && o.every((s) => cr(s));
  }
  function rp(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (kt(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), m = jt().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    if (zt(r)) {
      const l = At(r.rasterObjectId || r.id || ""), m = en().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !m || m.locked === s ? !1 : (m.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function ip() {
    if (i) return;
    const r = wn();
    if (!r.length) return;
    const o = !Ns(r);
    let s = !1;
    r.forEach((l) => {
      rp(l, o) && (s = !0);
    }), s && (ut(), yt(), ze(), ge());
  }
  function Cr(r) {
    u.selectedId = (r == null ? void 0 : r.id) || null, u.selectedIds = r != null && r.id ? [r.id] : [], r && bt(r) ? p.active.selected_sticker_id = r.id || null : p.active.selected_sticker_id = null, r && un(r) ? p.active.selected_shot_id = r.id || null : r ? un(r) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function ap(r, o = null) {
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
  function Lc() {
    const r = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const m = Tt(s) ? String(s.id || Lr) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: m
      };
    });
    return [...r, ...o];
  }
  function op(r) {
    return r === "frame" ? Rt.camera : r === "stroke" ? Rt.paintbrush_vertical_tool : Rt.image;
  }
  function Rc(r) {
    return !r || !r.item ? Nl(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${op(r.kind)}</span><span>${Nl(String(r.label || ""))}</span>`;
  }
  function Oc() {
    return bs();
  }
  function Tt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Lr || String(r.source_kind || "") === yl;
  }
  function Yr(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function sp(r) {
    return Tt(r) && Yr(r) ? oh : 1;
  }
  function lp() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function cp() {
    return String(lp() || "") === "lasso_fill";
  }
  function up() {
    if (i) return;
    const r = lt();
    !r || !Tt(r) || (r.visible = Yr(r), Dt(), ut(), yt(), He(), ze(), ge());
  }
  function fp() {
    if (i || t !== "stickers") return;
    const r = lt();
    if (!r || !Tt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Cs(_l, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Ar(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), ut(), yt(), He(), ze(), ge();
  }
  function dp(r) {
    if (!r || !Tt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Cs(_l, () => {
      ge();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Ar(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function hp() {
    const r = lt();
    if (!r || !Tt(r)) return !1;
    const o = dp(r);
    if (!o) return !1;
    const s = (l, m) => Math.abs(Number(l || 0) - Number(m || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Ms(r) {
    var s;
    const o = da(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function Fc(r) {
    const o = da(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function Vc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return jo(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function pp() {
    const { metaKey: r } = Vc(), o = Fc(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function Da(r) {
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
  function ks(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function Kn(r = {}) {
    const o = Number(r.currentTime ?? j.editorTime ?? 0), s = Number(r.duration ?? S.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!S.videoTransport.ready, m = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!S.videoTransport.playing, g = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!S.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(H instanceof HTMLVideoElement ? H.muted : S.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : H instanceof HTMLVideoElement ? H.volume : S.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Ce(H);
    Object.assign(S.videoTransport, {
      ready: l,
      playing: m,
      visible: g,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: ks(o),
      durationLabel: ks(s),
      frameCount: Math.max(0, Number(r.frameCount ?? S.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? S.videoTransport.fps ?? 24)),
      mode: String(r.mode || j.mode || "playback"),
      hasAudio: x,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : S.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? S.videoTransport.thumbnailCount ?? Se))
    });
  }
  function ur() {
    return !!(H instanceof HTMLVideoElement && H.getAttribute("src") && u.primaryTool !== "paint" && u.primaryTool !== "mask");
  }
  function mp() {
    Kn({
      visible: ur()
    });
  }
  function Xr() {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return !1;
    const r = Number(H.videoWidth || 0), o = Number(H.videoHeight || 0);
    (Y.width !== r || Y.height !== o) && (Y.width = r, Y.height = o);
    const s = Y.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(H, 0, 0, r, o), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, j.presentedTime = Number(j.editorTime || H.currentTime || 0), !0) : !1;
  }
  function gp() {
    return j.mode === "scrub" && Number(Y.width || 0) > 0 && Number(Y.height || 0) > 0 && Number(Y.__panoFrameIdx || 0) > 0 ? Y : H instanceof HTMLVideoElement && Number(H.videoWidth || 0) > 0 && Number(H.videoHeight || 0) > 0 && Number(H.readyState || 0) >= 2 ? H : null;
  }
  function Ps(r) {
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
  function Zr() {
    if (!(H instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = Vc(), o = Ms(r)[0] || null, s = o && typeof o == "object" ? Na(o) : Ur(o), l = pp(), m = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), g = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), _ = Number((l == null ? void 0 : l.duration) || (m > 0 ? m / g : 0)), b = !!(l != null && l.has_audio) || Ce(H);
    return s && H.dataset.panoSrc !== s ? (H.pause(), H.dataset.panoSrc = s, H.dataset.panoFrameIdx = "0", H.loop = !0, H.muted = !!S.videoTransport.muted, H.volume = Math.max(0, Math.min(1, Number(S.videoTransport.volume ?? 1))), H.src = s, H.load(), vt(s, _, g)) : !s && H.getAttribute("src") && (H.pause(), H.removeAttribute("src"), H.load(), ln()), s && (!Array.isArray(S.videoTransport.thumbnails) || S.videoTransport.thumbnails.length === 0) && vt(s, _, g), s || ln(), Kn({
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
      volume: Number(H.volume ?? S.videoTransport.volume ?? 1),
      thumbnailCount: S.videoTransport.thumbnailCount
    }), s || null;
  }
  function vp(r, o = null) {
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
  function Cs(r, o = null) {
    const s = Ms(r), l = Array.isArray(s) && s.length ? s[0] : null, m = Ur(l);
    if (!m) return null;
    const g = `__ui__${r}`, _ = Q.get(g);
    if (_ && _.__panoSrc === m) return _;
    const b = new Image();
    return b.__panoSrc = m, b.onload = () => {
      typeof o == "function" ? o(b) : ge();
    }, b.src = m, Q.set(g, b), b;
  }
  function Hc(r = null) {
    const o = $f(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Cs(_l, r);
  }
  function jc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Ar(r, o, s) {
    const l = Math.max(1, Number(o || 1)), m = Math.max(1, Number(s || 1)), g = q(Number(r || 30), 0.1, 179) * It, _ = 2 * Math.atan(Math.tan(g * 0.5) * (m / l));
    return q(_ * br, 0.1, 179);
  }
  function bp(r) {
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
      const _ = Number(g.yaw_deg), b = Number(g.pitch_deg), x = Number(g.roll_deg), M = Number(g.hFOV_deg);
      if (![_, b, x, M].every((V) => Number.isFinite(V))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const P = {
        yaw_deg: C,
        pitch_deg: q(b, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: q(M, 0.1, 179)
      }, D = Number(s.source_aspect);
      return Number.isFinite(D) && D > 0 && (P.source_aspect = D), P;
    } catch {
      return null;
    }
  }
  function zc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = Qi(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function yp(r) {
    var b;
    if (!r || typeof r != "object") return zc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), m = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(m) && Number.isFinite(g)) {
      const x = q(m, 0.1, 179) * It, M = q(g, 0.1, 179) * It, C = Math.tan(M * 0.5);
      if (Math.abs(C) > 1e-6) {
        const P = Math.tan(x * 0.5) / C;
        Number.isFinite(P) && P > 0 && (_ = P);
      }
    }
    if (r != null && r.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[r.asset_id])) {
      const x = p.assets[r.asset_id], M = Number((x == null ? void 0 : x.w) || 0), C = Number((x == null ? void 0 : x.h) || 0);
      M > 0 && C > 0 && (_ = M / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: q(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: q(Number.isFinite(m) ? m : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function _p(r) {
    var l, m, g, _, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = zh(e.graph, s), { originId: M, originSlot: C } = $h(x), P = da(M), D = [
        P == null ? void 0 : P.output,
        P == null ? void 0 : P.result,
        (l = P == null ? void 0 : P.data) == null ? void 0 : l.output,
        (m = P == null ? void 0 : P.data) == null ? void 0 : m.result,
        (g = P == null ? void 0 : P.ui) == null ? void 0 : g.output,
        (_ = P == null ? void 0 : P.ui) == null ? void 0 : _.result
      ];
      for (const V of D) {
        if (!Array.isArray(V)) continue;
        const ee = Number(C || 0), z = V[ee];
        if (typeof z == "string" && z.trim()) return z;
      }
    }
    return String(((b = vn(e, r)) == null ? void 0 : b.value) || "");
  }
  function xp(r, o, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : bp(o);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Ar(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const m = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(u.viewYaw || 0),
      pitch_deg: Number(u.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ar(30, m, g),
      rot_deg: 0
    };
  }
  function $c(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((V) => String((V == null ? void 0 : V.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = Hc(() => {
      var V;
      (V = e.__panoExternalStickerSync) == null || V.call(e, "image-loaded");
    }), m = vp(Fc("pano_sticker_input_pose"), null), g = _p("sticker_state"), _ = jc(m && typeof m == "object" ? JSON.stringify(m) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], x = b.findIndex((V) => String((V == null ? void 0 : V.id) || "") === Lr);
    if (s == null) {
      x >= 0 && (b.splice(x, 1), u.selectedId === Lr && (u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null), yt(), He(), ze(), ge());
      return;
    }
    const M = b.reduce((V, ee) => Math.max(V, Number((ee == null ? void 0 : ee.z_index) || 0)), -1);
    let C = x >= 0 ? b[x] : null;
    const P = !C || Number(C.source_link_id ?? -1) !== Number(s) || String(C.source_state_hash || "") !== _;
    C || (C = {
      id: Lr,
      source_kind: yl
    }, b.push(C)), C.id = Lr, C.source_kind = yl, C.source_link_id = Number(s), C.source_state_hash = _, C.visible = C.visible !== !1;
    let D = !1;
    if (P) {
      const V = xp(m, g, l);
      Object.assign(C, V, {
        initial_pose: { ...V },
        visible: !0,
        z_index: M + 1
      }), D = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const V = Ar(
        Number(C.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(C.vFOV_deg || 0) - V) > 1e-6 && (C.vFOV_deg = V, D = !0);
    }
    D && (yt(), He(), ze()), ge();
  }
  function Jr(r = {}) {
    const s = r.preservePanelValues !== !1 ? lt() : null;
    s && (u.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: qi(s)
    }), u.selectedId = null, u.selectedIds = [], u.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function wp() {
    if (t !== "cutout") return;
    const r = Ge();
    r && Cr(r);
  }
  function As() {
    if (t !== "cutout") return;
    const r = Ge();
    Wi(S.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Rt.camera : Rt.plus_circle
    });
  }
  function La() {
    const r = !!Ge();
    u.mode === "frame" && !r && (u.mode = "pano"), u.outputPreviewRect = null, S.viewButtons.forEach((o) => {
      const s = o.key === u.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), S.outputPreviewToggle.visible = t === "cutout" && !!Ge(), t === "cutout" && S.cameraPreview && (S.cameraPreview.visible = !0, S.cameraPreview.expanded = !!u.outputPreviewExpanded, S.cameraPreview.settled = S.cameraPreview.settled === !0 && B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame), mu() ? pt(u.pointerPos) : te(u.mode === "pano" ? "grab" : "default");
  }
  function Sp() {
    const o = Yc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Is() {
    const r = Tn(u.viewYaw, u.viewPitch);
    let o = jn(0, 1, 0);
    Math.abs(kn(r, o)) > 0.999 && (o = jn(0, 0, 1));
    const s = ui(po(o, r)), l = ui(po(r, s));
    return { right: s, up: l, fwd: r };
  }
  function Li(r) {
    const { right: o, up: s, fwd: l } = Is(), m = kn(r, o), g = kn(r, s), _ = kn(r, l);
    if (_ <= 1e-5) return null;
    const b = I.width, x = I.height, M = u.viewFov * It, C = 2 * Math.atan(Math.tan(M / 2) * (x / b)), P = b / 2 / Math.tan(M / 2), D = x / 2 / Math.tan(C / 2);
    return {
      x: b / 2 + m / _ * P,
      y: x / 2 - g / _ * D,
      z: _
    };
  }
  function Ts(r, o) {
    const { right: s, up: l, fwd: m } = Is(), g = I.width, _ = I.height, b = u.viewFov * It, x = 2 * Math.atan(Math.tan(b / 2) * (_ / g)), M = (r - g / 2) / (g / 2) * Math.tan(b / 2), C = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), P = fo(fo(ho(s, M), ho(l, C)), m);
    return ui(P);
  }
  function fr() {
    const r = I.width, o = I.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const b = o, x = b * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: b };
    }
    const m = r, g = m / s;
    return { x: 0, y: (o - g) * 0.5, w: m, h: g };
  }
  function Bc(r) {
    var _;
    if (r && typeof r == "object" && (Tt(r) || r.external === !0))
      return Hc(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Q.get(o);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[o], m = Vx(l);
    if (!m) return null;
    const g = new Image();
    return g.onload = () => ge(), g.src = m, Q.set(o, g), g;
  }
  function Uc(r, o = null) {
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
  function Np(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = E.get(o);
    if (s) return s.ready ? s : null;
    const l = Uc(r, () => {
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
    const x = b.getImageData(0, 0, m, g).data, M = { canvas: _, width: m, height: g, alpha: x, ready: !0 };
    return E.set(o, M), M;
  }
  function Mp(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const m = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), _ = mn(Number(r.u || 0), m), b = Number(r.v || 0) - g, x = Math.max(0.02, Number(s || 1)), M = Number(l || 0) * It, C = Math.cos(M), P = Math.sin(M), D = _ / x, V = b / x, ee = D * C + V * P, z = -D * P + V * C;
    return {
      ...r,
      u: ((m + ee) % 1 + 1) % 1,
      v: g + z
    };
  }
  function kp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, m = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, _ = Mp(
      g,
      m,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(x > 1e-6)) return null;
    const M = mn(Number(_.u || 0), Number(s.u0 || 0)) / b, C = (Number(_.v || 0) - Number(s.v0 || 0)) / x;
    if (M < 0 || M > 1 || C < 0 || C > 1) return 0;
    const P = Np(r);
    if (!P) return null;
    const D = q(Math.floor(M * P.width), 0, P.width - 1), V = q(Math.floor(C * P.height), 0, P.height - 1);
    return Number(P.alpha[(V * P.width + D) * 4 + 3] || 0);
  }
  function Gc(r, o, s, l = null) {
    if (!(o != null && o.visible) || !Zn(s, o.corners)) return !1;
    const m = l || Nn(s, performance.now()), g = kp(r, m);
    return g === null ? !0 : g > 8;
  }
  function Pp() {
    var l, m, g, _, b, x, M, C;
    const r = ((m = (l = u.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : m.call(l, ys(!1))) || null, o = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((b = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((C = (M = r == null ? void 0 : r.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : C.height) || 1024));
    return { width: o, height: s };
  }
  function Cp() {
    var V, ee, z;
    const r = u.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = qn(), l = `${Aa()}:${s.width}:${s.height}`;
    if (((V = u._activePaintEraserPreviewInfo) == null ? void 0 : V.cacheKey) === l)
      return u._activePaintEraserPreviewInfo.value || null;
    const m = Ut(o), g = (m == null ? void 0 : m.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const W = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = js(W, m.targetSpace, !0);
    }
    const _ = Fi(s.width, s.height, { readback: !0 });
    if (!au(_, m, { w: s.width, h: s.height })) return null;
    const b = ((z = (ee = _.ctx) == null ? void 0 : ee.getImageData(0, 0, s.width, s.height)) == null ? void 0 : z.data) || null;
    if (!b) return null;
    let x = s.width, M = s.height, C = -1, P = -1;
    for (let W = 0; W < s.height; W += 1)
      for (let re = 0; re < s.width; re += 1)
        b[(W * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), W < M && (M = W), re > C && (C = re), W > P && (P = W));
    if (C < x || P < M)
      return u._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const D = {
      surface: _,
      bounds: { minX: x, minY: M, maxX: C, maxY: P },
      key: `${l}:${x}:${M}:${C}:${P}`
    };
    return u._activePaintEraserPreviewInfo = { cacheKey: l, value: D }, u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function Ri() {
    u._activePaintEraserPreviewInfo = null, u._liveEraserPreviewCanvasCache = null;
  }
  function Ap(r, o, s) {
    var l, m;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const g = r.item.bbox, _ = ((m = r.item) == null ? void 0 : m.transform) || {}, b = Number(g.u0 || 0) + Number(_.du || 0), x = Number(g.u1 || 0) + Number(_.du || 0), M = Number(g.v0 || 0) + Number(_.dv || 0), C = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(q(M, 0, 1) * s),
        maxY: Math.ceil(q(C, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = xn(r.actionGroupId, "paint"), _ = lr(r.actionGroupId, "paint", g);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, M = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(q(M, 0, 1) * s),
        maxY: Math.ceil(q(C, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    return null;
  }
  function Ip(r, o, s) {
    if (!r || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], m = l(r), g = l(o);
    return m.some((_) => g.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Tp(r, o, s) {
    var ve, Ae, Oe, Ne, X, ce, ye;
    if (!r || !o || !((ve = s == null ? void 0 : s.surface) != null && ve.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), m = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || m < 1) return r;
    const g = Ap(o, l, m);
    if (g && !Ip(g, s.bounds, l)) return r;
    const _ = String(((Ae = o.item) == null ? void 0 : Ae.id) || o.id || ""), b = ((Oe = o.item) == null ? void 0 : Oe.transform) || {}, x = `${s.key}:${_}:${l}:${m}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, M = u._liveEraserPreviewCanvasCache instanceof Map ? u._liveEraserPreviewCanvasCache : u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(x)) return M.get(x);
    const C = q(Math.floor(Number(((Ne = s.bounds) == null ? void 0 : Ne.minX) || 0)), 0, Math.max(0, l - 1)), P = q(Math.floor(Number(((X = s.bounds) == null ? void 0 : X.minY) || 0)), 0, Math.max(0, m - 1)), D = q(Math.ceil(Number(((ce = s.bounds) == null ? void 0 : ce.maxX) || 0)), C, Math.max(0, l - 1)), V = q(Math.ceil(Number(((ye = s.bounds) == null ? void 0 : ye.maxY) || 0)), P, Math.max(0, m - 1)), ee = Math.max(1, D - C + 1), z = Math.max(1, V - P + 1), W = Fi(l, m, { readback: !0 });
    W.ctx.clearRect(0, 0, l, m), W.ctx.drawImage(r, 0, 0);
    const re = W.ctx.getImageData(C, P, ee, z);
    W.ctx.save(), W.ctx.globalCompositeOperation = "destination-out", W.ctx.drawImage(s.surface.canvas, 0, 0), W.ctx.restore();
    const pe = W.ctx.getImageData(C, P, ee, z);
    let ae = !1;
    for (let Me = 0; Me < ee * z; Me += 1) {
      const je = re.data[Me * 4 + 3], Fe = pe.data[Me * 4 + 3];
      if (je > Fe) {
        ae = !0;
        break;
      }
    }
    return ae ? (M.size > 64 && M.clear(), M.set(x, W.canvas), W.canvas) : (M.set(x, r), r);
  }
  function Kc(r, o = null) {
    const s = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const m = Uc(r, o);
    if (!m || !(m.complete || m.width || m.naturalWidth)) return null;
    const { width: g, height: _ } = Pp(), b = (r == null ? void 0 : r.transform) || {}, x = [
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
      Vi()
    ].join(":"), M = K.get(x);
    if (M) return M;
    K.size > 64 && K.clear();
    const C = document.createElement("canvas");
    C.width = g, C.height = _;
    const P = C.getContext("2d");
    if (!P) return null;
    const D = Number(l.u0 || 0) * g, V = Number(l.v0 || 0) * _, ee = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), z = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), W = D + ee * 0.5 + Number(b.du || 0) * g, re = V + z * 0.5 + Number(b.dv || 0) * _, pe = Number(b.rot_deg || 0) * It, ae = Math.max(0.01, Number(b.scale || 1));
    for (const ve of [-g, 0, g])
      P.save(), P.translate(W + ve, re), P.rotate(pe), P.scale(ae, ae), P.drawImage(m, -ee * 0.5, -z * 0.5, ee, z), P.restore();
    return K.set(x, C), C;
  }
  function Ep() {
    return hs(p, {
      selectedId: u.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Dp(r) {
    return sh(
      p,
      (o, s, l) => Bc(l || o),
      { scene: r }
    );
  }
  function Wc(r, o, s, l, m = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const g = ei(l);
    if (Qc(o, s))
      return $p(
        o,
        s,
        g && u.showPanorama ? l : null,
        `${m}_bg_gl`
      );
    const b = Fa(), x = Va(b), M = u.showObjects ? Ha() : Oi([]), P = Zi({
      stateRevision: [
        m,
        g ? Da(l) : "no_bg",
        Array.isArray(x) ? x.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        M.length ? M.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: g && u.showPanorama ? l : null,
      backgroundRevision: g ? `${m}:${Da(l)}` : "",
      coverageDeg: Ot(p.coverage),
      scene: b,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: M,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), D = be;
    if (!D.syncState(P)) return !1;
    const ee = D.renderToTarget(`${m}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return ee ? (r.drawImage(ee, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Es(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await bn.fetchApi("/upload/image", { method: "POST", body: s });
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
  async function Ds(r, o) {
    const s = await new Promise((b) => r.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const m = await bn.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Ls = null, Ra = !1;
  function Lp() {
    const r = Hf(p.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, s = ri();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function qc() {
    const r = String(e.id ?? "0"), o = co.get(r);
    if (Ra && o) return o;
    const s = (async () => {
      var g, _, b, x, M, C, P, D, V, ee, z, W;
      const l = ri(), m = Hf(p.painting);
      if (m.totalPaintCount <= 0 && m.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ls = l, gn());
        return;
      }
      if (Ls !== l && !Ra) {
        Ra = !0;
        try {
          Ba();
          const re = ys(!1), pe = ((_ = (g = u.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, re)) || null, ae = ((b = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : b.canvas) || null, ve = ((x = pe == null ? void 0 : pe.committedMask) == null ? void 0 : x.canvas) || null, Ae = Math.max(1, Number(((M = pe == null ? void 0 : pe.descriptor) == null ? void 0 : M.width) || (ae == null ? void 0 : ae.width) || (ve == null ? void 0 : ve.width) || 2048)), Oe = Math.max(1, Number(((C = pe == null ? void 0 : pe.descriptor) == null ? void 0 : C.height) || (ae == null ? void 0 : ae.height) || (ve == null ? void 0 : ve.height) || 1024));
          (!ae && m.totalPaintCount > 0 || !ve && m.totalMaskCount > 0) && ((!u._paintLayerSyncBlankSurface || Number(((P = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : P.width) || 0) !== Ae || Number(((D = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== Oe) && (u._paintLayerSyncBlankSurface = Fi(Ae, Oe)), u._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ae, Oe));
          const Ne = ae || m.totalPaintCount > 0 && ((V = u._paintLayerSyncBlankSurface) == null ? void 0 : V.canvas) || null, X = ve || m.totalMaskCount > 0 && ((ee = u._paintLayerSyncBlankSurface) == null ? void 0 : ee.canvas) || null;
          if (!Ne && !X) return;
          let ce = null, ye = null;
          const Me = [];
          if (m.totalPaintCount > 0) {
            ce = await Ds(Ne, `pano_paint_${r}.png`);
            for (const je of re) {
              const Fe = String(je || "").trim();
              if (!Fe) continue;
              const $e = ((W = (z = u.paintEngine) == null ? void 0 : z.getGroupDisplayCanvas) == null ? void 0 : W.call(z, Fe)) || null;
              if (!$e) continue;
              const We = Fe.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ke = await Ds($e, `pano_group_${r}_${We}.png`);
              Ke && Me.push({
                id: Fe,
                actionGroupId: Fe,
                image: Ke
              });
            }
          }
          m.totalMaskCount > 0 && (ye = await Ds(X, `pano_mask_${r}.png`)), l === ri() && (p.painting_layer = {
            paint: ce,
            mask: ye,
            groups: Me,
            revision: l
          }, Ls = l, gn());
        } catch (re) {
          throw re;
        } finally {
          Ra = !1;
        }
      }
    })();
    return co.set(r, s), s.finally(() => {
      co.get(r) === s && co.delete(r);
    }), s;
  }
  function Qr() {
    const r = gp();
    if (r) return r;
    const o = jx(e, "pano_input_images", Q, () => ge());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], l = s.includes("erp_image"), m = s.includes("bg_erp");
    let g = [];
    return i && (l || m) ? g = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : g = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], $f(e, g, () => ge(), `background:${g.join("|")}`);
  }
  function ei(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Rp() {
    if (!B.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (u.showPanorama) {
      const s = Qr();
      r = !!s && !ei(s);
    }
    if (u.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const m = Bc(l);
        if (m && !ei(m)) {
          o = !0;
          break;
        }
      }
    }
    return r && o ? "mixed" : r ? "background" : o ? "stickers" : "";
  }
  function ti() {
    const r = new Set(
      (p.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(p.assets || {}).forEach((o) => {
      r.has(o) || (delete p.assets[o], Q.delete(o));
    });
  }
  function Rs(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(q(r.y, -1, 1))
    };
  }
  function Os(r, o = null) {
    const { lon: s, lat: l } = Rs(r), m = fr();
    let g = m.x + (s / (2 * Math.PI) + 0.5) * m.w;
    const _ = m.y + (0.5 - l / Math.PI) * m.h;
    if (o !== null) {
      for (; g - o > m.w / 2; ) g -= m.w;
      for (; g - o < -m.w / 2; ) g += m.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Oa(r) {
    const o = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = jn(0, 1, 0);
    Math.abs(kn(o, s)) > 0.999 && (s = jn(0, 0, 1));
    const l = ui(po(s, o)), m = ui(po(o, l)), g = Math.tan(q(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * It), _ = Math.tan(q(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * It), b = Number(r.rot_deg || r.roll_deg || 0) * It, x = Math.cos(b), M = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: m,
      tanX: g,
      tanY: _,
      cr: x,
      sr: M
    };
  }
  function dr(r, o, s) {
    const l = o * r.cr - s * r.sr, m = o * r.sr + s * r.cr;
    return ui(fo(fo(r.centerDir, ho(r.right, l)), ho(r.up, m)));
  }
  function Yc(r) {
    const o = Oa(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: m }) => dr(o, l * o.tanX, m * o.tanY));
  }
  function Xc(r, o, s) {
    const l = Oa(r), m = (o * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return dr(l, m, g);
  }
  function Zc(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: q((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Op(r) {
    var x, M, C, P;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), m = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.rot_deg) || 0), g = Number(((C = r == null ? void 0 : r.transform) == null ? void 0 : C.du) || 0), _ = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((D) => Ia(Ta(D, s, l, m), g, _));
  }
  function Fp(r) {
    const o = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, m = `${o}:${u.mode}:${Vi()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (u.mode === "frame") {
      const g = Ge(), _ = g ? Bt(g) : null;
      return `${m}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${m}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Vp(r) {
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
      qi(r)
    ].join(":");
    if (u.mode === "frame") {
      const m = Ge(), g = m ? Bt(m) : null;
      return `${l}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Hp() {
    var o;
    const r = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? u.hqFrames && u.hqFrames > 0 ? [28, 20] : u.interaction ? [12, 9] : [20, 14] : r === "high" ? u.hqFrames && u.hqFrames > 0 ? [48, 36] : u.interaction ? [20, 14] : [36, 26] : u.hqFrames && u.hqFrames > 0 ? [40, 30] : u.interaction ? [16, 12] : [28, 20];
  }
  function Jc() {
    var r;
    return !!U && !!((r = be == null ? void 0 : be.isSupported) != null && r.call(be));
  }
  function Qc(r, o) {
    return !Jc() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Fa() {
    return u.showObjects ? Ep() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Va(r) {
    return !u.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Dp(r);
  }
  function eu() {
    var r, o;
    return ((o = (r = u.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function jp() {
    return eu() ? `${zs()}:mask_display` : "";
  }
  function Oi(r) {
    if (!u.showMask) return r;
    const o = eu();
    if (!o) return r;
    const s = jp(), l = r.reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.zIndex) || 0)), -1), m = (Array.isArray(p.stickers) ? p.stickers : []).reduce((_, b) => Math.max(_, Number((b == null ? void 0 : b.z_index) || 0)), -1), g = Math.max(l, m);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: g + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Ha() {
    var l, m;
    const r = _s(!0), o = Cp(), s = [];
    for (const g of r) {
      if ((g == null ? void 0 : g.type) === "strokeGroup") {
        const _ = String(g.actionGroupId || g.id || "");
        if (!_) continue;
        const b = ((m = (l = u.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : m.call(l, _)) || null;
        if (!b) continue;
        s.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${zs()}:${_}`,
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((g == null ? void 0 : g.type) === "rasterObject") {
        const _ = g.item || null, b = At((_ == null ? void 0 : _.id) || g.id || "");
        if (!b) continue;
        const x = Kc(_, () => ge());
        if (!x) continue;
        const M = Tp(x, g, o), C = (_ == null ? void 0 : _.transform) || {};
        s.push({
          id: `raster:${b}`,
          source: M,
          revision: [
            ri(),
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
    return Oi(s);
  }
  function zp(r, o = "modal_bg_gl") {
    const s = Fa(), l = Va(s), m = ei(r), g = m ? Da(r) : "none", _ = u.showObjects ? Ha() : Oi([]), b = null, x = [
      o,
      g,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((M) => String((M == null ? void 0 : M.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((M) => `${String((M == null ? void 0 : M.assetId) || "")}:${String((M == null ? void 0 : M.revision) || "")}`).join(",") : "none",
      _.length ? _.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${String((M == null ? void 0 : M.revision) || "")}:${Number((M == null ? void 0 : M.zIndex) || 0)}`).join(",") : "paint:none",
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Zi({
        stateRevision: x,
        backgroundSource: m ? r : null,
        backgroundRevision: m ? `${o}:${g}` : "",
        coverageDeg: Ot(p.coverage),
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
  function Fs() {
    if (!U) return;
    const r = U.getContext("webgl2");
    if (r)
      r.viewport(0, 0, U.width, U.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = U.getContext("2d");
      o && (o.clearRect(0, 0, U.width, U.height), o.fillStyle = "#070707", o.fillRect(0, 0, U.width, U.height));
    }
    B.backgroundWasVisible = !1, B.backgroundDirty = !1;
  }
  function $p(r, o, s, l = "modal_bg_gl") {
    var M;
    if (!Qc(r, o)) return !1;
    if (!B.backgroundDirty && B.backgroundWasVisible) return !0;
    const { descriptor: m, hasContent: g } = zp(s, l);
    if (!g || !be.syncState(m))
      return Fs(), !1;
    const b = be.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (M = U == null ? void 0 : U.getContext) == null ? void 0 : M.call(U, "2d");
    return !b || !x ? (Fs(), !1) : (x.clearRect(0, 0, U.width, U.height), x.drawImage(b, 0, 0, U.width, U.height), B.backgroundWasVisible = !0, B.backgroundDirty = !1, !0);
  }
  function Bp(r = !1) {
    const o = I.width, s = I.height, l = fr();
    if (A.globalAlpha = 1, A.lineWidth = 1, r || (A.fillStyle = "#070707", A.fillRect(0, 0, o, s), A.fillStyle = "#070707", A.fillRect(l.x, l.y, l.w, l.h)), Ba(), Wc(
      A,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Qr(),
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
  function tu(r, o, s = 1) {
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
  function Up(r = !1) {
    const o = I.width, s = I.height;
    if (r || (Jc() ? A.clearRect(0, 0, o, s) : (A.fillStyle = "#070707", A.fillRect(0, 0, o, s))), Ba(), Wc(
      A,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: u.viewYaw,
        pitchDeg: u.viewPitch,
        fovDeg: u.viewFov,
        coverageDeg: Ot(p.coverage)
      },
      Qr(),
      "modal_pano"
    ), u.showGrid && !u.fullscreen) {
      for (let m = -180; m <= 180; m += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push(Tn(m, _));
        tu(g, "#3f3f46", m % 90 === 0 ? 1.3 : 1);
      }
      for (let m = -75; m <= 75; m += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push(Tn(_, m));
        tu(g, m === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", m === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", l.forEach((m) => {
        const g = Li(m.dir);
        g && A.fillText(m.name, g.x, g.y + 24);
      });
    }
  }
  function Gp(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const m = o || Ge();
      if (!m) return [];
      const g = s || Bt(m);
      return Pm(r, m, g);
    }
    return ou(r, l);
  }
  function ja(r, o = null, s = null, l = null, m = null) {
    if (!r) return null;
    if (u.mode === "unwrap") {
      const _ = ou([r], m);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const g = ni(r);
    return g ? Wn(g, o, s, l) : null;
  }
  function Kp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = xn(s, r.layerKind), m = lr(s, r.layerKind, l), g = (m == null ? void 0 : m.centerUv) || ws(s, r.layerKind, l), _ = u.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, b = [], x = u.mode === "frame" ? Ge() : null, M = x ? Bt(x) : null;
    for (const ae of l) {
      const ve = (ae == null ? void 0 : ae.geometry) || null, Ae = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], Oe = Gp(Ae, x, M, _).filter((ce) => Number.isFinite(ce == null ? void 0 : ce.x) && Number.isFinite(ce == null ? void 0 : ce.y));
      if (!Oe.length) continue;
      const Ne = hr(String((ae == null ? void 0 : ae.toolKind) || "pen")), X = nn[Ne] || nn[Xn];
      b.push({
        points: Oe,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ae == null ? void 0 : ae.size) || 10) * Math.max(0.1, Number((X == null ? void 0 : X.sizeScale) ?? 1)) + 10),
        layerKind: String((ae == null ? void 0 : ae.layerKind) || r.layerKind || "paint")
      });
    }
    const C = ja(g, null, x, M, _);
    if (!C) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ae), ae;
    }
    const D = qh(m).map((ae) => ja(ae, C.x, x, M, _)).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y)).map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) }));
    if (D.length < 4) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ae), ae;
    }
    const V = (ae, ve) => ({
      x: (Number((ae == null ? void 0 : ae.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ae == null ? void 0 : ae.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ae,
      b: ve
    }), ee = V(D[0], D[1]), z = V(D[1], D[2]), W = V(D[2], D[3]), re = V(D[3], D[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: D,
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
  function Wp(r, o) {
    const s = u.mode === "frame" ? Ge() : null, l = s ? Bt(s) : null, m = Zc(r), g = u.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = ja(m, null, s, l, g), x = Op(r).map((D) => ja(D, (_ == null ? void 0 : _.x) ?? null, s, l, g)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(x) || x.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return u._strokeGeomCache.set(o, D), D;
    }
    const M = x.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), P = {
      kind: "rasterObject",
      center: {
        x: M.reduce((D, V) => D + Number(V.x || 0), 0) / M.length,
        y: M.reduce((D, V) => D + Number(V.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return u._strokeGeomCache.set(o, P), P;
  }
  function Wn(r, o = null, s = null, l = null) {
    if (u.mode === "frame") {
      const pe = s || Ge(), ae = l || Bt(pe);
      if (!pe || !ae) return null;
      const ve = pe ? Hi(pe, r) : null;
      return ve ? {
        x: Number(ae.x || 0) + Number(ve.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(ve.y || 0) * Number(ae.h || 0),
        z: 1
      } : null;
    }
    if (u.mode === "unwrap") return Os(r, o);
    const { right: m, up: g, fwd: _ } = Is(), b = kn(r, m), x = kn(r, g), M = kn(r, _), C = I.width, P = I.height, D = u.viewFov * It, V = 2 * Math.atan(Math.tan(D / 2) * (P / Math.max(C, 1))), ee = C / 2 / Math.tan(D / 2), z = P / 2 / Math.tan(V / 2), W = Math.max(M, 1e-4), re = Math.max(C, P) * 2;
    return {
      x: q(C / 2 + b / W * ee, -re, C + re),
      y: q(P / 2 - x / W * z, -re, P + re),
      z: W
    };
  }
  function qp(r) {
    const o = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = u.mode === "frame" ? Ge() : null, l = s ? Bt(s) : null, m = Wn(o, null, s, l);
    if (!m) return { visible: !1 };
    const g = Oa(r), b = Yc(r).map((Ae) => Wn(Ae, m.x, s, l)).filter((Ae) => Number.isFinite(Ae == null ? void 0 : Ae.x) && Number.isFinite(Ae == null ? void 0 : Ae.y));
    if (b.length < 4) return { visible: !1 };
    const x = dr(g, 0, g.tanY), M = dr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), C = Wn(x, m.x, s, l);
    if (!C) return { visible: !1 };
    const P = Wn(M, (C == null ? void 0 : C.x) ?? m.x, s, l), D = ((P == null ? void 0 : P.x) ?? C.x) - C.x, V = ((P == null ? void 0 : P.y) ?? C.y) - C.y, ee = Math.hypot(D, V) || 1, z = {
      x: C.x + D / ee * 30,
      y: C.y + V / ee * 30
    }, W = Wn(dr(g, 0, g.tanY), m.x, s, l), re = Wn(dr(g, g.tanX, 0), m.x, s, l), pe = Wn(dr(g, 0, -g.tanY), m.x, s, l), ae = Wn(dr(g, -g.tanX, 0), m.x, s, l);
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
  function Et(r) {
    if (kt(r)) {
      const m = String(r.actionGroupId || r.id || "").trim(), g = ep(m, r.layerKind), _ = u._strokeGeomCache.get(g);
      return _ || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Kp(r, g));
    }
    if (zt(r)) {
      const m = Fp(r), g = u._strokeGeomCache.get(m);
      return g || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Wp(r, m));
    }
    const o = Vp(r), s = u._strokeGeomCache.get(o);
    if (s) return s;
    u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear();
    const l = qp(r);
    return u._strokeGeomCache.set(o, l), l;
  }
  function za(r, o, s, l = null) {
    const m = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let b = 0, x = 0;
      o === 0 ? (b = _, x = 0) : o === 1 ? (b = 1, x = _) : o === 2 ? (b = 1 - _, x = 1) : (b = 0, x = 1 - _);
      const M = Xc(r, b, x), C = u.mode === "unwrap" ? Os(M, l) : Li(M);
      C && m.push(C);
    }
    return m;
  }
  function Yp(r, o) {
    const s = Tn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = u.mode === "unwrap" ? Os(s) : null, m = l ? l.x : null, g = u.mode === "pano" ? 28 : 20, _ = [
      za(r, 0, g, m),
      za(r, 1, g, m),
      za(r, 2, g, m),
      za(r, 3, g, m)
    ];
    A.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", A.lineWidth = o ? 2 : 1, A.beginPath();
    let b = !1;
    for (const x of _)
      for (const M of x)
        b ? A.lineTo(M.x, M.y) : (A.moveTo(M.x, M.y), b = !0);
    A.closePath(), A.stroke();
  }
  function Xp() {
    const r = [...Array.isArray(p.shots) ? p.shots : []], o = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function Vs() {
    const r = [...Array.isArray(p.shots) ? p.shots : []];
    return [...[...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function $a(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Zp(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const m = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", _ = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, x = o ? 24 : 20;
    $a(A, l), A.fillStyle = g, A.fill(), A.strokeStyle = m, A.lineWidth = _, A.stroke(), A.save(), A.strokeStyle = m, A.lineWidth = b, A.lineCap = "round";
    for (let D = 0; D < 4; D += 1) {
      const V = l[D], ee = l[(D + 3) % 4], z = l[(D + 1) % 4], W = V.x - ee.x, re = V.y - ee.y, pe = Math.hypot(W, re) || 1, ae = z.x - V.x, ve = z.y - V.y, Ae = Math.hypot(ae, ve) || 1;
      A.beginPath(), A.moveTo(V.x, V.y), A.lineTo(V.x - W / pe * x, V.y - re / pe * x), A.moveTo(V.x, V.y), A.lineTo(V.x + ae / Ae * x, V.y + ve / Ae * x), A.stroke();
    }
    const M = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], C = {
      x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
      y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
    }, P = o ? 12 : 9;
    M.forEach((D) => {
      const V = C.x - D.x, ee = C.y - D.y, z = Math.hypot(V, ee) || 1;
      A.beginPath(), A.moveTo(D.x, D.y), A.lineTo(D.x + V / z * P, D.y + ee / z * P), A.stroke();
    }), A.restore();
  }
  function Jp(r, o, s, l) {
    if (un(r)) {
      Zp(o, s, l);
      return;
    }
    if (bt(r)) {
      const m = A.globalAlpha;
      A.globalAlpha = sp(r), u.mode === "frame" ? (A.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = s ? 2 : 1, $a(A, o.corners), A.stroke()) : Yp(r, s), A.globalAlpha = m;
      return;
    }
    A.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $a(A, o.corners), A.fill(), A.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = s ? 2.8 : 1.9, $a(A, o.corners), A.stroke();
  }
  function Qp(r, o, s) {
    A.fillStyle = s, o.corners.forEach((l) => {
      A.beginPath(), A.arc(l.x, l.y, 6.5, 0, Math.PI * 2), A.fill();
    }), un(r) && (A.strokeStyle = s, A.lineCap = "round", A.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var C, P, D, V;
      const m = (((C = l.b) == null ? void 0 : C.x) ?? l.x) - (((P = l.a) == null ? void 0 : P.x) ?? l.x), g = (((D = l.b) == null ? void 0 : D.y) ?? l.y) - (((V = l.a) == null ? void 0 : V.y) ?? l.y), _ = Math.hypot(m, g) || 1, b = m / _, x = g / _, M = 10;
      A.beginPath(), A.moveTo(l.x - b * M, l.y - x * M), A.lineTo(l.x + b * M, l.y + x * M), A.stroke();
    }), A.lineCap = "butt"), kt(r) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), A.lineTo(o.rotateHandle.x, o.rotateHandle.y), A.stroke(), A.fillStyle = s, A.beginPath(), A.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function em() {
    var b;
    const [r, o] = Hp(), s = wn(), l = s.length > 1, m = t === "cutout" ? Xp() : Gn(), g = m.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${un(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== m || u._sortedItemsCache.orderKey !== g) && (u._sortedItemsCache = {
      src: m,
      orderKey: g,
      sorted: [...m]
    });
    const _ = u._sortedItemsCache.sorted;
    for (const x of _) {
      const M = !l && np(x);
      if (u.mode === "frame" && !M || !u.showObjects && !un(x)) continue;
      const C = bt(x), P = un(x), D = cr(x);
      if (!C && !P)
        continue;
      const V = Et(x);
      if (!(t !== "stickers" && !V.visible) && (Jp(x, V, M, D), M && V.visible)) {
        const ee = D ? "#ff4d4f" : C && Tt(x) ? "#f59e0b" : "#0070f3";
        Qp(x, V, ee);
      }
    }
    if (l) {
      const x = Ss(s);
      if (x != null && x.visible) {
        const M = Ns(s) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(x.corners[0].x, x.corners[0].y);
        for (let C = 1; C < x.corners.length; C += 1) A.lineTo(x.corners[C].x, x.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = M, x.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      s.forEach((x) => {
        if (!kt(x) && !zt(x)) return;
        const M = Et(x);
        if (!(M != null && M.visible)) return;
        const C = cr(x) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(M.corners[0].x, M.corners[0].y);
        for (let P = 1; P < M.corners.length; P += 1) A.lineTo(M.corners[P].x, M.corners[P].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, M.corners.forEach((P) => {
          A.beginPath(), A.arc(P.x, P.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((b = u.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const x = bu(u.interaction.start, u.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), A.fill(), A.stroke(), A.restore();
    }
    u.hqFrames && r >= 40 && o >= 30 && (u.hqFrames -= 1, u.hqFrames > 0 && ge());
  }
  function tm(r) {
    const o = _r(r), s = q(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function nu(r, o = !1) {
    const s = q(Qi(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function nm(r) {
    if (!G || !r) return !1;
    const o = G.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || G.clientWidth || 0)), l = Math.round(Number(o.clientHeight || G.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function rm() {
    var s;
    const r = Array.isArray(p.stickers) ? p.stickers : [], o = Array.isArray((s = p.painting) == null ? void 0 : s.raster_objects) ? p.painting.raster_objects : [];
    return JSON.stringify({
      stickers: r.map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        asset_id: String((l == null ? void 0 : l.asset_id) || (l == null ? void 0 : l.assetId) || ""),
        source_kind: String((l == null ? void 0 : l.source_kind) || ""),
        source_link_id: Number((l == null ? void 0 : l.source_link_id) ?? -1),
        source_state_hash: String((l == null ? void 0 : l.source_state_hash) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        yaw_deg: Number((l == null ? void 0 : l.yaw_deg) || 0),
        pitch_deg: Number((l == null ? void 0 : l.pitch_deg) || 0),
        hFOV_deg: Number((l == null ? void 0 : l.hFOV_deg) || 0),
        vFOV_deg: Number((l == null ? void 0 : l.vFOV_deg) || 0),
        rot_deg: Number((l == null ? void 0 : l.rot_deg) || 0),
        roll_deg: Number((l == null ? void 0 : l.roll_deg) || 0),
        crop: (l == null ? void 0 : l.crop) || null
      })),
      rasters: o.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function im(r, o = {}) {
    if (!r) return "";
    const s = Qr(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", m = tm(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      zs(),
      rm(),
      Aa(),
      l,
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "mask:1" : "mask:0",
      `${m.width}x${m.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function am() {
    var D, V, ee, z;
    if (u.outputPreviewRect = null, S.outputPreviewToggle.visible = u.mode !== "frame" && !!Ge(), t !== "cutout" || !S.cameraPreview) return;
    if (u.mode === "frame") {
      S.cameraPreview.visible = !1, S.cameraPreview.settled = !1;
      return;
    }
    const r = Ge();
    if (!r) {
      S.cameraPreview.visible = !0, S.cameraPreview.ready = !1, S.cameraPreview.settled = !1, S.cameraPreview.expanded = !!u.outputPreviewExpanded, S.cameraPreview.width = 220, S.cameraPreview.height = 132, S.cameraPreview.label = "Add Frame to preview", (D = he == null ? void 0 : he.clearScene) == null || D.call(he), (V = F == null ? void 0 : F.requestRender) == null || V.call(F);
      return;
    }
    S.cameraPreview.visible = !0;
    const o = Qr();
    if (!r || !he || !F) {
      S.cameraPreview.ready = !1, S.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", S.cameraPreview.expanded = !!u.outputPreviewExpanded, S.cameraPreview.settled = !1, S.cameraPreview.width = 220, S.cameraPreview.height = 132, (ee = he == null ? void 0 : he.clearScene) == null || ee.call(he), (z = F == null ? void 0 : F.requestRender) == null || z.call(F);
      return;
    }
    const s = nu(r, !!u.outputPreviewExpanded);
    S.cameraPreview.width = s.width, S.cameraPreview.height = s.height, S.cameraPreview.expanded = !!u.outputPreviewExpanded;
    const l = Fa(), m = Va(l), g = ei(o), _ = g ? Da(o) : "none", b = u.showObjects ? Ha() : Oi([]), x = Zi({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((W) => String((W == null ? void 0 : W.id) || "")).join(",") : "none",
        Array.isArray(m) ? m.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "none",
        b.length ? b.map((W) => `${String((W == null ? void 0 : W.id) || "")}:${String((W == null ? void 0 : W.revision) || "")}:${Number((W == null ? void 0 : W.zIndex) || 0)}`).join(",") : "paint:none",
        u.showPanorama ? "panorama:1" : "panorama:0",
        u.showObjects ? "objects:1" : "objects:0",
        u.showMask ? "showMask:1" : "showMask:0",
        Ot(p.coverage)
      ].join("|"),
      backgroundSource: g && u.showPanorama ? o : null,
      backgroundRevision: g ? `cutout_preview:${_}` : "",
      coverageDeg: Ot(p.coverage),
      scene: l,
      textures: m,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(g || m.length > 0 || b.length > 0)) {
      S.cameraPreview.ready = !1, S.cameraPreview.label = "Connect ERP image", S.cameraPreview.settled = !1, he.clearScene(), F.requestRender();
      return;
    }
    if (u.showPanorama && !g && m.length === 0 && b.length === 0) {
      S.cameraPreview.ready = !1, S.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", S.cameraPreview.settled = !1, he.clearScene(), F.requestRender();
      return;
    }
    he.syncScene(x), F.setView(_r(r));
    const C = nm(s), P = C ? F.present() : !1;
    C || F.requestRender(), S.cameraPreview.ready = !0, S.cameraPreview.label = C && P ? "" : "Loading preview", S.cameraPreview.settled = C && P && B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame;
  }
  function om(r, o, s, l = {}) {
    if (!he || !s) return !1;
    const m = Qr(), g = Fa(), _ = Va(g), b = ei(m), x = u.showObjects ? Ha() : Oi([]);
    return b || _.length > 0 || x.length > 0 ? (he.syncScene(Zi({
      stateRevision: im(s, l),
      backgroundSource: b && u.showPanorama ? m : null,
      backgroundRevision: b ? String(m.currentSrc || m.src || "") : "",
      coverageDeg: Ot(p.coverage),
      scene: g,
      textures: _,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), he.renderShotToContext(r, o, s, l)) : !1;
  }
  function Hs(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return Xc(r, s, l);
  }
  function ni(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return jn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function sm(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function lm(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: $t(r, "widthScale", 1),
      pressureLike: $t(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function cm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function js(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", m = /* @__PURE__ */ new WeakMap();
    if (l) {
      let z = null;
      r.forEach((W) => {
        const re = Number((W == null ? void 0 : W.u) || 0), pe = Number((W == null ? void 0 : W.v) || 0), ae = (re % 1 + 1) % 1, ve = z == null ? ae : z + mn(ae, (z % 1 + 1) % 1);
        m.set(W, { x: ve, y: pe }), z = ve;
      });
    }
    const g = (z) => !z || typeof z != "object" ? { x: 0, y: 0 } : m.get(z) || sm(z), _ = (z, W, re, pe = {}) => {
      const ae = l ? (Number(W) % 1 + 1) % 1 : Number(W), ve = lm(z, ae, re, pe);
      return m.set(ve, { x: Number(W), y: Number(re) }), ve;
    }, b = (z, W, re) => {
      const pe = g(z), ae = g(W);
      return _(z, Jn(pe.x, ae.x, re), Jn(pe.y, ae.y, re), {
        t: Jn(Number((z == null ? void 0 : z.t) || 0), Number((W == null ? void 0 : W.t) || 0), re),
        widthScale: Jn($t(z, "widthScale", 1), $t(W, "widthScale", 1), re),
        pressureLike: Jn($t(z, "pressureLike", 1), $t(W, "pressureLike", 1), re)
      });
    };
    if (r.length === 1) {
      const z = g(r[0]);
      return [_(r[0], z.x, z.y)];
    }
    const x = cm(o, s), M = (z, W) => {
      const re = [0];
      for (let ce = 1; ce < z.length; ce += 1) {
        const ye = g(z[ce - 1]), Me = g(z[ce]);
        re.push(re[ce - 1] + Math.hypot(Me.x - ye.x, Me.y - ye.y));
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
        const ye = re[ve], Me = re[ve + 1], je = Math.max(1e-8, Me - ye);
        ae.push(b(z[ve], z[ve + 1], q((ce - ye) / je, 0, 1)));
      }
      const Ae = z[z.length - 1], Oe = g(Ae), Ne = ae[ae.length - 1], X = Ne ? g(Ne) : null;
      return (!X || Math.hypot(X.x - Oe.x, X.y - Oe.y) > W * 0.35) && ae.push(_(Ae, Oe.x, Oe.y)), ae;
    }, C = (z) => {
      if (!Array.isArray(z) || z.length < 3) return z ? z.slice() : [];
      const W = g(z[0]), re = [_(z[0], W.x, W.y)];
      for (let ve = 0; ve < z.length - 1; ve += 1) {
        const Ae = z[ve], Oe = z[ve + 1], Ne = g(Ae), X = g(Oe), ce = _(
          Ae,
          Ne.x * 0.75 + X.x * 0.25,
          Ne.y * 0.75 + X.y * 0.25,
          {
            t: Number(Ae.t || 0) * 0.75 + Number(Oe.t || 0) * 0.25,
            widthScale: $t(Ae, "widthScale", 1) * 0.75 + $t(Oe, "widthScale", 1) * 0.25,
            pressureLike: $t(Ae, "pressureLike", 1) * 0.75 + $t(Oe, "pressureLike", 1) * 0.25
          }
        ), ye = _(
          Ae,
          Ne.x * 0.25 + X.x * 0.75,
          Ne.y * 0.25 + X.y * 0.75,
          {
            t: Number(Ae.t || 0) * 0.25 + Number(Oe.t || 0) * 0.75,
            widthScale: $t(Ae, "widthScale", 1) * 0.25 + $t(Oe, "widthScale", 1) * 0.75,
            pressureLike: $t(Ae, "pressureLike", 1) * 0.25 + $t(Oe, "pressureLike", 1) * 0.75
          }
        );
        re.push(ce, ye);
      }
      const pe = z[z.length - 1], ae = g(pe);
      return re.push(_(pe, ae.x, ae.y)), re;
    }, P = M(r, x);
    if (P.length < 3) return P;
    const D = s ? 2 : 1;
    let V = P.slice();
    for (let z = 0; z < D; z += 1) V = C(V);
    return M(V, Math.max(x * 0.75, 55e-5));
  }
  function $t(r, o, s = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function um(r) {
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
  function Fi(r, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const m = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return m && (m.clearRect(0, 0, l.width, l.height), m.imageSmoothingEnabled = !0), { canvas: l, ctx: m };
  }
  function Vi() {
    const r = Ua();
    return `${String(u.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function ri() {
    const r = Ua();
    return `${String(u.paintStrokeRevision)}:${String(u.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function zs() {
    const r = Aa(), o = ri();
    return r ? `${o}:${r}` : o;
  }
  function fm() {
    u.paintStrokeRevision += 1, u.paintCompositeRevision += 1;
  }
  function dm() {
    u.paintCompositeRevision += 1;
  }
  function hm() {
    u._sortedItemsCache = null, u._strokeGeomCache.clear();
  }
  function ru() {
    var r, o;
    u.paintEngineRevisionKey = null, (o = (r = u.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, p), u.paintEngineRevisionKey = Vi();
  }
  function Dt() {
    u.objectVisualRevision = Number(u.objectVisualRevision || 0) + 1, hm(), B.backgroundDirty = !0, B.dirty = !0;
  }
  function Sn({ rebuildPaintEngine: r = !1 } = {}) {
    fm(), Dt(), r && ru();
  }
  function ii() {
    dm(), Dt();
  }
  function Ba() {
    var l;
    const r = Ua(), o = `${r.width}x${r.height}`;
    u.paintEngineDescriptorKey !== o && (u.paintEngine = Vl(r), u.paintEngineDescriptorKey = o, u.paintEngineRevisionKey = "");
    const s = Vi();
    u.paintEngineRevisionKey !== s && (u.paintEngineRevisionKey = s, (l = u.paintEngine) == null || l.rebuildCommitted(p));
  }
  function Ua() {
    const r = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function qn() {
    return Ua();
  }
  function pm(r, o, s, l, m = null) {
    const g = um(r), _ = $t(o, "widthScale", 1) * $t(o, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? m ? Math.max(0.5, g.value / Math.max(1e-6, Number(m.hFOV_deg || 90) * It) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function mm(r, o, s = {}) {
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
  function gm(r, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function vm(r, o, s, l, m = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    r.save(), mm(r, s, m);
    const _ = (b) => gm(r, b, g);
    if (o.length === 1) {
      _(o[0]), r.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const x = o[b], M = o[b + 1];
      if (!x || !M) continue;
      const C = Number(x.x || 0), P = Number(x.y || 0), D = Number(M.x || 0), V = Number(M.y || 0), ee = Math.max(0.5, Math.min(g, Number(x.radiusPx || 0.5))), z = Math.max(0.5, Math.min(g, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(P) || !Number.isFinite(D) || !Number.isFinite(V) || !Number.isFinite(ee) || !Number.isFinite(z)) continue;
      const W = D - C, re = V - P, pe = Math.hypot(W, re);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        _(x);
        continue;
      }
      if (pe > Math.max(l.w, l.h) * 0.5) continue;
      const ae = Math.max(0.5, Math.min(ee, z)), ve = Math.max(0.35, Math.min(ae * 0.4, 2.25)), Ae = Math.max(1, Math.ceil(pe / ve));
      for (let Oe = 0; Oe <= Ae; Oe += 1) {
        const Ne = Oe / Ae;
        _({
          x: Jn(C, D, Ne),
          y: Jn(P, V, Ne),
          radiusPx: Jn(ee, z, Ne)
        });
      }
    }
    _(o[o.length - 1]), r.restore();
  }
  function bm(r, o, s, l) {
    vm(r, o, s, l, { preview: !1 });
  }
  function ym(r, o, s, l, m) {
    var b, x, M, C;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const g = "u", _ = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const P = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(P.r || 0) * 255)}, ${Math.round(Number(P.g || 0) * 255)}, ${Math.round(Number(P.b || 0) * 255)}, ${Number(P.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((b = o[0]) == null ? void 0 : b[g]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * l.h);
    for (let P = 1; P < o.length; P += 1)
      r.lineTo(Number(((M = o[P]) == null ? void 0 : M[g]) || 0) * l.w, Number(((C = o[P]) == null ? void 0 : C[_]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function iu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function _m(r, o) {
    const s = iu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: pm(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function au(r, o, s = null) {
    var b, x, M, C;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((b = r.canvas) == null ? void 0 : b.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, m = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((C = o == null ? void 0 : o.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return ym(r.ctx, iu(m), m, l), !0;
    const _ = _m(m, l);
    return _.length ? (bm(r.ctx, _, m, l), !0) : !1;
  }
  function xm(r, o, s, l = 8) {
    const m = new Uint8Array(o * s), g = [], _ = new Int32Array(o * s), b = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let M = 0; M < o; M += 1) {
        const C = x * o + M;
        if (m[C] || r[C] <= l) continue;
        let P = 0, D = 0;
        _[D] = M, b[D] = x, D += 1, m[C] = 1;
        const V = [];
        let ee = M, z = x, W = M, re = x;
        for (; P < D; ) {
          const pe = _[P], ae = b[P];
          P += 1, V.push({ x: pe, y: ae }), pe < ee && (ee = pe), ae < z && (z = ae), pe > W && (W = pe), ae > re && (re = ae);
          const ve = [
            [(pe - 1 + o) % o, ae],
            [(pe + 1) % o, ae],
            [pe, ae - 1],
            [pe, ae + 1]
          ];
          for (const [Ae, Oe] of ve) {
            if (Oe < 0 || Oe >= s) continue;
            const Ne = Oe * o + Ae;
            m[Ne] || r[Ne] <= l || (m[Ne] = 1, _[D] = Ae, b[D] = Oe, D += 1);
          }
        }
        g.push({ pixels: V, minX: ee, minY: z, maxX: W, maxY: re });
      }
    return g;
  }
  function wm(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, M) => x - M);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, m = 0;
    for (let x = 0; x < s.length; x += 1) {
      const M = s[x], P = (x === s.length - 1 ? s[0] + o : s[x + 1]) - M - 1;
      P > l && (l = P, m = x);
    }
    const g = (s[(m + 1) % s.length] + o) % o;
    let _ = 1 / 0, b = -1 / 0;
    for (const x of s) {
      const M = (x - g + o) % o;
      _ = Math.min(_, M), b = Math.max(b, M);
    }
    return {
      startX: g,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function Sm(r, o, s = {}) {
    var M;
    const l = Number((r == null ? void 0 : r.width) || 0), m = Number((r == null ? void 0 : r.height) || 0), g = (M = r == null ? void 0 : r.getContext) == null ? void 0 : M.call(r, "2d");
    if (!g || l < 1 || m < 1) return [];
    const _ = g.getImageData(0, 0, l, m), b = new Uint8Array(l * m);
    for (let C = 0; C < b.length; C += 1) b[C] = _.data[C * 4 + 3];
    return xm(b, l, m, 8).map((C, P) => {
      const D = wm(C, l);
      if (!D) return null;
      const V = Number(D.widthPx || 0), ee = C.maxY - C.minY + 1, z = Number(D.startX || 0), W = document.createElement("canvas");
      W.width = V, W.height = ee;
      const re = W.getContext("2d");
      if (!re) return null;
      const pe = re.createImageData(V, ee);
      return C.pixels.forEach(({ x: ae, y: ve }) => {
        const Ae = (ve * l + ae) * 4, Oe = (Number(ae || 0) - z + l) % l, Ne = ((ve - C.minY) * V + Oe) * 4;
        pe.data[Ne + 0] = _.data[Ae + 0], pe.data[Ne + 1] = _.data[Ae + 1], pe.data[Ne + 2] = _.data[Ae + 2], pe.data[Ne + 3] = _.data[Ae + 3];
      }), re.putImageData(pe, 0, 0), {
        id: fi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + P * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / m,
          u1: V / l,
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
  function Hi(r, o) {
    if (!r || !o) return null;
    const s = Oa(r), l = kn(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const m = kn(o, s.right) / l, g = kn(o, s.up) / l, _ = m * s.cr + g * s.sr, b = -m * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Nm(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (u.mode === "unwrap") {
      const s = fr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Li(ni(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function ou(r, o = null) {
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
    const s = r.map((l) => Li(ni(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Mm(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], m = r[(s + 1) % r.length];
      if (!l || !m || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(m.x) || !Number.isFinite(m.y) || Math.hypot(Number(m.x) - Number(l.x), Number(m.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function km(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = ni(m), _ = Hi(o, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return Mm(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Pm(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const m of r) {
      const g = ni(m), _ = Hi(o, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function Cm() {
    var m;
    const r = Ge(), o = Bt(r);
    if (!r || !o) return !1;
    A.save(), A.fillStyle = "#050505", A.fillRect(0, 0, I.width, I.height), A.shadowColor = "rgba(0, 0, 0, 0.45)", A.shadowBlur = 24, A.shadowOffsetX = 0, A.shadowOffsetY = 10, A.fillStyle = "rgba(14, 14, 14, 1)", A.fillRect(o.x, o.y, o.w, o.h), A.restore(), A.save(), A.beginPath(), A.rect(o.x, o.y, o.w, o.h), A.clip();
    const s = u.interaction ? "draft" : String(((m = p.ui_settings) == null ? void 0 : m.preview_quality) || "balanced");
    return om(A, o, r, { quality: s }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(o.x, o.y, o.w, o.h)), A.restore(), A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.12)", A.lineWidth = 1, A.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), A.restore(), !0;
  }
  function Am() {
    var x, M;
    if (((x = u.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = u.interaction.stroke, o = (M = r == null ? void 0 : r.geometry) == null ? void 0 : M.points;
    let s;
    if (u.mode === "frame") {
      const C = Ge(), P = Bt(C);
      s = km(o, C, P);
    } else
      s = Nm(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", m = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(m.r || 0) * 255), _ = Math.round(Number(m.g || 0) * 255), b = Math.round(Number(m.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let C = 1; C < s.length; C++) A.lineTo(Number(s[C].x || 0), Number(s[C].y || 0));
    A.closePath(), l ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${g},${_},${b},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Im() {
    u.mode === "frame" ? Cm() : u.mode === "unwrap" ? Bp(!1) : Up(!1), t === "cutout" && am(), em(), Am(), S.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && ze(), B.hasPresentedFrame || (B.hasPresentedFrame = !0, U.style.opacity = "1"), t === "cutout" && S.cameraPreview && (S.cameraPreview.settled = B.pendingStableLayoutFrames <= 0 && B.hasPresentedFrame && u.mode !== "frame");
    const r = Rp();
    r ? (J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", r)) : (J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind"));
  }
  function Tm(r = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Em() {
    e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Qh();
  }
  function ge(r = {}) {
    var b, x, M, C, P, D, V, ee, z, W;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), m = String(((b = u.interaction) == null ? void 0 : b.kind) || "");
    (!o || m === "view" || m === "pan_frame" || Tm() || !!((x = u.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (B.backgroundDirty = !0), o && Ic() && (u.livePaintInteractionRevision += 1, B.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (As(), La()), Em(), s && ((C = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || C.call(M), (P = e.setDirtyCanvas) == null || P.call(e, !0, !1)), s && !o && ((V = (D = e.graph) == null ? void 0 : D.setDirtyCanvas) == null || V.call(D, !0, !0), (W = (z = (ee = xr) == null ? void 0 : ee.canvas) == null ? void 0 : z.setDirty) == null || W.call(z, !0, !0)), B.dirty = !0;
  }
  function su() {
    const r = I.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return I.width !== o || I.height !== s || U.width !== o || U.height !== s ? (I.width = o, I.height = s, U.width = o, U.height = s, B.backgroundDirty = !0, B.dirty = !0, t === "cutout" && (B.pendingStableLayoutFrames = Math.max(Number(B.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function $s(r = performance.now()) {
    var o;
    if (B.running) {
      if (B.lastTickTs = r, u.outputPreviewAnim !== u.outputPreviewAnimTo) {
        const s = Math.max(1, Number(u.outputPreviewAnimDurationMs)), l = q((r - Number(u.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? cx(l) : dx(l);
        u.outputPreviewAnim = Jn(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, g), B.dirty = !0, l >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
      }
      if ((o = u.viewTween) != null && o.active) {
        const s = u.viewTween, l = q((r - s.startTs) / s.durationMs, 0, 1), m = lx(l);
        u.viewYaw = Ft(s.startYaw + s.deltaYaw * m), u.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * m, u.viewFov = s.startFov + (s.targetFov - s.startFov) * m, B.backgroundDirty = !0, B.dirty = !0, l >= 1 && (u.viewTween = null);
      }
      if (u.viewInertia.vx = Number(Lt.state.inertia.vx || 0), u.viewInertia.vy = Number(Lt.state.inertia.vy || 0), u.viewInertia.active = !!Lt.state.inertia.active, Lt.stepInertia(r) && (u.viewInertia.vx = Number(Lt.state.inertia.vx || 0), u.viewInertia.vy = Number(Lt.state.inertia.vy || 0), u.viewInertia.active = !!Lt.state.inertia.active, B.backgroundDirty = !0, B.dirty = !0), (B.dirty || r - B.lastSizeCheckTs >= 220) && (su(), B.lastSizeCheckTs = r), B.pendingStableLayoutFrames > 0 && (B.pendingStableLayoutFrames -= 1, B.dirty = !0), B.dirty) {
        if (B.pendingStableLayoutFrames > 0) {
          B.rafId = requestAnimationFrame($s);
          return;
        }
        B.dirty = !1, Im();
      }
      B.rafId = requestAnimationFrame($s);
    }
  }
  function Dm() {
    B.running = !1, B.rafId && cancelAnimationFrame(B.rafId), B.rafId = 0;
  }
  function ut() {
    i || (u.historyController.commitActionGroup(JSON.stringify(jf(p))), qs());
  }
  function Bs(r) {
    if (i) return;
    const o = r < 0 ? u.historyController.undo() : u.historyController.redo();
    if (qs(), !o) return;
    const s = JSON.parse(o);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), u.selectedId = t === "stickers" || t === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, u.selectedIds = u.selectedId ? [u.selectedId] : [], Sn(), tn(), He(), gn(), ge({ cause: "cutout_frame" });
  }
  function lu() {
    var s, l;
    const r = Array.isArray((s = u.historyController) == null ? void 0 : s.entries) ? u.historyController.entries : [], o = Number((l = u.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function tn() {
    Gh();
    const r = Xb({
      editor: u,
      swatches: Ao,
      paintColorPopOpen: we ? !we.hidden : !1,
      colorToCss: En,
      colorsApproximatelyEqual: Io,
      rgb01ToHsv: Sl,
      hsv01ToRgb: wl,
      getBrushPresetIdForTool: hr,
      isActiveLassoTool: cp
    });
    if (Object.assign(S.paintDock, r), mp(), !r.visible) {
      we && (we.hidden = !0);
      return;
    }
    it && (clearTimeout(it), it = 0), le && (!r.colorEnabled && we && !we.hidden && (it = window.setTimeout(() => {
      we.hidden = !0, S.paintDock.colorPopOpen = !1, it = 0;
    }, 170)), we && (we.style.setProperty("--picker-hue-color", r.pickerHueColor), we.style.setProperty("--picker-sat", r.pickerSat), we.style.setProperty("--picker-val", r.pickerVal), we.style.setProperty("--picker-hue", r.pickerHue)), De && (De.style.left = r.pickerSvLeft, De.style.top = r.pickerSvTop), Je && (Je.style.left = r.pickerHueLeft));
  }
  function Us() {
    const r = lt();
    r && (u.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: qi(r)
    }, He());
  }
  function He() {
    var ve, Ae, Oe, Ne;
    if (a) return;
    p.ui_settings = p.ui_settings || {};
    const r = Yb(p.ui_settings);
    if (c) {
      S.sidePanel = Zb({
        coverage: p.coverage,
        uiSettings: r,
        normalizeCoverageValue: Ot
      });
      return;
    }
    const o = lt(), s = wn(), l = Ea();
    s.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (u.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: qi(o)
    });
    const m = u.panelLastValues || (t === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = l === "stroke" ? null : o, _ = g || m, b = !!g;
    u.panelWasEnabled = b, As();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const X = [{ id: "", labelHtml: Nl(t === "stickers" ? "No image" : "Nothing selected"), item: null }];
      t === "stickers" ? Gn().forEach((Me, je) => {
        var We, Ke;
        const Fe = Tt(Me) ? String(Me.id || Lr) : String(((Ke = (We = p.assets) == null ? void 0 : We[Me.asset_id]) == null ? void 0 : Ke.name) || Me.asset_id || Me.id), $e = `${je + 1}. ${Fe}${Tt(Me) && Yr(Me) ? " (hidden)" : ""}`;
        X.push({ id: Me.id, labelHtml: Rc({ item: Me, label: $e, kind: "image" }), item: Me, kind: "image" });
      }) : Lc().forEach((Me) => {
        X.push({ id: Me.item.id, labelHtml: Rc(Me), item: Me.item, kind: Me.kind });
      });
      const ce = (g == null ? void 0 : g.id) || "", ye = X.find((Me) => Me.id === ce) || X[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: X.length <= 1,
        currentLabelHtml: ye.labelHtml,
        items: X.map((Me) => ({ id: Me.id, labelHtml: Me.labelHtml, active: Me.id === ce }))
      };
    }
    const M = [], C = (X, ce, ye, Me, je) => {
      const Fe = q(Number(_[X] || 0), ye, Me);
      M.push({
        key: X,
        label: ce,
        min: ye,
        max: Me,
        step: je,
        value: Fe,
        displayValue: gx(Fe),
        fillPct: q((Fe - ye) / Math.max(1e-6, Me - ye) * 100, 0, 100),
        enabled: b && !i
      });
    }, P = [];
    s.length > 1 ? (P.push(`Selected objects: ${s.length}`), P.push("Multi-selection supports z-order and delete.")) : (C("yaw_deg", "Yaw", -180, 180, 0.1), C("pitch_deg", "Pitch", -90, 90, 0.1), C("hFOV_deg", "H FOV", 1, 179, 0.1), C("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || l === "image" ? C("rot_deg", "Rotation", -180, 180, 0.1) : C("roll_deg", "Roll", -180, 180, 0.1));
    const D = Array.isArray((Ae = (ve = p == null ? void 0 : p.painting) == null ? void 0 : ve.paint) == null ? void 0 : Ae.strokes) ? p.painting.paint.strokes.length : 0, V = Array.isArray((Ne = (Oe = p == null ? void 0 : p.painting) == null ? void 0 : Oe.mask) == null ? void 0 : Ne.strokes) ? p.painting.mask.strokes.length : 0, ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((X) => String((X == null ? void 0 : X.name) || "")) : [], z = Uh(
      e,
      ee.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), W = !!String((z == null ? void 0 : z.src) || "").trim() || Ms("pano_input_images").length > 0, re = Array.isArray(Gn()) && Gn().length > 0 || D > 0, pe = V > 0, ae = [
      { key: "mask", label: "Mask", icon: Rt.circle_dashed_tool, visible: !!u.showMask, enabled: pe },
      { key: "objects", label: "Paint / Images", icon: Rt.image, visible: !!u.showObjects, enabled: re },
      { key: "panorama", label: "Panorama", icon: Rt.globe, visible: !!u.showPanorama, enabled: W }
    ].map((X) => ({
      ...X,
      ariaLabel: `Toggle ${X.label.toLowerCase()}`,
      tip: X.visible ? "Hide" : "Show"
    }));
    S.sidePanel = Jb({
      coverage: p.coverage,
      readOnly: i,
      selectionPicker: x,
      enabled: b,
      selectedKind: l,
      selectedItems: s,
      params: M,
      notes: P,
      visibilityRows: ae,
      uiSettings: r,
      normalizeCoverageValue: Ot
    });
  }
  function Ga(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function cu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Ga(r)) return;
    const o = yo("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((_, b) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => b(new Error("image load failed")), x.src = s;
      });
      Q.set(o, l);
      const m = yo("st");
      p.stickers.push({
        id: m,
        asset_id: o,
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ar(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Oc()
      }), Cr(p.stickers[p.stickers.length - 1]), Gs(), ut(), He(), ze(), ge();
      const g = (async () => {
        const _ = await Es(r, String(r.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((M) => String((M == null ? void 0 : M.asset_id) || "") === o).length && (p.assets[o] = _, ti(), yt(), He(), ze(), ge());
      })();
      uo.set(o, g);
      try {
        await g;
      } finally {
        uo.delete(o);
      }
    } catch {
      delete p.assets[o], Q.delete(o);
      const l = Array.isArray(p.stickers) ? p.stickers : [], m = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
      m.length && (p.stickers = l.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), m.some((g) => {
        var _;
        return String((g == null ? void 0 : g.id) || "") === String(((_ = u.selection) == null ? void 0 : _.id) || "");
      }) && Cr(null), He(), ze(), ge());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function uu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const s = (l = o.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Lm() {
    i || t !== "stickers" && t !== "cutout" || uu((r) => {
      cu(r);
    });
  }
  async function Rm(r) {
    var M;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = lt();
    if (!o || !bt(o) || Tt(o) || !Ga(r)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), m = l ? Ut(((M = p.assets) == null ? void 0 : M[l]) || null) : null, g = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = yo("asset"), x = URL.createObjectURL(r);
    try {
      const C = await new Promise((D, V) => {
        const ee = new Image();
        ee.onload = () => D(ee), ee.onerror = () => V(new Error("image load failed")), ee.src = x;
      });
      Q.set(b, C), o.asset_id = b, o.vFOV_deg = Ar(
        Number(o.hFOV_deg || 30),
        Number(C.naturalWidth || C.width || 1),
        Number(C.naturalHeight || C.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), ut(), He(), ze(), ge();
      const P = (async () => {
        const D = await Es(r, String(r.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((z) => String((z == null ? void 0 : z.id) || "") === s && String((z == null ? void 0 : z.asset_id) || "") === b) && (p.assets[b] = D, ti(), yt(), He(), ze(), ge());
      })();
      uo.set(b, P);
      try {
        await P;
      } finally {
        uo.delete(b);
      }
    } catch {
      delete p.assets[b], Q.delete(b);
      const C = (Array.isArray(p.stickers) ? p.stickers : []).find((P) => String((P == null ? void 0 : P.id) || "") === s) || null;
      C && String(C.asset_id || "") === b && (l && m && (p.assets[l] = m), C.asset_id = l, C.vFOV_deg = g, C.crop = _ ? { ..._ } : null), Dt(), He(), ze(), ge();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Om() {
    if (i) return;
    const r = lt();
    !r || !bt(r) || Tt(r) || uu((o) => {
      Rm(o);
    });
  }
  async function Fm() {
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
        const _ = await fetch(g).then((P) => P.blob()), b = String(_.type || "image/png").split("/")[1] || "png", x = String((m == null ? void 0 : m.name) || `${l}.${b}`), M = new File([_], x, { type: _.type || "image/png" }), C = await Es(M, x);
        p.assets[l] = {
          ...C,
          w: Number((m == null ? void 0 : m.w) || 0),
          h: Number((m == null ? void 0 : m.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (yt(), ge());
  }
  function Vm() {
    if (i || t !== "cutout") return;
    const r = Ge();
    if (r) {
      Cr(r), u.mode = "pano", vs(
        Ft(Number(r.yaw_deg || 0)),
        q(Number(r.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), ze(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Math.max(0.1, Number((I == null ? void 0 : I.width) || 1) / Math.max(1, Number((I == null ? void 0 : I.height) || 1))), s = q(Number(u.viewFov || 90), 1, 179), l = q(Math.min(42, s * 0.42), 8, 96), m = q(br * (2 * Math.atan(Math.tan(l * It * 0.5) / Math.max(0.1, o))), 6, 72), g = Fh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Ft(Number(u.viewYaw || 0)),
      pitch_deg: q(Number(u.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: l,
      vFOV_deg: m,
      locked: !1
    });
    p.shots = [g], Cr(g), Gs(), u.mode = "pano", ut(), yt(), He(), ze(), ge({ cause: "cutout_frame" });
  }
  function Hm() {
    i || t === "cutout" && (p.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, p.active.selected_shot_id = null, ut(), yt(), He(), ge());
  }
  function jm() {
    const r = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const s of r)
      Tt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function fu(r, o, s = "Clear") {
    return new Promise((l) => {
      S.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function zm() {
    var s, l;
    if (i || !await fu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ua(null), Sn();
    const o = jm();
    t === "stickers" ? (p.stickers = o, p.assets = {}, u.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ti()) : (p.stickers = o, p.assets = {}, p.shots = [], u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, ti()), ut(), yt(), He(), ze(), ge();
  }
  async function $m(r) {
    var g, _, b, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = oi(o);
    if (!(!l.length && !(((g = u.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = u.interaction) == null ? void 0 : _.layerKind) === o) || !await fu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = u.interaction) == null ? void 0 : b.kind) === "draw" && ((x = u.interaction) == null ? void 0 : x.layerKind) === o) {
        const M = qn();
        M && u.paintEngine.cancelActiveStroke(M), u.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = en().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== o), o === "paint" && (jt().length = 0), Sn(), ut(), yt(), He(), ze(), tn(), ge();
    }
  }
  function Bm() {
    if (i) return;
    const r = lt();
    if (!r || !bt(r) || Tt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = yo("st"), o.yaw_deg = Ft((o.yaw_deg || 0) + 8), o.z_index = Oc(), p.stickers.push(o), p.active.selected_sticker_id = o.id, u.selectedId = o.id, u.selectedIds = [o.id], Dt(), ut(), yt(), ze(), He(), ge();
  }
  function du() {
    var s, l, m, g, _, b;
    if (i) return;
    const r = wn(), o = lt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((P) => kt(P)).map((P) => String(P.actionGroupId || P.id || ""))), M = new Set(r.filter((P) => zt(P)).map((P) => At(P.rasterObjectId || P.id || ""))), C = new Set(r.filter(bt).map((P) => String(P.id || "")));
        x.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((P) => !x.has(String((P == null ? void 0 : P.actionGroupId) || ""))), p.painting.groups = jt().filter((P) => !x.has(String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || ""))), Sn()), M.size > 0 && (p.painting.raster_objects = en().filter((P) => !M.has(String((P == null ? void 0 : P.id) || ""))), ii()), C.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((P) => C.has(String((P == null ? void 0 : P.id) || "")) ? Tt(P) ? (Yr(P) || (P.visible = !1), !0) : !1 : !0), ti(), Dt()), u.selectedId = null, u.selectedIds = [], ut(), yt(), He(), ze(), ge();
        return;
      }
      if (kt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (m = p.painting) == null ? void 0 : m.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() !== x), p.painting.groups = jt().filter((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() !== x), Sn(), u.selectedId = null, u.selectedIds = [], ut(), yt(), He(), ze(), ge();
        return;
      }
      if (zt(o)) {
        const x = At(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = en().filter((M) => String((M == null ? void 0 : M.id) || "").trim() !== x), ii(), u.selectedId = null, u.selectedIds = [], ut(), yt(), He(), ze(), ge();
        return;
      }
      if (t === "stickers" || bt(o)) {
        if (Tt(o)) {
          if (Yr(o)) return;
          o.visible = !1, Dt(), ut(), yt(), He(), ze(), ge();
          return;
        }
        p.stickers = p.stickers.filter((x) => x.id !== o.id), ti(), Dt(), u.selectedId = ((_ = p.stickers[0]) == null ? void 0 : _.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, ut(), yt(), He(), ze(), ge();
        return;
      }
      Hm();
    }
  }
  function Um(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const D = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [z, W] = D.split(":").map((re) => Number(re));
        if (Number.isFinite(z) && Number.isFinite(W)) return z >= W;
      }
      const V = Number(r.hFOV_deg || 64), ee = Number(r.vFOV_deg || 40);
      return Math.abs(V - ee) > 1e-6 ? V >= ee : Qi(r) >= 1;
    })();
    let [m, g] = s[String(o)] || s["1:1"];
    m >= g !== l && ([m, g] = [g, m]);
    const _ = m / g, b = q(Number(r.hFOV_deg || 64), 1, 179), x = q(Number(r.vFOV_deg || 40), 1, 179), M = Math.sqrt(Math.max(1, b * x)), C = q(M * Math.sqrt(_), 1, 179), P = q(M / Math.sqrt(_), 1, 179);
    r.hFOV_deg = C, r.vFOV_deg = P, r.aspect_id = String(o);
  }
  function Gm(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Fr(r);
  }
  function hu() {
    Kr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Km() {
    if (i) return;
    const r = wn();
    if (!lt() || r.length === 0) return;
    hu();
    const s = Kr(), l = new Set(r.map((b) => bt(b) ? `sticker:${String(b.id || "")}` : zt(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), m = [], g = [];
    if (s.forEach((b) => {
      var M, C;
      const x = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? m.push(b) : g.push(b);
    }), !m.length || m[m.length - 1] === s[s.length - 1]) return;
    [...g, ...m].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), ut(), yt(), ze(), ge();
  }
  function Wm() {
    if (i) return;
    const r = wn();
    if (!lt() || r.length === 0) return;
    hu();
    const s = Kr(), l = new Set(r.map((b) => bt(b) ? `sticker:${String(b.id || "")}` : zt(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), m = [], g = [];
    if (s.forEach((b) => {
      var M, C;
      const x = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((C = b.item) == null ? void 0 : C.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(x) ? m.push(b) : g.push(b);
    }), !m.length || m[0] === s[0]) return;
    [...m, ...g].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Dt(), ut(), yt(), ze(), ge();
  }
  function qm() {
    i || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", d && (p.output_preset = ql(d.value, Number(p.output_preset || 2048))), h && (p.coverage = Ot(h.value)), v && (p.bg_color = String(v.value || p.bg_color || "#00ff00")), gn(), e.setDirtyCanvas(!0, !0));
  }
  function gn() {
    var o;
    if (i) return;
    p.coverage = Ot(p.coverage);
    const r = JSON.stringify(p);
    y && (y.value = r, (o = y.callback) == null || o.call(y, r));
  }
  function Ka() {
    p.ui_settings = xx(p.ui_settings), i || gn();
  }
  function yt() {
    var r;
    i || (gn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Ym() {
    i || Lp() && qc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Xm(r = {}) {
    var l, m, g, _, b, x, M, C, P, D;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((m = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || m.call(l), (_ = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), s && ((M = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), (D = (P = (C = xr) == null ? void 0 : C.canvas) == null ? void 0 : P.setDirty) == null || D.call(P, !0, !0));
  }
  function Gs() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", tn(), He());
  }
  function ai(r) {
    const o = I.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * I.width,
      y: (r.clientY - o.top) / o.height * I.height
    };
  }
  function Wa(r) {
    const o = I.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function pu() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const r = Array.isArray(p.shots) ? p.shots : [];
    if (!r.length) return null;
    const o = String(p.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Bt(r = Ge()) {
    var _, b, x;
    if (!r || !I) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(I.width || 0) - 48),
      h: Math.max(1, Number(I.height || 0) - 48)
    }, s = q(Qi(r), 0.1, 10);
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
  function Ks() {
    return t === "cutout" && !!Ge();
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
    const s = Ts(r.x, r.y), { lon: l, lat: m } = Rs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - m / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Mn(r, o, s = performance.now()) {
    const l = Bt(o);
    if (!l) return null;
    const m = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    }, g = Hs(o, m);
    if (!g) return null;
    const { lon: _, lat: b } = Rs(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Zm(r, o) {
    var M;
    const s = Ge(), l = Bt(s);
    if (!s || !l) return !1;
    const m = Math.max(0.1, Number(((M = u.frameView) == null ? void 0 : M.zoom) || 1)), g = q(m * Number(o), 0.25, 12);
    if (Math.abs(g - m) < 1e-6) return !1;
    const _ = (Number(r.x) - l.x) / Math.max(1e-6, l.w), b = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    u.frameView.zoom = g;
    const x = Bt(s);
    return x ? (u.frameView.panX += Number(r.x) - (x.x + x.w * _), u.frameView.panY += Number(r.y) - (x.y + x.h * b), !0) : !1;
  }
  function Jm(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function hr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Xn : nn[o] ? o : u.activeBrushPresetId || Xn;
  }
  function mu() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (pu() || Ks());
  }
  function gu() {
    var r;
    return mu() && ((r = u.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function qa(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), m = o !== !1, g = u.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== m || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return u.pointerPos = { x: s, y: l, inside: m }, _;
  }
  function Qm() {
    var C, P;
    if (!gu()) return null;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool, s = hr(o), l = nn[s] || nn[Xn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), b = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(u.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : q(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), M = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : q(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: En(b, x),
      strokeStyle: En(b, M),
      x: Number(((C = u.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((P = u.pointerPos) == null ? void 0 : P.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function eg() {
    var D, V, ee;
    const r = Qm();
    if (!oe) return;
    if (!r) {
      oe.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, l = "999px", m = 0, g = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let C = Number(r.hotspotX ?? o * 0.5), P = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Jo, s = Jo, l = "0", _ = "0", b = "none", C = ax, P = ox, g = px(r.fillStyle, M, x);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const z = Math.max(1, Number(((D = r.preset) == null ? void 0 : D.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * z), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, m = Number(((ee = (V = r.preset) == null ? void 0 : V.angle) == null ? void 0 : ee.value) || 0) * br;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    oe.style.display = "block", oe.style.width = `${Math.round(o)}px`, oe.style.height = `${Math.round(s)}px`, oe.style.borderRadius = l, oe.style.border = _, oe.style.boxShadow = b, oe.style.background = g, oe.style.backgroundRepeat = "no-repeat", oe.style.backgroundPosition = "center", oe.style.backgroundSize = "contain", oe.style.transform = `translate(${Math.round(r.x - C)}px, ${Math.round(r.y - P)}px) rotate(${m}deg)`;
  }
  function tg() {
    var pe;
    if (!ie || !xe) return;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool;
    if (o === "lasso_fill") return;
    const s = hr(o), l = nn[s] || nn[Xn], m = Number(u.brushSizes[s] ?? 10), g = Math.max(1, m) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), b = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(u.paintColor), M = r === "mask" ? En(x, 0.22) : b ? "rgba(255,255,255,0.14)" : En(x, q(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), C = r === "mask" ? En(x, 0.96) : b ? "rgba(255,255,255,0.72)" : En(x, q(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let P = _ * 2, D = _ * 2, V = "999px", ee = 0, z = M;
    const W = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ae = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      P = Math.max(16, _ * 2 * ae), D = Math.max(10, _ * 2), V = `${Math.min(8, D * 0.42)}px`, ee = Number(((pe = l == null ? void 0 : l.angle) == null ? void 0 : pe.value) || 0) * br;
    } else o === "brush" ? z = `radial-gradient(circle at 50% 50%, ${C} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (P = Math.max(18, _ * 1.8), D = P, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : b && (z = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(P)}px`, xe.style.height = `${Math.round(D)}px`, xe.style.borderRadius = V, xe.style.background = z, xe.style.border = `1px solid ${W}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${ee}deg)`, Qe && (clearTimeout(Qe), Qe = 0), ie.classList.remove("fade-out"), ie.classList.add("show");
  }
  function Ya() {
    !ie || !ie.classList.contains("show") || (ie.classList.add("fade-out"), Qe && clearTimeout(Qe), Qe = window.setTimeout(() => {
      ie.classList.remove("show", "fade-out"), Qe = 0;
    }, 180));
  }
  function ng(r, o, s, l) {
    const m = hr(o), g = nn[m] || nn[Xn], _ = u.brushSizes[m] ?? 10, b = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), x = Jm(l, b), M = s.map((P) => ({
      ...P,
      t: Number((P == null ? void 0 : P.t) || 0),
      widthScale: Number.isFinite(Number(P == null ? void 0 : P.widthScale)) ? Math.max(0, Number(P.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(P == null ? void 0 : P.pressureLike)) ? Math.max(0, Number(P.pressureLike)) : 1
    })), C = {
      id: fi(r),
      actionGroupId: fi("ag"),
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
        rawPoints: M.map((P) => ({ ...P })),
        points: M.map((P) => ({ ...P }))
      }
    };
    return Df(C, g), Number(g.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function rg(r, o, s, l) {
    const m = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), g = hr(o), _ = nn[g] || nn[Xn], b = {
      id: fi(r),
      actionGroupId: fi("ag"),
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
    return Df(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function oi(r) {
    const o = p.painting || (p.painting = ua(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function ig(r, o, s = performance.now()) {
    let l;
    if (u.mode === "frame") {
      const M = Ge();
      if (!M) return !1;
      l = Mn(o, M, s);
    } else
      l = Nn(o, s);
    const m = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, _ = m[m.length - 1];
    if (_) {
      const M = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (M < 15e-4 && C < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    m.push({ ...b }), g.push({ ...b });
    const x = qn();
    if (x) {
      const M = u.paintEngine.ensureTarget(x);
      u.paintEngine.appendStrokePoint(M, Number(b.u ?? 0), Number(b.v ?? 0), r.stroke);
    }
    return !0;
  }
  function ag(r, o, s = performance.now()) {
    var _, b;
    let l;
    if (u.mode === "frame") {
      const x = Ge();
      if (!x) return !1;
      l = Mn(o, x, s);
    } else
      l = Nn(o, s);
    const m = (b = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(m)) return !1;
    const g = m[m.length - 1];
    if (g) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (x < 15e-4 && M < 15e-4) return !1;
    }
    return m.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function og(r) {
    var ae, ve, Ae, Oe, Ne;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Ba();
    const s = qn(), l = Fi(s.width, s.height);
    if (!au(l, o, { w: s.width, h: s.height })) return !1;
    const m = ((ve = (ae = l.ctx) == null ? void 0 : ae.getImageData(0, 0, s.width, s.height)) == null ? void 0 : ve.data) || null;
    if (!m) return !1;
    const g = new Map(jt().map((X) => [String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim(), X ? { ...X } : null])), _ = [], b = [], x = [...en().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") !== "paint")];
    let M = !1, C = Kr().reduce((X, ce) => Math.max(X, Number((ce == null ? void 0 : ce.z_index) || 0)), -1) + 1;
    function P(X, ce, ye, Me = 8) {
      let je = ce, Fe = ye, $e = -1, We = -1;
      for (let Ke = 0; Ke < ye; Ke += 1)
        for (let Ye = 0; Ye < ce; Ye += 1)
          X[(Ke * ce + Ye) * 4 + 3] <= Me || (Ye < je && (je = Ye), Ke < Fe && (Fe = Ke), Ye > $e && ($e = Ye), Ke > We && (We = Ke));
      return $e < je || We < Fe ? null : { minX: je, minY: Fe, maxX: $e, maxY: We };
    }
    const D = P(m, s.width, s.height, 8);
    if (!D) return !1;
    function V(X, ce) {
      return !X || !ce ? !1 : !(X.maxX < ce.minX || ce.maxX < X.minX || X.maxY < ce.minY || ce.maxY < X.minY);
    }
    function ee(X, ce) {
      const ye = lr((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "", "paint", ce);
      if (!ye) return null;
      const Me = ye.centerUv.u - ye.halfW, je = ye.centerUv.u + ye.halfW, Fe = ye.centerUv.v - ye.halfH, $e = ye.centerUv.v + ye.halfH, We = s.width, Ke = s.height;
      return {
        minX: Math.floor((Me % 1 + 1) % 1 * We),
        maxX: Math.ceil((je % 1 + 1) % 1 * We),
        minY: Math.floor(q(Fe, 0, 1) * Ke),
        maxY: Math.ceil(q($e, 0, 1) * Ke),
        wraps: je - Me >= 1 || Me < 0 || je > 1
      };
    }
    function z(X) {
      const ce = (X == null ? void 0 : X.bbox) || null;
      if (!ce) return null;
      const ye = (X == null ? void 0 : X.transform) || {}, Me = s.width, je = s.height, Fe = Number(ce.u0 || 0) + Number(ye.du || 0), $e = Number(ce.u1 || 0) + Number(ye.du || 0), We = Number(ce.v0 || 0) + Number(ye.dv || 0), Ke = Number(ce.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Fe % 1 + 1) % 1 * Me),
        maxX: Math.ceil(($e % 1 + 1) % 1 * Me),
        minY: Math.floor(q(We, 0, 1) * je),
        maxY: Math.ceil(q(Ke, 0, 1) * je),
        wraps: $e - Fe >= 1 || Fe < 0 || $e > 1
      };
    }
    function W(X) {
      return X ? X.wraps ? V(D, { minX: 0, maxX: X.maxX, minY: X.minY, maxY: X.maxY }) || V(D, { minX: X.minX, maxX: s.width - 1, minY: X.minY, maxY: X.maxY }) : V(D, X) : !0;
    }
    function re(X) {
      if (!X) return { touched: !1, canvas: null };
      const ce = Fi(s.width, s.height, { readback: !0 });
      ce.ctx.drawImage(X, 0, 0);
      const ye = ce.ctx.getImageData(0, 0, s.width, s.height);
      ce.ctx.save(), ce.ctx.globalCompositeOperation = "destination-out", ce.ctx.drawImage(l.canvas, 0, 0), ce.ctx.restore();
      const Me = ce.ctx.getImageData(0, 0, s.width, s.height);
      for (let je = 0; je < s.width * s.height; je += 1) {
        if (m[je * 4 + 3] <= 8) continue;
        const $e = ye.data[je * 4 + 3], We = Me.data[je * 4 + 3];
        if ($e > We)
          return { touched: !0, canvas: ce.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(X, ce, ye) {
      const Me = Number(ye == null ? void 0 : ye.z_index), je = Sm(X, ce, ye).map((Fe, $e) => ({
        ...Fe,
        z_index: Number.isFinite(Me) ? Me + $e * 1e-3 : C + $e * 1e-3
      }));
      return je.length && (C = Math.max(C, ...je.map((Fe) => Number((Fe == null ? void 0 : Fe.z_index) || 0))) + 1), je;
    }
    for (const X of jt()) {
      const ce = String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim();
      if (!ce) continue;
      const ye = xn(ce, "paint");
      if (!W(ee(X, ye))) {
        b.push(X), _.push(...ye);
        continue;
      }
      const Me = ((Oe = (Ae = u.paintEngine) == null ? void 0 : Ae.getGroupTarget) == null ? void 0 : Oe.call(Ae, ce)) || null, je = ((Ne = Me == null ? void 0 : Me.committedPaint) == null ? void 0 : Ne.canvas) || null;
      if (!je) {
        b.push(X), _.push(...ye);
        continue;
      }
      const Fe = re(je);
      if (!Fe.touched || !Fe.canvas) {
        b.push(X), _.push(...ye);
        continue;
      }
      M = !0;
      const $e = pe(Fe.canvas, "paint", g.get(ce) || X || {});
      x.push(...$e);
    }
    for (const X of en().filter((ce) => String((ce == null ? void 0 : ce.layerKind) || "paint") === "paint")) {
      if (!W(z(X))) {
        x.push(X);
        continue;
      }
      const ce = Kc(X, null);
      if (!ce) {
        x.push(X);
        continue;
      }
      const ye = re(ce);
      if (!ye.touched || !ye.canvas) {
        x.push(X);
        continue;
      }
      M = !0;
      const Me = pe(ye.canvas, "paint", X);
      x.push(...Me);
    }
    return M ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((X, ce) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0)), p.painting.raster_objects = x.sort((X, ce) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0)), Jr({ preservePanelValues: !1 }), !0) : !1;
  }
  function sg(r) {
    var g, _, b, x;
    const o = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!o) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = js(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), og(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Ac((b = r.stroke) == null ? void 0 : b.actionGroupId), oi(r.layerKind).push(r.stroke), !0);
    const m = o.rawPoints || o.points || [];
    return m.length < 1 ? !1 : (o.processedPoints = js(m, r.stroke.targetSpace, !0), l && Ac((x = r.stroke) == null ? void 0 : x.actionGroupId), oi(r.layerKind).push(r.stroke), !0);
  }
  function vu(r) {
    var s;
    if (t === "cutout" && u.mode === "frame") {
      const l = Ge(), m = Bt(l);
      if (!l || !m || !(Number((r == null ? void 0 : r.x) || 0) >= Number(m.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(m.x || 0) + Number(m.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(m.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(m.y || 0) + Number(m.h || 0))) return null;
      const _ = Mn(r, l, performance.now()), b = _ ? ni(_) : null;
      if (b)
        for (const M of Vs()) {
          if (!bt(M)) continue;
          const C = Hi(M, b);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const P = Et(M);
            if (P != null && P.visible) return { item: M, geom: P };
          }
        }
      const x = _s(!1).slice().sort((M, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of x) {
        if (M.type === "strokeGroup") {
          const D = qr(Ti("paint", M.actionGroupId || M.id || ""));
          if (!D) continue;
          const V = Et(D);
          if (!(V != null && V.visible)) continue;
          const ee = Array.isArray(V.strokePaths) ? V.strokePaths : [];
          for (const z of ee) {
            const W = Array.isArray(z == null ? void 0 : z.points) ? z.points : [];
            if (!W.length) continue;
            if (z.closed && W.length >= 3 && Zn(r, W)) return { item: D, geom: V };
            const re = Math.max(8, Number((z == null ? void 0 : z.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < W.length - 1; pe += 1)
              if (xl(r, W[pe], W[pe + 1]) <= re * re) return { item: D, geom: V };
            if (W.length === 1 && gr(r, W[0]) <= re * re) return { item: D, geom: V };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const D = Wr(Ei(((s = M.item) == null ? void 0 : s.id) || M.id || ""));
          if (!D) continue;
          const V = Et(D);
          if (Gc(D, V, r, _)) return { item: D, geom: V };
          continue;
        }
        const C = M.item;
        if (!C || !bt(C) || !b) continue;
        const P = Hi(C, b);
        if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
          const D = Et(C);
          if (D != null && D.visible) return { item: C, geom: D };
        }
      }
      return null;
    }
    const o = [
      ..._s(!1).slice().sort((l, m) => Number((m == null ? void 0 : m.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var m;
        return l.type === "strokeGroup" ? qr(Ti("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Wr(Ei(((m = l.item) == null ? void 0 : m.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? Vs().filter((l) => un(l)) : []
    ];
    for (const l of o) {
      if (kt(l)) {
        const g = Et(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of _) {
          const x = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!x.length) continue;
          if (b.closed && x.length >= 3 && Zn(r, x)) return { item: l, geom: g };
          const M = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < x.length - 1; C += 1)
            if (xl(r, x[C], x[C + 1]) <= M * M) return { item: l, geom: g };
          if (x.length === 1 && gr(r, x[0]) <= M * M) return { item: l, geom: g };
        }
        continue;
      }
      if (zt(l)) {
        const g = Et(l);
        if (!(g != null && g.visible)) continue;
        if (Gc(l, g, r)) return { item: l, geom: g };
        continue;
      }
      const m = Et(l);
      if (m.visible && Zn(r, m.corners))
        return { item: l, geom: m };
    }
    return null;
  }
  function Ws(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((g) => gr(g, o) <= 121);
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
          if (xl(o, _[x], _[x + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((m) => gr(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], g = m.x - r.center.x, _ = m.y - r.center.y, b = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((m) => gr(m, o) <= 169);
      if (l) {
        const m = l.edge === "left" || l.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => gr(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], m = l.x - r.center.x, g = l.y - r.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return gr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
  }
  function bu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function lg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function cg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((m) => lg(r, m))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!Zn({ x: s, y: l }, o.corners);
  }
  function pt(r) {
    if (eg(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? te("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? te("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? te("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? te(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? te("grabbing") : te("default");
      return;
    }
    if (gu()) {
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
    const o = lt(), s = o ? Et(o) : null, l = o ? cr(o) : !1, m = l ? { kind: "none", cursor: "default" } : Ws(s, r);
    if (!l && m.kind !== "none") {
      te(m.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && vu(r)) {
      te("default");
      return;
    }
    te(u.mode === "pano" ? "grab" : "default");
  }
  function ze() {
    var m, g;
    if (!$) return;
    const r = lt(), o = wn();
    if (!r && o.length === 0 || u.interaction) {
      S.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ea(), l = Qb({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Ss(o) : Et(r),
      allLocked: Ns(o),
      selectedLocked: cr(r),
      activeAspect: qi(r),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: Tt,
      isStickerHidden: Yr,
      canRestoreSelectedToInitial: hp,
      iconSet: Rt
    });
    if (!l.visible) {
      S.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    S.selectionMenu = {
      visible: !0,
      left: ((m = S.selectionMenu) == null ? void 0 : m.left) ?? l.left ?? 0,
      top: ((g = S.selectionMenu) == null ? void 0 : g.top) ?? l.top ?? 0,
      items: l.items
    }, requestAnimationFrame(() => {
      var D, V, ee;
      if (!$ || S.selectionMenu.visible !== !0) return;
      const _ = $.getBoundingClientRect(), b = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, x = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40, M = 14;
      let C = q((Number(((D = l.anchor) == null ? void 0 : D.minX) || 0) + Number(((V = l.anchor) == null ? void 0 : V.maxX) || 0)) * 0.5 - b * 0.5, M, I.width - b - M), P = Number(((ee = l.anchor) == null ? void 0 : ee.maxY) || 0) + 18;
      if (!Number.isFinite(C) || !Number.isFinite(P) || P + x > I.height - M) {
        S.selectionMenu.visible = !1;
        return;
      }
      S.selectionMenu.left = C, S.selectionMenu.top = P;
    });
  }
  function Xa() {
    Z.timer && (clearTimeout(Z.timer), Z.timer = 0), Z.target = null, S.tooltip.visible = !1, S.tooltip.text = "", S.tooltip.variant = "";
  }
  function ug(r) {
    if (!ne || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    S.tooltip.text = o, S.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var ee, z;
      if (Z.target !== s || !ne || !(s != null && s.isConnected)) return;
      const l = J.getBoundingClientRect(), m = s.getBoundingClientRect(), g = 8, _ = 12, b = Math.round(Number(((ee = ne.getBoundingClientRect()) == null ? void 0 : ee.width) || 0)) || 100, x = Math.round(Number(((z = ne.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, M = !!s.closest(".pano-floating-left"), C = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let P = "", D = m.left - l.left + m.width * 0.5 - b * 0.5, V = m.top - l.top - x - _;
      if (M)
        P = "tool-rail", D = m.right - l.left + 10, V = m.top - l.top + m.height * 0.5 - x * 0.5, D = q(D, g, Math.max(g, l.width - b - g)), V = q(V, g, Math.max(g, l.height - x - g));
      else if (C) {
        P = "footer";
        const W = s.closest(".pano-paint-footer"), re = W ? W.getBoundingClientRect() : m;
        D = re.left - l.left + re.width * 0.5 - b * 0.5, V = re.bottom - l.top + 5, D = q(D, g, Math.max(g, l.width - b - g)), V = Math.max(g, V);
      }
      D = q(D, g, Math.max(g, l.width - b - g)), V = Math.max(g, V), S.tooltip.left = D, S.tooltip.top = V, S.tooltip.variant = P, S.tooltip.visible = !0;
    });
  }
  const Lt = ds({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (r) => {
      u.viewYaw = Ft(Number(r.yaw || 0)), u.viewPitch = q(Number(r.pitch || 0), -89.9, 89.9), u.viewFov = q(Number(r.fov || u.viewFov || 100), 35, 140);
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
        x: (r = p.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = p.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: fr,
    onInteraction: () => {
      B.backgroundDirty = !0, B.dirty = !0;
    }
  });
  I.onpointerdown = (r) => {
    const o = ai(r);
    if (qa(o, !0), u.viewTween = null, Lt.state.inertia.active = !1, Lt.state.inertia.vx = 0, Lt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), u.mode === "frame")
        u.interaction = { kind: "pan_frame", last: o };
      else {
        const b = u.mode === "unwrap" ? o : Wa(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now());
      }
      pt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (u.mode === "pano") {
        const b = Wa(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now()), pt(o), I.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (we && !we.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (pu() || Ks())) {
      const b = u.primaryTool === "mask" ? "mask" : "paint", x = u.primaryTool === "mask" ? u.maskTool : u.paintTool, M = u.mode === "frame" && Ks() ? Ge() : null, C = { kind: "ERP_GLOBAL" }, P = M ? Mn(o, M, performance.now()) : Nn(o, performance.now());
      u.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: fi("live"),
        stroke: x === "lasso_fill" ? rg(b, x, [P], C) : ng(b, x, [P], C)
      }, Ri();
      const D = qn();
      if (D)
        if (u.paintEngine.beginStroke(u.interaction.stroke, D), u.interaction.kind === "paint_stroke") {
          const V = u.paintEngine.ensureTarget(D), ee = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), z = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          u.paintEngine.appendStrokePoint(V, ee, z, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, D);
      pt(o), I.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = wn(), l = lt(), m = s.length > 1 ? Ss(s) : l ? Et(l) : null;
    if (u.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      u.interaction = { kind: "marquee_select", start: o, current: o }, pt(o), I.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (m != null && m.visible)) {
      if ((s.some((x) => cr(x)) ? { kind: "none" } : Ws(m, o)).kind === "move") {
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
              var C, P;
              const M = Et(x);
              return M != null && M.visible ? { x: Number(((C = M.center) == null ? void 0 : C.x) || 0), y: Number(((P = M.center) == null ? void 0 : P.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => kt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Ut(xn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Ut(lr(x.actionGroupId, x.layerKind)),
            center: (() => {
              var C, P;
              const M = Et(x);
              return M != null && M.visible ? { x: Number(((C = M.center) == null ? void 0 : C.x) || 0), y: Number(((P = M.center) == null ? void 0 : P.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ws(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => zt(x)).map((x) => ({
            id: At(x.rasterObjectId || x.id || ""),
            snapshot: Ut(en().find((M) => String((M == null ? void 0 : M.id) || "") === At(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var C, P;
              const M = Et(x);
              return M != null && M.visible ? { x: Number(((C = M.center) == null ? void 0 : C.x) || 0), y: Number(((P = M.center) == null ? void 0 : P.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Zc(x)
          }))
        }, pt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (m != null && m.visible)) {
      const b = cr(l) ? { kind: "none" } : Ws(m, o);
      if (b.kind === "scale") {
        u.interaction = kt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: m.center,
          startDist: Math.max(1, Math.hypot(o.x - m.center.x, o.y - m.center.y)),
          snapshot: Ut(xn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ut(lr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : zt(l) ? {
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
        }, pt(o), I.setPointerCapture(r.pointerId);
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
        }, pt(o), I.setPointerCapture(r.pointerId);
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
        }, pt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (kt(l)) {
          const x = u.mode === "frame" ? (() => {
            const M = Ge();
            return M ? Mn(o, M, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: Ut(xn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ut(lr(l.actionGroupId, l.layerKind))
          }, pt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        if (zt(l)) {
          const x = u.mode === "frame" ? (() => {
            const M = Ge();
            return M ? Mn(o, M, performance.now()) : null;
          })() : Nn(o, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: Ut(en().find((M) => String((M == null ? void 0 : M.id) || "") === At(l.rasterObjectId || l.id || "")))
          }, pt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - m.center.x, y: o.y - m.center.y }
        }, pt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = vu(o);
    if (g) {
      const b = u.selectedId !== g.item.id;
      if (b && u.selectedId && (ut(), gn()), Cr(g.item), t === "cutout" && b && (u.cutoutAspectOpen = !1), b && He(), ze(), ge(), cr(g.item)) {
        pt(o);
        return;
      }
      u.interaction = {
        kind: kt(g.item) ? "move_stroke_group" : zt(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: o.x - g.geom.center.x, y: o.y - g.geom.center.y },
        startUv: kt(g.item) || zt(g.item) ? u.mode === "frame" ? (() => {
          const x = Ge();
          return x ? Mn(o, x, performance.now()) : null;
        })() : Nn(o, performance.now()) : null,
        snapshot: kt(g.item) ? Ut(xn(g.item.actionGroupId, g.item.layerKind)) : zt(g.item) ? Ut(en().find((x) => String((x == null ? void 0 : x.id) || "") === At(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: kt(g.item) ? Ut(lr(g.item.actionGroupId, g.item.layerKind)) : null
      }, pt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!u.selectedId;
    if (_ && (ut(), gn()), Jr(), _ && He(), ze(), ge(), u.mode === "pano") {
      const b = Wa(r);
      u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now()), pt(o), I.setPointerCapture(r.pointerId);
    }
  }, I.onpointermove = (r) => {
    var l, m, g, _, b, x, M, C, P, D, V, ee, z, W, re, pe, ae, ve, Ae, Oe;
    const o = ai(r);
    if (qa(o, !0), !u.interaction) {
      pt(o);
      return;
    }
    pt(o);
    const s = u.interaction;
    if (s.kind === "paint_stroke") {
      const Ne = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      Ne.forEach((ce) => {
        const ye = ai(ce);
        ig(s, ye, performance.now()) && (X = !0);
      }), X && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Ne = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      if (Ne.forEach((ce) => {
        const ye = ai(ce);
        ag(s, ye, performance.now()) && (X = !0);
      }), X) {
        const ce = qn();
        ce && u.paintEngine.updateActiveStroke(s.stroke, ce), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Ne = performance.now(), X = u.mode === "unwrap" ? o : Wa(r);
      Lt.moveDrag(X.x, X.y, u.mode === "unwrap" ? "unwrap" : "pano", Ne), s.lastTs = Ne, s.last = X, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      u.frameView.panX += o.x - s.last.x, u.frameView.panY += o.y - s.last.y, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const Ne = o.x - s.offset.x, X = o.y - s.offset.y;
      if (u.mode === "frame" && t === "cutout") {
        const ce = Ge(), ye = Bt(ce);
        if (!ce || !ye) return;
        const Me = {
          x: q((Ne - ye.x) / Math.max(1, ye.w), 0, 1),
          y: q((X - ye.y) / Math.max(1, ye.h), 0, 1)
        }, je = Hs(ce, Me);
        if (!je) return;
        const Fe = mo(je);
        s.item.yaw_deg = Fe.yaw, s.item.pitch_deg = Fe.pitch;
      } else if (u.mode === "unwrap") {
        const ce = fr(), ye = q((Ne - ce.x) / Math.max(ce.w, 1), 0, 1), Me = q((X - ce.y) / Math.max(ce.h, 1), 0, 1);
        s.item.yaw_deg = Ft(ye * 360 - 180), s.item.pitch_deg = q(90 - Me * 180, -90, 90);
      } else {
        const ce = Ts(Ne, X), ye = mo(ce);
        s.item.yaw_deg = ye.yaw, s.item.pitch_deg = ye.pitch;
      }
      bt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Ne = u.mode === "frame" ? (() => {
        const ye = Ge();
        return ye ? Mn(o, ye, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Ne || !s.startUv) return;
      const X = mn(Number(Ne.u || 0), Number(s.startUv.u || 0)), ce = Number(Ne.v || 0) - Number(s.startUv.v || 0);
      Tc((l = s.item) == null ? void 0 : l.actionGroupId, X, ce, s.snapshot, (m = s.item) == null ? void 0 : m.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Ne = u.mode === "frame" ? (() => {
        const ye = Ge();
        return ye ? Mn(o, ye, performance.now()) : null;
      })() : Nn(o, performance.now());
      if (!Ne || !s.startUv) return;
      const X = mn(Number(Ne.u || 0), Number(s.startUv.u || 0)), ce = Number(Ne.v || 0) - Number(s.startUv.v || 0);
      Dc(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", X, ce, s.snapshot) && (ii(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      tp(((b = s.item) == null ? void 0 : b.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", X, s.snapshot) && (ii(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Ne = o.x - Number(((M = s.offset) == null ? void 0 : M.x) || 0), X = o.y - Number(((C = s.offset) == null ? void 0 : C.y) || 0);
      let ce = !1, ye = !1, Me = !1;
      const je = Ne - Number(((P = s.startCenter) == null ? void 0 : P.x) || Ne), Fe = X - Number(((D = s.startCenter) == null ? void 0 : D.y) || X);
      for (const $e of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const We = (t === "cutout" ? xs() : Gn()).find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === String($e.id || ""));
        if (!We || !bt(We)) continue;
        const Ke = {
          x: Number(((V = $e.center) == null ? void 0 : V.x) || 0) + je,
          y: Number(((ee = $e.center) == null ? void 0 : ee.y) || 0) + Fe
        };
        if (u.mode === "frame" && t === "cutout") {
          const Ye = Ge(), St = Bt(Ye);
          if (!Ye || !St) continue;
          const Ir = {
            x: q((Ke.x - St.x) / Math.max(1, St.w), 0, 1),
            y: q((Ke.y - St.y) / Math.max(1, St.h), 0, 1)
          }, Eu = Hs(Ye, Ir);
          if (!Eu) continue;
          const Du = mo(Eu);
          We.yaw_deg = Du.yaw, We.pitch_deg = Du.pitch;
        } else if (u.mode === "unwrap") {
          const Ye = fr(), St = q((Ke.x - Ye.x) / Math.max(Ye.w, 1), 0, 1), Ir = q((Ke.y - Ye.y) / Math.max(Ye.h, 1), 0, 1);
          We.yaw_deg = Ft(St * 360 - 180), We.pitch_deg = q(90 - Ir * 180, -90, 90);
        } else {
          const Ye = Ts(Ke.x, Ke.y), St = mo(Ye);
          We.yaw_deg = St.yaw, We.pitch_deg = St.pitch;
        }
        ce = !0;
      }
      for (const $e of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const We = {
          x: Number(((z = $e.center) == null ? void 0 : z.x) || 0) + je,
          y: Number(((W = $e.center) == null ? void 0 : W.y) || 0) + Fe
        }, Ke = u.mode === "frame" ? (() => {
          const St = Ge();
          return St ? Mn(We, St, performance.now()) : null;
        })() : Nn(We, performance.now()), Ye = $e.centerUv || null;
        if (Ke && Ye) {
          const St = mn(Number(Ke.u || 0), Number(Ye.u || 0)), Ir = Number(Ke.v || 0) - Number(Ye.v || 0);
          Tc($e.id, St, Ir, $e.snapshot, $e.layerKind, $e.frameSnapshot) && (ce = !0, ye = !0);
        }
      }
      for (const $e of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const We = {
          x: Number(((re = $e.center) == null ? void 0 : re.x) || 0) + je,
          y: Number(((pe = $e.center) == null ? void 0 : pe.y) || 0) + Fe
        }, Ke = u.mode === "frame" ? (() => {
          const St = Ge();
          return St ? Mn(We, St, performance.now()) : null;
        })() : Nn(We, performance.now()), Ye = $e.centerUv || null;
        if (Ke && Ye) {
          const St = mn(Number(Ke.u || 0), Number(Ye.u || 0)), Ir = Number(Ke.v || 0) - Number(Ye.v || 0);
          Dc($e.id, St, Ir, $e.snapshot) && (ce = !0, Me = !0);
        }
      }
      ce && (ye ? Sn({ rebuildPaintEngine: !1 }) : Me ? ii() : Dt(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Ec((ae = s.item) == null ? void 0 : ae.actionGroupId, X, 0, s.snapshot, (ve = s.item) == null ? void 0 : ve.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Ne = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * br;
      r.shiftKey && (Ne = Math.round(Ne / 45) * 45), Ec((Ae = s.item) == null ? void 0 : Ae.actionGroupId, 1, Ne, s.snapshot, (Oe = s.item) == null ? void 0 : Oe.layerKind, s.frameSnapshot) && (Sn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * X, 1, 179), s.item.vFOV_deg = q(s.startVFOV * X, 1, 179), s.item.aspect_id = Fr(s.item), bt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = q(s.startHFOV * X, 1, 179), s.item.aspect_id = Fr(s.item), bt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = q(s.startVFOV * X, 1, 179), s.item.aspect_id = Fr(s.item), bt(s.item) && Dt(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let X = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * br, ce = s.startRot - X;
      r.shiftKey && (ce = Math.round(ce / 45) * 45);
      const ye = bt(s.item) ? "rot_deg" : "roll_deg";
      s.item[ye] = ce, bt(s.item) && Dt(), ge({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var o, s, l, m, g, _;
    const r = u.interaction;
    if (((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (Ri(), sg(u.interaction)) {
        Sn();
        const b = String(((l = u.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const M = jt().find((C) => String((C == null ? void 0 : C.actionGroupId) || "") === b);
          M && (M.frame = null);
        }
        const x = qn();
        x && (String(((m = u.interaction.stroke) == null ? void 0 : m.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(x), ru()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, x)), ut(), gn(), He(), ze(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const b = qn();
        b && u.paintEngine.cancelActiveStroke(b);
      }
    else if (((g = u.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = bu(u.interaction.start, u.interaction.current), M = [
        ...t === "cutout" ? Vs().filter((C) => !un(C)) : [...Gn()],
        ...Zh(),
        ...Jh()
      ].filter((C) => cg(b, Et(C)));
      ap(M, ((_ = M[M.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && M.length && (u.cutoutAspectOpen = !1), He(), ze(), ge();
    } else if (u.interaction && u.interaction.kind !== "view" && u.interaction.kind !== "pan_frame") {
      let b = !1;
      (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (b = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Sn({ rebuildPaintEngine: !0 }) : ii()), ut(), gn(), e.setDirtyCanvas(!0, !0), Us(), u.hqFrames = 1, ze(), ge();
    }
    u.interaction = null, Ri(), r && r.kind === "view" && Lt.endDrag(performance.now()), La(), ze(), pt(u.pointerPos), ge();
  }, I.onpointercancel = () => {
    var r, o, s;
    if (((r = u.interaction) == null ? void 0 : r.kind) === "view" && Lt.endDrag(performance.now()), ((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Ri();
      const l = qn();
      l && u.paintEngine.cancelActiveStroke(l);
    }
    u.interaction = null, Ri(), La(), pt(u.pointerPos), ge({ localOnly: !0 });
  }, I.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, I.onmousemove = (r) => {
    const o = ai(r);
    qa(o, !0), !u.interaction && pt(o);
  }, I.onmouseleave = () => {
    qa(u.pointerPos, !1), pt(u.pointerPos);
  }, I.onwheel = (r) => {
    if (u.mode === "frame") {
      const o = ai(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Zm(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    u.mode === "pano" && (Lt.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, I.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Pr(!0));
  }, I.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), me.depth = 0, Pr(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((m) => Ga(m));
    s && cu(s);
  };
  const yu = (r) => {
    t !== "stickers" && t !== "cutout" || i || gs(r) && (me.depth += 1, Pr(!0), r.preventDefault());
  }, _u = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!me.active && gs(r) && Pr(!0), me.active && r.preventDefault());
  }, xu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !me.active) return;
    me.depth = Math.max(0, me.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (me.depth === 0 || o) && Pr(!1);
  }, wu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (me.depth = 0, Pr(!1), gs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", yu, !0), window.addEventListener("dragover", _u, !0), window.addEventListener("dragleave", xu, !0), window.addEventListener("drop", wu, !0);
  function qs() {
    const { canUndo: r, canRedo: o } = lu();
    Wi(S.toolButtons, "value", "undo", { disabled: !r }), Wi(S.toolButtons, "value", "redo", { disabled: !o });
  }
  const Su = (r, o, s = !1) => {
    var b;
    const l = lt(), m = Ea();
    if (!l || m === "stroke") return;
    const g = (((b = S.sidePanel) == null ? void 0 : b.params) || []).find((x) => x.key === r);
    if (!g || g.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = q(_, Number(g.min), Number(g.max)), r === "yaw_deg" && (_ = Ft(_)), l[r] = _, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (l.aspect_id = Fr(l)), He(), ge(), s && ut();
  };
  fe == null || fe.addEventListener("click", async (r) => {
    var l, m, g, _, b, x, M, C, P;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const D = Ot(o.getAttribute("data-coverage"));
      if (D === Ot(p.coverage)) return;
      p.coverage = D, u.coverage = D, h && (h.value = String(D)), c ? B.backgroundDirty = !0 : (gn(), Xm({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), ze(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((m = (l = S.sidePanel) == null ? void 0 : l.selectionPicker) != null && m.disabled) return;
      S.sidePanel.selectionPicker.open = !S.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      S.sidePanel.selectionPicker.open = !1;
      const D = String(o.getAttribute("data-selection-id") || "");
      let V = null;
      D && (t === "stickers" ? V = Gn().find((ee) => String((ee == null ? void 0 : ee.id) || "") === D) || null : V = ((g = Lc().find((ee) => {
        var z;
        return String(((z = ee == null ? void 0 : ee.item) == null ? void 0 : z.id) || "") === D;
      })) == null ? void 0 : g.item) || null), Cr(V || null), V && !kt(V) && vs(
        Ft(Number(V.yaw_deg || 0)),
        q(Number(V.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), ze(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const D = lt(), V = Ea();
      if (!D || V === "stroke" || wn().length > 1) return;
      const ee = JSON.stringify(t === "cutout" && V !== "image" ? zc(D) : yp(D));
      try {
        await navigator.clipboard.writeText(ee), (_ = S.sidePanel) != null && _.copyStateButton && (S.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var z;
          (z = S.sidePanel) != null && z.copyStateButton && (S.sidePanel.copyStateButton.label = "Copy State");
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
      p.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Ka(), He(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      p.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Ka(), He(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (M = S.sidePanel) != null && M.uiSettings && (S.sidePanel.uiSettings.qualityOpen = !S.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const D = String(o.getAttribute("data-quality") || "balanced");
      p.ui_settings.preview_quality = D === "draft" || D === "high" ? D : "balanced", Ka(), He(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Ka(), He(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      li();
      return;
    }
    if (s === "cancel-close") {
      li();
      return;
    }
    s === "save-close" && (qm(), li());
  }), fe == null || fe.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Su(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), fe == null || fe.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Su(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Ys = () => {
    const r = !!u.showGrid;
    Wi(S.floatingButtons, "action", "toggle-grid", {
      icon: r ? Rt.eye : Rt.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Ys(), T.addEventListener("click", (r) => {
    var b, x, M, C;
    if ((x = (b = r.target) == null ? void 0 : b.matches) != null && x.call(b, "[data-confirm-overlay]")) {
      const P = (M = S.confirmDialog) == null ? void 0 : M.resolve;
      S.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, P == null || P(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      u.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && u.mode === "frame" && lt() && un(lt()) && (Jr({ preservePanelValues: !0 }), He(), ze()), Gs(), La(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const P = String(s.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = P, (P === "paint" || P === "mask") && Jr({ preservePanelValues: !0 }), tn(), He(), ze(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const P = String(s.getAttribute("data-tool-ui-action") || "");
        if ((P === "undo" || P === "redo") && s.disabled) return;
        P === "undo" ? Bs(-1) : P === "redo" ? Bs(1) : P === "clear" ? zm() : P === "add" || P === "add-image" ? Lm() : P === "add-or-look" && Vm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const P = String(s.getAttribute("data-paint-tool") || "pen");
        u.paintTool = P, Jr({ preservePanelValues: !0 }), nn[P] && (u.activeBrushPresetId = P), tn(), He(), ze(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Jr({ preservePanelValues: !0 }), tn(), He(), ze(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const P = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        $m(P);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const P = Ao.find((D) => D.id === s.getAttribute("data-paint-color-swatch"));
        if (!P) return;
        u.paintColor = fn(P.color), Ct(!0), tn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), we && !we.hidden ? Ct(!0) : pn(), tn();
        return;
      }
    }
    const l = String(((C = s == null ? void 0 : s.getAttribute) == null ? void 0 : C.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      if (Zr(), H.paused) {
        j.mode = "playback", j.pendingPlaybackResume = !1, j.resumeAfterScrub = !1;
        const P = Number(S.videoTransport.duration || H.duration || 0), D = Number(H.currentTime || j.editorTime || 0), V = P > 0 && D >= P - 1e-3 ? 0 : Number(j.editorTime || D || 0), ee = Math.max(ft(), 0.04);
        j.editorTime = V, Math.abs(D - V) > ee ? (j.seeking = !1, j.pendingPlaybackResume = !0, Ps(V)) : H.play().catch(() => {
        });
      } else
        H.pause(), j.mode = "scrub", j.resumeAfterScrub = !1, j.pendingPlaybackResume = !1, j.editorTime = Number(H.currentTime || 0), Xr();
      Kn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: S.videoTransport.duration,
        frameCount: S.videoTransport.frameCount,
        fps: S.videoTransport.fps,
        mode: j.mode
      }), ge({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement) || !S.videoTransport.hasAudio) return;
      const P = !H.muted;
      H.muted = P, !P && Number(H.volume || 0) <= 0 && (H.volume = Math.max(0.01, Number(S.videoTransport.volume || 1))), Kn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: S.videoTransport.duration,
        frameCount: S.videoTransport.frameCount,
        fps: S.videoTransport.fps,
        mode: j.mode,
        hasAudio: S.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? S.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (l === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, ze(), ge();
        return;
      }
      if (l === "aspect-set") {
        const P = lt();
        if (!P) return;
        const D = String(s.getAttribute("data-aspect") || "1:1");
        Um(P, D), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Us(), ut(), yt(), ze(), ge();
        return;
      }
      if (l === "rotate-90") {
        const P = lt();
        if (!P) return;
        Gm(P), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, Us(), ut(), yt(), ze(), ge();
        return;
      }
      if (l === "bring-front") {
        Km();
        return;
      }
      if (l === "send-back") {
        Wm();
        return;
      }
      if (l === "duplicate") {
        Bm();
        return;
      }
      if (l === "replace-image") {
        Om();
        return;
      }
      if (l === "toggle-lock") {
        ip();
        return;
      }
      if (l === "back-initial") {
        fp();
        return;
      }
      if (l === "toggle-visible") {
        up();
        return;
      }
      if (l === "delete") {
        du();
        return;
      }
    }
    if (l === "reset-view") {
      vs(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      u.showGrid = !u.showGrid, Sx(e == null ? void 0 : e.id, u.showGrid), Ys(), ge();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), hg();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const P = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = P, u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = P ? 1 : 0, u.outputPreviewAnimStartTs = performance.now(), Cu(), ge();
      return;
    }
    const m = r.target.closest("[data-paint-history-index]");
    if (!m) return;
    const g = Number(m.getAttribute("data-paint-history-index")), _ = u.customPaintHistory[g];
    _ && (u.customPaintColor = fn(_), u.paintColor = fn(_), tn());
  }), T.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(H instanceof HTMLVideoElement)) return;
      Zr();
      const g = q(Number(o.value || 0), 0, Number(S.videoTransport.duration || 0));
      j.mode = "scrub", !j.seeking && !H.paused && !H.ended && (j.resumeAfterScrub = !0, H.pause()), j.editorTime = g, Ii(g), Kn({
        ready: !!H.getAttribute("src"),
        playing: !1,
        visible: ur(),
        currentTime: g,
        duration: S.videoTransport.duration,
        frameCount: S.videoTransport.frameCount,
        fps: S.videoTransport.fps,
        mode: "scrub"
      }), Number(Y.__panoFrameIdx || 0) > 0 && (B.backgroundDirty = !0, B.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), Ps(g);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(H instanceof HTMLVideoElement)) return;
      const g = q(Number(s.value || 0), 0, 1);
      H.volume = g, H.muted = g <= 1e-4, Kn({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ur(),
        currentTime: j.editorTime,
        duration: S.videoTransport.duration,
        frameCount: S.videoTransport.frameCount,
        fps: S.videoTransport.fps,
        mode: j.mode,
        hasAudio: S.videoTransport.hasAudio,
        muted: H.muted,
        volume: g
      });
      return;
    }
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const g = Math.max(1, Math.min(120, Math.round(Number(l.value)))), _ = hr(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[_] = g, tn(), tg();
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
      if (!(H instanceof HTMLVideoElement)) return;
      j.pendingPlaybackResume = !!j.resumeAfterScrub, j.resumeAfterScrub = !1, j.pendingPlaybackResume || (j.mode = "scrub"), j.seeking || (j.pendingPlaybackResume ? (j.pendingPlaybackResume = !1, j.mode = "playback", H.play().catch(() => {
      })) : (Xr(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ya();
  }), T.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ya();
  }), T.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ya();
  }), T.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Ya();
  }), T.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !T.contains(o) || Z.target !== o && (Z.target = o, Z.timer && clearTimeout(Z.timer), Z.timer = window.setTimeout(() => {
      Z.target === o && ug(o);
    }, 220));
  }), T.addEventListener("pointerout", (r) => {
    var l, m;
    const o = r.target.closest("[data-tip]");
    !o || Z.target !== o || (r.relatedTarget instanceof Element ? (m = (l = r.relatedTarget).closest) == null ? void 0 : m.call(l, "[data-tip]") : null) === o || Xa();
  }), T.addEventListener("pointerdown", () => {
    Xa();
  });
  const fg = (r, o) => {
    var b;
    if (!Ee) return;
    const s = Ee.getBoundingClientRect(), l = q((r - s.left) / Math.max(1, s.width), 0, 1), m = 1 - q((o - s.top) / Math.max(1, s.height), 0, 1), g = Sl(u.customPaintColor), _ = { ...wl(g.h, l, m), a: Number(((b = u.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    u.customPaintColor = fn(_), u.paintColor = fn(_), tn();
  }, dg = (r) => {
    var g;
    if (!Ue) return;
    const o = Ue.getBoundingClientRect(), s = q((r - o.left) / Math.max(1, o.width), 0, 1), l = Sl(u.customPaintColor), m = { ...wl(s, l.s, l.v), a: Number(((g = u.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    u.customPaintColor = fn(m), u.paintColor = fn(m), tn();
  }, Nu = (r, o) => {
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
    r.preventDefault(), r.stopPropagation(), Nu(r, (o) => fg(o.clientX, o.clientY));
  }), Ue && (Ue.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Nu(r, (o) => dg(o.clientX));
  }), T.addEventListener("click", (r) => {
    var m;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (m = S.confirmDialog) == null ? void 0 : m.resolve;
    S.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const Mu = () => {
    const r = !!u.fullscreen;
    Wi(S.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Rt.fullscreen_close : Rt.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Za = (r) => {
    const o = !!r;
    u.fullscreen !== o && (u.fullscreen = o, T.classList.toggle("pano-modal-fullscreen", o), o ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Ys(), Mu(), ge());
  }, ku = () => document.fullscreenElement === R, hg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Za(!u.fullscreen);
        return;
      }
      ku() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = R.requestFullscreen) == null ? void 0 : r.call(R));
    } catch {
      Za(!u.fullscreen);
    }
  }, Pu = () => {
    document.fullscreenEnabled && Za(ku());
  };
  document.addEventListener("fullscreenchange", Pu), Mu();
  const Cu = () => {
    const r = !!u.outputPreviewExpanded;
    S.outputPreviewToggle.icon = r ? Rt.fullscreen_close : Rt.fullscreen, S.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", S.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Cu();
  const Xs = e.onExecuted, Zs = e.onConnectionsChange;
  let Js = null, Qs = null, el = null;
  !i && t === "stickers" && (el = (r = "sync") => {
    $c(r);
  }, e.__panoExternalStickerSync = el, Js = function(...o) {
    var s;
    typeof Xs == "function" && Xs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Js, Qs = function(...o) {
    var s;
    typeof Zs == "function" && Zs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Qs), i || Ff.set(String(e.id ?? "0"), () => qc());
  let si = null;
  const li = async () => si || (si = (async () => {
    var r, o, s, l, m, g, _, b, x, M, C;
    return Ff.delete(String(e.id ?? "0")), i || gn(), document.fullscreenElement === R && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Pu), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (m = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || m.call(l, !0, !0), (b = (_ = (g = xr) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), Xa(), Dm(), H instanceof HTMLVideoElement && H.pause(), ke.forEach((P) => {
      try {
        P();
      } catch {
      }
    }), (x = be == null ? void 0 : be.dispose) == null || x.call(be), (M = F == null ? void 0 : F.unmount) == null || M.call(F), (C = he == null ? void 0 : he.dispose) == null || C.call(he), Pr(!1), window.removeEventListener("keydown", Au, !0), window.removeEventListener("keydown", Iu, !0), window.removeEventListener("keydown", Ja, !0), window.removeEventListener("keyup", Ja, !0), window.removeEventListener("keydown", Tu, !0), window.removeEventListener("dragenter", yu, !0), window.removeEventListener("dragover", _u, !0), window.removeEventListener("dragleave", xu, !0), window.removeEventListener("drop", wu, !0), !i && t === "stickers" && (e.onExecuted === Js && (e.onExecuted = Xs), e.onConnectionsChange === Qs && (e.onConnectionsChange = Zs), e.__panoExternalStickerSync === el && (e.__panoExternalStickerSync = null)), L.unmount(), O.remove(), Ym(), si = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), si = null, !1)), si), Au = (r) => {
    var o, s, l, m;
    if (r.key === "Escape") {
      if (u.fullscreen && document.fullscreenElement === R) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), Za(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), li();
    }
  }, Iu = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = r.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !lt() || (du(), r.preventDefault(), r.stopPropagation());
  }, Ja = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    u.marqueeModifier !== o && (u.marqueeModifier = o, pt(u.pointerPos));
  }, Tu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, m = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (m === "INPUT" || m === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = lu();
    r.shiftKey && !_ || !r.shiftKey && !g || (Bs(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Au, !0), window.addEventListener("keydown", Iu, !0), window.addEventListener("keydown", Ja, !0), window.addEventListener("keyup", Ja, !0), window.addEventListener("keydown", Tu, !0), R.addEventListener("pointerdown", (r) => {
    r.target === R && li();
  }), wp(), !i && t === "stickers" && $c("open"), Fm(), ut(), qs(), tn(), He(), As(), Zr(), su(), pt(u.pointerPos), ge(), B.rafId = requestAnimationFrame($s);
}
function Bf(e, t, n, i) {
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
    var k;
    const y = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === y) return;
    a(v), n === "PanoramaStickers" && Ix(v), Cc(v), Ex(v, Zo);
    const w = vn(v, Zo);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const S = w.callback;
      w.callback = (O) => {
        var R;
        const L = S ? S(O) : void 0;
        return (R = v.setDirtyCanvas) == null || R.call(v, !0, !1), L;
      };
    }
    const N = vn(v, "bg_color");
    if (N && (N.value == null || String(N.value).trim() === "" || String(N.value).toLowerCase() === "#000000") && (N.value = "#00ff00", (k = N.callback) == null || k.call(N, "#00ff00")), n === "PanoramaStickers") {
      Wl(v, i, () => ha(v, "stickers"));
      {
        v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = y;
        return;
      }
    }
    Wl(v, i, () => ha(v, "cutout")), Ib(v, {
      buttonText: i,
      onOpen: () => ha(v, "cutout")
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
function Ux(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
  const i = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    return t.call(this), a;
  };
}
function Gx(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Cc(e), Wl(e, "Open Preview", () => ha(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Ab(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => ha(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
xr.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Bf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Bf(e, t, "PanoramaCutout", "Open Cutout Editor"), jo(n) && Ux(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Cc(e), jo(t) && Gx(e);
  }
});
