import * as Ao from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
import { api as tn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ec(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const it = {}, Si = [], Bn = () => {
}, fd = () => !1, os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ss = (e) => e.startsWith("onUpdate:"), Xt = Object.assign, tc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pg = Object.prototype.hasOwnProperty, Qe = (e, t) => Pg.call(e, t), $e = Array.isArray, Ni = (e) => Ia(e) === "[object Map]", dd = (e) => Ia(e) === "[object Set]", Uu = (e) => Ia(e) === "[object Date]", Ve = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Gn = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", hd = (e) => (tt(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), pd = Object.prototype.toString, Ia = (e) => pd.call(e), Ag = (e) => Ia(e).slice(8, -1), md = (e) => Ia(e) === "[object Object]", nc = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sa = /* @__PURE__ */ ec(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Cg = /-\w/g, nn = ls(
  (e) => e.replace(Cg, (t) => t.slice(1).toUpperCase())
), Ig = /\B([A-Z])/g, Jr = ls(
  (e) => e.replace(Ig, "-$1").toLowerCase()
), cs = ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), al = ls(
  (e) => e ? `on${cs(e)}` : ""
), Vn = (e, t) => !Object.is(e, t), ol = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Tg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Bu;
const us = () => Bu || (Bu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Nt(i) ? Og(i) : kt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Nt(e) || tt(e))
    return e;
}
const Eg = /;(?![^(]*\))/g, Dg = /:([^]+)/, Rg = /\/\*[^]*?\*\//g;
function Og(e) {
  const t = {};
  return e.replace(Rg, "").split(Eg).forEach((n) => {
    if (n) {
      const i = n.split(Dg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if ($e(e))
    for (let n = 0; n < e.length; n++) {
      const i = mt(e[n]);
      i && (t += i + " ");
    }
  else if (tt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lg = /* @__PURE__ */ ec(Fg);
function bd(e) {
  return !!e || e === "";
}
function zg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = rc(e[i], t[i]);
  return n;
}
function rc(e, t) {
  if (e === t) return !0;
  let n = Uu(e), i = Uu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Gn(e), i = Gn(t), n || i)
    return e === t;
  if (n = $e(e), i = $e(t), n || i)
    return n && i ? zg(e, t) : !1;
  if (n = tt(e), i = tt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), m = t.hasOwnProperty(u);
      if (f && !m || !f && m || !rc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const yd = (e) => !!(e && e.__v_isRef === !0), ht = (e) => Nt(e) ? e : e == null ? "" : $e(e) || tt(e) && (e.toString === pd || !Ve(e.toString)) ? yd(e) ? ht(e.value) : JSON.stringify(e, vd, 2) : String(e), vd = (e, t) => yd(t) ? vd(e, t.value) : Ni(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[sl(i, l) + " =>"] = a, n),
    {}
  )
} : dd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => sl(n))
} : Gn(t) ? sl(t) : tt(t) && !$e(t) && !md(t) ? String(t) : t, sl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Gn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cn;
class $g {
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
function jg() {
  return cn;
}
let ot;
const ll = /* @__PURE__ */ new WeakSet();
class _d {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, cn && cn.active && cn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ll.has(this) && (ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gu(this), Sd(this);
    const t = ot, n = Cn;
    ot = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      Nd(this), ot = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        oc(t);
      this.deps = this.depsTail = void 0, Gu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Tl(this) && this.run();
  }
  get dirty() {
    return Tl(this);
  }
}
let xd = 0, la, ca;
function wd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ca, ca = e;
    return;
  }
  e.next = la, la = e;
}
function ic() {
  xd++;
}
function ac() {
  if (--xd > 0)
    return;
  if (ca) {
    let t = ca;
    for (ca = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; la; ) {
    let t = la;
    for (la = void 0; t; ) {
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
function Sd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Nd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), oc(i), Vg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Md(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Md(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === va) || (e.globalVersion = va, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ot, i = Cn;
  ot = e, Cn = !0;
  try {
    Sd(e);
    const a = e.fn(e._value);
    (t.version === 0 || Vn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = n, Cn = i, Nd(e), e.flags &= -3;
  }
}
function oc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      oc(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = !0;
const kd = [];
function or() {
  kd.push(Cn), Cn = !1;
}
function sr() {
  const e = kd.pop();
  Cn = e === void 0 ? !0 : e;
}
function Gu(e) {
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
let va = 0;
class Hg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Cn || ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ot)
      n = this.activeLink = new Hg(ot, this), ot.deps ? (n.prevDep = ot.depsTail, ot.depsTail.nextDep = n, ot.depsTail = n) : ot.deps = ot.depsTail = n, Pd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ot.depsTail, n.nextDep = void 0, ot.depsTail.nextDep = n, ot.depsTail = n, ot.deps === n && (ot.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, va++, this.notify(t);
  }
  notify(t) {
    ic();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ac();
    }
  }
}
function Pd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Pd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const El = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ Symbol(
  ""
), Dl = /* @__PURE__ */ Symbol(
  ""
), _a = /* @__PURE__ */ Symbol(
  ""
);
function Wt(e, t, n) {
  if (Cn && ot) {
    let i = El.get(e);
    i || El.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new sc()), a.map = i, a.key = n), a.track();
  }
}
function rr(e, t, n, i, a, l) {
  const u = El.get(e);
  if (!u) {
    va++;
    return;
  }
  const f = (m) => {
    m && m.trigger();
  };
  if (ic(), t === "clear")
    u.forEach(f);
  else {
    const m = $e(e), b = m && nc(n);
    if (m && n === "length") {
      const _ = Number(i);
      u.forEach((x, S) => {
        (S === "length" || S === _a || !Gn(S) && S >= _) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), b && f(u.get(_a)), t) {
        case "add":
          m ? b && f(u.get("length")) : (f(u.get($r)), Ni(e) && f(u.get(Dl)));
          break;
        case "delete":
          m || (f(u.get($r)), Ni(e) && f(u.get(Dl)));
          break;
        case "set":
          Ni(e) && f(u.get($r));
          break;
      }
  }
  ac();
}
function pi(e) {
  const t = /* @__PURE__ */ Ze(e);
  return t === e ? t : (Wt(t, "iterate", _a), /* @__PURE__ */ xn(e) ? t : t.map(In));
}
function fs(e) {
  return Wt(e = /* @__PURE__ */ Ze(e), "iterate", _a), e;
}
function zn(e, t) {
  return /* @__PURE__ */ lr(e) ? Ti(/* @__PURE__ */ jr(e) ? In(t) : t) : In(t);
}
const Ug = {
  __proto__: null,
  [Symbol.iterator]() {
    return cl(this, Symbol.iterator, (e) => zn(this, e));
  },
  concat(...e) {
    return pi(this).concat(
      ...e.map((t) => $e(t) ? pi(t) : t)
    );
  },
  entries() {
    return cl(this, "entries", (e) => (e[1] = zn(this, e[1]), e));
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
      (n) => n.map((i) => zn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Xn(
      this,
      "find",
      e,
      t,
      (n) => zn(this, n),
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
      (n) => zn(this, n),
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
    return ul(this, "includes", e);
  },
  indexOf(...e) {
    return ul(this, "indexOf", e);
  },
  join(e) {
    return pi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ul(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wi(this, "pop");
  },
  push(...e) {
    return Wi(this, "push", e);
  },
  reduce(e, ...t) {
    return Ku(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ku(this, "reduceRight", e, t);
  },
  shift() {
    return Wi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wi(this, "splice", e);
  },
  toReversed() {
    return pi(this).toReversed();
  },
  toSorted(e) {
    return pi(this).toSorted(e);
  },
  toSpliced(...e) {
    return pi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wi(this, "unshift", e);
  },
  values() {
    return cl(this, "values", (e) => zn(this, e));
  }
};
function cl(e, t, n) {
  const i = fs(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ xn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const Bg = Array.prototype;
function Xn(e, t, n, i, a, l) {
  const u = fs(e), f = u !== e && !/* @__PURE__ */ xn(e), m = u[t];
  if (m !== Bg[t]) {
    const x = m.apply(e, l);
    return f ? In(x) : x;
  }
  let b = n;
  u !== e && (f ? b = function(x, S) {
    return n.call(this, zn(e, x), S, e);
  } : n.length > 2 && (b = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const _ = m.call(u, b, i);
  return f && a ? a(_) : _;
}
function Ku(e, t, n, i) {
  const a = fs(e), l = a !== e && !/* @__PURE__ */ xn(e);
  let u = n, f = !1;
  a !== e && (l ? (f = i.length === 0, u = function(b, _, x) {
    return f && (f = !1, b = zn(e, b)), n.call(this, b, zn(e, _), x, e);
  }) : n.length > 3 && (u = function(b, _, x) {
    return n.call(this, b, _, x, e);
  }));
  const m = a[t](u, ...i);
  return f ? zn(e, m) : m;
}
function ul(e, t, n) {
  const i = /* @__PURE__ */ Ze(e);
  Wt(i, "iterate", _a);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ uc(n[0]) ? (n[0] = /* @__PURE__ */ Ze(n[0]), i[t](...n)) : a;
}
function Wi(e, t, n = []) {
  or(), ic();
  const i = (/* @__PURE__ */ Ze(e))[t].apply(e, n);
  return ac(), sr(), i;
}
const Gg = /* @__PURE__ */ ec("__proto__,__v_isRef,__isVue"), Ad = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Gn)
);
function Kg(e) {
  Gn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ze(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class Cd {
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
      return i === (a ? l ? n0 : Dd : l ? Ed : Td).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = $e(t);
    if (!a) {
      let m;
      if (u && (m = Ug[n]))
        return m;
      if (n === "hasOwnProperty")
        return Kg;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qt(t) ? t : i
    );
    if ((Gn(n) ? Ad.has(n) : Gg(n)) || (a || Wt(t, "get", n), l))
      return f;
    if (/* @__PURE__ */ qt(f)) {
      const m = u && nc(n) ? f : f.value;
      return a && tt(m) ? /* @__PURE__ */ Ol(m) : m;
    }
    return tt(f) ? a ? /* @__PURE__ */ Ol(f) : /* @__PURE__ */ ds(f) : f;
  }
}
class Id extends Cd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const u = $e(t) && nc(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ lr(l);
      if (!/* @__PURE__ */ xn(i) && !/* @__PURE__ */ lr(i) && (l = /* @__PURE__ */ Ze(l), i = /* @__PURE__ */ Ze(i)), !u && /* @__PURE__ */ qt(l) && !/* @__PURE__ */ qt(i))
        return b || (l.value = i), !0;
    }
    const f = u ? Number(n) < t.length : Qe(t, n), m = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ qt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ze(a) && (f ? Vn(i, l) && rr(t, "set", n, i) : rr(t, "add", n, i)), m;
  }
  deleteProperty(t, n) {
    const i = Qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && rr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Gn(n) || !Ad.has(n)) && Wt(t, "has", n), i;
  }
  ownKeys(t) {
    return Wt(
      t,
      "iterate",
      $e(t) ? "length" : $r
    ), Reflect.ownKeys(t);
  }
}
class Wg extends Cd {
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
const Yg = /* @__PURE__ */ new Id(), qg = /* @__PURE__ */ new Wg(), Xg = /* @__PURE__ */ new Id(!0);
const Rl = (e) => e, io = (e) => Reflect.getPrototypeOf(e);
function Jg(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ Ze(a), u = Ni(l), f = e === "entries" || e === Symbol.iterator && u, m = e === "keys" && u, b = a[e](...i), _ = n ? Rl : t ? Ti : In;
    return !t && Wt(
      l,
      "iterate",
      m ? Dl : $r
    ), Xt(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = b.next();
          return S ? { value: x, done: S } : {
            value: f ? [_(x[0]), _(x[1])] : _(x),
            done: S
          };
        }
      }
    );
  };
}
function ao(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zg(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Ze(l), f = /* @__PURE__ */ Ze(a);
      e || (Vn(a, f) && Wt(u, "get", a), Wt(u, "get", f));
      const { has: m } = io(u), b = t ? Rl : e ? Ti : In;
      if (m.call(u, a))
        return b(l.get(a));
      if (m.call(u, f))
        return b(l.get(f));
      l !== u && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Wt(/* @__PURE__ */ Ze(a), "iterate", $r), a.size;
    },
    has(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ Ze(l), f = /* @__PURE__ */ Ze(a);
      return e || (Vn(a, f) && Wt(u, "has", a), Wt(u, "has", f)), a === f ? l.has(a) : l.has(a) || l.has(f);
    },
    forEach(a, l) {
      const u = this, f = u.__v_raw, m = /* @__PURE__ */ Ze(f), b = t ? Rl : e ? Ti : In;
      return !e && Wt(m, "iterate", $r), f.forEach((_, x) => a.call(l, b(_), b(x), u));
    }
  };
  return Xt(
    n,
    e ? {
      add: ao("add"),
      set: ao("set"),
      delete: ao("delete"),
      clear: ao("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ Ze(this), u = io(l), f = /* @__PURE__ */ Ze(a), m = !t && !/* @__PURE__ */ xn(a) && !/* @__PURE__ */ lr(a) ? f : a;
        return u.has.call(l, m) || Vn(a, m) && u.has.call(l, a) || Vn(f, m) && u.has.call(l, f) || (l.add(m), rr(l, "add", m, m)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ xn(l) && !/* @__PURE__ */ lr(l) && (l = /* @__PURE__ */ Ze(l));
        const u = /* @__PURE__ */ Ze(this), { has: f, get: m } = io(u);
        let b = f.call(u, a);
        b || (a = /* @__PURE__ */ Ze(a), b = f.call(u, a));
        const _ = m.call(u, a);
        return u.set(a, l), b ? Vn(l, _) && rr(u, "set", a, l) : rr(u, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ Ze(this), { has: u, get: f } = io(l);
        let m = u.call(l, a);
        m || (a = /* @__PURE__ */ Ze(a), m = u.call(l, a)), f && f.call(l, a);
        const b = l.delete(a);
        return m && rr(l, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ Ze(this), l = a.size !== 0, u = a.clear();
        return l && rr(
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
    n[a] = Jg(a, e, t);
  }), n;
}
function lc(e, t) {
  const n = Zg(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Qe(n, a) && a in i ? n : i,
    a,
    l
  );
}
const Qg = {
  get: /* @__PURE__ */ lc(!1, !1)
}, e0 = {
  get: /* @__PURE__ */ lc(!1, !0)
}, t0 = {
  get: /* @__PURE__ */ lc(!0, !1)
};
const Td = /* @__PURE__ */ new WeakMap(), Ed = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), n0 = /* @__PURE__ */ new WeakMap();
function r0(e) {
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
function i0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : r0(Ag(e));
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  return /* @__PURE__ */ lr(e) ? e : cc(
    e,
    !1,
    Yg,
    Qg,
    Td
  );
}
// @__NO_SIDE_EFFECTS__
function a0(e) {
  return cc(
    e,
    !1,
    Xg,
    e0,
    Ed
  );
}
// @__NO_SIDE_EFFECTS__
function Ol(e) {
  return cc(
    e,
    !0,
    qg,
    t0,
    Dd
  );
}
function cc(e, t, n, i, a) {
  if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = i0(e);
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
function jr(e) {
  return /* @__PURE__ */ lr(e) ? /* @__PURE__ */ jr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function uc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ze(t) : e;
}
function o0(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && gd(e, "__v_skip", !0), e;
}
const In = (e) => tt(e) ? /* @__PURE__ */ ds(e) : e, Ti = (e) => tt(e) ? /* @__PURE__ */ Ol(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function $o(e) {
  return s0(e, !1);
}
function s0(e, t) {
  return /* @__PURE__ */ qt(e) ? e : new l0(e, t);
}
class l0 {
  constructor(t, n) {
    this.dep = new sc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ze(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ xn(t) || /* @__PURE__ */ lr(t);
    t = i ? t : /* @__PURE__ */ Ze(t), Vn(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function Lr(e) {
  return /* @__PURE__ */ qt(e) ? e.value : e;
}
const c0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Lr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ qt(a) && !/* @__PURE__ */ qt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Rd(e) {
  return /* @__PURE__ */ jr(e) ? e : new Proxy(e, c0);
}
class u0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new sc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = va - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return wd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Md(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function f0(e, t, n = !1) {
  let i, a;
  return Ve(e) ? i = e : (i = e.get, a = e.set), new u0(i, a, n);
}
const oo = {}, jo = /* @__PURE__ */ new WeakMap();
let Or;
function d0(e, t = !1, n = Or) {
  if (n) {
    let i = jo.get(n);
    i || jo.set(n, i = []), i.push(e);
  }
}
function h0(e, t, n = it) {
  const { immediate: i, deep: a, once: l, scheduler: u, augmentJob: f, call: m } = n, b = (E) => a ? E : /* @__PURE__ */ xn(E) || a === !1 || a === 0 ? ir(E, 1) : ir(E);
  let _, x, S, A, v = !1, O = !1;
  if (/* @__PURE__ */ qt(e) ? (x = () => e.value, v = /* @__PURE__ */ xn(e)) : /* @__PURE__ */ jr(e) ? (x = () => b(e), v = !0) : $e(e) ? (O = !0, v = e.some((E) => /* @__PURE__ */ jr(E) || /* @__PURE__ */ xn(E)), x = () => e.map((E) => {
    if (/* @__PURE__ */ qt(E))
      return E.value;
    if (/* @__PURE__ */ jr(E))
      return b(E);
    if (Ve(E))
      return m ? m(E, 2) : E();
  })) : Ve(e) ? t ? x = m ? () => m(e, 2) : e : x = () => {
    if (S) {
      or();
      try {
        S();
      } finally {
        sr();
      }
    }
    const E = Or;
    Or = _;
    try {
      return m ? m(e, 3, [A]) : e(A);
    } finally {
      Or = E;
    }
  } : x = Bn, t && a) {
    const E = x, F = a === !0 ? 1 / 0 : a;
    x = () => ir(E(), F);
  }
  const V = jg(), z = () => {
    _.stop(), V && V.active && tc(V.effects, _);
  };
  if (l && t) {
    const E = t;
    t = (...F) => {
      E(...F), z();
    };
  }
  let P = O ? new Array(e.length).fill(oo) : oo;
  const D = (E) => {
    if (!(!(_.flags & 1) || !_.dirty && !E))
      if (t) {
        const F = _.run();
        if (a || v || (O ? F.some((Y, j) => Vn(Y, P[j])) : Vn(F, P))) {
          S && S();
          const Y = Or;
          Or = _;
          try {
            const j = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === oo ? void 0 : O && P[0] === oo ? [] : P,
              A
            ];
            P = F, m ? m(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            Or = Y;
          }
        }
      } else
        _.run();
  };
  return f && f(D), _ = new _d(x), _.scheduler = u ? () => u(D, !1) : D, A = (E) => d0(E, !1, _), S = _.onStop = () => {
    const E = jo.get(_);
    if (E) {
      if (m)
        m(E, 4);
      else
        for (const F of E) F();
      jo.delete(_);
    }
  }, t ? i ? D(!0) : P = _.run() : u ? u(D.bind(null, !0), !0) : _.run(), z.pause = _.pause.bind(_), z.resume = _.resume.bind(_), z.stop = z, z;
}
function ir(e, t = 1 / 0, n) {
  if (t <= 0 || !tt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qt(e))
    ir(e.value, t, n);
  else if ($e(e))
    for (let i = 0; i < e.length; i++)
      ir(e[i], t, n);
  else if (dd(e) || Ni(e))
    e.forEach((i) => {
      ir(i, t, n);
    });
  else if (md(e)) {
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
function Ta(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    hs(a, t, n);
  }
}
function Kn(e, t, n, i) {
  if (Ve(e)) {
    const a = Ta(e, t, n, i);
    return a && hd(a) && a.catch((l) => {
      hs(l, t, n);
    }), a;
  }
  if ($e(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Kn(e[l], t, n, i));
    return a;
  }
}
function hs(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: u } = t && t.appContext.config || it;
  if (t) {
    let f = t.parent;
    const m = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let x = 0; x < _.length; x++)
          if (_[x](e, m, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      or(), Ta(l, null, 10, [
        e,
        m,
        b
      ]), sr();
      return;
    }
  }
  p0(e, n, a, i, u);
}
function p0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const en = [];
let Ln = -1;
const Mi = [];
let yr = null, yi = 0;
const Od = /* @__PURE__ */ Promise.resolve();
let Vo = null;
function fc(e) {
  const t = Vo || Od;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function m0(e) {
  let t = Ln + 1, n = en.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = en[i], l = xa(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function dc(e) {
  if (!(e.flags & 1)) {
    const t = xa(e), n = en[en.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xa(n) ? en.push(e) : en.splice(m0(t), 0, e), e.flags |= 1, Fd();
  }
}
function Fd() {
  Vo || (Vo = Od.then(zd));
}
function g0(e) {
  $e(e) ? Mi.push(...e) : yr && e.id === -1 ? yr.splice(yi + 1, 0, e) : e.flags & 1 || (Mi.push(e), e.flags |= 1), Fd();
}
function Wu(e, t, n = Ln + 1) {
  for (; n < en.length; n++) {
    const i = en[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      en.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ld(e) {
  if (Mi.length) {
    const t = [...new Set(Mi)].sort(
      (n, i) => xa(n) - xa(i)
    );
    if (Mi.length = 0, yr) {
      yr.push(...t);
      return;
    }
    for (yr = t, yi = 0; yi < yr.length; yi++) {
      const n = yr[yi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    yr = null, yi = 0;
  }
}
const xa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zd(e) {
  try {
    for (Ln = 0; Ln < en.length; Ln++) {
      const t = en[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ta(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < en.length; Ln++) {
      const t = en[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, en.length = 0, Ld(), Vo = null, (en.length || Mi.length) && zd();
  }
}
let mn = null, $d = null;
function Ho(e) {
  const t = mn;
  return mn = e, $d = e && e.type.__scopeId || null, t;
}
function jd(e, t = mn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && of(-1);
    const l = Ho(t);
    let u;
    try {
      u = e(...a);
    } finally {
      Ho(l), i._d && of(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function hc(e, t) {
  if (mn === null)
    return e;
  const n = bs(mn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, u, f, m = it] = t[a];
    l && (Ve(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && ir(u), i.push({
      dir: l,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: m
    }));
  }
  return e;
}
function Ir(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    l && (f.oldValue = l[u].value);
    let m = f.dir[i];
    m && (or(), Kn(m, n, 8, [
      e.el,
      f,
      e,
      t
    ]), sr());
  }
}
function b0(e, t) {
  if (Yt) {
    let n = Yt.provides;
    const i = Yt.parent && Yt.parent.provides;
    i === n && (n = Yt.provides = Object.create(i)), n[e] = t;
  }
}
function Co(e, t, n = !1) {
  const i = gb();
  if (i || Pi) {
    let a = Pi ? Pi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ve(t) ? t.call(i && i.proxy) : t;
  }
}
const y0 = /* @__PURE__ */ Symbol.for("v-scx"), v0 = () => Co(y0);
function ki(e, t, n) {
  return Vd(e, t, n);
}
function Vd(e, t, n = it) {
  const { immediate: i, deep: a, flush: l, once: u } = n, f = Xt({}, n), m = t && i || !t && l !== "post";
  let b;
  if (Sa) {
    if (l === "sync") {
      const A = v0();
      b = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!m) {
      const A = () => {
      };
      return A.stop = Bn, A.resume = Bn, A.pause = Bn, A;
    }
  }
  const _ = Yt;
  f.call = (A, v, O) => Kn(A, _, v, O);
  let x = !1;
  l === "post" ? f.scheduler = (A) => {
    ln(A, _ && _.suspense);
  } : l !== "sync" && (x = !0, f.scheduler = (A, v) => {
    v ? A() : dc(A);
  }), f.augmentJob = (A) => {
    t && (A.flags |= 4), x && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = h0(e, t, f);
  return Sa && (b ? b.push(S) : m && S()), S;
}
function _0(e, t, n) {
  const i = this.proxy, a = Nt(e) ? e.includes(".") ? Hd(i, e) : () => i[e] : e.bind(i, i);
  let l;
  Ve(t) ? l = t : (l = t.handler, n = t);
  const u = Ea(this), f = Vd(a, l.bind(i), n);
  return u(), f;
}
function Hd(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const x0 = /* @__PURE__ */ Symbol("_vte"), w0 = (e) => e.__isTeleport, S0 = /* @__PURE__ */ Symbol("_leaveCb");
function pc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ud(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Yu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Uo = /* @__PURE__ */ new WeakMap();
function ua(e, t, n, i, a = !1) {
  if ($e(e)) {
    e.forEach(
      (O, V) => ua(
        O,
        t && ($e(t) ? t[V] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (fa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ua(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? bs(i.component) : i.el, u = a ? null : l, { i: f, r: m } = e, b = t && t.r, _ = f.refs === it ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ Ze(x), A = x === it ? fd : (O) => Yu(_, O) ? !1 : Qe(S, O), v = (O, V) => !(V && Yu(_, V));
  if (b != null && b !== m) {
    if (qu(t), Nt(b))
      _[b] = null, A(b) && (x[b] = null);
    else if (/* @__PURE__ */ qt(b)) {
      const O = t;
      v(b, O.k) && (b.value = null), O.k && (_[O.k] = null);
    }
  }
  if (Ve(m))
    Ta(m, f, 12, [u, _]);
  else {
    const O = Nt(m), V = /* @__PURE__ */ qt(m);
    if (O || V) {
      const z = () => {
        if (e.f) {
          const P = O ? A(m) ? x[m] : _[m] : v() || !e.k ? m.value : _[e.k];
          if (a)
            $e(P) && tc(P, l);
          else if ($e(P))
            P.includes(l) || P.push(l);
          else if (O)
            _[m] = [l], A(m) && (x[m] = _[m]);
          else {
            const D = [l];
            v(m, e.k) && (m.value = D), e.k && (_[e.k] = D);
          }
        } else O ? (_[m] = u, A(m) && (x[m] = u)) : V && (v(m, e.k) && (m.value = u), e.k && (_[e.k] = u));
      };
      if (u) {
        const P = () => {
          z(), Uo.delete(e);
        };
        P.id = -1, Uo.set(e, P), ln(P, n);
      } else
        qu(e), z();
    }
  }
}
function qu(e) {
  const t = Uo.get(e);
  t && (t.flags |= 8, Uo.delete(e));
}
us().requestIdleCallback;
us().cancelIdleCallback;
const fa = (e) => !!e.type.__asyncLoader, Bd = (e) => e.type.__isKeepAlive;
function N0(e, t) {
  Gd(e, "a", t);
}
function M0(e, t) {
  Gd(e, "da", t);
}
function Gd(e, t, n = Yt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ps(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Bd(a.parent.vnode) && k0(i, t, n, a), a = a.parent;
  }
}
function k0(e, t, n, i) {
  const a = ps(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Wd(() => {
    tc(i[t], a);
  }, n);
}
function ps(e, t, n = Yt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...u) => {
      or();
      const f = Ea(n), m = Kn(t, n, e, u);
      return f(), sr(), m;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const cr = (e) => (t, n = Yt) => {
  (!Sa || e === "sp") && ps(e, (...i) => t(...i), n);
}, P0 = cr("bm"), Kd = cr("m"), A0 = cr(
  "bu"
), C0 = cr("u"), mc = cr(
  "bum"
), Wd = cr("um"), I0 = cr(
  "sp"
), T0 = cr("rtg"), E0 = cr("rtc");
function D0(e, t = Yt) {
  ps("ec", e, t);
}
const R0 = "components", Yd = /* @__PURE__ */ Symbol.for("v-ndc");
function O0(e) {
  return Nt(e) ? F0(R0, e, !1) || e : e || Yd;
}
function F0(e, t, n = !0, i = !1) {
  const a = mn || Yt;
  if (a) {
    const l = a.type;
    {
      const f = xb(
        l,
        !1
      );
      if (f && (f === t || f === nn(t) || f === cs(nn(t))))
        return l;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Xu(a[e] || l[e], t) || // global registration
      Xu(a.appContext[e], t)
    );
    return !u && i ? l : u;
  }
}
function Xu(e, t) {
  return e && (e[t] || e[nn(t)] || e[cs(nn(t))]);
}
function jt(e, t, n, i) {
  let a;
  const l = n, u = $e(e);
  if (u || Nt(e)) {
    const f = u && /* @__PURE__ */ jr(e);
    let m = !1, b = !1;
    f && (m = !/* @__PURE__ */ xn(e), b = /* @__PURE__ */ lr(e), e = fs(e)), a = new Array(e.length);
    for (let _ = 0, x = e.length; _ < x; _++)
      a[_] = t(
        m ? b ? Ti(In(e[_])) : In(e[_]) : e[_],
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
        (f, m) => t(f, m, void 0, l)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let m = 0, b = f.length; m < b; m++) {
        const _ = f[m];
        a[m] = t(e[_], _, m, l);
      }
    }
  else
    a = [];
  return a;
}
const Fl = (e) => e ? mh(e) ? bs(e) : Fl(e.parent) : null, da = (
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
    $parent: (e) => Fl(e.parent),
    $root: (e) => Fl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      dc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fc.bind(e.proxy)),
    $watch: (e) => _0.bind(e)
  })
), fl = (e, t) => e !== it && !e.__isScriptSetup && Qe(e, t), L0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: u, type: f, appContext: m } = e;
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
        if (fl(i, t))
          return u[t] = 1, i[t];
        if (a !== it && Qe(a, t))
          return u[t] = 2, a[t];
        if (Qe(l, t))
          return u[t] = 3, l[t];
        if (n !== it && Qe(n, t))
          return u[t] = 4, n[t];
        Ll && (u[t] = 0);
      }
    }
    const b = da[t];
    let _, x;
    if (b)
      return t === "$attrs" && Wt(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== it && Qe(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = m.config.globalProperties, Qe(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return fl(a, t) ? (a[t] = n, !0) : i !== it && Qe(i, t) ? (i[t] = n, !0) : Qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: u }
  }, f) {
    let m;
    return !!(n[f] || e !== it && f[0] !== "$" && Qe(e, f) || fl(t, f) || Qe(l, f) || Qe(i, f) || Qe(da, f) || Qe(a.config.globalProperties, f) || (m = u.__cssModules) && m[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ju(e) {
  return $e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ll = !0;
function z0(e) {
  const t = Xd(e), n = e.proxy, i = e.ctx;
  Ll = !1, t.beforeCreate && Zu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: u,
    watch: f,
    provide: m,
    inject: b,
    // lifecycle
    created: _,
    beforeMount: x,
    mounted: S,
    beforeUpdate: A,
    updated: v,
    activated: O,
    deactivated: V,
    beforeDestroy: z,
    beforeUnmount: P,
    destroyed: D,
    unmounted: E,
    render: F,
    renderTracked: Y,
    renderTriggered: j,
    errorCaptured: Z,
    serverPrefetch: fe,
    // public API
    expose: U,
    inheritAttrs: pe,
    // assets
    components: xe,
    directives: I,
    filters: we
  } = t;
  if (b && $0(b, i, null), u)
    for (const L in u) {
      const Q = u[L];
      Ve(Q) && (i[L] = Q.bind(n));
    }
  if (a) {
    const L = a.call(n, n);
    tt(L) && (e.data = /* @__PURE__ */ ds(L));
  }
  if (Ll = !0, l)
    for (const L in l) {
      const Q = l[L], _e = Ve(Q) ? Q.bind(n, n) : Ve(Q.get) ? Q.get.bind(n, n) : Bn, De = !Ve(Q) && Ve(Q.set) ? Q.set.bind(n) : Bn, Re = bt({
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
      qd(f[L], i, n, L);
  if (m) {
    const L = Ve(m) ? m.call(n) : m;
    Reflect.ownKeys(L).forEach((Q) => {
      b0(Q, L[Q]);
    });
  }
  _ && Zu(_, e, "c");
  function he(L, Q) {
    $e(Q) ? Q.forEach((_e) => L(_e.bind(n))) : Q && L(Q.bind(n));
  }
  if (he(P0, x), he(Kd, S), he(A0, A), he(C0, v), he(N0, O), he(M0, V), he(D0, Z), he(E0, Y), he(T0, j), he(mc, P), he(Wd, E), he(I0, fe), $e(U))
    if (U.length) {
      const L = e.exposed || (e.exposed = {});
      U.forEach((Q) => {
        Object.defineProperty(L, Q, {
          get: () => n[Q],
          set: (_e) => n[Q] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Bn && (e.render = F), pe != null && (e.inheritAttrs = pe), xe && (e.components = xe), I && (e.directives = I), fe && Ud(e);
}
function $0(e, t, n = Bn) {
  $e(e) && (e = zl(e));
  for (const i in e) {
    const a = e[i];
    let l;
    tt(a) ? "default" in a ? l = Co(
      a.from || i,
      a.default,
      !0
    ) : l = Co(a.from || i) : l = Co(a), /* @__PURE__ */ qt(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (u) => l.value = u
    }) : t[i] = l;
  }
}
function Zu(e, t, n) {
  Kn(
    $e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qd(e, t, n, i) {
  let a = i.includes(".") ? Hd(n, i) : () => n[i];
  if (Nt(e)) {
    const l = t[e];
    Ve(l) && ki(a, l);
  } else if (Ve(e))
    ki(a, e.bind(n));
  else if (tt(e))
    if ($e(e))
      e.forEach((l) => qd(l, t, n, i));
    else {
      const l = Ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ve(l) && ki(a, l, e);
    }
}
function Xd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = l.get(t);
  let m;
  return f ? m = f : !a.length && !n && !i ? m = t : (m = {}, a.length && a.forEach(
    (b) => Bo(m, b, u, !0)
  ), Bo(m, t, u)), tt(t) && l.set(t, m), m;
}
function Bo(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && Bo(e, l, n, !0), a && a.forEach(
    (u) => Bo(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const f = j0[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const j0 = {
  data: Qu,
  props: ef,
  emits: ef,
  // objects
  methods: na,
  computed: na,
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
  components: na,
  directives: na,
  // watch
  watch: H0,
  // provide / inject
  provide: Qu,
  inject: V0
};
function Qu(e, t) {
  return t ? e ? function() {
    return Xt(
      Ve(e) ? e.call(this, this) : e,
      Ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function V0(e, t) {
  return na(zl(e), zl(t));
}
function zl(e) {
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
function na(e, t) {
  return e ? Xt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ef(e, t) {
  return e ? $e(e) && $e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Xt(
    /* @__PURE__ */ Object.create(null),
    Ju(e),
    Ju(t ?? {})
  ) : t;
}
function H0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Qt(e[i], t[i]);
  return n;
}
function Jd() {
  return {
    app: null,
    config: {
      isNativeTag: fd,
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
let U0 = 0;
function B0(e, t) {
  return function(i, a = null) {
    Ve(i) || (i = Xt({}, i)), a != null && !tt(a) && (a = null);
    const l = Jd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let m = !1;
    const b = l.app = {
      _uid: U0++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: Sb,
      get config() {
        return l.config;
      },
      set config(_) {
      },
      use(_, ...x) {
        return u.has(_) || (_ && Ve(_.install) ? (u.add(_), _.install(b, ...x)) : Ve(_) && (u.add(_), _(b, ...x))), b;
      },
      mixin(_) {
        return l.mixins.includes(_) || l.mixins.push(_), b;
      },
      component(_, x) {
        return x ? (l.components[_] = x, b) : l.components[_];
      },
      directive(_, x) {
        return x ? (l.directives[_] = x, b) : l.directives[_];
      },
      mount(_, x, S) {
        if (!m) {
          const A = b._ceVNode || Xe(i, a);
          return A.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), m = !0, b._container = _, _.__vue_app__ = b, bs(A.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        m && (Kn(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(_, x) {
        return l.provides[_] = x, b;
      },
      runWithContext(_) {
        const x = Pi;
        Pi = b;
        try {
          return _();
        } finally {
          Pi = x;
        }
      }
    };
    return b;
  };
}
let Pi = null;
const G0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nn(t)}Modifiers`] || e[`${Jr(t)}Modifiers`];
function K0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || it;
  let a = n;
  const l = t.startsWith("update:"), u = l && G0(i, t.slice(7));
  u && (u.trim && (a = n.map((_) => Nt(_) ? _.trim() : _)), u.number && (a = n.map(Tg)));
  let f, m = i[f = al(t)] || // also try camelCase event handler (#2249)
  i[f = al(nn(t))];
  !m && l && (m = i[f = al(Jr(t))]), m && Kn(
    m,
    e,
    6,
    a
  );
  const b = i[f + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Kn(
      b,
      e,
      6,
      a
    );
  }
}
const W0 = /* @__PURE__ */ new WeakMap();
function Zd(e, t, n = !1) {
  const i = n ? W0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let u = {}, f = !1;
  if (!Ve(e)) {
    const m = (b) => {
      const _ = Zd(b, t, !0);
      _ && (f = !0, Xt(u, _));
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !f ? (tt(e) && i.set(e, null), null) : ($e(l) ? l.forEach((m) => u[m] = null) : Xt(u, l), tt(e) && i.set(e, u), u);
}
function ms(e, t) {
  return !e || !os(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, Jr(t)) || Qe(e, t));
}
function tf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: u,
    attrs: f,
    emit: m,
    render: b,
    renderCache: _,
    props: x,
    data: S,
    setupState: A,
    ctx: v,
    inheritAttrs: O
  } = e, V = Ho(e);
  let z, P;
  try {
    if (n.shapeFlag & 4) {
      const E = a || i, F = E;
      z = $n(
        b.call(
          F,
          E,
          _,
          x,
          A,
          S,
          v
        )
      ), P = f;
    } else {
      const E = t;
      z = $n(
        E.length > 1 ? E(
          x,
          { attrs: f, slots: u, emit: m }
        ) : E(
          x,
          null
        )
      ), P = t.props ? f : Y0(f);
    }
  } catch (E) {
    ha.length = 0, hs(E, e, 1), z = Xe(Sr);
  }
  let D = z;
  if (P && O !== !1) {
    const E = Object.keys(P), { shapeFlag: F } = D;
    E.length && F & 7 && (l && E.some(ss) && (P = q0(
      P,
      l
    )), D = Ei(D, P, !1, !0));
  }
  return n.dirs && (D = Ei(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && pc(D, n.transition), z = D, Ho(V), z;
}
const Y0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, q0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!ss(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function X0(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: u, children: f, patchFlag: m } = t, b = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return i ? nf(i, u, b) : !!u;
    if (m & 8) {
      const _ = t.dynamicProps;
      for (let x = 0; x < _.length; x++) {
        const S = _[x];
        if (Qd(u, i, S) && !ms(b, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? nf(i, u, b) : !0 : !!u;
  return !1;
}
function nf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (Qd(t, e, l) && !ms(n, l))
      return !0;
  }
  return !1;
}
function Qd(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && tt(i) && tt(a) ? !rc(i, a) : i !== a;
}
function J0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const eh = {}, th = () => Object.create(eh), nh = (e) => Object.getPrototypeOf(e) === eh;
function Z0(e, t, n, i = !1) {
  const a = {}, l = th();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rh(e, t, a, l);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ a0(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function Q0(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ Ze(a), [m] = e.propsOptions;
  let b = !1;
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
        if (ms(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (m)
          if (Qe(l, S))
            A !== l[S] && (l[S] = A, b = !0);
          else {
            const v = nn(S);
            a[v] = $l(
              m,
              f,
              v,
              A,
              e,
              !1
            );
          }
        else
          A !== l[S] && (l[S] = A, b = !0);
      }
    }
  } else {
    rh(e, t, a, l) && (b = !0);
    let _;
    for (const x in f)
      (!t || // for camelCase
      !Qe(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Jr(x)) === x || !Qe(t, _))) && (m ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[x] = $l(
        m,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (l !== f)
      for (const x in l)
        (!t || !Qe(t, x)) && (delete l[x], b = !0);
  }
  b && rr(e.attrs, "set", "");
}
function rh(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let m in t) {
      if (sa(m))
        continue;
      const b = t[m];
      let _;
      a && Qe(a, _ = nn(m)) ? !l || !l.includes(_) ? n[_] = b : (f || (f = {}))[_] = b : ms(e.emitsOptions, m) || (!(m in i) || b !== i[m]) && (i[m] = b, u = !0);
    }
  if (l) {
    const m = /* @__PURE__ */ Ze(n), b = f || it;
    for (let _ = 0; _ < l.length; _++) {
      const x = l[_];
      n[x] = $l(
        a,
        m,
        x,
        b[x],
        e,
        !Qe(b, x)
      );
    }
  }
  return u;
}
function $l(e, t, n, i, a, l) {
  const u = e[n];
  if (u != null) {
    const f = Qe(u, "default");
    if (f && i === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && Ve(m)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const _ = Ea(a);
          i = b[n] = m.call(
            null,
            t
          ), _();
        }
      } else
        i = m;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (l && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Jr(n)) && (i = !0));
  }
  return i;
}
const eb = /* @__PURE__ */ new WeakMap();
function ih(e, t, n = !1) {
  const i = n ? eb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, u = {}, f = [];
  let m = !1;
  if (!Ve(e)) {
    const _ = (x) => {
      m = !0;
      const [S, A] = ih(x, t, !0);
      Xt(u, S), A && f.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!l && !m)
    return tt(e) && i.set(e, Si), Si;
  if ($e(l))
    for (let _ = 0; _ < l.length; _++) {
      const x = nn(l[_]);
      rf(x) && (u[x] = it);
    }
  else if (l)
    for (const _ in l) {
      const x = nn(_);
      if (rf(x)) {
        const S = l[_], A = u[x] = $e(S) || Ve(S) ? { type: S } : Xt({}, S), v = A.type;
        let O = !1, V = !0;
        if ($e(v))
          for (let z = 0; z < v.length; ++z) {
            const P = v[z], D = Ve(P) && P.name;
            if (D === "Boolean") {
              O = !0;
              break;
            } else D === "String" && (V = !1);
          }
        else
          O = Ve(v) && v.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = O, A[
          1
          /* shouldCastTrue */
        ] = V, (O || Qe(A, "default")) && f.push(x);
      }
    }
  const b = [u, f];
  return tt(e) && i.set(e, b), b;
}
function rf(e) {
  return e[0] !== "$" && !sa(e);
}
const gc = (e) => e === "_" || e === "_ctx" || e === "$stable", bc = (e) => $e(e) ? e.map($n) : [$n(e)], tb = (e, t, n) => {
  if (t._n)
    return t;
  const i = jd((...a) => bc(t(...a)), n);
  return i._c = !1, i;
}, ah = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (gc(a)) continue;
    const l = e[a];
    if (Ve(l))
      t[a] = tb(a, l, i);
    else if (l != null) {
      const u = bc(l);
      t[a] = () => u;
    }
  }
}, oh = (e, t) => {
  const n = bc(t);
  e.slots.default = () => n;
}, sh = (e, t, n) => {
  for (const i in t)
    (n || !gc(i)) && (e[i] = t[i]);
}, nb = (e, t, n) => {
  const i = e.slots = th();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (sh(i, t, n), n && gd(i, "_", a, !0)) : ah(t, i);
  } else t && oh(e, t);
}, rb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, u = it;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? l = !1 : sh(a, t, n) : (l = !t.$stable, ah(t, a)), u = t;
  } else t && (oh(e, t), u = { default: 1 });
  if (l)
    for (const f in a)
      !gc(f) && u[f] == null && delete a[f];
}, ln = lb;
function ib(e) {
  return ab(e);
}
function ab(e, t) {
  const n = us();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: u,
    createText: f,
    createComment: m,
    setText: b,
    setElementText: _,
    parentNode: x,
    nextSibling: S,
    setScopeId: A = Bn,
    insertStaticContent: v
  } = e, O = (R, H, ae, h = null, C = null, G = null, re = void 0, ue = null, se = !!H.dynamicChildren) => {
    if (R === H)
      return;
    R && !Yi(R, H) && (h = Vt(R), Be(R, C, G, !0), R = null), H.patchFlag === -2 && (se = !1, H.dynamicChildren = null);
    const { type: q, ref: J, shapeFlag: de } = H;
    switch (q) {
      case gs:
        V(R, H, ae, h);
        break;
      case Sr:
        z(R, H, ae, h);
        break;
      case hl:
        R == null && P(H, ae, h, re);
        break;
      case Je:
        xe(
          R,
          H,
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
        de & 1 ? F(
          R,
          H,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        ) : de & 6 ? I(
          R,
          H,
          ae,
          h,
          C,
          G,
          re,
          ue,
          se
        ) : (de & 64 || de & 128) && q.process(
          R,
          H,
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
    J != null && C ? ua(J, R && R.ref, G, H || R, !H) : J == null && R && R.ref != null && ua(R.ref, null, G, R, !0);
  }, V = (R, H, ae, h) => {
    if (R == null)
      i(
        H.el = f(H.children),
        ae,
        h
      );
    else {
      const C = H.el = R.el;
      H.children !== R.children && b(C, H.children);
    }
  }, z = (R, H, ae, h) => {
    R == null ? i(
      H.el = m(H.children || ""),
      ae,
      h
    ) : H.el = R.el;
  }, P = (R, H, ae, h) => {
    [R.el, R.anchor] = v(
      R.children,
      H,
      ae,
      h,
      R.el,
      R.anchor
    );
  }, D = ({ el: R, anchor: H }, ae, h) => {
    let C;
    for (; R && R !== H; )
      C = S(R), i(R, ae, h), R = C;
    i(H, ae, h);
  }, E = ({ el: R, anchor: H }) => {
    let ae;
    for (; R && R !== H; )
      ae = S(R), a(R), R = ae;
    a(H);
  }, F = (R, H, ae, h, C, G, re, ue, se) => {
    if (H.type === "svg" ? re = "svg" : H.type === "math" && (re = "mathml"), R == null)
      Y(
        H,
        ae,
        h,
        C,
        G,
        re,
        ue,
        se
      );
    else {
      const q = R.el && R.el._isVueCE ? R.el : null;
      try {
        q && q._beginPatch(), fe(
          R,
          H,
          C,
          G,
          re,
          ue,
          se
        );
      } finally {
        q && q._endPatch();
      }
    }
  }, Y = (R, H, ae, h, C, G, re, ue) => {
    let se, q;
    const { props: J, shapeFlag: de, transition: ye, dirs: Ne } = R;
    if (se = R.el = u(
      R.type,
      G,
      J && J.is,
      J
    ), de & 8 ? _(se, R.children) : de & 16 && Z(
      R.children,
      se,
      null,
      h,
      C,
      dl(R, G),
      re,
      ue
    ), Ne && Ir(R, null, h, "created"), j(se, R, R.scopeId, re, h), J) {
      for (const Oe in J)
        Oe !== "value" && !sa(Oe) && l(se, Oe, null, J[Oe], G, h);
      "value" in J && l(se, "value", null, J.value, G), (q = J.onVnodeBeforeMount) && Dn(q, h, R);
    }
    Ne && Ir(R, null, h, "beforeMount");
    const ee = ob(C, ye);
    ee && ye.beforeEnter(se), i(se, H, ae), ((q = J && J.onVnodeMounted) || ee || Ne) && ln(() => {
      try {
        q && Dn(q, h, R), ee && ye.enter(se), Ne && Ir(R, null, h, "mounted");
      } finally {
      }
    }, C);
  }, j = (R, H, ae, h, C) => {
    if (ae && A(R, ae), h)
      for (let G = 0; G < h.length; G++)
        A(R, h[G]);
    if (C) {
      let G = C.subTree;
      if (H === G || fh(G.type) && (G.ssContent === H || G.ssFallback === H)) {
        const re = C.vnode;
        j(
          R,
          re,
          re.scopeId,
          re.slotScopeIds,
          C.parent
        );
      }
    }
  }, Z = (R, H, ae, h, C, G, re, ue, se = 0) => {
    for (let q = se; q < R.length; q++) {
      const J = R[q] = ue ? nr(R[q]) : $n(R[q]);
      O(
        null,
        J,
        H,
        ae,
        h,
        C,
        G,
        re,
        ue
      );
    }
  }, fe = (R, H, ae, h, C, G, re) => {
    const ue = H.el = R.el;
    let { patchFlag: se, dynamicChildren: q, dirs: J } = H;
    se |= R.patchFlag & 16;
    const de = R.props || it, ye = H.props || it;
    let Ne;
    if (ae && Tr(ae, !1), (Ne = ye.onVnodeBeforeUpdate) && Dn(Ne, ae, H, R), J && Ir(H, R, ae, "beforeUpdate"), ae && Tr(ae, !0), (de.innerHTML && ye.innerHTML == null || de.textContent && ye.textContent == null) && _(ue, ""), q ? U(
      R.dynamicChildren,
      q,
      ue,
      ae,
      h,
      dl(H, C),
      G
    ) : re || Q(
      R,
      H,
      ue,
      null,
      ae,
      h,
      dl(H, C),
      G,
      !1
    ), se > 0) {
      if (se & 16)
        pe(ue, de, ye, ae, C);
      else if (se & 2 && de.class !== ye.class && l(ue, "class", null, ye.class, C), se & 4 && l(ue, "style", de.style, ye.style, C), se & 8) {
        const ee = H.dynamicProps;
        for (let Oe = 0; Oe < ee.length; Oe++) {
          const Fe = ee[Oe], Ge = de[Fe], nt = ye[Fe];
          (nt !== Ge || Fe === "value") && l(ue, Fe, Ge, nt, C, ae);
        }
      }
      se & 1 && R.children !== H.children && _(ue, H.children);
    } else !re && q == null && pe(ue, de, ye, ae, C);
    ((Ne = ye.onVnodeUpdated) || J) && ln(() => {
      Ne && Dn(Ne, ae, H, R), J && Ir(H, R, ae, "updated");
    }, h);
  }, U = (R, H, ae, h, C, G, re) => {
    for (let ue = 0; ue < H.length; ue++) {
      const se = R[ue], q = H[ue], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (se.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yi(se, q) || // - In the case of a component, it could contain anything.
        se.shapeFlag & 198) ? x(se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      O(
        se,
        q,
        J,
        null,
        h,
        C,
        G,
        re,
        !0
      );
    }
  }, pe = (R, H, ae, h, C) => {
    if (H !== ae) {
      if (H !== it)
        for (const G in H)
          !sa(G) && !(G in ae) && l(
            R,
            G,
            H[G],
            null,
            C,
            h
          );
      for (const G in ae) {
        if (sa(G)) continue;
        const re = ae[G], ue = H[G];
        re !== ue && G !== "value" && l(R, G, ue, re, C, h);
      }
      "value" in ae && l(R, "value", H.value, ae.value, C);
    }
  }, xe = (R, H, ae, h, C, G, re, ue, se) => {
    const q = H.el = R ? R.el : f(""), J = H.anchor = R ? R.anchor : f("");
    let { patchFlag: de, dynamicChildren: ye, slotScopeIds: Ne } = H;
    Ne && (ue = ue ? ue.concat(Ne) : Ne), R == null ? (i(q, ae, h), i(J, ae, h), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      ae,
      J,
      C,
      G,
      re,
      ue,
      se
    )) : de > 0 && de & 64 && ye && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === ye.length ? (U(
      R.dynamicChildren,
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
    (H.key != null || C && H === C.subTree) && lh(
      R,
      H,
      !0
      /* shallow */
    )) : Q(
      R,
      H,
      ae,
      J,
      C,
      G,
      re,
      ue,
      se
    );
  }, I = (R, H, ae, h, C, G, re, ue, se) => {
    H.slotScopeIds = ue, R == null ? H.shapeFlag & 512 ? C.ctx.activate(
      H,
      ae,
      h,
      re,
      se
    ) : we(
      H,
      ae,
      h,
      C,
      G,
      re,
      se
    ) : ie(R, H, se);
  }, we = (R, H, ae, h, C, G, re) => {
    const ue = R.component = mb(
      R,
      h,
      C
    );
    if (Bd(R) && (ue.ctx.renderer = un), bb(ue, !1, re), ue.asyncDep) {
      if (C && C.registerDep(ue, he, re), !R.el) {
        const se = ue.subTree = Xe(Sr);
        z(null, se, H, ae), R.placeholder = se.el;
      }
    } else
      he(
        ue,
        R,
        H,
        ae,
        C,
        G,
        re
      );
  }, ie = (R, H, ae) => {
    const h = H.component = R.component;
    if (X0(R, H, ae))
      if (h.asyncDep && !h.asyncResolved) {
        L(h, H, ae);
        return;
      } else
        h.next = H, h.update();
    else
      H.el = R.el, h.vnode = H;
  }, he = (R, H, ae, h, C, G, re) => {
    const ue = () => {
      if (R.isMounted) {
        let { next: de, bu: ye, u: Ne, parent: ee, vnode: Oe } = R;
        {
          const _t = ch(R);
          if (_t) {
            de && (de.el = Oe.el, L(R, de, re)), _t.asyncDep.then(() => {
              ln(() => {
                R.isUnmounted || q();
              }, C);
            });
            return;
          }
        }
        let Fe = de, Ge;
        Tr(R, !1), de ? (de.el = Oe.el, L(R, de, re)) : de = Oe, ye && ol(ye), (Ge = de.props && de.props.onVnodeBeforeUpdate) && Dn(Ge, ee, de, Oe), Tr(R, !0);
        const nt = tf(R), Ae = R.subTree;
        R.subTree = nt, O(
          Ae,
          nt,
          // parent may have changed if it's in a teleport
          x(Ae.el),
          // anchor may have changed if it's in a fragment
          Vt(Ae),
          R,
          C,
          G
        ), de.el = nt.el, Fe === null && J0(R, nt.el), Ne && ln(Ne, C), (Ge = de.props && de.props.onVnodeUpdated) && ln(
          () => Dn(Ge, ee, de, Oe),
          C
        );
      } else {
        let de;
        const { el: ye, props: Ne } = H, { bm: ee, m: Oe, parent: Fe, root: Ge, type: nt } = R, Ae = fa(H);
        Tr(R, !1), ee && ol(ee), !Ae && (de = Ne && Ne.onVnodeBeforeMount) && Dn(de, Fe, H), Tr(R, !0);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(
            nt,
            R.parent ? R.parent.type : void 0
          );
          const _t = R.subTree = tf(R);
          O(
            null,
            _t,
            ae,
            h,
            R,
            C,
            G
          ), H.el = _t.el;
        }
        if (Oe && ln(Oe, C), !Ae && (de = Ne && Ne.onVnodeMounted)) {
          const _t = H;
          ln(
            () => Dn(de, Fe, _t),
            C
          );
        }
        (H.shapeFlag & 256 || Fe && fa(Fe.vnode) && Fe.vnode.shapeFlag & 256) && R.a && ln(R.a, C), R.isMounted = !0, H = ae = h = null;
      }
    };
    R.scope.on();
    const se = R.effect = new _d(ue);
    R.scope.off();
    const q = R.update = se.run.bind(se), J = R.job = se.runIfDirty.bind(se);
    J.i = R, J.id = R.uid, se.scheduler = () => dc(J), Tr(R, !0), q();
  }, L = (R, H, ae) => {
    H.component = R;
    const h = R.vnode.props;
    R.vnode = H, R.next = null, Q0(R, H.props, h, ae), rb(R, H.children, ae), or(), Wu(R), sr();
  }, Q = (R, H, ae, h, C, G, re, ue, se = !1) => {
    const q = R && R.children, J = R ? R.shapeFlag : 0, de = H.children, { patchFlag: ye, shapeFlag: Ne } = H;
    if (ye > 0) {
      if (ye & 128) {
        De(
          q,
          de,
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
          q,
          de,
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
    Ne & 8 ? (J & 16 && vt(q, C, G), de !== q && _(ae, de)) : J & 16 ? Ne & 16 ? De(
      q,
      de,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se
    ) : vt(q, C, G, !0) : (J & 8 && _(ae, ""), Ne & 16 && Z(
      de,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se
    ));
  }, _e = (R, H, ae, h, C, G, re, ue, se) => {
    R = R || Si, H = H || Si;
    const q = R.length, J = H.length, de = Math.min(q, J);
    let ye;
    for (ye = 0; ye < de; ye++) {
      const Ne = H[ye] = se ? nr(H[ye]) : $n(H[ye]);
      O(
        R[ye],
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
    q > J ? vt(
      R,
      C,
      G,
      !0,
      !1,
      de
    ) : Z(
      H,
      ae,
      h,
      C,
      G,
      re,
      ue,
      se,
      de
    );
  }, De = (R, H, ae, h, C, G, re, ue, se) => {
    let q = 0;
    const J = H.length;
    let de = R.length - 1, ye = J - 1;
    for (; q <= de && q <= ye; ) {
      const Ne = R[q], ee = H[q] = se ? nr(H[q]) : $n(H[q]);
      if (Yi(Ne, ee))
        O(
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
      q++;
    }
    for (; q <= de && q <= ye; ) {
      const Ne = R[de], ee = H[ye] = se ? nr(H[ye]) : $n(H[ye]);
      if (Yi(Ne, ee))
        O(
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
      de--, ye--;
    }
    if (q > de) {
      if (q <= ye) {
        const Ne = ye + 1, ee = Ne < J ? H[Ne].el : h;
        for (; q <= ye; )
          O(
            null,
            H[q] = se ? nr(H[q]) : $n(H[q]),
            ae,
            ee,
            C,
            G,
            re,
            ue,
            se
          ), q++;
      }
    } else if (q > ye)
      for (; q <= de; )
        Be(R[q], C, G, !0), q++;
    else {
      const Ne = q, ee = q, Oe = /* @__PURE__ */ new Map();
      for (q = ee; q <= ye; q++) {
        const st = H[q] = se ? nr(H[q]) : $n(H[q]);
        st.key != null && Oe.set(st.key, q);
      }
      let Fe, Ge = 0;
      const nt = ye - ee + 1;
      let Ae = !1, _t = 0;
      const bn = new Array(nt);
      for (q = 0; q < nt; q++) bn[q] = 0;
      for (q = Ne; q <= de; q++) {
        const st = R[q];
        if (Ge >= nt) {
          Be(st, C, G, !0);
          continue;
        }
        let Jt;
        if (st.key != null)
          Jt = Oe.get(st.key);
        else
          for (Fe = ee; Fe <= ye; Fe++)
            if (bn[Fe - ee] === 0 && Yi(st, H[Fe])) {
              Jt = Fe;
              break;
            }
        Jt === void 0 ? Be(st, C, G, !0) : (bn[Jt - ee] = q + 1, Jt >= _t ? _t = Jt : Ae = !0, O(
          st,
          H[Jt],
          ae,
          null,
          C,
          G,
          re,
          ue,
          se
        ), Ge++);
      }
      const xt = Ae ? sb(bn) : Si;
      for (Fe = xt.length - 1, q = nt - 1; q >= 0; q--) {
        const st = ee + q, Jt = H[st], Fi = H[st + 1], Li = st + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fi.el || uh(Fi)
        ) : h;
        bn[q] === 0 ? O(
          null,
          Jt,
          ae,
          Li,
          C,
          G,
          re,
          ue,
          se
        ) : Ae && (Fe < 0 || q !== xt[Fe] ? Re(Jt, ae, Li, 2) : Fe--);
      }
    }
  }, Re = (R, H, ae, h, C = null) => {
    const { el: G, type: re, transition: ue, children: se, shapeFlag: q } = R;
    if (q & 6) {
      Re(R.component.subTree, H, ae, h);
      return;
    }
    if (q & 128) {
      R.suspense.move(H, ae, h);
      return;
    }
    if (q & 64) {
      re.move(R, H, ae, un);
      return;
    }
    if (re === Je) {
      i(G, H, ae);
      for (let de = 0; de < se.length; de++)
        Re(se[de], H, ae, h);
      i(R.anchor, H, ae);
      return;
    }
    if (re === hl) {
      D(R, H, ae);
      return;
    }
    if (h !== 2 && q & 1 && ue)
      if (h === 0)
        ue.beforeEnter(G), i(G, H, ae), ln(() => ue.enter(G), C);
      else {
        const { leave: de, delayLeave: ye, afterLeave: Ne } = ue, ee = () => {
          R.ctx.isUnmounted ? a(G) : i(G, H, ae);
        }, Oe = () => {
          G._isLeaving && G[S0](
            !0
            /* cancelled */
          ), de(G, () => {
            ee(), Ne && Ne();
          });
        };
        ye ? ye(G, ee, Oe) : Oe();
      }
    else
      i(G, H, ae);
  }, Be = (R, H, ae, h = !1, C = !1) => {
    const {
      type: G,
      props: re,
      ref: ue,
      children: se,
      dynamicChildren: q,
      shapeFlag: J,
      patchFlag: de,
      dirs: ye,
      cacheIndex: Ne,
      memo: ee
    } = R;
    if (de === -2 && (C = !1), ue != null && (or(), ua(ue, null, ae, R, !0), sr()), Ne != null && (H.renderCache[Ne] = void 0), J & 256) {
      H.ctx.deactivate(R);
      return;
    }
    const Oe = J & 1 && ye, Fe = !fa(R);
    let Ge;
    if (Fe && (Ge = re && re.onVnodeBeforeUnmount) && Dn(Ge, H, R), J & 6)
      Dt(R.component, ae, h);
    else {
      if (J & 128) {
        R.suspense.unmount(ae, h);
        return;
      }
      Oe && Ir(R, null, H, "beforeUnmount"), J & 64 ? R.type.remove(
        R,
        H,
        ae,
        un,
        h
      ) : q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== Je || de > 0 && de & 64) ? vt(
        q,
        H,
        ae,
        !1,
        !0
      ) : (G === Je && de & 384 || !C && J & 16) && vt(se, H, ae), h && je(R);
    }
    const nt = ee != null && Ne == null;
    (Fe && (Ge = re && re.onVnodeUnmounted) || Oe || nt) && ln(() => {
      Ge && Dn(Ge, H, R), Oe && Ir(R, null, H, "unmounted"), nt && (R.el = null);
    }, ae);
  }, je = (R) => {
    const { type: H, el: ae, anchor: h, transition: C } = R;
    if (H === Je) {
      yt(ae, h);
      return;
    }
    if (H === hl) {
      E(R);
      return;
    }
    const G = () => {
      a(ae), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (R.shapeFlag & 1 && C && !C.persisted) {
      const { leave: re, delayLeave: ue } = C, se = () => re(ae, G);
      ue ? ue(R.el, G, se) : se();
    } else
      G();
  }, yt = (R, H) => {
    let ae;
    for (; R !== H; )
      ae = S(R), a(R), R = ae;
    a(H);
  }, Dt = (R, H, ae) => {
    const { bum: h, scope: C, job: G, subTree: re, um: ue, m: se, a: q } = R;
    af(se), af(q), h && ol(h), C.stop(), G && (G.flags |= 8, Be(re, R, H, ae)), ue && ln(ue, H), ln(() => {
      R.isUnmounted = !0;
    }, H);
  }, vt = (R, H, ae, h = !1, C = !1, G = 0) => {
    for (let re = G; re < R.length; re++)
      Be(R[re], H, ae, h, C);
  }, Vt = (R) => {
    if (R.shapeFlag & 6)
      return Vt(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const H = S(R.anchor || R.el), ae = H && H[x0];
    return ae ? S(ae) : H;
  };
  let Pt = !1;
  const Ht = (R, H, ae) => {
    let h;
    R == null ? H._vnode && (Be(H._vnode, null, null, !0), h = H._vnode.component) : O(
      H._vnode || null,
      R,
      H,
      null,
      null,
      null,
      ae
    ), H._vnode = R, Pt || (Pt = !0, Wu(h), Ld(), Pt = !1);
  }, un = {
    p: O,
    um: Be,
    m: Re,
    r: je,
    mt: we,
    mc: Z,
    pc: Q,
    pbc: U,
    n: Vt,
    o: e
  };
  return {
    render: Ht,
    hydrate: void 0,
    createApp: B0(Ht)
  };
}
function dl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Tr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ob(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if ($e(i) && $e(a))
    for (let l = 0; l < i.length; l++) {
      const u = i[l];
      let f = a[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[l] = nr(a[l]), f.el = u.el), !n && f.patchFlag !== -2 && lh(u, f)), f.type === gs && (f.patchFlag === -1 && (f = a[l] = nr(f)), f.el = u.el), f.type === Sr && !f.el && (f.el = u.el);
    }
}
function sb(e) {
  const t = e.slice(), n = [0];
  let i, a, l, u, f;
  const m = e.length;
  for (i = 0; i < m; i++) {
    const b = e[i];
    if (b !== 0) {
      if (a = n[n.length - 1], e[a] < b) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, u = n.length - 1; l < u; )
        f = l + u >> 1, e[n[f]] < b ? l = f + 1 : u = f;
      b < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, u = n[l - 1]; l-- > 0; )
    n[l] = u, u = t[u];
  return n;
}
function ch(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ch(t);
}
function af(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function uh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? uh(t.subTree) : null;
}
const fh = (e) => e.__isSuspense;
function lb(e, t) {
  t && t.pendingBranch ? $e(e) ? t.effects.push(...e) : t.effects.push(e) : g0(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), gs = /* @__PURE__ */ Symbol.for("v-txt"), Sr = /* @__PURE__ */ Symbol.for("v-cmt"), hl = /* @__PURE__ */ Symbol.for("v-stc"), ha = [];
let gn = null;
function Me(e = !1) {
  ha.push(gn = e ? null : []);
}
function cb() {
  ha.pop(), gn = ha[ha.length - 1] || null;
}
let wa = 1;
function of(e, t = !1) {
  wa += e, e < 0 && gn && t && (gn.hasOnce = !0);
}
function dh(e) {
  return e.dynamicChildren = wa > 0 ? gn || Si : null, cb(), wa > 0 && gn && gn.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return dh(
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
function Oi(e, t, n, i, a) {
  return dh(
    Xe(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function hh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ph = ({ key: e }) => e ?? null, Io = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || /* @__PURE__ */ qt(e) || Ve(e) ? { i: mn, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, i = 0, a = null, l = e === Je ? 0 : 1, u = !1, f = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ph(t),
    ref: t && Io(t),
    scopeId: $d,
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
    ctx: mn
  };
  return f ? (yc(m, n), l & 128 && e.normalize(m)) : n && (m.shapeFlag |= Nt(n) ? 8 : 16), wa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && gn.push(m), m;
}
const Xe = ub;
function ub(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === Yd) && (e = Sr), hh(e)) {
    const f = Ei(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yc(f, n), wa > 0 && !l && gn && (f.shapeFlag & 6 ? gn[gn.indexOf(e)] = f : gn.push(f)), f.patchFlag = -2, f;
  }
  if (wb(e) && (e = e.__vccOpts), t) {
    t = fb(t);
    let { class: f, style: m } = t;
    f && !Nt(f) && (t.class = mt(f)), tt(m) && (/* @__PURE__ */ uc(m) && !$e(m) && (m = Xt({}, m)), t.style = kt(m));
  }
  const u = Nt(e) ? 1 : fh(e) ? 128 : w0(e) ? 64 : tt(e) ? 4 : Ve(e) ? 2 : 0;
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
function fb(e) {
  return e ? /* @__PURE__ */ uc(e) || nh(e) ? Xt({}, e) : e : null;
}
function Ei(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: u, children: f, transition: m } = e, b = t ? vr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && ph(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? $e(l) ? l.concat(Io(t)) : [l, Io(t)] : Io(t)
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
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ei(e.ssContent),
    ssFallback: e.ssFallback && Ei(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && i && pc(
    _,
    m.clone(_)
  ), _;
}
function db(e = " ", t = 0) {
  return Xe(gs, null, e, t);
}
function Ct(e = "", t = !1) {
  return t ? (Me(), Oi(Sr, null, e)) : Xe(Sr, null, e);
}
function $n(e) {
  return e == null || typeof e == "boolean" ? Xe(Sr) : $e(e) ? Xe(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : hh(e) ? nr(e) : Xe(gs, null, String(e));
}
function nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ei(e);
}
function yc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if ($e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), yc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !nh(t) ? t._ctx = mn : a === 3 && mn && (mn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ve(t) ? (t = { default: t, _ctx: mn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [db(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = mt([t.class, i.class]));
      else if (a === "style")
        t.style = kt([t.style, i.style]);
      else if (os(a)) {
        const l = t[a], u = i[a];
        u && l !== u && !($e(l) && l.includes(u)) ? t[a] = l ? [].concat(l, u) : u : u == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ss(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  Kn(e, t, 7, [
    n,
    i
  ]);
}
const hb = Jd();
let pb = 0;
function mb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || hb, l = {
    uid: pb++,
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
    scope: new $g(
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
    propsOptions: ih(i, a),
    emitsOptions: Zd(i, a),
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = K0.bind(null, l), e.ce && e.ce(l), l;
}
let Yt = null;
const gb = () => Yt || mn;
let Go, jl;
{
  const e = us(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((u) => u(l)) : a[0](l);
    };
  };
  Go = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Yt = n
  ), jl = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sa = n
  );
}
const Ea = (e) => {
  const t = Yt;
  return Go(e), e.scope.on(), () => {
    e.scope.off(), Go(t);
  };
}, sf = () => {
  Yt && Yt.scope.off(), Go(null);
};
function mh(e) {
  return e.vnode.shapeFlag & 4;
}
let Sa = !1;
function bb(e, t = !1, n = !1) {
  t && jl(t);
  const { props: i, children: a } = e.vnode, l = mh(e);
  Z0(e, i, l, t), nb(e, a, n || t);
  const u = l ? yb(e, t) : void 0;
  return t && jl(!1), u;
}
function yb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, L0);
  const { setup: i } = n;
  if (i) {
    or();
    const a = e.setupContext = i.length > 1 ? _b(e) : null, l = Ea(e), u = Ta(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = hd(u);
    if (sr(), l(), (f || e.sp) && !fa(e) && Ud(e), f) {
      if (u.then(sf, sf), t)
        return u.then((m) => {
          lf(e, m);
        }).catch((m) => {
          hs(m, e, 0);
        });
      e.asyncDep = u;
    } else
      lf(e, u);
  } else
    gh(e);
}
function lf(e, t, n) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = Rd(t)), gh(e);
}
function gh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Bn);
  {
    const a = Ea(e);
    or();
    try {
      z0(e);
    } finally {
      sr(), a();
    }
  }
}
const vb = {
  get(e, t) {
    return Wt(e, "get", ""), e[t];
  }
};
function _b(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rd(o0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in da)
        return da[n](e);
    },
    has(t, n) {
      return n in t || n in da;
    }
  })) : e.proxy;
}
function xb(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wb(e) {
  return Ve(e) && "__vccOpts" in e;
}
const bt = (e, t) => /* @__PURE__ */ f0(e, t, Sa), Sb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vl;
const cf = typeof window < "u" && window.trustedTypes;
if (cf)
  try {
    Vl = /* @__PURE__ */ cf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const bh = Vl ? (e) => Vl.createHTML(e) : (e) => e, Nb = "http://www.w3.org/2000/svg", Mb = "http://www.w3.org/1998/Math/MathML", er = typeof document < "u" ? document : null, uf = er && /* @__PURE__ */ er.createElement("template"), kb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? er.createElementNS(Nb, e) : t === "mathml" ? er.createElementNS(Mb, e) : n ? er.createElement(e, { is: n }) : er.createElement(e);
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
  insertStaticContent(e, t, n, i, a, l) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      uf.innerHTML = bh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = uf.content;
      if (i === "svg" || i === "mathml") {
        const m = f.firstChild;
        for (; m.firstChild; )
          f.appendChild(m.firstChild);
        f.removeChild(m);
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
}, Pb = /* @__PURE__ */ Symbol("_vtc");
function Ab(e, t, n) {
  const i = e[Pb];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ko = /* @__PURE__ */ Symbol("_vod"), yh = /* @__PURE__ */ Symbol("_vsh"), vc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ko] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : qi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), qi(e, !0), i.enter(e)) : i.leave(e, () => {
      qi(e, !1);
    }) : qi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    qi(e, t);
  }
};
function qi(e, t) {
  e.style.display = t ? e[Ko] : "none", e[yh] = !t;
}
const Cb = /* @__PURE__ */ Symbol(""), Ib = /(?:^|;)\s*display\s*:/;
function Tb(e, t, n) {
  const i = e.style, a = Nt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Nt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && To(i, f, "");
        }
      else
        for (const u in t)
          n[u] == null && To(i, u, "");
    for (const u in n)
      u === "display" && (l = !0), To(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[Cb];
      u && (n += ";" + u), i.cssText = n, l = Ib.test(n);
    }
  } else t && e.removeAttribute("style");
  Ko in e && (e[Ko] = l ? i.display : "", e[yh] && (i.display = "none"));
}
const ff = /\s*!important$/;
function To(e, t, n) {
  if ($e(n))
    n.forEach((i) => To(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Eb(e, t);
    ff.test(n) ? e.setProperty(
      Jr(i),
      n.replace(ff, ""),
      "important"
    ) : e[i] = n;
  }
}
const df = ["Webkit", "Moz", "ms"], pl = {};
function Eb(e, t) {
  const n = pl[t];
  if (n)
    return n;
  let i = nn(t);
  if (i !== "filter" && i in e)
    return pl[t] = i;
  i = cs(i);
  for (let a = 0; a < df.length; a++) {
    const l = df[a] + i;
    if (l in e)
      return pl[t] = l;
  }
  return t;
}
const hf = "http://www.w3.org/1999/xlink";
function pf(e, t, n, i, a, l = Lg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hf, t.slice(6, t.length)) : e.setAttributeNS(hf, t, n) : n == null || l && !bd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Gn(n) ? String(n) : n
  );
}
function mf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? bh(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== m || !("_value" in e)) && (e.value = m), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = bd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function Db(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Rb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const gf = /* @__PURE__ */ Symbol("_vei");
function Ob(e, t, n, i, a = null) {
  const l = e[gf] || (e[gf] = {}), u = l[t];
  if (i && u)
    u.value = i;
  else {
    const [f, m] = Fb(t);
    if (i) {
      const b = l[t] = $b(
        i,
        a
      );
      Db(e, f, b, m);
    } else u && (Rb(e, f, u, m), l[t] = void 0);
  }
}
const bf = /(?:Once|Passive|Capture)$/;
function Fb(e) {
  let t;
  if (bf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(bf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Jr(e.slice(2)), t];
}
let ml = 0;
const Lb = /* @__PURE__ */ Promise.resolve(), zb = () => ml || (Lb.then(() => ml = 0), ml = Date.now());
function $b(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Kn(
      jb(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = zb(), n;
}
function jb(e, t) {
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
const yf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vb = (e, t, n, i, a, l) => {
  const u = a === "svg";
  t === "class" ? Ab(e, i, u) : t === "style" ? Tb(e, n, i) : os(t) ? ss(t) || Ob(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hb(e, t, i, u)) ? (mf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pf(e, t, i, u, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ub(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Nt(i))) ? mf(e, nn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), pf(e, t, i, u));
};
function Hb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yf(t) && Ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return yf(t) && Nt(n) ? !1 : t in e;
}
function Ub(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = nn(t);
  return Array.isArray(n) ? n.some((a) => nn(a) === i) : Object.keys(n).some((a) => nn(a) === i);
}
const Bb = ["ctrl", "shift", "alt", "meta"], Gb = {
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
  exact: (e, t) => Bb.some((n) => e[`${n}Key`] && !t.includes(n))
}, vh = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let u = 0; u < t.length; u++) {
      const f = Gb[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...l);
  }));
}, Kb = /* @__PURE__ */ Xt({ patchProp: Vb }, kb);
let vf;
function Wb() {
  return vf || (vf = ib(Kb));
}
const Yb = ((...e) => {
  const t = Wb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Xb(i);
    if (!a) return;
    const l = t._component;
    !Ve(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, qb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function qb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xb(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const gt = Math.PI / 180, _h = Math.PI * 2, Jb = 2048;
function rt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Nr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Wo(e, t) {
  return Nr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function wi(e, t) {
  return Nr(e.x * t, e.y * t, e.z * t);
}
function Eo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function _f(e, t) {
  return Nr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ra(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Nr(e.x / t, e.y / t, e.z / t);
}
function Zb(e, t) {
  const n = Number(e || 0) * gt, i = Number(t || 0) * gt, a = Math.cos(i);
  return Nr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Do(e, t, n = 0) {
  const i = Zb(e, t);
  let a = Nr(0, 1, 0);
  Math.abs(Eo(i, a)) > 0.999 && (a = Nr(0, 0, 1));
  let l = ra(_f(a, i)), u = ra(_f(i, l));
  const f = Number(n || 0) * gt, m = Math.cos(f), b = Math.sin(f), _ = Wo(wi(l, m), wi(u, b)), x = Wo(wi(l, -b), wi(u, m));
  return l = ra(_), u = ra(x), { fwd: i, right: l, up: u };
}
function Qb(e, t) {
  const n = (Number(e || 0) - 0.5) * _h, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Nr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function xf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), u = Math.max(512, Jb), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function wf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function gl(e, t, n) {
  const i = wf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = wf(e, e.FRAGMENT_SHADER, n);
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
const bl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, ey = `#version 300 es
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
}`, ty = `#version 300 es
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
}`, ny = `#version 300 es
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
function Xi(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(rt(i, 1, 179) * gt * 0.5) * (n / Math.max(t, 1))) / gt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: rt(i, 1, 179),
    vFovDeg: rt(a, 0.1, 179)
  };
}
function ry(e) {
  const t = Do(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(rt(Number(e.hFovDeg), 0.1, 179) * 0.5 * gt),
    tanY: Math.tan(rt(Number(e.vFovDeg), 0.1, 179) * 0.5 * gt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: rt(Number(e.opacity ?? 1), 0, 1)
  };
}
function iy(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, u = null, f = null, m = null, b = null, _ = null, x = null, S = null, A = !1, v = xf(1, 1, 1), O = null, V = null, z = null, P = null, D = null;
  const E = /* @__PURE__ */ new Map();
  let F = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, Y = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, j = {
    paint: !1,
    mask: !1
  };
  function Z(C = null, G = null) {
    const re = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, re), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, C ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), re;
  }
  function fe() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = gl(n, bl, ey), a = gl(n, bl, ty), l = gl(n, bl, ny), O = {
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
      ]), n.STATIC_DRAW), f = Z(n.REPEAT, n.CLAMP_TO_EDGE), m = Z(n.REPEAT, n.CLAMP_TO_EDGE), b = Z(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function U() {
    var C;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), m && n.deleteTexture(m), b && n.deleteTexture(b), E.forEach((G) => {
          De(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (C = n.getExtension("WEBGL_lose_context")) == null || C.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, u = null, f = null, m = null, b = null, E.clear(), _ = null, x = null, S = null, Y = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, j = {
        paint: !1,
        mask: !1
      }, P = null, D = null, A = !1;
    }
  }
  function pe(C, G, re = 1) {
    v = xf(C, G, re), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function xe(C) {
    C === "background" ? _ = null : C === "paint" ? x = null : S = null, Y[C] && (Y[C].width = 0, Y[C].height = 0);
  }
  function I() {
    j.paint = !1, j.mask = !1;
  }
  function we(C) {
    I(), C === "paint" ? j.paint = !0 : C === "mask" && (j.mask = !0);
  }
  function ie(C, G, re = [], ue = { width: 0, height: 0 }, se = !1) {
    if (!n || !C || !G) return !1;
    const q = Number(G.width || G.videoWidth || G.naturalWidth || 0), J = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(q > 1) || !(J > 1)) return !1;
    const de = Array.isArray(re) ? re.filter((ye) => ye && ye.w > 0 && ye.h > 0) : [];
    if (!de.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, C), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, se ? 1 : 0), ue.width !== q || ue.height !== J)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), ue.width = q, ue.height = J, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), D = P.getContext("2d")), !D)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const ye of de) {
      const Ne = Math.max(0, Math.floor(Number(ye.x || 0))), ee = Math.max(0, Math.floor(Number(ye.y || 0))), Oe = Math.min(q - Ne, Math.ceil(Number(ye.w || 0))), Fe = Math.min(J - ee, Math.ceil(Number(ye.h || 0)));
      if (!(Oe <= 0 || Fe <= 0)) {
        if (P.width !== Oe || P.height !== Fe) {
          if (P.width = Oe, P.height = Fe, D = P.getContext("2d"), !D)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          D.clearRect(0, 0, Oe, Fe);
        D.drawImage(G, Ne, ee, Oe, Fe, 0, 0, Oe, Fe), n.texSubImage2D(n.TEXTURE_2D, 0, Ne, ee, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function he(C, G, re, ue, se = null, q = !1) {
    if (!fe()) return !1;
    if (!re)
      return xe(C), !1;
    const J = String(ue ?? ""), de = C === "background" ? _ : C === "paint" ? x : S, ye = Y[C], Ne = Number(re.width || re.videoWidth || re.naturalWidth || 0), ee = Number(re.height || re.videoHeight || re.naturalHeight || 0), Oe = ye.width !== Ne || ye.height !== ee;
    if (de === J && !Oe && !(Array.isArray(se) && se.length)) return !0;
    if (!(Ne > 0) || !(ee > 0))
      return xe(C), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, q ? 1 : 0), !(Array.isArray(se) && se.length ? ie(G, re, se, ye, q) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, re), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe(C), !1;
      ye.width = Ne, ye.height = ee;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), C === "background" ? _ = J : C === "paint" ? x = J : S = J, !0;
  }
  function L(C, G) {
    return he("background", f, C, G, null, !0);
  }
  function Q(C, G, re = null) {
    return he("paint", m, C, G, re, !0);
  }
  function _e(C, G, re = null) {
    return he("mask", b, C, G, re, !0);
  }
  function De(C) {
    C != null && C.texture && n && n.deleteTexture(C.texture);
  }
  function Re(C = /* @__PURE__ */ new Set()) {
    E.forEach((G, re) => {
      C.has(re) || (De(G), E.delete(re));
    });
  }
  function Be(C) {
    if (!n || !(C != null && C.assetId) || !(C != null && C.source)) return null;
    const G = String(C.assetId), re = String(C.revision ?? ""), ue = C.source, se = Number(ue.width || ue.naturalWidth || ue.videoWidth || 0), q = Number(ue.height || ue.naturalHeight || ue.videoHeight || 0);
    if (se <= 0 || q <= 0) return null;
    let J = E.get(G);
    if (J || (J = {
      texture: Z(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, E.set(G, J)), J.revision !== re || J.width !== se || J.height !== q) {
      if (n.bindTexture(n.TEXTURE_2D, J.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ue), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J.revision = re, J.width = se, J.height = q;
    }
    return J.texture;
  }
  function je(C = []) {
    if (!fe()) return !1;
    const G = /* @__PURE__ */ new Set();
    return C.forEach((re) => {
      !(re != null && re.assetId) || !(re != null && re.source) || (G.add(String(re.assetId)), Be(re));
    }), Re(G), !0;
  }
  function yt() {
    return fe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Dt(C) {
    n.useProgram(C), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function vt(C, G = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Dt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(O.background, 0), n.uniform2f(O.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(O.mode, (C == null ? void 0 : C.mode) === "unwrap" ? 0 : (C == null ? void 0 : C.mode) === "cutout" ? 2 : 1);
    const re = Xi(C, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(O.yaw, Number(re.yawDeg || 0) * gt), n.uniform1f(O.pitch, Number(re.pitchDeg || 0) * gt), n.uniform1f(O.roll, Number(re.rollDeg || 0) * gt), n.uniform1f(O.hFov, rt(Number(re.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(O.vFov, rt(Number(re.vFovDeg || 60), 0.1, 179) * gt), n.uniform1f(O.opacity, rt(Number(G.backgroundOpacity ?? 1), 0, 1));
    const ue = Number((C == null ? void 0 : C.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(O.coverage, ue), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Vt(C, G = {}) {
    const re = j.paint && x != null, ue = j.mask && S != null;
    if (!re && !ue) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, m), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (C == null ? void 0 : C.mode) === "unwrap" ? 0 : (C == null ? void 0 : C.mode) === "cutout" ? 2 : 1);
    const se = Xi(C, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(se.yawDeg || 0) * gt), n.uniform1f(V.pitch, Number(se.pitchDeg || 0) * gt), n.uniform1f(V.roll, Number(se.rollDeg || 0) * gt), n.uniform1f(V.hFov, rt(Number(se.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(V.vFov, rt(Number(se.vFovDeg || 60), 0.1, 179) * gt), n.uniform1f(V.paintOpacity, rt(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, rt(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, re ? 1 : 0), n.uniform1i(V.hasMask, ue ? 1 : 0), n.uniform1i(V.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function Pt(C, G) {
    var ye, Ne, ee, Oe, Fe, Ge, nt;
    const re = Array.isArray(C == null ? void 0 : C.objects) ? C.objects : [];
    if (!re.length) {
      I(), Re(/* @__PURE__ */ new Set());
      return;
    }
    const ue = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, se = Xi(G, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, q = Do(se.yawDeg, se.pitchDeg, se.rollDeg), J = re.slice().sort((Ae, _t) => Number((Ae == null ? void 0 : Ae.zIndex) || 0) - Number((_t == null ? void 0 : _t.zIndex) || 0)), de = /* @__PURE__ */ new Set();
    I();
    for (const Ae of J)
      if (!(!Ae || Ae.visible === !1)) {
        if (Ae.type === "sticker") {
          const _t = String(((ye = Ae == null ? void 0 : Ae.params) == null ? void 0 : ye.assetId) || (Ae == null ? void 0 : Ae.id) || "");
          if (!_t) continue;
          de.add(_t);
          const bn = Be({
            assetId: _t,
            source: Ae.source,
            revision: Ae.revision
          });
          if (!bn) continue;
          const xt = ry({
            yawDeg: ((Ne = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ne.yawDeg) || 0,
            pitchDeg: ((ee = Ae == null ? void 0 : Ae.transform) == null ? void 0 : ee.pitchDeg) || 0,
            rollDeg: ((Oe = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Oe.rollDeg) || 0,
            hFovDeg: ((Fe = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Fe.hFovDeg) || 30,
            vFovDeg: ((Ge = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ge.vFovDeg) || 30,
            crop: ((nt = Ae == null ? void 0 : Ae.params) == null ? void 0 : nt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ae == null ? void 0 : Ae.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(l), n.uniform1i(z.texture, 0), n.uniform1i(z.mode, ue), n.uniform3f(z.viewRight, q.right.x, q.right.y, q.right.z), n.uniform3f(z.viewUp, q.up.x, q.up.y, q.up.z), n.uniform3f(z.viewFwd, q.fwd.x, q.fwd.y, q.fwd.z), n.uniform1f(z.viewHfov, rt(Number(se.hFovDeg || 90), 0.1, 179) * gt), n.uniform1f(z.viewVfov, rt(Number(se.vFovDeg || 60), 0.1, 179) * gt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, bn), n.uniform3f(z.stickerRight, xt.right.x, xt.right.y, xt.right.z), n.uniform3f(z.stickerUp, xt.up.x, xt.up.y, xt.up.z), n.uniform3f(z.stickerFwd, xt.fwd.x, xt.fwd.y, xt.fwd.z), n.uniform1f(z.stickerTanX, Math.max(1e-6, xt.tanX)), n.uniform1f(z.stickerTanY, Math.max(1e-6, xt.tanY)), n.uniform4f(
            z.crop,
            rt(Number(xt.crop.x0 ?? 0), 0, 1),
            rt(Number(xt.crop.y0 ?? 0), 0, 1),
            rt(Number(xt.crop.x1 ?? 1), 0, 1),
            rt(Number(xt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(z.opacity, xt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ae.type === "paint" || Ae.type === "raster") {
          if (!Q(Ae.source, Ae.revision ?? "")) continue;
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
    Re(de), I();
  }
  function Ht(C) {
    return !yt() || !_ ? null : (vt({
      mode: "panorama",
      yawDeg: (C == null ? void 0 : C.yawDeg) || 0,
      pitchDeg: (C == null ? void 0 : C.pitchDeg) || 0,
      fovDeg: (C == null ? void 0 : C.fovDeg) || 100
    }, C), t);
  }
  function un(C) {
    return !yt() || !_ ? null : (vt({ mode: "unwrap" }, C), t);
  }
  function wn(C) {
    return !yt() || !_ ? null : (vt({
      mode: "cutout",
      yawDeg: (C == null ? void 0 : C.yawDeg) || 0,
      pitchDeg: (C == null ? void 0 : C.pitchDeg) || 0,
      rollDeg: (C == null ? void 0 : C.rollDeg) || 0,
      hFovDeg: (C == null ? void 0 : C.hFovDeg) || 90,
      vFovDeg: (C == null ? void 0 : C.vFovDeg) || 60
    }, C), t);
  }
  function R(C = {}) {
    if (!fe() || (pe(C.width, C.height, C.dpr || 1), !yt())) return null;
    const G = Object.prototype.hasOwnProperty.call(C, "backgroundSource"), re = Object.prototype.hasOwnProperty.call(C, "paintSource"), ue = Object.prototype.hasOwnProperty.call(C, "maskSource"), se = Object.prototype.hasOwnProperty.call(C, "textures"), q = Object.prototype.hasOwnProperty.call(C, "scene");
    return G && L(C.backgroundSource, C.backgroundRevision ?? ""), re && Q(C.paintSource, C.paintRevision ?? ""), ue && _e(C.maskSource, C.maskRevision ?? ""), se && (je(C.textures || []), F.textures = C.textures || []), q && (F.scene = C.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(C, "objectPass") && (F.objectPass = C.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(C, "backgroundOpacity") && (F.backgroundOpacity = Number(C.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(C, "showMaskTint") && (F.showMaskTint = C.showMaskTint === !0), Object.prototype.hasOwnProperty.call(C, "coverageDeg") && (F.coverageDeg = Number(C.coverageDeg || 360) === 180 ? 180 : 360), _ && vt(C.view, {
      ...C,
      backgroundOpacity: Number(C.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(C.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), Pt(
      F.objectPass || { objects: [] },
      C.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function H(C = {}) {
    return fe() ? !!R({
      ...C,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(C.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function ae(C, G, re) {
    const ue = Math.max(1, Number((C == null ? void 0 : C.viewportWidth) || v.sourceWidth || v.width || 1)), se = Math.max(1, Number((C == null ? void 0 : C.viewportHeight) || v.sourceHeight || v.height || 1)), q = Number(G), J = Number(re);
    if (!Number.isFinite(q) || !Number.isFinite(J)) return null;
    if ((C == null ? void 0 : C.mode) === "unwrap")
      return { u: (q / ue % 1 + 1) % 1, v: rt(J / se, 0, 1) };
    const de = Xi(C, ue, se);
    if (!de) return null;
    const ye = Do(de.yawDeg, de.pitchDeg, de.rollDeg), Ne = (q - ue * 0.5) / (ue * 0.5) * Math.tan(rt(de.hFovDeg, 1, 179) * gt * 0.5), ee = (se * 0.5 - J) / (se * 0.5) * Math.tan(rt(de.vFovDeg, 0.1, 179) * gt * 0.5), Oe = ra(Wo(Wo(wi(ye.right, Ne), wi(ye.up, ee)), ye.fwd));
    return {
      u: (Math.atan2(Oe.x, Oe.z) / _h + 0.5 + 1) % 1,
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
    const q = Xi(C, ue, se);
    if (!q)
      return { x: ue * 0.5, y: se * 0.5, visible: !1 };
    const J = Do(q.yawDeg, q.pitchDeg, q.rollDeg), de = Qb(G, re), ye = Eo(de, J.right), Ne = Eo(de, J.up), ee = Eo(de, J.fwd);
    if (ee <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Oe = ue * 0.5 + ye / ee * (ue * 0.5 / Math.tan(rt(q.hFovDeg, 1, 179) * gt * 0.5)), Fe = se * 0.5 - Ne / ee * (se * 0.5 / Math.tan(rt(q.vFovDeg, 0.1, 179) * gt * 0.5));
    return { x: Oe, y: Fe, visible: Oe >= 0 && Oe <= ue && Fe >= 0 && Fe <= se };
  }
  return {
    init: fe,
    dispose: U,
    setViewport: pe,
    setBackgroundErp: L,
    setPaintErp: Q,
    setMaskErp: _e,
    renderPanorama: Ht,
    renderUnwrap: un,
    renderCutout: wn,
    renderScene: R,
    syncState: H,
    screenToErpUv: ae,
    erpUvToScreen: h,
    getCanvas() {
      return t;
    },
    isSupported() {
      return fe();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function Sf(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function ay() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, m) {
    const b = t(u);
    let _ = e.get(b) || null;
    if (!_) {
      const A = document.createElement("canvas"), v = A.getContext("2d");
      if (!v) return null;
      _ = {
        id: b,
        canvas: A,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(b, _);
    }
    const x = Sf(f), S = Sf(m);
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
const oy = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), sy = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function xh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ly(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function cy(e = {}) {
  const t = sy.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? xh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function uy(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!oy.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? xh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: ly(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function fy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => uy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== u ? l - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Di(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: cy((e == null ? void 0 : e.background) || {}),
    objectPass: fy((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function dy(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function _c(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? dy(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function hy(e, t, n = {}) {
  return e ? _c({
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
function py(e, t, n = {}) {
  return e ? _c({
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
function my(e, t, n = {}) {
  return e ? _c({
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
function wh(e = {}) {
  const t = [], n = hy(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = py(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, u) => {
    const f = my(
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
    const f = Number((l == null ? void 0 : l.zIndex) || 0), m = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== m ? f - m : String((l == null ? void 0 : l.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function xc(e, t) {
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
function ys(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Di({
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
      objects: xc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ia(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = xc(t, n), a = wh({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Di({
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
function gy(e = {}) {
  var l, u, f, m, b, _, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Di(e), v = Array.isArray((l = A.objectPass) == null ? void 0 : l.objects) ? A.objectPass.objects : [], O = {
      stickers: v.filter((D) => D.type === "sticker").map((D) => {
        var E, F, Y, j, Z, fe, U, pe, xe, I, we, ie, he;
        return {
          id: D.id,
          assetId: String(((E = D == null ? void 0 : D.params) == null ? void 0 : E.assetId) || ((F = D == null ? void 0 : D.params) == null ? void 0 : F.asset_id) || (D == null ? void 0 : D.id) || ""),
          yawDeg: Number(((Y = D == null ? void 0 : D.transform) == null ? void 0 : Y.yawDeg) ?? ((j = D == null ? void 0 : D.params) == null ? void 0 : j.yawDeg) ?? 0),
          pitchDeg: Number(((Z = D == null ? void 0 : D.transform) == null ? void 0 : Z.pitchDeg) ?? ((fe = D == null ? void 0 : D.params) == null ? void 0 : fe.pitchDeg) ?? 0),
          rollDeg: Number(((U = D == null ? void 0 : D.transform) == null ? void 0 : U.rollDeg) ?? ((pe = D == null ? void 0 : D.params) == null ? void 0 : pe.rollDeg) ?? 0),
          hFovDeg: Number(((xe = D == null ? void 0 : D.transform) == null ? void 0 : xe.hFovDeg) ?? ((I = D == null ? void 0 : D.params) == null ? void 0 : I.hFovDeg) ?? 30),
          vFovDeg: Number(((we = D == null ? void 0 : D.transform) == null ? void 0 : we.vFovDeg) ?? ((ie = D == null ? void 0 : D.params) == null ? void 0 : ie.vFovDeg) ?? 30),
          crop: ((he = D == null ? void 0 : D.params) == null ? void 0 : he.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((D == null ? void 0 : D.opacity) ?? 1),
          visible: (D == null ? void 0 : D.visible) !== !1,
          zIndex: Number((D == null ? void 0 : D.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = A.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, V = v.filter((D) => D.type === "sticker").map((D) => {
      var E, F;
      return {
        assetId: String(((E = D == null ? void 0 : D.params) == null ? void 0 : E.assetId) || ((F = D == null ? void 0 : D.params) == null ? void 0 : F.asset_id) || (D == null ? void 0 : D.id) || ""),
        source: D.source || null,
        revision: String((D == null ? void 0 : D.revision) || "")
      };
    }).filter((D) => D.assetId && D.source), z = v.find((D) => D.type === "paint") || null, P = v.find((D) => D.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((m = A.background) == null ? void 0 : m.source) || null,
      backgroundRevision: String(((b = A.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (z == null ? void 0 : z.source) || null,
      paintRevision: String((z == null ? void 0 : z.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: V,
      scene: O,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((x = A.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Di({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...xc(t, n),
        ...wh({
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
function by(e) {
  let t = null;
  function n(l = {}) {
    const u = gy(l);
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
function Br(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => iy(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => ay(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => by(V), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const m = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const z = { ...V }, P = a.syncState(z);
        return P && (f = z, P);
      }
      return f = { ...V }, !0;
    }
  });
  function b(V = {}) {
    return m.sync(V);
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
  function x(V, z, P = {}, D = {}) {
    if (!z) return !1;
    const E = _(P, {
      ...D,
      width: z.w,
      height: z.h
    });
    return E ? V ? (V.canvas && E === V.canvas || V.drawImage(E, z.x, z.y, z.w, z.h), !0) : !!l && E === l : !1;
  }
  function S(V, z = {}, P = {}) {
    const D = Number(P.width || 0), E = Number(P.height || 0);
    if (!(D > 0) || !(E > 0)) return null;
    const F = u.ensureTarget(V, D, E);
    if (!F) return null;
    const Y = _(z, {
      ...P,
      width: D,
      height: E
    });
    return Y ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(Y, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function A(V) {
    u.clearTarget(V);
  }
  function v() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), f = null;
  }
  function O() {
    f = null, m.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: _,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: A,
    snapshotState: m.snapshot,
    clearState: O,
    dispose: v
  };
}
function vi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function yy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Nf(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let u = i, f = a, m = -1, b = -1;
  for (let x = 0; x < a; x += 1)
    for (let S = 0; S < i; S += 1)
      l[(x * i + S) * 4 + 3] <= t || (S < u && (u = S), x < f && (f = x), S > m && (m = S), x > b && (b = x));
  return m < u || b < f ? null : {
    minX: u,
    minY: f,
    maxX: m,
    maxY: b,
    width: m - u + 1,
    height: b - f + 1,
    aspect: Number(((m - u + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function wc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function tr(e, t, n) {
  if (!e) return vi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let yl = null, vl = null, Mf = null, kf = null, St = null, Ji = null, Zt = null, gr = null;
function vy() {
  if (vl) return vl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), vl = n, n;
}
function _l(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  yl = tr(yl, n, i);
  const a = yl;
  dt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", kf !== a.ctx && (Mf = a.ctx.createPattern(vy(), "repeat"), kf = a.ctx), a.ctx.fillStyle = Mf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function _y(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function xy(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function wy(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Sy(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const pt = /* @__PURE__ */ new Map(), Sc = 128;
function Ny(e, t, n, i, a, l) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), m = `${u}:${f.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (pt.has(m)) {
    const P = pt.get(m);
    return pt.delete(m), pt.set(m, P), P;
  }
  pt.size >= Sc && pt.delete(pt.keys().next().value);
  const b = u * 2 + 2, _ = u + 1, x = wc(b, b), S = x.getContext("2d"), A = f * u, v = u + 1, O = `rgba(${n},${i},${a},${l})`, V = `rgba(${n},${i},${a},0)`, z = S.createRadialGradient(_, _, A, _, _, v);
  return z.addColorStop(0, O), z.addColorStop(1, V), S.fillStyle = z, S.fillRect(0, 0, b, b), pt.set(m, x), x;
}
function My(e, t, n, i, a, l, u) {
  const { r: f, g: m, b, a: _ } = i, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, l)), O = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${m}:${b}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${O.toFixed(2)}`;
  if (pt.has(V)) {
    const Z = pt.get(V);
    return pt.delete(V), pt.set(V, Z), Z;
  }
  pt.size >= Sc && pt.delete(pt.keys().next().value);
  const z = wc(x, S), P = z.getContext("2d"), D = P.createImageData(x, S), E = D.data, F = Math.max(0, e - t), Y = Math.max(0, Math.min(1, n)), j = 1 + A;
  for (let Z = 0; Z < S; Z++)
    for (let fe = 0; fe < x; fe++) {
      const U = fe + 0.5 - e, pe = Z + 0.5 - t, xe = Math.max(Math.abs(U) - F, 0), we = Math.hypot(xe, pe) / t;
      if (we >= 1) continue;
      const ie = we <= Y ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - Y)), he = 1 - we, L = 1 + A * (1 - he) * (1 - he), Q = 1 - v * he * he, _e = L * Q / j;
      let De = 1;
      if (O > 0) {
        const je = Math.floor((pe + t) / 1.5), yt = Math.floor((U + e) / 8), Dt = Vr(Ai(je * 41 + 500, yt * 19 + 300));
        De = 1 - O * 0.42 * Dt;
      }
      const Re = Math.round(255 * Math.min(1, _ * ie * _e * De));
      if (Re <= 0) continue;
      const Be = (Z * x + fe) * 4;
      E[Be] = f, E[Be + 1] = m, E[Be + 2] = b, E[Be + 3] = Re;
    }
  return P.putImageData(D, 0, 0), pt.set(V, z), z;
}
function Ai(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Vr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ky(e, t, n, i, a, l, u) {
  const f = e + 0.5 - n, m = t + 0.5 - i, b = Math.max(0, n - i), _ = Math.max(Math.abs(f) - b, 0), x = Math.hypot(_, m) / i;
  if (x >= 1) return 0;
  const S = Vr(Ai(e * 17 + 3, t * 13 + 7)), A = x + l * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), O = Py(e, t, f, m, n, i), V = l * 0.55;
  if (O < V) return 0;
  const P = 0.45 + 0.55 * ((O - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * v * P));
}
function Py(e, t, n, i, a, l) {
  const u = Math.floor((n + a) / 3), f = Math.floor((i + l) / 2), m = Vr(Ai(u * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), _ = Math.floor((i + l) / 1.5), x = Vr(Ai(b * 23 + 800, _ * 29 + 500)), S = Vr(Ai(e * 3 + 100, t * 5 + 200));
  return m * 0.55 + x * 0.3 + S * 0.15;
}
function Ay(e, t, n, i, a) {
  const { r: l, g: u, b: f, a: m } = i, b = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${b}:${_}:${n.toFixed(2)}:${l}:${u}:${f}:${m.toFixed(3)}:${x.toFixed(2)}`;
  if (pt.has(S)) {
    const P = pt.get(S);
    return pt.delete(S), pt.set(S, P), P;
  }
  pt.size >= Sc && pt.delete(pt.keys().next().value);
  const A = wc(b, _), v = A.getContext("2d"), O = v.createImageData(b, _), V = O.data, z = Math.max(0, Math.min(1, n));
  for (let P = 0; P < _; P++)
    for (let D = 0; D < b; D++) {
      const E = ky(D, P, e, t, z, x, m);
      if (E <= 0) continue;
      const F = (P * b + D) * 4;
      V[F] = l, V[F + 1] = u, V[F + 2] = f, V[F + 3] = E;
    }
  return v.putImageData(O, 0, 0), pt.set(S, A), A;
}
function Sh(e, t, n) {
  var O, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = wy(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = Cy(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), m = Number(((O = t == null ? void 0 : t.angle) == null ? void 0 : O.value) ?? 0), b = Sy(t, a), _ = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const z = a * f, P = a, D = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), E = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = My(z, P, l, u, D, E, F);
  } else if (i === "crayon") {
    const z = a * f, P = a, D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = Ay(z, P, l, u, D);
  } else
    v = Ny(a, l, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: m, stampKind: i, scatter: A, latitudeCorrection: x };
}
function Cy(e) {
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
function Iy(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Pf(e, t, n, i, a) {
  const l = e.angle, u = e.desc.width;
  function f(b, _) {
    l === 0 ? e.ctx.drawImage(e.stampTex, b - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(b, _), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const m = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - m < 0 && f(t + u, n), t + m > u && f(t - u, n);
}
function Nc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: b, count: _ } = e.scatter, x = b * e.radiusPx * a, S = Ai(t, n);
    for (let A = 0; A < _; A++) {
      const v = Vr(S + A * 2) * Math.PI * 2, O = Math.sqrt(Vr(S + A * 2 + 1)) * x, V = t + Math.cos(v) * O, z = n + Math.sin(v) * O, P = Math.max(0.5, e.radiusPx * a * 0.48), D = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, E = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(D)) : 1, F = P * e.aspect * E;
      Pf(e, V, z, P, F);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, m = l * e.aspect * f;
  Pf(e, t, n, l, m);
}
function Af(e, t, n) {
  const i = xy(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, u = Sh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(A - f[S - 1].x) > a * 0.5 && (A += A < f[S - 1].x ? a : -a), f.push({ x: A, y: v });
  }
  if (Nc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let m = f[0], b = f[0], _ = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const A = f[S], v = { x: (b.x + A.x) * 0.5, y: (b.y + A.y) * 0.5 };
    S === 1 ? x = Na(u, _.x, _.y, v.x, v.y, x) : x = Yo(u, m, _, v, A, x), m = b, b = A, _ = v;
  }
  f.length === 2 ? Na(u, _.x, _.y, b.x, b.y, x) : Yo(u, m, _, b, b, x), e.restore();
}
function Ro(e, t, n) {
  var x;
  const i = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, u = Iy(t), f = [];
  let m = 1 / 0, b = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = _y(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - f[S - 1].x) > a * 0.5 && (v += v < f[S - 1].x ? a : -a), f.push({ x: v, y: Number(A.y || 0) * l }), v < m && (m = v), v > b && (b = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let A = 1; A < f.length; A++) e.lineTo(f[A].x + S, f[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, _(0), m < 0 && _(a), b > a && _(-a), e.restore();
}
function so(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Ro(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? Af(e, t, n) : (Ji = tr(Ji, n.width, n.height), dt(Ji), Af(Ji.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(Ji.canvas, 0, 0), e.restore());
}
function Er(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Na(e, t, n, i, a, l) {
  const u = i - t, f = a - n, m = Math.hypot(u, f);
  if (m < 1e-9) return l;
  let b = e.spacingPx - l;
  for (; b <= m; ) {
    const _ = b / m;
    Nc(e, t + u * _, n + f * _, 1), b += e.spacingPx;
  }
  return m - b + e.spacingPx;
}
function Yo(e, t, n, i, a, l) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, m = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, x = f, S = x + m, A = S + b, v = S - x, O = 16;
  let V = l, z = n.x, P = n.y;
  for (let D = 1; D <= O; D++) {
    const E = x + v * D / O, F = ((x - E) * t.x + (E - _) * n.x) / (x - _), Y = ((x - E) * t.y + (E - _) * n.y) / (x - _), j = ((S - E) * n.x + (E - x) * i.x) / (S - x), Z = ((S - E) * n.y + (E - x) * i.y) / (S - x), fe = ((A - E) * i.x + (E - S) * a.x) / (A - S), U = ((A - E) * i.y + (E - S) * a.y) / (A - S), pe = ((S - E) * F + (E - _) * j) / (S - _), xe = ((S - E) * Y + (E - _) * Z) / (S - _), I = ((A - E) * j + (E - x) * fe) / (A - x), we = ((A - E) * Z + (E - x) * U) / (A - x), ie = ((S - E) * pe + (E - x) * I) / (S - x), he = ((S - E) * xe + (E - x) * we) / (S - x);
    V = Na(e, z, P, ie, he, V), z = ie, P = he;
  }
  return V;
}
function Ty(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, u = l.width, f = n * l.height, m = e.activeStroke;
  let b = t * u;
  if (m && Math.abs(b - m.prev.x) > u * 0.5 && (b += b < m.prev.x ? u : -u), !m) {
    const A = Sh(a, i, l), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), O = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", z = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Nc(A, b, f, 1), e.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
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
      velocityWidthFactor: O,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (m.prev.x + b) * 0.5, x = (m.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: m.stampTex,
    radiusPx: m.radiusPx,
    spacingPx: m.spacingPx,
    desc: l,
    aspect: m.aspect,
    angle: m.angle,
    stampKind: m.stampKind,
    scatter: m.scatter,
    latitudeCorrection: m.latitudeCorrection
  };
  m.pointCount === 1 ? m.distSinceStamp = Na(S, m.lastMidX, m.lastMidY, _, x, m.distSinceStamp) : m.distSinceStamp = Yo(
    S,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: _, y: x },
    { x: b, y: f },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: b, y: f }, m.lastMidX = _, m.lastMidY = x, m.pointCount++, e.displayDirty = !0;
}
function Hl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = vi(t, n), u = {
    descriptor: i,
    committedMask: vi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: vi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = vi(t, n);
  let b = null, _ = "", x = null;
  function S(U) {
    return {
      actionGroupId: U,
      descriptor: i,
      committedPaint: vi(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(U) {
    let pe = a.get(U);
    return pe || (pe = S(U), a.set(U, pe)), pe;
  }
  function v(U) {
    return _ === "mask" ? u : b ? A(b) : f;
  }
  function O(U) {
    var he;
    const pe = !x || x.length !== U.length || U.some((L, Q) => L !== x[Q]), xe = _ === "paint" && ((he = b ? a.get(b) : f) == null ? void 0 : he.activeStroke) || null;
    let I = u.displayDirty || f.displayDirty || pe;
    for (const L of U) {
      const Q = a.get(L);
      if (Q != null && Q.displayDirty) {
        I = !0;
        break;
      }
    }
    if (xe && (I = !0), !I) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const L of U) {
      const Q = a.get(L);
      Q && (Q.displayDirty = !1);
    }
    x = [...U];
    const we = m.ctx;
    dt(m);
    const ie = !!(xe != null && xe.isEraser);
    for (const L of U) {
      const Q = a.get(L);
      if (!Q) continue;
      const De = b === Q.actionGroupId && _ === "paint" ? Q.activeStroke : null;
      if (ie)
        St = tr(St, t, n), dt(St), St.ctx.drawImage(Q.committedPaint.canvas, 0, 0), Er(St.ctx, l.canvas), we.drawImage(St.canvas, 0, 0);
      else if (we.drawImage(Q.committedPaint.canvas, 0, 0), De) {
        const Re = Q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, De.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = Re, we.drawImage(l.canvas, 0, 0), we.restore();
      }
    }
  }
  function V(U) {
    var xe, I, we, ie, he;
    for (const L of a.values())
      dt(L.committedPaint), dt(L.currentStroke), L.activeStroke = null, L.displayDirty = !0;
    dt(u.committedMask), dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const pe = [
      ...Array.isArray((I = (xe = U == null ? void 0 : U.painting) == null ? void 0 : xe.paint) == null ? void 0 : I.strokes) ? U.painting.paint.strokes : [],
      ...Array.isArray((ie = (we = U == null ? void 0 : U.painting) == null ? void 0 : we.mask) == null ? void 0 : ie.strokes) ? U.painting.mask.strokes : []
    ];
    for (const L of pe) {
      if (((he = L == null ? void 0 : L.targetSpace) == null ? void 0 : he.kind) !== "ERP_GLOBAL") continue;
      const Q = String((L == null ? void 0 : L.layerKind) || "paint"), De = String((L == null ? void 0 : L.toolKind) || "pen") === "eraser";
      if (Q === "mask") {
        const Re = u.descriptor;
        De ? (St = tr(St, Re.width, Re.height), dt(St), so(St.ctx, L, Re), Er(u.committedMask.ctx, St.canvas)) : so(u.committedMask.ctx, L, Re);
        continue;
      }
      if (De) {
        St = tr(St, i.width, i.height), dt(St), so(St.ctx, L, i);
        for (const Re of a.values())
          Er(Re.committedPaint.ctx, St.canvas), Re.displayDirty = !0;
      } else {
        const Re = String((L == null ? void 0 : L.actionGroupId) || "__default__"), Be = A(Re), je = Be.descriptor;
        so(Be.committedPaint.ctx, L, je), Be.displayDirty = !0;
      }
    }
    O([...a.keys()]);
  }
  function z(U, pe) {
    _ = String((U == null ? void 0 : U.layerKind) || "");
    const xe = String((U == null ? void 0 : U.toolKind) || "") === "eraser";
    if (_ === "mask")
      b = null, dt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const I = xe ? f : A(String((U == null ? void 0 : U.actionGroupId) || "__default__"));
      b = xe ? "" : String((U == null ? void 0 : U.actionGroupId) || "__default__"), dt(I.currentStroke), I.activeStroke = null, I.displayDirty = !0;
    }
  }
  function P(U, pe) {
    var Q;
    const xe = String((U == null ? void 0 : U.layerKind) || "paint"), I = String((U == null ? void 0 : U.toolKind) || "") === "eraser", we = xe === "mask" ? u : I ? f : A(String((U == null ? void 0 : U.actionGroupId) || b || "__default__")), ie = we.activeStroke, he = we.descriptor;
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
      ie.pointCount === 2 ? Na(De, ie.lastMidX, ie.lastMidY, ie.prev.x, ie.prev.y, ie.distSinceStamp) : Yo(De, ie.pprev, { x: ie.lastMidX, y: ie.lastMidY }, ie.prev, ie.prev, ie.distSinceStamp);
    }
    we.lassoPreviewActive && (dt(we.currentStroke), Ro(we.currentStroke.ctx, U, he), we.lassoPreviewActive = !1);
    const L = xe === "mask" ? u.committedMask : we.committedPaint;
    if (I && xe === "paint")
      for (const _e of a.values())
        Er(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (I)
      Er(L.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (ie == null ? void 0 : ie.strokeOpacity) ?? 1));
      L.ctx.save(), L.ctx.globalAlpha = _e, L.ctx.drawImage(we.currentStroke.canvas, 0, 0), L.ctx.restore();
    }
    yy() && (String((U == null ? void 0 : U.toolKind) || ""), String((he == null ? void 0 : he.kind) || ""), Number((he == null ? void 0 : he.width) || 0), Number((he == null ? void 0 : he.height) || 0), String(((Q = U == null ? void 0 : U.targetSpace) == null ? void 0 : Q.viewMode) || ""), Number((U == null ? void 0 : U.aspect) ?? 1), Nf(we.currentStroke.canvas), Nf(L.canvas), void 0), dt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, b = null, _ = "", O([...a.keys()]);
  }
  function D(U) {
    if (_ === "mask")
      dt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !b)
      dt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const pe = a.get(b);
      pe && (dt(pe.currentStroke), pe.activeStroke = null, pe.lassoPreviewActive = !1, pe.displayDirty = !0);
    }
    b = null, _ = "", O([...a.keys()]);
  }
  function E(U, pe) {
    var I;
    if (_ = String((U == null ? void 0 : U.layerKind) || ""), String(((I = U == null ? void 0 : U.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        dt(u.currentStroke), Ro(u.currentStroke.ctx, U, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const we = String((U == null ? void 0 : U.toolKind) || "") === "eraser", ie = we ? f : A(String((U == null ? void 0 : U.actionGroupId) || b || "__default__"));
        b = we ? "" : String((U == null ? void 0 : U.actionGroupId) || b || "__default__"), dt(ie.currentStroke), Ro(ie.currentStroke.ctx, U, ie.descriptor), ie.lassoPreviewActive = !0, ie.displayDirty = !0;
      }
      O([...a.keys()]);
    }
  }
  function F(U) {
    return O(U ?? [...a.keys()]), {
      displayPaint: m,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function Y(U) {
    return a.get(String(U)) ?? null;
  }
  function j() {
    return [...a.keys()];
  }
  function Z(U) {
    var he;
    const pe = a.get(String(U));
    if (!pe) return null;
    const xe = _ === "paint" && b === pe.actionGroupId, I = _ === "paint" && ((he = b ? a.get(b) : f) == null ? void 0 : he.activeStroke) || null;
    if (I != null && I.isEraser)
      return Zt = tr(Zt, t, n), dt(Zt), Zt.ctx.drawImage(pe.committedPaint.canvas, 0, 0), Er(Zt.ctx, l.canvas), Zt.canvas;
    const we = xe ? pe.activeStroke : null;
    if (!we) return pe.committedPaint.canvas;
    Zt = tr(Zt, t, n), dt(Zt), Zt.ctx.drawImage(pe.committedPaint.canvas, 0, 0);
    const ie = pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return Zt.ctx.save(), Zt.ctx.globalAlpha = ie, Zt.ctx.drawImage(l.canvas, 0, 0), Zt.ctx.restore(), Zt.canvas;
  }
  function fe() {
    return gr = tr(gr, t, n), dt(gr), _l(gr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (St = tr(St, t, n), dt(St), St.ctx.drawImage(u.committedMask.canvas, 0, 0), Er(St.ctx, l.canvas), dt(gr), _l(gr.ctx, St.canvas)) : _l(gr.ctx, l.canvas)), gr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: z,
    appendStrokePoint: Ty,
    updateActiveStroke: E,
    commitActiveStroke: P,
    cancelActiveStroke: D,
    getErpTarget: F,
    ensureTarget: v,
    getGroupTarget: Y,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: fe,
    getAllGroupIds: j
  };
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function xl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Ey(e, t) {
  let n = $t(t) - $t(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Cf = Math.PI / 180, If = 0.12, Dy = 3, Ry = 35, Oy = 140, aa = 100, Fy = 20, Tf = 0.8;
function Ly(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = W(Number(e || aa), 1, 179) * Cf;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / Cf;
}
function zy(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function vs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: aa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, m = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(z, P = null) {
    f && f(z, P);
  }
  function _(z, P, D = null, E = performance.now()) {
    return m.drag.active = !0, m.drag.lastX = Number(z || 0), m.drag.lastY = Number(P || 0), m.drag.lastTs = Number(E || performance.now()), m.drag.pointerId = D, m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.lastTs = m.drag.lastTs, m.velHistory = [], b("drag", { phase: "start", x: m.drag.lastX, y: m.drag.lastY, pointerId: D }), !0;
  }
  function x(z, P, D = "pano", E = performance.now()) {
    if (!m.drag.active) return !1;
    const F = Number(E || performance.now()), Y = Number(z), j = Number(P), Z = Y - m.drag.lastX, fe = j - m.drag.lastY;
    m.drag.lastX = Y, m.drag.lastY = j, m.drag.lastTs = F;
    const U = i() || { x: 1, y: 1 }, pe = Number(U.x || 1), xe = Number(U.y || 1), I = { ...t() };
    let we = 0, ie = 0;
    if (D === "unwrap") {
      const L = a() || { w: 1, h: 1 }, Q = Math.max(1, Number(L.w || 1)), _e = Math.max(1, Number(L.h || 1)), De = Z / Q, Re = fe / _e;
      we = -De * 360 * pe, ie = Re * 180 * xe;
    } else {
      const L = l() || { w: 0, h: 0 }, Q = Math.max(1, Number(L.w || 0)), _e = Math.max(1, Number(L.h || 0));
      if (Q > 1 && _e > 1) {
        const De = W(Number(I.fov || aa), 1, 179), Re = W(Ly(De, Q, _e), 0.1, 179);
        we = -(Z / Q) * De * pe, ie = fe / _e * Re * xe;
      } else
        we = -Z * If * pe, ie = fe * If * xe;
    }
    I.yaw = $t(Number(I.yaw || 0) + we), I.pitch = W(Number(I.pitch || 0) + ie, -89.9, 89.9), n(I), m.velHistory.push({ ts: F, yaw: I.yaw, pitch: I.pitch });
    let he = 0;
    for (; he < m.velHistory.length - 1 && m.velHistory[he].ts < F - 100; ) he++;
    return he > 0 && m.velHistory.splice(0, he), m.inertia.active = !1, m.inertia.lastTs = F, u(), b("drag", { phase: "move", dx: Z, dy: fe, dYaw: we, dPitch: ie }), !0;
  }
  function S(z = performance.now()) {
    if (!m.drag.active) return !1;
    m.drag.active = !1;
    const P = Number(z || performance.now());
    m.drag.lastTs = P;
    const D = m.velHistory.filter((F) => P - F.ts <= 80);
    if (D.length >= 2) {
      const F = D[0], Y = D.at(-1), j = Math.max(1e-3, (Y.ts - F.ts) / 1e3);
      let Z = Y.yaw - F.yaw;
      Z > 180 && (Z -= 360), Z < -180 && (Z += 360), m.inertia.vx = Z / j, m.inertia.vy = (Y.pitch - F.pitch) / j;
    } else
      m.inertia.vx = 0, m.inertia.vy = 0;
    m.velHistory = [];
    const E = Math.hypot(m.inertia.vx, m.inertia.vy);
    return m.inertia.active = E > Fy, m.inertia.lastTs = P, b("drag", { phase: "end", speed: E, inertiaActive: m.inertia.active }), !0;
  }
  function A(z = performance.now()) {
    if (!m.inertia.active) return !1;
    const P = Number(z || performance.now()), D = Math.max(1e-3, (P - (m.inertia.lastTs || P)) / 1e3);
    m.inertia.lastTs = P;
    const E = { ...t() };
    E.yaw = $t(Number(E.yaw || 0) + m.inertia.vx * D), E.pitch = W(Number(E.pitch || 0) + m.inertia.vy * D, -89.9, 89.9);
    const F = Math.exp(-5.5 * D);
    return m.inertia.vx *= F, m.inertia.vy *= F, Math.abs(m.inertia.vx) < Tf && Math.abs(m.inertia.vy) < Tf && (m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.active = !1), n(E), u(), m.inertia.active;
  }
  function v(z) {
    const P = Math.sign(Number(z || 0));
    if (!P) return !1;
    const D = { ...t() }, E = Number(D.fov || aa);
    return D.fov = W(E + P * Dy, Ry, Oy), n(D), u(), b("wheel", { deltaSign: P, fovBefore: E, fovAfter: D.fov }), !0;
  }
  function O(z) {
    return v(Math.sign(zy(z)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: aa }), m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, u();
  }
  return {
    state: m,
    startDrag: _,
    moveDrag: x,
    endDrag: S,
    stepInertia: A,
    applyWheel: v,
    applyWheelEvent: O,
    resetView: V
  };
}
function qo(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const Ef = Math.PI / 180;
function Zi(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $y(e) {
  const t = e || {}, n = Zi(t.yaw_deg, 0), i = Zi(t.pitch_deg, 0), a = Zi(t.roll_deg ?? t.rot_deg, 0), l = xl(Zi(t.hFOV_deg, 90), 1, 179), u = xl(Zi(t.vFOV_deg, 60), 1, 179), f = Math.tan(l * Ef * 0.5) / Math.max(1e-6, Math.tan(u * Ef * 0.5)), m = xl(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: u,
    aspect: m
  };
}
const Nh = 0.28;
function jy(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), i = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), l = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function Vy(e, t = {}) {
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
    crop: jy(e.crop),
    opacity: f ? Nh : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function _s(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => Vy(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function Mh(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || _s(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var v;
    const m = String((f == null ? void 0 : f.assetId) || "").trim(), b = m || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || u.has(b)) return;
    const _ = m ? a[m] : null, x = t(b, _, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), A = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || A <= 0 || (u.add(b), l.push({
      assetId: b,
      source: x,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, b, _, x)) ?? [
        b,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), l;
}
function Mc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Hy(e, t = 360) {
  return Mc(e, t);
}
function wr(e) {
  const t = $y(e || {});
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
const { app: ct } = Ao;
function Ul() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ao == null ? void 0 : Ao.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Gr = Math.PI / 180, Xo = {}, Uy = { Nu: 24, Nv: 14 }, By = 10, Gy = 120;
function Ky() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qi(e) {
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
function Wy() {
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
function Kr(e) {
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
function kh(e) {
  const t = Kr(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Ph(e, t, n) {
  kh(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Bl(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Ah(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Yy(e) {
  return qo(Ah(e));
}
function Hr(e = null) {
  var l, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (l = ct == null ? void 0 : ct.canvas) == null ? void 0 : l.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function Ch(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(t)
  };
}
const pa = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Hr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Hr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, Ih(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Ih(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : Ch(i, e).chosenPath, l = Bl(e);
      this.activeBackend = l;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (l === a && l !== "none" && u === i && f === m) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = m, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && Ci(e, { keepMonitor: i === "stickers" }), Lv(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Bl(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ci(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Ci(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function qy(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ci(e, t = {}) {
  var i, a, l, u, f;
  if (!e) return;
  Zo.unregister(e), qy(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((m) => {
      if (m === (n == null ? void 0 : n.widget)) return !1;
      const b = String((m == null ? void 0 : m.name) || ""), _ = String((m == null ? void 0 : m.type) || ""), x = Ul();
      return !(b === x || _ === x || b === "pano_preview" || _ === "pano_preview" || b === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || pa.unregister(e);
}
function Wr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Df(e, t) {
  return Wr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function lo(e, t) {
  return Wr(e.x * t, e.y * t, e.z * t);
}
function wl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Rf(e, t) {
  return Wr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function co(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wr(e.x / t, e.y / t, e.z / t);
}
function Fr(e, t) {
  const n = e * Gr, i = t * Gr, a = Math.cos(i);
  return Wr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function kc(e, t, n = 0) {
  const i = Fr(e, t), a = Wr(0, 1, 0);
  let l = Rf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Wr(1, 0, 0)), l = co(l);
  let u = co(Rf(i, l));
  const f = n * Gr, m = Math.cos(f), b = Math.sin(f), _ = Df(lo(l, m), lo(u, b)), x = Df(lo(l, -b), lo(u, m));
  return { fwd: i, right: co(_), up: co(x) };
}
function Xy(e, t = "#00ff00") {
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
function Jy(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Ma(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Pc(e) {
  var f, m;
  const t = Jy(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = Ma(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((m = Ma(e, "coverage")) == null ? void 0 : m.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const u = Xy(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function Ma(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Of(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function Th(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Zy(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Eh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Dh(e, t, n = null) {
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
  return !i && n != null && (i = Zy(e == null ? void 0 : e.graph, n)), i;
}
function Qy(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Ac(e, t = []) {
  const n = Qy(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function Ff(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Jo(e, t) {
  const n = Ff(e), i = Ff(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function ev(e, t = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Ac(e, t).map((b) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(b))).filter((b) => b >= 0), l = n.map((b, _) => ({ input: b, idx: _ })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), u = [.../* @__PURE__ */ new Set([...a, ...l])], f = [];
  for (const b of u) {
    const _ = Dh(e, b);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const x = (m = n[b]) == null ? void 0 : m.link;
    if (x == null) continue;
    const S = Th(e == null ? void 0 : e.graph, x), { originId: A } = Eh(S);
    A != null && f.push(String(A));
  }
  return [...new Set(f)];
}
const Zo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = tn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var b, _, x, S, A;
        if (!l) return;
        const u = Jo(i, l == null ? void 0 : l.id);
        ev(l, ["erp_image", "bg_erp"]).some((v) => Jo(i, v)), !(String(l.__panoPreviewMode || "") === "cutout" && !u) && (Kl(l), (_ = (b = l.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || _.call(b), (x = l.setDirtyCanvas) == null || x.call(l, !0, !0), (A = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
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
function Qo(e) {
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
function tv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function nv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function rv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function iv(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (tv(t)) return [t];
  const { filename: n, subfolder: i } = nv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Qo({
    filename: n,
    subfolder: i,
    type: l
  }));
  return rv([...a, t]);
}
function av(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Qo({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Lf(e) {
  const t = ct == null ? void 0 : ct.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Jo(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const u of l)
      if (Jo(u, a)) return t[u];
  }
  return null;
}
function ar(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ar(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Qo({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = ar(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Qo(e);
}
function ov(e) {
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
function sv(e, t) {
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
function lv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((u) => t.push(u));
  }, a = (l, u = 0) => {
    !l || u > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, u + 1), a(l.ui, u + 1), a(l.data, u + 1), a(l.result, u + 1));
  };
  return a(e, 0), t;
}
function cv(e, t) {
  try {
    const n = lv(t);
    let i = "";
    for (const a of n)
      if (i = ar(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), sv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function uv(e, t = []) {
  var b, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Ac(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), l = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const x of u) {
    const S = n[x], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = Th(e.graph, A), { originId: O, originSlot: V } = Eh(v);
    if (O == null) continue;
    const z = Dh(e, x, O);
    if (!z) continue;
    const P = Number(V || 0), D = Lf((z == null ? void 0 : z.id) ?? O), E = Array.isArray(D == null ? void 0 : D.images) ? D.images : [];
    if (E.length) {
      const Z = [];
      P >= 0 && P < E.length && Z.push(E[P]), Z.push(...E);
      for (const fe of Z) {
        const U = ar(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (ct == null ? void 0 : ct.getNodeImageUrls) == "function" ? ct.getNodeImageUrls(z) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const Z = [];
      P >= 0 && P < F.length && Z.push(F[P]), Z.push(...F);
      for (const fe of Z) {
        const U = ar(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const Y = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (Y.length) {
      const Z = [];
      P >= 0 && P < Y.length && Z.push(Y[P]), Z.push(...Y);
      for (const fe of Z) {
        const U = ar(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const j = (b = z == null ? void 0 : z.widgets) == null ? void 0 : b.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (j) {
      let Z = ar(j.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (Z = tn.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`)), Z)
        return String((S == null ? void 0 : S.name) || ""), { src: Z, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = Lf(e == null ? void 0 : e.id), m = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && m.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && m.push(...f.ui.pano_input_images), m.length > 0)
    for (const x of m) {
      const S = ar(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function fv(e, t = [], n = {}) {
  const i = uv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = iv(a);
  if (!l.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", m = e.__panoLinkedInputImageCache.get(f);
  if (m && m.srcRaw === a && m.img) return m.img;
  if (m && m.pendingSrcRaw === a && m.pendingImg)
    return u && m.img && (m.img.complete || m.img.naturalWidth || m.img.width) ? m.img : m.pendingImg;
  const b = new Image(), _ = m || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = b, e.__panoLinkedInputImageCache.set(f, _);
  let x = -1;
  const S = () => {
    var v, O, V, z;
    if (x += 1, x >= l.length) {
      if (((O = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : O.call(v, f)) === _ && _.pendingImg === b && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (z = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || z.call(V, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const A = l[x];
    _.pendingResolvedSrc = A, b.src = A;
  };
  return b.onload = () => {
    var A, v, O;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, f)) === _ && _.pendingImg === b && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || b.src || ""), _.img = b, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || b.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
  }, b.onerror = (A) => {
    var v, O, V, z;
    if (x + 1 < l.length) {
      S();
      return;
    }
    if (((O = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : O.call(v, f)) === _ && _.pendingImg === b && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (z = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || z.call(V, f);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), u && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : b;
}
function Gl(e, t = [], n = null, i = {}) {
  const a = fv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Kl(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function Rh(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Dr(e, t, n = "") {
  const i = Rh(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Gy ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function Wl(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, f = i / l, m = Math.min(u, f);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function dv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = i + (l - m) * 0.5, x = a + (u - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, x, m, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + m * 0.5, x + b * 0.5 + 0.5), e.restore();
}
function uo(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function hv(e) {
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
function Oh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, m = a / u;
  return m > l && (m = l, f = l * u), {
    x: n + (a - f) * 0.5,
    y: i + (l - m) * 0.5,
    w: f,
    h: m
  };
}
function pv(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const u = Oh(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function mv(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var f;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let u = 22;
    try {
      const m = typeof l.computeSize == "function" ? l.computeSize(((f = Kr(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (u = Number(m[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Oo(e) {
  const n = mv(e) + 2, i = 8, a = Kr(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || l < 80 ? null : { x: i, y: n, w: l, h: u };
}
function Fh(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = av(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var m, b, _;
    (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function gv(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, u) => Number((l == null ? void 0 : l.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Yl(e, t) {
  return _s(t, {
    selectedId: null,
    hoveredId: null
  });
}
function ql(e, t, n) {
  return Mh(t, (i, a) => Fh(e, i, a), { scene: n });
}
function bv(e, t) {
  var u;
  const n = $h(e, t);
  if (!n) return [];
  const i = jh(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], l = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const m = n.getGroupDisplayCanvas(f);
    return m ? {
      id: `paint_group:${f}`,
      source: m,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(l.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function yv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, u = (f) => {
    const m = f.x - a, b = f.y - l, _ = Math.hypot(m, b) || 1;
    return { x: f.x + m / _ * i, y: f.y + b / _ * i };
  };
  return [u(e), u(t), u(n)];
}
function zf(e, t, n, i, a, l, u, f) {
  const m = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(m) < 1e-6) return;
  const [b, _, x] = yv(l, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(b.x, b.y), e.lineTo(_.x, _.y), e.lineTo(x.x, x.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - i.y)) / m, A = (l.x * (a.x - i.x) + u.x * (n.x - a.x) + f.x * (i.x - n.x)) / m, v = (l.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / m, O = (l.y * (i.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - i.y)) / m, V = (l.y * (a.x - i.x) + u.y * (n.x - a.x) + f.y * (i.x - n.x)) / m, z = (l.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / m;
  e.transform(S, O, A, V, v, z), e.drawImage(t, 0, 0), e.restore();
}
function Lh(e, t, n, i) {
  const a = wl(e, t.right), l = wl(e, t.up), u = wl(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = l / u / i, m = a / u / i;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function zh(e, t, n, i, a, l, u, f = 12, m = 9) {
  var we;
  const b = W(Number(u.hFOV_deg || 30), 1, 179) * Gr, _ = W(Number(u.vFOV_deg || 30), 1, 179) * Gr, x = Math.tan(b * 0.5), S = Math.tan(_ * 0.5), A = u.crop || {}, v = W(Number(A.x0 ?? 0), 0, 1), O = W(Number(A.y0 ?? 0), 0, 1), V = W(Number(A.x1 ?? 1), 0, 1), z = W(Number(A.y1 ?? 1), 0, 1), P = Math.max(1e-4, V - v), D = Math.max(1e-4, z - O), E = kc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), F = [], Y = [], j = [], Z = [];
  for (let ie = 0; ie <= m; ie++) {
    const he = ie / m, Q = (1 - (O + he * D) * 2) * S;
    for (let _e = 0; _e <= f; _e++) {
      const De = _e / f, Be = ((v + De * P) * 2 - 1) * x, je = E.fwd.x + E.right.x * Be + E.up.x * Q, yt = E.fwd.y + E.right.y * Be + E.up.y * Q, Dt = E.fwd.z + E.right.z * Be + E.up.z * Q, vt = Math.hypot(je, yt, Dt) || 1e-8, Vt = je / vt, Pt = yt / vt, Ht = Dt / vt, un = Vt * i.right.x + Pt * i.right.y + Ht * i.right.z, wn = Vt * i.up.x + Pt * i.up.y + Ht * i.up.z, R = Vt * i.fwd.x + Pt * i.fwd.y + Ht * i.fwd.z;
      if (R <= 1e-4)
        F[ie] || (F[ie] = []), Y[ie] || (Y[ie] = []), F[ie][_e] = null, Y[ie][_e] = null;
      else {
        const H = wn / R / a, ae = un / R / a;
        F[ie] || (F[ie] = []), Y[ie] || (Y[ie] = []), F[ie][_e] = n.x + n.w * 0.5 + ae * n.h * 0.5, Y[ie][_e] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      j[ie] || (j[ie] = []), Z[ie] || (Z[ie] = []), j[ie][_e] = De, Z[ie][_e] = he;
    }
  }
  const fe = (we = l.assets) == null ? void 0 : we[u.asset_id], U = Fh(t, u.asset_id, fe);
  if (!U || !U.complete || !U.naturalWidth) return;
  const pe = Number(U.naturalWidth || U.width || 1), xe = Number(U.naturalHeight || U.height || 1), I = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = I;
  for (let ie = 0; ie < m; ie++)
    for (let he = 0; he < f; he++) {
      const L = F[ie][he], Q = Y[ie][he], _e = F[ie][he + 1], De = Y[ie][he + 1], Re = F[ie + 1][he], Be = Y[ie + 1][he], je = F[ie + 1][he + 1], yt = Y[ie + 1][he + 1];
      if (L === null || _e === null || Re === null || je === null) continue;
      const Dt = j[ie][he] * pe, vt = Z[ie][he] * xe, Vt = j[ie][he + 1] * pe, Pt = Z[ie][he + 1] * xe, Ht = j[ie + 1][he] * pe, un = Z[ie + 1][he] * xe, wn = j[ie + 1][he + 1] * pe, R = Z[ie + 1][he + 1] * xe;
      zf(e, U, { x: Dt, y: vt }, { x: Vt, y: Pt }, { x: wn, y: R }, { x: L, y: Q }, { x: _e, y: De }, { x: je, y: yt }), zf(e, U, { x: Dt, y: vt }, { x: wn, y: R }, { x: Ht, y: un }, { x: L, y: Q }, { x: je, y: yt }, { x: Re, y: Be });
    }
}
function vv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Pc(e), a = Oo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = kc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Gr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = Gl(
    e,
    Ac(e, ["erp_image", "bg_erp"]),
    () => {
      var E, F, Y;
      (F = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || F.call(E), (Y = e.setDirtyCanvas) == null || Y.call(e, !0, !1);
    }
  ), m = !!(f && f.complete && (f.naturalWidth || f.width)), b = Uh(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = b || _, S = Xo, A = Yl(e, i), v = ql(e, i, A), O = Mc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Br()), m) {
    const E = ys({
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
    }), Y = e.__panoRuntimeCore.syncState(E) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", O, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!Y, Y && t.drawImage(Y, a.x, a.y, a.w, a.h);
  }
  const z = x ? 8 : 12, P = x ? 6 : 9, D = gv(e, i);
  if (!m || D.length === 0) {
    const E = Wl(t == null ? void 0 : t.canvas, a);
    Vh(t, a, l, u, E);
  }
  !V && m && es(e, t, a, l, u, f, S), !V && D.length > 0 && D.forEach((E) => zh(t, e, a, l, u, i, E, z, P)), t.restore();
}
function _v(e, t, n, i, a = "preview_scene", l = "") {
  const u = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return ys({
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
function Fo(e, t, n, i) {
  var l, u, f, m, b, _;
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
          y: Number(x[1]) - Number(((m = e == null ? void 0 : e.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = wv(e, t, i);
  return a || null;
}
function xv(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), u = (t == null ? void 0 : t.ds) || ((S = ct == null ? void 0 : ct.canvas) == null ? void 0 : S.ds);
  if (!l || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const m = Array.isArray(u.offset) ? u.offset : [0, 0], b = (n - Number(l.left || 0)) / f - Number(m[0] || 0), _ = (i - Number(l.top || 0)) / f - Number(m[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(_) ? null : { x: b, y: _ };
}
function wv(e, t, n) {
  var a, l;
  const i = xv(t, n || (ct == null ? void 0 : ct.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function fo(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), Kr(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Ph(e, 320, 180), _i(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, A;
    const x = t ? t.apply(this, arguments) : void 0;
    try {
      const v = arguments[0];
      v && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), vv(this, v, i));
    } catch {
    }
    return x;
  }, e.onResize = function() {
    var S;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ts(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), Bh(this, 220, null), x;
  };
  const i = vs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (x) => {
      e.__panoPreviewView = x;
    },
    getViewportSize: () => {
      const x = Oo(e);
      return {
        w: Math.max(1, Number((x == null ? void 0 : x.w) || 0)),
        h: Math.max(1, Number((x == null ? void 0 : x.h) || 0))
      };
    },
    onInteraction: () => {
      var x;
      Hh(e), (x = e.setDirtyCanvas) == null || x.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(x, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const O = Fo(this, x, S, A) || { x: 0, y: 0 }, V = Kr(this), z = Number((V == null ? void 0 : V[0]) || 0), P = Number((V == null ? void 0 : V[1]) || 0);
        if (O.x >= z - 20 && O.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const E = Oo(this);
        if (Of(O.x, O.y, E))
          return (x == null ? void 0 : x.button) === 0 && i.startDrag(O.x, O.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(x, S, A) {
    try {
      const v = Fo(this, x, S, A);
      if (i.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return i.endDrag(), !0;
        const O = v || i.state.drag;
        return i.moveDrag(O.x, O.y, "pano"), !0;
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
  const m = e.onMouseWheel;
  e.onMouseWheel = function(x, S, A) {
    var v, O;
    try {
      if ((v = this.flags) != null && v.collapsed) return m ? m.apply(this, arguments) : void 0;
      const V = Fo(this, x, S, A), z = Oo(this);
      if (!V || !Of(V.x, V.y, z)) return m ? m.apply(this, arguments) : void 0;
      const P = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(P)) && ((O = this.setDirtyCanvas) == null || O.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const b = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = m, e.onRemoved = b, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), pa.unregister(this), Zo.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function Sv(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function $h(e, t) {
  var b, _, x, S, A, v, O, V, z, P, D, E;
  const n = (_ = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : _.strokes, i = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const u = Sv(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Hl(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.paint) !== m.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== m.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== m.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== m.rasterObjects) && (e.__panoPreviewPaintRevision = m, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function jh(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function Nv(e, t) {
  const n = $h(e, t);
  if (!n) return null;
  const i = jh(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function Mv(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = ar(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const u = new Image();
  return u.onload = () => {
    var m;
    n == null || n(), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, u.onerror = () => {
    var m;
    ((m = e.__panoPaintingLayerImageCache) == null ? void 0 : m.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function $f(e, t) {
  var l, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = Mv(e, t, () => {
      var m, b;
      return (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : b.call(m);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Nv(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function kv(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Pv(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function Av(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = kv(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const m = Pv(e, l, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    m.clearRect(0, 0, u.width, u.height), m.drawImage(n, 0, 0, u.width, u.height);
    const b = m.getImageData(0, 0, u.width, u.height).data, _ = t.getImageData(0, 0, i, a), x = _.data, S = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let v = 0; v < a; v += 1) {
      const O = (v + 0.5) * u.height / a - 0.5, V = W(Math.floor(O), 0, A), z = W(V + 1, 0, A), P = W(O - V, 0, 1);
      for (let D = 0; D < i; D += 1) {
        const E = (D + 0.5) * u.width / i - 0.5, F = W(Math.floor(E), 0, S), Y = W(F + 1, 0, S), j = W(E - F, 0, 1);
        let Z = 0, fe = 0, U = 0, pe = 0;
        const xe = (ie, he, L) => {
          const Q = (he * u.width + ie) * 4, _e = (b[Q + 3] || 0) / 255;
          Z += _e * L, fe += (b[Q] || 0) / 255 * _e * L, U += (b[Q + 1] || 0) / 255 * _e * L, pe += (b[Q + 2] || 0) / 255 * _e * L;
        };
        if (xe(F, V, (1 - j) * (1 - P)), xe(Y, V, j * (1 - P)), xe(F, z, (1 - j) * P), xe(Y, z, j * P), Z <= 1e-6) continue;
        const I = (v * i + D) * 4, we = 1 - Z;
        x[I] = Math.round(W((fe + x[I] / 255 * we) * 255, 0, 255)), x[I + 1] = Math.round(W((U + x[I + 1] / 255 * we) * 255, 0, 255)), x[I + 2] = Math.round(W((pe + x[I + 2] / 255 * we) * 255, 0, 255)), x[I + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function jf(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let m = e.__panoPreviewBgPaint;
  if (!m || m.__revKey !== f || m.width !== a || m.height !== l) {
    (!m || m.width !== a || m.height !== l) && (m = document.createElement("canvas"), m.width = a, m.height = l, e.__panoPreviewBgPaint = m);
    const b = m.getContext("2d");
    b.clearRect(0, 0, a, l), b.drawImage(t, 0, 0, a, l), Av(e, b, n, a, l, "__panoPreviewOverlayScratch"), m.__revKey = f;
  }
  return m;
}
function Cv(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  Rh(e, a);
  const l = Pc(e), u = t.parentElement, f = 1, m = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(m * f)), x = Math.max(64, Math.round(b * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = hv(l), v = Gl(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Z, fe;
          return (fe = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : fe.call(Z);
        },
        { preserveReadyWhilePending: !1 }
      ), O = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const V = { x: 0, y: 0, w: _, h: x }, z = O ? W(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, P = A ? wr(A) : null, D = W(Number((P == null ? void 0 : P.aspect) || z || 1), 0.05, 20), E = Oh(V, D);
      Wl(t, V), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, x);
      let F = "none", Y = "Open editor and add frame", j = "";
      if (j = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !O)
          F = "loading";
        else if (O) {
          const Z = Yl(e, l), fe = ql(e, l, Z), U = bv(e, l), pe = ia({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(fe) ? fe.map((I) => `${String((I == null ? void 0 : I.assetId) || "")}:${String((I == null ? void 0 : I.revision) || "")}`).join(",") : "",
              Array.isArray(U) ? U.map((I) => `${String((I == null ? void 0 : I.id) || "")}:${String((I == null ? void 0 : I.revision) || "")}:${Number((I == null ? void 0 : I.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: Z,
            textures: fe,
            rasterEntries: U,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Br()), e.__panoRuntimeCore.syncState(pe), e.__panoRuntimeCore.renderToContext(
            S,
            E,
            wr(A),
            { width: E.w, height: E.h, dpr: 1 }
          ) || (F = "empty", Y = "Open editor or run node");
        } else
          F = "empty", Y = "Connect ERP image";
      else {
        if (O) {
          const Z = $f(e, l), fe = Z != null && Z.source ? jf(e, v, Z.source, Z.revision || "") : v;
          pv(S, fe, V, 0.44);
        }
        F = "empty", Y = "Open editor and add frame";
      }
      F === "loading" ? (uo(e, !1), Dr(e, !0, j)) : F === "empty" ? (uo(e, !0, Y), Dr(e, !1, "")) : (uo(e, !1), Dr(e, !1, ""));
    } else {
      uo(e, !1), (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const A = { x: 0, y: 0, w: _, h: x }, v = Wl(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = kc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * Gr * 0.5), z = Gl(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, I;
          return (I = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : I.call(xe);
        }
      ), P = !!(z && z.complete && (z.naturalWidth || z.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, x);
      const D = Yl(e, l), E = ql(e, l, D), F = Mc(e.__panoPreviewView, l == null ? void 0 : l.coverage), Y = $f(e, l), j = (Y == null ? void 0 : Y.source) || null, Z = P && j ? jf(e, z, j, (Y == null ? void 0 : Y.revision) || "") : z, fe = Z !== z ? String(Z.__revKey || "") : z ? [
        String(z.currentSrc || z.src || ""),
        Number(z.naturalWidth || z.width || 0),
        Number(z.naturalHeight || z.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Br());
      let U = !1;
      if (P) {
        const I = e.__panoDomRuntimeCore.syncState(
          _v(Z, l, D, E, "runtime_dom_scene", fe)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", F, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        I && (S.drawImage(I, A.x, A.y, A.w, A.h), U = !0);
      }
      const pe = D.stickers;
      if (P && U)
        Dr(e, !1, "");
      else if (P)
        es(e, S, A, O, V, Z, Xo), Dr(e, !1, "");
      else if (j)
        es(e, S, A, O, V, j, Xo), Dr(e, !!z && !P, String((z == null ? void 0 : z.src) || ""));
      else {
        const xe = !!z && !P;
        Dr(e, xe, String((z == null ? void 0 : z.src) || "")), xe && dv(S, A, v);
      }
      if ((!P || pe.length === 0) && Vh(S, A, O, V, v), !U && pe.length > 0) {
        const xe = Uh(e), I = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || I, ie = we ? 8 : 12, he = we ? 6 : 9;
        pe.forEach((L) => zh(S, e, A, O, V, l, L, ie, he));
      } else if (!z || !P) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, x * 0.5 + 24 * v);
      }
    }
}
function es(e, t, n, i, a, l, u = Uy) {
  const f = Pc(e), m = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Br());
  const b = ov(l), _ = ys({
    stateRevision: [
      "runtime_bg_only",
      b,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(_)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(m.yaw || 0),
    pitchDeg: Number(m.pitch || 0),
    fovDeg: Number(m.fov || 100),
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
function Vf(e, t, n, i, a, l, u = 1) {
  let f = !1;
  e.strokeStyle = l, e.lineWidth = u, e.beginPath();
  for (const m of t) {
    const b = Lh(m, n, i, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), f = !0);
  }
  e.stroke();
}
function Vh(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const _ = [];
    for (let x = -180; x <= 180; x += 15) _.push(Fr(x, b));
    Vf(e, _, n, t, i, b === 0 ? u : l, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const _ = [];
    for (let x = -89; x <= 89; x += 15) _.push(Fr(b, x));
    Vf(e, _, n, t, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, b % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Fr(0, 0) },
    { name: "Right", dir: Fr(90, 0) },
    { name: "Back", dir: Fr(180, 0) },
    { name: "Left", dir: Fr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * a));
  e.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((b) => {
    const _ = Lh(b.dir, n, t, i);
    _ && e.fillText(b.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function Iv(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Hh(e) {
  const t = Iv(e);
  t.dragging = !1, t.hqFrames = By;
}
function ts(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Uh(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Tv(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Ev(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function mi(e, t) {
  return Ev(e, t) ? !1 : (Tv(e), !0);
}
function Dv() {
  var n;
  const e = (n = ct == null ? void 0 : ct.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Rv(e) {
  var n;
  if (!e) return;
  const t = (n = ct == null ? void 0 : ct.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Ov(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !kh(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function Fv(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, u;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Hf(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, ts(e, 150), t == null || t(), Bh(e, 180, t);
    }
  };
}
function Bh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function _i(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function Lv(e, t = {}) {
  var L;
  const n = t.__allowStandalone === !0, i = Yy(e);
  if (i && !n) {
    Ah(e);
    return;
  }
  i && Ov(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Zo.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || pa.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), m = a ? Ch(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Hr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (m.chosenPath = f, m.reason = "controller_target_backend");
  const b = a ? m.chosenPath : "dom", _ = m.signature || Hr(e);
  if (Number(e.__panoRebindGeneration || 0), Bl(e), e == null || e.id, e.__panoPreviewMode, m.reason, m.frontendVersionRaw, e.addDOMWidget, Kr(e), e.__panoFrontendSig = _, e.__panoStickersPath = b, a && pa.register(e), a && b === "legacy_draw") {
    if (l) return;
    Ci(e, { keepMonitor: !0 }), fo(e);
    return;
  }
  if ((L = e.__panoDomPreview) != null && L.widget) return;
  if (e.__panoLegacyPreviewHooked && Ci(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && fo(e);
    return;
  }
  const x = t.noPreview === !0, S = a || x ? 0 : 56, A = document.createElement("div");
  if (Wy(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), x && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
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
    const Q = e.addDOMWidget(Ul(), "preview", A, Hf(e, null));
    _i(e), e.__panoDomPreview = { widget: Q, root: A, requestDraw: () => {
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
  const O = document.createElement("canvas");
  O.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", v.appendChild(O), v.appendChild(V), A.appendChild(v), Ph(e, 120, 120), _i(e);
  let z = null;
  try {
    Fv(e, S, () => {
      var Q, _e;
      return (_e = (Q = e.__panoDomPreview) == null ? void 0 : Q.requestDraw) == null ? void 0 : _e.call(Q);
    }), z = e.addDOMWidget(
      Ul(),
      "preview",
      A,
      Hf(e, () => {
        var Q, _e;
        return (_e = (Q = e.__panoDomPreview) == null ? void 0 : Q.requestDraw) == null ? void 0 : _e.call(Q);
      }, S)
    );
  } catch {
    a && fo(e);
    return;
  }
  const P = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, D = () => {
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(Y));
  }, E = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ts(e, 150), D();
  }) : null;
  E == null || E.observe(v);
  const F = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const Q = 3, _e = (De) => {
      requestAnimationFrame(() => {
        var Be;
        const Re = !!(A != null && A.isConnected && (v != null && v.isConnected) && (O != null && O.isConnected) && Number(v.clientHeight || 0) > 0 && Number(O.clientHeight || 0) > 0);
        if (!Re && De < Q) {
          _e(De + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0), !Re) {
          if (l) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((O == null ? void 0 : O.clientHeight) || 0);
            return;
          }
          Ci(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", fo(e), (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0);
        }
      });
    };
    _e(1);
  }, Y = (Q) => {
    var De, Re, Be;
    P.raf = 0;
    const _e = j.stepInertia(Q);
    (P.needsDraw || _e) && (P.needsDraw = !1, (De = e.flags) != null && De.collapsed || Cv(e, O, null, j), (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !1)), (_e || P.needsDraw) && (P.raf = requestAnimationFrame(Y)), Ky() && (!e.__panoDebugLastTs || Q - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = Q, e.__panoPreviewMode, Kr(e), Qi(A), Qi(v), Qi(O), Qi(A.parentElement), Qi((Be = A.parentElement) == null ? void 0 : Be.parentElement), Number(O.width || 0), Number(O.height || 0), void 0);
  }, j = vs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (Q) => {
      e.__panoPreviewView = Q;
    },
    onInteraction: () => {
      D();
    }
  });
  O.addEventListener("pointerdown", (Q) => {
    var _e, De;
    mi(Q, v) && u && Q.button === 0 && ((_e = A.focus) == null || _e.call(A), (De = O.setPointerCapture) == null || De.call(O, Q.pointerId), O.style.cursor = "grabbing", j.startDrag(Q.clientX, Q.clientY, Q.pointerId));
  }), O.addEventListener("pointermove", (Q) => {
    !u || !j.state.drag.active || (mi(Q, v), j.moveDrag(Q.clientX, Q.clientY, "pano"));
  });
  const Z = (Q) => {
    var _e;
    !u || !j.state.drag.active || (mi(Q, v), (_e = O.releasePointerCapture) == null || _e.call(O, Q.pointerId), O.style.cursor = "grab", j.endDrag(), Hh(e), D());
  };
  O.addEventListener("pointerup", Z), O.addEventListener("pointercancel", Z), O.addEventListener("pointerleave", (Q) => {
    j.state.drag.active && Z(Q);
  });
  const fe = (Q) => {
    var De, Re, Be;
    if (!mi(Q, v) || !u) return;
    const _e = Dv();
    j.applyWheelEvent(Q) && D(), (De = Q.preventDefault) == null || De.call(Q), (Re = Q.stopPropagation) == null || Re.call(Q), (Be = Q.stopImmediatePropagation) == null || Be.call(Q), requestAnimationFrame(() => {
      var je, yt;
      Rv(_e), (yt = (je = ct == null ? void 0 : ct.canvas) == null ? void 0 : je.setDirty) == null || yt.call(je, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((Q) => {
    v.addEventListener(Q, fe, { passive: !1, capture: !0 }), O.addEventListener(Q, fe, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((Q) => {
    O.addEventListener(Q, (_e) => mi(_e, v)), v.addEventListener(Q, (_e) => mi(_e, v));
  });
  const U = Ma(e, "state_json");
  if (U && !U.__panoPreviewPatchedCb) {
    U.__panoPreviewPatchedCb = !0;
    const Q = U.callback;
    U.callback = (_e) => {
      const De = Q ? Q(_e) : void 0;
      return D(), De;
    };
  }
  const pe = Ma(e, "bg_color");
  if (pe && !pe.__panoPreviewPatchedCb) {
    pe.__panoPreviewPatchedCb = !0;
    const Q = pe.callback;
    pe.callback = (_e) => {
      const De = Q ? Q(_e) : void 0;
      return D(), De;
    };
  }
  const xe = e.onRemoved, I = e.onResize, we = e.onExecuted;
  e.onExecuted = function(Q) {
    cv(e, Q), Kl(e), _i(e), D();
    const _e = we ? we.apply(this, arguments) : void 0;
    return _i(e), _e;
  };
  const ie = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return Kl(e), _i(e), D(), ie ? ie.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var _e;
    const Q = I ? I.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ts(this, 150), D(), (_e = this.setDirtyCanvas) == null || _e.call(this, !0, !1), Q;
  }, e.onRemoved = function() {
    return he(), pa.unregister(this), Zo.unregister(this), xe ? xe.apply(this, arguments) : void 0;
  };
  const he = () => {
    var Q;
    P.raf && cancelAnimationFrame(P.raf), (Q = E == null ? void 0 : E.disconnect) == null || Q.call(E), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = I, e.onExecuted = we, e.onConnectionsChange = ie, e.onRemoved = xe;
  };
  e.__panoDomRestore = he, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: z, root: A, canvas: O, requestDraw: D, state: P, emptyHintEl: V }, F(), D();
}
function Uf(e, t = {}) {
  Ih(e).attach({
    ...t,
    mode: "cutout"
  });
}
const ns = Math.PI / 180;
function Yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Bf(e, t) {
  return Yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ho(e, t) {
  return Yr(e.x * t, e.y * t, e.z * t);
}
function Gf(e, t) {
  return Yr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function po(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yr(e.x / t, e.y / t, e.z / t);
}
function zv(e, t) {
  const n = e * ns, i = t * ns, a = Math.cos(i);
  return Yr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function $v(e, t, n = 0) {
  const i = zv(e, t), a = Yr(0, 1, 0);
  let l = Gf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Yr(1, 0, 0)), l = po(l);
  const u = po(Gf(i, l)), f = n * ns, m = Math.cos(f), b = Math.sin(f), _ = Bf(ho(l, m), ho(u, b)), x = Bf(ho(l, -b), ho(u, m));
  return { fwd: i, right: po(_), up: po(x) };
}
const mo = 140, jv = 180, Kf = 40, Sl = 10;
function Wf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Yf(e, t) {
  const n = Wf(e), i = Wf(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function qf(e) {
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
function Ii(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ii(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return qf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = Ii(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : qf(e);
}
function Gh(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Vv(e) {
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
function Xl(e) {
  var a;
  const t = (a = pn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Yf(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (Yf(l, n)) return t[l];
  return null;
}
function Hv(e) {
  var i, a;
  const t = Xl(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const u of l) {
        const f = Ii(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Uv(e, t = "erp_image") {
  var v, O, V, z, P, D, E, F, Y, j, Z, fe;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((U) => String((U == null ? void 0 : U.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const U = n.find((pe) => String((pe == null ? void 0 : pe.type) || "").toUpperCase() === "IMAGE" && (pe == null ? void 0 : pe.link) != null);
    (U == null ? void 0 : U.link) != null && (i = U.link);
  }
  if (i == null) return "";
  const l = ((O = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : O[i]) || ((P = (z = (V = pn) == null ? void 0 : V.graph) == null ? void 0 : z.links) == null ? void 0 : P[i]);
  if (!l) return "";
  const u = Number(l.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (F = (E = (D = pn) == null ? void 0 : D.graph) == null ? void 0 : E.getNodeById) == null ? void 0 : F.call(E, u), m = Xl(u), b = Xl(e == null ? void 0 : e.id), _ = [
    (Y = b == null ? void 0 : b.ui) == null ? void 0 : Y.pano_input_images,
    b == null ? void 0 : b.pano_input_images,
    m == null ? void 0 : m.images,
    (j = m == null ? void 0 : m.ui) == null ? void 0 : j.pano_input_images,
    m == null ? void 0 : m.pano_input_images
  ];
  for (const U of _)
    if (Array.isArray(U))
      for (const pe of U) {
        const xe = Ii(pe);
        if (xe) return xe;
      }
  let x = [];
  try {
    x = typeof ((Z = pn) == null ? void 0 : Z.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const U of x) {
      const pe = Ii(U);
      if (pe) return pe;
    }
  if (f) {
    const U = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const pe of U) {
      const xe = Ii(pe);
      if (xe) return xe;
    }
  }
  const S = (fe = f == null ? void 0 : f.widgets) == null ? void 0 : fe.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image"), A = String((S == null ? void 0 : S.value) || "").trim();
  return A ? tn.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function Xf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Jf(e, t, n, i, a, l) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Gh(l) || n <= 1 || i <= 1) {
    Xf(t, n, i);
    return;
  }
  const u = $v(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * ns * 0.5), m = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (O) => (O == null ? void 0 : O.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Br());
  const b = Vv(l), _ = ys({
    stateRevision: [
      "standalone_preview_scene",
      b,
      m
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: m,
    scene: _s(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const O = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Hy(a, m),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return O ? (t.drawImage(O, 0, 0, n, i), !0) : !1;
  })() || (es(e, t, { x: 0, y: 0, w: n, h: i }, u, f, l, Xo), Xf(t, n, i));
}
function Zf(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Bv {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = vs({
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
        `min-height:${mo}px`,
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
          return mo;
        },
        getHeight() {
          return mo;
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
            minHeight: Math.max(mo, Number(l.minHeight || 0)),
            minWidth: Math.max(jv, Number(l.minWidth || 0))
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
    !(this.img instanceof HTMLVideoElement) || !Gh(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Zf(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var b, _, x, S, A, v;
      const l = Fo(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!l || !Zf(l.x, l.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((b = t.view) == null ? void 0 : b.fov) || 100);
      const m = t.controller.applyWheel(Math.sign(f));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), m && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (v = n == null ? void 0 : n.stopImmediatePropagation) == null || v.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - Sl * 2), n = Math.max(60, Number(((u = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : u[1]) || 0) - Kf - Sl);
    return { x: Sl, y: Kf, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), Jf(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, u;
    const t = Hv(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const m = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", m), f.addEventListener("canplay", m), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", m), f.removeEventListener("canplay", m), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = Uv(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Jf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, u, f, m, b, _, x, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (f = (u = this.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
    if (Array.isArray((m = this.node) == null ? void 0 : m.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((v) => v !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((x = (_ = (b = this.node) == null ? void 0 : b.widgets) == null ? void 0 : _.find) == null ? void 0 : x.call(_, (v) => (v == null ? void 0 : v.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || A.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function Gv(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Bv(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Kv(e, t, n) {
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
function Kh(e) {
  return !!(e != null && e.prototype);
}
function Jl(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Wv(e, t = {}) {
  Kh(e) || Gv(e, {
    ...t,
    onOpen: Jl(e, t.onOpen)
  });
}
function Yv(e, t = {}) {
  if (!Kh(e)) {
    Uf(e, {
      ...t,
      onOpen: Jl(e, t.onOpen)
    });
    return;
  }
  Kv(e, "cutout_preview", (n) => {
    Uf(n, {
      ...t,
      onOpen: Jl(n, t.onOpen)
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
}, Jn = "pen";
function Qf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function qv(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((x) => {
      i.push(String(x || ""));
    }), !i.length)) return;
    const _ = Number(b.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function m(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > l && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      m(String(b || ""));
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
      const b = i.length, _ = Math.max(0, b - u), x = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(x, x + u), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
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
function Xv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Jv(e) {
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
function Zv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Qv(e, t) {
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
function go(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = Qv(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function e1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const m = go(e.points, t, 3);
    return m ? { geometryKind: a, points: m } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = go(e.points, t, 1);
  if (!l) return null;
  const u = go(e.rawPoints, t, 1), f = go(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: u || l.map((m) => ({ ...m })),
    processedPoints: f || l.map((m) => ({ ...m }))
  };
}
function t1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Zv(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = e1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = et(e.size, null), u = et(e.opacity, null);
  if (l == null || u == null) return null;
  const f = String(e.id || "").trim(), m = String(e.actionGroupId || "").trim();
  if (!f || !m) return null;
  const b = et(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
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
    actionGroupId: m,
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
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function ed(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = t1(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function n1(e) {
  if (!e || typeof e != "object") return null;
  const t = et(e.u0, null), n = et(e.v0, null), i = et(e.u1, null), a = et(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (f) => Math.max(0, Math.min(1, f)), u = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function r1(e) {
  const t = e || {};
  return {
    du: et(t.du, 0) ?? 0,
    dv: et(t.dv, 0) ?? 0,
    rot_deg: et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, et(t.scale, 1) ?? 1)
  };
}
function i1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = n1(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: r1(e.transform)
  } : null;
}
function a1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = i1(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ma(e) {
  const t = Xv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Jv(e.groups),
    paint: ed(e.paint, "paint"),
    mask: ed(e.mask, "mask"),
    raster_objects: a1(e.raster_objects)
  };
}
function td(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function o1(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function nd(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = o1((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function s1(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Di({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: td((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, u) => nd(l, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = td((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, u) => nd(l, u)).filter(Boolean);
  return Di({
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
function ka(e = {}) {
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
function rs(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function l1(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Br((e == null ? void 0 : e.coreOptions) || {});
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
    const S = s1(x), A = l(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function f(x = {}, S = {}) {
    if (!i) return null;
    const A = ka(x), v = rs(S);
    return n.renderToTarget(t, A, v);
  }
  function m(x, S, A = {}, v = {}) {
    if (!x || !S || !i) return !1;
    const O = ka(A), V = rs({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(x, S, O, V);
  }
  function b() {
    var x;
    i = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function _() {
    var x;
    b(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: m,
    snapshotScene: () => i,
    clearScene: b,
    dispose: _
  };
}
function c1(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function u1(e, t = {}) {
  var m, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = ka((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((m = t == null ? void 0 : t.camera) == null ? void 0 : m.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = rs(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return c1(l, u, f);
}
function f1(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = ka((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function m() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), O = rs({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(O.width * O.dpr)), i.height = Math.max(1, Math.round(O.height * O.dpr)), i.style.width = `${O.width}px`, i.style.height = `${O.height}px`, O;
  }
  function b() {
    if (u || !a) return !1;
    const S = m();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, b();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return x == null || x.observe(t), _(), {
    canvas: i,
    setView(S) {
      l = ka(S || {}), _();
    },
    getView() {
      return { ...l };
    },
    present: b,
    requestRender: _,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), i.remove();
    }
  };
}
function d1(e = {}) {
  const t = l1({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(wr(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, wr(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? wr(i.shot) : i == null ? void 0 : i.view;
      return f1(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: wr(n.shot) } : n;
      return u1(t, i);
    }
  };
}
function ea(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function h1(e = {}) {
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
function p1({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: m
}) {
  var D, E;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
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
    historyEntries: Array.from({ length: 8 }, (F, Y) => ({ index: Y, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return _;
  const x = ((D = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : D.id) || "", S = !x, A = l(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((E = e.customPaintColor) == null ? void 0 : E.a) ?? 1))) * 100), O = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[O] ?? 10, z = m(), P = Array.from({ length: 8 }, (F, Y) => e.customPaintHistory[Y] || null);
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
    historyEntries: P.map((F, Y) => ({
      index: Y,
      color: F ? { cssColor: i(F, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function m1({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function g1({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: u,
  notes: f,
  visibilityRows: m,
  uiSettings: b,
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
    visibilityRows: m,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function b1({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: m,
  isExternalSticker: b,
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
    ], b(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), b(t)) {
      const F = x(), Y = _(t);
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
        label: Y ? "Show" : "Hide",
        tip: Y ? "Show input image" : "Hide input image",
        icon: Y ? S.eye : S.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), b(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!m,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F, active: f === F }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((F) => ({ x: Number(F == null ? void 0 : F.x), y: Number(F == null ? void 0 : F.y) })).filter((F) => Number.isFinite(F.x) && Number.isFinite(F.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const O = v.map((F) => F.x), V = v.map((F) => F.y), z = Math.min(...O), P = Math.max(...O), D = Math.min(...V), E = Math.max(...V);
  return {
    visible: !0,
    left: (z + P) * 0.5,
    top: E + 18,
    items: A,
    anchor: { minX: z, maxX: P, minY: D, maxY: E }
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
}), y1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, v1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: y1(t[2])
})), _1 = {
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
}, rd = Object.fromEntries(
  Object.entries(_1).map(([e, t]) => [e, {
    name: t.name,
    elements: v1(t.body)
  }])
), vn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = bt(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(rd, i) ? rd[i] : null;
    });
    return (i, a) => n.value ? (Me(), Pe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: mt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Pe(Je, null, jt(n.value.elements, (l, u) => (Me(), Pe(Je, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${u}`
      }, [
        l.tag === "path" ? (Me(), Pe("path", vr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Me(), Pe("circle", vr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Me(), Pe("rect", vr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Me(), Pe("line", vr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Me(), Pe("polyline", vr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Me(), Pe("polygon", vr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Ct("", !0)
      ], 64))), 128))
    ], 2)) : Ct("", !0);
  }
}, Ur = {
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
    const t = e, n = bt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Me(), Oi(O0(e.tag), vr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: jd(() => [
        Xe(vn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, x1 = { class: "pano-floating-right" }, w1 = ["data-settled"], S1 = ["data-ready", "data-settled"], N1 = ["aria-label", "data-tip"], M1 = {
  key: 1,
  class: "pano-camera-preview-label"
}, k1 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Je, null, [
      ce("div", x1, [
        (Me(!0), Pe(Je, null, jt(e.buttons, (i) => (Me(), Oi(Ur, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      hc(ce("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ce("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
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
            Xe(vn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, N1)) : Ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", M1, ht(e.preview.label || "Preview unavailable"), 1)) : Ct("", !0)
        ], 14, S1)
      ], 8, w1), [
        [vc, e.preview.visible]
      ])
    ], 64));
  }
}, P1 = ["aria-label"], A1 = { class: "pano-canvas-confirm-title" }, C1 = { class: "pano-canvas-confirm-text" }, I1 = { class: "pano-canvas-confirm-actions" }, T1 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, E1 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ $o(null), i = /* @__PURE__ */ $o(null);
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
      var O;
      const x = i.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = l()[0] || x;
      (O = v == null ? void 0 : v.focus) == null || O.call(v);
    }
    function m() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(x) {
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
      const v = S[0], O = S[S.length - 1], V = document.activeElement;
      if (x.shiftKey) {
        (V === v || V === A || !(A != null && A.contains(V))) && (x.preventDefault(), O.focus());
        return;
      }
      (V === O || !(A != null && A.contains(V))) && (x.preventDefault(), v.focus());
    }
    function _(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return ki(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, fc(() => {
          f();
        });
        return;
      }
      S && m();
    }, { immediate: !0 }), mc(() => {
      m();
    }), (x, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: vh(_, ["self"])
    }, [
      ce("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        ce("div", A1, ht(e.model.title), 1),
        ce("div", C1, ht(e.model.text), 1),
        ce("div", I1, [
          S[0] || (S[0] = ce("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ce("button", T1, ht(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, P1)
    ], 512)) : Ct("", !0);
  }
}, D1 = ["data-paint-pane"], R1 = ["hidden"], O1 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], F1 = ["aria-pressed", "disabled"], L1 = ["hidden"], z1 = { class: "pano-paint-color-pop-head" }, $1 = { class: "pano-paint-color-field" }, j1 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, V1 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, H1 = { class: "pano-paint-color-field" }, U1 = { class: "pano-paint-alpha-wrap" }, B1 = ["value"], G1 = { "data-paint-alpha-value": "" }, K1 = ["hidden"], W1 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Y1 = ["data-paint-history-index", "aria-label", "disabled"], q1 = ["data-paint-footer"], X1 = ["data-paint-group"], J1 = ["hidden"], Z1 = ["value", "disabled"], Q1 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, e_ = ["hidden"], t_ = {
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
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Pe(Je, null, jt(e.panes, (l) => {
        var u;
        return Me(), Pe("div", {
          key: l.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Me(), Pe("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Pe(Je, null, jt(e.paintSwatches, (f) => (Me(), Pe("button", {
              key: f.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: kt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, O1))), 128)),
            ce("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: kt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, F1),
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
              ce("div", z1, [
                ce("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: kt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ce("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ce("div", $1, [
                ce("div", j1, [
                  ce("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: kt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ce("div", V1, [
                  ce("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: kt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ce("label", H1, [
                a[1] || (a[1] = ce("span", null, "Opacity", -1)),
                ce("div", U1, [
                  ce("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, B1),
                  ce("span", G1, ht(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ce("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ce("div", W1, [
                  (Me(!0), Pe(Je, null, jt(e.state.historyEntries || [], (f) => (Me(), Pe("button", {
                    key: f.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: kt(n(f.color))
                  }, null, 14, Y1))), 128))
                ])
              ], 8, K1)
            ], 12, L1)
          ], 10, R1)) : Ct("", !0),
          ce("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ce("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Me(!0), Pe(Je, null, jt(l.tools, (f) => {
                var m;
                return Me(), Oi(Ur, {
                  key: `${l.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((m = e.state.activeTools) == null ? void 0 : m[l.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, X1),
            ce("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
              }, null, 12, Z1),
              ce("span", Q1, ht(e.state.sizeText || "10"), 1)
            ], 10, J1),
            ce("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[l.key]) ?? !l.clearHidden)
            }, [
              Xe(Ur, {
                icon: Lr(Te).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, e_)
          ], 8, q1)
        ], 10, D1);
      }), 128))
    ], 2));
  }
}, n_ = {
  key: 0,
  class: "pano-cutout-menu"
}, r_ = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, i_ = ["data-aspect"], a_ = ["data-action", "aria-label", "data-tip", "disabled"], o_ = {
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
        i.kind === "aspect" ? (Me(), Pe("div", n_, [
          ce("button", r_, [
            Xe(vn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ce("div", {
            class: mt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Pe(Je, null, jt(i.choices || [], (a) => (Me(), Pe("button", {
              key: a.value,
              class: mt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ht(a.label), 11, i_))), 128))
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
          Xe(vn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, a_))
      ], 64))), 128))
    ], 4));
  }
}, s_ = {
  class: "pano-side",
  "data-side": ""
}, l_ = { class: "pano-side-head" }, c_ = { class: "pano-side-title" }, u_ = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, f_ = {
  key: 0,
  class: "pano-side-scroll"
}, d_ = { class: "pano-inspector" }, h_ = { class: "pano-ui-row pano-coverage-row" }, p_ = ["data-selected"], m_ = ["aria-pressed", "disabled"], g_ = ["aria-pressed", "disabled"], b_ = {
  key: 0,
  class: "pano-section-title"
}, y_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, v_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, __ = ["disabled"], x_ = { class: "pano-picker-label" }, w_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, S_ = ["hidden"], N_ = ["data-selection-id"], M_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, k_ = {
  key: 2,
  class: "pano-state-actions"
}, P_ = ["disabled"], A_ = ["data-key"], C_ = ["min", "max", "step", "value", "disabled", "data-param-key"], I_ = ["min", "max", "step", "value", "disabled", "data-param-key"], T_ = { class: "pano-visibility-section" }, E_ = { class: "pano-visibility-stack" }, D_ = ["data-visibility-row"], R_ = { class: "pano-visibility-name" }, O_ = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, F_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], L_ = ["open"], z_ = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, $_ = { class: "pano-ui-settings-body" }, j_ = { class: "pano-ui-row" }, V_ = ["data-selected"], H_ = ["aria-pressed"], U_ = ["aria-pressed"], B_ = { class: "pano-ui-row" }, G_ = ["data-selected"], K_ = ["aria-pressed"], W_ = ["aria-pressed"], Y_ = { class: "pano-ui-row" }, q_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, X_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, J_ = { class: "pano-picker-label" }, Z_ = ["hidden"], Q_ = ["data-quality"], ex = {
  key: 1,
  class: "pano-side-footer"
}, tx = ["data-action"], nx = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = bt(() => {
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
      var f, m, b, _, x;
      return Me(), Pe("div", s_, [
        ce("div", l_, [
          ce("div", c_, [
            ce("span", u_, [
              Xe(vn, {
                icon: Lr(Te).globe
              }, null, 8, ["icon"])
            ]),
            ce("span", null, ht(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = ce("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = ce("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", f_, [
          ce("div", d_, [
            u[12] || (u[12] = ce("div", { class: "pano-section-title" }, [
              ce("span", null, "Scene")
            ], -1)),
            ce("div", h_, [
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
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, m_),
                ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, g_)
              ], 8, p_)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", b_, [...u[2] || (u[2] = [
              ce("span", null, "Transform", -1)
            ])])) : Ct("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", y_, [
              ce("label", null, ht(e.model.selectionPicker.label), 1),
              ce("div", v_, [
                ce("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ce("span", x_, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", w_, [
                      Xe(vn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Ct("", !0),
                    ce("span", null, ht(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, __),
                ce("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Pe(Je, null, jt(e.model.selectionPicker.items || [], (S) => (Me(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Pe("span", M_, [
                      Xe(vn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Ct("", !0),
                    ce("span", null, ht(S.label), 1)
                  ], 10, N_))), 128))
                ], 8, S_)
              ])
            ])) : Ct("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", k_, [
              ce("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Xe(vn, {
                  icon: Lr(Te).copy
                }, null, 8, ["icon"]),
                ce("span", null, ht(e.model.copyStateButton.label), 1)
              ], 8, P_)
            ])) : Ct("", !0),
            ce("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Pe(Je, { key: 0 }, jt(e.model.notes, (S) => (Me(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, ht(S), 1))), 128)) : (Me(!0), Pe(Je, { key: 1 }, jt(e.model.params || [], (S) => (Me(), Pe("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                ce("label", null, ht(S.label), 1),
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
                }, null, 12, C_),
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
                }, null, 8, I_)
              ], 8, A_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Je, { key: 3 }, [
              u[5] || (u[5] = ce("div", { class: "pano-divider" }, null, -1)),
              ce("div", T_, [
                u[4] || (u[4] = ce("div", { class: "pano-section-title" }, [
                  ce("span", null, "Layers")
                ], -1)),
                ce("div", E_, [
                  (Me(!0), Pe(Je, null, jt(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: mt(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ce("span", R_, [
                      ce("span", O_, [
                        Xe(vn, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      ce("span", null, ht(S.label), 1)
                    ]),
                    ce("button", {
                      class: mt(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      Xe(vn, {
                        icon: S.visible === !0 ? Lr(Te).eye : Lr(Te).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, F_)
                  ], 10, D_))), 128))
                ])
              ])
            ], 64)) : Ct("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ce("summary", null, [
                u[6] || (u[6] = ce("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ce("span", z_, [
                  Xe(vn, {
                    icon: Lr(Te).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ce("div", $_, [
                ce("div", j_, [
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
                    }, "Normal", 8, H_),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, U_)
                  ], 8, V_)
                ]),
                ce("div", B_, [
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
                    }, "Normal", 8, K_),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, W_)
                  ], 8, G_)
                ]),
                ce("div", Y_, [
                  u[10] || (u[10] = ce("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ce("div", q_, [
                    ce("button", X_, [
                      ce("span", J_, ht(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ce("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Pe(Je, null, jt(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: mt(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ht(S.label), 11, Q_))), 128))
                    ], 8, Z_)
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
            ], 8, L_)) : Ct("", !0)
          ])
        ])) : Ct("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", ex, [
          (Me(!0), Pe(Je, null, jt(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: mt(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ht(S.label), 11, tx))), 128))
        ])) : Ct("", !0)
      ]);
    };
  }
}, rx = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: kt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ht(e.model.text || ""), 7));
  }
}, ix = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, ax = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", ix, [
      (Me(!0), Pe(Je, null, jt(e.buttons, (i) => hc((Me(), Oi(Ur, {
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
        [vc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, ox = ["data-video-ready"], sx = { class: "pano-video-transport-shell" }, lx = { class: "pano-video-controls-left" }, cx = { class: "pano-video-filmstrip" }, ux = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, fx = ["src", "onLoad"], dx = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, hx = ["max", "value", "disabled"], px = { class: "pano-video-controls-right" }, mx = ["data-has-audio"], gx = { class: "pano-video-volume-pop" }, bx = ["value", "disabled"], yx = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), i = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), a = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Te.pause : Te.play;
    }), l = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = bt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Te.loop_off : Te.loop;
    }), m = bt(() => {
      var F, Y;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = bt(() => {
      var F, Y, j;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Te.volume : ((Y = t.state) == null ? void 0 : Y.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? Te.volume_muted : Te.volume2;
    }), _ = bt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), x = bt(() => ({ left: `${_.value}%` })), S = bt(() => {
      var Z, fe;
      const F = (Z = t.state) == null ? void 0 : Z.volumePct, Y = Number(((fe = t.state) == null ? void 0 : fe.volume) ?? 1) * 100, j = Number(F ?? Y ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, j))}%`
      };
    }), A = bt(() => {
      var j, Z;
      const Y = [
        String(((j = t.state) == null ? void 0 : j.currentTimeLabel) || "0:00"),
        String(((Z = t.state) == null ? void 0 : Z.durationLabel) || "0:00")
      ].reduce((fe, U) => Math.max(fe, U.length), 4);
      return `${Math.max(4, Y)}ch`;
    }), v = bt(() => ({ "--pano-video-time-ch": A.value })), O = bt(() => {
      var j, Z;
      const F = Array.isArray((j = t.state) == null ? void 0 : j.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const Y = Math.max(7, Number(((Z = t.state) == null ? void 0 : Z.thumbnailCount) || 9));
      return Array.from({ length: Y }, (fe, U) => ({
        id: `placeholder-${U}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ $o(/* @__PURE__ */ new Set()), z = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => V.value.has(z(F)), D = (F) => {
      const Y = new Set(V.value);
      Y.add(z(F)), V.value = Y;
    };
    ki(O, (F) => {
      const Y = new Set(F.map(z)), j = /* @__PURE__ */ new Set();
      for (const Z of V.value)
        Y.has(Z) && j.add(Z);
      V.value = j;
    }, { immediate: !0 });
    const E = bt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, Y) => (Me(), Pe("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: kt(E.value)
    }, [
      Y[1] || (Y[1] = ce("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ce("div", sx, [
        ce("div", lx, [
          Xe(Ur, {
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
          }, ht(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ce("div", cx, [
          ce("div", ux, [
            (Me(!0), Pe(Je, null, jt(O.value, (j) => (Me(), Pe("div", {
              key: z(j),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !j.src,
                "is-loaded": j.src && P(j)
              }])
            }, [
              j.src ? (Me(), Pe("img", {
                key: 0,
                src: j.src,
                alt: "",
                draggable: "false",
                onLoad: (Z) => D(j)
              }, null, 40, fx)) : (Me(), Pe("span", dx))
            ], 2))), 128))
          ]),
          ce("div", {
            class: "pano-video-playhead",
            style: kt(x.value),
            "aria-hidden": "true"
          }, [...Y[0] || (Y[0] = [
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
          }, null, 8, hx)
        ]),
        ce("div", px, [
          ce("div", {
            class: "pano-video-time pano-video-time-end",
            style: kt(v.value)
          }, ht(e.state.durationLabel || "0:00"), 5),
          Xe(Ur, {
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
            ce("div", gx, [
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
              }, null, 12, bx)
            ]),
            Xe(Ur, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: m.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, mx)
        ])
      ])
    ], 14, ox));
  }
}, vx = { class: "pano-floating-top" }, _x = ["data-selected", "data-view-count"], xx = ["data-view", "aria-pressed", "aria-label", "disabled"], wx = { class: "label" }, Sx = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", vx, [
        ce("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Je, null, jt(e.buttons, (a) => hc((Me(), Pe("button", {
            key: a.key,
            class: mt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Xe(vn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ce("span", wx, ht(a.label), 1)
          ], 10, xx)), [
            [vc, a.visible !== !1]
          ])), 128))
        ], 8, _x)
      ]);
    };
  }
};
function Wh(e = "stickers") {
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
const Nx = ["aria-label"], Mx = { class: "pano-stage-wrap" }, kx = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Px = {
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
    const f = /* @__PURE__ */ $o(null), m = bt(() => n.readOnly === !0), b = bt(() => n.shellPreset || Wh(n.type)), _ = bt(() => {
      var E, F, Y;
      const D = String((((E = n.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (F = n.uiState) == null ? void 0 : F.stageStatusDetail : (Y = n.uiState) == null ? void 0 : Y.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Re-run the node to refresh it." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), x = bt(() => {
      var E;
      const D = Array.isArray((E = b.value) == null ? void 0 : E.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return m.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Te.fullscreen
      }), D;
    });
    function S() {
      const D = f.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function A() {
      var F;
      const E = S()[0] || f.value;
      (F = E == null ? void 0 : E.focus) == null || F.call(E);
    }
    function v() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function O(D) {
      var E, F, Y, j;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const Z = S();
          if (!Z.length) {
            D.preventDefault(), (F = (E = f.value) == null ? void 0 : E.focus) == null || F.call(E);
            return;
          }
          const fe = Z[0], U = Z[Z.length - 1], pe = document.activeElement;
          if (D.shiftKey) {
            (pe === fe || pe === f.value || !((Y = f.value) != null && Y.contains(pe))) && (D.preventDefault(), U.focus());
            return;
          }
          (pe === U || !((j = f.value) != null && j.contains(pe))) && (D.preventDefault(), fe.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function V() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function z() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function P(D) {
      document.removeEventListener("keydown", O), D ? (u || (u = document.activeElement), V(), document.addEventListener("keydown", O), fc(() => {
        A();
      })) : (z(), v());
    }
    return Kd(() => {
      P(n.open);
    }), mc(() => {
      z(), document.removeEventListener("keydown", O), v();
    }), ki(() => n.open, (D) => {
      P(D);
    }), (D, E) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[0] || (E[0] = vh((F) => i("close"), ["self"]))
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
        ce("div", Mx, [
          E[1] || (E[1] = ce("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          E[2] || (E[2] = ce("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          E[3] || (E[3] = ce("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Pe("div", kx, ht(_.value), 1)) : Ct("", !0),
          E[4] || (E[4] = ce("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ce("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          m.value ? Ct("", !0) : (Me(), Pe(Je, { key: 1 }, [
            Xe(ax, {
              buttons: e.uiState.toolButtons || b.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Xe(t_, {
              "paint-swatches": e.paintSwatches,
              panes: b.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Xe(yx, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Xe(Sx, {
            buttons: e.uiState.viewButtons || b.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Xe(k1, {
            buttons: e.uiState.floatingButtons || x.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Xe(o_, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Xe(rx, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Xe(E1, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Ct("", !0) : (Me(), Oi(nx, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Nx)
    ])) : Ct("", !0);
  }
}, jn = "loading", Ri = "ready", Hn = "failed";
function Pa(e, t = "") {
  return e && (e.__panoLoadState = jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Aa(e, t = "") {
  return e && (e.__panoLoadState = Ri, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function qr(e, t = "") {
  return e && (e.__panoLoadState = Hn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Zl(e, t) {
  return e ? e.__panoLoadState === Hn ? Hn : typeof t == "function" && t(e) ? Ri : jn : Ri;
}
function Nl(e) {
  return Zl(e) === Hn;
}
function Ax({ presented: e, background: t = Ri, stickers: n = [] } = {}) {
  if (!e) return { status: jn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === jn, l = i.includes(jn);
  if (a && l) return { status: jn, detail: "mixed" };
  if (a) return { status: jn, detail: "background" };
  if (l) return { status: jn, detail: "stickers" };
  const u = t === Hn, f = i.includes(Hn);
  return u && f ? { status: Hn, detail: "mixed" } : u ? { status: Hn, detail: "background" } : f ? { status: Hn, detail: "stickers" } : { status: Ri, detail: "" };
}
const is = "state_json", Rr = "sticker_image_1", Ml = "external_image", kl = "pano_sticker_input_images", Lo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Et = Math.PI / 180, _r = 180 / Math.PI, as = 24, Cx = 4, Ix = 4, bo = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), Tx = 12;
function zt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ex(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Dx(e) {
  return 1 - Math.pow(1 - e, 3);
}
function Rx(e, t, n) {
  const i = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function Ox(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = xr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (xr.delete(t), xr.set(t, n), n);
}
function Fx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (xr.delete(n), xr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); xr.size > Tx; ) {
      const a = xr.keys().next().value;
      if (!a) break;
      xr.delete(a);
    }
}
function Lx(e) {
  return e * e * e;
}
function Un(e, t, n) {
  return { x: e, y: t, z: n };
}
function vo(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function _o(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function An(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function xo(e, t) {
  return Un(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function gi(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * Et, i = t * Et, a = Math.cos(i);
  return Un(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function wo(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * _r),
    pitch: W(Math.asin(W(e.y, -1, 1)) * _r, -90, 90)
  };
}
function Zn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, u = t[i].y, f = t[a].x, m = t[a].y;
    u > e.y != m > e.y && e.x < (f - l) * (e.y - u) / (m - u || 1e-6) + l && (n = !n);
  }
  return n;
}
function br(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Pl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return br(e, t);
  const m = W((l * i + u * a) / f, 0, 1), b = Number(t.x || 0) + i * m, _ = Number(t.y || 0) + a * m, x = Number(e.x || 0) - b, S = Number(e.y || 0) - _;
  return x * x + S * S;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function On(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function zx(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let So = { fillStyle: "", url: "" };
function $x(e, t, n) {
  if (So.url && So.fillStyle === String(e || ""))
    return So.url;
  const i = zx(`
<svg xmlns="http://www.w3.org/2000/svg" width="${as}" height="${as}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return So = { fillStyle: String(e || ""), url: i }, i;
}
function zo(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function hn(e) {
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
function jx(e) {
  return Lo.some((t) => zo(e, t.color));
}
function Al(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), l = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const u = Math.floor(i * 6), f = i * 6 - u, m = l * (1 - a), b = l * (1 - f * a), _ = l * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: l, g: _, b: m };
    case 1:
      return { r: b, g: l, b: m };
    case 2:
      return { r: m, g: l, b: _ };
    case 3:
      return { r: m, g: b, b: l };
    case 4:
      return { r: _, g: m, b: l };
    default:
      return { r: l, g: m, b };
  }
}
function Cl(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), u = a - l;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const m = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: m, v: a };
}
function Vx(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function ad(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Hx(e, t) {
  const n = ad(e, 1), i = ad(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), f = (x, S) => S ? f(S, x % S) : x, m = f(l, u) || 1, b = Math.max(1, Math.round(l / m)), _ = Math.max(1, Math.round(u / m));
  return `${b}:${_}`;
}
function oa(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Et, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Et;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ux(e) {
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
function zr(e) {
  const t = oa(e);
  return Ux(t) || Hx(t, 1);
}
function Yh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = zr(t), t;
}
function ta(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : zr(e);
}
let No = null;
function Bx() {
  return No || (No = new Promise((e) => {
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
  }), No);
}
const qh = "pano_suite.ui_settings.v1", Xh = "pano_suite.node_grid_visibility.v1";
let xi = null, Fn = null, Mo = { text: null, parsed: null };
function ga(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Gx() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(qh)) || "").trim();
    if (!t) return xi ? ga(xi) : null;
    const n = JSON.parse(t), i = ga(n);
    return xi = i, i;
  } catch {
    return xi ? ga(xi) : null;
  }
}
function Kx(e) {
  var n;
  const t = ga(e);
  xi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(qh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Jh() {
  var e;
  if (Fn && typeof Fn == "object")
    return Fn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Xh)) || "").trim();
    if (!t)
      return Fn = {}, Fn;
    const n = JSON.parse(t);
    return Fn = n && typeof n == "object" ? n : {}, Fn;
  } catch {
    return Fn = {}, Fn;
  }
}
function Wx(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Jh()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Yx(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Jh();
  i[n] = !!t, Fn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Xh, JSON.stringify(i));
  } catch {
  }
}
function qx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Xx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Jx(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function od(e) {
  const { paintCount: t, maskCount: n } = Jx(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function bi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function sd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Zx(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Yh(t)) : [];
}
function Qx(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Gx(), l = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: zt(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: ma(null),
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
    if (Mo.text === u ? f = Mo.parsed : (f = JSON.parse(u), Mo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return l;
    const m = {
      ...l,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: qx(f.assets),
      stickers: Xx(f.stickers),
      shots: Zx(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ma(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const b = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return b === "draft" || b === "balanced" || b === "high" ? b : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...l.active }
    };
    return a && (m.ui_settings = ga({ ...m.ui_settings, ...a })), m.output_preset = Zh(t, Number(m.output_preset || l.output_preset)), m.bg_color = String(n || m.bg_color || l.bg_color), m.coverage = zt(i), delete m.editor_history, m;
  } catch {
    return Mo = { text: u, parsed: null }, l;
  }
}
function _n(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Cc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = _n(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, u, f, m, b, _, x, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (m = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || m.call(f), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), (x = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), (v = (A = (S = pn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function ew(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function ld(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function tw(e) {
  var A, v, O, V, z;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = _n(e, "coverage"), n = _n(e, "bg_color"), i = _n(e, is), a = _n(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && ew(l) && (ld(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let b = "360";
  if (ld(u))
    try {
      const P = JSON.parse(u);
      b = String(zt(P == null ? void 0 : P.coverage));
    } catch {
      b = "360";
    }
  const _ = l, x = u, S = f;
  t.value = b, (A = t.callback) == null || A.call(t, b), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = x, (O = i.callback) == null || O.call(i, x), a && (a.value = S, (V = a.callback) == null || V.call(a, S)), (z = e.setDirtyCanvas) == null || z.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function nw(e, t) {
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
function rw(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Ql(e, t, n) {
  var l, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function ko(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Zh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function iw(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function aw(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function Qh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function ow(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function ep(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function sw(e, t, n = null) {
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
  return !i && n != null && (i = ow(e == null ? void 0 : e.graph, n)), i;
}
function Ca(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = tn) == null ? void 0 : a.apiURL) == "function" ? tn.apiURL(i) : i;
}
function lw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function cw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function uw(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function tp(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (lw(t)) return [t];
  const { filename: n, subfolder: i } = cw(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Ca({
    filename: n,
    subfolder: i,
    type: l
  }));
  return uw([...a, t]);
}
function fw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ca({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ba(e) {
  var i;
  const t = (i = pn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function Xr(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Xr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Ca({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Xr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ca(e);
}
function dw(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function Il(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = Xr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function cd(e, t, n, i = null) {
  var x;
  const a = ba(e == null ? void 0 : e.id), l = Array.isArray((x = a == null ? void 0 : a.ui) == null ? void 0 : x[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(l) && l.length ? l[0] : null, f = Xr(u);
  if (!f) return null;
  const m = `__ui__${t}`, b = n.get(m);
  if (b && b.__panoSrc === f) return b;
  const _ = new Image();
  return _.__panoSrc = f, Pa(_, f), _.onload = () => {
    Aa(_, f), typeof i == "function" && i(_);
  }, _.onerror = () => {
    qr(_, f), typeof i == "function" && i(_);
  }, _.src = f, n.set(m, _), _;
}
function hw(e, t) {
  var P, D;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((E) => String((E == null ? void 0 : E.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], u = l == null ? void 0 : l.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Qh(e.graph, u), { originId: m, originSlot: b } = ep(f);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const _ = sw(e, a, m), x = Number(b || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((P = pn) == null ? void 0 : P.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(_) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const E = [];
    x >= 0 && x < S.length && E.push(S[x]), E.push(...S);
    const F = Il(E);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = ba((_ == null ? void 0 : _.id) ?? m), v = dw(A, x), O = Il(v);
  if (O.length) return { src: O[0], srcCandidates: O, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (V.length) {
    const E = [];
    x >= 0 && x < V.length && E.push(V[x]), E.push(...V);
    const F = Il(E);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "nodeImgs", inputName: n };
  }
  const z = (D = _ == null ? void 0 : _.widgets) == null ? void 0 : D.find((E) => String((E == null ? void 0 : E.name) || "").toLowerCase() === "image");
  if (z) {
    let E = Xr(z.value);
    if (E && !E.includes("/") && !E.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (E = tn.apiURL(`/view?filename=${encodeURIComponent(E)}&type=input&subfolder=`)), E) return { src: E, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function pw(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = tp(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const m = new Image();
  Pa(m, a);
  const b = { srcRaw: a, resolvedSrc: "", img: m };
  e.__panoLinkedInputImageCache.set(u, b);
  let _ = -1;
  const x = () => {
    var A;
    if (_ += 1, _ >= l.length) {
      qr(m, a), i == null || i(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
      return;
    }
    const S = l[_];
    b.resolvedSrc = S, m.src = S;
  };
  return m.onload = () => {
    var S;
    Aa(m, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, m.onerror = () => {
    var S;
    if (_ + 1 < l.length) {
      x();
      return;
    }
    qr(m, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, x(), m;
}
function mw(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(l);
  if (f && f.srcRaw === u && f.img) return f.img;
  const m = [], b = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    tp(v).forEach((O) => {
      const V = String(O || "").trim();
      !V || b.has(V) || (b.add(V), m.push(V));
    });
  }), !m.length) return null;
  const _ = new Image();
  Pa(_, u);
  const x = { srcRaw: u, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(l, x);
  let S = -1;
  const A = () => {
    var O;
    if (S += 1, S >= m.length) {
      qr(_, u), i == null || i(), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
      return;
    }
    const v = m[S];
    x.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    Aa(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v;
    if (S + 1 < m.length) {
      A();
      return;
    }
    qr(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, A(), _;
}
function np(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = hw(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Po(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = np(e, a), u = String(i || a.join("|") || "image_exact"), f = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (f.length) return mw(e, u, f, n);
  const m = String((l == null ? void 0 : l.src) || "").trim();
  return m ? pw(e, u, m, n) : null;
}
async function ya(e, t, n = {}) {
  var ro, ju;
  try {
    (ju = (ro = e.__panoLinkedInputImageCache) == null ? void 0 : ro.forEach) == null || ju.call(ro, (r, o, s) => {
      r != null && r.img && Nl(r.img) && s.delete(o);
    });
  } catch {
  }
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, u = nw(e, t);
  await Bx();
  const f = _n(e, "output_preset"), m = _n(e, "coverage"), b = _n(e, "bg_color"), _ = _n(e, is), x = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Po(
      e,
      r,
      () => ge(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = x();
    return aw(r);
  }, A = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return iw(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : Zh(o, r);
  }, v = Qx(
    String((_ == null ? void 0 : _.value) || ""),
    A(2048),
    String((b == null ? void 0 : b.value) || "#00ff00"),
    zt(m == null ? void 0 : m.value)
  );
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const O = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, V = O ? ou(O, !1) : { width: 220, height: 132 }, z = Wh(t), P = /* @__PURE__ */ ds({
    stageStatus: jn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
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
      width: V.width,
      height: V.height,
      label: O ? "Loading preview" : "Add Frame to preview"
    }
  }), D = document.createElement("div");
  document.body.appendChild(D);
  const E = Yb(Px, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: z,
    paintSwatches: Lo.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: On(r.color, 1)
    })),
    uiState: P,
    onClose: () => {
      hi();
    }
  });
  try {
    E.mount(D);
  } catch (r) {
    try {
      E.unmount();
    } catch {
    }
    throw D.remove(), r;
  }
  const F = D.querySelector(".pano-modal-overlay"), Y = D.querySelector(".pano-modal"), j = Y == null ? void 0 : Y.querySelector("[data-stage-overlay]"), Z = Y == null ? void 0 : Y.querySelector("[data-stage-background]"), fe = Y == null ? void 0 : Y.querySelector(".pano-stage-wrap");
  if (!F || !Y || !j || !Z || !fe)
    throw E.unmount(), D.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const U = document.createElement("div");
  U.setAttribute("aria-hidden", "true"), U.style.position = "absolute", U.style.left = "0", U.style.top = "0", U.style.pointerEvents = "none", U.style.zIndex = "12", U.style.display = "none", U.style.willChange = "transform,width,height,background,border-radius", fe == null || fe.appendChild(U);
  const pe = document.createElement("div");
  pe.className = "pano-paint-size-preview", pe.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", pe.appendChild(xe), fe == null || fe.appendChild(pe);
  const I = j.getContext("2d"), we = Br(), ie = t === "cutout" ? d1({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, he = Y.querySelector("[data-side]"), L = Y.querySelector("[data-video-element]"), Q = Y.querySelector(".pano-floating-right"), _e = Y.querySelector("[data-selection-menu]"), De = Y.querySelector("[data-tooltip]"), Re = Y.querySelector("[data-camera-preview-host]"), Be = Y.querySelector("[data-paint-color-row]"), je = Y.querySelector("[data-paint-color-pop]"), yt = Y.querySelector("[data-paint-color-sv]"), Dt = Y.querySelector("[data-paint-color-sv-cursor]"), vt = Y.querySelector("[data-paint-hue-strip]"), Vt = Y.querySelector("[data-paint-hue-handle]");
  let Pt = 0, Ht = 0;
  fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", "boot"), j.style.opacity = "1", Z.style.opacity = "0", a && (he == null || he.remove(), Y.classList.add("pano-modal-readonly"));
  const un = () => {
    if (!h.customPaintSessionStart) return;
    if (zo(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (jx(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const r = [
      hn(h.customPaintColor),
      ...h.customPaintHistory.filter((o) => !zo(o, h.customPaintColor))
    ];
    h.customPaintHistory = r.slice(0, 8), h.customPaintSessionStart = null;
  }, wn = (r = !1) => {
    !je || je.hidden || (r ? un() : h.customPaintSessionStart = null, je.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, R = () => {
    je && (je.hidden && (h.customPaintSessionStart = hn(h.customPaintColor)), je.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  Y.addEventListener("pointerdown", (r) => {
    eo(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (Y.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), wn(!0), t === "cutout" && h.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ue(), ge())));
  });
  const H = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, ae = JSON.stringify(sd(v)), h = {
    mode: "pano",
    selectedId: H,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: zt(v.coverage),
    historyController: qv(80, { entries: [ae], index: 0 }),
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
    showGrid: Wx(e == null ? void 0 : e.id, !0),
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
    paintEngine: Hl(),
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
  const G = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), q = document.createElement("canvas");
  q.__panoFrameIdx = 0;
  const J = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    tickErrorSignature: ""
  }, de = (r) => {
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
    const r = (N = fe == null ? void 0 : fe.getBoundingClientRect) == null ? void 0 : N.call(fe), o = (k = Q == null ? void 0 : Q.getBoundingClientRect) == null ? void 0 : k.call(Q), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), c = o ? Math.max(0, Number(o.width || 0)) : 0, y = c > 0 ? c + 14 + 12 : 72, g = Math.max(280, Math.floor(s - y * 2)), w = h.fullscreen ? Math.min(1200, g) : g;
    P.videoTransport.shellMaxWidthPx = w;
  }, _t = () => {
    nt || (nt = window.requestAnimationFrame(() => {
      nt = 0, Ae();
    }));
  }, bn = () => {
    const r = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, xt = (r) => {
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
  }, st = typeof ResizeObserver < "u" ? new ResizeObserver(() => _t()) : null;
  st == null || st.observe(fe), Q && (st == null || st.observe(Q)), Ge.push(() => {
    var r;
    nt && (window.cancelAnimationFrame(nt), nt = 0), (r = st == null ? void 0 : st.disconnect) == null || r.call(st);
  }), _t();
  const Jt = () => {
    ee.thumbnailJobId += 1, ee.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Fe;
  }, Fi = async (r, o, s) => {
    const c = String(r || "").trim();
    if (!c) {
      Jt();
      return;
    }
    const d = Ox(c);
    if (d) {
      ee.thumbnailSrc = c, P.videoTransport.thumbnails = d.thumbnails, P.videoTransport.thumbnailCount = d.thumbnailCount;
      return;
    }
    if (ee.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const p = ++ee.thumbnailJobId;
    ee.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Fe;
    const y = document.createElement("video");
    if (y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous", !await new Promise((le) => {
      let me = !1;
      const oe = (be) => {
        me || (me = !0, le(be));
      };
      y.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), y.addEventListener("canplay", () => oe(!0), { once: !0 }), y.addEventListener("error", () => oe(!1), { once: !0 }), y.src = c, y.load();
    }) || ee.thumbnailJobId !== p) return;
    const w = Math.max(1, Number(y.videoWidth || 0)), N = Math.max(1, Number(y.videoHeight || 0));
    if (w < 1 || N < 1) return;
    const k = Math.max(0, Number(y.duration || o || 0)), M = document.createElement("canvas"), T = 46, $ = Math.max(72, Math.round(w / N * T));
    M.width = $, M.height = T;
    const te = M.getContext("2d");
    if (!te) return;
    const B = [], K = (le) => new Promise((me) => {
      let oe = !1;
      const be = () => {
        oe || (oe = !0, me());
      };
      y.addEventListener("seeked", be, { once: !0 }), y.addEventListener("error", be, { once: !0 });
      try {
        y.currentTime = le;
      } catch {
        be();
      }
    });
    for (let le = 0; le < Fe; le += 1) {
      if (ee.thumbnailJobId !== p) return;
      const me = le / (Fe - 1), oe = k > 0 ? Math.max(0, Math.min(k - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), k * me)) : 0;
      if (await K(oe), ee.thumbnailJobId !== p) return;
      te.clearRect(0, 0, $, T), te.drawImage(y, 0, 0, $, T), B.push({
        id: `thumb-${le}`,
        src: M.toDataURL("image/jpeg", 0.72),
        time: oe,
        label: Ts(oe)
      });
    }
    ee.thumbnailJobId === p && (P.videoTransport.thumbnails = B, P.videoTransport.thumbnailCount = B.length || Fe, Fx(c, {
      thumbnails: B,
      thumbnailCount: B.length || Fe,
      duration: k,
      fps: s
    }));
  }, Li = (r) => {
    const o = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, Ic = (r) => {
    if (!(L instanceof HTMLVideoElement) || Number(L.videoWidth || 0) < 1 || Number(L.videoHeight || 0) < 1) return null;
    const o = Number(L.videoWidth || 0), s = Number(L.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const d = c.getContext("2d");
    if (!d) return null;
    for (d.drawImage(L, 0, 0, o, s), ee.frameCache.set(r, c), ee.frameCacheOrder = ee.frameCacheOrder.filter((p) => p !== r), ee.frameCacheOrder.push(r); ee.frameCacheOrder.length > Oe; ) {
      const p = ee.frameCacheOrder.shift();
      p != null && ee.frameCache.delete(p);
    }
    return c;
  }, rp = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (q.width !== s || q.height !== c) && (q.width = s, q.height = c);
    const d = q.getContext("2d");
    return d ? (d.clearRect(0, 0, s, c), d.drawImage(r, 0, 0, s, c), q.__panoFrameIdx = Number(q.__panoFrameIdx || 0) + 1, o != null && (ee.presentedTime = Number(o || 0)), !0) : !1;
  }, Tc = (r) => {
    const o = Li(r), s = ee.frameCache.get(o) || null;
    return s ? (ee.currentFrameNumber = o, rp(s, r)) : !1;
  };
  if (Ge.push(() => {
    Jt();
  }), L instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof L.requestVideoFrameCallback != "function" || L.__panoFramePumpActive) return;
      L.__panoFramePumpActive = !0;
      const g = (w, N) => {
        L.__panoFramePumpActive = !1;
        const k = Number((N == null ? void 0 : N.mediaTime) ?? L.currentTime ?? 0), M = Li(k), T = bn();
        ee.mode === "scrub" ? Math.abs(k - Number(ee.editorTime || 0)) <= T && (Ic(M), Tc(ee.editorTime), J.backgroundDirty = !0, J.dirty = !0, Tn({
          ready: !0,
          playing: !1,
          visible: Yn(),
          currentTime: ee.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (ee.editorTime = k, ee.presentedTime = k, ee.requestedTime = null, ee.currentFrameNumber = M, Ic(M), ee.frameCounter += 1, L.dataset.panoFrameIdx = String(ee.frameCounter), J.backgroundDirty = !0, J.dirty = !0, Tn({
          ready: !0,
          playing: !L.paused && !L.ended,
          visible: Yn(),
          currentTime: k,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), J.running && (!L.paused || ee.mode === "scrub") && r();
      };
      try {
        L.requestVideoFrameCallback(g);
      } catch {
        L.__panoFramePumpActive = !1;
      }
    }, o = () => {
      ee.pendingPlaybackResume && (ee.pendingPlaybackResume = !1, ee.mode = "playback", ee.requestedTime = null, ri() && (J.backgroundDirty = !0, J.dirty = !0), L.play().catch(() => {
      }));
    }, s = () => {
      ee.editorTime = Number(L.currentTime || 0), Number(L.readyState || 0) >= 2 && ri() && (J.backgroundDirty = !0, J.dirty = !0), ii(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      ee.mode = "playback", ee.seeking = !1, ee.requestedTime = null, ii(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, d = () => {
      ee.mode === "playback" && ri() && (J.backgroundDirty = !0, J.dirty = !0), ii(), ge({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Yn(),
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
      const g = ee.seeking || ee.pendingPlaybackResume || ee.mode === "scrub";
      if (ee.seeking = !1, !g) {
        ee.requestedTime = null, r();
        return;
      }
      const w = Number(ee.requestedTime ?? ee.editorTime ?? 0), N = Number(L.currentTime || 0);
      if (Math.abs(N - w) > bn()) {
        Es(w);
        return;
      }
      ee.mode === "scrub" && (ri(), J.backgroundDirty = !0, J.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), ee.requestedTime = null, o(), r();
    };
    L.addEventListener("loadedmetadata", s), L.addEventListener("loadeddata", s), L.addEventListener("canplay", s), L.addEventListener("play", c), L.addEventListener("pause", d), L.addEventListener("volumechange", p), L.addEventListener("seeked", y), Ge.push(() => L.removeEventListener("loadedmetadata", s)), Ge.push(() => L.removeEventListener("loadeddata", s)), Ge.push(() => L.removeEventListener("canplay", s)), Ge.push(() => L.removeEventListener("play", c)), Ge.push(() => L.removeEventListener("pause", d)), Ge.push(() => L.removeEventListener("volumechange", p)), Ge.push(() => L.removeEventListener("seeked", y));
  }
  function ip() {
    P.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === h.primaryTool : s ? r.key === h.paintTool : c ? r.key === h.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function xs(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => qa(s)) : !1;
  }
  function Mr(r) {
    const o = !!r;
    Ne.active !== o && (Ne.active = o, fe.classList.toggle("drop-active", o));
  }
  function ws(r, o, s = h.viewFov, c = 140, d = 620) {
    const p = Ey(h.viewYaw, r), y = o - h.viewPitch, g = s - h.viewFov, w = Math.hypot(p, y) + Math.abs(g) * 0.6, N = Math.round(W(c + w * 2.2, c, d));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: p
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, ge();
  }
  Op();
  function Wn() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Ut() {
    const r = v.painting || (v.painting = ma(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function ap(r = "paint") {
    var d, p;
    const o = Array.isArray((p = (d = v.painting) == null ? void 0 : d[r]) == null ? void 0 : p.strokes) ? v.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const y of o) {
      const g = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }
    return s;
  }
  function op() {
    return ap("paint");
  }
  function zi(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function $i(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function It(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function ji(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ss() {
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
  function Ec(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = Ut();
    let d = c.find((p) => String((p == null ? void 0 : p.actionGroupId) || "") === s);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Ss() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(d)), d;
  }
  function sp(r) {
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
  function lp() {
    const r = new Set(op()), s = Ut().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: Ss(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, d) => Number((c == null ? void 0 : c.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), v.painting.groups = s, s;
  }
  function cp(r, o, s) {
    var B;
    const c = (K) => (Number(K || 0) % 1 + 1) % 1, d = [];
    for (const K of s) {
      const le = K == null ? void 0 : K.geometry, me = (le == null ? void 0 : le.geometryKind) === "lasso_fill" ? le == null ? void 0 : le.points : (le == null ? void 0 : le.processedPoints) || (le == null ? void 0 : le.rawPoints) || (le == null ? void 0 : le.points) || [];
      Array.isArray(me) && d.push(...me);
    }
    if (!d.length) return null;
    const p = c(((B = d[0]) == null ? void 0 : B.u) || 0);
    let y = 0, g = 0;
    d.forEach((K) => {
      const le = c((K == null ? void 0 : K.u) || 0);
      y += p + yn(le, p), g += Number((K == null ? void 0 : K.v) || 0);
    });
    const w = (y / d.length % 1 + 1) % 1;
    let N = 1 / 0, k = -1 / 0, M = 1 / 0, T = -1 / 0;
    d.forEach((K) => {
      const le = c((K == null ? void 0 : K.u) || 0), me = yn(le, w);
      N = Math.min(N, me), k = Math.max(k, me);
      const oe = Number((K == null ? void 0 : K.v) || 0);
      M = Math.min(M, oe), T = Math.max(T, oe);
    });
    const $ = s.reduce((K, le) => {
      const me = mr(String((le == null ? void 0 : le.toolKind) || "pen")), oe = sn[me] || sn[Jn], be = Math.max(1, Number((le == null ? void 0 : le.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(K, be);
    }, 0), te = Math.max(35e-4, $ / 2048);
    return {
      centerUv: { u: ((w + (N + k) * 0.5) % 1 + 1) % 1, v: W((M + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (k - N) * 0.5 + te,
      halfH: (T - M) * 0.5 + te,
      uvPad: te
    };
  }
  function ur(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const d = Ut().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === c);
    if (!d) return null;
    const p = s || Sn(c, o);
    return d.frame = cp(c, o, p), d.frame;
  }
  function Zr() {
    var c;
    const r = (Array.isArray(v.stickers) ? v.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = lp().map((d) => ({
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
    return [...r, ...o, ...s].sort((d, p) => Number(d.z_index || 0) - Number(p.z_index || 0));
  }
  function Ns(r = !0) {
    var s, c, d, p, y, g;
    const o = Zr().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (r) {
      const w = String(((c = (s = h.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), N = String(((p = (d = h.interaction) == null ? void 0 : d.stroke) == null ? void 0 : p.layerKind) || "").trim(), k = String(((g = (y = h.interaction) == null ? void 0 : y.stroke) == null ? void 0 : g.toolKind) || "").trim();
      w && N === "paint" && k !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function Ms(r = !0) {
    var g, w, N, k, M, T;
    const o = Zr();
    if (!r) return o;
    const s = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((k = (N = h.interaction) == null ? void 0 : N.stroke) == null ? void 0 : k.layerKind) || "").trim(), d = String(((T = (M = h.interaction) == null ? void 0 : M.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || c !== "paint" || d === "eraser" || o.some(($) => $.type === "strokeGroup" && String($.actionGroupId || "") === s))
      return o;
    const p = at();
    let y = o.reduce(($, te) => Math.max($, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return p && At(p) && String(p.actionGroupId || "") === s && (y = Number(p.z_index || 0)), [
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
  function up() {
    return Ut().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => ei(zi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function fp() {
    var r;
    return (Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => Qr($i((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Dc(r = h.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function dp() {
    var o, s, c, d;
    let r = null;
    try {
      const p = Ns(), y = ((d = (c = (s = (o = h.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, p)) == null ? void 0 : c.displayPaint) == null ? void 0 : d.canvas) || null;
      y && (r = {
        source: y,
        revision: `${li()}:${Da()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Da() {
    var d, p, y, g, w, N, k;
    const r = h.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Dc(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const M = ((d = r == null ? void 0 : r.stroke) == null ? void 0 : d.geometry) || null, T = String(((p = r == null ? void 0 : r.stroke) == null ? void 0 : p.layerKind) || ""), $ = ((y = M == null ? void 0 : M.rawPoints) == null ? void 0 : y.length) ?? ((g = M == null ? void 0 : M.points) == null ? void 0 : g.length) ?? 0, te = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${te}_${$}_${h.livePaintInteractionRevision}`;
    }
    const s = String(((w = r == null ? void 0 : r.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((k = r == null ? void 0 : r.item) == null ? void 0 : k.id) || "");
    return `_${o}_${s || c || "active"}_${h.livePaintInteractionRevision}`;
  }
  function ks() {
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
  function Qr(r) {
    const o = It(r);
    if (!o) return null;
    const s = an().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: $i(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Bt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = It(r.rasterObjectId || r.id || "");
    return !!o && !!Qr($i(o));
  }
  function ei(r) {
    const o = ji(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = Ut().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === s || String((d == null ? void 0 : d.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: zi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function At(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!ei(zi(s, o));
  }
  function Sn(r, o = null) {
    const s = ji(r, o), c = String(s.actionGroupId || "").trim();
    return c ? fi(s.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === c) : [];
  }
  function hp(r, o = "paint") {
    var p, y, g;
    const s = String(r || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${h.mode}:${Gi()}`;
    if (h.mode === "frame") {
      const w = Ke(), N = String((w == null ? void 0 : w.id) || ""), k = w ? Tt(w) : null;
      return `${d}:frame:${N}:${Math.round(Number((k == null ? void 0 : k.x) || 0))}:${Math.round(Number((k == null ? void 0 : k.y) || 0))}:${Math.round(Number((k == null ? void 0 : k.w) || 0))}:${Math.round(Number((k == null ? void 0 : k.h) || 0))}:${Math.round(Number(((p = h.frameView) == null ? void 0 : p.zoom) || 1) * 1e3)}:${Math.round(Number(((y = h.frameView) == null ? void 0 : y.panX) || 0))}:${Math.round(Number(((g = h.frameView) == null ? void 0 : g.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function Ra(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: W(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function yn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Ps(r, o = null, s = null) {
    var N;
    const c = ji(r, o), d = Array.isArray(s) ? s : Sn(c.actionGroupId, c.layerKind), p = [];
    if (d.forEach((k) => {
      const M = (k == null ? void 0 : k.geometry) || null, T = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(T) && p.push(...T);
    }), !p.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = p[0]) == null ? void 0 : N.u) || 0);
    let g = 0, w = 0;
    return p.forEach((k) => {
      g += y + yn(Number((k == null ? void 0 : k.u) || 0), y), w += Number((k == null ? void 0 : k.v) || 0);
    }), {
      u: (g / p.length % 1 + 1) % 1,
      v: W(w / p.length, 0, 1)
    };
  }
  function Oa(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), y = yn(Number(r.u || 0), d), g = Number(r.v || 0) - p, w = Number(c || 0) * Et, N = Math.cos(w), k = Math.sin(w), M = Math.max(0.02, Number(s || 1)), T = (y * N - g * k) * M, $ = (y * k + g * N) * M;
    return {
      ...r,
      u: ((d + T) % 1 + 1) % 1,
      v: W(p + $, 0, 1)
    };
  }
  function Rc(r, o, s, c = null, d = null, p = null) {
    const y = ji(r, d), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = fi(y.layerKind), N = Array.isArray(c) ? new Map(c.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let k = !1;
    if (w.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== g) return;
      const T = (N == null ? void 0 : N.get(String((M == null ? void 0 : M.id) || ""))) || M, $ = M == null ? void 0 : M.geometry, te = T == null ? void 0 : T.geometry;
      !$ || !te || (Array.isArray(te.points) && ($.points = te.points.map((B) => Ra(B, o, s)), k = !0), Array.isArray(te.rawPoints) && ($.rawPoints = te.rawPoints.map((B) => Ra(B, o, s)), k = !0), Array.isArray(te.processedPoints) && ($.processedPoints = te.processedPoints.map((B) => Ra(B, o, s)), k = !0));
    }), k && p) {
      const M = Ut().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === g);
      M && (M.frame = null);
    }
    return k;
  }
  function Oc(r, o = 1, s = 0, c = null, d = null, p = null) {
    const y = ji(r, d), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = fi(y.layerKind), N = Array.isArray(c) ? c : Sn(g, y.layerKind), k = Array.isArray(N) ? new Map(N.map(($) => [String(($ == null ? void 0 : $.id) || ""), $])) : null, M = (p == null ? void 0 : p.centerUv) ?? Ps(g, y.layerKind, N);
    let T = !1;
    if (w.forEach(($) => {
      if (String(($ == null ? void 0 : $.actionGroupId) || "").trim() !== g) return;
      const te = (k == null ? void 0 : k.get(String(($ == null ? void 0 : $.id) || ""))) || $, B = $ == null ? void 0 : $.geometry, K = te == null ? void 0 : te.geometry;
      !B || !K || (Array.isArray(K.points) && (B.points = K.points.map((le) => Oa(le, M, o, s)), T = !0), Array.isArray(K.rawPoints) && (B.rawPoints = K.rawPoints.map((le) => Oa(le, M, o, s)), T = !0), Array.isArray(K.processedPoints) && (B.processedPoints = K.processedPoints.map((le) => Oa(le, M, o, s)), T = !0));
    }), T && p) {
      const $ = Ut().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === g);
      $ && ($.frame = null);
    }
    return T;
  }
  function Fc(r, o, s, c = null) {
    const d = It(r);
    if (!d) return !1;
    const p = an().find((k) => String((k == null ? void 0 : k.id) || "").trim() === d);
    if (!p) return !1;
    const y = c && typeof c == "object" ? c : p, g = (y == null ? void 0 : y.transform) || {}, w = Number(g.du || 0) + Number(o || 0), N = W(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.du = w, p.transform.dv = N, !0;
  }
  function pp(r, o = 1, s = null) {
    const c = It(r);
    if (!c) return !1;
    const d = an().find((N) => String((N == null ? void 0 : N.id) || "").trim() === c);
    if (!d) return !1;
    const p = s && typeof s == "object" ? s : d, y = (p == null ? void 0 : p.transform) || {}, g = Math.max(0.01, Number(y.scale || 1)), w = W(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = w, !0;
  }
  function at() {
    const r = String(h.selectedId || "");
    if (!r) return null;
    const o = ei(r);
    if (o) return o;
    const s = Qr(r);
    return s || (t === "cutout" ? ks().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : Wn().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function Nn() {
    const r = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const d = String(c || "").trim();
      if (!d || s.has(d)) return;
      s.add(d);
      const p = d === String(h.selectedId || "") ? at() : ei(d) || Qr(d) || (t === "cutout" ? ks().find((y) => String((y == null ? void 0 : y.id) || "") === d) : Wn().find((y) => String((y == null ? void 0 : y.id) || "") === d));
      p && o.push(p);
    }), o;
  }
  function As(r = null) {
    const o = Array.isArray(r) ? r : Nn();
    if (!o || o.length < 2) return null;
    const s = o.map((N) => Ot(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((N) => N.corners.map((k) => Number((k == null ? void 0 : k.x) || 0))), d = s.flatMap((N) => N.corners.map((k) => Number((k == null ? void 0 : k.y) || 0))), p = Math.min(...c), y = Math.max(...c), g = Math.min(...d), w = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (p + y) * 0.5, y: (g + w) * 0.5 },
      corners: [
        { x: p, y: g },
        { x: y, y: g },
        { x: y, y: w },
        { x: p, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (p + y) * 0.5, y: g, a: { x: p, y: g }, b: { x: y, y: g } },
        { edge: "right", x: y, y: (g + w) * 0.5, a: { x: y, y: g }, b: { x: y, y: w } },
        { edge: "bottom", x: (p + y) * 0.5, y: w, a: { x: y, y: w }, b: { x: p, y: w } },
        { edge: "left", x: p, y: (g + w) * 0.5, a: { x: p, y: w }, b: { x: p, y: g } }
      ],
      rotateStemBase: { x: (p + y) * 0.5, y: g },
      rotateHandle: { x: (p + y) * 0.5, y: g - 30 }
    };
  }
  function mp(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(h.selectedIds) && h.selectedIds.includes(o);
  }
  function Fa() {
    const r = at();
    return r ? At(r) || Bt(r) ? "stroke" : rn(r) ? "frame" : "image" : null;
  }
  function fr(r) {
    if (!r || typeof r != "object") return !1;
    if (At(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Ut().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Bt(r)) {
      const o = It(r.rasterObjectId || r.id || ""), s = an().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Cs(r = null) {
    const o = Array.isArray(r) ? r : Nn();
    return o.length > 0 && o.every((s) => fr(s));
  }
  function gp(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (At(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), d = Ut().find((p) => String((p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || "").trim() === c);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    if (Bt(r)) {
      const c = It(r.rasterObjectId || r.id || ""), d = an().find((p) => String((p == null ? void 0 : p.id) || "").trim() === c);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function bp() {
    if (i) return;
    const r = Nn();
    if (!r.length) return;
    const o = !Cs(r);
    let s = !1;
    r.forEach((c) => {
      gp(c, o) && (s = !0);
    }), s && (lt(), wt(), Ue(), ge());
  }
  function kr(r) {
    h.selectedId = (r == null ? void 0 : r.id) || null, h.selectedIds = r != null && r.id ? [r.id] : [], r && ut(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && rn(r) ? v.active.selected_shot_id = r.id || null : r ? rn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function yp(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((y) => {
      const g = String((y == null ? void 0 : y.id) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }), h.selectedIds = s;
    const d = String(o || "").trim();
    h.selectedId = d && s.includes(d) ? d : s[s.length - 1] || null;
    const p = at();
    v.active.selected_sticker_id = p && ut(p) && p.id || null, p && rn(p) ? v.active.selected_shot_id = p.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function Lc() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, c) => {
      var p, y;
      const d = Rt(s) ? String(s.id || Rr) : String(((y = (p = v.assets) == null ? void 0 : p[s.asset_id]) == null ? void 0 : y.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: d
      };
    });
    return [...r, ...o];
  }
  function vp(r) {
    return r === "frame" ? Te.camera : r === "stroke" ? Te.paintbrush_vertical_tool : Te.image;
  }
  function zc(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: vp(r.kind)
    };
  }
  function $c() {
    return Ss();
  }
  function Rt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Rr || String(r.source_kind || "") === Ml;
  }
  function ti(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function _p(r) {
    return Rt(r) && ti(r) ? Nh : 1;
  }
  function xp() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function wp() {
    return String(xp() || "") === "lasso_fill";
  }
  function Sp() {
    if (i) return;
    const r = at();
    !r || !Rt(r) || (r.visible = ti(r), Ft(), lt(), wt(), He(), Ue(), ge());
  }
  function Np() {
    if (i || t !== "stickers") return;
    const r = at();
    if (!r || !Rt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ds(kl, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Pr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), lt(), wt(), He(), Ue(), ge();
  }
  function Mp(r) {
    if (!r || !Rt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = Ds(kl, () => {
      ge();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = Pr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function kp() {
    const r = at();
    if (!r || !Rt(r)) return !1;
    const o = Mp(r);
    if (!o) return !1;
    const s = (c, d) => Math.abs(Number(c || 0) - Number(d || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Is(r) {
    var s;
    const o = ba(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function jc(r) {
    const o = ba(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function Vc() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return qo(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Pp() {
    const { metaKey: r } = Vc(), o = jc(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function ni(r) {
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
  function Ts(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function Tn(r = {}) {
    const o = Number(r.currentTime ?? ee.editorTime ?? 0), s = Number(r.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!P.videoTransport.ready, d = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!P.videoTransport.playing, p = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!P.videoTransport.visible, y = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(L instanceof HTMLVideoElement ? L.muted : P.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : L instanceof HTMLVideoElement ? L.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : xt(L), N = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: d,
      visible: p,
      loop: N,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Ts(o),
      durationLabel: Ts(s),
      frameCount: Math.max(0, Number(r.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(r.mode || ee.mode || "playback"),
      hasAudio: w,
      muted: y,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Fe))
    });
  }
  function Yn() {
    return !!(L instanceof HTMLVideoElement && L.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Ap() {
    Tn({
      visible: Yn()
    });
  }
  function ri() {
    if (!(L instanceof HTMLVideoElement) || Number(L.videoWidth || 0) < 1 || Number(L.videoHeight || 0) < 1) return !1;
    const r = Number(L.videoWidth || 0), o = Number(L.videoHeight || 0);
    (q.width !== r || q.height !== o) && (q.width = r, q.height = o);
    const s = q.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(L, 0, 0, r, o), q.__panoFrameIdx = Number(q.__panoFrameIdx || 0) + 1, ee.presentedTime = Number(ee.editorTime || L.currentTime || 0), !0) : !1;
  }
  function Hc() {
    return ee.mode === "scrub" && Number(q.width || 0) > 0 && Number(q.height || 0) > 0 && Number(q.__panoFrameIdx || 0) > 0 ? q : L instanceof HTMLVideoElement && Number(L.videoWidth || 0) > 0 && Number(L.videoHeight || 0) > 0 && Number(L.readyState || 0) >= 2 ? L : null;
  }
  function Es(r) {
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
  function ii() {
    if (!(L instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = Vc(), o = Is(r)[0] || null, s = o && typeof o == "object" ? Ca(o) : Xr(o), c = Pp(), d = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), p = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), y = Number((c == null ? void 0 : c.duration) || (d > 0 ? d / p : 0)), g = !!(c != null && c.has_audio) || xt(L);
    return s && L.dataset.panoSrc !== s ? (L.pause(), L.dataset.panoSrc = s, L.dataset.panoFrameIdx = "0", L.loop = !!P.videoTransport.loop, L.muted = !!P.videoTransport.muted, L.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), L.src = s, L.load(), Fi(s, y, p)) : !s && L.getAttribute("src") && (L.pause(), L.removeAttribute("src"), L.load(), Jt()), L.loop !== !!P.videoTransport.loop && (L.loop = !!P.videoTransport.loop), s && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Fi(s, y, p), s || Jt(), Tn({
      ready: !!s,
      playing: !L.paused && !L.ended,
      visible: !!s && h.primaryTool !== "paint" && h.primaryTool !== "mask",
      currentTime: ee.editorTime,
      duration: y,
      frameCount: d,
      fps: p,
      mode: ee.mode,
      hasAudio: g,
      loop: !!L.loop,
      muted: !!L.muted,
      volume: Number(L.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), s || null;
  }
  function Cp(r, o = null) {
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
  function Ds(r, o = null) {
    const s = Is(r), c = Array.isArray(s) && s.length ? s[0] : null, d = Xr(c);
    if (!d) return null;
    const p = `__ui__${r}`, y = G.get(p);
    if (y && y.__panoSrc === d) return y;
    const g = new Image();
    return g.__panoSrc = d, Pa(g, d), g.onload = () => {
      Aa(g, d), typeof o == "function" ? o(g) : ge();
    }, g.onerror = () => {
      qr(g, d), typeof o == "function" ? o(g) : ge();
    }, g.src = d, G.set(p, g), g;
  }
  function Uc(r = null) {
    const o = Po(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Ds(kl, r);
  }
  function Bc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Pr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), d = Math.max(1, Number(s || 1)), p = W(Number(r || 30), 0.1, 179) * Et, y = 2 * Math.atan(Math.tan(p * 0.5) * (d / c));
    return W(y * _r, 0.1, 179);
  }
  function Ip(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const c = s.version;
      let d = null;
      if (typeof c == "number" && Number.isInteger(c) ? d = c : typeof c == "string" && /^\d+$/.test(c) && (d = Number.parseInt(c, 10)), d !== 1) return null;
      const p = s.pose;
      if (!p || typeof p != "object") return null;
      const y = Number(p.yaw_deg), g = Number(p.pitch_deg), w = Number(p.roll_deg), N = Number(p.hFOV_deg);
      if (![y, g, w, N].every(($) => Number.isFinite($))) return null;
      let k = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(k, -0) && (k = 0);
      const M = {
        yaw_deg: k,
        pitch_deg: W(g, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(N, 0.1, 179)
      }, T = Number(s.source_aspect);
      return Number.isFinite(T) && T > 0 && (M.source_aspect = T), M;
    } catch {
      return null;
    }
  }
  function Gc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), p = oa(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: p
    };
  }
  function Tp(r) {
    var g;
    if (!r || typeof r != "object") return Gc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), p = Number(r == null ? void 0 : r.vFOV_deg);
    let y = 1;
    if (Number.isFinite(d) && Number.isFinite(p)) {
      const w = W(d, 0.1, 179) * Et, N = W(p, 0.1, 179) * Et, k = Math.tan(N * 0.5);
      if (Math.abs(k) > 1e-6) {
        const M = Math.tan(w * 0.5) / k;
        Number.isFinite(M) && M > 0 && (y = M);
      }
    }
    if (r != null && r.asset_id && ((g = v == null ? void 0 : v.assets) != null && g[r.asset_id])) {
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
  function Ep(r) {
    var c, d, p, y, g;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((w) => String((w == null ? void 0 : w.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const w = Qh(e.graph, s), { originId: N, originSlot: k } = ep(w), M = ba(N), T = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (c = M == null ? void 0 : M.data) == null ? void 0 : c.output,
        (d = M == null ? void 0 : M.data) == null ? void 0 : d.result,
        (p = M == null ? void 0 : M.ui) == null ? void 0 : p.output,
        (y = M == null ? void 0 : M.ui) == null ? void 0 : y.result
      ];
      for (const $ of T) {
        if (!Array.isArray($)) continue;
        const te = Number(k || 0), B = $[te];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((g = _n(e, r)) == null ? void 0 : g.value) || "");
  }
  function Dp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : Ip(o);
    if (c) {
      const y = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Pr(c.hFOV_deg, y, g),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const d = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), p = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Pr(30, d, p),
      rot_deg: 0
    };
  }
  function Kc(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find(($) => String(($ == null ? void 0 : $.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = Uc(() => {
      var $;
      ($ = e.__panoExternalStickerSync) == null || $.call(e, "image-loaded");
    }), d = Cp(jc("pano_sticker_input_pose"), null), p = Ep("sticker_state"), y = Bc(d && typeof d == "object" ? JSON.stringify(d) : p), g = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], w = g.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Rr);
    if (s == null) {
      w >= 0 && (g.splice(w, 1), h.selectedId === Rr && (h.selectedId = null, h.selectedIds = [], v.active.selected_sticker_id = null), wt(), He(), Ue(), ge());
      return;
    }
    const N = g.reduce(($, te) => Math.max($, Number((te == null ? void 0 : te.z_index) || 0)), -1);
    let k = w >= 0 ? g[w] : null;
    const M = !k || Number(k.source_link_id ?? -1) !== Number(s) || String(k.source_state_hash || "") !== y;
    k || (k = {
      id: Rr,
      source_kind: Ml
    }, g.push(k)), k.id = Rr, k.source_kind = Ml, k.source_link_id = Number(s), k.source_state_hash = y, k.visible = k.visible !== !1;
    let T = !1;
    if (M) {
      const $ = Dp(d, p, c);
      Object.assign(k, $, {
        initial_pose: { ...$ },
        visible: !0,
        z_index: N + 1
      }), T = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const $ = Pr(
        Number(k.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(k.vFOV_deg || 0) - $) > 1e-6 && (k.vFOV_deg = $, T = !0);
    }
    T && (wt(), He(), Ue()), ge();
  }
  function ai(r = {}) {
    const s = r.preservePanelValues !== !1 ? at() : null;
    s && (h.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: ta(s)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Rp() {
    if (t !== "cutout") return;
    const r = Ke();
    r && kr(r);
  }
  function Rs() {
    if (t !== "cutout") return;
    const r = Ke();
    ea(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Te.camera : Te.plus_circle
    });
  }
  function La() {
    const r = !!Ke();
    h.mode === "frame" && !r && (h.mode = "pano"), h.outputPreviewRect = null, P.viewButtons.forEach((o) => {
      const s = o.key === h.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), P.outputPreviewToggle.visible = t === "cutout" && !!Ke(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = !0, P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame), xu() ? ft(h.pointerPos) : de(h.mode === "pano" ? "grab" : "default");
  }
  function Op() {
    const o = Qc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Os() {
    const r = Rn(h.viewYaw, h.viewPitch);
    let o = Un(0, 1, 0);
    Math.abs(An(r, o)) > 0.999 && (o = Un(0, 0, 1));
    const s = gi(xo(o, r)), c = gi(xo(r, s));
    return { right: s, up: c, fwd: r };
  }
  function Vi(r) {
    const { right: o, up: s, fwd: c } = Os(), d = An(r, o), p = An(r, s), y = An(r, c);
    if (y <= 1e-5) return null;
    const g = j.width, w = j.height, N = h.viewFov * Et, k = 2 * Math.atan(Math.tan(N / 2) * (w / g)), M = g / 2 / Math.tan(N / 2), T = w / 2 / Math.tan(k / 2);
    return {
      x: g / 2 + d / y * M,
      y: w / 2 - p / y * T,
      z: y
    };
  }
  function Fs(r, o) {
    const { right: s, up: c, fwd: d } = Os(), p = j.width, y = j.height, g = h.viewFov * Et, w = 2 * Math.atan(Math.tan(g / 2) * (y / p)), N = (r - p / 2) / (p / 2) * Math.tan(g / 2), k = (y / 2 - o) / (y / 2) * Math.tan(w / 2), M = vo(vo(_o(s, N), _o(c, k)), d);
    return gi(M);
  }
  function dr() {
    const r = j.width, o = j.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, w = g * s;
      return { x: (r - w) * 0.5, y: 0, w, h: g };
    }
    const d = r, p = d / s;
    return { x: 0, y: (o - p) * 0.5, w: d, h: p };
  }
  function Wc(r) {
    var y;
    if (r && typeof r == "object" && (Rt(r) || r.external === !0))
      return Uc(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = G.get(o);
    if (s) return s;
    const c = (y = v.assets) == null ? void 0 : y[o], d = fw(c);
    if (!d) return null;
    const p = new Image();
    return Pa(p, d), p.onload = () => {
      Aa(p, d), ge();
    }, p.onerror = () => {
      qr(p, d), ge();
    }, p.src = d, G.set(o, p), p;
  }
  function Yc(r, o = null) {
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
  function Fp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = ue.get(o);
    if (s) return s.ready ? s : null;
    const c = Yc(r, () => {
      const k = ue.get(o);
      k && (k.ready = !1), ge({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const d = Number(c.naturalWidth || c.width || 0), p = Number(c.naturalHeight || c.height || 0);
    if (d < 1 || p < 1) return null;
    const y = document.createElement("canvas");
    y.width = d, y.height = p;
    const g = y.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, d, p), g.drawImage(c, 0, 0, d, p);
    const w = g.getImageData(0, 0, d, p).data, N = { canvas: y, width: d, height: p, alpha: w, ready: !0 };
    return ue.set(o, N), N;
  }
  function Lp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((o == null ? void 0 : o.u) || 0), p = Number((o == null ? void 0 : o.v) || 0), y = yn(Number(r.u || 0), d), g = Number(r.v || 0) - p, w = Math.max(0.02, Number(s || 1)), N = Number(c || 0) * Et, k = Math.cos(N), M = Math.sin(N), T = y / w, $ = g / w, te = T * k + $ * M, B = -T * M + $ * k;
    return {
      ...r,
      u: ((d + te) % 1 + 1) % 1,
      v: p + B
    };
  }
  function zp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, d = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, p = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, y = Lp(
      p,
      d,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), w = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(w > 1e-6)) return null;
    const N = yn(Number(y.u || 0), Number(s.u0 || 0)) / g, k = (Number(y.v || 0) - Number(s.v0 || 0)) / w;
    if (N < 0 || N > 1 || k < 0 || k > 1) return 0;
    const M = Fp(r);
    if (!M) return null;
    const T = W(Math.floor(N * M.width), 0, M.width - 1), $ = W(Math.floor(k * M.height), 0, M.height - 1);
    return Number(M.alpha[($ * M.width + T) * 4 + 3] || 0);
  }
  function qc(r, o, s, c = null) {
    if (!(o != null && o.visible) || !Zn(s, o.corners)) return !1;
    const d = c || kn(s, performance.now()), p = zp(r, d);
    return p === null ? !0 : p > 8;
  }
  function $p() {
    var c, d, p, y, g, w, N, k;
    const r = ((d = (c = h.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : d.call(c, Ns(!1))) || null, o = Math.max(1, Number(((p = r == null ? void 0 : r.descriptor) == null ? void 0 : p.width) || ((g = (y = r == null ? void 0 : r.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((w = r == null ? void 0 : r.descriptor) == null ? void 0 : w.height) || ((k = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : k.height) || 1024));
    return { width: o, height: s };
  }
  function jp() {
    var $, te, B;
    const r = h.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = fn(), c = `${Da()}:${s.width}:${s.height}`;
    if ((($ = h._activePaintEraserPreviewInfo) == null ? void 0 : $.cacheKey) === c)
      return h._activePaintEraserPreviewInfo.value || null;
    const d = Kt(o), p = (d == null ? void 0 : d.geometry) || null;
    if (p && String(p.geometryKind || "") !== "lasso_fill") {
      const K = Array.isArray(p.rawPoints) && p.rawPoints.length ? p.rawPoints : Array.isArray(p.points) ? p.points : [];
      p.processedPoints = Bs(K, d.targetSpace, !0);
    }
    const y = Bi(s.width, s.height, { readback: !0 });
    if (!uu(y, d, { w: s.width, h: s.height })) return null;
    const g = ((B = (te = y.ctx) == null ? void 0 : te.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let w = s.width, N = s.height, k = -1, M = -1;
    for (let K = 0; K < s.height; K += 1)
      for (let le = 0; le < s.width; le += 1)
        g[(K * s.width + le) * 4 + 3] <= 8 || (le < w && (w = le), K < N && (N = K), le > k && (k = le), K > M && (M = K));
    if (k < w || M < N)
      return h._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const T = {
      surface: y,
      bounds: { minX: w, minY: N, maxX: k, maxY: M },
      key: `${c}:${w}:${N}:${k}:${M}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: c, value: T }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function Hi() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Vp(r, o, s) {
    var c, d;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const p = r.item.bbox, y = ((d = r.item) == null ? void 0 : d.transform) || {}, g = Number(p.u0 || 0) + Number(y.du || 0), w = Number(p.u1 || 0) + Number(y.du || 0), N = Number(p.v0 || 0) + Number(y.dv || 0), k = Number(p.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(N, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    if (r.type === "strokeGroup") {
      const p = Sn(r.actionGroupId, "paint"), y = ur(r.actionGroupId, "paint", p);
      if (!y) return null;
      const g = y.centerUv.u - y.halfW, w = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, k = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(N, 0, 1) * s),
        maxY: Math.ceil(W(k, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    return null;
  }
  function Hp(r, o, s) {
    if (!r || !o) return !1;
    const c = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: s - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], d = c(r), p = c(o);
    return d.some((y) => p.some((g) => !(y.maxX < g.minX || g.maxX < y.minX || y.maxY < g.minY || g.maxY < y.minY)));
  }
  function Up(r, o, s) {
    var be, Ce, Ee, ke, X, ne, ve;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), d = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || d < 1) return r;
    const p = Vp(o, c, d);
    if (p && !Hp(p, s.bounds, c)) return r;
    const y = String(((Ce = o.item) == null ? void 0 : Ce.id) || o.id || ""), g = ((Ee = o.item) == null ? void 0 : Ee.transform) || {}, w = `${s.key}:${y}:${c}:${d}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, N = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(w)) return N.get(w);
    const k = W(Math.floor(Number(((ke = s.bounds) == null ? void 0 : ke.minX) || 0)), 0, Math.max(0, c - 1)), M = W(Math.floor(Number(((X = s.bounds) == null ? void 0 : X.minY) || 0)), 0, Math.max(0, d - 1)), T = W(Math.ceil(Number(((ne = s.bounds) == null ? void 0 : ne.maxX) || 0)), k, Math.max(0, c - 1)), $ = W(Math.ceil(Number(((ve = s.bounds) == null ? void 0 : ve.maxY) || 0)), M, Math.max(0, d - 1)), te = Math.max(1, T - k + 1), B = Math.max(1, $ - M + 1), K = Bi(c, d, { readback: !0 });
    K.ctx.clearRect(0, 0, c, d), K.ctx.drawImage(r, 0, 0);
    const le = K.ctx.getImageData(k, M, te, B);
    K.ctx.save(), K.ctx.globalCompositeOperation = "destination-out", K.ctx.drawImage(s.surface.canvas, 0, 0), K.ctx.restore();
    const me = K.ctx.getImageData(k, M, te, B);
    let oe = !1;
    for (let Se = 0; Se < te * B; Se += 1) {
      const Ie = le.data[Se * 4 + 3], Le = me.data[Se * 4 + 3];
      if (Ie > Le) {
        oe = !0;
        break;
      }
    }
    return oe ? (N.size > 64 && N.clear(), N.set(w, K.canvas), K.canvas) : (N.set(w, r), r);
  }
  function Xc(r, o = null) {
    const s = It((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const d = Yc(r, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: p, height: y } = $p(), g = (r == null ? void 0 : r.transform) || {}, w = [
      s,
      p,
      y,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      Gi()
    ].join(":"), N = se.get(w);
    if (N) return N;
    se.size > 64 && se.clear();
    const k = document.createElement("canvas");
    k.width = p, k.height = y;
    const M = k.getContext("2d");
    if (!M) return null;
    const T = Number(c.u0 || 0) * p, $ = Number(c.v0 || 0) * y, te = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * p), B = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * y), K = T + te * 0.5 + Number(g.du || 0) * p, le = $ + B * 0.5 + Number(g.dv || 0) * y, me = Number(g.rot_deg || 0) * Et, oe = Math.max(0.01, Number(g.scale || 1));
    for (const be of [-p, 0, p])
      M.save(), M.translate(K + be, le), M.rotate(me), M.scale(oe, oe), M.drawImage(d, -te * 0.5, -B * 0.5, te, B), M.restore();
    return se.set(w, k), k;
  }
  function Bp() {
    return _s(v, {
      selectedId: h.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Gp(r) {
    return Mh(
      v,
      (o, s, c) => Wc(c || o),
      { scene: r }
    );
  }
  function Jc(r, o, s, c, d = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const p = hr(c);
    if (ru(o, s))
      return em(
        o,
        s,
        p && h.showPanorama ? c : null,
        `${d}_bg_gl`
      );
    const g = Va(), w = Ha(g), N = h.showObjects ? Ua() : Ui([]), M = ia({
      stateRevision: [
        d,
        p ? ni(c) : "no_bg",
        Array.isArray(w) ? w.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        N.length ? N.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: p && h.showPanorama ? c : null,
      backgroundRevision: p ? `${d}:${ni(c)}` : "",
      coverageDeg: zt(v.coverage),
      scene: g,
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
  async function Ls(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const c = await tn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!c || c.status !== 200)
      throw new Error(`upload failed (${(c == null ? void 0 : c.status) || "no-response"})`);
    const d = await c.json(), p = String((d == null ? void 0 : d.name) || "").trim();
    if (!p)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: p,
      subfolder: String((d == null ? void 0 : d.subfolder) || "panorama_stickers"),
      storage: String((d == null ? void 0 : d.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function zs(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const d = await tn.fetchApi("/upload/image", { method: "POST", body: c });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const p = await d.json(), y = String((p == null ? void 0 : p.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((p == null ? void 0 : p.subfolder) || "panorama_stickers"),
      storage: String((p == null ? void 0 : p.type) || "input")
    };
  }
  let za = null, $a = !1;
  function Kp() {
    const r = od(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = li();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Zc() {
    const r = String(e.id ?? "0"), o = bo.get(r);
    if ($a && o) return o;
    const s = (async () => {
      var p, y, g, w, N, k, M, T, $, te, B, K;
      const c = li(), d = od(v.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, za = c, dn());
        return;
      }
      if (za !== c && !$a) {
        $a = !0;
        try {
          Wa();
          const le = Ns(!1), me = ((y = (p = h.paintEngine) == null ? void 0 : p.getErpTarget) == null ? void 0 : y.call(p, le)) || null, oe = ((g = me == null ? void 0 : me.displayPaint) == null ? void 0 : g.canvas) || null, be = ((w = me == null ? void 0 : me.committedMask) == null ? void 0 : w.canvas) || null, Ce = Math.max(1, Number(((N = me == null ? void 0 : me.descriptor) == null ? void 0 : N.width) || (oe == null ? void 0 : oe.width) || (be == null ? void 0 : be.width) || 2048)), Ee = Math.max(1, Number(((k = me == null ? void 0 : me.descriptor) == null ? void 0 : k.height) || (oe == null ? void 0 : oe.height) || (be == null ? void 0 : be.height) || 1024));
          (!oe && d.totalPaintCount > 0 || !be && d.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((M = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== Ce || Number(((T = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Ee) && (h._paintLayerSyncBlankSurface = Bi(Ce, Ee)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ce, Ee));
          const ke = oe || d.totalPaintCount > 0 && (($ = h._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null, X = be || d.totalMaskCount > 0 && ((te = h._paintLayerSyncBlankSurface) == null ? void 0 : te.canvas) || null;
          if (!ke && !X) return;
          let ne = null, ve = null;
          const Se = [];
          if (d.totalPaintCount > 0) {
            ne = await zs(ke, `pano_paint_${r}.png`);
            for (const Ie of le) {
              const Le = String(Ie || "").trim();
              if (!Le) continue;
              const ze = ((K = (B = h.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : K.call(B, Le)) || null;
              if (!ze) continue;
              const We = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ye = await zs(ze, `pano_group_${r}_${We}.png`);
              Ye && Se.push({
                id: Le,
                actionGroupId: Le,
                image: Ye
              });
            }
          }
          d.totalMaskCount > 0 && (ve = await zs(X, `pano_mask_${r}.png`)), c === li() && (v.painting_layer = {
            paint: ne,
            mask: ve,
            groups: Se,
            revision: c
          }, za = c, dn());
        } catch (le) {
          throw le;
        } finally {
          $a = !1;
        }
      }
    })();
    return bo.set(r, s), s.finally(() => {
      bo.get(r) === s && bo.delete(r);
    }), s;
  }
  function Ar() {
    if (t === "cutout") {
      const g = Hc();
      if (g) return g;
      const w = Po(
        e,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !Nl(w) ? w : cd(e, "pano_input_images", G, () => ge()) || w || null;
    }
    const r = Hc();
    if (r) return r;
    const o = cd(e, "pano_input_images", G, () => ge());
    if (o && !Nl(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], c = s.includes("erp_image"), d = s.includes("bg_erp");
    let p = [];
    return i && (c || d) ? p = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : p = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Po(e, p, () => ge(), `background:${p.join("|")}`) || o || null;
  }
  function hr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Wp() {
    let r = Ri;
    const o = [];
    if (h.showPanorama) {
      const s = Ar();
      r = Zl(s, hr);
    }
    if (h.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const d = Wc(c);
        o.push(Zl(d, hr));
      }
    }
    return Ax({
      presented: J.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function oi() {
    const r = new Set(
      (v.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(v.assets || {}).forEach((o) => {
      r.has(o) || (delete v.assets[o], G.delete(o));
    });
  }
  function $s(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(W(r.y, -1, 1))
    };
  }
  function js(r, o = null) {
    const { lon: s, lat: c } = $s(r), d = dr();
    let p = d.x + (s / (2 * Math.PI) + 0.5) * d.w;
    const y = d.y + (0.5 - c / Math.PI) * d.h;
    if (o !== null) {
      for (; p - o > d.w / 2; ) p -= d.w;
      for (; p - o < -d.w / 2; ) p += d.w;
    }
    return { x: p, y, z: 1 };
  }
  function ja(r) {
    const o = Rn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Un(0, 1, 0);
    Math.abs(An(o, s)) > 0.999 && (s = Un(0, 0, 1));
    const c = gi(xo(s, o)), d = gi(xo(o, c)), p = Math.tan(W(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Et), y = Math.tan(W(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Et), g = Number(r.rot_deg || r.roll_deg || 0) * Et, w = Math.cos(g), N = Math.sin(g);
    return {
      centerDir: o,
      right: c,
      up: d,
      tanX: p,
      tanY: y,
      cr: w,
      sr: N
    };
  }
  function pr(r, o, s) {
    const c = o * r.cr - s * r.sr, d = o * r.sr + s * r.cr;
    return gi(vo(vo(r.centerDir, _o(r.right, c)), _o(r.up, d)));
  }
  function Qc(r) {
    const o = ja(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: d }) => pr(o, c * o.tanX, d * o.tanY));
  }
  function eu(r, o, s) {
    const c = ja(r), d = (o * 2 - 1) * c.tanX, p = (1 - s * 2) * c.tanY;
    return pr(c, d, p);
  }
  function tu(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: W((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Yp(r) {
    var w, N, k, M;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.scale) || 1)), d = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), p = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.du) || 0), y = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => Ra(Oa(T, s, c, d), p, y));
  }
  function qp(r) {
    const o = It((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, d = `${o}:${h.mode}:${Gi()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (h.mode === "frame") {
      const p = Ke(), y = p ? Tt(p) : null;
      return `${d}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function Xp(r) {
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
      ta(r)
    ].join(":");
    if (h.mode === "frame") {
      const d = Ke(), p = d ? Tt(d) : null;
      return `${c}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(Number((p == null ? void 0 : p.x) || 0))}:${Math.round(Number((p == null ? void 0 : p.y) || 0))}:${Math.round(Number((p == null ? void 0 : p.w) || 0))}:${Math.round(Number((p == null ? void 0 : p.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((j == null ? void 0 : j.width) || 0))}:${Math.round(Number((j == null ? void 0 : j.height) || 0))}`;
  }
  function Jp() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? h.hqFrames && h.hqFrames > 0 ? [28, 20] : h.interaction ? [12, 9] : [20, 14] : r === "high" ? h.hqFrames && h.hqFrames > 0 ? [48, 36] : h.interaction ? [20, 14] : [36, 26] : h.hqFrames && h.hqFrames > 0 ? [40, 30] : h.interaction ? [16, 12] : [28, 20];
  }
  function nu() {
    var r;
    return !!Z && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function ru(r, o) {
    return !nu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((j == null ? void 0 : j.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((j == null ? void 0 : j.height) || 0));
  }
  function Va() {
    return h.showObjects ? Bp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ha(r) {
    return !h.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Gp(r);
  }
  function iu() {
    var r, o;
    return ((o = (r = h.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Zp() {
    return iu() ? `${Gs()}:mask_display` : "";
  }
  function Ui(r) {
    if (!h.showMask) return r;
    const o = iu();
    if (!o) return r;
    const s = Zp(), c = r.reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.zIndex) || 0)), -1), d = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.z_index) || 0)), -1), p = Math.max(c, d);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: p + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Ua() {
    var c, d;
    const r = Ms(!0), o = jp(), s = [];
    for (const p of r) {
      if ((p == null ? void 0 : p.type) === "strokeGroup") {
        const y = String(p.actionGroupId || p.id || "");
        if (!y) continue;
        const g = ((d = (c = h.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : d.call(c, y)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${y}`,
          source: g,
          revision: `${Gs()}:${y}`,
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((p == null ? void 0 : p.type) === "rasterObject") {
        const y = p.item || null, g = It((y == null ? void 0 : y.id) || p.id || "");
        if (!g) continue;
        const w = Xc(y, () => ge());
        if (!w) continue;
        const N = Up(w, p, o), k = (y == null ? void 0 : y.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: N,
          revision: [
            li(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(k.du || 0).toFixed(6),
            Number(k.dv || 0).toFixed(6),
            Number(k.rot_deg || 0).toFixed(3),
            Number(k.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((p == null ? void 0 : p.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return Ui(s);
  }
  function Qp(r, o = "modal_bg_gl") {
    const s = Va(), c = Ha(s), d = hr(r), p = d ? ni(r) : "none", y = h.showObjects ? Ua() : Ui([]), g = null, w = [
      o,
      p,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      y.length ? y.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ia({
        stateRevision: w,
        backgroundSource: d ? r : null,
        backgroundRevision: d ? `${o}:${p}` : "",
        coverageDeg: zt(v.coverage),
        scene: s,
        textures: c,
        paintSource: g,
        paintRevision: "",
        rasterEntries: y,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || c.length > 0 || y.length > 0
    };
  }
  function Vs() {
    if (!Z) return;
    const r = Z.getContext("webgl2");
    if (r)
      r.viewport(0, 0, Z.width, Z.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = Z.getContext("2d");
      o && (o.clearRect(0, 0, Z.width, Z.height), o.fillStyle = "#070707", o.fillRect(0, 0, Z.width, Z.height));
    }
    J.backgroundWasVisible = !1, J.backgroundDirty = !1;
  }
  function em(r, o, s, c = "modal_bg_gl") {
    var N;
    if (!ru(r, o)) return !1;
    if (!J.backgroundDirty && J.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: p } = Qp(s, c);
    if (!p || !we.syncState(d))
      return Vs(), !1;
    const g = we.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (N = Z == null ? void 0 : Z.getContext) == null ? void 0 : N.call(Z, "2d");
    return !g || !w ? (Vs(), !1) : (w.clearRect(0, 0, Z.width, Z.height), w.drawImage(g, 0, 0, Z.width, Z.height), J.backgroundWasVisible = !0, J.backgroundDirty = !1, !0);
  }
  function tm(r = !1) {
    const o = j.width, s = j.height, c = dr();
    if (I.globalAlpha = 1, I.lineWidth = 1, r || (I.fillStyle = "#070707", I.fillRect(0, 0, o, s), I.fillStyle = "#070707", I.fillRect(c.x, c.y, c.w, c.h)), Wa(), Jc(
      I,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Ar(),
      "modal_unwrap"
    ), h.showGrid && !h.fullscreen) {
      I.strokeStyle = "#3f3f46";
      for (let p = 0; p <= 16; p += 1) {
        const y = c.x + c.w * p / 16;
        I.beginPath(), I.moveTo(y, c.y), I.lineTo(y, c.y + c.h), I.stroke();
      }
      for (let p = 0; p <= 8; p += 1) {
        const y = c.y + c.h * p / 8;
        I.beginPath(), I.moveTo(c.x, y), I.lineTo(c.x + c.w, y), I.stroke();
      }
      I.strokeStyle = "rgba(250, 250, 250, 0.86)", I.lineWidth = 1.2, I.beginPath(), I.moveTo(c.x, c.y + c.h / 2), I.lineTo(c.x + c.w, c.y + c.h / 2), I.stroke(), I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center";
      const d = c.y + c.h * 0.57;
      I.fillText("Left", c.x + c.w * 0.25, d), I.fillText("Front", c.x + c.w * 0.5, d), I.fillText("Right", c.x + c.w * 0.75, d), I.fillText("Back", c.x + 38, d), I.fillText("Back", c.x + c.w - 38, d);
    }
  }
  function au(r, o, s = 1) {
    let c = !1;
    I.strokeStyle = o, I.lineWidth = s, I.beginPath();
    for (const d of r) {
      const p = Vi(d);
      if (!p) {
        c = !1;
        continue;
      }
      c ? I.lineTo(p.x, p.y) : (I.moveTo(p.x, p.y), c = !0);
    }
    I.stroke();
  }
  function nm(r = !1) {
    const o = j.width, s = j.height;
    if (r || (nu() ? I.clearRect(0, 0, o, s) : (I.fillStyle = "#070707", I.fillRect(0, 0, o, s))), Wa(), Jc(
      I,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: h.viewYaw,
        pitchDeg: h.viewPitch,
        fovDeg: h.viewFov,
        coverageDeg: zt(v.coverage)
      },
      Ar(),
      "modal_pano"
    ), h.showGrid && !h.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const p = [];
        for (let y = -89; y <= 89; y += 4) p.push(Rn(d, y));
        au(p, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const p = [];
        for (let y = -180; y <= 180; y += 4) p.push(Rn(y, d));
        au(p, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center", c.forEach((d) => {
        const p = Vi(d.dir);
        p && I.fillText(d.name, p.x, p.y + 24);
      });
    }
  }
  function rm(r, o = null, s = null, c = null) {
    if (h.mode === "frame") {
      const d = o || Ke();
      if (!d) return [];
      const p = s || Tt(d);
      return jm(r, d, p);
    }
    return fu(r, c);
  }
  function Ba(r, o = null, s = null, c = null, d = null) {
    if (!r) return null;
    if (h.mode === "unwrap") {
      const y = fu([r], d);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const p = si(r);
    return p ? qn(p, o, s, c) : null;
  }
  function im(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = Sn(s, r.layerKind), d = ur(s, r.layerKind, c), p = (d == null ? void 0 : d.centerUv) || Ps(s, r.layerKind, c), y = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = [], w = h.mode === "frame" ? Ke() : null, N = w ? Tt(w) : null;
    for (const oe of c) {
      const be = (oe == null ? void 0 : oe.geometry) || null, Ce = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Ee = rm(Ce, w, N, y).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y));
      if (!Ee.length) continue;
      const ke = mr(String((oe == null ? void 0 : oe.toolKind) || "pen")), X = sn[ke] || sn[Jn];
      g.push({
        points: Ee,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((X == null ? void 0 : X.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || r.layerKind || "paint")
      });
    }
    const k = Ba(p, null, w, N, y);
    if (!k) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, oe), oe;
    }
    const T = sp(d).map((oe) => Ba(oe, k.x, w, N, y)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (T.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, oe), oe;
    }
    const $ = (oe, be) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: oe,
      b: be
    }), te = $(T[0], T[1]), B = $(T[1], T[2]), K = $(T[2], T[3]), le = $(T[3], T[0]), me = {
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
      strokePaths: g,
      visible: !0
    };
    return h._strokeGeomCache.set(o, me), me;
  }
  function am(r, o) {
    const s = h.mode === "frame" ? Ke() : null, c = s ? Tt(s) : null, d = tu(r), p = h.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, y = Ba(d, null, s, c, p), w = Yp(r).map((T) => Ba(T, (y == null ? void 0 : y.x) ?? null, s, c, p)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
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
  function qn(r, o = null, s = null, c = null, d = {}) {
    if (h.mode === "frame") {
      const be = s || Ke(), Ce = c || Tt(be);
      if (!be || !Ce) return null;
      const Ee = be ? Ki(be, r) : null;
      return Ee ? {
        x: Number(Ce.x || 0) + Number(Ee.x || 0) * Number(Ce.w || 0),
        y: Number(Ce.y || 0) + Number(Ee.y || 0) * Number(Ce.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return js(r, o);
    const { right: p, up: y, fwd: g } = Os(), w = An(r, p), N = An(r, y), k = An(r, g), M = 1e-4;
    if (!Number.isFinite(k) || k <= M && !(d != null && d.clipBehind)) return null;
    const T = Math.max(k, M), $ = j.width, te = j.height, B = h.viewFov * Et, K = 2 * Math.atan(Math.tan(B / 2) * (te / Math.max($, 1))), le = $ / 2 / Math.tan(B / 2), me = te / 2 / Math.tan(K / 2), oe = Math.max($, te) * 2;
    return {
      x: W($ / 2 + w / T * le, -oe, $ + oe),
      y: W(te / 2 - N / T * me, -oe, te + oe),
      z: T,
      rawZ: k,
      clipped: k <= M
    };
  }
  function om(r, o = []) {
    if (h.mode !== "pano" || ut(r)) return 1;
    const s = o.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return s.length ? Rx(0.035, 0.2, Math.min(...s)) : 1;
  }
  function sm(r) {
    const o = Rn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = h.mode === "frame" ? Ke() : null, c = s ? Tt(s) : null, d = h.mode === "pano" && (ut(r) || rn(r)), p = d ? { clipBehind: !0 } : null, y = qn(o, null, s, c, p);
    if (!y) return { visible: !1 };
    const g = ja(r), N = Qc(r).map((ne) => qn(ne, y.x, s, c, p)).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y));
    if (N.length < 4) return { visible: !1 };
    const k = pr(g, 0, g.tanY), M = pr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), T = qn(k, y.x, s, c, p);
    if (!T) return { visible: !1 };
    const $ = qn(M, (T == null ? void 0 : T.x) ?? y.x, s, c, p), te = (($ == null ? void 0 : $.x) ?? T.x) - T.x, B = (($ == null ? void 0 : $.y) ?? T.y) - T.y, K = Math.hypot(te, B) || 1, le = {
      x: T.x + te / K * 30,
      y: T.y + B / K * 30
    }, me = qn(pr(g, 0, g.tanY), y.x, s, c, p), oe = qn(pr(g, g.tanX, 0), y.x, s, c, p), be = qn(pr(g, 0, -g.tanY), y.x, s, c, p), Ce = qn(pr(g, -g.tanX, 0), y.x, s, c, p);
    if (!me || !oe || !be || !Ce) return { visible: !1 };
    const Ee = [
      y,
      ...N,
      T,
      $,
      me,
      oe,
      be,
      Ce
    ];
    if (d && !Ee.some((ne) => Number((ne == null ? void 0 : ne.rawZ) ?? (ne == null ? void 0 : ne.z)) > 1e-4)) return { visible: !1 };
    const ke = om(r, Ee), X = [
      {
        edge: "top",
        x: me.x,
        y: me.y,
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
        x: be.x,
        y: be.y,
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
      const d = String(r.actionGroupId || r.id || "").trim(), p = hp(d, r.layerKind), y = h._strokeGeomCache.get(p);
      return y || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), im(r, p));
    }
    if (Bt(r)) {
      const d = qp(r), p = h._strokeGeomCache.get(d);
      return p || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), am(r, d));
    }
    const o = Xp(r), s = h._strokeGeomCache.get(o);
    if (s) return s;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const c = sm(r);
    return h._strokeGeomCache.set(o, c), c;
  }
  function Ga(r, o, s, c = null) {
    const d = [];
    for (let p = 0; p <= s; p += 1) {
      const y = p / s;
      let g = 0, w = 0;
      o === 0 ? (g = y, w = 0) : o === 1 ? (g = 1, w = y) : o === 2 ? (g = 1 - y, w = 1) : (g = 0, w = 1 - y);
      const N = eu(r, g, w), k = h.mode === "unwrap" ? js(N, c) : Vi(N);
      k && d.push(k);
    }
    return d;
  }
  function lm(r, o) {
    const s = Rn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = h.mode === "unwrap" ? js(s) : null, d = c ? c.x : null, p = h.mode === "pano" ? 28 : 20, y = [
      Ga(r, 0, p, d),
      Ga(r, 1, p, d),
      Ga(r, 2, p, d),
      Ga(r, 3, p, d)
    ];
    I.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", I.lineWidth = o ? 2 : 1, I.beginPath();
    let g = !1;
    for (const w of y)
      for (const N of w)
        g ? I.lineTo(N.x, N.y) : (I.moveTo(N.x, N.y), g = !0);
    I.closePath(), I.stroke();
  }
  function cm() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function Hs() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function Ka(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function um(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const d = W(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (d <= 0.01) return;
    const p = I.globalAlpha;
    I.globalAlpha = p * d;
    const y = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = o ? 3.2 : 2.6;
    Ka(I, c), I.fillStyle = g, I.fill(), I.strokeStyle = y, I.lineWidth = w, I.stroke(), I.save(), I.strokeStyle = y, I.lineWidth = o ? 3.2 : 2.6, I.lineCap = "round";
    const N = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], k = { top: "bottom", right: "left", bottom: "top", left: "right" }, M = o ? 12 : 9;
    N.forEach((T) => {
      const te = N.find((me) => (me == null ? void 0 : me.edge) === k[T == null ? void 0 : T.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, B = te.x - T.x, K = te.y - T.y, le = Math.hypot(B, K) || 1;
      I.beginPath(), I.moveTo(T.x, T.y), I.lineTo(T.x + B / le * M, T.y + K / le * M), I.stroke();
    }), I.restore(), I.globalAlpha = p;
  }
  function fm(r, o, s, c) {
    const d = W(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (d <= 0.01) return;
    if (rn(r)) {
      um(o, s, c);
      return;
    }
    if (ut(r)) {
      const y = I.globalAlpha;
      I.globalAlpha = y * _p(r) * d, h.mode === "frame" ? (I.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", I.lineWidth = s ? 2 : 1, Ka(I, o.corners), I.stroke()) : lm(r, s), I.globalAlpha = y;
      return;
    }
    const p = I.globalAlpha;
    I.globalAlpha = p * d, I.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ka(I, o.corners), I.fill(), I.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", I.lineWidth = s ? 2.8 : 1.9, Ka(I, o.corners), I.stroke(), I.globalAlpha = p;
  }
  function dm(r, o, s) {
    I.fillStyle = s, o.corners.forEach((c) => {
      I.beginPath(), I.arc(c.x, c.y, 6.5, 0, Math.PI * 2), I.fill();
    }), rn(r) && (I.strokeStyle = s, I.lineCap = "round", I.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var k, M, T, $;
      const d = (((k = c.b) == null ? void 0 : k.x) ?? c.x) - (((M = c.a) == null ? void 0 : M.x) ?? c.x), p = (((T = c.b) == null ? void 0 : T.y) ?? c.y) - ((($ = c.a) == null ? void 0 : $.y) ?? c.y), y = Math.hypot(d, p) || 1, g = d / y, w = p / y, N = 10;
      I.beginPath(), I.moveTo(c.x - g * N, c.y - w * N), I.lineTo(c.x + g * N, c.y + w * N), I.stroke();
    }), I.lineCap = "butt"), At(r) || (I.strokeStyle = "rgba(250, 250, 250, 0.9)", I.lineWidth = 1.8, I.beginPath(), I.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), I.lineTo(o.rotateHandle.x, o.rotateHandle.y), I.stroke(), I.fillStyle = s, I.beginPath(), I.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), I.fill());
  }
  function hm() {
    var g;
    const [r, o] = Jp(), s = Nn(), c = s.length > 1, d = t === "cutout" ? cm() : Wn(), p = d.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${rn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== d || h._sortedItemsCache.orderKey !== p) && (h._sortedItemsCache = {
      src: d,
      orderKey: p,
      sorted: [...d]
    });
    const y = h._sortedItemsCache.sorted;
    for (const w of y) {
      const N = !c && mp(w);
      if (h.mode === "frame" && !N || !h.showObjects && !rn(w)) continue;
      const k = ut(w), M = rn(w), T = fr(w);
      if (!k && !M)
        continue;
      const $ = Ot(w);
      if (t !== "stickers" && !$.visible)
        continue;
      const te = W(Number(($ == null ? void 0 : $.visibilityAlpha) ?? 1), 0, 1);
      if (!(te <= 0.01) && (fm(w, $, N, T), N && $.visible)) {
        const B = T ? "#ff4d4f" : k && Rt(w) ? "#f59e0b" : "#0070f3", K = I.globalAlpha;
        I.globalAlpha = K * te, dm(w, $, B), I.globalAlpha = K;
      }
    }
    if (c) {
      const w = As(s);
      if (w != null && w.visible) {
        const N = Cs(s) ? "#ff4d4f" : "#0070f3";
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
        const k = fr(w) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(N.corners[0].x, N.corners[0].y);
        for (let M = 1; M < N.corners.length; M += 1) I.lineTo(N.corners[M].x, N.corners[M].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = k, N.corners.forEach((M) => {
          I.beginPath(), I.arc(M.x, M.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      });
    if (((g = h.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const w = ku(h.interaction.start, h.interaction.current);
      I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.9)", I.fillStyle = "rgba(255, 255, 255, 0.08)", I.lineWidth = 1, I.setLineDash([5, 4]), I.beginPath(), I.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), I.fill(), I.stroke(), I.restore();
    }
    h.hqFrames && r >= 40 && o >= 30 && (h.hqFrames -= 1, h.hqFrames > 0 && ge());
  }
  function pm(r) {
    const o = wr(r), s = W(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function ou(r, o = !1) {
    const s = W(oa(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function mm(r) {
    if (!Re || !r) return !1;
    const o = Re.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || Re.clientWidth || 0)), c = Math.round(Number(o.clientHeight || Re.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function gm() {
    return `obj:${Number(h.objectVisualRevision || 0)}`;
  }
  function bm(r, o = {}) {
    if (!r) return "";
    const s = Ar(), c = s && hr(s) ? ni(s) : "no_bg", d = pm(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      Gs(),
      gm(),
      Da(),
      c,
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "mask:1" : "mask:0",
      `${d.width}x${d.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function ym() {
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
    const o = Ar();
    if (!r || !ie || !C) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (te = ie == null ? void 0 : ie.clearScene) == null || te.call(ie), (B = C == null ? void 0 : C.requestRender) == null || B.call(C);
      return;
    }
    const s = ou(r, !!h.outputPreviewExpanded);
    P.cameraPreview.width = s.width, P.cameraPreview.height = s.height, P.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const c = Va(), d = Ha(c), p = hr(o), y = p ? ni(o) : "none", g = h.showObjects ? Ua() : Ui([]), w = ia({
      stateRevision: [
        "cutout_preview_camera",
        y,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((K) => String((K == null ? void 0 : K.id) || "")).join(",") : "none",
        Array.isArray(d) ? d.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        g.length ? g.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none",
        h.showPanorama ? "panorama:1" : "panorama:0",
        h.showObjects ? "objects:1" : "objects:0",
        h.showMask ? "showMask:1" : "showMask:0",
        zt(v.coverage)
      ].join("|"),
      backgroundSource: p && h.showPanorama ? o : null,
      backgroundRevision: p ? `cutout_preview:${y}` : "",
      coverageDeg: zt(v.coverage),
      scene: c,
      textures: d,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(p || d.length > 0 || g.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, ie.clearScene(), C.requestRender();
      return;
    }
    if (h.showPanorama && !p && d.length === 0 && g.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, ie.clearScene(), C.requestRender();
      return;
    }
    ie.syncScene(w), C.setView(wr(r));
    const k = mm(s), M = k ? C.present() : !1;
    k || C.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = k && M ? "" : "Loading preview", P.cameraPreview.settled = k && M && J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame;
  }
  function vm(r, o, s, c = {}) {
    if (!ie || !s) return !1;
    const d = Ar(), p = Va(), y = Ha(p), g = hr(d), w = h.showObjects ? Ua() : Ui([]);
    return g || y.length > 0 || w.length > 0 ? (ie.syncScene(ia({
      stateRevision: bm(s, c),
      backgroundSource: g && h.showPanorama ? d : null,
      backgroundRevision: g ? `cutout_frame:${ni(d)}` : "",
      coverageDeg: zt(v.coverage),
      scene: p,
      textures: y,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), ie.renderShotToContext(r, o, s, c)) : !1;
  }
  function Us(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return eu(r, s, c);
  }
  function si(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return Un(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function _m(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function xm(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Gt(r, "widthScale", 1),
      pressureLike: Gt(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function wm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Bs(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (c) {
      let B = null;
      r.forEach((K) => {
        const le = Number((K == null ? void 0 : K.u) || 0), me = Number((K == null ? void 0 : K.v) || 0), oe = (le % 1 + 1) % 1, be = B == null ? oe : B + yn(oe, (B % 1 + 1) % 1);
        d.set(K, { x: be, y: me }), B = be;
      });
    }
    const p = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : d.get(B) || _m(B), y = (B, K, le, me = {}) => {
      const oe = c ? (Number(K) % 1 + 1) % 1 : Number(K), be = xm(B, oe, le, me);
      return d.set(be, { x: Number(K), y: Number(le) }), be;
    }, g = (B, K, le) => {
      const me = p(B), oe = p(K);
      return y(B, Qn(me.x, oe.x, le), Qn(me.y, oe.y, le), {
        t: Qn(Number((B == null ? void 0 : B.t) || 0), Number((K == null ? void 0 : K.t) || 0), le),
        widthScale: Qn(Gt(B, "widthScale", 1), Gt(K, "widthScale", 1), le),
        pressureLike: Qn(Gt(B, "pressureLike", 1), Gt(K, "pressureLike", 1), le)
      });
    };
    if (r.length === 1) {
      const B = p(r[0]);
      return [y(r[0], B.x, B.y)];
    }
    const w = wm(o, s), N = (B, K) => {
      const le = [0];
      for (let ne = 1; ne < B.length; ne += 1) {
        const ve = p(B[ne - 1]), Se = p(B[ne]);
        le.push(le[ne - 1] + Math.hypot(Se.x - ve.x, Se.y - ve.y));
      }
      const me = le[le.length - 1] || 0;
      if (me <= 1e-8) {
        const ne = B[0], ve = p(ne);
        return [y(ne, ve.x, ve.y)];
      }
      const oe = [];
      let be = 0;
      for (let ne = 0; ne <= me + 1e-9; ne += K) {
        for (; be < le.length - 2 && le[be + 1] < ne; ) be += 1;
        const ve = le[be], Se = le[be + 1], Ie = Math.max(1e-8, Se - ve);
        oe.push(g(B[be], B[be + 1], W((ne - ve) / Ie, 0, 1)));
      }
      const Ce = B[B.length - 1], Ee = p(Ce), ke = oe[oe.length - 1], X = ke ? p(ke) : null;
      return (!X || Math.hypot(X.x - Ee.x, X.y - Ee.y) > K * 0.35) && oe.push(y(Ce, Ee.x, Ee.y)), oe;
    }, k = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const K = p(B[0]), le = [y(B[0], K.x, K.y)];
      for (let be = 0; be < B.length - 1; be += 1) {
        const Ce = B[be], Ee = B[be + 1], ke = p(Ce), X = p(Ee), ne = y(
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
      const me = B[B.length - 1], oe = p(me);
      return le.push(y(me, oe.x, oe.y)), le;
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
  function Sm(r) {
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
  function Bi(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const d = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, c.width, c.height), d.imageSmoothingEnabled = !0), { canvas: c, ctx: d };
  }
  function Gi() {
    const r = Ya();
    return `${String(h.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function li() {
    const r = Ya();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function Gs() {
    const r = Da(), o = li();
    return r ? `${o}:${r}` : o;
  }
  function Nm() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function Mm() {
    h.paintCompositeRevision += 1;
  }
  function km() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function su() {
    var r, o;
    h.paintEngineRevisionKey = null, (o = (r = h.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), h.paintEngineRevisionKey = Gi();
  }
  function lu() {
    v.painting_layer !== null && (v.painting_layer = null), za = "";
  }
  function Ft() {
    h.objectVisualRevision = Number(h.objectVisualRevision || 0) + 1, km(), J.backgroundDirty = !0, J.dirty = !0;
  }
  function Mn({ rebuildPaintEngine: r = !1 } = {}) {
    lu(), Nm(), Ft(), r && su();
  }
  function ci() {
    lu(), Mm(), Ft();
  }
  function Wa() {
    var c;
    const r = Ya(), o = `${r.width}x${r.height}`;
    h.paintEngineDescriptorKey !== o && (h.paintEngine = Hl(r), h.paintEngineDescriptorKey = o, h.paintEngineRevisionKey = "");
    const s = Gi();
    h.paintEngineRevisionKey !== s && (h.paintEngineRevisionKey = s, (c = h.paintEngine) == null || c.rebuildCommitted(v));
  }
  function Ya() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function fn() {
    return Ya();
  }
  function Pm(r, o, s, c, d = null) {
    const p = Sm(r), y = Gt(o, "widthScale", 1) * Gt(o, "pressureLike", 1);
    return p.model === "erp_uv_norm" ? Math.max(0.5, p.value * s * y) : p.model === "world_angle" ? d ? Math.max(0.5, p.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Et) * s * y) : Math.max(0.5, p.value / (2 * Math.PI) * s * y) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * y);
  }
  function Am(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), p = s.preview === !0, y = p ? 0.78 : 1;
    if (r.globalAlpha = d === "marker" ? 0.7 * y : 1, c === "mask") {
      r.fillStyle = p ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = p ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${w})`;
  }
  function Cm(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function Im(r, o, s, c, d = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const p = Math.max(c.w, c.h) * 0.25;
    r.save(), Am(r, s, d);
    const y = (g) => Cm(r, g, p);
    if (o.length === 1) {
      y(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const w = o[g], N = o[g + 1];
      if (!w || !N) continue;
      const k = Number(w.x || 0), M = Number(w.y || 0), T = Number(N.x || 0), $ = Number(N.y || 0), te = Math.max(0.5, Math.min(p, Number(w.radiusPx || 0.5))), B = Math.max(0.5, Math.min(p, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(M) || !Number.isFinite(T) || !Number.isFinite($) || !Number.isFinite(te) || !Number.isFinite(B)) continue;
      const K = T - k, le = $ - M, me = Math.hypot(K, le);
      if (!Number.isFinite(me) || me < 1e-6) {
        y(w);
        continue;
      }
      if (me > Math.max(c.w, c.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(te, B)), be = Math.max(0.35, Math.min(oe * 0.4, 2.25)), Ce = Math.max(1, Math.ceil(me / be));
      for (let Ee = 0; Ee <= Ce; Ee += 1) {
        const ke = Ee / Ce;
        y({
          x: Qn(k, T, ke),
          y: Qn(M, $, ke),
          radiusPx: Qn(te, B, ke)
        });
      }
    }
    y(o[o.length - 1]), r.restore();
  }
  function Tm(r, o, s, c) {
    Im(r, o, s, c, { preview: !1 });
  }
  function Em(r, o, s, c, d) {
    var g, w, N, k;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const p = "u", y = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[p]) || 0) * c.w, Number(((w = o[0]) == null ? void 0 : w[y]) || 0) * c.h);
    for (let M = 1; M < o.length; M += 1)
      r.lineTo(Number(((N = o[M]) == null ? void 0 : N[p]) || 0) * c.w, Number(((k = o[M]) == null ? void 0 : k[y]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function cu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function Dm(r, o) {
    const s = cu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Pm(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function uu(r, o, s = null) {
    var g, w, N, k;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((w = r.canvas) == null ? void 0 : w.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return Em(r.ctx, cu(d), d, c), !0;
    const y = Dm(d, c);
    return y.length ? (Tm(r.ctx, y, d, c), !0) : !1;
  }
  function Rm(r, o, s, c = 8) {
    const d = new Uint8Array(o * s), p = [], y = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let w = 0; w < s; w += 1)
      for (let N = 0; N < o; N += 1) {
        const k = w * o + N;
        if (d[k] || r[k] <= c) continue;
        let M = 0, T = 0;
        y[T] = N, g[T] = w, T += 1, d[k] = 1;
        const $ = [];
        let te = N, B = w, K = N, le = w;
        for (; M < T; ) {
          const me = y[M], oe = g[M];
          M += 1, $.push({ x: me, y: oe }), me < te && (te = me), oe < B && (B = oe), me > K && (K = me), oe > le && (le = oe);
          const be = [
            [(me - 1 + o) % o, oe],
            [(me + 1) % o, oe],
            [me, oe - 1],
            [me, oe + 1]
          ];
          for (const [Ce, Ee] of be) {
            if (Ee < 0 || Ee >= s) continue;
            const ke = Ee * o + Ce;
            d[ke] || r[ke] <= c || (d[ke] = 1, y[T] = Ce, g[T] = Ee, T += 1);
          }
        }
        p.push({ pixels: $, minX: te, minY: B, maxX: K, maxY: le });
      }
    return p;
  }
  function Om(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, N) => w - N);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, d = 0;
    for (let w = 0; w < s.length; w += 1) {
      const N = s[w], M = (w === s.length - 1 ? s[0] + o : s[w + 1]) - N - 1;
      M > c && (c = M, d = w);
    }
    const p = (s[(d + 1) % s.length] + o) % o;
    let y = 1 / 0, g = -1 / 0;
    for (const w of s) {
      const N = (w - p + o) % o;
      y = Math.min(y, N), g = Math.max(g, N);
    }
    return {
      startX: p,
      widthPx: Math.max(1, g - y + 1)
    };
  }
  function Fm(r, o, s = {}) {
    var N;
    const c = Number((r == null ? void 0 : r.width) || 0), d = Number((r == null ? void 0 : r.height) || 0), p = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!p || c < 1 || d < 1) return [];
    const y = p.getImageData(0, 0, c, d), g = new Uint8Array(c * d);
    for (let k = 0; k < g.length; k += 1) g[k] = y.data[k * 4 + 3];
    return Rm(g, c, d, 8).map((k, M) => {
      const T = Om(k, c);
      if (!T) return null;
      const $ = Number(T.widthPx || 0), te = k.maxY - k.minY + 1, B = Number(T.startX || 0), K = document.createElement("canvas");
      K.width = $, K.height = te;
      const le = K.getContext("2d");
      if (!le) return null;
      const me = le.createImageData($, te);
      return k.pixels.forEach(({ x: oe, y: be }) => {
        const Ce = (be * c + oe) * 4, Ee = (Number(oe || 0) - B + c) % c, ke = ((be - k.minY) * $ + Ee) * 4;
        me.data[ke + 0] = y.data[Ce + 0], me.data[ke + 1] = y.data[Ce + 1], me.data[ke + 2] = y.data[Ce + 2], me.data[ke + 3] = y.data[Ce + 3];
      }), le.putImageData(me, 0, 0), {
        id: bi("raster"),
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
  function Ki(r, o) {
    if (!r || !o) return null;
    const s = ja(r), c = An(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const d = An(o, s.right) / c, p = An(o, s.up) / c, y = d * s.cr + p * s.sr, g = -d * s.sr + p * s.cr;
    return {
      x: (y / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Lm(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (h.mode === "unwrap") {
      const s = dr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Vi(si(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function fu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (h.mode === "unwrap") {
      const c = dr();
      return r.map((d) => {
        const p = (Number(d.u || 0) % 1 + 1) % 1, y = o == null ? p : Number(o || 0) + yn(p, o);
        return {
          x: c.x + y * c.w,
          y: c.y + Number(d.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => Vi(si(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function zm(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], d = r[(s + 1) % r.length];
      if (!c || !d || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(d.x) || !Number.isFinite(d.y) || Math.hypot(Number(d.x) - Number(c.x), Number(d.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function $m(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const d of r) {
      const p = si(d), y = Ki(o, p);
      if (!y) return [];
      c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return zm(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function jm(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const d of r) {
      const p = si(d), y = Ki(o, p);
      y && c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function Vm() {
    var d;
    const r = Ke(), o = Tt(r);
    if (!r || !o) return !1;
    I.save(), I.fillStyle = "#050505", I.fillRect(0, 0, j.width, j.height), I.shadowColor = "rgba(0, 0, 0, 0.45)", I.shadowBlur = 24, I.shadowOffsetX = 0, I.shadowOffsetY = 10, I.fillStyle = "rgba(14, 14, 14, 1)", I.fillRect(o.x, o.y, o.w, o.h), I.restore(), I.save(), I.beginPath(), I.rect(o.x, o.y, o.w, o.h), I.clip();
    const s = h.interaction ? "draft" : String(((d = v.ui_settings) == null ? void 0 : d.preview_quality) || "balanced");
    return vm(I, o, r, { quality: s }) === !0 || (I.fillStyle = "rgba(255, 255, 255, 0.03)", I.fillRect(o.x, o.y, o.w, o.h)), I.restore(), I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.12)", I.lineWidth = 1, I.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), I.restore(), !0;
  }
  function Hm() {
    var w, N;
    if (((w = h.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const r = h.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let s;
    if (h.mode === "frame") {
      const k = Ke(), M = Tt(k);
      s = $m(o, k, M);
    } else
      s = Lm(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", d = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, p = Math.round(Number(d.r || 0) * 255), y = Math.round(Number(d.g || 0) * 255), g = Math.round(Number(d.b || 0) * 255);
    I.save(), I.beginPath(), I.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let k = 1; k < s.length; k++) I.lineTo(Number(s[k].x || 0), Number(s[k].y || 0));
    I.closePath(), c ? (I.lineWidth = 2, I.setLineDash([6, 6]), I.lineDashOffset = 0, I.strokeStyle = "rgba(0,0,0,0.96)", I.stroke(), I.lineDashOffset = -6, I.strokeStyle = "rgba(255,255,255,0.96)", I.stroke(), I.setLineDash([]), I.lineDashOffset = 0) : (I.lineWidth = 1.5, I.setLineDash([6, 4]), I.strokeStyle = `rgba(${p},${y},${g},1)`, I.stroke(), I.setLineDash([])), I.restore();
  }
  function Um() {
    h.mode === "frame" ? Vm() : h.mode === "unwrap" ? tm(!1) : nm(!1), t === "cutout" && ym(), hm(), Hm(), P.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ue(), J.hasPresentedFrame || (J.hasPresentedFrame = !0, Z.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = J.pendingStableLayoutFrames <= 0 && J.hasPresentedFrame && h.mode !== "frame");
    const r = Wp();
    P.stageStatus = r.status, P.stageStatusDetail = r.detail, r.status === jn ? (fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", r.detail)) : (fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind"));
  }
  function Bm(r = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Gm() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = dp();
  }
  function ge(r = {}) {
    var g, w, N, k, M, T, $, te, B, K;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), d = String(((g = h.interaction) == null ? void 0 : g.kind) || "");
    (!o || d === "view" || d === "pan_frame" || Bm() || !!((w = h.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (J.backgroundDirty = !0), o && Dc() && (h.livePaintInteractionRevision += 1, J.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (Rs(), La()), Gm(), s && ((k = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || k.call(N), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), s && !o && (($ = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || $.call(T, !0, !0), (K = (B = (te = pn) == null ? void 0 : te.canvas) == null ? void 0 : B.setDirty) == null || K.call(B, !0, !0)), J.dirty = !0;
  }
  function du() {
    const r = j.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return j.width !== o || j.height !== s || Z.width !== o || Z.height !== s ? (j.width = o, j.height = s, Z.width = o, Z.height = s, J.backgroundDirty = !0, J.dirty = !0, t === "cutout" && (J.pendingStableLayoutFrames = Math.max(Number(J.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Km(r = performance.now()) {
    var o;
    if (J.lastTickTs = r, h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const s = Math.max(1, Number(h.outputPreviewAnimDurationMs)), c = W((r - Number(h.outputPreviewAnimStartTs || 0)) / s, 0, 1), p = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? Dx(c) : Lx(c);
      h.outputPreviewAnim = Qn(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, p), J.dirty = !0, c >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if ((o = h.viewTween) != null && o.active) {
      const s = h.viewTween, c = W((r - s.startTs) / s.durationMs, 0, 1), d = Ex(c);
      h.viewYaw = $t(s.startYaw + s.deltaYaw * d), h.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * d, h.viewFov = s.startFov + (s.targetFov - s.startFov) * d, J.backgroundDirty = !0, J.dirty = !0, c >= 1 && (h.viewTween = null);
    }
    if (h.viewInertia.vx = Number(Lt.state.inertia.vx || 0), h.viewInertia.vy = Number(Lt.state.inertia.vy || 0), h.viewInertia.active = !!Lt.state.inertia.active, Lt.stepInertia(r) && (h.viewInertia.vx = Number(Lt.state.inertia.vx || 0), h.viewInertia.vy = Number(Lt.state.inertia.vy || 0), h.viewInertia.active = !!Lt.state.inertia.active, J.backgroundDirty = !0, J.dirty = !0), (J.dirty || r - J.lastSizeCheckTs >= 220) && (du(), J.lastSizeCheckTs = r), J.pendingStableLayoutFrames > 0 && (J.pendingStableLayoutFrames -= 1, J.dirty = !0), J.dirty) {
      if (J.pendingStableLayoutFrames > 0)
        return;
      J.dirty = !1, Um();
    }
  }
  function hu(r = performance.now()) {
    if (J.running)
      try {
        Km(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        J.tickErrorSignature !== s && (J.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), P.stageStatus = Hn, P.stageStatusDetail = "frame", fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind");
      } finally {
        J.running && (J.rafId = requestAnimationFrame(hu));
      }
  }
  function Wm() {
    J.running = !1, J.rafId && cancelAnimationFrame(J.rafId), J.rafId = 0;
  }
  function lt() {
    i || (h.historyController.commitActionGroup(JSON.stringify(sd(v))), Zs());
  }
  function Ks(r) {
    if (i) return;
    const o = r < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Zs(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((c) => delete v[c]), Object.assign(v, s), h.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], Mn(), on(), He(), dn(), ge({ cause: "cutout_frame" });
  }
  function pu() {
    var s, c;
    const r = Array.isArray((s = h.historyController) == null ? void 0 : s.entries) ? h.historyController.entries : [], o = Number((c = h.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function on() {
    ip();
    const r = p1({
      editor: h,
      swatches: Lo,
      paintColorPopOpen: je ? !je.hidden : !1,
      colorToCss: On,
      colorsApproximatelyEqual: zo,
      rgb01ToHsv: Cl,
      hsv01ToRgb: Al,
      getBrushPresetIdForTool: mr,
      isActiveLassoTool: wp
    });
    if (Object.assign(P.paintDock, r), Ap(), !r.visible) {
      je && (je.hidden = !0);
      return;
    }
    Ht && (clearTimeout(Ht), Ht = 0), Be && (!r.colorEnabled && je && !je.hidden && (Ht = window.setTimeout(() => {
      je.hidden = !0, P.paintDock.colorPopOpen = !1, Ht = 0;
    }, 170)), je && (je.style.setProperty("--picker-hue-color", r.pickerHueColor), je.style.setProperty("--picker-sat", r.pickerSat), je.style.setProperty("--picker-val", r.pickerVal), je.style.setProperty("--picker-hue", r.pickerHue)), Dt && (Dt.style.left = r.pickerSvLeft, Dt.style.top = r.pickerSvTop), Vt && (Vt.style.left = r.pickerHueLeft));
  }
  function Ws() {
    const r = at();
    r && (h.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: ta(r)
    }, He());
  }
  function He() {
    var be, Ce, Ee, ke;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = h1(v.ui_settings);
    if (l) {
      P.sidePanel = m1({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: zt
      });
      return;
    }
    const o = at(), s = Nn(), c = Fa();
    s.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && c !== "stroke" && (h.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (c === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (c === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: ta(o)
    });
    const d = h.panelLastValues || (t === "stickers" || c === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = c === "stroke" ? null : o, y = p || d, g = !!p;
    h.panelWasEnabled = g, Rs();
    let w = null;
    if (t === "stickers" || t === "cutout") {
      const X = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Wn().forEach((Se, Ie) => {
        var Ye, qe;
        if (!Se) return;
        const Le = Rt(Se) ? String(Se.id || Rr) : String(((qe = (Ye = v.assets) == null ? void 0 : Ye[Se.asset_id]) == null ? void 0 : qe.name) || Se.asset_id || Se.id), ze = `${Ie + 1}. ${Le}${Rt(Se) && ti(Se) ? " (hidden)" : ""}`, We = zc({ item: Se, label: ze, kind: "image" });
        X.push({ id: Se.id, label: We.label, icon: We.icon, item: Se, kind: "image" });
      }) : Lc().forEach((Se) => {
        if (!(Se != null && Se.item)) return;
        const Ie = zc(Se);
        X.push({ id: Se.item.id, label: Ie.label, icon: Ie.icon, item: Se.item, kind: Se.kind });
      });
      const ne = (p == null ? void 0 : p.id) || "", ve = X.find((Se) => Se.id === ne) || X[0];
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
        displayValue: Vx(Le),
        fillPct: W((Le - ve) / Math.max(1e-6, Se - ve) * 100, 0, 100),
        enabled: g && !i
      });
    }, M = [];
    s.length > 1 ? (M.push(`Selected objects: ${s.length}`), M.push("Multi-selection supports z-order and delete.")) : (k("yaw_deg", "Yaw", -180, 180, 0.1), k("pitch_deg", "Pitch", -90, 90, 0.1), k("hFOV_deg", "H FOV", 1, 179, 0.1), k("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || c === "image" ? k("rot_deg", "Rotation", -180, 180, 0.1) : k("roll_deg", "Roll", -180, 180, 0.1));
    const T = Array.isArray((Ce = (be = v == null ? void 0 : v.painting) == null ? void 0 : be.paint) == null ? void 0 : Ce.strokes) ? v.painting.paint.strokes.length : 0, $ = Array.isArray((ke = (Ee = v == null ? void 0 : v.painting) == null ? void 0 : Ee.mask) == null ? void 0 : ke.strokes) ? v.painting.mask.strokes.length : 0, te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((X) => String((X == null ? void 0 : X.name) || "")) : [], B = np(
      e,
      te.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), K = !!String((B == null ? void 0 : B.src) || "").trim() || Is("pano_input_images").length > 0, le = Array.isArray(Wn()) && Wn().length > 0 || T > 0, me = $ > 0, oe = [
      { key: "mask", label: "Mask", icon: Te.circle_dashed_tool, visible: !!h.showMask, enabled: me },
      { key: "objects", label: "Paint / Images", icon: Te.image, visible: !!h.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: Te.globe, visible: !!h.showPanorama, enabled: K }
    ].map((X) => ({
      ...X,
      ariaLabel: `Toggle ${X.label.toLowerCase()}`,
      tip: X.visible ? "Hide" : "Show"
    }));
    P.sidePanel = g1({
      coverage: v.coverage,
      readOnly: i,
      selectionPicker: w,
      enabled: g,
      selectedKind: c,
      selectedItems: s,
      params: N,
      notes: M,
      visibilityRows: oe,
      uiSettings: r,
      normalizeCoverageValue: zt
    });
  }
  function qa(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function mu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !qa(r)) return;
    const o = ko("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((y, g) => {
        const w = new Image();
        w.onload = () => y(w), w.onerror = () => g(new Error("image load failed")), w.src = s;
      });
      G.set(o, c);
      const d = ko("st");
      v.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Pr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: $c()
      }), kr(v.stickers[v.stickers.length - 1]), Ys(), lt(), He(), Ue(), ge();
      const p = (async () => {
        const y = await Ls(r, String(r.name || o));
        (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (v.assets[o] = y, oi(), wt(), He(), Ue(), ge());
      })();
      yo.set(o, p);
      try {
        await p;
      } finally {
        yo.delete(o);
      }
    } catch {
      delete v.assets[o], G.delete(o);
      const c = Array.isArray(v.stickers) ? v.stickers : [], d = c.filter((p) => String((p == null ? void 0 : p.asset_id) || "") === o);
      d.length && (v.stickers = c.filter((p) => String((p == null ? void 0 : p.asset_id) || "") !== o), d.some((p) => {
        var y;
        return String((p == null ? void 0 : p.id) || "") === String(((y = h.selection) == null ? void 0 : y.id) || "");
      }) && kr(null), He(), Ue(), ge());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function gu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Ym() {
    i || t !== "stickers" && t !== "cutout" || gu((r) => {
      mu(r);
    });
  }
  async function qm(r) {
    var N;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = at();
    if (!o || !ut(o) || Rt(o) || !qa(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), d = c ? Kt(((N = v.assets) == null ? void 0 : N[c]) || null) : null, p = Number(o.vFOV_deg || 0), y = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, g = ko("asset"), w = URL.createObjectURL(r);
    try {
      const k = await new Promise((T, $) => {
        const te = new Image();
        te.onload = () => T(te), te.onerror = () => $(new Error("image load failed")), te.src = w;
      });
      G.set(g, k), o.asset_id = g, o.vFOV_deg = Pr(
        Number(o.hFOV_deg || 30),
        Number(k.naturalWidth || k.width || 1),
        Number(k.naturalHeight || k.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ft(), lt(), He(), Ue(), ge();
      const M = (async () => {
        const T = await Ls(r, String(r.name || g));
        (Array.isArray(v.stickers) ? v.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === g) && (v.assets[g] = T, oi(), wt(), He(), Ue(), ge());
      })();
      yo.set(g, M);
      try {
        await M;
      } finally {
        yo.delete(g);
      }
    } catch {
      delete v.assets[g], G.delete(g);
      const k = (Array.isArray(v.stickers) ? v.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === s) || null;
      k && String(k.asset_id || "") === g && (c && d && (v.assets[c] = d), k.asset_id = c, k.vFOV_deg = p, k.crop = y ? { ...y } : null), Ft(), He(), Ue(), ge();
    } finally {
      URL.revokeObjectURL(w);
    }
  }
  function Xm() {
    if (i) return;
    const r = at();
    !r || !ut(r) || Rt(r) || gu((o) => {
      qm(o);
    });
  }
  async function Jm() {
    if (i || t !== "stickers") return;
    const r = v.assets && typeof v.assets == "object" ? v.assets : {}, o = Object.entries(r).filter(([, c]) => {
      const d = String((c == null ? void 0 : c.type) || "").toLowerCase(), p = String((c == null ? void 0 : c.value) || "");
      return d === "dataurl" && p.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [c, d] of o)
      try {
        const p = String((d == null ? void 0 : d.value) || "");
        if (!p) continue;
        const y = await fetch(p).then((M) => M.blob()), g = String(y.type || "image/png").split("/")[1] || "png", w = String((d == null ? void 0 : d.name) || `${c}.${g}`), N = new File([y], w, { type: y.type || "image/png" }), k = await Ls(N, w);
        v.assets[c] = {
          ...k,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (wt(), ge());
  }
  function Zm() {
    if (i || t !== "cutout") return;
    const r = Ke();
    if (r) {
      kr(r), h.mode = "pano", ws(
        $t(Number(r.yaw_deg || 0)),
        W(Number(r.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), He(), Ue(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Ar(), s = hr(o), c = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (j == null ? void 0 : j.width) || 1
    )), d = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (j == null ? void 0 : j.height) || 1
    )), p = Math.max(0.1, c / d), y = W(Number(h.viewFov || 90), 1, 179), g = W(Math.min(42, y * 0.42), 8, 96), w = W(_r * (2 * Math.atan(Math.tan(g * Et * 0.5) / Math.max(0.1, p))), 6, 72), N = Yh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: $t(Number(h.viewYaw || 0)),
      pitch_deg: W(Number(h.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: w,
      locked: !1
    });
    v.shots = [N], kr(N), Ys(), h.mode = "pano", lt(), wt(), He(), Ue(), ge({ cause: "cutout_frame" });
  }
  function Qm() {
    i || t === "cutout" && (v.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, v.active.selected_shot_id = null, lt(), wt(), He(), ge());
  }
  function eg() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      Rt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function bu(r, o, s = "Clear") {
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
  async function tg() {
    var s, c;
    if (i || !await bu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = ma(null), Mn();
    const o = eg();
    t === "stickers" ? (v.stickers = o, v.assets = {}, h.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, oi()) : (v.stickers = o, v.assets = {}, v.shots = [], h.selectedId = null, h.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, oi()), lt(), wt(), He(), Ue(), ge();
  }
  async function ng(r) {
    var p, y, g, w;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = fi(o);
    if (!(!c.length && !(((p = h.interaction) == null ? void 0 : p.kind) === "draw" && ((y = h.interaction) == null ? void 0 : y.layerKind) === o) || !await bu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = h.interaction) == null ? void 0 : g.kind) === "draw" && ((w = h.interaction) == null ? void 0 : w.layerKind) === o) {
        const N = fn();
        N && h.paintEngine.cancelActiveStroke(N), h.interaction = null;
      }
      c.length = 0, v.painting.raster_objects = an().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Ut().length = 0), Mn(), lt(), wt(), He(), Ue(), on(), ge();
    }
  }
  function rg() {
    if (i) return;
    const r = at();
    if (!r || !ut(r) || Rt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = ko("st"), o.yaw_deg = $t((o.yaw_deg || 0) + 8), o.z_index = $c(), v.stickers.push(o), v.active.selected_sticker_id = o.id, h.selectedId = o.id, h.selectedIds = [o.id], Ft(), lt(), wt(), Ue(), He(), ge();
  }
  function yu() {
    var s, c, d, p, y, g;
    if (i) return;
    const r = Nn(), o = at();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const w = new Set(r.filter((M) => At(M)).map((M) => String(M.actionGroupId || M.id || ""))), N = new Set(r.filter((M) => Bt(M)).map((M) => It(M.rasterObjectId || M.id || ""))), k = new Set(r.filter(ut).map((M) => String(M.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((c = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? v.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = Ut().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Mn()), N.size > 0 && (v.painting.raster_objects = an().filter((M) => !N.has(String((M == null ? void 0 : M.id) || ""))), ci()), k.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => k.has(String((M == null ? void 0 : M.id) || "")) ? Rt(M) ? (ti(M) || (M.visible = !1), !0) : !1 : !0), oi(), Ft()), h.selectedId = null, h.selectedIds = [], lt(), wt(), He(), Ue(), ge();
        return;
      }
      if (At(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((p = (d = v.painting) == null ? void 0 : d.paint) == null ? void 0 : p.strokes) ? v.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== w), v.painting.groups = Ut().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== w), Mn(), h.selectedId = null, h.selectedIds = [], lt(), wt(), He(), Ue(), ge();
        return;
      }
      if (Bt(o)) {
        const w = It(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = an().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== w), ci(), h.selectedId = null, h.selectedIds = [], lt(), wt(), He(), Ue(), ge();
        return;
      }
      if (t === "stickers" || ut(o)) {
        if (Rt(o)) {
          if (ti(o)) return;
          o.visible = !1, Ft(), lt(), wt(), He(), Ue(), ge();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== o.id), oi(), Ft(), h.selectedId = ((y = v.stickers[0]) == null ? void 0 : y.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((g = v.stickers[0]) == null ? void 0 : g.id) || null, lt(), wt(), He(), Ue(), ge();
        return;
      }
      Qm();
    }
  }
  function ig(r, o) {
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
      return Math.abs($ - te) > 1e-6 ? $ >= te : oa(r) >= 1;
    })();
    let [d, p] = s[String(o)] || s["1:1"];
    d >= p !== c && ([d, p] = [p, d]);
    const y = d / p, g = W(Number(r.hFOV_deg || 64), 1, 179), w = W(Number(r.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, g * w)), k = W(N * Math.sqrt(y), 1, 179), M = W(N / Math.sqrt(y), 1, 179);
    r.hFOV_deg = k, r.vFOV_deg = M, r.aspect_id = String(o);
  }
  function ag(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = zr(r);
  }
  function vu() {
    Zr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function og() {
    if (i) return;
    const r = Nn();
    if (!at() || r.length === 0) return;
    vu();
    const s = Zr(), c = new Set(r.map((g) => ut(g) ? `sticker:${String(g.id || "")}` : Bt(g) ? `rasterObject:${It(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), d = [], p = [];
    if (s.forEach((g) => {
      var N, k;
      const w = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((k = g.item) == null ? void 0 : k.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(w) ? d.push(g) : p.push(g);
    }), !d.length || d[d.length - 1] === s[s.length - 1]) return;
    [...p, ...d].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), Ft(), lt(), wt(), Ue(), ge();
  }
  function sg() {
    if (i) return;
    const r = Nn();
    if (!at() || r.length === 0) return;
    vu();
    const s = Zr(), c = new Set(r.map((g) => ut(g) ? `sticker:${String(g.id || "")}` : Bt(g) ? `rasterObject:${It(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), d = [], p = [];
    if (s.forEach((g) => {
      var N, k;
      const w = g.type === "sticker" ? `sticker:${String(((N = g.item) == null ? void 0 : N.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((k = g.item) == null ? void 0 : k.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(w) ? d.push(g) : p.push(g);
    }), !d.length || d[0] === s[0]) return;
    [...d, ...p].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), Ft(), lt(), wt(), Ue(), ge();
  }
  function lg() {
    i || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", f && (v.output_preset = A(Number(v.output_preset || 2048))), m && (v.coverage = zt(m.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), dn(), e.setDirtyCanvas(!0, !0));
  }
  function dn() {
    var o;
    if (i) return;
    v.coverage = zt(v.coverage);
    const r = JSON.stringify(v);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function Xa() {
    v.ui_settings = Kx(v.ui_settings), i || dn();
  }
  function wt() {
    var r;
    i || (dn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function cg() {
    i || Kp() && Zc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function ug(r = {}) {
    var c, d, p, y, g, w, N, k, M, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((d = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || d.call(c), (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((N = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || N.call(w, !0, !0), (T = (M = (k = pn) == null ? void 0 : k.canvas) == null ? void 0 : M.setDirty) == null || T.call(M, !0, !0));
  }
  function Ys() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", on(), He());
  }
  function ui(r) {
    const o = j.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * j.width,
      y: (r.clientY - o.top) / o.height * j.height
    };
  }
  function Ja(r) {
    const o = j.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function _u() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Ke() {
    if (t !== "cutout") return null;
    const r = Array.isArray(v.shots) ? v.shots : [];
    if (!r.length) return null;
    const o = String(v.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Tt(r = Ke()) {
    var y, g, w;
    if (!r || !j) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(j.width || 0) - 48),
      h: Math.max(1, Number(j.height || 0) - 48)
    }, s = W(oa(r), 0.1, 10);
    let c = o.w, d = Math.max(1, Math.round(c / s));
    d > o.h && (d = o.h, c = Math.max(1, Math.round(d * s)));
    const p = Math.max(0.1, Number(((y = h.frameView) == null ? void 0 : y.zoom) || 1));
    return c *= p, d *= p, {
      x: Math.round(o.x + (o.w - c) * 0.5 + Number(((g = h.frameView) == null ? void 0 : g.panX) || 0)),
      y: Math.round(o.y + (o.h - d) * 0.5 + Number(((w = h.frameView) == null ? void 0 : w.panY) || 0)),
      w: Math.max(1, Math.round(c)),
      h: Math.max(1, Math.round(d))
    };
  }
  function qs() {
    return t === "cutout" && !!Ke();
  }
  function kn(r, o = performance.now()) {
    if (h.mode === "unwrap") {
      const p = dr(), y = (r.x - p.x) / Math.max(1, p.w), g = (r.y - p.y) / Math.max(1, p.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: W(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Fs(r.x, r.y), { lon: c, lat: d } = $s(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Pn(r, o, s = performance.now()) {
    const c = Tt(o);
    if (!c) return null;
    const d = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    };
    if (d.x < 0 || d.x > 1 || d.y < 0 || d.y > 1) return null;
    const p = Us(o, d);
    if (!p) return null;
    const { lon: y, lat: g } = $s(p);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function fg(r, o) {
    var N;
    const s = Ke(), c = Tt(s);
    if (!s || !c) return !1;
    const d = Math.max(0.1, Number(((N = h.frameView) == null ? void 0 : N.zoom) || 1)), p = W(d * Number(o), 0.25, 12);
    if (Math.abs(p - d) < 1e-6) return !1;
    const y = (Number(r.x) - c.x) / Math.max(1e-6, c.w), g = (Number(r.y) - c.y) / Math.max(1e-6, c.h);
    h.frameView.zoom = p;
    const w = Tt(s);
    return w ? (h.frameView.panX += Number(r.x) - (w.x + w.w * y), h.frameView.panY += Number(r.y) - (w.y + w.h * g), !0) : !1;
  }
  function dg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function mr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Jn : sn[o] ? o : h.activeBrushPresetId || Jn;
  }
  function xu() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (_u() || qs());
  }
  function wu() {
    var r;
    return xu() && ((r = h.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Za(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), d = o !== !1, p = h.pointerPos || { x: 0, y: 0, inside: !1 }, y = p.inside !== d || Math.abs(p.x - s) > 0.01 || Math.abs(p.y - c) > 0.01;
    return h.pointerPos = { x: s, y: c, inside: d }, y;
  }
  function hg() {
    var k, M;
    if (!wu()) return null;
    const r = h.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? h.maskTool : h.paintTool, s = mr(o), c = sn[s] || sn[Jn], d = Number(h.brushSizes[s] ?? 10), p = Math.max(1, d) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(3, p * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : hn(h.paintColor), w = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : W(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : W(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: y,
      fillStyle: On(g, w),
      strokeStyle: On(g, N),
      x: Number(((k = h.pointerPos) == null ? void 0 : k.x) || 0),
      y: Number(((M = h.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function pg() {
    var T, $, te;
    const r = hg();
    if (!U) return;
    if (!r) {
      U.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", d = 0, p = r.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let k = Number(r.hotspotX ?? o * 0.5), M = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = as, s = as, c = "0", y = "0", g = "none", k = Cx, M = Ix, p = $x(r.fillStyle, N, w);
    else if (r.layerKind === "mask")
      p = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, d = Number(((te = ($ = r.preset) == null ? void 0 : $.angle) == null ? void 0 : te.value) || 0) * _r;
    } else r.toolKind === "brush" ? p = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (p = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(o)}px`, U.style.height = `${Math.round(s)}px`, U.style.borderRadius = c, U.style.border = y, U.style.boxShadow = g, U.style.background = p, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(r.x - k)}px, ${Math.round(r.y - M)}px) rotate(${d}deg)`;
  }
  function mg() {
    var me;
    if (!pe || !xe) return;
    const r = h.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? h.maskTool : h.paintTool;
    if (o === "lasso_fill") return;
    const s = mr(o), c = sn[s] || sn[Jn], d = Number(h.brushSizes[s] ?? 10), p = Math.max(1, d) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(6, p * 0.5), g = o === "eraser", w = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : hn(h.paintColor), N = r === "mask" ? On(w, 0.22) : g ? "rgba(255,255,255,0.14)" : On(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), k = r === "mask" ? On(w, 0.96) : g ? "rgba(255,255,255,0.72)" : On(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let M = y * 2, T = y * 2, $ = "999px", te = 0, B = N;
    const K = "rgba(222, 222, 222, 0.72)", le = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const oe = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      M = Math.max(16, y * 2 * oe), T = Math.max(10, y * 2), $ = `${Math.min(8, T * 0.42)}px`, te = Number(((me = c == null ? void 0 : c.angle) == null ? void 0 : me.value) || 0) * _r;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${k} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (M = Math.max(18, y * 1.8), T = M, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${k} 43%, ${k} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(M)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = $, xe.style.background = B, xe.style.border = `1px solid ${K}`, xe.style.boxShadow = `0 0 0 1px ${le}`, xe.style.transform = `rotate(${te}deg)`, Pt && (clearTimeout(Pt), Pt = 0), pe.classList.remove("fade-out"), pe.classList.add("show");
  }
  function Qa() {
    !pe || !pe.classList.contains("show") || (pe.classList.add("fade-out"), Pt && clearTimeout(Pt), Pt = window.setTimeout(() => {
      pe.classList.remove("show", "fade-out"), Pt = 0;
    }, 180));
  }
  function Su(r, o, s, c) {
    const d = mr(o), p = sn[d] || sn[Jn], y = h.brushSizes[d] ?? 10, g = Math.max(1, y) * Math.max(0.1, p.sizeScale ?? 1), w = dg(c, g), N = s.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), k = {
      id: bi(r),
      actionGroupId: bi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
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
    return Qf(k, p), Number(p.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), Number(k.size || 0), String(k.radiusModel || ""), Number(k.radiusValue || 0), { ...k.targetSpace }, k;
  }
  function Nu(r, o, s, c) {
    const d = s.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), p = mr(o), y = sn[p] || sn[Jn], g = {
      id: bi(r),
      actionGroupId: bi("ag"),
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
    return Qf(g, y), Number(y.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function fi(r) {
    const o = v.painting || (v.painting = ma(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function gg(r, o, s = performance.now()) {
    let c;
    if (h.mode === "frame") {
      const N = Ke();
      if (!N || (c = Pn(o, N, s), !c)) return !1;
    } else
      c = kn(o, s);
    if (!c) return !1;
    const d = r.stroke.geometry.rawPoints || r.stroke.geometry.points, p = r.stroke.geometry.points, y = d[d.length - 1];
    if (y) {
      const N = Math.abs(Number(c.u ?? c.x ?? 0) - Number(y.u ?? y.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && k < 15e-4) return !1;
    }
    const g = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...g }), p.push({ ...g });
    const w = fn();
    if (w) {
      const N = h.paintEngine.ensureTarget(w);
      h.paintEngine.appendStrokePoint(N, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function bg(r, o, s = performance.now()) {
    var y, g;
    let c;
    if (h.mode === "frame") {
      const w = Ke();
      if (!w) return !1;
      c = Pn(o, w, s);
    } else
      c = kn(o, s);
    const d = (g = (y = r == null ? void 0 : r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points;
    if (!c || !Array.isArray(d)) return !1;
    const p = d[d.length - 1];
    if (p) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(p.u ?? p.x ?? 0)), N = Math.abs(Number(c.v ?? c.y ?? 0) - Number(p.v ?? p.y ?? 0));
      if (w < 15e-4 && N < 15e-4) return !1;
    }
    return d.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function yg(r) {
    var oe, be, Ce, Ee, ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Wa();
    const s = fn(), c = Bi(s.width, s.height);
    if (!uu(c, o, { w: s.width, h: s.height })) return !1;
    const d = ((be = (oe = c.ctx) == null ? void 0 : oe.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!d) return !1;
    const p = new Map(Ut().map((X) => [String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim(), X ? { ...X } : null])), y = [], g = [], w = [...an().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") !== "paint")];
    let N = !1, k = Zr().reduce((X, ne) => Math.max(X, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    function M(X, ne, ve, Se = 8) {
      let Ie = ne, Le = ve, ze = -1, We = -1;
      for (let Ye = 0; Ye < ve; Ye += 1)
        for (let qe = 0; qe < ne; qe += 1)
          X[(Ye * ne + qe) * 4 + 3] <= Se || (qe < Ie && (Ie = qe), Ye < Le && (Le = Ye), qe > ze && (ze = qe), Ye > We && (We = Ye));
      return ze < Ie || We < Le ? null : { minX: Ie, minY: Le, maxX: ze, maxY: We };
    }
    const T = M(d, s.width, s.height, 8);
    if (!T) return !1;
    function $(X, ne) {
      return !X || !ne ? !1 : !(X.maxX < ne.minX || ne.maxX < X.minX || X.maxY < ne.minY || ne.maxY < X.minY);
    }
    function te(X, ne) {
      const ve = ur((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "", "paint", ne);
      if (!ve) return null;
      const Se = ve.centerUv.u - ve.halfW, Ie = ve.centerUv.u + ve.halfW, Le = ve.centerUv.v - ve.halfH, ze = ve.centerUv.v + ve.halfH, We = s.width, Ye = s.height;
      return {
        minX: Math.floor((Se % 1 + 1) % 1 * We),
        maxX: Math.ceil((Ie % 1 + 1) % 1 * We),
        minY: Math.floor(W(Le, 0, 1) * Ye),
        maxY: Math.ceil(W(ze, 0, 1) * Ye),
        wraps: Ie - Se >= 1 || Se < 0 || Ie > 1
      };
    }
    function B(X) {
      const ne = (X == null ? void 0 : X.bbox) || null;
      if (!ne) return null;
      const ve = (X == null ? void 0 : X.transform) || {}, Se = s.width, Ie = s.height, Le = Number(ne.u0 || 0) + Number(ve.du || 0), ze = Number(ne.u1 || 0) + Number(ve.du || 0), We = Number(ne.v0 || 0) + Number(ve.dv || 0), Ye = Number(ne.v1 || 0) + Number(ve.dv || 0);
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Se),
        maxX: Math.ceil((ze % 1 + 1) % 1 * Se),
        minY: Math.floor(W(We, 0, 1) * Ie),
        maxY: Math.ceil(W(Ye, 0, 1) * Ie),
        wraps: ze - Le >= 1 || Le < 0 || ze > 1
      };
    }
    function K(X) {
      return X ? X.wraps ? $(T, { minX: 0, maxX: X.maxX, minY: X.minY, maxY: X.maxY }) || $(T, { minX: X.minX, maxX: s.width - 1, minY: X.minY, maxY: X.maxY }) : $(T, X) : !0;
    }
    function le(X) {
      if (!X) return { touched: !1, canvas: null };
      const ne = Bi(s.width, s.height, { readback: !0 });
      ne.ctx.drawImage(X, 0, 0);
      const ve = ne.ctx.getImageData(0, 0, s.width, s.height);
      ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(c.canvas, 0, 0), ne.ctx.restore();
      const Se = ne.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ie = 0; Ie < s.width * s.height; Ie += 1) {
        if (d[Ie * 4 + 3] <= 8) continue;
        const ze = ve.data[Ie * 4 + 3], We = Se.data[Ie * 4 + 3];
        if (ze > We)
          return { touched: !0, canvas: ne.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(X, ne, ve) {
      const Se = Number(ve == null ? void 0 : ve.z_index), Ie = Fm(X, ne, ve).map((Le, ze) => ({
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
        g.push(X), y.push(...ve);
        continue;
      }
      const Se = ((Ee = (Ce = h.paintEngine) == null ? void 0 : Ce.getGroupTarget) == null ? void 0 : Ee.call(Ce, ne)) || null, Ie = ((ke = Se == null ? void 0 : Se.committedPaint) == null ? void 0 : ke.canvas) || null;
      if (!Ie) {
        g.push(X), y.push(...ve);
        continue;
      }
      const Le = le(Ie);
      if (!Le.touched || !Le.canvas) {
        g.push(X), y.push(...ve);
        continue;
      }
      N = !0;
      const ze = me(Le.canvas, "paint", p.get(ne) || X || {});
      w.push(...ze);
    }
    for (const X of an().filter((ne) => String((ne == null ? void 0 : ne.layerKind) || "paint") === "paint")) {
      if (!K(B(X))) {
        w.push(X);
        continue;
      }
      const ne = Xc(X, null);
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
      const Se = me(ve.canvas, "paint", X);
      w.push(...Se);
    }
    return N ? (v.painting.paint.strokes = y, v.painting.groups = g.sort((X, ne) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0)), v.painting.raster_objects = w.sort((X, ne) => Number((X == null ? void 0 : X.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0)), ai({ preservePanelValues: !1 }), !0) : !1;
  }
  function vg(r) {
    var y, g, w, N, k;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.rawPoints) || ((N = (w = r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Xs(r);
      const M = fn();
      M && (String(((k = r.stroke) == null ? void 0 : k.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(M) : h.paintEngine.commitActiveStroke(r.stroke, M)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, d = Su(r.layerKind, s.toolKind, [], c);
    d.actionGroupId = s.actionGroupId, r.stroke = d;
    const p = fn();
    p && h.paintEngine.beginStroke(d, p);
  }
  function _g(r) {
    var y, g;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      Xs(r);
      const w = fn();
      w && h.paintEngine.commitActiveStroke(r.stroke, w), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, d = Nu(r.layerKind, s.toolKind, [], c);
    d.actionGroupId = s.actionGroupId, r.stroke = d;
    const p = fn();
    p && h.paintEngine.beginStroke(d, p);
  }
  function Xs(r) {
    var p, y, g, w;
    const o = ((p = r == null ? void 0 : r.stroke) == null ? void 0 : p.geometry) || null;
    if (!o) return !1;
    const s = String(((y = r == null ? void 0 : r.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Bs(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), yg(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && Ec((g = r.stroke) == null ? void 0 : g.actionGroupId), fi(r.layerKind).push(r.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Bs(d, r.stroke.targetSpace, !0), c && Ec((w = r.stroke) == null ? void 0 : w.actionGroupId), fi(r.layerKind).push(r.stroke), !0);
  }
  function Mu(r) {
    var s;
    if (t === "cutout" && h.mode === "frame") {
      const c = Ke(), d = Tt(c);
      if (!c || !d || !(Number((r == null ? void 0 : r.x) || 0) >= Number(d.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(d.x || 0) + Number(d.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(d.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(d.y || 0) + Number(d.h || 0))) return null;
      const y = Pn(r, c, performance.now()), g = y ? si(y) : null;
      if (g)
        for (const N of Hs()) {
          if (!ut(N)) continue;
          const k = Ki(N, g);
          if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
            const M = Ot(N);
            if (M != null && M.visible) return { item: N, geom: M };
          }
        }
      const w = Ms(!1).slice().sort((N, k) => Number((k == null ? void 0 : k.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of w) {
        if (N.type === "strokeGroup") {
          const T = ei(zi("paint", N.actionGroupId || N.id || ""));
          if (!T) continue;
          const $ = Ot(T);
          if (!($ != null && $.visible)) continue;
          const te = Array.isArray($.strokePaths) ? $.strokePaths : [];
          for (const B of te) {
            const K = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!K.length) continue;
            if (B.closed && K.length >= 3 && Zn(r, K)) return { item: T, geom: $ };
            const le = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < K.length - 1; me += 1)
              if (Pl(r, K[me], K[me + 1]) <= le * le) return { item: T, geom: $ };
            if (K.length === 1 && br(r, K[0]) <= le * le) return { item: T, geom: $ };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const T = Qr($i(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!T) continue;
          const $ = Ot(T);
          if (qc(T, $, r, y)) return { item: T, geom: $ };
          continue;
        }
        const k = N.item;
        if (!k || !ut(k) || !g) continue;
        const M = Ki(k, g);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const T = Ot(k);
          if (T != null && T.visible) return { item: k, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...Ms(!1).slice().sort((c, d) => Number((d == null ? void 0 : d.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var d;
        return c.type === "strokeGroup" ? ei(zi("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Qr($i(((d = c.item) == null ? void 0 : d.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? Hs().filter((c) => rn(c)) : []
    ];
    for (const c of o) {
      if (At(c)) {
        const p = Ot(c);
        if (!(p != null && p.visible)) continue;
        const y = Array.isArray(p.strokePaths) ? p.strokePaths : [];
        for (const g of y) {
          const w = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!w.length) continue;
          if (g.closed && w.length >= 3 && Zn(r, w)) return { item: c, geom: p };
          const N = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < w.length - 1; k += 1)
            if (Pl(r, w[k], w[k + 1]) <= N * N) return { item: c, geom: p };
          if (w.length === 1 && br(r, w[0]) <= N * N) return { item: c, geom: p };
        }
        continue;
      }
      if (Bt(c)) {
        const p = Ot(c);
        if (!(p != null && p.visible)) continue;
        if (qc(c, p, r)) return { item: c, geom: p };
        continue;
      }
      const d = Ot(c);
      if (d.visible && Zn(r, d.corners))
        return { item: c, geom: d };
    }
    return null;
  }
  function Js(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((p) => br(p, o) <= 121);
      if (c >= 0) {
        const p = r.corners[c], y = p.x - r.center.x, g = p.y - r.center.y, w = y * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: w };
      }
      const d = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const p of d) {
        const y = Array.isArray(p == null ? void 0 : p.points) ? p.points : [];
        if (p.closed && y.length >= 3 && Zn(o, y)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((p == null ? void 0 : p.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < y.length - 1; w += 1)
          if (Pl(o, y[w], y[w + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((d) => br(d, o) <= 121);
      if (c >= 0) {
        const d = r.corners[c], p = d.x - r.center.x, y = d.y - r.center.y, g = p * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: g };
      }
      return Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((d) => br(d, o) <= 169);
      if (c) {
        const d = c.edge === "left" || c.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => br(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], d = c.x - r.center.x, p = c.y - r.center.y, y = d * p >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: y };
    }
    return br(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : Zn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function ku(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function xg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function wg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => xg(r, d))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!Zn({ x: s, y: c }, o.corners);
  }
  function ft(r) {
    if (pg(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? de("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? de("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? de("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? de(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? de("grabbing") : de("default");
      return;
    }
    if (wu()) {
      de("none");
      return;
    }
    if (h.mode === "frame" && h.primaryTool !== "cursor") {
      de("default");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      de("default");
      return;
    }
    const o = at(), s = o ? Ot(o) : null, c = o ? fr(o) : !1, d = c ? { kind: "none", cursor: "default" } : Js(s, r);
    if (!c && d.kind !== "none") {
      de(d.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Mu(r)) {
      de("default");
      return;
    }
    de(h.mode === "pano" ? "grab" : "default");
  }
  function Ue() {
    var w, N;
    if (!_e) return;
    const r = at(), o = Nn();
    if (!r && o.length === 0 || h.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Fa(), c = b1({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? As(o) : Ot(r),
      allLocked: Cs(o),
      selectedLocked: fr(r),
      activeAspect: ta(r),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Rt,
      isStickerHidden: ti,
      canRestoreSelectedToInitial: kp,
      iconSet: Te
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const d = (k, M, { requireFitsBelow: T = !0 } = {}) => {
      var be, Ce, Ee;
      const te = Number((be = c.anchor) == null ? void 0 : be.minX), B = Number((Ce = c.anchor) == null ? void 0 : Ce.maxX), K = Number((Ee = c.anchor) == null ? void 0 : Ee.maxY);
      if (![te, B, K].every(Number.isFinite)) return null;
      const le = Math.max(14, j.width - k - 14), me = W((te + B) * 0.5 - k * 0.5, 14, le), oe = K + 18;
      return !Number.isFinite(me) || !Number.isFinite(oe) || T && oe + M > j.height - 14 ? null : { left: me, top: oe };
    }, p = Math.max(1, Number(((w = h.menuSize) == null ? void 0 : w.w) || 220)), y = Math.max(1, Number(((N = h.menuSize) == null ? void 0 : N.h) || 40)), g = d(p, y, { requireFitsBelow: !1 });
    if (!g) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
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
  function eo() {
    ye.timer && (clearTimeout(ye.timer), ye.timer = 0), ye.target = null, P.tooltip.visible = !1, P.tooltip.text = "", P.tooltip.variant = "";
  }
  function Sg(r) {
    if (!De || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    P.tooltip.text = o, P.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var te, B;
      if (ye.target !== s || !De || !(s != null && s.isConnected)) return;
      const c = fe.getBoundingClientRect(), d = s.getBoundingClientRect(), p = 8, y = 12, g = Math.round(Number(((te = De.getBoundingClientRect()) == null ? void 0 : te.width) || 0)) || 100, w = Math.round(Number(((B = De.getBoundingClientRect()) == null ? void 0 : B.height) || 0)) || 24, N = !!s.closest(".pano-floating-left"), k = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let M = "", T = d.left - c.left + d.width * 0.5 - g * 0.5, $ = d.top - c.top - w - y;
      if (N)
        M = "tool-rail", T = d.right - c.left + 10, $ = d.top - c.top + d.height * 0.5 - w * 0.5, T = W(T, p, Math.max(p, c.width - g - p)), $ = W($, p, Math.max(p, c.height - w - p));
      else if (k) {
        M = "footer";
        const K = s.closest(".pano-paint-footer"), le = K ? K.getBoundingClientRect() : d;
        T = le.left - c.left + le.width * 0.5 - g * 0.5, $ = le.bottom - c.top + 5, T = W(T, p, Math.max(p, c.width - g - p)), $ = Math.max(p, $);
      }
      T = W(T, p, Math.max(p, c.width - g - p)), $ = Math.max(p, $), P.tooltip.left = T, P.tooltip.top = $, P.tooltip.variant = M, P.tooltip.visible = !0;
    });
  }
  const Lt = vs({
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
    getUnwrapRect: dr,
    onInteraction: () => {
      J.backgroundDirty = !0, J.dirty = !0;
    }
  });
  j.onpointerdown = (r) => {
    const o = ui(r);
    if (Za(o, !0), h.viewTween = null, Lt.state.inertia.active = !1, Lt.state.inertia.vx = 0, Lt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), h.mode === "frame")
        h.interaction = { kind: "pan_frame", last: o };
      else {
        const g = h.mode === "unwrap" ? o : Ja(r);
        h.interaction = { kind: "view", last: g, lastTs: performance.now() }, Lt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ft(o), j.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (h.mode === "pano") {
        const g = Ja(r);
        h.interaction = { kind: "view", last: g, lastTs: performance.now() }, Lt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), j.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (je && !je.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (_u() || qs())) {
      const g = h.primaryTool === "mask" ? "mask" : "paint", w = h.primaryTool === "mask" ? h.maskTool : h.paintTool, N = h.mode === "frame" && qs() ? Ke() : null, k = { kind: "ERP_GLOBAL" }, M = N ? Pn(o, N, performance.now()) : kn(o, performance.now());
      if (!M) {
        ft(o);
        return;
      }
      h.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: bi("live"),
        stroke: w === "lasso_fill" ? Nu(g, w, [M], k) : Su(g, w, [M], k)
      }, Hi();
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
    const s = Nn(), c = at(), d = s.length > 1 ? As(s) : c ? Ot(c) : null;
    if (h.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      h.interaction = { kind: "marquee_select", start: o, current: o }, ft(o), j.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (d != null && d.visible)) {
      if ((s.some((w) => fr(w)) ? { kind: "none" } : Js(d, o)).kind === "move") {
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
            frameSnapshot: Kt(ur(w.actionGroupId, w.layerKind)),
            center: (() => {
              var k, M;
              const N = Ot(w);
              return N != null && N.visible ? { x: Number(((k = N.center) == null ? void 0 : k.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ps(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: s.filter((w) => Bt(w)).map((w) => ({
            id: It(w.rasterObjectId || w.id || ""),
            snapshot: Kt(an().find((N) => String((N == null ? void 0 : N.id) || "") === It(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var k, M;
              const N = Ot(w);
              return N != null && N.visible ? { x: Number(((k = N.center) == null ? void 0 : k.x) || 0), y: Number(((M = N.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: tu(w)
          }))
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (d != null && d.visible)) {
      const g = fr(c) ? { kind: "none" } : Js(d, o);
      if (g.kind === "scale") {
        h.interaction = At(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Kt(Sn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Kt(ur(c.actionGroupId, c.layerKind)),
          cursor: g.cursor
        } : Bt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Kt(an().find((w) => String((w == null ? void 0 : w.id) || "") === It(c.rasterObjectId || c.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        h.interaction = {
          kind: g.kind,
          item: c,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        h.interaction = At(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: Kt(Sn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Kt(ur(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: d.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, ft(o), j.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
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
            frameSnapshot: Kt(ur(c.actionGroupId, c.layerKind))
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
            snapshot: Kt(an().find((N) => String((N == null ? void 0 : N.id) || "") === It(c.rasterObjectId || c.id || "")))
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
    const p = Mu(o);
    if (p) {
      const g = h.selectedId !== p.item.id;
      if (g && h.selectedId && (lt(), dn()), kr(p.item), t === "cutout" && g && (h.cutoutAspectOpen = !1), g && He(), Ue(), ge(), fr(p.item)) {
        ft(o);
        return;
      }
      h.interaction = {
        kind: At(p.item) ? "move_stroke_group" : Bt(p.item) ? "move_raster_object" : "move",
        item: p.item,
        offset: { x: o.x - p.geom.center.x, y: o.y - p.geom.center.y },
        startUv: At(p.item) || Bt(p.item) ? h.mode === "frame" ? (() => {
          const w = Ke();
          return w ? Pn(o, w, performance.now()) : null;
        })() : kn(o, performance.now()) : null,
        snapshot: At(p.item) ? Kt(Sn(p.item.actionGroupId, p.item.layerKind)) : Bt(p.item) ? Kt(an().find((w) => String((w == null ? void 0 : w.id) || "") === It(p.item.rasterObjectId || p.item.id || ""))) : null,
        frameSnapshot: At(p.item) ? Kt(ur(p.item.actionGroupId, p.item.layerKind)) : null
      }, ft(o), j.setPointerCapture(r.pointerId);
      return;
    }
    const y = !!h.selectedId;
    if (y && (lt(), dn()), ai(), y && He(), Ue(), ge(), h.mode === "pano") {
      const g = Ja(r);
      h.interaction = { kind: "view", last: g, lastTs: performance.now() }, Lt.startDrag(g.x, g.y, r.pointerId, performance.now()), ft(o), j.setPointerCapture(r.pointerId);
    }
  }, j.onpointermove = (r) => {
    var c, d, p, y, g, w, N, k, M, T, $, te, B, K, le, me, oe, be, Ce, Ee;
    const o = ui(r);
    if (Za(o, !0), !h.interaction) {
      ft(o);
      return;
    }
    ft(o);
    const s = h.interaction;
    if (s.kind === "paint_stroke") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      ke.forEach((ne) => {
        const ve = ui(ne);
        if (h.mode === "frame") {
          const Se = Ke(), Ie = Se ? Tt(Se) : null;
          if (Ie) {
            const Le = (ve.x - Ie.x) / Math.max(1, Ie.w), ze = (ve.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Le >= 0 && Le <= 1 && ze >= 0 && ze <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, vg(s));
          }
        }
        gg(s, ve, performance.now()) && (X = !0);
      }), X && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let X = !1;
      if (ke.forEach((ne) => {
        const ve = ui(ne);
        if (h.mode === "frame") {
          const Se = Ke(), Ie = Se ? Tt(Se) : null;
          if (Ie) {
            const Le = (ve.x - Ie.x) / Math.max(1, Ie.w), ze = (ve.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Le >= 0 && Le <= 1 && ze >= 0 && ze <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, _g(s));
          }
        }
        bg(s, ve, performance.now()) && (X = !0);
      }), X) {
        const ne = fn();
        ne && h.paintEngine.updateActiveStroke(s.stroke, ne), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ke = performance.now(), X = h.mode === "unwrap" ? o : Ja(r);
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
        const ne = Ke(), ve = Tt(ne);
        if (!ne || !ve) return;
        const Se = {
          x: W((ke - ve.x) / Math.max(1, ve.w), 0, 1),
          y: W((X - ve.y) / Math.max(1, ve.h), 0, 1)
        }, Ie = Us(ne, Se);
        if (!Ie) return;
        const Le = wo(Ie);
        s.item.yaw_deg = Le.yaw, s.item.pitch_deg = Le.pitch;
      } else if (h.mode === "unwrap") {
        const ne = dr(), ve = W((ke - ne.x) / Math.max(ne.w, 1), 0, 1), Se = W((X - ne.y) / Math.max(ne.h, 1), 0, 1);
        s.item.yaw_deg = $t(ve * 360 - 180), s.item.pitch_deg = W(90 - Se * 180, -90, 90);
      } else {
        const ne = Fs(ke, X), ve = wo(ne);
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
      const X = yn(Number(ke.u || 0), Number(s.startUv.u || 0)), ne = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Rc((c = s.item) == null ? void 0 : c.actionGroupId, X, ne, s.snapshot, (d = s.item) == null ? void 0 : d.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ke = h.mode === "frame" ? (() => {
        const ve = Ke();
        return ve ? Pn(o, ve, performance.now()) : null;
      })() : kn(o, performance.now());
      if (!ke || !s.startUv) return;
      const X = yn(Number(ke.u || 0), Number(s.startUv.u || 0)), ne = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Fc(((p = s.item) == null ? void 0 : p.rasterObjectId) || ((y = s.item) == null ? void 0 : y.id) || "", X, ne, s.snapshot) && (ci(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      pp(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((w = s.item) == null ? void 0 : w.id) || "", X, s.snapshot) && (ci(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ke = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), X = o.y - Number(((k = s.offset) == null ? void 0 : k.y) || 0);
      let ne = !1, ve = !1, Se = !1;
      const Ie = ke - Number(((M = s.startCenter) == null ? void 0 : M.x) || ke), Le = X - Number(((T = s.startCenter) == null ? void 0 : T.y) || X);
      for (const ze of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const We = (t === "cutout" ? ks() : Wn()).find((qe) => String((qe == null ? void 0 : qe.id) || "") === String(ze.id || ""));
        if (!We || !ut(We)) continue;
        const Ye = {
          x: Number((($ = ze.center) == null ? void 0 : $.x) || 0) + Ie,
          y: Number(((te = ze.center) == null ? void 0 : te.y) || 0) + Le
        };
        if (h.mode === "frame" && t === "cutout") {
          const qe = Ke(), Mt = Tt(qe);
          if (!qe || !Mt) continue;
          const Cr = {
            x: W((Ye.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: W((Ye.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, Vu = Us(qe, Cr);
          if (!Vu) continue;
          const Hu = wo(Vu);
          We.yaw_deg = Hu.yaw, We.pitch_deg = Hu.pitch;
        } else if (h.mode === "unwrap") {
          const qe = dr(), Mt = W((Ye.x - qe.x) / Math.max(qe.w, 1), 0, 1), Cr = W((Ye.y - qe.y) / Math.max(qe.h, 1), 0, 1);
          We.yaw_deg = $t(Mt * 360 - 180), We.pitch_deg = W(90 - Cr * 180, -90, 90);
        } else {
          const qe = Fs(Ye.x, Ye.y), Mt = wo(qe);
          We.yaw_deg = Mt.yaw, We.pitch_deg = Mt.pitch;
        }
        ne = !0;
      }
      for (const ze of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const We = {
          x: Number(((B = ze.center) == null ? void 0 : B.x) || 0) + Ie,
          y: Number(((K = ze.center) == null ? void 0 : K.y) || 0) + Le
        }, Ye = h.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Pn(We, Mt, performance.now()) : null;
        })() : kn(We, performance.now()), qe = ze.centerUv || null;
        if (Ye && qe) {
          const Mt = yn(Number(Ye.u || 0), Number(qe.u || 0)), Cr = Number(Ye.v || 0) - Number(qe.v || 0);
          Rc(ze.id, Mt, Cr, ze.snapshot, ze.layerKind, ze.frameSnapshot) && (ne = !0, ve = !0);
        }
      }
      for (const ze of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const We = {
          x: Number(((le = ze.center) == null ? void 0 : le.x) || 0) + Ie,
          y: Number(((me = ze.center) == null ? void 0 : me.y) || 0) + Le
        }, Ye = h.mode === "frame" ? (() => {
          const Mt = Ke();
          return Mt ? Pn(We, Mt, performance.now()) : null;
        })() : kn(We, performance.now()), qe = ze.centerUv || null;
        if (Ye && qe) {
          const Mt = yn(Number(Ye.u || 0), Number(qe.u || 0)), Cr = Number(Ye.v || 0) - Number(qe.v || 0);
          Fc(ze.id, Mt, Cr, ze.snapshot) && (ne = !0, Se = !0);
        }
      }
      ne && (ve ? Mn({ rebuildPaintEngine: !1 }) : Se ? ci() : Ft(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Oc((oe = s.item) == null ? void 0 : oe.actionGroupId, X, 0, s.snapshot, (be = s.item) == null ? void 0 : be.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ke = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * _r;
      r.shiftKey && (ke = Math.round(ke / 45) * 45), Oc((Ce = s.item) == null ? void 0 : Ce.actionGroupId, 1, ke, s.snapshot, (Ee = s.item) == null ? void 0 : Ee.layerKind, s.frameSnapshot) && (Mn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * X, 1, 179), s.item.vFOV_deg = W(s.startVFOV * X, 1, 179), s.item.aspect_id = zr(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = W(s.startHFOV * X, 1, 179), s.item.aspect_id = zr(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const X = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = W(s.startVFOV * X, 1, 179), s.item.aspect_id = zr(s.item), ut(s.item) && Ft(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let X = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * _r, ne = s.startRot - X;
      r.shiftKey && (ne = Math.round(ne / 45) * 45);
      const ve = ut(s.item) ? "rot_deg" : "roll_deg";
      s.item[ve] = ne, ut(s.item) && Ft(), ge({ localOnly: !0 });
    }
  }, j.onpointerup = () => {
    var o, s, c, d, p, y;
    const r = h.interaction;
    if (((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Hi();
      const g = Xs(h.interaction), w = !!h.interaction._hasCommittedSegments;
      if (g || w) {
        Mn();
        const N = String(((c = h.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
        if (N) {
          const M = Ut().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === N);
          M && (M.frame = null);
        }
        const k = fn();
        k && (g ? String(((d = h.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(k), su()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, k) : h.paintEngine.cancelActiveStroke(k)), lt(), dn(), He(), Ue(), e.setDirtyCanvas(!0, !0), ge();
      } else {
        const N = fn();
        N && h.paintEngine.cancelActiveStroke(N);
      }
    } else if (((p = h.interaction) == null ? void 0 : p.kind) === "marquee_select") {
      const g = ku(h.interaction.start, h.interaction.current), N = [
        ...t === "cutout" ? Hs().filter((k) => !rn(k)) : [...Wn()],
        ...up(),
        ...fp()
      ].filter((k) => wg(g, Ot(k)));
      yp(N, ((y = N[N.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && N.length && (h.cutoutAspectOpen = !1), He(), Ue(), ge();
    } else if (h.interaction && h.interaction.kind !== "view" && h.interaction.kind !== "pan_frame") {
      let g = !1;
      (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (g = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (g = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (g = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (g = !0), g && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Mn({ rebuildPaintEngine: !0 }) : ci()), lt(), dn(), e.setDirtyCanvas(!0, !0), Ws(), h.hqFrames = 1, Ue(), ge();
    }
    h.interaction = null, Hi(), r && r.kind === "view" && Lt.endDrag(performance.now()), La(), Ue(), ft(h.pointerPos), ge();
  }, j.onpointercancel = () => {
    var r, o, s;
    if (((r = h.interaction) == null ? void 0 : r.kind) === "view" && Lt.endDrag(performance.now()), ((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Hi();
      const c = fn();
      c && h.paintEngine.cancelActiveStroke(c);
    }
    h.interaction = null, Hi(), La(), ft(h.pointerPos), ge({ localOnly: !0 });
  }, j.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, j.onmousemove = (r) => {
    const o = ui(r);
    Za(o, !0), !h.interaction && ft(o);
  }, j.onmouseleave = () => {
    Za(h.pointerPos, !1), ft(h.pointerPos);
  }, j.onwheel = (r) => {
    if (h.mode === "frame") {
      const o = ui(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      fg(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    h.mode === "pano" && (Lt.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, j.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Mr(!0));
  }, j.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Ne.depth = 0, Mr(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((d) => qa(d));
    s && mu(s);
  };
  const Pu = (r) => {
    t !== "stickers" && t !== "cutout" || i || xs(r) && (Ne.depth += 1, Mr(!0), r.preventDefault());
  }, Au = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Ne.active && xs(r) && Mr(!0), Ne.active && r.preventDefault());
  }, Cu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Ne.active) return;
    Ne.depth = Math.max(0, Ne.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Ne.depth === 0 || o) && Mr(!1);
  }, Iu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Ne.depth = 0, Mr(!1), xs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", Pu, !0), window.addEventListener("dragover", Au, !0), window.addEventListener("dragleave", Cu, !0), window.addEventListener("drop", Iu, !0);
  function Zs() {
    const { canUndo: r, canRedo: o } = pu();
    ea(P.toolButtons, "value", "undo", { disabled: !r }), ea(P.toolButtons, "value", "redo", { disabled: !o });
  }
  const Tu = (r, o, s = !1) => {
    var g;
    const c = at(), d = Fa();
    if (!c || d === "stroke") return;
    const p = (((g = P.sidePanel) == null ? void 0 : g.params) || []).find((w) => w.key === r);
    if (!p || p.enabled === !1) return;
    let y = Number(o);
    Number.isNaN(y) && (y = 0), y = W(y, Number(p.min), Number(p.max)), r === "yaw_deg" && (y = $t(y)), c[r] = y, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (c.aspect_id = zr(c)), He(), ge(), s && lt();
  };
  he == null || he.addEventListener("click", async (r) => {
    var c, d, p, y, g, w, N, k, M;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = zt(o.getAttribute("data-coverage"));
      if (T === zt(v.coverage)) return;
      v.coverage = T, h.coverage = T, m && (m.value = String(T)), l ? J.backgroundDirty = !0 : (dn(), ug({
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
      T && (t === "stickers" ? $ = Wn().find((te) => String((te == null ? void 0 : te.id) || "") === T) || null : $ = ((p = Lc().find((te) => {
        var B;
        return String(((B = te == null ? void 0 : te.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : p.item) || null), kr($ || null), $ && !At($) && ws(
        $t(Number($.yaw_deg || 0)),
        W(Number($.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), He(), Ue(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const T = at(), $ = Fa();
      if (!T || $ === "stroke" || Nn().length > 1) return;
      const te = JSON.stringify(t === "cutout" && $ !== "image" ? Gc(T) : Tp(T));
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
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Xa(), He(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Xa(), He(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (N = P.sidePanel) != null && N.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", Xa(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", Xa(), He(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      hi();
      return;
    }
    if (s === "cancel-close") {
      hi();
      return;
    }
    s === "save-close" && (lg(), hi());
  }), he == null || he.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Tu(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), he == null || he.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Tu(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Qs = () => {
    const r = !!h.showGrid;
    ea(P.floatingButtons, "action", "toggle-grid", {
      icon: r ? Te.eye : Te.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Qs(), Y.addEventListener("click", (r) => {
    var g, w, N, k;
    if ((w = (g = r.target) == null ? void 0 : g.matches) != null && w.call(g, "[data-confirm-overlay]")) {
      const M = (N = P.confirmDialog) == null ? void 0 : N.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      h.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && at() && rn(at()) && (ai({ preservePanelValues: !0 }), He(), Ue()), Ys(), La(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const M = String(s.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = M, (M === "paint" || M === "mask") && ai({ preservePanelValues: !0 }), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const M = String(s.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && s.disabled) return;
        M === "undo" ? Ks(-1) : M === "redo" ? Ks(1) : M === "clear" ? tg() : M === "add" || M === "add-image" ? Ym() : M === "add-or-look" && Zm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const M = String(s.getAttribute("data-paint-tool") || "pen");
        h.paintTool = M, ai({ preservePanelValues: !0 }), sn[M] && (h.activeBrushPresetId = M), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ai({ preservePanelValues: !0 }), on(), He(), Ue(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const M = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        ng(M);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const M = Lo.find((T) => T.id === s.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        h.paintColor = hn(M.color), wn(!0), on();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), je && !je.hidden ? wn(!0) : R(), on();
        return;
      }
    }
    const c = String(((k = s == null ? void 0 : s.getAttribute) == null ? void 0 : k.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(L instanceof HTMLVideoElement)) return;
      if (ii(), L.paused) {
        ee.mode = "playback", ee.pendingPlaybackResume = !1, ee.resumeAfterScrub = !1;
        const M = Number(P.videoTransport.duration || L.duration || 0), T = Number(L.currentTime || ee.editorTime || 0), $ = M > 0 && T >= M - 1e-3 ? 0 : Number(ee.editorTime || T || 0), te = Math.max(bn(), 0.04);
        ee.editorTime = $, Math.abs(T - $) > te ? (ee.seeking = !1, ee.pendingPlaybackResume = !0, Es($)) : L.play().catch(() => {
        });
      } else
        L.pause(), ee.mode = "scrub", ee.resumeAfterScrub = !1, ee.pendingPlaybackResume = !1, ee.editorTime = Number(L.currentTime || 0), ri();
      Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Yn(),
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
        visible: Yn(),
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
        visible: Yn(),
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
        ig(M, T), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ws(), lt(), wt(), Ue(), ge();
        return;
      }
      if (c === "rotate-90") {
        const M = at();
        if (!M) return;
        ag(M), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ws(), lt(), wt(), Ue(), ge();
        return;
      }
      if (c === "bring-front") {
        og();
        return;
      }
      if (c === "send-back") {
        sg();
        return;
      }
      if (c === "duplicate") {
        rg();
        return;
      }
      if (c === "replace-image") {
        Xm();
        return;
      }
      if (c === "toggle-lock") {
        bp();
        return;
      }
      if (c === "back-initial") {
        Np();
        return;
      }
      if (c === "toggle-visible") {
        Sp();
        return;
      }
      if (c === "delete") {
        yu();
        return;
      }
    }
    if (c === "reset-view") {
      ws(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      h.showGrid = !h.showGrid, Yx(e == null ? void 0 : e.id, h.showGrid), Qs(), ge();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), kg();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const M = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = M, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = M ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), Fu(), ge();
      return;
    }
    const d = r.target.closest("[data-paint-history-index]");
    if (!d) return;
    const p = Number(d.getAttribute("data-paint-history-index")), y = h.customPaintHistory[p];
    y && (h.customPaintColor = hn(y), h.paintColor = hn(y), on());
  }), Y.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(L instanceof HTMLVideoElement)) return;
      ii();
      const p = W(Number(o.value || 0), 0, Number(P.videoTransport.duration || 0));
      ee.mode = "scrub", !ee.seeking && !L.paused && !L.ended && (ee.resumeAfterScrub = !0, L.pause()), ee.editorTime = p, Tc(p), Tn({
        ready: !!L.getAttribute("src"),
        playing: !1,
        visible: Yn(),
        currentTime: p,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(q.__panoFrameIdx || 0) > 0 && (J.backgroundDirty = !0, J.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), Es(p);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(L instanceof HTMLVideoElement)) return;
      const p = W(Number(s.value || 0), 0, 1);
      L.volume = p, L.muted = p <= 1e-4, Tn({
        ready: !!L.getAttribute("src"),
        playing: !L.paused && !L.ended,
        visible: Yn(),
        currentTime: ee.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: ee.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: L.muted,
        volume: p
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const p = Math.max(1, Math.min(120, Math.round(Number(c.value)))), y = mr(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[y] = p, on(), mg();
      return;
    }
    const d = r.target.closest("[data-paint-alpha-slider]");
    if (d) {
      const p = { ...h.customPaintColor, a: W(Number(d.value) / 100, 0, 1) };
      h.customPaintColor = hn(p), h.paintColor = hn(p), on();
    }
  }), Y.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(L instanceof HTMLVideoElement)) return;
      ee.pendingPlaybackResume = !!ee.resumeAfterScrub, ee.resumeAfterScrub = !1, ee.pendingPlaybackResume || (ee.mode = "scrub"), ee.seeking || (ee.pendingPlaybackResume ? (ee.pendingPlaybackResume = !1, ee.mode = "playback", L.play().catch(() => {
      })) : (ri(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Qa();
  }), Y.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Qa();
  }), Y.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Qa();
  }), Y.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Qa();
  }), Y.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !Y.contains(o) || ye.target !== o && (ye.target = o, ye.timer && clearTimeout(ye.timer), ye.timer = window.setTimeout(() => {
      ye.target === o && Sg(o);
    }, 220));
  }), Y.addEventListener("pointerout", (r) => {
    var c, d;
    const o = r.target.closest("[data-tip]");
    !o || ye.target !== o || (r.relatedTarget instanceof Element ? (d = (c = r.relatedTarget).closest) == null ? void 0 : d.call(c, "[data-tip]") : null) === o || eo();
  }), Y.addEventListener("pointerdown", () => {
    eo();
  });
  const Ng = (r, o) => {
    var g;
    if (!yt) return;
    const s = yt.getBoundingClientRect(), c = W((r - s.left) / Math.max(1, s.width), 0, 1), d = 1 - W((o - s.top) / Math.max(1, s.height), 0, 1), p = Cl(h.customPaintColor), y = { ...Al(p.h, c, d), a: Number(((g = h.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    h.customPaintColor = hn(y), h.paintColor = hn(y), on();
  }, Mg = (r) => {
    var p;
    if (!vt) return;
    const o = vt.getBoundingClientRect(), s = W((r - o.left) / Math.max(1, o.width), 0, 1), c = Cl(h.customPaintColor), d = { ...Al(s, c.s, c.v), a: Number(((p = h.customPaintColor) == null ? void 0 : p.a) ?? 1) };
    h.customPaintColor = hn(d), h.paintColor = hn(d), on();
  }, Eu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (p) => {
      p.pointerId === s && o(p);
    }, d = (p) => {
      p.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  yt && (yt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Eu(r, (o) => Ng(o.clientX, o.clientY));
  }), vt && (vt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Eu(r, (o) => Mg(o.clientX));
  }), Y.addEventListener("click", (r) => {
    var d;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (d = P.confirmDialog) == null ? void 0 : d.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const Du = () => {
    const r = !!h.fullscreen;
    ea(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Te.fullscreen_close : Te.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, to = (r) => {
    const o = !!r;
    h.fullscreen !== o && (h.fullscreen = o, Y.classList.toggle("pano-modal-fullscreen", o), o ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Qs(), Du(), _t(), ge());
  }, Ru = () => document.fullscreenElement === F, kg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        to(!h.fullscreen);
        return;
      }
      Ru() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = F.requestFullscreen) == null ? void 0 : r.call(F));
    } catch {
      to(!h.fullscreen);
    }
  }, Ou = () => {
    document.fullscreenEnabled && to(Ru());
  };
  document.addEventListener("fullscreenchange", Ou), Du();
  const Fu = () => {
    const r = !!h.outputPreviewExpanded;
    P.outputPreviewToggle.icon = r ? Te.fullscreen_close : Te.fullscreen, P.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Fu();
  const el = e.onExecuted, tl = e.onConnectionsChange;
  let nl = null, rl = null, il = null;
  !i && t === "stickers" && (il = (r = "sync") => {
    Kc(r);
  }, e.__panoExternalStickerSync = il, nl = function(...o) {
    var s;
    typeof el == "function" && el.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = nl, rl = function(...o) {
    var s;
    typeof tl == "function" && tl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = rl), i || id.set(String(e.id ?? "0"), () => Zc());
  let di = null;
  const hi = async () => di || (di = (async () => {
    var r, o, s, c, d, p, y, g, w, N, k;
    return id.delete(String(e.id ?? "0")), i || dn(), document.fullscreenElement === F && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Ou), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (d = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || d.call(c, !0, !0), (g = (y = (p = pn) == null ? void 0 : p.canvas) == null ? void 0 : y.setDirty) == null || g.call(y, !0, !0), eo(), Wm(), L instanceof HTMLVideoElement && L.pause(), Ge.forEach((M) => {
      try {
        M();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), (N = C == null ? void 0 : C.unmount) == null || N.call(C), (k = ie == null ? void 0 : ie.dispose) == null || k.call(ie), Mr(!1), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("keydown", zu, !0), window.removeEventListener("keydown", no, !0), window.removeEventListener("keyup", no, !0), window.removeEventListener("keydown", $u, !0), window.removeEventListener("dragenter", Pu, !0), window.removeEventListener("dragover", Au, !0), window.removeEventListener("dragleave", Cu, !0), window.removeEventListener("drop", Iu, !0), !i && t === "stickers" && (e.onExecuted === nl && (e.onExecuted = el), e.onConnectionsChange === rl && (e.onConnectionsChange = tl), e.__panoExternalStickerSync === il && (e.__panoExternalStickerSync = null)), E.unmount(), D.remove(), cg(), di = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), di = null, !1)), di), Lu = (r) => {
    var o, s, c, d;
    if (r.key === "Escape") {
      if (h.fullscreen && document.fullscreenElement === F) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (c = r.stopImmediatePropagation) == null || c.call(r), to(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (d = r.stopImmediatePropagation) == null || d.call(r), hi();
    }
  }, zu = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const y = r.target, g = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || y != null && y.isContentEditable || !at() || (yu(), r.preventDefault(), r.stopPropagation());
  }, no = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    h.marqueeModifier !== o && (h.marqueeModifier = o, ft(h.pointerPos));
  }, $u = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, d = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: p, canRedo: y } = pu();
    r.shiftKey && !y || !r.shiftKey && !p || (Ks(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Lu, !0), window.addEventListener("keydown", zu, !0), window.addEventListener("keydown", no, !0), window.addEventListener("keyup", no, !0), window.addEventListener("keydown", $u, !0), F.addEventListener("pointerdown", (r) => {
    r.target === F && hi();
  });
  function En(r, o, { rollbackState: s = !1 } = {}) {
    let c = "";
    try {
      s && (c = JSON.stringify(v)), o();
    } catch (d) {
      if (c)
        try {
          const p = JSON.parse(c);
          Object.keys(v).forEach((y) => delete v[y]), Object.assign(v, p), i || dn();
        } catch (p) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, p);
        }
      P.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, d);
    }
  }
  En("cutout-focus", Rp), !i && t === "stickers" && En("external-sticker-sync", () => Kc("open"), { rollbackState: !0 }), Jm().catch((r) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), En("history", lt), En("undo-redo", Zs), En("paint-ui", on), En("side-panel", He), En("look-at-frame", Rs), En("video-source", ii), En("canvas-size", du), En("cursor", () => ft(h.pointerPos)), ge(), J.rafId = requestAnimationFrame(hu);
}
function ud(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (b) => {
    var _, x;
    try {
      (_ = b.__panoDomRestore) == null || _.call(b);
    } catch {
    }
    try {
      (x = b.__panoLegacyRestore) == null || x.call(b);
    } catch {
    }
    b.__panoDomPreview = null, b.__panoLegacyPreviewHooked = !1, b.__panoPreviewHooked = !1, b.__panoPreviewAttached = !1, b.__panoPreviewMountKey = null;
  };
  function l(b) {
    var A;
    const _ = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === _) return;
    a(b), n === "PanoramaStickers" && tw(b), Cc(b), rw(b, is);
    const S = _n(b, is);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (O) => {
        var z;
        const V = v ? v(O) : void 0;
        return (z = b.setDirtyCanvas) == null || z.call(b, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      const v = _n(b, "bg_color");
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), Ql(b, i, () => ya(b, "stickers"));
      {
        b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
        return;
      }
    }
    Ql(b, i, () => ya(b, "cutout")), Yv(b, {
      buttonText: i,
      onOpen: () => ya(b, "cutout")
    }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const b = u ? u.apply(this, arguments) : void 0;
    return l(this), b;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const b = f ? f.apply(this, arguments) : void 0;
    return this.widgets && l(this), b;
  };
  const m = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const b = m ? m.apply(this, arguments) : void 0;
    return this.widgets && l(this), b;
  };
}
function gw(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function bw(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Cc(e), Ql(e, "Open Preview", () => ya(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Wv(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => ya(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
pn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && ud(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && ud(e, t, "PanoramaCutout", "Open Cutout Editor"), qo(n) && gw(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Cc(e), qo(t) && bw(e);
  }
});
