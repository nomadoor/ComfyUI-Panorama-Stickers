import * as _o from "../../scripts/app.js";
import { app as hn } from "../../scripts/app.js";
import { api as tn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Gl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const it = {}, vi = [], Vn = () => {
}, ed = () => !1, Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), es = (e) => e.startsWith("onUpdate:"), Xt = Object.assign, Kl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, mg = Object.prototype.hasOwnProperty, Qe = (e, t) => mg.call(e, t), $e = Array.isArray, _i = (e) => Sa(e) === "[object Map]", td = (e) => Sa(e) === "[object Set]", Eu = (e) => Sa(e) === "[object Date]", Ve = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Hn = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", nd = (e) => (tt(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), rd = Object.prototype.toString, Sa = (e) => rd.call(e), gg = (e) => Sa(e).slice(8, -1), id = (e) => Sa(e) === "[object Object]", Wl = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, na = /* @__PURE__ */ Gl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ts = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, bg = /-\w/g, nn = ts(
  (e) => e.replace(bg, (t) => t.slice(1).toUpperCase())
), yg = /\B([A-Z])/g, Wr = ts(
  (e) => e.replace(yg, "-$1").toLowerCase()
), ns = ts((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qs = ts(
  (e) => e ? `on${ns(e)}` : ""
), $n = (e, t) => !Object.is(e, t), el = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ad = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, vg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Du;
const rs = () => Du || (Du = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Nt(i) ? Sg(i) : kt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Nt(e) || tt(e))
    return e;
}
const _g = /;(?![^(]*\))/g, xg = /:([^]+)/, wg = /\/\*[^]*?\*\//g;
function Sg(e) {
  const t = {};
  return e.replace(wg, "").split(_g).forEach((n) => {
    if (n) {
      const i = n.split(xg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function pt(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if ($e(e))
    for (let n = 0; n < e.length; n++) {
      const i = pt(e[n]);
      i && (t += i + " ");
    }
  else if (tt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ng = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mg = /* @__PURE__ */ Gl(Ng);
function od(e) {
  return !!e || e === "";
}
function kg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Yl(e[i], t[i]);
  return n;
}
function Yl(e, t) {
  if (e === t) return !0;
  let n = Eu(e), i = Eu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Hn(e), i = Hn(t), n || i)
    return e === t;
  if (n = $e(e), i = $e(t), n || i)
    return n && i ? kg(e, t) : !1;
  if (n = tt(e), i = tt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), p = t.hasOwnProperty(u);
      if (f && !p || !f && p || !Yl(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const sd = (e) => !!(e && e.__v_isRef === !0), gt = (e) => Nt(e) ? e : e == null ? "" : $e(e) || tt(e) && (e.toString === rd || !Ve(e.toString)) ? sd(e) ? gt(e.value) : JSON.stringify(e, ld, 2) : String(e), ld = (e, t) => sd(t) ? ld(e, t.value) : _i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[tl(i, l) + " =>"] = a, n),
    {}
  )
} : td(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => tl(n))
} : Hn(t) ? tl(t) : tt(t) && !$e(t) && !id(t) ? String(t) : t, tl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cn;
class Pg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = cn, !t && cn && (this.index = (cn.scopes || (cn.scopes = [])).push(
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
      const n = cn;
      try {
        return cn = this, t();
      } finally {
        cn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = cn, cn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (cn = this.prevScope, this.prevScope = void 0);
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
function Ag() {
  return cn;
}
let ot;
const nl = /* @__PURE__ */ new WeakSet();
class cd {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, cn && cn.active && cn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, nl.has(this) && (nl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ru(this), dd(this);
    const t = ot, n = Cn;
    ot = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      hd(this), ot = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jl(t);
      this.deps = this.depsTail = void 0, Ru(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? nl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Sl(this) && this.run();
  }
  get dirty() {
    return Sl(this);
  }
}
let ud = 0, ra, ia;
function fd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ia, ia = e;
    return;
  }
  e.next = ra, ra = e;
}
function ql() {
  ud++;
}
function Xl() {
  if (--ud > 0)
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
function dd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function hd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Jl(i), Cg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Sl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (pd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function pd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pa) || (e.globalVersion = pa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Sl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ot, i = Cn;
  ot = e, Cn = !0;
  try {
    dd(e);
    const a = e.fn(e._value);
    (t.version === 0 || $n(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = n, Cn = i, hd(e), e.flags &= -3;
  }
}
function Jl(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Jl(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = !0;
const md = [];
function rr() {
  md.push(Cn), Cn = !1;
}
function ir() {
  const e = md.pop();
  Cn = e === void 0 ? !0 : e;
}
function Ru(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ot;
    ot = void 0;
    try {
      t();
    } finally {
      ot = n;
    }
  }
}
let pa = 0;
class Ig {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Cn || ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ot)
      n = this.activeLink = new Ig(ot, this), ot.deps ? (n.prevDep = ot.depsTail, ot.depsTail.nextDep = n, ot.depsTail = n) : ot.deps = ot.depsTail = n, gd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ot.depsTail, n.nextDep = void 0, ot.depsTail.nextDep = n, ot.depsTail = n, ot.deps === n && (ot.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, pa++, this.notify(t);
  }
  notify(t) {
    ql();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xl();
    }
  }
}
function gd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        gd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Nl = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ Symbol(
  ""
), Ml = /* @__PURE__ */ Symbol(
  ""
), ma = /* @__PURE__ */ Symbol(
  ""
);
function Wt(e, t, n) {
  if (Cn && ot) {
    let i = Nl.get(e);
    i || Nl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Zl()), a.map = i, a.key = n), a.track();
  }
}
function er(e, t, n, i, a, l) {
  const u = Nl.get(e);
  if (!u) {
    pa++;
    return;
  }
  const f = (p) => {
    p && p.trigger();
  };
  if (ql(), t === "clear")
    u.forEach(f);
  else {
    const p = $e(e), g = p && Wl(n);
    if (p && n === "length") {
      const _ = Number(i);
      u.forEach((x, S) => {
        (S === "length" || S === ma || !Hn(S) && S >= _) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), g && f(u.get(ma)), t) {
        case "add":
          p ? g && f(u.get("length")) : (f(u.get(Fr)), _i(e) && f(u.get(Ml)));
          break;
        case "delete":
          p || (f(u.get(Fr)), _i(e) && f(u.get(Ml)));
          break;
        case "set":
          _i(e) && f(u.get(Fr));
          break;
      }
  }
  Xl();
}
function ui(e) {
  const t = /* @__PURE__ */ Ze(e);
  return t === e ? t : (Wt(t, "iterate", ma), /* @__PURE__ */ xn(e) ? t : t.map(In));
}
function is(e) {
  return Wt(e = /* @__PURE__ */ Ze(e), "iterate", ma), e;
}
function Ln(e, t) {
  return /* @__PURE__ */ ar(e) ? Pi(/* @__PURE__ */ Lr(e) ? In(t) : t) : In(t);
}
const Tg = {
  __proto__: null,
  [Symbol.iterator]() {
    return rl(this, Symbol.iterator, (e) => Ln(this, e));
  },
  concat(...e) {
    return ui(this).concat(
      ...e.map((t) => $e(t) ? ui(t) : t)
    );
  },
  entries() {
    return rl(this, "entries", (e) => (e[1] = Ln(this, e[1]), e));
  },
  every(e, t) {
    return Wn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Wn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Ln(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Wn(
      this,
      "find",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Wn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Wn(
      this,
      "findLast",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Wn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Wn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return il(this, "includes", e);
  },
  indexOf(...e) {
    return il(this, "indexOf", e);
  },
  join(e) {
    return ui(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return il(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hi(this, "pop");
  },
  push(...e) {
    return Hi(this, "push", e);
  },
  reduce(e, ...t) {
    return Ou(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ou(this, "reduceRight", e, t);
  },
  shift() {
    return Hi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hi(this, "splice", e);
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
    return Hi(this, "unshift", e);
  },
  values() {
    return rl(this, "values", (e) => Ln(this, e));
  }
};
function rl(e, t, n) {
  const i = is(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ xn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const Eg = Array.prototype;
function Wn(e, t, n, i, a, l) {
  const u = is(e), f = u !== e && !/* @__PURE__ */ xn(e), p = u[t];
  if (p !== Eg[t]) {
    const x = p.apply(e, l);
    return f ? In(x) : x;
  }
  let g = n;
  u !== e && (f ? g = function(x, S) {
    return n.call(this, Ln(e, x), S, e);
  } : n.length > 2 && (g = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const _ = p.call(u, g, i);
  return f && a ? a(_) : _;
}
function Ou(e, t, n, i) {
  const a = is(e), l = a !== e && !/* @__PURE__ */ xn(e);
  let u = n, f = !1;
  a !== e && (l ? (f = i.length === 0, u = function(g, _, x) {
    return f && (f = !1, g = Ln(e, g)), n.call(this, g, Ln(e, _), x, e);
  }) : n.length > 3 && (u = function(g, _, x) {
    return n.call(this, g, _, x, e);
  }));
  const p = a[t](u, ...i);
  return f ? Ln(e, p) : p;
}
function il(e, t, n) {
  const i = /* @__PURE__ */ Ze(e);
  Wt(i, "iterate", ma);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ tc(n[0]) ? (n[0] = /* @__PURE__ */ Ze(n[0]), i[t](...n)) : a;
}
function Hi(e, t, n = []) {
  rr(), ql();
  const i = (/* @__PURE__ */ Ze(e))[t].apply(e, n);
  return Xl(), ir(), i;
}
const Dg = /* @__PURE__ */ Gl("__proto__,__v_isRef,__isVue"), bd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hn)
);
function Rg(e) {
  Hn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ze(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class yd {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return i === (a ? l ? Bg : wd : l ? xd : _d).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = $e(t);
    if (!a) {
      let p;
      if (u && (p = Tg[n]))
        return p;
      if (n === "hasOwnProperty")
        return Rg;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qt(t) ? t : i
    );
    if ((Hn(n) ? bd.has(n) : Dg(n)) || (a || Wt(t, "get", n), l))
      return f;
    if (/* @__PURE__ */ qt(f)) {
      const p = u && Wl(n) ? f : f.value;
      return a && tt(p) ? /* @__PURE__ */ Pl(p) : p;
    }
    return tt(f) ? a ? /* @__PURE__ */ Pl(f) : /* @__PURE__ */ as(f) : f;
  }
}
class vd extends yd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const u = $e(t) && Wl(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ ar(l);
      if (!/* @__PURE__ */ xn(i) && !/* @__PURE__ */ ar(i) && (l = /* @__PURE__ */ Ze(l), i = /* @__PURE__ */ Ze(i)), !u && /* @__PURE__ */ qt(l) && !/* @__PURE__ */ qt(i))
        return g || (l.value = i), !0;
    }
    const f = u ? Number(n) < t.length : Qe(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ qt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ze(a) && (f ? $n(i, l) && er(t, "set", n, i) : er(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = Qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && er(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Hn(n) || !bd.has(n)) && Wt(t, "has", n), i;
  }
  ownKeys(t) {
    return Wt(
      t,
      "iterate",
      $e(t) ? "length" : Fr
    ), Reflect.ownKeys(t);
  }
}
class Og extends yd {
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
const Fg = /* @__PURE__ */ new vd(), Lg = /* @__PURE__ */ new Og(), zg = /* @__PURE__ */ new vd(!0);
const kl = (e) => e, Xa = (e) => Reflect.getPrototypeOf(e);
function $g(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ Ze(a), u = _i(l), f = e === "entries" || e === Symbol.iterator && u, p = e === "keys" && u, g = a[e](...i), _ = n ? kl : t ? Pi : In;
    return !t && Wt(
      l,
      "iterate",
      p ? Ml : Fr
    ), Xt(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = g.next();
          return S ? { value: x, done: S } : {
            value: f ? [_(x[0]), _(x[1])] : _(x),
            done: S
          };
        }
      }
    );
  };
}
function Ja(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jg(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Ze(l), f = /* @__PURE__ */ Ze(a);
      e || ($n(a, f) && Wt(u, "get", a), Wt(u, "get", f));
      const { has: p } = Xa(u), g = t ? kl : e ? Pi : In;
      if (p.call(u, a))
        return g(l.get(a));
      if (p.call(u, f))
        return g(l.get(f));
      l !== u && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Wt(/* @__PURE__ */ Ze(a), "iterate", Fr), a.size;
    },
    has(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Ze(l), f = /* @__PURE__ */ Ze(a);
      return e || ($n(a, f) && Wt(u, "has", a), Wt(u, "has", f)), a === f ? l.has(a) : l.has(a) || l.has(f);
    },
    forEach(a, l) {
      const u = this, f = u.__v_raw, p = /* @__PURE__ */ Ze(f), g = t ? kl : e ? Pi : In;
      return !e && Wt(p, "iterate", Fr), f.forEach((_, x) => a.call(l, g(_), g(x), u));
    }
  };
  return Xt(
    n,
    e ? {
      add: Ja("add"),
      set: Ja("set"),
      delete: Ja("delete"),
      clear: Ja("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ Ze(this), u = Xa(l), f = /* @__PURE__ */ Ze(a), p = !t && !/* @__PURE__ */ xn(a) && !/* @__PURE__ */ ar(a) ? f : a;
        return u.has.call(l, p) || $n(a, p) && u.has.call(l, a) || $n(f, p) && u.has.call(l, f) || (l.add(p), er(l, "add", p, p)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ xn(l) && !/* @__PURE__ */ ar(l) && (l = /* @__PURE__ */ Ze(l));
        const u = /* @__PURE__ */ Ze(this), { has: f, get: p } = Xa(u);
        let g = f.call(u, a);
        g || (a = /* @__PURE__ */ Ze(a), g = f.call(u, a));
        const _ = p.call(u, a);
        return u.set(a, l), g ? $n(l, _) && er(u, "set", a, l) : er(u, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ Ze(this), { has: u, get: f } = Xa(l);
        let p = u.call(l, a);
        p || (a = /* @__PURE__ */ Ze(a), p = u.call(l, a)), f && f.call(l, a);
        const g = l.delete(a);
        return p && er(l, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ Ze(this), l = a.size !== 0, u = a.clear();
        return l && er(
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
    n[a] = $g(a, e, t);
  }), n;
}
function Ql(e, t) {
  const n = jg(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Qe(n, a) && a in i ? n : i,
    a,
    l
  );
}
const Vg = {
  get: /* @__PURE__ */ Ql(!1, !1)
}, Hg = {
  get: /* @__PURE__ */ Ql(!1, !0)
}, Ug = {
  get: /* @__PURE__ */ Ql(!0, !1)
};
const _d = /* @__PURE__ */ new WeakMap(), xd = /* @__PURE__ */ new WeakMap(), wd = /* @__PURE__ */ new WeakMap(), Bg = /* @__PURE__ */ new WeakMap();
function Gg(e) {
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
function Kg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gg(gg(e));
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return /* @__PURE__ */ ar(e) ? e : ec(
    e,
    !1,
    Fg,
    Vg,
    _d
  );
}
// @__NO_SIDE_EFFECTS__
function Wg(e) {
  return ec(
    e,
    !1,
    zg,
    Hg,
    xd
  );
}
// @__NO_SIDE_EFFECTS__
function Pl(e) {
  return ec(
    e,
    !0,
    Lg,
    Ug,
    wd
  );
}
function ec(e, t, n, i, a) {
  if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Kg(e);
  if (l === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  return /* @__PURE__ */ ar(e) ? /* @__PURE__ */ Lr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function tc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ze(t) : e;
}
function Yg(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && ad(e, "__v_skip", !0), e;
}
const In = (e) => tt(e) ? /* @__PURE__ */ as(e) : e, Pi = (e) => tt(e) ? /* @__PURE__ */ Pl(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  return qg(e, !1);
}
function qg(e, t) {
  return /* @__PURE__ */ qt(e) ? e : new Xg(e, t);
}
class Xg {
  constructor(t, n) {
    this.dep = new Zl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ze(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ xn(t) || /* @__PURE__ */ ar(t);
    t = i ? t : /* @__PURE__ */ Ze(t), $n(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function Rr(e) {
  return /* @__PURE__ */ qt(e) ? e.value : e;
}
const Jg = {
  get: (e, t, n) => t === "__v_raw" ? e : Rr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ qt(a) && !/* @__PURE__ */ qt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Sd(e) {
  return /* @__PURE__ */ Lr(e) ? e : new Proxy(e, Jg);
}
class Zg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return fd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Qg(e, t, n = !1) {
  let i, a;
  return Ve(e) ? i = e : (i = e.get, a = e.set), new Zg(i, a, n);
}
const Za = {}, Do = /* @__PURE__ */ new WeakMap();
let Er;
function e0(e, t = !1, n = Er) {
  if (n) {
    let i = Do.get(n);
    i || Do.set(n, i = []), i.push(e);
  }
}
function t0(e, t, n = it) {
  const { immediate: i, deep: a, once: l, scheduler: u, augmentJob: f, call: p } = n, g = (O) => a ? O : /* @__PURE__ */ xn(O) || a === !1 || a === 0 ? tr(O, 1) : tr(O);
  let _, x, S, A, v = !1, R = !1;
  if (/* @__PURE__ */ qt(e) ? (x = () => e.value, v = /* @__PURE__ */ xn(e)) : /* @__PURE__ */ Lr(e) ? (x = () => g(e), v = !0) : $e(e) ? (R = !0, v = e.some((O) => /* @__PURE__ */ Lr(O) || /* @__PURE__ */ xn(O)), x = () => e.map((O) => {
    if (/* @__PURE__ */ qt(O))
      return O.value;
    if (/* @__PURE__ */ Lr(O))
      return g(O);
    if (Ve(O))
      return p ? p(O, 2) : O();
  })) : Ve(e) ? t ? x = p ? () => p(e, 2) : e : x = () => {
    if (S) {
      rr();
      try {
        S();
      } finally {
        ir();
      }
    }
    const O = Er;
    Er = _;
    try {
      return p ? p(e, 3, [A]) : e(A);
    } finally {
      Er = O;
    }
  } : x = Vn, t && a) {
    const O = x, F = a === !0 ? 1 / 0 : a;
    x = () => tr(O(), F);
  }
  const V = Ag(), z = () => {
    _.stop(), V && V.active && Kl(V.effects, _);
  };
  if (l && t) {
    const O = t;
    t = (...F) => {
      O(...F), z();
    };
  }
  let P = R ? new Array(e.length).fill(Za) : Za;
  const E = (O) => {
    if (!(!(_.flags & 1) || !_.dirty && !O))
      if (t) {
        const F = _.run();
        if (a || v || (R ? F.some((q, j) => $n(q, P[j])) : $n(F, P))) {
          S && S();
          const q = Er;
          Er = _;
          try {
            const j = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === Za ? void 0 : R && P[0] === Za ? [] : P,
              A
            ];
            P = F, p ? p(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            Er = q;
          }
        }
      } else
        _.run();
  };
  return f && f(E), _ = new cd(x), _.scheduler = u ? () => u(E, !1) : E, A = (O) => e0(O, !1, _), S = _.onStop = () => {
    const O = Do.get(_);
    if (O) {
      if (p)
        p(O, 4);
      else
        for (const F of O) F();
      Do.delete(_);
    }
  }, t ? i ? E(!0) : P = _.run() : u ? u(E.bind(null, !0), !0) : _.run(), z.pause = _.pause.bind(_), z.resume = _.resume.bind(_), z.stop = z, z;
}
function tr(e, t = 1 / 0, n) {
  if (t <= 0 || !tt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qt(e))
    tr(e.value, t, n);
  else if ($e(e))
    for (let i = 0; i < e.length; i++)
      tr(e[i], t, n);
  else if (td(e) || _i(e))
    e.forEach((i) => {
      tr(i, t, n);
    });
  else if (id(e)) {
    for (const i in e)
      tr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && tr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Na(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    os(a, t, n);
  }
}
function Un(e, t, n, i) {
  if (Ve(e)) {
    const a = Na(e, t, n, i);
    return a && nd(a) && a.catch((l) => {
      os(l, t, n);
    }), a;
  }
  if ($e(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Un(e[l], t, n, i));
    return a;
  }
}
function os(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: u } = t && t.appContext.config || it;
  if (t) {
    let f = t.parent;
    const p = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let x = 0; x < _.length; x++)
          if (_[x](e, p, g) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      rr(), Na(l, null, 10, [
        e,
        p,
        g
      ]), ir();
      return;
    }
  }
  n0(e, n, a, i, u);
}
function n0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const en = [];
let Fn = -1;
const xi = [];
let mr = null, pi = 0;
const Nd = /* @__PURE__ */ Promise.resolve();
let Ro = null;
function nc(e) {
  const t = Ro || Nd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function r0(e) {
  let t = Fn + 1, n = en.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = en[i], l = ga(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function rc(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), n = en[en.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ga(n) ? en.push(e) : en.splice(r0(t), 0, e), e.flags |= 1, Md();
  }
}
function Md() {
  Ro || (Ro = Nd.then(Pd));
}
function i0(e) {
  $e(e) ? xi.push(...e) : mr && e.id === -1 ? mr.splice(pi + 1, 0, e) : e.flags & 1 || (xi.push(e), e.flags |= 1), Md();
}
function Fu(e, t, n = Fn + 1) {
  for (; n < en.length; n++) {
    const i = en[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      en.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function kd(e) {
  if (xi.length) {
    const t = [...new Set(xi)].sort(
      (n, i) => ga(n) - ga(i)
    );
    if (xi.length = 0, mr) {
      mr.push(...t);
      return;
    }
    for (mr = t, pi = 0; pi < mr.length; pi++) {
      const n = mr[pi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mr = null, pi = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pd(e) {
  try {
    for (Fn = 0; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Na(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, en.length = 0, kd(), Ro = null, (en.length || xi.length) && Pd();
  }
}
let pn = null, Ad = null;
function Oo(e) {
  const t = pn;
  return pn = e, Ad = e && e.type.__scopeId || null, t;
}
function Cd(e, t = pn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Yu(-1);
    const l = Oo(t);
    let u;
    try {
      u = e(...a);
    } finally {
      Oo(l), i._d && Yu(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function ic(e, t) {
  if (pn === null)
    return e;
  const n = us(pn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, u, f, p = it] = t[a];
    l && (Ve(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && tr(u), i.push({
      dir: l,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return e;
}
function Pr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    l && (f.oldValue = l[u].value);
    let p = f.dir[i];
    p && (rr(), Un(p, n, 8, [
      e.el,
      f,
      e,
      t
    ]), ir());
  }
}
function a0(e, t) {
  if (Yt) {
    let n = Yt.provides;
    const i = Yt.parent && Yt.parent.provides;
    i === n && (n = Yt.provides = Object.create(i)), n[e] = t;
  }
}
function xo(e, t, n = !1) {
  const i = ab();
  if (i || Si) {
    let a = Si ? Si._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ve(t) ? t.call(i && i.proxy) : t;
  }
}
const o0 = /* @__PURE__ */ Symbol.for("v-scx"), s0 = () => xo(o0);
function wi(e, t, n) {
  return Id(e, t, n);
}
function Id(e, t, n = it) {
  const { immediate: i, deep: a, flush: l, once: u } = n, f = Xt({}, n), p = t && i || !t && l !== "post";
  let g;
  if (ya) {
    if (l === "sync") {
      const A = s0();
      g = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!p) {
      const A = () => {
      };
      return A.stop = Vn, A.resume = Vn, A.pause = Vn, A;
    }
  }
  const _ = Yt;
  f.call = (A, v, R) => Un(A, _, v, R);
  let x = !1;
  l === "post" ? f.scheduler = (A) => {
    ln(A, _ && _.suspense);
  } : l !== "sync" && (x = !0, f.scheduler = (A, v) => {
    v ? A() : rc(A);
  }), f.augmentJob = (A) => {
    t && (A.flags |= 4), x && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = t0(e, t, f);
  return ya && (g ? g.push(S) : p && S()), S;
}
function l0(e, t, n) {
  const i = this.proxy, a = Nt(e) ? e.includes(".") ? Td(i, e) : () => i[e] : e.bind(i, i);
  let l;
  Ve(t) ? l = t : (l = t.handler, n = t);
  const u = Ma(this), f = Id(a, l.bind(i), n);
  return u(), f;
}
function Td(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const c0 = /* @__PURE__ */ Symbol("_vte"), u0 = (e) => e.__isTeleport, f0 = /* @__PURE__ */ Symbol("_leaveCb");
function ac(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ac(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ed(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Lu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fo = /* @__PURE__ */ new WeakMap();
function aa(e, t, n, i, a = !1) {
  if ($e(e)) {
    e.forEach(
      (R, V) => aa(
        R,
        t && ($e(t) ? t[V] : t),
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
  const l = i.shapeFlag & 4 ? us(i.component) : i.el, u = a ? null : l, { i: f, r: p } = e, g = t && t.r, _ = f.refs === it ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ Ze(x), A = x === it ? ed : (R) => Lu(_, R) ? !1 : Qe(S, R), v = (R, V) => !(V && Lu(_, V));
  if (g != null && g !== p) {
    if (zu(t), Nt(g))
      _[g] = null, A(g) && (x[g] = null);
    else if (/* @__PURE__ */ qt(g)) {
      const R = t;
      v(g, R.k) && (g.value = null), R.k && (_[R.k] = null);
    }
  }
  if (Ve(p))
    Na(p, f, 12, [u, _]);
  else {
    const R = Nt(p), V = /* @__PURE__ */ qt(p);
    if (R || V) {
      const z = () => {
        if (e.f) {
          const P = R ? A(p) ? x[p] : _[p] : v() || !e.k ? p.value : _[e.k];
          if (a)
            $e(P) && Kl(P, l);
          else if ($e(P))
            P.includes(l) || P.push(l);
          else if (R)
            _[p] = [l], A(p) && (x[p] = _[p]);
          else {
            const E = [l];
            v(p, e.k) && (p.value = E), e.k && (_[e.k] = E);
          }
        } else R ? (_[p] = u, A(p) && (x[p] = u)) : V && (v(p, e.k) && (p.value = u), e.k && (_[e.k] = u));
      };
      if (u) {
        const P = () => {
          z(), Fo.delete(e);
        };
        P.id = -1, Fo.set(e, P), ln(P, n);
      } else
        zu(e), z();
    }
  }
}
function zu(e) {
  const t = Fo.get(e);
  t && (t.flags |= 8, Fo.delete(e));
}
rs().requestIdleCallback;
rs().cancelIdleCallback;
const oa = (e) => !!e.type.__asyncLoader, Dd = (e) => e.type.__isKeepAlive;
function d0(e, t) {
  Rd(e, "a", t);
}
function h0(e, t) {
  Rd(e, "da", t);
}
function Rd(e, t, n = Yt) {
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
      Dd(a.parent.vnode) && p0(i, t, n, a), a = a.parent;
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
  Fd(() => {
    Kl(i[t], a);
  }, n);
}
function ss(e, t, n = Yt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...u) => {
      rr();
      const f = Ma(n), p = Un(t, n, e, u);
      return f(), ir(), p;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const or = (e) => (t, n = Yt) => {
  (!ya || e === "sp") && ss(e, (...i) => t(...i), n);
}, m0 = or("bm"), Od = or("m"), g0 = or(
  "bu"
), b0 = or("u"), oc = or(
  "bum"
), Fd = or("um"), y0 = or(
  "sp"
), v0 = or("rtg"), _0 = or("rtc");
function x0(e, t = Yt) {
  ss("ec", e, t);
}
const w0 = "components", Ld = /* @__PURE__ */ Symbol.for("v-ndc");
function S0(e) {
  return Nt(e) ? N0(w0, e, !1) || e : e || Ld;
}
function N0(e, t, n = !0, i = !1) {
  const a = pn || Yt;
  if (a) {
    const l = a.type;
    {
      const f = ub(
        l,
        !1
      );
      if (f && (f === t || f === nn(t) || f === ns(nn(t))))
        return l;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      $u(a[e] || l[e], t) || // global registration
      $u(a.appContext[e], t)
    );
    return !u && i ? l : u;
  }
}
function $u(e, t) {
  return e && (e[t] || e[nn(t)] || e[ns(nn(t))]);
}
function jt(e, t, n, i) {
  let a;
  const l = n, u = $e(e);
  if (u || Nt(e)) {
    const f = u && /* @__PURE__ */ Lr(e);
    let p = !1, g = !1;
    f && (p = !/* @__PURE__ */ xn(e), g = /* @__PURE__ */ ar(e), e = is(e)), a = new Array(e.length);
    for (let _ = 0, x = e.length; _ < x; _++)
      a[_] = t(
        p ? g ? Pi(In(e[_])) : In(e[_]) : e[_],
        _,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, l);
  } else if (tt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, p) => t(f, p, void 0, l)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let p = 0, g = f.length; p < g; p++) {
        const _ = f[p];
        a[p] = t(e[_], _, p, l);
      }
    }
  else
    a = [];
  return a;
}
const Al = (e) => e ? ih(e) ? us(e) : Al(e.parent) : null, sa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Xt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Al(e.parent),
    $root: (e) => Al(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $d(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      rc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nc.bind(e.proxy)),
    $watch: (e) => l0.bind(e)
  })
), al = (e, t) => e !== it && !e.__isScriptSetup && Qe(e, t), M0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: u, type: f, appContext: p } = e;
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
            return l[t];
        }
      else {
        if (al(i, t))
          return u[t] = 1, i[t];
        if (a !== it && Qe(a, t))
          return u[t] = 2, a[t];
        if (Qe(l, t))
          return u[t] = 3, l[t];
        if (n !== it && Qe(n, t))
          return u[t] = 4, n[t];
        Cl && (u[t] = 0);
      }
    }
    const g = sa[t];
    let _, x;
    if (g)
      return t === "$attrs" && Wt(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== it && Qe(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = p.config.globalProperties, Qe(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return al(a, t) ? (a[t] = n, !0) : i !== it && Qe(i, t) ? (i[t] = n, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: u }
  }, f) {
    let p;
    return !!(n[f] || e !== it && f[0] !== "$" && Qe(e, f) || al(t, f) || Qe(l, f) || Qe(i, f) || Qe(sa, f) || Qe(a.config.globalProperties, f) || (p = u.__cssModules) && p[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ju(e) {
  return $e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Cl = !0;
function k0(e) {
  const t = $d(e), n = e.proxy, i = e.ctx;
  Cl = !1, t.beforeCreate && Vu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: u,
    watch: f,
    provide: p,
    inject: g,
    // lifecycle
    created: _,
    beforeMount: x,
    mounted: S,
    beforeUpdate: A,
    updated: v,
    activated: R,
    deactivated: V,
    beforeDestroy: z,
    beforeUnmount: P,
    destroyed: E,
    unmounted: O,
    render: F,
    renderTracked: q,
    renderTriggered: j,
    errorCaptured: Q,
    serverPrefetch: de,
    // public API
    expose: H,
    inheritAttrs: be,
    // assets
    components: xe,
    directives: I,
    filters: we
  } = t;
  if (g && P0(g, i, null), u)
    for (const L in u) {
      const Z = u[L];
      Ve(Z) && (i[L] = Z.bind(n));
    }
  if (a) {
    const L = a.call(n, n);
    tt(L) && (e.data = /* @__PURE__ */ as(L));
  }
  if (Cl = !0, l)
    for (const L in l) {
      const Z = l[L], _e = Ve(Z) ? Z.bind(n, n) : Ve(Z.get) ? Z.get.bind(n, n) : Vn, De = !Ve(Z) && Ve(Z.set) ? Z.set.bind(n) : Vn, Re = St({
        get: _e,
        set: De
      });
      Object.defineProperty(i, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Be) => Re.value = Be
      });
    }
  if (f)
    for (const L in f)
      zd(f[L], i, n, L);
  if (p) {
    const L = Ve(p) ? p.call(n) : p;
    Reflect.ownKeys(L).forEach((Z) => {
      a0(Z, L[Z]);
    });
  }
  _ && Vu(_, e, "c");
  function he(L, Z) {
    $e(Z) ? Z.forEach((_e) => L(_e.bind(n))) : Z && L(Z.bind(n));
  }
  if (he(m0, x), he(Od, S), he(g0, A), he(b0, v), he(d0, R), he(h0, V), he(x0, Q), he(_0, q), he(v0, j), he(oc, P), he(Fd, O), he(y0, de), $e(H))
    if (H.length) {
      const L = e.exposed || (e.exposed = {});
      H.forEach((Z) => {
        Object.defineProperty(L, Z, {
          get: () => n[Z],
          set: (_e) => n[Z] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Vn && (e.render = F), be != null && (e.inheritAttrs = be), xe && (e.components = xe), I && (e.directives = I), de && Ed(e);
}
function P0(e, t, n = Vn) {
  $e(e) && (e = Il(e));
  for (const i in e) {
    const a = e[i];
    let l;
    tt(a) ? "default" in a ? l = xo(
      a.from || i,
      a.default,
      !0
    ) : l = xo(a.from || i) : l = xo(a), /* @__PURE__ */ qt(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (u) => l.value = u
    }) : t[i] = l;
  }
}
function Vu(e, t, n) {
  Un(
    $e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zd(e, t, n, i) {
  let a = i.includes(".") ? Td(n, i) : () => n[i];
  if (Nt(e)) {
    const l = t[e];
    Ve(l) && wi(a, l);
  } else if (Ve(e))
    wi(a, e.bind(n));
  else if (tt(e))
    if ($e(e))
      e.forEach((l) => zd(l, t, n, i));
    else {
      const l = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ve(l) && wi(a, l, e);
    }
}
function $d(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = l.get(t);
  let p;
  return f ? p = f : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (g) => Lo(p, g, u, !0)
  ), Lo(p, t, u)), tt(t) && l.set(t, p), p;
}
function Lo(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && Lo(e, l, n, !0), a && a.forEach(
    (u) => Lo(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const f = A0[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const A0 = {
  data: Hu,
  props: Uu,
  emits: Uu,
  // objects
  methods: Ji,
  computed: Ji,
  // lifecycle
  beforeCreate: Qt,
  created: Qt,
  beforeMount: Qt,
  mounted: Qt,
  beforeUpdate: Qt,
  updated: Qt,
  beforeDestroy: Qt,
  beforeUnmount: Qt,
  destroyed: Qt,
  unmounted: Qt,
  activated: Qt,
  deactivated: Qt,
  errorCaptured: Qt,
  serverPrefetch: Qt,
  // assets
  components: Ji,
  directives: Ji,
  // watch
  watch: I0,
  // provide / inject
  provide: Hu,
  inject: C0
};
function Hu(e, t) {
  return t ? e ? function() {
    return Xt(
      Ve(e) ? e.call(this, this) : e,
      Ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function C0(e, t) {
  return Ji(Il(e), Il(t));
}
function Il(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ji(e, t) {
  return e ? Xt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Uu(e, t) {
  return e ? $e(e) && $e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Xt(
    /* @__PURE__ */ Object.create(null),
    ju(e),
    ju(t ?? {})
  ) : t;
}
function I0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Qt(e[i], t[i]);
  return n;
}
function jd() {
  return {
    app: null,
    config: {
      isNativeTag: ed,
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
    Ve(i) || (i = Xt({}, i)), a != null && !tt(a) && (a = null);
    const l = jd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let p = !1;
    const g = l.app = {
      _uid: T0++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: db,
      get config() {
        return l.config;
      },
      set config(_) {
      },
      use(_, ...x) {
        return u.has(_) || (_ && Ve(_.install) ? (u.add(_), _.install(g, ...x)) : Ve(_) && (u.add(_), _(g, ...x))), g;
      },
      mixin(_) {
        return l.mixins.includes(_) || l.mixins.push(_), g;
      },
      component(_, x) {
        return x ? (l.components[_] = x, g) : l.components[_];
      },
      directive(_, x) {
        return x ? (l.directives[_] = x, g) : l.directives[_];
      },
      mount(_, x, S) {
        if (!p) {
          const A = g._ceVNode || We(i, a);
          return A.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), p = !0, g._container = _, _.__vue_app__ = g, us(A.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        p && (Un(
          f,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(_, x) {
        return l.provides[_] = x, g;
      },
      runWithContext(_) {
        const x = Si;
        Si = g;
        try {
          return _();
        } finally {
          Si = x;
        }
      }
    };
    return g;
  };
}
let Si = null;
const D0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nn(t)}Modifiers`] || e[`${Wr(t)}Modifiers`];
function R0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || it;
  let a = n;
  const l = t.startsWith("update:"), u = l && D0(i, t.slice(7));
  u && (u.trim && (a = n.map((_) => Nt(_) ? _.trim() : _)), u.number && (a = n.map(vg)));
  let f, p = i[f = Qs(t)] || // also try camelCase event handler (#2249)
  i[f = Qs(nn(t))];
  !p && l && (p = i[f = Qs(Wr(t))]), p && Un(
    p,
    e,
    6,
    a
  );
  const g = i[f + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Un(
      g,
      e,
      6,
      a
    );
  }
}
const O0 = /* @__PURE__ */ new WeakMap();
function Vd(e, t, n = !1) {
  const i = n ? O0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let u = {}, f = !1;
  if (!Ve(e)) {
    const p = (g) => {
      const _ = Vd(g, t, !0);
      _ && (f = !0, Xt(u, _));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !l && !f ? (tt(e) && i.set(e, null), null) : ($e(l) ? l.forEach((p) => u[p] = null) : Xt(u, l), tt(e) && i.set(e, u), u);
}
function ls(e, t) {
  return !e || !Qo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, Wr(t)) || Qe(e, t));
}
function Bu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: u,
    attrs: f,
    emit: p,
    render: g,
    renderCache: _,
    props: x,
    data: S,
    setupState: A,
    ctx: v,
    inheritAttrs: R
  } = e, V = Oo(e);
  let z, P;
  try {
    if (n.shapeFlag & 4) {
      const O = a || i, F = O;
      z = zn(
        g.call(
          F,
          O,
          _,
          x,
          A,
          S,
          v
        )
      ), P = f;
    } else {
      const O = t;
      z = zn(
        O.length > 1 ? O(
          x,
          { attrs: f, slots: u, emit: p }
        ) : O(
          x,
          null
        )
      ), P = t.props ? f : F0(f);
    }
  } catch (O) {
    la.length = 0, os(O, e, 1), z = We(_r);
  }
  let E = z;
  if (P && R !== !1) {
    const O = Object.keys(P), { shapeFlag: F } = E;
    O.length && F & 7 && (l && O.some(es) && (P = L0(
      P,
      l
    )), E = Ai(E, P, !1, !0));
  }
  return n.dirs && (E = Ai(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && ac(E, n.transition), z = E, Oo(V), z;
}
const F0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, L0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!es(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function z0(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: u, children: f, patchFlag: p } = t, g = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Gu(i, u, g) : !!u;
    if (p & 8) {
      const _ = t.dynamicProps;
      for (let x = 0; x < _.length; x++) {
        const S = _[x];
        if (Hd(u, i, S) && !ls(g, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? Gu(i, u, g) : !0 : !!u;
  return !1;
}
function Gu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (Hd(t, e, l) && !ls(n, l))
      return !0;
  }
  return !1;
}
function Hd(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && tt(i) && tt(a) ? !Yl(i, a) : i !== a;
}
function $0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ud = {}, Bd = () => Object.create(Ud), Gd = (e) => Object.getPrototypeOf(e) === Ud;
function j0(e, t, n, i = !1) {
  const a = {}, l = Bd();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kd(e, t, a, l);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Wg(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function V0(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ Ze(a), [p] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = e.vnode.dynamicProps;
      for (let x = 0; x < _.length; x++) {
        let S = _[x];
        if (ls(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (p)
          if (Qe(l, S))
            A !== l[S] && (l[S] = A, g = !0);
          else {
            const v = nn(S);
            a[v] = Tl(
              p,
              f,
              v,
              A,
              e,
              !1
            );
          }
        else
          A !== l[S] && (l[S] = A, g = !0);
      }
    }
  } else {
    Kd(e, t, a, l) && (g = !0);
    let _;
    for (const x in f)
      (!t || // for camelCase
      !Qe(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Wr(x)) === x || !Qe(t, _))) && (p ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[x] = Tl(
        p,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (l !== f)
      for (const x in l)
        (!t || !Qe(t, x)) && (delete l[x], g = !0);
  }
  g && er(e.attrs, "set", "");
}
function Kd(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let p in t) {
      if (na(p))
        continue;
      const g = t[p];
      let _;
      a && Qe(a, _ = nn(p)) ? !l || !l.includes(_) ? n[_] = g : (f || (f = {}))[_] = g : ls(e.emitsOptions, p) || (!(p in i) || g !== i[p]) && (i[p] = g, u = !0);
    }
  if (l) {
    const p = /* @__PURE__ */ Ze(n), g = f || it;
    for (let _ = 0; _ < l.length; _++) {
      const x = l[_];
      n[x] = Tl(
        a,
        p,
        x,
        g[x],
        e,
        !Qe(g, x)
      );
    }
  }
  return u;
}
function Tl(e, t, n, i, a, l) {
  const u = e[n];
  if (u != null) {
    const f = Qe(u, "default");
    if (f && i === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Ve(p)) {
        const { propsDefaults: g } = a;
        if (n in g)
          i = g[n];
        else {
          const _ = Ma(a);
          i = g[n] = p.call(
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
    ] && (l && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Wr(n)) && (i = !0));
  }
  return i;
}
const H0 = /* @__PURE__ */ new WeakMap();
function Wd(e, t, n = !1) {
  const i = n ? H0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, u = {}, f = [];
  let p = !1;
  if (!Ve(e)) {
    const _ = (x) => {
      p = !0;
      const [S, A] = Wd(x, t, !0);
      Xt(u, S), A && f.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!l && !p)
    return tt(e) && i.set(e, vi), vi;
  if ($e(l))
    for (let _ = 0; _ < l.length; _++) {
      const x = nn(l[_]);
      Ku(x) && (u[x] = it);
    }
  else if (l)
    for (const _ in l) {
      const x = nn(_);
      if (Ku(x)) {
        const S = l[_], A = u[x] = $e(S) || Ve(S) ? { type: S } : Xt({}, S), v = A.type;
        let R = !1, V = !0;
        if ($e(v))
          for (let z = 0; z < v.length; ++z) {
            const P = v[z], E = Ve(P) && P.name;
            if (E === "Boolean") {
              R = !0;
              break;
            } else E === "String" && (V = !1);
          }
        else
          R = Ve(v) && v.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = R, A[
          1
          /* shouldCastTrue */
        ] = V, (R || Qe(A, "default")) && f.push(x);
      }
    }
  const g = [u, f];
  return tt(e) && i.set(e, g), g;
}
function Ku(e) {
  return e[0] !== "$" && !na(e);
}
const sc = (e) => e === "_" || e === "_ctx" || e === "$stable", lc = (e) => $e(e) ? e.map(zn) : [zn(e)], U0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = Cd((...a) => lc(t(...a)), n);
  return i._c = !1, i;
}, Yd = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (sc(a)) continue;
    const l = e[a];
    if (Ve(l))
      t[a] = U0(a, l, i);
    else if (l != null) {
      const u = lc(l);
      t[a] = () => u;
    }
  }
}, qd = (e, t) => {
  const n = lc(t);
  e.slots.default = () => n;
}, Xd = (e, t, n) => {
  for (const i in t)
    (n || !sc(i)) && (e[i] = t[i]);
}, B0 = (e, t, n) => {
  const i = e.slots = Bd();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Xd(i, t, n), n && ad(i, "_", a, !0)) : Yd(t, i);
  } else t && qd(e, t);
}, G0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, u = it;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? l = !1 : Xd(a, t, n) : (l = !t.$stable, Yd(t, a)), u = t;
  } else t && (qd(e, t), u = { default: 1 });
  if (l)
    for (const f in a)
      !sc(f) && u[f] == null && delete a[f];
}, ln = X0;
function K0(e) {
  return W0(e);
}
function W0(e, t) {
  const n = rs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: u,
    createText: f,
    createComment: p,
    setText: g,
    setElementText: _,
    parentNode: x,
    nextSibling: S,
    setScopeId: A = Vn,
    insertStaticContent: v
  } = e, R = (D, U, ae, h = null, C = null, G = null, re = void 0, ue = null, se = !!U.dynamicChildren) => {
    if (D === U)
      return;
    D && !Ui(D, U) && (h = Vt(D), Be(D, C, G, !0), D = null), U.patchFlag === -2 && (se = !1, U.dynamicChildren = null);
    const { type: Y, ref: J, shapeFlag: fe } = U;
    switch (Y) {
      case cs:
        V(D, U, ae, h);
        break;
      case _r:
        z(D, U, ae, h);
        break;
      case wo:
        D == null && P(U, ae, h, re);
        break;
      case Je:
        xe(
          D,
          U,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        );
        break;
      default:
        fe & 1 ? F(
          D,
          U,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        ) : fe & 6 ? I(
          D,
          U,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        ) : (fe & 64 || fe & 128) && Y.process(
          D,
          U,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se,
          un
        );
    }
    J != null && C ? aa(J, D && D.ref, G, U || D, !U) : J == null && D && D.ref != null && aa(D.ref, null, G, D, !0);
  }, V = (D, U, ae, h) => {
    if (D == null)
      i(
        U.el = f(U.children),
        ae,
        h
      );
    else {
      const C = U.el = D.el;
      U.children !== D.children && g(C, U.children);
    }
  }, z = (D, U, ae, h) => {
    D == null ? i(
      U.el = p(U.children || ""),
      ae,
      h
    ) : U.el = D.el;
  }, P = (D, U, ae, h) => {
    [D.el, D.anchor] = v(
      D.children,
      U,
      ae,
      h,
      D.el,
      D.anchor
    );
  }, E = ({ el: D, anchor: U }, ae, h) => {
    let C;
    for (; D && D !== U; )
      C = S(D), i(D, ae, h), D = C;
    i(U, ae, h);
  }, O = ({ el: D, anchor: U }) => {
    let ae;
    for (; D && D !== U; )
      ae = S(D), a(D), D = ae;
    a(U);
  }, F = (D, U, ae, h, C, G, re, ue, se) => {
    if (U.type === "svg" ? re = "svg" : U.type === "math" && (re = "mathml"), D == null)
      q(
        U,
        ae,
        h,
        C,
        G,
        re,
        ue,
        se
      );
    else {
      const Y = D.el && D.el._isVueCE ? D.el : null;
      try {
        Y && Y._beginPatch(), de(
          D,
          U,
          C,
          G,
          re,
          ue,
          se
        );
      } finally {
        Y && Y._endPatch();
      }
    }
  }, q = (D, U, ae, h, C, G, re, ue) => {
    let se, Y;
    const { props: J, shapeFlag: fe, transition: ye, dirs: Ne } = D;
    if (se = D.el = u(
      D.type,
      G,
      J && J.is,
      J
    ), fe & 8 ? _(se, D.children) : fe & 16 && Q(
      D.children,
      se,
      null,
      h,
      C,
      ol(D, G),
      re,
      ue
    ), Ne && Pr(D, null, h, "created"), j(se, D, D.scopeId, re, h), J) {
      for (const Oe in J)
        Oe !== "value" && !na(Oe) && l(se, Oe, null, J[Oe], G, h);
      "value" in J && l(se, "value", null, J.value, G), (Y = J.onVnodeBeforeMount) && En(Y, h, D);
    }
    Ne && Pr(D, null, h, "beforeMount");
    const ee = Y0(C, ye);
    ee && ye.beforeEnter(se), i(se, U, ae), ((Y = J && J.onVnodeMounted) || ee || Ne) && ln(() => {
      try {
        Y && En(Y, h, D), ee && ye.enter(se), Ne && Pr(D, null, h, "mounted");
      } finally {
      }
    }, C);
  }, j = (D, U, ae, h, C) => {
    if (ae && A(D, ae), h)
      for (let G = 0; G < h.length; G++)
        A(D, h[G]);
    if (C) {
      let G = C.subTree;
      if (U === G || eh(G.type) && (G.ssContent === U || G.ssFallback === U)) {
        const re = C.vnode;
        j(
          D,
          re,
          re.scopeId,
          re.slotScopeIds,
          C.parent
        );
      }
    }
  }, Q = (D, U, ae, h, C, G, re, ue, se = 0) => {
    for (let Y = se; Y < D.length; Y++) {
      const J = D[Y] = ue ? Qn(D[Y]) : zn(D[Y]);
      R(
        null,
        J,
        U,
        ae,
        h,
        C,
        G,
        re,
        ue
      );
    }
  }, de = (D, U, ae, h, C, G, re) => {
    const ue = U.el = D.el;
    let { patchFlag: se, dynamicChildren: Y, dirs: J } = U;
    se |= D.patchFlag & 16;
    const fe = D.props || it, ye = U.props || it;
    let Ne;
    if (ae && Ar(ae, !1), (Ne = ye.onVnodeBeforeUpdate) && En(Ne, ae, U, D), J && Pr(U, D, ae, "beforeUpdate"), ae && Ar(ae, !0), (fe.innerHTML && ye.innerHTML == null || fe.textContent && ye.textContent == null) && _(ue, ""), Y ? H(
      D.dynamicChildren,
      Y,
      ue,
      ae,
      h,
      ol(U, C),
      G
    ) : re || Z(
      D,
      U,
      ue,
      null,
      ae,
      h,
      ol(U, C),
      G,
      !1
    ), se > 0) {
      if (se & 16)
        be(ue, fe, ye, ae, C);
      else if (se & 2 && fe.class !== ye.class && l(ue, "class", null, ye.class, C), se & 4 && l(ue, "style", fe.style, ye.style, C), se & 8) {
        const ee = U.dynamicProps;
        for (let Oe = 0; Oe < ee.length; Oe++) {
          const Fe = ee[Oe], Ge = fe[Fe], nt = ye[Fe];
          (nt !== Ge || Fe === "value") && l(ue, Fe, Ge, nt, C, ae);
        }
      }
      se & 1 && D.children !== U.children && _(ue, U.children);
    } else !re && Y == null && be(ue, fe, ye, ae, C);
    ((Ne = ye.onVnodeUpdated) || J) && ln(() => {
      Ne && En(Ne, ae, U, D), J && Pr(U, D, ae, "updated");
    }, h);
  }, H = (D, U, ae, h, C, G, re) => {
    for (let ue = 0; ue < U.length; ue++) {
      const se = D[ue], Y = U[ue], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (se.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ui(se, Y) || // - In the case of a component, it could contain anything.
        se.shapeFlag & 198) ? x(se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      R(
        se,
        Y,
        J,
        null,
        h,
        C,
        G,
        re,
        !0
      );
    }
  }, be = (D, U, ae, h, C) => {
    if (U !== ae) {
      if (U !== it)
        for (const G in U)
          !na(G) && !(G in ae) && l(
            D,
            G,
            U[G],
            null,
            C,
            h
          );
      for (const G in ae) {
        if (na(G)) continue;
        const re = ae[G], ue = U[G];
        re !== ue && G !== "value" && l(D, G, ue, re, C, h);
      }
      "value" in ae && l(D, "value", U.value, ae.value, C);
    }
  }, xe = (D, U, ae, h, C, G, re, ue, se) => {
    const Y = U.el = D ? D.el : f(""), J = U.anchor = D ? D.anchor : f("");
    let { patchFlag: fe, dynamicChildren: ye, slotScopeIds: Ne } = U;
    Ne && (ue = ue ? ue.concat(Ne) : Ne), D == null ? (i(Y, ae, h), i(J, ae, h), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      ae,
      J,
      C,
      G,
      re,
      ue,
      se
    )) : fe > 0 && fe & 64 && ye && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === ye.length ? (H(
      D.dynamicChildren,
      ye,
      ae,
      C,
      G,
      re,
      ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || C && U === C.subTree) && Jd(
      D,
      U,
      !0
      /* shallow */
    )) : Z(
      D,
      U,
      ae,
      J,
      C,
      G,
      re,
      ue,
      se
    );
  }, I = (D, U, ae, h, C, G, re, ue, se) => {
    U.slotScopeIds = ue, D == null ? U.shapeFlag & 512 ? C.ctx.activate(
      U,
      ae,
      h,
      re,
      se
    ) : we(
      U,
      ae,
      h,
      C,
      G,
      re,
      se
    ) : ie(D, U, se);
  }, we = (D, U, ae, h, C, G, re) => {
    const ue = D.component = ib(
      D,
      h,
      C
    );
    if (Dd(D) && (ue.ctx.renderer = un), ob(ue, !1, re), ue.asyncDep) {
      if (C && C.registerDep(ue, he, re), !D.el) {
        const se = ue.subTree = We(_r);
        z(null, se, U, ae), D.placeholder = se.el;
      }
    } else
      he(
        ue,
        D,
        U,
        ae,
        C,
        G,
        re
      );
  }, ie = (D, U, ae) => {
    const h = U.component = D.component;
    if (z0(D, U, ae))
      if (h.asyncDep && !h.asyncResolved) {
        L(h, U, ae);
        return;
      } else
        h.next = U, h.update();
    else
      U.el = D.el, h.vnode = U;
  }, he = (D, U, ae, h, C, G, re) => {
    const ue = () => {
      if (D.isMounted) {
        let { next: fe, bu: ye, u: Ne, parent: ee, vnode: Oe } = D;
        {
          const vt = Zd(D);
          if (vt) {
            fe && (fe.el = Oe.el, L(D, fe, re)), vt.asyncDep.then(() => {
              ln(() => {
                D.isUnmounted || Y();
              }, C);
            });
            return;
          }
        }
        let Fe = fe, Ge;
        Ar(D, !1), fe ? (fe.el = Oe.el, L(D, fe, re)) : fe = Oe, ye && el(ye), (Ge = fe.props && fe.props.onVnodeBeforeUpdate) && En(Ge, ee, fe, Oe), Ar(D, !0);
        const nt = Bu(D), Ae = D.subTree;
        D.subTree = nt, R(
          Ae,
          nt,
          // parent may have changed if it's in a teleport
          x(Ae.el),
          // anchor may have changed if it's in a fragment
          Vt(Ae),
          D,
          C,
          G
        ), fe.el = nt.el, Fe === null && $0(D, nt.el), Ne && ln(Ne, C), (Ge = fe.props && fe.props.onVnodeUpdated) && ln(
          () => En(Ge, ee, fe, Oe),
          C
        );
      } else {
        let fe;
        const { el: ye, props: Ne } = U, { bm: ee, m: Oe, parent: Fe, root: Ge, type: nt } = D, Ae = oa(U);
        Ar(D, !1), ee && el(ee), !Ae && (fe = Ne && Ne.onVnodeBeforeMount) && En(fe, Fe, U), Ar(D, !0);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(
            nt,
            D.parent ? D.parent.type : void 0
          );
          const vt = D.subTree = Bu(D);
          R(
            null,
            vt,
            ae,
            h,
            D,
            C,
            G
          ), U.el = vt.el;
        }
        if (Oe && ln(Oe, C), !Ae && (fe = Ne && Ne.onVnodeMounted)) {
          const vt = U;
          ln(
            () => En(fe, Fe, vt),
            C
          );
        }
        (U.shapeFlag & 256 || Fe && oa(Fe.vnode) && Fe.vnode.shapeFlag & 256) && D.a && ln(D.a, C), D.isMounted = !0, U = ae = h = null;
      }
    };
    D.scope.on();
    const se = D.effect = new cd(ue);
    D.scope.off();
    const Y = D.update = se.run.bind(se), J = D.job = se.runIfDirty.bind(se);
    J.i = D, J.id = D.uid, se.scheduler = () => rc(J), Ar(D, !0), Y();
  }, L = (D, U, ae) => {
    U.component = D;
    const h = D.vnode.props;
    D.vnode = U, D.next = null, V0(D, U.props, h, ae), G0(D, U.children, ae), rr(), Fu(D), ir();
  }, Z = (D, U, ae, h, C, G, re, ue, se = !1) => {
    const Y = D && D.children, J = D ? D.shapeFlag : 0, fe = U.children, { patchFlag: ye, shapeFlag: Ne } = U;
    if (ye > 0) {
      if (ye & 128) {
        De(
          Y,
          fe,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        );
        return;
      } else if (ye & 256) {
        _e(
          Y,
          fe,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        );
        return;
      }
    }
    Ne & 8 ? (J & 16 && yt(Y, C, G), fe !== Y && _(ae, fe)) : J & 16 ? Ne & 16 ? De(
      Y,
      fe,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se
    ) : yt(Y, C, G, !0) : (J & 8 && _(ae, ""), Ne & 16 && Q(
      fe,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se
    ));
  }, _e = (D, U, ae, h, C, G, re, ue, se) => {
    D = D || vi, U = U || vi;
    const Y = D.length, J = U.length, fe = Math.min(Y, J);
    let ye;
    for (ye = 0; ye < fe; ye++) {
      const Ne = U[ye] = se ? Qn(U[ye]) : zn(U[ye]);
      R(
        D[ye],
        Ne,
        ae,
        null,
        C,
        G,
        re,
        ue,
        se
      );
    }
    Y > J ? yt(
      D,
      C,
      G,
      !0,
      !1,
      fe
    ) : Q(
      U,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se,
      fe
    );
  }, De = (D, U, ae, h, C, G, re, ue, se) => {
    let Y = 0;
    const J = U.length;
    let fe = D.length - 1, ye = J - 1;
    for (; Y <= fe && Y <= ye; ) {
      const Ne = D[Y], ee = U[Y] = se ? Qn(U[Y]) : zn(U[Y]);
      if (Ui(Ne, ee))
        R(
          Ne,
          ee,
          ae,
          null,
          C,
          G,
          re,
          ue,
          se
        );
      else
        break;
      Y++;
    }
    for (; Y <= fe && Y <= ye; ) {
      const Ne = D[fe], ee = U[ye] = se ? Qn(U[ye]) : zn(U[ye]);
      if (Ui(Ne, ee))
        R(
          Ne,
          ee,
          ae,
          null,
          C,
          G,
          re,
          ue,
          se
        );
      else
        break;
      fe--, ye--;
    }
    if (Y > fe) {
      if (Y <= ye) {
        const Ne = ye + 1, ee = Ne < J ? U[Ne].el : h;
        for (; Y <= ye; )
          R(
            null,
            U[Y] = se ? Qn(U[Y]) : zn(U[Y]),
            ae,
            ee,
            C,
            G,
            re,
            ue,
            se
          ), Y++;
      }
    } else if (Y > ye)
      for (; Y <= fe; )
        Be(D[Y], C, G, !0), Y++;
    else {
      const Ne = Y, ee = Y, Oe = /* @__PURE__ */ new Map();
      for (Y = ee; Y <= ye; Y++) {
        const st = U[Y] = se ? Qn(U[Y]) : zn(U[Y]);
        st.key != null && Oe.set(st.key, Y);
      }
      let Fe, Ge = 0;
      const nt = ye - ee + 1;
      let Ae = !1, vt = 0;
      const gn = new Array(nt);
      for (Y = 0; Y < nt; Y++) gn[Y] = 0;
      for (Y = Ne; Y <= fe; Y++) {
        const st = D[Y];
        if (Ge >= nt) {
          Be(st, C, G, !0);
          continue;
        }
        let Jt;
        if (st.key != null)
          Jt = Oe.get(st.key);
        else
          for (Fe = ee; Fe <= ye; Fe++)
            if (gn[Fe - ee] === 0 && Ui(st, U[Fe])) {
              Jt = Fe;
              break;
            }
        Jt === void 0 ? Be(st, C, G, !0) : (gn[Jt - ee] = Y + 1, Jt >= vt ? vt = Jt : Ae = !0, R(
          st,
          U[Jt],
          ae,
          null,
          C,
          G,
          re,
          ue,
          se
        ), Ge++);
      }
      const _t = Ae ? q0(gn) : vi;
      for (Fe = _t.length - 1, Y = nt - 1; Y >= 0; Y--) {
        const st = ee + Y, Jt = U[st], Ti = U[st + 1], Ei = st + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ti.el || Qd(Ti)
        ) : h;
        gn[Y] === 0 ? R(
          null,
          Jt,
          ae,
          Ei,
          C,
          G,
          re,
          ue,
          se
        ) : Ae && (Fe < 0 || Y !== _t[Fe] ? Re(Jt, ae, Ei, 2) : Fe--);
      }
    }
  }, Re = (D, U, ae, h, C = null) => {
    const { el: G, type: re, transition: ue, children: se, shapeFlag: Y } = D;
    if (Y & 6) {
      Re(D.component.subTree, U, ae, h);
      return;
    }
    if (Y & 128) {
      D.suspense.move(U, ae, h);
      return;
    }
    if (Y & 64) {
      re.move(D, U, ae, un);
      return;
    }
    if (re === Je) {
      i(G, U, ae);
      for (let fe = 0; fe < se.length; fe++)
        Re(se[fe], U, ae, h);
      i(D.anchor, U, ae);
      return;
    }
    if (re === wo) {
      E(D, U, ae);
      return;
    }
    if (h !== 2 && Y & 1 && ue)
      if (h === 0)
        ue.beforeEnter(G), i(G, U, ae), ln(() => ue.enter(G), C);
      else {
        const { leave: fe, delayLeave: ye, afterLeave: Ne } = ue, ee = () => {
          D.ctx.isUnmounted ? a(G) : i(G, U, ae);
        }, Oe = () => {
          G._isLeaving && G[f0](
            !0
            /* cancelled */
          ), fe(G, () => {
            ee(), Ne && Ne();
          });
        };
        ye ? ye(G, ee, Oe) : Oe();
      }
    else
      i(G, U, ae);
  }, Be = (D, U, ae, h = !1, C = !1) => {
    const {
      type: G,
      props: re,
      ref: ue,
      children: se,
      dynamicChildren: Y,
      shapeFlag: J,
      patchFlag: fe,
      dirs: ye,
      cacheIndex: Ne,
      memo: ee
    } = D;
    if (fe === -2 && (C = !1), ue != null && (rr(), aa(ue, null, ae, D, !0), ir()), Ne != null && (U.renderCache[Ne] = void 0), J & 256) {
      U.ctx.deactivate(D);
      return;
    }
    const Oe = J & 1 && ye, Fe = !oa(D);
    let Ge;
    if (Fe && (Ge = re && re.onVnodeBeforeUnmount) && En(Ge, U, D), J & 6)
      Dt(D.component, ae, h);
    else {
      if (J & 128) {
        D.suspense.unmount(ae, h);
        return;
      }
      Oe && Pr(D, null, U, "beforeUnmount"), J & 64 ? D.type.remove(
        D,
        U,
        ae,
        un,
        h
      ) : Y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== Je || fe > 0 && fe & 64) ? yt(
        Y,
        U,
        ae,
        !1,
        !0
      ) : (G === Je && fe & 384 || !C && J & 16) && yt(se, U, ae), h && je(D);
    }
    const nt = ee != null && Ne == null;
    (Fe && (Ge = re && re.onVnodeUnmounted) || Oe || nt) && ln(() => {
      Ge && En(Ge, U, D), Oe && Pr(D, null, U, "unmounted"), nt && (D.el = null);
    }, ae);
  }, je = (D) => {
    const { type: U, el: ae, anchor: h, transition: C } = D;
    if (U === Je) {
      bt(ae, h);
      return;
    }
    if (U === wo) {
      O(D);
      return;
    }
    const G = () => {
      a(ae), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (D.shapeFlag & 1 && C && !C.persisted) {
      const { leave: re, delayLeave: ue } = C, se = () => re(ae, G);
      ue ? ue(D.el, G, se) : se();
    } else
      G();
  }, bt = (D, U) => {
    let ae;
    for (; D !== U; )
      ae = S(D), a(D), D = ae;
    a(U);
  }, Dt = (D, U, ae) => {
    const { bum: h, scope: C, job: G, subTree: re, um: ue, m: se, a: Y } = D;
    Wu(se), Wu(Y), h && el(h), C.stop(), G && (G.flags |= 8, Be(re, D, U, ae)), ue && ln(ue, U), ln(() => {
      D.isUnmounted = !0;
    }, U);
  }, yt = (D, U, ae, h = !1, C = !1, G = 0) => {
    for (let re = G; re < D.length; re++)
      Be(D[re], U, ae, h, C);
  }, Vt = (D) => {
    if (D.shapeFlag & 6)
      return Vt(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const U = S(D.anchor || D.el), ae = U && U[c0];
    return ae ? S(ae) : U;
  };
  let Pt = !1;
  const Ht = (D, U, ae) => {
    let h;
    D == null ? U._vnode && (Be(U._vnode, null, null, !0), h = U._vnode.component) : R(
      U._vnode || null,
      D,
      U,
      null,
      null,
      null,
      ae
    ), U._vnode = D, Pt || (Pt = !0, Fu(h), kd(), Pt = !1);
  }, un = {
    p: R,
    um: Be,
    m: Re,
    r: je,
    mt: we,
    mc: Q,
    pc: Z,
    pbc: H,
    n: Vt,
    o: e
  };
  return {
    render: Ht,
    hydrate: void 0,
    createApp: E0(Ht)
  };
}
function ol({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ar({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Y0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jd(e, t, n = !1) {
  const i = e.children, a = t.children;
  if ($e(i) && $e(a))
    for (let l = 0; l < i.length; l++) {
      const u = i[l];
      let f = a[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[l] = Qn(a[l]), f.el = u.el), !n && f.patchFlag !== -2 && Jd(u, f)), f.type === cs && (f.patchFlag === -1 && (f = a[l] = Qn(f)), f.el = u.el), f.type === _r && !f.el && (f.el = u.el);
    }
}
function q0(e) {
  const t = e.slice(), n = [0];
  let i, a, l, u, f;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const g = e[i];
    if (g !== 0) {
      if (a = n[n.length - 1], e[a] < g) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, u = n.length - 1; l < u; )
        f = l + u >> 1, e[n[f]] < g ? l = f + 1 : u = f;
      g < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, u = n[l - 1]; l-- > 0; )
    n[l] = u, u = t[u];
  return n;
}
function Zd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zd(t);
}
function Wu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qd(t.subTree) : null;
}
const eh = (e) => e.__isSuspense;
function X0(e, t) {
  t && t.pendingBranch ? $e(e) ? t.effects.push(...e) : t.effects.push(e) : i0(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), _r = /* @__PURE__ */ Symbol.for("v-cmt"), wo = /* @__PURE__ */ Symbol.for("v-stc"), la = [];
let mn = null;
function Me(e = !1) {
  la.push(mn = e ? null : []);
}
function J0() {
  la.pop(), mn = la[la.length - 1] || null;
}
let ba = 1;
function Yu(e, t = !1) {
  ba += e, e < 0 && mn && t && (mn.hasOnce = !0);
}
function th(e) {
  return e.dynamicChildren = ba > 0 ? mn || vi : null, J0(), ba > 0 && mn && mn.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return th(
    ce(
      e,
      t,
      n,
      i,
      a,
      l,
      !0
    )
  );
}
function Ii(e, t, n, i, a) {
  return th(
    We(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function nh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ui(e, t) {
  return e.type === t.type && e.key === t.key;
}
const rh = ({ key: e }) => e ?? null, So = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || /* @__PURE__ */ qt(e) || Ve(e) ? { i: pn, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, i = 0, a = null, l = e === Je ? 0 : 1, u = !1, f = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rh(t),
    ref: t && So(t),
    scopeId: Ad,
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
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: pn
  };
  return f ? (cc(p, n), l & 128 && e.normalize(p)) : n && (p.shapeFlag |= Nt(n) ? 8 : 16), ba > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  mn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && mn.push(p), p;
}
const We = Z0;
function Z0(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === Ld) && (e = _r), nh(e)) {
    const f = Ai(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cc(f, n), ba > 0 && !l && mn && (f.shapeFlag & 6 ? mn[mn.indexOf(e)] = f : mn.push(f)), f.patchFlag = -2, f;
  }
  if (fb(e) && (e = e.__vccOpts), t) {
    t = Q0(t);
    let { class: f, style: p } = t;
    f && !Nt(f) && (t.class = pt(f)), tt(p) && (/* @__PURE__ */ tc(p) && !$e(p) && (p = Xt({}, p)), t.style = kt(p));
  }
  const u = Nt(e) ? 1 : eh(e) ? 128 : u0(e) ? 64 : tt(e) ? 4 : Ve(e) ? 2 : 0;
  return ce(
    e,
    t,
    n,
    i,
    a,
    u,
    l,
    !0
  );
}
function Q0(e) {
  return e ? /* @__PURE__ */ tc(e) || Gd(e) ? Xt({}, e) : e : null;
}
function Ai(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: u, children: f, transition: p } = e, g = t ? gr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && rh(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? $e(l) ? l.concat(So(t)) : [l, So(t)] : So(t)
    ) : l,
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
    patchFlag: t && e.type !== Je ? u === -1 ? 16 : u | 16 : u,
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
  return p && i && ac(
    _,
    p.clone(_)
  ), _;
}
function eb(e = " ", t = 0) {
  return We(cs, null, e, t);
}
function tb(e, t) {
  const n = We(wo, null, e);
  return n.staticCount = t, n;
}
function Et(e = "", t = !1) {
  return t ? (Me(), Ii(_r, null, e)) : We(_r, null, e);
}
function zn(e) {
  return e == null || typeof e == "boolean" ? We(_r) : $e(e) ? We(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nh(e) ? Qn(e) : We(cs, null, String(e));
}
function Qn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ai(e);
}
function cc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if ($e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), cc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Gd(t) ? t._ctx = pn : a === 3 && pn && (pn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ve(t) ? (t = { default: t, _ctx: pn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [eb(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = pt([t.class, i.class]));
      else if (a === "style")
        t.style = kt([t.style, i.style]);
      else if (Qo(a)) {
        const l = t[a], u = i[a];
        u && l !== u && !($e(l) && l.includes(u)) ? t[a] = l ? [].concat(l, u) : u : u == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !es(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function En(e, t, n, i = null) {
  Un(e, t, 7, [
    n,
    i
  ]);
}
const nb = jd();
let rb = 0;
function ib(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || nb, l = {
    uid: rb++,
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
    scope: new Pg(
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
    propsOptions: Wd(i, a),
    emitsOptions: Vd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: it,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: it,
    data: it,
    props: it,
    attrs: it,
    slots: it,
    refs: it,
    setupState: it,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = R0.bind(null, l), e.ce && e.ce(l), l;
}
let Yt = null;
const ab = () => Yt || pn;
let zo, El;
{
  const e = rs(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((u) => u(l)) : a[0](l);
    };
  };
  zo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Yt = n
  ), El = t(
    "__VUE_SSR_SETTERS__",
    (n) => ya = n
  );
}
const Ma = (e) => {
  const t = Yt;
  return zo(e), e.scope.on(), () => {
    e.scope.off(), zo(t);
  };
}, qu = () => {
  Yt && Yt.scope.off(), zo(null);
};
function ih(e) {
  return e.vnode.shapeFlag & 4;
}
let ya = !1;
function ob(e, t = !1, n = !1) {
  t && El(t);
  const { props: i, children: a } = e.vnode, l = ih(e);
  j0(e, i, l, t), B0(e, a, n || t);
  const u = l ? sb(e, t) : void 0;
  return t && El(!1), u;
}
function sb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, M0);
  const { setup: i } = n;
  if (i) {
    rr();
    const a = e.setupContext = i.length > 1 ? cb(e) : null, l = Ma(e), u = Na(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = nd(u);
    if (ir(), l(), (f || e.sp) && !oa(e) && Ed(e), f) {
      if (u.then(qu, qu), t)
        return u.then((p) => {
          Xu(e, p);
        }).catch((p) => {
          os(p, e, 0);
        });
      e.asyncDep = u;
    } else
      Xu(e, u);
  } else
    ah(e);
}
function Xu(e, t, n) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = Sd(t)), ah(e);
}
function ah(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Vn);
  {
    const a = Ma(e);
    rr();
    try {
      k0(e);
    } finally {
      ir(), a();
    }
  }
}
const lb = {
  get(e, t) {
    return Wt(e, "get", ""), e[t];
  }
};
function cb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sd(Yg(e.exposed)), {
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
function ub(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fb(e) {
  return Ve(e) && "__vccOpts" in e;
}
const St = (e, t) => /* @__PURE__ */ Qg(e, t, ya), db = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dl;
const Ju = typeof window < "u" && window.trustedTypes;
if (Ju)
  try {
    Dl = /* @__PURE__ */ Ju.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const oh = Dl ? (e) => Dl.createHTML(e) : (e) => e, hb = "http://www.w3.org/2000/svg", pb = "http://www.w3.org/1998/Math/MathML", Jn = typeof document < "u" ? document : null, Zu = Jn && /* @__PURE__ */ Jn.createElement("template"), mb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Jn.createElementNS(hb, e) : t === "mathml" ? Jn.createElementNS(pb, e) : n ? Jn.createElement(e, { is: n }) : Jn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Jn.createTextNode(e),
  createComment: (e) => Jn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Jn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, l) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Zu.innerHTML = oh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Zu.content;
      if (i === "svg" || i === "mathml") {
        const p = f.firstChild;
        for (; p.firstChild; )
          f.appendChild(p.firstChild);
        f.removeChild(p);
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
}, gb = /* @__PURE__ */ Symbol("_vtc");
function bb(e, t, n) {
  const i = e[gb];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $o = /* @__PURE__ */ Symbol("_vod"), sh = /* @__PURE__ */ Symbol("_vsh"), uc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[$o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Bi(e, !0), i.enter(e)) : i.leave(e, () => {
      Bi(e, !1);
    }) : Bi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bi(e, t);
  }
};
function Bi(e, t) {
  e.style.display = t ? e[$o] : "none", e[sh] = !t;
}
const yb = /* @__PURE__ */ Symbol(""), vb = /(?:^|;)\s*display\s*:/;
function _b(e, t, n) {
  const i = e.style, a = Nt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Nt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && No(i, f, "");
        }
      else
        for (const u in t)
          n[u] == null && No(i, u, "");
    for (const u in n)
      u === "display" && (l = !0), No(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[yb];
      u && (n += ";" + u), i.cssText = n, l = vb.test(n);
    }
  } else t && e.removeAttribute("style");
  $o in e && (e[$o] = l ? i.display : "", e[sh] && (i.display = "none"));
}
const Qu = /\s*!important$/;
function No(e, t, n) {
  if ($e(n))
    n.forEach((i) => No(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = xb(e, t);
    Qu.test(n) ? e.setProperty(
      Wr(i),
      n.replace(Qu, ""),
      "important"
    ) : e[i] = n;
  }
}
const ef = ["Webkit", "Moz", "ms"], sl = {};
function xb(e, t) {
  const n = sl[t];
  if (n)
    return n;
  let i = nn(t);
  if (i !== "filter" && i in e)
    return sl[t] = i;
  i = ns(i);
  for (let a = 0; a < ef.length; a++) {
    const l = ef[a] + i;
    if (l in e)
      return sl[t] = l;
  }
  return t;
}
const tf = "http://www.w3.org/1999/xlink";
function nf(e, t, n, i, a, l = Mg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(tf, t.slice(6, t.length)) : e.setAttributeNS(tf, t, n) : n == null || l && !od(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Hn(n) ? String(n) : n
  );
}
function rf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? oh(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = od(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function wb(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Sb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const af = /* @__PURE__ */ Symbol("_vei");
function Nb(e, t, n, i, a = null) {
  const l = e[af] || (e[af] = {}), u = l[t];
  if (i && u)
    u.value = i;
  else {
    const [f, p] = Mb(t);
    if (i) {
      const g = l[t] = Ab(
        i,
        a
      );
      wb(e, f, g, p);
    } else u && (Sb(e, f, u, p), l[t] = void 0);
  }
}
const of = /(?:Once|Passive|Capture)$/;
function Mb(e) {
  let t;
  if (of.test(e)) {
    t = {};
    let i;
    for (; i = e.match(of); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wr(e.slice(2)), t];
}
let ll = 0;
const kb = /* @__PURE__ */ Promise.resolve(), Pb = () => ll || (kb.then(() => ll = 0), ll = Date.now());
function Ab(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Un(
      Cb(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Pb(), n;
}
function Cb(e, t) {
  if ($e(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const sf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ib = (e, t, n, i, a, l) => {
  const u = a === "svg";
  t === "class" ? bb(e, i, u) : t === "style" ? _b(e, n, i) : Qo(t) ? es(t) || Nb(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tb(e, t, i, u)) ? (rf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && nf(e, t, i, u, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Eb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Nt(i))) ? rf(e, nn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), nf(e, t, i, u));
};
function Tb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sf(t) && Ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return sf(t) && Nt(n) ? !1 : t in e;
}
function Eb(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = nn(t);
  return Array.isArray(n) ? n.some((a) => nn(a) === i) : Object.keys(n).some((a) => nn(a) === i);
}
const Db = ["ctrl", "shift", "alt", "meta"], Rb = {
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
  exact: (e, t) => Db.some((n) => e[`${n}Key`] && !t.includes(n))
}, lh = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let u = 0; u < t.length; u++) {
      const f = Rb[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...l);
  }));
}, Ob = /* @__PURE__ */ Xt({ patchProp: Ib }, mb);
let lf;
function Fb() {
  return lf || (lf = K0(Ob));
}
const Lb = ((...e) => {
  const t = Fb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = $b(i);
    if (!a) return;
    const l = t._component;
    !Ve(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, zb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function zb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $b(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const mt = Math.PI / 180, ch = Math.PI * 2, jb = 2048;
function rt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function xr(e, t, n) {
  return { x: e, y: t, z: n };
}
function jo(e, t) {
  return xr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function yi(e, t) {
  return xr(e.x * t, e.y * t, e.z * t);
}
function Mo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function cf(e, t) {
  return xr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Zi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return xr(e.x / t, e.y / t, e.z / t);
}
function Vb(e, t) {
  const n = Number(e || 0) * mt, i = Number(t || 0) * mt, a = Math.cos(i);
  return xr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function ko(e, t, n = 0) {
  const i = Vb(e, t);
  let a = xr(0, 1, 0);
  Math.abs(Mo(i, a)) > 0.999 && (a = xr(0, 0, 1));
  let l = Zi(cf(a, i)), u = Zi(cf(i, l));
  const f = Number(n || 0) * mt, p = Math.cos(f), g = Math.sin(f), _ = jo(yi(l, p), yi(u, g)), x = jo(yi(l, -g), yi(u, p));
  return l = Zi(_), u = Zi(x), { fwd: i, right: l, up: u };
}
function Hb(e, t) {
  const n = (Number(e || 0) - 0.5) * ch, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return xr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function uf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), u = Math.max(512, jb), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function ff(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function cl(e, t, n) {
  const i = ff(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = ff(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(u);
  }
  return l;
}
const ul = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Ub = `#version 300 es
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
}`, Bb = `#version 300 es
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
}`, Gb = `#version 300 es
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
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(rt(i, 1, 179) * mt * 0.5) * (n / Math.max(t, 1))) / mt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: rt(i, 1, 179),
    vFovDeg: rt(a, 0.1, 179)
  };
}
function Kb(e) {
  const t = ko(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(rt(Number(e.hFovDeg), 0.1, 179) * 0.5 * mt),
    tanY: Math.tan(rt(Number(e.vFovDeg), 0.1, 179) * 0.5 * mt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: rt(Number(e.opacity ?? 1), 0, 1)
  };
}
function Wb(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, u = null, f = null, p = null, g = null, _ = null, x = null, S = null, A = !1, v = uf(1, 1, 1), R = null, V = null, z = null, P = null, E = null;
  const O = /* @__PURE__ */ new Map();
  let F = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, q = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, j = {
    paint: !1,
    mask: !1
  };
  function Q(C = null, G = null) {
    const re = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, re), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, C ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), re;
  }
  function de() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = cl(n, ul, Ub), a = cl(n, ul, Bb), l = cl(n, ul, Gb), R = {
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
      }, z = {
        texture: n.getUniformLocation(l, "u_texture"),
        mode: n.getUniformLocation(l, "u_mode"),
        viewRight: n.getUniformLocation(l, "u_viewRight"),
        viewUp: n.getUniformLocation(l, "u_viewUp"),
        viewFwd: n.getUniformLocation(l, "u_viewFwd"),
        viewHfov: n.getUniformLocation(l, "u_viewHfov"),
        viewVfov: n.getUniformLocation(l, "u_viewVfov"),
        stickerRight: n.getUniformLocation(l, "u_stickerRight"),
        stickerUp: n.getUniformLocation(l, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(l, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(l, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(l, "u_stickerTanY"),
        crop: n.getUniformLocation(l, "u_crop"),
        opacity: n.getUniformLocation(l, "u_opacity")
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
      ]), n.STATIC_DRAW), f = Q(n.REPEAT, n.CLAMP_TO_EDGE), p = Q(n.REPEAT, n.CLAMP_TO_EDGE), g = Q(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function H() {
    var C;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), p && n.deleteTexture(p), g && n.deleteTexture(g), O.forEach((G) => {
          De(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (C = n.getExtension("WEBGL_lose_context")) == null || C.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, u = null, f = null, p = null, g = null, O.clear(), _ = null, x = null, S = null, q = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, j = {
        paint: !1,
        mask: !1
      }, P = null, E = null, A = !1;
    }
  }
  function be(C, G, re = 1) {
    v = uf(C, G, re), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function xe(C) {
    C === "background" ? _ = null : C === "paint" ? x = null : S = null, q[C] && (q[C].width = 0, q[C].height = 0);
  }
  function I() {
    j.paint = !1, j.mask = !1;
  }
  function we(C) {
    I(), C === "paint" ? j.paint = !0 : C === "mask" && (j.mask = !0);
  }
  function ie(C, G, re = [], ue = { width: 0, height: 0 }, se = !1) {
    if (!n || !C || !G) return !1;
    const Y = Number(G.width || G.videoWidth || G.naturalWidth || 0), J = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(Y > 1) || !(J > 1)) return !1;
    const fe = Array.isArray(re) ? re.filter((ye) => ye && ye.w > 0 && ye.h > 0) : [];
    if (!fe.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, C), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, se ? 1 : 0), ue.width !== Y || ue.height !== J)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), ue.width = Y, ue.height = J, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), E = P.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const ye of fe) {
      const Ne = Math.max(0, Math.floor(Number(ye.x || 0))), ee = Math.max(0, Math.floor(Number(ye.y || 0))), Oe = Math.min(Y - Ne, Math.ceil(Number(ye.w || 0))), Fe = Math.min(J - ee, Math.ceil(Number(ye.h || 0)));
      if (!(Oe <= 0 || Fe <= 0)) {
        if (P.width !== Oe || P.height !== Fe) {
          if (P.width = Oe, P.height = Fe, E = P.getContext("2d"), !E)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          E.clearRect(0, 0, Oe, Fe);
        E.drawImage(G, Ne, ee, Oe, Fe, 0, 0, Oe, Fe), n.texSubImage2D(n.TEXTURE_2D, 0, Ne, ee, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function he(C, G, re, ue, se = null, Y = !1) {
    if (!de()) return !1;
    if (!re)
      return xe(C), !1;
    const J = String(ue ?? ""), fe = C === "background" ? _ : C === "paint" ? x : S, ye = q[C], Ne = Number(re.width || re.videoWidth || re.naturalWidth || 0), ee = Number(re.height || re.videoHeight || re.naturalHeight || 0), Oe = ye.width !== Ne || ye.height !== ee;
    if (fe === J && !Oe && !(Array.isArray(se) && se.length)) return !0;
    if (!(Ne > 0) || !(ee > 0))
      return xe(C), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y ? 1 : 0), !(Array.isArray(se) && se.length ? ie(G, re, se, ye, Y) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, re), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe(C), !1;
      ye.width = Ne, ye.height = ee;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), C === "background" ? _ = J : C === "paint" ? x = J : S = J, !0;
  }
  function L(C, G) {
    return he("background", f, C, G, null, !0);
  }
  function Z(C, G, re = null) {
    return he("paint", p, C, G, re, !0);
  }
  function _e(C, G, re = null) {
    return he("mask", g, C, G, re, !0);
  }
  function De(C) {
    C != null && C.texture && n && n.deleteTexture(C.texture);
  }
  function Re(C = /* @__PURE__ */ new Set()) {
    O.forEach((G, re) => {
      C.has(re) || (De(G), O.delete(re));
    });
  }
  function Be(C) {
    if (!n || !(C != null && C.assetId) || !(C != null && C.source)) return null;
    const G = String(C.assetId), re = String(C.revision ?? ""), ue = C.source, se = Number(ue.width || ue.naturalWidth || ue.videoWidth || 0), Y = Number(ue.height || ue.naturalHeight || ue.videoHeight || 0);
    if (se <= 0 || Y <= 0) return null;
    let J = O.get(G);
    if (J || (J = {
      texture: Q(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, O.set(G, J)), J.revision !== re || J.width !== se || J.height !== Y) {
      if (n.bindTexture(n.TEXTURE_2D, J.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ue), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J.revision = re, J.width = se, J.height = Y;
    }
    return J.texture;
  }
  function je(C = []) {
    if (!de()) return !1;
    const G = /* @__PURE__ */ new Set();
    return C.forEach((re) => {
      !(re != null && re.assetId) || !(re != null && re.source) || (G.add(String(re.assetId)), Be(re));
    }), Re(G), !0;
  }
  function bt() {
    return de() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Dt(C) {
    n.useProgram(C), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function yt(C, G = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Dt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(R.background, 0), n.uniform2f(R.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(R.mode, (C == null ? void 0 : C.mode) === "unwrap" ? 0 : (C == null ? void 0 : C.mode) === "cutout" ? 2 : 1);
    const re = Gi(C, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(R.yaw, Number(re.yawDeg || 0) * mt), n.uniform1f(R.pitch, Number(re.pitchDeg || 0) * mt), n.uniform1f(R.roll, Number(re.rollDeg || 0) * mt), n.uniform1f(R.hFov, rt(Number(re.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(R.vFov, rt(Number(re.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(R.opacity, rt(Number(G.backgroundOpacity ?? 1), 0, 1));
    const ue = Number((C == null ? void 0 : C.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(R.coverage, ue), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Vt(C, G = {}) {
    const re = j.paint && x != null, ue = j.mask && S != null;
    if (!re && !ue) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (C == null ? void 0 : C.mode) === "unwrap" ? 0 : (C == null ? void 0 : C.mode) === "cutout" ? 2 : 1);
    const se = Gi(C, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(se.yawDeg || 0) * mt), n.uniform1f(V.pitch, Number(se.pitchDeg || 0) * mt), n.uniform1f(V.roll, Number(se.rollDeg || 0) * mt), n.uniform1f(V.hFov, rt(Number(se.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(V.vFov, rt(Number(se.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(V.paintOpacity, rt(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, rt(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, re ? 1 : 0), n.uniform1i(V.hasMask, ue ? 1 : 0), n.uniform1i(V.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Pt(C, G) {
    var ye, Ne, ee, Oe, Fe, Ge, nt;
    const re = Array.isArray(C == null ? void 0 : C.objects) ? C.objects : [];
    if (!re.length) {
      I(), Re(/* @__PURE__ */ new Set());
      return;
    }
    const ue = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, se = Gi(G, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Y = ko(se.yawDeg, se.pitchDeg, se.rollDeg), J = re.slice().sort((Ae, vt) => Number((Ae == null ? void 0 : Ae.zIndex) || 0) - Number((vt == null ? void 0 : vt.zIndex) || 0)), fe = /* @__PURE__ */ new Set();
    I();
    for (const Ae of J)
      if (!(!Ae || Ae.visible === !1)) {
        if (Ae.type === "sticker") {
          const vt = String(((ye = Ae == null ? void 0 : Ae.params) == null ? void 0 : ye.assetId) || (Ae == null ? void 0 : Ae.id) || "");
          if (!vt) continue;
          fe.add(vt);
          const gn = Be({
            assetId: vt,
            source: Ae.source,
            revision: Ae.revision
          });
          if (!gn) continue;
          const _t = Kb({
            yawDeg: ((Ne = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ne.yawDeg) || 0,
            pitchDeg: ((ee = Ae == null ? void 0 : Ae.transform) == null ? void 0 : ee.pitchDeg) || 0,
            rollDeg: ((Oe = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Oe.rollDeg) || 0,
            hFovDeg: ((Fe = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Fe.hFovDeg) || 30,
            vFovDeg: ((Ge = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ge.vFovDeg) || 30,
            crop: ((nt = Ae == null ? void 0 : Ae.params) == null ? void 0 : nt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ae == null ? void 0 : Ae.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(l), n.uniform1i(z.texture, 0), n.uniform1i(z.mode, ue), n.uniform3f(z.viewRight, Y.right.x, Y.right.y, Y.right.z), n.uniform3f(z.viewUp, Y.up.x, Y.up.y, Y.up.z), n.uniform3f(z.viewFwd, Y.fwd.x, Y.fwd.y, Y.fwd.z), n.uniform1f(z.viewHfov, rt(Number(se.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(z.viewVfov, rt(Number(se.vFovDeg || 60), 0.1, 179) * mt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, gn), n.uniform3f(z.stickerRight, _t.right.x, _t.right.y, _t.right.z), n.uniform3f(z.stickerUp, _t.up.x, _t.up.y, _t.up.z), n.uniform3f(z.stickerFwd, _t.fwd.x, _t.fwd.y, _t.fwd.z), n.uniform1f(z.stickerTanX, Math.max(1e-6, _t.tanX)), n.uniform1f(z.stickerTanY, Math.max(1e-6, _t.tanY)), n.uniform4f(
            z.crop,
            rt(Number(_t.crop.x0 ?? 0), 0, 1),
            rt(Number(_t.crop.y0 ?? 0), 0, 1),
            rt(Number(_t.crop.x1 ?? 1), 0, 1),
            rt(Number(_t.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(z.opacity, _t.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ae.type === "paint" || Ae.type === "raster") {
          if (!Z(Ae.source, Ae.revision ?? "")) continue;
          we("paint"), Vt(G, {
            paintOpacity: Number(Ae.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ae.type === "mask") {
          if (!_e(Ae.source, Ae.revision ?? "")) continue;
          we("mask"), Vt(G, {
            paintOpacity: 0,
            maskOpacity: Number(Ae.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Re(fe), I();
  }
  function Ht(C) {
    return !bt() || !_ ? null : (yt({
      mode: "panorama",
      yawDeg: (C == null ? void 0 : C.yawDeg) || 0,
      pitchDeg: (C == null ? void 0 : C.pitchDeg) || 0,
      fovDeg: (C == null ? void 0 : C.fovDeg) || 100
    }, C), t);
  }
  function un(C) {
    return !bt() || !_ ? null : (yt({ mode: "unwrap" }, C), t);
  }
  function wn(C) {
    return !bt() || !_ ? null : (yt({
      mode: "cutout",
      yawDeg: (C == null ? void 0 : C.yawDeg) || 0,
      pitchDeg: (C == null ? void 0 : C.pitchDeg) || 0,
      rollDeg: (C == null ? void 0 : C.rollDeg) || 0,
      hFovDeg: (C == null ? void 0 : C.hFovDeg) || 90,
      vFovDeg: (C == null ? void 0 : C.vFovDeg) || 60
    }, C), t);
  }
  function D(C = {}) {
    if (!de() || (be(C.width, C.height, C.dpr || 1), !bt())) return null;
    const G = Object.prototype.hasOwnProperty.call(C, "backgroundSource"), re = Object.prototype.hasOwnProperty.call(C, "paintSource"), ue = Object.prototype.hasOwnProperty.call(C, "maskSource"), se = Object.prototype.hasOwnProperty.call(C, "textures"), Y = Object.prototype.hasOwnProperty.call(C, "scene");
    return G && L(C.backgroundSource, C.backgroundRevision ?? ""), re && Z(C.paintSource, C.paintRevision ?? ""), ue && _e(C.maskSource, C.maskRevision ?? ""), se && (je(C.textures || []), F.textures = C.textures || []), Y && (F.scene = C.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(C, "objectPass") && (F.objectPass = C.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(C, "backgroundOpacity") && (F.backgroundOpacity = Number(C.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(C, "showMaskTint") && (F.showMaskTint = C.showMaskTint === !0), Object.prototype.hasOwnProperty.call(C, "coverageDeg") && (F.coverageDeg = Number(C.coverageDeg || 360) === 180 ? 180 : 360), _ && yt(C.view, {
      ...C,
      backgroundOpacity: Number(C.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(C.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), Pt(
      F.objectPass || { objects: [] },
      C.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function U(C = {}) {
    return de() ? !!D({
      ...C,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(C.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function ae(C, G, re) {
    const ue = Math.max(1, Number((C == null ? void 0 : C.viewportWidth) || v.sourceWidth || v.width || 1)), se = Math.max(1, Number((C == null ? void 0 : C.viewportHeight) || v.sourceHeight || v.height || 1)), Y = Number(G), J = Number(re);
    if (!Number.isFinite(Y) || !Number.isFinite(J)) return null;
    if ((C == null ? void 0 : C.mode) === "unwrap")
      return { u: (Y / ue % 1 + 1) % 1, v: rt(J / se, 0, 1) };
    const fe = Gi(C, ue, se);
    if (!fe) return null;
    const ye = ko(fe.yawDeg, fe.pitchDeg, fe.rollDeg), Ne = (Y - ue * 0.5) / (ue * 0.5) * Math.tan(rt(fe.hFovDeg, 1, 179) * mt * 0.5), ee = (se * 0.5 - J) / (se * 0.5) * Math.tan(rt(fe.vFovDeg, 0.1, 179) * mt * 0.5), Oe = Zi(jo(jo(yi(ye.right, Ne), yi(ye.up, ee)), ye.fwd));
    return {
      u: (Math.atan2(Oe.x, Oe.z) / ch + 0.5 + 1) % 1,
      v: rt(0.5 - Math.asin(rt(Oe.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function h(C, G, re) {
    const ue = Math.max(1, Number((C == null ? void 0 : C.viewportWidth) || v.sourceWidth || v.width || 1)), se = Math.max(1, Number((C == null ? void 0 : C.viewportHeight) || v.sourceHeight || v.height || 1));
    if ((C == null ? void 0 : C.mode) === "unwrap")
      return {
        x: (Number(G || 0) % 1 + 1) % 1 * ue,
        y: rt(Number(re || 0), 0, 1) * se,
        visible: !0
      };
    const Y = Gi(C, ue, se);
    if (!Y)
      return { x: ue * 0.5, y: se * 0.5, visible: !1 };
    const J = ko(Y.yawDeg, Y.pitchDeg, Y.rollDeg), fe = Hb(G, re), ye = Mo(fe, J.right), Ne = Mo(fe, J.up), ee = Mo(fe, J.fwd);
    if (ee <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Oe = ue * 0.5 + ye / ee * (ue * 0.5 / Math.tan(rt(Y.hFovDeg, 1, 179) * mt * 0.5)), Fe = se * 0.5 - Ne / ee * (se * 0.5 / Math.tan(rt(Y.vFovDeg, 0.1, 179) * mt * 0.5));
    return { x: Oe, y: Fe, visible: Oe >= 0 && Oe <= ue && Fe >= 0 && Fe <= se };
  }
  return {
    init: de,
    dispose: H,
    setViewport: be,
    setBackgroundErp: L,
    setPaintErp: Z,
    setMaskErp: _e,
    renderPanorama: Ht,
    renderUnwrap: un,
    renderCutout: wn,
    renderScene: D,
    syncState: U,
    screenToErpUv: ae,
    erpUvToScreen: h,
    getCanvas() {
      return t;
    },
    isSupported() {
      return de();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function df(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Yb() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, p) {
    const g = t(u);
    let _ = e.get(g) || null;
    if (!_) {
      const A = document.createElement("canvas"), v = A.getContext("2d");
      if (!v) return null;
      _ = {
        id: g,
        canvas: A,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(g, _);
    }
    const x = df(f), S = df(p);
    return _.width !== x && (_.canvas.width = x, _.width = x), _.height !== S && (_.canvas.height = S, _.height = S), _;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = i(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function l() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: l
  };
}
const qb = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Xb = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function uh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Jb(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Zb(e = {}) {
  const t = Xb.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? uh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Qb(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!qb.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? uh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Jb(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function ey(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Qb(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== u ? l - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Ci(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Zb((e == null ? void 0 : e.background) || {}),
    objectPass: ey((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function ty(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function fc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? ty(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function ny(e, t, n = {}) {
  return e ? fc({
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
function ry(e, t, n = {}) {
  return e ? fc({
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
function iy(e, t, n = {}) {
  return e ? fc({
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
function fh(e = {}) {
  const t = [], n = ny(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = ry(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, u) => {
    const f = iy(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${u}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((l, u) => {
    const f = Number((l == null ? void 0 : l.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== p ? f - p : String((l == null ? void 0 : l.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function dc(e, t) {
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
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Ci({
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
      objects: dc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Qi(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = dc(t, n), a = fh({
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
function ay(e = {}) {
  var l, u, f, p, g, _, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Ci(e), v = Array.isArray((l = A.objectPass) == null ? void 0 : l.objects) ? A.objectPass.objects : [], R = {
      stickers: v.filter((E) => E.type === "sticker").map((E) => {
        var O, F, q, j, Q, de, H, be, xe, I, we, ie, he;
        return {
          id: E.id,
          assetId: String(((O = E == null ? void 0 : E.params) == null ? void 0 : O.assetId) || ((F = E == null ? void 0 : E.params) == null ? void 0 : F.asset_id) || (E == null ? void 0 : E.id) || ""),
          yawDeg: Number(((q = E == null ? void 0 : E.transform) == null ? void 0 : q.yawDeg) ?? ((j = E == null ? void 0 : E.params) == null ? void 0 : j.yawDeg) ?? 0),
          pitchDeg: Number(((Q = E == null ? void 0 : E.transform) == null ? void 0 : Q.pitchDeg) ?? ((de = E == null ? void 0 : E.params) == null ? void 0 : de.pitchDeg) ?? 0),
          rollDeg: Number(((H = E == null ? void 0 : E.transform) == null ? void 0 : H.rollDeg) ?? ((be = E == null ? void 0 : E.params) == null ? void 0 : be.rollDeg) ?? 0),
          hFovDeg: Number(((xe = E == null ? void 0 : E.transform) == null ? void 0 : xe.hFovDeg) ?? ((I = E == null ? void 0 : E.params) == null ? void 0 : I.hFovDeg) ?? 30),
          vFovDeg: Number(((we = E == null ? void 0 : E.transform) == null ? void 0 : we.vFovDeg) ?? ((ie = E == null ? void 0 : E.params) == null ? void 0 : ie.vFovDeg) ?? 30),
          crop: ((he = E == null ? void 0 : E.params) == null ? void 0 : he.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((E == null ? void 0 : E.opacity) ?? 1),
          visible: (E == null ? void 0 : E.visible) !== !1,
          zIndex: Number((E == null ? void 0 : E.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = A.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, V = v.filter((E) => E.type === "sticker").map((E) => {
      var O, F;
      return {
        assetId: String(((O = E == null ? void 0 : E.params) == null ? void 0 : O.assetId) || ((F = E == null ? void 0 : E.params) == null ? void 0 : F.asset_id) || (E == null ? void 0 : E.id) || ""),
        source: E.source || null,
        revision: String((E == null ? void 0 : E.revision) || "")
      };
    }).filter((E) => E.assetId && E.source), z = v.find((E) => E.type === "paint") || null, P = v.find((E) => E.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = A.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((g = A.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (z == null ? void 0 : z.source) || null,
      paintRevision: String((z == null ? void 0 : z.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: V,
      scene: R,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((x = A.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Ci({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...dc(t, n),
        ...fh({
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
function oy(e) {
  let t = null;
  function n(l = {}) {
    const u = ay(l);
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
function Vr(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => Wb(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Yb(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => oy(V), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const p = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const z = { ...V }, P = a.syncState(z);
        return P && (f = z, P);
      }
      return f = { ...V }, !0;
    }
  });
  function g(V = {}) {
    return p.sync(V);
  }
  function _(V = {}, z = {}) {
    return f ? a.renderScene({
      ...f,
      view: V,
      width: z.width,
      height: z.height,
      dpr: z.dpr,
      backgroundOpacity: z.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: z.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function x(V, z, P = {}, E = {}) {
    if (!z) return !1;
    const O = _(P, {
      ...E,
      width: z.w,
      height: z.h
    });
    return O ? V ? (V.canvas && O === V.canvas || V.drawImage(O, z.x, z.y, z.w, z.h), !0) : !!l && O === l : !1;
  }
  function S(V, z = {}, P = {}) {
    const E = Number(P.width || 0), O = Number(P.height || 0);
    if (!(E > 0) || !(O > 0)) return null;
    const F = u.ensureTarget(V, E, O);
    if (!F) return null;
    const q = _(z, {
      ...P,
      width: E,
      height: O
    });
    return q ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(q, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function A(V) {
    u.clearTarget(V);
  }
  function v() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), f = null;
  }
  function R() {
    f = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: g,
    renderView: _,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: A,
    snapshotState: p.snapshot,
    clearState: R,
    dispose: v
  };
}
function mi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function sy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hf(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let u = i, f = a, p = -1, g = -1;
  for (let x = 0; x < a; x += 1)
    for (let S = 0; S < i; S += 1)
      l[(x * i + S) * 4 + 3] <= t || (S < u && (u = S), x < f && (f = x), S > p && (p = S), x > g && (g = x));
  return p < u || g < f ? null : {
    minX: u,
    minY: f,
    maxX: p,
    maxY: g,
    width: p - u + 1,
    height: g - f + 1,
    aspect: Number(((p - u + 1) / Math.max(1, g - f + 1)).toFixed(4))
  };
}
function hc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function Zn(e, t, n) {
  if (!e) return mi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let fl = null, dl = null, pf = null, mf = null, wt = null, Ki = null, Zt = null, hr = null;
function ly() {
  if (dl) return dl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), dl = n, n;
}
function hl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  fl = Zn(fl, n, i);
  const a = fl;
  dt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", mf !== a.ctx && (pf = a.ctx.createPattern(ly(), "repeat"), mf = a.ctx), a.ctx.fillStyle = pf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function cy(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function uy(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function fy(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function dy(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const ht = /* @__PURE__ */ new Map(), pc = 128;
function hy(e, t, n, i, a, l) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), p = `${u}:${f.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (ht.has(p)) {
    const P = ht.get(p);
    return ht.delete(p), ht.set(p, P), P;
  }
  ht.size >= pc && ht.delete(ht.keys().next().value);
  const g = u * 2 + 2, _ = u + 1, x = hc(g, g), S = x.getContext("2d"), A = f * u, v = u + 1, R = `rgba(${n},${i},${a},${l})`, V = `rgba(${n},${i},${a},0)`, z = S.createRadialGradient(_, _, A, _, _, v);
  return z.addColorStop(0, R), z.addColorStop(1, V), S.fillStyle = z, S.fillRect(0, 0, g, g), ht.set(p, x), x;
}
function py(e, t, n, i, a, l, u) {
  const { r: f, g: p, b: g, a: _ } = i, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, l)), R = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${p}:${g}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${R.toFixed(2)}`;
  if (ht.has(V)) {
    const Q = ht.get(V);
    return ht.delete(V), ht.set(V, Q), Q;
  }
  ht.size >= pc && ht.delete(ht.keys().next().value);
  const z = hc(x, S), P = z.getContext("2d"), E = P.createImageData(x, S), O = E.data, F = Math.max(0, e - t), q = Math.max(0, Math.min(1, n)), j = 1 + A;
  for (let Q = 0; Q < S; Q++)
    for (let de = 0; de < x; de++) {
      const H = de + 0.5 - e, be = Q + 0.5 - t, xe = Math.max(Math.abs(H) - F, 0), we = Math.hypot(xe, be) / t;
      if (we >= 1) continue;
      const ie = we <= q ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - q)), he = 1 - we, L = 1 + A * (1 - he) * (1 - he), Z = 1 - v * he * he, _e = L * Z / j;
      let De = 1;
      if (R > 0) {
        const je = Math.floor((be + t) / 1.5), bt = Math.floor((H + e) / 8), Dt = zr(Ni(je * 41 + 500, bt * 19 + 300));
        De = 1 - R * 0.42 * Dt;
      }
      const Re = Math.round(255 * Math.min(1, _ * ie * _e * De));
      if (Re <= 0) continue;
      const Be = (Q * x + de) * 4;
      O[Be] = f, O[Be + 1] = p, O[Be + 2] = g, O[Be + 3] = Re;
    }
  return P.putImageData(E, 0, 0), ht.set(V, z), z;
}
function Ni(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function zr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function my(e, t, n, i, a, l, u) {
  const f = e + 0.5 - n, p = t + 0.5 - i, g = Math.max(0, n - i), _ = Math.max(Math.abs(f) - g, 0), x = Math.hypot(_, p) / i;
  if (x >= 1) return 0;
  const S = zr(Ni(e * 17 + 3, t * 13 + 7)), A = x + l * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), R = gy(e, t, f, p, n, i), V = l * 0.55;
  if (R < V) return 0;
  const P = 0.45 + 0.55 * ((R - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * v * P));
}
function gy(e, t, n, i, a, l) {
  const u = Math.floor((n + a) / 3), f = Math.floor((i + l) / 2), p = zr(Ni(u * 13 + 700, f * 17 + 400)), g = Math.floor((n + a) / 1.5), _ = Math.floor((i + l) / 1.5), x = zr(Ni(g * 23 + 800, _ * 29 + 500)), S = zr(Ni(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + x * 0.3 + S * 0.15;
}
function by(e, t, n, i, a) {
  const { r: l, g: u, b: f, a: p } = i, g = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${g}:${_}:${n.toFixed(2)}:${l}:${u}:${f}:${p.toFixed(3)}:${x.toFixed(2)}`;
  if (ht.has(S)) {
    const P = ht.get(S);
    return ht.delete(S), ht.set(S, P), P;
  }
  ht.size >= pc && ht.delete(ht.keys().next().value);
  const A = hc(g, _), v = A.getContext("2d"), R = v.createImageData(g, _), V = R.data, z = Math.max(0, Math.min(1, n));
  for (let P = 0; P < _; P++)
    for (let E = 0; E < g; E++) {
      const O = my(E, P, e, t, z, x, p);
      if (O <= 0) continue;
      const F = (P * g + E) * 4;
      V[F] = l, V[F + 1] = u, V[F + 2] = f, V[F + 3] = O;
    }
  return v.putImageData(R, 0, 0), ht.set(S, A), A;
}
function dh(e, t, n) {
  var R, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = fy(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = yy(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((R = t == null ? void 0 : t.angle) == null ? void 0 : R.value) ?? 0), g = dy(t, a), _ = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const z = a * f, P = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = py(z, P, l, u, E, O, F);
  } else if (i === "crayon") {
    const z = a * f, P = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = by(z, P, l, u, E);
  } else
    v = hy(a, l, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: g, desc: n, aspect: f, angle: p, stampKind: i, scatter: A, latitudeCorrection: x };
}
function yy(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), l = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: l
  };
}
function vy(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function gf(e, t, n, i, a) {
  const l = e.angle, u = e.desc.width;
  function f(g, _) {
    l === 0 ? e.ctx.drawImage(e.stampTex, g - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(g, _), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const p = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - p < 0 && f(t + u, n), t + p > u && f(t - u, n);
}
function mc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: g, count: _ } = e.scatter, x = g * e.radiusPx * a, S = Ni(t, n);
    for (let A = 0; A < _; A++) {
      const v = zr(S + A * 2) * Math.PI * 2, R = Math.sqrt(zr(S + A * 2 + 1)) * x, V = t + Math.cos(v) * R, z = n + Math.sin(v) * R, P = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, O = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, F = P * e.aspect * O;
      gf(e, V, z, P, F);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = l * e.aspect * f;
  gf(e, t, n, l, p);
}
function bf(e, t, n) {
  const i = uy(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, u = dh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(A - f[S - 1].x) > a * 0.5 && (A += A < f[S - 1].x ? a : -a), f.push({ x: A, y: v });
  }
  if (mc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let p = f[0], g = f[0], _ = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const A = f[S], v = { x: (g.x + A.x) * 0.5, y: (g.y + A.y) * 0.5 };
    S === 1 ? x = va(u, _.x, _.y, v.x, v.y, x) : x = Vo(u, p, _, v, A, x), p = g, g = A, _ = v;
  }
  f.length === 2 ? va(u, _.x, _.y, g.x, g.y, x) : Vo(u, p, _, g, g, x), e.restore();
}
function Po(e, t, n) {
  var x;
  const i = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, u = vy(t), f = [];
  let p = 1 / 0, g = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = cy(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - f[S - 1].x) > a * 0.5 && (v += v < f[S - 1].x ? a : -a), f.push({ x: v, y: Number(A.y || 0) * l }), v < p && (p = v), v > g && (g = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let A = 1; A < f.length; A++) e.lineTo(f[A].x + S, f[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, _(0), p < 0 && _(a), g > a && _(-a), e.restore();
}
function Qa(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Po(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? bf(e, t, n) : (Ki = Zn(Ki, n.width, n.height), dt(Ki), bf(Ki.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(Ki.canvas, 0, 0), e.restore());
}
function Cr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function va(e, t, n, i, a, l) {
  const u = i - t, f = a - n, p = Math.hypot(u, f);
  if (p < 1e-9) return l;
  let g = e.spacingPx - l;
  for (; g <= p; ) {
    const _ = g / p;
    mc(e, t + u * _, n + f * _, 1), g += e.spacingPx;
  }
  return p - g + e.spacingPx;
}
function Vo(e, t, n, i, a, l) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, g = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, x = f, S = x + p, A = S + g, v = S - x, R = 16;
  let V = l, z = n.x, P = n.y;
  for (let E = 1; E <= R; E++) {
    const O = x + v * E / R, F = ((x - O) * t.x + (O - _) * n.x) / (x - _), q = ((x - O) * t.y + (O - _) * n.y) / (x - _), j = ((S - O) * n.x + (O - x) * i.x) / (S - x), Q = ((S - O) * n.y + (O - x) * i.y) / (S - x), de = ((A - O) * i.x + (O - S) * a.x) / (A - S), H = ((A - O) * i.y + (O - S) * a.y) / (A - S), be = ((S - O) * F + (O - _) * j) / (S - _), xe = ((S - O) * q + (O - _) * Q) / (S - _), I = ((A - O) * j + (O - x) * de) / (A - x), we = ((A - O) * Q + (O - x) * H) / (A - x), ie = ((S - O) * be + (O - x) * I) / (S - x), he = ((S - O) * xe + (O - x) * we) / (S - x);
    V = va(e, z, P, ie, he, V), z = ie, P = he;
  }
  return V;
}
function _y(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, u = l.width, f = n * l.height, p = e.activeStroke;
  let g = t * u;
  if (p && Math.abs(g - p.prev.x) > u * 0.5 && (g += g < p.prev.x ? u : -u), !p) {
    const A = dh(a, i, l), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), R = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", z = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", mc(A, g, f, 1), e.activeStroke = {
      pprev: { x: g, y: f },
      prev: { x: g, y: f },
      lastMidX: g,
      lastMidY: f,
      stampTex: A.stampTex,
      radiusPx: A.radiusPx,
      spacingPx: A.spacingPx,
      aspect: A.aspect,
      angle: A.angle,
      stampKind: A.stampKind,
      scatter: A.scatter,
      latitudeCorrection: A.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: R,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (p.prev.x + g) * 0.5, x = (p.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: p.stampTex,
    radiusPx: p.radiusPx,
    spacingPx: p.spacingPx,
    desc: l,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = va(S, p.lastMidX, p.lastMidY, _, x, p.distSinceStamp) : p.distSinceStamp = Vo(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: _, y: x },
    { x: g, y: f },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: g, y: f }, p.lastMidX = _, p.lastMidY = x, p.pointCount++, e.displayDirty = !0;
}
function Rl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = mi(t, n), u = {
    descriptor: i,
    committedMask: mi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: mi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = mi(t, n);
  let g = null, _ = "", x = null;
  function S(H) {
    return {
      actionGroupId: H,
      descriptor: i,
      committedPaint: mi(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(H) {
    let be = a.get(H);
    return be || (be = S(H), a.set(H, be)), be;
  }
  function v(H) {
    return _ === "mask" ? u : g ? A(g) : f;
  }
  function R(H) {
    var he;
    const be = !x || x.length !== H.length || H.some((L, Z) => L !== x[Z]), xe = _ === "paint" && ((he = g ? a.get(g) : f) == null ? void 0 : he.activeStroke) || null;
    let I = u.displayDirty || f.displayDirty || be;
    for (const L of H) {
      const Z = a.get(L);
      if (Z != null && Z.displayDirty) {
        I = !0;
        break;
      }
    }
    if (xe && (I = !0), !I) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const L of H) {
      const Z = a.get(L);
      Z && (Z.displayDirty = !1);
    }
    x = [...H];
    const we = p.ctx;
    dt(p);
    const ie = !!(xe != null && xe.isEraser);
    for (const L of H) {
      const Z = a.get(L);
      if (!Z) continue;
      const De = g === Z.actionGroupId && _ === "paint" ? Z.activeStroke : null;
      if (ie)
        wt = Zn(wt, t, n), dt(wt), wt.ctx.drawImage(Z.committedPaint.canvas, 0, 0), Cr(wt.ctx, l.canvas), we.drawImage(wt.canvas, 0, 0);
      else if (we.drawImage(Z.committedPaint.canvas, 0, 0), De) {
        const Re = Z.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, De.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = Re, we.drawImage(l.canvas, 0, 0), we.restore();
      }
    }
  }
  function V(H) {
    var xe, I, we, ie, he;
    for (const L of a.values())
      dt(L.committedPaint), dt(L.currentStroke), L.activeStroke = null, L.displayDirty = !0;
    dt(u.committedMask), dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const be = [
      ...Array.isArray((I = (xe = H == null ? void 0 : H.painting) == null ? void 0 : xe.paint) == null ? void 0 : I.strokes) ? H.painting.paint.strokes : [],
      ...Array.isArray((ie = (we = H == null ? void 0 : H.painting) == null ? void 0 : we.mask) == null ? void 0 : ie.strokes) ? H.painting.mask.strokes : []
    ];
    for (const L of be) {
      if (((he = L == null ? void 0 : L.targetSpace) == null ? void 0 : he.kind) !== "ERP_GLOBAL") continue;
      const Z = String((L == null ? void 0 : L.layerKind) || "paint"), De = String((L == null ? void 0 : L.toolKind) || "pen") === "eraser";
      if (Z === "mask") {
        const Re = u.descriptor;
        De ? (wt = Zn(wt, Re.width, Re.height), dt(wt), Qa(wt.ctx, L, Re), Cr(u.committedMask.ctx, wt.canvas)) : Qa(u.committedMask.ctx, L, Re);
        continue;
      }
      if (De) {
        wt = Zn(wt, i.width, i.height), dt(wt), Qa(wt.ctx, L, i);
        for (const Re of a.values())
          Cr(Re.committedPaint.ctx, wt.canvas), Re.displayDirty = !0;
      } else {
        const Re = String((L == null ? void 0 : L.actionGroupId) || "__default__"), Be = A(Re), je = Be.descriptor;
        Qa(Be.committedPaint.ctx, L, je), Be.displayDirty = !0;
      }
    }
    R([...a.keys()]);
  }
  function z(H, be) {
    _ = String((H == null ? void 0 : H.layerKind) || "");
    const xe = String((H == null ? void 0 : H.toolKind) || "") === "eraser";
    if (_ === "mask")
      g = null, dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const I = xe ? f : A(String((H == null ? void 0 : H.actionGroupId) || "__default__"));
      g = xe ? "" : String((H == null ? void 0 : H.actionGroupId) || "__default__"), dt(I.currentStroke), I.activeStroke = null, I.displayDirty = !0;
    }
  }
  function P(H, be) {
    var Z;
    const xe = String((H == null ? void 0 : H.layerKind) || "paint"), I = String((H == null ? void 0 : H.toolKind) || "") === "eraser", we = xe === "mask" ? u : I ? f : A(String((H == null ? void 0 : H.actionGroupId) || g || "__default__")), ie = we.activeStroke, he = we.descriptor;
    if (ie && ie.pointCount > 1) {
      const _e = we.currentStroke.ctx;
      _e.globalCompositeOperation = "source-over";
      const De = {
        ctx: _e,
        stampTex: ie.stampTex,
        radiusPx: ie.radiusPx,
        spacingPx: ie.spacingPx,
        desc: he,
        aspect: ie.aspect,
        angle: ie.angle,
        stampKind: ie.stampKind,
        scatter: ie.scatter,
        latitudeCorrection: ie.latitudeCorrection
      };
      ie.pointCount === 2 ? va(De, ie.lastMidX, ie.lastMidY, ie.prev.x, ie.prev.y, ie.distSinceStamp) : Vo(De, ie.pprev, { x: ie.lastMidX, y: ie.lastMidY }, ie.prev, ie.prev, ie.distSinceStamp);
    }
    we.lassoPreviewActive && (dt(we.currentStroke), Po(we.currentStroke.ctx, H, he), we.lassoPreviewActive = !1);
    const L = xe === "mask" ? u.committedMask : we.committedPaint;
    if (I && xe === "paint")
      for (const _e of a.values())
        Cr(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (I)
      Cr(L.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (ie == null ? void 0 : ie.strokeOpacity) ?? 1));
      L.ctx.save(), L.ctx.globalAlpha = _e, L.ctx.drawImage(we.currentStroke.canvas, 0, 0), L.ctx.restore();
    }
    sy() && (String((H == null ? void 0 : H.toolKind) || ""), String((he == null ? void 0 : he.kind) || ""), Number((he == null ? void 0 : he.width) || 0), Number((he == null ? void 0 : he.height) || 0), String(((Z = H == null ? void 0 : H.targetSpace) == null ? void 0 : Z.viewMode) || ""), Number((H == null ? void 0 : H.aspect) ?? 1), hf(we.currentStroke.canvas), hf(L.canvas), void 0), dt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, g = null, _ = "", R([...a.keys()]);
  }
  function E(H) {
    if (_ === "mask")
      dt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !g)
      dt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (g) {
      const be = a.get(g);
      be && (dt(be.currentStroke), be.activeStroke = null, be.lassoPreviewActive = !1, be.displayDirty = !0);
    }
    g = null, _ = "", R([...a.keys()]);
  }
  function O(H, be) {
    var I;
    if (_ = String((H == null ? void 0 : H.layerKind) || ""), String(((I = H == null ? void 0 : H.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        dt(u.currentStroke), Po(u.currentStroke.ctx, H, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const we = String((H == null ? void 0 : H.toolKind) || "") === "eraser", ie = we ? f : A(String((H == null ? void 0 : H.actionGroupId) || g || "__default__"));
        g = we ? "" : String((H == null ? void 0 : H.actionGroupId) || g || "__default__"), dt(ie.currentStroke), Po(ie.currentStroke.ctx, H, ie.descriptor), ie.lassoPreviewActive = !0, ie.displayDirty = !0;
      }
      R([...a.keys()]);
    }
  }
  function F(H) {
    return R(H ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function q(H) {
    return a.get(String(H)) ?? null;
  }
  function j() {
    return [...a.keys()];
  }
  function Q(H) {
    var he;
    const be = a.get(String(H));
    if (!be) return null;
    const xe = _ === "paint" && g === be.actionGroupId, I = _ === "paint" && ((he = g ? a.get(g) : f) == null ? void 0 : he.activeStroke) || null;
    if (I != null && I.isEraser)
      return Zt = Zn(Zt, t, n), dt(Zt), Zt.ctx.drawImage(be.committedPaint.canvas, 0, 0), Cr(Zt.ctx, l.canvas), Zt.canvas;
    const we = xe ? be.activeStroke : null;
    if (!we) return be.committedPaint.canvas;
    Zt = Zn(Zt, t, n), dt(Zt), Zt.ctx.drawImage(be.committedPaint.canvas, 0, 0);
    const ie = be.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return Zt.ctx.save(), Zt.ctx.globalAlpha = ie, Zt.ctx.drawImage(l.canvas, 0, 0), Zt.ctx.restore(), Zt.canvas;
  }
  function de() {
    return hr = Zn(hr, t, n), dt(hr), hl(hr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (wt = Zn(wt, t, n), dt(wt), wt.ctx.drawImage(u.committedMask.canvas, 0, 0), Cr(wt.ctx, l.canvas), dt(hr), hl(hr.ctx, wt.canvas)) : hl(hr.ctx, l.canvas)), hr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: z,
    appendStrokePoint: _y,
    updateActiveStroke: O,
    commitActiveStroke: P,
    cancelActiveStroke: E,
    getErpTarget: F,
    ensureTarget: v,
    getGroupTarget: q,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: de,
    getAllGroupIds: j
  };
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function pl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function xy(e, t) {
  let n = $t(t) - $t(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const yf = Math.PI / 180, vf = 0.12, wy = 3, Sy = 35, Ny = 140, ea = 100, My = 20, _f = 0.8;
function ky(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = W(Number(e || ea), 1, 179) * yf;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / yf;
}
function Py(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function ds(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ea })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function g(z, P = null) {
    f && f(z, P);
  }
  function _(z, P, E = null, O = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(z || 0), p.drag.lastY = Number(P || 0), p.drag.lastTs = Number(O || performance.now()), p.drag.pointerId = E, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], g("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: E }), !0;
  }
  function x(z, P, E = "pano", O = performance.now()) {
    if (!p.drag.active) return !1;
    const F = Number(O || performance.now()), q = Number(z), j = Number(P), Q = q - p.drag.lastX, de = j - p.drag.lastY;
    p.drag.lastX = q, p.drag.lastY = j, p.drag.lastTs = F;
    const H = i() || { x: 1, y: 1 }, be = Number(H.x || 1), xe = Number(H.y || 1), I = { ...t() };
    let we = 0, ie = 0;
    if (E === "unwrap") {
      const L = a() || { w: 1, h: 1 }, Z = Math.max(1, Number(L.w || 1)), _e = Math.max(1, Number(L.h || 1)), De = Q / Z, Re = de / _e;
      we = -De * 360 * be, ie = Re * 180 * xe;
    } else {
      const L = l() || { w: 0, h: 0 }, Z = Math.max(1, Number(L.w || 0)), _e = Math.max(1, Number(L.h || 0));
      if (Z > 1 && _e > 1) {
        const De = W(Number(I.fov || ea), 1, 179), Re = W(ky(De, Z, _e), 0.1, 179);
        we = -(Q / Z) * De * be, ie = de / _e * Re * xe;
      } else
        we = -Q * vf * be, ie = de * vf * xe;
    }
    I.yaw = $t(Number(I.yaw || 0) + we), I.pitch = W(Number(I.pitch || 0) + ie, -89.9, 89.9), n(I), p.velHistory.push({ ts: F, yaw: I.yaw, pitch: I.pitch });
    let he = 0;
    for (; he < p.velHistory.length - 1 && p.velHistory[he].ts < F - 100; ) he++;
    return he > 0 && p.velHistory.splice(0, he), p.inertia.active = !1, p.inertia.lastTs = F, u(), g("drag", { phase: "move", dx: Q, dy: de, dYaw: we, dPitch: ie }), !0;
  }
  function S(z = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const P = Number(z || performance.now());
    p.drag.lastTs = P;
    const E = p.velHistory.filter((F) => P - F.ts <= 80);
    if (E.length >= 2) {
      const F = E[0], q = E.at(-1), j = Math.max(1e-3, (q.ts - F.ts) / 1e3);
      let Q = q.yaw - F.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), p.inertia.vx = Q / j, p.inertia.vy = (q.pitch - F.pitch) / j;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const O = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = O > My, p.inertia.lastTs = P, g("drag", { phase: "end", speed: O, inertiaActive: p.inertia.active }), !0;
  }
  function A(z = performance.now()) {
    if (!p.inertia.active) return !1;
    const P = Number(z || performance.now()), E = Math.max(1e-3, (P - (p.inertia.lastTs || P)) / 1e3);
    p.inertia.lastTs = P;
    const O = { ...t() };
    O.yaw = $t(Number(O.yaw || 0) + p.inertia.vx * E), O.pitch = W(Number(O.pitch || 0) + p.inertia.vy * E, -89.9, 89.9);
    const F = Math.exp(-5.5 * E);
    return p.inertia.vx *= F, p.inertia.vy *= F, Math.abs(p.inertia.vx) < _f && Math.abs(p.inertia.vy) < _f && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(O), u(), p.inertia.active;
  }
  function v(z) {
    const P = Math.sign(Number(z || 0));
    if (!P) return !1;
    const E = { ...t() }, O = Number(E.fov || ea);
    return E.fov = W(O + P * wy, Sy, Ny), n(E), u(), g("wheel", { deltaSign: P, fovBefore: O, fovAfter: E.fov }), !0;
  }
  function R(z) {
    return v(Math.sign(Py(z)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: ea }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
  }
  return {
    state: p,
    startDrag: _,
    moveDrag: x,
    endDrag: S,
    stepInertia: A,
    applyWheel: v,
    applyWheelEvent: R,
    resetView: V
  };
}
function Ho(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const xf = Math.PI / 180;
function Wi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ay(e) {
  const t = e || {}, n = Wi(t.yaw_deg, 0), i = Wi(t.pitch_deg, 0), a = Wi(t.roll_deg ?? t.rot_deg, 0), l = pl(Wi(t.hFOV_deg, 90), 1, 179), u = pl(Wi(t.vFOV_deg, 60), 1, 179), f = Math.tan(l * xf * 0.5) / Math.max(1e-6, Math.tan(u * xf * 0.5)), p = pl(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: u,
    aspect: p
  };
}
const hh = 0.28;
function Cy(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), i = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), l = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function Iy(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, u = e.visible === !1, f = l && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: W(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: W(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: Cy(e.crop),
    opacity: f ? hh : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function hs(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => Iy(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function ph(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || hs(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var v;
    const p = String((f == null ? void 0 : f.assetId) || "").trim(), g = p || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!g || u.has(g)) return;
    const _ = p ? a[p] : null, x = t(g, _, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), A = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || A <= 0 || (u.add(g), l.push({
      assetId: g,
      source: x,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, g, _, x)) ?? [
        g,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), l;
}
function gc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Ty(e, t = 360) {
  return gc(e, t);
}
function vr(e) {
  const t = Ay(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: ct } = _o;
function Ol() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (_o == null ? void 0 : _o.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Hr = Math.PI / 180, Uo = {}, Ey = { Nu: 24, Nv: 14 }, Dy = 10, Ry = 120;
function Oy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Yi(e) {
  var n, i, a, l, u;
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
    stylePos: String(((l = e.style) == null ? void 0 : l.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function Fy() {
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
function Ur(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const l = Number(i), u = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(u) ? null : [l, u];
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
function mh(e) {
  const t = Ur(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function gh(e, t, n) {
  mh(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Fl(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function bh(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ly(e) {
  return Ho(bh(e));
}
function $r(e = null) {
  var l, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (l = ct == null ? void 0 : ct.canvas) == null ? void 0 : l.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function yh(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: $r(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: $r(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: $r(t)
  };
}
const ca = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = $r(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = $r(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, vh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function vh(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : yh(i, e).chosenPath, l = Fl(e);
      this.activeBackend = l;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (l === a && l !== "none" && u === i && f === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && Mi(e, { keepMonitor: i === "stickers" }), kv(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Fl(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Mi(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Mi(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function zy(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Mi(e, t = {}) {
  var i, a, l, u, f;
  if (!e) return;
  Go.unregister(e), zy(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (l = n.state) != null && l.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const g = String((p == null ? void 0 : p.name) || ""), _ = String((p == null ? void 0 : p.type) || ""), x = Ol();
      return !(g === x || _ === x || g === "pano_preview" || _ === "pano_preview" || g === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ca.unregister(e);
}
function Br(e, t, n) {
  return { x: e, y: t, z: n };
}
function wf(e, t) {
  return Br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function eo(e, t) {
  return Br(e.x * t, e.y * t, e.z * t);
}
function ml(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Sf(e, t) {
  return Br(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function to(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Br(e.x / t, e.y / t, e.z / t);
}
function Dr(e, t) {
  const n = e * Hr, i = t * Hr, a = Math.cos(i);
  return Br(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function bc(e, t, n = 0) {
  const i = Dr(e, t), a = Br(0, 1, 0);
  let l = Sf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Br(1, 0, 0)), l = to(l);
  let u = to(Sf(i, l));
  const f = n * Hr, p = Math.cos(f), g = Math.sin(f), _ = wf(eo(l, p), eo(u, g)), x = wf(eo(l, -g), eo(u, p));
  return { fwd: i, right: to(_), up: to(x) };
}
function $y(e, t = "#00ff00") {
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
function jy(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = _a(e, "state_json")) == null ? void 0 : n.value) || "");
}
function yc(e) {
  var f, p;
  const t = jy(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = _a(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((p = _a(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const u = $y(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function _a(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Nf(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function _h(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Vy(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function xh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function wh(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = Vy(e == null ? void 0 : e.graph, n)), i;
}
function Hy(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function vc(e, t = []) {
  const n = Hy(e), i = [];
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
function Uy(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = vc(e, t).map((g) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(g))).filter((g) => g >= 0), l = n.map((g, _) => ({ input: g, idx: _ })).filter(({ input: g }) => String((g == null ? void 0 : g.type) || "").toUpperCase() === "IMAGE").map(({ idx: g }) => g), u = [.../* @__PURE__ */ new Set([...a, ...l])], f = [];
  for (const g of u) {
    const _ = wh(e, g);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const x = (p = n[g]) == null ? void 0 : p.link;
    if (x == null) continue;
    const S = _h(e == null ? void 0 : e.graph, x), { originId: A } = xh(S);
    A != null && f.push(String(A));
  }
  return [...new Set(f)];
}
const Go = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = tn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var g, _, x, S, A;
        if (!l) return;
        const u = Bo(i, l == null ? void 0 : l.id);
        Uy(l, ["erp_image", "bg_erp"]).some((v) => Bo(i, v)), !(String(l.__panoPreviewMode || "") === "cutout" && !u) && (zl(l), (_ = (g = l.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (x = l.setDirtyCanvas) == null || x.call(l, !0, !0), (A = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
      });
    }, tn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = tn) != null && e.removeEventListener) || (tn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ko(e) {
  var l;
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
  return typeof ((l = tn) == null ? void 0 : l.apiURL) == "function" ? tn.apiURL(a) : a;
}
function By(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Gy(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Ky(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Wy(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (By(t)) return [t];
  const { filename: n, subfolder: i } = Gy(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Ko({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Ky([...a, t]);
}
function Yy(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ko({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function kf(e) {
  const t = ct == null ? void 0 : ct.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Bo(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const u of l)
      if (Bo(u, a)) return t[u];
  }
  return null;
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
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Ko({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = nr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ko(e);
}
function qy(e) {
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
function Xy(e, t) {
  var i;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", l = new URL(n, a);
    return t > 0 && l.searchParams.set("pano_rev", String(t)), l.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function Jy(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((u) => t.push(u));
  }, a = (l, u = 0) => {
    !l || u > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, u + 1), a(l.ui, u + 1), a(l.data, u + 1), a(l.result, u + 1));
  };
  return a(e, 0), t;
}
function Zy(e, t) {
  try {
    const n = Jy(t);
    let i = "";
    for (const a of n)
      if (i = nr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Xy(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Qy(e, t = []) {
  var g, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = vc(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), l = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const x of u) {
    const S = n[x], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = _h(e.graph, A), { originId: R, originSlot: V } = xh(v);
    if (R == null) continue;
    const z = wh(e, x, R);
    if (!z) continue;
    const P = Number(V || 0), E = kf((z == null ? void 0 : z.id) ?? R), O = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (O.length) {
      const Q = [];
      P >= 0 && P < O.length && Q.push(O[P]), Q.push(...O);
      for (const de of Q) {
        const H = nr(de);
        if (H)
          return String((S == null ? void 0 : S.name) || ""), { src: H, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (ct == null ? void 0 : ct.getNodeImageUrls) == "function" ? ct.getNodeImageUrls(z) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const Q = [];
      P >= 0 && P < F.length && Q.push(F[P]), Q.push(...F);
      for (const de of Q) {
        const H = nr(de);
        if (H)
          return String((S == null ? void 0 : S.name) || ""), { src: H, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const q = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (q.length) {
      const Q = [];
      P >= 0 && P < q.length && Q.push(q[P]), Q.push(...q);
      for (const de of Q) {
        const H = nr(de);
        if (H)
          return String((S == null ? void 0 : S.name) || ""), { src: H, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const j = (g = z == null ? void 0 : z.widgets) == null ? void 0 : g.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (j) {
      let Q = nr(j.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (Q = tn.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return String((S == null ? void 0 : S.name) || ""), { src: Q, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = kf(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && p.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && p.push(...f.ui.pano_input_images), p.length > 0)
    for (const x of p) {
      const S = nr(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function ev(e, t = [], n = {}) {
  const i = Qy(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = Wy(a);
  if (!l.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(f);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return u && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const g = new Image(), _ = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = g, e.__panoLinkedInputImageCache.set(f, _);
  let x = -1;
  const S = () => {
    var v, R, V, z;
    if (x += 1, x >= l.length) {
      if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, f)) === _ && _.pendingImg === g && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (z = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || z.call(V, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const A = l[x];
    _.pendingResolvedSrc = A, g.src = A;
  };
  return g.onload = () => {
    var A, v, R;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, f)) === _ && _.pendingImg === g && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || g.src || ""), _.img = g, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || g.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, g.onerror = (A) => {
    var v, R, V, z;
    if (x + 1 < l.length) {
      S();
      return;
    }
    if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, f)) === _ && _.pendingImg === g && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (z = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || z.call(V, f);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), u && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : g;
}
function Ll(e, t = [], n = null, i = {}) {
  const a = ev(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function zl(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function Sh(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ir(e, t, n = "") {
  const i = Sh(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Ry ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function $l(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, f = i / l, p = Math.min(u, f);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function tv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), g = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = i + (l - p) * 0.5, x = a + (u - g) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, x, p, g, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + p * 0.5, x + g * 0.5 + 0.5), e.restore();
}
function no(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function nv(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = t.find((l) => String((l == null ? void 0 : l.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function Nh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, p = a / u;
  return p > l && (p = l, f = l * u), {
    x: n + (a - f) * 0.5,
    y: i + (l - p) * 0.5,
    w: f,
    h: p
  };
}
function rv(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const u = Nh(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function iv(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var f;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof l.computeSize == "function" ? l.computeSize(((f = Ur(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Ao(e) {
  const n = iv(e) + 2, i = 8, a = Ur(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || l < 80 ? null : { x: i, y: n, w: l, h: u };
}
function Mh(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Yy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var p, g, _;
    (g = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || g.call(p), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function av(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, u) => Number((l == null ? void 0 : l.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function jl(e, t) {
  return hs(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Vl(e, t, n) {
  return ph(t, (i, a) => Mh(e, i, a), { scene: n });
}
function ov(e, t) {
  var u;
  const n = Ah(e, t);
  if (!n) return [];
  const i = Ch(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], l = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const p = n.getGroupDisplayCanvas(f);
    return p ? {
      id: `paint_group:${f}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(l.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function sv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, u = (f) => {
    const p = f.x - a, g = f.y - l, _ = Math.hypot(p, g) || 1;
    return { x: f.x + p / _ * i, y: f.y + g / _ * i };
  };
  return [u(e), u(t), u(n)];
}
function Pf(e, t, n, i, a, l, u, f) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [g, _, x] = sv(l, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(g.x, g.y), e.lineTo(_.x, _.y), e.lineTo(x.x, x.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - i.y)) / p, A = (l.x * (a.x - i.x) + u.x * (n.x - a.x) + f.x * (i.x - n.x)) / p, v = (l.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / p, R = (l.y * (i.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - i.y)) / p, V = (l.y * (a.x - i.x) + u.y * (n.x - a.x) + f.y * (i.x - n.x)) / p, z = (l.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, R, A, V, v, z), e.drawImage(t, 0, 0), e.restore();
}
function kh(e, t, n, i) {
  const a = ml(e, t.right), l = ml(e, t.up), u = ml(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = l / u / i, p = a / u / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Ph(e, t, n, i, a, l, u, f = 12, p = 9) {
  var we;
  const g = W(Number(u.hFOV_deg || 30), 1, 179) * Hr, _ = W(Number(u.vFOV_deg || 30), 1, 179) * Hr, x = Math.tan(g * 0.5), S = Math.tan(_ * 0.5), A = u.crop || {}, v = W(Number(A.x0 ?? 0), 0, 1), R = W(Number(A.y0 ?? 0), 0, 1), V = W(Number(A.x1 ?? 1), 0, 1), z = W(Number(A.y1 ?? 1), 0, 1), P = Math.max(1e-4, V - v), E = Math.max(1e-4, z - R), O = bc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), F = [], q = [], j = [], Q = [];
  for (let ie = 0; ie <= p; ie++) {
    const he = ie / p, Z = (1 - (R + he * E) * 2) * S;
    for (let _e = 0; _e <= f; _e++) {
      const De = _e / f, Be = ((v + De * P) * 2 - 1) * x, je = O.fwd.x + O.right.x * Be + O.up.x * Z, bt = O.fwd.y + O.right.y * Be + O.up.y * Z, Dt = O.fwd.z + O.right.z * Be + O.up.z * Z, yt = Math.hypot(je, bt, Dt) || 1e-8, Vt = je / yt, Pt = bt / yt, Ht = Dt / yt, un = Vt * i.right.x + Pt * i.right.y + Ht * i.right.z, wn = Vt * i.up.x + Pt * i.up.y + Ht * i.up.z, D = Vt * i.fwd.x + Pt * i.fwd.y + Ht * i.fwd.z;
      if (D <= 1e-4)
        F[ie] || (F[ie] = []), q[ie] || (q[ie] = []), F[ie][_e] = null, q[ie][_e] = null;
      else {
        const U = wn / D / a, ae = un / D / a;
        F[ie] || (F[ie] = []), q[ie] || (q[ie] = []), F[ie][_e] = n.x + n.w * 0.5 + ae * n.h * 0.5, q[ie][_e] = n.y + n.h * 0.5 - U * n.h * 0.5;
      }
      j[ie] || (j[ie] = []), Q[ie] || (Q[ie] = []), j[ie][_e] = De, Q[ie][_e] = he;
    }
  }
  const de = (we = l.assets) == null ? void 0 : we[u.asset_id], H = Mh(t, u.asset_id, de);
  if (!H || !H.complete || !H.naturalWidth) return;
  const be = Number(H.naturalWidth || H.width || 1), xe = Number(H.naturalHeight || H.height || 1), I = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = I;
  for (let ie = 0; ie < p; ie++)
    for (let he = 0; he < f; he++) {
      const L = F[ie][he], Z = q[ie][he], _e = F[ie][he + 1], De = q[ie][he + 1], Re = F[ie + 1][he], Be = q[ie + 1][he], je = F[ie + 1][he + 1], bt = q[ie + 1][he + 1];
      if (L === null || _e === null || Re === null || je === null) continue;
      const Dt = j[ie][he] * be, yt = Q[ie][he] * xe, Vt = j[ie][he + 1] * be, Pt = Q[ie][he + 1] * xe, Ht = j[ie + 1][he] * be, un = Q[ie + 1][he] * xe, wn = j[ie + 1][he + 1] * be, D = Q[ie + 1][he + 1] * xe;
      Pf(e, H, { x: Dt, y: yt }, { x: Vt, y: Pt }, { x: wn, y: D }, { x: L, y: Z }, { x: _e, y: De }, { x: je, y: bt }), Pf(e, H, { x: Dt, y: yt }, { x: wn, y: D }, { x: Ht, y: un }, { x: L, y: Z }, { x: je, y: bt }, { x: Re, y: Be });
    }
}
function lv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = yc(e), a = Ao(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = bc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Hr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = Ll(
    e,
    vc(e, ["erp_image", "bg_erp"]),
    () => {
      var O, F, q;
      (F = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null || F.call(O), (q = e.setDirtyCanvas) == null || q.call(e, !0, !1);
    }
  ), p = !!(f && f.complete && (f.naturalWidth || f.width)), g = Eh(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = g || _, S = Uo, A = jl(e, i), v = Vl(e, i, A), R = gc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Vr()), p) {
    const O = fs({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(v) ? v.map((j) => `${String((j == null ? void 0 : j.assetId) || "")}:${String((j == null ? void 0 : j.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), q = e.__panoRuntimeCore.syncState(O) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", R, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!q, q && t.drawImage(q, a.x, a.y, a.w, a.h);
  }
  const z = x ? 8 : 12, P = x ? 6 : 9, E = av(e, i);
  if (!p || E.length === 0) {
    const O = $l(t == null ? void 0 : t.canvas, a);
    Ih(t, a, l, u, O);
  }
  !V && p && Wo(e, t, a, l, u, f, S), !V && E.length > 0 && E.forEach((O) => Ph(t, e, a, l, u, i, O, z, P)), t.restore();
}
function cv(e, t, n, i, a = "preview_scene", l = "") {
  const u = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return fs({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
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
function Co(e, t, n, i) {
  var l, u, f, p, g, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const x = i.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = fv(e, t, i);
  return a || null;
}
function uv(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), u = (t == null ? void 0 : t.ds) || ((S = ct == null ? void 0 : ct.canvas) == null ? void 0 : S.ds);
  if (!l || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], g = (n - Number(l.left || 0)) / f - Number(p[0] || 0), _ = (i - Number(l.top || 0)) / f - Number(p[1] || 0);
  return !Number.isFinite(g) || !Number.isFinite(_) ? null : { x: g, y: _ };
}
function fv(e, t, n) {
  var a, l;
  const i = uv(t, n || (ct == null ? void 0 : ct.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function ro(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), Ur(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", gh(e, 320, 180), gi(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, A;
    const x = t ? t.apply(this, arguments) : void 0;
    try {
      const v = arguments[0];
      v && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), lv(this, v, i));
    } catch {
    }
    return x;
  }, e.onResize = function() {
    var S;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Yo(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), Dh(this, 220, null), x;
  };
  const i = ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (x) => {
      e.__panoPreviewView = x;
    },
    getViewportSize: () => {
      const x = Ao(e);
      return {
        w: Math.max(1, Number((x == null ? void 0 : x.w) || 0)),
        h: Math.max(1, Number((x == null ? void 0 : x.h) || 0))
      };
    },
    onInteraction: () => {
      var x;
      Th(e), (x = e.setDirtyCanvas) == null || x.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(x, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const R = Co(this, x, S, A) || { x: 0, y: 0 }, V = Ur(this), z = Number((V == null ? void 0 : V[0]) || 0), P = Number((V == null ? void 0 : V[1]) || 0);
        if (R.x >= z - 20 && R.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const O = Ao(this);
        if (Nf(R.x, R.y, O))
          return (x == null ? void 0 : x.button) === 0 && i.startDrag(R.x, R.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(x, S, A) {
    try {
      const v = Co(this, x, S, A);
      if (i.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return i.endDrag(), !0;
        const R = v || i.state.drag;
        return i.moveDrag(R.x, R.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const x = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), x;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(x, S, A) {
    var v, R;
    try {
      if ((v = this.flags) != null && v.collapsed) return p ? p.apply(this, arguments) : void 0;
      const V = Co(this, x, S, A), z = Ao(this);
      if (!V || !Nf(V.x, V.y, z)) return p ? p.apply(this, arguments) : void 0;
      const P = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(P)) && ((R = this.setDirtyCanvas) == null || R.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const g = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = p, e.onRemoved = g, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), ca.unregister(this), Go.unregister(this), g ? g.apply(this, arguments) : void 0;
  };
}
function dv(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Ah(e, t) {
  var g, _, x, S, A, v, R, V, z, P, E, O;
  const n = (_ = (g = t == null ? void 0 : t.painting) == null ? void 0 : g.paint) == null ? void 0 : _.strokes, i = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const u = dv(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Rl(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.paint) !== p.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== p.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== p.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((O = t == null ? void 0 : t.painting) == null ? void 0 : O.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Ch(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function hv(e, t) {
  const n = Ah(e, t);
  if (!n) return null;
  const i = Ch(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function pv(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = nr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const u = new Image();
  return u.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, u.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function Af(e, t) {
  var l, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = pv(e, t, () => {
      var p, g;
      return (g = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : g.call(p);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = hv(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function mv(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function gv(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function bv(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = mv(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = gv(e, l, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const g = p.getImageData(0, 0, u.width, u.height).data, _ = t.getImageData(0, 0, i, a), x = _.data, S = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let v = 0; v < a; v += 1) {
      const R = (v + 0.5) * u.height / a - 0.5, V = W(Math.floor(R), 0, A), z = W(V + 1, 0, A), P = W(R - V, 0, 1);
      for (let E = 0; E < i; E += 1) {
        const O = (E + 0.5) * u.width / i - 0.5, F = W(Math.floor(O), 0, S), q = W(F + 1, 0, S), j = W(O - F, 0, 1);
        let Q = 0, de = 0, H = 0, be = 0;
        const xe = (ie, he, L) => {
          const Z = (he * u.width + ie) * 4, _e = (g[Z + 3] || 0) / 255;
          Q += _e * L, de += (g[Z] || 0) / 255 * _e * L, H += (g[Z + 1] || 0) / 255 * _e * L, be += (g[Z + 2] || 0) / 255 * _e * L;
        };
        if (xe(F, V, (1 - j) * (1 - P)), xe(q, V, j * (1 - P)), xe(F, z, (1 - j) * P), xe(q, z, j * P), Q <= 1e-6) continue;
        const I = (v * i + E) * 4, we = 1 - Q;
        x[I] = Math.round(W((de + x[I] / 255 * we) * 255, 0, 255)), x[I + 1] = Math.round(W((H + x[I + 1] / 255 * we) * 255, 0, 255)), x[I + 2] = Math.round(W((be + x[I + 2] / 255 * we) * 255, 0, 255)), x[I + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function Cf(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== f || p.width !== a || p.height !== l) {
    (!p || p.width !== a || p.height !== l) && (p = document.createElement("canvas"), p.width = a, p.height = l, e.__panoPreviewBgPaint = p);
    const g = p.getContext("2d");
    g.clearRect(0, 0, a, l), g.drawImage(t, 0, 0, a, l), bv(e, g, n, a, l, "__panoPreviewOverlayScratch"), p.__revKey = f;
  }
  return p;
}
function yv(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Sh(e, a);
  const l = yc(e), u = t.parentElement, f = 1, p = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), g = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(p * f)), x = Math.max(64, Math.round(g * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = nv(l), v = Ll(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Q, de;
          return (de = (Q = e.__panoDomPreview) == null ? void 0 : Q.requestDraw) == null ? void 0 : de.call(Q);
        },
        { preserveReadyWhilePending: !1 }
      ), R = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const V = { x: 0, y: 0, w: _, h: x }, z = R ? W(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, P = A ? vr(A) : null, E = W(Number((P == null ? void 0 : P.aspect) || z || 1), 0.05, 20), O = Nh(V, E);
      $l(t, V), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, x);
      let F = "none", q = "Open editor and add frame", j = "";
      if (j = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !R)
          F = "loading";
        else if (R) {
          const Q = jl(e, l), de = Vl(e, l, Q), H = ov(e, l), be = Qi({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(de) ? de.map((I) => `${String((I == null ? void 0 : I.assetId) || "")}:${String((I == null ? void 0 : I.revision) || "")}`).join(",") : "",
              Array.isArray(H) ? H.map((I) => `${String((I == null ? void 0 : I.id) || "")}:${String((I == null ? void 0 : I.revision) || "")}:${Number((I == null ? void 0 : I.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: Q,
            textures: de,
            rasterEntries: H,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Vr()), e.__panoRuntimeCore.syncState(be), e.__panoRuntimeCore.renderToContext(
            S,
            O,
            vr(A),
            { width: O.w, height: O.h, dpr: 1 }
          ) || (F = "empty", q = "Open editor or run node");
        } else
          F = "empty", q = "Connect ERP image";
      else {
        if (R) {
          const Q = Af(e, l), de = Q != null && Q.source ? Cf(e, v, Q.source, Q.revision || "") : v;
          rv(S, de, V, 0.44);
        }
        F = "empty", q = "Open editor and add frame";
      }
      F === "loading" ? (no(e, !1), Ir(e, !0, j)) : F === "empty" ? (no(e, !0, q), Ir(e, !1, "")) : (no(e, !1), Ir(e, !1, ""));
    } else {
      no(e, !1), (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const A = { x: 0, y: 0, w: _, h: x }, v = $l(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = bc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * Hr * 0.5), z = Ll(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, I;
          return (I = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : I.call(xe);
        }
      ), P = !!(z && z.complete && (z.naturalWidth || z.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, x);
      const E = jl(e, l), O = Vl(e, l, E), F = gc(e.__panoPreviewView, l == null ? void 0 : l.coverage), q = Af(e, l), j = (q == null ? void 0 : q.source) || null, Q = P && j ? Cf(e, z, j, (q == null ? void 0 : q.revision) || "") : z, de = Q !== z ? String(Q.__revKey || "") : z ? [
        String(z.currentSrc || z.src || ""),
        Number(z.naturalWidth || z.width || 0),
        Number(z.naturalHeight || z.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Vr());
      let H = !1;
      if (P) {
        const I = e.__panoDomRuntimeCore.syncState(
          cv(Q, l, E, O, "runtime_dom_scene", de)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", F, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        I && (S.drawImage(I, A.x, A.y, A.w, A.h), H = !0);
      }
      const be = E.stickers;
      if (P && H)
        Ir(e, !1, "");
      else if (P)
        Wo(e, S, A, R, V, Q, Uo), Ir(e, !1, "");
      else if (j)
        Wo(e, S, A, R, V, j, Uo), Ir(e, !!z && !P, String((z == null ? void 0 : z.src) || ""));
      else {
        const xe = !!z && !P;
        Ir(e, xe, String((z == null ? void 0 : z.src) || "")), xe && tv(S, A, v);
      }
      if ((!P || be.length === 0) && Ih(S, A, R, V, v), !H && be.length > 0) {
        const xe = Eh(e), I = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || I, ie = we ? 8 : 12, he = we ? 6 : 9;
        be.forEach((L) => Ph(S, e, A, R, V, l, L, ie, he));
      } else if (!z || !P) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, x * 0.5 + 24 * v);
      }
    }
}
function Wo(e, t, n, i, a, l, u = Ey) {
  const f = yc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Vr());
  const g = qy(l), _ = fs({
    stateRevision: [
      "runtime_bg_only",
      g,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: g,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
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
function If(e, t, n, i, a, l, u = 1) {
  let f = !1;
  e.strokeStyle = l, e.lineWidth = u, e.beginPath();
  for (const p of t) {
    const g = kh(p, n, i, a);
    if (!g) {
      f = !1;
      continue;
    }
    f ? e.lineTo(g.x, g.y) : (e.moveTo(g.x, g.y), f = !0);
  }
  e.stroke();
}
function Ih(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let g = -75; g <= 75; g += 15) {
    const _ = [];
    for (let x = -180; x <= 180; x += 15) _.push(Dr(x, g));
    If(e, _, n, t, i, g === 0 ? u : l, g === 0 ? 1.5 : 1);
  }
  for (let g = -180; g <= 180; g += 45) {
    const _ = [];
    for (let x = -89; x <= 89; x += 15) _.push(Dr(g, x));
    If(e, _, n, t, i, g % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, g % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Dr(0, 0) },
    { name: "Right", dir: Dr(90, 0) },
    { name: "Back", dir: Dr(180, 0) },
    { name: "Left", dir: Dr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((g) => {
    const _ = kh(g.dir, n, t, i);
    _ && e.fillText(g.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function vv(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Th(e) {
  const t = vv(e);
  t.dragging = !1, t.hqFrames = Dy;
}
function Yo(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Eh(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function _v(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function xv(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function fi(e, t) {
  return xv(e, t) ? !1 : (_v(e), !0);
}
function wv() {
  var n;
  const e = (n = ct == null ? void 0 : ct.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Sv(e) {
  var n;
  if (!e) return;
  const t = (n = ct == null ? void 0 : ct.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Nv(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !mh(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function Mv(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, u;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Tf(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, Yo(e, 150), t == null || t(), Dh(e, 180, t);
    }
  };
}
function Dh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function gi(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function kv(e, t = {}) {
  var L;
  const n = t.__allowStandalone === !0, i = Ly(e);
  if (i && !n) {
    bh(e);
    return;
  }
  i && Nv(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Go.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ca.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), p = a ? yh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: $r(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (p.chosenPath = f, p.reason = "controller_target_backend");
  const g = a ? p.chosenPath : "dom", _ = p.signature || $r(e);
  if (Number(e.__panoRebindGeneration || 0), Fl(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, Ur(e), e.__panoFrontendSig = _, e.__panoStickersPath = g, a && ca.register(e), a && g === "legacy_draw") {
    if (l) return;
    Mi(e, { keepMonitor: !0 }), ro(e);
    return;
  }
  if ((L = e.__panoDomPreview) != null && L.widget) return;
  if (e.__panoLegacyPreviewHooked && Mi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && ro(e);
    return;
  }
  const x = t.noPreview === !0, S = a || x ? 0 : 56, A = document.createElement("div");
  if (Fy(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), x && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    x ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), x) {
    const Z = e.addDOMWidget(Ol(), "preview", A, Tf(e, null));
    gi(e), e.__panoDomPreview = { widget: Z, root: A, requestDraw: () => {
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
  const R = document.createElement("canvas");
  R.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", v.appendChild(R), v.appendChild(V), A.appendChild(v), gh(e, 120, 120), gi(e);
  let z = null;
  try {
    Mv(e, S, () => {
      var Z, _e;
      return (_e = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : _e.call(Z);
    }), z = e.addDOMWidget(
      Ol(),
      "preview",
      A,
      Tf(e, () => {
        var Z, _e;
        return (_e = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : _e.call(Z);
      }, S)
    );
  } catch {
    a && ro(e);
    return;
  }
  const P = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, E = () => {
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(q));
  }, O = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Yo(e, 150), E();
  }) : null;
  O == null || O.observe(v);
  const F = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const Z = 3, _e = (De) => {
      requestAnimationFrame(() => {
        var Be;
        const Re = !!(A != null && A.isConnected && (v != null && v.isConnected) && (R != null && R.isConnected) && Number(v.clientHeight || 0) > 0 && Number(R.clientHeight || 0) > 0);
        if (!Re && De < Z) {
          _e(De + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0), !Re) {
          if (l) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0);
            return;
          }
          Mi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", ro(e), (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0);
        }
      });
    };
    _e(1);
  }, q = (Z) => {
    var De, Re, Be;
    P.raf = 0;
    const _e = j.stepInertia(Z);
    (P.needsDraw || _e) && (P.needsDraw = !1, (De = e.flags) != null && De.collapsed || yv(e, R, null, j), (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !1)), (_e || P.needsDraw) && (P.raf = requestAnimationFrame(q)), Oy() && (!e.__panoDebugLastTs || Z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = Z, e.__panoPreviewMode, Ur(e), Yi(A), Yi(v), Yi(R), Yi(A.parentElement), Yi((Be = A.parentElement) == null ? void 0 : Be.parentElement), Number(R.width || 0), Number(R.height || 0), void 0);
  }, j = ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (Z) => {
      e.__panoPreviewView = Z;
    },
    onInteraction: () => {
      E();
    }
  });
  R.addEventListener("pointerdown", (Z) => {
    var _e, De;
    fi(Z, v) && u && Z.button === 0 && ((_e = A.focus) == null || _e.call(A), (De = R.setPointerCapture) == null || De.call(R, Z.pointerId), R.style.cursor = "grabbing", j.startDrag(Z.clientX, Z.clientY, Z.pointerId));
  }), R.addEventListener("pointermove", (Z) => {
    !u || !j.state.drag.active || (fi(Z, v), j.moveDrag(Z.clientX, Z.clientY, "pano"));
  });
  const Q = (Z) => {
    var _e;
    !u || !j.state.drag.active || (fi(Z, v), (_e = R.releasePointerCapture) == null || _e.call(R, Z.pointerId), R.style.cursor = "grab", j.endDrag(), Th(e), E());
  };
  R.addEventListener("pointerup", Q), R.addEventListener("pointercancel", Q), R.addEventListener("pointerleave", (Z) => {
    j.state.drag.active && Q(Z);
  });
  const de = (Z) => {
    var De, Re, Be;
    if (!fi(Z, v) || !u) return;
    const _e = wv();
    j.applyWheelEvent(Z) && E(), (De = Z.preventDefault) == null || De.call(Z), (Re = Z.stopPropagation) == null || Re.call(Z), (Be = Z.stopImmediatePropagation) == null || Be.call(Z), requestAnimationFrame(() => {
      var je, bt;
      Sv(_e), (bt = (je = ct == null ? void 0 : ct.canvas) == null ? void 0 : je.setDirty) == null || bt.call(je, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((Z) => {
    v.addEventListener(Z, de, { passive: !1, capture: !0 }), R.addEventListener(Z, de, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((Z) => {
    R.addEventListener(Z, (_e) => fi(_e, v)), v.addEventListener(Z, (_e) => fi(_e, v));
  });
  const H = _a(e, "state_json");
  if (H && !H.__panoPreviewPatchedCb) {
    H.__panoPreviewPatchedCb = !0;
    const Z = H.callback;
    H.callback = (_e) => {
      const De = Z ? Z(_e) : void 0;
      return E(), De;
    };
  }
  const be = _a(e, "bg_color");
  if (be && !be.__panoPreviewPatchedCb) {
    be.__panoPreviewPatchedCb = !0;
    const Z = be.callback;
    be.callback = (_e) => {
      const De = Z ? Z(_e) : void 0;
      return E(), De;
    };
  }
  const xe = e.onRemoved, I = e.onResize, we = e.onExecuted;
  e.onExecuted = function(Z) {
    Zy(e, Z), zl(e), gi(e), E();
    const _e = we ? we.apply(this, arguments) : void 0;
    return gi(e), _e;
  };
  const ie = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return zl(e), gi(e), E(), ie ? ie.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var _e;
    const Z = I ? I.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Yo(this, 150), E(), (_e = this.setDirtyCanvas) == null || _e.call(this, !0, !1), Z;
  }, e.onRemoved = function() {
    return he(), ca.unregister(this), Go.unregister(this), xe ? xe.apply(this, arguments) : void 0;
  };
  const he = () => {
    var Z;
    P.raf && cancelAnimationFrame(P.raf), (Z = O == null ? void 0 : O.disconnect) == null || Z.call(O), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = I, e.onExecuted = we, e.onConnectionsChange = ie, e.onRemoved = xe;
  };
  e.__panoDomRestore = he, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: z, root: A, canvas: R, requestDraw: E, state: P, emptyHintEl: V }, F(), E();
}
function Ef(e, t = {}) {
  vh(e).attach({
    ...t,
    mode: "cutout"
  });
}
const qo = Math.PI / 180;
function Gr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Df(e, t) {
  return Gr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function io(e, t) {
  return Gr(e.x * t, e.y * t, e.z * t);
}
function Rf(e, t) {
  return Gr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ao(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Gr(e.x / t, e.y / t, e.z / t);
}
function Pv(e, t) {
  const n = e * qo, i = t * qo, a = Math.cos(i);
  return Gr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Av(e, t, n = 0) {
  const i = Pv(e, t), a = Gr(0, 1, 0);
  let l = Rf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Gr(1, 0, 0)), l = ao(l);
  const u = ao(Rf(i, l)), f = n * qo, p = Math.cos(f), g = Math.sin(f), _ = Df(io(l, p), io(u, g)), x = Df(io(l, -g), io(u, p));
  return { fwd: i, right: ao(_), up: ao(x) };
}
const oo = 140, Cv = 180, Of = 40, gl = 10;
function Ff(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Lf(e, t) {
  const n = Ff(e), i = Ff(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function zf(e) {
  var l;
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
  return typeof ((l = tn) == null ? void 0 : l.apiURL) == "function" ? tn.apiURL(a) : a;
}
function ki(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ki(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return zf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = ki(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : zf(e);
}
function Rh(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Iv(e) {
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
function Hl(e) {
  var a;
  const t = (a = hn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Lf(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (Lf(l, n)) return t[l];
  return null;
}
function Tv(e) {
  var i, a;
  const t = Hl(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const u of l) {
        const f = ki(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Ev(e, t = "erp_image") {
  var v, R, V, z, P, E, O, F, q, j, Q, de;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((H) => String((H == null ? void 0 : H.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const H = n.find((be) => String((be == null ? void 0 : be.type) || "").toUpperCase() === "IMAGE" && (be == null ? void 0 : be.link) != null);
    (H == null ? void 0 : H.link) != null && (i = H.link);
  }
  if (i == null) return "";
  const l = ((R = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : R[i]) || ((P = (z = (V = hn) == null ? void 0 : V.graph) == null ? void 0 : z.links) == null ? void 0 : P[i]);
  if (!l) return "";
  const u = Number(l.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (F = (O = (E = hn) == null ? void 0 : E.graph) == null ? void 0 : O.getNodeById) == null ? void 0 : F.call(O, u), p = Hl(u), g = Hl(e == null ? void 0 : e.id), _ = [
    (q = g == null ? void 0 : g.ui) == null ? void 0 : q.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    p == null ? void 0 : p.images,
    (j = p == null ? void 0 : p.ui) == null ? void 0 : j.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const H of _)
    if (Array.isArray(H))
      for (const be of H) {
        const xe = ki(be);
        if (xe) return xe;
      }
  let x = [];
  try {
    x = typeof ((Q = hn) == null ? void 0 : Q.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const H of x) {
      const be = ki(H);
      if (be) return be;
    }
  if (f) {
    const H = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const be of H) {
      const xe = ki(be);
      if (xe) return xe;
    }
  }
  const S = (de = f == null ? void 0 : f.widgets) == null ? void 0 : de.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image"), A = String((S == null ? void 0 : S.value) || "").trim();
  return A ? tn.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function $f(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function jf(e, t, n, i, a, l) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Rh(l) || n <= 1 || i <= 1) {
    $f(t, n, i);
    return;
  }
  const u = Av(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * qo * 0.5), p = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Vr());
  const g = Iv(l), _ = fs({
    stateRevision: [
      "standalone_preview_scene",
      g,
      p
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: g,
    coverageDeg: p,
    scene: hs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const R = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Ty(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return R ? (t.drawImage(R, 0, 0, n, i), !0) : !1;
  })() || (Wo(e, t, { x: 0, y: 0, w: n, h: i }, u, f, l, Uo), $f(t, n, i));
}
function Vf(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Dv {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ds({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: $t(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: W(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: W(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, l, u, f;
        const i = (l = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : l.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var i, a, l;
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
    const n = ((l = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : l.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var l;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (l = this.flags) != null && l.collapsed || !t.errorText) return i;
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
        `min-height:${oo}px`,
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
          return oo;
        },
        getHeight() {
          return oo;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const l = i ? i(a) || {} : {};
          return {
            ...l,
            minHeight: Math.max(oo, Number(l.minHeight || 0)),
            minWidth: Math.max(Cv, Number(l.minWidth || 0))
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
      var l, u, f;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const i = (a) => {
      var l, u;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var l;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var l;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }), n.addEventListener("keydown", (a) => {
      var l;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Rh(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      const l = t.getLegacyPreviewRect();
      return Vf(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const l = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - l.x, a.y - l.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var g, _, x, S, A, v;
      const l = Co(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!l || !Vf(l.x, l.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((g = t.view) == null ? void 0 : g.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(f));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), p && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (v = n == null ? void 0 : n.stopImmediatePropagation) == null || v.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - gl * 2), n = Math.max(60, Number(((u = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : u[1]) || 0) - Of - gl);
    return { x: gl, y: Of, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), jf(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, u;
    const t = Tv(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, g = () => this.requestDraw();
      f.addEventListener("loadedmetadata", p), f.addEventListener("canplay", p), f.addEventListener("timeupdate", g), f.addEventListener("play", g), f.addEventListener("pause", g), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", p), f.removeEventListener("canplay", p), f.removeEventListener("timeupdate", g), f.removeEventListener("play", g), f.removeEventListener("pause", g);
      };
      return;
    }
    const n = Ev(this.node, this.imageInputName);
    if (!n) {
      (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
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
    var a, l;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (jf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, u, f, p, g, _, x, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (f = (u = this.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((v) => v !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((x = (_ = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : _.find) == null ? void 0 : x.call(_, (v) => (v == null ? void 0 : v.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || A.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function Rv(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Dv(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Ov(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = l ? l.apply(this, arguments) : void 0;
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
function Oh(e) {
  return !!(e != null && e.prototype);
}
function Ul(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Fv(e, t = {}) {
  Oh(e) || Rv(e, {
    ...t,
    onOpen: Ul(e, t.onOpen)
  });
}
function Lv(e, t = {}) {
  if (!Oh(e)) {
    Ef(e, {
      ...t,
      onOpen: Ul(e, t.onOpen)
    });
    return;
  }
  Ov(e, "cutout_preview", (n) => {
    Ef(n, {
      ...t,
      onOpen: Ul(n, t.onOpen)
    });
  });
}
const sn = {
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
}, Yn = "pen";
function Hf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function zv(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(g) {
    if (i.splice(0, i.length), a = -1, !g || typeof g != "object" || !Array.isArray(g.entries) || (g.entries.forEach((x) => {
      i.push(String(x || ""));
    }), !i.length)) return;
    const _ = Number(g.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function p(g) {
    i[a] !== g && (i.splice(a + 1), i.push(g), i.length > l && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(g) {
      p(String(g || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const g = a - 1;
      return g < 0 || g >= i.length ? null : (a = g, i[a]);
    },
    redo() {
      const g = a + 1;
      return g < 0 || g >= i.length ? null : (a = g, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const g = i.length, _ = Math.max(0, g - u), x = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(x, x + u), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
      return {
        version: 1,
        entries: S,
        index: A
      };
    },
    hydrate: f
  };
}
function et(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function $v() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function jv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const l = et(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(l ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function Vv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Hv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = et(e.t, 0), i = et(e.widthScale, null), a = et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = et(e.u, null), u = et(e.v, null);
    if (l == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = et(e.u, null), u = et(e.v, null);
    if (l == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: u,
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function so(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = Hv(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function Uv(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = so(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = so(e.points, t, 1);
  if (!l) return null;
  const u = so(e.rawPoints, t, 1), f = so(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: u || l.map((p) => ({ ...p })),
    processedPoints: f || l.map((p) => ({ ...p }))
  };
}
function Bv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Vv(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = Uv(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = et(e.size, null), u = et(e.opacity, null);
  if (l == null || u == null) return null;
  const f = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!f || !p) return null;
  const g = et(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, et(S.r, 0))),
      g: Math.max(0, Math.min(1, et(S.g, 0))),
      b: Math.max(0, Math.min(1, et(S.b, 0))),
      a: Math.max(0, Math.min(1, et(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: p,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: et(e.hardness, null),
    flow: et(e.flow, null),
    spacing: et(e.spacing, null),
    createdAt: Math.trunc(et(e.createdAt, 0)),
    color: x,
    radiusModel: _,
    radiusValue: g == null ? null : Math.max(0, g),
    geometry: a
  };
}
function Uf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = Bv(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function Gv(e) {
  if (!e || typeof e != "object") return null;
  const t = et(e.u0, null), n = et(e.v0, null), i = et(e.u1, null), a = et(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (f) => Math.max(0, Math.min(1, f)), u = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Kv(e) {
  const t = e || {};
  return {
    du: et(t.du, 0) ?? 0,
    dv: et(t.dv, 0) ?? 0,
    rot_deg: et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, et(t.scale, 1) ?? 1)
  };
}
function Wv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = Gv(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: Kv(e.transform)
  } : null;
}
function Yv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Wv(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ua(e) {
  const t = $v();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: jv(e.groups),
    paint: Uf(e.paint, "paint"),
    mask: Uf(e.mask, "mask"),
    raster_objects: Yv(e.raster_objects)
  };
}
function Bf(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function qv(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Gf(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = qv((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Xv(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ci({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Bf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, u) => Gf(l, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Bf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, u) => Gf(l, u)).filter(Boolean);
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
function xa(e = {}) {
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
function Xo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Jv(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Vr((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(x) {
    var S;
    return JSON.stringify({
      stateRevision: (x == null ? void 0 : x.stateRevision) || "",
      background: (x == null ? void 0 : x.background) || null,
      objects: Array.isArray((S = x == null ? void 0 : x.objectPass) == null ? void 0 : S.objects) ? x.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (x == null ? void 0 : x.overlay) || {}
    });
  }
  function u(x = {}) {
    const S = Xv(x), A = l(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function f(x = {}, S = {}) {
    if (!i) return null;
    const A = xa(x), v = Xo(S);
    return n.renderToTarget(t, A, v);
  }
  function p(x, S, A = {}, v = {}) {
    if (!x || !S || !i) return !1;
    const R = xa(A), V = Xo({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(x, S, R, V);
  }
  function g() {
    var x;
    i = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function _() {
    var x;
    g(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: g,
    dispose: _
  };
}
function Zv(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function Qv(e, t = {}) {
  var p, g;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = xa((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((g = t == null ? void 0 : t.view) == null ? void 0 : g.output) || null, a = Xo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Zv(l, u, f);
}
function e1(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = xa((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), R = Xo({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(R.width * R.dpr)), i.height = Math.max(1, Math.round(R.height * R.dpr)), i.style.width = `${R.width}px`, i.style.height = `${R.height}px`, R;
  }
  function g() {
    if (u || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, g();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return x == null || x.observe(t), _(), {
    canvas: i,
    setView(S) {
      l = xa(S || {}), _();
    },
    getView() {
      return { ...l };
    },
    present: g,
    requestRender: _,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), i.remove();
    }
  };
}
function t1(e = {}) {
  const t = Jv({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(vr(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, vr(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? vr(i.shot) : i == null ? void 0 : i.view;
      return e1(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: vr(n.shot) } : n;
      return Qv(t, i);
    }
  };
}
function qi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function n1(e = {}) {
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
function r1({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: p
}) {
  var E, O;
  const g = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
    visible: g,
    activePane: g ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: g ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (F, q) => ({ index: q, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!g) return _;
  const x = ((E = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : E.id) || "", S = !x, A = l(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((O = e.customPaintColor) == null ? void 0 : O.a) ?? 1))) * 100), R = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[R] ?? 10, z = p(), P = Array.from({ length: 8 }, (F, q) => e.customPaintHistory[q] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
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
    historyEntries: P.map((F, q) => ({
      index: q,
      color: F ? { cssColor: i(F, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function i1({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function a1({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: u,
  notes: f,
  visibilityRows: p,
  uiSettings: g,
  normalizeCoverageValue: _
}) {
  return {
    coverage: { value: _(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || l.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : g,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function o1({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: p,
  isExternalSticker: g,
  isStickerHidden: _,
  canRestoreSelectedToInitial: x,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let A = [];
  if (n.length > 1)
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed },
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
    ], g(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), g(t)) {
      const F = x(), q = _(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: F ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !F
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: q ? "Show" : "Hide",
        tip: q ? "Show input image" : "Hide input image",
        icon: q ? S.eye : S.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), g(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F, active: f === F }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((F) => ({ x: Number(F == null ? void 0 : F.x), y: Number(F == null ? void 0 : F.y) })).filter((F) => Number.isFinite(F.x) && Number.isFinite(F.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const R = v.map((F) => F.x), V = v.map((F) => F.y), z = Math.min(...R), P = Math.max(...R), E = Math.min(...V), O = Math.max(...V);
  return {
    visible: !0,
    left: (z + P) * 0.5,
    top: O + 18,
    items: A,
    anchor: { minX: z, maxX: P, minY: E, maxY: O }
  };
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
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool"
}), s1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, l1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: s1(t[2])
})), c1 = {
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
}, Kf = Object.fromEntries(
  Object.entries(c1).map(([e, t]) => [e, {
    name: t.name,
    elements: l1(t.body)
  }])
), vn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = St(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Kf, i) ? Kf[i] : null;
    });
    return (i, a) => n.value ? (Me(), Pe("svg", {
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
      (Me(!0), Pe(Je, null, jt(n.value.elements, (l, u) => (Me(), Pe(Je, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${u}`
      }, [
        l.tag === "path" ? (Me(), Pe("path", gr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Me(), Pe("circle", gr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Me(), Pe("rect", gr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Me(), Pe("line", gr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Me(), Pe("polyline", gr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Me(), Pe("polygon", gr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Et("", !0)
      ], 64))), 128))
    ], 2)) : Et("", !0);
  }
}, jr = {
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
    return (i, a) => (Me(), Ii(S0(e.tag), gr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Cd(() => [
        We(vn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, u1 = { class: "pano-floating-right" }, f1 = ["data-settled"], d1 = ["data-ready", "data-settled"], h1 = ["aria-label", "data-tip"], p1 = {
  key: 1,
  class: "pano-camera-preview-label"
}, m1 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Je, null, [
      ce("div", u1, [
        (Me(!0), Pe(Je, null, jt(e.buttons, (i) => (Me(), Ii(jr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ic(ce("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ce("div", {
          class: pt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: kt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ce("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            We(vn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, h1)) : Et("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", p1, gt(e.preview.label || "Preview unavailable"), 1)) : Et("", !0)
        ], 14, d1)
      ], 8, f1), [
        [uc, e.preview.visible]
      ])
    ], 64));
  }
}, g1 = ["aria-label"], b1 = { class: "pano-canvas-confirm-title" }, y1 = { class: "pano-canvas-confirm-text" }, v1 = { class: "pano-canvas-confirm-actions" }, _1 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, x1 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Eo(null), i = /* @__PURE__ */ Eo(null);
    let a = null;
    function l() {
      const x = i.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const S = i.value;
      if (!S) return;
      const A = S.querySelector(`[data-action='${x}']`);
      A instanceof HTMLButtonElement && A.click();
    }
    function f() {
      var R;
      const x = i.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = l()[0] || x;
      (R = v == null ? void 0 : v.focus) == null || R.call(v);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function g(x) {
      var z;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = l(), A = i.value;
      if (!S.length) {
        x.preventDefault(), (z = A == null ? void 0 : A.focus) == null || z.call(A);
        return;
      }
      const v = S[0], R = S[S.length - 1], V = document.activeElement;
      if (x.shiftKey) {
        (V === v || V === A || !(A != null && A.contains(V))) && (x.preventDefault(), R.focus());
        return;
      }
      (V === R || !(A != null && A.contains(V))) && (x.preventDefault(), v.focus());
    }
    function _(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return wi(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, nc(() => {
          f();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), oc(() => {
      p();
    }), (x, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: lh(_, ["self"])
    }, [
      ce("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: g
      }, [
        ce("div", b1, gt(e.model.title), 1),
        ce("div", y1, gt(e.model.text), 1),
        ce("div", v1, [
          S[0] || (S[0] = ce("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ce("button", _1, gt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, g1)
    ], 512)) : Et("", !0);
  }
}, w1 = ["data-paint-pane"], S1 = ["hidden"], N1 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], M1 = ["aria-pressed", "disabled"], k1 = ["hidden"], P1 = { class: "pano-paint-color-pop-head" }, A1 = { class: "pano-paint-color-field" }, C1 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, I1 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, T1 = { class: "pano-paint-color-field" }, E1 = { class: "pano-paint-alpha-wrap" }, D1 = ["value"], R1 = { "data-paint-alpha-value": "" }, O1 = ["hidden"], F1 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, L1 = ["data-paint-history-index", "aria-label", "disabled"], z1 = ["data-paint-footer"], $1 = ["data-paint-group"], j1 = ["hidden"], V1 = ["value", "disabled"], H1 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, U1 = ["hidden"], B1 = {
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
    return (i, a) => (Me(), Pe("div", {
      class: pt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Pe(Je, null, jt(e.panes, (l) => {
        var u;
        return Me(), Pe("div", {
          key: l.key,
          class: pt(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Me(), Pe("div", {
            key: 0,
            class: pt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Pe(Je, null, jt(e.paintSwatches, (f) => (Me(), Pe("button", {
              key: f.id,
              class: pt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: kt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, N1))), 128)),
            ce("button", {
              class: pt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: kt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, M1),
            ce("div", {
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
              ce("div", P1, [
                ce("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: kt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ce("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ce("div", A1, [
                ce("div", C1, [
                  ce("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: kt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ce("div", I1, [
                  ce("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: kt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ce("label", T1, [
                a[1] || (a[1] = ce("span", null, "Opacity", -1)),
                ce("div", E1, [
                  ce("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, D1),
                  ce("span", R1, gt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ce("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ce("div", F1, [
                  (Me(!0), Pe(Je, null, jt(e.state.historyEntries || [], (f) => (Me(), Pe("button", {
                    key: f.index,
                    class: pt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: kt(n(f.color))
                  }, null, 14, L1))), 128))
                ])
              ], 8, O1)
            ], 12, k1)
          ], 10, S1)) : Et("", !0),
          ce("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ce("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Me(!0), Pe(Je, null, jt(l.tools, (f) => {
                var p;
                return Me(), Ii(jr, {
                  key: `${l.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[l.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, $1),
            ce("div", {
              class: pt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ce("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: kt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, V1),
              ce("span", H1, gt(e.state.sizeText || "10"), 1)
            ], 10, j1),
            ce("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[l.key]) ?? !l.clearHidden)
            }, [
              We(jr, {
                icon: Rr(Te).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, U1)
          ], 8, z1)
        ], 10, w1);
      }), 128))
    ], 2));
  }
}, G1 = {
  key: 0,
  class: "pano-cutout-menu"
}, K1 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, W1 = ["data-aspect"], Y1 = ["data-action", "aria-label", "data-tip", "disabled"], q1 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: kt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Pe(Je, null, jt(e.model.items || [], (i) => (Me(), Pe(Je, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), Pe("div", G1, [
          ce("button", K1, [
            We(vn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ce("div", {
            class: pt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Pe(Je, null, jt(i.choices || [], (a) => (Me(), Pe("button", {
              key: a.value,
              class: pt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, gt(a.label), 11, W1))), 128))
          ], 2)
        ])) : (Me(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          We(vn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, Y1))
      ], 64))), 128))
    ], 4));
  }
}, X1 = {
  class: "pano-side",
  "data-side": ""
}, J1 = { class: "pano-side-head" }, Z1 = { class: "pano-side-title" }, Q1 = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, e_ = {
  key: 0,
  class: "pano-side-scroll"
}, t_ = { class: "pano-inspector" }, n_ = { class: "pano-ui-row pano-coverage-row" }, r_ = ["data-selected"], i_ = ["aria-pressed", "disabled"], a_ = ["aria-pressed", "disabled"], o_ = {
  key: 0,
  class: "pano-section-title"
}, s_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, l_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, c_ = ["disabled"], u_ = { class: "pano-picker-label" }, f_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, d_ = ["hidden"], h_ = ["data-selection-id"], p_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, m_ = {
  key: 2,
  class: "pano-state-actions"
}, g_ = ["disabled"], b_ = ["data-key"], y_ = ["min", "max", "step", "value", "disabled", "data-param-key"], v_ = ["min", "max", "step", "value", "disabled", "data-param-key"], __ = { class: "pano-visibility-section" }, x_ = { class: "pano-visibility-stack" }, w_ = ["data-visibility-row"], S_ = { class: "pano-visibility-name" }, N_ = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, M_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], k_ = ["open"], P_ = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, A_ = { class: "pano-ui-settings-body" }, C_ = { class: "pano-ui-row" }, I_ = ["data-selected"], T_ = ["aria-pressed"], E_ = ["aria-pressed"], D_ = { class: "pano-ui-row" }, R_ = ["data-selected"], O_ = ["aria-pressed"], F_ = ["aria-pressed"], L_ = { class: "pano-ui-row" }, z_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, $_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, j_ = { class: "pano-picker-label" }, V_ = ["hidden"], H_ = ["data-quality"], U_ = {
  key: 1,
  class: "pano-side-footer"
}, B_ = ["data-action"], G_ = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = St(() => {
      const l = t.model;
      return !l || typeof l != "object" ? !1 : Object.keys(l).length > 0 && !!l.coverage;
    });
    function i(l) {
      return { "--v": `${Number((l == null ? void 0 : l.fillPct) || 0)}%` };
    }
    function a(l, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (l == null ? void 0 : l.enabled) === !1;
    }
    return (l, u) => {
      var f, p, g, _, x;
      return Me(), Pe("div", X1, [
        ce("div", J1, [
          ce("div", Z1, [
            ce("span", Q1, [
              We(vn, {
                icon: Rr(Te).globe
              }, null, 8, ["icon"])
            ]),
            ce("span", null, gt(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = ce("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = ce("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", e_, [
          ce("div", t_, [
            u[12] || (u[12] = ce("div", { class: "pano-section-title" }, [
              ce("span", null, "Scene")
            ], -1)),
            ce("div", n_, [
              u[1] || (u[1] = ce("label", null, "Coverage", -1)),
              ce("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, i_),
                ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, a_)
              ], 8, r_)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", o_, [...u[2] || (u[2] = [
              ce("span", null, "Transform", -1)
            ])])) : Et("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", s_, [
              ce("label", null, gt(e.model.selectionPicker.label), 1),
              ce("div", l_, [
                ce("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ce("span", u_, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", f_, [
                      We(vn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    ce("span", null, gt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, c_),
                ce("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Pe(Je, null, jt(e.model.selectionPicker.items || [], (S) => (Me(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: pt(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Pe("span", p_, [
                      We(vn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Et("", !0),
                    ce("span", null, gt(S.label), 1)
                  ], 10, h_))), 128))
                ], 8, d_)
              ])
            ])) : Et("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", m_, [
              ce("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                We(vn, {
                  icon: Rr(Te).copy
                }, null, 8, ["icon"]),
                ce("span", null, gt(e.model.copyStateButton.label), 1)
              ], 8, g_)
            ])) : Et("", !0),
            ce("div", {
              class: pt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Pe(Je, { key: 0 }, jt(e.model.notes, (S) => (Me(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, gt(S), 1))), 128)) : (Me(!0), Pe(Je, { key: 1 }, jt(e.model.params || [], (S) => (Me(), Pe("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                ce("label", null, gt(S.label), 1),
                ce("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: kt(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, y_),
                ce("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, v_)
              ], 8, b_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Je, { key: 3 }, [
              u[5] || (u[5] = ce("div", { class: "pano-divider" }, null, -1)),
              ce("div", __, [
                u[4] || (u[4] = ce("div", { class: "pano-section-title" }, [
                  ce("span", null, "Layers")
                ], -1)),
                ce("div", x_, [
                  (Me(!0), Pe(Je, null, jt(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: pt(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ce("span", S_, [
                      ce("span", N_, [
                        We(vn, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      ce("span", null, gt(S.label), 1)
                    ]),
                    ce("button", {
                      class: pt(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      We(vn, {
                        icon: S.visible === !0 ? Rr(Te).eye : Rr(Te).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, M_)
                  ], 10, w_))), 128))
                ])
              ])
            ], 64)) : Et("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ce("summary", null, [
                u[6] || (u[6] = ce("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ce("span", P_, [
                  We(vn, {
                    icon: Rr(Te).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ce("div", A_, [
                ce("div", C_, [
                  u[7] || (u[7] = ce("label", null, "Drag X", -1)),
                  ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, T_),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, E_)
                  ], 8, I_)
                ]),
                ce("div", D_, [
                  u[8] || (u[8] = ce("label", null, "Drag Y", -1)),
                  ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, O_),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, F_)
                  ], 8, R_)
                ]),
                ce("div", L_, [
                  u[10] || (u[10] = ce("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ce("div", z_, [
                    ce("button", $_, [
                      ce("span", j_, gt(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ce("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Pe(Je, null, jt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: pt(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, gt(S.label), 11, H_))), 128))
                    ], 8, V_)
                  ])
                ]),
                u[11] || (u[11] = ce("div", { class: "pano-ui-row" }, [
                  ce("span"),
                  ce("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, k_)) : Et("", !0)
          ])
        ])) : Et("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", U_, [
          (Me(!0), Pe(Je, null, jt(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: pt(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, gt(S.label), 11, B_))), 128))
        ])) : Et("", !0)
      ]);
    };
  }
}, K_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: pt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: kt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, gt(e.model.text || ""), 7));
  }
}, W_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Y_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", W_, [
      (Me(!0), Pe(Je, null, jt(e.buttons, (i) => ic((Me(), Ii(jr, {
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
        [uc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, q_ = ["data-video-ready"], X_ = { class: "pano-video-transport-shell" }, J_ = { class: "pano-video-controls-left" }, Z_ = { class: "pano-video-filmstrip" }, Q_ = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, ex = ["src", "onLoad"], tx = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, nx = ["max", "value", "disabled"], rx = { class: "pano-video-controls-right" }, ix = ["data-has-audio"], ax = { class: "pano-video-volume-pop" }, ox = ["value", "disabled"], sx = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), i = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), a = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Te.pause : Te.play;
    }), l = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = St(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Te.loop_off : Te.loop;
    }), p = St(() => {
      var F, q;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), g = St(() => {
      var F, q, j;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Te.volume : ((q = t.state) == null ? void 0 : q.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? Te.volume_muted : Te.volume2;
    }), _ = St(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), x = St(() => ({ left: `${_.value}%` })), S = St(() => {
      var Q, de;
      const F = (Q = t.state) == null ? void 0 : Q.volumePct, q = Number(((de = t.state) == null ? void 0 : de.volume) ?? 1) * 100, j = Number(F ?? q ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, j))}%`
      };
    }), A = St(() => {
      var j, Q;
      const q = [
        String(((j = t.state) == null ? void 0 : j.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((de, H) => Math.max(de, H.length), 4);
      return `${Math.max(4, q)}ch`;
    }), v = St(() => ({ "--pano-video-time-ch": A.value })), R = St(() => {
      var j, Q;
      const F = Array.isArray((j = t.state) == null ? void 0 : j.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const q = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: q }, (de, H) => ({
        id: `placeholder-${H}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ Eo(/* @__PURE__ */ new Set()), z = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => V.value.has(z(F)), E = (F) => {
      const q = new Set(V.value);
      q.add(z(F)), V.value = q;
    };
    wi(R, (F) => {
      const q = new Set(F.map(z)), j = /* @__PURE__ */ new Set();
      for (const Q of V.value)
        q.has(Q) && j.add(Q);
      V.value = j;
    }, { immediate: !0 });
    const O = St(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, q) => (Me(), Pe("div", {
      class: pt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: kt(O.value)
    }, [
      q[1] || (q[1] = ce("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ce("div", X_, [
        ce("div", J_, [
          We(jr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ce("div", {
            class: "pano-video-time pano-video-time-start",
            style: kt(v.value)
          }, gt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ce("div", Z_, [
          ce("div", Q_, [
            (Me(!0), Pe(Je, null, jt(R.value, (j) => (Me(), Pe("div", {
              key: z(j),
              class: pt(["pano-video-thumb", {
                "is-placeholder": !j.src,
                "is-loaded": j.src && P(j)
              }])
            }, [
              j.src ? (Me(), Pe("img", {
                key: 0,
                src: j.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => E(j)
              }, null, 40, ex)) : (Me(), Pe("span", tx))
            ], 2))), 128))
          ]),
          ce("div", {
            class: "pano-video-playhead",
            style: kt(x.value),
            "aria-hidden": "true"
          }, [...q[0] || (q[0] = [
            ce("span", { class: "pano-video-playhead-line" }, null, -1),
            ce("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ce("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, nx)
        ]),
        ce("div", rx, [
          ce("div", {
            class: "pano-video-time pano-video-time-end",
            style: kt(v.value)
          }, gt(e.state.durationLabel || "0:00"), 5),
          We(jr, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: l.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ce("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ce("div", ax, [
              ce("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: kt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, ox)
            ]),
            We(jr, {
              "extra-class": "pano-video-control",
              icon: g.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, ix)
        ])
      ])
    ], 14, q_));
  }
}, lx = { class: "pano-floating-top" }, cx = ["data-selected", "data-view-count"], ux = ["data-view", "aria-pressed", "aria-label", "disabled"], fx = { class: "label" }, dx = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", lx, [
        ce("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Je, null, jt(e.buttons, (a) => ic((Me(), Pe("button", {
            key: a.key,
            class: pt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            We(vn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ce("span", fx, gt(a.label), 1)
          ], 10, ux)), [
            [uc, a.visible !== !1]
          ])), 128))
        ], 8, cx)
      ]);
    };
  }
};
function Fh(e = "stickers") {
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
const hx = ["aria-label"], px = { class: "pano-stage-wrap" }, mx = {
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
    let a = "", l = !1, u = null;
    const f = /* @__PURE__ */ Eo(null), p = St(() => n.readOnly === !0), g = St(() => n.shellPreset || Fh(n.type)), _ = St(() => {
      var E;
      const P = Array.isArray((E = g.value) == null ? void 0 : E.floatingButtons) ? g.value.floatingButtons.slice() : [];
      return p.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Te.fullscreen
      }), P;
    });
    function x() {
      const P = f.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function S() {
      var O;
      const E = x()[0] || f.value;
      (O = E == null ? void 0 : E.focus) == null || O.call(E);
    }
    function A() {
      var P;
      u != null && u.isConnected && ((P = u.focus) == null || P.call(u)), u = null;
    }
    function v(P) {
      var E, O, F, q;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const j = x();
          if (!j.length) {
            P.preventDefault(), (O = (E = f.value) == null ? void 0 : E.focus) == null || O.call(E);
            return;
          }
          const Q = j[0], de = j[j.length - 1], H = document.activeElement;
          if (P.shiftKey) {
            (H === Q || H === f.value || !((F = f.value) != null && F.contains(H))) && (P.preventDefault(), de.focus());
            return;
          }
          (H === de || !((q = f.value) != null && q.contains(H))) && (P.preventDefault(), Q.focus());
          return;
        }
        P.key === "Escape" && i("close");
      }
    }
    function R() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function V() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function z(P) {
      document.removeEventListener("keydown", v), P ? (u || (u = document.activeElement), R(), document.addEventListener("keydown", v), nc(() => {
        S();
      })) : (V(), A());
    }
    return Od(() => {
      z(n.open);
    }), oc(() => {
      V(), document.removeEventListener("keydown", v), A();
    }), wi(() => n.open, (P) => {
      z(P);
    }), (P, E) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[0] || (E[0] = lh((O) => i("close"), ["self"]))
    }, [
      ce("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ce("div", px, [
          E[1] || (E[1] = tb('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          p.value ? Et("", !0) : (Me(), Pe(Je, { key: 0 }, [
            We(Y_, {
              buttons: e.uiState.toolButtons || g.value.toolButtons || []
            }, null, 8, ["buttons"]),
            We(B1, {
              "paint-swatches": e.paintSwatches,
              panes: g.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          We(sx, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          We(dx, {
            buttons: e.uiState.viewButtons || g.value.viewButtons || []
          }, null, 8, ["buttons"]),
          We(m1, {
            buttons: e.uiState.floatingButtons || _.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          We(q1, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          We(K_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          We(x1, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Et("", !0) : (Me(), Ii(G_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, hx)
    ])) : Et("", !0);
  }
}, Jo = "state_json", Tr = "sticker_image_1", bl = "external_image", yl = "pano_sticker_input_images", Io = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Tt = Math.PI / 180, br = 180 / Math.PI, Zo = 24, gx = 4, bx = 4, lo = /* @__PURE__ */ new Map(), Wf = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), yx = 12;
function zt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function vx(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function _x(e) {
  return 1 - Math.pow(1 - e, 3);
}
function xx(e, t, n) {
  const i = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function wx(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = yr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (yr.delete(t), yr.set(t, n), n);
}
function Sx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (yr.delete(n), yr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); yr.size > yx; ) {
      const a = yr.keys().next().value;
      if (!a) break;
      yr.delete(a);
    }
}
function Nx(e) {
  return e * e * e;
}
function jn(e, t, n) {
  return { x: e, y: t, z: n };
}
function uo(e, t) {
  return jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fo(e, t) {
  return jn(e.x * t, e.y * t, e.z * t);
}
function An(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ho(e, t) {
  return jn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function di(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const n = e * Tt, i = t * Tt, a = Math.cos(i);
  return jn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function po(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * br),
    pitch: W(Math.asin(W(e.y, -1, 1)) * br, -90, 90)
  };
}
function qn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, u = t[i].y, f = t[a].x, p = t[a].y;
    u > e.y != p > e.y && e.x < (f - l) * (e.y - u) / (p - u || 1e-6) + l && (n = !n);
  }
  return n;
}
function pr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function vl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return pr(e, t);
  const p = W((l * i + u * a) / f, 0, 1), g = Number(t.x || 0) + i * p, _ = Number(t.y || 0) + a * p, x = Number(e.x || 0) - g, S = Number(e.y || 0) - _;
  return x * x + S * S;
}
function Xn(e, t, n) {
  return e + (t - e) * n;
}
function Rn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function Mx(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let mo = { fillStyle: "", url: "" };
function kx(e, t, n) {
  if (mo.url && mo.fillStyle === String(e || ""))
    return mo.url;
  const i = Mx(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Zo}" height="${Zo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return mo = { fillStyle: String(e || ""), url: i }, i;
}
function To(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function dn(e) {
  return {
    r: W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: W(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Kt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Px(e) {
  return Io.some((t) => To(e, t.color));
}
function _l(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), l = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const u = Math.floor(i * 6), f = i * 6 - u, p = l * (1 - a), g = l * (1 - f * a), _ = l * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: l, g: _, b: p };
    case 1:
      return { r: g, g: l, b: p };
    case 2:
      return { r: p, g: l, b: _ };
    case 3:
      return { r: p, g, b: l };
    case 4:
      return { r: _, g: p, b: l };
    default:
      return { r: l, g: p, b: g };
  }
}
function xl(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), u = a - l;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: p, v: a };
}
function Ax(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Yf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Cx(e, t) {
  const n = Yf(e, 1), i = Yf(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), f = (x, S) => S ? f(S, x % S) : x, p = f(l, u) || 1, g = Math.max(1, Math.round(l / p)), _ = Math.max(1, Math.round(u / p));
  return `${g}:${_}`;
}
function ta(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Tt, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Tt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ix(e) {
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
  for (const [a, l] of n)
    if (Math.abs(t - l) <= i) return a;
  return "";
}
function Or(e) {
  const t = ta(e);
  return Ix(t) || Cx(t, 1);
}
function Lh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Or(t), t;
}
function Xi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Or(e);
}
let go = null;
function Tx() {
  return go || (go = new Promise((e) => {
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
  }), go);
}
const zh = "pano_suite.ui_settings.v1", $h = "pano_suite.node_grid_visibility.v1";
let bi = null, On = null, bo = { text: null, parsed: null };
function fa(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Ex() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(zh)) || "").trim();
    if (!t) return bi ? fa(bi) : null;
    const n = JSON.parse(t), i = fa(n);
    return bi = i, i;
  } catch {
    return bi ? fa(bi) : null;
  }
}
function Dx(e) {
  var n;
  const t = fa(e);
  bi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(zh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function jh() {
  var e;
  if (On && typeof On == "object")
    return On;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($h)) || "").trim();
    if (!t)
      return On = {}, On;
    const n = JSON.parse(t);
    return On = n && typeof n == "object" ? n : {}, On;
  } catch {
    return On = {}, On;
  }
}
function Rx(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = jh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Ox(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = jh();
  i[n] = !!t, On = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem($h, JSON.stringify(i));
  } catch {
  }
}
function Fx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Lx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function zx(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function qf(e) {
  const { paintCount: t, maskCount: n } = zx(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: l,
    totalPaintCount: t + a,
    totalMaskCount: n + l
  };
}
function hi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Xf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function $x(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Lh(t)) : [];
}
function jx(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Ex(), l = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: zt(i),
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
  }, u = String(e || "").trim();
  if (!u) return l;
  try {
    let f = null;
    if (bo.text === u ? f = bo.parsed : (f = JSON.parse(u), bo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return l;
    const p = {
      ...l,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Fx(f.assets),
      stickers: Lx(f.stickers),
      shots: $x(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ua(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const g = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return g === "draft" || g === "balanced" || g === "high" ? g : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...l.active }
    };
    return a && (p.ui_settings = fa({ ...p.ui_settings, ...a })), p.output_preset = Vh(t, Number(p.output_preset || l.output_preset)), p.bg_color = String(n || p.bg_color || l.bg_color), p.coverage = zt(i), delete p.editor_history, p;
  } catch {
    return bo = { text: u, parsed: null }, l;
  }
}
function _n(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function _c(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = _n(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, u, f, p, g, _, x, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (p = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), (v = (A = (S = hn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Vx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Jf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Hx(e) {
  var A, v, R, V, z;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = _n(e, "coverage"), n = _n(e, "bg_color"), i = _n(e, Jo), a = _n(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && Vx(l) && (Jf(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let g = "360";
  if (Jf(u))
    try {
      const P = JSON.parse(u);
      g = String(zt(P == null ? void 0 : P.coverage));
    } catch {
      g = "360";
    }
  const _ = l, x = u, S = f;
  t.value = g, (A = t.callback) == null || A.call(t, g), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = x, (R = i.callback) == null || R.call(i, x), a && (a.value = S, (V = a.callback) == null || V.call(a, S)), (z = e.setDirtyCanvas) == null || z.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function Ux(e, t) {
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
function Bx(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Bl(e, t, n) {
  var l, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Vh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Gx(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function Kx(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function Hh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Wx(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Uh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Yx(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = Wx(e == null ? void 0 : e.graph, n)), i;
}
function wa(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = tn) == null ? void 0 : a.apiURL) == "function" ? tn.apiURL(i) : i;
}
function qx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Xx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Jx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Bh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (qx(t)) return [t];
  const { filename: n, subfolder: i } = Xx(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => wa({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Jx([...a, t]);
}
function Zx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? wa({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function da(e) {
  var i;
  const t = (i = hn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function Kr(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Kr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return wa({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Kr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : wa(e);
}
function Qx(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function wl(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = Kr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function Zf(e, t, n, i = null) {
  var x;
  const a = da(e == null ? void 0 : e.id), l = Array.isArray((x = a == null ? void 0 : a.ui) == null ? void 0 : x[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(l) && l.length ? l[0] : null, f = Kr(u);
  if (!f) return null;
  const p = `__ui__${t}`, g = n.get(p);
  if (g && g.__panoSrc === f) return g;
  const _ = new Image();
  return _.__panoSrc = f, _.onload = () => {
    typeof i == "function" && i(_);
  }, _.src = f, n.set(p, _), _;
}
function ew(e, t) {
  var P, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((O) => String((O == null ? void 0 : O.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], u = l == null ? void 0 : l.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Hh(e.graph, u), { originId: p, originSlot: g } = Uh(f);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const _ = Yx(e, a, p), x = Number(g || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((P = hn) == null ? void 0 : P.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(_) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const O = [];
    x >= 0 && x < S.length && O.push(S[x]), O.push(...S);
    const F = wl(O);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = da((_ == null ? void 0 : _.id) ?? p), v = Qx(A, x), R = wl(v);
  if (R.length) return { src: R[0], srcCandidates: R, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (V.length) {
    const O = [];
    x >= 0 && x < V.length && O.push(V[x]), O.push(...V);
    const F = wl(O);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "nodeImgs", inputName: n };
  }
  const z = (E = _ == null ? void 0 : _.widgets) == null ? void 0 : E.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image");
  if (z) {
    let O = Kr(z.value);
    if (O && !O.includes("/") && !O.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (O = tn.apiURL(`/view?filename=${encodeURIComponent(O)}&type=input&subfolder=`)), O) return { src: O, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function tw(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = Bh(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const p = new Image(), g = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(u, g);
  let _ = -1;
  const x = () => {
    var A, v;
    if (_ += 1, _ >= l.length) {
      try {
        (v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || v.call(A, u);
      } catch {
      }
      return;
    }
    const S = l[_];
    g.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = () => {
    var S, A;
    if (_ + 1 < l.length) {
      x();
      return;
    }
    try {
      (A = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || A.call(S, u);
    } catch {
    }
  }, x(), p;
}
function nw(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(l);
  if (f && f.srcRaw === u && f.img) return f.img;
  const p = [], g = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    Bh(v).forEach((R) => {
      const V = String(R || "").trim();
      !V || g.has(V) || (g.add(V), p.push(V));
    });
  }), !p.length) return null;
  const _ = new Image(), x = { srcRaw: u, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(l, x);
  let S = -1;
  const A = () => {
    var R, V;
    if (S += 1, S >= p.length) {
      try {
        (V = (R = e.__panoLinkedInputImageCache) == null ? void 0 : R.delete) == null || V.call(R, l);
      } catch {
      }
      return;
    }
    const v = p[S];
    x.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v, R;
    if (S + 1 < p.length) {
      A();
      return;
    }
    try {
      (R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.delete) == null || R.call(v, l);
    } catch {
    }
  }, A(), _;
}
function Gh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = ew(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function vo(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = Gh(e, a), u = String(i || a.join("|") || "image_exact"), f = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (f.length) return nw(e, u, f, n);
  const p = String((l == null ? void 0 : l.src) || "").trim();
  return p ? tw(e, u, p, n) : null;
}
async function ha(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, u = Ux(e, t);
  await Tx();
  const f = _n(e, "output_preset"), p = _n(e, "coverage"), g = _n(e, "bg_color"), _ = _n(e, Jo), x = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return vo(
      e,
      r,
      () => ge(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = x();
    return Kx(r);
  }, A = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return Gx(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : Vh(o, r);
  }, v = jx(
    String((_ == null ? void 0 : _.value) || ""),
    A(2048),
    String((g == null ? void 0 : g.value) || "#00ff00"),
    zt(p == null ? void 0 : p.value)
  );
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, V = R ? Jc(R, !1) : { width: 220, height: 132 }, z = Fh(t), P = /* @__PURE__ */ as({
    viewButtons: (z.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (z.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(z.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Te.fullscreen, disabled: !1 }] : []
    ],
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
      customColorCss: Rn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Rn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      label: R ? "Loading preview" : "Add Frame to preview"
    }
  }), E = document.createElement("div");
  document.body.appendChild(E);
  const O = Lb(mx, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: z,
    paintSwatches: Io.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Rn(r.color, 1)
    })),
    uiState: P,
    onClose: () => {
      ci();
    }
  });
  try {
    O.mount(E);
  } catch (r) {
    try {
      O.unmount();
    } catch {
    }
    throw E.remove(), r;
  }
  const F = E.querySelector(".pano-modal-overlay"), q = E.querySelector(".pano-modal"), j = q == null ? void 0 : q.querySelector("[data-stage-overlay]"), Q = q == null ? void 0 : q.querySelector("[data-stage-background]"), de = q == null ? void 0 : q.querySelector(".pano-stage-wrap");
  if (!F || !q || !j || !Q || !de)
    throw O.unmount(), E.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const H = document.createElement("div");
  H.setAttribute("aria-hidden", "true"), H.style.position = "absolute", H.style.left = "0", H.style.top = "0", H.style.pointerEvents = "none", H.style.zIndex = "12", H.style.display = "none", H.style.willChange = "transform,width,height,background,border-radius", de == null || de.appendChild(H);
  const be = document.createElement("div");
  be.className = "pano-paint-size-preview", be.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", be.appendChild(xe), de == null || de.appendChild(be);
  const I = j.getContext("2d"), we = Vr(), ie = t === "cutout" ? t1({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, he = q.querySelector("[data-side]"), L = q.querySelector("[data-video-element]"), Z = q.querySelector(".pano-floating-right"), _e = q.querySelector("[data-selection-menu]"), De = q.querySelector("[data-tooltip]"), Re = q.querySelector("[data-camera-preview-host]"), Be = q.querySelector("[data-paint-color-row]"), je = q.querySelector("[data-paint-color-pop]"), bt = q.querySelector("[data-paint-color-sv]"), Dt = q.querySelector("[data-paint-color-sv-cursor]"), yt = q.querySelector("[data-paint-hue-strip]"), Vt = q.querySelector("[data-paint-hue-handle]");
  let Pt = 0, Ht = 0;
  de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", "boot"), j.style.opacity = "1", Q.style.opacity = "0", a && (he == null || he.remove(), q.classList.add("pano-modal-readonly"));
  const un = () => {
    if (!h.customPaintSessionStart) return;
    if (To(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (Px(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const r = [
      dn(h.customPaintColor),
      ...h.customPaintHistory.filter((o) => !To(o, h.customPaintColor))
    ];
    h.customPaintHistory = r.slice(0, 8), h.customPaintSessionStart = null;
  }, wn = (r = !1) => {
    !je || je.hidden || (r ? un() : h.customPaintSessionStart = null, je.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, D = () => {
    je && (je.hidden && (h.customPaintSessionStart = dn(h.customPaintColor)), je.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  q.addEventListener("pointerdown", (r) => {
    Wa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (q.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), wn(!0), t === "cutout" && h.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ue(), ge())));
  });
  const U = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, ae = JSON.stringify(Xf(v)), h = {
    mode: "pano",
    selectedId: U,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: zt(v.coverage),
    historyController: zv(80, { entries: [ae], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Yn,
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
    showGrid: Rx(e == null ? void 0 : e.id, !0),
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
    paintEngine: Rl(),
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
  }, C = ie && Re ? ie.mount(Re, { shot: null }) : null;
  t === "stickers" && (h.selectedId = null, v.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const G = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Y = document.createElement("canvas");
  Y.__panoFrameIdx = 0;
  const J = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, fe = (r) => {
    const o = String(r || "default");
    j.style.cursor !== o && (j.style.cursor = o);
  }, ye = {
    timer: 0,
    target: null
  }, Ne = {
    active: !1,
    depth: 0
  }, ee = {
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
  }, Oe = 4, Fe = 9, Ge = [];
  let nt = 0;
  const Ae = () => {
    var N, k;
    const r = (N = de == null ? void 0 : de.getBoundingClientRect) == null ? void 0 : N.call(de), o = (k = Z == null ? void 0 : Z.getBoundingClientRect) == null ? void 0 : k.call(Z), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), c = o ? Math.max(0, Number(o.width || 0)) : 0, y = c > 0 ? c + 14 + 12 : 72, b = Math.max(280, Math.floor(s - y * 2)), w = h.fullscreen ? Math.min(1200, b) : b;
    P.videoTransport.shellMaxWidthPx = w;
  }, vt = () => {
    nt || (nt = window.requestAnimationFrame(() => {
      nt = 0, Ae();
    }));
  }, gn = () => {
    const r = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, _t = (r) => {
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
    return !!P.videoTransport.hasAudio;
  }, st = typeof ResizeObserver < "u" ? new ResizeObserver(() => vt()) : null;
  st == null || st.observe(de), Z && (st == null || st.observe(Z)), Ge.push(() => {
    var r;
    nt && (window.cancelAnimationFrame(nt), nt = 0), (r = st == null ? void 0 : st.disconnect) == null || r.call(st);
  }), vt();
  const Jt = () => {
    ee.thumbnailJobId += 1, ee.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Fe;
  }, Ti = async (r, o, s) => {
    const c = String(r || "").trim();
    if (!c) {
      Jt();
      return;
    }
    const d = wx(c);
    if (d) {
      ee.thumbnailSrc = c, P.videoTransport.thumbnails = d.thumbnails, P.videoTransport.thumbnailCount = d.thumbnailCount;
      return;
    }
    if (ee.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++ee.thumbnailJobId;
    ee.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Fe;
    const y = document.createElement("video");
    if (y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous", !await new Promise((le) => {
      let pe = !1;
      const oe = (me) => {
        pe || (pe = !0, le(me));
      };
      y.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), y.addEventListener("canplay", () => oe(!0), { once: !0 }), y.addEventListener("error", () => oe(!1), { once: !0 }), y.src = c, y.load();
    }) || ee.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(y.videoWidth || 0)), N = Math.max(1, Number(y.videoHeight || 0));
    if (w < 1 || N < 1) return;
    const k = Math.max(0, Number(y.duration || o || 0)), M = document.createElement("canvas"), T = 46, $ = Math.max(72, Math.round(w / N * T));
    M.width = $, M.height = T;
    const te = M.getContext("2d");
    if (!te) return;
    const B = [], K = (le) => new Promise((pe) => {
      let oe = !1;
      const me = () => {
        oe || (oe = !0, pe());
      };
      y.addEventListener("seeked", me, { once: !0 }), y.addEventListener("error", me, { once: !0 });
      try {
        y.currentTime = le;
      } catch {
        me();
      }
    });
    for (let le = 0; le < Fe; le += 1) {
      if (ee.thumbnailJobId !== m) return;
      const pe = le / (Fe - 1), oe = k > 0 ? Math.max(0, Math.min(k - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), k * pe)) : 0;
      if (await K(oe), ee.thumbnailJobId !== m) return;
      te.clearRect(0, 0, $, T), te.drawImage(y, 0, 0, $, T), B.push({
        id: `thumb-${le}`,
        src: M.toDataURL("image/jpeg", 0.72),
        time: oe,
        label: Ns(oe)
      });
    }
    ee.thumbnailJobId === m && (P.videoTransport.thumbnails = B, P.videoTransport.thumbnailCount = B.length || Fe, Sx(c, {
      thumbnails: B,
      thumbnailCount: B.length || Fe,
      duration: k,
      fps: s
    }));
  }, Ei = (r) => {
    const o = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, xc = (r) => {
    if (!(L instanceof HTMLVideoElement) || Number(L.videoWidth || 0) < 1 || Number(L.videoHeight || 0) < 1) return null;
    const o = Number(L.videoWidth || 0), s = Number(L.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const d = c.getContext("2d");
    if (!d) return null;
    for (d.drawImage(L, 0, 0, o, s), ee.frameCache.set(r, c), ee.frameCacheOrder = ee.frameCacheOrder.filter((m) => m !== r), ee.frameCacheOrder.push(r); ee.frameCacheOrder.length > Oe; ) {
      const m = ee.frameCacheOrder.shift();
      m != null && ee.frameCache.delete(m);
    }
    return c;
  }, Kh = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (Y.width !== s || Y.height !== c) && (Y.width = s, Y.height = c);
    const d = Y.getContext("2d");
    return d ? (d.clearRect(0, 0, s, c), d.drawImage(r, 0, 0, s, c), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, o != null && (ee.presentedTime = Number(o || 0)), !0) : !1;
  }, wc = (r) => {
    const o = Ei(r), s = ee.frameCache.get(o) || null;
    return s ? (ee.currentFrameNumber = o, Kh(s, r)) : !1;
  };
  if (Ge.push(() => {
    Jt();
  }), L instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof L.requestVideoFrameCallback != "function" || L.__panoFramePumpActive) return;
      L.__panoFramePumpActive = !0;
      const b = (w, N) => {
        L.__panoFramePumpActive = !1;
        const k = Number((N == null ? void 0 : N.mediaTime) ?? L.currentTime ?? 0), M = Ei(k), T = gn();
        ee.mode === "scrub" ? Math.abs(k - Number(ee.editorTime || 0)) <= T && (xc(M), wc(ee.editorTime), J.backgroundDirty = !0, J.dirty = !0, Tn({
          ready: !0,
          playing: !1,
          visible: Gn(),
          currentTime: ee.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (ee.editorTime = k, ee.presentedTime = k, ee.requestedTime = null, ee.currentFrameNumber = M, xc(M), ee.frameCounter += 1, L.dataset.panoFrameIdx = String(ee.frameCounter), J.backgroundDirty = !0, J.dirty = !0, Tn({
          ready: !0,
          playing: !L.paused && !L.ended,
          visible: Gn(),
          currentTime: k,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), J.running && (!L.paused || ee.mode === "scrub") && r();
      };
      try {
        L.requestVideoFrameCallback(b);
      } catch {
        L.__panoFramePumpActive = !1;
      }
    }, o = () => {
      ee.pendingPlaybackResume && (ee.pendingPlaybackResume = !1, ee.mode = "playback", ee.requestedTime = null, Qr() && (J.backgroundDirty = !0, J.dirty = !0), L.play().catch(() => {
      }));
    }, s = () => {
      ee.editorTime = Number(L.currentTime || 0), Number(L.readyState || 0) >= 2 && Qr() && (J.backgroundDirty = !0, J.dirty = !0), ei(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      ee.mode = "playback", ee.seeking = !1, ee.requestedTime = null, ei(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, d = () => {
      ee.mode === "playback" && Qr() && (J.backgroundDirty = !0, J.dirty = !0), ei(), ge({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Gn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: L.muted,
        volume: Number(L.volume ?? P.videoTransport.volume ?? 1)
      });
    }, y = () => {
      const b = ee.seeking || ee.pendingPlaybackResume || ee.mode === "scrub";
      if (ee.seeking = !1, !b) {
        ee.requestedTime = null, r();
        return;
      }
      const w = Number(ee.requestedTime ?? ee.editorTime ?? 0), N = Number(L.currentTime || 0);
      if (Math.abs(N - w) > gn()) {
        Ms(w);
        return;
      }
      ee.mode === "scrub" && (Qr(), J.backgroundDirty = !0, J.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), ee.requestedTime = null, o(), r();
    };
    L.addEventListener("loadedmetadata", s), L.addEventListener("loadeddata", s), L.addEventListener("canplay", s), L.addEventListener("play", c), L.addEventListener("pause", d), L.addEventListener("volumechange", m), L.addEventListener("seeked", y), Ge.push(() => L.removeEventListener("loadedmetadata", s)), Ge.push(() => L.removeEventListener("loadeddata", s)), Ge.push(() => L.removeEventListener("canplay", s)), Ge.push(() => L.removeEventListener("play", c)), Ge.push(() => L.removeEventListener("pause", d)), Ge.push(() => L.removeEventListener("volumechange", m)), Ge.push(() => L.removeEventListener("seeked", y));
  }
  function Wh() {
    P.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === h.primaryTool : s ? r.key === h.paintTool : c ? r.key === h.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function ps(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const c = String(s.type || "").toLowerCase();
        if (!c || c.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => Ha(s)) : !1;
  }
  function wr(r) {
    const o = !!r;
    Ne.active !== o && (Ne.active = o, de.classList.toggle("drop-active", o));
  }
  function ms(r, o, s = h.viewFov, c = 140, d = 620) {
    const m = xy(h.viewYaw, r), y = o - h.viewPitch, b = s - h.viewFov, w = Math.hypot(m, y) + Math.abs(b) * 0.6, N = Math.round(W(c + w * 2.2, c, d));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, ge();
  }
  Np();
  function Bn() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Ut() {
    const r = v.painting || (v.painting = ua(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Yh(r = "paint") {
    var d, m;
    const o = Array.isArray((m = (d = v.painting) == null ? void 0 : d[r]) == null ? void 0 : m.strokes) ? v.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const y of o) {
      const b = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !b || c.has(b) || (c.add(b), s.push(b));
    }
    return s;
  }
  function qh() {
    return Yh("paint");
  }
  function Di(r, o) {
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
  function Oi(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function gs() {
    var o;
    let r = -1;
    for (const s of Array.isArray(v.stickers) ? v.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Ut())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = v.painting) == null ? void 0 : o.raster_objects) ? v.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Sc(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = Ut();
    let d = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? gs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(d)), d;
  }
  function Xh(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), c = Number(r.halfW || 0), d = Number(r.halfH || 0);
    return [
      {
        u: ((o - c) % 1 + 1) % 1,
        v: W(s - d, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: W(s - d, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: W(s + d, 0, 1)
      },
      {
        u: ((o - c) % 1 + 1) % 1,
        v: W(s + d, 0, 1)
      }
    ];
  }
  function Jh() {
    const r = new Set(qh()), s = Ut().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: gs(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, d) => Number((c == null ? void 0 : c.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), v.painting.groups = s, s;
  }
  function Zh(r, o, s) {
    var B;
    const c = (K) => (Number(K || 0) % 1 + 1) % 1, d = [];
    for (const K of s) {
      const le = K == null ? void 0 : K.geometry, pe = (le == null ? void 0 : le.geometryKind) === "lasso_fill" ? le == null ? void 0 : le.points : (le == null ? void 0 : le.processedPoints) || (le == null ? void 0 : le.rawPoints) || (le == null ? void 0 : le.points) || [];
      Array.isArray(pe) && d.push(...pe);
    }
    if (!d.length) return null;
    const m = c(((B = d[0]) == null ? void 0 : B.u) || 0);
    let y = 0, b = 0;
    d.forEach((K) => {
      const le = c((K == null ? void 0 : K.u) || 0);
      y += m + bn(le, m), b += Number((K == null ? void 0 : K.v) || 0);
    });
    const w = (y / d.length % 1 + 1) % 1;
    let N = 1 / 0, k = -1 / 0, M = 1 / 0, T = -1 / 0;
    d.forEach((K) => {
      const le = c((K == null ? void 0 : K.u) || 0), pe = bn(le, w);
      N = Math.min(N, pe), k = Math.max(k, pe);
      const oe = Number((K == null ? void 0 : K.v) || 0);
      M = Math.min(M, oe), T = Math.max(T, oe);
    });
    const $ = s.reduce((K, le) => {
      const pe = dr(String((le == null ? void 0 : le.toolKind) || "pen")), oe = sn[pe] || sn[Yn], me = Math.max(1, Number((le == null ? void 0 : le.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(K, me);
    }, 0), te = Math.max(35e-4, $ / 2048);
    return {
      centerUv: { u: ((w + (N + k) * 0.5) % 1 + 1) % 1, v: W((M + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (k - N) * 0.5 + te,
      halfH: (T - M) * 0.5 + te,
      uvPad: te
    };
  }
  function sr(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const d = Ut().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === c);
    if (!d) return null;
    const m = s || Sn(c, o);
    return d.frame = Zh(c, o, m), d.frame;
  }
  function Yr() {
    var c;
    const r = (Array.isArray(v.stickers) ? v.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = Jh().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), s = (Array.isArray((c = v.painting) == null ? void 0 : c.raster_objects) ? v.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...r, ...o, ...s].sort((d, m) => Number(d.z_index || 0) - Number(m.z_index || 0));
  }
  function bs(r = !0) {
    var s, c, d, m, y, b;
    const o = Yr().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (r) {
      const w = String(((c = (s = h.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), N = String(((m = (d = h.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), k = String(((b = (y = h.interaction) == null ? void 0 : y.stroke) == null ? void 0 : b.toolKind) || "").trim();
      w && N === "paint" && k !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function ys(r = !0) {
    var b, w, N, k, M, T;
    const o = Yr();
    if (!r) return o;
    const s = String(((w = (b = h.interaction) == null ? void 0 : b.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((k = (N = h.interaction) == null ? void 0 : N.stroke) == null ? void 0 : k.layerKind) || "").trim(), d = String(((T = (M = h.interaction) == null ? void 0 : M.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || c !== "paint" || d === "eraser" || o.some(($) => $.type === "strokeGroup" && String($.actionGroupId || "") === s))
      return o;
    const m = at();
    let y = o.reduce(($, te) => Math.max($, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return m && At(m) && String(m.actionGroupId || "") === s && (y = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: y,
        item: null
      }
    ].sort(($, te) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0));
  }
  function Qh() {
    return Ut().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => Xr(Di("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ep() {
    var r;
    return (Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => qr(Ri((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Nc(r = h.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function tp() {
    var o, s, c, d;
    let r = null;
    try {
      const m = bs(), y = ((d = (c = (s = (o = h.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : d.canvas) || null;
      y && (r = {
        source: y,
        revision: `${ii()}:${ka()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function ka() {
    var d, m, y, b, w, N, k;
    const r = h.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Nc(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const M = ((d = r == null ? void 0 : r.stroke) == null ? void 0 : d.geometry) || null, T = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), $ = ((y = M == null ? void 0 : M.rawPoints) == null ? void 0 : y.length) ?? ((b = M == null ? void 0 : M.points) == null ? void 0 : b.length) ?? 0, te = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${te}_${$}_${h.livePaintInteractionRevision}`;
    }
    const s = String(((w = r == null ? void 0 : r.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((k = r == null ? void 0 : r.item) == null ? void 0 : k.id) || "");
    return `_${o}_${s || c || "active"}_${h.livePaintInteractionRevision}`;
  }
  function vs() {
    const r = Array.isArray(v.shots) ? v.shots : [], o = Array.isArray(v.stickers) ? v.stickers : [];
    return [...r, ...o];
  }
  function rn(r) {
    return !!r && Array.isArray(v.shots) && v.shots.includes(r);
  }
  function ut(r) {
    return !!r && Array.isArray(v.stickers) && v.stickers.includes(r);
  }
  function an() {
    var r;
    return Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : [];
  }
  function qr(r) {
    const o = Ct(r);
    if (!o) return null;
    const s = an().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ri(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Bt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Ct(r.rasterObjectId || r.id || "");
    return !!o && !!qr(Ri(o));
  }
  function Xr(r) {
    const o = Oi(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = Ut().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === s || String((d == null ? void 0 : d.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: Di("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function At(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!Xr(Di(s, o));
  }
  function Sn(r, o = null) {
    const s = Oi(r, o), c = String(s.actionGroupId || "").trim();
    return c ? si(s.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === c) : [];
  }
  function np(r, o = "paint") {
    var m, y, b;
    const s = String(r || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${h.mode}:${ji()}`;
    if (h.mode === "frame") {
      const w = Ke(), N = String((w == null ? void 0 : w.id) || ""), k = w ? It(w) : null;
      return `${d}:frame:${N}:${Math.round(Number((k == null ? void 0 : k.x) || 0))}:${Math.round(Number((k == null ? void 0 : k.y) || 0))}:${Math.round(Number((k == null ? void 0 : k.w) || 0))}:${Math.round(Number((k == null ? void 0 : k.h) || 0))}:${Math.round(Number(((m = h.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((y = h.frameView) == null ? void 0 : y.panX) || 0))}:${Math.round(Number(((b = h.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function Pa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: W(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function bn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function _s(r, o = null, s = null) {
    var N;
    const c = Oi(r, o), d = Array.isArray(s) ? s : Sn(c.actionGroupId, c.layerKind), m = [];
    if (d.forEach((k) => {
      const M = (k == null ? void 0 : k.geometry) || null, T = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let b = 0, w = 0;
    return m.forEach((k) => {
      b += y + bn(Number((k == null ? void 0 : k.u) || 0), y), w += Number((k == null ? void 0 : k.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function Aa(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = bn(Number(r.u || 0), d), b = Number(r.v || 0) - m, w = Number(c || 0) * Tt, N = Math.cos(w), k = Math.sin(w), M = Math.max(0.02, Number(s || 1)), T = (y * N - b * k) * M, $ = (y * k + b * N) * M;
    return {
      ...r,
      u: ((d + T) % 1 + 1) % 1,
      v: W(m + $, 0, 1)
    };
  }
  function Mc(r, o, s, c = null, d = null, m = null) {
    const y = Oi(r, d), b = String(y.actionGroupId || "").trim();
    if (!b) return !1;
    const w = si(y.layerKind), N = Array.isArray(c) ? new Map(c.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let k = !1;
    if (w.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== b) return;
      const T = (N == null ? void 0 : N.get(String((M == null ? void 0 : M.id) || ""))) || M, $ = M == null ? void 0 : M.geometry, te = T == null ? void 0 : T.geometry;
      !$ || !te || (Array.isArray(te.points) && ($.points = te.points.map((B) => Pa(B, o, s)), k = !0), Array.isArray(te.rawPoints) && ($.rawPoints = te.rawPoints.map((B) => Pa(B, o, s)), k = !0), Array.isArray(te.processedPoints) && ($.processedPoints = te.processedPoints.map((B) => Pa(B, o, s)), k = !0));
    }), k && m) {
      const M = Ut().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === b);
      M && (M.frame = null);
    }
    return k;
  }
  function kc(r, o = 1, s = 0, c = null, d = null, m = null) {
    const y = Oi(r, d), b = String(y.actionGroupId || "").trim();
    if (!b) return !1;
    const w = si(y.layerKind), N = Array.isArray(c) ? c : Sn(b, y.layerKind), k = Array.isArray(N) ? new Map(N.map(($) => [String(($ == null ? void 0 : $.id) || ""), $])) : null, M = (m == null ? void 0 : m.centerUv) ?? _s(b, y.layerKind, N);
    let T = !1;
    if (w.forEach(($) => {
      if (String(($ == null ? void 0 : $.actionGroupId) || "").trim() !== b) return;
      const te = (k == null ? void 0 : k.get(String(($ == null ? void 0 : $.id) || ""))) || $, B = $ == null ? void 0 : $.geometry, K = te == null ? void 0 : te.geometry;
      !B || !K || (Array.isArray(K.points) && (B.points = K.points.map((le) => Aa(le, M, o, s)), T = !0), Array.isArray(K.rawPoints) && (B.rawPoints = K.rawPoints.map((le) => Aa(le, M, o, s)), T = !0), Array.isArray(K.processedPoints) && (B.processedPoints = K.processedPoints.map((le) => Aa(le, M, o, s)), T = !0));
    }), T && m) {
      const $ = Ut().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === b);
      $ && ($.frame = null);
    }
    return T;
  }
  function Pc(r, o, s, c = null) {
    const d = Ct(r);
    if (!d) return !1;
    const m = an().find((k) => String((k == null ? void 0 : k.id) || "").trim() === d);
    if (!m) return !1;
    const y = c && typeof c == "object" ? c : m, b = (y == null ? void 0 : y.transform) || {}, w = Number(b.du || 0) + Number(o || 0), N = W(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = N, !0;
  }
  function rp(r, o = 1, s = null) {
    const c = Ct(r);
    if (!c) return !1;
    const d = an().find((N) => String((N == null ? void 0 : N.id) || "").trim() === c);
    if (!d) return !1;
    const m = s && typeof s == "object" ? s : d, y = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(y.scale || 1)), w = W(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = w, !0;
  }
  function at() {
    const r = String(h.selectedId || "");
    if (!r) return null;
    const o = Xr(r);
    if (o) return o;
    const s = qr(r);
    return s || (t === "cutout" ? vs().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : Bn().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function Nn() {
    const r = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const d = String(c || "").trim();
      if (!d || s.has(d)) return;
      s.add(d);
      const m = d === String(h.selectedId || "") ? at() : Xr(d) || qr(d) || (t === "cutout" ? vs().find((y) => String((y == null ? void 0 : y.id) || "") === d) : Bn().find((y) => String((y == null ? void 0 : y.id) || "") === d));
      m && o.push(m);
    }), o;
  }
  function xs(r = null) {
    const o = Array.isArray(r) ? r : Nn();
    if (!o || o.length < 2) return null;
    const s = o.map((N) => Ot(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((N) => N.corners.map((k) => Number((k == null ? void 0 : k.x) || 0))), d = s.flatMap((N) => N.corners.map((k) => Number((k == null ? void 0 : k.y) || 0))), m = Math.min(...c), y = Math.max(...c), b = Math.min(...d), w = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (b + w) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: y, y: b },
        { x: y, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: b, a: { x: m, y: b }, b: { x: y, y: b } },
        { edge: "right", x: y, y: (b + w) * 0.5, a: { x: y, y: b }, b: { x: y, y: w } },
        { edge: "bottom", x: (m + y) * 0.5, y: w, a: { x: y, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (b + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: b },
      rotateHandle: { x: (m + y) * 0.5, y: b - 30 }
    };
  }
  function ip(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(h.selectedIds) && h.selectedIds.includes(o);
  }
  function Ca() {
    const r = at();
    return r ? At(r) || Bt(r) ? "stroke" : rn(r) ? "frame" : "image" : null;
  }
  function lr(r) {
    if (!r || typeof r != "object") return !1;
    if (At(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Ut().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Bt(r)) {
      const o = Ct(r.rasterObjectId || r.id || ""), s = an().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function ws(r = null) {
    const o = Array.isArray(r) ? r : Nn();
    return o.length > 0 && o.every((s) => lr(s));
  }
  function ap(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (At(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), d = Ut().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    if (Bt(r)) {
      const c = Ct(r.rasterObjectId || r.id || ""), d = an().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function op() {
    if (i) return;
    const r = Nn();
    if (!r.length) return;
    const o = !ws(r);
    let s = !1;
    r.forEach((c) => {
      ap(c, o) && (s = !0);
    }), s && (lt(), xt(), Ue(), ge());
  }
  function Sr(r) {
    h.selectedId = (r == null ? void 0 : r.id) || null, h.selectedIds = r != null && r.id ? [r.id] : [], r && ut(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && rn(r) ? v.active.selected_shot_id = r.id || null : r ? rn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function sp(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((y) => {
      const b = String((y == null ? void 0 : y.id) || "").trim();
      !b || c.has(b) || (c.add(b), s.push(b));
    }), h.selectedIds = s;
    const d = String(o || "").trim();
    h.selectedId = d && s.includes(d) ? d : s[s.length - 1] || null;
    const m = at();
    v.active.selected_sticker_id = m && ut(m) && m.id || null, m && rn(m) ? v.active.selected_shot_id = m.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function Ac() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, c) => {
      var m, y;
      const d = Rt(s) ? String(s.id || Tr) : String(((y = (m = v.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : y.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: d
      };
    });
    return [...r, ...o];
  }
  function lp(r) {
    return r === "frame" ? Te.camera : r === "stroke" ? Te.paintbrush_vertical_tool : Te.image;
  }
  function Cc(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: lp(r.kind)
    };
  }
  function Ic() {
    return gs();
  }
  function Rt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Tr || String(r.source_kind || "") === bl;
  }
  function Jr(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function cp(r) {
    return Rt(r) && Jr(r) ? hh : 1;
  }
  function up() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function fp() {
    return String(up() || "") === "lasso_fill";
  }
  function dp() {
    if (i) return;
    const r = at();
    !r || !Rt(r) || (r.visible = Jr(r), Ft(), lt(), xt(), He(), Ue(), ge());
  }
  function hp() {
    if (i || t !== "stickers") return;
    const r = at();
    if (!r || !Rt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = ks(yl, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Nr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), lt(), xt(), He(), Ue(), ge();
  }
  function pp(r) {
    if (!r || !Rt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = ks(yl, () => {
      ge();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = Nr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function mp() {
    const r = at();
    if (!r || !Rt(r)) return !1;
    const o = pp(r);
    if (!o) return !1;
    const s = (c, d) => Math.abs(Number(c || 0) - Number(d || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Ss(r) {
    var s;
    const o = da(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function Tc(r) {
    const o = da(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function Ec() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Ho(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function gp() {
    const { metaKey: r } = Ec(), o = Tc(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function Zr(r) {
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
  function Ns(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function Tn(r = {}) {
    const o = Number(r.currentTime ?? ee.editorTime ?? 0), s = Number(r.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!P.videoTransport.ready, d = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!P.videoTransport.visible, y = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(L instanceof HTMLVideoElement ? L.muted : P.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : L instanceof HTMLVideoElement ? L.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : _t(L), N = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: d,
      visible: m,
      loop: N,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Ns(o),
      durationLabel: Ns(s),
      frameCount: Math.max(0, Number(r.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(r.mode || ee.mode || "playback"),
      hasAudio: w,
      muted: y,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Fe))
    });
  }
  function Gn() {
    return !!(L instanceof HTMLVideoElement && L.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function bp() {
    Tn({
      visible: Gn()
    });
  }
  function Qr() {
    if (!(L instanceof HTMLVideoElement) || Number(L.videoWidth || 0) < 1 || Number(L.videoHeight || 0) < 1) return !1;
    const r = Number(L.videoWidth || 0), o = Number(L.videoHeight || 0);
    (Y.width !== r || Y.height !== o) && (Y.width = r, Y.height = o);
    const s = Y.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(L, 0, 0, r, o), Y.__panoFrameIdx = Number(Y.__panoFrameIdx || 0) + 1, ee.presentedTime = Number(ee.editorTime || L.currentTime || 0), !0) : !1;
  }
  function Dc() {
    return ee.mode === "scrub" && Number(Y.width || 0) > 0 && Number(Y.height || 0) > 0 && Number(Y.__panoFrameIdx || 0) > 0 ? Y : L instanceof HTMLVideoElement && Number(L.videoWidth || 0) > 0 && Number(L.videoHeight || 0) > 0 && Number(L.readyState || 0) >= 2 ? L : null;
  }
  function Ms(r) {
    if (!(L instanceof HTMLVideoElement) || Number(L.videoWidth || 0) < 1 || Number(L.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (ee.requestedTime = o, !ee.seeking && !(Math.abs(Number(L.currentTime || 0) - o) <= 5e-4)) {
      ee.seeking = !0;
      try {
        L.currentTime = o;
      } catch {
        ee.seeking = !1;
      }
    }
  }
  function ei() {
    if (!(L instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = Ec(), o = Ss(r)[0] || null, s = o && typeof o == "object" ? wa(o) : Kr(o), c = gp(), d = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), y = Number((c == null ? void 0 : c.duration) || (d > 0 ? d / m : 0)), b = !!(c != null && c.has_audio) || _t(L);
    return s && L.dataset.panoSrc !== s ? (L.pause(), L.dataset.panoSrc = s, L.dataset.panoFrameIdx = "0", L.loop = !!P.videoTransport.loop, L.muted = !!P.videoTransport.muted, L.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), L.src = s, L.load(), Ti(s, y, m)) : !s && L.getAttribute("src") && (L.pause(), L.removeAttribute("src"), L.load(), Jt()), L.loop !== !!P.videoTransport.loop && (L.loop = !!P.videoTransport.loop), s && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Ti(s, y, m), s || Jt(), Tn({
      ready: !!s,
      playing: !L.paused && !L.ended,
      visible: !!s && h.primaryTool !== "paint" && h.primaryTool !== "mask",
      currentTime: ee.editorTime,
      duration: y,
      frameCount: d,
      fps: m,
      mode: ee.mode,
      hasAudio: b,
      loop: !!L.loop,
      muted: !!L.muted,
      volume: Number(L.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), s || null;
  }
  function yp(r, o = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const c = r[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(o) && o.length > 0) {
      const c = (s = o[0]) == null ? void 0 : s.parsed_state;
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
  function ks(r, o = null) {
    const s = Ss(r), c = Array.isArray(s) && s.length ? s[0] : null, d = Kr(c);
    if (!d) return null;
    const m = `__ui__${r}`, y = G.get(m);
    if (y && y.__panoSrc === d) return y;
    const b = new Image();
    return b.__panoSrc = d, b.onload = () => {
      typeof o == "function" ? o(b) : ge();
    }, b.src = d, G.set(m, b), b;
  }
  function Rc(r = null) {
    const o = vo(e, ["sticker_image"], r, "sticker_image_exact");
    return o || ks(yl, r);
  }
  function Oc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Nr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), d = Math.max(1, Number(s || 1)), m = W(Number(r || 30), 0.1, 179) * Tt, y = 2 * Math.atan(Math.tan(m * 0.5) * (d / c));
    return W(y * br, 0.1, 179);
  }
  function vp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const c = s.version;
      let d = null;
      if (typeof c == "number" && Number.isInteger(c) ? d = c : typeof c == "string" && /^\d+$/.test(c) && (d = Number.parseInt(c, 10)), d !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const y = Number(m.yaw_deg), b = Number(m.pitch_deg), w = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![y, b, w, N].every(($) => Number.isFinite($))) return null;
      let k = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(k, -0) && (k = 0);
      const M = {
        yaw_deg: k,
        pitch_deg: W(b, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(N, 0.1, 179)
      }, T = Number(s.source_aspect);
      return Number.isFinite(T) && T > 0 && (M.source_aspect = T), M;
    } catch {
      return null;
    }
  }
  function Fc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), m = ta(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function _p(r) {
    var b;
    if (!r || typeof r != "object") return Fc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let y = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const w = W(d, 0.1, 179) * Tt, N = W(m, 0.1, 179) * Tt, k = Math.tan(N * 0.5);
      if (Math.abs(k) > 1e-6) {
        const M = Math.tan(w * 0.5) / k;
        Number.isFinite(M) && M > 0 && (y = M);
      }
    }
    if (r != null && r.asset_id && ((b = v == null ? void 0 : v.assets) != null && b[r.asset_id])) {
      const w = v.assets[r.asset_id], N = Number((w == null ? void 0 : w.w) || 0), k = Number((w == null ? void 0 : w.h) || 0);
      N > 0 && k > 0 && (y = N / k);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function xp(r) {
    var c, d, m, y, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((w) => String((w == null ? void 0 : w.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const w = Hh(e.graph, s), { originId: N, originSlot: k } = Uh(w), M = da(N), T = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (c = M == null ? void 0 : M.data) == null ? void 0 : c.output,
        (d = M == null ? void 0 : M.data) == null ? void 0 : d.result,
        (m = M == null ? void 0 : M.ui) == null ? void 0 : m.output,
        (y = M == null ? void 0 : M.ui) == null ? void 0 : y.result
      ];
      for (const $ of T) {
        if (!Array.isArray($)) continue;
        const te = Number(k || 0), B = $[te];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((b = _n(e, r)) == null ? void 0 : b.value) || "");
  }
  function wp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : vp(o);
    if (c) {
      const y = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Nr(c.hFOV_deg, y, b),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const d = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Nr(30, d, m),
      rot_deg: 0
    };
  }
  function Lc(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find(($) => String(($ == null ? void 0 : $.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = Rc(() => {
      var $;
      ($ = e.__panoExternalStickerSync) == null || $.call(e, "image-loaded");
    }), d = yp(Tc("pano_sticker_input_pose"), null), m = xp("sticker_state"), y = Oc(d && typeof d == "object" ? JSON.stringify(d) : m), b = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], w = b.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Tr);
    if (s == null) {
      w >= 0 && (b.splice(w, 1), h.selectedId === Tr && (h.selectedId = null, h.selectedIds = [], v.active.selected_sticker_id = null), xt(), He(), Ue(), ge());
      return;
    }
    const N = b.reduce(($, te) => Math.max($, Number((te == null ? void 0 : te.z_index) || 0)), -1);
    let k = w >= 0 ? b[w] : null;
    const M = !k || Number(k.source_link_id ?? -1) !== Number(s) || String(k.source_state_hash || "") !== y;
    k || (k = {
      id: Tr,
      source_kind: bl
    }, b.push(k)), k.id = Tr, k.source_kind = bl, k.source_link_id = Number(s), k.source_state_hash = y, k.visible = k.visible !== !1;
    let T = !1;
    if (M) {
      const $ = wp(d, m, c);
      Object.assign(k, $, {
        initial_pose: { ...$ },
        visible: !0,
        z_index: N + 1
      }), T = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const $ = Nr(
        Number(k.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(k.vFOV_deg || 0) - $) > 1e-6 && (k.vFOV_deg = $, T = !0);
    }
    T && (xt(), He(), Ue()), ge();
  }
  function ti(r = {}) {
    const s = r.preservePanelValues !== !1 ? at() : null;
    s && (h.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Xi(s)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Sp() {
    if (t !== "cutout") return;
    const r = Ke();
    r && Sr(r);
  }
  function Ps() {
    if (t !== "cutout") return;
    const r = Ke();
    qi(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Te.camera : Te.plus_circle
    });
  }
  function Ia() {
    const r = !!Ke();
    h.mode === "frame" && !r && (h.mode = "pano"), h.outputPreviewRect = null, P.viewButtons.forEach((o) => {
      const s = o.key === h.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), P.outputPreviewToggle.visible = t === "cutout" && !!Ke(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = !0, P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame), fu() ? ft(h.pointerPos) : fe(h.mode === "pano" ? "grab" : "default");
  }
  function Np() {
    const o = Bc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function As() {
    const r = Dn(h.viewYaw, h.viewPitch);
    let o = jn(0, 1, 0);
    Math.abs(An(r, o)) > 0.999 && (o = jn(0, 0, 1));
    const s = di(ho(o, r)), c = di(ho(r, s));
    return { right: s, up: c, fwd: r };
  }
  function Fi(r) {
    const { right: o, up: s, fwd: c } = As(), d = An(r, o), m = An(r, s), y = An(r, c);
    if (y <= 1e-5) return null;
    const b = j.width, w = j.height, N = h.viewFov * Tt, k = 2 * Math.atan(Math.tan(N / 2) * (w / b)), M = b / 2 / Math.tan(N / 2), T = w / 2 / Math.tan(k / 2);
    return {
      x: b / 2 + d / y * M,
      y: w / 2 - m / y * T,
      z: y
    };
  }
  function Cs(r, o) {
    const { right: s, up: c, fwd: d } = As(), m = j.width, y = j.height, b = h.viewFov * Tt, w = 2 * Math.atan(Math.tan(b / 2) * (y / m)), N = (r - m / 2) / (m / 2) * Math.tan(b / 2), k = (y / 2 - o) / (y / 2) * Math.tan(w / 2), M = uo(uo(fo(s, N), fo(c, k)), d);
    return di(M);
  }
  function cr() {
    const r = j.width, o = j.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const b = o, w = b * s;
      return { x: (r - w) * 0.5, y: 0, w, h: b };
    }
    const d = r, m = d / s;
    return { x: 0, y: (o - m) * 0.5, w: d, h: m };
  }
  function zc(r) {
    var y;
    if (r && typeof r == "object" && (Rt(r) || r.external === !0))
      return Rc(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = G.get(o);
    if (s) return s;
    const c = (y = v.assets) == null ? void 0 : y[o], d = Zx(c);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => ge(), m.src = d, G.set(o, m), m;
  }
  function $c(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = re.get(s);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const d = new Image();
    return d.onload = () => {
      typeof o == "function" && o();
    }, d.src = s, re.set(s, d), d;
  }
  function Mp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = ue.get(o);
    if (s) return s.ready ? s : null;
    const c = $c(r, () => {
      const k = ue.get(o);
      k && (k.ready = !1), ge({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const d = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (d < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = d, y.height = m;
    const b = y.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, d, m), b.drawImage(c, 0, 0, d, m);
    const w = b.getImageData(0, 0, d, m).data, N = { canvas: y, width: d, height: m, alpha: w, ready: !0 };
    return ue.set(o, N), N;
  }
  function kp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = bn(Number(r.u || 0), d), b = Number(r.v || 0) - m, w = Math.max(0.02, Number(s || 1)), N = Number(c || 0) * Tt, k = Math.cos(N), M = Math.sin(N), T = y / w, $ = b / w, te = T * k + $ * M, B = -T * M + $ * k;
    return {
      ...r,
      u: ((d + te) % 1 + 1) % 1,
      v: m + B
    };
  }
  function Pp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, d = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, y = kp(
      m,
      d,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), w = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(w > 1e-6)) return null;
    const N = bn(Number(y.u || 0), Number(s.u0 || 0)) / b, k = (Number(y.v || 0) - Number(s.v0 || 0)) / w;
    if (N < 0 || N > 1 || k < 0 || k > 1) return 0;
    const M = Mp(r);
    if (!M) return null;
    const T = W(Math.floor(N * M.width), 0, M.width - 1), $ = W(Math.floor(k * M.height), 0, M.height - 1);
    return Number(M.alpha[($ * M.width + T) * 4 + 3] || 0);
  }
  function jc(r, o, s, c = null) {
    if (!(o != null && o.visible) || !qn(s, o.corners)) return !1;
    const d = c || kn(s, performance.now()), m = Pp(r, d);
    return m === null ? !0 : m > 8;
  }
  function Ap() {
    var c, d, m, y, b, w, N, k;
    const r = ((d = (c = h.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : d.call(c, bs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((b = (y = r == null ? void 0 : r.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((w = r == null ? void 0 : r.descriptor) == null ? void 0 : w.height) || ((k = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : k.height) || 1024));
    return { width: o, height: s };
  }
  function Cp() {
    var $, te, B;
    const r = h.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = fn(), c = `${ka()}:${s.width}:${s.height}`;
    if ((($ = h._activePaintEraserPreviewInfo) == null ? void 0 : $.cacheKey) === c)
      return h._activePaintEraserPreviewInfo.value || null;
    const d = Kt(o), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const K = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Ls(K, d.targetSpace, !0);
    }
    const y = $i(s.width, s.height, { readback: !0 });
    if (!tu(y, d, { w: s.width, h: s.height })) return null;
    const b = ((B = (te = y.ctx) == null ? void 0 : te.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!b) return null;
    let w = s.width, N = s.height, k = -1, M = -1;
    for (let K = 0; K < s.height; K += 1)
      for (let le = 0; le < s.width; le += 1)
        b[(K * s.width + le) * 4 + 3] <= 8 || (le < w && (w = le), K < N && (N = K), le > k && (k = le), K > M && (M = K));
    if (k < w || M < N)
      return h._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const T = {
      surface: y,
      bounds: { minX: w, minY: N, maxX: k, maxY: M },
      key: `${c}:${w}:${N}:${k}:${M}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: c, value: T }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function Li() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Ip(r, o, s) {
    var c, d;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const m = r.item.bbox, y = ((d = r.item) == null ? void 0 : d.transform) || {}, b = Number(m.u0 || 0) + Number(y.du || 0), w = Number(m.u1 || 0) + Number(y.du || 0), N = Number(m.v0 || 0) + Number(y.dv || 0), k = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(N, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = Sn(r.actionGroupId, "paint"), y = sr(r.actionGroupId, "paint", m);
      if (!y) return null;
      const b = y.centerUv.u - y.halfW, w = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, k = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(N, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    return null;
  }
  function Tp(r, o, s) {
    if (!r || !o) return !1;
    const c = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: s - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], d = c(r), m = c(o);
    return d.some((y) => m.some((b) => !(y.maxX < b.minX || b.maxX < y.minX || y.maxY < b.minY || b.maxY < y.minY)));
  }
  function Ep(r, o, s) {
    var me, Ce, Ee, ke, X, ne, ve;
    if (!r || !o || !((me = s == null ? void 0 : s.surface) != null && me.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), d = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || d < 1) return r;
    const m = Ip(o, c, d);
    if (m && !Tp(m, s.bounds, c)) return r;
    const y = String(((Ce = o.item) == null ? void 0 : Ce.id) || o.id || ""), b = ((Ee = o.item) == null ? void 0 : Ee.transform) || {}, w = `${s.key}:${y}:${c}:${d}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, N = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(w)) return N.get(w);
    const k = W(Math.floor(Number(((ke = s.bounds) == null ? void 0 : ke.minX) || 0)), 0, Math.max(0, c - 1)), M = W(Math.floor(Number(((X = s.bounds) == null ? void 0 : X.minY) || 0)), 0, Math.max(0, d - 1)), T = W(Math.ceil(Number(((ne = s.bounds) == null ? void 0 : ne.maxX) || 0)), k, Math.max(0, c - 1)), $ = W(Math.ceil(Number(((ve = s.bounds) == null ? void 0 : ve.maxY) || 0)), M, Math.max(0, d - 1)), te = Math.max(1, T - k + 1), B = Math.max(1, $ - M + 1), K = $i(c, d, { readback: !0 });
    K.ctx.clearRect(0, 0, c, d), K.ctx.drawImage(r, 0, 0);
    const le = K.ctx.getImageData(k, M, te, B);
    K.ctx.save(), K.ctx.globalCompositeOperation = "destination-out", K.ctx.drawImage(s.surface.canvas, 0, 0), K.ctx.restore();
    const pe = K.ctx.getImageData(k, M, te, B);
    let oe = !1;
    for (let Se = 0; Se < te * B; Se += 1) {
      const Ie = le.data[Se * 4 + 3], Le = pe.data[Se * 4 + 3];
      if (Ie > Le) {
        oe = !0;
        break;
      }
    }
    return oe ? (N.size > 64 && N.clear(), N.set(w, K.canvas), K.canvas) : (N.set(w, r), r);
  }
  function Vc(r, o = null) {
    const s = Ct((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const d = $c(r, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: y } = Ap(), b = (r == null ? void 0 : r.transform) || {}, w = [
      s,
      m,
      y,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      ji()
    ].join(":"), N = se.get(w);
    if (N) return N;
    se.size > 64 && se.clear();
    const k = document.createElement("canvas");
    k.width = m, k.height = y;
    const M = k.getContext("2d");
    if (!M) return null;
    const T = Number(c.u0 || 0) * m, $ = Number(c.v0 || 0) * y, te = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), B = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * y), K = T + te * 0.5 + Number(b.du || 0) * m, le = $ + B * 0.5 + Number(b.dv || 0) * y, pe = Number(b.rot_deg || 0) * Tt, oe = Math.max(0.01, Number(b.scale || 1));
    for (const me of [-m, 0, m])
      M.save(), M.translate(K + me, le), M.rotate(pe), M.scale(oe, oe), M.drawImage(d, -te * 0.5, -B * 0.5, te, B), M.restore();
    return se.set(w, k), k;
  }
  function Dp() {
    return hs(v, {
      selectedId: h.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Rp(r) {
    return ph(
      v,
      (o, s, c) => zc(c || o),
      { scene: r }
    );
  }
  function Hc(r, o, s, c, d = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = ur(c);
    if (Yc(o, s))
      return Up(
        o,
        s,
        m && h.showPanorama ? c : null,
        `${d}_bg_gl`
      );
    const b = Ra(), w = Oa(b), N = h.showObjects ? Fa() : zi([]), M = Qi({
      stateRevision: [
        d,
        m ? Zr(c) : "no_bg",
        Array.isArray(w) ? w.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        N.length ? N.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && h.showPanorama ? c : null,
      backgroundRevision: m ? `${d}:${Zr(c)}` : "",
      coverageDeg: zt(v.coverage),
      scene: b,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: N,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), T = we;
    if (!T.syncState(M)) return !1;
    const te = T.renderToTarget(`${d}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return te ? (r.drawImage(te, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Is(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const c = await tn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!c || c.status !== 200)
      throw new Error(`upload failed (${(c == null ? void 0 : c.status) || "no-response"})`);
    const d = await c.json(), m = String((d == null ? void 0 : d.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((d == null ? void 0 : d.subfolder) || "panorama_stickers"),
      storage: String((d == null ? void 0 : d.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function Ts(r, o) {
    const s = await new Promise((b) => r.toBlob(b, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const d = await tn.fetchApi("/upload/image", { method: "POST", body: c });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const m = await d.json(), y = String((m == null ? void 0 : m.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Ta = null, Ea = !1;
  function Op() {
    const r = qf(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = ii();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Uc() {
    const r = String(e.id ?? "0"), o = lo.get(r);
    if (Ea && o) return o;
    const s = (async () => {
      var m, y, b, w, N, k, M, T, $, te, B, K;
      const c = ii(), d = qf(v.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Ta = c, yn());
        return;
      }
      if (Ta !== c && !Ea) {
        Ea = !0;
        try {
          ja();
          const le = bs(!1), pe = ((y = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, le)) || null, oe = ((b = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : b.canvas) || null, me = ((w = pe == null ? void 0 : pe.committedMask) == null ? void 0 : w.canvas) || null, Ce = Math.max(1, Number(((N = pe == null ? void 0 : pe.descriptor) == null ? void 0 : N.width) || (oe == null ? void 0 : oe.width) || (me == null ? void 0 : me.width) || 2048)), Ee = Math.max(1, Number(((k = pe == null ? void 0 : pe.descriptor) == null ? void 0 : k.height) || (oe == null ? void 0 : oe.height) || (me == null ? void 0 : me.height) || 1024));
          (!oe && d.totalPaintCount > 0 || !me && d.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((M = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== Ce || Number(((T = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Ee) && (h._paintLayerSyncBlankSurface = $i(Ce, Ee)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ce, Ee));
          const ke = oe || d.totalPaintCount > 0 && (($ = h._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null, X = me || d.totalMaskCount > 0 && ((te = h._paintLayerSyncBlankSurface) == null ? void 0 : te.canvas) || null;
          if (!ke && !X) return;
          let ne = null, ve = null;
          const Se = [];
          if (d.totalPaintCount > 0) {
            ne = await Ts(ke, `pano_paint_${r}.png`);
            for (const Ie of le) {
              const Le = String(Ie || "").trim();
              if (!Le) continue;
              const ze = ((K = (B = h.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : K.call(B, Le)) || null;
              if (!ze) continue;
              const Ye = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await Ts(ze, `pano_group_${r}_${Ye}.png`);
              qe && Se.push({
                id: Le,
                actionGroupId: Le,
                image: qe
              });
            }
          }
          d.totalMaskCount > 0 && (ve = await Ts(X, `pano_mask_${r}.png`)), c === ii() && (v.painting_layer = {
            paint: ne,
            mask: ve,
            groups: Se,
            revision: c
          }, Ta = c, yn());
        } catch (le) {
          throw le;
        } finally {
          Ea = !1;
        }
      }
    })();
    return lo.set(r, s), s.finally(() => {
      lo.get(r) === s && lo.delete(r);
    }), s;
  }
  function Mr() {
    if (t === "cutout") {
      const b = Dc();
      if (b) return b;
      const w = vo(
        e,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return w || Zf(e, "pano_input_images", G, () => ge()) || null;
    }
    const r = Dc();
    if (r) return r;
    const o = Zf(e, "pano_input_images", G, () => ge());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], c = s.includes("erp_image"), d = s.includes("bg_erp");
    let m = [];
    return i && (c || d) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], vo(e, m, () => ge(), `background:${m.join("|")}`);
  }
  function ur(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Fp() {
    if (!J.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (h.showPanorama) {
      const s = Mr();
      r = !!s && !ur(s);
    }
    if (h.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const d = zc(c);
        if (d && !ur(d)) {
          o = !0;
          break;
        }
      }
    }
    return r && o ? "mixed" : r ? "background" : o ? "stickers" : "";
  }
  function ni() {
    const r = new Set(
      (v.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(v.assets || {}).forEach((o) => {
      r.has(o) || (delete v.assets[o], G.delete(o));
    });
  }
  function Es(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(W(r.y, -1, 1))
    };
  }
  function Ds(r, o = null) {
    const { lon: s, lat: c } = Es(r), d = cr();
    let m = d.x + (s / (2 * Math.PI) + 0.5) * d.w;
    const y = d.y + (0.5 - c / Math.PI) * d.h;
    if (o !== null) {
      for (; m - o > d.w / 2; ) m -= d.w;
      for (; m - o < -d.w / 2; ) m += d.w;
    }
    return { x: m, y, z: 1 };
  }
  function Da(r) {
    const o = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = jn(0, 1, 0);
    Math.abs(An(o, s)) > 0.999 && (s = jn(0, 0, 1));
    const c = di(ho(s, o)), d = di(ho(o, c)), m = Math.tan(W(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Tt), y = Math.tan(W(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Tt), b = Number(r.rot_deg || r.roll_deg || 0) * Tt, w = Math.cos(b), N = Math.sin(b);
    return {
      centerDir: o,
      right: c,
      up: d,
      tanX: m,
      tanY: y,
      cr: w,
      sr: N
    };
  }
  function fr(r, o, s) {
    const c = o * r.cr - s * r.sr, d = o * r.sr + s * r.cr;
    return di(uo(uo(r.centerDir, fo(r.right, c)), fo(r.up, d)));
  }
  function Bc(r) {
    const o = Da(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: d }) => fr(o, c * o.tanX, d * o.tanY));
  }
  function Gc(r, o, s) {
    const c = Da(r), d = (o * 2 - 1) * c.tanX, m = (1 - s * 2) * c.tanY;
    return fr(c, d, m);
  }
  function Kc(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: W((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Lp(r) {
    var w, N, k, M;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.scale) || 1)), d = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.du) || 0), y = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => Pa(Aa(T, s, c, d), m, y));
  }
  function zp(r) {
    const o = Ct((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, d = `${o}:${h.mode}:${ji()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (h.mode === "frame") {
      const m = Ke(), y = m ? It(m) : null;
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function $p(r) {
    const o = String((r == null ? void 0 : r.id) || ""), c = [
      rn(r) ? "frame" : ut(r) ? "sticker" : "item",
      o,
      h.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Xi(r)
    ].join(":");
    if (h.mode === "frame") {
      const d = Ke(), m = d ? It(d) : null;
      return `${c}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function jp() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? h.hqFrames && h.hqFrames > 0 ? [28, 20] : h.interaction ? [12, 9] : [20, 14] : r === "high" ? h.hqFrames && h.hqFrames > 0 ? [48, 36] : h.interaction ? [20, 14] : [36, 26] : h.hqFrames && h.hqFrames > 0 ? [40, 30] : h.interaction ? [16, 12] : [28, 20];
  }
  function Wc() {
    var r;
    return !!Q && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function Yc(r, o) {
    return !Wc() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((j == null ? void 0 : j.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((j == null ? void 0 : j.height) || 0));
  }
  function Ra() {
    return h.showObjects ? Dp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Oa(r) {
    return !h.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Rp(r);
  }
  function qc() {
    var r, o;
    return ((o = (r = h.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Vp() {
    return qc() ? `${zs()}:mask_display` : "";
  }
  function zi(r) {
    if (!h.showMask) return r;
    const o = qc();
    if (!o) return r;
    const s = Vp(), c = r.reduce((y, b) => Math.max(y, Number((b == null ? void 0 : b.zIndex) || 0)), -1), d = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, b) => Math.max(y, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(c, d);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Fa() {
    var c, d;
    const r = ys(!0), o = Cp(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const b = ((d = (c = h.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : d.call(c, y)) || null;
        if (!b) continue;
        s.push({
          id: `paint_group:${y}`,
          source: b,
          revision: `${zs()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, b = Ct((y == null ? void 0 : y.id) || m.id || "");
        if (!b) continue;
        const w = Vc(y, () => ge());
        if (!w) continue;
        const N = Ep(w, m, o), k = (y == null ? void 0 : y.transform) || {};
        s.push({
          id: `raster:${b}`,
          source: N,
          revision: [
            ii(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(k.du || 0).toFixed(6),
            Number(k.dv || 0).toFixed(6),
            Number(k.rot_deg || 0).toFixed(3),
            Number(k.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return zi(s);
  }
  function Hp(r, o = "modal_bg_gl") {
    const s = Ra(), c = Oa(s), d = ur(r), m = d ? Zr(r) : "none", y = h.showObjects ? Fa() : zi([]), b = null, w = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      y.length ? y.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Qi({
        stateRevision: w,
        backgroundSource: d ? r : null,
        backgroundRevision: d ? `${o}:${m}` : "",
        coverageDeg: zt(v.coverage),
        scene: s,
        textures: c,
        paintSource: b,
        paintRevision: "",
        rasterEntries: y,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || c.length > 0 || y.length > 0
    };
  }
  function Rs() {
    if (!Q) return;
    const r = Q.getContext("webgl2");
    if (r)
      r.viewport(0, 0, Q.width, Q.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = Q.getContext("2d");
      o && (o.clearRect(0, 0, Q.width, Q.height), o.fillStyle = "#070707", o.fillRect(0, 0, Q.width, Q.height));
    }
    J.backgroundWasVisible = !1, J.backgroundDirty = !1;
  }
  function Up(r, o, s, c = "modal_bg_gl") {
    var N;
    if (!Yc(r, o)) return !1;
    if (!J.backgroundDirty && J.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: m } = Hp(s, c);
    if (!m || !we.syncState(d))
      return Rs(), !1;
    const b = we.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (N = Q == null ? void 0 : Q.getContext) == null ? void 0 : N.call(Q, "2d");
    return !b || !w ? (Rs(), !1) : (w.clearRect(0, 0, Q.width, Q.height), w.drawImage(b, 0, 0, Q.width, Q.height), J.backgroundWasVisible = !0, J.backgroundDirty = !1, !0);
  }
  function Bp(r = !1) {
    const o = j.width, s = j.height, c = cr();
    if (I.globalAlpha = 1, I.lineWidth = 1, r || (I.fillStyle = "#070707", I.fillRect(0, 0, o, s), I.fillStyle = "#070707", I.fillRect(c.x, c.y, c.w, c.h)), ja(), Hc(
      I,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Mr(),
      "modal_unwrap"
    ), h.showGrid && !h.fullscreen) {
      I.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = c.x + c.w * m / 16;
        I.beginPath(), I.moveTo(y, c.y), I.lineTo(y, c.y + c.h), I.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = c.y + c.h * m / 8;
        I.beginPath(), I.moveTo(c.x, y), I.lineTo(c.x + c.w, y), I.stroke();
      }
      I.strokeStyle = "rgba(250, 250, 250, 0.86)", I.lineWidth = 1.2, I.beginPath(), I.moveTo(c.x, c.y + c.h / 2), I.lineTo(c.x + c.w, c.y + c.h / 2), I.stroke(), I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center";
      const d = c.y + c.h * 0.57;
      I.fillText("Left", c.x + c.w * 0.25, d), I.fillText("Front", c.x + c.w * 0.5, d), I.fillText("Right", c.x + c.w * 0.75, d), I.fillText("Back", c.x + 38, d), I.fillText("Back", c.x + c.w - 38, d);
    }
  }
  function Xc(r, o, s = 1) {
    let c = !1;
    I.strokeStyle = o, I.lineWidth = s, I.beginPath();
    for (const d of r) {
      const m = Fi(d);
      if (!m) {
        c = !1;
        continue;
      }
      c ? I.lineTo(m.x, m.y) : (I.moveTo(m.x, m.y), c = !0);
    }
    I.stroke();
  }
  function Gp(r = !1) {
    const o = j.width, s = j.height;
    if (r || (Wc() ? I.clearRect(0, 0, o, s) : (I.fillStyle = "#070707", I.fillRect(0, 0, o, s))), ja(), Hc(
      I,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: h.viewYaw,
        pitchDeg: h.viewPitch,
        fovDeg: h.viewFov,
        coverageDeg: zt(v.coverage)
      },
      Mr(),
      "modal_pano"
    ), h.showGrid && !h.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Dn(d, y));
        Xc(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Dn(y, d));
        Xc(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center", c.forEach((d) => {
        const m = Fi(d.dir);
        m && I.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function Kp(r, o = null, s = null, c = null) {
    if (h.mode === "frame") {
      const d = o || Ke();
      if (!d) return [];
      const m = s || It(d);
      return Cm(r, d, m);
    }
    return nu(r, c);
  }
  function La(r, o = null, s = null, c = null, d = null) {
    if (!r) return null;
    if (h.mode === "unwrap") {
      const y = nu([r], d);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = ri(r);
    return m ? Kn(m, o, s, c) : null;
  }
  function Wp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = Sn(s, r.layerKind), d = sr(s, r.layerKind, c), m = (d == null ? void 0 : d.centerUv) || _s(s, r.layerKind, c), y = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], w = h.mode === "frame" ? Ke() : null, N = w ? It(w) : null;
    for (const oe of c) {
      const me = (oe == null ? void 0 : oe.geometry) || null, Ce = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], Ee = Kp(Ce, w, N, y).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y));
      if (!Ee.length) continue;
      const ke = dr(String((oe == null ? void 0 : oe.toolKind) || "pen")), X = sn[ke] || sn[Yn];
      b.push({
        points: Ee,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((X == null ? void 0 : X.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || r.layerKind || "paint")
      });
    }
    const k = La(m, null, w, N, y);
    if (!k) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, oe), oe;
    }
    const T = Xh(d).map((oe) => La(oe, k.x, w, N, y)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (T.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, oe), oe;
    }
    const $ = (oe, me) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: oe,
      b: me
    }), te = $(T[0], T[1]), B = $(T[1], T[2]), K = $(T[2], T[3]), le = $(T[3], T[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(k.x || 0), y: Number(k.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...te },
        { edge: "right", ...B },
        { edge: "bottom", ...K },
        { edge: "left", ...le }
      ],
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: { x: te.x, y: te.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return h._strokeGeomCache.set(o, pe), pe;
  }
  function Yp(r, o) {
    const s = h.mode === "frame" ? Ke() : null, c = s ? It(s) : null, d = Kc(r), m = h.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, y = La(d, null, s, c, m), w = Lp(r).map((T) => La(T, (y == null ? void 0 : y.x) ?? null, s, c, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(w) || w.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(o, T), T;
    }
    const N = w.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: N.reduce((T, $) => T + Number($.x || 0), 0) / N.length,
        y: N.reduce((T, $) => T + Number($.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return h._strokeGeomCache.set(o, M), M;
  }
  function Kn(r, o = null, s = null, c = null, d = {}) {
    if (h.mode === "frame") {
      const me = s || Ke(), Ce = c || It(me);
      if (!me || !Ce) return null;
      const Ee = me ? Vi(me, r) : null;
      return Ee ? {
        x: Number(Ce.x || 0) + Number(Ee.x || 0) * Number(Ce.w || 0),
        y: Number(Ce.y || 0) + Number(Ee.y || 0) * Number(Ce.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Ds(r, o);
    const { right: m, up: y, fwd: b } = As(), w = An(r, m), N = An(r, y), k = An(r, b), M = 1e-4;
    if (!Number.isFinite(k) || k <= M && !(d != null && d.clipBehind)) return null;
    const T = Math.max(k, M), $ = j.width, te = j.height, B = h.viewFov * Tt, K = 2 * Math.atan(Math.tan(B / 2) * (te / Math.max($, 1))), le = $ / 2 / Math.tan(B / 2), pe = te / 2 / Math.tan(K / 2), oe = Math.max($, te) * 2;
    return {
      x: W($ / 2 + w / T * le, -oe, $ + oe),
      y: W(te / 2 - N / T * pe, -oe, te + oe),
      z: T,
      rawZ: k,
      clipped: k <= M
    };
  }
  function qp(r, o = []) {
    if (h.mode !== "pano" || ut(r)) return 1;
    const s = o.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return s.length ? xx(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Xp(r) {
    const o = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = h.mode === "frame" ? Ke() : null, c = s ? It(s) : null, d = h.mode === "pano" && (ut(r) || rn(r)), m = d ? { clipBehind: !0 } : null, y = Kn(o, null, s, c, m);
    if (!y) return { visible: !1 };
    const b = Da(r), N = Bc(r).map((ne) => Kn(ne, y.x, s, c, m)).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y));
    if (N.length < 4) return { visible: !1 };
    const k = fr(b, 0, b.tanY), M = fr(b, 0, b.tanY + Math.max(b.tanY * 0.43, 0.053)), T = Kn(k, y.x, s, c, m);
    if (!T) return { visible: !1 };
    const $ = Kn(M, (T == null ? void 0 : T.x) ?? y.x, s, c, m), te = (($ == null ? void 0 : $.x) ?? T.x) - T.x, B = (($ == null ? void 0 : $.y) ?? T.y) - T.y, K = Math.hypot(te, B) || 1, le = {
      x: T.x + te / K * 30,
      y: T.y + B / K * 30
    }, pe = Kn(fr(b, 0, b.tanY), y.x, s, c, m), oe = Kn(fr(b, b.tanX, 0), y.x, s, c, m), me = Kn(fr(b, 0, -b.tanY), y.x, s, c, m), Ce = Kn(fr(b, -b.tanX, 0), y.x, s, c, m);
    if (!pe || !oe || !me || !Ce) return { visible: !1 };
    const Ee = [
      y,
      ...N,
      T,
      $,
      pe,
      oe,
      me,
      Ce
    ];
    if (d && !Ee.some((ne) => Number((ne == null ? void 0 : ne.rawZ) ?? (ne == null ? void 0 : ne.z)) > 1e-4)) return { visible: !1 };
    const ke = qp(r, Ee), X = [
      {
        edge: "top",
        x: pe.x,
        y: pe.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: oe.x,
        y: oe.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: me.x,
        y: me.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: Ce.x,
        y: Ce.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: y.x, y: y.y },
      corners: N.map((ne) => ({ x: ne.x, y: ne.y })),
      edgeMidpoints: X,
      rotateStemBase: { x: T.x, y: T.y },
      rotateHandle: le,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ke,
      visible: !0
    };
  }
  function Ot(r) {
    if (At(r)) {
      const d = String(r.actionGroupId || r.id || "").trim(), m = np(d, r.layerKind), y = h._strokeGeomCache.get(m);
      return y || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Wp(r, m));
    }
    if (Bt(r)) {
      const d = zp(r), m = h._strokeGeomCache.get(d);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Yp(r, d));
    }
    const o = $p(r), s = h._strokeGeomCache.get(o);
    if (s) return s;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const c = Xp(r);
    return h._strokeGeomCache.set(o, c), c;
  }
  function za(r, o, s, c = null) {
    const d = [];
    for (let m = 0; m <= s; m += 1) {
      const y = m / s;
      let b = 0, w = 0;
      o === 0 ? (b = y, w = 0) : o === 1 ? (b = 1, w = y) : o === 2 ? (b = 1 - y, w = 1) : (b = 0, w = 1 - y);
      const N = Gc(r, b, w), k = h.mode === "unwrap" ? Ds(N, c) : Fi(N);
      k && d.push(k);
    }
    return d;
  }
  function Jp(r, o) {
    const s = Dn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = h.mode === "unwrap" ? Ds(s) : null, d = c ? c.x : null, m = h.mode === "pano" ? 28 : 20, y = [
      za(r, 0, m, d),
      za(r, 1, m, d),
      za(r, 2, m, d),
      za(r, 3, m, d)
    ];
    I.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", I.lineWidth = o ? 2 : 1, I.beginPath();
    let b = !1;
    for (const w of y)
      for (const N of w)
        b ? I.lineTo(N.x, N.y) : (I.moveTo(N.x, N.y), b = !0);
    I.closePath(), I.stroke();
  }
  function Zp() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function Os() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function $a(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Qp(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const d = W(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (d <= 0.01) return;
    const m = I.globalAlpha;
    I.globalAlpha = m * d;
    const y = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = o ? 3.2 : 2.6;
    $a(I, c), I.fillStyle = b, I.fill(), I.strokeStyle = y, I.lineWidth = w, I.stroke(), I.save(), I.strokeStyle = y, I.lineWidth = o ? 3.2 : 2.6, I.lineCap = "round";
    const N = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], k = { top: "bottom", right: "left", bottom: "top", left: "right" }, M = o ? 12 : 9;
    N.forEach((T) => {
      const te = N.find((pe) => (pe == null ? void 0 : pe.edge) === k[T == null ? void 0 : T.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, B = te.x - T.x, K = te.y - T.y, le = Math.hypot(B, K) || 1;
      I.beginPath(), I.moveTo(T.x, T.y), I.lineTo(T.x + B / le * M, T.y + K / le * M), I.stroke();
    }), I.restore(), I.globalAlpha = m;
  }
  function em(r, o, s, c) {
    const d = W(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (d <= 0.01) return;
    if (rn(r)) {
      Qp(o, s, c);
      return;
    }
    if (ut(r)) {
      const y = I.globalAlpha;
      I.globalAlpha = y * cp(r) * d, h.mode === "frame" ? (I.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", I.lineWidth = s ? 2 : 1, $a(I, o.corners), I.stroke()) : Jp(r, s), I.globalAlpha = y;
      return;
    }
    const m = I.globalAlpha;
    I.globalAlpha = m * d, I.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $a(I, o.corners), I.fill(), I.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", I.lineWidth = s ? 2.8 : 1.9, $a(I, o.corners), I.stroke(), I.globalAlpha = m;
  }
  function tm(r, o, s) {
    I.fillStyle = s, o.corners.forEach((c) => {
      I.beginPath(), I.arc(c.x, c.y, 6.5, 0, Math.PI * 2), I.fill();
    }), rn(r) && (I.strokeStyle = s, I.lineCap = "round", I.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var k, M, T, $;
      const d = (((k = c.b) == null ? void 0 : k.x) ?? c.x) - (((M = c.a) == null ? void 0 : M.x) ?? c.x), m = (((T = c.b) == null ? void 0 : T.y) ?? c.y) - ((($ = c.a) == null ? void 0 : $.y) ?? c.y), y = Math.hypot(d, m) || 1, b = d / y, w = m / y, N = 10;
      I.beginPath(), I.moveTo(c.x - b * N, c.y - w * N), I.lineTo(c.x + b * N, c.y + w * N), I.stroke();
    }), I.lineCap = "butt"), At(r) || (I.strokeStyle = "rgba(250, 250, 250, 0.9)", I.lineWidth = 1.8, I.beginPath(), I.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), I.lineTo(o.rotateHandle.x, o.rotateHandle.y), I.stroke(), I.fillStyle = s, I.beginPath(), I.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), I.fill());
  }
  function nm() {
    var b;
    const [r, o] = jp(), s = Nn(), c = s.length > 1, d = t === "cutout" ? Zp() : Bn(), m = d.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${rn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== d || h._sortedItemsCache.orderKey !== m) && (h._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const y = h._sortedItemsCache.sorted;
    for (const w of y) {
      const N = !c && ip(w);
      if (h.mode === "frame" && !N || !h.showObjects && !rn(w)) continue;
      const k = ut(w), M = rn(w), T = lr(w);
      if (!k && !M)
        continue;
      const $ = Ot(w);
      if (t !== "stickers" && !$.visible)
        continue;
      const te = W(Number(($ == null ? void 0 : $.visibilityAlpha) ?? 1), 0, 1);
      if (!(te <= 0.01) && (em(w, $, N, T), N && $.visible)) {
        const B = T ? "#ff4d4f" : k && Rt(w) ? "#f59e0b" : "#0070f3", K = I.globalAlpha;
        I.globalAlpha = K * te, tm(w, $, B), I.globalAlpha = K;
      }
    }
    if (c) {
      const w = xs(s);
      if (w != null && w.visible) {
        const N = ws(s) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(w.corners[0].x, w.corners[0].y);
        for (let k = 1; k < w.corners.length; k += 1) I.lineTo(w.corners[k].x, w.corners[k].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = N, w.corners.forEach((k) => {
          I.beginPath(), I.arc(k.x, k.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      }
    } else
      s.forEach((w) => {
        if (!At(w) && !Bt(w)) return;
        const N = Ot(w);
        if (!(N != null && N.visible)) return;
        const k = lr(w) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(N.corners[0].x, N.corners[0].y);
        for (let M = 1; M < N.corners.length; M += 1) I.lineTo(N.corners[M].x, N.corners[M].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = k, N.corners.forEach((M) => {
          I.beginPath(), I.arc(M.x, M.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      });
    if (((b = h.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const w = gu(h.interaction.start, h.interaction.current);
      I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.9)", I.fillStyle = "rgba(255, 255, 255, 0.08)", I.lineWidth = 1, I.setLineDash([5, 4]), I.beginPath(), I.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), I.fill(), I.stroke(), I.restore();
    }
    h.hqFrames && r >= 40 && o >= 30 && (h.hqFrames -= 1, h.hqFrames > 0 && ge());
  }
  function rm(r) {
    const o = vr(r), s = W(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Jc(r, o = !1) {
    const s = W(ta(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function im(r) {
    if (!Re || !r) return !1;
    const o = Re.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || Re.clientWidth || 0)), c = Math.round(Number(o.clientHeight || Re.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function am() {
    return `obj:${Number(h.objectVisualRevision || 0)}`;
  }
  function om(r, o = {}) {
    if (!r) return "";
    const s = Mr(), c = s && ur(s) ? Zr(s) : "no_bg", d = rm(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      zs(),
      am(),
      ka(),
      c,
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "mask:1" : "mask:0",
      `${d.width}x${d.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function sm() {
    var T, $, te, B;
    if (h.outputPreviewRect = null, P.outputPreviewToggle.visible = h.mode !== "frame" && !!Ke(), t !== "cutout" || !P.cameraPreview) return;
    if (h.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const r = Ke();
    if (!r) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (T = ie == null ? void 0 : ie.clearScene) == null || T.call(ie), ($ = C == null ? void 0 : C.requestRender) == null || $.call(C);
      return;
    }
    P.cameraPreview.visible = !0;
    const o = Mr();
    if (!r || !ie || !C) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (te = ie == null ? void 0 : ie.clearScene) == null || te.call(ie), (B = C == null ? void 0 : C.requestRender) == null || B.call(C);
      return;
    }
    const s = Jc(r, !!h.outputPreviewExpanded);
    P.cameraPreview.width = s.width, P.cameraPreview.height = s.height, P.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const c = Ra(), d = Oa(c), m = ur(o), y = m ? Zr(o) : "none", b = h.showObjects ? Fa() : zi([]), w = Qi({
      stateRevision: [
        "cutout_preview_camera",
        y,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((K) => String((K == null ? void 0 : K.id) || "")).join(",") : "none",
        Array.isArray(d) ? d.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        b.length ? b.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none",
        h.showPanorama ? "panorama:1" : "panorama:0",
        h.showObjects ? "objects:1" : "objects:0",
        h.showMask ? "showMask:1" : "showMask:0",
        zt(v.coverage)
      ].join("|"),
      backgroundSource: m && h.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${y}` : "",
      coverageDeg: zt(v.coverage),
      scene: c,
      textures: d,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || d.length > 0 || b.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, ie.clearScene(), C.requestRender();
      return;
    }
    if (h.showPanorama && !m && d.length === 0 && b.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, ie.clearScene(), C.requestRender();
      return;
    }
    ie.syncScene(w), C.setView(vr(r));
    const k = im(s), M = k ? C.present() : !1;
    k || C.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = k && M ? "" : "Loading preview", P.cameraPreview.settled = k && M && J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame;
  }
  function lm(r, o, s, c = {}) {
    if (!ie || !s) return !1;
    const d = Mr(), m = Ra(), y = Oa(m), b = ur(d), w = h.showObjects ? Fa() : zi([]);
    return b || y.length > 0 || w.length > 0 ? (ie.syncScene(Qi({
      stateRevision: om(s, c),
      backgroundSource: b && h.showPanorama ? d : null,
      backgroundRevision: b ? `cutout_frame:${Zr(d)}` : "",
      coverageDeg: zt(v.coverage),
      scene: m,
      textures: y,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), ie.renderShotToContext(r, o, s, c)) : !1;
  }
  function Fs(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return Gc(r, s, c);
  }
  function ri(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return jn(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function cm(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function um(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Gt(r, "widthScale", 1),
      pressureLike: Gt(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function fm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Ls(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (c) {
      let B = null;
      r.forEach((K) => {
        const le = Number((K == null ? void 0 : K.u) || 0), pe = Number((K == null ? void 0 : K.v) || 0), oe = (le % 1 + 1) % 1, me = B == null ? oe : B + bn(oe, (B % 1 + 1) % 1);
        d.set(K, { x: me, y: pe }), B = me;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : d.get(B) || cm(B), y = (B, K, le, pe = {}) => {
      const oe = c ? (Number(K) % 1 + 1) % 1 : Number(K), me = um(B, oe, le, pe);
      return d.set(me, { x: Number(K), y: Number(le) }), me;
    }, b = (B, K, le) => {
      const pe = m(B), oe = m(K);
      return y(B, Xn(pe.x, oe.x, le), Xn(pe.y, oe.y, le), {
        t: Xn(Number((B == null ? void 0 : B.t) || 0), Number((K == null ? void 0 : K.t) || 0), le),
        widthScale: Xn(Gt(B, "widthScale", 1), Gt(K, "widthScale", 1), le),
        pressureLike: Xn(Gt(B, "pressureLike", 1), Gt(K, "pressureLike", 1), le)
      });
    };
    if (r.length === 1) {
      const B = m(r[0]);
      return [y(r[0], B.x, B.y)];
    }
    const w = fm(o, s), N = (B, K) => {
      const le = [0];
      for (let ne = 1; ne < B.length; ne += 1) {
        const ve = m(B[ne - 1]), Se = m(B[ne]);
        le.push(le[ne - 1] + Math.hypot(Se.x - ve.x, Se.y - ve.y));
      }
      const pe = le[le.length - 1] || 0;
      if (pe <= 1e-8) {
        const ne = B[0], ve = m(ne);
        return [y(ne, ve.x, ve.y)];
      }
      const oe = [];
      let me = 0;
      for (let ne = 0; ne <= pe + 1e-9; ne += K) {
        for (; me < le.length - 2 && le[me + 1] < ne; ) me += 1;
        const ve = le[me], Se = le[me + 1], Ie = Math.max(1e-8, Se - ve);
        oe.push(b(B[me], B[me + 1], W((ne - ve) / Ie, 0, 1)));
      }
      const Ce = B[B.length - 1], Ee = m(Ce), ke = oe[oe.length - 1], X = ke ? m(ke) : null;
      return (!X || Math.hypot(X.x - Ee.x, X.y - Ee.y) > K * 0.35) && oe.push(y(Ce, Ee.x, Ee.y)), oe;
    }, k = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const K = m(B[0]), le = [y(B[0], K.x, K.y)];
      for (let me = 0; me < B.length - 1; me += 1) {
        const Ce = B[me], Ee = B[me + 1], ke = m(Ce), X = m(Ee), ne = y(
          Ce,
          ke.x * 0.75 + X.x * 0.25,
          ke.y * 0.75 + X.y * 0.25,
          {
            t: Number(Ce.t || 0) * 0.75 + Number(Ee.t || 0) * 0.25,
            widthScale: Gt(Ce, "widthScale", 1) * 0.75 + Gt(Ee, "widthScale", 1) * 0.25,
            pressureLike: Gt(Ce, "pressureLike", 1) * 0.75 + Gt(Ee, "pressureLike", 1) * 0.25
          }
        ), ve = y(
          Ce,
          ke.x * 0.25 + X.x * 0.75,
          ke.y * 0.25 + X.y * 0.75,
          {
            t: Number(Ce.t || 0) * 0.25 + Number(Ee.t || 0) * 0.75,
            widthScale: Gt(Ce, "widthScale", 1) * 0.25 + Gt(Ee, "widthScale", 1) * 0.75,
            pressureLike: Gt(Ce, "pressureLike", 1) * 0.25 + Gt(Ee, "pressureLike", 1) * 0.75
          }
        );
        le.push(ne, ve);
      }
      const pe = B[B.length - 1], oe = m(pe);
      return le.push(y(pe, oe.x, oe.y)), le;
    }, M = N(r, w);
    if (M.length < 3) return M;
    const T = s ? 2 : 1;
    let $ = M.slice();
    for (let B = 0; B < T; B += 1) $ = k($);
    return N($, Math.max(w * 0.75, 55e-5));
  }
  function Gt(r, o, s = 1) {
    const c = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(c) ? Math.max(0, c) : s;
  }
  function dm(r) {
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
  function $i(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const d = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, c.width, c.height), d.imageSmoothingEnabled = !0), { canvas: c, ctx: d };
  }
  function ji() {
    const r = Va();
    return `${String(h.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function ii() {
    const r = Va();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function zs() {
    const r = ka(), o = ii();
    return r ? `${o}:${r}` : o;
  }
  function hm() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function pm() {
    h.paintCompositeRevision += 1;
  }
  function mm() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Zc() {
    var r, o;
    h.paintEngineRevisionKey = null, (o = (r = h.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), h.paintEngineRevisionKey = ji();
  }
  function Qc() {
    v.painting_layer !== null && (v.painting_layer = null), Ta = "";
  }
  function Ft() {
    h.objectVisualRevision = Number(h.objectVisualRevision || 0) + 1, mm(), J.backgroundDirty = !0, J.dirty = !0;
  }
  function Mn({ rebuildPaintEngine: r = !1 } = {}) {
    Qc(), hm(), Ft(), r && Zc();
  }
  function ai() {
    Qc(), pm(), Ft();
  }
  function ja() {
    var c;
    const r = Va(), o = `${r.width}x${r.height}`;
    h.paintEngineDescriptorKey !== o && (h.paintEngine = Rl(r), h.paintEngineDescriptorKey = o, h.paintEngineRevisionKey = "");
    const s = ji();
    h.paintEngineRevisionKey !== s && (h.paintEngineRevisionKey = s, (c = h.paintEngine) == null || c.rebuildCommitted(v));
  }
  function Va() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function fn() {
    return Va();
  }
  function gm(r, o, s, c, d = null) {
    const m = dm(r), y = Gt(o, "widthScale", 1) * Gt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * y) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Tt) * s * y) : Math.max(0.5, m.value / (2 * Math.PI) * s * y) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * y);
  }
  function bm(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, y = m ? 0.78 : 1;
    if (r.globalAlpha = d === "marker" ? 0.7 * y : 1, c === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${w})`;
  }
  function ym(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function vm(r, o, s, c, d = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    r.save(), bm(r, s, d);
    const y = (b) => ym(r, b, m);
    if (o.length === 1) {
      y(o[0]), r.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const w = o[b], N = o[b + 1];
      if (!w || !N) continue;
      const k = Number(w.x || 0), M = Number(w.y || 0), T = Number(N.x || 0), $ = Number(N.y || 0), te = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(M) || !Number.isFinite(T) || !Number.isFinite($) || !Number.isFinite(te) || !Number.isFinite(B)) continue;
      const K = T - k, le = $ - M, pe = Math.hypot(K, le);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        y(w);
        continue;
      }
      if (pe > Math.max(c.w, c.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(te, B)), me = Math.max(0.35, Math.min(oe * 0.4, 2.25)), Ce = Math.max(1, Math.ceil(pe / me));
      for (let Ee = 0; Ee <= Ce; Ee += 1) {
        const ke = Ee / Ce;
        y({
          x: Xn(k, T, ke),
          y: Xn(M, $, ke),
          radiusPx: Xn(te, B, ke)
        });
      }
    }
    y(o[o.length - 1]), r.restore();
  }
  function _m(r, o, s, c) {
    vm(r, o, s, c, { preview: !1 });
  }
  function xm(r, o, s, c, d) {
    var b, w, N, k;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", y = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((b = o[0]) == null ? void 0 : b[m]) || 0) * c.w, Number(((w = o[0]) == null ? void 0 : w[y]) || 0) * c.h);
    for (let M = 1; M < o.length; M += 1)
      r.lineTo(Number(((N = o[M]) == null ? void 0 : N[m]) || 0) * c.w, Number(((k = o[M]) == null ? void 0 : k[y]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function eu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function wm(r, o) {
    const s = eu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: gm(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function tu(r, o, s = null) {
    var b, w, N, k;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((b = r.canvas) == null ? void 0 : b.width) || 0), h: Number(((w = r.canvas) == null ? void 0 : w.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return xm(r.ctx, eu(d), d, c), !0;
    const y = wm(d, c);
    return y.length ? (_m(r.ctx, y, d, c), !0) : !1;
  }
  function Sm(r, o, s, c = 8) {
    const d = new Uint8Array(o * s), m = [], y = new Int32Array(o * s), b = new Int32Array(o * s);
    for (let w = 0; w < s; w += 1)
      for (let N = 0; N < o; N += 1) {
        const k = w * o + N;
        if (d[k] || r[k] <= c) continue;
        let M = 0, T = 0;
        y[T] = N, b[T] = w, T += 1, d[k] = 1;
        const $ = [];
        let te = N, B = w, K = N, le = w;
        for (; M < T; ) {
          const pe = y[M], oe = b[M];
          M += 1, $.push({ x: pe, y: oe }), pe < te && (te = pe), oe < B && (B = oe), pe > K && (K = pe), oe > le && (le = oe);
          const me = [
            [(pe - 1 + o) % o, oe],
            [(pe + 1) % o, oe],
            [pe, oe - 1],
            [pe, oe + 1]
          ];
          for (const [Ce, Ee] of me) {
            if (Ee < 0 || Ee >= s) continue;
            const ke = Ee * o + Ce;
            d[ke] || r[ke] <= c || (d[ke] = 1, y[T] = Ce, b[T] = Ee, T += 1);
          }
        }
        m.push({ pixels: $, minX: te, minY: B, maxX: K, maxY: le });
      }
    return m;
  }
  function Nm(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, N) => w - N);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, d = 0;
    for (let w = 0; w < s.length; w += 1) {
      const N = s[w], M = (w === s.length - 1 ? s[0] + o : s[w + 1]) - N - 1;
      M > c && (c = M, d = w);
    }
    const m = (s[(d + 1) % s.length] + o) % o;
    let y = 1 / 0, b = -1 / 0;
    for (const w of s) {
      const N = (w - m + o) % o;
      y = Math.min(y, N), b = Math.max(b, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - y + 1)
    };
  }
  function Mm(r, o, s = {}) {
    var N;
    const c = Number((r == null ? void 0 : r.width) || 0), d = Number((r == null ? void 0 : r.height) || 0), m = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!m || c < 1 || d < 1) return [];
    const y = m.getImageData(0, 0, c, d), b = new Uint8Array(c * d);
    for (let k = 0; k < b.length; k += 1) b[k] = y.data[k * 4 + 3];
    return Sm(b, c, d, 8).map((k, M) => {
      const T = Nm(k, c);
      if (!T) return null;
      const $ = Number(T.widthPx || 0), te = k.maxY - k.minY + 1, B = Number(T.startX || 0), K = document.createElement("canvas");
      K.width = $, K.height = te;
      const le = K.getContext("2d");
      if (!le) return null;
      const pe = le.createImageData($, te);
      return k.pixels.forEach(({ x: oe, y: me }) => {
        const Ce = (me * c + oe) * 4, Ee = (Number(oe || 0) - B + c) % c, ke = ((me - k.minY) * $ + Ee) * 4;
        pe.data[ke + 0] = y.data[Ce + 0], pe.data[ke + 1] = y.data[Ce + 1], pe.data[ke + 2] = y.data[Ce + 2], pe.data[ke + 3] = y.data[Ce + 3];
      }), le.putImageData(pe, 0, 0), {
        id: hi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + M * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: k.minY / d,
          u1: $ / c,
          v1: (k.maxY + 1) / d
        },
        rasterDataUrl: K.toDataURL("image/png"),
        transform: {
          du: B / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Vi(r, o) {
    if (!r || !o) return null;
    const s = Da(r), c = An(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const d = An(o, s.right) / c, m = An(o, s.up) / c, y = d * s.cr + m * s.sr, b = -d * s.sr + m * s.cr;
    return {
      x: (y / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function km(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (h.mode === "unwrap") {
      const s = cr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Fi(ri(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function nu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (h.mode === "unwrap") {
      const c = cr();
      return r.map((d) => {
        const m = (Number(d.u || 0) % 1 + 1) % 1, y = o == null ? m : Number(o || 0) + bn(m, o);
        return {
          x: c.x + y * c.w,
          y: c.y + Number(d.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => Fi(ri(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Pm(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], d = r[(s + 1) % r.length];
      if (!c || !d || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(d.x) || !Number.isFinite(d.y) || Math.hypot(Number(d.x) - Number(c.x), Number(d.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function Am(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const d of r) {
      const m = ri(d), y = Vi(o, m);
      if (!y) return [];
      c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return Pm(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function Cm(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const d of r) {
      const m = ri(d), y = Vi(o, m);
      y && c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function Im() {
    var d;
    const r = Ke(), o = It(r);
    if (!r || !o) return !1;
    I.save(), I.fillStyle = "#050505", I.fillRect(0, 0, j.width, j.height), I.shadowColor = "rgba(0, 0, 0, 0.45)", I.shadowBlur = 24, I.shadowOffsetX = 0, I.shadowOffsetY = 10, I.fillStyle = "rgba(14, 14, 14, 1)", I.fillRect(o.x, o.y, o.w, o.h), I.restore(), I.save(), I.beginPath(), I.rect(o.x, o.y, o.w, o.h), I.clip();
    const s = h.interaction ? "draft" : String(((d = v.ui_settings) == null ? void 0 : d.preview_quality) || "balanced");
    return lm(I, o, r, { quality: s }) === !0 || (I.fillStyle = "rgba(255, 255, 255, 0.03)", I.fillRect(o.x, o.y, o.w, o.h)), I.restore(), I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.12)", I.lineWidth = 1, I.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), I.restore(), !0;
  }
  function Tm() {
    var w, N;
    if (((w = h.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const r = h.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let s;
    if (h.mode === "frame") {
      const k = Ke(), M = It(k);
      s = Am(o, k, M);
    } else
      s = km(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", d = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), y = Math.round(Number(d.g || 0) * 255), b = Math.round(Number(d.b || 0) * 255);
    I.save(), I.beginPath(), I.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let k = 1; k < s.length; k++) I.lineTo(Number(s[k].x || 0), Number(s[k].y || 0));
    I.closePath(), c ? (I.lineWidth = 2, I.setLineDash([6, 6]), I.lineDashOffset = 0, I.strokeStyle = "rgba(0,0,0,0.96)", I.stroke(), I.lineDashOffset = -6, I.strokeStyle = "rgba(255,255,255,0.96)", I.stroke(), I.setLineDash([]), I.lineDashOffset = 0) : (I.lineWidth = 1.5, I.setLineDash([6, 4]), I.strokeStyle = `rgba(${m},${y},${b},1)`, I.stroke(), I.setLineDash([])), I.restore();
  }
  function Em() {
    h.mode === "frame" ? Im() : h.mode === "unwrap" ? Bp(!1) : Gp(!1), t === "cutout" && sm(), nm(), Tm(), P.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ue(), J.hasPresentedFrame || (J.hasPresentedFrame = !0, Q.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame && h.mode !== "frame");
    const r = Fp();
    r ? (de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", r)) : (de == null || de.setAttribute("data-stage-ready", ""), de == null || de.removeAttribute("data-stage-loading-kind"));
  }
  function Dm(r = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Rm() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = tp();
  }
  function ge(r = {}) {
    var b, w, N, k, M, T, $, te, B, K;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), d = String(((b = h.interaction) == null ? void 0 : b.kind) || "");
    (!o || d === "view" || d === "pan_frame" || Dm() || !!((w = h.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (J.backgroundDirty = !0), o && Nc() && (h.livePaintInteractionRevision += 1, J.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (Ps(), Ia()), Rm(), s && ((k = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || k.call(N), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), s && !o && (($ = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || $.call(T, !0, !0), (K = (B = (te = hn) == null ? void 0 : te.canvas) == null ? void 0 : B.setDirty) == null || K.call(B, !0, !0)), J.dirty = !0;
  }
  function ru() {
    const r = j.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return j.width !== o || j.height !== s || Q.width !== o || Q.height !== s ? (j.width = o, j.height = s, Q.width = o, Q.height = s, J.backgroundDirty = !0, J.dirty = !0, t === "cutout" && (J.pendingStableLayoutFrames = Math.max(Number(J.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function $s(r = performance.now()) {
    var o;
    if (J.running) {
      if (J.lastTickTs = r, h.outputPreviewAnim !== h.outputPreviewAnimTo) {
        const s = Math.max(1, Number(h.outputPreviewAnimDurationMs)), c = W((r - Number(h.outputPreviewAnimStartTs || 0)) / s, 0, 1), m = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? _x(c) : Nx(c);
        h.outputPreviewAnim = Xn(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, m), J.dirty = !0, c >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
      }
      if ((o = h.viewTween) != null && o.active) {
        const s = h.viewTween, c = W((r - s.startTs) / s.durationMs, 0, 1), d = vx(c);
        h.viewYaw = $t(s.startYaw + s.deltaYaw * d), h.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * d, h.viewFov = s.startFov + (s.targetFov - s.startFov) * d, J.backgroundDirty = !0, J.dirty = !0, c >= 1 && (h.viewTween = null);
      }
      if (h.viewInertia.vx = Number(Lt.state.inertia.vx || 0), h.viewInertia.vy = Number(Lt.state.inertia.vy || 0), h.viewInertia.active = !!Lt.state.inertia.active, Lt.stepInertia(r) && (h.viewInertia.vx = Number(Lt.state.inertia.vx || 0), h.viewInertia.vy = Number(Lt.state.inertia.vy || 0), h.viewInertia.active = !!Lt.state.inertia.active, J.backgroundDirty = !0, J.dirty = !0), (J.dirty || r - J.lastSizeCheckTs >= 220) && (ru(), J.lastSizeCheckTs = r), J.pendingStableLayoutFrames > 0 && (J.pendingStableLayoutFrames -= 1, J.dirty = !0), J.dirty) {
        if (J.pendingStableLayoutFrames > 0) {
          J.rafId = requestAnimationFrame($s);
          return;
        }
        J.dirty = !1, Em();
      }
      J.rafId = requestAnimationFrame($s);
    }
  }
  function Om() {
    J.running = !1, J.rafId && cancelAnimationFrame(J.rafId), J.rafId = 0;
  }
  function lt() {
    i || (h.historyController.commitActionGroup(JSON.stringify(Xf(v))), Ks());
  }
  function js(r) {
    if (i) return;
    const o = r < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Ks(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((c) => delete v[c]), Object.assign(v, s), h.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], Mn(), on(), He(), yn(), ge({ cause: "cutout_frame" });
  }
  function iu() {
    var s, c;
    const r = Array.isArray((s = h.historyController) == null ? void 0 : s.entries) ? h.historyController.entries : [], o = Number((c = h.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function on() {
    Wh();
    const r = r1({
      editor: h,
      swatches: Io,
      paintColorPopOpen: je ? !je.hidden : !1,
      colorToCss: Rn,
      colorsApproximatelyEqual: To,
      rgb01ToHsv: xl,
      hsv01ToRgb: _l,
      getBrushPresetIdForTool: dr,
      isActiveLassoTool: fp
    });
    if (Object.assign(P.paintDock, r), bp(), !r.visible) {
      je && (je.hidden = !0);
      return;
    }
    Ht && (clearTimeout(Ht), Ht = 0), Be && (!r.colorEnabled && je && !je.hidden && (Ht = window.setTimeout(() => {
      je.hidden = !0, P.paintDock.colorPopOpen = !1, Ht = 0;
    }, 170)), je && (je.style.setProperty("--picker-hue-color", r.pickerHueColor), je.style.setProperty("--picker-sat", r.pickerSat), je.style.setProperty("--picker-val", r.pickerVal), je.style.setProperty("--picker-hue", r.pickerHue)), Dt && (Dt.style.left = r.pickerSvLeft, Dt.style.top = r.pickerSvTop), Vt && (Vt.style.left = r.pickerHueLeft));
  }
  function Vs() {
    const r = at();
    r && (h.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Xi(r)
    }, He());
  }
  function He() {
    var me, Ce, Ee, ke;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = n1(v.ui_settings);
    if (l) {
      P.sidePanel = i1({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: zt
      });
      return;
    }
    const o = at(), s = Nn(), c = Ca();
    s.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && c !== "stroke" && (h.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (c === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (c === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: Xi(o)
    });
    const d = h.panelLastValues || (t === "stickers" || c === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = c === "stroke" ? null : o, y = m || d, b = !!m;
    h.panelWasEnabled = b, Ps();
    let w = null;
    if (t === "stickers" || t === "cutout") {
      const X = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Bn().forEach((Se, Ie) => {
        var qe, Xe;
        if (!Se) return;
        const Le = Rt(Se) ? String(Se.id || Tr) : String(((Xe = (qe = v.assets) == null ? void 0 : qe[Se.asset_id]) == null ? void 0 : Xe.name) || Se.asset_id || Se.id), ze = `${Ie + 1}. ${Le}${Rt(Se) && Jr(Se) ? " (hidden)" : ""}`, Ye = Cc({ item: Se, label: ze, kind: "image" });
        X.push({ id: Se.id, label: Ye.label, icon: Ye.icon, item: Se, kind: "image" });
      }) : Ac().forEach((Se) => {
        if (!(Se != null && Se.item)) return;
        const Ie = Cc(Se);
        X.push({ id: Se.item.id, label: Ie.label, icon: Ie.icon, item: Se.item, kind: Se.kind });
      });
      const ne = (m == null ? void 0 : m.id) || "", ve = X.find((Se) => Se.id === ne) || X[0];
      w = {
        label: "Selection",
        open: !1,
        disabled: X.length <= 1,
        currentLabel: ve.label,
        currentIcon: ve.icon || null,
        items: X.map((Se) => ({
          id: Se.id,
          label: Se.label,
          icon: Se.icon || null,
          active: Se.id === ne
        }))
      };
    }
    const N = [], k = (X, ne, ve, Se, Ie) => {
      const Le = W(Number(y[X] || 0), ve, Se);
      N.push({
        key: X,
        label: ne,
        min: ve,
        max: Se,
        step: Ie,
        value: Le,
        displayValue: Ax(Le),
        fillPct: W((Le - ve) / Math.max(1e-6, Se - ve) * 100, 0, 100),
        enabled: b && !i
      });
    }, M = [];
    s.length > 1 ? (M.push(`Selected objects: ${s.length}`), M.push("Multi-selection supports z-order and delete.")) : (k("yaw_deg", "Yaw", -180, 180, 0.1), k("pitch_deg", "Pitch", -90, 90, 0.1), k("hFOV_deg", "H FOV", 1, 179, 0.1), k("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || c === "image" ? k("rot_deg", "Rotation", -180, 180, 0.1) : k("roll_deg", "Roll", -180, 180, 0.1));
    const T = Array.isArray((Ce = (me = v == null ? void 0 : v.painting) == null ? void 0 : me.paint) == null ? void 0 : Ce.strokes) ? v.painting.paint.strokes.length : 0, $ = Array.isArray((ke = (Ee = v == null ? void 0 : v.painting) == null ? void 0 : Ee.mask) == null ? void 0 : ke.strokes) ? v.painting.mask.strokes.length : 0, te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((X) => String((X == null ? void 0 : X.name) || "")) : [], B = Gh(
      e,
      te.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), K = !!String((B == null ? void 0 : B.src) || "").trim() || Ss("pano_input_images").length > 0, le = Array.isArray(Bn()) && Bn().length > 0 || T > 0, pe = $ > 0, oe = [
      { key: "mask", label: "Mask", icon: Te.circle_dashed_tool, visible: !!h.showMask, enabled: pe },
      { key: "objects", label: "Paint / Images", icon: Te.image, visible: !!h.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: Te.globe, visible: !!h.showPanorama, enabled: K }
    ].map((X) => ({
      ...X,
      ariaLabel: `Toggle ${X.label.toLowerCase()}`,
      tip: X.visible ? "Hide" : "Show"
    }));
    P.sidePanel = a1({
      coverage: v.coverage,
      readOnly: i,
      selectionPicker: w,
      enabled: b,
      selectedKind: c,
      selectedItems: s,
      params: N,
      notes: M,
      visibilityRows: oe,
      uiSettings: r,
      normalizeCoverageValue: zt
    });
  }
  function Ha(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function au(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Ha(r)) return;
    const o = yo("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((y, b) => {
        const w = new Image();
        w.onload = () => y(w), w.onerror = () => b(new Error("image load failed")), w.src = s;
      });
      G.set(o, c);
      const d = yo("st");
      v.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Nr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: Ic()
      }), Sr(v.stickers[v.stickers.length - 1]), Hs(), lt(), He(), Ue(), ge();
      const m = (async () => {
        const y = await Is(r, String(r.name || o));
        (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (v.assets[o] = y, ni(), xt(), He(), Ue(), ge());
      })();
      co.set(o, m);
      try {
        await m;
      } finally {
        co.delete(o);
      }
    } catch {
      delete v.assets[o], G.delete(o);
      const c = Array.isArray(v.stickers) ? v.stickers : [], d = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      d.length && (v.stickers = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), d.some((m) => {
        var y;
        return String((m == null ? void 0 : m.id) || "") === String(((y = h.selection) == null ? void 0 : y.id) || "");
      }) && Sr(null), He(), Ue(), ge());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function ou(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Fm() {
    i || t !== "stickers" && t !== "cutout" || ou((r) => {
      au(r);
    });
  }
  async function Lm(r) {
    var N;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = at();
    if (!o || !ut(o) || Rt(o) || !Ha(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), d = c ? Kt(((N = v.assets) == null ? void 0 : N[c]) || null) : null, m = Number(o.vFOV_deg || 0), y = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = yo("asset"), w = URL.createObjectURL(r);
    try {
      const k = await new Promise((T, $) => {
        const te = new Image();
        te.onload = () => T(te), te.onerror = () => $(new Error("image load failed")), te.src = w;
      });
      G.set(b, k), o.asset_id = b, o.vFOV_deg = Nr(
        Number(o.hFOV_deg || 30),
        Number(k.naturalWidth || k.width || 1),
        Number(k.naturalHeight || k.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ft(), lt(), He(), Ue(), ge();
      const M = (async () => {
        const T = await Is(r, String(r.name || b));
        (Array.isArray(v.stickers) ? v.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === b) && (v.assets[b] = T, ni(), xt(), He(), Ue(), ge());
      })();
      co.set(b, M);
      try {
        await M;
      } finally {
        co.delete(b);
      }
    } catch {
      delete v.assets[b], G.delete(b);
      const k = (Array.isArray(v.stickers) ? v.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === s) || null;
      k && String(k.asset_id || "") === b && (c && d && (v.assets[c] = d), k.asset_id = c, k.vFOV_deg = m, k.crop = y ? { ...y } : null), Ft(), He(), Ue(), ge();
    } finally {
      URL.revokeObjectURL(w);
    }
  }
  function zm() {
    if (i) return;
    const r = at();
    !r || !ut(r) || Rt(r) || ou((o) => {
      Lm(o);
    });
  }
  async function $m() {
    if (i || t !== "stickers") return;
    const r = v.assets && typeof v.assets == "object" ? v.assets : {}, o = Object.entries(r).filter(([, c]) => {
      const d = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return d === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [c, d] of o)
      try {
        const m = String((d == null ? void 0 : d.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((M) => M.blob()), b = String(y.type || "image/png").split("/")[1] || "png", w = String((d == null ? void 0 : d.name) || `${c}.${b}`), N = new File([y], w, { type: y.type || "image/png" }), k = await Is(N, w);
        v.assets[c] = {
          ...k,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (xt(), ge());
  }
  function jm() {
    if (i || t !== "cutout") return;
    const r = Ke();
    if (r) {
      Sr(r), h.mode = "pano", ms(
        $t(Number(r.yaw_deg || 0)),
        W(Number(r.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), He(), Ue(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Mr(), s = ur(o), c = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (j == null ? void 0 : j.width) || 1
    )), d = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (j == null ? void 0 : j.height) || 1
    )), m = Math.max(0.1, c / d), y = W(Number(h.viewFov || 90), 1, 179), b = W(Math.min(42, y * 0.42), 8, 96), w = W(br * (2 * Math.atan(Math.tan(b * Tt * 0.5) / Math.max(0.1, m))), 6, 72), N = Lh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: $t(Number(h.viewYaw || 0)),
      pitch_deg: W(Number(h.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: b,
      vFOV_deg: w,
      locked: !1
    });
    v.shots = [N], Sr(N), Hs(), h.mode = "pano", lt(), xt(), He(), Ue(), ge({ cause: "cutout_frame" });
  }
  function Vm() {
    i || t === "cutout" && (v.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, v.active.selected_shot_id = null, lt(), xt(), He(), ge());
  }
  function Hm() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      Rt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function su(r, o, s = "Clear") {
    return new Promise((c) => {
      P.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: c
      };
    });
  }
  async function Um() {
    var s, c;
    if (i || !await su(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = ua(null), Mn();
    const o = Hm();
    t === "stickers" ? (v.stickers = o, v.assets = {}, h.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, ni()) : (v.stickers = o, v.assets = {}, v.shots = [], h.selectedId = null, h.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, ni()), lt(), xt(), He(), Ue(), ge();
  }
  async function Bm(r) {
    var m, y, b, w;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = si(o);
    if (!(!c.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((y = h.interaction) == null ? void 0 : y.layerKind) === o) || !await su(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = h.interaction) == null ? void 0 : b.kind) === "draw" && ((w = h.interaction) == null ? void 0 : w.layerKind) === o) {
        const N = fn();
        N && h.paintEngine.cancelActiveStroke(N), h.interaction = null;
      }
      c.length = 0, v.painting.raster_objects = an().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Ut().length = 0), Mn(), lt(), xt(), He(), Ue(), on(), ge();
    }
  }
  function Gm() {
    if (i) return;
    const r = at();
    if (!r || !ut(r) || Rt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = yo("st"), o.yaw_deg = $t((o.yaw_deg || 0) + 8), o.z_index = Ic(), v.stickers.push(o), v.active.selected_sticker_id = o.id, h.selectedId = o.id, h.selectedIds = [o.id], Ft(), lt(), xt(), Ue(), He(), ge();
  }
  function lu() {
    var s, c, d, m, y, b;
    if (i) return;
    const r = Nn(), o = at();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const w = new Set(r.filter((M) => At(M)).map((M) => String(M.actionGroupId || M.id || ""))), N = new Set(r.filter((M) => Bt(M)).map((M) => Ct(M.rasterObjectId || M.id || ""))), k = new Set(r.filter(ut).map((M) => String(M.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((c = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? v.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = Ut().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Mn()), N.size > 0 && (v.painting.raster_objects = an().filter((M) => !N.has(String((M == null ? void 0 : M.id) || ""))), ai()), k.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => k.has(String((M == null ? void 0 : M.id) || "")) ? Rt(M) ? (Jr(M) || (M.visible = !1), !0) : !1 : !0), ni(), Ft()), h.selectedId = null, h.selectedIds = [], lt(), xt(), He(), Ue(), ge();
        return;
      }
      if (At(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (d = v.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== w), v.painting.groups = Ut().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== w), Mn(), h.selectedId = null, h.selectedIds = [], lt(), xt(), He(), Ue(), ge();
        return;
      }
      if (Bt(o)) {
        const w = Ct(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = an().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== w), ai(), h.selectedId = null, h.selectedIds = [], lt(), xt(), He(), Ue(), ge();
        return;
      }
      if (t === "stickers" || ut(o)) {
        if (Rt(o)) {
          if (Jr(o)) return;
          o.visible = !1, Ft(), lt(), xt(), He(), Ue(), ge();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== o.id), ni(), Ft(), h.selectedId = ((y = v.stickers[0]) == null ? void 0 : y.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((b = v.stickers[0]) == null ? void 0 : b.id) || null, lt(), xt(), He(), Ue(), ge();
        return;
      }
      Vm();
    }
  }
  function Km(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const T = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(T)) {
        const [B, K] = T.split(":").map((le) => Number(le));
        if (Number.isFinite(B) && Number.isFinite(K)) return B >= K;
      }
      const $ = Number(r.hFOV_deg || 64), te = Number(r.vFOV_deg || 40);
      return Math.abs($ - te) > 1e-6 ? $ >= te : ta(r) >= 1;
    })();
    let [d, m] = s[String(o)] || s["1:1"];
    d >= m !== c && ([d, m] = [m, d]);
    const y = d / m, b = W(Number(r.hFOV_deg || 64), 1, 179), w = W(Number(r.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, b * w)), k = W(N * Math.sqrt(y), 1, 179), M = W(N / Math.sqrt(y), 1, 179);
    r.hFOV_deg = k, r.vFOV_deg = M, r.aspect_id = String(o);
  }
  function Wm(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Or(r);
  }
  function cu() {
    Yr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Ym() {
    if (i) return;
    const r = Nn();
    if (!at() || r.length === 0) return;
    cu();
    const s = Yr(), c = new Set(r.map((b) => ut(b) ? `sticker:${String(b.id || "")}` : Bt(b) ? `rasterObject:${Ct(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (s.forEach((b) => {
      var N, k;
      const w = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? d.push(b) : m.push(b);
    }), !d.length || d[d.length - 1] === s[s.length - 1]) return;
    [...m, ...d].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Ft(), lt(), xt(), Ue(), ge();
  }
  function qm() {
    if (i) return;
    const r = Nn();
    if (!at() || r.length === 0) return;
    cu();
    const s = Yr(), c = new Set(r.map((b) => ut(b) ? `sticker:${String(b.id || "")}` : Bt(b) ? `rasterObject:${Ct(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (s.forEach((b) => {
      var N, k;
      const w = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? d.push(b) : m.push(b);
    }), !d.length || d[0] === s[0]) return;
    [...d, ...m].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Ft(), lt(), xt(), Ue(), ge();
  }
  function Xm() {
    i || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", f && (v.output_preset = A(Number(v.output_preset || 2048))), p && (v.coverage = zt(p.value)), g && (v.bg_color = String(g.value || v.bg_color || "#00ff00")), yn(), e.setDirtyCanvas(!0, !0));
  }
  function yn() {
    var o;
    if (i) return;
    v.coverage = zt(v.coverage);
    const r = JSON.stringify(v);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function Ua() {
    v.ui_settings = Dx(v.ui_settings), i || yn();
  }
  function xt() {
    var r;
    i || (yn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Jm() {
    i || Op() && Uc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Zm(r = {}) {
    var c, d, m, y, b, w, N, k, M, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((d = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || d.call(c), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), s && ((N = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || N.call(w, !0, !0), (T = (M = (k = hn) == null ? void 0 : k.canvas) == null ? void 0 : M.setDirty) == null || T.call(M, !0, !0));
  }
  function Hs() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", on(), He());
  }
  function oi(r) {
    const o = j.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * j.width,
      y: (r.clientY - o.top) / o.height * j.height
    };
  }
  function Ba(r) {
    const o = j.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function uu() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Ke() {
    if (t !== "cutout") return null;
    const r = Array.isArray(v.shots) ? v.shots : [];
    if (!r.length) return null;
    const o = String(v.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function It(r = Ke()) {
    var y, b, w;
    if (!r || !j) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(j.width || 0) - 48),
      h: Math.max(1, Number(j.height || 0) - 48)
    }, s = W(ta(r), 0.1, 10);
    let c = o.w, d = Math.max(1, Math.round(c / s));
    d > o.h && (d = o.h, c = Math.max(1, Math.round(d * s)));
    const m = Math.max(0.1, Number(((y = h.frameView) == null ? void 0 : y.zoom) || 1));
    return c *= m, d *= m, {
      x: Math.round(o.x + (o.w - c) * 0.5 + Number(((b = h.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - d) * 0.5 + Number(((w = h.frameView) == null ? void 0 : w.panY) || 0)),
      w: Math.max(1, Math.round(c)),
      h: Math.max(1, Math.round(d))
    };
  }
  function Us() {
    return t === "cutout" && !!Ke();
  }
  function kn(r, o = performance.now()) {
    if (h.mode === "unwrap") {
      const m = cr(), y = (r.x - m.x) / Math.max(1, m.w), b = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: W(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Cs(r.x, r.y), { lon: c, lat: d } = Es(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Pn(r, o, s = performance.now()) {
    const c = It(o);
    if (!c) return null;
    const d = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    };
    if (d.x < 0 || d.x > 1 || d.y < 0 || d.y > 1) return null;
    const m = Fs(o, d);
    if (!m) return null;
    const { lon: y, lat: b } = Es(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Qm(r, o) {
    var N;
    const s = Ke(), c = It(s);
    if (!s || !c) return !1;
    const d = Math.max(0.1, Number(((N = h.frameView) == null ? void 0 : N.zoom) || 1)), m = W(d * Number(o), 0.25, 12);
    if (Math.abs(m - d) < 1e-6) return !1;
    const y = (Number(r.x) - c.x) / Math.max(1e-6, c.w), b = (Number(r.y) - c.y) / Math.max(1e-6, c.h);
    h.frameView.zoom = m;
    const w = It(s);
    return w ? (h.frameView.panX += Number(r.x) - (w.x + w.w * y), h.frameView.panY += Number(r.y) - (w.y + w.h * b), !0) : !1;
  }
  function eg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function dr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Yn : sn[o] ? o : h.activeBrushPresetId || Yn;
  }
  function fu() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (uu() || Us());
  }
  function du() {
    var r;
    return fu() && ((r = h.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Ga(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), d = o !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== d || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - c) > 0.01;
    return h.pointerPos = { x: s, y: c, inside: d }, y;
  }
  function tg() {
    var k, M;
    if (!du()) return null;
    const r = h.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? h.maskTool : h.paintTool, s = dr(o), c = sn[s] || sn[Yn], d = Number(h.brushSizes[s] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(3, m * 0.5), b = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : dn(h.paintColor), w = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : W(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : W(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: y,
      fillStyle: Rn(b, w),
      strokeStyle: Rn(b, N),
      x: Number(((k = h.pointerPos) == null ? void 0 : k.x) || 0),
      y: Number(((M = h.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function ng() {
    var T, $, te;
    const r = tg();
    if (!H) return;
    if (!r) {
      H.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", d = 0, m = r.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let k = Number(r.hotspotX ?? o * 0.5), M = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Zo, s = Zo, c = "0", y = "0", b = "none", k = gx, M = bx, m = kx(r.fillStyle, N, w);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, d = Number(((te = ($ = r.preset) == null ? void 0 : $.angle) == null ? void 0 : te.value) || 0) * br;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    H.style.display = "block", H.style.width = `${Math.round(o)}px`, H.style.height = `${Math.round(s)}px`, H.style.borderRadius = c, H.style.border = y, H.style.boxShadow = b, H.style.background = m, H.style.backgroundRepeat = "no-repeat", H.style.backgroundPosition = "center", H.style.backgroundSize = "contain", H.style.transform = `translate(${Math.round(r.x - k)}px, ${Math.round(r.y - M)}px) rotate(${d}deg)`;
  }
  function rg() {
    var pe;
    if (!be || !xe) return;
    const r = h.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? h.maskTool : h.paintTool;
    if (o === "lasso_fill") return;
    const s = dr(o), c = sn[s] || sn[Yn], d = Number(h.brushSizes[s] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(6, m * 0.5), b = o === "eraser", w = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : dn(h.paintColor), N = r === "mask" ? Rn(w, 0.22) : b ? "rgba(255,255,255,0.14)" : Rn(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), k = r === "mask" ? Rn(w, 0.96) : b ? "rgba(255,255,255,0.72)" : Rn(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let M = y * 2, T = y * 2, $ = "999px", te = 0, B = N;
    const K = "rgba(222, 222, 222, 0.72)", le = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const oe = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      M = Math.max(16, y * 2 * oe), T = Math.max(10, y * 2), $ = `${Math.min(8, T * 0.42)}px`, te = Number(((pe = c == null ? void 0 : c.angle) == null ? void 0 : pe.value) || 0) * br;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${k} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (M = Math.max(18, y * 1.8), T = M, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${k} 43%, ${k} 58%, rgba(0,0,0,0) 59%)`) : b && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(M)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = $, xe.style.background = B, xe.style.border = `1px solid ${K}`, xe.style.boxShadow = `0 0 0 1px ${le}`, xe.style.transform = `rotate(${te}deg)`, Pt && (clearTimeout(Pt), Pt = 0), be.classList.remove("fade-out"), be.classList.add("show");
  }
  function Ka() {
    !be || !be.classList.contains("show") || (be.classList.add("fade-out"), Pt && clearTimeout(Pt), Pt = window.setTimeout(() => {
      be.classList.remove("show", "fade-out"), Pt = 0;
    }, 180));
  }
  function hu(r, o, s, c) {
    const d = dr(o), m = sn[d] || sn[Yn], y = h.brushSizes[d] ?? 10, b = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), w = eg(c, b), N = s.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), k = {
      id: hi(r),
      actionGroupId: hi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: r === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((M) => ({ ...M })),
        points: N.map((M) => ({ ...M }))
      }
    };
    return Hf(k, m), Number(m.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), Number(k.size || 0), String(k.radiusModel || ""), Number(k.radiusValue || 0), { ...k.targetSpace }, k;
  }
  function pu(r, o, s, c) {
    const d = s.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = dr(o), y = sn[m] || sn[Yn], b = {
      id: hi(r),
      actionGroupId: hi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((w) => ({ ...w }))
      }
    };
    return Hf(b, y), Number(y.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function si(r) {
    const o = v.painting || (v.painting = ua(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function ig(r, o, s = performance.now()) {
    let c;
    if (h.mode === "frame") {
      const N = Ke();
      if (!N || (c = Pn(o, N, s), !c)) return !1;
    } else
      c = kn(o, s);
    if (!c) return !1;
    const d = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, y = d[d.length - 1];
    if (y) {
      const N = Math.abs(Number(c.u ?? c.x ?? 0) - Number(y.u ?? y.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && k < 15e-4) return !1;
    }
    const b = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...b }), m.push({ ...b });
    const w = fn();
    if (w) {
      const N = h.paintEngine.ensureTarget(w);
      h.paintEngine.appendStrokePoint(N, Number(b.u ?? 0), Number(b.v ?? 0), r.stroke);
    }
    return !0;
  }
  function ag(r, o, s = performance.now()) {
    var y, b;
    let c;
    if (h.mode === "frame") {
      const w = Ke();
      if (!w) return !1;
      c = Pn(o, w, s);
    } else
      c = kn(o, s);
    const d = (b = (y = r == null ? void 0 : r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.points;
    if (!c || !Array.isArray(d)) return !1;
    const m = d[d.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && N < 15e-4) return !1;
    }
    return d.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function og(r) {
    var oe, me, Ce, Ee, ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    ja();
    const s = fn(), c = $i(s.width, s.height);
    if (!tu(c, o, { w: s.width, h: s.height })) return !1;
    const d = ((me = (oe = c.ctx) == null ? void 0 : oe.getImageData(0, 0, s.width, s.height)) == null ? void 0 : me.data) || null;
    if (!d) return !1;
    const m = new Map(Ut().map((X) => [String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim(), X ? { ...X } : null])), y = [], b = [], w = [...an().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") !== "paint")];
    let N = !1, k = Yr().reduce((X, ne) => Math.max(X, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    function M(X, ne, ve, Se = 8) {
      let Ie = ne, Le = ve, ze = -1, Ye = -1;
      for (let qe = 0; qe < ve; qe += 1)
        for (let Xe = 0; Xe < ne; Xe += 1)
          X[(qe * ne + Xe) * 4 + 3] <= Se || (Xe < Ie && (Ie = Xe), qe < Le && (Le = qe), Xe > ze && (ze = Xe), qe > Ye && (Ye = qe));
      return ze < Ie || Ye < Le ? null : { minX: Ie, minY: Le, maxX: ze, maxY: Ye };
    }
    const T = M(d, s.width, s.height, 8);
    if (!T) return !1;
    function $(X, ne) {
      return !X || !ne ? !1 : !(X.maxX < ne.minX || ne.maxX < X.minX || X.maxY < ne.minY || ne.maxY < X.minY);
    }
    function te(X, ne) {
      const ve = sr((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "", "paint", ne);
      if (!ve) return null;
      const Se = ve.centerUv.u - ve.halfW, Ie = ve.centerUv.u + ve.halfW, Le = ve.centerUv.v - ve.halfH, ze = ve.centerUv.v + ve.halfH, Ye = s.width, qe = s.height;
      return {
        minX: Math.floor((Se % 1 + 1) % 1 * Ye),
        maxX: Math.ceil((Ie % 1 + 1) % 1 * Ye),
        minY: Math.floor(W(Le, 0, 1) * qe),
        maxY: Math.ceil(W(ze, 0, 1) * qe),
        wraps: Ie - Se >= 1 || Se < 0 || Ie > 1
      };
    }
    function B(X) {
      const ne = (X == null ? void 0 : X.bbox) || null;
      if (!ne) return null;
      const ve = (X == null ? void 0 : X.transform) || {}, Se = s.width, Ie = s.height, Le = Number(ne.u0 || 0) + Number(ve.du || 0), ze = Number(ne.u1 || 0) + Number(ve.du || 0), Ye = Number(ne.v0 || 0) + Number(ve.dv || 0), qe = Number(ne.v1 || 0) + Number(ve.dv || 0);
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Se),
        maxX: Math.ceil((ze % 1 + 1) % 1 * Se),
        minY: Math.floor(W(Ye, 0, 1) * Ie),
        maxY: Math.ceil(W(qe, 0, 1) * Ie),
        wraps: ze - Le >= 1 || Le < 0 || ze > 1
      };
    }
    function K(X) {
      return X ? X.wraps ? $(T, { minX: 0, maxX: X.maxX, minY: X.minY, maxY: X.maxY }) || $(T, { minX: X.minX, maxX: s.width - 1, minY: X.minY, maxY: X.maxY }) : $(T, X) : !0;
    }
    function le(X) {
      if (!X) return { touched: !1, canvas: null };
      const ne = $i(s.width, s.height, { readback: !0 });
      ne.ctx.drawImage(X, 0, 0);
      const ve = ne.ctx.getImageData(0, 0, s.width, s.height);
      ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(c.canvas, 0, 0), ne.ctx.restore();
      const Se = ne.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ie = 0; Ie < s.width * s.height; Ie += 1) {
        if (d[Ie * 4 + 3] <= 8) continue;
        const ze = ve.data[Ie * 4 + 3], Ye = Se.data[Ie * 4 + 3];
        if (ze > Ye)
          return { touched: !0, canvas: ne.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(X, ne, ve) {
      const Se = Number(ve == null ? void 0 : ve.z_index), Ie = Mm(X, ne, ve).map((Le, ze) => ({
        ...Le,
        z_index: Number.isFinite(Se) ? Se + ze * 1e-3 : k + ze * 1e-3
      }));
      return Ie.length && (k = Math.max(k, ...Ie.map((Le) => Number((Le == null ? void 0 : Le.z_index) || 0))) + 1), Ie;
    }
    for (const X of Ut()) {
      const ne = String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim();
      if (!ne) continue;
      const ve = Sn(ne, "paint");
      if (!K(te(X, ve))) {
        b.push(X), y.push(...ve);
        continue;
      }
      const Se = ((Ee = (Ce = h.paintEngine) == null ? void 0 : Ce.getGroupTarget) == null ? void 0 : Ee.call(Ce, ne)) || null, Ie = ((ke = Se == null ? void 0 : Se.committedPaint) == null ? void 0 : ke.canvas) || null;
      if (!Ie) {
        b.push(X), y.push(...ve);
        continue;
      }
      const Le = le(Ie);
      if (!Le.touched || !Le.canvas) {
        b.push(X), y.push(...ve);
        continue;
      }
      N = !0;
      const ze = pe(Le.canvas, "paint", m.get(ne) || X || {});
      w.push(...ze);
    }
    for (const X of an().filter((ne) => String((ne == null ? void 0 : ne.layerKind) || "paint") === "paint")) {
      if (!K(B(X))) {
        w.push(X);
        continue;
      }
      const ne = Vc(X, null);
      if (!ne) {
        w.push(X);
        continue;
      }
      const ve = le(ne);
      if (!ve.touched || !ve.canvas) {
        w.push(X);
        continue;
      }
      N = !0;
      const Se = pe(ve.canvas, "paint", X);
      w.push(...Se);
    }
    return N ? (v.painting.paint.strokes = y, v.painting.groups = b.sort((X, ne) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0)), v.painting.raster_objects = w.sort((X, ne) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0)), ti({ preservePanelValues: !1 }), !0) : !1;
  }
  function sg(r) {
    var y, b, w, N, k;
    if ((((b = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.rawPoints) || ((N = (w = r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Bs(r);
      const M = fn();
      M && (String(((k = r.stroke) == null ? void 0 : k.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(M) : h.paintEngine.commitActiveStroke(r.stroke, M)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, d = hu(r.layerKind, s.toolKind, [], c);
    d.actionGroupId = s.actionGroupId, r.stroke = d;
    const m = fn();
    m && h.paintEngine.beginStroke(d, m);
  }
  function lg(r) {
    var y, b;
    if ((((b = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      Bs(r);
      const w = fn();
      w && h.paintEngine.commitActiveStroke(r.stroke, w), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, d = pu(r.layerKind, s.toolKind, [], c);
    d.actionGroupId = s.actionGroupId, r.stroke = d;
    const m = fn();
    m && h.paintEngine.beginStroke(d, m);
  }
  function Bs(r) {
    var m, y, b, w;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((y = r == null ? void 0 : r.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Ls(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), og(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && Sc((b = r.stroke) == null ? void 0 : b.actionGroupId), si(r.layerKind).push(r.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Ls(d, r.stroke.targetSpace, !0), c && Sc((w = r.stroke) == null ? void 0 : w.actionGroupId), si(r.layerKind).push(r.stroke), !0);
  }
  function mu(r) {
    var s;
    if (t === "cutout" && h.mode === "frame") {
      const c = Ke(), d = It(c);
      if (!c || !d || !(Number((r == null ? void 0 : r.x) || 0) >= Number(d.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(d.x || 0) + Number(d.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(d.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(d.y || 0) + Number(d.h || 0))) return null;
      const y = Pn(r, c, performance.now()), b = y ? ri(y) : null;
      if (b)
        for (const N of Os()) {
          if (!ut(N)) continue;
          const k = Vi(N, b);
          if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
            const M = Ot(N);
            if (M != null && M.visible) return { item: N, geom: M };
          }
        }
      const w = ys(!1).slice().sort((N, k) => Number((k == null ? void 0 : k.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of w) {
        if (N.type === "strokeGroup") {
          const T = Xr(Di("paint", N.actionGroupId || N.id || ""));
          if (!T) continue;
          const $ = Ot(T);
          if (!($ != null && $.visible)) continue;
          const te = Array.isArray($.strokePaths) ? $.strokePaths : [];
          for (const B of te) {
            const K = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!K.length) continue;
            if (B.closed && K.length >= 3 && qn(r, K)) return { item: T, geom: $ };
            const le = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < K.length - 1; pe += 1)
              if (vl(r, K[pe], K[pe + 1]) <= le * le) return { item: T, geom: $ };
            if (K.length === 1 && pr(r, K[0]) <= le * le) return { item: T, geom: $ };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const T = qr(Ri(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!T) continue;
          const $ = Ot(T);
          if (jc(T, $, r, y)) return { item: T, geom: $ };
          continue;
        }
        const k = N.item;
        if (!k || !ut(k) || !b) continue;
        const M = Vi(k, b);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const T = Ot(k);
          if (T != null && T.visible) return { item: k, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...ys(!1).slice().sort((c, d) => Number((d == null ? void 0 : d.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var d;
        return c.type === "strokeGroup" ? Xr(Di("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? qr(Ri(((d = c.item) == null ? void 0 : d.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? Os().filter((c) => rn(c)) : []
    ];
    for (const c of o) {
      if (At(c)) {
        const m = Ot(c);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of y) {
          const w = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!w.length) continue;
          if (b.closed && w.length >= 3 && qn(r, w)) return { item: c, geom: m };
          const N = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < w.length - 1; k += 1)
            if (vl(r, w[k], w[k + 1]) <= N * N) return { item: c, geom: m };
          if (w.length === 1 && pr(r, w[0]) <= N * N) return { item: c, geom: m };
        }
        continue;
      }
      if (Bt(c)) {
        const m = Ot(c);
        if (!(m != null && m.visible)) continue;
        if (jc(c, m, r)) return { item: c, geom: m };
        continue;
      }
      const d = Ot(c);
      if (d.visible && qn(r, d.corners))
        return { item: c, geom: d };
    }
    return null;
  }
  function Gs(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((m) => pr(m, o) <= 121);
      if (c >= 0) {
        const m = r.corners[c], y = m.x - r.center.x, b = m.y - r.center.y, w = y * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: w };
      }
      const d = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of d) {
        const y = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && y.length >= 3 && qn(o, y)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < y.length - 1; w += 1)
          if (vl(o, y[w], y[w + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((d) => pr(d, o) <= 121);
      if (c >= 0) {
        const d = r.corners[c], m = d.x - r.center.x, y = d.y - r.center.y, b = m * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: b };
      }
      return qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((d) => pr(d, o) <= 169);
      if (c) {
        const d = c.edge === "left" || c.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => pr(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], d = c.x - r.center.x, m = c.y - r.center.y, y = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: y };
    }
    return pr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function gu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function cg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function ug(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => cg(r, d))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!qn({ x: s, y: c }, o.corners);
  }
  function ft(r) {
    if (ng(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? fe("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? fe("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? fe("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? fe(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? fe("grabbing") : fe("default");
      return;
    }
    if (du()) {
      fe("none");
      return;
    }
    if (h.mode === "frame" && h.primaryTool !== "cursor") {
      fe("default");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      fe("default");
      return;
    }
    const o = at(), s = o ? Ot(o) : null, c = o ? lr(o) : !1, d = c ? { kind: "none", cursor: "default" } : Gs(s, r);
    if (!c && d.kind !== "none") {
      fe(d.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && mu(r)) {
      fe("default");
      return;
    }
    fe(h.mode === "pano" ? "grab" : "default");
  }
  function Ue() {
    var w, N;
    if (!_e) return;
    const r = at(), o = Nn();
    if (!r && o.length === 0 || h.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ca(), c = o1({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? xs(o) : Ot(r),
      allLocked: ws(o),
      selectedLocked: lr(r),
      activeAspect: Xi(r),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Rt,
      isStickerHidden: Jr,
      canRestoreSelectedToInitial: mp,
      iconSet: Te
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const d = (k, M, { requireFitsBelow: T = !0 } = {}) => {
      var me, Ce, Ee;
      const te = Number((me = c.anchor) == null ? void 0 : me.minX), B = Number((Ce = c.anchor) == null ? void 0 : Ce.maxX), K = Number((Ee = c.anchor) == null ? void 0 : Ee.maxY);
      if (![te, B, K].every(Number.isFinite)) return null;
      const le = Math.max(14, j.width - k - 14), pe = W((te + B) * 0.5 - k * 0.5, 14, le), oe = K + 18;
      return !Number.isFinite(pe) || !Number.isFinite(oe) || T && oe + M > j.height - 14 ? null : { left: pe, top: oe };
    }, m = Math.max(1, Number(((w = h.menuSize) == null ? void 0 : w.w) || 220)), y = Math.max(1, Number(((N = h.menuSize) == null ? void 0 : N.h) || 40)), b = d(m, y, { requireFitsBelow: !1 });
    if (!b) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!_e || P.selectionMenu.visible !== !0) return;
      const k = _e.getBoundingClientRect(), M = Math.round(Number((k == null ? void 0 : k.width) || 0)) || 220, T = Math.round(Number((k == null ? void 0 : k.height) || 0)) || 40;
      h.menuSize = { w: M, h: T, measured: !0 };
      const $ = d(M, T);
      if (!$) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = $.left, P.selectionMenu.top = $.top;
    });
  }
  function Wa() {
    ye.timer && (clearTimeout(ye.timer), ye.timer = 0), ye.target = null, P.tooltip.visible = !1, P.tooltip.text = "", P.tooltip.variant = "";
  }
  function fg(r) {
    if (!De || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    P.tooltip.text = o, P.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var te, B;
      if (ye.target !== s || !De || !(s != null && s.isConnected)) return;
      const c = de.getBoundingClientRect(), d = s.getBoundingClientRect(), m = 8, y = 12, b = Math.round(Number(((te = De.getBoundingClientRect()) == null ? void 0 : te.width) || 0)) || 100, w = Math.round(Number(((B = De.getBoundingClientRect()) == null ? void 0 : B.height) || 0)) || 24, N = !!s.closest(".pano-floating-left"), k = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let M = "", T = d.left - c.left + d.width * 0.5 - b * 0.5, $ = d.top - c.top - w - y;
      if (N)
        M = "tool-rail", T = d.right - c.left + 10, $ = d.top - c.top + d.height * 0.5 - w * 0.5, T = W(T, m, Math.max(m, c.width - b - m)), $ = W($, m, Math.max(m, c.height - w - m));
      else if (k) {
        M = "footer";
        const K = s.closest(".pano-paint-footer"), le = K ? K.getBoundingClientRect() : d;
        T = le.left - c.left + le.width * 0.5 - b * 0.5, $ = le.bottom - c.top + 5, T = W(T, m, Math.max(m, c.width - b - m)), $ = Math.max(m, $);
      }
      T = W(T, m, Math.max(m, c.width - b - m)), $ = Math.max(m, $), P.tooltip.left = T, P.tooltip.top = $, P.tooltip.variant = M, P.tooltip.visible = !0;
    });
  }
  const Lt = ds({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (r) => {
      h.viewYaw = $t(Number(r.yaw || 0)), h.viewPitch = W(Number(r.pitch || 0), -89.9, 89.9), h.viewFov = W(Number(r.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = j.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || j.clientWidth || 0)),
        h: Math.max(1, Number(r.height || j.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = v.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = v.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: cr,
    onInteraction: () => {
      J.backgroundDirty = !0, J.dirty = !0;
    }
  });
  j.onpointerdown = (r) => {
    const o = oi(r);
    if (Ga(o, !0), h.viewTween = null, Lt.state.inertia.active = !1, Lt.state.inertia.vx = 0, Lt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), h.mode === "frame")
        h.interaction = { kind: "pan_frame", last: o };
      else {
        const b = h.mode === "unwrap" ? o : Ba(r);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now());
      }
      ft(o), j.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (h.mode === "pano") {
        const b = Ba(r);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now()), ft(o), j.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (je && !je.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (uu() || Us())) {
      const b = h.primaryTool === "mask" ? "mask" : "paint", w = h.primaryTool === "mask" ? h.maskTool : h.paintTool, N = h.mode === "frame" && Us() ? Ke() : null, k = { kind: "ERP_GLOBAL" }, M = N ? Pn(o, N, performance.now()) : kn(o, performance.now());
      if (!M) {
        ft(o);
        return;
      }
      h.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: hi("live"),
        stroke: w === "lasso_fill" ? pu(b, w, [M], k) : hu(b, w, [M], k)
      }, Li();
      const T = fn();
      if (T)
        if (h.paintEngine.beginStroke(h.interaction.stroke, T), h.interaction.kind === "paint_stroke") {
          const $ = h.paintEngine.ensureTarget(T), te = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), B = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          h.paintEngine.appendStrokePoint($, te, B, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, T);
      ft(o), j.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = Nn(), c = at(), d = s.length > 1 ? xs(s) : c ? Ot(c) : null;
    if (h.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      h.interaction = { kind: "marquee_select", start: o, current: o }, ft(o), j.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (d != null && d.visible)) {
      if ((s.some((w) => lr(w)) ? { kind: "none" } : Gs(d, o)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: s.map((w) => w),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: s.filter((w) => ut(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var k, M;
              const N = Ot(w);
              return N != null && N.visible ? { x: Number(((k = N.center) == null ? void 0 : k.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((w) => At(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: Kt(Sn(w.actionGroupId, w.layerKind)),
            frameSnapshot: Kt(sr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var k, M;
              const N = Ot(w);
              return N != null && N.visible ? { x: Number(((k = N.center) == null ? void 0 : k.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: _s(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: s.filter((w) => Bt(w)).map((w) => ({
            id: Ct(w.rasterObjectId || w.id || ""),
            snapshot: Kt(an().find((N) => String((N == null ? void 0 : N.id) || "") === Ct(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var k, M;
              const N = Ot(w);
              return N != null && N.visible ? { x: Number(((k = N.center) == null ? void 0 : k.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Kc(w)
          }))
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (d != null && d.visible)) {
      const b = lr(c) ? { kind: "none" } : Gs(d, o);
      if (b.kind === "scale") {
        h.interaction = At(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Kt(Sn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Kt(sr(c.actionGroupId, c.layerKind)),
          cursor: b.cursor
        } : Bt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Kt(an().find((w) => String((w == null ? void 0 : w.id) || "") === Ct(c.rasterObjectId || c.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        h.interaction = {
          kind: b.kind,
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        h.interaction = At(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: Kt(Sn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Kt(sr(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: d.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (At(c)) {
          const w = h.mode === "frame" ? (() => {
            const N = Ke();
            return N ? Pn(o, N, performance.now()) : null;
          })() : kn(o, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: Kt(Sn(c.actionGroupId, c.layerKind)),
            frameSnapshot: Kt(sr(c.actionGroupId, c.layerKind))
          }, ft(o), j.setPointerCapture(r.pointerId);
          return;
        }
        if (Bt(c)) {
          const w = h.mode === "frame" ? (() => {
            const N = Ke();
            return N ? Pn(o, N, performance.now()) : null;
          })() : kn(o, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: Kt(an().find((N) => String((N == null ? void 0 : N.id) || "") === Ct(c.rasterObjectId || c.id || "")))
          }, ft(o), j.setPointerCapture(r.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: c,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = mu(o);
    if (m) {
      const b = h.selectedId !== m.item.id;
      if (b && h.selectedId && (lt(), yn()), Sr(m.item), t === "cutout" && b && (h.cutoutAspectOpen = !1), b && He(), Ue(), ge(), lr(m.item)) {
        ft(o);
        return;
      }
      h.interaction = {
        kind: At(m.item) ? "move_stroke_group" : Bt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: At(m.item) || Bt(m.item) ? h.mode === "frame" ? (() => {
          const w = Ke();
          return w ? Pn(o, w, performance.now()) : null;
        })() : kn(o, performance.now()) : null,
        snapshot: At(m.item) ? Kt(Sn(m.item.actionGroupId, m.item.layerKind)) : Bt(m.item) ? Kt(an().find((w) => String((w == null ? void 0 : w.id) || "") === Ct(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: At(m.item) ? Kt(sr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ft(o), j.setPointerCapture(r.pointerId);
      return;
    }
    const y = !!h.selectedId;
    if (y && (lt(), yn()), ti(), y && He(), Ue(), ge(), h.mode === "pano") {
      const b = Ba(r);
      h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Lt.startDrag(b.x, b.y, r.pointerId, performance.now()), ft(o), j.setPointerCapture(r.pointerId);
    }
  }, j.onpointermove = (r) => {
    var c, d, m, y, b, w, N, k, M, T, $, te, B, K, le, pe, oe, me, Ce, Ee;
    const o = oi(r);
    if (Ga(o, !0), !h.interaction) {
      ft(o);
      return;
    }
    ft(o);
    const s = h.interaction;
    if (s.kind === "paint_stroke") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      ke.forEach((ne) => {
        const ve = oi(ne);
        if (h.mode === "frame") {
          const Se = Ke(), Ie = Se ? It(Se) : null;
          if (Ie) {
            const Le = (ve.x - Ie.x) / Math.max(1, Ie.w), ze = (ve.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Le >= 0 && Le <= 1 && ze >= 0 && ze <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, sg(s));
          }
        }
        ig(s, ve, performance.now()) && (X = !0);
      }), X && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      if (ke.forEach((ne) => {
        const ve = oi(ne);
        if (h.mode === "frame") {
          const Se = Ke(), Ie = Se ? It(Se) : null;
          if (Ie) {
            const Le = (ve.x - Ie.x) / Math.max(1, Ie.w), ze = (ve.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Le >= 0 && Le <= 1 && ze >= 0 && ze <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, lg(s));
          }
        }
        ag(s, ve, performance.now()) && (X = !0);
      }), X) {
        const ne = fn();
        ne && h.paintEngine.updateActiveStroke(s.stroke, ne), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ke = performance.now(), X = h.mode === "unwrap" ? o : Ba(r);
      Lt.moveDrag(X.x, X.y, h.mode === "unwrap" ? "unwrap" : "pano", ke), s.lastTs = ke, s.last = X, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      h.frameView.panX += o.x - s.last.x, h.frameView.panY += o.y - s.last.y, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ke = o.x - s.offset.x, X = o.y - s.offset.y;
      if (h.mode === "frame" && t === "cutout") {
        const ne = Ke(), ve = It(ne);
        if (!ne || !ve) return;
        const Se = {
          x: W((ke - ve.x) / Math.max(1, ve.w), 0, 1),
          y: W((X - ve.y) / Math.max(1, ve.h), 0, 1)
        }, Ie = Fs(ne, Se);
        if (!Ie) return;
        const Le = po(Ie);
        s.item.yaw_deg = Le.yaw, s.item.pitch_deg = Le.pitch;
      } else if (h.mode === "unwrap") {
        const ne = cr(), ve = W((ke - ne.x) / Math.max(ne.w, 1), 0, 1), Se = W((X - ne.y) / Math.max(ne.h, 1), 0, 1);
        s.item.yaw_deg = $t(ve * 360 - 180), s.item.pitch_deg = W(90 - Se * 180, -90, 90);
      } else {
        const ne = Cs(ke, X), ve = po(ne);
        s.item.yaw_deg = ve.yaw, s.item.pitch_deg = ve.pitch;
      }
      ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ke = h.mode === "frame" ? (() => {
        const ve = Ke();
        return ve ? Pn(o, ve, performance.now()) : null;
      })() : kn(o, performance.now());
      if (!ke || !s.startUv) return;
      const X = bn(Number(ke.u || 0), Number(s.startUv.u || 0)), ne = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Mc((c = s.item) == null ? void 0 : c.actionGroupId, X, ne, s.snapshot, (d = s.item) == null ? void 0 : d.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ke = h.mode === "frame" ? (() => {
        const ve = Ke();
        return ve ? Pn(o, ve, performance.now()) : null;
      })() : kn(o, performance.now());
      if (!ke || !s.startUv) return;
      const X = bn(Number(ke.u || 0), Number(s.startUv.u || 0)), ne = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Pc(((m = s.item) == null ? void 0 : m.rasterObjectId) || ((y = s.item) == null ? void 0 : y.id) || "", X, ne, s.snapshot) && (ai(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      rp(((b = s.item) == null ? void 0 : b.rasterObjectId) || ((w = s.item) == null ? void 0 : w.id) || "", X, s.snapshot) && (ai(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ke = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), X = o.y - Number(((k = s.offset) == null ? void 0 : k.y) || 0);
      let ne = !1, ve = !1, Se = !1;
      const Ie = ke - Number(((M = s.startCenter) == null ? void 0 : M.x) || ke), Le = X - Number(((T = s.startCenter) == null ? void 0 : T.y) || X);
      for (const ze of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ye = (t === "cutout" ? vs() : Bn()).find((Xe) => String((Xe == null ? void 0 : Xe.id) || "") === String(ze.id || ""));
        if (!Ye || !ut(Ye)) continue;
        const qe = {
          x: Number((($ = ze.center) == null ? void 0 : $.x) || 0) + Ie,
          y: Number(((te = ze.center) == null ? void 0 : te.y) || 0) + Le
        };
        if (h.mode === "frame" && t === "cutout") {
          const Xe = Ke(), Mt = It(Xe);
          if (!Xe || !Mt) continue;
          const kr = {
            x: W((qe.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: W((qe.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, Iu = Fs(Xe, kr);
          if (!Iu) continue;
          const Tu = po(Iu);
          Ye.yaw_deg = Tu.yaw, Ye.pitch_deg = Tu.pitch;
        } else if (h.mode === "unwrap") {
          const Xe = cr(), Mt = W((qe.x - Xe.x) / Math.max(Xe.w, 1), 0, 1), kr = W((qe.y - Xe.y) / Math.max(Xe.h, 1), 0, 1);
          Ye.yaw_deg = $t(Mt * 360 - 180), Ye.pitch_deg = W(90 - kr * 180, -90, 90);
        } else {
          const Xe = Cs(qe.x, qe.y), Mt = po(Xe);
          Ye.yaw_deg = Mt.yaw, Ye.pitch_deg = Mt.pitch;
        }
        ne = !0;
      }
      for (const ze of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ye = {
          x: Number(((B = ze.center) == null ? void 0 : B.x) || 0) + Ie,
          y: Number(((K = ze.center) == null ? void 0 : K.y) || 0) + Le
        }, qe = h.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Pn(Ye, Mt, performance.now()) : null;
        })() : kn(Ye, performance.now()), Xe = ze.centerUv || null;
        if (qe && Xe) {
          const Mt = bn(Number(qe.u || 0), Number(Xe.u || 0)), kr = Number(qe.v || 0) - Number(Xe.v || 0);
          Mc(ze.id, Mt, kr, ze.snapshot, ze.layerKind, ze.frameSnapshot) && (ne = !0, ve = !0);
        }
      }
      for (const ze of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ye = {
          x: Number(((le = ze.center) == null ? void 0 : le.x) || 0) + Ie,
          y: Number(((pe = ze.center) == null ? void 0 : pe.y) || 0) + Le
        }, qe = h.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Pn(Ye, Mt, performance.now()) : null;
        })() : kn(Ye, performance.now()), Xe = ze.centerUv || null;
        if (qe && Xe) {
          const Mt = bn(Number(qe.u || 0), Number(Xe.u || 0)), kr = Number(qe.v || 0) - Number(Xe.v || 0);
          Pc(ze.id, Mt, kr, ze.snapshot) && (ne = !0, Se = !0);
        }
      }
      ne && (ve ? Mn({ rebuildPaintEngine: !1 }) : Se ? ai() : Ft(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      kc((oe = s.item) == null ? void 0 : oe.actionGroupId, X, 0, s.snapshot, (me = s.item) == null ? void 0 : me.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ke = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * br;
      r.shiftKey && (ke = Math.round(ke / 45) * 45), kc((Ce = s.item) == null ? void 0 : Ce.actionGroupId, 1, ke, s.snapshot, (Ee = s.item) == null ? void 0 : Ee.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * X, 1, 179), s.item.vFOV_deg = W(s.startVFOV * X, 1, 179), s.item.aspect_id = Or(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * X, 1, 179), s.item.aspect_id = Or(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = W(s.startVFOV * X, 1, 179), s.item.aspect_id = Or(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let X = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * br, ne = s.startRot - X;
      r.shiftKey && (ne = Math.round(ne / 45) * 45);
      const ve = ut(s.item) ? "rot_deg" : "roll_deg";
      s.item[ve] = ne, ut(s.item) && Ft(), ge({ localOnly: !0 });
    }
  }, j.onpointerup = () => {
    var o, s, c, d, m, y;
    const r = h.interaction;
    if (((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Li();
      const b = Bs(h.interaction), w = !!h.interaction._hasCommittedSegments;
      if (b || w) {
        Mn();
        const N = String(((c = h.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
        if (N) {
          const M = Ut().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === N);
          M && (M.frame = null);
        }
        const k = fn();
        k && (b ? String(((d = h.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(k), Zc()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, k) : h.paintEngine.cancelActiveStroke(k)), lt(), yn(), He(), Ue(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const N = fn();
        N && h.paintEngine.cancelActiveStroke(N);
      }
    } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = gu(h.interaction.start, h.interaction.current), N = [
        ...t === "cutout" ? Os().filter((k) => !rn(k)) : [...Bn()],
        ...Qh(),
        ...ep()
      ].filter((k) => ug(b, Ot(k)));
      sp(N, ((y = N[N.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && N.length && (h.cutoutAspectOpen = !1), He(), Ue(), ge();
    } else if (h.interaction && h.interaction.kind !== "view" && h.interaction.kind !== "pan_frame") {
      let b = !1;
      (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (b = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Mn({ rebuildPaintEngine: !0 }) : ai()), lt(), yn(), e.setDirtyCanvas(!0, !0), Vs(), h.hqFrames = 1, Ue(), ge();
    }
    h.interaction = null, Li(), r && r.kind === "view" && Lt.endDrag(performance.now()), Ia(), Ue(), ft(h.pointerPos), ge();
  }, j.onpointercancel = () => {
    var r, o, s;
    if (((r = h.interaction) == null ? void 0 : r.kind) === "view" && Lt.endDrag(performance.now()), ((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Li();
      const c = fn();
      c && h.paintEngine.cancelActiveStroke(c);
    }
    h.interaction = null, Li(), Ia(), ft(h.pointerPos), ge({ localOnly: !0 });
  }, j.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, j.onmousemove = (r) => {
    const o = oi(r);
    Ga(o, !0), !h.interaction && ft(o);
  }, j.onmouseleave = () => {
    Ga(h.pointerPos, !1), ft(h.pointerPos);
  }, j.onwheel = (r) => {
    if (h.mode === "frame") {
      const o = oi(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Qm(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    h.mode === "pano" && (Lt.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, j.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), wr(!0));
  }, j.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Ne.depth = 0, wr(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((d) => Ha(d));
    s && au(s);
  };
  const bu = (r) => {
    t !== "stickers" && t !== "cutout" || i || ps(r) && (Ne.depth += 1, wr(!0), r.preventDefault());
  }, yu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Ne.active && ps(r) && wr(!0), Ne.active && r.preventDefault());
  }, vu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Ne.active) return;
    Ne.depth = Math.max(0, Ne.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Ne.depth === 0 || o) && wr(!1);
  }, _u = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Ne.depth = 0, wr(!1), ps(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", bu, !0), window.addEventListener("dragover", yu, !0), window.addEventListener("dragleave", vu, !0), window.addEventListener("drop", _u, !0);
  function Ks() {
    const { canUndo: r, canRedo: o } = iu();
    qi(P.toolButtons, "value", "undo", { disabled: !r }), qi(P.toolButtons, "value", "redo", { disabled: !o });
  }
  const xu = (r, o, s = !1) => {
    var b;
    const c = at(), d = Ca();
    if (!c || d === "stroke") return;
    const m = (((b = P.sidePanel) == null ? void 0 : b.params) || []).find((w) => w.key === r);
    if (!m || m.enabled === !1) return;
    let y = Number(o);
    Number.isNaN(y) && (y = 0), y = W(y, Number(m.min), Number(m.max)), r === "yaw_deg" && (y = $t(y)), c[r] = y, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (c.aspect_id = Or(c)), He(), ge(), s && lt();
  };
  he == null || he.addEventListener("click", async (r) => {
    var c, d, m, y, b, w, N, k, M;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = zt(o.getAttribute("data-coverage"));
      if (T === zt(v.coverage)) return;
      v.coverage = T, h.coverage = T, p && (p.value = String(T)), l ? J.backgroundDirty = !0 : (yn(), Zm({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), Ue(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((d = (c = P.sidePanel) == null ? void 0 : c.selectionPicker) != null && d.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const T = String(o.getAttribute("data-selection-id") || "");
      let $ = null;
      T && (t === "stickers" ? $ = Bn().find((te) => String((te == null ? void 0 : te.id) || "") === T) || null : $ = ((m = Ac().find((te) => {
        var B;
        return String(((B = te == null ? void 0 : te.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : m.item) || null), Sr($ || null), $ && !At($) && ms(
        $t(Number($.yaw_deg || 0)),
        W(Number($.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), He(), Ue(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const T = at(), $ = Ca();
      if (!T || $ === "stroke" || Nn().length > 1) return;
      const te = JSON.stringify(t === "cutout" && $ !== "image" ? Fc(T) : _p(T));
      try {
        await navigator.clipboard.writeText(te), (y = P.sidePanel) != null && y.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = P.sidePanel) != null && B.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const T = String(o.getAttribute("data-visibility") || "");
      T === "panorama" ? h.showPanorama = !h.showPanorama : T === "objects" ? h.showObjects = !h.showObjects : T === "mask" && (h.showMask = !h.showMask), He(), ge();
      return;
    }
    if (s === "set-invert-x") {
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Ua(), He(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Ua(), He(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (N = P.sidePanel) != null && N.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", Ua(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", Ua(), He(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ge();
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
    s === "save-close" && (Xm(), ci());
  }), he == null || he.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && xu(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), he == null || he.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && xu(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Ws = () => {
    const r = !!h.showGrid;
    qi(P.floatingButtons, "action", "toggle-grid", {
      icon: r ? Te.eye : Te.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Ws(), q.addEventListener("click", (r) => {
    var b, w, N, k;
    if ((w = (b = r.target) == null ? void 0 : b.matches) != null && w.call(b, "[data-confirm-overlay]")) {
      const M = (N = P.confirmDialog) == null ? void 0 : N.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      h.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && at() && rn(at()) && (ti({ preservePanelValues: !0 }), He(), Ue()), Hs(), Ia(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const M = String(s.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = M, (M === "paint" || M === "mask") && ti({ preservePanelValues: !0 }), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const M = String(s.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && s.disabled) return;
        M === "undo" ? js(-1) : M === "redo" ? js(1) : M === "clear" ? Um() : M === "add" || M === "add-image" ? Fm() : M === "add-or-look" && jm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const M = String(s.getAttribute("data-paint-tool") || "pen");
        h.paintTool = M, ti({ preservePanelValues: !0 }), sn[M] && (h.activeBrushPresetId = M), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ti({ preservePanelValues: !0 }), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const M = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Bm(M);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const M = Io.find((T) => T.id === s.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        h.paintColor = dn(M.color), wn(!0), on();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), je && !je.hidden ? wn(!0) : D(), on();
        return;
      }
    }
    const c = String(((k = s == null ? void 0 : s.getAttribute) == null ? void 0 : k.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(L instanceof HTMLVideoElement)) return;
      if (ei(), L.paused) {
        ee.mode = "playback", ee.pendingPlaybackResume = !1, ee.resumeAfterScrub = !1;
        const M = Number(P.videoTransport.duration || L.duration || 0), T = Number(L.currentTime || ee.editorTime || 0), $ = M > 0 && T >= M - 1e-3 ? 0 : Number(ee.editorTime || T || 0), te = Math.max(gn(), 0.04);
        ee.editorTime = $, Math.abs(T - $) > te ? (ee.seeking = !1, ee.pendingPlaybackResume = !0, Ms($)) : L.play().catch(() => {
        });
      } else
        L.pause(), ee.mode = "scrub", ee.resumeAfterScrub = !1, ee.pendingPlaybackResume = !1, ee.editorTime = Number(L.currentTime || 0), Qr();
      Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Gn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode
      }), ge({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(L instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const M = !L.muted;
      L.muted = M, !M && Number(L.volume || 0) <= 0 && (L.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Gn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: L.muted,
        volume: Number(L.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(L instanceof HTMLVideoElement)) return;
      const M = !P.videoTransport.loop;
      P.videoTransport.loop = M, L.loop = M, Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Gn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: M,
        muted: L.muted,
        volume: Number(L.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (c === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ue(), ge();
        return;
      }
      if (c === "aspect-set") {
        const M = at();
        if (!M) return;
        const T = String(s.getAttribute("data-aspect") || "1:1");
        Km(M, T), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Vs(), lt(), xt(), Ue(), ge();
        return;
      }
      if (c === "rotate-90") {
        const M = at();
        if (!M) return;
        Wm(M), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Vs(), lt(), xt(), Ue(), ge();
        return;
      }
      if (c === "bring-front") {
        Ym();
        return;
      }
      if (c === "send-back") {
        qm();
        return;
      }
      if (c === "duplicate") {
        Gm();
        return;
      }
      if (c === "replace-image") {
        zm();
        return;
      }
      if (c === "toggle-lock") {
        op();
        return;
      }
      if (c === "back-initial") {
        hp();
        return;
      }
      if (c === "toggle-visible") {
        dp();
        return;
      }
      if (c === "delete") {
        lu();
        return;
      }
    }
    if (c === "reset-view") {
      ms(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      h.showGrid = !h.showGrid, Ox(e == null ? void 0 : e.id, h.showGrid), Ws(), ge();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), pg();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const M = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = M, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = M ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), ku(), ge();
      return;
    }
    const d = r.target.closest("[data-paint-history-index]");
    if (!d) return;
    const m = Number(d.getAttribute("data-paint-history-index")), y = h.customPaintHistory[m];
    y && (h.customPaintColor = dn(y), h.paintColor = dn(y), on());
  }), q.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(L instanceof HTMLVideoElement)) return;
      ei();
      const m = W(Number(o.value || 0), 0, Number(P.videoTransport.duration || 0));
      ee.mode = "scrub", !ee.seeking && !L.paused && !L.ended && (ee.resumeAfterScrub = !0, L.pause()), ee.editorTime = m, wc(m), Tn({
        ready: !!L.getAttribute("src"),
        playing: !1,
        visible: Gn(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(Y.__panoFrameIdx || 0) > 0 && (J.backgroundDirty = !0, J.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), Ms(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(L instanceof HTMLVideoElement)) return;
      const m = W(Number(s.value || 0), 0, 1);
      L.volume = m, L.muted = m <= 1e-4, Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Gn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: L.muted,
        volume: m
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), y = dr(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[y] = m, on(), rg();
      return;
    }
    const d = r.target.closest("[data-paint-alpha-slider]");
    if (d) {
      const m = { ...h.customPaintColor, a: W(Number(d.value) / 100, 0, 1) };
      h.customPaintColor = dn(m), h.paintColor = dn(m), on();
    }
  }), q.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(L instanceof HTMLVideoElement)) return;
      ee.pendingPlaybackResume = !!ee.resumeAfterScrub, ee.resumeAfterScrub = !1, ee.pendingPlaybackResume || (ee.mode = "scrub"), ee.seeking || (ee.pendingPlaybackResume ? (ee.pendingPlaybackResume = !1, ee.mode = "playback", L.play().catch(() => {
      })) : (Qr(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), q.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), q.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), q.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), q.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !q.contains(o) || ye.target !== o && (ye.target = o, ye.timer && clearTimeout(ye.timer), ye.timer = window.setTimeout(() => {
      ye.target === o && fg(o);
    }, 220));
  }), q.addEventListener("pointerout", (r) => {
    var c, d;
    const o = r.target.closest("[data-tip]");
    !o || ye.target !== o || (r.relatedTarget instanceof Element ? (d = (c = r.relatedTarget).closest) == null ? void 0 : d.call(c, "[data-tip]") : null) === o || Wa();
  }), q.addEventListener("pointerdown", () => {
    Wa();
  });
  const dg = (r, o) => {
    var b;
    if (!bt) return;
    const s = bt.getBoundingClientRect(), c = W((r - s.left) / Math.max(1, s.width), 0, 1), d = 1 - W((o - s.top) / Math.max(1, s.height), 0, 1), m = xl(h.customPaintColor), y = { ..._l(m.h, c, d), a: Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    h.customPaintColor = dn(y), h.paintColor = dn(y), on();
  }, hg = (r) => {
    var m;
    if (!yt) return;
    const o = yt.getBoundingClientRect(), s = W((r - o.left) / Math.max(1, o.width), 0, 1), c = xl(h.customPaintColor), d = { ..._l(s, c.s, c.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = dn(d), h.paintColor = dn(d), on();
  }, wu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (m) => {
      m.pointerId === s && o(m);
    }, d = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  bt && (bt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), wu(r, (o) => dg(o.clientX, o.clientY));
  }), yt && (yt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), wu(r, (o) => hg(o.clientX));
  }), q.addEventListener("click", (r) => {
    var d;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (d = P.confirmDialog) == null ? void 0 : d.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const Su = () => {
    const r = !!h.fullscreen;
    qi(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Te.fullscreen_close : Te.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ya = (r) => {
    const o = !!r;
    h.fullscreen !== o && (h.fullscreen = o, q.classList.toggle("pano-modal-fullscreen", o), o ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Ws(), Su(), vt(), ge());
  }, Nu = () => document.fullscreenElement === F, pg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Ya(!h.fullscreen);
        return;
      }
      Nu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = F.requestFullscreen) == null ? void 0 : r.call(F));
    } catch {
      Ya(!h.fullscreen);
    }
  }, Mu = () => {
    document.fullscreenEnabled && Ya(Nu());
  };
  document.addEventListener("fullscreenchange", Mu), Su();
  const ku = () => {
    const r = !!h.outputPreviewExpanded;
    P.outputPreviewToggle.icon = r ? Te.fullscreen_close : Te.fullscreen, P.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  ku();
  const Ys = e.onExecuted, qs = e.onConnectionsChange;
  let Xs = null, Js = null, Zs = null;
  !i && t === "stickers" && (Zs = (r = "sync") => {
    Lc(r);
  }, e.__panoExternalStickerSync = Zs, Xs = function(...o) {
    var s;
    typeof Ys == "function" && Ys.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Xs, Js = function(...o) {
    var s;
    typeof qs == "function" && qs.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Js), i || Wf.set(String(e.id ?? "0"), () => Uc());
  let li = null;
  const ci = async () => li || (li = (async () => {
    var r, o, s, c, d, m, y, b, w, N, k;
    return Wf.delete(String(e.id ?? "0")), i || yn(), document.fullscreenElement === F && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Mu), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (d = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || d.call(c, !0, !0), (b = (y = (m = hn) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || b.call(y, !0, !0), Wa(), Om(), L instanceof HTMLVideoElement && L.pause(), Ge.forEach((M) => {
      try {
        M();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), (N = C == null ? void 0 : C.unmount) == null || N.call(C), (k = ie == null ? void 0 : ie.dispose) == null || k.call(ie), wr(!1), window.removeEventListener("keydown", Pu, !0), window.removeEventListener("keydown", Au, !0), window.removeEventListener("keydown", qa, !0), window.removeEventListener("keyup", qa, !0), window.removeEventListener("keydown", Cu, !0), window.removeEventListener("dragenter", bu, !0), window.removeEventListener("dragover", yu, !0), window.removeEventListener("dragleave", vu, !0), window.removeEventListener("drop", _u, !0), !i && t === "stickers" && (e.onExecuted === Xs && (e.onExecuted = Ys), e.onConnectionsChange === Js && (e.onConnectionsChange = qs), e.__panoExternalStickerSync === Zs && (e.__panoExternalStickerSync = null)), O.unmount(), E.remove(), Jm(), li = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), li = null, !1)), li), Pu = (r) => {
    var o, s, c, d;
    if (r.key === "Escape") {
      if (h.fullscreen && document.fullscreenElement === F) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (c = r.stopImmediatePropagation) == null || c.call(r), Ya(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (d = r.stopImmediatePropagation) == null || d.call(r), ci();
    }
  }, Au = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const y = r.target, b = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || y != null && y.isContentEditable || !at() || (lu(), r.preventDefault(), r.stopPropagation());
  }, qa = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    h.marqueeModifier !== o && (h.marqueeModifier = o, ft(h.pointerPos));
  }, Cu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, d = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: y } = iu();
    r.shiftKey && !y || !r.shiftKey && !m || (js(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Pu, !0), window.addEventListener("keydown", Au, !0), window.addEventListener("keydown", qa, !0), window.addEventListener("keyup", qa, !0), window.addEventListener("keydown", Cu, !0), F.addEventListener("pointerdown", (r) => {
    r.target === F && ci();
  }), Sp(), !i && t === "stickers" && Lc("open"), $m(), lt(), Ks(), on(), He(), Ps(), ei(), ru(), ft(h.pointerPos), ge(), J.rafId = requestAnimationFrame($s);
}
function Qf(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (g) => {
    var _, x;
    try {
      (_ = g.__panoDomRestore) == null || _.call(g);
    } catch {
    }
    try {
      (x = g.__panoLegacyRestore) == null || x.call(g);
    } catch {
    }
    g.__panoDomPreview = null, g.__panoLegacyPreviewHooked = !1, g.__panoPreviewHooked = !1, g.__panoPreviewAttached = !1, g.__panoPreviewMountKey = null;
  };
  function l(g) {
    var A;
    const _ = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === _) return;
    a(g), n === "PanoramaStickers" && Hx(g), _c(g), Bx(g, Jo);
    const S = _n(g, Jo);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (R) => {
        var z;
        const V = v ? v(R) : void 0;
        return (z = g.setDirtyCanvas) == null || z.call(g, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      const v = _n(g, "bg_color");
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), Bl(g, i, () => ha(g, "stickers"));
      {
        g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
        return;
      }
    }
    Bl(g, i, () => ha(g, "cutout")), Lv(g, {
      buttonText: i,
      onOpen: () => ha(g, "cutout")
    }), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const g = u ? u.apply(this, arguments) : void 0;
    return l(this), g;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const g = f ? f.apply(this, arguments) : void 0;
    return this.widgets && l(this), g;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const g = p ? p.apply(this, arguments) : void 0;
    return this.widgets && l(this), g;
  };
}
function rw(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function iw(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    _c(e), Bl(e, "Open Preview", () => ha(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Fv(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => ha(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
hn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Qf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Qf(e, t, "PanoramaCutout", "Open Cutout Editor"), Ho(n) && rw(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    _c(e), Ho(t) && iw(e);
  }
});
